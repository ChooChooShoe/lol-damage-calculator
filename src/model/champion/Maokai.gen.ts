import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Maokai';

export default {
  'Sap Magic': {
    name: 'Sap Magic',
    display_name: 'Sap Magic',
    champion: 'Maokai',
    skill: 'I',
    image: {
      full: 'Maokai_Passive.png',
      sprite: 'passive2.png',
      group: 'passive',
      x: 240,
      y: 48,
      w: 48,
      h: 48,
    },
    static:
      '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="30;1" data-finish="20;11" data-bot_values="30;25;20" data-top_values="1;6;11">30 / 25 / 20 (based on level)</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> Periodically, <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Maokai" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Maokai/LoL" title="Maokai\'s"><img alt="Maokai\'s" src="/wiki/images/Maokai_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Maokai/LoL" title="Maokai/LoL">Maokai\'s</a></span></span> next basic attack will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> him for a portion of <span style="color: #1F995C; white-space:normal">his <b>maximum</b> health</span>.',
      'Each time <b>Maokai</b> casts an ability or is hit by an enemy ability, <i>Sap Magic</i> cooldown is <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduced</span> by a few seconds.',
    ],
    description: [
      {
        icon: '/wiki/images/Sap_Magic.png',
        description:
          'Innate: Periodically, Maokai empowers his next basic attack to have an  uncancellable windup and  heal him for 4 − 34 (based on level) (+ 4% − 12% (based on level) maximum health) after a 0.25-second delay.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> Periodically, <b>Maokai</b> empowers his next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> him for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="4;9;14;19;24;29;34" data-top_values="1;6;9;11;13;15;17">4 − 34 (based on level)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="4% at level 1, then +1.33% at level 6, then +1.33% at level 9, then +1.34% at level 11, then +1.33% at level 13, then +1.33% at level 15, then +1.34% at level 17" data-bot_values="4;5.33;6.66;8;9.33;10.66;12" data-top_values="1;6;9;11;13;15;17" data-bot_key="%">4% − 12% (based on level)</span> <b>maximum</b> health)</span> after a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Reduced by attack speed.">0.<small>25</small></span>-second delay.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Innate:',
            raw: 'Periodically, Maokai empowers his next basic attack to have an  uncancellable windup and  heal him for 4 − 34 (based on level) (+ 4% − 12% (based on level) maximum health) after a 0.25-second delay.',
            healType: 'BonusHealth',
            values: [
              4, 5.76, 7.53, 9.29, 11.06, 12.82, 14.59, 16.35, 18.12, 19.88,
              21.65, 23.41, 25.18, 26.94, 28.71, 30.47, 32.24, 34,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'after a 0.25-second delay.',
            pre: 'Periodically, Maokai empowers his next basic attack to have an  uncancellable windup and  heal him for 4 − 34',
            post: 'after a 0.25-second delay.',
            children: [
              {
                values: [],
                valuesIsPercent: true,
                basedOn: 'level',
                units: 'maximum_hp',
                unitsText: 'maximum health',
                pre: '+ 4% − 12%',
                post: 'maximum health',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Sap_Magic_2.png',
        description:
          "Each time Maokai casts an ability, hits at least one enemy champion or epic monster with  Sapling Toss, or is struck by an enemy's ability, Sap Magic's  cooldown is reduced by 4 seconds, modified to 1.5 if he is hit by a large  monster's basic attack or ability.",
        descriptionHTML:
          'Each time <b>Maokai</b> casts an <a href="/wiki/Champion_ability" title="Champion ability">ability</a>, hits at least one enemy champion or epic monster with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Maokai" data-ability="Sapling Toss" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Maokai/LoL#Sapling_Toss" title="Sapling Toss"><img alt="Sapling Toss" src="/wiki/images/Maokai_Sapling_Toss.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Maokai/LoL#Sapling_Toss" title="Maokai/LoL">Sapling Toss</a></span></span></i>, or is struck by an enemy\'s ability, <i>Sap Magic\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is reduced by 4 seconds, modified to 1.<small>5</small> if he is hit by a large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster\'s</a></span> basic attack or ability.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: "Each time Maokai casts an ability, hits at least one enemy champion or epic monster with  Sapling Toss, or is struck by an enemy's ability, Sap Magic's  cooldown is reduced by 4 seconds, modified to 1.5 if he is hit by a large  monster's basic attack or ability.",
            damagetype: 'Magic',
            values: 4,
            units: 'total_ap',
            unitsText:
              "time Maokai casts an ability, hits at least one enemy champion or epic monster with  Sapling Toss, or is struck by an enemy's ability, Sap Magic's  cooldown is reduced by 4 seconds, modified to 1.5 if he is hit by a large  monster's basic attack or ability.",
            pre: "Each time Maokai casts an ability, hits at least one enemy champion or epic monster with  Sapling Toss, or is struck by an enemy's ability, Sap Magic's  cooldown is reduced by 4 seconds, modified to 1.5 if he is hit by a large  monster's basic attack or ability.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Sap Magic  resets Maokai's basic attack timer, and will not trigger if he is above 95% maximum  health.",
        descriptionHTML:
          '<i>Sap Magic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Maokai\'s</b> basic attack timer, and will not trigger if he is <span style="color: #1F995C; white-space:normal">above 95% <b>maximum</b> <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;health</span></span>.</i>',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: "Sap Magic  resets Maokai's basic attack timer, and will not trigger if he is above 95% maximum  health.",
            healType: 'BonusHealth',
            values: 9,
            valuesIsPercent: true,
            units: 'total_ad',
            unitsText:
              "maximum  health.Magic  resets Maokai's basic attack timer, and will not trigger if he is above 95",
            pre: "Sap Magic  resets Maokai's basic attack timer, and will not trigger if he is above 95% maximum  health.",
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
      '* <i>Sap Magic</i> does not occur if the attack is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span> and/or missed if <b>Maokai</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span>. It will occur if it is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span>.\n<ul><li>The striking ability has to trigger <a href="/wiki/Ability_effects" title="Ability effects">spell effects</a> such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell damage"><a href="/wiki/Damage" title="Damage"><img alt="Disintegrate.png" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">spell damage</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span> for the cooldown to be reduced.</li>\n<li>If <b>Maokai</b> possesses a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span> and it consumes an enemy ability, he will still receive the cooldown reduction.</li>\n<li>The empowered attack will not trigger against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a> nor <a href="/wiki/Ward" title="Ward">wards</a>.</li></ul>',
  },
  'Bramble Smash': {
    name: 'Bramble Smash',
    display_name: 'Bramble Smash',
    champion: 'Maokai',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'MaokaiQ.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 288,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '600',
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">300</span>',
    cast_time: '0.<small>3889</small>',
    cost: '60',
    costtype: 'Mana',
    cooldown:
      '8 / 7.<small>25</small> / 6.<small>5</small> / 5.<small>75</small> / 5',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Maokai" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Maokai/LoL" title="Maokai"><img alt="Maokai" src="/wiki/images/Maokai_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Maokai/LoL" title="Maokai/LoL">Maokai</a></span></span> sends a shockwave in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> enemies hit.',
      'Enemies near <b>Maokai</b> are also briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked back</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Bramble_Smash.png',
        description:
          'Active: Maokai sends a shockwave in the target direction that deals magic damage to enemies hit and  slows them by 99% for 0.25 seconds. Bramble Smash deals bonus magic damage to  monsters.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Maokai</b> sends a shockwave in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 99% for 0.<small>25</small> seconds. <i>Bramble Smash</i> deals <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Maokai sends a shockwave in the target direction that deals magic damage to enemies hit and  slows them by 99% for 0.25 seconds',
            damagetype: 'Magic',
            values: 9,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'for 0.25 secondssends a shockwave in the target direction that deals magic damage to enemies hit and  slows them by 99',
            pre: 'Maokai sends a shockwave in the target direction that deals magic damage to enemies hit and  slows them by 99% for 0.25 seconds',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values:
              "70 / 120 / 170 / 220 / 270 (+ 2 / 2.5 / 3 / 3.5 / 4% of the target's maximum health) (+ 40% AP)",
            valuesHTML:
              '70 / 120 / 170 / 220 / 270 <span style="color: #1F995C; white-space:normal">(+&nbsp;2 / 2.<small>5</small> / 3 / 3.<small>5</small> / 4% of the target\'s <b>maximum</b> health)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40% AP)</span>',
          },
          {
            name: 'Bonus Monster Damage:',
            values: '100 / 120 / 140 / 160 / 180',
            valuesHTML: '100 / 120 / 140 / 160 / 180',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Magic Damage:',
            raw: "70 / 120 / 170 / 220 / 270 (+ 2 / 2.5 / 3 / 3.5 / 4% of the target's maximum health) (+ 40% AP)",
            healType: 'OutgoingHeals',
            values: [70, 120, 170, 220, 270],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 120 / 170 / 220 / 270',
            children: [
              {
                values: [2, 2.5, 3, 3.5, 4],
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of the target's maximum health",
                pre: "+ 2 / 2.5 / 3 / 3.5 / 4% of the target's maximum health",
              },
              {
                values: 40,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 40% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Bonus Monster Damage:',
            raw: '100 / 120 / 140 / 160 / 180',
            damagetype: 'None',
            values: [100, 120, 140, 160, 180],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 120 / 140 / 160 / 180',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Enemies near Maokai are also  stunned for 0.5 seconds and  knocked back up to 300 units based on their proximity to him.',
        descriptionHTML:
          'Enemies near <b>Maokai</b> are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for 0.<small>5</small> seconds and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked back</a></span> up to 300 units based on their proximity to him.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Area of effect',
    spellshield: true,
    projectile: 'True',
    notes:
      '* This ability will cast from wherever the caster is at the end of the cast time.\n<ul><li><i>Bramble Smash\'s</i> damage based on the target\'s health ratio is capped at 9999 against non-champions.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">Displacement immunity</a></span> will also resist the application of the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span>.</li></ul>',
  },
  'Twisted Advance': {
    name: 'Twisted Advance',
    display_name: 'Twisted Advance',
    champion: 'Maokai',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'MaokaiW.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 336,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '525',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dash speed, estimated">1300</span>',
    cast_time: 'none',
    cost: '60',
    costtype: 'Mana',
    cooldown: '13 / 12 / 11 / 10 / 9',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Maokai" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Maokai/LoL" title="Maokai"><img alt="Maokai" src="/wiki/images/Maokai_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Maokai/LoL" title="Maokai/LoL">Maokai</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target enemy while being <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooting</a></span> them upon arrival.',
    ],
    description: [
      {
        icon: '/wiki/images/Twisted_Advance.png',
        description:
          'Active: Maokai  dashes to the target enemy while being  untargetable. Upon arrival, he deals magic damage and  roots them for a duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Maokai</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target enemy while being <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>. Upon arrival, he deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">roots</a></span> them for a duration.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '60 / 85 / 110 / 135 / 160 (+ 40% AP)',
            valuesHTML:
              '60 / 85 / 110 / 135 / 160 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40% AP)</span>',
          },
          {
            name: 'Root Duration:',
            values: '1 / 1.1 / 1.2 / 1.3 / 1.4',
            valuesHTML:
              '1 / 1.<small>1</small> / 1.<small>2</small> / 1.<small>3</small> / 1.<small>4</small>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 85 / 110 / 135 / 160 (+ 40% AP)',
            damagetype: 'Magic',
            values: [60, 85, 110, 135, 160],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 85 / 110 / 135 / 160',
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
          {
            effectType: 'Unique',
            name: 'Root Duration:',
            raw: '1 / 1.1 / 1.2 / 1.3 / 1.4',
            values: [1, 1.1, 1.2, 1.3, 1.4],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1 / 1.1 / 1.2 / 1.3 / 1.4',
          },
        ],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spell',
    spellshield: true,
    callforhelp: 'true',
    notes:
      '* <b>Maokai</b> will track the target if they change locations.\n<ul><li><ul><li>He will dash to the target\'s previous location without applying <i>Twisted Advance\'s</i> effects if the target is too far away or moves beyond <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">2000</span> units.</li>\n<li>He will stop dashing if the target is too far away the moment the dash begins.</li></ul></li>\n<li><i>Twisted Advance</i> will fail to deal damage and apply the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">root</a></span> if the target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> upon arrival.</li></ul>',
  },
  'Sapling Toss': {
    name: 'Sapling Toss',
    display_name: 'Sapling Toss',
    champion: 'Maokai',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'MaokaiE.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 384,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '1100',
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage range">175</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Initial sight range, pending for confirmation">350</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Sight range, while on the ground">475</span>',
    tether_radius: '250',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Sapling movement speed, based on Maokai\'s boots.">400 - 460</span>',
    cast_time: '0.<small>25</small>',
    cost: '45 / 55 / 65 / 75 / 85',
    costtype: 'Mana',
    cooldown: '14',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Maokai" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Maokai/LoL" title="Maokai"><img alt="Maokai" src="/wiki/images/Maokai_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Maokai/LoL" title="Maokai/LoL">Maokai</a></span></span> flings a <i>Sapling</i> to the target location, where it remains for some time. A <i>Sapling</i> will chase nearby enemies for a short time, expiring afterward or upon contact.',
      'When a <i>Sapling</i> expires, it deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies based on <span style="color: #1F995C; white-space:normal">their <b>maximum</b> health</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for a short time.',
      'A <i>Sapling</i> placed in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Brush"><a href="/wiki/Brush" title="Brush"><img alt="Brushmaker.png" src="/wiki/images/Ivern_Brushmaker.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Brush" title="Brush">brush</a></span> will last longer, and deal double damage over 3 bursts.',
    ],
    description: [
      {
        icon: '/wiki/images/Sapling_Toss.png',
        description:
          'Active: Maokai  flings a Sapling to the target location, granting  sight of the area.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Maokai</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">flings</a></span> a <i>Sapling</i> to the target location, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="can see across terrain from the center, but not into brush">area</span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Once landed, a Sapling remains stationary for 30 seconds or until it reacts to the first nearby visible enemy, chasing them for up to 2.5 seconds. The Sapling explodes upon colliding with an enemy or when it expires, dealing magic damage to nearby enemies, capped at 300 against non-champions, and  slowing them by 45% for 2 seconds.',
        descriptionHTML:
          'Once landed, a <i>Sapling</i> remains stationary for 30 seconds or until it reacts to the first nearby visible enemy, chasing them for up to 2.<small>5</small> seconds. The <i>Sapling</i> explodes upon colliding with an enemy or when it expires, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies, capped at 300 against non-champions, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 45% for 2 seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Once landed, a Sapling remains stationary for 30 seconds or until it reacts to the first nearby visible enemy, chasing them for up to 2.5 seconds',
            damagetype: 'None',
            values: 3,
            units: 'total_ap',
            unitsText:
              'landed, a Sapling remains stationary for 30 seconds or until it reacts to the first nearby visible enemy, chasing them for up to 2.5 seconds',
            pre: 'Once landed, a Sapling remains stationary for 30 seconds or until it reacts to the first nearby visible enemy, chasing them for up to 2.5 seconds',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'The Sapling explodes upon colliding with an enemy or when it expires, dealing magic damage to nearby enemies, capped at 300 against non-champions, and  slowing them by 45% for 2 seconds.',
            increasedStat: 'total_ap',
            values: 3,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'for 2 seconds.Sapling explodes upon colliding with an enemy or when it expires, dealing magic damage to nearby enemies, capped at 300 against non-champions, and  slowing them by 45',
            pre: 'The Sapling explodes upon colliding with an enemy or when it expires, dealing magic damage to nearby enemies, capped at 300 against non-champions, and  slowing them by 45% for 2 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '50 / 75 / 100 / 125 / 150 (+ 5% bonus health) (+ 25% AP)',
            valuesHTML:
              '50 / 75 / 100 / 125 / 150 <span style="color: #1F995C; white-space:normal">(+&nbsp;5% <b>bonus</b> health)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;25% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Magic Damage:',
            raw: '50 / 75 / 100 / 125 / 150 (+ 5% bonus health) (+ 25% AP)',
            healType: 'BonusHealth',
            values: [50, 75, 100, 125, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 75 / 100 / 125 / 150',
            children: [
              {
                values: 5,
                valuesIsPercent: true,
                units: 'bonus_hp',
                unitsText: 'bonus health',
                pre: '+ 5% bonus health',
              },
              {
                values: 25,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 25% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'A Sapling placed in  brush instead lasts 30 (+ 2.5% bonus health) seconds, deals double damage to struck non- minion targets over 3 bursts, and  slows them by 45% (+ 1% per 100 bonus health) (+ 1% per 100 AP), as well as  reveals them for 3 seconds. The first instance of damage is dealt instantly and the second and third instances occur each 0.75 seconds thereafter. The total damage is capped at 600 against non-champions.',
        descriptionHTML:
          'A <i>Sapling</i> placed in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Brush"><a href="/wiki/Brush" title="Brush"><img alt="Brushmaker.png" src="/wiki/images/Ivern_Brushmaker.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Brush" title="Brush">brush</a></span> instead lasts 30 <span style="color: #1F995C; white-space:normal">(+&nbsp;2.<small>5</small>% <b>bonus</b> health)</span> seconds, deals double damage to struck non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span> targets over 3 bursts, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 45% <span style="color: #1F995C; white-space:normal">(+&nbsp;1% per 100 <b>bonus</b> health)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;1% per 100 AP)</span>, as well as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">reveals</a></span> them for 3 seconds. The first instance of damage is dealt instantly and the second and third instances occur each 0.<small>75</small> seconds thereafter. The <b>total</b> damage is capped at 600 against non-champions.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: 'A Sapling placed in  brush instead lasts 30 (+ 2.5% bonus health) seconds, deals double damage to struck non- minion targets over 3 bursts, and  slows them by 45% (+ 1% per 100 bonus health) (+ 1% per 100 AP), as well as  reveals them for 3 seconds',
            healType: 'OutgoingHeals',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'seconds, deals double damage to struck non- minion targets over 3 bursts, and  slows them by 45%',
            pre: 'A Sapling placed in  brush instead lasts 30',
            post: 'seconds, deals double damage to struck non- minion targets over 3 bursts, and  slows them by 45%',
            children: [
              {
                values: 2.5,
                valuesIsPercent: true,
                units: 'bonus_hp',
                unitsText: 'bonus health',
                pre: '+ 2.5% bonus health',
              },
              {
                values: 1,
                valuesIsPercent: true,
                units: 'bonus_hp',
                unitsText: 'per 100 bonus health',
                pre: '+ 1% per 100 bonus health',
              },
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
            effectType: 'Gain',
            name: 'Line 3:',
            raw: 'The total damage is capped at 600 against non-champions.',
            increasedStat: 'total_ap',
            values: 6,
            units: '',
            unitsText: 'total damage is capped at 600 against non-champions.',
            pre: 'The total damage is capped at 600 against non-champions.',
          },
        ],
        leveling: [
          {
            name: 'Total Enhanced Damage:',
            values:
              '100 / 150 / 200 / 250 / 300 (+ 10% bonus health) (+ 50% AP)',
            valuesHTML:
              '100 / 150 / 200 / 250 / 300 <span style="color: #1F995C; white-space:normal">(+&nbsp;10% <b>bonus</b> health)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Total Enhanced Damage:',
            raw: '100 / 150 / 200 / 250 / 300 (+ 10% bonus health) (+ 50% AP)',
            healType: 'BonusHealth',
            values: [100, 150, 200, 250, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 150 / 200 / 250 / 300',
            children: [
              {
                values: 10,
                valuesIsPercent: true,
                units: 'bonus_hp',
                unitsText: 'bonus health',
                pre: '+ 10% bonus health',
              },
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
        description: 'See Pets for more details about Saplings.',
        descriptionHTML:
          '<i>See <a href="/wiki/Maokai/LoL#Pets" title="Maokai/LoL">Pets</a> for more details about Saplings.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'special',
    spellshield: true,
    projectile: 'true',
    notes:
      '* Applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span> from a normal <i>Sapling</i> and deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Persistent damage"><a href="/wiki/Damage" title="Damage"><img alt="Blaze.png" src="/wiki/images/Brand_Blaze.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">persistent damage</a></span> to enemies hit by an empowered <i>Sapling</i>.\n<ul><li><i>Saplings</i> have a base <a href="/wiki/Movement_speed" title="Movement speed">movement speed</a> of 400, increased based on <b>Maokai\'s</b> <a href="/wiki/Boots" title="Boots">boots</a>:\n<ul><li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Boots" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Boots" title="Boots"><img alt="Boots" src="/wiki/images/Boots_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Boots" title="Boots">Boots</a></span></span>: 425</li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Berserker\'s Greaves" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Berserker%27s_Greaves" title="Berserker\'s Greaves"><img alt="Berserker\'s Greaves" src="/wiki/images/Berserker%27s_Greaves_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Berserker%27s_Greaves" title="Berserker\'s Greaves">Berserker\'s Greaves</a></span></span>, <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Ionian Boots of Lucidity" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ionian_Boots_of_Lucidity" title="Ionian Boots of Lucidity"><img alt="Ionian Boots of Lucidity" src="/wiki/images/Ionian_Boots_of_Lucidity_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ionian_Boots_of_Lucidity" title="Ionian Boots of Lucidity">Ionian Boots of Lucidity</a></span></span>, <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Mercury\'s Treads" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mercury%27s_Treads" title="Mercury\'s Treads"><img alt="Mercury\'s Treads" src="/wiki/images/Mercury%27s_Treads_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mercury%27s_Treads" title="Mercury\'s Treads">Mercury\'s Treads</a></span></span>, <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Plated Steelcaps" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Plated_Steelcaps" title="Plated Steelcaps"><img alt="Plated Steelcaps" src="/wiki/images/Plated_Steelcaps_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Plated_Steelcaps" title="Plated Steelcaps">Plated Steelcaps</a></span></span> and <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Sorcerer\'s Shoes" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sorcerer%27s_Shoes" title="Sorcerer\'s Shoes"><img alt="Sorcerer\'s Shoes" src="/wiki/images/Sorcerer%27s_Shoes_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sorcerer%27s_Shoes" title="Sorcerer\'s Shoes">Sorcerer\'s Shoes</a></span></span>: 445</li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Boots of Swiftness" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Boots_of_Swiftness" title="Boots of Swiftness"><img alt="Boots of Swiftness" src="/wiki/images/Boots_of_Swiftness_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Boots_of_Swiftness" title="Boots of Swiftness">Boots of Swiftness</a></span></span> and <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Mobility Boots" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mobility_Boots" title="Mobility Boots"><img alt="Mobility Boots" src="/wiki/images/Mobility_Boots_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mobility_Boots" title="Mobility Boots">Mobility Boots</a></span></span>: 460</li></ul></li>\n<li><i>Sapling Toss</i> grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the target location even while the <i>Sapling</i> is in flight.</li>\n<li>The <i>Saplings</i> will continue to chase their target even if they lose <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of them (but they do not prioritize champions so they will chase the first target they encounter).</li>\n<li><i>Saplings</i> will appear on the map as minions despite being untargetable and invulnerable.</li>\n<li><i>Saplings</i> cannot stack on top of each other (they will move a short distance away from one another if they are aimed at the same location).</li>\n<li>The damage of empowered <i>Saplings</i> is equally split into chunks of 66.<small>7</small>% of the normal <i>Sapling</i> damage every second, once immediately, and then at the 1 and 2 second mark.</li>\n<li>The <i>Sapling</i> will stop its movement upon colliding with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-ability="Unbreakable" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL#Unbreakable" title="Unbreakable"><img alt="Unbreakable" src="/wiki/images/Braum_Unbreakable.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL#Unbreakable" title="Braum/LoL">Unbreakable</a></span></span>.</li>\n<li><i>Saplings</i> attack <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Baron_Nashor" title="Baron Nashor"><img alt="Baron Nashor" src="/wiki/images/Baron_NashorSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Baron_Nashor" class="mw-redirect" title="Baron Nashor">Baron Nashor</a></span></span> always at the same two points, no matter where they were placed.<div class="center"><div class="floatnone"><a href="https://static.wikia.nocookie.net/leagueoflegends/images/0/0e/Sapling_Toss_Baron_Nashor.png/revision/latest?cb=20170503215750" class="image"><img alt="Sapling Toss Baron Nashor.png" src="/wiki/images/Sapling_Toss_Baron_Nashor.png" decoding="async" loading="lazy" width="200" height="183" class="lazyload"></a></div></div></li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Maokai_Original_E_0.ogg   "Away, my sapling."',
  },
  "Nature's Grasp": {
    name: "Nature's Grasp",
    display_name: "Nature's Grasp",
    champion: 'Maokai',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'MaokaiR.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 432,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '3000',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 240',
    speed:
      '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="seconds active" data-displayformula="100 + 300 per second, capped at 750" data-bot_values="100;400;700;750" data-top_values="0;1;2;3">100 / 400 / 700 / 750 (based on seconds active)</span>',
    cast_time: '0.<small>5</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown: '120 / 115 / 110 / 105 / 100',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Maokai" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Maokai/LoL" title="Maokai"><img alt="Maokai" src="/wiki/images/Maokai_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Maokai/LoL" title="Maokai/LoL">Maokai</a></span></span> summons a colossal wall of five thorny brambles that slowly advances in the target direction, each stopping when they collide with an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>.',
      'Each bramble deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">roots</a></span> them for a short time based on the bramble\'s distance travelled.',
    ],
    description: [
      {
        icon: "/wiki/images/Nature's_Grasp.png",
        description:
          'Active: Maokai summons a colossal wall of five thorny brambles that slowly advances in the target direction, accelerating over time, each stopping when they collide with an enemy  champion. Hitting at least one enemy champion grants Maokai  bonus movement speed decaying over 2 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Maokai</b> summons a colossal wall of five thorny brambles that slowly advances in the target direction, accelerating over time, each stopping when they collide with an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>. Hitting at least one enemy champion grants <b>Maokai</b> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> decaying over 2 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'Hitting at least one enemy champion grants Maokai  bonus movement speed decaying over 2 seconds.',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'at least one enemy champion grants Maokai  bonus movement speed decaying over 2 seconds.',
            pre: 'Hitting at least one enemy champion grants Maokai  bonus movement speed decaying over 2 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Movement Speed:',
            values: '40 / 45 / 50 / 55 / 60%',
            valuesHTML: '40 / 45 / 50 / 55 / 60%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
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
          'Each bramble deals magic damage to enemies hit and  roots them for 0.8 − 2.6 (based on distance traveled) seconds.',
        descriptionHTML:
          'Each bramble deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">roots</a></span> them for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="distance traveled" data-displayformula="Starts at 0.8 seconds and increases up to 2.6 seconds over 1000 units traveled" data-bot_values="0.8;0.98;1.16;1.34;1.52;1.7;1.88;2.06;2.24;2.42;2.6" data-top_values="0;100;200;300;400;500;600;700;800;900;1000">0.<small>8</small> − 2.<small>6</small> (based on distance traveled)</span> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Each bramble deals magic damage to enemies hit and  roots them for 0.8 − 2.6 (based on distance traveled) seconds.',
            damagetype: 'Magic',
            values: [0, 2.6],
            basedOn: 'distance traveled',
            user: 'none',
            units: '',
            unitsText: 'seconds.',
            pre: 'Each bramble deals magic damage to enemies hit and  roots them for 0.8 − 2.6',
            post: 'seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '150 / 225 / 300 (+ 75% AP)',
            valuesHTML:
              '150 / 225 / 300 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;75% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '150 / 225 / 300 (+ 75% AP)',
            damagetype: 'Magic',
            values: [150, 225, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 225 / 300',
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
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Area of effect',
    spellshield: true,
    projectile: 'True',
    notes:
      '* The brambles are made up of 4 <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">missiles</a></span> each which trail 100 units behind one another. The front missile carries the visual effect. When colliding with a champion, all missiles of one bramble are destroyed simultaneously.\n<ul><li><ul><li>Missiles destroyed by other means such as <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL" title="Samira\'s"><img alt="Samira\'s" src="/wiki/images/Samira_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL" title="Samira/LoL">Samira\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Blade Whirl" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Blade_Whirl" title="Blade Whirl"><img alt="Blade Whirl" src="/wiki/images/Samira_Blade_Whirl.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Blade_Whirl" title="Samira/LoL">Blade Whirl</a></span></span></span> may not destroy their fellows from the same branch, resulting in one or more invisible missiles that may still collide.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul></li>\n<li>This ability will cast from wherever the caster is at the start of the cast time.</li></ul>',
  },
} satisfies { [skillName in string]: SkillData };
