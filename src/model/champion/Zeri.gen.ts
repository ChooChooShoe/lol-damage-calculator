import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Zeri';

export default {
  'Basic Attack': {
    name: 'Basic Attack',
    display_name: 'Basic Attack',
    champion: 'Zeri',
    skill: 'A',
    attack_range: '500',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Non-projectile">N/A</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL" title="Zeri"><img alt="Zeri" src="/wiki/images/Zeri_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL" title="Zeri/LoL">Zeri</a></span></span> generates charge when she moves and casts <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Burst Fire" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Burst_Fire" title="Burst Fire"><img alt="Burst Fire" src="/wiki/images/Zeri_Burst_Fire.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Burst_Fire" title="Zeri/LoL">Burst Fire</a></span></span></i>. Her next basic attack will consume charge to deal <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
      'At full charge, the attack consumes all charge to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> based on the <span style="color: #1F995C; white-space:normal">target\'s <b>maximum</b> health</span>.',
      '<b>Zeri\'s</b> basic attacks apply <a href="/wiki/Spell_effects" class="mw-redirect" title="Spell effects">spell effects</a> as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell damage"><a href="/wiki/Damage" title="Damage"><img alt="Disintegrate.png" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">spell damage</a></span> and triggering on-cast effects, but <b>cannot</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> nor trigger <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects.',
    ],
    description: [
      {
        description:
          'Innate: Zeri generates 1 charge for every 40 units she travels by any means and 10 charge every time she casts  Burst Fire, up to a maximum of 100 charge. Her basic attacks consume charge to deal modified damage.Zeri gains maximum charge when the game starts and upon respawning.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Zeri</b> generates 1 charge for every 40 units she travels by any means and 10 charge every time she casts <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Burst Fire" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Burst_Fire" title="Burst Fire"><img alt="Burst Fire" src="/wiki/images/Zeri_Burst_Fire.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Burst_Fire" title="Zeri/LoL">Burst Fire</a></span></span></i>, up to a maximum of 100 charge. Her <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> consume charge to deal <b>modified</b> damage.<br><b>Zeri</b> gains maximum charge when the game starts and upon <a href="/wiki/Respawn" class="mw-redirect" title="Respawn">respawning</a>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Innate:',
            raw: 'Zeri generates 1 charge for every 40 units she travels by any means and 10 charge every time she casts  Burst Fire, up to a maximum of 100 charge',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'generates 1 charge for every 40 units she travels by any means and 10 charge every time she casts  Burst Fire, up to a maximum of 100 charge',
            pre: 'Zeri generates 1 charge for every 40 units she travels by any means and 10 charge every time she casts  Burst Fire, up to a maximum of 100 charge',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Basic_Attack.png',
        description:
          'Basic Attack: Zeri zaps the target, applying spell effects as  spell damage, and triggering on-cast effects. This cannot  critically strike nor trigger  on-hit and on-attack effects.',
        descriptionHTML:
          '<a href="/wiki/Basic_Attack" class="mw-redirect" title="Basic Attack"><span class="template_sbc"><b>Basic Attack:</b></span></a> <b>Zeri</b> zaps the target, applying <a href="/wiki/Spell_effects" class="mw-redirect" title="Spell effects">spell effects</a> as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell damage"><a href="/wiki/Damage" title="Damage"><img alt="Disintegrate.png" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">spell damage</a></span>, and triggering on-cast effects. This cannot <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> nor trigger <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Zeri_Basic_Attack.png',
        description:
          "While not at full charge, Zeri's attacks deal 10 − 25 (based on level) (+ 3% AP) magic damage, and  execute targets below 60 − 150 (based on level) (+ 18% AP) health. Each attack consumes 10 charge if she has enough already.",
        descriptionHTML:
          'While not at full charge, <b>Zeri\'s</b> attacks deal <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-useformula="10+(15/17)*(x-1)*(0.7025+0.0175*(x-1))" data-bot_values="10;10.64;11.3;12;12.73;13.49;14.28;15.1;15.95;16.83;17.74;18.69;19.66;20.67;21.7;22.77;23.87;25" data-top_values="">10 − 25 (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;3% AP)</span> <span style="color: #00B0F0; white-space:normal">magic damage</span>, and <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">execute</span> targets <span style="color: #1F995C; white-space:normal">below <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-useformula="6*10+(6*15/17)*(x-1)*(0.7025+0.0175*(x-1))" data-bot_values="60;63.81;67.81;71.99;76.36;80.91;85.65;90.57;95.68;100.98;106.46;112.12;117.97;124.01;130.23;136.63;143.22;150" data-top_values="">60 − 150 (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;18% AP)</span> <span style="color: #1F995C; white-space:normal">health</span>. Each attack consumes 10 charge if she has enough already.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: "While not at full charge, Zeri's attacks deal 10 − 25 (based on level) (+ 3% AP) magic damage, and  execute targets below 60 − 150 (based on level) (+ 18% AP) health",
            healType: 'OutgoingHeals',
            values: [
              10, 10.88, 11.76, 12.65, 13.53, 14.41, 15.29, 16.18, 17.06, 17.94,
              18.82, 19.71, 20.59, 21.47, 22.35, 23.24, 24.12, 25,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'magic damage, and  execute targets below 60 − 150',
            pre: "While not at full charge, Zeri's attacks deal 10 − 25",
            post: 'magic damage, and  execute targets below 60 − 150',
            children: [
              {
                values: 3,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 3% AP',
              },
              {
                values: 18,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 18% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Each attack consumes 10 charge if she has enough already.',
            damagetype: 'None',
            values: 1,
            units: 'total_ad',
            unitsText: 'attack consumes 10 charge if she has enough already.',
            pre: 'Each attack consumes 10 charge if she has enough already.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Zeri_Basic_Attack_2.png',
        description:
          "At full charge, Zeri's next attack is empowered to consume all charge to deal 90 − 200 (based on level) (+ 110% AP) (+ 1% − 15% (based on level) of target's maximum health) magic damage. The damage based on the target's health ratio is capped at 300 against  monsters.",
        descriptionHTML:
          'At full charge, <b>Zeri\'s</b> next attack is empowered to consume all charge to deal <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-useformula="90+(110/17)*(x-1)*(0.7025+0.0175*(x-1))" data-bot_values="90;94.66;99.54;104.66;109.99;115.56;121.35;127.37;133.61;140.08;146.78;153.7;160.85;168.23;175.83;183.66;191.72;200" data-top_values="">90 − 200 (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;110% AP)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-useformula="1+(14/17)*(x-1)*(0.7025+0.0175*(x-1))" data-bot_values="1;1.59;2.21;2.87;3.54;4.25;4.99;5.76;6.55;7.37;8.23;9.11;10.02;10.96;11.92;12.92;13.95;15" data-top_values="" data-bot_key="%">1% − 15% (based on level)</span> of target\'s <b>maximum</b> health)</span> <span style="color: #00B0F0; white-space:normal">magic damage</span>. The damage based on the target\'s health ratio is capped at 300 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: "At full charge, Zeri's next attack is empowered to consume all charge to deal 90 − 200 (based on level) (+ 110% AP) (+ 1% − 15% (based on level) of target's maximum health) magic damage",
            healType: 'OutgoingHeals',
            values: [
              90, 96.47, 102.94, 109.41, 115.88, 122.35, 128.82, 135.29, 141.76,
              148.24, 154.71, 161.18, 167.65, 174.12, 180.59, 187.06, 193.53,
              200,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'magic damage',
            pre: "At full charge, Zeri's next attack is empowered to consume all charge to deal 90 − 200",
            post: 'magic damage',
            children: [
              {
                values: 110,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 110% AP',
              },
              {
                values: [],
                valuesIsPercent: true,
                basedOn: 'level',
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of target's maximum health",
                pre: '+ 1% − 15%',
                post: "of target's maximum health",
              },
            ],
          },
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: "The damage based on the target's health ratio is capped at 300 against  monsters.",
            healType: 'OutgoingHeals',
            values: 3,
            units: 'total_ap',
            unitsText:
              "damage based on the target's health ratio is capped at 300 against  monsters.",
            pre: "The damage based on the target's health ratio is capped at 300 against  monsters.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Self',
    damagetype: 'magic',
    spelleffects: 'Spell',
    spellshield: 'Special',
    projectile: 'false',
    notes:
      '* Charged attacks only deal the <b>base</b> damage to <a href="/wiki/Structure" class="mw-redirect" title="Structure">structures</a>.\n<ul><li>Uncharged attacks do not execute enemies that are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shielded</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invulnerable"><a href="/wiki/Invulnerability" title="Invulnerability"><img alt="Cosmic Radiance.png" src="/wiki/images/Taric_Cosmic_Radiance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability" title="Invulnerability">invulnerable</a></span> while below the health threshold.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will only block a fully charged attack. Uncharged attacks are not blocked.</li>\n<li>The attack\'s range is <b>not</b> increased from attack range increases (<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Rapid Firecannon" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rapid_Firecannon" title="Rapid Firecannon"><img alt="Rapid Firecannon" src="/wiki/images/Rapid_Firecannon_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rapid_Firecannon" title="Rapid Firecannon">Rapid Firecannon</a></span></span>, <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Lethal Tempo" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lethal_Tempo_(Rune)" title="Lethal Tempo"><img alt="Lethal Tempo" src="/wiki/images/Lethal_Tempo_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Lethal_Tempo_(Rune)" class="mw-redirect" title="Lethal Tempo (Rune)">Lethal Tempo</a></span></span>). Instead, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Burst Fire" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Burst_Fire" title="Burst Fire\'s"><img alt="Burst Fire\'s" src="/wiki/images/Zeri_Burst_Fire.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Burst_Fire" title="Zeri/LoL">Burst Fire\'s</a></span></span> reach is.</li>\n<li>Uncharged and charged attacks trigger <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Tear of the Goddess" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tear_of_the_Goddess" title="Tear of the Goddess\'"><img alt="Tear of the Goddess\'" src="/wiki/images/Tear_of_the_Goddess_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tear_of_the_Goddess" title="Tear of the Goddess">Tear of the Goddess\'</a></span></span> <a href="/wiki/Named_item_effect#Mana_Charge" title="Named item effect">Mana Charge</a>.</li>\n<li>The empowered attack will trigger but not be consumed against <a href="/wiki/Ward" title="Ward">wards</a>.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Zeri_Original_BasicAttackEmpowered_3.ogg   "Electrocute!"',
  },
  'Living Battery': {
    name: 'Living Battery',
    display_name: 'Living Battery',
    champion: 'Zeri',
    skill: 'I',
    image: {
      full: 'ZeriP.png',
      sprite: 'passive5.png',
      group: 'passive',
      x: 336,
      y: 0,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL" title="Zeri"><img alt="Zeri" src="/wiki/images/Zeri_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL" title="Zeri/LoL">Zeri</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span> herself for a portion of the damage she deals against shields.',
      '<span class="template_sbc"><b>Innate - Gotta Zip!:</b></span> Whenever <b>Zeri</b> receives a <span style="white-space:nowrap"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;shield</span>, she gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for a short time.',
    ],
    description: [
      {
        icon: '/wiki/images/Zeri_Living_Battery.png',
        description:
          'Innate: Zeri absorbs the energy of  shields she damages, granting herself a shield equal to 60% of the post-mitigation damage dealt to the shield. Each instance of shield gained by Living Battery lasts for 3 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Zeri</b> absorbs the energy of <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span> she damages, granting herself a shield equal to 60% of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after modifiers">post-mitigation damage</span> dealt to the shield. Each instance of shield gained by <i>Living Battery</i> lasts for 3 seconds.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Innate:',
            raw: 'Zeri absorbs the energy of  shields she damages, granting herself a shield equal to 60% of the post-mitigation damage dealt to the shield',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: 6,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'of the post-mitigation damage dealt to the shieldabsorbs the energy of  shields she damages, granting herself a shield equal to 60',
            pre: 'Zeri absorbs the energy of  shields she damages, granting herself a shield equal to 60% of the post-mitigation damage dealt to the shield',
          },
          {
            effectType: 'Shield',
            name: 'Line 2:',
            raw: 'Each instance of shield gained by Living Battery lasts for 3 seconds.',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'instance of shield gained by Living Battery lasts for 3 seconds.',
            pre: 'Each instance of shield gained by Living Battery lasts for 3 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Zeri_Living_Battery_2.png',
        description:
          'Innate - Gotta Zip!: Whenever Zeri gains a shield, she gains  10% bonus movement speed for 2 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Gotta Zip!:</b></span> Whenever <b>Zeri</b> gains a shield, she gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">10% <b>bonus</b> movement speed</span></span> for 2 seconds.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Innate - Gotta Zip!:',
            raw: 'Whenever Zeri gains a shield, she gains  10% bonus movement speed for 2 seconds.',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'bonus movement speed for 2 seconds.Zeri gains a shield, she gains  10',
            pre: 'Whenever Zeri gains a shield, she gains  10% bonus movement speed for 2 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes:
      '* <b>Zeri</b> will grant herself a normal shield, even when dealing damage to <a href="/wiki/Shield#Physical_shields" title="Shield">physical shields</a> or <a href="/wiki/Shield#Magic_shields" title="Shield">magic shields</a>.\n<ul><li>Damage dealt by <a href="/wiki/Summoner_spell" title="Summoner spell">summoner spells</a> to shields do not trigger <i>Living Battery</i>.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup></li></ul>',
  },
  'Burst Fire': {
    name: 'Burst Fire',
    display_name: 'Burst Fire',
    champion: 'Zeri',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'ZeriQ.png',
      sprite: 'spell16.png',
      group: 'spell',
      x: 192,
      y: 0,
      w: 48,
      h: 48,
    },
    range: '750 + 100% bonus attack range',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Active spray missiles">80</span>',
    angle:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Angle at which the outermost missiles fan out from one another, 2.5 degree from the center">5°</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Decreased spread angle during ult">2°</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Active spray missile speed">2600</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Empowered spray missile speed while Overcharged">3400</span>',
    cost: 'None',
    static:
      '1&nbsp;÷&nbsp;<b>Zeri\'s</b> <span style="color:orangered; white-space:normal">attack speed</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL" title="Zeri"><img alt="Zeri" src="/wiki/images/Zeri_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL" title="Zeri/LoL">Zeri</a></span></span> fires a burst of 7 rounds in the target direction that each deal <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy hit. This is treated as a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack"><a href="/wiki/Basic_attack" title="Basic attack">basic attack</a></span>, can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>, and applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects to the first enemy hit.',
      'The <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> scales down with <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">attack speed</span></span>, up to a cap. A portion of the excess <span style="color:orangered; white-space:normal">attack speed</span> is converted into <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Zeri_Burst_Fire.png',
        description:
          'Active: Zeri fires a burst of 7 rounds in the target direction that each deal physical damage to the first enemy hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Zeri</b> fires a burst of 7 rounds in the target direction that each deal <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy hit.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Zeri fires a burst of 7 rounds in the target direction that each deal physical damage to the first enemy hit.',
            damagetype: 'Physical',
            values: 7,
            user: 'none',
            units: '',
            unitsText:
              'fires a burst of 7 rounds in the target direction that each deal physical damage to the first enemy hit.',
            pre: 'Zeri fires a burst of 7 rounds in the target direction that each deal physical damage to the first enemy hit.',
          },
        ],
        leveling: [
          {
            name: 'Total Physical Damage:',
            values:
              '15 / 17 / 19 / 21 / 23 (+ 104 / 108 / 112 / 116 / 120% AD)',
            valuesHTML:
              '15 / 17 / 19 / 21 / 23 <span style="color:orange; white-space:normal">(+&nbsp;104 / 108 / 112 / 116 / 120% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Total Physical Damage:',
            raw: '15 / 17 / 19 / 21 / 23 (+ 104 / 108 / 112 / 116 / 120% AD)',
            damagetype: 'Physical',
            values: [15, 17, 19, 21, 23],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 17 / 19 / 21 / 23',
            children: [
              {
                values: [104, 108, 112, 116, 120],
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 104 / 108 / 112 / 116 / 120% AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Burst Fire's projectile is treated as a basic attack: it hits any enemy unit a typical basic attack can; deals  basic damage; can  critically strike for (75% +  35%) bonus damage; and applies  on-hit and on-attack effects at 100% effectiveness to the first enemy hit. Burst Fire's  cooldown and cast time are reduced with  attack speed, with the maximum of 1.5 attacks per second. 70% of attack speed in excess of the cap is converted into  bonus attack damage.",
        descriptionHTML:
          '<i>Burst Fire\'s</i> projectile is treated as a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack"><a href="/wiki/Basic_attack" title="Basic attack">basic attack</a></span>: it hits any enemy unit a typical basic attack can; deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic damage"><a href="/wiki/Damage" title="Damage"><img alt="Basic Attack.png" src="/wiki/images/Basic_Attack.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">basic damage</a></span>; can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for <span style="color: #944B00; white-space:normal">(75%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="35%"><img alt="35%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">35%</a></span></span>)</span> <b>bonus</b> damage; and applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects at 100% effectiveness to the first enemy hit. <i>Burst Fire\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> and cast time are reduced with <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">attack speed</span></span>, with the maximum of <span style="color:orangered; white-space:normal">1.<small>5</small></span> attacks per second. 70% of <span style="color:orangered; white-space:normal">attack speed</span> in excess of the cap is converted into <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: "Burst Fire's projectile is treated as a basic attack:",
            raw: 'it hits any enemy unit a typical basic attack can; deals  basic damage; can  critically strike for (75% +  35%) bonus damage; and applies  on-hit and on-attack effects at 100% effectiveness to the first enemy hit',
            damagetype: 'None',
            values: 0,
            units: 'total_ap',
            unitsText:
              'bonus damage; and applies  on-hit and on-attack effects at 100% effectiveness to the first enemy hit',
            pre: 'it hits any enemy unit a typical basic attack can; deals  basic damage; can  critically strike for',
            post: 'bonus damage; and applies  on-hit and on-attack effects at 100% effectiveness to the first enemy hit',
            children: [
              {
                values: 75,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: '+  35',
                pre: '75% +  35%',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: "Burst Fire's  cooldown and cast time are reduced with  attack speed, with the maximum of 1.5 attacks per second",
            values: 1,
            units: 'total_ad',
            unitsText:
              "Fire's  cooldown and cast time are reduced with  attack speed, with the maximum of 1.5 attacks per second",
            pre: "Burst Fire's  cooldown and cast time are reduced with  attack speed, with the maximum of 1.5 attacks per second",
          },
          {
            effectType: 'Damage',
            name: 'Line 3:',
            raw: '70% of attack speed in excess of the cap is converted into  bonus attack damage.',
            damagetype: 'None',
            values: 70,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              'of attack speed in excess of the cap is converted into  bonus attack damage.',
            pre: '70% of attack speed in excess of the cap is converted into  bonus attack damage.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Self, Enemies',
    damagetype: 'Physical',
    spelleffects: 'basic',
    spellshield: false,
    projectile: 'true',
    callforhelp: 'true',
    notes:
      '* <i>Burst Fire</i> is automatically learned with her first skill point upon spawning.\n<ul><li>Any of <i>Burst Fire\'s</i> rounds hitting a champion will draw minion aggro, regardless of whether or not other targets were hit first by <i>Burst Fire\'s</i> rounds.\n<ul><li>A lightning chain from a <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Lightning Crash" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Lightning_Crash" title="Lightning Crash"><img alt="Lightning Crash" src="/wiki/images/Zeri_Lightning_Crash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Lightning_Crash" title="Zeri/LoL">Lightning Crash</a></span></span> empowered <i>Burst Fire</i> will not draw minion aggro.</li></ul></li>\n<li><i>Burst Fire</i> does not trigger <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Tear of the Goddess" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tear_of_the_Goddess" title="Tear of the Goddess\'"><img alt="Tear of the Goddess\'" src="/wiki/images/Tear_of_the_Goddess_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tear_of_the_Goddess" title="Tear of the Goddess">Tear of the Goddess\'</a></span></span> <a href="/wiki/Named_item_effect#Mana_Charge" title="Named item effect">Mana Charge</a>.</li>\n<li><i>Burst Fire\'s</i> cooldown is not reduced by <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Navori Quickblades" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Navori_Quickblades" title="Navori Quickblades"><img alt="Navori Quickblades" src="/wiki/images/Navori_Quickblades_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Navori_Quickblades" title="Navori Quickblades">Navori Quickblades</a></span></span> whenever it critically strikes.</li>\n<li><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Amumu" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Amumu/LoL" title="Amumu\'s"><img alt="Amumu\'s" src="/wiki/images/Amumu_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Amumu/LoL" title="Amumu/LoL">Amumu\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Amumu" data-ability="Tantrum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Amumu/LoL#Tantrum" title="Tantrum\'s"><img alt="Tantrum\'s" src="/wiki/images/Amumu_Tantrum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Amumu/LoL#Tantrum" title="Amumu/LoL">Tantrum\'s</a></span></span></span>, <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fizz" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fizz/LoL" title="Fizz\'s"><img alt="Fizz\'s" src="/wiki/images/Fizz_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fizz/LoL" title="Fizz/LoL">Fizz\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fizz" data-ability="Nimble Fighter" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fizz/LoL#Nimble_Fighter" title="Nimble Fighter\'s"><img alt="Nimble Fighter\'s" src="/wiki/images/Fizz_Nimble_Fighter.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fizz/LoL#Nimble_Fighter" title="Fizz/LoL">Nimble Fighter\'s</a></span></span></span>, and <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Leona" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Leona/LoL" title="Leona\'s"><img alt="Leona\'s" src="/wiki/images/Leona_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Leona/LoL" title="Leona/LoL">Leona\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Leona" data-ability="Eclipse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Leona/LoL#Eclipse" title="Eclipse\'s"><img alt="Eclipse\'s" src="/wiki/images/Leona_Eclipse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Leona/LoL#Eclipse" title="Leona/LoL">Eclipse\'s</a></span></span></span> flat damage reduction apply to <b>each</b> of the 7 instances of damage from <i>Burst Fire</i>.\n<ul><li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Warden\'s Mail" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Warden%27s_Mail" title="Warden\'s Mail\'s"><img alt="Warden\'s Mail\'s" src="/wiki/images/Warden%27s_Mail_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Warden%27s_Mail" title="Warden\'s Mail">Warden\'s Mail\'s</a></span></span> flat damage reduction and cap only apply to the first instance of damage.</li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Guardian\'s Horn" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Guardian%27s_Horn" title="Guardian\'s Horn\'s"><img alt="Guardian\'s Horn\'s" src="/wiki/images/Guardian%27s_Horn_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Guardian%27s_Horn" title="Guardian\'s Horn">Guardian\'s Horn\'s</a></span></span> flat damage reduction only applies to the first instance of damage, but handles it as damage-over-time (reduced to 25% effectiveness).</li></ul></li>\n<li><i>Burst Fire</i> still counts as an ability activation for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.</li>\n<li><i>Burst Fire</i> can hit <b>all</b> enemy units that a basic attack would be able to target. This does include <a href="/wiki/Jungle_plants" title="Jungle plants">jungle plants</a>, <a href="/wiki/Structure" class="mw-redirect" title="Structure">structures</a>, and <a href="/wiki/Ward" title="Ward">wards</a>.\n<ul><li>Wards will only be hit once by <i>Burst Fire</i>. <a href="/wiki/Stealth#Stealthed_traps_and_wards" title="Stealth">Stealthed wards and traps</a> will not be hit.</li>\n<li>Champion-summoned units behave differently depending on the unit.\n<ul><li><i>Gangplank\'s</i> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gangplank" data-ability="Powder Keg" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gangplank/LoL#Powder_Keg" title="Powder Keg"><img alt="Powder Keg" src="/wiki/images/Gangplank_Powder_Keg.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gangplank/LoL#Powder_Keg" title="Gangplank/LoL">Powder Keg</a></span></span> and <i>Yorick’s</i> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yorick" data-ability="Dark Procession" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yorick/LoL#Dark_Procession" title="Dark Procession"><img alt="Dark Procession" src="/wiki/images/Yorick_Dark_Procession.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yorick/LoL#Dark_Procession" title="Yorick/LoL">Dark Procession</a></span></span> are hit only once by <i>Burst Fire</i>, and any subsequent rounds not empowered by <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Spark Surge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Spark_Surge" title="Spark Surge"><img alt="Spark Surge" src="/wiki/images/Zeri_Spark_Surge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Spark_Surge" title="Zeri/LoL">Spark Surge</a></span></span> will stop upon reaching the same object.</li>\n<li><i>Kalista’s</i> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kalista" data-ability="Sentinel" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kalista/LoL#Sentinel" title="Sentinel"><img alt="Sentinel" src="/wiki/images/Kalista_Sentinel.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kalista/LoL#Sentinel" title="Kalista/LoL">Sentinel</a></span></span> is hit only once by <i>Burst Fire</i>, but any subsequent rounds will continue to travel through the <i>Sentinel</i>.</li></ul></li></ul></li>\n<li>If <i>Burst Fire</i> hits an enemy while <b>Zeri</b> is not visible to enemies, the area around her (400 units) will be revealed for 4.<small>5</small> seconds.</li>\n<li><i>Burst Fire</i> rolls <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> for all rounds as well as the additional physical damage dealt when <b>Zeri</b> is <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Lightning Crash" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Lightning_Crash" title="Overcharged"><img alt="Overcharged" src="/wiki/images/Zeri_Lightning_Crash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Lightning_Crash" title="Zeri/LoL">Overcharged</a></span></span>.</li>\n<li><i>Burst Fire</i> is parried by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodge</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">block</a></span>.\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">Blind</a></span> causes <i>Burst Fire</i> to cast in a random direction. The rounds will still deal damage to enemies hit.</li></ul></li>\n<li><i>Burst Fire\'s</i> rounds are each fired in the target direction from where <b>Zeri</b> is at the time.</li>\n<li><b>Only</b> attack speed granted by being <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Lightning Crash" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Lightning_Crash" title="Overcharged"><img alt="Overcharged" src="/wiki/images/Zeri_Lightning_Crash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Lightning_Crash" title="Zeri/LoL">Overcharged</a></span></span> can exceed the cap of 1.<small>5</small>.\n<ul><li><span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Hail of Blades" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hail_of_Blades_(Rune)" title="Hail of Blades"><img alt="Hail of Blades" src="/wiki/images/Hail_of_Blades_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Hail_of_Blades_(Rune)" class="mw-redirect" title="Hail of Blades (Rune)">Hail of Blades</a></span></span> and <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Lethal Tempo" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lethal_Tempo_(Rune)" title="Lethal Tempo"><img alt="Lethal Tempo" src="/wiki/images/Lethal_Tempo_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Lethal_Tempo_(Rune)" class="mw-redirect" title="Lethal Tempo (Rune)">Lethal Tempo</a></span></span> do not allow <b>Zeri</b> to exceed her attack speed cap.</li></ul></li>\n<li>Items and runes that trigger off of attacking [eg <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Fleet Footwork" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fleet_Footwork_(Rune)" title="Fleet Footwork"><img alt="Fleet Footwork" src="/wiki/images/Fleet_Footwork_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Fleet_Footwork_(Rune)" class="mw-redirect" title="Fleet Footwork (Rune)">Fleet Footwork</a></span></span>, <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Phantom Dancer" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Phantom_Dancer" title="Phantom Dancer"><img alt="Phantom Dancer" src="/wiki/images/Phantom_Dancer_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Phantom_Dancer" title="Phantom Dancer">Phantom Dancer</a></span></span>] will only trigger if <i>Burst Fire</i> hits a unit.</li>\n<li>If Zeri would get full <a href="/wiki/Named_item_effect#Energized" title="Named item effect">Energized</a> stacks from a <i>Burst Fire</i>, the rest of the rounds will trigger Energized.</li>\n<li><i>Burst Fire\'s</i> cast-indicator does not show the increased range when <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Rapid Firecannon" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rapid_Firecannon" title="Rapid Firecannon"><img alt="Rapid Firecannon" src="/wiki/images/Rapid_Firecannon_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rapid_Firecannon" title="Rapid Firecannon">Rapid Firecannon</a></span></span> is ready.</li>\n<li><i>Burst Fire</i> uses a modified icon when empowered by <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Spark Surge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Spark_Surge" title="Spark Surge"><img alt="Spark Surge" src="/wiki/images/Zeri_Spark_Surge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Spark_Surge" title="Zeri/LoL">Spark Surge</a></span></span> (<img alt="Zeri Burst Fire 2.png" src="/wiki/images/Zeri_Burst_Fire_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload">) and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Lightning Crash" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Lightning_Crash" title="Lightning Crash"><img alt="Lightning Crash" src="/wiki/images/Zeri_Lightning_Crash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Lightning_Crash" title="Zeri/LoL">Lightning Crash</a></span></span> (<img alt="Zeri Burst Fire 3.png" src="/wiki/images/Zeri_Burst_Fire_3.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload">) as well as both (<img alt="Zeri Burst Fire 4.png" src="/wiki/images/Zeri_Burst_Fire_4.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload">).</li></ul>',
  },
  'Ultrashock Laser': {
    name: 'Ultrashock Laser',
    display_name: 'Ultrashock Laser',
    champion: 'Zeri',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'ZeriW.png',
      sprite: 'spell16.png',
      group: 'spell',
      x: 240,
      y: 0,
      w: 48,
      h: 48,
    },
    range: '1200 /  1500',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Initial missile">80</span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Laser beam width">200</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Initial missile">2500</span>',
    cast_time:
      '<span style="color:orangered; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="bonus attack speed" data-displayformula="0.55-0.09 per 100% \'\'\'bonus\'\'\' attack speed)). \'\'This is capped at 45.5% reduction at 277.8% \'\'\'bonus\'\'\' attack speed.\'\'" data-bot_values="0.55;0.528;0.495;0.462;0.429;0.396;0.363;0.33;0.3" data-top_values="0;24.44;61.11;97.78;134.44;171.11;207.78;244.44;277.78" data-top_key="%">0.<small>55</small> − 0.<small>3</small> (based on <b>bonus</b> attack speed)</span></span>',
    cost: '50 / 60 / 70 / 80 / 90',
    costtype: 'Mana',
    cooldown: '12 / 11 / 10 / 9 / 8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL" title="Zeri"><img alt="Zeri" src="/wiki/images/Zeri_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL" title="Zeri/LoL">Zeri</a></span></span> fires an electric pulse in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for a short duration.',
      'If this hits <a href="/wiki/Terrain" title="Terrain">terrain</a>, it transforms into a laser that fires in a line, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically striking</a></span> against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Zeri_Ultrashock_Laser.png',
        description:
          'Active: Zeri fires an electric pulse in the target direction that deals physical damage to the first enemy hit and  slows them for 2 seconds.If the pulse hits terrain, it transforms into a laser in a line that grants  sight of the area for 1.75 seconds and fires after 0.85 seconds, applying the same effects to enemies hit and  critically striking for (75% +  35%) bonus damage against  champions and  monsters.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Zeri</b> fires an electric pulse in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for 2 seconds.<br><br>If the pulse hits <a href="/wiki/Terrain" title="Terrain">terrain</a>, it transforms into a laser in a line that grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area for 1.<small>75</small> seconds and fires after 0.<small>85</small> seconds, applying the same effects to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically striking</a></span> for <span style="color: #944B00; white-space:normal">(75%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="35%"><img alt="35%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">35%</a></span></span>)</span> <b>bonus</b> damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Zeri fires an electric pulse in the target direction that deals physical damage to the first enemy hit and  slows them for 2 seconds.If the pulse hits terrain, it transforms into a laser in a line that grants  sight of the area for 1.75 seconds and fires after 0.85 seconds, applying the same effects to enemies hit and  critically striking for (75% +  35%) bonus damage against  champions and  monsters.',
            values: 2,
            user: 'none',
            units: '',
            unitsText: 'bonus damage against  champions and  monsters.',
            pre: 'Zeri fires an electric pulse in the target direction that deals physical damage to the first enemy hit and  slows them for 2 seconds.If the pulse hits terrain, it transforms into a laser in a line that grants  sight of the area for 1.75 seconds and fires after 0.85 seconds, applying the same effects to enemies hit and  critically striking for',
            post: 'bonus damage against  champions and  monsters.',
            children: [
              {
                values: 75,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: '+  35',
                pre: '75% +  35%',
              },
            ],
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '20 / 60 / 100 / 140 / 180 (+ 130% AD) (+ 25% AP)',
            valuesHTML:
              '20 / 60 / 100 / 140 / 180 <span style="color:orange; white-space:normal">(+&nbsp;130% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;25% AP)</span>',
          },
          {
            name: 'Slow:',
            values: '30 / 35 / 40 / 45 / 50%',
            valuesHTML: '30 / 35 / 40 / 45 / 50%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '20 / 60 / 100 / 140 / 180 (+ 130% AD) (+ 25% AP)',
            damagetype: 'Physical',
            values: [20, 60, 100, 140, 180],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 60 / 100 / 140 / 180',
            children: [
              {
                values: 130,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 130% AD',
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
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '30 / 35 / 40 / 45 / 50%',
            values: [30, 35, 40, 45, 50],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 35 / 40 / 45 / 50%',
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'special',
    spellshield: true,
    projectile: 'special',
    notes:
      '* Applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell damage"><a href="/wiki/Damage" title="Damage"><img alt="Disintegrate.png" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">spell damage</a></span> for the pulse and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span> for the laser.\n<ul><li>The pulse missile is blocked by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">projectile-interception</a></span> effects but not the laser.</li>\n<li><i>Ultrashock Laser</i> interacts with <a href="/wiki/Terrain#Player-Generated" title="Terrain">player-generated terrain</a>.</li>\n<li>This ability will cast from wherever the caster is at the start of the cast time.</li></ul>',
  },
  'Spark Surge': {
    name: 'Spark Surge',
    display_name: 'Spark Surge',
    champion: 'Zeri',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'ZeriE.png',
      sprite: 'spell16.png',
      group: 'spell',
      x: 288,
      y: 0,
      w: 48,
      h: 48,
    },
    range: '300',
    speed:
      '600 + <span style="color: #F5EE99; white-space:normal">100% movement speed</span>',
    cast_time: 'None',
    cost: '90 / 85 / 80 / 75 / 70',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on-cast">22 / 21 / 20 / 19 / 18</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL" title="Zeri"><img alt="Zeri" src="/wiki/images/Zeri_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL" title="Zeri/LoL">Zeri</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction, she will dash across any <a href="/wiki/Terrain" title="Terrain">terrain</a> she hits. Afterwards, she gains <i>Lightning Rounds</i> for a short time.',
      '<i>Spark Surge\'s</i> cooldown is <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduced</span> for every enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> hit by her <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Basic Attack 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Basic_Attack_2" title="charged"><img alt="charged" src="/wiki/images/Zeri_Basic_Attack_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Basic_Attack_2" title="Zeri/LoL">charged</a></span></span></i> basic attacks and abilities, increased on <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strikes"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strikes</a></span>.',
      '<span class="template_sbc"><b>Lightning Rounds:</b></span> <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Burst Fire 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Burst_Fire_2" title="Burst Fire"><img alt="Burst Fire" src="/wiki/images/Zeri_Burst_Fire_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Burst_Fire_2" title="Zeri/LoL">Burst Fire</a></span></span></i> deals <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> to the first enemy hit and will pierce through enemies to deal modified damage.',
    ],
    description: [
      {
        icon: '/wiki/images/Zeri_Spark_Surge.png',
        description:
          'Active: Zeri  dashes in the target direction. She will dash farther across terrain if Spark Surge was cast within 50 units of any, gaining  unobstructed vision of the surrounding 800 units and  revealing herself while there are enemy champions within 1500 units of her.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Zeri</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction. She will dash farther across <a href="/wiki/Terrain" title="Terrain">terrain</a> if <i>Spark Surge</i> was cast within 50 units of any, gaining <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Unobstructed vision"><a href="/wiki/Sight#Unobstructed_vision" title="Sight#Unobstructed vision"><img alt="Stealth Ward icon.png" src="/wiki/images/Stealth_Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#Unobstructed_vision" title="Sight">unobstructed vision</a></span> of the surrounding 800 units and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> herself while there are enemy champions within 1500 units of her.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'She will dash farther across terrain if Spark Surge was cast within 50 units of any, gaining  unobstructed vision of the surrounding 800 units and  revealing herself while there are enemy champions within 1500 units of her.',
            values: 5,
            user: 'none',
            units: '',
            unitsText:
              'will dash farther across terrain if Spark Surge was cast within 50 units of any, gaining  unobstructed vision of the surrounding 800 units and  revealing herself while there are enemy champions within 1500 units of her.',
            pre: 'She will dash farther across terrain if Spark Surge was cast within 50 units of any, gaining  unobstructed vision of the surrounding 800 units and  revealing herself while there are enemy champions within 1500 units of her.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Afterwards, she gains Lightning Rounds for 5 seconds, empowering  Burst Fire to deal bonus magic damage to the first enemy hit, increased by 0% − 65% (based on critical strike chance), and pierce through enemies, though dealing modified damage after the first and not applying attack effects nor  life steal to secondary targets. This damage is affected by  critical strike modifiers.',
        descriptionHTML:
          'Afterwards, she gains <i>Lightning Rounds</i> for 5 seconds, empowering <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Burst Fire 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Burst_Fire_2" title="Burst Fire"><img alt="Burst Fire" src="/wiki/images/Zeri_Burst_Fire_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Burst_Fire_2" title="Zeri/LoL">Burst Fire</a></span></span></i> to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> to the first enemy hit, increased by <span style="color: #E56013; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="critical strike chance" data-start="0;0" data-finish="65;100" data-bot_values="0;6.5;13;19.5;26;32.5;39;45.5;52;58.5;65" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 65% (based on critical strike chance)</span></span>, and pierce through enemies, though dealing modified damage after the first and not applying attack effects nor <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> to secondary targets. This damage is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Afterwards, she gains Lightning Rounds for 5 seconds, empowering  Burst Fire to deal bonus magic damage to the first enemy hit, increased by 0% − 65% (based on critical strike chance), and pierce through enemies, though dealing modified damage after the first and not applying attack effects nor  life steal to secondary targets',
            increasedStat: 'lifesteal',
            values: 5,
            valuesIsPercent: true,
            basedOn: 'critical strike chance',
            units: '',
            unitsText:
              ', and pierce through enemies, though dealing modified damage after the first and not applying attack effects nor  life steal to secondary targets',
            pre: 'Afterwards, she gains Lightning Rounds for 5 seconds, empowering  Burst Fire to deal bonus magic damage to the first enemy hit, increased by 0% − 65%',
            post: ', and pierce through enemies, though dealing modified damage after the first and not applying attack effects nor  life steal to secondary targets',
          },
        ],
        leveling: [
          {
            name: 'Burst Fire Bonus Magic Damage:',
            values: '20 / 22 / 24 / 26 / 28 (+ 12% bonus AD) (+ 20% AP)',
            valuesHTML:
              '20 / 22 / 24 / 26 / 28 <span style="color:orange; white-space:normal">(+&nbsp;12% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;20% AP)</span>',
          },
          {
            name: 'Burst Fire Modified Damage:',
            values: '80 / 85 / 90 / 95 / 100%',
            valuesHTML: '80 / 85 / 90 / 95 / 100%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Burst Fire Bonus Magic Damage:',
            raw: '20 / 22 / 24 / 26 / 28 (+ 12% bonus AD) (+ 20% AP)',
            damagetype: 'Magic',
            values: [20, 22, 24, 26, 28],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 22 / 24 / 26 / 28',
            children: [
              {
                values: 12,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 12% bonus AD',
              },
              {
                values: 20,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 20% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Burst Fire Modified Damage:',
            raw: '80 / 85 / 90 / 95 / 100%',
            damagetype: 'None',
            values: [80, 85, 90, 95, 100],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 85 / 90 / 95 / 100%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Spark Surge's  current cooldown is reduced by 0.5 seconds for every  champion Zeri hits with  charged basic attacks or abilities, increased to 1.5 seconds if she does so with a cast of  Burst Fire or  Ultrashock Laser that  critically strikes.",
        descriptionHTML:
          '<i>Spark Surge\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> is reduced by 0.<small>5</small> seconds for every <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> <b>Zeri</b> hits with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Basic Attack 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Basic_Attack_2" title="charged"><img alt="charged" src="/wiki/images/Zeri_Basic_Attack_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Basic_Attack_2" title="Zeri/LoL">charged</a></span></span></i> basic attacks or abilities, increased to 1.<small>5</small> seconds if she does so with a cast of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Burst Fire" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Burst_Fire" title="Burst Fire"><img alt="Burst Fire" src="/wiki/images/Zeri_Burst_Fire.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Burst_Fire" title="Zeri/LoL">Burst Fire</a></span></span></i> or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Ultrashock Laser" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Ultrashock_Laser" title="Ultrashock Laser"><img alt="Ultrashock Laser" src="/wiki/images/Zeri_Ultrashock_Laser.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Ultrashock_Laser" title="Zeri/LoL">Ultrashock Laser</a></span></span></i> that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strikes</a></span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Spark Surge  resets Zeri's basic attack timer and  Burst Fire's cooldown.  Ultrashock Laser and  Lightning Crash can be cast during the dash.",
        descriptionHTML:
          '<i>Spark Surge <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Zeri\'s</b> basic attack timer and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Burst Fire" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Burst_Fire" title="Burst Fire\'s"><img alt="Burst Fire\'s" src="/wiki/images/Zeri_Burst_Fire.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Burst_Fire" title="Zeri/LoL">Burst Fire\'s</a></span></span> cooldown. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Ultrashock Laser" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Ultrashock_Laser" title="Ultrashock Laser"><img alt="Ultrashock Laser" src="/wiki/images/Zeri_Ultrashock_Laser.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Ultrashock_Laser" title="Zeri/LoL">Ultrashock Laser</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Lightning Crash" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Lightning_Crash" title="Lightning Crash"><img alt="Lightning Crash" src="/wiki/images/Zeri_Lightning_Crash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Lightning_Crash" title="Zeri/LoL">Lightning Crash</a></span></span> can be cast during the dash.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Self',
    notes:
      '* <i>Spark Surge\'s</i> extended dash travels based on the thickness of the terrain, up to a maximum distance.\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n\n<tbody><tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Burst Fire" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Burst_Fire" title="Burst Fire"><img alt="Burst Fire" src="/wiki/images/Zeri_Burst_Fire.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Burst_Fire" title="Zeri/LoL">Burst Fire</a></span></span> is disabled. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Ultrashock Laser" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Ultrashock_Laser" title="Ultrashock Laser"><img alt="Ultrashock Laser" src="/wiki/images/Zeri_Ultrashock_Laser.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Ultrashock_Laser" title="Zeri/LoL">Ultrashock Laser</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Lightning Crash" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Lightning_Crash" title="Lightning Crash"><img alt="Lightning Crash" src="/wiki/images/Zeri_Lightning_Crash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Lightning_Crash" title="Zeri/LoL">Lightning Crash</a></span></span> are usable.\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>All the other item-actives are usable\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Hextech Rocketbelt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt"><img alt="Hextech Rocketbelt" src="/wiki/images/Hextech_Rocketbelt_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt">Hextech Rocketbelt</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Galeforce" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Galeforce" title="Galeforce"><img alt="Galeforce" src="/wiki/images/Galeforce_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Galeforce" title="Galeforce">Galeforce</a></span></span>  <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Prowler\'s Claw" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Prowler%27s_Claw" title="Prowler\'s Claw"><img alt="Prowler\'s Claw" src="/wiki/images/Prowler%27s_Claw_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Prowler%27s_Claw" title="Prowler\'s Claw">Prowler\'s Claw</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>  <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death\n</li></td></tr></tbody></table>',
  },
  'Lightning Crash': {
    name: 'Lightning Crash',
    display_name: 'Lightning Crash',
    champion: 'Zeri',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'ZeriR.png',
      sprite: 'spell16.png',
      group: 'spell',
      x: 336,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Nova radius">825</span>',
    cast_time: '0.<small>25</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">100 / 92.<small>5</small> / 85 / 77.<small>5</small> / 70</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL" title="Zeri"><img alt="Zeri" src="/wiki/images/Zeri_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL" title="Zeri/LoL">Zeri</a></span></span> explodes to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies. If this hits at least one enemy champion, she enters <i>Overcharged</i> for a few seconds. Damaging an enemy will extend <i>Overcharged</i>.',
      '<span class="template_sbc"><b>Overcharged:</b></span> <b>Zeri</b> gains <span style="color:orangered; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack speed</span></span> and <span style="color: #F5EE99; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> move speed</span></span>. <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Burst Fire 3" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Burst_Fire_3" title="Burst Fire"><img alt="Burst Fire" src="/wiki/images/Zeri_Burst_Fire_3.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Burst_Fire_3" title="Zeri/LoL">Burst Fire</a></span></span></i> is empowered to instead fire 3 rounds that can chain up to 4 surrounding enemies to deal <span style="color: #FF8C34; white-space:normal">physical damage</span>.',
      'During <i>Overcharged</i>, <b>Zeri</b> generates a stack of <i>Overcharge</i> for each enemy champion hit by her abilities and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Basic Attack 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Basic_Attack_2" title="charged"><img alt="charged" src="/wiki/images/Zeri_Basic_Attack_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Basic_Attack_2" title="Zeri/LoL">charged</a></span></span></i> basic attacks, increased on abilities that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>. For each stack, she briefly gains <span style="color: #F5EE99; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> move speed</span></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Zeri_Lightning_Crash.png',
        description:
          'Active: Zeri discharges an electric nova that deals magic damage to nearby enemies. If this hits at least one enemy champion, she enters Overcharged for 5 seconds. Hitting an enemy champion with an ability or  charged basic attack will extend the duration by 1.5 seconds, up to its original duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Zeri</b> discharges an electric nova that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies. If this hits at least one enemy champion, she enters <i>Overcharged</i> for 5 seconds. Hitting an enemy champion with an ability or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Basic Attack 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Basic_Attack_2" title="charged"><img alt="charged" src="/wiki/images/Zeri_Basic_Attack_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Basic_Attack_2" title="Zeri/LoL">charged</a></span></span></i> basic attack will extend the duration by 1.<small>5</small> seconds, up to its original duration.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'If this hits at least one enemy champion, she enters Overcharged for 5 seconds',
            values: 5,
            user: 'none',
            units: '',
            unitsText:
              'this hits at least one enemy champion, she enters Overcharged for 5 seconds',
            pre: 'If this hits at least one enemy champion, she enters Overcharged for 5 seconds',
          },
          {
            effectType: 'Unique',
            name: 'Line 3:',
            raw: 'Hitting an enemy champion with an ability or  charged basic attack will extend the duration by 1.5 seconds, up to its original duration.',
            values: 1,
            units: 'total_ad',
            unitsText:
              'an enemy champion with an ability or  charged basic attack will extend the duration by 1.5 seconds, up to its original duration.',
            pre: 'Hitting an enemy champion with an ability or  charged basic attack will extend the duration by 1.5 seconds, up to its original duration.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '175 / 225 / 275 / 325 / 375 (+ 100% bonus AD) (+ 110% AP)',
            valuesHTML:
              '175 / 225 / 275 / 325 / 375 <span style="color:orange; white-space:normal">(+&nbsp;100% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;110% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '175 / 225 / 275 / 325 / 375 (+ 100% bonus AD) (+ 110% AP)',
            damagetype: 'Magic',
            values: [175, 225, 275, 325, 375],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '175 / 225 / 275 / 325 / 375',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 100% bonus AD',
              },
              {
                values: 110,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 110% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Overcharged: Zeri gains  30% bonus attack speed and  10% bonus movement speed.  Burst Fire is empowered to have a 20% shorter cast time and instead fire 3 rounds that travel with increased speed and chain to the nearest  visible enemy within 650 units of the target, up to 4 subsequent targets, to deal 25% AD physical damage. This damage can  critically strike for (18.75% +  8.75%) AD bonus physical damage.',
        descriptionHTML:
          '<span class="template_sbc"><b>Overcharged:</b></span> <b>Zeri</b> gains <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Can exceed Zeri\'s attack speed cap"><span style="color:orangered; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;30% <b>bonus</b> attack speed</span></span></span> and <span style="color: #F5EE99; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;10% <b>bonus</b> movement speed</span></span>. <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Burst Fire 3" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Burst_Fire_3" title="Burst Fire"><img alt="Burst Fire" src="/wiki/images/Zeri_Burst_Fire_3.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Burst_Fire_3" title="Zeri/LoL">Burst Fire</a></span></span></i> is empowered to have a 20% shorter cast time and instead fire 3 rounds that travel with increased speed and chain to the nearest <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy within 650 units of the target, up to 4 subsequent targets, to deal <span style="color:orange; white-space:normal">25% AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span>. This damage can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for <span style="color:orange; white-space:normal">(18.<small>75</small>%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="8.75%"><img alt="8.75%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">8.<small>75</small>%</a></span></span>) AD</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Overcharged:',
            raw: 'Zeri gains  30% bonus attack speed and  10% bonus movement speed',
            increasedStat: 'bonus_ad',
            values: 3,
            valuesIsPercent: true,
            units: '',
            unitsText: 'bonus attack speed and  10gains  30',
            pre: 'Zeri gains  30% bonus attack speed and  10% bonus movement speed',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: ' Burst Fire is empowered to have a 20% shorter cast time and instead fire 3 rounds that travel with increased speed and chain to the nearest  visible enemy within 650 units of the target, up to 4 subsequent targets, to deal 25% AD physical damage',
            damagetype: 'Physical',
            values: 2,
            valuesIsPercent: true,
            user: 'target',
            units: 'total_ad',
            unitsText:
              'shorter cast time and instead fire 3 rounds that travel with increased speed and chain to the nearest  visible enemy within 650 units of the target, up to 4 subsequent targets, to deal 25Fire is empowered to have a 20',
            pre: 'Burst Fire is empowered to have a 20% shorter cast time and instead fire 3 rounds that travel with increased speed and chain to the nearest  visible enemy within 650 units of the target, up to 4 subsequent targets, to deal 25% AD physical damage',
          },
          {
            effectType: 'Damage',
            name: 'Line 3:',
            raw: 'This damage can  critically strike for (18.75% +  8.75%) AD bonus physical damage.',
            damagetype: 'Physical',
            values: 0,
            units: 'bonus_ad',
            unitsText: 'AD bonus physical damage.',
            pre: 'This damage can  critically strike for',
            post: 'AD bonus physical damage.',
            children: [
              {
                values: 18.75,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: '+  8.75',
                pre: '18.75% +  8.75%',
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
          'During Overcharged, Zeri can generate stacks of Hypercharged from enemy champions that last 1.5 seconds. She generates 1 stack for each one she hits with an ability or  charged basic attack, increased to 3 on abilities that  critically strike. Subsequent hits refresh the duration of Hypercharged.  Burst Fire grants stacks only against the first target hit.',
        descriptionHTML:
          'During <i>Overcharged</i>, <b>Zeri</b> can generate <a href="/wiki/Stack" title="Stack">stacks</a> of <i>Hypercharged</i> from enemy champions that last 1.<small>5</small> seconds. She generates 1 stack for each one she hits with an ability or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Basic Attack 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Basic_Attack_2" title="charged"><img alt="charged" src="/wiki/images/Zeri_Basic_Attack_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Basic_Attack_2" title="Zeri/LoL">charged</a></span></span></i> basic attack, increased to 3 on abilities that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>. Subsequent hits refresh the duration of <i>Hypercharged</i>. <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Burst Fire 3" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Burst_Fire_3" title="Burst Fire"><img alt="Burst Fire" src="/wiki/images/Zeri_Burst_Fire_3.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Burst_Fire_3" title="Zeri/LoL">Burst Fire</a></span></span></i> grants stacks only against the first target hit.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Line 1:',
            raw: 'During Overcharged, Zeri can generate stacks of Hypercharged from enemy champions that last 1.5 seconds',
            min: 0,
            max: 10,
            description:
              'During Overcharged, Zeri can generate stacks of Hypercharged from enemy champions that last 1.5 seconds',
            values: 1,
            units: 'genericStacks',
            unitsText:
              'Overcharged, Zeri can generate stacks of Hypercharged from enemy champions that last 1.5 seconds',
            pre: 'During Overcharged, Zeri can generate stacks of Hypercharged from enemy champions that last 1.5 seconds',
          },
          {
            effectType: 'Stacks',
            name: 'Line 2:',
            raw: 'She generates 1 stack for each one she hits with an ability or  charged basic attack, increased to 3 on abilities that  critically strike',
            min: 0,
            max: 10,
            description:
              'She generates 1 stack for each one she hits with an ability or  charged basic attack, increased to 3 on abilities that  critically strike',
            values: 1,
            units: 'genericStacks',
            unitsText:
              'generates 1 stack for each one she hits with an ability or  charged basic attack, increased to 3 on abilities that  critically strike',
            pre: 'She generates 1 stack for each one she hits with an ability or  charged basic attack, increased to 3 on abilities that  critically strike',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Hypercharged: For each stack, Zeri gains  0.5% bonus movement speed.',
        descriptionHTML:
          '<span class="template_sbc"><b>Hypercharged:</b></span> For each stack, <b>Zeri</b> gains <span style="color: #F5EE99; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;0.<small>5</small>% <b>bonus</b> movement speed</span></span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self, Enemies',
    damagetype:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Physical damage"><a href="/wiki/Physical_damage" title="Physical damage"><img alt="Attack damage.png" src="/wiki/images/Attack_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Physical_damage" title="Physical damage">Physical</a></span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Magic damage"><a href="/wiki/Magic_damage" title="Magic damage"><img alt="Magic damage.png" src="/wiki/images/Magic_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Magic_damage" title="Magic damage">Magic</a></span>',
    spelleffects: 'special',
    spellshield: 'Special',
    projectile: 'false',
    notes:
      '* <b>Zeri</b> can move during <i>Lightning Crash\'s</i> cast time, and it does not interrupt her previous orders.\n<ul><li><b>Zeri</b> can stack <i>Overcharge</i> up to 100,000 times.</li>\n<li>Applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span> for the nova and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Proc damage"><a href="/wiki/Damage" title="Damage"><img alt="Wit\'s End item.png" src="/wiki/images/Wit%27s_End_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">proc damage</a></span> for the bonus magic damage and physical damage.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> blocks <i>Lightning Crash\'s</i> initial nova but does not prevent <b>Zeri</b> from becoming <i>Overcharged</i>.\n<ul><li>It does not block <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Burst Fire" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Burst_Fire" title="Burst Fire\'s"><img alt="Burst Fire\'s" src="/wiki/images/Zeri_Burst_Fire.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Burst_Fire" title="Zeri/LoL">Burst Fire\'s</a></span></span></i> electricity chain.</li></ul></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">Clones</a></span> count for granting <i>Overcharge</i>.</li>\n<li><i>Lightning Crash\'s</i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Spark Surge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Spark_Surge" title="Spark Surge\'s"><img alt="Spark Surge\'s" src="/wiki/images/Zeri_Spark_Surge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Spark_Surge" title="Zeri/LoL">Spark Surge\'s</a></span></span></i> empowerments to <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Burst Fire 4" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Burst_Fire_4" title="Burst Fire"><img alt="Burst Fire" src="/wiki/images/Zeri_Burst_Fire_4.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Burst_Fire_4" title="Zeri/LoL">Burst Fire</a></span></span></i> can combine together.</li>\n<li><i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zeri" data-ability="Burst Fire" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zeri/LoL#Burst_Fire" title="Burst Fire"><img alt="Burst Fire" src="/wiki/images/Zeri_Burst_Fire.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zeri/LoL#Burst_Fire" title="Zeri/LoL">Burst Fire</a></span></span></i> electricity chain will not chain across structures.</li>\n<li>If <b>Zeri</b> enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span> during <i>Overcharge</i>, she will lose all stacks of the effect but <i>Overcharge</i> will not end prematurely.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup>\n<ul><li>She cannot gain stacks again after reviving while the buff is active.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul></li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Zeri_Original_R_0.ogg   "Lightning crash!"',
  },
} satisfies { [skillName in string]: SkillData };
