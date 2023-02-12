import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Vladimir';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Vladimir_Crimson_Pact.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Vladimir</b> gains <span style="color: #1F995C; white-space:normal">(3.<small><span style="text-decoration: overline;">3</span></small>% <b>bonus</b> health)</span> as <span style="white-space:nowrap"><a href="/wiki/Ability_power" title="Ability power"><img alt="Ability power icon.png" src="/wiki/images/Ability_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #7A6DFF; white-space:normal">ability power</span></span> and <span style="color: #7A6DFF; white-space:normal">(160% AP)</span> as <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><b>bonus</b> health</span></span>. These two bonuses do not stack with each other.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 2:',
        raw: '3% bonus health) as  ability power and (160% AP) as  bonus health',
        healType: 'BonusHealth',
        values: 3,
        valuesIsPercent: true,
        user: 'player',
        units: 'bonus_hp',
        unitsText: 'as  bonus health',
        pre: '3% bonus health as  ability power and',
        post: 'as  bonus health',
        children: [
          {
            values: 160,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '160% AP',
          },
        ],
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Vladimir_Transfusion.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Vladimir</b> drains blood from the target enemy, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> himself. He then generates a <a href="/wiki/Stack" title="Stack">stack</a> of <i><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless">Bloodthirst</a></span></i> over the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>, which is displayed in his secondary resource bar.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '80 / 100 / 120 / 140 / 160 (+ 60% AP)',
        values: [80, 100, 120, 140, 160],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 100 / 120 / 140 / 160',
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
        raw: '20 / 25 / 30 / 35 / 40 (+ 35% AP)',
        values: [20, 25, 30, 35, 40],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 25 / 30 / 35 / 40',
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
    description:
      'At 2 stacks, <b>Vladimir</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="10%;20%;30%;40%" data-top_values="1;6;11;16">10% / 20% / 30% / 40% (based on level)</span> <b>bonus</b> movement speed</span></span> for 0.<small>5</small> seconds, and enters <i>Crimson Rush</i> while the <i><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless">Bloodthirst</a></span></i> depletes over 2.<small>5</small> seconds. The <i><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless">Bloodthirst</a></span></i> depletes 75% slower during <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vladimir" data-ability="Sanguine Pool" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vladimir/LoL#Sanguine_Pool" title="Sanguine Pool"><img alt="Sanguine Pool" src="/wiki/images/Vladimir_Sanguine_Pool.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vladimir/LoL#Sanguine_Pool" title="Vladimir/LoL">Sanguine Pool</a></span></span></i>, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vladimir" data-ability="Tides of Blood" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vladimir/LoL#Tides_of_Blood" title="Tides of Blood"><img alt="Tides of Blood" src="/wiki/images/Vladimir_Tides_of_Blood.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vladimir/LoL#Tides_of_Blood" title="Vladimir/LoL">Tides of Blood</a></span></span></i>, or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stasis (buff)"><a href="/wiki/Invulnerability#Stasis" title="Invulnerability#Stasis"><img alt="Stasis icon.png" src="/wiki/images/Stasis_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability#Stasis" title="Invulnerability">stasis</a></span>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: 'At 2 stacks, Vladimir gains  10% / 20% / 30% / 40% (based on level) bonus movement speed for 0',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'bonus movement speed for 0',
        pre: 'At 2 stacks, Vladimir gains  10% / 20% / 30% / 40%',
        post: 'bonus movement speed for 0',
      },
    ],
  },
  {
    img: '/wiki/images/Vladimir_Crimson_Rush.png',
    description:
      '<span class="template_sbc"><b>Crimson Rush Bonus:</b></span> <i>Transfusion</i> consumes all <i><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless">Bloodthirst</a></span></i> to deal <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">85% increased damage</span> and heal <b>Vladimir</b> for an additional <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="30;" data-finish="200;" data-bot_values="30;40;50;60;70;80;90;100;110;120;130;140;150;160;170;180;190;200" data-top_values="">30 − 200 (based on level)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;5% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;4% per 100 AP)</span> <b>missing</b> health)</span>, reduced to 35% against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: ' Transfusion consumes all  Bloodthirst to deal  85% increased damage and heal Vladimir for an additional 30 − 200 (based on level) (+ 5% (+ 4% per 100 AP) missing health), reduced to 35% against  minions',
        healType: 'BonusHealth',
        values: [
          30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170,
          180, 190, 200,
        ],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: ', reduced to 35% against  minions',
        pre: 'Transfusion consumes all  Bloodthirst to deal  85% increased damage and heal Vladimir for an additional 30 − 200',
        post: ', reduced to 35% against  minions',
        children: [
          {
            values: 5,
            valuesIsPercent: true,
            user: 'player',
            units: 'missing_hp',
            unitsText: 'missing health',
            pre: '+ 5%',
            post: 'missing health',
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
        ],
      },
      {
        effectType: 'Unique',
        name: 'Increased Damage:',
        raw: '148 / 185 / 222 / 259 / 296 (+ 111% AP)',
        values: [148, 185, 222, 259, 296],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '148 / 185 / 222 / 259 / 296',
        children: [
          {
            values: 111,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 111% AP',
          },
        ],
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Vladimir_Sanguine_Pool.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Vladimir</b> sinks into a pool of blood, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> for 2 seconds. He also gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">37.<small>5</small>% <b>bonus</b> movement speed</span></span> that decays exponentially over 1 second.',
    leveling: [],
  },
  {
    description:
      'Enemies within the pool are dealt <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>5</small> seconds over the duration and are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 40%. <b>Vladimir</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> himself for 15% of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated before modifiers">pre-mitigation damage</span> dealt.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Magic Damage Per Tick:',
        raw: '20 / 33.75 / 47.5 / 61.25 / 75 (+ 2.5% bonus health)',
        healType: 'BonusHealth',
        values: [20, 33.75, 47.5, 61.25, 75],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 33.75 / 47.5 / 61.25 / 75',
        children: [
          {
            values: 2.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_hp',
            unitsText: 'bonus health',
            pre: '+ 2.5% bonus health',
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Total Magic Damage:',
        raw: '80 / 135 / 190 / 245 / 300 (+ 10% bonus health)',
        healType: 'BonusHealth',
        values: [80, 135, 190, 245, 300],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 135 / 190 / 245 / 300',
        children: [
          {
            values: 10,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_hp',
            unitsText: 'bonus health',
            pre: '+ 10% bonus health',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i><b>Vladimir</b> cannot use basic attacks nor abilities during Sanguine Pool, but he can still move. If <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vladimir" data-ability="Tides of Blood" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vladimir/LoL#Tides_of_Blood" title="Tides of Blood"><img alt="Tides of Blood" src="/wiki/images/Vladimir_Tides_of_Blood.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vladimir/LoL#Tides_of_Blood" title="Vladimir/LoL">Tides of Blood</a></span></span> is charging at the time of Sanguine Pool\'s activation, that ability may still be recast.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Vladimir_Tides_of_Blood.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Vladimir</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">charges</a></span> for up to 1.<small>5</small> seconds, during which he increases <i>Tides of Blood\'s</i> damage over the first second of the channel, and becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 20% afterwards for the remaining duration. <i>Tides of Blood</i> can be recast within the duration, and does so automatically afterwards or if it is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span>.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Vladimir</b> unleashes a nova of 15 blood bolts around himself that each deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit, increased based on charge time, up to the first second.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Minimum Magic Damage:',
        raw: '30 / 45 / 60 / 75 / 90 (+ 1.5% maximum health) (+ 35% AP)',
        healType: 'BonusHealth',
        values: [30, 45, 60, 75, 90],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 45 / 60 / 75 / 90',
        children: [
          {
            values: 1.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'maximum_hp',
            unitsText: 'maximum health',
            pre: '+ 1.5% maximum health',
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
        effectType: 'Heal',
        name: 'Maximum Magic Damage:',
        raw: '60 / 90 / 120 / 150 / 180 (+ 6% maximum health) (+ 80% AP)',
        healType: 'BonusHealth',
        values: [60, 90, 120, 150, 180],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 90 / 120 / 150 / 180',
        children: [
          {
            values: 6,
            valuesIsPercent: true,
            user: 'player',
            units: 'maximum_hp',
            unitsText: 'maximum health',
            pre: '+ 6% maximum health',
          },
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
    ],
  },
  {
    description:
      'If <i>Tides of Blood</i> was charged for at least 1 second, enemies hit are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> for 0.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Slow:',
        raw: '40 / 45 / 50 / 55 / 60%',
        values: [40, 45, 50, 55, 60],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 45 / 50 / 55 / 60%',
      },
    ],
  },
  {
    description:
      '<i>Enemies can intercept multiple bolts, but can be damaged only once.</i>',
    leveling: [],
  },
  {
    description:
      '<i>If <b>Vladimir</b> is below <span style="color: #1F995C; white-space:normal">12% of his <b>maximum</b> health</span>, Tides of Blood will not cost any <span style="color: #1F995C; white-space:normal">health</span>.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Vladimir_Hemoplague.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Vladimir</b> spreads a virulent plague at the target location that infects enemies hit for 4 seconds, increasing the damage they take from all sources by 10%.',
    leveling: [],
  },
  {
    description:
      'After the duration, the infection bursts to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to all affected targets and, after a 0.<small>4</small>-second delay, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> <b>Vladimir</b> for each infected champion, reduced by 40% for subsequent champions.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic damage:',
        raw: '150 / 250 / 350 (+ 70% AP)',
        values: [150, 250, 350],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 250 / 350',
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
        name: 'Heal:',
        raw: '150 / 250 / 350 (+ 70% AP)',
        values: [150, 250, 350],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 250 / 350',
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
        name: 'Reduced Heal:',
        raw: '60 / 100 / 140 (+ 28% AP)',
        values: [60, 100, 140],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 100 / 140',
        children: [
          {
            values: 28,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 28% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Total Heal:',
        raw: '390 / 650 / 910 (+ 182% AP)',
        values: [390, 650, 910],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '390 / 650 / 910',
        children: [
          {
            values: 182,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 182% AP',
          },
        ],
      },
    ],
  },
];
export const Vladimir = { I, Q, W, E, R };
