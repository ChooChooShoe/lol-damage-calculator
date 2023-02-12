import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Jhin';
const A: SubSkill[] = [
  {
    img: '/wiki/images/Basic_Attack.png',
    description:
      '<a href="/wiki/Basic_Attack" class="mw-redirect" title="Basic Attack"><span class="template_sbc"><b>Basic Attack:</b></span></a> <b>Jhin</b> fires at the target with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jhin" data-ability="Whisper" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jhin/LoL#Whisper" title="Whisper"><img alt="Whisper" src="/wiki/images/Jhin_Whisper.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jhin/LoL#Whisper" title="Jhin/LoL">Whisper</a></span></span>, dealing <span style="color:orange; white-space:normal">100% AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> and applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects.',
    leveling: [],
  },
  {
    description:
      '<b>Jhin\'s</b> basic attacks can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>. These attacks have slightly increased missile speed, but deal only<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color:orange; white-space:normal">(150.<small>5</small>%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="30.1%"><img alt="30.1%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">30.<small>1</small>%</a></span></span>) AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span>.&nbsp;」</span><span class="flipText2">「&nbsp;86% of the <span style="white-space:nowrap"><a href="/wiki/Critical_strike#Modifying_Critical_Strike_Damage" title="Critical strike#Modifying Critical Strike Damage"><img alt="Critical strike damage icon.png" src="/wiki/images/Critical_strike_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #944B00; white-space:normal">critical damage</span></span> champions usually have.&nbsp;」</span></span>',
    leveling: [],
  },
  {
    description:
      '<b>Jhin\'s</b> <span style="color:orangered; white-space:normal">attack speed</span> cannot be improved at all except through <a href="/wiki/Growth" class="mw-redirect" title="Growth">growth</a>.',
    leveling: [],
  },
];
const I: SubSkill[] = [
  {
    img: '/wiki/images/Jhin_Whisper.png',
    description:
      '<span class="template_sbc"><b>Innate - Death In 4 Acts:</b></span> <b>Jhin\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> consume <a href="/wiki/Ammunition" title="Ammunition">ammunition</a> within 4 rounds. He will <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Jhin is unable to declare basic attacks during this time.">reload</span> over 2.<small>5</small> seconds immediately after expending all rounds or withholding leftover rounds after 10 seconds of being <a href="/wiki/Out_of_combat" class="mw-redirect" title="Out of combat">out of combat</a> and not being affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span>. The latter reload can be interrupted by declaring an attack or casting an ability.',
    leveling: [],
  },
  {
    description:
      '<b>Jhin\'s</b> final round attack has an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span> versus champions, always <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strikes</a></span>, including against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">structures</a></span>, and deals <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> equal to <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="15;1" data-finish="25;11" data-bot_values="15;20;25" data-top_values="1;6;11" data-bot_key="%">15 / 20 / 25% (based on level)</span> of the target\'s <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>missing</b> health</span></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: "Jhin's final round attack has an  uncancellable windup versus champions, always  critically strikes, including against  structures, and deals bonus physical damage equal to 15 / 20 / 25% (based on level) of the target's  missing health",
        healType: 'PhysicalVamp',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'target',
        units: 'missing_hp',
        unitsText: "of the target's  missing health",
        pre: "Jhin's final round attack has an  uncancellable windup versus champions, always  critically strikes, including against  structures, and deals bonus physical damage equal to 15 / 20 / 25%",
        post: "of the target's  missing health",
      },
    ],
  },
  {
    description:
      '<span class="template_sbc"><b>Innate - Every Moment Matters:</b></span> <b>Jhin</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span> equal to <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="3% +&nbsp;1% per level up to 9, then +&nbsp;2% up to 11, then +&nbsp;4% up to 18" data-bot_values="4;5;6;7;8;9;10;11;12;14;16;20;24;28;32;36;40;44" data-top_values="" data-bot_key="%">4% − 44% (based on level)</span></span><span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color: #E56013; white-space:normal">(+&nbsp;0.<small>3</small>% per 1% critical strike chance)</span> <span style="color:orangered; white-space:normal">(+&nbsp;0.<small>25</small>% per 1% <b>bonus</b> attack speed)</span>&nbsp;」</span><span class="flipText2">「&nbsp;<span style="color: #E56013; white-space:normal">(+&nbsp;30% critical strike chance)</span> <span style="color:orangered; white-space:normal">(+&nbsp;25% <b>bonus</b> attack speed)</span>&nbsp;」</span></span><span style="color:orange; white-space:normal">AD</span>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: ' Jhin gains  bonus attack damage equal to 4% − 44% (based on level)「 (+ 0',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '「 + 0',
        pre: 'Jhin gains  bonus attack damage equal to 4% − 44%',
        post: '「 + 0',
      },
      {
        effectType: 'Unique',
        name: 'Line 3:',
        raw: '25% per 1% bonus attack speed) 」「 (+ 30% critical strike chance) (+ 25% bonus attack speed) 」AD',
        values: 25,
        valuesIsPercent: true,
        user: 'player',
        units: 'total_ad',
        unitsText: '」AD',
        pre: '25% per 1% bonus attack speed 」「',
        post: '」AD',
        children: [
          {
            values: 30,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_critchance',
            unitsText: 'critical strike chance',
            pre: '+ 30% critical strike chance',
          },
          {
            values: 25,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus attack speed',
            pre: '+ 25% bonus attack speed',
          },
        ],
      },
    ],
  },
  {
    description:
      'Additionally, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strikes"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strikes</a></span> grant <b>Jhin</b> <span style="color: #F5EE99; white-space:normal">10%</span> <span style="color:orangered; white-space:normal">(+&nbsp;0.<small>4</small>% per 1% <b>bonus</b> attack speed)</span> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for 2 seconds.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Jhin_Dancing_Grenade.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Jhin</b> throws a grenade at the target enemy that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> and can bounce to up to three additional nearby enemies.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Minimum Physical Damage:',
        raw: '45 / 70 / 95 / 120 / 145 (+ 35 / 42.5 / 50 / 57.5 / 65% AD) (+ 60% AP)',
        values: [45, 70, 95, 120, 145],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '45 / 70 / 95 / 120 / 145',
        children: [
          {
            values: [35, 42.5, 50, 57.5, 65],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 35 / 42.5 / 50 / 57.5 / 65% AD',
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
      {
        effectType: 'Unique',
        name: 'Maximum Physical Damage:',
        raw: '92.25 / 143.5 / 194.75 / 246 / 297.25 (+ 71.75 / 87.125 / 102.5 / 117.875 / 133.25% AD) (+ 123% AP)',
        values: [92.25, 143.5, 194.75, 246, 297.25],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '92.25 / 143.5 / 194.75 / 246 / 297.25',
        children: [
          {
            values: [71.75, 87.125, 102.5, 117.875, 133.25],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 71.75 / 87.125 / 102.5 / 117.875 / 133.25% AD',
          },
          {
            values: 123,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 123% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'The damage is increased by 35% of the <b>base</b> damage if the enemy the grenade last bounced off of dies.',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> that trigger a <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jhin" data-ability="Captive Audience" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jhin/LoL#Captive_Audience" title="Lotus Trap"><img alt="Lotus Trap" src="/wiki/images/Jhin_Captive_Audience.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jhin/LoL#Captive_Audience" title="Jhin/LoL">Lotus Trap</a></span></span></i> to bloom or are damaged by <b>Jhin</b> or allied champions are <i>marked</i> for 4 seconds.',
    leveling: [],
  },
  {
    img: '/wiki/images/Jhin_Deadly_Flourish.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Jhin</b> fires a shot in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to all enemies in a line until colliding with an enemy champion, reduced by 25% against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '60 / 95 / 130 / 165 / 200 (+ 50% AD)',
        values: [60, 95, 130, 165, 200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 95 / 130 / 165 / 200',
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
        name: 'Minion Damage:',
        raw: '45 / 71.25 / 97.5 / 123.75 / 150 (+ 37.5% AD)',
        values: [45, 71.25, 97.5, 123.75, 150],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '45 / 71.25 / 97.5 / 123.75 / 150',
        children: [
          {
            values: 37.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 37.5% AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'Hitting a <i>marked</i> champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">roots</a></span> them for a duration and grants <b>Jhin</b> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jhin" data-ability="Whisper" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jhin/LoL#Whisper" title="Every Moment Matters\'"><img alt="Every Moment Matters\'" src="/wiki/images/Jhin_Whisper.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jhin/LoL#Whisper" title="Jhin/LoL">Every Moment Matters\'</a></span></span> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Root Duration:',
        raw: '1.25 / 1.5 / 1.75 / 2 / 2.25',
        values: [1.25, 1.5, 1.75, 2, 2.25],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1.25 / 1.5 / 1.75 / 2 / 2.25',
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive - Beauty in Death:</b></span> Whenever <b>Jhin</b> kills an enemy champion, he summons a <i>Blooming Lotus Trap</i> on their corpse.',
    leveling: [],
  },
  {
    img: '/wiki/images/Jhin_Captive_Audience.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Jhin</b> places a <i>Lotus Trap</i> at the target location which, upon landing, becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stealthed trap"><a href="/wiki/Stealth#Stealthed_traps_and_wards" title="Stealth#Stealthed traps and wards"><img alt="Noxious Trap.png" src="/wiki/images/Teemo_Noxious_Trap.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Stealthed_traps_and_wards" title="Stealth">stealthed</a></span> after arming over 1 second, lasting for up to 180 seconds and granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> within its radius. The <i>Lotus Trap blooms</i> upon enemy contact, with enemies in the area at the time of its trigger becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span> for 4 seconds.',
    leveling: [],
  },
  {
    description:
      '<b>Jhin</b> periodically <a href="/wiki/Stock" class="mw-redirect" title="Stock">stocks</a> a <i>Lotus Trap</i> charge, up to a maximum of 2.',
    leveling: [],
  },
  {
    description:
      '<i>Blooming Lotus Traps</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> enemies within the area by 35% for 2 seconds before exploding, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies. <i>Lotus Traps</i> deal 65% damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> as well as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> who have been struck by another <i>Lotus Trap</i> in the last 1 second.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '20 / 80 / 140 / 200 / 260 (+ 120% AD) (+ 100% AP)',
        values: [20, 80, 140, 200, 260],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 80 / 140 / 200 / 260',
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
      {
        effectType: 'Unique',
        name: 'Reduced Damage:',
        raw: '13 / 52 / 91 / 130 / 169 (+ 78% AD) (+ 65% AP)',
        values: [13, 52, 91, 130, 169],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '13 / 52 / 91 / 130 / 169',
        children: [
          {
            values: 78,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 78% AD',
          },
          {
            values: 65,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 65% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>See <a href="/wiki/Jhin/LoL#Pets" title="Jhin/LoL">Pets</a> for more details about Lotus Traps.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Jhin_Curtain_Call.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Jhin</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for up to 10 seconds, transforming his weapon into a cannon and gaining the ability to recast <i>Curtain Call</i> 4 times within the duration.',
    leveling: [],
  },
  {
    img: '/wiki/images/Jhin_Curtain_Call_2.png',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> After 0.<small>25</small> seconds, <b>Jhin</b> fires a round in the target direction that grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> around its trajectory for 0.<small>5</small> seconds and deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit, increased by <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="target\'s missing health" data-displayformula="3% per 1% of target\'s \'\'\'missing\'\'\' health." data-bot_values="0;30;60;90;120;150;180;210;240;270;300" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 300% (based on target\'s <b>missing</b> health)</span></span>. The bullet stops upon hitting an enemy champion, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 80% for 0.<small>5</small> seconds and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> them for 2 seconds. Each cast has a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Unaffected by ability haste">static cooldown</span> of 1 second.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 3:',
        raw: "5 seconds and deals physical damage to enemies hit, increased by 0% − 300% (based on target's missing health)",
        healType: 'PhysicalVamp',
        values: 5,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText:
          '− 300seconds and deals physical damage to enemies hit, increased by 0',
        pre: '5 seconds and deals physical damage to enemies hit, increased by 0% − 300%',
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
        name: 'Minimum Physical Damage:',
        raw: '50 / 125 / 200 (+ 25% AD)',
        values: [50, 125, 200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 125 / 200',
        children: [
          {
            values: 25,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 25% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Physical Damage:',
        raw: '200 / 500 / 800 (+ 100% AD)',
        values: [200, 500, 800],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '200 / 500 / 800',
        children: [
          {
            values: 100,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 100% AD',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Jhin_Curtain_Call_3.png',
    description:
      'The fourth shot <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strikes</a></span> for <span style="color: #FF8C34; white-space:normal">(100%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="35%"><img alt="35%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">35%</a></span></span>) <b>bonus</b> physical damage</span>.',
    leveling: [],
  },
];
export const Jhin = { A, I, Q, W, E, R };
