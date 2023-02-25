import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Karma';

export default {
  'Gathering Fire': {
    name: 'Gathering Fire',
    display_name: 'Gathering Fire',
    champion: 'Karma',
    skill: 'I',
    image: {
      full: 'Karma_Passive.png',
      sprite: 'passive1.png',
      group: 'passive',
      x: 144,
      y: 96,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karma" data-ability="Mantra" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karma/LoL#Mantra" title="Mantra\'s"><img alt="Mantra\'s" src="/wiki/images/Karma_Mantra.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karma/LoL#Mantra" title="Karma/LoL">Mantra\'s</a></span></span></i> current cooldown is <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduced</span> by a few seconds for each enemy champion hit by <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karma" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karma/LoL" title="Karma\'s"><img alt="Karma\'s" src="/wiki/images/Karma_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karma/LoL" title="Karma/LoL">Karma\'s</a></span></span> damaging <a href="/wiki/Champion_ability" title="Champion ability">abilities</a>.',
    ],
    description: [
      {
        icon: '/wiki/images/Gathering Fire.png',
        description:
          "Innate:  Mantra's  current cooldown is reduced by 5 seconds for each enemy champion hit by Karma's damaging abilities.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karma" data-ability="Mantra" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karma/LoL#Mantra" title="Mantra\'s"><img alt="Mantra\'s" src="/wiki/images/Karma_Mantra.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karma/LoL#Mantra" title="Karma/LoL">Mantra\'s</a></span></span></i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> is reduced by 5 seconds for each enemy champion hit by <b>Karma\'s</b> damaging <a href="/wiki/Champion_ability" title="Champion ability">abilities</a>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Innate:',
            raw: "  Mantra's  current cooldown is reduced by 5 seconds for each enemy champion hit by Karma's damaging abilities.",
            values: 5,
            user: 'none',
            units: '',
            unitsText:
              "current cooldown is reduced by 5 seconds for each enemy champion hit by Karma's damaging abilities.",
            pre: "Mantra's  current cooldown is reduced by 5 seconds for each enemy champion hit by Karma's damaging abilities.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes:
      '* <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karma" data-ability="Inner Flame" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karma/LoL#Inner_Flame" title="Inner Flame"><img alt="Inner Flame" src="/wiki/images/Karma_Inner_Flame.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karma/LoL#Inner_Flame" title="Karma/LoL">Inner Flame</a></span></span> / <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karma" data-ability="Soulflare" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karma/LoL#Soulflare" title="Soulflare"><img alt="Soulflare" src="/wiki/images/Karma_Soulflare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karma/LoL#Soulflare" title="Karma/LoL">Soulflare</a></span></span> reduces <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karma" data-ability="Mantra" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karma/LoL#Mantra" title="Mantra\'s"><img alt="Mantra\'s" src="/wiki/images/Karma_Mantra.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karma/LoL#Mantra" title="Karma/LoL">Mantra\'s</a></span></span> cooldown per target hit (for a total reduction of 25 seconds if 5 enemy champions are hit at once).\n<ul><li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karma" data-ability="Focused Resolve" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karma/LoL#Focused_Resolve" title="Focused Resolve"><img alt="Focused Resolve" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karma/LoL#Focused_Resolve" title="Karma/LoL">Focused Resolve</a></span></span> / <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karma" data-ability="Renewal" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karma/LoL#Renewal" title="Renewal"><img alt="Renewal" src="/wiki/images/Karma_Renewal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karma/LoL#Renewal" title="Karma/LoL">Renewal</a></span></span> reduces <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karma" data-ability="Mantra" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karma/LoL#Mantra" title="Mantra\'s"><img alt="Mantra\'s" src="/wiki/images/Karma_Mantra.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karma/LoL#Mantra" title="Karma/LoL">Mantra\'s</a></span></span> cooldown per tick of damage (for a total reduction of 10 seconds for the entire duration).</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karma" data-ability="Inspire" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karma/LoL#Inspire" title="Inspire"><img alt="Inspire" src="/wiki/images/Karma_Inspire.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karma/LoL#Inspire" title="Karma/LoL">Inspire</a></span></span> / <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karma" data-ability="Defiance" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karma/LoL#Defiance" title="Defiance"><img alt="Defiance" src="/wiki/images/Karma_Defiance.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karma/LoL#Defiance" title="Karma/LoL">Defiance</a></span></span> does not reduce <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karma" data-ability="Mantra" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karma/LoL#Mantra" title="Mantra\'s"><img alt="Mantra\'s" src="/wiki/images/Karma_Mantra.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karma/LoL#Mantra" title="Karma/LoL">Mantra\'s</a></span></span> cooldown (it has no damage component).</li></ul>',
  },
  'Inner Flame': {
    name: 'Inner Flame',
    display_name: 'Inner Flame',
    champion: 'Karma',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'KarmaQ.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 384,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '950 /  890',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Collision detonation radius">280</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Missile width">120</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Missile speed">1700</span>',
    cast_time: '0.<small>25</small>',
    cost: '45',
    costtype: 'Mana',
    cooldown: '9 / 8 / 7 / 6 / 5',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karma" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karma/LoL" title="Karma"><img alt="Karma" src="/wiki/images/Karma_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karma/LoL" title="Karma/LoL">Karma</a></span></span> fires a bolt in the target direction that explodes on the first enemy hit, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them.',
    ],
    description: [
      {
        icon: '/wiki/images/Inner Flame.png',
        description:
          'Active: Karma fires a bolt in the target direction that explodes on the first enemy hit, dealing magic damage to nearby enemies and  slowing them by 35% for 1.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Karma</b> fires a bolt in the target direction that explodes on the first enemy hit, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 35% for 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Karma fires a bolt in the target direction that explodes on the first enemy hit, dealing magic damage to nearby enemies and  slowing them by 35% for 1.5 seconds.',
            damagetype: 'Magic',
            values: 3,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'for 1.5 seconds.fires a bolt in the target direction that explodes on the first enemy hit, dealing magic damage to nearby enemies and  slowing them by 35',
            pre: 'Karma fires a bolt in the target direction that explodes on the first enemy hit, dealing magic damage to nearby enemies and  slowing them by 35% for 1.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '70 / 120 / 170 / 220 / 270 (+ 40% AP)',
            valuesHTML:
              '70 / 120 / 170 / 220 / 270 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 120 / 170 / 220 / 270 (+ 40% AP)',
            damagetype: 'Magic',
            values: [70, 120, 170, 220, 270],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 120 / 170 / 220 / 270',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 40% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Area of effect',
    spellshield: true,
    projectile: 'True',
    notes:
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block the initial impact from <i>Inner Flame</i>.\n<ul><li>This ability will cast from wherever the caster is at the end of the cast time.</li>\n<li><i>Inner Flame\'s</i> effect radius is centered around the location of the missile as it collides.</li></ul>',
  },
  Soulflare: {
    name: 'Soulflare',
    display_name: 'Soulflare',
    champion: 'Karma',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'KarmaQ.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 384,
      y: 96,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Field area of effect radius">280</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Increased missile width">160</span>',
    blurb: [
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karma" data-ability="Mantra" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karma/LoL#Mantra" title="Mantra"><img alt="Mantra" src="/wiki/images/Karma_Mantra.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karma/LoL#Mantra" title="Karma/LoL">Mantra</a></span></span> Bonus:</b></span> <i>Inner Flame</i> deals increased damage, and fires a larger bolt that also explodes at max range.',
      'The explosion briefly creates a field that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> enemies, which then ruptures to deal <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Soulflare.png',
        description:
          'Mantra Bonus: Inner Flame deals increased damage, and fires a larger bolt that also explodes at maximum range.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karma" data-ability="Mantra" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karma/LoL#Mantra" title="Mantra"><img alt="Mantra" src="/wiki/images/Karma_Mantra.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karma/LoL#Mantra" title="Karma/LoL">Mantra</a></span></span> Bonus:</b></span> <i>Inner Flame</i> deals increased damage, and fires a larger bolt that also explodes at maximum range.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Bonus Magic Damage:',
            values: '40 / 100 / 160 / 220 (+ 30% AP)',
            valuesHTML:
              '<span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karma" data-ability="Mantra" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karma/LoL#Mantra" title="40 / 100 / 160 / 220"><img alt="40 / 100 / 160 / 220" src="/wiki/images/Karma_Mantra.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karma/LoL#Mantra" title="Karma/LoL">40 / 100 / 160 / 220</a></span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage:',
            raw: '40 / 100 / 160 / 220 (+ 30% AP)',
            damagetype: 'Magic',
            values: [40, 100, 160, 220],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 100 / 160 / 220',
            children: [
              {
                values: 30,
                valuesIsPercent: true,
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
          'The explosion creates a field for 1.5 seconds that  slows enemies within by 50%, which then ruptures to deal magic damage.',
        descriptionHTML:
          'The explosion creates a field for 1.<small>5</small> seconds that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> enemies within by 50%, which then ruptures to deal <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'The explosion creates a field for 1.5 seconds that  slows enemies within by 50%, which then ruptures to deal magic damage.',
            damagetype: 'Magic',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              ', which then ruptures to deal magic damage.explosion creates a field for 1.5 seconds that  slows enemies within by 50',
            pre: 'The explosion creates a field for 1.5 seconds that  slows enemies within by 50%, which then ruptures to deal magic damage.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '35 / 140 / 245 / 350 (+ 60% AP)',
            valuesHTML:
              '<span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karma" data-ability="Mantra" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karma/LoL#Mantra" title="35 / 140 / 245 / 350"><img alt="35 / 140 / 245 / 350" src="/wiki/images/Karma_Mantra.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karma/LoL#Mantra" title="Karma/LoL">35 / 140 / 245 / 350</a></span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '35 / 140 / 245 / 350 (+ 60% AP)',
            damagetype: 'Magic',
            values: [35, 140, 245, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 140 / 245 / 350',
            children: [
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
        description: "Soulflare scales with  Mantra's rank.",
        descriptionHTML:
          '<i>Soulflare</i> scales with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karma" data-ability="Mantra" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karma/LoL#Mantra" title="Mantra\'s"><img alt="Mantra\'s" src="/wiki/images/Karma_Mantra.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karma/LoL#Mantra" title="Karma/LoL">Mantra\'s</a></span></span></i> rank.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: 'Special',
    projectile: 'True',
    notes:
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block the initial impact from either ability but will not block <i>Soulflare\'s</i> field damage.\n<ul><li><i>Soulflare\'s</i> detonation radius is centered around the location of the missile as it collides, while the lingering field will always be created at the impacted enemy\'s center instead.</li>\n<li><i>Soulflare</i> will cast from wherever <b>Karma</b> is at the end of the cast time.</li></ul>',
  },
  'Focused Resolve': {
    name: 'Focused Resolve',
    display_name: 'Focused Resolve',
    champion: 'Karma',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'KarmaSpiritBind.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 432,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '675',
    tether_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 825',
    cast_time: '0.<small>25</small>',
    cost: '50 / 55 / 60 / 65 / 70',
    costtype: 'Mana',
    cooldown: '12',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karma" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karma/LoL" title="Karma"><img alt="Karma" src="/wiki/images/Karma_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karma/LoL" title="Karma/LoL">Karma</a></span></span> deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tethers</a></span> to the target enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>.',
      'If the tether is not broken after a short time, the target is dealt <span style="color: #00B0F0; white-space:normal">magic damage</span>, briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span> for a short time.',
    ],
    description: [
      {
        icon: '/wiki/images/Focused Resolve.png',
        description:
          'Active: Karma deals magic damage to the target enemy  champion or  monster and forms a  tether between her and them for 2 seconds, during which they are  revealed.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Karma</b> deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the target enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> and forms a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tether</a></span> between her and them for 2 seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Karma deals magic damage to the target enemy  champion or  monster and forms a  tether between her and them for 2 seconds, during which they are  revealed.',
            damagetype: 'Magic',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'deals magic damage to the target enemy  champion or  monster and forms a  tether between her and them for 2 seconds, during which they are  revealed.',
            pre: 'Karma deals magic damage to the target enemy  champion or  monster and forms a  tether between her and them for 2 seconds, during which they are  revealed.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '40 / 65 / 90 / 115 / 140 (+ 45% AP)',
            valuesHTML:
              '40 / 65 / 90 / 115 / 140 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;45% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '40 / 65 / 90 / 115 / 140 (+ 45% AP)',
            damagetype: 'Magic',
            values: [40, 65, 90, 115, 140],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 65 / 90 / 115 / 140',
            children: [
              {
                values: 45,
                valuesIsPercent: true,
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
          'If the tether is not broken by the end of its duration, the target is dealt the same magic damage again and is  rooted for a duration, during which they are  revealed.',
        descriptionHTML:
          'If the tether is not broken by the end of its duration, the target is dealt the same <span style="color: #00B0F0; white-space:normal">magic damage</span> again and is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span> for a duration, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Total Magic Damage:',
            values: '80 / 130 / 180 / 230 / 280 (+ 90% AP)',
            valuesHTML:
              '80 / 130 / 180 / 230 / 280 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;90% AP)</span>',
          },
          {
            name: 'Root Duration:',
            values: '1.4 / 1.55 / 1.7 / 1.85 / 2',
            valuesHTML:
              '1.<small>4</small> / 1.<small>55</small> / 1.<small>7</small> / 1.<small>85</small> / 2',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Total Magic Damage:',
            raw: '80 / 130 / 180 / 230 / 280 (+ 90% AP)',
            damagetype: 'Magic',
            values: [80, 130, 180, 230, 280],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 130 / 180 / 230 / 280',
            children: [
              {
                values: 90,
                valuesIsPercent: true,
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
    ],
    targeting: 'Unit',
    affects: 'Enemies / Self',
    damagetype: 'Magic',
    spelleffects: 'spell',
    spellshield: 'Special',
    projectile: 'False',
    callforhelp: 'True',
    notes:
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block the tether\'s application and damage but not the aftereffects of one already applied.\n<ul><li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).</li></ul>',
  },
  Renewal: {
    name: 'Renewal',
    display_name: 'Renewal',
    champion: 'Karma',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'KarmaSpiritBind.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 432,
      y: 96,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karma" data-ability="Mantra" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karma/LoL#Mantra" title="Mantra"><img alt="Mantra" src="/wiki/images/Karma_Mantra.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karma/LoL#Mantra" title="Karma/LoL">Mantra</a></span></span> Bonus:</b></span>\n<p><i>Focused Resolve\'s</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">root</a></span> is increased.\n</p>',
      '<b>Karma</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> herself once on-cast, and again once the target is <i>bound</i> or dies while tethered.',
    ],
    description: [
      {
        icon: '/wiki/images/Renewal.png',
        description:
          "Mantra Bonus: Focused Resolve's  root duration is increased. Karma  heals for  17% (+ 1% per 100 AP) of her missing health once on-cast, and again once the tether lasts its full duration or the target dies while tethered.",
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karma" data-ability="Mantra" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karma/LoL#Mantra" title="Mantra"><img alt="Mantra" src="/wiki/images/Karma_Mantra.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karma/LoL#Mantra" title="Karma/LoL">Mantra</a></span></span> Bonus:</b></span> <i>Focused Resolve\'s</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">root</a></span> duration is increased. <br><br><b>Karma</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> for <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">17% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;1% per 100 AP)</span> of her <b>missing</b> health</span></span> once on-cast, and again once the tether lasts its full duration or the target dies while tethered.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: 'Karma  heals for  17% (+ 1% per 100 AP) of her missing health once on-cast, and again once the tether lasts its full duration or the target dies while tethered.',
            healType: 'OutgoingHeals',
            values: 1,
            valuesIsPercent: true,
            user: 'target',
            units: 'missing_hp',
            unitsText:
              'of her missing health once on-cast, and again once the tether lasts its full duration or the target dies while tethered.',
            pre: 'Karma  heals for  17%',
            post: 'of her missing health once on-cast, and again once the tether lasts its full duration or the target dies while tethered.',
            children: [
              {
                values: 1,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 1% per 100 AP',
              },
            ],
          },
        ],
        leveling: [
          {
            name: 'Root Duration Increase:',
            values: '0.5 / 0.75 / 1 / 1.25',
            valuesHTML:
              '<span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karma" data-ability="Mantra" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karma/LoL#Mantra" title="0.5 / 0.75 / 1 / 1.25"><img alt="0.5 / 0.75 / 1 / 1.25" src="/wiki/images/Karma_Mantra.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karma/LoL#Mantra" title="Karma/LoL">0.<small>5</small> / 0.<small>75</small> / 1 / 1.<small>25</small></a></span></span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Root Duration Increase:',
            raw: '0.5 / 0.75 / 1 / 1.25',
            values: [0.5, 0.75, 1, 1.25],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '0.5 / 0.75 / 1 / 1.25',
          },
        ],
      },
      {
        description: "Renewal scales with  Mantra's rank.",
        descriptionHTML:
          '<i>Renewal</i> scales with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karma" data-ability="Mantra" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karma/LoL#Mantra" title="Mantra\'s"><img alt="Mantra\'s" src="/wiki/images/Karma_Mantra.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karma/LoL#Mantra" title="Karma/LoL">Mantra\'s</a></span></span></i> rank.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies / Self',
    damagetype: 'Magic',
    spelleffects: 'spell',
    spellshield: 'Special',
    projectile: 'False',
    callforhelp: 'True',
    notes:
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block the tether\'s application and damage but not the aftereffects of one already applied.\n<ul><li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).</li></ul>',
  },
  Inspire: {
    name: 'Inspire',
    display_name: 'Inspire',
    champion: 'Karma',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'KarmaSolKimShield.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 0,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '800',
    cast_time: 'none',
    cost: '50 / 55 / 60 / 65 / 70',
    costtype: 'Mana',
    cooldown: '10 / 9.<small>5</small> / 9 / 8.<small>5</small> / 8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karma" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karma/LoL" title="Karma"><img alt="Karma" src="/wiki/images/Karma_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karma/LoL" title="Karma/LoL">Karma</a></span></span> applies a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> on herself or the target allied champion for a short time, which briefly grants <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Inspire.png',
        description:
          'Active: Karma grants a  shield to herself or the target allied champion for 2.5 seconds as well as  40% bonus movement speed for 1.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Karma</b> grants a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> to herself or the target allied champion for 2.<small>5</small> seconds as well as <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">40% <b>bonus</b> movement speed</span></span> for 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Active:',
            raw: ' Karma grants a  shield to herself or the target allied champion for 2.5 seconds as well as  40% bonus movement speed for 1.5 seconds.',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: 2,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'bonus movement speed for 1.5 seconds.grants a  shield to herself or the target allied champion for 2.5 seconds as well as  40',
            pre: 'Karma grants a  shield to herself or the target allied champion for 2.5 seconds as well as  40% bonus movement speed for 1.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Shield Strength:',
            values: '80 / 120 / 160 / 200 / 240 (+ 45% AP)',
            valuesHTML:
              '80 / 120 / 160 / 200 / 240 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;45% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Shield',
            name: 'Shield Strength:',
            raw: '80 / 120 / 160 / 200 / 240 (+ 45% AP)',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: [80, 120, 160, 200, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 120 / 160 / 200 / 240',
            children: [
              {
                values: 45,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 45% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Unit',
    affects: 'Allies',
    spelleffects: 'Shield',
    notes: '* No additional notes.',
  },
  Defiance: {
    name: 'Defiance',
    display_name: 'Defiance',
    champion: 'Karma',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'KarmaSolKimShield.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 0,
      y: 144,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 700',
    cast_time: 'none',
    costtype: 'Mana',
    blurb: [
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karma" data-ability="Mantra" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karma/LoL#Mantra" title="Mantra"><img alt="Mantra" src="/wiki/images/Karma_Mantra.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karma/LoL#Mantra" title="Karma/LoL">Mantra</a></span></span> Bonus:</b></span><br>\n<p><i>Inspire\'s</i> shield is increased, and <i>Inspire</i> spreads to surrounding allied champions at reduced power.\n</p>',
    ],
    description: [
      {
        icon: '/wiki/images/Defiance.png',
        description:
          "Mantra - Active: Inspire's shield strength is increased. Inspire spreads to surrounding allied champions at 30% effectiveness.Secondary targets receive 12% bonus movement speed.",
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karma" data-ability="Mantra" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karma/LoL#Mantra" title="Mantra"><img alt="Mantra" src="/wiki/images/Karma_Mantra.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karma/LoL#Mantra" title="Karma/LoL">Mantra</a></span></span> - Active:</b></span> <i>Inspire\'s</i> shield strength is increased. <br><br><i>Inspire</i> spreads to surrounding allied champions at 30% effectiveness.<br><i>Secondary targets receive <span style="color: #F5EE99; white-space:normal">12% <b>bonus</b> movement speed</span>.</i>',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Inspire spreads to surrounding allied champions at 30% effectiveness.Secondary targets receive 12% bonus movement speed.',
            damagetype: 'None',
            values: 3,
            valuesIsPercent: true,
            user: 'target',
            units: 'total_ad',
            unitsText:
              'effectiveness.Secondary targets receive 12spreads to surrounding allied champions at 30',
            pre: 'Inspire spreads to surrounding allied champions at 30% effectiveness.Secondary targets receive 12% bonus movement speed.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Shield:',
            values: '25 / 75 / 125 / 175 (+ 45% AP)',
            valuesHTML:
              '<span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karma" data-ability="Mantra" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karma/LoL#Mantra" title="25 / 75 / 125 / 175"><img alt="25 / 75 / 125 / 175" src="/wiki/images/Karma_Mantra.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karma/LoL#Mantra" title="Karma/LoL">25 / 75 / 125 / 175</a></span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;45% AP)</span>',
          },
          {
            name: 'Reduced Bonus Shield:',
            values: '7.5 / 24 / 40.5 / 57 (+ 13.5% AP)',
            valuesHTML:
              '<span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karma" data-ability="Mantra" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karma/LoL#Mantra" title="7.5 / 24 / 40.5 / 57 (+&nbsp;13.5% AP)"><img alt="7.5 / 24 / 40.5 / 57 (+&nbsp;13.5% AP)" src="/wiki/images/Karma_Mantra.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karma/LoL#Mantra" title="Karma/LoL">7.<small>5</small> / 24 / 40.<small>5</small> / 57 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;13.<small>5</small>% AP)</span></a></span></span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Shield',
            name: 'Bonus Shield:',
            raw: '25 / 75 / 125 / 175 (+ 45% AP)',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: [25, 75, 125, 175],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 75 / 125 / 175',
            children: [
              {
                values: 45,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 45% AP',
              },
            ],
          },
          {
            effectType: 'Shield',
            name: 'Reduced Bonus Shield:',
            raw: '7.5 / 24 / 40.5 / 57 (+ 13.5% AP)',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: [7.5, 24, 40.5, 57],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '7.5 / 24 / 40.5 / 57',
            children: [
              {
                values: 13.5,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 13.5% AP',
              },
            ],
          },
        ],
      },
      {
        description: "Defiance scales with  Mantra's rank.",
        descriptionHTML:
          '<i>Defiance</i> scales with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karma" data-ability="Mantra" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karma/LoL#Mantra" title="Mantra\'s"><img alt="Mantra\'s" src="/wiki/images/Karma_Mantra.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karma/LoL#Mantra" title="Karma/LoL">Mantra\'s</a></span></span></i> rank.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Allies',
    spelleffects: 'Shield',
    notes: '* No additional notes.',
  },
  Mantra: {
    name: 'Mantra',
    display_name: 'Mantra',
    champion: 'Karma',
    skill: 'R',
    maxrank: 4,
    image: {
      full: 'KarmaMantra.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 48,
      y: 144,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">40 / 38 / 36 / 34</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karma" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karma/LoL" title="Karma"><img alt="Karma" src="/wiki/images/Karma_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karma/LoL" title="Karma/LoL">Karma</a></span></span> empowers her next ability within a period to apply an additional effect.',
      "<b>Karma</b> begins the game with one rank in <i>Mantra</i>. Her empowered abilities scale based on <i>Mantra's</i> rank.",
    ],
    description: [
      {
        icon: '/wiki/images/Mantra.png',
        description:
          'Active: Karma empowers her next basic ability within 8 seconds for an additional effect. Mantra can be used while affected by  cast-inhibiting crowd control.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Karma</b> empowers her next basic ability within 8 seconds for an additional effect. <br><br><i>Mantra can be used while affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast-inhibiting crowd control"><a href="/wiki/Crowd_control#Disrupting" title="Crowd control#Disrupting"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disrupting" title="Crowd control">cast-inhibiting crowd control</a></span>.</i>',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Karma empowers her next basic ability within 8 seconds for an additional effect',
            damagetype: 'None',
            values: 8,
            units: 'total_ad',
            unitsText:
              'empowers her next basic ability within 8 seconds for an additional effect',
            pre: 'Karma empowers her next basic ability within 8 seconds for an additional effect',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Karma begins the game with one rank in Mantra. Her empowered abilities scale based on Mantra's rank.",
        descriptionHTML:
          "<b>Karma</b> begins the game with one rank in <i>Mantra</i>. Her empowered abilities scale based on <i>Mantra's</i> rank.",
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    notes: '',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Karma_Original_Mantra_1.ogg   "Sae Eleisa Tera Vi."',
  },
} satisfies { [skillName in string]: SkillData };
