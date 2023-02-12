import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Evelynn';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Evelynn_Demon_Shade.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Evelynn</b> gains <i>Demon Shade</i> after not performing actions that <a href="/wiki/Stealth#Breaking_stealth" title="Stealth">break stealth</a> for 4 seconds. Attacking or casting abilities ends <i>Demon Shade</i> immediately and places it on a 4-second <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Unaffected by ability haste">static cooldown</span>, reduced to 1.<small>25</small> seconds from casting <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Evelynn" data-ability="Last Caress" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Evelynn/LoL#Last_Caress" title="Last Caress"><img alt="Last Caress" src="/wiki/images/Evelynn_Last_Caress.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Evelynn/LoL#Last_Caress" title="Evelynn/LoL">Last Caress</a></span></span>. Taking damage from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span> interrupts <i>Demon Shade</i> and places it on a 1.<small>5</small>-second <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Unaffected by ability haste">static cooldown</span>.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Demon Shade:</b></span> While below <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="250;" data-finish="590;" data-bot_values="250;270;290;310;330;350;370;390;410;430;450;470;490;510;530;550;570;590" data-top_values="">250 − 590 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;250% AP)</span> health</span></span>, <b>Evelynn</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> herself for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="15;" data-finish="150;" data-bot_values="15;22.94;30.88;38.82;46.76;54.71;62.65;70.59;78.53;86.47;94.41;102.35;110.29;118.24;126.18;134.12;142.06;150" data-top_values="">15 − 150 (based on level)</span> every second. From <a href="/wiki/Experience_(champion)" title="Experience (champion)">level</a> 6 onward, <i>Demon Shade</i> also grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Camouflage"><a href="/wiki/Stealth#Camouflage" title="Stealth#Camouflage"><img alt="Ambush 2.png" src="/wiki/images/Twitch_Ambush_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Camouflage" title="Stealth">camouflage</a></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: ' While below  250 − 590 (based on level) (+ 250% AP) health, Evelynn  heals herself for 15 − 150 (based on level) every second',
        healType: 'BonusHealth',
        values: [
          250, 270, 290, 310, 330, 350, 370, 390, 410, 430, 450, 470, 490, 510,
          530, 550, 570, 590,
        ],
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'total_hp',
        unitsText: 'health, Evelynn  heals herself for 15 − 150',
        pre: 'While below  250 − 590',
        post: 'health, Evelynn  heals herself for 15 − 150',
        children: [
          {
            values: 250,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 250% AP',
          },
        ],
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Evelynn_Hate_Spike.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Evelynn</b> launches a dart in the target direction, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit and marking them for 4 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '25 / 30 / 35 / 40 / 45 (+ 30% AP)',
        values: [25, 30, 35, 40, 45],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 30 / 35 / 40 / 45',
        children: [
          {
            values: 30,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 30% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<b>Evelynn\'s</b> next 3 <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> or <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> against the marked target deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Magic Damage:',
        raw: '15 / 25 / 35 / 45 / 55 (+ 25% AP)',
        values: [15, 25, 35, 45, 55],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 25 / 35 / 45 / 55',
        children: [
          {
            values: 25,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 25% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Bonus Damage:',
        raw: '45 / 75 / 105 / 135 / 165 (+ 75% AP)',
        values: [45, 75, 105, 135, 165],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '45 / 75 / 105 / 135 / 165',
        children: [
          {
            values: 75,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 75% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Hate Spike</i> may be recast up to 3 times at no cost until the ability comes off cooldown.',
    leveling: [],
  },
  {
    img: '/wiki/images/Evelynn_Hate_Spike_2.png',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Evelynn</b> unleashes a line of deadly spikes in the direction of her attack target if they are in range, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to all enemies struck. <i>Hate Spike</i> will first prioritize <b>Evelynn\'s</b> attack target, then the nearest <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy champion.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '25 / 30 / 35 / 40 / 45 (+ 30% AP)',
        values: [25, 30, 35, 40, 45],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 30 / 35 / 40 / 45',
        children: [
          {
            values: 30,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 30% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Magic Damage:',
        raw: '75 / 90 / 105 / 120 / 135 (+ 90% AP)',
        values: [75, 90, 105, 120, 135],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '75 / 90 / 105 / 120 / 135',
        children: [
          {
            values: 90,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 90% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '130 / 180 / 230 / 280 / 330 (+ 195% AP)',
        values: [130, 180, 230, 280, 330],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '130 / 180 / 230 / 280 / 330',
        children: [
          {
            values: 195,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 195% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>A nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy is required to recast this ability.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Evelynn_Allure.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Evelynn</b> <i>curses</i> the target enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> for 5 seconds.',
    leveling: [],
  },
  {
    description:
      '<b>Evelynn\'s</b> next basic attack or ability against the <i>accursed</i> target <i>expunges</i> them, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 65% for 0.<small>75</small> seconds.',
    leveling: [],
  },
  {
    description:
      '<i>Expunging</i> a target will refund <i>Allure\'s</i> <span style="color: #0099CC; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;mana cost</span></span>. If the target is <i>cursed</i> for at least 2.<small>5</small> seconds, the <i>expunge</i> also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Charm"><a href="/wiki/Charm" title="Charm"><img alt="Charm icon.png" src="/wiki/images/Charm_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Charm" class="mw-redirect" title="Charm">charms</a></span> them for a few seconds and the duration of the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> is increased to last for this time, as well as applying additional effects based on the target type.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Charm Duration:',
        raw: '1.25 / 1.5 / 1.75 / 2 / 2.25',
        values: [1.25, 1.5, 1.75, 2, 2.25],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1.25 / 1.5 / 1.75 / 2 / 2.25',
      },
      {
        effectType: 'Unique',
        name: 'Monster Duration:',
        raw: '3.25 / 3.5 / 3.75 / 4 / 4.25',
        values: [3.25, 3.5, 3.75, 4, 4.25],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '3.25 / 3.5 / 3.75 / 4 / 4.25',
      },
    ],
  },
  {
    description:
      'Against champions, the <i>expunge</i> also inflicts <span style="white-space:nowrap"><a href="/wiki/Magic_penetration" title="Magic penetration"><img alt="Magic penetration icon.png" src="/wiki/images/Magic_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">magic resistance reduction</span></span> for 4 seconds.<br>Against monsters, the <i>expunge</i> deals <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> and the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Charm"><a href="/wiki/Charm" title="Charm"><img alt="Charm icon.png" src="/wiki/images/Charm_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Charm" class="mw-redirect" title="Charm">charm</a></span> lasts 2 seconds longer.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Resistance Reduction:',
        raw: '35 / 37.5 / 40 / 42.5 / 45%',
        values: [35, 37.5, 40, 42.5, 45],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '35 / 37.5 / 40 / 42.5 / 45%',
      },
      {
        effectType: 'Unique',
        name: 'Bonus Magic Damage:',
        raw: '250 / 300 / 350 / 400 / 450 (+ 60% AP)',
        values: [250, 300, 350, 400, 450],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '250 / 300 / 350 / 400 / 450',
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
  {
    description:
      '<i>Casting Allure does not break <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Evelynn" data-ability="Demon Shade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Evelynn/LoL#Demon_Shade" title="Demon Shade"><img alt="Demon Shade" src="/wiki/images/Evelynn_Demon_Shade.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Evelynn/LoL#Demon_Shade" title="Evelynn/LoL">Demon Shade</a></span></span> nor its fade into it.</i>',
    leveling: [],
  },
];
const E1: SubSkill[] = [
  {
    img: '/wiki/images/Evelynn_Whiplash.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Evelynn</b> whips the target enemy with her lashers, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects at 100% effectiveness.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Magic Damage:',
        raw: "55 / 70 / 85 / 100 / 115 (+ 3% (+ 1.5% per 100 AP) of target's maximum health)",
        healType: 'OutgoingHeals',
        values: [55, 70, 85, 100, 115],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '55 / 70 / 85 / 100 / 115',
        children: [
          {
            values: 3,
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: '+ 3%',
            post: "of target's maximum health",
            children: [
              {
                values: 1.5,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 1.5% per 100 AP',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Evelynn_Whiplash_2.png',
    description:
      '<b>Evelynn</b> also gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">30% <b>bonus</b> movement speed</span></span> for 2 seconds.',
    leveling: [],
  },
  {
    description:
      'Gaining <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Evelynn" data-ability="Demon Shade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Evelynn/LoL#Demon_Shade" title="Demon Shade"><img alt="Demon Shade" src="/wiki/images/Evelynn_Demon_Shade.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Evelynn/LoL#Demon_Shade" title="Evelynn/LoL">Demon Shade</a></span></span> resets <i>Whiplash\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Evelynn" data-ability="Empowered Whiplash" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Evelynn/LoL#Empowered_Whiplash" title="empowers"><img alt="empowers" src="/wiki/images/Evelynn_Empowered_Whiplash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Evelynn/LoL#Empowered_Whiplash" title="Evelynn/LoL">empowers</a></span></span> its next cast. The damage based on the target\'s health ratio for both <i>Whiplash</i> and its <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Evelynn" data-ability="Empowered Whiplash" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Evelynn/LoL#Empowered_Whiplash" title="empowered"><img alt="empowered" src="/wiki/images/Evelynn_Empowered_Whiplash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Evelynn/LoL#Empowered_Whiplash" title="Evelynn/LoL">empowered</a></span></span> cast deals a minimum of 25 and is capped at 450 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [],
  },
];
const E2: SubSkill[] = [
  {
    img: '/wiki/images/Evelynn_Empowered_Whiplash.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Evelynn</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> toward the target enemy with her lashers, dealing <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">increased damage</span> to them upon completion as well as to all enemies within her path.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Empowered Magic Damage:',
        raw: "75 / 100 / 125 / 150 / 175 (+ 4% (+ 2.5% per 100 AP) of target's maximum health)",
        healType: 'OutgoingHeals',
        values: [75, 100, 125, 150, 175],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '75 / 100 / 125 / 150 / 175',
        children: [
          {
            values: 4,
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: '+ 4%',
            post: "of target's maximum health",
            children: [
              {
                values: 2.5,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 2.5% per 100 AP',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Empowered Whiplash</i> only applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects to the primary target.',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Evelynn_Last_Caress.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Evelynn</b> reveals her true form, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> at the start of the cast time and then unleashing her lashers in a cone in the target direction, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies struck within. After 0.<small>5</small> seconds, she <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> 700 units in the opposite direction and becomes targetable again.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '125 / 250 / 375 (+ 75% AP)',
        values: [125, 250, 375],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '125 / 250 / 375',
        children: [
          {
            values: 75,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 75% AP',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Last_Caress_2.png',
    description:
      '<i>Last Caress</i> deals <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">140% increased damage</span> to enemies below <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;30% of their <b>maximum</b> health</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Empowered Damage:',
        raw: '300 / 600 / 900 (+ 180% AP)',
        values: [300, 600, 900],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '300 / 600 / 900',
        children: [
          {
            values: 180,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 180% AP',
          },
        ],
      },
    ],
  },
];
export const Evelynn = { I, Q, W, E1, E2, R };
