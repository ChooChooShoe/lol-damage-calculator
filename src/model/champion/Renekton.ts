import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Renekton';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Renekton_Reign_of_Anger.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Renekton\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> generate <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless"><span style="color: #FA6533; white-space:normal">5 Fury</span></a></span>. After 12 seconds of being <a href="/wiki/Out_of_combat" class="mw-redirect" title="Out of combat">out of combat</a>, he loses <span style="color: #FA6533; white-space:normal">1 Fury</span> every 0.<small>25</small> seconds.',
    leveling: [],
  },
  {
    description:
      'While <b>Renekton</b> has at least <span style="color: #FA6533; white-space:normal">50 Fury</span>, his next <a href="/wiki/Champion_ability" title="Champion ability">basic ability</a> consumes <span style="color: #FA6533; white-space:normal">50 Fury</span> to become empowered with an additional effect. Empowered abilities do not generate <span style="color: #FA6533; white-space:normal">Fury</span>.',
    leveling: [],
  },
  {
    description:
      '<b>Renekton</b> generates <span style="color: #FA6533; white-space:normal">50% <b>bonus</b> Fury</span> from all sources while <span style="color: #1F995C; white-space:normal">below 50% of his <b>maximum</b> health</span>.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Renekton_Cull_the_Meek.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Renekton</b> cleaves around himself, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> himself for each enemy hit, up to a cap.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '60 / 90 / 120 / 150 / 180 (+ 100% bonus AD)',
        values: [60, 90, 120, 150, 180],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 90 / 120 / 150 / 180',
        children: [
          {
            values: 100,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 100% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Enhanced Damage:',
        raw: '90 / 135 / 180 / 225 / 270 (+ 140% bonus AD)',
        values: [90, 135, 180, 225, 270],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '90 / 135 / 180 / 225 / 270',
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
        name: 'Healing Cap:',
        raw: '50 / 75 / 100 / 125 / 150',
        values: [50, 75, 100, 125, 150],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 75 / 100 / 125 / 150',
      },
      {
        effectType: 'Unique',
        name: 'Enhanced Healing Cap:',
        raw: '200 / 300 / 400 / 500 / 600',
        values: [200, 300, 400, 500, 600],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '200 / 300 / 400 / 500 / 600',
      },
      {
        effectType: 'Unique',
        name: 'Non-Champion Healing:',
        raw: '2 / 3 / 4 / 5 / 6 (+ 2% bonus AD)',
        values: [2, 3, 4, 5, 6],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '2 / 3 / 4 / 5 / 6',
        children: [
          {
            values: 2,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 2% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Enhanced Non-Champion Healing:',
        raw: '6 / 9 / 12 / 15 / 18 (+ 6% bonus AD)',
        values: [6, 9, 12, 15, 18],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '6 / 9 / 12 / 15 / 18',
        children: [
          {
            values: 6,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 6% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'Against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, the healing is increased by 300%.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Champion Healing:',
        raw: '12 / 18 / 24 / 30 / 36 (+ 15% bonus AD)',
        values: [12, 18, 24, 30, 36],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '12 / 18 / 24 / 30 / 36',
        children: [
          {
            values: 15,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 15% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Enhanced Champion Healing:',
        raw: '36 / 54 / 72 / 90 / 108 (+ 45% bonus AD)',
        values: [36, 54, 72, 90, 108],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '36 / 54 / 72 / 90 / 108',
        children: [
          {
            values: 45,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 45% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      '<b>Renekton</b> generates <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless"><span style="color: #FA6533; white-space:normal">2.<small>5</small> Fury</span></a></span> for each non-champion hit and <span style="color: #FA6533; white-space:normal">10 Fury</span> for each champion hit, with the <span style="color: #FA6533; white-space:normal">Fury</span> generated per cast capped at <span style="color: #FA6533; white-space:normal">30</span>.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renekton" data-ability="Reign of Anger" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renekton/LoL#Reign_of_Anger" title="Reign of Anger"><img alt="Reign of Anger" src="/wiki/images/Renekton_Reign_of_Anger.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renekton/LoL#Reign_of_Anger" title="Renekton/LoL">Reign of Anger</a></span></span> Bonus:</b></span> <i>Cull the Meek</i> has increased damage, tripled <b>total</b> healing, and a quadrupled healing cap.',
    leveling: [],
  },
  {
    description:
      '<i><b>Renekton</b> cannot basic attack nor cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renekton" data-ability="Slice" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renekton/LoL#Slice" title="Slice"><img alt="Slice" src="/wiki/images/Renekton_Slice.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renekton/LoL#Slice" title="Renekton/LoL">Slice</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renekton" data-ability="Dice" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renekton/LoL#Dice" title="Dice"><img alt="Dice" src="/wiki/images/Renekton_Dice.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renekton/LoL#Dice" title="Renekton/LoL">Dice</a></span></span>, or <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renekton" data-ability="Dominus" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renekton/LoL#Dominus" title="Dominus"><img alt="Dominus" src="/wiki/images/Renekton_Dominus.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renekton/LoL#Dominus" title="Renekton/LoL">Dominus</a></span></span> for 0.<small>25</small> seconds after Cull the Meek\'s activation.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Renekton_Ruthless_Predator.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Renekton</b> empowers his next basic attack within 7 seconds to have a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="(Estimated)">0.<small>2</small>-second cast time</span>, gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50 <b>bonus</b> range</span> and strike the target twice, dealing <span style="color: #FF8C34; white-space:normal"><b>modified</b> physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 0.<small>75</small> seconds. Each strike applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects at 100% effectiveness and generates <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless"><span style="color: #FA6533; white-space:normal">Fury</span></a></span>. Hitting an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> generates <span style="color: #FA6533; white-space:normal">10 <b>bonus</b> Fury</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Total Physical Damage:',
        raw: '10 / 40 / 70 / 100 / 130 (+ 150% AD)',
        values: [10, 40, 70, 100, 130],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 40 / 70 / 100 / 130',
        children: [
          {
            values: 150,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 150% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Physical Damage Per Hit:',
        raw: '5 / 15 / 25 / 35 / 45 (+ 75% AD)',
        values: [5, 15, 25, 35, 45],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5 / 15 / 25 / 35 / 45',
        children: [
          {
            values: 75,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 75% AD',
          },
        ],
      },
    ],
  },
  {
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renekton" data-ability="Reign of Anger" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renekton/LoL#Reign_of_Anger" title="Reign of Anger"><img alt="Reign of Anger" src="/wiki/images/Renekton_Reign_of_Anger.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renekton/LoL#Reign_of_Anger" title="Renekton/LoL">Reign of Anger</a></span></span> Bonus:</b></span> <b>Renekton</b> instead strikes 3 times, completely destroying damage-mitigating <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span> on the target upon the first strike, as well as increasing the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> duration to 1.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Total Physical Damage:',
        raw: '15 / 60 / 105 / 150 / 195 (+ 225% AD)',
        values: [15, 60, 105, 150, 195],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 60 / 105 / 150 / 195',
        children: [
          {
            values: 225,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 225% AD',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Ruthless Predator <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Renekton\'s</b> basic attack timer. After Ruthless Predator\'s standard and empowered attack cast time, <b>Renekton</b> cannot move nor cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renekton" data-ability="Cull the Meek" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renekton/LoL#Cull_the_Meek" title="Cull the Meek"><img alt="Cull the Meek" src="/wiki/images/Renekton_Cull_the_Meek.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renekton/LoL#Cull_the_Meek" title="Renekton/LoL">Cull the Meek</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renekton" data-ability="Slice" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renekton/LoL#Slice" title="Slice"><img alt="Slice" src="/wiki/images/Renekton_Slice.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renekton/LoL#Slice" title="Renekton/LoL">Slice</a></span></span>, nor <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renekton" data-ability="Dice" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renekton/LoL#Dice" title="Dice"><img alt="Dice" src="/wiki/images/Renekton_Dice.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renekton/LoL#Dice" title="Renekton/LoL">Dice</a></span></span> for <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.525 seconds, but rounded up to the next game tick.">0.<small>528</small> seconds</span>.</i>',
    leveling: [],
  },
];
const E1: SubSkill[] = [
  {
    img: '/wiki/images/Renekton_Slice.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Renekton</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> a fixed distance in the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies he passes through.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '40 / 70 / 100 / 130 / 160 (+ 90% bonus AD)',
        values: [40, 70, 100, 130, 160],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 70 / 100 / 130 / 160',
        children: [
          {
            values: 90,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 90% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'If <b>Renekton</b> hits an enemy, he can cast <i>Dice</i> within the next 4 seconds.',
    leveling: [],
  },
];
const E2: SubSkill[] = [
  {
    img: '/wiki/images/Renekton_Dice.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Renekton</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> a fixed distance in the target direction, dealing the same <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies he passes through.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Total Physical Damage:',
        raw: '80 / 140 / 200 / 260 / 320 (+ 180% bonus AD)',
        values: [80, 140, 200, 260, 320],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 140 / 200 / 260 / 320',
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
      'Both <i>Slice</i> and <i>Dice</i> generate <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless"><span style="color: #FA6533; white-space:normal">2 Fury</span></a></span> for each non-champion hit, and <span style="color: #FA6533; white-space:normal">10 Fury</span> for each champion hit, with the <span style="color: #FA6533; white-space:normal">Fury</span> generated per dash capped at 30.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renekton" data-ability="Reign of Anger" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renekton/LoL#Reign_of_Anger" title="Reign of Anger"><img alt="Reign of Anger" src="/wiki/images/Renekton_Reign_of_Anger.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renekton/LoL#Reign_of_Anger" title="Renekton/LoL">Reign of Anger</a></span></span> Bonus:</b></span> <i>Dice</i> deals <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> and inflicts <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor reduction</span></span> to enemies hit for 4 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Physical Damage:',
        raw: '30 / 45 / 60 / 75 / 90 (+ 45% bonus AD)',
        values: [30, 45, 60, 75, 90],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 45 / 60 / 75 / 90',
        children: [
          {
            values: 45,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 45% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Bonus Damage:',
        raw: '70 / 115 / 160 / 205 / 250 (+ 135% bonus AD)',
        values: [70, 115, 160, 205, 250],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 115 / 160 / 205 / 250',
        children: [
          {
            values: 135,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 135% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Physical Damage:',
        raw: '110 / 185 / 260 / 335 / 410 (+ 225% bonus AD)',
        values: [110, 185, 260, 335, 410],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '110 / 185 / 260 / 335 / 410',
        children: [
          {
            values: 225,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 225% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Armor Reduction:',
        raw: "25 / 27.5 / 30 / 32.5 / 35% of target's armor",
        values: [25, 27.5, 30, 32.5, 35],
        valuesIsPercent: true,
        user: 'target',
        units: 'total_armor',
        unitsText: "of target's armor",
        pre: "25 / 27.5 / 30 / 32.5 / 35% of target's armor",
      },
    ],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Renekton_Dominus.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Renekton</b> empowers himself for 15 seconds, gaining <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> health</span></span>, 20% increased <a href="/wiki/Size" title="Size">size</a>, <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;25 <b>bonus</b> attack range</span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless"><span style="color: #FA6533; white-space:normal">20 Fury</span></a></span>, as well as increasing <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renekton" data-ability="Cull the Meek" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renekton/LoL#Cull_the_Meek" title="Cull the Meek\'s"><img alt="Cull the Meek\'s" src="/wiki/images/Renekton_Cull_the_Meek.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renekton/LoL#Cull_the_Meek" title="Renekton/LoL">Cull the Meek\'s</a></span></span></i> effect radius.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Health:',
        raw: '250 / 400 / 550',
        values: [250, 400, 550],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '250 / 400 / 550',
      },
    ],
  },
  {
    description:
      'During this time, he deals <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>5</small> seconds to nearby enemies and generates <span style="color: #FA6533; white-space:normal">5 Fury</span> per second, up to a maximum of <span style="color: #FA6533; white-space:normal">75 Fury</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage Per Tick:',
        raw: '25 / 50 / 75 (+ 5% bonus AD) (+ 5% AP)',
        values: [25, 50, 75],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 50 / 75',
        children: [
          {
            values: 5,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 5% bonus AD',
          },
          {
            values: 5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 5% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '750 / 1500 / 2250 (+ 150% bonus AD) (+ 150% AP)',
        values: [750, 1500, 2250],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '750 / 1500 / 2250',
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
            values: 150,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 150% AP',
          },
        ],
      },
    ],
  },
];
export const Renekton = { I, Q, W, E1, E2, R };
