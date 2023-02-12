import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Syndra';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Syndra_Transcendent.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Syndra</b> collects <span style="color: #AF1AAF; white-space:normal">Splinters of Wrath</span> that enhance each of her abilities based on the number of them collected, <a href="/wiki/Stack" title="Stack">stacking</a> up to 120 times. She gains <span style="color: #AF1AAF; white-space:normal">Splinters of Wrath</span> from the following:\n',
    leveling: [],
  },
  {
    description:
      'Collecting a <span style="color: #AF1AAF; white-space:normal">Splinter of Wrath</span> from an enemy restores <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="20 +&nbsp;5 per level until level 5, then +&nbsp;8 per level until level 10, then +&nbsp;15 per level until level 15, then +&nbsp;20 per level." data-bot_values="20;25;30;35;40;48;56;64;72;80;95;110;125;140;155;175;195;215" data-top_values="1;2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17;18">20 − 215 (based on level)</span> mana</span></span>. <span style="color: #AF1AAF; white-space:normal">Splinters of Wrath</span> are brought to <b>Syndra</b> from enemies over 0.<small>6</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 1:',
        raw: 'Collecting a Splinter of Wrath from an enemy restores  20 − 215 (based on level) mana',
        values: [
          20, 31.47, 42.94, 54.41, 65.88, 77.35, 88.82, 100.29, 111.76, 123.24,
          134.71, 146.18, 157.65, 169.12, 180.59, 192.06, 203.53, 215,
        ],
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'total_mana',
        unitsText: 'mana',
        pre: 'Collecting a Splinter of Wrath from an enemy restores  20 − 215',
        post: 'mana',
      },
    ],
  },
  {
    img: '/wiki/images/Syndra_Transcendent_2.png',
    description:
      'At <span style="color: #AF1AAF; white-space:normal">120 Splinters of Wrath</span>, <b>Syndra</b> achieves <i>Transcendence</i>, increasing her <span style="white-space:nowrap"><a href="/wiki/Ability_power" title="Ability power"><img alt="Ability power icon.png" src="/wiki/images/Ability_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #7A6DFF; white-space:normal">ability power</span></span> by 15%.',
    leveling: [],
  },
  {
    description:
      '<i><b>Syndra</b> can collect <span style="color: #AF1AAF; white-space:normal">Splinters of Wrath</span> from enemies even if she is at maximum stacks. These <span style="color: #AF1AAF; white-space:normal">Splinters</span> do not grant any stacks, but will still restore <span style="color: #0099CC; white-space:normal">mana</span> for <b>Syndra</b>.</i>',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Syndra_Dark_Sphere.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Syndra</b> conjures a <i>Dark Sphere</i> at the target location that appears after a 0.<small>6</small>-second delay, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies. The <i>Dark Sphere</i> then remains on the ground for 6 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 105 / 140 / 175 / 210 (+ 70% AP)',
        values: [70, 105, 140, 175, 210],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 105 / 140 / 175 / 210',
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
    img: '/wiki/images/Syndra_Dark_Sphere_2.png',
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-ability="Transcendent" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL#Transcendent" title="Transcendent"><img alt="Transcendent" src="/wiki/images/Syndra_Transcendent.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL#Transcendent" title="Syndra/LoL">Transcendent</a></span></span> Bonus:</b></span> Collecting <span style="color: #AF1AAF; white-space:normal">40 Splinters of Wrath</span> causes <b>Syndra</b> to periodically <a href="/wiki/Stock" class="mw-redirect" title="Stock">stock</a> a <i>Dark Sphere</i> charge, up to a maximum of 2.',
    leveling: [],
  },
  {
    description:
      '<i>Dark Sphere will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Syndra_Force_of_Will.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Syndra</b> grabs the nearest <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-ability="Dark Sphere" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL#Dark_Sphere" title="Dark Sphere"><img alt="Dark Sphere" src="/wiki/images/Syndra_Dark_Sphere.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL#Dark_Sphere" title="Syndra/LoL">Dark Sphere</a></span></span></i>, enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span> or non-epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> within 500 units from the target location, and holds the target for 5 seconds. If a <i>Dark Sphere</i> is grabbed, its duration is refreshed; if a minion or monster is grabbed, it is put in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stasis"><a href="/wiki/Stasis" title="Stasis"><img alt="Stasis icon.png" src="/wiki/images/Stasis_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stasis" class="mw-redirect" title="Stasis">stasis</a></span>. She prioritizes grabbing the nearest unit, then <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-ability="Dark Sphere" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL#Dark_Sphere" title="Dark Spheres"><img alt="Dark Spheres" src="/wiki/images/Syndra_Dark_Sphere.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL#Dark_Sphere" title="Syndra/LoL">Dark Spheres</a></span></span></i>.',
    leveling: [],
  },
  {
    description:
      '<i>Force of Will</i> can be recast while the target is being held.',
    leveling: [],
  },
  {
    img: '/wiki/images/Syndra_Force_of_Will_2.png',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Syndra</b> throws the grabbed target towards the target location, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of their surroundings as they fall and dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to them and nearby enemies. All targets hit are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> for 1.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 110 / 150 / 190 / 230 (+ 70% AP)',
        values: [70, 110, 150, 190, 230],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 110 / 150 / 190 / 230',
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
      {
        effectType: 'Unique',
        name: 'Slow:',
        raw: '25 / 30 / 35 / 40 / 45%',
        values: [25, 30, 35, 40, 45],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 30 / 35 / 40 / 45%',
      },
    ],
  },
  {
    img: '/wiki/images/Syndra_Force_of_Will_4.png',
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-ability="Transcendent" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL#Transcendent" title="Transcendent"><img alt="Transcendent" src="/wiki/images/Syndra_Transcendent.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL#Transcendent" title="Syndra/LoL">Transcendent</a></span></span> Bonus:</b></span> Collecting <span style="color: #AF1AAF; white-space:normal">60 Splinters of Wrath</span> enhances <i>Force of Will</i> to deal <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal">12%</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;2% per 100 AP)</span> <span style="color: #F9966B; white-space:normal"><b>bonus</b> true damage</span>.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: ' Collecting 60 Splinters of Wrath enhances Force of Will to deal  12% (+ 2% per 100 AP) bonus true damage',
        damagetype: 'True',
        values: 6,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: 'bonus true damage',
        pre: 'Collecting 60 Splinters of Wrath enhances Force of Will to deal  12%',
        post: 'bonus true damage',
        children: [
          {
            values: 2,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 2% per 100 AP',
          },
        ],
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Syndra_Scatter_the_Weak.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Syndra</b> propels a wave of force in a cone in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks them back</a></span> for 400 units and up to 800 units away from <b>Syndra</b> based on proximity, though not through terrain.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '75 / 115 / 155 / 195 / 235 (+ 45% AP)',
        values: [75, 115, 155, 195, 235],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '75 / 115 / 155 / 195 / 235',
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
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-ability="Dark Sphere" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL#Dark_Sphere" title="Dark Spheres"><img alt="Dark Spheres" src="/wiki/images/Syndra_Dark_Sphere.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL#Dark_Sphere" title="Syndra/LoL">Dark Spheres</a></span></span></i> can be knocked back for 950 units and up to 1200 units away from <b>Syndra</b> based on proximity, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking back</a></span> enemies they hit over 70 units, though not through terrain. Targets hit are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for 1.<small>25</small> seconds, during which they are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span>, and dealt <i>Scatter the Weak\'s</i> damage if they were not damaged by the initial cast.',
    leveling: [],
  },
  {
    img: '/wiki/images/Syndra_Scatter_the_Weak_2.png',
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-ability="Transcendent" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL#Transcendent" title="Transcendent"><img alt="Transcendent" src="/wiki/images/Syndra_Transcendent.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL#Transcendent" title="Syndra/LoL">Transcendent</a></span></span> Bonus:</b></span> Collecting <span style="color: #AF1AAF; white-space:normal">80 Splinters of Wrath</span> enhances <i>Scatter the Weak</i> to have an increased scatter angle and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> enemies hit by 70% for 1.<small>25</small> seconds starting after the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock back</a></span> ends or if the target was hit by a pushed <i>Dark Sphere</i>, after the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> has ended.',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-ability="Dark Sphere" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL#Dark_Sphere" title="Dark Sphere"><img alt="Dark Sphere" src="/wiki/images/Syndra_Dark_Sphere.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL#Dark_Sphere" title="Syndra/LoL">Dark Sphere</a></span></span> gains ability haste.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Ability Haste:',
        raw: '10 / 20 / 30',
        values: [10, 20, 30],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 20 / 30',
      },
    ],
  },
  {
    img: '/wiki/images/Syndra_Unleashed_Power.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Syndra</b> enters a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.25 seconds, but rounded up to the next game tick.">0.<small>264</small> seconds</span> cast time, creating <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-ability="Dark Sphere" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL#Dark_Sphere" title="3 Dark Spheres"><img alt="3 Dark Spheres" src="/wiki/images/Syndra_Dark_Sphere.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL#Dark_Sphere" title="Syndra/LoL">3 Dark Spheres</a></span></span></i> and grabbing up to 4 nearby <i>Dark Spheres</i> that were last spawned. Afterwards, the collected <i>Dark Spheres</i> are hurled in a volley at the target enemy champion, each dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> upon hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage per Sphere:',
        raw: '90 / 130 / 170 (+ 17% AP)',
        values: [90, 130, 170],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '90 / 130 / 170',
        children: [
          {
            values: 17,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 17% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Minimum Magic Damage:',
        raw: '270 / 390 / 510 (+ 51% AP)',
        values: [270, 390, 510],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '270 / 390 / 510',
        children: [
          {
            values: 51,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 51% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Magic Damage:',
        raw: '630 / 910 / 1190 (+ 119% AP)',
        values: [630, 910, 1190],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '630 / 910 / 1190',
        children: [
          {
            values: 119,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 119% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'The <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-ability="Dark Sphere" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL#Dark_Sphere" title="Dark Spheres"><img alt="Dark Spheres" src="/wiki/images/Syndra_Dark_Sphere.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL#Dark_Sphere" title="Syndra/LoL">Dark Spheres</a></span></span></i> will then remain on the ground for 6 seconds.',
    leveling: [],
  },
  {
    img: '/wiki/images/Syndra_Unleashed_Power_2.png',
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-ability="Transcendent" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL#Transcendent" title="Transcendent"><img alt="Transcendent" src="/wiki/images/Syndra_Transcendent.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL#Transcendent" title="Syndra/LoL">Transcendent</a></span></span> Bonus:</b></span> Collecting <span style="color: #AF1AAF; white-space:normal">100 Splinters of Wrath</span> enhances <i>Unleashed Power</i> to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Execute"><a href="/wiki/Kill#Execute" title="Kill#Execute"><img alt="Death from Below.png" src="/wiki/images/Pyke_Death_from_Below.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Kill#Execute" title="Kill">execute</a></span> the target if it would damage them to below <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">15% of their <b>maximum</b> health</span></span>.',
    leveling: [],
  },
];
export const Syndra = { I, Q, W, E, R };
