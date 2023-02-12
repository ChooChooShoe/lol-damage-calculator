import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Jinx';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Jinx_Get_Excited%21.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Whenever <b>Jinx</b> scores a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span>, or <a href="/wiki/Inhibitor" title="Inhibitor">inhibitor</a> within 3 seconds of damaging them, she gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">175% <b>bonus</b> movement speed</span></span> decaying over 6 seconds.',
    leveling: [],
  },
  {
    description:
      'Additionally, she gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">25% <b>total</b> attack speed</span></span> and is allowed to exceed the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="normally 2.5 attacks per second">attack speed cap</span> for the same duration.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Toggle:</b></span> <b>Jinx</b> switches between <i><span class="inline-image label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jinx#Pow-Pow" title="Pow-Pow"><img alt="Pow-Pow" src="/wiki/images/Jinx_Pow-Pow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jinx#Pow-Pow" title="Jinx">Pow-Pow</a></span></span></i>, her minigun, and <i><span class="inline-image label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jinx#Fishbones" title="Fishbones"><img alt="Fishbones" src="/wiki/images/Jinx_Switcheroo%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jinx#Fishbones" title="Jinx">Fishbones</a></span></span></i>, her rocket launcher.',
    leveling: [],
  },
  {
    img: '/wiki/images/Jinx_Pow-Pow.png',
    description:
      '<span class="template_sbc"><b>Pow-Pow:</b></span> Basic attacks with <i>Pow-Pow</i> generate a <a href="/wiki/Stack" title="Stack">stack</a> of <a href="https://static.wikia.nocookie.net/leagueoflegends/images/e/e8/Jinx_Rev%27d_up.png/revision/latest?cb=20171221042956" class="image"><img alt="Jinx Rev\'d up.png" src="/wiki/images/Jinx_Rev%27d_up.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <i>Rev\'d up</i> for 2.<small>5</small> seconds, refreshing on subsequent attacks with <i>Pow-Pow</i> and stacking up to 3 times. Each stack of <i>Rev\'d up</i> grants <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>, with all stacks beyond the first one being 50% effective. Stacks expire by one when the duration ends.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Attack Speed:',
        raw: '15 / 27.5 / 40 / 52.5 / 65%',
        values: [15, 27.5, 40, 52.5, 65],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 27.5 / 40 / 52.5 / 65%',
      },
      {
        effectType: 'Unique',
        name: 'Attack Speed per Subsequent Stack:',
        raw: '7.5 / 13.75 / 20 / 26.25 / 32.5%',
        values: [7.5, 13.75, 20, 26.25, 32.5],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '7.5 / 13.75 / 20 / 26.25 / 32.5%',
      },
      {
        effectType: 'Unique',
        name: 'Maximum Attack Speed:',
        raw: '30 / 55 / 80 / 105 / 130%',
        values: [30, 55, 80, 105, 130],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 55 / 80 / 105 / 130%',
      },
    ],
  },
  {
    img: '/wiki/images/Jinx_Switcheroo%21.png',
    description:
      '<span class="template_sbc"><b>Fishbones:</b></span> Basic attacks with <i>Fishbones</i> cost <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana</span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> to deal <span style="color:orange; white-space:normal">110% AD</span> <span style="color: #FF8C34; white-space:normal"><b>modified</b> physical damage</span> to the target and nearby enemies. The damage is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers. While <i>Fishbones</i> is equipped, <b>Jinx</b> gains <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> range</span> but loses <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">10% of her <b>bonus</b> attack speed</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Range:',
        raw: '80 / 110 / 140 / 170 / 200',
        values: [80, 110, 140, 170, 200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 110 / 140 / 170 / 200',
      },
    ],
  },
  {
    description:
      '<i>Only the first attack after switching to </i>Fishbones<i> will benefit from <a href="https://static.wikia.nocookie.net/leagueoflegends/images/e/e8/Jinx_Rev%27d_up.png/revision/latest?cb=20171221042956" class="image"><img alt="Jinx Rev\'d up.png" src="/wiki/images/Jinx_Rev%27d_up.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Rev\'d up</i>.',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Jinx_Zap%21.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Jinx</b> fires a shock blast in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy it hits and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">reveals</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for 2 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '10 / 60 / 110 / 160 / 210 (+ 160% AD)',
        values: [10, 60, 110, 160, 210],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 60 / 110 / 160 / 210',
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
      {
        effectType: 'Unique',
        name: 'Slow:',
        raw: '30 / 40 / 50 / 60 / 70%',
        values: [30, 40, 50, 60, 70],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 40 / 50 / 60 / 70%',
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Jinx_Flame_Chompers%21.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Jinx</b> tosses out 3 <i>Chompers</i> centered at the target location, landing after 0.<small>4</small> seconds, arming after 0.<small>5</small> seconds, and exploding after 5 seconds to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 120 / 170 / 220 / 270 (+ 100% AP)',
        values: [70, 120, 170, 220, 270],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 120 / 170 / 220 / 270',
        children: [
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
    img: '/wiki/images/Jinx_Flame_Chompers%21_2.png',
    description:
      'Each <i>Chomper</i> explodes on contact with an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocking them down</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooting</a></span> them for 1.<small>5</small> seconds. Enemy champions can be affected by only one <i>Chomper</i>.',
    leveling: [],
  },
  {
    description:
      '<i>Flame Chompers! will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Jinx_Super_Mega_Death_Rocket%21.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Jinx</b> fires a massive rocket in the target direction, briefly granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of its <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cannot grant sight into brush nor through terrain">surroundings</span> and exploding upon colliding with an enemy champion. The explosion deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="centered on the initial target">nearby</span> enemies and grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Can grant sight into brush and through terrain">area</span> for 2 seconds.',
    leveling: [],
  },
  {
    description:
      '<i>Super Mega Death Rocket!</i> deals <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="distance traveled" data-start="10;0" data-finish="100;1500" data-bot_values="10;16;22;28;34;40;46;52;58;64;70;76;82;88;94;100" data-top_values="0;100;200;300;400;500;600;700;800;900;1000;1100;1200;1300;1400;1500" data-bot_key="%">10% − 100% (based on distance traveled)</span> damage. This does not affect the <b>bonus</b> damage based on the <span style="color: #1F995C; white-space:normal">target\'s <b>missing</b> health</span>.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: 'Super Mega Death Rocket! deals 10% − 100% (based on distance traveled) damage',
        damagetype: 'None',
        values: 1,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: 'damage',
        pre: 'Super Mega Death Rocket! deals 10% − 100%',
        post: 'damage',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on distance traveled',
            pre: 'based on distance traveled',
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Maximum Physical Damage:',
        raw: "300 / 450 / 600 (+ 150% bonus AD) (+ 25 / 30 / 35% of target's missing health)",
        healType: 'OutgoingHeals',
        values: [300, 450, 600],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '300 / 450 / 600',
        children: [
          {
            values: 150,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 150% bonus AD',
          },
          {
            values: [25, 30, 35],
            valuesIsPercent: true,
            user: 'target',
            units: 'missing_hp',
            unitsText: "of target's missing health",
            pre: "+ 25 / 30 / 35% of target's missing health",
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Minimum Physical Damage:',
        raw: "30 / 45 / 60 (+ 15% bonus AD) (+ 25 / 30 / 35% of target's missing health)",
        healType: 'OutgoingHeals',
        values: [30, 45, 60],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 45 / 60',
        children: [
          {
            values: 15,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 15% bonus AD',
          },
          {
            values: [25, 30, 35],
            valuesIsPercent: true,
            user: 'target',
            units: 'missing_hp',
            unitsText: "of target's missing health",
            pre: "+ 25 / 30 / 35% of target's missing health",
          },
        ],
      },
    ],
  },
  {
    description:
      'Enemies surrounding the primary target take 80% damage. The <b>bonus</b> damage based on the <span style="color: #1F995C; white-space:normal">target\'s <b>missing</b> health</span> is capped at 800 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Maximum Secondary Damage:',
        raw: "240 / 360 / 480 (+ 120% bonus AD) (+ 20 / 24 / 28% of target's missing health)",
        healType: 'OutgoingHeals',
        values: [240, 360, 480],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '240 / 360 / 480',
        children: [
          {
            values: 120,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 120% bonus AD',
          },
          {
            values: [20, 24, 28],
            valuesIsPercent: true,
            user: 'target',
            units: 'missing_hp',
            unitsText: "of target's missing health",
            pre: "+ 20 / 24 / 28% of target's missing health",
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Minimum Secondary Damage:',
        raw: "24 / 36 / 48 (+ 12% bonus AD) (+ 20 / 24 / 28% of target's missing health)",
        healType: 'OutgoingHeals',
        values: [24, 36, 48],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '24 / 36 / 48',
        children: [
          {
            values: 12,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 12% bonus AD',
          },
          {
            values: [20, 24, 28],
            valuesIsPercent: true,
            user: 'target',
            units: 'missing_hp',
            unitsText: "of target's missing health",
            pre: "+ 20 / 24 / 28% of target's missing health",
          },
        ],
      },
    ],
  },
];
export const Jinx = { I, Q, W, E, R };
