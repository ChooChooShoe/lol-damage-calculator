import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Annie';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Annie_Pyromania.png',
    description:
      '<span class="template_sbc"><b>Innate - Pyromania:</b></span> <b>Annie</b> generates a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Pyromania</i> whenever she hits an enemy with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Annie" data-ability="Disintegrate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Annie/LoL#Disintegrate" title="Disintegrate"><img alt="Disintegrate" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Annie/LoL#Disintegrate" title="Annie/LoL">Disintegrate</a></span></span></i> or casts her other <a href="/wiki/Champion_ability" title="Champion ability">abilities</a>, stacking up to 4 times, at which she gains <i>Energized</i>.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Energized:</b></span> <b>Annie</b> empowers her next cast of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Annie" data-ability="Disintegrate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Annie/LoL#Disintegrate" title="Disintegrate"><img alt="Disintegrate" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Annie/LoL#Disintegrate" title="Annie/LoL">Disintegrate</a></span></span></i>, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Annie" data-ability="Incinerate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Annie/LoL#Incinerate" title="Incinerate"><img alt="Incinerate" src="/wiki/images/Annie_Incinerate.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Annie/LoL#Incinerate" title="Annie/LoL">Incinerate</a></span></span></i>, or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Annie" data-ability="Summon: Tibbers" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Annie/LoL#Summon:_Tibbers" title="Summon: Tibbers"><img alt="Summon: Tibbers" src="/wiki/images/Annie_Summon-_Tibbers.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Annie/LoL#Summon:_Tibbers" title="Annie/LoL">Summon: Tibbers</a></span></span></i> to consume all <i>Pyromania</i> stacks to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> enemies hit for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="1.25;1" data-finish="1.75;11" data-bot_values="1.25;1.5;1.75" data-top_values="1;6;11">1.<small>25</small> / 1.<small>5</small> / 1.<small>75</small> (based on level)</span> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: '25 / 1',
        values: [25, 1],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 1',
      },
      {
        effectType: 'Unique',
        name: 'Line 3:',
        raw: '5 / 1',
        values: [5, 1],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5 / 1',
      },
      {
        effectType: 'Unique',
        name: 'Line 4:',
        raw: '75 (based on level) seconds',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'seconds',
        pre: '75',
        post: 'seconds',
      },
    ],
  },
  {
    description:
      '<b>Annie</b> gains maximum stacks of <i>Pyromania</i> when the game starts and upon <a href="/wiki/Death" title="Death">respawning</a>. She will lose <i>Energized</i> and all <i>Pyromania</i> stacks upon <a href="/wiki/Death" title="Death">death</a>.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Annie_Disintegrate.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Annie</b> hurls a fireball at the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic damage:',
        raw: '80 / 115 / 150 / 185 / 220 (+ 80% AP)',
        values: [80, 115, 150, 185, 220],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 115 / 150 / 185 / 220',
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
      'If this kills the target, 50% of the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is reduced and the <span style="color: #0099CC; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;mana cost</span></span> is refunded.',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Annie_Incinerate.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Annie</b> releases fire in a cone in the target direction, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic damage:',
        raw: '70 / 115 / 160 / 205 / 250 (+ 85% AP)',
        values: [70, 115, 160, 205, 250],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 115 / 160 / 205 / 250',
        children: [
          {
            values: 85,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 85% AP',
          },
        ],
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Annie_Molten_Shield.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Annie</b> grants herself or the target allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> and <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tibbers" title="Tibbers"><img alt="Tibbers" src="/wiki/images/TibbersSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tibbers" class="mw-redirect" title="Tibbers">Tibbers</a></span></span> a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 3 seconds and <span style="color: #F5EE99; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="20;" data-finish="50;" data-bot_values="20;21.76;23.53;25.29;27.06;28.82;30.59;32.35;34.12;35.88;37.65;39.41;41.18;42.94;44.71;46.47;48.24;50" data-top_values="" data-bot_key="%">20% − 50% (based on level)</span></span> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> that decays over 1.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Shield',
        name: 'Line 1:',
        raw: ' Annie grants herself or the target allied  champion and  Tibbers a  shield for 3 seconds and 20% − 50% (based on level)  bonus movement speed that decays over 1',
        damagetype: 'None',
        shieldType: 'SelfShield',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'bonus movement speed that decays over 1',
        pre: 'Annie grants herself or the target allied  champion and  Tibbers a  shield for 3 seconds and 20% − 50%',
        post: 'bonus movement speed that decays over 1',
      },
      {
        effectType: 'Unique',
        name: 'Shield Strength:',
        raw: '60 / 100 / 140 / 180 / 220 (+ 40% AP)',
        values: [60, 100, 140, 180, 220],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 100 / 140 / 180 / 220',
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
      'While <i>Molten Shield</i> is active, enemies that deal damage to it take <span style="color: #00B0F0; white-space:normal">magic damage</span>. This may only occur once per enemy per cast for each active <i>Molten Shield</i>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '30 / 45 / 60 / 75 / 90 (+ 40% AP)',
        values: [30, 45, 60, 75, 90],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 45 / 60 / 75 / 90',
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
const R: SubSkill[] = [
  {
    img: '/wiki/images/Annie_Summon-_Tibbers.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Annie</b> summons <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tibbers" title="Tibbers"><img alt="Tibbers" src="/wiki/images/TibbersSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tibbers" class="mw-redirect" title="Tibbers">Tibbers</a></span></span> to the target location in a burst of flame, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies near him. <i>Summon: Tibbers</i> can be recast at any time while <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tibbers" title="Tibbers"><img alt="Tibbers" src="/wiki/images/TibbersSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tibbers" class="mw-redirect" title="Tibbers">Tibbers</a></span></span> is alive.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Initial Magic Damage:',
        raw: '150 / 275 / 400 (+ 75% AP)',
        values: [150, 275, 400],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 275 / 400',
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
      '<span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tibbers" title="Tibbers"><img alt="Tibbers" src="/wiki/images/TibbersSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tibbers" class="mw-redirect" title="Tibbers">Tibbers</a></span></span> then remains on the field as a controllable <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Pet"><a href="/wiki/Pets" title="Pets"><img alt="Summon Tibbers.png" src="/wiki/images/Annie_Summon-_Tibbers.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Pets" title="Pets">pet</a></span> for up to 45 seconds.',
    leveling: [],
  },
  {
    img: '/wiki/images/Annie_Command-_Tibbers.png',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Annie</b> directs <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tibbers" title="Tibbers"><img alt="Tibbers" src="/wiki/images/TibbersSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tibbers" class="mw-redirect" title="Tibbers">Tibbers</a></span></span> to the target location.',
    leveling: [],
  },
  {
    description:
      '<i>Summon: Tibber\'s recast can be used while affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast-inhibiting crowd control"><a href="/wiki/Crowd_control#Disrupting" title="Crowd control#Disrupting"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disrupting" title="Crowd control">cast-inhibiting crowd control</a></span>. See <a href="/wiki/Annie/LoL#Pets" title="Annie/LoL">Pets</a> for more details about <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tibbers" title="Tibbers"><img alt="Tibbers" src="/wiki/images/TibbersSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tibbers" class="mw-redirect" title="Tibbers">Tibbers</a></span></span>.</i>',
    leveling: [],
  },
];
export const Annie = { I, Q, W, E, R };
