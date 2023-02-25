import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Singed';

export default {
  'Noxious Slipstream': {
    name: 'Noxious Slipstream',
    display_name: 'Noxious Slipstream',
    champion: 'Singed',
    skill: 'I',
    image: {
      full: 'Singed_Passive.png',
      sprite: 'passive3.png',
      group: 'passive',
      x: 240,
      y: 96,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Center-to-edge">225</span>',
    ontargetcdstatic: '8',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> Whenever <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Singed" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Singed/LoL" title="Singed"><img alt="Singed" src="/wiki/images/Singed_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Singed/LoL" title="Singed/LoL">Singed</a></span></span> moves near a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, he gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for a short time, which refreshes on subsequent passes and stacks up to a cap.',
      'This effect cannot occur on the same target more than once every few seconds.',
    ],
    description: [
      {
        description:
          'Innate: Whenever Singed moves near a  champion, he gains a stack of Noxious Slipstream for 2 seconds, refreshing on subsequent passes and stacking up to 25 times.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> Whenever <b>Singed</b> moves near a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, he gains a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Noxious Slipstream</i> for 2 seconds, refreshing on subsequent passes and stacking up to 25 times.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Innate:',
            raw: 'Whenever Singed moves near a  champion, he gains a stack of Noxious Slipstream for 2 seconds, refreshing on subsequent passes and stacking up to 25 times.',
            min: 0,
            max: 25,
            description:
              'Whenever Singed moves near a  champion, he gains a stack of Noxious Slipstream for 2 seconds, refreshing on subsequent passes and stacking up to 25 times.',
            values: 2,
            units: 'genericStacks',
            unitsText:
              'Singed moves near a  champion, he gains a stack of Noxious Slipstream for 2 seconds, refreshing on subsequent passes and stacking up to 25 times.',
            pre: 'Whenever Singed moves near a  champion, he gains a stack of Noxious Slipstream for 2 seconds, refreshing on subsequent passes and stacking up to 25 times.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Noxious_Slipstream.png',
        description:
          'Noxious Slipstream: For each stack, Singed gains  25% bonus movement speed, up to a maximum of 625%.',
        descriptionHTML:
          '<span class="template_sbc"><b>Noxious Slipstream:</b></span> For each stack, <b>Singed</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">25% <b>bonus</b> movement speed</span></span>, up to a maximum of <span style="color: #F5EE99; white-space:normal">625%</span>.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Noxious Slipstream:',
            raw: 'For each stack, Singed gains  25% bonus movement speed, up to a maximum of 625%.',
            min: 0,
            max: 10,
            description:
              'For each stack, Singed gains  25% bonus movement speed, up to a maximum of 625%.',
            values: 2,
            valuesIsPercent: true,
            units: 'genericStacks',
            unitsText:
              'bonus movement speed, up to a maximum of 625each stack, Singed gains  25',
            pre: 'For each stack, Singed gains  25% bonus movement speed, up to a maximum of 625%.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'This effect cannot occur on the same target more than once every few seconds.',
        descriptionHTML:
          'This effect cannot occur on the same target more than once every few seconds.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes: '* No additional details.',
  },
  'Poison Trail': {
    name: 'Poison Trail',
    display_name: 'Poison Trail',
    champion: 'Singed',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'PoisonTrail.png',
      sprite: 'spell11.png',
      group: 'spell',
      x: 288,
      y: 144,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Individual gas clouds">180</span>',
    cast_time: 'none',
    cost: '13',
    costtype: 'Mana per second',
    static: '1',
    blurb: [
      '<span class="template_sbc"><b>Toggle:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Singed" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Singed/LoL" title="Singed"><img alt="Singed" src="/wiki/images/Singed_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Singed/LoL" title="Singed/LoL">Singed</a></span></span> continually creates a toxic cloud that shortly lingers in his wake, which continually inflicts <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Poison"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL"><img alt="Poison icon.png" src="/wiki/images/Poison_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL">poison</a></span> to enemies within.',
      '<span class="template_sbc"><b><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Poison"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL"><img alt="Poison icon.png" src="/wiki/images/Poison_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> poison</span>:</b></span> The target continually takes <span style="color: #00B0F0; white-space:normal">magic damage</span> over a short time. Subsequent inflictions refresh the duration.',
    ],
    description: [
      {
        icon: '/wiki/images/Poison_Trail.png',
        description:
          'Toggle: Singed continually creates a toxic cloud in his wake that lingers for 3.25 seconds. The cloud inflicts  poison to enemies within, and resets the duration every 0.5 seconds while they remain.',
        descriptionHTML:
          '<span class="template_sbc"><b>Toggle:</b></span> <b>Singed</b> continually creates a toxic cloud in his wake that lingers for 3.<small>25</small> seconds. The cloud inflicts <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Poison"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL"><img alt="Poison icon.png" src="/wiki/images/Poison_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL">poison</a></span> to enemies within, and resets the duration every 0.<small>5</small> seconds while they remain.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Toggle:',
            raw: 'Singed continually creates a toxic cloud in his wake that lingers for 3.25 seconds',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'continually creates a toxic cloud in his wake that lingers for 3.25 seconds',
            pre: 'Singed continually creates a toxic cloud in his wake that lingers for 3.25 seconds',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'poison: The target takes magic damage every 0.25 seconds over 2 seconds. Subsequent inflictions refresh the duration.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Poison"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL"><img alt="Poison icon.png" src="/wiki/images/Poison_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> poison</span>:</b></span> The target takes <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>25</small> seconds over 2 seconds. Subsequent inflictions refresh the duration.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage per Tick:',
            values: '5 / 7.5 / 10 / 12.5 / 15 (+ 11.25% AP)',
            valuesHTML:
              '5 / 7.<small>5</small> / 10 / 12.<small>5</small> / 15 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;11.<small>25</small>% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage per Tick:',
            raw: '5 / 7.5 / 10 / 12.5 / 15 (+ 11.25% AP)',
            damagetype: 'Magic',
            values: [5, 7.5, 10, 12.5, 15],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 7.5 / 10 / 12.5 / 15',
            children: [
              {
                values: 11.25,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 11.25% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'AoEDoT',
    notes:
      '*Toggle abilities do not count as ability activations for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li>The clouds check for enemy targets in the area immediately upon being spawned. After a 0.<small>25</small>-0.<small>5</small> second delay, they check every 0.<small>25</small> seconds again until they fade.\n<ul><li>Targets already with the DoT can have the debuff refreshed only every 0.<small>5</small> seconds.</li>\n<li>Due to the inconsistent offset between the first and future ticks is it possible for a static target to miss out on one refresh of the debuff, equal to 3 ticks of damage.</li></ul></li>\n<li>If <b>Singed</b> has moved less than 90 units since spawning the last poison cloud, it will spawn 35 units in front of him. They also only spawn every 1 second in this case.\n<ul><li>When <b>Singed</b> is moving faster than that, the poison clouds spawn more frequently and on top of himself.</li></ul></li></ul>',
  },
  'Mega Adhesive': {
    name: 'Mega Adhesive',
    display_name: 'Mega Adhesive',
    champion: 'Singed',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'MegaAdhesive.png',
      sprite: 'spell11.png',
      group: 'spell',
      x: 336,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '1000',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 265',
    cast_time: '0.<small>25</small>',
    cost: '60 / 70 / 80 / 90 / 100',
    costtype: 'Mana',
    cooldown: '17 / 16 / 15 / 14 / 13',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Singed" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Singed/LoL" title="Singed"><img alt="Singed" src="/wiki/images/Singed_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Singed/LoL" title="Singed/LoL">Singed</a></span></span> creates a field of adhesive at the target location for a short time that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounds</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> enemies within.',
    ],
    description: [
      {
        icon: '/wiki/images/Mega_Adhesive.png',
        description:
          'Active: Singed spills a potent adhesive that lands at the target location over 0.264 seconds to 0.528 seconds, creating a field for 3 seconds that  grounds enemies within and  slows them.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Singed</b> spills a potent adhesive that lands at the target location over <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="See notes"><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.25 seconds, but rounded up to the next game tick.">0.<small>264</small> seconds</span> to <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.5 seconds, but rounded up to the next game tick.">0.<small>528</small> seconds</span></span>, creating a field for 3 seconds that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounds</a></span> enemies within and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Slow:',
            values: '50 / 55 / 60 / 65 / 70%',
            valuesHTML: '50 / 55 / 60 / 65 / 70%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '50 / 55 / 60 / 65 / 70%',
            values: [50, 55, 60, 65, 70],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 55 / 60 / 65 / 70%',
          },
        ],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    spellshield: false,
    projectile: 'false',
    notes:
      '* The delay between the cast and the slow field being estabilished is inconsistent, due to a bug with tick rates.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup>\n<ul><li><ul><li><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karthus" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karthus/LoL" title="Karthus\'"><img alt="Karthus\'" src="/wiki/images/Karthus_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karthus/LoL" title="Karthus/LoL">Karthus\'</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karthus" data-ability="Lay Waste" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karthus/LoL#Lay_Waste" title="Lay Waste"><img alt="Lay Waste" src="/wiki/images/Karthus_Lay_Waste.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karthus/LoL#Lay_Waste" title="Karthus/LoL">Lay Waste</a></span></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karthus" data-ability="Defile" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karthus/LoL#Defile" title="Defile\'s"><img alt="Defile\'s" src="/wiki/images/Karthus_Defile.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karthus/LoL#Defile" title="Karthus/LoL">Defile\'s</a></span></span> ticks beyond the first and <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zac" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zac/LoL" title="Zac\'s"><img alt="Zac\'s" src="/wiki/images/Zac_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zac/LoL" title="Zac/LoL">Zac\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zac" data-ability="Let\'s Bounce!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zac/LoL#Let\'s_Bounce!" title="Let\'s Bounce!"><img alt="Let\'s Bounce!" src="/wiki/images/Zac_Let%27s_Bounce%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zac/LoL#Let\'s_Bounce!" title="Zac/LoL">Let\'s Bounce!</a></span></span></span> have similar issues.</li></ul></li>\n<li>The goo missile is VFX only, to convey which location Singed threw the adhesive at. It has a fixed travel time but is independent from when the zone is established. It is not destructible by effects such as <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Wind Wall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Wind Wall"><img alt="Wind Wall" src="/wiki/images/Yasuo_Wind_Wall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Yasuo/LoL">Wind Wall</a></span></span>.</li>\n<li><i>Mega Adhesive</i> can be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleansed</a></span> and resisted by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">crowd control immunity</a></span>, providing immunity to the persistent area of effect if the target stays within the area.\n<ul><li>Leaving the area and entering back inside applies the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">ground</a></span> regardless.</li></ul></li>\n<li><b>Singed</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">reveals</a></span> himself to enemies briefly on-cast from fog of war if enemy targets are in the target area of <i>Mega Adhesive</i>.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup></li></ul>',
  },
  Fling: {
    name: 'Fling',
    display_name: 'Fling',
    champion: 'Singed',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'Fling.png',
      sprite: 'spell11.png',
      group: 'spell',
      x: 384,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '125',
    cast_time: '0.<small>25</small>',
    cost: '60 / 70 / 80 / 90 / 100',
    costtype: 'Mana',
    cooldown: '10 / 9.<small>5</small> / 9 / 8.<small>5</small> / 8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Singed" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Singed/LoL" title="Singed"><img alt="Singed" src="/wiki/images/Singed_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Singed/LoL" title="Singed/LoL">Singed</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">flings</a></span> the target enemy over, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> based on <span style="color: #1F995C; white-space:normal">their <b>maximum</b> health</span>.',
      'If the target lands on <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Singed" data-ability="Mega Adhesive" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Singed/LoL#Mega_Adhesive" title="Mega Adhesive"><img alt="Mega Adhesive" src="/wiki/images/Singed_Mega_Adhesive.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Singed/LoL#Mega_Adhesive" title="Singed/LoL">Mega Adhesive</a></span></span></i>, they are briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Fling.png',
        description:
          'Active: Singed  flings the target enemy 550 units over himself, dealing magic damage, capped against  minions and  monsters.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Singed</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">flings</a></span> the target enemy 550 units over himself, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>, capped against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Singed  flings the target enemy 550 units over himself, dealing magic damage, capped against  minions and  monsters.',
            increasedStat: 'total_ap',
            values: 5,
            units: '',
            unitsText:
              'flings the target enemy 550 units over himself, dealing magic damage, capped against  minions and  monsters.',
            pre: 'Singed  flings the target enemy 550 units over himself, dealing magic damage, capped against  minions and  monsters.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values:
              "50 / 60 / 70 / 80 / 90 (+ 6 / 6.5 / 7 / 7.5 / 8% of target's maximum health) (+ 60% AP)",
            valuesHTML:
              '50 / 60 / 70 / 80 / 90 <span style="color: #1F995C; white-space:normal">(+&nbsp;6 / 6.<small>5</small> / 7 / 7.<small>5</small> / 8% of target\'s <b>maximum</b> health)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Magic Damage:',
            raw: "50 / 60 / 70 / 80 / 90 (+ 6 / 6.5 / 7 / 7.5 / 8% of target's maximum health) (+ 60% AP)",
            healType: 'OutgoingHeals',
            values: [50, 60, 70, 80, 90],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 60 / 70 / 80 / 90',
            children: [
              {
                values: [6, 6.5, 7, 7.5, 8],
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of target's maximum health",
                pre: "+ 6 / 6.5 / 7 / 7.5 / 8% of target's maximum health",
              },
              {
                values: 60,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 60% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'If the target lands on  Mega Adhesive, they are  rooted for a duration.',
        descriptionHTML:
          'If the target lands on <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Singed" data-ability="Mega Adhesive" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Singed/LoL#Mega_Adhesive" title="Mega Adhesive"><img alt="Mega Adhesive" src="/wiki/images/Singed_Mega_Adhesive.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Singed/LoL#Mega_Adhesive" title="Singed/LoL">Mega Adhesive</a></span></span></i>, they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span> for a duration.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Root Duration:',
            values: '1 / 1.25 / 1.5 / 1.75 / 2',
            valuesHTML:
              '1 / 1.<small>25</small> / 1.<small>5</small> / 1.<small>75</small> / 2',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Root Duration:',
            raw: '1 / 1.25 / 1.5 / 1.75 / 2',
            values: [1, 1.25, 1.5, 1.75, 2],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1 / 1.25 / 1.5 / 1.75 / 2',
          },
        ],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Spell',
    spellshield: true,
    callforhelp: 'true',
    notes:
      '* <i>Fling</i> can throw enemies over walls (circumstances permitting).\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow-immune"><a href="/wiki/Slow_resist#Slow_Immunity" title="Slow resist#Slow Immunity"><img alt="Slow immune 2.png" src="/wiki/images/Slow_immune_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow_resist#Slow_Immunity" title="Slow resist">Slow-immune</a></span> enemies will not be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span> when <i>flung</i> into <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Singed" data-ability="Mega Adhesive" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Singed/LoL#Mega_Adhesive" title="Mega Adhesive"><img alt="Mega Adhesive" src="/wiki/images/Singed_Mega_Adhesive.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Singed/LoL#Mega_Adhesive" title="Singed/LoL">Mega Adhesive</a></span></span>.</li>\n<li><i>Fling</i> is special cased to not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">fling</a></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Warwick" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Warwick/LoL" title="Warwick"><img alt="Warwick" src="/wiki/images/Warwick_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Warwick/LoL" title="Warwick/LoL">Warwick</a></span></span> while <b>Singed</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Suppression"><a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control#Suppression"><img alt="Suppression icon.png" src="/wiki/images/Suppression_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control">suppressed</a></span> by <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Warwick" data-ability="Infinite Duress" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Warwick/LoL#Infinite_Duress" title="Infinite Duress"><img alt="Infinite Duress" src="/wiki/images/Warwick_Infinite_Duress.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Warwick/LoL#Infinite_Duress" title="Warwick/LoL">Infinite Duress</a></span></span> after the cast time.</li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).</li></ul>',
  },
  'Insanity Potion': {
    name: 'Insanity Potion',
    display_name: 'Insanity Potion',
    champion: 'Singed',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'InsanityPotion.png',
      sprite: 'spell11.png',
      group: 'spell',
      x: 432,
      y: 144,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '100',
    costtype: 'mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Begins on-cast">120 / 115 / 110 / 105 / 100</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Singed" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Singed/LoL" title="Singed"><img alt="Singed" src="/wiki/images/Singed_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Singed/LoL" title="Singed/LoL">Singed</a></span></span> empowers himself for some time with <span style="white-space:nowrap"><a href="/wiki/Ability_power" title="Ability power"><img alt="Ability power icon.png" src="/wiki/images/Ability_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #7A6DFF; white-space:normal"><b>bonus</b> ability power</span></span>, <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span>, <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resist</span></span>, <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>, <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><b>bonus</b> health regen</span></span>, and <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal"><b>bonus</b> mana regen</span></span>.',
      'During this time, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Singed" data-ability="Poison Trail" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Singed/LoL#Poison_Trail" title="Poison Trail"><img alt="Poison Trail" src="/wiki/images/Singed_Poison_Trail.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Singed/LoL#Poison_Trail" title="Singed/LoL">Poison Trail</a></span></span></i> additionally applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Grievous wounds"><a href="/wiki/Grievous_Wounds" title="Grievous Wounds"><img alt="Grievous Wounds icon.png" src="/wiki/images/Grievous_Wounds_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Grievous_Wounds" title="Grievous Wounds">Grievous Wounds</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Insanity_Potion.png',
        description:
          'Active: Singed empowers himself for 25 seconds with  ability power,  bonus armor,  bonus magic resistance,  bonus movement speed,  bonus health regeneration, and  bonus mana regeneration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Singed</b> empowers himself for 25 seconds with <span style="white-space:nowrap"><a href="/wiki/Ability_power" title="Ability power"><img alt="Ability power icon.png" src="/wiki/images/Ability_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #7A6DFF; white-space:normal">ability power</span></span>, <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span>, <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resistance</span></span>, <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>, <span style="white-space:nowrap"><a href="/wiki/Health_regeneration" title="Health regeneration"><img alt="Health regeneration icon.png" src="/wiki/images/Health_regeneration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><b>bonus</b> health regeneration</span></span>, and <span style="white-space:nowrap"><a href="/wiki/Mana_regeneration" title="Mana regeneration"><img alt="Mana regeneration icon.png" src="/wiki/images/Mana_regeneration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal"><b>bonus</b> mana regeneration</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Active:',
            raw: 'Singed empowers himself for 25 seconds with  ability power,  bonus armor,  bonus magic resistance,  bonus movement speed,  bonus health regeneration, and  bonus mana regeneration.',
            healType: 'HealthRegen',
            values: 2,
            units: 'bonus_mana',
            unitsText:
              'empowers himself for 25 seconds with  ability power,  bonus armor,  bonus magic resistance,  bonus movement speed,  bonus health regeneration, and  bonus mana regeneration.',
            pre: 'Singed empowers himself for 25 seconds with  ability power,  bonus armor,  bonus magic resistance,  bonus movement speed,  bonus health regeneration, and  bonus mana regeneration.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Stats:',
            values: '30 / 47.5 / 65 / 82.5 / 100',
            valuesHTML:
              '30 / 47.<small>5</small> / 65 / 82.<small>5</small> / 100',
          },
          {
            name: 'Regeneration per Second:',
            values: '6 / 9.5 / 13 / 16.5 / 20',
            valuesHTML:
              '6 / 9.<small>5</small> / 13 / 16.<small>5</small> / 20',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Stats:',
            raw: '30 / 47.5 / 65 / 82.5 / 100',
            values: [30, 47.5, 65, 82.5, 100],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 47.5 / 65 / 82.5 / 100',
          },
          {
            effectType: 'Unique',
            name: 'Regeneration per Second:',
            raw: '6 / 9.5 / 13 / 16.5 / 20',
            values: [6, 9.5, 13, 16.5, 20],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '6 / 9.5 / 13 / 16.5 / 20',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'During this time,  Poison Trail additionally applies  Grievous Wounds for 1 second, which refreshes every 0.25 seconds while the  poison persists.',
        descriptionHTML:
          'During this time, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Singed" data-ability="Poison Trail" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Singed/LoL#Poison_Trail" title="Poison Trail"><img alt="Poison Trail" src="/wiki/images/Singed_Poison_Trail.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Singed/LoL#Poison_Trail" title="Singed/LoL">Poison Trail</a></span></span></i> additionally applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Grievous wounds"><a href="/wiki/Grievous_Wounds" title="Grievous Wounds"><img alt="Grievous Wounds icon.png" src="/wiki/images/Grievous_Wounds_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Grievous_Wounds" title="Grievous Wounds">Grievous Wounds</a></span> for 1 second, which refreshes every 0.<small>25</small> seconds while the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Poison"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL"><img alt="Poison icon.png" src="/wiki/images/Poison_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL">poison</a></span> persists.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'During this time,  Poison Trail additionally applies  Grievous Wounds for 1 second, which refreshes every 0.25 seconds while the  poison persists.',
            damagetype: 'None',
            values: 1,
            units: 'total_ap',
            unitsText:
              'this time,  Poison Trail additionally applies  Grievous Wounds for 1 second, which refreshes every 0.25 seconds while the  poison persists.',
            pre: 'During this time,  Poison Trail additionally applies  Grievous Wounds for 1 second, which refreshes every 0.25 seconds while the  poison persists.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    notes: '* No additional notes.',
  },
} satisfies { [skillName in string]: SkillData };
