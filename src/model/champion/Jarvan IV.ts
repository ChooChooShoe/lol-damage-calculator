import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Jarvan IV';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Jarvan_IV_Martial_Cadence.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Jarvan IV\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> are empowered to deal <span style="color:orange; white-space:normal"><b>additional</b> physical damage</span> equal to <span style="color: #1F995C; white-space:normal">8% of the target\'s <b>current</b> health</span>, with a minimum threshold of 20 and capped at 400 against all targets.',
    leveling: [],
  },
  {
    description:
      'This effect cannot occur on the same target more than once every few seconds.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Jarvan_IV_Dragon_Strike.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Jarvan IV</b> extends his lance in the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit and inflicting them with <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor reduction</span></span> for 3 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '90 / 130 / 170 / 210 / 250 (+ 140% bonus AD)',
        values: [90, 130, 170, 210, 250],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '90 / 130 / 170 / 210 / 250',
        children: [
          {
            values: 140,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 140% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Armor Reduction:',
        raw: "10 / 14 / 18 / 22 / 26% of target's armor",
        values: [10, 14, 18, 22, 26],
        valuesIsPercent: true,
        user: 'target',
        units: 'total_armor',
        unitsText: "of target's armor",
        pre: "10 / 14 / 18 / 22 / 26% of target's armor",
      },
    ],
  },
  {
    description:
      'If the lance connects with a deployed <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jarvan IV" data-ability="Demacian Standard" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jarvan_IV/LoL#Demacian_Standard" title="Demacian Standard"><img alt="Demacian Standard" src="/wiki/images/Jarvan_IV_Demacian_Standard.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jarvan_IV/LoL#Demacian_Standard" title="Jarvan IV/LoL">Demacian Standard</a></span></span></i>, <b>Jarvan IV</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to its location, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking up</a></span> nearby enemies around him and along his path for 0.<small>75</small> seconds.',
    leveling: [],
  },
  {
    description:
      '<i><b>Jarvan IV</b> can cast any of his <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> during the dash.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Jarvan_IV_Golden_Aegis.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Jarvan IV</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> all nearby enemies for 2 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Slow:',
        raw: '15 / 20 / 25 / 30 / 35%',
        values: [15, 20, 25, 30, 35],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 20 / 25 / 30 / 35%',
      },
    ],
  },
  {
    description:
      '<b>Jarvan IV</b> also grants himself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 4 seconds, increased by <span style="color: #1F995C; white-space:normal">1.<small>3</small>% of his <b>maximum</b> health</span> for each enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> hit by <i>Golden Aegis</i>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Shield Strength:',
        raw: '60 / 80 / 100 / 120 / 140 (+ 80% bonus AD)',
        values: [60, 80, 100, 120, 140],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 80 / 100 / 120 / 140',
        children: [
          {
            values: 80,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 80% bonus AD',
          },
        ],
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Jarvan IV</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Attack Speed:',
        raw: '20 / 22.5 / 25 / 27.5 / 30%',
        values: [20, 22.5, 25, 27.5, 30],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 22.5 / 25 / 27.5 / 30%',
      },
    ],
  },
  {
    img: '/wiki/images/Jarvan_IV_Demacian_Standard.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Jarvan IV</b> throws a Demacian flag to the target location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within the area.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '80 / 120 / 160 / 200 / 240 (+ 80% AP)',
        values: [80, 120, 160, 200, 240],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 120 / 160 / 200 / 240',
        children: [
          {
            values: 80,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 80% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'The flag then remains for 8 seconds, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of its surroundings and providing an <a href="/wiki/Aura" title="Aura">aura</a> that grants <span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span> equal to <i>Demacian Standard\'s</i> passive to <b>Jarvan IV</b> and all nearby allied champions.',
    leveling: [],
  },
  {
    description:
      '<i>Demacian Standard will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Jarvan_IV_Cataclysm.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Jarvan IV</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaps</a></span> with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span> to the target enemy champion\'s location over 0.<small>35</small> seconds, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to all nearby enemies upon arrival.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '200 / 325 / 450 (+ 180% bonus AD)',
        values: [200, 325, 450],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '200 / 325 / 450',
        children: [
          {
            values: 180,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 180% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'Upon impact, he creates a circle of impassable terrain that initially pulls units inside it, though not rendering them <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span>. The terrain lasts for 3.<small>5</small> seconds and grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area. <i>Cataclysm</i> can be recast after 1 second while the terrain is active.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Jarvan IV</b> destroys the terrain created by <i>Cataclysm</i>.',
    leveling: [],
  },
];
export const JarvanIV = { I, Q, W, E, R };
