import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Karma';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Karma_Gathering_Fire.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karma" data-ability="Mantra" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karma/LoL#Mantra" title="Mantra\'s"><img alt="Mantra\'s" src="/wiki/images/Karma_Mantra.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karma/LoL#Mantra" title="Karma/LoL">Mantra\'s</a></span></span></i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> is reduced by 5 seconds for each enemy champion hit by <b>Karma\'s</b> damaging <a href="/wiki/Champion_ability" title="Champion ability">abilities</a>.',
    leveling: [],
  },
];
const Q1: SubSkill[] = [
  {
    img: '/wiki/images/Karma_Inner_Flame.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Karma</b> fires a bolt in the target direction that explodes on the first enemy hit, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 35% for 1.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 120 / 170 / 220 / 270 (+ 40% AP)',
        values: [70, 120, 170, 220, 270],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 120 / 170 / 220 / 270',
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
const Q2: SubSkill[] = [
  {
    img: '/wiki/images/Karma_Soulflare.png',
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karma" data-ability="Mantra" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karma/LoL#Mantra" title="Mantra"><img alt="Mantra" src="/wiki/images/Karma_Mantra.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karma/LoL#Mantra" title="Karma/LoL">Mantra</a></span></span> Bonus:</b></span> <i>Inner Flame</i> deals increased damage, and fires a larger bolt that also explodes at maximum range.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Magic Damage:',
        raw: ' 40 / 100 / 160 / 220 (+ 30% AP)',
        values: [40, 100, 160, 220],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 100 / 160 / 220',
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
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '70 / 120 / 170 / 220 / 270 (+  40 / 100 / 160 / 220) (+ 70% AP)',
        values: [70, 120, 170, 220, 270],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 120 / 170 / 220 / 270',
        children: [
          {
            values: [40, 100, 160, 220],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '+  40 / 100 / 160 / 220',
          },
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
      'The explosion creates a field for 1.<small>5</small> seconds that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> enemies within by 50%, which then ruptures to deal <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: ' 35 / 140 / 245 / 350 (+ 60% AP)',
        values: [35, 140, 245, 350],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '35 / 140 / 245 / 350',
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
        name: 'Total Bonus Damage:',
        raw: ' 75 / 240 / 405 / 570 (+ 90% AP)',
        values: [75, 240, 405, 570],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '75 / 240 / 405 / 570',
        children: [
          {
            values: 90,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 90% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Damage:',
        raw: '70 / 120 / 170 / 220 / 270 (+  75 / 240 / 405 / 570) (+ 130% AP)',
        values: [70, 120, 170, 220, 270],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 120 / 170 / 220 / 270',
        children: [
          {
            values: [75, 240, 405, 570],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '+  75 / 240 / 405 / 570',
          },
          {
            values: 130,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 130% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Soulflare</i> scales with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karma" data-ability="Mantra" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karma/LoL#Mantra" title="Mantra\'s"><img alt="Mantra\'s" src="/wiki/images/Karma_Mantra.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karma/LoL#Mantra" title="Karma/LoL">Mantra\'s</a></span></span></i> rank.',
    leveling: [],
  },
];
const W1: SubSkill[] = [
  {
    img: '/wiki/images/Karma_Focused_Resolve.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Karma</b> deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the target enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> and forms a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tether</a></span> between her and them for 2 seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '40 / 65 / 90 / 115 / 140 (+ 45% AP)',
        values: [40, 65, 90, 115, 140],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 65 / 90 / 115 / 140',
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
      'If the tether is not broken by the end of its duration, the target is dealt the same <span style="color: #00B0F0; white-space:normal">magic damage</span> again and is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span> for a duration, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '80 / 130 / 180 / 230 / 280 (+ 90% AP)',
        values: [80, 130, 180, 230, 280],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 130 / 180 / 230 / 280',
        children: [
          {
            values: 90,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 90% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Root Duration:',
        raw: '1.4 / 1.55 / 1.7 / 1.85 / 2',
        values: [1.4, 1.55, 1.7, 1.85, 2],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1.4 / 1.55 / 1.7 / 1.85 / 2',
      },
    ],
  },
];
const W2: SubSkill[] = [
  {
    img: '/wiki/images/Karma_Renewal.png',
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karma" data-ability="Mantra" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karma/LoL#Mantra" title="Mantra"><img alt="Mantra" src="/wiki/images/Karma_Mantra.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karma/LoL#Mantra" title="Karma/LoL">Mantra</a></span></span> Bonus:</b></span> <i>Focused Resolve\'s</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">root</a></span> duration is increased. <br><br><b>Karma</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> for <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">17% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;1% per 100 AP)</span> of her <b>missing</b> health</span></span> once on-cast, and again once the tether lasts its full duration or the target dies while tethered.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 2:',
        raw: ' Karma  heals for  17% (+ 1% per 100 AP) of her missing health once on-cast, and again once the tether lasts its full duration or the target dies while tethered',
        healType: 'OutgoingHeals',
        values: 1,
        valuesIsPercent: true,
        user: 'target',
        units: 'missing_hp',
        unitsText:
          'of her missing health once on-cast, and again once the tether lasts its full duration or the target dies while tethered',
        pre: 'Karma  heals for  17%',
        post: 'of her missing health once on-cast, and again once the tether lasts its full duration or the target dies while tethered',
        children: [
          {
            values: 1,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 1% per 100 AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Root Duration Increase:',
        raw: ' 0.5 / 0.75 / 1 / 1.25',
        values: [0.5, 0.75, 1, 1.25],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '0.5 / 0.75 / 1 / 1.25',
      },
      {
        effectType: 'Unique',
        name: 'Total Root Duration:',
        raw: '1.4 / 1.55 / 1.7 / 1.85 / 2 (+  0.5 / 0.75 / 1 / 1.25)',
        values: [1.4, 1.55, 1.7, 1.85, 2],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1.4 / 1.55 / 1.7 / 1.85 / 2',
        children: [
          {
            values: [0.5, 0.75, 1, 1.25],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '+  0.5 / 0.75 / 1 / 1.25',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Renewal</i> scales with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karma" data-ability="Mantra" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karma/LoL#Mantra" title="Mantra\'s"><img alt="Mantra\'s" src="/wiki/images/Karma_Mantra.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karma/LoL#Mantra" title="Karma/LoL">Mantra\'s</a></span></span></i> rank.',
    leveling: [],
  },
];
const E1: SubSkill[] = [
  {
    img: '/wiki/images/Karma_Inspire.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Karma</b> grants a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> to herself or the target allied champion for 2.<small>5</small> seconds as well as <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">40% <b>bonus</b> movement speed</span></span> for 1.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Shield Strength:',
        raw: '80 / 120 / 160 / 200 / 240 (+ 45% AP)',
        values: [80, 120, 160, 200, 240],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 120 / 160 / 200 / 240',
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
];
const E2: SubSkill[] = [
  {
    img: '/wiki/images/Karma_Defiance.png',
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karma" data-ability="Mantra" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karma/LoL#Mantra" title="Mantra"><img alt="Mantra" src="/wiki/images/Karma_Mantra.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karma/LoL#Mantra" title="Karma/LoL">Mantra</a></span></span> - Active:</b></span> <i>Inspire\'s</i> shield strength is increased. <br><br><i>Inspire</i> spreads to surrounding allied champions at 30% effectiveness.<br><i>Secondary targets receive <span style="color: #F5EE99; white-space:normal">12% <b>bonus</b> movement speed</span>.</i>',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Shield:',
        raw: ' 25 / 75 / 125 / 175 (+ 45% AP)',
        values: [25, 75, 125, 175],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 75 / 125 / 175',
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
      {
        effectType: 'Unique',
        name: 'Total Shield:',
        raw: '80 / 120 / 160 / 200 / 240 (+  25 / 75 / 125 / 175) (+ 90% AP)',
        values: [80, 120, 160, 200, 240],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 120 / 160 / 200 / 240',
        children: [
          {
            values: [25, 75, 125, 175],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '+  25 / 75 / 125 / 175',
          },
          {
            values: 90,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 90% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Reduced Bonus Shield:',
        raw: ' 7.5 / 24 / 40.5 / 57 (+ 13.5% AP)',
        values: [7.5, 24, 40.5, 57],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '7.5 / 24 / 40.5 / 57',
        children: [
          {
            values: 13.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 13.5% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Reduced Total Shield:',
        raw: '24 / 36 / 48 / 60 / 72 (+  7.5 / 22.5 / 37.5 / 52.5) (+ 27% AP)',
        values: [24, 36, 48, 60, 72],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '24 / 36 / 48 / 60 / 72',
        children: [
          {
            values: [7.5, 22.5, 37.5, 52.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '+  7.5 / 22.5 / 37.5 / 52.5',
          },
          {
            values: 27,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 27% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Defiance</i> scales with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karma" data-ability="Mantra" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karma/LoL#Mantra" title="Mantra\'s"><img alt="Mantra\'s" src="/wiki/images/Karma_Mantra.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karma/LoL#Mantra" title="Karma/LoL">Mantra\'s</a></span></span></i> rank.',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Karma_Mantra.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Karma</b> empowers her next basic ability within 8 seconds for an additional effect. <br><br><i>Mantra can be used while affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast-inhibiting crowd control"><a href="/wiki/Crowd_control#Disrupting" title="Crowd control#Disrupting"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disrupting" title="Crowd control">cast-inhibiting crowd control</a></span>.</i>',
    leveling: [],
  },
  {
    description:
      "<b>Karma</b> begins the game with one rank in <i>Mantra</i>. Her empowered abilities scale based on <i>Mantra's</i> rank.",
    leveling: [],
  },
];
export const Karma = { I, Q1, Q2, W1, W2, E1, E2, R };
