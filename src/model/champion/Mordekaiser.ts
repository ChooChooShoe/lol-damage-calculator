import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Mordekaiser';
const I: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Mordekaiser\'s</b> basic attacks are empowered to deal <span style="color: #7A6DFF; white-space:normal">40% AP</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>.',
    leveling: [],
  },
  {
    description:
      '<b>Morderkaiser</b> generates a <a href="/wiki/Stack" title="Stack">stack</a> for each enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> hit by his damaging <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> or basic <a href="/wiki/Champion_ability" title="Champion ability">abilities</a>, lasting for 4 seconds, refreshing on subsequent hits, and stacking up to 3 times. At 3 stacks, he gains <i>Darkness Rise</i>.',
    leveling: [],
  },
  {
    img: '/wiki/images/Mordekaiser_Darkness_Rise.png',
    description:
      '<span class="template_sbc"><b>Darkness Rise:</b></span> <b>Mordekaiser</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="3;6;9" data-top_values="1;6;11" data-bot_key="%">3 / 6 / 9% (based on level)</span> <b>bonus</b> movement speed</span></span> and deals<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="5;" data-finish="15.2;" data-bot_values="5;5.6;6.2;6.8;7.4;8;8.6;9.2;9.8;10.4;11;11.6;12.2;12.8;13.4;14;14.6;15.2" data-top_values="">5 − 15.<small>2</small> (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="1;" data-finish="5;" data-bot_values="1;1.24;1.47;1.71;1.94;2.18;2.41;2.65;2.88;3.12;3.35;3.59;3.82;4.06;4.29;4.53;4.76;5" data-top_values="" data-bot_key="%">1% − 5% (based on level)</span> of target\'s <b>maximum</b> health)</span> <span style="color: #00B0F0; white-space:normal">magic damage</span> every second&nbsp;」</span><span class="flipText2">「&nbsp;<span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="0.625;" data-finish="1.9;" data-bot_values="0.63;0.7;0.78;0.85;0.93;1;1.08;1.15;1.23;1.3;1.38;1.45;1.53;1.6;1.68;1.75;1.83;1.9" data-top_values="">0.<small>63</small> − 1.<small>9</small> (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;3.<small>75</small>% AP)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="0.125;" data-finish="0.625;" data-bot_values="0.13;0.15;0.18;0.21;0.24;0.27;0.3;0.33;0.36;0.39;0.42;0.45;0.48;0.51;0.54;0.57;0.6;0.63" data-top_values="" data-bot_key="%">0.<small>13</small>% − 0.<small>63</small>% (based on level)</span> of target\'s <b>maximum</b> health)</span> <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>125</small> seconds&nbsp;」</span></span>to nearby enemies. Against monsters, the damage is capped at<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="28;" data-finish="164;" data-bot_values="28;36;44;52;60;68;76;84;92;100;108;116;124;132;140;148;156;164" data-top_values="">28 − 164 (based on level)</span> per second.&nbsp;」</span><span class="flipText2">「&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="3.5;" data-finish="20.5;" data-bot_values="3.5;4.5;5.5;6.5;7.5;8.5;9.5;10.5;11.5;12.5;13.5;14.5;15.5;16.5;17.5;18.5;19.5;20.5" data-top_values="">3.<small>5</small> − 20.<small>5</small> (based on level)</span> per 0.<small>125</small> seconds.&nbsp;」</span></span>',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: ' Mordekaiser gains  3 / 6 / 9% (based on level) bonus movement speed and deals「 5 − 15',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'bonus movement speed and deals「 5 − 15',
        pre: 'Mordekaiser gains  3 / 6 / 9%',
        post: 'bonus movement speed and deals「 5 − 15',
      },
      {
        effectType: 'Heal',
        name: 'Line 2:',
        raw: "2 (based on level) (+ 30% AP) (+ 1% − 5% (based on level) of target's maximum health) magic damage every second 」「 0",
        healType: 'OutgoingHeals',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'magic damage every second 」「 0',
        pre: '2',
        post: 'magic damage every second 」「 0',
        children: [
          {
            values: 30,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 30% AP',
          },
          {
            values: [],
            valuesIsPercent: true,
            valuesIsBasedOnLevel: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: '+ 1% − 5%',
            post: "of target's maximum health",
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Line 3:',
        raw: '63 − 1',
        values: [63, 1],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '63 − 1',
      },
      {
        effectType: 'Unique',
        name: 'Line 4:',
        raw: '9 (based on level) (+ 3',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '+ 3',
        pre: '9',
        post: '+ 3',
      },
      {
        effectType: 'Heal',
        name: 'Line 7:',
        raw: "63% (based on level) of target's maximum health) magic damage every 0",
        healType: 'OutgoingHeals',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of target's maximum health magic damage every 0",
        pre: '63%',
        post: "of target's maximum health magic damage every 0",
      },
      {
        effectType: 'Gain',
        name: 'Line 9:',
        raw: ' Against monsters, the damage is capped at「 28 − 164 (based on level) per second',
        values: [
          28, 36, 44, 52, 60, 68, 76, 84, 92, 100, 108, 116, 124, 132, 140, 148,
          156, 164,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'per second',
        pre: 'Against monsters, the damage is capped at「 28 − 164',
        post: 'per second',
      },
      {
        effectType: 'Unique',
        name: 'Line 11:',
        raw: '5 − 20',
        values: [5, 20],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5 − 20',
      },
      {
        effectType: 'Unique',
        name: 'Line 12:',
        raw: '5 (based on level) per 0',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'per 0',
        pre: '5',
        post: 'per 0',
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Mordekaiser_Obliterate.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Mordekaiser</b> strikes his mace down in a line in the target direction, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within, <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">increased</span> if only one enemy is hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '5 − 139 (based on level) (+ 75 / 95 / 115 / 135 / 155) (+ 60% AP)',
        values: [
          5, 12.88, 20.76, 28.65, 36.53, 44.41, 52.29, 60.18, 68.06, 75.94,
          83.82, 91.71, 99.59, 107.47, 115.35, 123.24, 131.12, 139,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5 − 139',
        children: [
          {
            values: [75, 95, 115, 135, 155],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '+ 75 / 95 / 115 / 135 / 155',
          },
          {
            values: 60,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 60% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Damage Increase:',
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
];
const W: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Mordekaiser</b> stores 45% of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after modifiers">post-mitigation</span> damage he deals and 15% of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated before modifiers">pre-mitigation</span> damage he takes,<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;reduced by 75% for non-champion sources,&nbsp;」</span><span class="flipText2">「&nbsp;reduced to 11.<small>25</small>% of damage dealt and 3.<small>75</small>% of damage taken for non-champion sources,&nbsp;」</span></span>as <i>Potential Shield</i> on his secondary resource bar, up to <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">30% of his <b>maximum</b> health</span></span>. The <i>Potential Shield</i> decays by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="8;" data-finish="25;" data-bot_values="8;9;10;11;12;13;14;15;16;17;18;19;20;21;22;23;24;25" data-top_values="">8 − 25 (based on level)</span> every second after not dealing or taking damage for 1 second. While <i>Indestructible</i> is not on cooldown, the <i>Potential Shield</i> will not decay below a minimum of <span style="color: #1F995C; white-space:normal">5% of his <b>maximum</b> health</span>, and it will be set to that amount when it comes off cooldown if it was previously below it.',
    leveling: [
      {
        effectType: 'Shield',
        name: 'Line 4:',
        raw: ' The Potential Shield decays by 8 − 25 (based on level) every second after not dealing or taking damage for 1 second',
        damagetype: 'None',
        shieldType: 'SelfShield',
        values: [
          8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText:
          'every second after not dealing or taking damage for 1 second',
        pre: 'The Potential Shield decays by 8 − 25',
        post: 'every second after not dealing or taking damage for 1 second',
      },
    ],
  },
  {
    img: '/wiki/images/Mordekaiser_Indestructible.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Mordekaiser</b> consumes his <i>Potential Shield</i> to grant himself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for the same amount for 4 seconds. The shield decays exponentially over the duration. <i>Indestructible</i> can be recast after 0.<small>5</small> seconds while the shield is active.',
    leveling: [],
  },
  {
    img: '/wiki/images/Mordekaiser_Indestructible_2.png',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Mordekaiser</b> consumes the remaining shield, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Healing"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> for a portion of the amount.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Shield to Healing:',
        raw: '35 / 37.5 / 40 / 42.5 / 45%',
        values: [35, 37.5, 40, 42.5, 45],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '35 / 37.5 / 40 / 42.5 / 45%',
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Mordekaiser</b> gains <span style="white-space:nowrap"><a href="/wiki/Magic_penetration" title="Magic penetration"><img alt="Magic penetration icon.png" src="/wiki/images/Magic_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:turquoise; white-space:normal">magic penetration</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Penetration:',
        raw: '5 / 7.5 / 10 / 12.5 / 15%',
        values: [5, 7.5, 10, 12.5, 15],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5 / 7.5 / 10 / 12.5 / 15%',
      },
    ],
  },
  {
    img: '/wiki/images/Mordekaiser_Death%27s_Grasp.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Mordekaiser</b> summons a claw in the target direction that grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area. After 0.<small>5</small> seconds, it deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulls</a></span> them 250 units.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '80 / 95 / 110 / 125 / 140 (+ 60% AP)',
        values: [80, 95, 110, 125, 140],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 95 / 110 / 125 / 140',
        children: [
          {
            values: 60,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 60% AP',
          },
        ],
      },
    ],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Mordekaiser_Realm_of_Death.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Mordekaiser</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> the target enemy champion by 75% over the cast time, then <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="See notes">banishes</span> them with him to the <i>Death Realm</i> for 7 seconds. <br><br><b>Mordekaiser</b> also consumes the target\'s soul for 7 seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> himself for <span style="color: #1F995C; white-space:normal">10% of their <b>maximum</b> health</span> and reducing their <b>current</b> <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal">attack damage</span></span>, <span style="white-space:nowrap"><a href="/wiki/Ability_power" title="Ability power"><img alt="Ability power icon.png" src="/wiki/images/Ability_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #7A6DFF; white-space:normal">ability power</span></span>, <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>total</b> attack speed</span></span>, <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><b>maximum</b> health</span></span>, <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor</span></span>, <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">magic resist</span></span>, and <a href="/wiki/Size" title="Size">size</a> by 10%, in addition to gaining them for himself. If the target dies while inside the <i>Death Realm</i>, <b>Mordekaiser</b> keeps their partial stats until they <a href="/wiki/Death" title="Death">respawn</a>.',
    leveling: [],
  },
  {
    description:
      'Units between realms see each other as spirits, considering each other dead and negating any <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="See notes">interactions</span> between each other. Only <b>Mordekaiser</b> and the target will enter the realm; other champions cannot follow them. Everything that occurs inside the <i>Death Realm</i> is hidden to units outside of it, and vice versa. All <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Pet"><a href="/wiki/Pets" title="Pets"><img alt="Summon Tibbers.png" src="/wiki/images/Annie_Summon-_Tibbers.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Pets" title="Pets">pets</a></span> still inside the realm are killed at its end.',
    leveling: [],
  },
  {
    description:
      '<i>If one of the two affected champions leave the Death Realm, because of having died or having it dispelled, the other will do so as well.</i>',
    leveling: [],
  },
];
export const Mordekaiser = { I, Q, W, E, R };
