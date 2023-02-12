import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Diana';
const I: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Diana</b> gains <span style="color:orangered; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="15;19.17;23.33;27.5;31.67;35.83;40" data-top_values="1;3;6;9;12;15;18" data-bot_key="%">15% − 40% (based on level)</span> <b>bonus</b> attack speed</span></span>. After casting an <a href="/wiki/Champion_ability" title="Champion ability">ability</a>, this bonus is tripled to <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:orangered;" data-bot_values="45;57.5;70;82.5;95;107.5;120" data-top_values="1;3;6;9;12;15;18" data-bot_key="%">45% − 120% (based on level)</span> for 3 seconds.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: ' Diana gains  15% − 40% (based on level) bonus attack speed',
        increasedStat: 'bonus_ad',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: '',
        unitsText: 'bonus attack speed',
        pre: 'Diana gains  15% − 40%',
        post: 'bonus attack speed',
      },
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: ' After casting an ability, this bonus is tripled to 45% − 120% (based on level) for 3 seconds',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'for 3 seconds',
        pre: 'After casting an ability, this bonus is tripled to 45% − 120%',
        post: 'for 3 seconds',
      },
    ],
  },
  {
    img: '/wiki/images/Diana_Moonsilver_Blade.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Diana\'s</b> <a href="/wiki/Basic_attacks" class="mw-redirect" title="Basic attacks">basic attacks</a> generate a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Moonsilver Blade</i> for 3.<small>5</small> seconds, refreshing on subsequent attacks and stacking up to 2 times. At 2 stacks, <b>Diana</b> empowers her next basic attack to consume the stacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> to additionally cleave nearby enemies, dealing them <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#00B0F0;" data-displayformula="20 + 5 per level until level 6, then + 10 per level until level 11, then + 15 per level until level 16, then + 25 per level" data-bot_values="20;25;30;35;40;45;55;65;75;85;95;110;125;140;155;170;195;220" data-top_values="">20 − 220 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span> <span style="color: #00B0F0; white-space:normal">magic damage</span>. <i>Moonsilver Blade</i> deals 300% damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Stacks',
        name: 'Line 3:',
        raw: ' At 2 stacks, Diana empowers her next basic attack to consume the stacks  on-hit to additionally cleave nearby enemies, dealing them 20 − 220 (based on level) (+ 50% AP) magic damage',
        min: 0,
        max: 10,
        description:
          ' At 2 stacks, Diana empowers her next basic attack to consume the stacks  on-hit to additionally cleave nearby enemies, dealing them 20 − 220 (based on level) (+ 50% AP) magic damage',
        values: [
          20, 31.76, 43.53, 55.29, 67.06, 78.82, 90.59, 102.35, 114.12, 125.88,
          137.65, 149.41, 161.18, 172.94, 184.71, 196.47, 208.24, 220,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'magic damage',
        pre: 'At 2 stacks, Diana empowers her next basic attack to consume the stacks  on-hit to additionally cleave nearby enemies, dealing them 20 − 220',
        post: 'magic damage',
        children: [
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
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Diana_Crescent_Strike.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Diana</b> unleashes a bolt of lunar energy that travels in a counter-clockwise arc before exploding at the target location, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area for 0.<small>5</small> seconds and dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and afflicting them with <i>Moonlight</i> for 3 seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '60 / 95 / 130 / 165 / 200 (+ 70% AP)',
        values: [60, 95, 130, 165, 200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 95 / 130 / 165 / 200',
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
    ],
  },
  {
    description:
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Diana" data-ability="Lunar Rush" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Diana/LoL#Lunar_Rush" title="Lunar Rush"><img alt="Lunar Rush" src="/wiki/images/Diana_Lunar_Rush.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Diana/LoL#Lunar_Rush" title="Diana/LoL">Lunar Rush</a></span></span></i> interacts with <i>Moonlight</i>.',
    leveling: [],
  },
  {
    description:
      '<i>Crescent Strike will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Diana_Pale_Cascade.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Diana</b> grants herself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for up to 5 seconds and creates three spheres that orbit her for the same duration, detonating upon contact with an enemy to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Shield Strength:',
        raw: '40 / 55 / 70 / 85 / 100 (+ 25% AP) (+ 9% bonus health)',
        healType: 'BonusHealth',
        values: [40, 55, 70, 85, 100],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 55 / 70 / 85 / 100',
        children: [
          {
            values: 25,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 25% AP',
          },
          {
            values: 9,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_hp',
            unitsText: 'bonus health',
            pre: '+ 9% bonus health',
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Total Shield Strength:',
        raw: '80 / 110 / 140 / 170 / 200 (+ 50% AP) (+ 18% bonus health)',
        healType: 'BonusHealth',
        values: [80, 110, 140, 170, 200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 110 / 140 / 170 / 200',
        children: [
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 50% AP',
          },
          {
            values: 18,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_hp',
            unitsText: 'bonus health',
            pre: '+ 18% bonus health',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Magic Damage per Orb:',
        raw: '18 / 30 / 42 / 54 / 66 (+ 15% AP)',
        values: [18, 30, 42, 54, 66],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '18 / 30 / 42 / 54 / 66',
        children: [
          {
            values: 15,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 15% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '54 / 90 / 126 / 162 / 198 (+ 45% AP)',
        values: [54, 90, 126, 162, 198],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '54 / 90 / 126 / 162 / 198',
        children: [
          {
            values: 45,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 45% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      "If all three spheres detonate, <i>Pale Cascade's</i> shield is reapplied, stacking with its original shield and refreshing the duration.",
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Diana_Lunar_Rush.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Diana</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target enemy\'s location, and upon completion, she deals them <span style="color: #00B0F0; white-space:normal">magic damage</span> and consumes <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Diana" data-ability="Crescent Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Diana/LoL#Crescent_Strike" title="Moonlight"><img alt="Moonlight" src="/wiki/images/Diana_Crescent_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Diana/LoL#Crescent_Strike" title="Diana/LoL">Moonlight</a></span></span></i> from all enemies. If the target is within 400 range, <b>Diana</b> will dash through their location.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '50 / 70 / 90 / 110 / 130 (+ 50% AP)',
        values: [50, 70, 90, 110, 130],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 70 / 90 / 110 / 130',
        children: [
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
      'If <i>Moonlight</i> is consumed from the target, <i>Lunar Rush\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> is reduced to 0.<small>5</small> seconds.',
    leveling: [],
  },
  {
    description:
      '<i><b>Diana</b> can cast any of her abilities during the dash.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Diana_Moonfall.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Diana</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulls</a></span> in all nearby enemies, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span>, then <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for 2 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Slow:',
        raw: '40 / 50 / 60%',
        values: [40, 50, 60],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 50 / 60%',
      },
    ],
  },
  {
    description:
      'If an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> is pulled in, she calls down a beam of moonlight to strike upon the area around her after 1 second, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to all nearby enemies, increased for each champion pulled beyond the first.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '200 / 300 / 400 (+ 60% AP)',
        values: [200, 300, 400],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '200 / 300 / 400',
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
        name: 'Bonus Damage Per Champion:',
        raw: '35 / 60 / 85 (+ 15% AP)',
        values: [35, 60, 85],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '35 / 60 / 85',
        children: [
          {
            values: 15,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 15% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Damage Vs. 5 Champions:',
        raw: '340 / 540 / 740 (+ 120% AP)',
        values: [340, 540, 740],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '340 / 540 / 740',
        children: [
          {
            values: 120,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 120% AP',
          },
        ],
      },
    ],
  },
];
export const Diana = { I, Q, W, E, R };
