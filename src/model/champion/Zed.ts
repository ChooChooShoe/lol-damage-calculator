import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Zed';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Zed_Contempt_for_the_Weak.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Zed\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> against targets <span style="color: #1F995C; white-space:normal">below 50% <b>maximum</b> health</span> are empowered to deal <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="6;8;10" data-top_values="1;7;17" data-bot_key="%">6 / 8 / 10% (based on level)</span> of the target\'s <b>maximum</b> health</span> as <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: " Zed's basic attacks against targets below 50% maximum health are empowered to deal 6 / 8 / 10% (based on level) of the target's maximum health as bonus magic damage",
        healType: 'OutgoingHeals',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of the target's maximum health as bonus magic damage",
        pre: "Zed's basic attacks against targets below 50% maximum health are empowered to deal 6 / 8 / 10%",
        post: "of the target's maximum health as bonus magic damage",
      },
    ],
  },
  {
    description:
      'Against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, <i>Contempt for the Weak</i> deals 200% damage, capped at 300.',
    leveling: [],
  },
  {
    description:
      '<i>Contempt for the Weak</i> cannot occur on the same <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> more than once every few seconds.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Zed_Razor_Shuriken.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Zed</b> throws a shuriken in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit, reduced to 60% against targets beyond the first.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '70 / 105 / 140 / 175 / 210 (+ 110% bonus AD)',
        values: [70, 105, 140, 175, 210],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 105 / 140 / 175 / 210',
        children: [
          {
            values: 110,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 110% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Reduced Damage:',
        raw: '42 / 63 / 84 / 105 / 126 (+ 66% bonus AD)',
        values: [42, 63, 84, 105, 126],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '42 / 63 / 84 / 105 / 126',
        children: [
          {
            values: 66,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 66% bonus AD',
          },
        ],
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Zed</b> restores <span style="white-space:nowrap"><a href="/wiki/Energy" title="Energy"><img alt="Energy icon.png" src="/wiki/images/Energy_icon.png" decoding="async" loading="lazy" width="15" height="16" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">energy</span></span> whenever he and his <a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Zed%27s_Shadow.png/revision/latest?cb=20180818091903" class="image"><img alt="Zed\'s Shadow.png" src="/wiki/images/Zed%27s_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> <i>Shadows</i> or multiple <i>Shadows</i> hit an ability on the same target. This may only occur once per cast ability.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Energy Restored:',
        raw: '30 / 35 / 40 / 45 / 50',
        values: [30, 35, 40, 45, 50],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 35 / 40 / 45 / 50',
      },
    ],
  },
  {
    img: '/wiki/images/Zed_Living_Shadow.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Zed</b> creates a <a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Zed%27s_Shadow.png/revision/latest?cb=20180818091903" class="image"><img alt="Zed\'s Shadow.png" src="/wiki/images/Zed%27s_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> <i>Shadow</i> that dashes to the target location and remains there for 5.<small>25</small> seconds, being able to mimic <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zed" data-ability="Razor Shuriken" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zed/LoL#Razor_Shuriken" title="Razor Shuriken"><img alt="Razor Shuriken" src="/wiki/images/Zed_Razor_Shuriken.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zed/LoL#Razor_Shuriken" title="Zed/LoL">Razor Shuriken</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zed" data-ability="Shadow Slash" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zed/LoL#Shadow_Slash" title="Shadow Slash"><img alt="Shadow Slash" src="/wiki/images/Zed_Shadow_Slash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zed/LoL#Shadow_Slash" title="Zed/LoL">Shadow Slash</a></span></span></i> regardless of range. <i>Living Shadow</i> can be recast while within range of the <i>Shadow</i>.',
    leveling: [],
  },
  {
    img: '/wiki/images/Zed_Living_Shadow_2.png',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Zed</b> and the <a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Zed%27s_Shadow.png/revision/latest?cb=20180818091903" class="image"><img alt="Zed\'s Shadow.png" src="/wiki/images/Zed%27s_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> <i>Shadow</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blink</a></span> to swap places. If <i>Living Shadow</i> was recast while the <i>Shadow</i> is dashing, the recast will instead occur once it has been placed.',
    leveling: [],
  },
  {
    description:
      '<i>If an ability is cast while the Shadow is dashing, it will cast that ability once it has been placed. See <a href="/wiki/Zed/LoL#Pets" title="Zed/LoL">Pets</a> for more details about Shadows. Living Shadow will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Zed_Shadow_Slash.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Zed</b> slashes to deal <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '65 / 85 / 105 / 125 / 145 (+ 65% bonus AD)',
        values: [65, 85, 105, 125, 145],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '65 / 85 / 105 / 125 / 145',
        children: [
          {
            values: 65,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 65% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'Enemies hit by a <a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Zed%27s_Shadow.png/revision/latest?cb=20180818091903" class="image"><img alt="Zed\'s Shadow.png" src="/wiki/images/Zed%27s_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> <i>Shadow\'s</i> slash are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> for 1.<small>5</small> seconds, with multiple slashes dealing no additional damage but the slow\'s effectiveness being increased by 50%.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Slow:',
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
        name: 'Enhanced Slow:',
        raw: '30 / 37.5 / 45 / 52.5 / 60%',
        values: [30, 37.5, 45, 52.5, 60],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 37.5 / 45 / 52.5 / 60%',
      },
    ],
  },
  {
    description:
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zed" data-ability="Living Shadow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zed/LoL#Living_Shadow" title="Living Shadow\'s"><img alt="Living Shadow\'s" src="/wiki/images/Zed_Living_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zed/LoL#Living_Shadow" title="Zed/LoL">Living Shadow\'s</a></span></span></i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> is reduced by 2 seconds for each enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> hit by <b>Zed\'s</b> slash.',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Zed_Death_Mark.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Zed</b> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> and, after 0.<small>6</small> seconds, he <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> 125 units through the target enemy champion over 0.<small>35</small> seconds. Afterwards, he becomes targetable again, renders them <i>Marked for Death</i> for 3 seconds, and gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghost"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span> for the same duration.',
    leveling: [],
  },
  {
    description:
      '<b>Zed</b> also spawns a <a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Zed%27s_Shadow.png/revision/latest?cb=20180818091903" class="image"><img alt="Zed\'s Shadow.png" src="/wiki/images/Zed%27s_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> <i>Shadow</i> at his casting position for 9 seconds which is able to mimic <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zed" data-ability="Razor Shuriken" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zed/LoL#Razor_Shuriken" title="Razor Shuriken"><img alt="Razor Shuriken" src="/wiki/images/Zed_Razor_Shuriken.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zed/LoL#Razor_Shuriken" title="Zed/LoL">Razor Shuriken</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zed" data-ability="Shadow Slash" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zed/LoL#Shadow_Slash" title="Shadow Slash"><img alt="Shadow Slash" src="/wiki/images/Zed_Shadow_Slash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zed/LoL#Shadow_Slash" title="Zed/LoL">Shadow Slash</a></span></span></i> regardless of range. <i>Death Mark</i> can be recast after 0.<small>5</small> seconds of his reappearance while the <a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Zed%27s_Shadow.png/revision/latest?cb=20180818091903" class="image"><img alt="Zed\'s Shadow.png" src="/wiki/images/Zed%27s_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> <i>Shadow</i> is active, though not in the last 1.<small>25</small> seconds of its duration.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Marked for Death:</b></span> <b>Zed</b> stores a portion of all <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated before modifiers">pre-mitigation</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span style="color: #00B0F0; white-space:normal">magic damage</span> he and his <a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Zed%27s_Shadow.png/revision/latest?cb=20180818091903" class="image"><img alt="Zed\'s Shadow.png" src="/wiki/images/Zed%27s_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> <i>Shadows</i> deal to the target, detonating at the end of the duration to deal <span style="color: #FF8C34; white-space:normal">physical damage</span>.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Physical Damage:',
        raw: '65% AD (+ 25 / 40 / 55% of damage dealt)',
        damagetype: 'None',
        values: 65,
        valuesIsPercent: true,
        user: 'player',
        units: 'total_ad',
        unitsText: 'AD',
        pre: '65% AD',
        children: [
          {
            values: [25, 40, 55],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'of damage dealt',
            pre: '+ 25 / 40 / 55% of damage dealt',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Zed_Death_Mark_2.png',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Zed</b> and the <a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Zed%27s_Shadow.png/revision/latest?cb=20180818091903" class="image"><img alt="Zed\'s Shadow.png" src="/wiki/images/Zed%27s_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> <i>Shadow</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blink</a></span> to swap places.',
    leveling: [],
  },
  {
    description:
      '<i>If the target dies or is 1950 or more units away before the dash begins, Death Mark is cancelled, goes on a <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;0.<small>5</small>-second</span> cooldown, and <b>Zed</b> reappears at the cast location. The <a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Zed%27s_Shadow.png/revision/latest?cb=20180818091903" class="image"><img alt="Zed\'s Shadow.png" src="/wiki/images/Zed%27s_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> Shadow spawned also disappears.</i>',
    leveling: [],
  },
];
export const Zed = { I, Q, W, E, R };
