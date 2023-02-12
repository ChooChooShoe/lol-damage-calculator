import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Taric';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Taric_Bravado.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> After casting an <a href="/wiki/Champion_ability" title="Champion ability">ability</a>, <b>Taric</b> empowers his next two <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> within 5 seconds to each gain <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">100% <b>total</b> attack speed</span></span>, deal <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="25;" data-finish="93;" data-bot_values="25;29;33;37;41;45;49;53;57;61;65;69;73;77;81;85;89;93" data-top_values="">25 − 93 (based on level)</span></span> <span style="color:yellow; white-space:normal">(+&nbsp;15% <b>bonus</b> armor)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>, and reduce the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldowns</span> of his basic abilities by <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Increased by ability haste">1 second</span>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: ' After casting an ability, Taric empowers his next two basic attacks within 5 seconds to each gain  100% total attack speed, deal 25 − 93 (based on level) (+ 15% bonus armor) bonus magic damage, and reduce the  current cooldowns of his basic abilities by 1 second',
        values: [
          25, 29, 33, 37, 41, 45, 49, 53, 57, 61, 65, 69, 73, 77, 81, 85, 89,
          93,
        ],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText:
          'bonus magic damage, and reduce the  current cooldowns of his basic abilities by 1 second',
        pre: 'After casting an ability, Taric empowers his next two basic attacks within 5 seconds to each gain  100% total attack speed, deal 25 − 93',
        post: 'bonus magic damage, and reduce the  current cooldowns of his basic abilities by 1 second',
        children: [
          {
            values: 15,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_armor',
            unitsText: 'bonus armor',
            pre: '+ 15% bonus armor',
          },
        ],
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Taric_Starlight%27s_Touch.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Taric</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> himself and nearby allied champions for 25 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;15% AP)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;1% of his <b>maximum</b> health)</span> per charge of <i>Starlight\'s Touch</i> that he periodically <a href="/wiki/Ammunition" title="Ammunition">stocks</a>, up to a maximum amount. <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Taric" data-ability="Bravado" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Taric/LoL#Bravado" title="Bravado\'s"><img alt="Bravado\'s" src="/wiki/images/Taric_Bravado.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Taric/LoL#Bravado" title="Taric/LoL">Bravado\'s</a></span></span></i> empowered attacks each grant one charge.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: " Taric  heals himself and nearby allied champions for 25 (+ 15% AP) (+ 1% of his maximum health) per charge of Starlight's Touch that he periodically stocks, up to a maximum amount",
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
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 15% AP',
          },
          {
            values: 1,
            valuesIsPercent: true,
            user: 'player',
            units: 'maximum_hp',
            unitsText: 'of his maximum health',
            pre: '+ 1% of his maximum health',
          },
        ],
      },
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
    description:
      '<i>Starlight\'s Touch</i> can heal up to a maximum of 125 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;75% AP)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;5% of <b>Taric\'s</b> <b>maximum</b> health)</span> at 5 charges.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: "Starlight's Touch can heal up to a maximum of 125 (+ 75% AP) (+ 5% of Taric's maximum health) at 5 charges",
        healType: 'BonusHealth',
        values: 1,
        user: 'none',
        units: '',
        unitsText: 'at 5 charges',
        pre: "Starlight's Touch can heal up to a maximum of 125",
        post: 'at 5 charges',
        children: [
          {
            values: 75,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 75% AP',
          },
          {
            values: 5,
            valuesIsPercent: true,
            user: 'player',
            units: 'maximum_hp',
            unitsText: "of Taric's maximum health",
            pre: "+ 5% of Taric's maximum health",
          },
        ],
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Taric_Bastion.png',
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Taric</b> gains <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span> and forms a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tether</a></span> between him and the ally bound by <i>Bastion</i>. While the tether persists, the ally also gains the <span style="color:yellow; white-space:normal"><b>bonus</b> armor</span> and <b>Taric\'s</b> abilities are mimicked to them, though the effects do not stack.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Armor:',
        raw: "10 / 11 / 12 / 13 / 14% of Taric's armor",
        values: [10, 11, 12, 13, 14],
        valuesIsPercent: true,
        user: 'player',
        units: 'total_armor',
        unitsText: "of Taric's armor",
        pre: "10 / 11 / 12 / 13 / 14% of Taric's armor",
      },
    ],
  },
  {
    img: '/wiki/images/Taric_Bastion_2.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Taric</b> grants himself and the target allied champion a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 2.<small>5</small> seconds, binding them with <i>Bastion</i>.',
    leveling: [
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
    description:
      '<b>Taric</b> can also <a href="/wiki/Self-targeted" title="Self-targeted">self-cast</a> to shield himself; if he is untethered, this will instead target the nearest ally. Only one ally can be bound at a time, and selecting a new ally overrides the previous bind.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Taric_Dazzle.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Taric</b> winds up over 1 second, then projects a beam of starlight in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stuns"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> them for 1.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '90 / 130 / 170 / 210 / 250 (+ 50% AP) (+ 50% bonus armor)',
        values: [90, 130, 170, 210, 250],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '90 / 130 / 170 / 210 / 250',
        children: [
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 50% AP',
          },
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_armor',
            unitsText: 'bonus armor',
            pre: '+ 50% bonus armor',
          },
        ],
      },
    ],
  },
  {
    description: "<i><b>Taric</b> can move during Dazzle's windup.</i>",
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Taric_Cosmic_Radiance.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Taric</b> calls down a star from above that descends to him over 2.<small>5</small> seconds. Afterwards, he and nearby allied champions become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invulnerable"><a href="/wiki/Invulnerability" title="Invulnerability"><img alt="Cosmic Radiance.png" src="/wiki/images/Taric_Cosmic_Radiance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability" title="Invulnerability">invulnerable</a></span> for 2.<small>5</small> seconds.',
    leveling: [],
  },
];
export const Taric = { I, Q, W, E, R };
