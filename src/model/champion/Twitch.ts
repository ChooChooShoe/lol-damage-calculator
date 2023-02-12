import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Twitch';
const I: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Twitch\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> apply a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Deadly Venom</i> for 6 seconds, refreshing on subsequent applications and stacking up to 6 times.',
    leveling: [],
  },
  {
    img: '/wiki/images/Twitch_Deadly_Venom.png',
    description:
      '<span class="template_sbc"><b>Deadly Venom:</b></span> For each stack, the target is dealt<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="1 every 4 levels" data-bot_values="1;2;3;4;5" data-top_values="1;5;9;13;17">1 / 2 / 3 / 4 / 5 (based on level)</span></span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;3% AP)</span> <span style="color: #F9966B; white-space:normal">true damage</span> per second over the duration,&nbsp;」</span><span class="flipText2">「&nbsp;<span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="1 every 4 levels" data-bot_values="6;12;18;24;30" data-top_values="1;5;9;13;17">6 / 12 / 18 / 24 / 30 (based on level)</span></span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;18% AP)</span> <span style="color: #F9966B; white-space:normal"><b>total</b> true damage</span> over the duration,&nbsp;」</span></span>for a maximum of<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color: #F9966B; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="6 every 4 levels" data-bot_values="6;12;18;24;30" data-top_values="1;5;9;13;17">6 / 12 / 18 / 24 / 30 (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;18% AP)</span> <span style="color: #F9966B; white-space:normal">true damage</span> with each tick.&nbsp;」</span><span class="flipText2">「&nbsp;<span style="color: #F9966B; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="6 every 4 levels" data-bot_values="36;72;108;144;180" data-top_values="1;5;9;13;17">36 / 72 / 108 / 144 / 180 (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;108% AP)</span> <span style="color: #F9966B; white-space:normal"><b>total</b> true damage</span> over the duration.&nbsp;」</span></span>This effect is considered a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Poison"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL"><img alt="Poison icon.png" src="/wiki/images/Poison_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL">poison</a></span>.',
    leveling: [
      {
        effectType: 'Stacks',
        name: 'Line 1:',
        raw: ' For each stack, the target is dealt「  1 / 2 / 3 / 4 / 5 (based on level) (+ 3% AP) true damage per second over the duration, 」「  6 / 12 / 18 / 24 / 30 (based on level) (+ 18% AP) total true damage over the duration, 」for a maximum of「 6 / 12 / 18 / 24 / 30 (based on level) (+ 18% AP) true damage with each tick',
        min: 0,
        max: 10,
        description:
          ' For each stack, the target is dealt「  1 / 2 / 3 / 4 / 5 (based on level) (+ 3% AP) true damage per second over the duration, 」「  6 / 12 / 18 / 24 / 30 (based on level) (+ 18% AP) total true damage over the duration, 」for a maximum of「 6 / 12 / 18 / 24 / 30 (based on level) (+ 18% AP) true damage with each tick',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText:
          'true damage per second over the duration, 」「  6 / 12 / 18 / 24 / 30',
        pre: 'For each stack, the target is dealt「  1 / 2 / 3 / 4 / 5',
        post: 'true damage per second over the duration, 」「  6 / 12 / 18 / 24 / 30',
        children: [
          {
            values: 3,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 3% AP',
          },
          {
            values: 18,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 18% AP',
          },
          {
            values: 18,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 18% AP',
          },
        ],
      },
      {
        effectType: 'Damage',
        name: 'Line 2:',
        raw: ' 」「 36 / 72 / 108 / 144 / 180 (based on level) (+ 108% AP) total true damage over the duration',
        damagetype: 'True',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'total true damage over the duration',
        pre: '」「 36 / 72 / 108 / 144 / 180',
        post: 'total true damage over the duration',
        children: [
          {
            values: 108,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 108% AP',
          },
        ],
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Twitch_Ambush.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> After a 1-second delay, <b>Twitch</b> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Camouflage"><a href="/wiki/Stealth#Camouflage" title="Stealth#Camouflage"><img alt="Ambush 2.png" src="/wiki/images/Twitch_Ambush_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Camouflage" title="Stealth">camouflaged</a></span> for a duration. Attacking or casting <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twitch" data-ability="Venom Cask" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twitch/LoL#Venom_Cask" title="Venom Cask"><img alt="Venom Cask" src="/wiki/images/Twitch_Venom_Cask.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twitch/LoL#Venom_Cask" title="Twitch/LoL">Venom Cask</a></span></span></i> or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twitch" data-ability="Contaminate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twitch/LoL#Contaminate" title="Contaminate"><img alt="Contaminate" src="/wiki/images/Twitch_Contaminate.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twitch/LoL#Contaminate" title="Twitch/LoL">Contaminate</a></span></span></i> ends <i>Ambush</i> immediately.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Stealth Duration:',
        raw: '10 / 11 / 12 / 13 / 14',
        values: [10, 11, 12, 13, 14],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 11 / 12 / 13 / 14',
      },
    ],
  },
  {
    img: '/wiki/images/Twitch_Ambush_2.png',
    description:
      'During this time, <b>Twitch</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">10% <b>bonus</b> movement speed</span></span>, increased to <span style="color: #F5EE99; white-space:normal">30%</span> while facing enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> within a 1000-unit radius who cannot see him.',
    leveling: [],
  },
  {
    img: '/wiki/images/Twitch_Ambush_3.png',
    description:
      'Upon breaking stealth, <b>Twitch</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for 5 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Attack Speed:',
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
      'When an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> dies while afflicted with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twitch" data-ability="Deadly Venom" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Deadly Venom"><img alt="Deadly Venom" src="/wiki/images/Twitch_Deadly_Venom.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Twitch/LoL">Deadly Venom</a></span></span></i>, <i>Ambush\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is reset.',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Twitch_Venom_Cask.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Twitch</b> hurls a cask of venom that explodes at the target location, applying <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twitch" data-ability="Deadly Venom" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Deadly Venom"><img alt="Deadly Venom" src="/wiki/images/Twitch_Deadly_Venom.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Twitch/LoL">Deadly Venom</a></span></span></i> to enemies hit and granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area.',
    leveling: [],
  },
  {
    description:
      'The area then becomes contaminated for 3 seconds, applying a <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twitch" data-ability="Deadly Venom" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Deadly Venom"><img alt="Deadly Venom" src="/wiki/images/Twitch_Deadly_Venom.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Twitch/LoL">Deadly Venom</a></span></span></i> stack each second to enemies within and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Slow:',
        raw: '30 / 35 / 40 / 45 / 50% (+ 6% per 100 AP)',
        values: [30, 35, 40, 45, 50],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 35 / 40 / 45 / 50%',
        children: [
          {
            values: 6,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 6% per 100 AP',
          },
        ],
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Twitch_Contaminate.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Twitch</b> sends out a lethal toxin to each nearby enemy afflicted by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twitch" data-ability="Deadly Venom" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Deadly Venom"><img alt="Deadly Venom" src="/wiki/images/Twitch_Deadly_Venom.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Twitch/LoL">Deadly Venom</a></span></span></i>, dealing them <span style="color: #FF8C34; white-space:normal">physical damage</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Base Physical Damage:',
        raw: '20 / 30 / 40 / 50 / 60',
        values: [20, 30, 40, 50, 60],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 30 / 40 / 50 / 60',
      },
    ],
  },
  {
    description:
      '<i>Contaminate</i> deals additional <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span style="color: #7A6DFF; white-space:normal">35% AP</span> <span style="color: #00B0F0; white-space:normal">magic damage</span> for each stack of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twitch" data-ability="Deadly Venom" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Deadly Venom"><img alt="Deadly Venom" src="/wiki/images/Twitch_Deadly_Venom.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Twitch/LoL">Deadly Venom</a></span></span></i> on the target.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage Per Stack:',
        raw: '15 / 20 / 25 / 30 / 35 (+ 35% bonus AD)',
        values: [15, 20, 25, 30, 35],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 20 / 25 / 30 / 35',
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
      {
        effectType: 'Unique',
        name: 'Minimum Mixed Damage:',
        raw: '35 / 50 / 65 / 80 / 95 (+ 35% bonus AD) (+ 35% AP)',
        values: [35, 50, 65, 80, 95],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '35 / 50 / 65 / 80 / 95',
        children: [
          {
            values: 35,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 35% bonus AD',
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
        name: 'Maximum Mixed Damage:',
        raw: '110 / 150 / 190 / 230 / 270 (+ 210% bonus AD) (+ 210% AP)',
        values: [110, 150, 190, 230, 270],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '110 / 150 / 190 / 230 / 270',
        children: [
          {
            values: 210,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 210% bonus AD',
          },
          {
            values: 210,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 210% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>A nearby enemy with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twitch" data-ability="Deadly Venom" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Deadly Venom"><img alt="Deadly Venom" src="/wiki/images/Twitch_Deadly_Venom.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twitch/LoL#Deadly_Venom" title="Twitch/LoL">Deadly Venom</a></span></span> is required to cast this ability. The target does not have to be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> to be targeted by this ability.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Twitch_Spray_and_Pray.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Twitch</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span> and <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;300 <b>bonus</b> attack range</span> for 6 seconds, during which his <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack"><a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a></span> are replaced by <i>bolts</i> that travel slightly further than his attack range in a straight line, dealing damage to <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="non-champions and champions, wards and plants, turrets and structures">every enemy unit</span> hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Attack Damage:',
        raw: '40 / 55 / 70',
        values: [40, 55, 70],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 55 / 70',
      },
    ],
  },
  {
    description:
      'The <i>bolts</i> deal <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="enemies hit" data-displayformula="100% - 10% per enemy hit. \'\'This is capped at 60% damage.\'\'" data-bot_values="100;90;80;70;60" data-top_values="0;1;2;3;4" data-bot_key="%">100% − 60% (based on enemies hit)</span> of the <span style="color:orange; white-space:normal">attack\'s damage</span>, apply <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects at 100% effectiveness, and can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: "The bolts deal 100% − 60% (based on enemies hit) of the attack's damage, apply  on-hit effects at 100% effectiveness, and can  critically strike",
        damagetype: 'None',
        values: 1,
        valuesIsPercent: true,
        user: 'player',
        units: 'total_ap',
        unitsText:
          "of the attack's damage, apply  on-hit effects at 100% effectiveness, and can  critically strike",
        pre: 'The bolts deal 100% − 60%',
        post: "of the attack's damage, apply  on-hit effects at 100% effectiveness, and can  critically strike",
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
    ],
  },
];
export const Twitch = { I, Q, W, E, R };
