import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Yone';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Yone_Way_of_the_Hunter.png',
    description:
      '<span class="template_sbc"><b>Innate - Intent:</b></span> <b>Yone\'s</b> <span style="color: #E56013; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike chance icon.png" src="/wiki/images/Critical_strike_chance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>total</b> critical strike chance</span></span> is multiplied by 2.<small>5</small> from all other sources, but his <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strikes</a></span> deal only<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color:orange; white-space:normal">(57.<small>5</small>%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="31.5%"><img alt="31.5%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">31.<small>5</small>%</a></span></span>) AD</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.&nbsp;」</span><span class="flipText2">「&nbsp;90% of the normal <span style="white-space:nowrap"><a href="/wiki/Critical_strike#Modifying_Critical_Strike_Damage" title="Critical strike#Modifying Critical Strike Damage"><img alt="Critical strike damage icon.png" src="/wiki/images/Critical_strike_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #944B00; white-space:normal">critical strike damage</span></span>.&nbsp;」</span></span>Additionally,<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;every <span style="color: #E56013; white-space:normal">1% critical strike chance</span> in excess of <span style="color: #E56013; white-space:normal">100%</span> is converted into <span style="color:orange; white-space:normal">0.<small>4</small> <b>bonus</b> AD</span>.&nbsp;」</span><span class="flipText2">「&nbsp;every <span style="color: #E56013; white-space:normal">50% critical strike chance</span> in excess of <span style="color: #E56013; white-space:normal">100%</span> is converted into <span style="color:orange; white-space:normal">20 <b>bonus</b> AD</span>.&nbsp;」</span></span>',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Innate - Steel and Spirit:</b></span> <b>Yone\'s</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack"><a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a></span> alternate between his <span style="color: #748DD0; white-space:normal">Steel Sword</span> and <span style="color: #E2103F; white-space:normal">Azakana Sword</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span>. <b>Yone</b> begins attacking with <span style="color: #748DD0; white-space:normal">Steel Sword</span>, and basic attacks with <span style="color: #E2103F; white-space:normal">Azakana Sword</span> deal <span style="color:orange; white-space:normal">50% AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span style="color:orange; white-space:normal">50% AD</span> <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Yone_Mortal_Steel.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Yone</b> thrusts his <span style="color: #748DD0; white-space:normal">Steel Sword</span> in a line in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit and applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects at 100% effectiveness to the first enemy hit. <i>Mortal Steel\'s</i> damage can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color:orange; white-space:normal">(47%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="29.4%"><img alt="29.4%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">29.<small>4</small>%</a></span></span>) AD</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.&nbsp;」</span><span class="flipText2">「&nbsp;84% of the <span style="white-space:nowrap"><a href="/wiki/Critical_strike#Modifying_Critical_Strike_Damage" title="Critical strike#Modifying Critical Strike Damage"><img alt="Critical strike damage icon.png" src="/wiki/images/Critical_strike_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #944B00; white-space:normal">critical damage</span></span> champions usually have.&nbsp;」</span></span>',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '20 / 40 / 60 / 80 / 100 (+ 105% AD)',
        values: [20, 40, 60, 80, 100],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 40 / 60 / 80 / 100',
        children: [
          {
            values: 105,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 105% AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'If this hits at least one enemy, <b>Yone</b> generates a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Gathering Storm</i> for 6 seconds, stacking up to 2 times and refreshing on subsequent hits. At 2 stacks, the next <i>Mortal Steel</i> consumes them all to become empowered with a new effect.',
    leveling: [],
  },
  {
    img: '/wiki/images/Yone_Mortal_Steel_2.png',
    description:
      '<span class="template_sbc"><b>Gathering Storm Bonus:</b></span> <b>Yone</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> a fixed distance in the target direction and unleashes a whirlwind in the same direction, both dealing the same damage to enemies hit in their path and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them up</a></span> for 0.<small>75</small> seconds, but being unable to affect the same target twice.',
    leveling: [],
  },
  {
    description:
      '<i>Mortal Steel\'s</i> thrust is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span> if <b>Yone</b> is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Disarming crowd control"><a href="/wiki/Crowd_control#Disarming" title="Crowd control#Disarming"><img alt="Disarm icon.png" src="/wiki/images/Disarm_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disarming" title="Crowd control">disarming crowd control</a></span> during the cast time but its <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is reset to 0.<small>1</small> seconds.',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Yone_Spirit_Cleave.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Yone</b> cleaves his <span style="color: #E2103F; white-space:normal">Azakana Sword</span> in a cone in the target direction, dealing equal parts <span style="color: #FF8C34; white-space:normal">physical</span> and <span style="color: #00B0F0; white-space:normal">magic</span> damage to enemies hit. The <b>total</b> mixed damage has a minimum threshold of <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="30 + 10 per level until lvl 8, then + 20 per level until lvl 13, then + 40 per level" data-bot_values="40;50;60;70;80;90;100;110;130;150;170;190;210;250;290;330;370;410" data-top_values="">40 − 410 (based on level)</span> against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and a maximum threshold of <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="140 + 10 per level" data-bot_values="150;160;170;180;190;200;210;220;230;240;250;260;270;280;290;300;310;320" data-top_values="">150 − 320 (based on level)</span> against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 2:',
        raw: ' The total mixed damage has a minimum threshold of 40 − 410 (based on level) against  minions and a maximum threshold of 150 − 320 (based on level) against  monsters',
        values: [
          40, 61.76, 83.53, 105.29, 127.06, 148.82, 170.59, 192.35, 214.12,
          235.88, 257.65, 279.41, 301.18, 322.94, 344.71, 366.47, 388.24, 410,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'against  minions and a maximum threshold of 150 − 320',
        pre: 'The total mixed damage has a minimum threshold of 40 − 410',
        post: 'against  minions and a maximum threshold of 150 − 320',
      },
      {
        effectType: 'Heal',
        name: 'Total Mixed Damage:',
        raw: "10 / 20 / 30 / 40 / 50 (+ 11 / 12 / 13 / 14 / 15% of target's maximum health)",
        healType: 'OutgoingHeals',
        values: [10, 20, 30, 40, 50],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 20 / 30 / 40 / 50',
        children: [
          {
            values: [11, 12, 13, 14, 15],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: "+ 11 / 12 / 13 / 14 / 15% of target's maximum health",
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Physical Damage:',
        raw: "5 / 10 / 15 / 20 / 25 (+ 5.5 / 6 / 6.5 / 7 / 7.5% of target's maximum health)",
        healType: 'OutgoingHeals',
        values: [5, 10, 15, 20, 25],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5 / 10 / 15 / 20 / 25',
        children: [
          {
            values: [5.5, 6, 6.5, 7, 7.5],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: "+ 5.5 / 6 / 6.5 / 7 / 7.5% of target's maximum health",
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Magic Damage:',
        raw: "5 / 10 / 15 / 20 / 25 (+ 5.5 / 6 / 6.5 / 7 / 7.5% of target's maximum health)",
        healType: 'OutgoingHeals',
        values: [5, 10, 15, 20, 25],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5 / 10 / 15 / 20 / 25',
        children: [
          {
            values: [5.5, 6, 6.5, 7, 7.5],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: "+ 5.5 / 6 / 6.5 / 7 / 7.5% of target's maximum health",
          },
        ],
      },
    ],
  },
  {
    description:
      'If this hits an enemy, <b>Yone</b> grants himself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="35;" data-finish="55;" data-bot_values="35;36.18;37.35;38.53;39.71;40.88;42.06;43.24;44.41;45.59;46.76;47.94;49.12;50.29;51.47;52.65;53.82;55" data-top_values="">35 − 55 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;55% <b>bonus</b> AD)</span> for 1.<small>5</small> seconds, increased by 100% if it hits a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> and by 50% for each subsequent champion hit.',
    leveling: [
      {
        effectType: 'Shield',
        name: 'Line 1:',
        raw: 'If this hits an enemy, Yone grants himself a  shield for 35 − 55 (based on level) (+ 55% bonus AD) for 1',
        damagetype: 'None',
        shieldType: 'SelfShield',
        values: [
          35, 36.18, 37.35, 38.53, 39.71, 40.88, 42.06, 43.24, 44.41, 45.59,
          46.76, 47.94, 49.12, 50.29, 51.47, 52.65, 53.82, 55,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'for 1',
        pre: 'If this hits an enemy, Yone grants himself a  shield for 35 − 55',
        post: 'for 1',
        children: [
          {
            values: 55,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 55% bonus AD',
          },
        ],
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Yone_Soul_Unbound.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Yone</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> a fixed distance in the target direction, discarding his body and entering <i>Spirit Form</i> for 5 seconds. <b>Yone\'s</b> body is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> and is sent the same distance behind the cast location, though not through terrain, and is reclaimed when <i>Soul Unbound</i> ends.',
    leveling: [],
  },
  {
    img: '/wiki/images/Soul_Unbound_3.png',
    description:
      '<span class="template_sbc"><b>Spirit Form:</b></span> <b>Yone</b> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_label="bonus movement speed" data-top_label="time since the start of the dash" data-start="10;0" data-finish="30;3" data-bot_values="10;12;14;16;18;20;22;24;26;28;30" data-top_values="0;0.3;0.6;0.9;1.2;1.5;1.8;2.1;2.4;2.7;3" data-bot_key="%">10% − 30% (based on time active)</span> <b>bonus</b> movement speed</span></span>. Enemy champions damaged by his <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> or <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> are <i>marked</i>. Each <i>mark</i> stores a portion of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after modifiers">post-mitigation</span> damage that <b>Yone</b> deals to the target with his basic attacks and abilities.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: ' Yone becomes  ghosted and gains  10% − 30% (based on time active) bonus movement speed',
        values: 1,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: 'bonus movement speed',
        pre: 'Yone becomes  ghosted and gains  10% − 30%',
        post: 'bonus movement speed',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on time active',
            pre: 'based on time active',
          },
        ],
      },
      {
        effectType: 'Damage',
        name: 'Damage Stored:',
        raw: '25 / 27.5 / 30 / 32.5 / 35% of damage dealt',
        damagetype: 'None',
        values: [25, 27.5, 30, 32.5, 35],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: 'of damage dealt',
        pre: '25 / 27.5 / 30 / 32.5 / 35% of damage dealt',
      },
    ],
  },
  {
    description:
      'Activation resets <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yone" data-ability="Way of the Hunter" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yone/LoL#Way_of_the_Hunter" title="Way of the Hunter\'s"><img alt="Way of the Hunter\'s" src="/wiki/images/Yone_Way_of_the_Hunter.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yone/LoL#Way_of_the_Hunter" title="Yone/LoL">Way of the Hunter\'s</a></span></span></i> current sword state. <i>Soul Unbound</i> can be recast after 0.<small>5</small> seconds, and automatically does so after the duration.',
    leveling: [],
  },
  {
    img: '/wiki/images/Yone_Soul_Unbound_2.png',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Yone</b> remains in cast time for 0.<small>25</small> seconds then <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> back to his body with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span>, ending <i>Spirit Form</i> and detonating the <i>marks</i> on each champion to deal <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal">true damage</span></span> equal to the amount stored against each of them. After the cast time, he will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleanse</a></span> himself from all <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilizing</a></span> effects and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Polymorph"><a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control#Polymorph"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control">polymorphs</a></span><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Does not remove the accompanying disarm">*</span> that were applied to him during it as well as all <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinds</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cripple"><a href="/wiki/Cripple" title="Cripple"><img alt="Cripple icon.png" src="/wiki/images/Cripple_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cripple" class="mw-redirect" title="Cripple">cripples</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Drowsy"><a href="/wiki/Types_of_Crowd_Control#Drowsy" title="Types of Crowd Control#Drowsy"><img alt="Drowsy icon.png" src="/wiki/images/Drowsy_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Drowsy" title="Types of Crowd Control">drowsy</a></span> effects.',
    leveling: [],
  },
  {
    description:
      '<i>The automatic recast is delayed if <b>Yone</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attack windup"><a href="/wiki/Basic_attack#Windup" title="Basic attack">winding up</a></span> a basic attack or is unable to recast Soul Unbound under any circumstances, which includes if he cannot move or cast abilities. Soul Unbound will also immediately recast upon <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">death</a></span> or entering <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span>.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Yone_Fate_Sealed.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Yone</b> prepares a strike over the cast time, then <i>marks</i> all enemies within a line in the target direction, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocking them down</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 1 second. He <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blinks"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Can place him beyond maximum range">200 units</span> beyond the center of the last enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> struck, or else to <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Uses center range">maximum range</span> instead.',
    leveling: [],
  },
  {
    description:
      'After 0.<small>3</small> seconds, a gust rushes along the same line that deals equal parts <span style="color: #FF8C34; white-space:normal">physical</span> and <span style="color: #00B0F0; white-space:normal">magic</span> damage to <i>marked</i> enemies within the area and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulls</a></span> them towards the location <b>Yone</b> blinked to, then <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks them up</a></span> for 0.<small>75</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Total Mixed Damage:',
        raw: '200 / 400 / 600 (+ 80% AD)',
        values: [200, 400, 600],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '200 / 400 / 600',
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
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '100 / 200 / 300 (+ 40% AD)',
        values: [100, 200, 300],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '100 / 200 / 300',
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
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '100 / 200 / 300 (+ 40% AD)',
        values: [100, 200, 300],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '100 / 200 / 300',
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
      '<i>The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> ends prematurely upon the knock up.</i>',
    leveling: [],
  },
];
export const Yone = { I, Q, W, E, R };
