import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Sivir';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Sivir_Fleet_of_Foot.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Sivir\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> and <a href="/wiki/Champion_ability" title="Champion ability">ability</a> hits against enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> grant her <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="55;60;65;70;75" data-top_values="1;6;11;16;18">55 − 75 (based on level)</span> <b>bonus</b> movement speed</span></span> decaying over 1.<small>5</small> seconds, refreshing on subsequent hits.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: " Sivir's basic attacks and ability hits against enemy  champions grant her  55 − 75 (based on level) bonus movement speed decaying over 1",
        values: [
          55, 56.18, 57.35, 58.53, 59.71, 60.88, 62.06, 63.24, 64.41, 65.59,
          66.76, 67.94, 69.12, 70.29, 71.47, 72.65, 73.82, 75,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'bonus movement speed decaying over 1',
        pre: "Sivir's basic attacks and ability hits against enemy  champions grant her  55 − 75",
        post: 'bonus movement speed decaying over 1',
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Sivir_Boomerang_Blade.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Sivir</b> hurls her crossblade in the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies within its path, increased by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#E56013;" data-top_label="critical strike chance" data-displayformula="0.5% per 1% critical strike chance" data-bot_values="0;5;10;15;20;25;30;35;40;45;50" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 50% (based on critical strike chance)</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '15 / 30 / 45 / 60 / 75 (+ 80 / 85 / 90 / 95 / 100% AD) (+ 60% AP)',
        values: [15, 30, 45, 60, 75],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 30 / 45 / 60 / 75',
        children: [
          {
            values: [80, 85, 90, 95, 100],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 80 / 85 / 90 / 95 / 100% AD',
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
    ],
  },
  {
    description:
      '<i>Boomerang Blade\'s</i> damage is reduced by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="non-champions hit" data-displayformula="100%-(15%*Nº of non-champions hit). \'\'This is capped at 40% damage at 4 enemies hit.\'\'" data-bot_values="0;15;30;45;60" data-top_values="0;1;2;3;4" data-bot_key="%">0% − 60% (based on non-champions hit)</span>. Upon reaching maximum range, the crossblade returns to her, resetting the damage modifier and dealing the same damage to enemies on its way back.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Minimum Damage:',
        raw: '6 / 12 / 18 / 24 / 30 (+ 32 / 34 / 36 / 38 / 40% AD) (+ 24% AP)',
        values: [6, 12, 18, 24, 30],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '6 / 12 / 18 / 24 / 30',
        children: [
          {
            values: [32, 34, 36, 38, 40],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 32 / 34 / 36 / 38 / 40% AD',
          },
          {
            values: 24,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 24% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Maximum Champion Damage:',
        raw: '30 / 60 / 90 / 120 / 150 (+ 160 / 170 / 180 / 190 / 200% AD) (+ 120% AP)',
        values: [30, 60, 90, 120, 150],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 60 / 90 / 120 / 150',
        children: [
          {
            values: [160, 170, 180, 190, 200],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 160 / 170 / 180 / 190 / 200% AD',
          },
          {
            values: 120,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 120% AP',
          },
        ],
      },
    ],
  },
  {
    description: '<i>Enemies can be hit only once per pass.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Sivir_Ricochet.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Sivir</b> empowers her crossblade for the next 4 seconds, gaining <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> and causing her basic attacks to bounce to additional surrounding enemies, dealing them <span style="color: #FF8C34; white-space:normal">physical damage</span>. If the triggering attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strikes</a></span>, the bounces will do so as well. <i>Ricochet</i> deals 65% damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and executes them if they would be left below <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">15 health</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Attack Speed:',
        raw: '20 / 25 / 30 / 35 / 40%',
        values: [20, 25, 30, 35, 40],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 25 / 30 / 35 / 40%',
      },
      {
        effectType: 'Unique',
        name: 'Bounce Damage:',
        raw: '25 / 30 / 35 / 40 / 45% AD',
        values: [25, 30, 35, 40, 45],
        valuesIsPercent: true,
        user: 'player',
        units: 'total_ad',
        unitsText: 'AD',
        pre: '25 / 30 / 35 / 40 / 45% AD',
      },
      {
        effectType: 'Unique',
        name: 'Minion Bounce Damage:',
        raw: '16.25 / 19.5 / 22.75 / 26 / 29.25% AD',
        values: [16.25, 19.5, 22.75, 26, 29.25],
        valuesIsPercent: true,
        user: 'player',
        units: 'total_ad',
        unitsText: 'AD',
        pre: '16.25 / 19.5 / 22.75 / 26 / 29.25% AD',
      },
    ],
  },
  {
    description:
      'Bounces occur only up to 8 times and can target each enemy up to one additional time per empowered attack. They prioritize the nearest new target, then the nearest target if no new targets are available.',
    leveling: [],
  },
  {
    description:
      '<i>Ricochet <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Sivir\'s</b> basic attack timer. The target does not have to be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> to be bounced to.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Sivir_Spell_Shield.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Sivir</b> gains a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span> for 1.<small>5</small> seconds. Upon successfully blocking a hostile effect, she <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> herself and activates <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sivir" data-ability="Fleet of Foot" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sivir/LoL#Fleet_of_Foot" title="Fleet of Foot"><img alt="Fleet of Foot" src="/wiki/images/Sivir_Fleet_of_Foot.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sivir/LoL#Fleet_of_Foot" title="Sivir/LoL">Fleet of Foot</a></span></span></i> after 0.<small>25</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Heal:',
        raw: '60 / 65 / 70 / 75 / 80% AD (+ 50% AP)',
        values: [60, 65, 70, 75, 80],
        valuesIsPercent: true,
        user: 'player',
        units: 'total_ad',
        unitsText: 'AD',
        pre: '60 / 65 / 70 / 75 / 80% AD',
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
const R: SubSkill[] = [
  {
    img: '/wiki/images/Sivir_On_the_Hunt.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Sivir</b> gains <i>On the Hunt</i> for a duration and grants it to nearby allied champions for the remaining duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Buff Duration:',
        raw: '8 / 10 / 12',
        values: [8, 10, 12],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '8 / 10 / 12',
      },
    ],
  },
  {
    description:
      '<span class="template_sbc"><b>On the Hunt:</b></span> Gain <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed:',
        raw: '20 / 25 / 30%',
        values: [20, 25, 30],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 25 / 30%',
      },
    ],
  },
  {
    description:
      'While active, <b>Sivir\'s</b> basic attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> reduce her basic abilities\' <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldowns</span> by 0.<small>5</small> seconds each.',
    leveling: [],
  },
  {
    description:
      '<i>On the Hunt\'s</i> duration is refreshed whenever <b>Sivir</b> scores a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> within 3 seconds of damaging them.',
    leveling: [],
  },
];
export const Sivir = { I, Q, W, E, R };
