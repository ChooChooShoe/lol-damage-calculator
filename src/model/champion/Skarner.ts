import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Skarner';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Skarner_Crystal_Spires.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Skarner\'s</b> presence spawns <img alt="Crystal Spires Minimap.png" src="/wiki/images/Crystal_Spires_Minimap.png" decoding="async" loading="lazy" width="16" height="16" class="lazyload"> 6 <i>Crystal Spires</i> at set points across the <a href="/wiki/Summoner%27s_Rift" title="Summoner\'s Rift">battlefield</a>:\n',
    leveling: [],
  },
  {
    description:
      'After <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> have spawned, a <i>Crystal Spire</i> can be captured by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> by standing on it for 2 seconds, Once captured, the <i>Crystal Spire</i> is owned by the team until contested, and the defending team can stand on the spire to prevent the opposing team from capturing it.',
    leveling: [],
  },
  {
    description:
      'Capturing a <i>Crystal Spire</i> grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of its radius for 1.<small>5</small> seconds and locks it out from capture for 15 seconds. <i>Crystal Spires</i> grant <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="30 Gold"><img alt="30 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">30</span></span> split among its captors, or <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="15 Gold"><img alt="15 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">15</span></span> for a single captor.',
    leveling: [],
  },
  {
    description:
      '<b>Skarner</b> gains <i>Crystal Charge</i> while within range of a <i>Crystal Spire</i> controlled by his team, for 1.<small>25</small> seconds after triggering <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Skarner" data-ability="Crystal Venom" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Skarner/LoL#Crystal_Venom" title="Crystal Venom"><img alt="Crystal Venom" src="/wiki/images/Skarner_Crystallizing_Sting.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Skarner/LoL#Crystal_Venom" title="Skarner/LoL">Crystal Venom</a></span></span></i>, and for 1.<small>75</small> seconds after stinging an enemy champion with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Skarner" data-ability="Impale" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Skarner/LoL#Impale" title="Impale"><img alt="Impale" src="/wiki/images/Skarner_Impale.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Skarner/LoL#Impale" title="Skarner/LoL">Impale</a></span></span></i>.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Crystal Charge:</b></span> <b>Skarner</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#F5EE99;" data-displayformula="68 + 2 per level up to 7, + 3 per level up to 13, and + 4 per level" data-bot_values="70;72;74;76;78;80;82;85;88;91;94;97;100;104;108;112;116;120" data-top_values="">70 − 120 (based on level)</span> <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> and <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:orangered;" data-displayformula="38 + 5 per level up to 7, + 7 per level up to 13, and + 9 per level" data-bot_values="43;48;53;58;63;68;73;80;87;94;101;108;115;124;133;142;151;160" data-top_values="" data-bot_key="%">43% − 160% (based on level)</span> <span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> and restores <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">1% <b>maximum</b> mana</span></span> every 0.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: ' Skarner gains  70 − 120 (based on level) bonus movement speed and  43% − 160% (based on level) bonus attack speed and restores  1% maximum mana every 0',
        values: [
          70, 72.94, 75.88, 78.82, 81.76, 84.71, 87.65, 90.59, 93.53, 96.47,
          99.41, 102.35, 105.29, 108.24, 111.18, 114.12, 117.06, 120,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'bonus movement speed and  43% − 160%',
        pre: 'Skarner gains  70 − 120',
        post: 'bonus movement speed and  43% − 160%',
      },
    ],
  },
  {
    description:
      "<i>Crystal Spires near buff monsters start the game already captured by the side's respective team.</i>",
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Skarner_Crystal_Slash.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Skarner</b> slashes around himself, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies. If at least one enemy is hit, he becomes charged for 5 seconds, empowering subsequent casts of <i>Crystal Slash</i> to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Physical Damage:',
        raw: "1 / 1.5 / 2 / 2.5 / 3% of target's maximum health (+ 20% AD)",
        healType: 'OutgoingHeals',
        values: [1, 1.5, 2, 2.5, 3],
        valuesIsPercent: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of target's maximum health",
        pre: "1 / 1.5 / 2 / 2.5 / 3% of target's maximum health",
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
        effectType: 'Heal',
        name: 'Bonus Magic Damage:',
        raw: "1 / 1.5 / 2 / 2.5 / 3% of target's maximum health (+ 20% AD) (+ 30% AP)",
        healType: 'OutgoingHeals',
        values: [1, 1.5, 2, 2.5, 3],
        valuesIsPercent: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of target's maximum health",
        pre: "1 / 1.5 / 2 / 2.5 / 3% of target's maximum health",
        children: [
          {
            values: 20,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 20% AD',
          },
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
      'Each instance of damage is capped at 200 against epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [],
  },
  {
    description:
      'Basic attacks reduce <i>Crystal Slash\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> by 0.<small>25</small> seconds, increased to 1 second against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>.',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Skarner_Crystalline_Exoskeleton.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Skarner</b> grants himself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for up to 6 seconds, and while it holds, he gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> that doubles over the first 3 seconds.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Shield Strength:',
        raw: '9 / 10 / 11 / 12 / 13% maximum health (+ 80% AP)',
        healType: 'BonusHealth',
        values: [9, 10, 11, 12, 13],
        valuesIsPercent: true,
        user: 'player',
        units: 'maximum_hp',
        unitsText: 'maximum health',
        pre: '9 / 10 / 11 / 12 / 13% maximum health',
        children: [
          {
            values: 80,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 80% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed:',
        raw: '8 / 10 / 12 / 14 / 16%',
        values: [8, 10, 12, 14, 16],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '8 / 10 / 12 / 14 / 16%',
      },
      {
        effectType: 'Unique',
        name: 'Increased Bonus Movement Speed:',
        raw: '16 / 20 / 24 / 28 / 32%',
        values: [16, 20, 24, 28, 32],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '16 / 20 / 24 / 28 / 32%',
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> Every time <b>Skarner</b> triggers <i>Crystal Venom</i> or stings an enemy with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Skarner" data-ability="Impale" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Skarner/LoL#Impale" title="Impale"><img alt="Impale" src="/wiki/images/Skarner_Impale.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Skarner/LoL#Impale" title="Skarner/LoL">Impale</a></span></span></i>, <i>Fracture\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> is reduced by the corresponding <b>base</b> duration of the disable.',
    leveling: [],
  },
  {
    img: '/wiki/images/Skarner_Fracture.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Skarner</b> launches a blast of crystalline energy in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for 2.<small>5</small> seconds, and marks them with <i>Crystal Venom</i> for 5 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '40 / 65 / 90 / 115 / 140 (+ 20% AP)',
        values: [40, 65, 90, 115, 140],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 65 / 90 / 115 / 140',
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
      {
        effectType: 'Unique',
        name: 'Slow:',
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
  {
    img: '/wiki/images/Skarner_Crystallizing_Sting.png',
    description:
      '<span class="template_sbc"><b>Crystal Venom:</b></span> <b>Skarner\'s</b> next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> against a marked target is empowered to consume the mark to deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> them for 1.<small>25</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Physical Damage:',
        raw: '30 / 50 / 70 / 90 / 110',
        values: [30, 50, 70, 90, 110],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 50 / 70 / 90 / 110',
      },
    ],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Skarner_Impale.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Skarner</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">roots</a></span> the target enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> over the cast time and attempts to impale them with his stinger. Upon impaling the target, he deals <span style="color:orange; white-space:normal">60% AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> plus <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Suppression"><a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control#Suppression"><img alt="Suppression icon.png" src="/wiki/images/Suppression_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control">suppresses</a></span> them for 1.<small>75</small> seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span> and <b>Skarner</b> can drag them with himself.<br><br>\nAfterwards, the target takes the same damage again.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '20 / 60 / 100 (+ 50% AP)',
        values: [20, 60, 100],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 60 / 100',
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
      {
        effectType: 'Unique',
        name: 'Total Mixed Damage:',
        raw: '40 / 120 / 200 (+ 120% AD) (+ 100% AP)',
        values: [40, 120, 200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 120 / 200',
        children: [
          {
            values: 120,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 120% AD',
          },
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
      '<i>Impale\'s drag <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="See notes">ignores</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span>. <b>Skarner</b> is unable to basic attack, cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Skarner" data-ability="Fracture" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Skarner/LoL#Fracture" title="Fracture"><img alt="Fracture" src="/wiki/images/Skarner_Fracture.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Skarner/LoL#Fracture" title="Skarner/LoL">Fracture</a></span></span>, or use <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> during Impale.</i>',
    leveling: [],
  },
];
export const Skarner = { I, Q, W, E, R };
