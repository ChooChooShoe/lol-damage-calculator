import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Viktor';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Viktor_Glorious_Evolution.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Viktor</b> can augment each of his basic <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> at the cost of 100 <i>Hex Fragments</i>, which he gains from killing enemies:\n',
    leveling: [],
  },
  {
    description:
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viktor" data-ability="Chaos Storm" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viktor/LoL#Chaos_Storm" title="Chaos Storm"><img alt="Chaos Storm" src="/wiki/images/Viktor_Chaos_Storm.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viktor/LoL#Chaos_Storm" title="Viktor/LoL">Chaos Storm</a></span></span></i> becomes augmented once all of <b>Viktor\'s</b> basic abilities have been augmented.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Viktor_Siphon_Power.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Viktor</b> throws a device at the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span>. He also grants himself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="27;" data-finish="105;" data-bot_values="27;31.59;36.18;40.76;45.35;49.94;54.53;59.12;63.71;68.29;72.88;77.47;82.06;86.65;91.24;95.82;100.41;105" data-top_values="">27 − 105 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;18% AP)</span> for 2.<small>5</small> seconds and gains <i>Discharge</i> for 3.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Shield',
        name: 'Line 2:',
        raw: ' He also grants himself a  shield for 27 − 105 (based on level) (+ 18% AP) for 2',
        damagetype: 'None',
        shieldType: 'SelfShield',
        values: [
          27, 31.59, 36.18, 40.76, 45.35, 49.94, 54.53, 59.12, 63.71, 68.29,
          72.88, 77.47, 82.06, 86.65, 91.24, 95.82, 100.41, 105,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'for 2',
        pre: 'He also grants himself a  shield for 27 − 105',
        post: 'for 2',
        children: [
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
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '60 / 75 / 90 / 105 / 120 (+ 40% AP)',
        values: [60, 75, 90, 105, 120],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 75 / 90 / 105 / 120',
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
    img: '/wiki/images/Viktor_Discharge.png',
    description:
      '<span class="template_sbc"><b>Discharge:</b></span> <b>Viktor\'s</b> next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> is empowered to become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">non-projectile</a></span> and deal <span style="color: #00B0F0; white-space:normal"><b>modified</b> magic damage</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Modified Magic Damage:',
        raw: '20 / 45 / 70 / 95 / 120 (+ 100% AD) (+ 60% AP)',
        values: [20, 45, 70, 95, 120],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 45 / 70 / 95 / 120',
        children: [
          {
            values: 100,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 100% AD',
          },
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
        name: 'Total Magic Damage:',
        raw: '80 / 120 / 160 / 200 / 240 (+ 100% AD) (+ 100% AP)',
        values: [80, 120, 160, 200, 240],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 120 / 160 / 200 / 240',
        children: [
          {
            values: 100,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 100% AD',
          },
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
  {
    img: '/wiki/images/Viktor_Augment-_Turbocharge.png',
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viktor" data-ability="Glorious Evolution" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viktor/LoL#Glorious_Evolution" title="Augment: Turbocharge"><img alt="Augment: Turbocharge" src="/wiki/images/Viktor_Glorious_Evolution.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viktor/LoL#Glorious_Evolution" title="Viktor/LoL">Augment: Turbocharge</a></span></span>:</b></span> After the device hits, <b>Viktor</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">30% <b>bonus</b> movement speed</span></span> for 2.<small>5</small> seconds and the shield\'s strength is increased by 60%, up to <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="48;" data-finish="184;" data-bot_values="48;56;64;72;80;88;96;104;112;120;128;136;144;152;160;168;176;184" data-top_values="">48 − 184 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;32% AP)</span>.',
    leveling: [
      {
        effectType: 'Shield',
        name: 'Line 2:',
        raw: "5 seconds and the shield's strength is increased by 60%, up to 48 − 184 (based on level) (+ 32% AP)",
        damagetype: 'None',
        shieldType: 'SelfShield',
        values: [
          48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144, 152, 160,
          168, 176, 184,
        ],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: "5 seconds and the shield's strength is increased by 60%, up to 48 − 184",
        children: [
          {
            values: 32,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 32% AP',
          },
        ],
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Viktor_Gravity_Field.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Viktor</b> deploys a gravity field at the target location for 4 seconds. After a 0.<small>75</small>-second delay, it activates to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> enemies within, persisting for 0.<small>25</small> seconds after leaving the area or generating 3 stacks.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Slow:',
        raw: '30 / 34 / 38 / 42 / 45%',
        values: [30, 34, 38, 42, 45],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 34 / 38 / 42 / 45%',
      },
    ],
  },
  {
    description:
      'The field applies a <a href="/wiki/Stack" title="Stack">stack</a> to enemies within every 0.<small>5</small> seconds, stacking up to 3 times. The third stack consumes them all to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knock down</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> the target for 1.<small>5</small> seconds. The target then becomes immune to <i>Gravity Field\'s</i> effects, occurring once per cast.',
    leveling: [],
  },
  {
    img: '/wiki/images/Viktor_Augment-_Magnetize.png',
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viktor" data-ability="Glorious Evolution" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viktor/LoL#Glorious_Evolution" title="Augment: Magnetize"><img alt="Augment: Magnetize" src="/wiki/images/Viktor_Glorious_Evolution.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viktor/LoL#Glorious_Evolution" title="Viktor/LoL">Augment: Magnetize</a></span></span>:</b></span> <b>Viktor\'s</b> other abilities, excluding <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viktor" data-ability="Chaos Storm" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viktor/LoL#Chaos_Storm" title="Chaos Storm\'s"><img alt="Chaos Storm\'s" src="/wiki/images/Viktor_Chaos_Storm.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viktor/LoL#Chaos_Storm" title="Viktor/LoL">Chaos Storm\'s</a></span></span></i> persistent damage, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> enemies hit by 20% for 1 second.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Viktor_Death_Ray.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Viktor</b> fires an energy beam along the target path that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and briefly grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 110 / 150 / 190 / 230 (+ 50% AP)',
        values: [70, 110, 150, 190, 230],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 110 / 150 / 190 / 230',
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
    img: '/wiki/images/Viktor_Augment-_Aftershock.png',
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viktor" data-ability="Glorious Evolution" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viktor/LoL#Glorious_Evolution" title="Augment: Aftershock"><img alt="Augment: Aftershock" src="/wiki/images/Viktor_Glorious_Evolution.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viktor/LoL#Glorious_Evolution" title="Viktor/LoL">Augment: Aftershock</a></span></span>:</b></span> The path explodes along the beam\'s wake after 1 second, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '20 / 50 / 80 / 110 / 140 (+ 80% AP)',
        values: [20, 50, 80, 110, 140],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 50 / 80 / 110 / 140',
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
        raw: '90 / 160 / 230 / 300 / 370 (+ 130% AP)',
        values: [90, 160, 230, 300, 370],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '90 / 160 / 230 / 300 / 370',
        children: [
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
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Viktor_Chaos_Storm.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Viktor</b> conjures an arcane singularity at the target location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within the area and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Disrupt"><a href="/wiki/Types_of_Crowd_Control#Disrupt" title="Types of Crowd Control#Disrupt"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Disrupt" title="Types of Crowd Control">disrupting</a></span> their <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeled abilities</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '100 / 175 / 250 (+ 50% AP)',
        values: [100, 175, 250],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '100 / 175 / 250',
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
      'The singularity then remains active for 6.<small>5</small> seconds, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within it every second and granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area. The singularity targets the nearest champion hit by its initial damage and will follow them, moving faster based on its proximity to <b>Viktor</b>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage Per Tick:',
        raw: '65 / 105 / 145 (+ 45% AP)',
        values: [65, 105, 145],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '65 / 105 / 145',
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
        name: 'Total Magic Damage:',
        raw: '490 / 805 / 1120 (+ 320% AP)',
        values: [490, 805, 1120],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '490 / 805 / 1120',
        children: [
          {
            values: 320,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 320% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Chaos Storm</i> can be recast at any time while the singularity is active.',
    leveling: [],
  },
  {
    img: '/wiki/images/Viktor_Chaos_Storm_2.png',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Viktor</b> directs the singularity to the target location or enemy champion.',
    leveling: [],
  },
  {
    img: '/wiki/images/Viktor_Augment-_Perfect_Storm.png',
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viktor" data-ability="Glorious Evolution" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viktor/LoL#Glorious_Evolution" title="Augment: Perfect Storm"><img alt="Augment: Perfect Storm" src="/wiki/images/Viktor_Glorious_Evolution.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viktor/LoL#Glorious_Evolution" title="Viktor/LoL">Augment: Perfect Storm</a></span></span>:</b></span> The singularity moves 25% faster.',
    leveling: [],
  },
  {
    description:
      '<i>Chaos Storm\'s recast can be used while affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast-inhibiting crowd control"><a href="/wiki/Crowd_control#Disrupting" title="Crowd control#Disrupting"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disrupting" title="Crowd control">cast-inhibiting crowd control</a></span>.</i>',
    leveling: [],
  },
];
export const Viktor = { I, Q, W, E, R };
