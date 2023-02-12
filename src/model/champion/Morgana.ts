import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Morgana';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Morgana_Soul_Siphon.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Morgana</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> herself for 18% of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after modifiers">post-mitigation damage</span> dealt by her <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>, and medium and large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Morgana_Dark_Binding.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Morgana</b> throws a sphere of dark magic in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">roots</a></span> them for a duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '80 / 135 / 190 / 245 / 300 (+ 90% AP)',
        values: [80, 135, 190, 245, 300],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 135 / 190 / 245 / 300',
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
        name: 'Root Duration:',
        raw: '2 / 2.25 / 2.5 / 2.75 / 3',
        values: [2, 2.25, 2.5, 2.75, 3],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '2 / 2.25 / 2.5 / 2.75 / 3',
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <i>Tormented Shadow\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> is reduced by 5% of its <b>total</b> cooldown whenever <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Morgana" data-ability="Soul Siphon" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Morgana/LoL#Soul_Siphon" title="Soul Siphon"><img alt="Soul Siphon" src="/wiki/images/Morgana_Soul_Siphon.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Morgana/LoL#Soul_Siphon" title="Morgana/LoL">Soul Siphon</a></span></span></i> triggers. Simultaneous triggers from multiple targets will stack the cooldown reduction.',
    leveling: [],
  },
  {
    img: '/wiki/images/Morgana_Tormented_Shadow.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Morgana</b> torments the soil at the target location, causing the area to become desecrated for 5 seconds. Enemies within take <span style="color: #00B0F0; white-space:normal">magic damage</span> on-cast and every 0.<small>5</small> seconds, increased by <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="target\'s missing health" data-displayformula="1.7% per 1% of target\'s \'\'\'missing\'\'\' health" data-bot_values="0;17;34;51;68;85;102;119;136;153;170" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 170% (based on target\'s <b>missing</b> health)</span></span>. <i>Tormented Shadow</i> deals 155% damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 3:',
        raw: "5 seconds, increased by 0% − 170% (based on target's missing health)",
        healType: 'OutgoingHeals',
        values: 5,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '− 170seconds, increased by 0',
        pre: '5 seconds, increased by 0% − 170%',
        children: [
          {
            values: 0,
            user: 'target',
            units: 'missing_hp',
            unitsText: "based on target's missing health",
            pre: "based on target's missing health",
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Minimum Damage Per Tick:',
        raw: '6 / 11 / 16 / 21 / 26 (+ 7% AP)',
        values: [6, 11, 16, 21, 26],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '6 / 11 / 16 / 21 / 26',
        children: [
          {
            values: 7,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 7% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Damage Per Tick:',
        raw: '16.2 / 29.7 / 43.2 / 56.7 / 70.2 (+ 18.9% AP)',
        values: [16.2, 29.7, 43.2, 56.7, 70.2],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '16.2 / 29.7 / 43.2 / 56.7 / 70.2',
        children: [
          {
            values: 18.9,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 18.9% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Minimum Total Damage:',
        raw: '60 / 110 / 160 / 210 / 260 (+ 70% AP)',
        values: [60, 110, 160, 210, 260],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 110 / 160 / 210 / 260',
        children: [
          {
            values: 70,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 70% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Total Damage:',
        raw: '162 / 297 / 432 / 567 / 702 (+ 189% AP)',
        values: [162, 297, 432, 567, 702],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '162 / 297 / 432 / 567 / 702',
        children: [
          {
            values: 189,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 189% AP',
          },
        ],
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Morgana_Black_Shield.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Morgana</b> grants a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> to the target allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or herself for 5 seconds, which absorbs incoming <span style="color: #00B0F0; white-space:normal">magic damage</span> and grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">crowd control immunity</a></span> while it holds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Shield Strength:',
        raw: '80 / 135 / 190 / 245 / 300 (+ 70% AP)',
        values: [80, 135, 190, 245, 300],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 135 / 190 / 245 / 300',
        children: [
          {
            values: 70,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 70% AP',
          },
        ],
      },
    ],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Morgana_Soul_Shackles.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Morgana</b> latches chains of energy onto nearby enemy champions over the cast time, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and forming a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tether</a></span> between herself and each target for 3 seconds, during which the targets are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 20%.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '150 / 225 / 300 (+ 70% AP)',
        values: [150, 225, 300],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 225 / 300',
        children: [
          {
            values: 70,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 70% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '300 / 450 / 600 (+ 140% AP)',
        values: [300, 450, 600],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '300 / 450 / 600',
        children: [
          {
            values: 140,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 140% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<b>Morgana</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> while facing enemies tethered to her.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed:',
        raw: '5 / 30 / 55%',
        values: [5, 30, 55],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5 / 30 / 55%',
      },
    ],
  },
  {
    description:
      'If a target does not break their tether by the ends of its duration, they are dealt the same <span style="color: #00B0F0; white-space:normal">magic damage</span> again and become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for 1.<small>5</small> seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span>.',
    leveling: [],
  },
  {
    description:
      '<i>A nearby enemy champion is required to cast this ability. The target does not have to be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> to be tethered by this ability.</i>',
    leveling: [],
  },
];
export const Morgana = { I, Q, W, E, R };
