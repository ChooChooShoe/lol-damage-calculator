import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Akshan';

export default {
  'Dirty Fighting': {
    name: 'Dirty Fighting',
    display_name: 'Dirty Fighting',
    champion: 'Akshan',
    skill: 'I',
    image: {
      full: 'akshan_p.png',
      sprite: 'passive0.png',
      group: 'passive',
      x: 144,
      y: 0,
      w: 48,
      h: 48,
    },
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Missile speed of basic attacks and crits">2000</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Additional shot missile speed">5000</span>',
    static:
      '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="16;12;8;4" data-top_values="1;6;11;16">16 / 12 / 8 / 4 (based on level)</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akshan" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akshan/LoL" title="Akshan\'s"><img alt="Akshan\'s" src="/wiki/images/Akshan_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akshan/LoL" title="Akshan/LoL">Akshan\'s</a></span></span> basic attack causes him to fire a second attack that deals <span style="color: #FF8C34; white-space:normal"><b>reduced</b> physical damage</span>. If <b>Akshan</b> cancels the second attack, he gains a brief burst of <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">move speed</span></span>.',
      '<span class="template_sbc"><b>Innate:</b></span> <b>Akshan\'s</b> attacks and abilities apply a stack to enemies hit. The third stack consumes them all to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>; if the target was a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, he also gains a brief <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Dirty Fighting.png',
        description:
          'Innate: Whenever Akshan uses a basic attack, he fires an additional shot after a delay that deals 50% AD physical damage, increased to 100% AD against  minions. If this shot is cancelled, he gains 20 − 75 (based on level)  ×  (1 + 100% bonus attack speed)  bonus movement speed decaying over 1 second.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> Whenever <b>Akshan</b> uses a <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a>, he fires an additional shot after a delay that deals <span style="color:orange; white-space:normal">50% AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span>, increased to <span style="color:orange; white-space:normal">100% AD</span> against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>. If this shot is cancelled, he gains <span style="color: #F5EE99; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="20;" data-finish="75;" data-bot_values="20;23.24;26.47;29.71;32.94;36.18;39.41;42.65;45.88;49.12;52.35;55.59;58.82;62.06;65.29;68.53;71.76;75" data-top_values="">20 − 75 (based on level)</span></span> &nbsp;×&nbsp; <span style="color:orangered; white-space:normal">(1 +&nbsp;100% <b>bonus</b> attack speed)</span> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> decaying over 1 second.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate:',
            raw: ' Whenever Akshan uses a basic attack, he fires an additional shot after a delay that deals 50% AD physical damage, increased to 100% AD against  minions',
            increasedStat: 'total_ad',
            values: 5,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'AD physical damage, increased to 100Akshan uses a basic attack, he fires an additional shot after a delay that deals 50',
            pre: 'Whenever Akshan uses a basic attack, he fires an additional shot after a delay that deals 50% AD physical damage, increased to 100% AD against  minions',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'If this shot is cancelled, he gains 20 − 75 (based on level)  ×  (1 + 100% bonus attack speed)  bonus movement speed decaying over 1 second.',
            values: [
              20, 23.24, 26.47, 29.71, 32.94, 36.18, 39.41, 42.65, 45.88, 49.12,
              52.35, 55.59, 58.82, 62.06, 65.29, 68.53, 71.76, 75,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: '×',
            pre: 'If this shot is cancelled, he gains 20 − 75',
            post: '×',
            children: [
              {
                values: 1,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus attack speed+ 100',
                pre: '1 + 100% bonus attack speed',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'The additional shot applies  on-hit and on-attack effects at 100% effectiveness and can  critically strike for「 (61.25% +  12.25%) AD ( (122.5% +  24.5%) AD) 」「 70% total  critical damage 」physical damage.',
        descriptionHTML:
          'The additional shot applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects at 100% effectiveness and can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color:orange; white-space:normal">(61.<small>25</small>%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="12.25%"><img alt="12.25%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">12.<small>25</small>%</a></span></span>) AD</span> (<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="color:orange; white-space:normal">(122.<small>5</small>%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="24.5%"><img alt="24.5%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">24.<small>5</small>%</a></span></span>) AD</span>)&nbsp;」</span><span class="flipText2">「&nbsp;70% <b>total</b> <span style="white-space:nowrap"><a href="/wiki/Critical_strike#Modifying_Critical_Strike_Damage" title="Critical strike#Modifying Critical Strike Damage"><img alt="Critical strike damage icon.png" src="/wiki/images/Critical_strike_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #944B00; white-space:normal">critical damage</span></span>&nbsp;」</span></span><span style="color: #FF8C34; white-space:normal">physical damage</span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'The additional shot applies  on-hit and on-attack effects at 100% effectiveness and can  critically strike for「 (61.25% +  12.25%) AD ( (122.5% +  24.5%) AD) 」「 70% total  critical damage 」physical damage.',
            damagetype: 'Physical',
            values: 1,
            valuesIsPercent: true,
            units: 'total_ad',
            unitsText: 'AD',
            pre: 'The additional shot applies  on-hit and on-attack effects at 100% effectiveness and can  critically strike for「',
            post: 'AD',
            children: [
              {
                values: 61.25,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: '+  12.25',
                pre: '61.25% +  12.25%',
              },
              {
                values: 0,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '',
                post: 'AD',
                children: [
                  {
                    values: 122.5,
                    valuesIsPercent: true,
                    user: 'none',
                    units: '',
                    unitsText: '+  24.5',
                    pre: '122.5% +  24.5%',
                  },
                ],
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Innate: Akshan's basic attacks  on-hit and ability hits apply a stack of Dirty Fighting to enemies for 5 seconds, refreshing on subsequent applications and stacking up to 3 times. The third stack against a target consumes them all to deal them 10 − 165 (based on level) bonus magic damage; if the target is a  champion, Akshan will also gain a 40 − 280 (based on level) (+ 35% bonus AD)  shield for 2 seconds. The shield may be gained only once every few seconds.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Akshan\'s</b> basic attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <a href="/wiki/Champion_ability" title="Champion ability">ability</a> hits apply a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Dirty Fighting</i> to enemies for 5 seconds, refreshing on subsequent applications and stacking up to 3 times. The third stack against a target consumes them all to deal them <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="10 +&nbsp;5 per level until level 8, then 10 per level until level 14, then 15 per level" data-bot_values="10;15;20;25;30;35;40;45;55;65;75;85;95;105;120;135;150;165" data-top_values="">10 − 165 (based on level)</span> <b>bonus</b> magic damage</span>; if the target is a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, <b>Akshan</b> will also gain a <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="40;" data-finish="280;" data-bot_values="40;54.12;68.24;82.35;96.47;110.59;124.71;138.82;152.94;167.06;181.18;195.29;209.41;223.53;237.65;251.76;265.88;280" data-top_values="">40 − 280 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;35% <b>bonus</b> AD)</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 2 seconds. The shield may be gained only once every few seconds.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Innate:',
            raw: " Akshan's basic attacks  on-hit and ability hits apply a stack of Dirty Fighting to enemies for 5 seconds, refreshing on subsequent applications and stacking up to 3 times",
            min: 0,
            max: 10,
            description:
              " Akshan's basic attacks  on-hit and ability hits apply a stack of Dirty Fighting to enemies for 5 seconds, refreshing on subsequent applications and stacking up to 3 times",
            values: 5,
            units: 'total_ap',
            unitsText:
              'basic attacks  on-hit and ability hits apply a stack of Dirty Fighting to enemies for 5 seconds, refreshing on subsequent applications and stacking up to 3 times',
            pre: "Akshan's basic attacks  on-hit and ability hits apply a stack of Dirty Fighting to enemies for 5 seconds, refreshing on subsequent applications and stacking up to 3 times",
          },
          {
            effectType: 'Shield',
            name: 'Line 2:',
            raw: 'The third stack against a target consumes them all to deal them 10 − 165 (based on level) bonus magic damage; if the target is a  champion, Akshan will also gain a 40 − 280 (based on level) (+ 35% bonus AD)  shield for 2 seconds',
            damagetype: 'Magic',
            shieldType: 'OutgoingShields',
            values: [
              10, 19.12, 28.24, 37.35, 46.47, 55.59, 64.71, 73.82, 82.94, 92.06,
              101.18, 110.29, 119.41, 128.53, 137.65, 146.76, 155.88, 165,
            ],
            basedOn: 'level',
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
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 35% bonus AD',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self, Enemies',
    damagetype:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Physical damage"><a href="/wiki/Physical_damage" title="Physical damage"><img alt="Attack damage.png" src="/wiki/images/Attack_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Physical_damage" title="Physical damage">Physical</a></span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Magic damage"><a href="/wiki/Magic_damage" title="Magic damage"><img alt="Magic damage.png" src="/wiki/images/Magic_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Magic_damage" title="Magic damage">Magic</a></span>',
    spelleffects: 'special',
    spellshield: false,
    projectile: 'true',
    notes:
      '* Applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic damage"><a href="/wiki/Damage" title="Damage"><img alt="Basic Attack.png" src="/wiki/images/Basic_Attack.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">basic damage</a></span> for the second shot and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Proc damage"><a href="/wiki/Damage" title="Damage"><img alt="Wit\'s End item.png" src="/wiki/images/Wit%27s_End_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">proc damage</a></span> for the bonus damage.\n<ul><li>The second shot:\n<ul><li>Is treated as a basic attack.</li>\n<li>Critically strikes independently from the first shot.</li>\n<li>Can be cancelled by inputting a different command right after using the first shot.</li>\n<li>Counts as a separate hit for effects such as <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Electrocute" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Electrocute_(Rune)" title="Electrocute"><img alt="Electrocute" src="/wiki/images/Electrocute_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Electrocute_(Rune)" class="mw-redirect" title="Electrocute (Rune)">Electrocute</a></span></span>, <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Muramana" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Muramana" title="Muramana\'s"><img alt="Muramana\'s" src="/wiki/images/Muramana_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Muramana" title="Muramana">Muramana\'s</a></span></span> <a href="/wiki/Named_item_effect#Shock" title="Named item effect">Shock</a>, and <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Eclipse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Eclipse" title="Eclipse\'s"><img alt="Eclipse\'s" src="/wiki/images/Eclipse_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Eclipse" title="Eclipse">Eclipse\'s</a></span></span> <a href="/wiki/Named_item_effect#Ever_Rising_Moon" title="Named item effect">Ever Rising Moon</a>.</li>\n<li>Starts the attack windup\'s cooldown after it is used, rather than when the first shot is.</li></ul></li>\n<li>The attack speed scaling on the movement speed buff includes the bonus attack speed gained from <b>Akshan\'s</b> innate attack speed growth.\n<ul><li>At level 18, at minimum it grants 126 decaying movement speed.</li></ul></li></ul>',
  },
  Avengerang: {
    name: 'Avengerang',
    display_name: 'Avengerang',
    champion: 'Akshan',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'AkshanQ.png',
      sprite: 'spell0.png',
      group: 'spell',
      x: 384,
      y: 96,
      w: 48,
      h: 48,
    },
    range: '850 + 500 per enemy hit',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Missiles\' own sight range">400</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 120',
    speed: '1500 / 2400',
    cast_time: '0.<small>25</small>',
    cost: '60 / 65 / 70 / 75 / 80',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts after the boomerang returns">8 / 7.<small>25</small> / 6.<small>5</small> / 5.<small>75</small> / 5</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akshan" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akshan/LoL" title="Akshan"><img alt="Akshan" src="/wiki/images/Akshan_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akshan/LoL" title="Akshan/LoL">Akshan</a></span></span> throws a boomerang that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit, extending the boomerang range and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> them. If this hits an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, <b>Akshan</b> gains a brief burst of <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">move speed</span></span>.',
      'Once the boomerang has passed its original range and has not recently hit an enemy, it homes back to <b>Akshan</b> and deals the same effects to enemies hit.',
    ],
    description: [
      {
        icon: '/wiki/images/Avengerang.png',
        description:
          'Active: Akshan throws a boomerang in the target direction that briefly grants  sight around its trajectory and deals physical damage to enemies hit,  revealing them for 1 second and extending its range each time it hits a target. If this hits an enemy  champion, Akshan gains  40% bonus movement speed that decays over 1 second.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Akshan</b> throws a boomerang in the target direction that briefly grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> around its trajectory and deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> them for 1 second and extending its range each time it hits a target. If this hits an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, <b>Akshan</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">40% <b>bonus</b> movement speed</span></span> that decays over 1 second.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Akshan throws a boomerang in the target direction that briefly grants  sight around its trajectory and deals physical damage to enemies hit,  revealing them for 1 second and extending its range each time it hits a target',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'throws a boomerang in the target direction that briefly grants  sight around its trajectory and deals physical damage to enemies hit,  revealing them for 1 second and extending its range each time it hits a target',
            pre: 'Akshan throws a boomerang in the target direction that briefly grants  sight around its trajectory and deals physical damage to enemies hit,  revealing them for 1 second and extending its range each time it hits a target',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'If this hits an enemy  champion, Akshan gains  40% bonus movement speed that decays over 1 second.',
            values: 4,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'bonus movement speed that decays over 1 second.this hits an enemy  champion, Akshan gains  40',
            pre: 'If this hits an enemy  champion, Akshan gains  40% bonus movement speed that decays over 1 second.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '5 / 25 / 45 / 65 / 85 (+ 80% AD)',
            valuesHTML:
              '5 / 25 / 45 / 65 / 85 <span style="color:orange; white-space:normal">(+&nbsp;80% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '5 / 25 / 45 / 65 / 85 (+ 80% AD)',
            damagetype: 'Physical',
            values: [5, 25, 45, 65, 85],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 25 / 45 / 65 / 85',
            children: [
              {
                values: 80,
                valuesIsPercent: true,
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
          'Once the boomerang has passed its original range and has not hit a target in the last 500 units of travelling, it homes back to Akshan and applies the same effects to enemies hit.',
        descriptionHTML:
          'Once the boomerang has passed its original range and has not hit a target in the last 500 units of travelling, it homes back to <b>Akshan</b> and applies the same effects to enemies hit.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Once the boomerang has passed its original range and has not hit a target in the last 500 units of travelling, it homes back to Akshan and applies the same effects to enemies hit.',
            damagetype: 'None',
            values: 5,
            units: 'total_ap',
            unitsText:
              'the boomerang has passed its original range and has not hit a target in the last 500 units of travelling, it homes back to Akshan and applies the same effects to enemies hit.',
            pre: 'Once the boomerang has passed its original range and has not hit a target in the last 500 units of travelling, it homes back to Akshan and applies the same effects to enemies hit.',
          },
        ],
        leveling: [
          {
            name: 'Total Physical Damage:',
            values: '10 / 50 / 90 / 130 / 170 (+ 160% AD)',
            valuesHTML:
              '10 / 50 / 90 / 130 / 170 <span style="color:orange; white-space:normal">(+&nbsp;160% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Total Physical Damage:',
            raw: '10 / 50 / 90 / 130 / 170 (+ 160% AD)',
            damagetype: 'Physical',
            values: [10, 50, 90, 130, 170],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 50 / 90 / 130 / 170',
            children: [
              {
                values: 160,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 160% AD',
              },
            ],
          },
        ],
      },
      {
        description: "Avengerang's deals reduced damage against non-champions.",
        descriptionHTML:
          "<i>Avengerang's</i> deals reduced damage against non-champions.",
        descriptionRatios: [],
        leveling: [
          {
            name: 'Non-Champion Damage:',
            values: '40 / 52.5 / 65 / 77.5 / 90%',
            valuesHTML:
              '40 / 52.<small>5</small> / 65 / 77.<small>5</small> / 90%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Non-Champion Damage:',
            raw: '40 / 52.5 / 65 / 77.5 / 90%',
            damagetype: 'None',
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
        description: 'Enemies can be hit only once per pass.',
        descriptionHTML: '<i>Enemies can be hit only once per pass.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Self, Enemies',
    damagetype: 'Physical',
    spelleffects: 'spellaoe',
    spellshield: 'Special',
    projectile: 'true',
    notes:
      '* <i>Avengerang</i> will fire from wherever <b>Akshan</b> is at the end of the cast time.\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will only block a single hit. They do not prevent the initial throw from extending its range.</li></ul>',
  },
  'Going Rogue': {
    name: 'Going Rogue',
    display_name: 'Going Rogue',
    champion: 'Akshan',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'AkshanW.png',
      sprite: 'spell0.png',
      group: 'spell',
      x: 432,
      y: 96,
      w: 48,
      h: 48,
    },
    cast_time: '0.<small>5</small>',
    cost: '40 / 30 / 20 / 10 / 0',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">18 / 14 / 10 / 6 / 2</span>',
    customlabel: 'Detection Radius',
    custominfo: '800',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> that kill allied champions are marked as a <i>Scoundrel</i> for a long time. When <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akshan" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akshan/LoL" title="Akshan"><img alt="Akshan" src="/wiki/images/Akshan_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akshan/LoL" title="Akshan/LoL">Akshan</a></span></span> scores a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> on a <i>Scoundrel</i>, he gains <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="bonus gold Gold"><img alt="bonus gold Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;"><b>bonus</b> gold</span></span>, all allies killed by the <i>Scoundrel</i> are revived, and <i>Scoundrel</i> status is removed from all other enemies.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Akshan</b> briefly gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Camouflage"><a href="/wiki/Stealth#Camouflage" title="Stealth#Camouflage"><img alt="Ambush 2.png" src="/wiki/images/Twitch_Ambush_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Camouflage" title="Stealth">camouflage</a></span>, or indefinitely while near <a href="/wiki/Terrain" title="Terrain">terrain</a> and in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Brush"><a href="/wiki/Brush" title="Brush"><img alt="Brushmaker.png" src="/wiki/images/Ivern_Brushmaker.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Brush" title="Brush">brush</a></span>. During this time, he can see trails leading toward <i>Scoundrels</i> and gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">move speed</span></span> and <span style="white-space:nowrap"><a href="/wiki/Mana_regeneration" title="Mana regeneration"><img alt="Mana regeneration icon.png" src="/wiki/images/Mana_regeneration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana regeneration</span></span> while moving toward them.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Akshan</b> ends <i>Going Rogue</i>.',
    ],
    description: [
      {
        icon: '/wiki/images/Going Rogue 2.png',
        description:
          'Passive: Akshan marks enemy  champions that kill allied champions as Scoundrels for 60 seconds. If Akshan scores a  takedown against a Scoundrel while alive and within 3 seconds of damaging them, he receives an additional  100 and revives all  dead allied champions that they have slain after 1 second.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Akshan</b> marks enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> that kill allied champions as <i>Scoundrels</i> for 60 seconds. If <b>Akshan</b> scores a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against a <i>Scoundrel</i> while alive and within 3 seconds of damaging them, he receives an additional <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="100 Gold"><img alt="100 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">100</span></span> and revives all <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dead</a></span> allied champions that they have slain after 1 second.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Passive:',
            raw: ' Akshan marks enemy  champions that kill allied champions as Scoundrels for 60 seconds',
            values: 6,
            units: 'kindredMarks',
            unitsText:
              'marks enemy  champions that kill allied champions as Scoundrels for 60 seconds',
            pre: 'Akshan marks enemy  champions that kill allied champions as Scoundrels for 60 seconds',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'If Akshan scores a  takedown against a Scoundrel while alive and within 3 seconds of damaging them, he receives an additional  100 and revives all  dead allied champions that they have slain after 1 second.',
            increasedStat: 'total_ad',
            values: 3,
            units: '',
            unitsText:
              'Akshan scores a  takedown against a Scoundrel while alive and within 3 seconds of damaging them, he receives an additional  100 and revives all  dead allied champions that they have slain after 1 second.',
            pre: 'If Akshan scores a  takedown against a Scoundrel while alive and within 3 seconds of damaging them, he receives an additional  100 and revives all  dead allied champions that they have slain after 1 second.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "When Akshan claims a Scoundrel's bounty he removes the marks of all other enemies. Scoundrels refresh their mark duration on subsequent kills, and will have their mark removed when they die by any means. Akshan cannot mark enemies as Scoundrels while they are dead. Allies are revived at their summoning platform.",
        descriptionHTML:
          'When <b>Akshan</b> claims a <i>Scoundrel\'s</i> bounty he removes the marks of all other enemies. <i>Scoundrels</i> refresh their mark duration on subsequent kills, and will have their mark removed when they die by any means. <b>Akshan</b> cannot mark enemies as <i>Scoundrels</i> while they are dead. Allies are revived at their <a href="/wiki/Spawn" title="Spawn">summoning platform</a>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Going Rogue.png',
        description:
          'Active: Akshan enters  camouflage, which lasts indefinitely while he is near terrain or inside  brush, and for 2 seconds otherwise. During this time. he can see trails leading toward Scoundrels, and while facing them if they are within 5000 units, he gains  bonus mana regeneration equal to 12% of his missing mana as well as  bonus movement speed.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Akshan</b> enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Camouflage"><a href="/wiki/Stealth#Camouflage" title="Stealth#Camouflage"><img alt="Ambush 2.png" src="/wiki/images/Twitch_Ambush_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Camouflage" title="Stealth">camouflage</a></span>, which lasts indefinitely while he is near <a href="/wiki/Terrain" title="Terrain">terrain</a> or inside <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Brush"><a href="/wiki/Brush" title="Brush"><img alt="Brushmaker.png" src="/wiki/images/Ivern_Brushmaker.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Brush" title="Brush">brush</a></span>, and for 2 seconds otherwise. During this time. he can see trails leading toward <i>Scoundrels</i>, and while facing them if they are within <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Pending for test">5000</span> units, he gains <span style="white-space:nowrap"><a href="/wiki/Mana_regeneration" title="Mana regeneration"><img alt="Mana regeneration icon.png" src="/wiki/images/Mana_regeneration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal"><b>bonus</b> mana regeneration</span></span> equal to <span style="color: #0099CC; white-space:normal">12% of his <b>missing</b> mana</span> as well as <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: ' Akshan enters  camouflage, which lasts indefinitely while he is near terrain or inside  brush, and for 2 seconds otherwise',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'enters  camouflage, which lasts indefinitely while he is near terrain or inside  brush, and for 2 seconds otherwise',
            pre: 'Akshan enters  camouflage, which lasts indefinitely while he is near terrain or inside  brush, and for 2 seconds otherwise',
          },
          {
            effectType: 'Gain',
            name: 'Line 3:',
            raw: 'he can see trails leading toward Scoundrels, and while facing them if they are within 5000 units, he gains  bonus mana regeneration equal to 12% of his missing mana as well as  bonus movement speed.',
            increasedStat: 'bonus_ad',
            values: 5,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'of his missing mana as well as  bonus movement speed.can see trails leading toward Scoundrels, and while facing them if they are within 5000 units, he gains  bonus mana regeneration equal to 12',
            pre: 'he can see trails leading toward Scoundrels, and while facing them if they are within 5000 units, he gains  bonus mana regeneration equal to 12% of his missing mana as well as  bonus movement speed.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Movement Speed:',
            values: '80 / 90 / 100 / 110 / 120',
            valuesHTML: '80 / 90 / 100 / 110 / 120',
          },
        ],
        levelingRatios: [
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
          'Going Rogue can be recast after 1 second, and does so automatically after its duration. Attacking or casting abilities ends Going Rogue immediately.',
        descriptionHTML:
          '<i>Going Rogue</i> can be recast after 1 second, and does so automatically after its duration. Attacking or casting abilities ends <i>Going Rogue</i> immediately.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Going Rogue can be recast after 1 second, and does so automatically after its duration',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'Rogue can be recast after 1 second, and does so automatically after its duration',
            pre: 'Going Rogue can be recast after 1 second, and does so automatically after its duration',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description: 'Recast: Akshan ends Going Rogue.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Akshan</b> ends <i>Going Rogue</i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self, Enemies',
    notes:
      '* <b>Akshan</b> can move during <i>Going Rogue\'s</i> cast time.\n<ul><li>The mark displays the duration and slay count.\n<ul><li>Enemy champions that kill <b>Akshan</b> will not be marked as <i>Scoundrels</i> nor increase their slay count.</li></ul></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">Clones</a></span> do not count for triggering <i>Going Rogue\'s</i> passive.</li>\n<li><i>Going Rogue\'s</i> buff refreshes to last indefinitely upon moving near terrain or into brush, and will refresh to 2 seconds after leaving near terrain or brush.</li>\n<li>Allied champions within a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Zombie state"><a href="/wiki/Death#Zombie_states" title="Death#Zombie states"><img alt="Zombie icon.png" src="/wiki/images/Zombie_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Zombie_states" title="Death">zombie state</a></span> are revived only after the state ends.</li>\n<li><b>Akshan</b> can still trigger <i>Going Rogue\'s</i> passive while he is within a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Zombie state"><a href="/wiki/Death#Zombie_states" title="Death#Zombie states"><img alt="Zombie icon.png" src="/wiki/images/Zombie_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Zombie_states" title="Death">zombie state</a></span>.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Akshan_Original_W_2.ogg   "To the shadows... where the scoundrels hide."',
  },
  'Heroic Swing': {
    name: 'Heroic Swing',
    display_name: 'Heroic Swing',
    champion: 'Akshan',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'AkshanE.png',
      sprite: 'spell0.png',
      group: 'spell',
      x: 0,
      y: 144,
      w: 48,
      h: 48,
    },
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Hook missile speed">2500</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dash orbital speed">1200</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Automatic attacks missile speed">3000</span>',
    cast_time: 'none',
    cost: '70',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">18 / 16.<small>5</small> / 15 / 13.<small>5</small> / 12</span>',
    blurb: [
      '<span class="template_sbc"><b>First Cast:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akshan" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akshan/LoL" title="Akshan"><img alt="Akshan" src="/wiki/images/Akshan_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akshan/LoL" title="Akshan/LoL">Akshan</a></span></span> prepares to swing by firing a hook that embeds in the first <a href="/wiki/Terrain" title="Terrain">terrain</a> hit. <i>Heroic Swing\'s</i> second cast can be used while the hook is attached.',
      '<span class="template_sbc"><b>Second Cast:</b></span> <b>Akshan</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">swings</a></span> around the terrain in a direction, firing <span style="color: #FF8C34; white-space:normal">physical damage</span> bullets at the nearest enemy. He may swing indefinitely, or until he collides with an enemy champion or terrain.',
      '<span class="template_sbc"><b>Third Cast:</b></span> While swinging, he can recast again to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">jump</a></span> toward the target location and fire a final shot. <br><i>Heroic Swing\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> will reset upon scoring a champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span>.',
      '<i>Heroic Swing</i> applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects.',
    ],
    description: [
      {
        description:
          'Active: Akshan can activate Heroic Swing three times before the ability goes on cooldown, and can use the third cast only after 0.5 seconds of the second cast. Akshan may input a attack or movement command to use the second and third casts.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Akshan</b> can activate <i>Heroic Swing</i> three times before the ability goes on cooldown, and can use the third cast only after 0.<small>5</small> seconds of the second cast. <b>Akshan</b> may input a attack or movement command to use the second and third casts.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Heroic Swing.png',
        description:
          "First Cast: Akshan fires a hook in the target direction that embeds in the first terrain hit, and enters preparation for up to 2.125 seconds. Heroic Swing's second cast can be used while the hook is attached. If the hook fails to attach or Akshan is moved or becomes  immobilized,  grounded, or  polymorphed within the duration, the preparation will end prematurely, cancelling Heroic Swing in the process.",
        descriptionHTML:
          '<span class="template_sbc"><b>First Cast:</b></span> <b>Akshan</b> fires a hook in the target direction that embeds in the first <a href="/wiki/Terrain" title="Terrain">terrain</a> hit, and enters <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="See notes">preparation</span> for up to 2.<small>125</small> seconds. <i>Heroic Swing\'s</i> second cast can be used while the hook is attached. If the hook fails to attach or <b>Akshan</b> is <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="See notes">moved</span> or becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span>, or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Polymorph"><a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control#Polymorph"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control">polymorphed</a></span> within the duration, the preparation will end prematurely, cancelling <i>Heroic Swing</i> in the process.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'First Cast:',
            raw: ' Akshan fires a hook in the target direction that embeds in the first terrain hit, and enters preparation for up to 2.125 seconds',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'fires a hook in the target direction that embeds in the first terrain hit, and enters preparation for up to 2.125 seconds',
            pre: 'Akshan fires a hook in the target direction that embeds in the first terrain hit, and enters preparation for up to 2.125 seconds',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Heroic Swing 2.png',
        description:
          'Second Cast: Akshan  swings around the terrain in the target direction, stopping upon colliding with an enemy champion or terrain. While swinging, he rapidly fires at the nearest  visible enemy to deal them physical damage and apply  on-hit effects at 25% effectiveness per shot. Akshan will be  knocked down by any  immobilizing or  polymorphing crowd control during the dash.',
        descriptionHTML:
          '<span class="template_sbc"><b>Second Cast:</b></span> <b>Akshan</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">swings</a></span> around the terrain in the target direction, stopping upon colliding with an enemy champion or terrain. While swinging, he rapidly fires at the nearest <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy to deal them <span style="color: #FF8C34; white-space:normal">physical damage</span> and apply <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects at 25% effectiveness per shot. <br><i><b>Akshan</b> will be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocked down</a></span> by any <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilizing</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Polymorph"><a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control#Polymorph"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control">polymorphing</a></span> crowd control during the dash.</i>',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'While swinging, he rapidly fires at the nearest  visible enemy to deal them physical damage and apply  on-hit effects at 25% effectiveness per shot',
            damagetype: 'Physical',
            values: 2,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              'effectiveness per shotswinging, he rapidly fires at the nearest  visible enemy to deal them physical damage and apply  on-hit effects at 25',
            pre: 'While swinging, he rapidly fires at the nearest  visible enemy to deal them physical damage and apply  on-hit effects at 25% effectiveness per shot',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage per Shot:',
            values:
              '30 / 45 / 60 / 75 / 90 (+ 17.5% bonus AD)  ×  (1 + 0.3 per 100% bonus attack speed)',
            valuesHTML:
              '30 / 45 / 60 / 75 / 90 <span style="color:orange; white-space:normal">(+&nbsp;17.<small>5</small>% <b>bonus</b> AD)</span> &nbsp;×&nbsp; <span style="color:orangered; white-space:normal">(1 +&nbsp;0.<small>3</small> per 100% <b>bonus</b> attack speed)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage per Shot:',
            raw: '30 / 45 / 60 / 75 / 90 (+ 17.5% bonus AD)  ×  (1 + 0.3 per 100% bonus attack speed)',
            damagetype: 'Physical',
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
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 17.5% bonus AD',
              },
              {
                values: 1,
                valuesIsPercent: true,
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
          'Third Cast: Akshan ends the swing by  jumping to the target location, though not through terrain, and fires one last shot at a nearby  visible enemy.',
        descriptionHTML:
          '<span class="template_sbc"><b>Third Cast:</b></span> <b>Akshan</b> ends the swing by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">jumping</a></span> to the target location, though not through terrain, and fires one last shot at a nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Scoring an enemy champion  takedown reduces Heroic Swing's  current cooldown to 0.5 seconds. The shots can  critically strike for「 (57.5% +  31.5%) bonus damage 」「 90% total  critical damage 」and apply  life steal at 100% effectiveness.",
        descriptionHTML:
          'Scoring an enemy champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> reduces <i>Heroic Swing\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> to 0.<small>5</small> seconds. The shots can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;(57.<small>5</small>%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="31.5%"><img alt="31.5%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">31.<small>5</small>%</a></span></span>) <b>bonus</b> damage&nbsp;」</span><span class="flipText2">「&nbsp;90% <b>total</b> <span style="white-space:nowrap"><a href="/wiki/Critical_strike#Modifying_Critical_Strike_Damage" title="Critical strike#Modifying Critical Strike Damage"><img alt="Critical strike damage icon.png" src="/wiki/images/Critical_strike_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #944B00; white-space:normal">critical damage</span></span>&nbsp;」</span></span>and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Applies life steal"><a href="/wiki/Life_steal" title="Life steal">apply</a></span> <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> at 100% effectiveness.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'The shots can  critically strike for「 (57.5% +  31.5%) bonus damage 」「 90% total  critical damage 」and apply  life steal at 100% effectiveness.',
            damagetype: 'None',
            values: 0,
            units: 'lifesteal',
            unitsText:
              'bonus damage 」「 90% total  critical damage 」and apply  life steal at 100% effectiveness.',
            pre: 'The shots can  critically strike for「',
            post: 'bonus damage 」「 90% total  critical damage 」and apply  life steal at 100% effectiveness.',
            children: [
              {
                values: 57.5,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: '+  31.5',
                pre: '57.5% +  31.5%',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting:
      '<a href="/wiki/Direction-targeted" class="mw-redirect" title="Direction-targeted">Direction</a> / <a href="/wiki/Auto-targeted" class="mw-redirect" title="Auto-targeted">Auto</a> / <a href="/wiki/Location-targeted" class="mw-redirect" title="Location-targeted">Location</a>',
    affects: 'Self, Enemies',
    damagetype: 'Physical',
    spelleffects: 'basic',
    spellshield: 'Special',
    projectile: 'true',
    callforhelp: 'true',
    notes:
      '* <b>Akshan</b> will not stop swinging until his dash is stopped.\n<ul><li><ul><li>The swing will end prematurely if the terrain the hook was attached to no longer exists, such as <a href="/wiki/Terrain#Player-Generated" title="Terrain">player-generated terrain</a>.</li></ul></li>\n<li><b>Akshan</b> will prioritize firing at enemies he damaged with <i>any</i> unit-targeted ability or spell within the last 4 seconds, such as <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akshan" data-ability="Comeuppance" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akshan/LoL#Comeuppance" title="Comeuppance"><img alt="Comeuppance" src="/wiki/images/Akshan_Comeuppance.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akshan/LoL#Comeuppance" title="Akshan/LoL">Comeuppance</a></span></span> or <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span>.</li>\n<li><i>Heroic Swing</i> grants a buff to <b>Akshan</b> for 2 seconds that indicates and determines the first cast\'s duration.\n<ul><li>This buff starts as soon as the ability is cast, and lingers for 0.<small>125</small> seconds after it expires.\n<ul><li>This means the hook can be attached to terrain for longer if it hits it earlier in the duration, and vice versa.</li></ul></li>\n<li>If <b>Akshan</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> (excluding second cast\'s dash) or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> or becomes affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilization</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">ground</a></span>, or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Polymorph"><a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control#Polymorph"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control">polymorph</a></span> in the duration, the buff is removed <i>immediately</i>, causing the first cast to be lost and cancelling <i>Heroic Swing</i> entirely.</li></ul></li>\n<li><b>Akshan</b> immediately fires one shot at the beginning of his swing, one shot every <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.2 seconds, but rounded up to the next game tick.">0.<small>231</small> seconds</span> during the swing, and a final shot while dismounting from the swing.\n<ul><li>The fire rate is not affected by <a href="/wiki/Attack_speed" title="Attack speed">attack speed</a>.</li></ul></li>\n<li><b>Akshan</b> can fire at any targetable enemy unit excluding <a href="/wiki/Structure" class="mw-redirect" title="Structure">structures</a> and <a href="/wiki/Jungle_plants" title="Jungle plants">jungle plants</a>.</li>\n<li>Only <i>Heroic Swing\'s</i> first cast is disabled while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span>. The third cast is still usable during those effects.</li>\n<li><i>Heroic Swing\'s</i> second cast can be used while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">silenced</a></span>.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">Takedowns</a></span> against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clones</a></span> do not count for resetting <i>Heroic Swing\'s</i> cooldown.</li>\n<li>If a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> is scored while <i>Heroic Swing</i> is active, the cooldown afterwards will be 0.<small>5</small> seconds.</li>\n<li><b>Akshan</b> will attempt to basic attack the target he fired at with the last shot after the third cast\'s dash ends, if there is no other input given.</li>\n<li>Each shot generates a stack of <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Conqueror" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Conqueror_(Rune)" title="Conqueror"><img alt="Conqueror" src="/wiki/images/Conqueror_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Conqueror_(Rune)" class="mw-redirect" title="Conqueror (Rune)">Conqueror</a></span></span>.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will only block a single shot.</li>\n<li>The attack speed scaling on the damage of the attacks includes the bonus attack speed gained from <b>Akshan\'s</b> innate attack speed growth.\n<ul><li>At level 18, each shot at minimum deals 108.<small>36</small> <span style="color:orange; white-space:normal">(+&nbsp;21.<small>07</small>% <b>bonus</b> AD)</span> physical damage.</li></ul></li>\n<li>Despite this ability not applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects, it does apply <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Navori Quickblades" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Navori_Quickblades" title="Navori Quickblades\'"><img alt="Navori Quickblades\'" src="/wiki/images/Navori_Quickblades_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Navori_Quickblades" title="Navori Quickblades">Navori Quickblades\'</a></span></span> <a href="/wiki/Named_item_effect#Transcendence" title="Named item effect">Transcendence</a>.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span> Hook range including lollipop against walls, automated attacks range while swinging, final dash distance and speed.</li>\n<li>The following table refers for interactions while the hook is attached or in flight:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n\n<tbody><tr>\n<th colspan="2">Attacking\n</th>\n<td>Automatically initiates the second cast.\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akshan" data-ability="Avengerang" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akshan/LoL#Avengerang" title="Avengerang"><img alt="Avengerang" src="/wiki/images/Akshan_Avengerang.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akshan/LoL#Avengerang" title="Akshan/LoL">Avengerang</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akshan" data-ability="Going Rogue" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akshan/LoL#Going_Rogue" title="Going Rogue"><img alt="Going Rogue" src="/wiki/images/Akshan_Going_Rogue.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akshan/LoL#Going_Rogue" title="Akshan/LoL">Going Rogue</a></span></span> are disabled. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akshan" data-ability="Comeuppance" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akshan/LoL#Comeuppance" title="Comeuppance"><img alt="Comeuppance" src="/wiki/images/Akshan_Comeuppance.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akshan/LoL#Comeuppance" title="Akshan/LoL">Comeuppance</a></span></span> is usable.\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Automatically initiates the second cast.\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All items are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>  <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/26/Grounded_icon.png/revision/latest?cb=20160509000039" class="image"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Grounding effects</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/9/9d/Stun_icon.png/revision/latest?cb=20171201223940" class="image"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Immobilizing effects\n</li></td></tr></tbody></table>\n<ul><li>The following table refers for interactions while <b>Akshan</b> is swinging:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n\n<tbody><tr>\n<th colspan="2">Attacking\n</th>\n<td>Automatically initiates the third cast.\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akshan" data-ability="Avengerang" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akshan/LoL#Avengerang" title="Avengerang"><img alt="Avengerang" src="/wiki/images/Akshan_Avengerang.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akshan/LoL#Avengerang" title="Akshan/LoL">Avengerang</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akshan" data-ability="Going Rogue" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akshan/LoL#Going_Rogue" title="Going Rogue"><img alt="Going Rogue" src="/wiki/images/Akshan_Going_Rogue.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akshan/LoL#Going_Rogue" title="Akshan/LoL">Going Rogue</a></span></span> are disabled. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akshan" data-ability="Comeuppance" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akshan/LoL#Comeuppance" title="Comeuppance"><img alt="Comeuppance" src="/wiki/images/Akshan_Comeuppance.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akshan/LoL#Comeuppance" title="Akshan/LoL">Comeuppance</a></span></span> is usable.\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Automatically initiates the third cast.\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>All the other item-actives are usable\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Stopwatch" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Stopwatch" title="Stopwatch"><img alt="Stopwatch" src="/wiki/images/Stopwatch_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Stopwatch" title="Stopwatch">Stopwatch</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Zhonya\'s Hourglass" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zhonya%27s_Hourglass" title="Zhonya\'s Hourglass"><img alt="Zhonya\'s Hourglass" src="/wiki/images/Zhonya%27s_Hourglass_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zhonya%27s_Hourglass" title="Zhonya\'s Hourglass">Zhonya\'s Hourglass</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Hextech Rocketbelt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt"><img alt="Hextech Rocketbelt" src="/wiki/images/Hextech_Rocketbelt_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt">Hextech Rocketbelt</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Galeforce" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Galeforce" title="Galeforce"><img alt="Galeforce" src="/wiki/images/Galeforce_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Galeforce" title="Galeforce">Galeforce</a></span></span>  <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Prowler\'s Claw" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Prowler%27s_Claw" title="Prowler\'s Claw"><img alt="Prowler\'s Claw" src="/wiki/images/Prowler%27s_Claw_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Prowler%27s_Claw" title="Prowler\'s Claw">Prowler\'s Claw</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>    <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/9/9d/Stun_icon.png/revision/latest?cb=20171201223940" class="image"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Immobilizing effects\n</li></td></tr></tbody></table>',
  },
  Comeuppance: {
    name: 'Comeuppance',
    display_name: 'Comeuppance',
    champion: 'Akshan',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'AkshanR.png',
      sprite: 'spell0.png',
      group: 'spell',
      x: 48,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '2500',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 120',
    speed: '3200',
    cast_time: 'none',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">100 / 92.<small>5</small> / 85 / 77.<small>5</small> / 70</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akshan" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akshan/LoL" title="Akshan"><img alt="Akshan" src="/wiki/images/Akshan_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akshan/LoL" title="Akshan/LoL">Akshan</a></span></span> locks onto the target enemy champion and begins <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span> power into his gun to store bullets, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> them as well as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> himself. <i>Comeuppance</i> will recast after the channel, or can recast early.',
      '<span class="template_sbc"><b>Recast:</b></span> Akshan fires the stored bullets at the target, each dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy hit, increased by <span style="color: #1F995C; white-space:normal">their <b>missing</b> health</span>.',
      '<b>Akshan</b> can move normally and cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akshan" data-ability="Heroic Swing" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akshan/LoL#Heroic_Swing" title="Heroic Swing"><img alt="Heroic Swing" src="/wiki/images/Akshan_Heroic_Swing.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akshan/LoL#Heroic_Swing" title="Akshan/LoL">Heroic Swing</a></span></span></i> while channeling and firing <i>Comeuppance</i>.',
      '<i>Comeuppance</i> applies <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;life steal</span> and can hit <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Comeuppance.png',
        description:
          'Active: Akshan locks onto the target enemy champion and begins  channeling for 2.5 seconds,  revealing them as well as  revealing himself. He gradually stores bullets into his weapon over the duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Akshan</b> locks onto the target enemy champion and begins <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span> for 2.<small>5</small> seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> them as well as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> himself. He gradually stores bullets into his weapon over the duration.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: ' Akshan locks onto the target enemy champion and begins  channeling for 2.5 seconds,  revealing them as well as  revealing himself',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'locks onto the target enemy champion and begins  channeling for 2.5 seconds,  revealing them as well as  revealing himself',
            pre: 'Akshan locks onto the target enemy champion and begins  channeling for 2.5 seconds,  revealing them as well as  revealing himself',
          },
        ],
        leveling: [
          {
            name: 'Maximum Bullets Stored:',
            values: '5 / 5.5 / 6 / 6.5 / 7',
            valuesHTML: '5 / 5.<small>5</small> / 6 / 6.<small>5</small> / 7',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Maximum Bullets Stored:',
            raw: '5 / 5.5 / 6 / 6.5 / 7',
            values: [5, 5.5, 6, 6.5, 7],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 5.5 / 6 / 6.5 / 7',
          },
        ],
      },
      {
        description:
          'Comeuppance will recast after the duration, or can recast early after 0.5 seconds. Comeuppance is placed on a  5-second cooldown if the channel is cancelled.',
        descriptionHTML:
          '<i>Comeuppance</i> will recast after the duration, or can recast early after 0.<small>5</small> seconds. <i>Comeuppance</i> is placed on a <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;5-second</span> cooldown if the channel is cancelled.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'Comeuppance is placed on a  5-second cooldown if the channel is cancelled.',
            values: 5,
            user: 'none',
            units: '',
            unitsText:
              'is placed on a  5-second cooldown if the channel is cancelled.',
            pre: 'Comeuppance is placed on a  5-second cooldown if the channel is cancelled.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Recast: Akshan fires all stored bullets at the target, each briefly granting  sight around their trajectory and dealing physical damage to the first enemy hit, increased by 0% − 300% (based on target's missing health). The shots can hit structures.",
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Akshan</b> fires all stored bullets at the target, each briefly granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> around their trajectory and dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy hit, increased by <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="target\'s missing health" data-displayformula="3% per 1% of target\'s \'\'\'missing\'\'\' health, capped at 100% \'\'\'missing\'\'\' health" data-bot_values="0;30;60;90;120;150;180;210;240;270;300" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 300% (based on target\'s <b>missing</b> health)</span></span>. The shots can hit <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Minimum Physical Damage per Bullet:',
            values:
              '20 / 22.5 / 25 / 27.5 / 30 (+ 10% AD) ×  (1 + (0.5 +  0.175) per 100% critical strike chance)',
            valuesHTML:
              '20 / 22.<small>5</small> / 25 / 27.<small>5</small> / 30 <span style="color:orange; white-space:normal">(+&nbsp;10% AD)</span><br>&nbsp;×&nbsp; <span style="color: #E56013; white-space:normal">(1 +&nbsp;(0.<small>5</small>&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="0.175"><img alt="0.175" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">0.<small>175</small></a></span></span>) per 100% critical strike chance)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Minimum Physical Damage per Bullet:',
            raw: '20 / 22.5 / 25 / 27.5 / 30 (+ 10% AD) ×  (1 + (0.5 +  0.175) per 100% critical strike chance)',
            damagetype: 'Physical',
            values: [20, 22.5, 25, 27.5, 30],
            user: 'none',
            units: '',
            unitsText: '×',
            pre: '20 / 22.5 / 25 / 27.5 / 30',
            post: '×',
            children: [
              {
                values: 10,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 10% AD',
              },
              {
                values: 1,
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
          "Each bullet's damage applies  life steal at 100% effectiveness, and  executes  minions.",
        descriptionHTML:
          'Each bullet\'s damage <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Applies life steal"><a href="/wiki/Life_steal" title="Life steal">applies</a></span> <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> at 100% effectiveness, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Execute"><a href="/wiki/Kill#Execute" title="Kill#Execute"><img alt="Death from Below.png" src="/wiki/images/Pyke_Death_from_Below.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Kill#Execute" title="Kill">executes</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: "Each bullet's damage applies  life steal at 100% effectiveness, and  executes  minions.",
            damagetype: 'None',
            values: 1,
            valuesIsPercent: true,
            units: 'lifesteal',
            unitsText:
              "effectiveness, and  executes  minions.bullet's damage applies  life steal at 100",
            pre: "Each bullet's damage applies  life steal at 100% effectiveness, and  executes  minions.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description: 'Akshan can move while channeling Comeuppance.',
        descriptionHTML:
          '<i><b>Akshan</b> can move while channeling Comeuppance.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Self, Enemies',
    damagetype: 'Physical',
    spelleffects: 'spell',
    spellshield: 'Special',
    projectile: 'true',
    callforhelp: 'false',
    notes:
      '* A kill threshold will appear on the <a href="/wiki/Health_bar" title="Health bar">health bar</a> of the target locked onto during the channel, which increases each time <b>Akshan</b> stores a bullet. If the target\'s <span style="color: #1F995C; white-space:normal"><b>current</b> health</span> falls below the threshold, their health bar will be framed in red.\n<ul><li><ul><li>The indicator factors the bonus damage applied by <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akshan" data-ability="Dirty Fighting" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akshan/LoL#Dirty_Fighting" title="Dirty Fighting"><img alt="Dirty Fighting" src="/wiki/images/Akshan_Dirty_Fighting.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akshan/LoL#Dirty_Fighting" title="Akshan/LoL">Dirty Fighting</a></span></span> as well as <a href="/wiki/Damage_modifier" title="Damage modifier">damage modifiers</a> and the target\'s resistances.</li>\n<li>It also factors the projected increase in the target\'s <span style="color: #1F995C; white-space:normal"><b>missing</b> health</span>, from which each consecutive bullet scales more.</li>\n<li>It updates dynamically over the channel\'s duration, reacting to fluctuations of the target\'s health and damage mitigations.</li></ul></li>\n<li>The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">reveal</a></span> will linger for 2 seconds after the channel has ended.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will not prevent the lock-on and will only block a single bullet.</li>\n<li><i>Comeuppance</i> will not go on a reduced cooldown if <b>Akshan</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span> during the channel.</li>\n<li><i>Comeuppance</i> will cancel if the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span> during the channel.</li>\n<li>Damage to structures <b>does</b> scale with their <span style="color: #1F995C; white-space:normal"><b>missing</b> health</span>.</li>\n<li>The following table refers for interactions while <b>Akshan</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n\n<tbody><tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akshan" data-ability="Avengerang" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akshan/LoL#Avengerang" title="Avengerang"><img alt="Avengerang" src="/wiki/images/Akshan_Avengerang.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akshan/LoL#Avengerang" title="Akshan/LoL">Avengerang</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akshan" data-ability="Going Rogue" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akshan/LoL#Going_Rogue" title="Going Rogue"><img alt="Going Rogue" src="/wiki/images/Akshan_Going_Rogue.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akshan/LoL#Going_Rogue" title="Akshan/LoL">Going Rogue</a></span></span> are disabled. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Akshan" data-ability="Heroic Swing" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Akshan/LoL#Heroic_Swing" title="Heroic Swing"><img alt="Heroic Swing" src="/wiki/images/Akshan_Heroic_Swing.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Akshan/LoL#Heroic_Swing" title="Akshan/LoL">Heroic Swing</a></span></span> is usable.\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Allowed\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All items are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Akshan_Original_R_1.ogg   "Here comes the \'uppance!"',
  },
} satisfies { [skillName in string]: SkillData };
