import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Seraphine';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Seraphine_Stage_Presence.png',
    description:
      '<span class="template_sbc"><b>Innate - Echo:</b></span> <b>Seraphine</b> <a href="/wiki/Champion_ability" title="Champion ability">basic abilities</a> generate a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Echo</i>, stacking up to 2 times. At 2 stacks, <b>Seraphine\'s</b> next basic ability casts an additional time at no cost after a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.01 seconds, but rounded up to the next game tick.">0.<small>033</small> seconds</span> delay, consuming all <i>Echo</i> stacks after the <a href="/wiki/Cast_time" class="mw-redirect" title="Cast time">cast time</a> of the second cast.<br><b>Seraphine</b> gains maximum stacks of <i>Echo</i> when the game starts and upon <a href="/wiki/Death" title="Death">respawning</a>.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Innate - Harmony:</b></span> <b>Seraphine\'s</b> ability casts grant a <i>Note</i> to herself and nearby allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> that lasts 6 seconds, refreshes on subsequent <i>Notes</i> and stacks up to 4 times on each unit.',
    leveling: [],
  },
  {
    description:
      'While any amount of <i>Notes</i> are active, <b>Seraphine\'s</b> next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> is empowered to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>, gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;25 <b>bonus</b> attack range</span> per <i>Note</i>, and fire all <i>Notes</i> at the target, with each one dealing <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="4;8;14;24" data-top_values="1;6;11;16">4 / 8 / 14 / 24 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;7% AP)</span> magic damage</span>, reduced by 75% for <i>Notes</i> from allies and increased by 200% against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: "While any amount of Notes are active, Seraphine's next basic attack is empowered to have an  uncancellable windup, gain  25 bonus attack range per Note, and fire all Notes at the target, with each one dealing 4 / 8 / 14 / 24 (based on level) (+ 7% AP) magic damage, reduced by 75% for Notes from allies and increased by 200% against  minions",
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText:
          'magic damage, reduced by 75% for Notes from allies and increased by 200% against  minions',
        pre: "While any amount of Notes are active, Seraphine's next basic attack is empowered to have an  uncancellable windup, gain  25 bonus attack range per Note, and fire all Notes at the target, with each one dealing 4 / 8 / 14 / 24",
        post: 'magic damage, reduced by 75% for Notes from allies and increased by 200% against  minions',
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
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Seraphine_High_Note.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Seraphine</b> hurls a soundwave to the target location that quickly expands in a radius upon arrival, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within the area, <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">increased</span> by <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="target\'s missing health" data-displayformula="5% per 7.5% of target\'s \'\'\'missing\'\'\' health, capped at 75% \'\'\'missing\'\'\' health" data-bot_values="0;5;10;15;20;25;30;35;40;45;50" data-top_values="0;7.5;15;22.5;30;37.5;45;52.5;60;67.5;75" data-bot_key="%" data-top_key="%">0% − 50% (based on target\'s <b>missing</b> health)</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '55 / 70 / 85 / 100 / 115 (+ 45 / 50 / 55 / 60 / 65% AP)',
        values: [55, 70, 85, 100, 115],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '55 / 70 / 85 / 100 / 115',
        children: [
          {
            values: [45, 50, 55, 60, 65],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 45 / 50 / 55 / 60 / 65% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Increased Damage:',
        raw: '82.5 / 105 / 127.5 / 150 / 172.5 (+ 67.5 / 75 / 82.5 / 90 / 97.5% AP)',
        values: [82.5, 105, 127.5, 150, 172.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '82.5 / 105 / 127.5 / 150 / 172.5',
        children: [
          {
            values: [67.5, 75, 82.5, 90, 97.5],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 67.5 / 75 / 82.5 / 90 / 97.5% AP',
          },
        ],
      },
    ],
  },
  {
    description: '<i>High Note will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Seraphine_Surround_Sound.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Seraphine</b> grants a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> to herself and nearby allied champions for 2.<small>5</small> seconds. For the same duration, she also gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">20%</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;4% per 100 AP)</span> <span style="color: #F5EE99; white-space:normal">decaying <b>bonus</b> movement speed</span></span> and grants allies <span style="color: #F5EE99; white-space:normal">8%</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;1.<small>6</small>% per 100 AP)</span> <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 3:',
        raw: ' For the same duration, she also gains  20% (+ 4% per 100 AP) decaying bonus movement speed and grants allies 8% (+ 1',
        values: 2,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: 'decaying bonus movement speed and grants allies 8% + 1',
        pre: 'For the same duration, she also gains  20%',
        post: 'decaying bonus movement speed and grants allies 8% + 1',
        children: [
          {
            values: 4,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 4% per 100 AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Shield Strength:',
        raw: '50 / 70 / 90 / 110 / 130 (+ 25% AP)',
        values: [50, 70, 90, 110, 130],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 70 / 90 / 110 / 130',
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
      'If <b>Seraphine</b> already had a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> at the time of cast, <i>Surround Sound</i> will pulse after the duration, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> herself and nearby allied champions, increased for each <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="including Seraphine herself">ally</span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Heal Per Ally:',
        raw: "5 / 5.5 / 6 / 6.5 / 7% (+ 0.4% per 100 AP) of target's missing health",
        healType: 'OutgoingHeals',
        values: [5, 5.5, 6, 6.5, 7],
        valuesIsPercent: true,
        user: 'target',
        units: 'missing_hp',
        unitsText: "of target's missing health",
        pre: '5 / 5.5 / 6 / 6.5 / 7%',
        post: "of target's missing health",
        children: [
          {
            values: 0.4,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 0.4% per 100 AP',
          },
        ],
      },
    ],
  },
  {
    description: "<i>Surround Sound's effects can stack up to 2 times.</i>",
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Seraphine_Beat_Drop.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Seraphine</b> fires a heavy soundwave in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 99% for 1.<small>25</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '60 / 80 / 100 / 120 / 140 (+ 35% AP)',
        values: [60, 80, 100, 120, 140],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 80 / 100 / 120 / 140',
        children: [
          {
            values: 35,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 35% AP',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Beat_Drop_4.png',
    description:
      'Enemies that are already <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span> for the same duration.',
    leveling: [],
  },
  {
    img: '/wiki/images/Beat_Drop_5.png',
    description:
      'Enemies that are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for the same duration.',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Seraphine_Encore.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Seraphine</b> projects a captivating force in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Charm"><a href="/wiki/Charm" title="Charm"><img alt="Charm icon.png" src="/wiki/images/Charm_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Charm" class="mw-redirect" title="Charm">charms</a></span> them, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 40% for a duration, increasing by 15% every 0.<small>25</small> seconds over the duration up to 99%.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '150 / 200 / 250 (+ 60% AP)',
        values: [150, 200, 250],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 200 / 250',
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
        name: 'Disable Duration:',
        raw: '1.25 / 1.5 / 1.75',
        values: [1.25, 1.5, 1.75],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1.25 / 1.5 / 1.75',
      },
    ],
  },
  {
    description:
      '<i>Encore\'s</i> projectile resets its remaining travel distance whenever it hits an allied or enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, excluding <b>Seraphine</b>. Allied champions hit gain <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Seraphine" data-ability="Stage Presence" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Seraphine/LoL#Stage_Presence" title="4 Notes"><img alt="4 Notes" src="/wiki/images/Seraphine_Stage_Presence.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Seraphine/LoL#Stage_Presence" title="Seraphine/LoL">4 Notes</a></span></span></i>.',
    leveling: [],
  },
];
export const Seraphine = { I, Q, W, E, R };
