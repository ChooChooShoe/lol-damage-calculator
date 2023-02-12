import type { SubSkill} from '@/api/DataTypes';
      import type { ChampionName } from '../ChampionListData';
      import ChampionListData from '../ChampionListData';
      export const name: ChampionName = 'Kog'Maw';
      const I: SubSkill[] = [
  {
    img: '/wiki/images/Kog%27Maw_Icathian_Surprise.png',
    description: '<span class="template_sbc"><b>Innate:</b></span> Upon taking <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">fatal damage</a></span>, <b>Kog\'Maw</b> enters a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Zombie state"><a href="/wiki/Death#Zombie_states" title="Death#Zombie states"><img alt="Zombie icon.png" src="/wiki/images/Zombie_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Zombie_states" title="Death">zombie state</a></span> for 4 seconds, gaining up to <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">40% <b>bonus</b> movement speed</span></span> over the duration. At the end of the duration, he explodes to deal <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="125;" data-finish="550;" data-bot_values="125;150;175;200;225;250;275;300;325;350;375;400;425;450;475;500;525;550" data-top_values="">125 − 550 (based on level)</span> true damage</span></span> to nearby enemies.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 2:',
        raw: ' At the end of the duration, he explodes to deal  125 − 550 (based on level) true damage to nearby enemies',
        damagetype: 'True',
        values: [
          125,
          150,
          175,
          200,
          225,
          250,
          275,
          300,
          325,
          350,
          375,
          400,
          425,
          450,
          475,
          500,
          525,
          550,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'true damage to nearby enemies',
        pre: 'At the end of the duration, he explodes to deal  125 − 550',
        post: 'true damage to nearby enemies',
      },
    ],
  },
  {
    description: 'While under this state, <b>Kog\'Maw</b> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invulnerability"><a href="/wiki/Invulnerability" title="Invulnerability"><img alt="Cosmic Radiance.png" src="/wiki/images/Taric_Cosmic_Radiance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability" title="Invulnerability">invulnerable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">immune to crowd control</a></span>, but is also rendered unable to declare <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a>, cast <a href="/wiki/Champion_ability" title="Champion ability">abilities</a>, use <a href="/wiki/Summoner_spell" title="Summoner spell">summoner spells</a>, and <a href="/wiki/Active_ability_items" title="Active ability items">activate items</a>.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    description: '<span class="template_sbc"><b>Passive:</b></span> <b>Kog\'Maw</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Attack Speed:',
        raw: '10 / 15 / 20 / 25 / 30%',
        values: [
          10,
          15,
          20,
          25,
          30,
        ],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 15 / 20 / 25 / 30%',
      },
    ],
  },
  {
    img: '/wiki/images/Kog%27Maw_Caustic_Spittle.png',
    description: '<span class="template_sbc"><b>Active:</b></span> <b>Kog\'Maw</b> ejects a wad of spittle in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit and reduces their <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_penetration" title="Magic penetration"><img alt="Magic penetration icon.png" src="/wiki/images/Magic_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">magic resistance</span></span> for 4 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '90 / 140 / 190 / 240 / 290 (+ 70% AP)',
        values: [
          90,
          140,
          190,
          240,
          290,
        ],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '90 / 140 / 190 / 240 / 290',
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
        name: 'Resistances Reduction:',
        raw: '23 / 25 / 27 / 29 / 31%',
        values: [
          23,
          25,
          27,
          29,
          31,
        ],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '23 / 25 / 27 / 29 / 31%',
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Kog%27Maw_Bio-Arcane_Barrage.png',
    description: '<span class="template_sbc"><b>Active:</b></span> <b>Kog\'Maw</b> empowers his <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> for the next 8 seconds to gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack range</span> and deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>, capped at 100 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Attack Range:',
        raw: '130 / 150 / 170 / 190 / 210',
        values: [
          130,
          150,
          170,
          190,
          210,
        ],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '130 / 150 / 170 / 190 / 210',
      },
      {
        effectType: 'Heal',
        name: 'Bonus Magic Damage:',
        raw: "3.5 / 4.25 / 5 / 5.75 / 6.5% (+ 1% per 100 AP) of target's maximum health",
        healType: 'OutgoingHeals',
        values: [
          3.5,
          4.25,
          5,
          5.75,
          6.5,
        ],
        valuesIsPercent: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of target's maximum health",
        pre: '3.5 / 4.25 / 5 / 5.75 / 6.5%',
        post: "of target's maximum health",
        children: [
          {
            values: 1,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 1% per 100 AP',
          },
        ],
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Kog%27Maw_Void_Ooze.png',
    description: '<span class="template_sbc"><b>Active:</b></span> <b>Kog\'Maw</b> spews a gob of ooze in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '75 / 120 / 165 / 210 / 255 (+ 70% AP)',
        values: [
          75,
          120,
          165,
          210,
          255,
        ],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '75 / 120 / 165 / 210 / 255',
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
  {
    description: 'A field of ooze is created in its wake for 4 seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> enemies every 0.<small>25</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Slow:',
        raw: '20 / 28 / 36 / 44 / 52%',
        values: [
          20,
          28,
          36,
          44,
          52,
        ],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 28 / 36 / 44 / 52%',
      },
    ],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Kog%27Maw_Living_Artillery.png',
    description: '<span class="template_sbc"><b>Active:</b></span> <b>Kog\'Maw</b> spits a globule of acid into the air that drops to the target location after 0.<small>6</small> seconds, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area before dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> them for 2 seconds. <i>Living Artillery\'s</i> damage is increased by <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="target\'s missing health" data-displayformula="0.833% per 1% of target\'s \'\'\'missing\'\'\' health. \'\'This is capped at 50% increase at 60% \'\'\'missing\'\'\' health.\'\'" data-bot_values="0;5;10;15;20;25;30;35;40;45;50" data-top_values="0;6;12;18;24;30;36;42;48;54;60" data-bot_key="%" data-top_key="%">0% − 50% (based on target\'s <b>missing</b> health)</span></span>, or instead by <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">100%</span> if the target is below <span style="color: #1F995C; white-space:normal">40% <b>maximum</b> health</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Minimum Magic Damage:',
        raw: '100 / 140 / 180 (+ 65% bonus AD) (+ 35% AP)',
        values: [
          100,
          140,
          180,
        ],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '100 / 140 / 180',
        children: [
          {
            values: 65,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 65% bonus AD',
          },
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
      {
        effectType: 'Unique',
        name: 'Maximum Magic Damage:',
        raw: '200 / 280 / 360 (+ 130% bonus AD) (+ 70% AP)',
        values: [
          200,
          280,
          360,
        ],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '200 / 280 / 360',
        children: [
          {
            values: 130,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 130% bonus AD',
          },
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
  {
    description: '<b>Kog\'Maw</b> then gains a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Living Artillery</i> for 8 seconds, refreshing on subsequent casts and stacking up to 9 times.',
    leveling: [],
  },
  {
    description: '<span class="template_sbc"><b>Living Artillery:</b></span> For each stack, <i>Living Artillery\'s</i> <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana cost</span></span> is increased by <span style="color: #0099CC; white-space:normal">40</span>.',
    leveling: [],
  },
]
    export const KogMaw = {I,Q,W,E,R}