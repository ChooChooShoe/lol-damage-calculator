import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = "K'Sante";

export default {
  'Dauntless Instinct': {
    name: 'Dauntless Instinct',
    display_name: 'Dauntless Instinct',
    champion: "K'Sante",
    skill: 'I',
    image: {
      full: 'Icons_KSante_P.png',
      sprite: 'passive2.png',
      group: 'passive',
      x: 192,
      y: 0,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="K\'Sante" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/K%27Sante/LoL" title="K\'Sante\'s"><img alt="K\'Sante\'s" src="/wiki/images/K%27Sante_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/K%27Sante/LoL" title="K\'Sante/LoL">K\'Sante\'s</a></span></span> abilities mark enemies hit for a short time. His basic attacks consume the mark to deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> based on the <span style="color: #1F995C; white-space:normal">target\'s <b>maximum</b> health</span>.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="K\'Sante" data-ability="All Out" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/K%27Sante/LoL#All_Out" title="All Out"><img alt="All Out" src="/wiki/images/K%27Sante_All_Out.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/K%27Sante/LoL#All_Out" title="K\'Sante/LoL">All Out</a></span></span> Bonus:</b></span> The damage dealt upon consuming a mark is increased based on <b>K\'Sante\'s</b> <b>bonus</b> <span style="color:yellow; white-space:normal">armor</span> and <span style="color: #00FFFF; white-space:normal">magic resist</span>. The mark damage is converted to <span style="color: #F9966B; white-space:normal">true damage</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Dauntless_Instinct.png',
        description:
          "Innate: K'Sante's abilities mark enemies hit for 4 seconds. His basic attacks against marked enemies are empowered to gain  25 bonus range and consume the mark on-hit, dealing 5 − 20 (based on level) (+ 1 / 1.33 / 1.66 / 2% (based on level) of target's maximum health) bonus physical damage.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>K\'Sante\'s</b> <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> mark enemies hit for 4 seconds. His <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack"><a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a></span> against marked enemies are empowered to gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;25 <b>bonus</b> range</span> and consume the mark <a href="/wiki/On-hit" class="mw-redirect" title="On-hit">on-hit</a>, dealing <span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="5;" data-finish="20;" data-bot_values="5;5.88;6.76;7.65;8.53;9.41;10.29;11.18;12.06;12.94;13.82;14.71;15.59;16.47;17.35;18.24;19.12;20" data-top_values="">5 − 20 (based on level)</span></span> <span style="color: #1F995C; white-space:normal">(+&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="1% at level 1, then +0.33% at level 6, then +0.33% at level 11, then +0.34% at level 16" data-bot_values="1;1.33;1.66;2" data-top_values="1;6;11;16" data-bot_key="%">1 / 1.<small>33</small> / 1.<small>66</small> / 2% (based on level)</span> of target\'s <b>maximum</b> health)</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Innate:',
            raw: "K'Sante's abilities mark enemies hit for 4 seconds",
            values: 4,
            units: 'kindredMarks',
            unitsText: 'abilities mark enemies hit for 4 seconds',
            pre: "K'Sante's abilities mark enemies hit for 4 seconds",
          },
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: "His basic attacks against marked enemies are empowered to gain  25 bonus range and consume the mark on-hit, dealing 5 − 20 (based on level) (+ 1 / 1.33 / 1.66 / 2% (based on level) of target's maximum health) bonus physical damage.",
            healType: 'PhysicalVamp',
            values: [
              5, 5.88, 6.76, 7.65, 8.53, 9.41, 10.29, 11.18, 12.06, 12.94,
              13.82, 14.71, 15.59, 16.47, 17.35, 18.24, 19.12, 20,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'bonus physical damage.',
            pre: 'His basic attacks against marked enemies are empowered to gain  25 bonus range and consume the mark on-hit, dealing 5 − 20',
            post: 'bonus physical damage.',
            children: [
              {
                values: [],
                valuesIsPercent: true,
                basedOn: 'level',
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of target's maximum health",
                pre: '+ 1 / 1.33 / 1.66 / 2%',
                post: "of target's maximum health",
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
          "All Out Bonus: Both the attack's damage and the mark damage are increased by 35% (+ 20% per 100 bonus armor) (+ 20% per 100 bonus magic resistance). The bonus damage dealt by consuming a mark is converted to  true damage.",
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="K\'Sante" data-ability="All Out" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/K%27Sante/LoL#All_Out" title="All Out"><img alt="All Out" src="/wiki/images/K%27Sante_All_Out.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/K%27Sante/LoL#All_Out" title="K\'Sante/LoL">All Out</a></span></span> Bonus:</b></span> Both the <span style="color:orange; white-space:normal">attack\'s damage</span> and the mark damage are increased by 35% <span style="color:yellow; white-space:normal">(+&nbsp;20% per 100 <b>bonus</b> armor)</span> <span style="color: #00FFFF; white-space:normal">(+&nbsp;20% per 100 <b>bonus</b> magic resistance)</span>. The <b>bonus</b> damage dealt by consuming a mark is converted to <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal">true damage</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'All Out Bonus:',
            raw: "Both the attack's damage and the mark damage are increased by 35% (+ 20% per 100 bonus armor) (+ 20% per 100 bonus magic resistance)",
            damagetype: 'Magic',
            values: 3,
            valuesIsPercent: true,
            units: 'kindredMarks',
            unitsText:
              "the attack's damage and the mark damage are increased by 35",
            pre: "Both the attack's damage and the mark damage are increased by 35%",
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                units: 'bonus_armor',
                unitsText: 'per 100 bonus armor',
                pre: '+ 20% per 100 bonus armor',
              },
              {
                values: 20,
                valuesIsPercent: true,
                units: 'bonus_mr',
                unitsText: 'per 100 bonus magic resistance',
                pre: '+ 20% per 100 bonus magic resistance',
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
    damagetype:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Physical damage"><a href="/wiki/Physical_damage" title="Physical damage"><img alt="Attack damage.png" src="/wiki/images/Attack_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Physical_damage" title="Physical damage">Physical</a></span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True damage"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration.png" src="/wiki/images/Hybrid_penetration.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/True_damage" title="True damage">True</a></span>',
    spelleffects: 'proc',
    spellshield: 'Special',
    notes:
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block the mark\'s application, but not the mark\'s consumption from an attack.\n<ul><li>The empowered attack can be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span>, and missed while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span> but the mark will not be consumed.</li>\n<li>The empowered attack cannot <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>.</li>\n<li>Starting the empowered attack while the mark is about to time out will not extend the mark duration, but still complete the attack and apply the bonus damage.</li></ul>',
  },
  'Ntofo Strikes': {
    name: 'Ntofo Strikes',
    display_name: 'Ntofo Strikes',
    champion: "K'Sante",
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'KSanteQ.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 96,
      y: 144,
      w: 48,
      h: 48,
    },
    range: '465',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Q1 rectangle width">150</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Q3 missile width">140</span>',
    cast_time:
      '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_label="cast time" data-top_label="bonus health" data-displayformula="The cast time is reduced by 1/9000th of a second for each point of bonus health, capped at 1800 bonus health. Note that some values on the following table are rounded for easier reading." data-bot_values="0.45;0.44;0.43;0.42;0.41;0.39;0.38;0.37;0.36;0.35;0.34;0.33;0.32;0.31;0.29;0.28;0.27;0.26;0.25" data-top_values="0;100;200;300;400;500;600;700;800;900;1000;1100;1200;1300;1400;1500;1600;1700;1800">0.<small>45</small> − 0.<small>25</small> (based on <b>bonus</b> health)</span>',
    cost: '15',
    costtype: 'Mana',
    static:
      '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_label="cooldown" data-top_label="bonus resistance" data-displayformula="The cooldown is reduced by 0.007 seconds for each point of bonus armor and magic resist, capped at 250 bonus resistances. Note that some values on the following table are rounded for easier reading." data-bot_values="3.5;3.33;3.15;2.98;2.8;2.63;2.45;2.28;2.1;1.93;1.75" data-top_values="0;25;50;75;100;125;150;175;200;225;250">3.<small>5</small> − 1.<small>75</small> (based on <b>bonus</b> resistances)</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="K\'Sante" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/K%27Sante/LoL" title="K\'Sante"><img alt="K\'Sante" src="/wiki/images/K%27Sante_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/K%27Sante/LoL" title="K\'Sante/LoL">K\'Sante</a></span></span> slams his ntofo down in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> enemies hit.',
      'If this hits at least one enemy, he generates a <a href="/wiki/Stack" title="Stack">stack</a> for a few seconds. At 2 stacks, the next <i>Ntofo Strikes</i> consumes them all to become empowered with a new effect.',
      '<span class="template_sbc"><b>Empowered Active:</b></span> <b>K\'Sante</b> fires a shockwave that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulls</a></span> enemies hit toward him.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="K\'Sante" data-ability="All Out" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/K%27Sante/LoL#All_Out" title="All Out"><img alt="All Out" src="/wiki/images/K%27Sante_All_Out.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/K%27Sante/LoL#All_Out" title="K\'Sante/LoL">All Out</a></span></span> Bonus:</b></span> <i>Ntofo Strikes\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is reduced, but it no longer slows enemies hit.',
    ],
    description: [
      {
        icon: "/wiki/images/K'Sante_Ntofo_Strikes.png",
        description:
          "Active: K'Sante slams his ntofo down in the target direction that deals physical damage to enemies hit and  slows them by 80% for 0.5 seconds.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>K\'Sante</b> slams his ntofo down in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 80% for 0.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: "K'Sante slams his ntofo down in the target direction that deals physical damage to enemies hit and  slows them by 80% for 0.5 seconds.",
            damagetype: 'Physical',
            values: 8,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'for 0.5 seconds.slams his ntofo down in the target direction that deals physical damage to enemies hit and  slows them by 80',
            pre: "K'Sante slams his ntofo down in the target direction that deals physical damage to enemies hit and  slows them by 80% for 0.5 seconds.",
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values:
              '50 / 75 / 100 / 125 / 150 (+ 40% AD) (+ 30% bonus armor) (+ 30% bonus magic resistance)',
            valuesHTML:
              '50 / 75 / 100 / 125 / 150 <span style="color:orange; white-space:normal">(+&nbsp;40% AD)</span> <span style="color:yellow; white-space:normal">(+&nbsp;30% <b>bonus</b> armor)</span> <span style="color: #00FFFF; white-space:normal">(+&nbsp;30% <b>bonus</b> magic resistance)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '50 / 75 / 100 / 125 / 150 (+ 40% AD) (+ 30% bonus armor) (+ 30% bonus magic resistance)',
            damagetype: 'Physical',
            values: [50, 75, 100, 125, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 75 / 100 / 125 / 150',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 40% AD',
              },
              {
                values: 30,
                valuesIsPercent: true,
                units: 'bonus_armor',
                unitsText: 'bonus armor',
                pre: '+ 30% bonus armor',
              },
              {
                values: 30,
                valuesIsPercent: true,
                units: 'bonus_mr',
                unitsText: 'bonus magic resistance',
                pre: '+ 30% bonus magic resistance',
              },
            ],
          },
        ],
      },
      {
        icon: "/wiki/images/K'Sante_Ntofo_Strikes_2.png",
        description:
          "If this hits at least one enemy, K'Sante generates a stack for 6 seconds, stacking up to 2 times and refreshing on subsequent hits. At 2 stacks, the next Ntofo Strikes consumes them all to become empowered with a new effect.",
        descriptionHTML:
          'If this hits at least one enemy, <b>K\'Sante</b> generates a <a href="/wiki/Stack" title="Stack">stack</a> for 6 seconds, stacking up to 2 times and refreshing on subsequent hits. At 2 stacks, the next <i>Ntofo Strikes</i> consumes them all to become empowered with a new effect.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Line 1:',
            raw: "If this hits at least one enemy, K'Sante generates a stack for 6 seconds, stacking up to 2 times and refreshing on subsequent hits",
            min: 0,
            max: 2,
            description:
              "If this hits at least one enemy, K'Sante generates a stack for 6 seconds, stacking up to 2 times and refreshing on subsequent hits",
            values: 6,
            units: 'genericStacks',
            unitsText:
              "this hits at least one enemy, K'Sante generates a stack for 6 seconds, stacking up to 2 times and refreshing on subsequent hits",
            pre: "If this hits at least one enemy, K'Sante generates a stack for 6 seconds, stacking up to 2 times and refreshing on subsequent hits",
          },
          {
            effectType: 'Stacks',
            name: 'Line 2:',
            raw: 'At 2 stacks, the next Ntofo Strikes consumes them all to become empowered with a new effect.',
            min: 0,
            max: 10,
            description:
              'At 2 stacks, the next Ntofo Strikes consumes them all to become empowered with a new effect.',
            values: 2,
            units: 'genericStacks',
            unitsText:
              '2 stacks, the next Ntofo Strikes consumes them all to become empowered with a new effect.',
            pre: 'At 2 stacks, the next Ntofo Strikes consumes them all to become empowered with a new effect.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: "/wiki/images/K'Sante_Ntofo_Strikes_3.png",
        description:
          "Empowered Active: K'Sante fires a shockwave in the target direction that applies the same effects to enemies hit, but also  pulls them towards him over 0.65 seconds and  stuns them for 1 second.",
        descriptionHTML:
          '<span class="template_sbc"><b>Empowered Active:</b></span> <b>K\'Sante</b> fires a shockwave in the target direction that applies the same effects to enemies hit, but also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulls</a></span> them towards him over 0.<small>65</small> seconds and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> them for 1 second.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "All Out Bonus: Ntofo Strikes's  cooldown is reduced by 1 second, up to a minimum of 1.33 seconds, but it will no longer slow all targets hit.",
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="K\'Sante" data-ability="All Out" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/K%27Sante/LoL#All_Out" title="All Out"><img alt="All Out" src="/wiki/images/K%27Sante_All_Out.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/K%27Sante/LoL#All_Out" title="K\'Sante/LoL">All Out</a></span></span> Bonus:</b></span> <i>Ntofo Strikes\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is reduced by 1 second, up to a minimum of 1.<small>33</small> seconds, but it will no longer slow all targets hit.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'All Out Bonus:',
            raw: "Ntofo Strikes's  cooldown is reduced by 1 second, up to a minimum of 1.33 seconds, but it will no longer slow all targets hit.",
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              "Strikes's  cooldown is reduced by 1 second, up to a minimum of 1.33 seconds, but it will no longer slow all targets hit.",
            pre: "Ntofo Strikes's  cooldown is reduced by 1 second, up to a minimum of 1.33 seconds, but it will no longer slow all targets hit.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Ntofo Strikes partially  resets K'Sante's basic attack timer. While  All Out, it fully resets the timer.",
        descriptionHTML:
          '<i>Ntofo Strikes partially <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>K\'Sante\'s</b> basic attack timer. While <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="K\'Sante" data-ability="All Out" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/K%27Sante/LoL#All_Out" title="All Out"><img alt="All Out" src="/wiki/images/K%27Sante_All_Out.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/K%27Sante/LoL#All_Out" title="K\'Sante/LoL">All Out</a></span></span>, it fully resets the timer.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies, Self',
    damagetype: 'Physical',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'special',
    notes:
      '* This ability will cast from wherever the caster is at the end of the cast time.\n<ul><li>If <i>Ntofo Strikes</i> hits no more than one enemy champion, <b>K\'Sante</b> will be ordered an attack command against them.</li>\n<li>The basic attack reset is not considered one for <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Hail of Blades" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hail_of_Blades_(Rune)" title="Hail of Blades"><img alt="Hail of Blades" src="/wiki/images/Hail_of_Blades_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Hail_of_Blades_(Rune)" class="mw-redirect" title="Hail of Blades (Rune)">Hail of Blades</a></span></span>.</li>\n<li>Temporary increases/decreases in bonus resistances will count for reducing/increasing <i>Ntofo Strikes\'</i> cooldown.</li>\n<li>Only the empowered active is a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">projectile</a></span>.</li></ul>',
  },
  'Path Maker': {
    name: 'Path Maker',
    display_name: 'Path Maker',
    champion: "K'Sante",
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'KSanteW.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 144,
      y: 144,
      w: 48,
      h: 48,
    },
    range: '100 / 450',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Knock back speed">800</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dash speed">1000</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dash speed during All Out">1800</span>',
    cast_time: 'none',
    cost: '75 / 80 / 85 / 90 / 95',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">24 / 22 / 20 / 18 / 16</span>',
    blurb: [
      '<span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="K\'Sante" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/K%27Sante/LoL" title="K\'Sante"><img alt="K\'Sante" src="/wiki/images/K%27Sante_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/K%27Sante/LoL" title="K\'Sante/LoL">K\'Sante</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">charges</a></span> up briefly, during which he gains damage reduction. <i>Path Maker</i> can be recast within the duration, and does so automatically afterwards. The charge cannot be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span>.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>K\'Sante</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them back</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them briefly, based on charge time.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="K\'Sante" data-ability="All Out" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/K%27Sante/LoL#All_Out" title="All Out"><img alt="All Out" src="/wiki/images/K%27Sante_All_Out.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/K%27Sante/LoL#All_Out" title="K\'Sante/LoL">All Out</a></span></span> Bonus:</b></span> Upon entering <i>All Out</i>, <i>Path Maker\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is refreshed. <i>Path Maker\'s</i> damage and damage reduction are increased, and its charge and dash speed are doubled, but it no longer stuns or knocks back.',
    ],
    description: [
      {
        icon: '/wiki/images/Path_Maker.png',
        description:
          "Active: K'Sante  charges for up to 1 second, during which he increases Path Maker's range, damage, and  stun duration over the first 0.85 seconds of the channel. During this time, he gains  displacement immunity and 25% (+ 10% per 100 bonus armor) (+ 10% per 100 bonus magic resistance) (+ 1% per 100 bonus health) damage reduction.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>K\'Sante</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">charges</a></span> for up to 1 second, during which he increases <i>Path Maker\'s</i> range, damage, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> duration over the first 0.<small>85</small> seconds of the channel. During this time, he gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span> and 25% <span style="color:yellow; white-space:normal">(+&nbsp;10% per 100 <b>bonus</b> armor)</span> <span style="color: #00FFFF; white-space:normal">(+&nbsp;10% per 100 <b>bonus</b> magic resistance)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;1% per 100 <b>bonus</b> health)</span> damage reduction.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: "K'Sante  charges for up to 1 second, during which he increases Path Maker's range, damage, and  stun duration over the first 0.85 seconds of the channel",
            damagetype: 'None',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              "charges for up to 1 second, during which he increases Path Maker's range, damage, and  stun duration over the first 0.85 seconds of the channel",
            pre: "K'Sante  charges for up to 1 second, during which he increases Path Maker's range, damage, and  stun duration over the first 0.85 seconds of the channel",
          },
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: 'During this time, he gains  displacement immunity and 25% (+ 10% per 100 bonus armor) (+ 10% per 100 bonus magic resistance) (+ 1% per 100 bonus health) damage reduction.',
            healType: 'BonusHealth',
            values: 2,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'damage reduction.',
            pre: 'During this time, he gains  displacement immunity and 25%',
            post: 'damage reduction.',
            children: [
              {
                values: 10,
                valuesIsPercent: true,
                units: 'bonus_armor',
                unitsText: 'per 100 bonus armor',
                pre: '+ 10% per 100 bonus armor',
              },
              {
                values: 10,
                valuesIsPercent: true,
                units: 'bonus_mr',
                unitsText: 'per 100 bonus magic resistance',
                pre: '+ 10% per 100 bonus magic resistance',
              },
              {
                values: 1,
                valuesIsPercent: true,
                units: 'bonus_hp',
                unitsText: 'per 100 bonus health',
                pre: '+ 1% per 100 bonus health',
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
          "Path Maker can be recast within the duration, and does so automatically afterwards. Path Maker's charge cannot be  interrupted by  crowd control.",
        descriptionHTML:
          '<i>Path Maker</i> can be recast within the duration, and does so automatically afterwards. <i>Path Maker\'s</i> charge cannot be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span> by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Recast: K'Sante  dashes in the target direction, though not through terrain, dealing physical damage to enemies he passes through,  carrying them alongside him, and  stunning them for a duration. This damage is capped at 50 − 475 (based on level) against  monsters.",
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>K\'Sante</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction, though not through terrain, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies he passes through, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">carrying</a></span> them alongside him, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for a duration. This damage is capped at <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="50;" data-finish="475;" data-bot_values="50;75;100;125;150;175;200;225;250;275;300;325;350;375;400;425;450;475" data-top_values="">50 − 475 (based on level)</span> against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'This damage is capped at 50 − 475 (based on level) against  monsters.',
            values: [
              50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350,
              375, 400, 425, 450, 475,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'against  monsters.',
            pre: 'This damage is capped at 50 − 475',
            post: 'against  monsters.',
          },
        ],
        leveling: [
          {
            name: 'Minimum Physical Damage:',
            values: "2 / 2.25 / 2.5 / 2.75 / 3% of target's maximum health",
            valuesHTML:
              '<span style="color: #1F995C; white-space:normal">2 / 2.<small>25</small> / 2.<small>5</small> / 2.<small>75</small> / 3% of target\'s <b>maximum</b> health</span>',
          },
          {
            name: 'Minimum Stun Duration:',
            values: '0.3 / 0.35 / 0.4 / 0.45 / 0.5',
            valuesHTML:
              '0.<small>3</small> / 0.<small>35</small> / 0.<small>4</small> / 0.<small>45</small> / 0.<small>5</small>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Minimum Physical Damage:',
            raw: "2 / 2.25 / 2.5 / 2.75 / 3% of target's maximum health",
            healType: 'PhysicalVamp',
            values: [2, 2.25, 2.5, 2.75, 3],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: "2 / 2.25 / 2.5 / 2.75 / 3% of target's maximum health",
          },
          {
            effectType: 'Unique',
            name: 'Minimum Stun Duration:',
            raw: '0.3 / 0.35 / 0.4 / 0.45 / 0.5',
            values: [0.3, 0.35, 0.4, 0.45, 0.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '0.3 / 0.35 / 0.4 / 0.45 / 0.5',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "All Out Bonus: Path Maker no longer applies its  knock back and  stun, but it deals bonus physical damage and its damage reduction is increased to 30% (+ 12% per 100 bonus armor) (+ 12% per 100 bonus magic resistance) (+ 1.2% per 100 bonus health), and has twice the charge speed and dash speed. Upon entering All Out, Path Maker's  cooldown is refreshed.",
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="K\'Sante" data-ability="All Out" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/K%27Sante/LoL#All_Out" title="All Out"><img alt="All Out" src="/wiki/images/K%27Sante_All_Out.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/K%27Sante/LoL#All_Out" title="K\'Sante/LoL">All Out</a></span></span> Bonus:</b></span> <i>Path Maker</i> no longer applies its <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock back</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span>, but it deals <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> and its damage reduction is increased to 30% <span style="color:yellow; white-space:normal">(+&nbsp;12% per 100 <b>bonus</b> armor)</span> <span style="color: #00FFFF; white-space:normal">(+&nbsp;12% per 100 <b>bonus</b> magic resistance)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;1.<small>2</small>% per 100 <b>bonus</b> health)</span>, and has twice the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Reduced to 0.425 seconds">charge speed</span> and dash speed. Upon entering <i>All Out</i>, <i>Path Maker\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is refreshed.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'All Out Bonus:',
            raw: 'Path Maker no longer applies its  knock back and  stun, but it deals bonus physical damage and its damage reduction is increased to 30% (+ 12% per 100 bonus armor) (+ 12% per 100 bonus magic resistance) (+ 1.2% per 100 bonus health), and has twice the charge speed and dash speed',
            healType: 'PhysicalVamp',
            values: 3,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: ', and has twice the charge speed and dash speed',
            pre: 'Path Maker no longer applies its  knock back and  stun, but it deals bonus physical damage and its damage reduction is increased to 30%',
            post: ', and has twice the charge speed and dash speed',
            children: [
              {
                values: 12,
                valuesIsPercent: true,
                units: 'bonus_armor',
                unitsText: 'per 100 bonus armor',
                pre: '+ 12% per 100 bonus armor',
              },
              {
                values: 12,
                valuesIsPercent: true,
                units: 'bonus_mr',
                unitsText: 'per 100 bonus magic resistance',
                pre: '+ 12% per 100 bonus magic resistance',
              },
              {
                values: 1.2,
                valuesIsPercent: true,
                units: 'bonus_hp',
                unitsText: 'per 100 bonus health',
                pre: '+ 1.2% per 100 bonus health',
              },
            ],
          },
        ],
        leveling: [
          {
            name: 'Minimum Bonus Physical Damage:',
            values: '25 / 35 / 45 / 55 / 65 (+ 50% AD)',
            valuesHTML:
              '25 / 35 / 45 / 55 / 65 <span style="color:orange; white-space:normal">(+&nbsp;50% AD)</span>',
          },
          {
            name: 'Minimum Total Physical Damage:',
            values:
              "25 / 35 / 45 / 55 / 65 (+ 50% AD) (+ 2 / 2.25 / 2.5 / 2.75 / 3% of target's maximum health)",
            valuesHTML:
              '25 / 35 / 45 / 55 / 65 <span style="color:orange; white-space:normal">(+&nbsp;50% AD)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;2 / 2.<small>25</small> / 2.<small>5</small> / 2.<small>75</small> / 3% of target\'s <b>maximum</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Minimum Bonus Physical Damage:',
            raw: '25 / 35 / 45 / 55 / 65 (+ 50% AD)',
            damagetype: 'Physical',
            values: [25, 35, 45, 55, 65],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 35 / 45 / 55 / 65',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 50% AD',
              },
            ],
          },
          {
            effectType: 'Heal',
            name: 'Minimum Total Physical Damage:',
            raw: "25 / 35 / 45 / 55 / 65 (+ 50% AD) (+ 2 / 2.25 / 2.5 / 2.75 / 3% of target's maximum health)",
            healType: 'PhysicalVamp',
            values: [25, 35, 45, 55, 65],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 35 / 45 / 55 / 65',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 50% AD',
              },
              {
                values: [2, 2.25, 2.5, 2.75, 3],
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of target's maximum health",
                pre: "+ 2 / 2.25 / 2.5 / 2.75 / 3% of target's maximum health",
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Ntofo Strikes and  All Out can be cast during the dash. Path Maker's recast can be used while affected by  cast-inhibiting crowd control.",
        descriptionHTML:
          '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="K\'Sante" data-ability="Ntofo Strikes" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/K%27Sante/LoL#Ntofo_Strikes" title="Ntofo Strikes"><img alt="Ntofo Strikes" src="/wiki/images/K%27Sante_Ntofo_Strikes.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/K%27Sante/LoL#Ntofo_Strikes" title="K\'Sante/LoL">Ntofo Strikes</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="K\'Sante" data-ability="All Out" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/K%27Sante/LoL#All_Out" title="All Out"><img alt="All Out" src="/wiki/images/K%27Sante_All_Out.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/K%27Sante/LoL#All_Out" title="K\'Sante/LoL">All Out</a></span></span> can be cast during the dash. Path Maker\'s recast can be used while affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast-inhibiting crowd control"><a href="/wiki/Crowd_control#Disrupting" title="Crowd control#Disrupting"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disrupting" title="Crowd control">cast-inhibiting crowd control</a></span>.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Self, Enemies',
    damagetype: 'Physical',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes:
      '* <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="K\'Sante" data-ability="All Out" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/K%27Sante/LoL#All_Out" title="All Out\'s"><img alt="All Out\'s" src="/wiki/images/K%27Sante_All_Out.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/K%27Sante/LoL#All_Out" title="K\'Sante/LoL">All Out\'s</a></span></span> duration is increased by 2 seconds if it were to expire during <i>Path Maker\'s</i> charge.\n<ul><li><i>Path Maker</i> cancels any existing movement or attack commands. However, new inputs given during the charge will be retained once the dash ends, except when the dash hits only one enemy champion. If <i>Path Maker</i> hits only one enemy champion <b>K\'Sante</b> will be ordered to basic attack them afterwards.</li>\n<li>If <b>K\'Sante</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> during the charge, the dash is interrupted but any enemies at his blink point will be affected by <i>Path Maker\'s</i> effects only if they were within the maximum charged distance.\n<ul><li>Enemies outside the charge range cannot be hit this way.</li>\n<li>Targets hit are knocked back in the original target direction of <i>Path Maker</i>.\n<ul><li>The displacement distance is longer than intended.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul></li></ul></li>\n<li><b>K\'Sante</b> cannot use <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> during <i>Path Maker\'s</i> dash.</li>\n<li><i>Path Maker\'s</i> damage is not capped against monsters while empowered by <i>All Out</i>.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li>\n<li><i>Path Maker\'s</i> recast can be used even while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span>.</li>\n<li><i>Path Maker</i> can be recast by issuing an attack move command (or <span class="template_sbc"><b>LMB</b></span>) but not a targeted attack command.</li>\n<li>The following table refers for interactions while <b>K\'Sante</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n\n<tbody><tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All items are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Disabled, but allows trinkets\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death\n</li></td></tr></tbody></table>',
  },
  Footwork: {
    name: 'Footwork',
    display_name: 'Footwork',
    champion: "K'Sante",
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'KSanteE.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 192,
      y: 144,
      w: 48,
      h: 48,
    },
    range: '250 / 400 / 550',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dash speed to location">1500</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dash speed to allies">1800</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dash speed during All Out">2100</span>',
    cast_time: 'none',
    cost: '45 / 50 / 55 / 60 / 65',
    costtype: 'Mana',
    cooldown: '9 / 8.<small>5</small> / 8 / 7.<small>5</small> / 7',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="K\'Sante" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/K%27Sante/LoL" title="K\'Sante"><img alt="K\'Sante" src="/wiki/images/K%27Sante_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/K%27Sante/LoL" title="K\'Sante/LoL">K\'Sante</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span>, granting himself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span>.',
      'If cast toward an ally, <i>Footwork</i> has increased range. If the ally is a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, they also receive the shield.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="K\'Sante" data-ability="All Out" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/K%27Sante/LoL#All_Out" title="All Out"><img alt="All Out" src="/wiki/images/K%27Sante_All_Out.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/K%27Sante/LoL#All_Out" title="K\'Sante/LoL">All Out</a></span></span> Bonus:</b></span> <i>Footwork\'s</i> dash speed and location range are increased, and it can dash through terrain.',
    ],
    description: [
      {
        icon: '/wiki/images/Footwork.png',
        description:
          "Active: K'Sante  dashes to the target location, though not through terrain, and grants himself a  shield for 2 seconds. Footwork can be cast on allies to dash to them at an increased range and speed. If the ally is a  champion upon arrival, they receive the  shield as well.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>K\'Sante</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location, though not through terrain, and grants himself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 2 seconds. <i>Footwork</i> can be cast on allies to dash to them at an increased range and speed. If the ally is a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> upon arrival, they receive the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> as well.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Active:',
            raw: "K'Sante  dashes to the target location, though not through terrain, and grants himself a  shield for 2 seconds",
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'dashes to the target location, though not through terrain, and grants himself a  shield for 2 seconds',
            pre: "K'Sante  dashes to the target location, though not through terrain, and grants himself a  shield for 2 seconds",
          },
        ],
        leveling: [
          {
            name: 'Shield Strength:',
            values: '45 / 65 / 85 / 105 / 125 (+ 15% bonus health)',
            valuesHTML:
              '45 / 65 / 85 / 105 / 125 <span style="color: #1F995C; white-space:normal">(+&nbsp;15% <b>bonus</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Shield Strength:',
            raw: '45 / 65 / 85 / 105 / 125 (+ 15% bonus health)',
            healType: 'BonusHealth',
            values: [45, 65, 85, 105, 125],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '45 / 65 / 85 / 105 / 125',
            children: [
              {
                values: 15,
                valuesIsPercent: true,
                units: 'bonus_hp',
                unitsText: 'bonus health',
                pre: '+ 15% bonus health',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "All Out Bonus: Footwork's dash speed and location range are increased, and it can dash through terrain.",
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="K\'Sante" data-ability="All Out" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/K%27Sante/LoL#All_Out" title="All Out"><img alt="All Out" src="/wiki/images/K%27Sante_All_Out.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/K%27Sante/LoL#All_Out" title="K\'Sante/LoL">All Out</a></span></span> Bonus:</b></span> <i>Footwork\'s</i> dash speed and location range are increased, and it can dash through terrain.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Footwork partially  resets K'Sante's basic attack timer. While  All Out, it fully resets the timer. K'Sante can cast any of his abilities during the dash. Footwork will cast at max range if cast beyond that.",
        descriptionHTML:
          '<i>Footwork partially <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>K\'Sante\'s</b> basic attack timer. While <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="K\'Sante" data-ability="All Out" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/K%27Sante/LoL#All_Out" title="All Out"><img alt="All Out" src="/wiki/images/K%27Sante_All_Out.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/K%27Sante/LoL#All_Out" title="K\'Sante/LoL">All Out</a></span></span>, it fully resets the timer. <b>K\'Sante</b> can cast any of his abilities during the dash. Footwork will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Self, Allies',
    notes:
      '* The basic attack reset is not considered one for <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Hail of Blades" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hail_of_Blades_(Rune)" title="Hail of Blades"><img alt="Hail of Blades" src="/wiki/images/Hail_of_Blades_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Hail_of_Blades_(Rune)" class="mw-redirect" title="Hail of Blades (Rune)">Hail of Blades</a></span></span>.',
  },
  'All Out': {
    name: 'All Out',
    display_name: 'All Out',
    champion: "K'Sante",
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'KSanteR.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 240,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '350',
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Maximum knock back radius over terrain on Summoner\'s Rift">5000</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Knock back radius over terrain on non-Summoner\'s Rift maps">Global</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Knock back speed">2000</span>',
    cast_time: '0.<small>4</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">120 / 110 / 100 / 90 / 80</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="K\'Sante" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/K%27Sante/LoL" title="K\'Sante"><img alt="K\'Sante" src="/wiki/images/K%27Sante_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/K%27Sante/LoL" title="K\'Sante/LoL">K\'Sante</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">roots</a></span> an enemy and then shatters his tonfas, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them back</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinking</a></span> behind them, and dealing <span style="color: #FF8C34; white-space:normal">physical damage</span>. If the enemy is pushed into terrain, they will be knocked over it and take additional <span style="color: #FF8C34; white-space:normal">physical damage</span>.',
      'The target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> at the end of the push, and also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked up</a></span> again if they were pushed through terrain. At the end, <b>K\'Sante</b> goes <i>All Out</i> for some time.',
      '<span class="template_sbc"><b>All Out:</b></span> <b>K\'Sante</b> loses a large portion of his <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;health</span></span>, <b>base</b> <span style="color:yellow; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;armor</span></span> and <span style="color: #00FFFF; white-space:normal"><span style="white-space:nowrap">magic resist</span></span>, but gains <span style="color:orange; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> AD</span></span> and <span style="color: #CE1C42; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Omnivamp" title="Omnivamp"><img alt="Omnivamp icon.png" src="/wiki/images/Omnivamp_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;omnivamp</span></span>. His basic abilities are empowered and they have no <span style="color: #0099CC; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;mana</span></span> cost. <b>K\'Sante</b> can recast this ability to end <i>All Out</i> early.',
      "After <i>All Out</i> ends, <b>K'Sante</b>  restores his mana, but his health is <u>not restored</u>.",
    ],
    description: [
      {
        icon: '/wiki/images/All_Out.png',
        description:
          "Active: K'Sante  roots the target enemy  champion for 0.5 seconds and gains  displacement immunity over the cast time, then shatters his ntofos to  knock them back, during which they are  revealed, and  blinks to the end location. The target is dealt physical damage near the end of the displacement and is  stunned for 0.25 seconds afterwards.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>K\'Sante</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">roots</a></span> the target enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> for 0.<small>5</small> seconds and gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span> over the cast time, then shatters his ntofos to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock them back</a></span>, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> to the end location. The target is dealt <span style="color: #FF8C34; white-space:normal">physical damage</span> near the end of the displacement and is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for 0.<small>25</small> seconds afterwards.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '35 / 52.5 / 70 / 87.5 / 105 (+ 20% AD)',
            valuesHTML:
              '35 / 52.<small>5</small> / 70 / 87.<small>5</small> / 105 <span style="color:orange; white-space:normal">(+&nbsp;20% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '35 / 52.5 / 70 / 87.5 / 105 (+ 20% AD)',
            damagetype: 'Physical',
            values: [35, 52.5, 70, 87.5, 105],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 52.5 / 70 / 87.5 / 105',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 20% AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "If the target hits terrain during the displacement, they are knocked back through the terrain and dealt the physical damage once they emerge. At the end of the displacement, they remain  airborne for 0.5 seconds and K'Sante strikes them to deal additional physical damage, after which they are  stunned for 0.25 seconds.",
        descriptionHTML:
          'If the target hits terrain during the displacement, they are knocked back through the terrain and dealt the <span style="color: #FF8C34; white-space:normal">physical damage</span> once they emerge. At the end of the displacement, they remain <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> for 0.<small>5</small> seconds and <b>K\'Sante</b> strikes them to deal <span style="color: #FF8C34; white-space:normal"><b>additional</b> physical damage</span>, after which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for 0.<small>25</small> seconds.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Additional Damage:',
            values: '150 / 200 / 250 / 300 / 350 (+ 20% AD)',
            valuesHTML:
              '150 / 200 / 250 / 300 / 350 <span style="color:orange; white-space:normal">(+&nbsp;20% AD)</span>',
          },
          {
            name: 'Total Physical Damage:',
            values: '185 / 252.5 / 320 / 387.5 / 455 (+ 40% AD)',
            valuesHTML:
              '185 / 252.<small>5</small> / 320 / 387.<small>5</small> / 455 <span style="color:orange; white-space:normal">(+&nbsp;40% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Additional Damage:',
            raw: '150 / 200 / 250 / 300 / 350 (+ 20% AD)',
            damagetype: 'None',
            values: [150, 200, 250, 300, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 200 / 250 / 300 / 350',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 20% AD',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Total Physical Damage:',
            raw: '185 / 252.5 / 320 / 387.5 / 455 (+ 40% AD)',
            damagetype: 'Physical',
            values: [185, 252.5, 320, 387.5, 455],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '185 / 252.5 / 320 / 387.5 / 455',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 40% AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "After K'Sante  blinks, he enters All Out for 20 seconds, and the ability can be recast after 1.5 seconds within the duration.",
        descriptionHTML:
          'After <b>K\'Sante</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span>, he enters <i>All Out</i> for 20 seconds, and the ability can be recast after <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Affected by ability haste">1.<small>5</small> seconds</span> within the duration.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: "After K'Sante  blinks, he enters All Out for 20 seconds, and the ability can be recast after 1.5 seconds within the duration.",
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              "K'Sante  blinks, he enters All Out for 20 seconds, and the ability can be recast after 1.5 seconds within the duration.",
            pre: "After K'Sante  blinks, he enters All Out for 20 seconds, and the ability can be recast after 1.5 seconds within the duration.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "All Out: K'Sante gains a health threshold equal to  55% maximum health which cannot be modified nor exceeded by any means. Upon entering All Out, his current health is reduced to this threshold. Additionally, his  base armor and  base magic resistance are reduced by 85% bonus armor and 85% bonus magic resistance, respectively. In return, he gains  5 (+ 32.5% bonus armor) (+ 32.5% bonus magic resistance) bonus attack damage and  10% (+ 0.75% per 100 bonus health) omnivamp and modifies his basic abilities, which can be cast at no cost.",
        descriptionHTML:
          '<span class="template_sbc"><b>All Out:</b></span> <b>K\'Sante</b> gains a <a href="/wiki/Health#Health_threshold" title="Health">health threshold</a> equal to <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">55% <b>maximum</b> health</span></span> which cannot be <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="By increases or decreases to maximum health">modified</span> nor <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="By healing and health regeneration">exceeded</span> by any means. Upon entering <i>All Out</i>, his <span style="color: #1F995C; white-space:normal"><b>current</b> health</span> is reduced to this threshold. Additionally, his <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>base</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>base</b> magic resistance</span></span> are reduced by <span style="color:yellow; white-space:normal">85% <b>bonus</b> armor</span> and <span style="color: #00FFFF; white-space:normal">85% <b>bonus</b> magic resistance</span>, respectively. In return, he gains <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal">5 <span style="color:yellow; white-space:normal">(+&nbsp;32.<small>5</small>% <b>bonus</b> armor)</span> <span style="color: #00FFFF; white-space:normal">(+&nbsp;32.<small>5</small>% <b>bonus</b> magic resistance)</span> <b>bonus</b> attack damage</span></span> and <span style="white-space:nowrap"><a href="/wiki/Omnivamp" title="Omnivamp"><img alt="Omnivamp icon.png" src="/wiki/images/Omnivamp_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><span style="color: #CE1C42; white-space:normal">10%</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;0.<small>75</small>% per 100 <b>bonus</b> health)</span> <span style="color: #CE1C42; white-space:normal">omnivamp</span></span></span> and modifies his basic abilities, which can be cast at no cost.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'All Out:',
            raw: "K'Sante gains a health threshold equal to  55% maximum health which cannot be modified nor exceeded by any means",
            healType: 'BonusHealth',
            values: 5,
            valuesIsPercent: true,
            units: 'maximum_hp',
            unitsText:
              'maximum health which cannot be modified nor exceeded by any meansgains a health threshold equal to  55',
            pre: "K'Sante gains a health threshold equal to  55% maximum health which cannot be modified nor exceeded by any means",
          },
          {
            effectType: 'Damage',
            name: 'Line 3:',
            raw: 'Additionally, his  base armor and  base magic resistance are reduced by 85% bonus armor and 85% bonus magic resistance, respectively',
            damagetype: 'Magic',
            values: 8,
            valuesIsPercent: true,
            units: 'bonus_armor',
            unitsText:
              'bonus armor and 85his  base armor and  base magic resistance are reduced by 85',
            pre: 'Additionally, his  base armor and  base magic resistance are reduced by 85% bonus armor and 85% bonus magic resistance, respectively',
          },
          {
            effectType: 'Heal',
            name: 'Line 4:',
            raw: 'In return, he gains  5 (+ 32.5% bonus armor) (+ 32.5% bonus magic resistance) bonus attack damage and  10% (+ 0.75% per 100 bonus health) omnivamp and modifies his basic abilities, which can be cast at no cost.',
            healType: 'Omnivamp',
            values: 5,
            units: 'bonus_ad',
            unitsText: 'bonus attack damage and  10%',
            pre: 'In return, he gains  5',
            post: 'bonus attack damage and  10%',
            children: [
              {
                values: 32.5,
                valuesIsPercent: true,
                units: 'bonus_armor',
                unitsText: 'bonus armor',
                pre: '+ 32.5% bonus armor',
              },
              {
                values: 32.5,
                valuesIsPercent: true,
                units: 'bonus_mr',
                unitsText: 'bonus magic resistance',
                pre: '+ 32.5% bonus magic resistance',
              },
              {
                values: 0.75,
                valuesIsPercent: true,
                units: 'bonus_hp',
                unitsText: 'per 100 bonus health',
                pre: '+ 0.75% per 100 bonus health',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/All_Out_2.png',
        description: "Recast: K'Sante ends All Out early.",
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>K\'Sante</b> ends <i>All Out</i> early.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Self, Enemies',
    damagetype: 'Physical',
    spelleffects: 'spell',
    spellshield: true,
    notes:
      '* <b>K\'Sante</b> will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blink</a></span> 175 units beyond the target\'s hitbox\'s edge at the end location.\n<ul><li>Going <i>All Out</i> does not override <b>K\'Sante\'s</b> attack or movement commands if the target does not collide with terrain.\n<ul><li>If the target is however knocked back through terrain then <b>K\'Sante</b> will be ordered to attack the target after appearing at the target\'s location.</li></ul></li>\n<li>In addition to being knocked back, the target is also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attach"><a href="/wiki/Attached" title="Attached"><img alt="You and Me!.png" src="/wiki/images/Yuumi_You_and_Me%21.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attached" title="Attached">attached</a></span> to a missile that travels in the same trajectory as the displacement.\n<ul><li>Removing the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> does not cause the target to detach from the missile.</li></ul></li>\n<li><i>All Out\'s</i> knock back does not interact with <a href="/wiki/Terrain#Player-Generated" title="Terrain">player-generated terrain</a>.</li>\n<li>Since <b>K\'Sante</b> retains the stats he "lost", any effects that scale based on those stats will calculate based on the value prior to him going <i>All Out</i>.\n<ul><li>His <b>base</b> resistances can be reduced below 0 by his <b>bonus</b> resistances.</li></ul></li>\n<li>Gaining <b>bonus</b> health during <i>All Out</i> causes the health threshold to be briefly increased then reset back to its original value.\n<ul><li>The <b>bonus</b> health is still applied to his <b>current</b> health.</li></ul></li>\n<li>Temporary increases in resistances will count towards the scaling of the bonus attack damage gained from entering <i>All Out</i>.</li>\n<li>If the target resists the knockback, <b>K\'Sante</b> will still blink behind the target\'s endpoint as if they were displaced.</li>\n<li><i>All Out\'s</i> remaining duration is tracked in his secondary resource bar.\n<ul><li>His current mana will decay over the duration in order to indicate this.\n<ul><li>Once the effect ends, he will restore the mana he had prior to going <i>All Out</i>.</li></ul></li></ul></li>\n<li><b>K\'Sante</b> will blink closer to his target if there is no valid space at the end of the target\'s displacement.</li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).</li>\n<li>The following table refers for interactions while <b>K\'Sante</b> is in cast time:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n\n<tbody><tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All the other item-actives are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death, unless protected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">Resurrection</a></span>\n</li></td></tr></tbody></table>\n<ul><li>The following table refers for interactions while <b>K\'Sante</b> is performing <i>All Out\'s</i> cast:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n\n<tbody><tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All items are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death\n</li></td></tr></tbody></table>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:KSante_Original_R_2.ogg   "I\'m done holding back!"',
  },
} satisfies { [skillName in string]: SkillData };
