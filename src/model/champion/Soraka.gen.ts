import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Soraka';

export default {
  Salvation: {
    name: 'Salvation',
    display_name: 'Salvation',
    champion: 'Soraka',
    skill: 'I',
    image: {
      full: 'Soraka_Passive.png',
      sprite: 'passive4.png',
      group: 'passive',
      x: 0,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius: '2500',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Soraka" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Soraka/LoL" title="Soraka"><img alt="Soraka" src="/wiki/images/Soraka_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Soraka/LoL" title="Soraka/LoL">Soraka</a></span></span> gains tremendous <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> while facing nearby allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> that are <span style="color: #1F995C; white-space:normal">at low health</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Salvation.png',
        description:
          'Innate: Soraka gains  70% bonus movement speed while facing nearby allied  champions that are below 40% of their maximum health.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Soraka</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">70% <b>bonus</b> movement speed</span></span> while facing nearby allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> that are <span style="color: #1F995C; white-space:normal">below 40% of their <b>maximum</b> health</span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Innate:',
            raw: 'Soraka gains  70% bonus movement speed while facing nearby allied  champions that are below 40% of their maximum health.',
            healType: 'BonusHealth',
            values: 7,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'bonus movement speed while facing nearby allied  champions that are below 40gains  70',
            pre: 'Soraka gains  70% bonus movement speed while facing nearby allied  champions that are below 40% of their maximum health.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes:
      '* <b>Soraka</b> will see an arrow indicating the direction in which she can gain the bonus movement speed.',
  },
  Starcall: {
    name: 'Starcall',
    display_name: 'Starcall',
    champion: 'Soraka',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'SorakaQ.png',
      sprite: 'spell12.png',
      group: 'spell',
      x: 288,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '800',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 265',
    cast_time: '0.<small>25</small>',
    cost: '45 / 50 / 55 / 60 / 65',
    costtype: 'Mana',
    cooldown: '8 / 7 / 6 / 5 / 4',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Soraka" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Soraka/LoL" title="Soraka"><img alt="Soraka" src="/wiki/images/Soraka_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Soraka/LoL" title="Soraka/LoL">Soraka</a></span></span> calls down a star upon the target location that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> enemies hit. If this hits at least one enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, the star dust returns to <b>Soraka</b> to grant her <i>Rejuvenation</i> for a short time.',
      'While <b>Soraka</b> has <i>Rejuvenation</i>, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Soraka" data-ability="Astral Infusion" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Soraka/LoL#Astral_Infusion" title="Astral Infusion"><img alt="Astral Infusion" src="/wiki/images/Soraka_Astral_Infusion.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Soraka/LoL#Astral_Infusion" title="Soraka/LoL">Astral Infusion</a></span></span></i> will also grant <i>Rejuvenation</i> to the target ally.',
      '<span class="template_sbc"><b>Rejuvenation</b></span>: The target continually <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> over time and gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> that decays over the duration.',
    ],
    description: [
      {
        icon: '/wiki/images/Starcall.png',
        description:
          'Active: Soraka calls down a star upon the target location that grants  sight of the area before landing after 0.25 − 1 (based on target range) seconds, dealing magic damage to enemies hit and  slowing them by 30% for 1.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Soraka</b> calls down a star upon the target location that grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area before landing after <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="target range" data-start="0.25;50" data-finish="1;800" data-bot_values="0.25;0.3;0.35;0.4;0.45;0.5;0.55;0.6;0.65;0.7;0.75;0.8;0.85;0.9;0.95;1" data-top_values="50;100;150;200;250;300;350;400;450;500;550;600;650;700;750;800">0.<small>25</small> − 1 (based on target range)</span> seconds, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 30% for 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Soraka calls down a star upon the target location that grants  sight of the area before landing after 0.25 − 1 (based on target range) seconds, dealing magic damage to enemies hit and  slowing them by 30% for 1.5 seconds.',
            values: [0, 1],
            basedOn: 'target range',
            user: 'none',
            units: '',
            unitsText:
              'seconds, dealing magic damage to enemies hit and  slowing them by 30% for 1.5 seconds.',
            pre: 'Soraka calls down a star upon the target location that grants  sight of the area before landing after 0.25 − 1',
            post: 'seconds, dealing magic damage to enemies hit and  slowing them by 30% for 1.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '85 / 120 / 155 / 190 / 225 (+ 35% AP)',
            valuesHTML:
              '85 / 120 / 155 / 190 / 225 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;35% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '85 / 120 / 155 / 190 / 225 (+ 35% AP)',
            damagetype: 'Magic',
            values: [85, 120, 155, 190, 225],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '85 / 120 / 155 / 190 / 225',
            children: [
              {
                values: 35,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 35% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'If this hits at least one enemy  champion, the star dust returns to Soraka to grant her Rejuvenation for 2.5 seconds. While Soraka has Rejuvenation,  Astral Infusion will also grant the effects of Rejuvenation to the target ally for the same duration.',
        descriptionHTML:
          'If this hits at least one enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, the star dust returns to <b>Soraka</b> to grant her <i>Rejuvenation</i> for 2.<small>5</small> seconds. While <b>Soraka</b> has <i>Rejuvenation</i>, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Soraka" data-ability="Astral Infusion" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Soraka/LoL#Astral_Infusion" title="Astral Infusion"><img alt="Astral Infusion" src="/wiki/images/Soraka_Astral_Infusion.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Soraka/LoL#Astral_Infusion" title="Soraka/LoL">Astral Infusion</a></span></span></i> will also grant the effects of <i>Rejuvenation</i> to the target ally for the same duration.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'If this hits at least one enemy  champion, the star dust returns to Soraka to grant her Rejuvenation for 2.5 seconds',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'this hits at least one enemy  champion, the star dust returns to Soraka to grant her Rejuvenation for 2.5 seconds',
            pre: 'If this hits at least one enemy  champion, the star dust returns to Soraka to grant her Rejuvenation for 2.5 seconds',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Rejuvenation: The target  heals every 0.5 seconds and gains  bonus movement speed that decays over the duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Rejuvenation</b></span>: The target <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> every 0.<small>5</small> seconds and gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> that decays over the duration.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Total Heal:',
            values: '50 / 65 / 80 / 95 / 110 (+ 30% AP)',
            valuesHTML:
              '50 / 65 / 80 / 95 / 110 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span>',
          },
          {
            name: 'Bonus Movement Speed:',
            values: '20 / 22.5 / 25 / 27.5 / 30%',
            valuesHTML:
              '20 / 22.<small>5</small> / 25 / 27.<small>5</small> / 30%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Total Heal:',
            raw: '50 / 65 / 80 / 95 / 110 (+ 30% AP)',
            healType: 'DrainEffect',
            values: [50, 65, 80, 95, 110],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 65 / 80 / 95 / 110',
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
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
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
    ],
    targeting: 'Location',
    affects: 'Self, Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'True',
    notes:
      '* <i>Starcall</i> counts as hitting even if it gets blocked by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span>, granting <i>Rejuvenation</i>.\n<ul><li><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL" title="Yasuo\'s"><img alt="Yasuo\'s" src="/wiki/images/Yasuo_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL" title="Yasuo/LoL">Yasuo\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Wind Wall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Wind Wall"><img alt="Wind Wall" src="/wiki/images/Yasuo_Wind_Wall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Yasuo/LoL">Wind Wall</a></span></span></span> and <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL" title="Braum\'s"><img alt="Braum\'s" src="/wiki/images/Braum_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL" title="Braum/LoL">Braum\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-ability="Unbreakable" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL#Unbreakable" title="Unbreakable"><img alt="Unbreakable" src="/wiki/images/Braum_Unbreakable.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL#Unbreakable" title="Braum/LoL">Unbreakable</a></span></span></span> can block the <i>Rejuvenation</i> projectile.</li>\n<li><i>Rejuvenation</i> heals over 12 ticks, with the first 4 each healing for about 15% of the heal, the next 4 ticks for about 5.<small>5</small>% each, and the last 4 for about 4.<small>5</small>% each.</li>\n<li><i>Rejuvenation</i> won\'t be granted to <b>Soraka</b> and she won\'t be able to make use of the health cost reduction on <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Soraka" data-ability="Astral Infusion" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Soraka/LoL#Astral_Infusion" title="Astral Infusion"><img alt="Astral Infusion" src="/wiki/images/Soraka_Astral_Infusion.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Soraka/LoL#Astral_Infusion" title="Soraka/LoL">Astral Infusion</a></span></span> until the projectile gets to her, but she is able to <i>Rejuvenate</i> allies as soon as the target is hit.</li></ul>',
  },
  'Astral Infusion': {
    name: 'Astral Infusion',
    display_name: 'Astral Infusion',
    champion: 'Soraka',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'SorakaW.png',
      sprite: 'spell12.png',
      group: 'spell',
      x: 336,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '550',
    cast_time: '0.<small>25</small>',
    cost: '<span style="color: #1F995C; white-space:normal">10%</span>',
    costtype:
      '<span style="color: #1F995C; white-space:normal"><b>Maximum</b> Health</span> + 40 / 45 / 50 / 55 / 60 Mana',
    cooldown: '6 / 5 / 4 / 3 / 2',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Soraka" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Soraka/LoL" title="Soraka"><img alt="Soraka" src="/wiki/images/Soraka_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Soraka/LoL" title="Soraka/LoL">Soraka</a></span></span> consumes a portion of <span style="color: #1F995C; white-space:normal">her <b>maximum</b> health</span> to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> the target allied champion.',
      'If this is cast while under <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Soraka" data-ability="Starcall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Soraka/LoL#Starcall" title="Rejuvenation"><img alt="Rejuvenation" src="/wiki/images/Soraka_Starcall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Soraka/LoL#Starcall" title="Soraka/LoL">Rejuvenation</a></span></span></i>, the <span style="color: #1F995C; white-space:normal">health cost</span> is reduced.',
    ],
    description: [
      {
        icon: '/wiki/images/Astral_Infusion.png',
        description: 'Active: Soraka  heals the target allied champion.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Soraka</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> the target allied champion.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Heal:',
            values: '90 / 110 / 130 / 150 / 170 (+ 50% AP)',
            valuesHTML:
              '90 / 110 / 130 / 150 / 170 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Heal:',
            raw: '90 / 110 / 130 / 150 / 170 (+ 50% AP)',
            healType: 'DrainEffect',
            values: [90, 110, 130, 150, 170],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '90 / 110 / 130 / 150 / 170',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 50% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'If cast while under  Rejuvenation, the health cost will be reduced by a percentage.',
        descriptionHTML:
          'If cast while under <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Soraka" data-ability="Starcall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Soraka/LoL#Starcall" title="Rejuvenation"><img alt="Rejuvenation" src="/wiki/images/Soraka_Starcall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Soraka/LoL#Starcall" title="Soraka/LoL">Rejuvenation</a></span></span></i>, the <span style="color: #1F995C; white-space:normal">health cost</span> will be reduced by a percentage.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Health Cost Reduction:',
            values: '80 / 85 / 90 / 95 / 100%',
            valuesHTML: '80 / 85 / 90 / 95 / 100%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Health Cost Reduction:',
            raw: '80 / 85 / 90 / 95 / 100%',
            healType: 'BonusHealth',
            values: [80, 85, 90, 95, 100],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 85 / 90 / 95 / 100%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Astral Infusion cannot be cast if Soraka is  below 5% of her maximum health.',
        descriptionHTML:
          '<i>Astral Infusion</i> cannot be cast if <b>Soraka</b> is <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;below 5% of her <b>maximum</b> health</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: 'Astral Infusion cannot be cast if Soraka is  below 5% of her maximum health.',
            healType: 'BonusHealth',
            values: 5,
            valuesIsPercent: true,
            units: 'maximum_hp',
            unitsText:
              'of her maximum health.Infusion cannot be cast if Soraka is  below 5',
            pre: 'Astral Infusion cannot be cast if Soraka is  below 5% of her maximum health.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Allies / Self',
    spelleffects: 'Heal',
    projectile: 'False',
    notes:
      '* <i>Astral Infusion</i> can also be targeted on allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">decoys</a></span>.\n<ul><li><i>Astral Infusion</i> can be cast even if <b>Soraka</b> doesn\'t have the sufficient amount of health to pay for the health cost while above <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;5% of her <b>maximum</b> health</span></span>.\n<ul><li>As with all abilities with health costs, <i>Astral Infusion</i> will not reduce <b>Soraka\'s</b> health below <span style="color: #1F995C; white-space:normal">1</span>.</li></ul></li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Spirit Visage" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Spirit_Visage" title="Spirit Visage"><img alt="Spirit Visage" src="/wiki/images/Spirit_Visage_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Spirit_Visage" title="Spirit Visage">Spirit Visage</a></span></span> will only increase the health donated to allies if the target ally possesses it, although owning it <i>will</i> boost the heal that <b>Soraka</b> receives from <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Soraka" data-ability="Starcall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Soraka/LoL#Starcall" title="Starcall"><img alt="Starcall" src="/wiki/images/Soraka_Starcall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Soraka/LoL#Starcall" title="Soraka/LoL">Starcall</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Soraka" data-ability="Wish" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Soraka/LoL#Wish" title="Wish"><img alt="Wish" src="/wiki/images/Soraka_Wish.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Soraka/LoL#Wish" title="Soraka/LoL">Wish</a></span></span>.</li>\n<li><i>Astral Infusion\'s</i> effects occur before the cast time.</li></ul>',
  },
  Equinox: {
    name: 'Equinox',
    display_name: 'Equinox',
    champion: 'Soraka',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'SorakaE.png',
      sprite: 'spell12.png',
      group: 'spell',
      x: 384,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '925',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Silence field which appears to affect in a very slightly larger radius than the damage and root radius checks cover">260</span>',
    cast_time: '0.<small>25</small>',
    cost: '70 / 75 / 80 / 85 / 90',
    costtype: 'Mana',
    cooldown: '20 / 19 / 18 / 17 / 16',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Soraka" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Soraka/LoL" title="Soraka"><img alt="Soraka" src="/wiki/images/Soraka_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Soraka/LoL" title="Soraka/LoL">Soraka</a></span></span> creates a celestial zone at the target location that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemy champions within upon casting. The zone then persists for a brief moment and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">siliences</a></span> enemies within.',
      'Afterwards, the zone erupts to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemy champions within and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">root</a></span> them.',
    ],
    description: [
      {
        icon: '/wiki/images/Equinox.png',
        description:
          'Active: Soraka creates a celestial zone at the target location that deals magic damage to enemy champions within at the time of cast. The zone then persists for 1.5 seconds and  silences enemies within.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Soraka</b> creates a celestial zone at the target location that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemy champions within at the time of cast. The zone then persists for 1.<small>5</small> seconds and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">silences</a></span> enemies within.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'The zone then persists for 1.5 seconds and  silences enemies within.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'zone then persists for 1.5 seconds and  silences enemies within.',
            pre: 'The zone then persists for 1.5 seconds and  silences enemies within.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '70 / 95 / 120 / 145 / 170 (+ 40% AP)',
            valuesHTML:
              '70 / 95 / 120 / 145 / 170 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 95 / 120 / 145 / 170 (+ 40% AP)',
            damagetype: 'Magic',
            values: [70, 95, 120, 145, 170],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 95 / 120 / 145 / 170',
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
      {
        icon: '/wiki/images/undefined',
        description:
          'Afterwards, the zone erupts to deal the same damage to enemy champions within and  root them for a duration.',
        descriptionHTML:
          'Afterwards, the zone erupts to deal the same damage to enemy champions within and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">root</a></span> them for a duration.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Total Magic Damage:',
            values: '140 / 190 / 240 / 290 / 340 (+ 80% AP)',
            valuesHTML:
              '140 / 190 / 240 / 290 / 340 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;80% AP)</span>',
          },
          {
            name: 'Root Duration:',
            values: '1 / 1.25 / 1.5 / 1.75 / 2',
            valuesHTML:
              '1 / 1.<small>25</small> / 1.<small>5</small> / 1.<small>75</small> / 2',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Total Magic Damage:',
            raw: '140 / 190 / 240 / 290 / 340 (+ 80% AP)',
            damagetype: 'Magic',
            values: [140, 190, 240, 290, 340],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '140 / 190 / 240 / 290 / 340',
            children: [
              {
                values: 80,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 80% AP',
              },
            ],
          },
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
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: 'Special',
    notes:
      '* <i>Equinox\'s</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">silence</a></span> is removed by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleanses</a></span> but does not grant immunity to it; leaving the area and coming back inside applies the <i>silence debuff</i> regardless.\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will not block the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">silence</a></span>.</li></ul>',
  },
  Wish: {
    name: 'Wish',
    display_name: 'Wish',
    champion: 'Soraka',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'SorakaR.png',
      sprite: 'spell12.png',
      group: 'spell',
      x: 432,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius: 'Global',
    cast_time: '0.<small>25</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown: '160 / 152.<small>5</small> / 145 / 137.<small>5</small> / 130',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Soraka" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Soraka/LoL" title="Soraka"><img alt="Soraka" src="/wiki/images/Soraka_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Soraka/LoL" title="Soraka/LoL">Soraka</a></span></span> calls upon the stars, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> herself and her allies. The healing is increased on targets <span style="color: #1F995C; white-space:normal">at low health</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Wish.png',
        description:
          'Active: Soraka calls upon the stars,  healing herself and all allied champions, increased by 50% on targets below 40% of their maximum health.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Soraka</b> calls upon the stars, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> herself and all allied champions, increased by 50% on targets <span style="color: #1F995C; white-space:normal">below 40% of their <b>maximum</b> health</span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Active:',
            raw: 'Soraka calls upon the stars,  healing herself and all allied champions, increased by 50% on targets below 40% of their maximum health.',
            healType: 'OutgoingHeals',
            values: 5,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'on targets below 40calls upon the stars,  healing herself and all allied champions, increased by 50',
            pre: 'Soraka calls upon the stars,  healing herself and all allied champions, increased by 50% on targets below 40% of their maximum health.',
          },
        ],
        leveling: [
          {
            name: 'Heal:',
            values: '150 / 200 / 250 / 300 / 350 (+ 50% AP)',
            valuesHTML:
              '150 / 200 / 250 / 300 / 350 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Heal:',
            raw: '150 / 200 / 250 / 300 / 350 (+ 50% AP)',
            healType: 'DrainEffect',
            values: [150, 200, 250, 300, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 200 / 250 / 300 / 350',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 50% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Allies',
    spelleffects: 'Heal',
    notes:
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">Untargetability</a></span> does not invalidate the targeting of the heal.\n<ul><li><i>Wish</i> will not credit <b>Soraka</b> for <a href="/wiki/Assist" title="Assist">assisting</a> in a <a href="/wiki/Kill" title="Kill">champion kill</a> if the target ally is at full health.</li>\n<li><i>Wish</i> will apply heal effects (such as <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Summon Aery" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Summon_Aery_(Rune)" title="Summon Aery"><img alt="Summon Aery" src="/wiki/images/Summon_Aery_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Summon_Aery_(Rune)" class="mw-redirect" title="Summon Aery (Rune)">Summon Aery</a></span></span>) prioritizing targets based on the <i>Spawn ID</i>, which is the order in which units were added to an ongoing game. For <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, this is the order they appear in from left to right in the loading screen.</li>\n<li><i>Wish\'s</i> effects occur before the cast time.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Soraka_Original_R_0.ogg   "Stars hear me!"',
  },
} satisfies { [skillName in string]: SkillData };
