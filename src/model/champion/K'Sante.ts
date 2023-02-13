import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = "K'Sante";
const I: SubSkill[] = [
  {
    img: '/wiki/images/K%27Sante_Dauntless_Instinct.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>K\'Sante\'s</b> <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> mark enemies hit for 4 seconds. His <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack"><a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a></span> against marked enemies are empowered to gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;25 <b>bonus</b> range</span> and consume the mark <a href="/wiki/On-hit" class="mw-redirect" title="On-hit">on-hit</a>, dealing <span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="5;" data-finish="20;" data-bot_values="5;5.88;6.76;7.65;8.53;9.41;10.29;11.18;12.06;12.94;13.82;14.71;15.59;16.47;17.35;18.24;19.12;20" data-top_values="">5 − 20 (based on level)</span></span> <span style="color: #1F995C; white-space:normal">(+&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="1% at level 1, then +0.33% at level 6, then +0.33% at level 11, then +0.34% at level 16" data-bot_values="1;1.33;1.66;2" data-top_values="1;6;11;16" data-bot_key="%">1 / 1.<small>33</small> / 1.<small>66</small> / 2% (based on level)</span> of target\'s <b>maximum</b> health)</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 2:',
        raw: ' His basic attacks against marked enemies are empowered to gain  25 bonus range and consume the mark on-hit, dealing 5 − 20 (based on level) (+ 1 / 1',
        values: [
          5, 5.88, 6.76, 7.65, 8.53, 9.41, 10.29, 11.18, 12.06, 12.94, 13.82,
          14.71, 15.59, 16.47, 17.35, 18.24, 19.12, 20,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '+ 1 / 1',
        pre: 'His basic attacks against marked enemies are empowered to gain  25 bonus range and consume the mark on-hit, dealing 5 − 20',
        post: '+ 1 / 1',
      },
      {
        effectType: 'Unique',
        name: 'Line 3:',
        raw: '33 / 1',
        values: [33, 1],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '33 / 1',
      },
      {
        effectType: 'Heal',
        name: 'Line 4:',
        raw: "66 / 2% (based on level) of target's maximum health) bonus physical damage",
        healType: 'PhysicalVamp',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of target's maximum health bonus physical damage",
        pre: '66 / 2%',
        post: "of target's maximum health bonus physical damage",
      },
    ],
  },
  {
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="K\'Sante" data-ability="All Out" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/K%27Sante/LoL#All_Out" title="All Out"><img alt="All Out" src="/wiki/images/K%27Sante_All_Out.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/K%27Sante/LoL#All_Out" title="K\'Sante/LoL">All Out</a></span></span> Bonus:</b></span> Both the <span style="color:orange; white-space:normal">attack\'s damage</span> and the mark damage are increased by 35% <span style="color:yellow; white-space:normal">(+&nbsp;20% per 100 <b>bonus</b> armor)</span> <span style="color: #00FFFF; white-space:normal">(+&nbsp;20% per 100 <b>bonus</b> magic resistance)</span>. The <b>bonus</b> damage dealt by consuming a mark is converted to <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal">true damage</span></span>.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: " Both the attack's damage and the mark damage are increased by 35% (+ 20% per 100 bonus armor) (+ 20% per 100 bonus magic resistance)",
        damagetype: 'Magic',
        values: 3,
        valuesIsPercent: true,
        user: 'player',
        units: 'kindredMarks',
        unitsText:
          "the attack's damage and the mark damage are increased by 35",
        pre: "Both the attack's damage and the mark damage are increased by 35%",
        children: [
          {
            values: 20,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_armor',
            unitsText: 'per 100 bonus armor',
            pre: '+ 20% per 100 bonus armor',
          },
          {
            values: 20,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_mr',
            unitsText: 'per 100 bonus magic resistance',
            pre: '+ 20% per 100 bonus magic resistance',
          },
        ],
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/K%27Sante_Ntofo_Strikes.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>K\'Sante</b> slams his ntofo down in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 80% for 0.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '50 / 75 / 100 / 125 / 150 (+ 40% AD) (+ 30% bonus armor) (+ 30% bonus magic resistance)',
        values: [50, 75, 100, 125, 150],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 75 / 100 / 125 / 150',
        children: [
          {
            values: 40,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 40% AD',
          },
          {
            values: 30,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_armor',
            unitsText: 'bonus armor',
            pre: '+ 30% bonus armor',
          },
          {
            values: 30,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_mr',
            unitsText: 'bonus magic resistance',
            pre: '+ 30% bonus magic resistance',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/K%27Sante_Ntofo_Strikes_2.png',
    description:
      'If this hits at least one enemy, <b>K\'Sante</b> generates a <a href="/wiki/Stack" title="Stack">stack</a> for 6 seconds, stacking up to 2 times and refreshing on subsequent hits. At 2 stacks, the next <i>Ntofo Strikes</i> consumes them all to become empowered with a new effect.',
    leveling: [],
  },
  {
    img: '/wiki/images/K%27Sante_Ntofo_Strikes_3.png',
    description:
      '<span class="template_sbc"><b>Empowered Active:</b></span> <b>K\'Sante</b> fires a shockwave in the target direction that applies the same effects to enemies hit, but also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulls</a></span> them towards him over 0.<small>65</small> seconds and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> them for 1 second.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="K\'Sante" data-ability="All Out" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/K%27Sante/LoL#All_Out" title="All Out"><img alt="All Out" src="/wiki/images/K%27Sante_All_Out.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/K%27Sante/LoL#All_Out" title="K\'Sante/LoL">All Out</a></span></span> Bonus:</b></span> <i>Ntofo Strikes\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is reduced by 1 second, up to a minimum of 1.<small>33</small> seconds, but it will no longer slow all targets hit.',
    leveling: [],
  },
  {
    description:
      '<i>Ntofo Strikes partially <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>K\'Sante\'s</b> basic attack timer. While <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="K\'Sante" data-ability="All Out" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/K%27Sante/LoL#All_Out" title="All Out"><img alt="All Out" src="/wiki/images/K%27Sante_All_Out.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/K%27Sante/LoL#All_Out" title="K\'Sante/LoL">All Out</a></span></span>, it fully resets the timer.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/K%27Sante_Path_Maker.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>K\'Sante</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">charges</a></span> for up to 1 second, during which he increases <i>Path Maker\'s</i> range, damage, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> duration over the first 0.<small>85</small> seconds of the channel. During this time, he gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span> and 25% <span style="color:yellow; white-space:normal">(+&nbsp;10% per 100 <b>bonus</b> armor)</span> <span style="color: #00FFFF; white-space:normal">(+&nbsp;10% per 100 <b>bonus</b> magic resistance)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;1% per 100 <b>bonus</b> health)</span> damage reduction.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 3:',
        raw: ' During this time, he gains  displacement immunity and 25% (+ 10% per 100 bonus armor) (+ 10% per 100 bonus magic resistance) (+ 1% per 100 bonus health) damage reduction',
        healType: 'BonusHealth',
        values: 2,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: 'damage reduction',
        pre: 'During this time, he gains  displacement immunity and 25%',
        post: 'damage reduction',
        children: [
          {
            values: 10,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_armor',
            unitsText: 'per 100 bonus armor',
            pre: '+ 10% per 100 bonus armor',
          },
          {
            values: 10,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_mr',
            unitsText: 'per 100 bonus magic resistance',
            pre: '+ 10% per 100 bonus magic resistance',
          },
          {
            values: 1,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_hp',
            unitsText: 'per 100 bonus health',
            pre: '+ 1% per 100 bonus health',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Path Maker</i> can be recast within the duration, and does so automatically afterwards. <i>Path Maker\'s</i> charge cannot be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span> by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span>.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>K\'Sante</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction, though not through terrain, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies he passes through, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">carrying</a></span> them alongside him, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for a duration. This damage is capped at <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="50;" data-finish="475;" data-bot_values="50;75;100;125;150;175;200;225;250;275;300;325;350;375;400;425;450;475" data-top_values="">50 − 475 (based on level)</span> against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 2:',
        raw: ' This damage is capped at 50 − 475 (based on level) against  monsters',
        values: [
          50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375,
          400, 425, 450, 475,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'against  monsters',
        pre: 'This damage is capped at 50 − 475',
        post: 'against  monsters',
      },
      {
        effectType: 'Heal',
        name: 'Minimum Physical Damage:',
        raw: "2 / 2.25 / 2.5 / 2.75 / 3% of target's maximum health",
        healType: 'OutgoingHeals',
        values: [2, 2.25, 2.5, 2.75, 3],
        valuesIsPercent: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of target's maximum health",
        pre: "2 / 2.25 / 2.5 / 2.75 / 3% of target's maximum health",
      },
      {
        effectType: 'Heal',
        name: 'Maximum Physical Damage:',
        raw: "7 / 7.25 / 7.5 / 7.75 / 8% of target's maximum health",
        healType: 'OutgoingHeals',
        values: [7, 7.25, 7.5, 7.75, 8],
        valuesIsPercent: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of target's maximum health",
        pre: "7 / 7.25 / 7.5 / 7.75 / 8% of target's maximum health",
      },
      {
        effectType: 'Unique',
        name: 'Minimum Stun Duration:',
        raw: '0.3 / 0.35 / 0.4 / 0.45 / 0.5',
        values: [0.3, 0.35, 0.4, 0.45, 0.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '0.3 / 0.35 / 0.4 / 0.45 / 0.5',
      },
      {
        effectType: 'Unique',
        name: 'Maximum Stun Duration:',
        raw: '0.85 / 0.95 / 1.05 / 1.15 / 1.25',
        values: [0.85, 0.95, 1.05, 1.15, 1.25],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '0.85 / 0.95 / 1.05 / 1.15 / 1.25',
      },
    ],
  },
  {
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="K\'Sante" data-ability="All Out" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/K%27Sante/LoL#All_Out" title="All Out"><img alt="All Out" src="/wiki/images/K%27Sante_All_Out.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/K%27Sante/LoL#All_Out" title="K\'Sante/LoL">All Out</a></span></span> Bonus:</b></span> <i>Path Maker</i> no longer applies its <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock back</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span>, but it deals <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> and its damage reduction is increased to 30% <span style="color:yellow; white-space:normal">(+&nbsp;12% per 100 <b>bonus</b> armor)</span> <span style="color: #00FFFF; white-space:normal">(+&nbsp;12% per 100 <b>bonus</b> magic resistance)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;1.<small>2</small>% per 100 <b>bonus</b> health)</span>, and has twice the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Reduced to 0.425 seconds">charge speed</span> and dash speed. Upon entering <i>All Out</i>, <i>Path Maker\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is refreshed.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: ' Path Maker no longer applies its  knock back and  stun, but it deals bonus physical damage and its damage reduction is increased to 30% (+ 12% per 100 bonus armor) (+ 12% per 100 bonus magic resistance) (+ 1',
        damagetype: 'Physical',
        values: 3,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '+ 1',
        pre: 'Path Maker no longer applies its  knock back and  stun, but it deals bonus physical damage and its damage reduction is increased to 30%',
        post: '+ 1',
        children: [
          {
            values: 12,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_armor',
            unitsText: 'per 100 bonus armor',
            pre: '+ 12% per 100 bonus armor',
          },
          {
            values: 12,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_mr',
            unitsText: 'per 100 bonus magic resistance',
            pre: '+ 12% per 100 bonus magic resistance',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Minimum Bonus Physical Damage:',
        raw: '25 / 35 / 45 / 55 / 65 (+ 50% AD)',
        values: [25, 35, 45, 55, 65],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 35 / 45 / 55 / 65',
        children: [
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 50% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Bonus Physical Damage:',
        raw: '110 / 170 / 230 / 290 / 350 (+ 50% AD)',
        values: [110, 170, 230, 290, 350],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '110 / 170 / 230 / 290 / 350',
        children: [
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 50% AD',
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Minimum Total Physical Damage:',
        raw: "25 / 35 / 45 / 55 / 65 (+ 50% AD) (+ 2 / 2.25 / 2.5 / 2.75 / 3% of target's maximum health)",
        healType: 'OutgoingHeals',
        values: [25, 35, 45, 55, 65],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 35 / 45 / 55 / 65',
        children: [
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 50% AD',
          },
          {
            values: [2, 2.25, 2.5, 2.75, 3],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: "+ 2 / 2.25 / 2.5 / 2.75 / 3% of target's maximum health",
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Maximum Physical Damage:',
        raw: "110 / 170 / 230 / 290 / 350 (+ 50% AD) (+ 7 / 7.25 / 7.5 / 7.75 / 8% of target's maximum health)",
        healType: 'OutgoingHeals',
        values: [110, 170, 230, 290, 350],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '110 / 170 / 230 / 290 / 350',
        children: [
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 50% AD',
          },
          {
            values: [7, 7.25, 7.5, 7.75, 8],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: "+ 7 / 7.25 / 7.5 / 7.75 / 8% of target's maximum health",
          },
        ],
      },
    ],
  },
  {
    description:
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="K\'Sante" data-ability="Ntofo Strikes" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/K%27Sante/LoL#Ntofo_Strikes" title="Ntofo Strikes"><img alt="Ntofo Strikes" src="/wiki/images/K%27Sante_Ntofo_Strikes.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/K%27Sante/LoL#Ntofo_Strikes" title="K\'Sante/LoL">Ntofo Strikes</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="K\'Sante" data-ability="All Out" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/K%27Sante/LoL#All_Out" title="All Out"><img alt="All Out" src="/wiki/images/K%27Sante_All_Out.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/K%27Sante/LoL#All_Out" title="K\'Sante/LoL">All Out</a></span></span> can be cast during the dash. Path Maker\'s recast can be used while affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast-inhibiting crowd control"><a href="/wiki/Crowd_control#Disrupting" title="Crowd control#Disrupting"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disrupting" title="Crowd control">cast-inhibiting crowd control</a></span>.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/K%27Sante_Footwork.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>K\'Sante</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location, though not through terrain, and grants himself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 2 seconds. <i>Footwork</i> can be cast on allies to dash to them at an increased range and speed. If the ally is a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> upon arrival, they receive the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> as well.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Shield Strength:',
        raw: '45 / 65 / 85 / 105 / 125 (+ 15% bonus health)',
        healType: 'BonusHealth',
        values: [45, 65, 85, 105, 125],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '45 / 65 / 85 / 105 / 125',
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
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="K\'Sante" data-ability="All Out" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/K%27Sante/LoL#All_Out" title="All Out"><img alt="All Out" src="/wiki/images/K%27Sante_All_Out.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/K%27Sante/LoL#All_Out" title="K\'Sante/LoL">All Out</a></span></span> Bonus:</b></span> <i>Footwork\'s</i> dash speed and location range are increased, and it can dash through terrain.',
    leveling: [],
  },
  {
    description:
      '<i>Footwork partially <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>K\'Sante\'s</b> basic attack timer. While <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="K\'Sante" data-ability="All Out" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/K%27Sante/LoL#All_Out" title="All Out"><img alt="All Out" src="/wiki/images/K%27Sante_All_Out.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/K%27Sante/LoL#All_Out" title="K\'Sante/LoL">All Out</a></span></span>, it fully resets the timer. <b>K\'Sante</b> can cast any of his abilities during the dash. Footwork will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/K%27Sante_All_Out.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>K\'Sante</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">roots</a></span> the target enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> for 0.<small>5</small> seconds and gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span> over the cast time, then shatters his ntofos to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock them back</a></span>, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> to the end location. The target is dealt <span style="color: #FF8C34; white-space:normal">physical damage</span> near the end of the displacement and is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for 0.<small>25</small> seconds afterwards.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '35 / 70 / 105 (+ 20% AD)',
        values: [35, 70, 105],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '35 / 70 / 105',
        children: [
          {
            values: 20,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 20% AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'If the target hits terrain during the displacement, they are knocked back through the terrain and dealt the <span style="color: #FF8C34; white-space:normal">physical damage</span> once they emerge. At the end of the displacement, they remain <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> for 0.<small>5</small> seconds and <b>K\'Sante</b> strikes them to deal <span style="color: #FF8C34; white-space:normal"><b>additional</b> physical damage</span>, after which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for 0.<small>25</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Additional Damage:',
        raw: '150 / 250 / 350 (+ 20% AD)',
        values: [150, 250, 350],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 250 / 350',
        children: [
          {
            values: 20,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 20% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Physical Damage:',
        raw: '185 / 320 / 455 (+ 40% AD)',
        values: [185, 320, 455],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '185 / 320 / 455',
        children: [
          {
            values: 40,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 40% AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'After <b>K\'Sante</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span>, he enters <i>All Out</i> for 20 seconds, and the ability can be recast after <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Affected by ability haste">1.<small>5</small> seconds</span> within the duration.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>All Out:</b></span> <b>K\'Sante</b> gains a <a href="/wiki/Health#Health_threshold" title="Health">health threshold</a> equal to <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">55% <b>maximum</b> health</span></span> which cannot be <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="By increases or decreases to maximum health">modified</span> nor <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="By healing and health regeneration">exceeded</span> by any means. Upon entering <i>All Out</i>, his <span style="color: #1F995C; white-space:normal"><b>current</b> health</span> is reduced to this threshold. Additionally, his <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>base</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>base</b> magic resistance</span></span> are reduced by <span style="color:yellow; white-space:normal">85% <b>bonus</b> armor</span> and <span style="color: #00FFFF; white-space:normal">85% <b>bonus</b> magic resistance</span>, respectively. In return, he gains <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal">5 <span style="color:yellow; white-space:normal">(+&nbsp;32.<small>5</small>% <b>bonus</b> armor)</span> <span style="color: #00FFFF; white-space:normal">(+&nbsp;32.<small>5</small>% <b>bonus</b> magic resistance)</span> <b>bonus</b> attack damage</span></span> and <span style="white-space:nowrap"><a href="/wiki/Omnivamp" title="Omnivamp"><img alt="Omnivamp icon.png" src="/wiki/images/Omnivamp_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><span style="color: #CE1C42; white-space:normal">10%</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;0.<small>75</small>% per 100 <b>bonus</b> health)</span> <span style="color: #CE1C42; white-space:normal">omnivamp</span></span></span> and modifies his basic abilities, which can be cast at no cost.',
    leveling: [],
  },
  {
    img: '/wiki/images/K%27Sante_All_Out_2.png',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>K\'Sante</b> ends <i>All Out</i> early.',
    leveling: [],
  },
  {
    description:
      '<i><b>K\'Sante</b> retains his <span style="color: #1F995C; white-space:normal"><b>maximum</b> health</span> and <b>bonus</b> resistances during All Out. Health lost from gaining the health threshold is <u>not restored</u> after the effect ends. Upon entering All Out, <b>K\'Sante</b> is restored to <span style="color: #0099CC; white-space:normal">100% <b>maximum</b> mana</span> which rapidly decays over the duration. His <span style="color: #0099CC; white-space:normal">mana</span> percentage prior to All Out is preserved and is gained back after the effect ends. If the target is knocked over terrain that is longer than <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">2000</span> units, <b>K\'Sante</b> will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Vanish"><a href="/wiki/Untargetability#Vanish" title="Untargetability#Vanish"><img alt="Hallucinate.png" src="/wiki/images/Shaco_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetability#Vanish" title="Untargetability">vanish</a></span> during their displacement and reappear near the end of it.</i>',
    leveling: [],
  },
];
export const KSante = { I, Q, W, E, R };
