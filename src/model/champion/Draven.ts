import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Draven';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Draven_League_of_Draven.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> When <b>Draven</b> catches a <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Draven" data-ability="Spinning Axe" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Draven/LoL#Spinning_Axe" title="Spinning Axe"><img alt="Spinning Axe" src="/wiki/images/Draven_Spinning_Axe.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Draven/LoL#Spinning_Axe" title="Draven/LoL">Spinning Axe</a></span></span></i>, kills a non-champion, or destroys a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span>, he gains a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Adoration</i>.',
    leveling: [],
  },
  {
    description:
      'Additionally, whenever <b>Draven</b> kills a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span> or destroys a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ward"><a href="/wiki/Ward" title="Ward"><img alt="Ward icon.png" src="/wiki/images/Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ward" title="Ward">ward</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stealthed trap"><a href="/wiki/Stealth#Stealthed_traps_and_wards" title="Stealth#Stealthed traps and wards"><img alt="Noxious Trap.png" src="/wiki/images/Teemo_Noxious_Trap.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Stealthed_traps_and_wards" title="Stealth">trap</a></span>, he generates a <a href="https://static.wikia.nocookie.net/leagueoflegends/images/e/ee/Draven_Whirling_Death.png/revision/latest?cb=20130929122743" class="image"><img alt="Strike.png" src="/wiki/images/Draven_Whirling_Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <i>Strike</i> stack for 10 seconds, refreshing on subsequent kills and stacking up to 6 times. All <i>Strike</i> stacks are lost if he drops an <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Draven" data-ability="Spinning Axe" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Draven/LoL#Spinning_Axe" title="axe"><img alt="axe" src="/wiki/images/Draven_Spinning_Axe.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Draven/LoL#Spinning_Axe" title="Draven/LoL">axe</a></span></span></i> or a nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span> dies without him killing it. The sixth stack consumes all stacks to grant him 2 <i>Adoration</i> stacks.',
    leveling: [],
  },
  {
    description:
      'When <b>Draven</b> kills an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, he consumes all of his <i>Adoration</i> stacks and gains <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="40 + (2.5&nbsp;×&nbsp;stacks) bonus gold Gold"><img alt="40 + (2.5&nbsp;×&nbsp;stacks) bonus gold Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">40 + (2.<small></small><small>5</small>&nbsp;×&nbsp;stacks) <b>bonus</b> gold</span></span>.',
    leveling: [],
  },
  {
    description:
      '<b>Draven</b> loses 75% of his <i>Adoration</i> stacks upon <a href="/wiki/Death" title="Death">death</a>.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Draven_Spinning_Axe.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Draven</b> starts spinning his axe, empowering his next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> within 5.<small>8</small> seconds to deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Physical Damage:',
        raw: '40 / 45 / 50 / 55 / 60 (+ 75 / 85 / 95 / 105 / 115% bonus AD)',
        values: [40, 45, 50, 55, 60],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 45 / 50 / 55 / 60',
        children: [
          {
            values: [75, 85, 95, 105, 115],
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 75 / 85 / 95 / 105 / 115% bonus AD',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Draven_Axe_Indicator.png',
    description:
      'Upon hitting the target, the axe then ricochets off of them to land after 2 seconds, with the location being determined by <b>Draven\'s</b> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="See notes">current movement</span>. If <b>Draven</b> catches the axe, he gains <i>Spinning Axe\'s</i> empowered attack again.',
    leveling: [],
  },
  {
    description:
      '<b>Draven</b> can hold up to two <i>Spinning Axes</i> at once.',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Draven_Blood_Rush.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Draven</b> enters an adrenaline rush, gaining <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for 3 seconds as well as decaying <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosting"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span> for 1.<small>5</small> seconds.',
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
        name: 'Bonus Movement Speed:',
        raw: '50 / 55 / 60 / 65 / 70%',
        values: [50, 55, 60, 65, 70],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 55 / 60 / 65 / 70%',
      },
    ],
  },
  {
    description:
      'Catching a <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Draven" data-ability="Spinning Axe" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Draven/LoL#Spinning_Axe" title="Spinning Axe"><img alt="Spinning Axe" src="/wiki/images/Draven_Spinning_Axe.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Draven/LoL#Spinning_Axe" title="Draven/LoL">Spinning Axe</a></span></span></i> resets <i>Blood Rush\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Draven_Stand_Aside.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Draven</b> throws a fan of axes in a line in the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them aside</a></span>, though not through terrain, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them for 2 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '75 / 110 / 145 / 180 / 215 (+ 50% bonus AD)',
        values: [75, 110, 145, 180, 215],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '75 / 110 / 145 / 180 / 215',
        children: [
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 50% bonus AD',
          },
        ],
      },
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
    ],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Draven_Whirling_Death.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Draven</b> hurls two massive axes in the target direction that briefly grant <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of their surroundings and deal <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit. Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> that would have <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">health</span></span> left within the current number of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Draven" data-ability="League of Draven" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Draven/LoL#League_of_Draven" title="League of Draven"><img alt="League of Draven" src="/wiki/images/Draven_League_of_Draven.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Draven/LoL#League_of_Draven" title="Draven/LoL">League of Draven</a></span></span></i> stacks are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Execute"><a href="/wiki/Kill#Execute" title="Kill#Execute"><img alt="Death from Below.png" src="/wiki/images/Pyke_Death_from_Below.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Kill#Execute" title="Kill">executed</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '175 / 275 / 375 (+ 110 / 130 / 150% bonus AD)',
        values: [175, 275, 375],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '175 / 275 / 375',
        children: [
          {
            values: [110, 130, 150],
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 110 / 130 / 150% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Physical Damage:',
        raw: '350 / 550 / 750 (+ 220 / 260 / 300% bonus AD)',
        values: [350, 550, 750],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '350 / 550 / 750',
        children: [
          {
            values: [220, 260, 300],
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 220 / 260 / 300% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Whirling Death</i> can be recast after 1 second while the axes are traveling, and does so automatically after the axes hit an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or the edge of the <a href="/wiki/Map_(League_of_Legends)" title="Map (League of Legends)">map</a>.',
    leveling: [],
  },
  {
    img: '/wiki/images/Draven_Whirling_Death_2.png',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Draven</b> forces the axes to reverse direction, slowly coming to a stop before homing back to him, dealing the same damage to enemies hit.',
    leveling: [],
  },
  {
    description:
      '<i>Whirling Death</i> deals <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="enemies hit" data-displayformula="(100%-8%)^(1 per enemy hit). \'\'This is capped at 40% damage.\'\'" data-bot_values="100;92;84.64;77.87;71.64;65.91;60.64;55.78;51.32;47.22;43.44;40" data-top_values="0;1;2;3;4;5;6;7;8;9;10;11" data-bot_key="%">100% − 40% (based on enemies hit)</span> damage, resetting upon reversing direction.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: 'Whirling Death deals 100% − 40% (based on enemies hit) damage, resetting upon reversing direction',
        damagetype: 'None',
        values: 1,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: 'damage, resetting upon reversing direction',
        pre: 'Whirling Death deals 100% − 40%',
        post: 'damage, resetting upon reversing direction',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on enemies hit',
            pre: 'based on enemies hit',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Minimum Physical Damage:',
        raw: '70 / 110 / 150 (+ 44 / 52 / 60% bonus AD)',
        values: [70, 110, 150],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 110 / 150',
        children: [
          {
            values: [44, 52, 60],
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 44 / 52 / 60% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Minimum Total Damage:',
        raw: '140 / 220 / 300 (+ 88 / 104 / 120% bonus AD)',
        values: [140, 220, 300],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '140 / 220 / 300',
        children: [
          {
            values: [88, 104, 120],
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 88 / 104 / 120% bonus AD',
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
export const Draven = { I, Q, W, E, R };
