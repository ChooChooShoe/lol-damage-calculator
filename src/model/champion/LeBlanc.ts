import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'LeBlanc';
const I: SubSkill[] = [
  {
    img: '/wiki/images/LeBlanc_Mirror_Image.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Periodically, when <b>LeBlanc</b> is damaged to <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">40% <b>maximum</b> health</span></span>, she creates a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clone</a></span> of herself, after which they both instantly become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisibility"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisible</a></span> for 1 second.',
    leveling: [],
  },
  {
    description:
      'The clone can basic attack but deals no damage, lasts for 8 seconds, and starts running 1900 units towards a random place in front of <b>LeBlanc</b> decided the moment it spawns.',
    leveling: [],
  },
  {
    description:
      '<i>See <a href="/wiki/LeBlanc/LoL#Pets" title="LeBlanc/LoL">Pets</a> for more details about <b>LeBlanc\'s</b> clone.</i>',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/LeBlanc_Sigil_of_Malice.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>LeBlanc</b> projects an orb at the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and marks them for 3.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '65 / 90 / 115 / 140 / 165 (+ 40% AP)',
        values: [65, 90, 115, 140, 165],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '65 / 90 / 115 / 140 / 165',
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
      '<b>Leblanc\'s</b> next damaging <a href="/wiki/Champion_ability" title="Champion ability">ability</a> against the marked target will consume the mark to deal them the <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">same damage</span> again.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '130 / 180 / 230 / 280 / 330 (+ 80% AP)',
        values: [130, 180, 230, 280, 330],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '130 / 180 / 230 / 280 / 330',
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
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/LeBlanc_Distortion.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>LeBlanc</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to all nearby enemies upon arrival and leaving a return pad at the cast location for 4 seconds. <i>Distortion</i> can be recast after 0.<small>2</small> seconds of the dash ending for the pad\'s duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '75 / 115 / 155 / 195 / 235 (+ 60% AP)',
        values: [75, 115, 155, 195, 235],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '75 / 115 / 155 / 195 / 235',
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
    ],
  },
  {
    img: '/wiki/images/LeBlanc_Distortion_2.png',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>LeBlanc</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> to <i>Distortion\'s</i> return pad, regardless of range.',
    leveling: [],
  },
  {
    description:
      '<i>Distortion will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/LeBlanc_Ethereal_Chains.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>LeBlanc</b> flings an illusory chain in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy it hits and forms a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tether</a></span> between <b>LeBlanc</b> and the target for 1.<small>5</small> seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '50 / 70 / 90 / 110 / 130 (+ 30% AP)',
        values: [50, 70, 90, 110, 130],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 70 / 90 / 110 / 130',
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
      'If the tether is not broken by the end of its duration, the target is dealt <span style="color: #00B0F0; white-space:normal">magic damage</span> and is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span> for 1.<small>5</small> seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '80 / 120 / 160 / 200 / 240 (+ 70% AP)',
        values: [80, 120, 160, 200, 240],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 120 / 160 / 200 / 240',
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
        name: 'Total Damage:',
        raw: '130 / 190 / 250 / 310 / 370 (+ 100% AP)',
        values: [130, 190, 250, 310, 370],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '130 / 190 / 250 / 310 / 370',
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
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/LeBlanc_Mimic.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>LeBlanc</b> casts a mimicked version of her most recently used basic ability, applying the same effects and dealing <span style="color: #00B0F0; white-space:normal"><b>modified</b> magic damage</span>.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="LeBlanc" data-ability="Mimic: Sigil of Malice" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/LeBlanc/LoL#Mimic:_Sigil_of_Malice" title="Mimic: Sigil of Malice"><img alt="Mimic: Sigil of Malice" src="/wiki/images/LeBlanc_Mimic-_Sigil_of_Malice.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/LeBlanc/LoL#Mimic:_Sigil_of_Malice" title="LeBlanc/LoL">Mimic: Sigil of Malice</a></span></span>:</b></span> Deals modified damage and double damage upon triggering the mark.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 140 / 210 (+ 40% AP)',
        values: [70, 140, 210],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 140 / 210',
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
      {
        effectType: 'Unique',
        name: 'Enhanced Damage:',
        raw: '140 / 280 / 420 (+ 80% AP)',
        values: [140, 280, 420],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '140 / 280 / 420',
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
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '210 / 420 / 630 (+ 120% AP)',
        values: [210, 420, 630],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '210 / 420 / 630',
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
  {
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="LeBlanc" data-ability="Mimic: Distortion" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/LeBlanc/LoL#Mimic:_Distortion" title="Mimic: Distortion"><img alt="Mimic: Distortion" src="/wiki/images/LeBlanc_Mimic-_Distortion.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/LeBlanc/LoL#Mimic:_Distortion" title="LeBlanc/LoL">Mimic: Distortion</a></span></span>:</b></span> Deals modified damage.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '150 / 300 / 450 (+ 75% AP)',
        values: [150, 300, 450],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 300 / 450',
        children: [
          {
            values: 75,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 75% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="LeBlanc" data-ability="Mimic: Ethereal Chains" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/LeBlanc/LoL#Mimic:_Ethereal_Chains" title="Mimic: Ethereal Chains"><img alt="Mimic: Ethereal Chains" src="/wiki/images/LeBlanc_Mimic-_Ethereal_Chains.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/LeBlanc/LoL#Mimic:_Ethereal_Chains" title="LeBlanc/LoL">Mimic: Ethereal Chains</a></span></span>:</b></span> Deals modified damage and double damage after the tether lasts its full duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 140 / 210 (+ 40% AP)',
        values: [70, 140, 210],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 140 / 210',
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
      {
        effectType: 'Unique',
        name: 'Enhanced Damage:',
        raw: '140 / 280 / 420 (+ 80% AP)',
        values: [140, 280, 420],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '140 / 280 / 420',
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
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '210 / 420 / 630 (+ 120% AP)',
        values: [210, 420, 630],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '210 / 420 / 630',
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
export const LeBlanc = { I, Q, W, E, R };
