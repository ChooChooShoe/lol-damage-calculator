import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Fiora';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Fiora_Duelist%27s_Dance.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Fiora</b> identifies the <span style="color: #AF1AAF; white-space:normal">Vitals</span> of nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy champions, marked as an arc around them in North-, East-, South- or Westward direction. <span style="color: #AF1AAF; white-space:normal">Vitals</span> take 1.<small>75</small> seconds to become targetable and linger for 13.<small>25</small> seconds afterwards while <b>Fiora</b> remains near the target, otherwise the <span style="color: #AF1AAF; white-space:normal">Vital</span> will disappear. After a <span style="color: #AF1AAF; white-space:normal">Vital</span> ends, <b>Fiora</b> identifies a new one on her target.',
    leveling: [],
  },
  {
    img: '/wiki/images/Fiora_Duelist%27s_Dance_2.png',
    description:
      'Dealing damage in the direction of a <span style="color: #AF1AAF; white-space:normal">Vital</span> will trigger it to deal <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal"><b>bonus</b> true damage</span></span> equal to <span style="color: #1F995C; white-space:normal">3% <span style="color:orange; white-space:normal">(+&nbsp;4% per 100 <b>bonus</b> AD)</span> of target\'s <b>maximum</b> health</span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> <b>Fiora</b> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="35;" data-finish="100;" data-bot_values="35;38.82;42.65;46.47;50.29;54.12;57.94;61.76;65.59;69.41;73.24;77.06;80.88;84.71;88.53;92.35;96.18;100" data-top_values="">35 − 100 (based on level)</span>, and grant her <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#F5EE99;" data-top_label="[[File:Grand Challenge.png|20px|link=]] Grand Challenge\'s Rank" data-displayformula="20%+(10%*Grand Challenge\'s Rank)" data-bot_values="20;30;40;50" data-top_values="0;1;2;3" data-bot_key="%">20 / 30 / 40 / 50% (based on <img alt="Grand Challenge.png" src="/wiki/images/Fiora_Grand_Challenge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> <i>Grand Challenge\'s</i> Rank)</span> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> that decays over 1.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: "Dealing damage in the direction of a Vital will trigger it to deal  bonus true damage equal to 3% (+ 4% per 100 bonus AD) of target's maximum health,  heal Fiora for 35 − 100 (based on level), and grant her 20 / 30 / 40 / 50% (based on  Grand Challenge's Rank)  bonus movement speed that decays over 1",
        healType: 'OutgoingHeals',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of target's maximum health,  heal Fiora for 35 − 100",
        pre: 'Dealing damage in the direction of a Vital will trigger it to deal  bonus true damage equal to 3%',
        post: "of target's maximum health,  heal Fiora for 35 − 100",
        children: [
          {
            values: 4,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'per 100 bonus AD',
            pre: '+ 4% per 100 bonus AD',
          },
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: "based on  Grand Challenge's Rank",
            pre: "based on  Grand Challenge's Rank",
          },
        ],
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Fiora_Lunge.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Fiora</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction, then stabs a nearby enemy. <i>Lunge</i> can hit <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ward"><a href="/wiki/Ward" title="Ward"><img alt="Ward icon.png" src="/wiki/images/Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ward" title="Ward">wards</a></span>. Stabbing a target reduces <i>Lunge\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> by 50%.',
    leveling: [],
  },
  {
    description:
      'The stab deals <span style="color: #FF8C34; white-space:normal">physical damage</span> and applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects at 100% effectiveness.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '70 / 80 / 90 / 100 / 110 (+ 90 / 95 / 100 / 105 / 110% bonus AD)',
        values: [70, 80, 90, 100, 110],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 80 / 90 / 100 / 110',
        children: [
          {
            values: [90, 95, 100, 105, 110],
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 90 / 95 / 100 / 105 / 110% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i><b>Fiora</b> can cast any of her <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> during the dash. The target does not have to be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> to be hit by this ability.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Fiora_Riposte.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Fiora</b> enters a defensive stance for 0.<small>75</small> seconds, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">unable to act</a></span>, preventing all incoming non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span> damage, and gaining <a href="/wiki/Debuff" title="Debuff">debuff</a> immunity and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">crowd control immunity</a></span>.',
    leveling: [],
  },
  {
    description:
      'Additionally, over the first 0.<small>6</small> seconds of the duration, <b>Fiora</b> poises to strike, after which she sends a shock with her sword in a line in the target direction, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to all enemies hit until colliding with an enemy champion.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '110 / 150 / 190 / 230 / 270 (+ 100% AP)',
        values: [110, 150, 190, 230, 270],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '110 / 150 / 190 / 230 / 270',
        children: [
          {
            values: 100,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 100% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'The enemy champion struck is also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cripple"><a href="/wiki/Cripple" title="Cripple"><img alt="Cripple icon.png" src="/wiki/images/Cripple_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cripple" class="mw-redirect" title="Cripple">crippled</a></span> by 50% for 2 seconds. If <i>Riposte</i> negates at least one <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="belonging to an enemy source">hostile</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilizing</a></span> effect, <b>Fiora</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> the target for the same duration instead.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Fiora_Bladework.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Fiora</b> empowers her next two <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> within 4 seconds to gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;25 <b>bonus</b> range</span> and <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Attack Speed:',
        raw: '50 / 60 / 70 / 80 / 90%',
        values: [50, 60, 70, 80, 90],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 60 / 70 / 80 / 90%',
      },
    ],
  },
  {
    description:
      'The first attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> the target by 30% for 1 second but cannot <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>. The second attack will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for <span style="white-space:nowrap"><a href="/wiki/Critical_strike#Modifying_Critical_Strike_Damage" title="Critical strike#Modifying Critical Strike Damage"><img alt="Critical strike damage icon.png" src="/wiki/images/Critical_strike_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #944B00; white-space:normal"><b>modified</b> critical damage</span></span>, including to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">structures</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Critical damage:',
        raw: '160 / 170 / 180 / 190 / 200%',
        values: [160, 170, 180, 190, 200],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '160 / 170 / 180 / 190 / 200%',
      },
    ],
  },
  {
    description:
      '<i>Bladework <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Fiora\'s</b> basic attack timer.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiora" data-ability="Duelist\'s Dance" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiora/LoL#Duelist\'s_Dance" title="Duelist\'s Dance\'s"><img alt="Duelist\'s Dance\'s" src="/wiki/images/Fiora_Duelist%27s_Dance.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiora/LoL#Duelist\'s_Dance" title="Fiora/LoL">Duelist\'s Dance\'s</a></span></span></i> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> is increased.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Additional Bonus Movement Speed:',
        raw: '10 / 20 / 30%',
        values: [10, 20, 30],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 20 / 30%',
      },
    ],
  },
  {
    img: '/wiki/images/Fiora_Grand_Challenge.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Fiora</b> challenges the target enemy champion for 8 seconds, highlighting all four of their <span style="color: #AF1AAF; white-space:normal">Vitals</span> after a 0.<small>5</small>-second delay. While in effect, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiora" data-ability="Duelist\'s Dance" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiora/LoL#Duelist\'s_Dance" title="Duelist\'s Dance"><img alt="Duelist\'s Dance" src="/wiki/images/Fiora_Duelist%27s_Dance.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiora/LoL#Duelist\'s_Dance" title="Fiora/LoL">Duelist\'s Dance</a></span></span></i> does not identify new <span style="color: #AF1AAF; white-space:normal">Vitals</span> on <b>Fiora\'s</b> target.',
    leveling: [],
  },
  {
    description:
      'While near the target, <b>Fiora</b> gains <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiora" data-ability="Duelist\'s Dance" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiora/LoL#Duelist\'s_Dance" title="Duelist\'s Dance\'s"><img alt="Duelist\'s Dance\'s" src="/wiki/images/Fiora_Duelist%27s_Dance.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiora/LoL#Duelist\'s_Dance" title="Fiora/LoL">Duelist\'s Dance\'s</a></span></span></i> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>.',
    leveling: [],
  },
  {
    img: '/wiki/images/Fiora_Grand_Challenge_2.png',
    description:
      'If <b>Fiora</b> triggers at least one <span style="color: #AF1AAF; white-space:normal">Vital</span> before the target <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or triggers all four, she creates a <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiora" data-ability="Grand Challenge 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiora/LoL#Grand_Challenge_2" title="Victory Zone"><img alt="Victory Zone" src="/wiki/images/Fiora_Grand_Challenge_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiora/LoL#Grand_Challenge_2" title="Fiora/LoL"><i>Victory Zone</i></a></span></span> at their location for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#AF1AAF;" data-top_label="Vitals hit" data-start="2;" data-finish="5;" data-bot_values="2;3;4;5" data-top_values="">2 − 5 (based on Vitals hit)</span> seconds, which <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> <b>Fiora</b> and all allies within the area every second.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: 'If Fiora triggers at least one Vital before the target  dies, or triggers all four, she creates a  Victory Zone at their location for 2 − 5 (based on Vitals hit) seconds, which  heals Fiora and all allies within the area every second',
        healType: 'OutgoingHeals',
        values: [2, 5],
        user: 'none',
        units: '',
        unitsText:
          'seconds, which  heals Fiora and all allies within the area every second',
        pre: 'If Fiora triggers at least one Vital before the target  dies, or triggers all four, she creates a  Victory Zone at their location for 2 − 5',
        post: 'seconds, which  heals Fiora and all allies within the area every second',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on Vitals hit',
            pre: 'based on Vitals hit',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Heal per Tick:',
        raw: '75 / 100 / 125 (+ 60% bonus AD)',
        values: [75, 100, 125],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '75 / 100 / 125',
        children: [
          {
            values: 60,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 60% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Heal:',
        raw: '375 / 500 / 625 (+ 300% bonus AD)',
        values: [375, 500, 625],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '375 / 500 / 625',
        children: [
          {
            values: 300,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 300% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Unlike <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiora" data-ability="Duelist\'s Dance" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiora/LoL#Duelist\'s_Dance" title="Duelist\'s Dance"><img alt="Duelist\'s Dance" src="/wiki/images/Fiora_Duelist%27s_Dance.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiora/LoL#Duelist\'s_Dance" title="Fiora/LoL">Duelist\'s Dance</a></span></span>, the <span style="color: #AF1AAF; white-space:normal">Vitals</span> will continue to linger even if <b>Fiora</b> is not nearby.</i>',
    leveling: [],
  },
];
export const Fiora = { I, Q, W, E, R };
