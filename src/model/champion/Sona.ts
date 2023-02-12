import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Sona';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Sona_Power_Chord.png',
    description:
      '<span class="template_sbc"><b>Innate - Accelerando:</b></span> <b>Sona</b> generates a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Accelerando</i> each time she hits an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sona" data-ability="Hymn of Valor" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sona/LoL#Hymn_of_Valor" title="Hymn of Valor"><img alt="Hymn of Valor" src="/wiki/images/Sona_Hymn_of_Valor.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sona/LoL#Hymn_of_Valor" title="Sona/LoL">Hymn of Valor</a></span></span></i> and each time she mitigates sufficient damage or heals damaged allies with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sona" data-ability="Aria of Perseverance" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sona/LoL#Aria_of_Perseverance" title="Aria of Perseverance"><img alt="Aria of Perseverance" src="/wiki/images/Sona_Aria_of_Perseverance.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sona/LoL#Aria_of_Perseverance" title="Sona/LoL">Aria of Perseverance</a></span></span></i>, stacking up to 120 times. At maximum stacks, she instead reduces the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sona" data-ability="Crescendo" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sona/LoL#Crescendo" title="Crescendo"><img alt="Crescendo" src="/wiki/images/Sona_Crescendo.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sona/LoL#Crescendo" title="Sona/LoL">Crescendo</a></span></span></i> by 1.<small>5</small> seconds each time.<br><br>\n<img alt="Power Chord.png" src="/wiki/images/Sona_Power_Chord.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <span class="template_sbc"><b>Accelerando:</b></span> For each stack, <b>Sona</b> gains <span style="white-space:nowrap"><a href="/wiki/Ability_haste" title="Ability haste"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;0.<small>5</small></span> <a href="/wiki/Ability_haste#Increasing_basic_ability_haste" class="mw-redirect" title="Ability haste">basic ability haste</a>, up to 60 at maximum stacks.',
    leveling: [],
  },
  {
    img: '/wiki/images/Sona_Power_Chord_3.gif',
    description:
      '<span class="template_sbc"><b>Innate - Melody:</b></span> Whenever <b>Sona</b> casts a <a href="/wiki/Champion_ability" title="Champion ability">basic ability</a>, her other basic abilities incur a <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;0.<small>5</small>-second</span> global cooldown and she generates a unique <a href="/wiki/Aura" title="Aura">aura</a> for 3 seconds that empowers herself and nearby allied champions.',
    leveling: [],
  },
  {
    img: '/wiki/images/Sona_Power_Chord_2.png',
    description:
      '<span class="template_sbc"><b>Innate - Power Chord:</b></span> <b>Sona\'s</b> basic abilities generate a stack of <i>Power Chord</i>, stacking up to 3 times. At 3 stacks, her next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> is empowered to consume them all to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>, deal <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="10 +&nbsp;10 per level until level 8, then +&nbsp;15 per level" data-bot_values="20;30;40;50;60;70;80;90;105;120;135;150;165;180;195;210;225;240" data-top_values="">20 − 240 (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;20% AP)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>, and apply an additional effect based on the last basic ability she casted:\n',
    leveling: [],
  },
  {
    description:
      '<i>Gaining Power Chord\'s empowered attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Sona\'s</b> basic attack timer.</i>',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Sona_Hymn_of_Valor.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Sona</b> sends out bolts of sound to the two nearest <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemies, prioritizing champions. Each bolt deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area around the target for 1 second.<br><br><b>Sona</b> gains a stack of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sona" data-ability="Power Chord" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sona/LoL#Power_Chord" title="Accelerando"><img alt="Accelerando" src="/wiki/images/Sona_Power_Chord.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sona/LoL#Power_Chord" title="Sona/LoL">Accelerando</a></span></span></i> for each bolt that hits an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '50 / 80 / 110 / 140 / 170 (+ 40% AP)',
        values: [50, 80, 110, 140, 170],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 80 / 110 / 140 / 170',
        children: [
          {
            values: 40,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 40% AP',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Sona_Hymn_of_Valor_2.png',
    description:
      '<span class="template_sbc"><b><span class="inline-image label-only ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sona" data-ability="Power Chord" data-game="lol"><span style="white-space:normal;"><a href="/wiki/Sona/LoL#Power_Chord" title="Sona/LoL">Melody</a></span></span> Bonus:</b></span> <b>Sona</b> and tagged allied champions deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> on their next basic attack within 5 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Magic Damage:',
        raw: '10 / 15 / 20 / 25 / 30 (+ 20% AP)',
        values: [10, 15, 20, 25, 30],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 15 / 20 / 25 / 30',
        children: [
          {
            values: 20,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 20% AP',
          },
        ],
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Sona_Aria_of_Perseverance.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Sona</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> herself and sends out a tone to heal the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Based on greatest % missing health">most wounded</span> allied champion nearby.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Heal:',
        raw: '30 / 45 / 60 / 75 / 90 (+ 15% AP)',
        values: [30, 45, 60, 75, 90],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 45 / 60 / 75 / 90',
        children: [
          {
            values: 15,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 15% AP',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Sona_Aria_of_Perseverance_2.png',
    description:
      '<span class="template_sbc"><b><span class="inline-image label-only ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sona" data-ability="Power Chord" data-game="lol"><span style="white-space:normal;"><a href="/wiki/Sona/LoL#Power_Chord" title="Sona/LoL">Melody</a></span></span> Bonus:</b></span> <b>Sona</b> and tagged allied champions are granted a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 1.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Shield Strength:',
        raw: '25 / 45 / 65 / 85 / 105 (+ 25% AP)',
        values: [25, 45, 65, 85, 105],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 45 / 65 / 85 / 105',
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
    ],
  },
  {
    description:
      '<b>Sona</b> gains a stack of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sona" data-ability="Power Chord" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sona/LoL#Power_Chord" title="Accelerando"><img alt="Accelerando" src="/wiki/images/Sona_Power_Chord.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sona/LoL#Power_Chord" title="Sona/LoL">Accelerando</a></span></span></i> whenever she <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> a wounded ally or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shields"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span> a minimum amount of damage for an ally with <i>Aria of Perseverance</i>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Minimum Damage Mitigated:',
        raw: '25 / 45 / 65 / 85 / 105',
        values: [25, 45, 65, 85, 105],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 45 / 65 / 85 / 105',
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Sona_Song_of_Celerity.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Sona</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">20%</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;2% per 100 AP)</span> <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for 7 seconds. If she takes damage during this time, the duration ends prematurely once or if 3 seconds have elapsed.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: ' Sona gains  20% (+ 2% per 100 AP) bonus movement speed for 7 seconds',
        values: 2,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: 'bonus movement speed for 7 seconds',
        pre: 'Sona gains  20%',
        post: 'bonus movement speed for 7 seconds',
        children: [
          {
            values: 2,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 2% per 100 AP',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Sona_Song_of_Celerity_2.png',
    description:
      '<span class="template_sbc"><b><span class="inline-image label-only ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sona" data-ability="Power Chord" data-game="lol"><span style="white-space:normal;"><a href="/wiki/Sona/LoL#Power_Chord" title="Sona/LoL">Melody</a></span></span> Bonus:</b></span> Tagged allied champions gain <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span> for 3 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed:',
        raw: '10 / 11 / 12 / 13 / 14% (+ 2% per 100 AP)',
        values: [10, 11, 12, 13, 14],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 11 / 12 / 13 / 14%',
        children: [
          {
            values: 2,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 2% per 100 AP',
          },
        ],
      },
    ],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Sona_Crescendo.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Sona</b> strikes an irresistible chord in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stuns"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> them for 1.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '150 / 250 / 350 (+ 50% AP)',
        values: [150, 250, 350],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 250 / 350',
        children: [
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 50% AP',
          },
        ],
      },
    ],
  },
];
export const Sona = { I, Q, W, E, R };
