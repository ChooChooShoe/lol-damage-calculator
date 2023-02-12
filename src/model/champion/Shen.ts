import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Shen';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Shen_Ki_Barrier.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> After completing an <a href="/wiki/Champion_ability" title="Champion ability">ability\'s</a> effects, <b>Shen</b> grants himself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="50;" data-finish="101;" data-bot_values="50;53;56;59;62;65;68;71;74;77;80;83;86;89;92;95;98;101" data-top_values="">50 − 101 (based on level)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;12% <b>bonus</b> health)</span> for 2.<small>5</small> seconds. If the triggering ability successfully affected at least one enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, <i>Ki Barrier\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is reduced by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="4;4.5;5;5.5;6;6.5;7;7.5" data-top_values="1;6;9;12;14;16;17;18">4 − 7.<small>5</small> (based on level)</span> seconds.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: " After completing an ability's effects, Shen grants himself a  shield for 50 − 101 (based on level) (+ 12% bonus health) for 2",
        healType: 'BonusHealth',
        values: [
          50, 53, 56, 59, 62, 65, 68, 71, 74, 77, 80, 83, 86, 89, 92, 95, 98,
          101,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'for 2',
        pre: "After completing an ability's effects, Shen grants himself a  shield for 50 − 101",
        post: 'for 2',
        children: [
          {
            values: 12,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_hp',
            unitsText: 'bonus health',
            pre: '+ 12% bonus health',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Line 3:',
        raw: " If the triggering ability successfully affected at least one enemy  champion, Ki Barrier's  cooldown is reduced by 4 − 7",
        values: [4, 7],
        user: 'player',
        units: 'total_ap',
        unitsText:
          "the triggering ability successfully affected at least one enemy  champion, Ki Barrier's  cooldown is reduced by 4",
        pre: "If the triggering ability successfully affected at least one enemy  champion, Ki Barrier's  cooldown is reduced by 4 − 7",
      },
      {
        effectType: 'Unique',
        name: 'Line 4:',
        raw: '5 (based on level) seconds',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'seconds',
        pre: '5',
        post: 'seconds',
      },
    ],
  },
  {
    description:
      '<b>Shen</b> manifests a <span style="color: #AF1AAF; white-space:normal">Spirit Blade</span> that he can control with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shen" data-ability="Twilight Assault" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shen/LoL#Twilight_Assault" title="Twilight Assault"><img alt="Twilight Assault" src="/wiki/images/Shen_Twilight_Assault.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shen/LoL#Twilight_Assault" title="Shen/LoL">Twilight Assault</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shen" data-ability="Spirit\'s Refuge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shen/LoL#Spirit\'s_Refuge" title="Spirit\'s Refuge"><img alt="Spirit\'s Refuge" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shen/LoL#Spirit\'s_Refuge" title="Shen/LoL">Spirit\'s Refuge</a></span></span></i>.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Shen_Twilight_Assault.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Shen</b> recalls his <span style="color: #AF1AAF; white-space:normal">Spirit Blade</span> to his location. Enemy champions hit are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> for the next 2 seconds while moving away from <b>Shen</b>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Slow:',
        raw: '15 / 20 / 25 / 30 / 35%',
        values: [15, 20, 25, 30, 35],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 20 / 25 / 30 / 35%',
      },
    ],
  },
  {
    img: '/wiki/images/Shen_Twilight_Assault_2.png',
    description:
      'Once it arrives, <b>Shen</b> empowers his next 3 <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> within 8 seconds to gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;75 <b>bonus</b> range</span> and deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Bonus Magic Damage:',
        raw: "10 − 40 (based on level) (+ 2 / 2.5 / 3 / 3.5 / 4% (+ 1.5% per 100 AP) of target's maximum health)",
        healType: 'OutgoingHeals',
        values: [
          10, 11.76, 13.53, 15.29, 17.06, 18.82, 20.59, 22.35, 24.12, 25.88,
          27.65, 29.41, 31.18, 32.94, 34.71, 36.47, 38.24, 40,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 − 40',
        children: [
          {
            values: [2, 2.5, 3, 3.5, 4],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: '+ 2 / 2.5 / 3 / 3.5 / 4%',
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
      {
        effectType: 'Heal',
        name: 'Total Magic Damage:',
        raw: "30 − 120 (based on level) (+ 6 / 7.5 / 9 / 10.5 / 12% (+ 4.5% per 100 AP) of target's maximum health)",
        healType: 'OutgoingHeals',
        values: [
          30, 35.29, 40.59, 45.88, 51.18, 56.47, 61.76, 67.06, 72.35, 77.65,
          82.94, 88.24, 93.53, 98.82, 104.12, 109.41, 114.71, 120,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 − 120',
        children: [
          {
            values: [6, 7.5, 9, 10.5, 12],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: '+ 6 / 7.5 / 9 / 10.5 / 12%',
            post: "of target's maximum health",
            children: [
              {
                values: 4.5,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 4.5% per 100 AP',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Shen_Twilight_Assault_3.png',
    description:
      'If the <span style="color: #AF1AAF; white-space:normal">Spirit Blade</span> hit at least one enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> during the travel, the empowerment is enhanced to deal increased <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> and additionally grant <b>Shen</b> <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">50% <b>bonus</b> attack speed</span></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Increased Bonus Damage:',
        raw: "10 − 40 (based on level) (+ 4 / 4.5 / 5 / 5.5 / 6% (+ 2% per 100 AP) of target's maximum health)",
        healType: 'OutgoingHeals',
        values: [
          10, 11.76, 13.53, 15.29, 17.06, 18.82, 20.59, 22.35, 24.12, 25.88,
          27.65, 29.41, 31.18, 32.94, 34.71, 36.47, 38.24, 40,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 − 40',
        children: [
          {
            values: [4, 4.5, 5, 5.5, 6],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: '+ 4 / 4.5 / 5 / 5.5 / 6%',
            post: "of target's maximum health",
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
        effectType: 'Heal',
        name: 'Total Increased Damage:',
        raw: "30 − 120 (based on level) (+ 12 / 13.5 / 15 / 16.5 / 18% (+ 6% per 100 AP) of target's maximum health)",
        healType: 'OutgoingHeals',
        values: [
          30, 35.29, 40.59, 45.88, 51.18, 56.47, 61.76, 67.06, 72.35, 77.65,
          82.94, 88.24, 93.53, 98.82, 104.12, 109.41, 114.71, 120,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 − 120',
        children: [
          {
            values: [12, 13.5, 15, 16.5, 18],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: '+ 12 / 13.5 / 15 / 16.5 / 18%',
            post: "of target's maximum health",
            children: [
              {
                values: 6,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 6% per 100 AP',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    description:
      'Empowered attacks against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> deal 100% <b>bonus</b> damage, but their <b>total</b> damage is capped.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Maximum Monster Damage:',
        raw: '120 / 140 / 160 / 180 / 200',
        values: [120, 140, 160, 180, 200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '120 / 140 / 160 / 180 / 200',
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Shen_Spirit%27s_Refuge.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Shen</b> primes his <span style="color: #AF1AAF; white-space:normal">Spirit Blade</span>, creating an area around it. After 2 seconds, or when <b>Shen</b> or an allied champion enter the area, the <span style="color: #AF1AAF; white-space:normal">Spirit Blade</span> erupts a protective zone for 1.<small>75</small> seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocking</a></span> all non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span> basic attacks that hit <b>Shen</b> or allied champions in the area.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> Dealing damage with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shen" data-ability="Twilight Assault" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shen/LoL#Twilight_Assault" title="Twilight Assault"><img alt="Twilight Assault" src="/wiki/images/Shen_Twilight_Assault.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shen/LoL#Twilight_Assault" title="Shen/LoL">Twilight Assault</a></span></span></i> or <i>Shadow Dash</i> restores <span style="white-space:nowrap"><a href="/wiki/Energy" title="Energy"><img alt="Energy icon.png" src="/wiki/images/Energy_icon.png" decoding="async" loading="lazy" width="15" height="16" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="30;40;50" data-top_values="1;4;12">30 / 40 / 50 (based on level)</span> energy</span></span>.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: ' Dealing damage with  Twilight Assault or Shadow Dash restores  30 / 40 / 50 (based on level) energy',
        damagetype: 'None',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'energy',
        pre: 'Dealing damage with  Twilight Assault or Shadow Dash restores  30 / 40 / 50',
        post: 'energy',
      },
    ],
  },
  {
    img: '/wiki/images/Shen_Shadow_Dash.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Shen</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> he passes through and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Taunt"><a href="/wiki/Taunt" title="Taunt"><img alt="Taunt icon.png" src="/wiki/images/Taunt_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Taunt" class="mw-redirect" title="Taunt">taunting</a></span> them for 1.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Physical Damage:',
        raw: '60 / 85 / 110 / 135 / 160 (+ 15% bonus health)',
        healType: 'BonusHealth',
        values: [60, 85, 110, 135, 160],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 85 / 110 / 135 / 160',
        children: [
          {
            values: 15,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_hp',
            unitsText: 'bonus health',
            pre: '+ 15% bonus health',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shen" data-ability="Twilight Assault" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shen/LoL#Twilight_Assault" title="Twilight Assault"><img alt="Twilight Assault" src="/wiki/images/Shen_Twilight_Assault.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shen/LoL#Twilight_Assault" title="Shen/LoL">Twilight Assault</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shen" data-ability="Spirit\'s Refuge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shen/LoL#Spirit\'s_Refuge" title="Spirit\'s Refuge"><img alt="Spirit\'s Refuge" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shen/LoL#Spirit\'s_Refuge" title="Shen/LoL">Spirit\'s Refuge</a></span></span> can be cast during the dash. Shadow Dash will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Shen_Stand_United.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Shen</b> <span class="inline-image" style="display:inline;white-space:pre;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><img alt="Stand United Minimap.png" src="/wiki/images/Stand_United_Minimap.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel">channels</a></span> for 3 seconds and granting a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> to the target allied champion at the time of cast for up to 5 seconds, increased by <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="target\'s missing health" data-displayformula="1% per 1% of target\'s \'\'\'missing\'\'\' health. \'\'This is capped at 60% \'\'\'missing\'\'\' health.\'\'" data-bot_values="0;10;20;30;40;50;60" data-top_values="0;10;20;30;40;50;60" data-bot_key="%" data-top_key="%">0% − 60% (based on target\'s <b>missing</b> health)</span></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: " Shen  channels for 3 seconds and granting a  shield to the target allied champion at the time of cast for up to 5 seconds, increased by 0% − 60% (based on target's missing health)",
        healType: 'OutgoingHeals',
        values: 3,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText:
          '− 60 channels for 3 seconds and granting a  shield to the target allied champion at the time of cast for up to 5 seconds, increased by 0',
        pre: 'Shen  channels for 3 seconds and granting a  shield to the target allied champion at the time of cast for up to 5 seconds, increased by 0% − 60%',
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
        effectType: 'Heal',
        name: 'Minimum Shield Strength:',
        raw: '130 / 290 / 450 (+ 135% AP) (+ 16% bonus health)',
        healType: 'BonusHealth',
        values: [130, 290, 450],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '130 / 290 / 450',
        children: [
          {
            values: 135,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 135% AP',
          },
          {
            values: 16,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_hp',
            unitsText: 'bonus health',
            pre: '+ 16% bonus health',
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Maximum Shield Strength:',
        raw: '208 / 464 / 720 (+ 216% AP) (+ 25.6% bonus health)',
        healType: 'BonusHealth',
        values: [208, 464, 720],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '208 / 464 / 720',
        children: [
          {
            values: 216,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 216% AP',
          },
          {
            values: 25.6,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_hp',
            unitsText: 'bonus health',
            pre: '+ 25.6% bonus health',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Shen_Stand_United_2.png',
    description:
      'Upon completing the channel, <b>Shen</b> and his <span style="color: #AF1AAF; white-space:normal">Spirit Blade</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blink</a></span> to the target ally\'s location, placed between them and the nearest enemy champion. <b>Shen</b> also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Homing projectile destruction"><a href="/wiki/Projectile" title="Projectile"><img alt="Bullet strikethrough.png" src="/wiki/images/Bullet_strikethrough.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">destroys</a></span> any <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectiles"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">projectiles</a></span> targeting him at the time of completion.',
    leveling: [],
  },
];
export const Shen = { I, Q, W, E, R };
