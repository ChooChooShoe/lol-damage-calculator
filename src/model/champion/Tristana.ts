import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Tristana';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Tristana_Draw_a_Bead.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Tristana\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a>, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tristana" data-ability="Explosive Charge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tristana/LoL#Explosive_Charge" title="Explosive Charge"><img alt="Explosive Charge" src="/wiki/images/Tristana_Explosive_Charge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tristana/LoL#Explosive_Charge" title="Tristana/LoL">Explosive Charge</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tristana" data-ability="Buster Shot" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tristana/LoL#Buster_Shot" title="Buster Shot"><img alt="Buster Shot" src="/wiki/images/Tristana_Buster_Shot.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tristana/LoL#Buster_Shot" title="Tristana/LoL">Buster Shot</a></span></span></i> gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="0;" data-finish="136;" data-bot_values="0;8;16;24;32;40;48;56;64;72;80;88;96;104;112;120;128;136" data-top_values="">0 − 136 (based on level)</span> <b>bonus</b> range</span>, for a total of <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="525;" data-finish="661;" data-bot_values="525;533;541;549;557;565;573;581;589;597;605;613;621;629;637;645;653;661" data-top_values="">525 − 661 (based on level)</span>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: " Tristana's basic attacks,  Explosive Charge and  Buster Shot gain  0 − 136 (based on level) bonus range, for a total of 525 − 661 (based on level)",
        values: [
          0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128,
          136,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'bonus range, for a total of 525 − 661',
        pre: "Tristana's basic attacks,  Explosive Charge and  Buster Shot gain  0 − 136",
        post: 'bonus range, for a total of 525 − 661',
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Tristana_Rapid_Fire.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Tristana</b> empowers her cannon, gaining <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for 7 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Attack Speed:',
        raw: '65 / 80 / 95 / 110 / 125%',
        values: [65, 80, 95, 110, 125],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '65 / 80 / 95 / 110 / 125%',
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Tristana_Rocket_Jump.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Tristana</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">jumps</a></span> to the target location. Upon landing, she deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 60% for a duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '95 / 145 / 195 / 245 / 295 (+ 50% AP)',
        values: [95, 145, 195, 245, 295],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '95 / 145 / 195 / 245 / 295',
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
      {
        effectType: 'Unique',
        name: 'Slow Duration:',
        raw: '1 / 1.5 / 2 / 2.5 / 3',
        values: [1, 1.5, 2, 2.5, 3],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1 / 1.5 / 2 / 2.5 / 3',
      },
    ],
  },
  {
    description:
      'Scoring an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> or detonating <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tristana" data-ability="Explosive Charge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tristana/LoL#Explosive_Charge" title="Explosive Charge"><img alt="Explosive Charge" src="/wiki/images/Tristana_Explosive_Charge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tristana/LoL#Explosive_Charge" title="Tristana/LoL">Explosive Charge</a></span></span></i> at maximum stacks on a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> will reset <i>Rocket Jump\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>.',
    leveling: [],
  },
  {
    description:
      '<i><b>Tristana</b> can cast any of her <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> during the dash. Rocket Jump will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Tristana\'s</b> basic attacks are empowered to trigger an explosion when they kill the target, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '55 / 80 / 105 / 130 / 155 (+ 25% AP)',
        values: [55, 80, 105, 130, 155],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '55 / 80 / 105 / 130 / 155',
        children: [
          {
            values: 25,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 25% AP',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Tristana_Explosive_Charge.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Tristana</b> tosses an explosive charge at the target enemy that attaches to them for 4 seconds. The charge then detonates, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies. <i>Explosive Charge</i> can target and damage <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span>, and explodes in a larger radius on a turret.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Minimum Physical Damage:',
        raw: '70 / 80 / 90 / 100 / 110 (+ 50 / 75 / 100 / 125 / 150% bonus AD) (+ 50% AP)',
        values: [70, 80, 90, 100, 110],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 80 / 90 / 100 / 110',
        children: [
          {
            values: [50, 75, 100, 125, 150],
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 50 / 75 / 100 / 125 / 150% bonus AD',
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
      '<b>Tristana\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> against the target increase <i>Explosive Charge\'s</i> damage by 30%, <a href="/wiki/Stack" title="Stack">stacking</a> up to 4 times for a maximum 120% increase, upon which the charge also detonates instantly.<br>The charge\'s <b>total</b> damage is additionally increased by <span style="color: #E56013; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="critical strike chance" data-displayformula="0.333%*critical strike chance, capped at 33.3% increase" data-bot_values="0;3.33;6.66;9.99;13.32;16.65;19.98;23.31;26.64;29.97;33.3" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 33.<small>3</small>% (based on critical strike chance)</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 3:',
        raw: '3% (based on critical strike chance)',
        values: 3,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '3%',
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
      {
        effectType: 'Unique',
        name: 'Bonus Damage Per Stack:',
        raw: '21 / 24 / 27 / 30 / 33 (+ 15 / 22.5 / 30 / 37.5 / 45% bonus AD) (+ 15% AP)',
        values: [21, 24, 27, 30, 33],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '21 / 24 / 27 / 30 / 33',
        children: [
          {
            values: [15, 22.5, 30, 37.5, 45],
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 15 / 22.5 / 30 / 37.5 / 45% bonus AD',
          },
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
        name: 'Maximum Physical Damage:',
        raw: '205 / 235 / 264 / 293 / 323 (+ 146.6 / 219.9 / 293.3 / 366.6 / 439.9% bonus AD) (+ 146.6% AP)',
        values: [205, 235, 264, 293, 323],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '205 / 235 / 264 / 293 / 323',
        children: [
          {
            values: [146.6, 219.9, 293.3, 366.6, 439.9],
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 146.6 / 219.9 / 293.3 / 366.6 / 439.9% bonus AD',
          },
          {
            values: 146.6,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 146.6% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>If <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tristana" data-ability="Buster Shot" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tristana/LoL#Buster_Shot" title="Buster Shot"><img alt="Buster Shot" src="/wiki/images/Tristana_Buster_Shot.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tristana/LoL#Buster_Shot" title="Tristana/LoL">Buster Shot</a></span></span> is used to apply the last stack, the detonation will instead be delayed until the end of the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock back</a></span> or the 4 seconds expire.</i>',
    leveling: [],
  },
  {
    description:
      '<i><b>Tristana</b> will attempt to basic attack the target afterwards.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Tristana_Buster_Shot.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Tristana</b> fires a massive cannonball at the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span>. They and surrounding enemies are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked back</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="See notes">for up-to 0.<small>75</small> seconds</span>, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '300 / 400 / 500 (+ 100% AP)',
        values: [300, 400, 500],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '300 / 400 / 500',
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
      {
        effectType: 'Unique',
        name: 'Knock Back Distance:',
        raw: '600 / 800 / 1000',
        values: [600, 800, 1000],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '600 / 800 / 1000',
      },
    ],
  },
];
export const Tristana = { I, Q, W, E, R };
