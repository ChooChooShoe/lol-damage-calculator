import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Leona';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Leona_Sunlight.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Leona\'s</b> <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> mark enemies hit for 1.<small>5</small> seconds, refreshing on subsequent hits. <br><br>Allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions\'</a></span> damaging attacks and abilities against a marked target will consume the mark to deal <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="32;" data-finish="168;" data-bot_values="32;40;48;56;64;72;80;88;96;104;112;120;128;136;144;152;160;168" data-top_values="">32 − 168 (based on level)</span></span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 3:',
        raw: " Allied  champions' damaging attacks and abilities against a marked target will consume the mark to deal 32 − 168 (based on level) bonus magic damage",
        values: [
          32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144, 152,
          160, 168,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'bonus magic damage',
        pre: "Allied  champions' damaging attacks and abilities against a marked target will consume the mark to deal 32 − 168",
        post: 'bonus magic damage',
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Leona_Shield_of_Daybreak.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Leona</b> illuminates her shield, empowering her next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> within 6 seconds to have a 0.<small>25</small>-second cast time, gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50 <b>bonus</b> range</span>, deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> the target for 1 second.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Magic Damage:',
        raw: '10 / 35 / 60 / 85 / 110 (+ 30% AP)',
        values: [10, 35, 60, 85, 110],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 35 / 60 / 85 / 110',
        children: [
          {
            values: 30,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 30% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Shield of Daybreak <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Leona\'s</b> basic attack timer.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Leona_Eclipse.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Leona</b> raises her <i>guard</i> for 3 seconds, gaining flat damage reduction of up to 50% of the damage instance and <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resistance</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Flat Damage Reduction:',
        raw: '8 / 12 / 16 / 20 / 24',
        values: [8, 12, 16, 20, 24],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '8 / 12 / 16 / 20 / 24',
      },
      {
        effectType: 'Unique',
        name: 'Bonus Armor:',
        raw: '15 / 20 / 25 / 30 / 35 (+ 20% bonus armor)',
        values: [15, 20, 25, 30, 35],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 20 / 25 / 30 / 35',
        children: [
          {
            values: 20,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_armor',
            unitsText: 'bonus armor',
            pre: '+ 20% bonus armor',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Bonus Magic Resistance:',
        raw: '15 / 20 / 25 / 30 / 35 (+ 20% bonus magic resistance)',
        values: [15, 20, 25, 30, 35],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 20 / 25 / 30 / 35',
        children: [
          {
            values: 20,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_mr',
            unitsText: 'bonus magic resistance',
            pre: '+ 20% bonus magic resistance',
          },
        ],
      },
    ],
  },
  {
    description:
      'Her shield detonates after the duration, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies. If this hits an enemy, <b>Leona\'s</b> <i>guard</i> is extended for an additional 3 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '45 / 80 / 115 / 150 / 185 (+ 40% AP)',
        values: [45, 80, 115, 150, 185],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '45 / 80 / 115 / 150 / 185',
        children: [
          {
            values: 40,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 40% AP',
          },
        ],
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Leona_Zenith_Blade.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Leona</b> projects her sword in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '50 / 90 / 130 / 170 / 210 (+ 40% AP)',
        values: [50, 90, 130, 170, 210],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 90 / 130 / 170 / 210',
        children: [
          {
            values: 40,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 40% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'If she hits at least one enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, she will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> 225 units behind the last one struck within 3000 range and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">root</a></span> them for 0.<small>5</small> seconds.',
    leveling: [],
  },
  {
    description:
      '<i><b>Leona</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">unable</a></span> to move or attack while Zenith Blade is in flight. She can cast any of her abilities during the dash.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Leona_Solar_Flare.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Leona</b> calls down a solar flare that strikes upon the target location after 0.<small>625</small> seconds, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area before impact and for another 3 seconds afterwards. Enemies hit are dealt <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '100 / 175 / 250 (+ 80% AP)',
        values: [100, 175, 250],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '100 / 175 / 250',
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
      'Targets are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 80% for 1.<small>75</small> seconds, or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for the same duration if they are hit by the epicenter.',
    leveling: [],
  },
];
export const Leona = { I, Q, W, E, R };
