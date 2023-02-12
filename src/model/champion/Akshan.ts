import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Akshan';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Akshan_Dirty_Fighting.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Whenever <b>Akshan</b> uses a <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a>, he fires an additional shot after a delay that deals <span style="color:orange; white-space:normal">50% AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span>, increased to <span style="color:orange; white-space:normal">100% AD</span> against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>. If this shot is cancelled, he gains <span style="color: #F5EE99; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="20;" data-finish="75;" data-bot_values="20;23.24;26.47;29.71;32.94;36.18;39.41;42.65;45.88;49.12;52.35;55.59;58.82;62.06;65.29;68.53;71.76;75" data-top_values="">20 − 75 (based on level)</span></span> &nbsp;×&nbsp; <span style="color:orangered; white-space:normal">(1 +&nbsp;100% <b>bonus</b> attack speed)</span> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> decaying over 1 second.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 2:',
        raw: ' If this shot is cancelled, he gains 20 − 75 (based on level)  ×  (1 + 100% bonus attack speed)  bonus movement speed decaying over 1 second',
        values: [
          20, 23.24, 26.47, 29.71, 32.94, 36.18, 39.41, 42.65, 45.88, 49.12,
          52.35, 55.59, 58.82, 62.06, 65.29, 68.53, 71.76, 75,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '×',
        pre: 'If this shot is cancelled, he gains 20 − 75',
        post: '×',
        children: [
          {
            values: 1,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus attack speed+ 100',
            pre: '1 + 100% bonus attack speed',
          },
        ],
      },
    ],
  },
  {
    description:
      'The additional shot applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects at 100% effectiveness and can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color:orange; white-space:normal">(61.<small>25</small>%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="12.25%"><img alt="12.25%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">12.<small>25</small>%</a></span></span>) AD</span> (<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="color:orange; white-space:normal">(122.<small>5</small>%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="24.5%"><img alt="24.5%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">24.<small>5</small>%</a></span></span>) AD</span>)&nbsp;」</span><span class="flipText2">「&nbsp;70% <b>total</b> <span style="white-space:nowrap"><a href="/wiki/Critical_strike#Modifying_Critical_Strike_Damage" title="Critical strike#Modifying Critical Strike Damage"><img alt="Critical strike damage icon.png" src="/wiki/images/Critical_strike_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #944B00; white-space:normal">critical damage</span></span>&nbsp;」</span></span><span style="color: #FF8C34; white-space:normal">physical damage</span>.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Akshan\'s</b> basic attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <a href="/wiki/Champion_ability" title="Champion ability">ability</a> hits apply a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Dirty Fighting</i> to enemies for 5 seconds, refreshing on subsequent applications and stacking up to 3 times. The third stack against a target consumes them all to deal them <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="10 +&nbsp;5 per level until level 8, then 10 per level until level 14, then 15 per level" data-bot_values="10;15;20;25;30;35;40;45;55;65;75;85;95;105;120;135;150;165" data-top_values="">10 − 165 (based on level)</span> <b>bonus</b> magic damage</span>; if the target is a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, <b>Akshan</b> will also gain a <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="40;" data-finish="280;" data-bot_values="40;54.12;68.24;82.35;96.47;110.59;124.71;138.82;152.94;167.06;181.18;195.29;209.41;223.53;237.65;251.76;265.88;280" data-top_values="">40 − 280 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;35% <b>bonus</b> AD)</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 2 seconds. The shield may be gained only once every few seconds.',
    leveling: [
      {
        effectType: 'Shield',
        name: 'Line 2:',
        raw: ' The third stack against a target consumes them all to deal them 10 − 165 (based on level) bonus magic damage; if the target is a  champion, Akshan will also gain a 40 − 280 (based on level) (+ 35% bonus AD)  shield for 2 seconds',
        damagetype: 'Magic',
        shieldType: 'OutgoingShields',
        values: [
          10, 19.12, 28.24, 37.35, 46.47, 55.59, 64.71, 73.82, 82.94, 92.06,
          101.18, 110.29, 119.41, 128.53, 137.65, 146.76, 155.88, 165,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText:
          'bonus magic damage; if the target is a  champion, Akshan will also gain a 40 − 280',
        pre: 'The third stack against a target consumes them all to deal them 10 − 165',
        post: 'bonus magic damage; if the target is a  champion, Akshan will also gain a 40 − 280',
        children: [
          {
            values: 35,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 35% bonus AD',
          },
        ],
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Akshan_Avengerang.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Akshan</b> throws a boomerang in the target direction that briefly grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> around its trajectory and deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> them for 1 second and extending its range each time it hits a target. If this hits an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, <b>Akshan</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">40% <b>bonus</b> movement speed</span></span> that decays over 1 second.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '5 / 25 / 45 / 65 / 85 (+ 80% AD)',
        values: [5, 25, 45, 65, 85],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5 / 25 / 45 / 65 / 85',
        children: [
          {
            values: 80,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 80% AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'Once the boomerang has passed its original range and has not hit a target in the last 500 units of travelling, it homes back to <b>Akshan</b> and applies the same effects to enemies hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Total Physical Damage:',
        raw: '10 / 50 / 90 / 130 / 170 (+ 160% AD)',
        values: [10, 50, 90, 130, 170],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 50 / 90 / 130 / 170',
        children: [
          {
            values: 160,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 160% AD',
          },
        ],
      },
    ],
  },
  {
    description:
      "<i>Avengerang's</i> deals reduced damage against non-champions.",
    leveling: [
      {
        effectType: 'Unique',
        name: 'Non-Champion Damage:',
        raw: '40 / 52.5 / 65 / 77.5 / 90%',
        values: [40, 52.5, 65, 77.5, 90],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 52.5 / 65 / 77.5 / 90%',
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
    img: '/wiki/images/Going_Rogue_2.png',
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Akshan</b> marks enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> that kill allied champions as <i>Scoundrels</i> for 60 seconds. If <b>Akshan</b> scores a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against a <i>Scoundrel</i> while alive and within 3 seconds of damaging them, he receives an additional <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="100 Gold"><img alt="100 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">100</span></span> and revives all <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dead</a></span> allied champions that they have slain after 1 second.',
    leveling: [],
  },
  {
    description:
      'When <b>Akshan</b> claims a <i>Scoundrel\'s</i> bounty he removes the marks of all other enemies. <i>Scoundrels</i> refresh their mark duration on subsequent kills, and will have their mark removed when they die by any means. <b>Akshan</b> cannot mark enemies as <i>Scoundrels</i> while they are dead. Allies are revived at their <a href="/wiki/Spawn" title="Spawn">summoning platform</a>.',
    leveling: [],
  },
  {
    img: '/wiki/images/Akshan_Going_Rogue.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Akshan</b> enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Camouflage"><a href="/wiki/Stealth#Camouflage" title="Stealth#Camouflage"><img alt="Ambush 2.png" src="/wiki/images/Twitch_Ambush_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Camouflage" title="Stealth">camouflage</a></span>, which lasts indefinitely while he is near <a href="/wiki/Terrain" title="Terrain">terrain</a> or inside <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Brush"><a href="/wiki/Brush" title="Brush"><img alt="Brushmaker.png" src="/wiki/images/Ivern_Brushmaker.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Brush" title="Brush">brush</a></span>, and for 2 seconds otherwise. During this time. he can see trails leading toward <i>Scoundrels</i>, and while facing them if they are within <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Pending for test">5000</span> units, he gains <span style="white-space:nowrap"><a href="/wiki/Mana_regeneration" title="Mana regeneration"><img alt="Mana regeneration icon.png" src="/wiki/images/Mana_regeneration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal"><b>bonus</b> mana regeneration</span></span> equal to <span style="color: #0099CC; white-space:normal">12% of his <b>missing</b> mana</span> as well as <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed:',
        raw: '80 / 90 / 100 / 110 / 120',
        values: [80, 90, 100, 110, 120],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 90 / 100 / 110 / 120',
      },
    ],
  },
  {
    description:
      '<i>Going Rogue</i> can be recast after 1 second, and does so automatically after its duration. Attacking or casting abilities ends <i>Going Rogue</i> immediately.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Akshan</b> ends <i>Going Rogue</i>.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Akshan</b> can activate <i>Heroic Swing</i> three times before the ability goes on cooldown, and can use the third cast only after 0.<small>5</small> seconds of the second cast. <b>Akshan</b> may input a attack or movement command to use the second and third casts.',
    leveling: [],
  },
  {
    img: '/wiki/images/Akshan_Heroic_Swing.png',
    description:
      '<span class="template_sbc"><b>First Cast:</b></span> <b>Akshan</b> fires a hook in the target direction that embeds in the first <a href="/wiki/Terrain" title="Terrain">terrain</a> hit, and enters <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="See notes">preparation</span> for up to 2.<small>125</small> seconds. <i>Heroic Swing\'s</i> second cast can be used while the hook is attached. If the hook fails to attach or <b>Akshan</b> is <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="See notes">moved</span> or becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span>, or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Polymorph"><a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control#Polymorph"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control">polymorphed</a></span> within the duration, the preparation will end prematurely, cancelling <i>Heroic Swing</i> in the process.',
    leveling: [],
  },
  {
    img: '/wiki/images/Akshan_Heroic_Swing_2.png',
    description:
      '<span class="template_sbc"><b>Second Cast:</b></span> <b>Akshan</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">swings</a></span> around the terrain in the target direction, stopping upon colliding with an enemy champion or terrain. While swinging, he rapidly fires at the nearest <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy to deal them <span style="color: #FF8C34; white-space:normal">physical damage</span> and apply <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects at 25% effectiveness per shot. <br><i><b>Akshan</b> will be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocked down</a></span> by any <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilizing</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Polymorph"><a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control#Polymorph"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control">polymorphing</a></span> crowd control during the dash.</i>',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage per Shot:',
        raw: '30 / 45 / 60 / 75 / 90 (+ 17.5% bonus AD)  ×  (1 + 0.3 per 100% bonus attack speed)',
        values: [30, 45, 60, 75, 90],
        user: 'none',
        units: '',
        unitsText: '×',
        pre: '30 / 45 / 60 / 75 / 90',
        post: '×',
        children: [
          {
            values: 17.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 17.5% bonus AD',
          },
          {
            values: 1,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus attack speed+ 0.3 per 100',
            pre: '1 + 0.3 per 100% bonus attack speed',
          },
        ],
      },
    ],
  },
  {
    description:
      '<span class="template_sbc"><b>Third Cast:</b></span> <b>Akshan</b> ends the swing by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">jumping</a></span> to the target location, though not through terrain, and fires one last shot at a nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy.',
    leveling: [],
  },
  {
    description:
      'Scoring an enemy champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> reduces <i>Heroic Swing\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> to 0.<small>5</small> seconds. The shots can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;(57.<small>5</small>%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="31.5%"><img alt="31.5%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">31.<small>5</small>%</a></span></span>) <b>bonus</b> damage&nbsp;」</span><span class="flipText2">「&nbsp;90% <b>total</b> <span style="white-space:nowrap"><a href="/wiki/Critical_strike#Modifying_Critical_Strike_Damage" title="Critical strike#Modifying Critical Strike Damage"><img alt="Critical strike damage icon.png" src="/wiki/images/Critical_strike_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #944B00; white-space:normal">critical damage</span></span>&nbsp;」</span></span>and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Applies life steal"><a href="/wiki/Life_steal" title="Life steal">apply</a></span> <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> at 100% effectiveness.',
    leveling: [],
  },
  {
    description:
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akshan" data-ability="Avengerang" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akshan/LoL#Avengerang" title="Avengerang"><img alt="Avengerang" src="/wiki/images/Akshan_Avengerang.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akshan/LoL#Avengerang" title="Akshan/LoL">Avengerang</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akshan" data-ability="Going Rogue" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akshan/LoL#Going_Rogue" title="Going Rogue"><img alt="Going Rogue" src="/wiki/images/Akshan_Going_Rogue.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akshan/LoL#Going_Rogue" title="Akshan/LoL">Going Rogue</a></span></span> can be cast during the third cast\'s dash. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akshan" data-ability="Comeuppance" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akshan/LoL#Comeuppance" title="Comeuppance"><img alt="Comeuppance" src="/wiki/images/Akshan_Comeuppance.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akshan/LoL#Comeuppance" title="Akshan/LoL">Comeuppance</a></span></span> can be cast at all points during Heroic Swing, though <b>Akshan</b> cannot fire during the swing while it is active. <b>Akshan</b> prioritizes firing at enemy champions with stacks of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akshan" data-ability="Dirty Fighting" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akshan/LoL#Dirty_Fighting" title="Dirty Fighting"><img alt="Dirty Fighting" src="/wiki/images/Akshan_Dirty_Fighting.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akshan/LoL#Dirty_Fighting" title="Akshan/LoL">Dirty Fighting</a></span></span>, then those damaged by his <a href="/wiki/Unit-targeted" class="mw-redirect" title="Unit-targeted">targeted</a> spells in the last 4 seconds, then the nearest enemy. Heroic Swing can be cast during <b>Akshan\'s</b> other abilities.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Akshan_Comeuppance.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Akshan</b> locks onto the target enemy champion and begins <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span> for 2.<small>5</small> seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> them as well as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> himself. He gradually stores bullets into his weapon over the duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Maximum Bullets Stored:',
        raw: '5 / 6 / 7',
        values: [5, 6, 7],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5 / 6 / 7',
      },
    ],
  },
  {
    description:
      '<i>Comeuppance</i> will recast after the duration, or can recast early after 0.<small>5</small> seconds. <i>Comeuppance</i> is placed on a <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;5-second</span> cooldown if the channel is cancelled.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Akshan</b> fires all stored bullets at the target, each briefly granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> around their trajectory and dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy hit, increased by <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="target\'s missing health" data-displayformula="3% per 1% of target\'s \'\'\'missing\'\'\' health, capped at 100% \'\'\'missing\'\'\' health" data-bot_values="0;30;60;90;120;150;180;210;240;270;300" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 300% (based on target\'s <b>missing</b> health)</span></span>. The shots can hit <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Minimum Physical Damage per Bullet:',
        raw: '20 / 25 / 30 (+ 10% AD) ×  (1 + (0.5 +  0.175) per 100% critical strike chance)',
        values: [20, 25, 30],
        user: 'none',
        units: '',
        unitsText: '×',
        pre: '20 / 25 / 30',
        post: '×',
        children: [
          {
            values: 10,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 10% AD',
          },
          {
            values: 1,
            user: 'player',
            units: 'total_critchance',
            unitsText: 'per 100% critical strike chance',
            pre: '1 +',
            post: 'per 100% critical strike chance',
            children: [
              {
                values: 0,
                user: 'none',
                units: '',
                unitsText: '0.175',
                pre: '0.5 +  0.175',
              },
            ],
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Physical Damage per Bullet:',
        raw: '80 / 100 / 120 (+ 40% AD) ×  (1 + (0.5 +  0.175) per 100% critical strike chance)',
        values: [80, 100, 120],
        user: 'none',
        units: '',
        unitsText: '×',
        pre: '80 / 100 / 120',
        post: '×',
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
            values: 1,
            user: 'player',
            units: 'total_critchance',
            unitsText: 'per 100% critical strike chance',
            pre: '1 +',
            post: 'per 100% critical strike chance',
            children: [
              {
                values: 0,
                user: 'none',
                units: '',
                unitsText: '0.175',
                pre: '0.5 +  0.175',
              },
            ],
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Minimum Charged Physical Damage:',
        raw: '100 / 150 / 210 (+ 50 / 60 / 70% AD) ×  (1 + (0.5 +  0.175) per 100% critical strike chance)',
        values: [100, 150, 210],
        user: 'none',
        units: '',
        unitsText: '×',
        pre: '100 / 150 / 210',
        post: '×',
        children: [
          {
            values: [50, 60, 70],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 50 / 60 / 70% AD',
          },
          {
            values: 1,
            user: 'player',
            units: 'total_critchance',
            unitsText: 'per 100% critical strike chance',
            pre: '1 +',
            post: 'per 100% critical strike chance',
            children: [
              {
                values: 0,
                user: 'none',
                units: '',
                unitsText: '0.175',
                pre: '0.5 +  0.175',
              },
            ],
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Damage to target with 67% missing hp:',
        raw: '300 / 450 / 630 (+ 150 / 180 / 210% AD) ×  (1 + (0.5 +  0.175) per 100% critical strike chance)',
        values: [300, 450, 630],
        user: 'none',
        units: '',
        unitsText: '×',
        pre: '300 / 450 / 630',
        post: '×',
        children: [
          {
            values: [150, 180, 210],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 150 / 180 / 210% AD',
          },
          {
            values: 1,
            user: 'player',
            units: 'total_critchance',
            unitsText: 'per 100% critical strike chance',
            pre: '1 +',
            post: 'per 100% critical strike chance',
            children: [
              {
                values: 0,
                user: 'none',
                units: '',
                unitsText: '0.175',
                pre: '0.5 +  0.175',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    description:
      'Each bullet\'s damage <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Applies life steal"><a href="/wiki/Life_steal" title="Life steal">applies</a></span> <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> at 100% effectiveness, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Execute"><a href="/wiki/Kill#Execute" title="Kill#Execute"><img alt="Death from Below.png" src="/wiki/images/Pyke_Death_from_Below.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Kill#Execute" title="Kill">executes</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
    leveling: [],
  },
  {
    description: '<i><b>Akshan</b> can move while channeling Comeuppance.</i>',
    leveling: [],
  },
];
export const Akshan = { I, Q, W, E, R };
