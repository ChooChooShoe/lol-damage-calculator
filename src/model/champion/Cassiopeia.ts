import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Cassiopeia';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Cassiopeia_Serpentine_Grace.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Cassiopeia</b> gains <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#F5EE99;" data-start="4;" data-finish="72;" data-bot_values="4;8;12;16;20;24;28;32;36;40;44;48;52;56;60;64;68;72" data-top_values="">4 − 72 (based on level)</span> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>, but she cannot purchase <a href="/wiki/Boots" title="Boots">Boots</a>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: ' Cassiopeia gains 4 − 72 (based on level)  bonus movement speed, but she cannot purchase Boots',
        values: [
          4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'bonus movement speed, but she cannot purchase Boots',
        pre: 'Cassiopeia gains 4 − 72',
        post: 'bonus movement speed, but she cannot purchase Boots',
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Cassiopeia_Noxious_Blast.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Cassiopeia</b> creates a blast at the target location that explodes after a 0.<small>4</small>-second delay. Enemies within the blast are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Poison"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL"><img alt="Poison icon.png" src="/wiki/images/Poison_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <strong class="mw-selflink selflink">poisoned</strong></span> for 3 seconds, taking <span style="color: #00B0F0; white-space:normal">magic damage</span> every second over the duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '75 / 110 / 145 / 180 / 215 (+ 90% AP)',
        values: [75, 110, 145, 180, 215],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '75 / 110 / 145 / 180 / 215',
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
        name: 'Magic Damage Per Tick:',
        raw: '25 / 36.67 / 48.33 / 60 / 71.67 (+ 30% AP)',
        values: [25, 36.67, 48.33, 60, 71.67],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 36.67 / 48.33 / 60 / 71.67',
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
      'If <i>Noxious Blast</i> hits an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, <b>Cassiopeia</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> that decays over 3 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed:',
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
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Cassiopeia_Miasma.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Cassiopeia</b> spews forth 8 bolts of venom in an arc at the target location, creating toxic clouds at the area for 5 seconds.',
    leveling: [],
  },
  {
    description:
      'Enemies within the clouds are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Poison"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL"><img alt="Poison icon.png" src="/wiki/images/Poison_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <strong class="mw-selflink selflink">poisoned</strong></span> to take <span style="color: #00B0F0; white-space:normal">magic damage</span> every second and become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by an amount that decays over the area\'s duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage Per Tick:',
        raw: '20 / 25 / 30 / 35 / 40 (+ 15% AP)',
        values: [20, 25, 30, 35, 40],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 25 / 30 / 35 / 40',
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
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '100 / 125 / 150 / 175 / 200 (+ 75% AP)',
        values: [100, 125, 150, 175, 200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '100 / 125 / 150 / 175 / 200',
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
      {
        effectType: 'Unique',
        name: 'Slow:',
        raw: '40 / 50 / 60 / 70 / 80%',
        values: [40, 50, 60, 70, 80],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 50 / 60 / 70 / 80%',
      },
    ],
  },
  {
    description: '<i>Miasma will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Cassiopeia_Twin_Fang.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Cassiopeia</b> launches her fangs at the target enemy that deal <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#00B0F0;" data-start="52;" data-finish="120;" data-bot_values="52;56;60;64;68;72;76;80;84;88;92;96;100;104;108;112;116;120" data-top_values="">52 − 120 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;10% AP)</span> <span style="color: #00B0F0; white-space:normal">magic damage</span>. If this kills the target, <i>Twin Fang\'s</i> <span style="color: #0099CC; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;mana cost</span></span> is refunded.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: ' Cassiopeia launches her fangs at the target enemy that deal 52 − 120 (based on level) (+ 10% AP) magic damage',
        damagetype: 'Magic',
        values: [
          52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100, 104, 108, 112,
          116, 120,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'magic damage',
        pre: 'Cassiopeia launches her fangs at the target enemy that deal 52 − 120',
        post: 'magic damage',
        children: [
          {
            values: 10,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 10% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'Against a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Poison"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL"><img alt="Poison icon.png" src="/wiki/images/Poison_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <strong class="mw-selflink selflink">poisoned</strong></span> target, <i>Twin Fang</i> deals <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> <b>Cassiopeia</b>. The heal is reduced by 75% against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and small and medium <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Magic Damage:',
        raw: '20 / 40 / 60 / 80 / 100 (+ 60% AP)',
        values: [20, 40, 60, 80, 100],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 40 / 60 / 80 / 100',
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
      {
        effectType: 'Unique',
        name: 'Heal:',
        raw: '10 / 11.5 / 13 / 14.5 / 16% AP',
        values: [10, 11.5, 13, 14.5, 16],
        valuesIsPercent: true,
        user: 'player',
        units: 'total_ap',
        unitsText: 'AP',
        pre: '10 / 11.5 / 13 / 14.5 / 16% AP',
      },
      {
        effectType: 'Unique',
        name: 'Reduced Heal:',
        raw: '2.5 / 2.875 / 3.25 / 3.625 / 4% AP',
        values: [2.5, 2.875, 3.25, 3.625, 4],
        valuesIsPercent: true,
        user: 'player',
        units: 'total_ap',
        unitsText: 'AP',
        pre: '2.5 / 2.875 / 3.25 / 3.625 / 4% AP',
      },
    ],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Cassiopeia_Petrifying_Gaze.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Cassiopeia</b> blasts enemies in a cone in the target direction, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies struck within and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 40% for 2 seconds. Enemies with their facing direction towards her are instead <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for the same duration.',
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
export const Cassiopeia = { I, Q, W, E, R };
