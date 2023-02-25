import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Taric';

export default {
  Bravado: {
    name: 'Bravado',
    display_name: 'Bravado',
    champion: 'Taric',
    skill: 'I',
    image: {
      full: 'Taric_Passive.png',
      sprite: 'passive4.png',
      group: 'passive',
      x: 336,
      y: 0,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> After casting an ability, <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Taric" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Taric/LoL" title="Taric"><img alt="Taric" src="/wiki/images/Taric_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Taric/LoL" title="Taric/LoL">Taric</a></span></span> empowers his next two basic attacks to gain tremendous <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>total</b> attack speed</span></span>, deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> based on <span style="color:yellow; white-space:normal">his <b>bonus</b> armor</span>, and <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduce</span> the cooldowns of his basic abilities.',
    ],
    description: [
      {
        icon: '/wiki/images/Bravado.png',
        description:
          'Innate: After casting an ability, Taric empowers his next two basic attacks within 5 seconds to each gain  100% total attack speed, deal 25 − 93 (based on level) (+ 15% bonus armor) bonus magic damage, and reduce the  current cooldowns of his basic abilities by 1 second.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> After casting an <a href="/wiki/Champion_ability" title="Champion ability">ability</a>, <b>Taric</b> empowers his next two <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> within 5 seconds to each gain <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">100% <b>total</b> attack speed</span></span>, deal <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="25;" data-finish="93;" data-bot_values="25;29;33;37;41;45;49;53;57;61;65;69;73;77;81;85;89;93" data-top_values="">25 − 93 (based on level)</span></span> <span style="color:yellow; white-space:normal">(+&nbsp;15% <b>bonus</b> armor)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>, and reduce the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldowns</span> of his basic abilities by <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Increased by ability haste">1 second</span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate:',
            raw: 'After casting an ability, Taric empowers his next two basic attacks within 5 seconds to each gain  100% total attack speed, deal 25 − 93 (based on level) (+ 15% bonus armor) bonus magic damage, and reduce the  current cooldowns of his basic abilities by 1 second.',
            values: [
              25, 29, 33, 37, 41, 45, 49, 53, 57, 61, 65, 69, 73, 77, 81, 85,
              89, 93,
            ],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText:
              'bonus magic damage, and reduce the  current cooldowns of his basic abilities by 1 second.',
            pre: 'After casting an ability, Taric empowers his next two basic attacks within 5 seconds to each gain  100% total attack speed, deal 25 − 93',
            post: 'bonus magic damage, and reduce the  current cooldowns of his basic abilities by 1 second.',
            children: [
              {
                values: 15,
                valuesIsPercent: true,
                units: 'bonus_armor',
                unitsText: 'bonus armor',
                pre: '+ 15% bonus armor',
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
    damagetype: 'Magic',
    spelleffects: 'proc',
    notes:
      '* The first attack refreshes <i>Bravado\'s</i> duration.\n<ul><li>The bonus damage will not apply against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Structures"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">structures</a></span>.</li>\n<li><i>Bravado</i> can be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodged"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blocked"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span> but it cannot miss if <b>Taric</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span>. The cooldown reduction cannot be negated in any cases.</li></ul>',
    yvideo: 'Taric - Passive',
  },
  "Starlight's Touch": {
    name: "Starlight's Touch",
    display_name: "Starlight's Touch",
    champion: 'Taric',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'TaricQ.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 192,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 325',
    cast_time: '0.<small>25</small>',
    cost: '60',
    costtype: 'Mana + all charges',
    cooldown: '3',
    recharge: '15',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Taric" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Taric/LoL" title="Taric"><img alt="Taric" src="/wiki/images/Taric_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Taric/LoL" title="Taric/LoL">Taric</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> himself and nearby allied champions based on <span style="color: #1F995C; white-space:normal">his <b>maximum</b> health</span> per charge of <i>Starlight\'s Touch</i> that he periodically <a href="/wiki/Ammunition" title="Ammunition">stocks</a>, up to a cap. <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Taric" data-ability="Bravado" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Taric/LoL#Bravado" title="Bravado"><img alt="Bravado" src="/wiki/images/Taric_Bravado.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Taric/LoL#Bravado" title="Taric/LoL">Bravado</a></span></span></i>-empowered attacks each grant one charge.',
    ],
    description: [
      {
        icon: "/wiki/images/Starlight's_Touch.png",
        description:
          "Active: Taric  heals himself and nearby allied champions for 25 (+ 15% AP) (+ 1% of his maximum health) per charge of Starlight's Touch that he periodically stocks, up to a maximum amount.  Bravado's empowered attacks each grant one charge.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Taric</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> himself and nearby allied champions for 25 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;15% AP)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;1% of his <b>maximum</b> health)</span> per charge of <i>Starlight\'s Touch</i> that he periodically <a href="/wiki/Ammunition" title="Ammunition">stocks</a>, up to a maximum amount. <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Taric" data-ability="Bravado" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Taric/LoL#Bravado" title="Bravado\'s"><img alt="Bravado\'s" src="/wiki/images/Taric_Bravado.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Taric/LoL#Bravado" title="Taric/LoL">Bravado\'s</a></span></span></i> empowered attacks each grant one charge.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Active:',
            raw: "Taric  heals himself and nearby allied champions for 25 (+ 15% AP) (+ 1% of his maximum health) per charge of Starlight's Touch that he periodically stocks, up to a maximum amount",
            healType: 'BonusHealth',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              "per charge of Starlight's Touch that he periodically stocks, up to a maximum amount",
            pre: 'Taric  heals himself and nearby allied champions for 25',
            post: "per charge of Starlight's Touch that he periodically stocks, up to a maximum amount",
            children: [
              {
                values: 15,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 15% AP',
              },
              {
                values: 1,
                valuesIsPercent: true,
                units: 'maximum_hp',
                unitsText: 'of his maximum health',
                pre: '+ 1% of his maximum health',
              },
            ],
          },
        ],
        leveling: [
          {
            name: 'Maximum Charges:',
            values: '1 / 2 / 3 / 4 / 5',
            valuesHTML: '1 / 2 / 3 / 4 / 5',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Maximum Charges:',
            raw: '1 / 2 / 3 / 4 / 5',
            values: [1, 2, 3, 4, 5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1 / 2 / 3 / 4 / 5',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Starlight's Touch can heal up to a maximum of 125 (+ 75% AP) (+ 5% of Taric's maximum health) at 5 charges.",
        descriptionHTML:
          '<i>Starlight\'s Touch</i> can heal up to a maximum of 125 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;75% AP)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;5% of <b>Taric\'s</b> <b>maximum</b> health)</span> at 5 charges.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: "Starlight's Touch can heal up to a maximum of 125 (+ 75% AP) (+ 5% of Taric's maximum health) at 5 charges.",
            healType: 'BonusHealth',
            values: 1,
            user: 'none',
            units: '',
            unitsText: 'at 5 charges.',
            pre: "Starlight's Touch can heal up to a maximum of 125",
            post: 'at 5 charges.',
            children: [
              {
                values: 75,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 75% AP',
              },
              {
                values: 5,
                valuesIsPercent: true,
                units: 'maximum_hp',
                unitsText: "of Taric's maximum health",
                pre: "+ 5% of Taric's maximum health",
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Allies',
    spelleffects: 'Heal',
    notes:
      '* The healing will apply heal effects (such as <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Summon Aery" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Summon_Aery_(Rune)" title="Summon Aery"><img alt="Summon Aery" src="/wiki/images/Summon_Aery_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Summon_Aery_(Rune)" class="mw-redirect" title="Summon Aery (Rune)">Summon Aery</a></span></span>) prioritizing targets in <b>Taric\'s</b> circle, based on proximity to him, then in the <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Taric" data-ability="Bastion" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Taric/LoL#Bastion" title="Bastioned"><img alt="Bastioned" src="/wiki/images/Taric_Bastion.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Taric/LoL#Bastion" title="Taric/LoL">Bastioned</a></span></span> ally\'s circle, based on proximity to that ally (including it).',
    yvideo: 'Taric - Q',
  },
  Bastion: {
    name: 'Bastion',
    display_name: 'Bastion',
    champion: 'Taric',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'TaricW.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 240,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '800',
    tether_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 1300',
    cast_time: '0.<small>25</small>',
    cost: '60',
    costtype: 'Mana',
    cooldown: '15',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Taric" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Taric/LoL" title="Taric"><img alt="Taric" src="/wiki/images/Taric_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Taric/LoL" title="Taric/LoL">Taric</a></span></span> gains <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span> and forms a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tether</a></span> to the ally bound by <i>Bastion</i>. While the tether persists, the ally gains the <span style="color:yellow; white-space:normal"><b>bonus</b> armor</span> and <b>Taric\'s</b> abilities are mimicked to them.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Taric</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shields"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span> himself and the target allied champion for a short time, with the amount based on each <span style="color: #1F995C; white-space:normal">target\'s <b>maximum</b> health</span>. He also binds them with <i>Bastion</i>.',
      '<b>Taric</b> can also <a href="/wiki/Self-targeted" title="Self-targeted">self-cast</a> to shield himself.',
      'Only one ally can be bound at a time, and selecting a new ally overrides the previous bind.',
    ],
    description: [
      {
        icon: '/wiki/images/Bastion.png',
        description:
          "Passive: Taric gains  bonus armor and forms a  tether between him and the ally bound by Bastion. While the tether persists, the ally also gains the bonus armor and Taric's abilities are mimicked to them, though the effects do not stack.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Taric</b> gains <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span> and forms a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tether</a></span> between him and the ally bound by <i>Bastion</i>. While the tether persists, the ally also gains the <span style="color:yellow; white-space:normal"><b>bonus</b> armor</span> and <b>Taric\'s</b> abilities are mimicked to them, though the effects do not stack.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Bonus Armor:',
            values: "10 / 11 / 12 / 13 / 14% of Taric's armor",
            valuesHTML:
              '<span style="color:yellow; white-space:normal">10 / 11 / 12 / 13 / 14% of <b>Taric\'s</b> armor</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Armor:',
            raw: "10 / 11 / 12 / 13 / 14% of Taric's armor",
            values: [10, 11, 12, 13, 14],
            valuesIsPercent: true,
            units: 'total_armor',
            unitsText: "of Taric's armor",
            pre: "10 / 11 / 12 / 13 / 14% of Taric's armor",
          },
        ],
      },
      {
        icon: '/wiki/images/Bastion_2.png',
        description:
          'Active: Taric grants himself and the target allied champion a  shield for 2.5 seconds, binding them with Bastion.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Taric</b> grants himself and the target allied champion a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 2.<small>5</small> seconds, binding them with <i>Bastion</i>.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Active:',
            raw: 'Taric grants himself and the target allied champion a  shield for 2.5 seconds, binding them with Bastion.',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'grants himself and the target allied champion a  shield for 2.5 seconds, binding them with Bastion.',
            pre: 'Taric grants himself and the target allied champion a  shield for 2.5 seconds, binding them with Bastion.',
          },
        ],
        leveling: [
          {
            name: 'Shield Strength:',
            values: "7 / 8 / 9 / 10 / 11% of target's maximum health",
            valuesHTML:
              '<span style="color: #1F995C; white-space:normal">7 / 8 / 9 / 10 / 11% of target\'s <b>maximum</b> health</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Shield Strength:',
            raw: "7 / 8 / 9 / 10 / 11% of target's maximum health",
            healType: 'OutgoingHeals',
            values: [7, 8, 9, 10, 11],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: "7 / 8 / 9 / 10 / 11% of target's maximum health",
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Taric can also self-cast to shield himself; if he is untethered, this will instead target the nearest ally. Only one ally can be bound at a time, and selecting a new ally overrides the previous bind.',
        descriptionHTML:
          '<b>Taric</b> can also <a href="/wiki/Self-targeted" title="Self-targeted">self-cast</a> to shield himself; if he is untethered, this will instead target the nearest ally. Only one ally can be bound at a time, and selecting a new ally overrides the previous bind.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Self, Allies',
    spelleffects: 'Shield',
    notes:
      '* The mimicked abilities will still complete even if <b>Taric</b> dies or leaves range.\n<ul><li>Abilities are not mimicked to the bound ally if they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Vanish"><a href="/wiki/Untargetability#Vanish" title="Untargetability#Vanish"><img alt="Hallucinate.png" src="/wiki/images/Shaco_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetability#Vanish" title="Untargetability">vanished</a></span> via <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Master Yi" data-ability="Alpha Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Master_Yi/LoL#Alpha_Strike" title="Alpha Strike"><img alt="Alpha Strike" src="/wiki/images/Master_Yi_Alpha_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Master_Yi/LoL#Alpha_Strike" title="Master Yi/LoL">Alpha Strike</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shaco" data-ability="Hallucinate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shaco/LoL#Hallucinate" title="Hallucinate"><img alt="Hallucinate" src="/wiki/images/Shaco_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shaco/LoL#Hallucinate" title="Shaco/LoL">Hallucinate</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Elise" data-ability="Rappel" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elise/LoL#Rappel" title="Rappel"><img alt="Rappel" src="/wiki/images/Elise_Rappel.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elise/LoL#Rappel" title="Elise/LoL">Rappel</a></span></span>, or <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rek\'Sai" data-ability="Void Rush" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rek%27Sai/LoL#Void_Rush" title="Void Rush"><img alt="Void Rush" src="/wiki/images/Rek%27Sai_Void_Rush.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rek%27Sai/LoL#Void_Rush" title="Rek\'Sai/LoL">Void Rush</a></span></span>.\n<ul><li>Mimicked abilities will also cancel if they vanish as above.</li></ul></li></ul>',
    yvideo: 'Taric - W',
  },
  Dazzle: {
    name: 'Dazzle',
    display_name: 'Dazzle',
    champion: 'Taric',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'TaricE.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 288,
      y: 0,
      w: 48,
      h: 48,
    },
    range: '575',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 140',
    cast_time: 'none',
    cost: '40',
    costtype: 'Mana',
    cooldown: '16 / 15 / 14 / 13 / 12',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Taric" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Taric/LoL" title="Taric"><img alt="Taric" src="/wiki/images/Taric_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Taric/LoL" title="Taric/LoL">Taric</a></span></span> winds up over a brief moment, then projects a beam of starlight in the target direction that briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stuns"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> enemies hit, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> based on his <span style="color:yellow; white-space:normal"><b>bonus</b> armor</span>.',
      '<b>Taric</b> can move during <i>Dazzle</i>.',
    ],
    description: [
      {
        icon: '/wiki/images/Dazzle.png',
        description:
          'Active: Taric winds up over 1 second, then projects a beam of starlight in the target direction that deals magic damage to enemies hit and  stuns them for 1.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Taric</b> winds up over 1 second, then projects a beam of starlight in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stuns"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> them for 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Taric winds up over 1 second, then projects a beam of starlight in the target direction that deals magic damage to enemies hit and  stuns them for 1.5 seconds.',
            damagetype: 'Magic',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'winds up over 1 second, then projects a beam of starlight in the target direction that deals magic damage to enemies hit and  stuns them for 1.5 seconds.',
            pre: 'Taric winds up over 1 second, then projects a beam of starlight in the target direction that deals magic damage to enemies hit and  stuns them for 1.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '90 / 130 / 170 / 210 / 250 (+ 50% AP) (+ 50% bonus armor)',
            valuesHTML:
              '90 / 130 / 170 / 210 / 250 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span> <span style="color:yellow; white-space:normal">(+&nbsp;50% <b>bonus</b> armor)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '90 / 130 / 170 / 210 / 250 (+ 50% AP) (+ 50% bonus armor)',
            damagetype: 'Magic',
            values: [90, 130, 170, 210, 250],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '90 / 130 / 170 / 210 / 250',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 50% AP',
              },
              {
                values: 50,
                valuesIsPercent: true,
                units: 'bonus_armor',
                unitsText: 'bonus armor',
                pre: '+ 50% bonus armor',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description: "Taric can move during Dazzle's windup.",
        descriptionHTML: "<i><b>Taric</b> can move during Dazzle's windup.</i>",
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
    projectile: 'False',
    notes:
      '* <i>Dazzle</i> will aim towards the target direction on-cast when firing from both his and his <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Taric" data-ability="Bastion 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Taric/LoL#Bastion_2" title="Bastion\'s"><img alt="Bastion\'s" src="/wiki/images/Taric_Bastion_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Taric/LoL#Bastion_2" title="Taric/LoL">Bastion\'s</a></span></span> positions.',
    yvideo: 'Taric - E',
  },
  'Cosmic Radiance': {
    name: 'Cosmic Radiance',
    display_name: 'Cosmic Radiance',
    champion: 'Taric',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'TaricR.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 336,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 400',
    cast_time: '0.<small>25</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown: '180 / 150 / 120',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Taric" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Taric/LoL" title="Taric"><img alt="Taric" src="/wiki/images/Taric_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Taric/LoL" title="Taric/LoL">Taric</a></span></span> calls down a star that descends to him over a short time. Afterwards, he and nearby allied champions become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invulnerable"><a href="/wiki/Invulnerability" title="Invulnerability"><img alt="Cosmic Radiance.png" src="/wiki/images/Taric_Cosmic_Radiance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability" title="Invulnerability">invulnerable</a></span> for a short time.',
    ],
    description: [
      {
        icon: '/wiki/images/Cosmic_Radiance.png',
        description:
          'Active: Taric calls down a star from above that descends to him over 2.5 seconds. Afterwards, he and nearby allied champions become  invulnerable for 2.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Taric</b> calls down a star from above that descends to him over 2.<small>5</small> seconds. Afterwards, he and nearby allied champions become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invulnerable"><a href="/wiki/Invulnerability" title="Invulnerability"><img alt="Cosmic Radiance.png" src="/wiki/images/Taric_Cosmic_Radiance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability" title="Invulnerability">invulnerable</a></span> for 2.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: 'Taric calls down a star from above that descends to him over 2.5 seconds',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'calls down a star from above that descends to him over 2.5 seconds',
            pre: 'Taric calls down a star from above that descends to him over 2.5 seconds',
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'Afterwards, he and nearby allied champions become  invulnerable for 2.5 seconds.',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'he and nearby allied champions become  invulnerable for 2.5 seconds.',
            pre: 'Afterwards, he and nearby allied champions become  invulnerable for 2.5 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Allies',
    notes:
      '* <i>Cosmic Radiance</i> has no effect on <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> allies.\n<ul><li><ul><li>It will affect the primary unit (the one the star is falling down on) even if they are untargetable.</li></ul></li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Taric_Original_R_2.ogg   "Embrace the cosmos."',
    yvideo: 'Taric - R',
  },
} satisfies { [skillName in string]: SkillData };
