import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Quinn';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Quinn_Harrier.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Quinn\'s</b> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Blinding Assault" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Blinding_Assault" title="Blinding Assault"><img alt="Blinding Assault" src="/wiki/images/Quinn_Blinding_Assault.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Blinding_Assault" title="Quinn/LoL">Blinding Assault</a></span></span> against the primary target, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Vault" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Vault" title="Vault"><img alt="Vault" src="/wiki/images/Quinn_Vault.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Vault" title="Quinn/LoL">Vault</a></span></span>, and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Skystrike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Skystrike" title="Skystrike"><img alt="Skystrike" src="/wiki/images/Quinn_Skystrike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Skystrike" title="Quinn/LoL">Skystrike</a></span></span> mark enemies hit with <i>Vulnerable</i> for 4 seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span>. If no <i>Vulnerable</i> target exists for 1 second, <b><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL" title="Valor"><img alt="Valor" src="/wiki/images/ValorSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><strong class="mw-selflink selflink">Valor</strong></span></span></b> automatically marks a nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy. He cannot do this again for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#E56013;" data-top_label="critical strike chance" data-displayformula="8*(0.99^critical strike chance %)" data-bot_values="8;7.24;6.54;5.92;5.35;4.84;4.38;3.96;3.58;3.24;2.93" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-top_key="%">8 − 2.<small>93</small> (based on critical strike chance)</span> seconds after the mark expired or was consumed or overwritten by another mark.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 3:',
        raw: ' He cannot do this again for 8 − 2',
        values: [8, 2],
        user: 'none',
        units: '',
        unitsText: 'cannot do this again for 8',
        pre: 'He cannot do this again for 8 − 2',
      },
      {
        effectType: 'Unique',
        name: 'Line 4:',
        raw: '93 (based on critical strike chance) seconds after the mark expired or was consumed or overwritten by another mark',
        values: 93,
        user: 'player',
        units: 'kindredMarks',
        unitsText:
          'seconds after the mark expired or was consumed or overwritten by another mark',
        pre: '93',
        post: 'seconds after the mark expired or was consumed or overwritten by another mark',
        children: [
          {
            values: 0,
            user: 'player',
            units: 'base_critchance',
            unitsText: 'based on critical strike chance',
            pre: 'based on critical strike chance',
          },
        ],
      },
    ],
  },
  {
    description:
      '<b>Quinn\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> against <i>Vulnerable</i> targets are empowered to consume the mark to deal <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#FF8C34;" data-start="10;" data-finish="95;" data-bot_values="10;15;20;25;30;35;40;45;50;55;60;65;70;75;80;85;90;95" data-top_values="">10 − 95 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="16;" data-finish="50;" data-bot_values="16;18;20;22;24;26;28;30;32;34;36;38;40;42;44;46;48;50" data-top_values="" data-bot_key="%">16% − 50% (based on level)</span> AD)</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: "Quinn's basic attacks against Vulnerable targets are empowered to consume the mark to deal 10 − 95 (based on level) (+ 16% − 50% (based on level) AD) bonus physical damage",
        values: [
          10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90,
          95,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'bonus physical damage',
        pre: "Quinn's basic attacks against Vulnerable targets are empowered to consume the mark to deal 10 − 95",
        post: 'bonus physical damage',
        children: [
          {
            values: [],
            valuesIsPercent: true,
            valuesIsBasedOnLevel: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 16% − 50%',
            post: 'AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'While <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Behind Enemy Lines" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Behind_Enemy_Lines" title="Behind Enemy Lines"><img alt="Behind Enemy Lines" src="/wiki/images/Quinn_Behind_Enemy_Lines.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Behind_Enemy_Lines" title="Quinn/LoL">Behind Enemy Lines</a></span></span></i> is active, <i>Harrier</i> is disabled and all <i>Vulnerable</i> marks are removed.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Quinn_Blinding_Assault.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Quinn</b> sends <b><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL" title="Valor"><img alt="Valor" src="/wiki/images/ValorSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><strong class="mw-selflink selflink">Valor</strong></span></span></b> in the target direction who stops upon hitting an enemy, marking them as <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Harrier" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Harrier" title="Vulnerable"><img alt="Vulnerable" src="/wiki/images/Quinn_Harrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Harrier" title="Quinn/LoL">Vulnerable</a></span></span></i> and dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to all nearby enemies.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '20 / 45 / 70 / 95 / 120 (+ 80 / 90 / 100 / 110 / 120% AD) (+ 50% AP)',
        values: [20, 45, 70, 95, 120],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 45 / 70 / 95 / 120',
        children: [
          {
            values: [80, 90, 100, 110, 120],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 80 / 90 / 100 / 110 / 120% AD',
          },
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
  {
    description:
      'If the primary target was a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, they become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Nearsight"><a href="/wiki/Nearsight" title="Nearsight"><img alt="Nearsight icon.png" src="/wiki/images/Nearsight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Nearsight" class="mw-redirect" title="Nearsight">nearsighted</a></span> for 1.<small>75</small> seconds, otherwise they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Disarm"><a href="/wiki/Disarm" title="Disarm"><img alt="Disarm icon.png" src="/wiki/images/Disarm_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Disarm" class="mw-redirect" title="Disarm">disarmed</a></span> instead.',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> Whenever <b>Quinn</b> uses a basic attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> against a <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Harrier" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Harrier" title="Vulnerable"><img alt="Vulnerable" src="/wiki/images/Quinn_Harrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Harrier" title="Quinn/LoL">Vulnerable</a></span></span></i> target or consumes their mark, she gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> and <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for 2 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Attack Speed:',
        raw: '28 / 36 / 44 / 52 / 60%',
        values: [28, 36, 44, 52, 60],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '28 / 36 / 44 / 52 / 60%',
      },
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed:',
        raw: '20 / 25 / 30 / 35 / 40%',
        values: [20, 25, 30, 35, 40],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 25 / 30 / 35 / 40%',
      },
    ],
  },
  {
    img: '/wiki/images/Quinn_Heightened_Senses.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL" title="Valor"><img alt="Valor" src="/wiki/images/ValorSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><strong class="mw-selflink selflink">Valor</strong></span></span> grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the surrounding area for 2 seconds and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">reveals</a></span> enemy champions within for the same duration.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Quinn_Vault.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Quinn</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target enemy, marking them as <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Harrier" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Harrier" title="Vulnerable"><img alt="Vulnerable" src="/wiki/images/Quinn_Harrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Harrier" title="Quinn/LoL">Vulnerable</a></span></span></i>, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them back</a></span>, though not through terrain, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 50% decaying over 1.<small>5</small> seconds. She then <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaps back</a></span> 525 units away from them.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical damage:',
        raw: '40 / 70 / 100 / 130 / 160 (+ 20% bonus AD)',
        values: [40, 70, 100, 130, 160],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 70 / 100 / 130 / 160',
        children: [
          {
            values: 20,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 20% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Heightened Senses" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Heightened_Senses" title="Heightened Senses"><img alt="Heightened Senses" src="/wiki/images/Quinn_Heightened_Senses.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Heightened_Senses" title="Quinn/LoL">Heightened Senses</a></span></span> can be cast during either of the dashes.</i>',
    leveling: [],
  },
];
const R1: SubSkill[] = [
  {
    img: '/wiki/images/Quinn_Behind_Enemy_Lines.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Quinn</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channels"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for 2 seconds, signaling <b><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL" title="Valor"><img alt="Valor" src="/wiki/images/ValorSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><strong class="mw-selflink selflink">Valor</strong></span></span></b> to pair up. Upon completion, he picks her up and they unite, increasing her <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Increases base movement as well as bonus movement speed"><b>total</b> movement speed</span></span></span>, granting her <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span>, and allowing her to cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Skystrike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Skystrike" title="Skystrike"><img alt="Skystrike" src="/wiki/images/Quinn_Skystrike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Skystrike" title="Quinn/LoL">Skystrike</a></span></span></i>. <i>Behind Enemy Lines</i> can be recast after 0.<small>5</small> seconds during the channel.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Total Movement Speed Increase:',
        raw: '70 / 100 / 130%',
        values: [70, 100, 130],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 100 / 130%',
      },
    ],
  },
  {
    description:
      'Taking damage from non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> while <i>Behind Enemy Lines</i> is active or while <b>Quinn</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span> the ability causes her to lose the <span style="color: #F5EE99; white-space:normal"><b>bonus total</b> movement speed</span> for 3 seconds. Becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span>, or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">silenced</a></span> ends <i>Behind Enemy Lines</i> immediately and puts it on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> without performing <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Skystrike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Skystrike" title="Skystrike"><img alt="Skystrike" src="/wiki/images/Quinn_Skystrike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Skystrike" title="Quinn/LoL">Skystrike</a></span></span></i>.',
    leveling: [],
  },
  {
    description:
      'Once <i>Behind Enemy Lines</i> has been learned, <a href="/wiki/Death" title="Death">respawning</a> or returning to the allied <a href="/wiki/Spawn" title="Spawn">summoning platform</a> will spawn <b><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL" title="Valor"><img alt="Valor" src="/wiki/images/ValorSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><strong class="mw-selflink selflink">Valor</strong></span></span></b> instantly.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Quinn</b> cancels the channel, placing <i>Behind Enemy Lines</i> on cooldown.',
    leveling: [],
  },
];
const R2: SubSkill[] = [
  {
    img: '/wiki/images/Quinn_Skystrike.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Quinn</b> detaches from <b>Valor</b>, ending <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Behind Enemy Lines" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Behind_Enemy_Lines" title="Behind Enemy Lines\'"><img alt="Behind Enemy Lines\'" src="/wiki/images/Quinn_Behind_Enemy_Lines.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Behind_Enemy_Lines" title="Quinn/LoL">Behind Enemy Lines\'</a></span></span></i> effects and raining arrows down around her, dealing <span style="color:orange; white-space:normal">70% AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies and marking them as <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Harrier" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Harrier" title="Vulnerable"><img alt="Vulnerable" src="/wiki/images/Quinn_Harrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Harrier" title="Quinn/LoL">Vulnerable</a></span></span></i>.',
    leveling: [],
  },
  {
    description:
      'Declaring a <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> or casting <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Blinding Assault" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Blinding_Assault" title="Blinding Assault"><img alt="Blinding Assault" src="/wiki/images/Quinn_Blinding_Assault.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Blinding_Assault" title="Quinn/LoL">Blinding Assault</a></span></span></i> or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Vault" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Vault" title="Vault"><img alt="Vault" src="/wiki/images/Quinn_Vault.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Vault" title="Quinn/LoL">Vault</a></span></span></i> during <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Quinn" data-ability="Behind Enemy Lines" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Quinn/LoL#Behind_Enemy_Lines" title="Behind Enemy Lines"><img alt="Behind Enemy Lines" src="/wiki/images/Quinn_Behind_Enemy_Lines.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Quinn/LoL#Behind_Enemy_Lines" title="Quinn/LoL">Behind Enemy Lines</a></span></span></i> automatically activates <i>Skystrike</i>.',
    leveling: [],
  },
];
export const Quinn = { I, Q, W, E, R1, R2 };
