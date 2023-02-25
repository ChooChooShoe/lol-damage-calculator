import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Syndra';

export default {
  Transcendent: {
    name: 'Transcendent',
    display_name: 'Transcendent',
    champion: 'Syndra',
    skill: 'I',
    image: {
      full: 'SyndraPassive.png',
      sprite: 'passive4.png',
      group: 'passive',
      x: 144,
      y: 0,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL" title="Syndra"><img alt="Syndra" src="/wiki/images/Syndra_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL" title="Syndra/LoL">Syndra</a></span></span> collects <span style="color: #AF1AAF; white-space:normal">Splinters of Wrath</span> that enhance her <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> based on the number of them collected, up to a maximum amount. She can collect them from dealing damage to enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, ranking up her abilities, and killing large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
      'Collecting a <span style="color: #AF1AAF; white-space:normal">Splinter of Wrath</span> from an enemy restores <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana</span></span> for <b>Syndra</b>.',
      'At the maximum amount of <span style="color: #AF1AAF; white-space:normal">Splinters</span>, her <span style="white-space:nowrap"><a href="/wiki/Ability_power" title="Ability power"><img alt="Ability power icon.png" src="/wiki/images/Ability_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #7A6DFF; white-space:normal">ability power</span></span> is increased.',
    ],
    description: [
      {
        icon: '/wiki/images/Transcendent.png',
        description:
          'Innate: Syndra collects Splinters of Wrath that enhance each of her abilities based on the number of them collected, stacking up to 120 times. She gains Splinters of Wrath from the following:\nDealing two instances of ability damage to an enemy champion within 4 seconds grants 1 / 2 / 3 (based on level) Splinters. This cannot occur on the same target more than once every 8 seconds.\nRanking up an ability with any skill points beyond level 1 grants 5 Splinters, up to 85.\nKilling a large minion grants 1 Splinter.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Syndra</b> collects <span style="color: #AF1AAF; white-space:normal">Splinters of Wrath</span> that enhance each of her abilities based on the number of them collected, <a href="/wiki/Stack" title="Stack">stacking</a> up to 120 times. She gains <span style="color: #AF1AAF; white-space:normal">Splinters of Wrath</span> from the following:\n<ul><li>Dealing two instances of <a href="/wiki/Champion_ability" title="Champion ability">ability</a> damage to an enemy champion within 4 seconds grants <span style="color: #AF1AAF; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="1;2;3" data-top_values="1;11;18">1 / 2 / 3 (based on level)</span> Splinters</span>. This cannot occur on the same target more than once every 8 seconds.</li>\n<li>Ranking up an ability with any skill points beyond level 1 grants <span style="color: #AF1AAF; white-space:normal">5 Splinters</span>, up to <span style="color: #AF1AAF; white-space:normal">85</span>.</li>\n<li>Killing a large minion grants <span style="color: #AF1AAF; white-space:normal">1 Splinter</span>.</li></ul>',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Innate:',
            raw: 'Syndra collects Splinters of Wrath that enhance each of her abilities based on the number of them collected, stacking up to 120 times',
            min: 0,
            max: 120,
            description:
              'Syndra collects Splinters of Wrath that enhance each of her abilities based on the number of them collected, stacking up to 120 times',
            values: 1,
            units: 'genericStacks',
            unitsText:
              'collects Splinters of Wrath that enhance each of her abilities based on the number of them collected, stacking up to 120 times',
            pre: 'Syndra collects Splinters of Wrath that enhance each of her abilities based on the number of them collected, stacking up to 120 times',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'She gains Splinters of Wrath from the following:\nDealing two instances of ability damage to an enemy champion within 4 seconds grants 1 / 2 / 3 (based on level) Splinters',
            values: [],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'Splinters',
            pre: 'She gains Splinters of Wrath from the following:\nDealing two instances of ability damage to an enemy champion within 4 seconds grants 1 / 2 / 3',
            post: 'Splinters',
          },
          {
            effectType: 'Gain',
            name: 'Line 3:',
            raw: 'This cannot occur on the same target more than once every 8 seconds.\nRanking up an ability with any skill points beyond level 1 grants 5 Splinters, up to 85.\nKilling a large minion grants 1 Splinter.',
            values: 8,
            user: 'none',
            units: '',
            unitsText:
              'cannot occur on the same target more than once every 8 seconds.',
            pre: 'This cannot occur on the same target more than once every 8 seconds.\nRanking up an ability with any skill points beyond level 1 grants 5 Splinters, up to 85.\nKilling a large minion grants 1 Splinter.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Collecting a Splinter of Wrath from an enemy restores  20 − 215 (based on level) mana. Splinters of Wrath are brought to Syndra from enemies over 0.6 seconds.',
        descriptionHTML:
          'Collecting a <span style="color: #AF1AAF; white-space:normal">Splinter of Wrath</span> from an enemy restores <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="20 +&nbsp;5 per level until level 5, then +&nbsp;8 per level until level 10, then +&nbsp;15 per level until level 15, then +&nbsp;20 per level." data-bot_values="20;25;30;35;40;48;56;64;72;80;95;110;125;140;155;175;195;215" data-top_values="1;2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17;18">20 − 215 (based on level)</span> mana</span></span>. <span style="color: #AF1AAF; white-space:normal">Splinters of Wrath</span> are brought to <b>Syndra</b> from enemies over 0.<small>6</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Collecting a Splinter of Wrath from an enemy restores  20 − 215 (based on level) mana',
            values: [
              20, 31.47, 42.94, 54.41, 65.88, 77.35, 88.82, 100.29, 111.76,
              123.24, 134.71, 146.18, 157.65, 169.12, 180.59, 192.06, 203.53,
              215,
            ],
            basedOn: 'level',
            units: 'total_mana',
            unitsText: 'mana',
            pre: 'Collecting a Splinter of Wrath from an enemy restores  20 − 215',
            post: 'mana',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Transcendent_2.png',
        description:
          'At 120 Splinters of Wrath, Syndra achieves Transcendence, increasing her  ability power by 15%.',
        descriptionHTML:
          'At <span style="color: #AF1AAF; white-space:normal">120 Splinters of Wrath</span>, <b>Syndra</b> achieves <i>Transcendence</i>, increasing her <span style="white-space:nowrap"><a href="/wiki/Ability_power" title="Ability power"><img alt="Ability power icon.png" src="/wiki/images/Ability_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #7A6DFF; white-space:normal">ability power</span></span> by 15%.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'At 120 Splinters of Wrath, Syndra achieves Transcendence, increasing her  ability power by 15%.',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              '.120 Splinters of Wrath, Syndra achieves Transcendence, increasing her  ability power by 15',
            pre: 'At 120 Splinters of Wrath, Syndra achieves Transcendence, increasing her  ability power by 15%.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Syndra can collect Splinters of Wrath from enemies even if she is at maximum stacks. These Splinters do not grant any stacks, but will still restore mana for Syndra.',
        descriptionHTML:
          '<i><b>Syndra</b> can collect <span style="color: #AF1AAF; white-space:normal">Splinters of Wrath</span> from enemies even if she is at maximum stacks. These <span style="color: #AF1AAF; white-space:normal">Splinters</span> do not grant any stacks, but will still restore <span style="color: #0099CC; white-space:normal">mana</span> for <b>Syndra</b>.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes:
      '* <b>Syndra\'s</b> abilities gain additional visual effects when they reach their <span style="color: #AF1AAF; white-space:normal">Splinter of Wrath</span> thresholds. Her spells will also gain a red colored tint outlining the VFX.\n<ul><li><ul><li><i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-ability="Dark Sphere" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL#Dark_Sphere" title="Dark Sphere"><img alt="Dark Sphere" src="/wiki/images/Syndra_Dark_Sphere.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL#Dark_Sphere" title="Syndra/LoL">Dark Sphere</a></span></span></i> will cause fractures to appear in the earth when it is used.</li></ul></li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Syndra_Original_Passive_R_1.ogg   "My potential is limitless!"',
  },
  'Dark Sphere': {
    name: 'Dark Sphere',
    display_name: 'Dark Sphere',
    champion: 'Syndra',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'SyndraQ.png',
      sprite: 'spell12.png',
      group: 'spell',
      x: 384,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '800',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 210',
    cast_time: 'none',
    cost: '40 / 45 / 50 / 55 / 60',
    costtype: 'Mana',
    static:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cooldown between casts for Dark Sphere with the Transcendent bonus">1.<small>25</small></span>',
    cooldown: '7',
    recharge:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Recharge timer for Dark Sphere with the Transcendent bonus">7</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> After a brief delay, <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL" title="Syndra"><img alt="Syndra" src="/wiki/images/Syndra_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL" title="Syndra/LoL">Syndra</a></span></span> conjures a <i>Dark Sphere</i> at the target location that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies. The <i>Dark Sphere</i> then remains on the ground for a few seconds.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-ability="Transcendent" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL#Transcendent" title="Transcendent"><img alt="Transcendent" src="/wiki/images/Syndra_Transcendent.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL#Transcendent" title="Syndra/LoL">Transcendent</a></span></span> Bonus:</b></span> <b>Syndra</b> periodically stocks a <i>Dark Sphere</i> charge.',
    ],
    description: [
      {
        icon: '/wiki/images/Dark_Sphere.png',
        description:
          'Active: Syndra conjures a Dark Sphere at the target location that appears after a 0.6-second delay, dealing magic damage to nearby enemies. The Dark Sphere then remains on the ground for 6 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Syndra</b> conjures a <i>Dark Sphere</i> at the target location that appears after a 0.<small>6</small>-second delay, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies. The <i>Dark Sphere</i> then remains on the ground for 6 seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'The Dark Sphere then remains on the ground for 6 seconds.',
            values: 6,
            user: 'none',
            units: '',
            unitsText: 'Dark Sphere then remains on the ground for 6 seconds.',
            pre: 'The Dark Sphere then remains on the ground for 6 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '70 / 105 / 140 / 175 / 210 (+ 70% AP)',
            valuesHTML:
              '70 / 105 / 140 / 175 / 210 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;70% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 105 / 140 / 175 / 210 (+ 70% AP)',
            damagetype: 'Magic',
            values: [70, 105, 140, 175, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 105 / 140 / 175 / 210',
            children: [
              {
                values: 70,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 70% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Dark_Sphere_2.png',
        description:
          'Transcendent Bonus: Collecting 40 Splinters of Wrath causes Syndra to periodically stock a Dark Sphere charge, up to a maximum of 2.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-ability="Transcendent" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL#Transcendent" title="Transcendent"><img alt="Transcendent" src="/wiki/images/Syndra_Transcendent.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL#Transcendent" title="Syndra/LoL">Transcendent</a></span></span> Bonus:</b></span> Collecting <span style="color: #AF1AAF; white-space:normal">40 Splinters of Wrath</span> causes <b>Syndra</b> to periodically <a href="/wiki/Stock" class="mw-redirect" title="Stock">stock</a> a <i>Dark Sphere</i> charge, up to a maximum of 2.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Transcendent Bonus:',
            raw: 'Collecting 40 Splinters of Wrath causes Syndra to periodically stock a Dark Sphere charge, up to a maximum of 2.',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              '40 Splinters of Wrath causes Syndra to periodically stock a Dark Sphere charge, up to a maximum of 2.',
            pre: 'Collecting 40 Splinters of Wrath causes Syndra to periodically stock a Dark Sphere charge, up to a maximum of 2.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'Dark Sphere will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i>Dark Sphere will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'magic',
    spelleffects: 'Aoe',
    spellshield: true,
    notes:
      '* <i>Dark Sphere</i> can be conjured inside terrain, but cannot be thrown there with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-ability="Force of Will" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL#Force_of_Will" title="Force of Will"><img alt="Force of Will" src="/wiki/images/Syndra_Force_of_Will.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL#Force_of_Will" title="Syndra/LoL">Force of Will</a></span></span>.\n<ul><li>There is no limit as to how many <i>Dark Spheres</i> can be active at a time.</li></ul>',
  },
  'Force of Will': {
    name: 'Force of Will',
    display_name: 'Force of Will',
    champion: 'Syndra',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'SyndraW.png',
      sprite: 'spell12.png',
      group: 'spell',
      x: 432,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '925 / 950 / 500',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 225',
    cast_time: 'none',
    cost: '60 / 70 / 80 / 90 / 100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">12 / 11 / 10 / 9 / 8</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL" title="Syndra"><img alt="Syndra" src="/wiki/images/Syndra_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL" title="Syndra/LoL">Syndra</a></span></span> grabs the nearest <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-ability="Dark Sphere" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL#Dark_Sphere" title="Dark Sphere"><img alt="Dark Sphere" src="/wiki/images/Syndra_Dark_Sphere.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL#Dark_Sphere" title="Syndra/LoL">Dark Sphere</a></span></span></i>, enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span> or non-epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> from the target location, and holds it for a few seconds.',
      '<i>Force of Will</i> can be recast while the target is grabbed.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Syndra</b> tosses the grabbed target to the target location, which deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them and nearby enemies.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-ability="Transcendent" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL#Transcendent" title="Transcendent"><img alt="Transcendent" src="/wiki/images/Syndra_Transcendent.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL#Transcendent" title="Syndra/LoL">Transcendent</a></span></span> Bonus:</b></span> <i>Force of Will</i> deals <span style="color: #F9966B; white-space:normal"><b>bonus</b> true damage</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Force_of_Will.png',
        description:
          'Active: Syndra grabs the nearest  Dark Sphere, enemy  minion or non-epic  monster within 500 units from the target location, and holds the target for 5 seconds. If a Dark Sphere is grabbed, its duration is refreshed; if a minion or monster is grabbed, it is put in  stasis. She prioritizes grabbing the nearest unit, then  Dark Spheres.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Syndra</b> grabs the nearest <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-ability="Dark Sphere" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL#Dark_Sphere" title="Dark Sphere"><img alt="Dark Sphere" src="/wiki/images/Syndra_Dark_Sphere.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL#Dark_Sphere" title="Syndra/LoL">Dark Sphere</a></span></span></i>, enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span> or non-epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> within 500 units from the target location, and holds the target for 5 seconds. If a <i>Dark Sphere</i> is grabbed, its duration is refreshed; if a minion or monster is grabbed, it is put in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stasis"><a href="/wiki/Stasis" title="Stasis"><img alt="Stasis icon.png" src="/wiki/images/Stasis_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stasis" class="mw-redirect" title="Stasis">stasis</a></span>. She prioritizes grabbing the nearest unit, then <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-ability="Dark Sphere" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL#Dark_Sphere" title="Dark Spheres"><img alt="Dark Spheres" src="/wiki/images/Syndra_Dark_Sphere.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL#Dark_Sphere" title="Syndra/LoL">Dark Spheres</a></span></span></i>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: 'Syndra grabs the nearest  Dark Sphere, enemy  minion or non-epic  monster within 500 units from the target location, and holds the target for 5 seconds',
            values: 5,
            user: 'none',
            units: '',
            unitsText:
              'grabs the nearest  Dark Sphere, enemy  minion or non-epic  monster within 500 units from the target location, and holds the target for 5 seconds',
            pre: 'Syndra grabs the nearest  Dark Sphere, enemy  minion or non-epic  monster within 500 units from the target location, and holds the target for 5 seconds',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Force of Will can be recast while the target is being held.',
        descriptionHTML:
          '<i>Force of Will</i> can be recast while the target is being held.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Force_of_Will_2.png',
        description:
          'Recast: Syndra throws the grabbed target towards the target location, granting  sight of their surroundings as they fall and dealing magic damage to them and nearby enemies. All targets hit are  slowed for 1.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Syndra</b> throws the grabbed target towards the target location, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of their surroundings as they fall and dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to them and nearby enemies. All targets hit are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> for 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'All targets hit are  slowed for 1.5 seconds.',
            values: 1,
            user: 'none',
            units: '',
            unitsText: 'targets hit are  slowed for 1.5 seconds.',
            pre: 'All targets hit are  slowed for 1.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '70 / 110 / 150 / 190 / 230 (+ 70% AP)',
            valuesHTML:
              '70 / 110 / 150 / 190 / 230 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;70% AP)</span>',
          },
          {
            name: 'Slow:',
            values: '25 / 30 / 35 / 40 / 45%',
            valuesHTML: '25 / 30 / 35 / 40 / 45%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 110 / 150 / 190 / 230 (+ 70% AP)',
            damagetype: 'Magic',
            values: [70, 110, 150, 190, 230],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 110 / 150 / 190 / 230',
            children: [
              {
                values: 70,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 70% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '25 / 30 / 35 / 40 / 45%',
            values: [25, 30, 35, 40, 45],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 30 / 35 / 40 / 45%',
          },
        ],
      },
      {
        icon: '/wiki/images/Force_of_Will_4.png',
        description:
          'Transcendent Bonus: Collecting 60 Splinters of Wrath enhances Force of Will to deal  12% (+ 2% per 100 AP) bonus true damage.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-ability="Transcendent" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL#Transcendent" title="Transcendent"><img alt="Transcendent" src="/wiki/images/Syndra_Transcendent.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL#Transcendent" title="Syndra/LoL">Transcendent</a></span></span> Bonus:</b></span> Collecting <span style="color: #AF1AAF; white-space:normal">60 Splinters of Wrath</span> enhances <i>Force of Will</i> to deal <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal">12%</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;2% per 100 AP)</span> <span style="color: #F9966B; white-space:normal"><b>bonus</b> true damage</span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Transcendent Bonus:',
            raw: 'Collecting 60 Splinters of Wrath enhances Force of Will to deal  12% (+ 2% per 100 AP) bonus true damage.',
            damagetype: 'True',
            values: 6,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'bonus true damage.',
            pre: 'Collecting 60 Splinters of Wrath enhances Force of Will to deal  12%',
            post: 'bonus true damage.',
            children: [
              {
                values: 2,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 2% per 100 AP',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting:
      '<a href="/wiki/Unit-targeted" class="mw-redirect" title="Unit-targeted">Unit</a> / <a href="/wiki/Location-targeted" class="mw-redirect" title="Location-targeted">Location</a>',
    affects: 'Enemies',
    damagetype: 'magic',
    spelleffects: 'Aoe',
    spellshield: true,
    projectile: 'false',
    notes:
      '* The initial cast does not count as an ability activation for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li><ul><li>Detonating the ability manually does.</li></ul></li>\n<li>If the ability is not recast within the duration, <b>Syndra</b> will release the unit or <i>Dark Sphere</i> that she is holding.</li>\n<li><i>Force of Will</i> does not destroy in-flight <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">projectiles</a></span> for the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> grabbed.</li>\n<li><i>Force of Will</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleanses</a></span> the target <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> grabbed from all <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span>.</li>\n<li><i>Force of Will</i> prevents non-sphere targets from dying when picking them up.</li>\n<li><i>Force of Will</i> cannot grab units that are being <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleported"><img alt="Teleported" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleported</a></span></span> on.</li>\n<li><b>Syndra</b> can grab <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Pet"><a href="/wiki/Pets" title="Pets"><img alt="Summon Tibbers.png" src="/wiki/images/Annie_Summon-_Tibbers.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Pets" title="Pets">pets</a></span>, such as <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shaco" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shaco/LoL" title="Shaco\'s"><img alt="Shaco\'s" src="/wiki/images/Shaco_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shaco/LoL" title="Shaco/LoL">Shaco\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shaco" data-ability="Jack in the Box" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shaco/LoL#Jack_in_the_Box" title="Jack in the Box"><img alt="Jack in the Box" src="/wiki/images/Shaco_Jack_in_the_Box.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shaco/LoL#Jack_in_the_Box" title="Shaco/LoL">Jack in the Box</a></span></span></span>.</li>\n<li>Casting <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> or <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> will cause <b>Syndra</b> to cancel <i>Force of Will</i> autonomously and drop anything she is holding.</li>\n<li>Grabbing prioritizes <i>Dark Spheres</i>.</li>\n<li>Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Pet"><a href="/wiki/Pets" title="Pets"><img alt="Summon Tibbers.png" src="/wiki/images/Annie_Summon-_Tibbers.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Pets" title="Pets">pets</a></span> that passively have an effect on their surroundings will continue to affect the area around them while they are being held. For example, <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Annie" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Annie/LoL" title="Annie\'s"><img alt="Annie\'s" src="/wiki/images/Annie_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Annie/LoL" title="Annie/LoL">Annie\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Annie" data-ability="Summon: Tibbers" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Annie/LoL#Summon:_Tibbers" title="Tibbers"><img alt="Tibbers" src="/wiki/images/Annie_Summon-_Tibbers.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Annie/LoL#Summon:_Tibbers" title="Annie/LoL">Tibbers</a></span></span></span> will continue to inflict burn damage on surrounding units while being held.</li>\n<li>Grabbing a <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-ability="Dark Sphere" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL#Dark_Sphere" title="Dark Sphere"><img alt="Dark Sphere" src="/wiki/images/Syndra_Dark_Sphere.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL#Dark_Sphere" title="Syndra/LoL">Dark Sphere</a></span></span> will cause the duration on it to refresh, but only on the first cast, not when it is thrown.</li>\n<li><i>Force of Will</i> has additional effects when targeting the <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Blue_Sentinel" title="Blue Sentinel"><img alt="Blue Sentinel" src="/wiki/images/Blue_SentinelSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Blue_Sentinel" title="Blue Sentinel">Blue Sentinel</a></span></span> and <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Red_Brambleback" title="Red Brambleback"><img alt="Red Brambleback" src="/wiki/images/Red_BramblebackSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Red_Brambleback" title="Red Brambleback">Red Brambleback</a></span></span>. Throwing the former will refund 10 <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Mana"><a href="/wiki/Mana" title="Mana"><img alt="Mana resource.png" src="/wiki/images/Mana_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Mana" title="Mana">mana</a></span> to <b>Syndra</b> upon cast and will reduce the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> of <i>Force of Will</i> by 1 second, while throwing the latter will apply the <span class="inline-image label-after buff-icon" style="display:inline;white-space:pre;" data-param="" data-buff="Crest of Cinders" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Crest_of_Cinders" title="Crest of Cinders"><img alt="Crest of Cinders" src="/wiki/images/Crest_of_Cinders_buff.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Crest_of_Cinders" title="Crest of Cinders">Crest of Cinders</a></span></span> burn to any affected units in the <a href="/wiki/Area_of_effect" title="Area of effect">area of effect</a>.</li>\n<li><i>Force of Will\'s</i> first cast uses a <img alt="Force of Will 3.png" src="/wiki/images/Syndra_Force_of_Will_3.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> modified icon while it has the <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-ability="Transcendent" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL#Transcendent" title="Transcendent"><img alt="Transcendent" src="/wiki/images/Syndra_Transcendent.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL#Transcendent" title="Syndra/LoL">Transcendent</a></span></span> bonus.</li></ul>',
  },
  'Scatter the Weak': {
    name: 'Scatter the Weak',
    display_name: 'Scatter the Weak',
    champion: 'Syndra',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'SyndraE.png',
      sprite: 'spell12.png',
      group: 'spell',
      x: 0,
      y: 144,
      w: 48,
      h: 48,
    },
    range: '700 / 800 / 1300',
    collision_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dark Sphere collision radius">70</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Individual missiles making up the cone">120</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Pushed spheres missile width">200</span>',
    angle:
      '56° / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Transcendent bonus">84°</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Visible cone missiles. 2 more waves of invisible cone missiles are spawned at 1600 and 1100 speed which hit only spheres spawned into the area late">2500</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Pushed spheres missile speed">2000</span>',
    cast_time: '0.<small>25</small>',
    cost: '50',
    costtype: 'Mana',
    cooldown: '17',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL" title="Syndra"><img alt="Syndra" src="/wiki/images/Syndra_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL" title="Syndra/LoL">Syndra</a></span></span> propels a wave of force in a cone in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks back</a></span> enemies hit based on proximity.',
      'A <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-ability="Dark Sphere" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL#Dark_Sphere" title="Dark Sphere"><img alt="Dark Sphere" src="/wiki/images/Syndra_Dark_Sphere.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL#Dark_Sphere" title="Syndra/LoL">Dark Sphere</a></span></span></i> can be knocked back further, which <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks back</a></span> enemies hit and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">reveals</a></span> them, dealing the same damage if they were not hit already.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-ability="Transcendent" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL#Transcendent" title="Transcendent"><img alt="Transcendent" src="/wiki/images/Syndra_Transcendent.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL#Transcendent" title="Syndra/LoL">Transcendent</a></span></span> Bonus:</b></span> <i>Scatter the Weak\'s</i> scatter angle is increased and it briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> enemies hit.',
    ],
    description: [
      {
        icon: '/wiki/images/Scatter_the_Weak.png',
        description:
          'Active: Syndra propels a wave of force in a cone in the target direction that deals magic damage to enemies hit and  knocks them back for 400 units and up to 800 units away from Syndra based on proximity, though not through terrain.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Syndra</b> propels a wave of force in a cone in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks them back</a></span> for 400 units and up to 800 units away from <b>Syndra</b> based on proximity, though not through terrain.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Syndra propels a wave of force in a cone in the target direction that deals magic damage to enemies hit and  knocks them back for 400 units and up to 800 units away from Syndra based on proximity, though not through terrain.',
            damagetype: 'Magic',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'propels a wave of force in a cone in the target direction that deals magic damage to enemies hit and  knocks them back for 400 units and up to 800 units away from Syndra based on proximity, though not through terrain.',
            pre: 'Syndra propels a wave of force in a cone in the target direction that deals magic damage to enemies hit and  knocks them back for 400 units and up to 800 units away from Syndra based on proximity, though not through terrain.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '75 / 115 / 155 / 195 / 235 (+ 45% AP)',
            valuesHTML:
              '75 / 115 / 155 / 195 / 235 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;45% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '75 / 115 / 155 / 195 / 235 (+ 45% AP)',
            damagetype: 'Magic',
            values: [75, 115, 155, 195, 235],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 115 / 155 / 195 / 235',
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
        icon: '/wiki/images/undefined',
        description:
          "Dark Spheres can be knocked back for 950 units and up to 1200 units away from Syndra based on proximity,  knocking back enemies they hit over 70 units, though not through terrain. Targets hit are also  stunned for 1.25 seconds, during which they are also  revealed, and dealt Scatter the Weak's damage if they were not damaged by the initial cast.",
        descriptionHTML:
          '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-ability="Dark Sphere" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL#Dark_Sphere" title="Dark Spheres"><img alt="Dark Spheres" src="/wiki/images/Syndra_Dark_Sphere.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL#Dark_Sphere" title="Syndra/LoL">Dark Spheres</a></span></span></i> can be knocked back for 950 units and up to 1200 units away from <b>Syndra</b> based on proximity, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking back</a></span> enemies they hit over 70 units, though not through terrain. Targets hit are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for 1.<small>25</small> seconds, during which they are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span>, and dealt <i>Scatter the Weak\'s</i> damage if they were not damaged by the initial cast.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Dark Spheres can be knocked back for 950 units and up to 1200 units away from Syndra based on proximity,  knocking back enemies they hit over 70 units, though not through terrain',
            values: 9,
            user: 'none',
            units: '',
            unitsText:
              'Spheres can be knocked back for 950 units and up to 1200 units away from Syndra based on proximity,  knocking back enemies they hit over 70 units, though not through terrain',
            pre: 'Dark Spheres can be knocked back for 950 units and up to 1200 units away from Syndra based on proximity,  knocking back enemies they hit over 70 units, though not through terrain',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: "Targets hit are also  stunned for 1.25 seconds, during which they are also  revealed, and dealt Scatter the Weak's damage if they were not damaged by the initial cast.",
            damagetype: 'None',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              "hit are also  stunned for 1.25 seconds, during which they are also  revealed, and dealt Scatter the Weak's damage if they were not damaged by the initial cast.",
            pre: "Targets hit are also  stunned for 1.25 seconds, during which they are also  revealed, and dealt Scatter the Weak's damage if they were not damaged by the initial cast.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Scatter_the_Weak_2.png',
        description:
          'Transcendent Bonus: Collecting 80 Splinters of Wrath enhances Scatter the Weak to have an increased scatter angle and  slow enemies hit by 70% for 1.25 seconds starting after the  knock back ends or if the target was hit by a pushed Dark Sphere, after the  stun has ended.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-ability="Transcendent" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL#Transcendent" title="Transcendent"><img alt="Transcendent" src="/wiki/images/Syndra_Transcendent.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL#Transcendent" title="Syndra/LoL">Transcendent</a></span></span> Bonus:</b></span> Collecting <span style="color: #AF1AAF; white-space:normal">80 Splinters of Wrath</span> enhances <i>Scatter the Weak</i> to have an increased scatter angle and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> enemies hit by 70% for 1.<small>25</small> seconds starting after the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock back</a></span> ends or if the target was hit by a pushed <i>Dark Sphere</i>, after the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> has ended.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Transcendent Bonus:',
            raw: 'Collecting 80 Splinters of Wrath enhances Scatter the Weak to have an increased scatter angle and  slow enemies hit by 70% for 1.25 seconds starting after the  knock back ends or if the target was hit by a pushed Dark Sphere, after the  stun has ended.',
            values: 8,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'for 1.25 seconds starting after the  knock back ends or if the target was hit by a pushed Dark Sphere, after the  stun has ended.80 Splinters of Wrath enhances Scatter the Weak to have an increased scatter angle and  slow enemies hit by 70',
            pre: 'Collecting 80 Splinters of Wrath enhances Scatter the Weak to have an increased scatter angle and  slow enemies hit by 70% for 1.25 seconds starting after the  knock back ends or if the target was hit by a pushed Dark Sphere, after the  stun has ended.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'magic',
    spelleffects: 'Aoe',
    spellshield: true,
    projectile: 'special',
    notes:
      '* <i>Scatter the Weak</i> is blocked by the portion of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Wind Wall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Wind Wall"><img alt="Wind Wall" src="/wiki/images/Yasuo_Wind_Wall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Yasuo/LoL">Wind Wall</a></span></span> it collides with. <i>Spheres</i> thrown will stop upon colliding with the wall.\n<ul><li><i>Spheres</i> spawned at close range of the ability are more likely to be hit.</li>\n<li>Enemies and spheres will be knocked into the direction directly away from <b>Syndra</b>, and the knock back has no dispersion.</li>\n<li><i>Scatter the Weak</i> will knock back <i>Spheres</i> even farther if they are inside terrain, up until they reach open space. If the terrain they\'re inside in cannot be surpassed, the <i>Spheres</i> will be knocked in the opposite direction.</li>\n<li><i>Scatter the Weak</i> will delay the expiration of a <i>Sphere</i> until after it finishes being knocked back.</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li>\n<li>Once <i>Scatter the Weak</i> has been learned, an arrow directly in front of every <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-ability="Dark Sphere" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL#Dark_Sphere" title="Dark Sphere"><img alt="Dark Sphere" src="/wiki/images/Syndra_Dark_Sphere.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL#Dark_Sphere" title="Syndra/LoL">Dark Sphere</a></span></span> will appear to signify the direction the <i>sphere</i> will be knocked towards, each one corresponding to <b>Syndra\'s</b> position. This is only visible to <b>Syndra</b>.</li></ul>\n<div class="center"><div class="floatnone"><a href="https://static.wikia.nocookie.net/leagueoflegends/images/b/bb/Dark_Sphere_directional_arrows.png/revision/latest?cb=20200714042406" class="image"><img alt="Dark Sphere directional arrows.png" src="/wiki/images/Dark_Sphere_directional_arrows.png" decoding="async" loading="lazy" width="250" height="168" class="lazyload"></a></div></div>',
  },
  'Unleashed Power': {
    name: 'Unleashed Power',
    display_name: 'Unleashed Power',
    champion: 'Syndra',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'SyndraR.png',
      sprite: 'spell12.png',
      group: 'spell',
      x: 48,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '675',
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dark Sphere grab range">3000</span>',
    cast_time: 'none',
    cost: '100',
    costtype: 'Mana',
    cooldown: '120 / 110 / 100 / 90 / 80',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL" title="Syndra"><img alt="Syndra" src="/wiki/images/Syndra_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL" title="Syndra/LoL">Syndra</a></span></span> creates a few <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-ability="Dark Sphere" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL#Dark_Sphere" title="Dark Spheres"><img alt="Dark Spheres" src="/wiki/images/Syndra_Dark_Sphere.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL#Dark_Sphere" title="Syndra/LoL">Dark Spheres</a></span></span></i> and grabs a few more nearby, then hurls them in a volley at the target enemy champion. Each sphere deals <span style="color: #00B0F0; white-space:normal">magic damage</span> upon hit, and remains on the ground for a few seconds.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-ability="Transcendent" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL#Transcendent" title="Transcendent"><img alt="Transcendent" src="/wiki/images/Syndra_Transcendent.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL#Transcendent" title="Syndra/LoL">Transcendent</a></span></span> Bonus:</b></span> <i>Unleashed Power</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Execute"><a href="/wiki/Kill#Execute" title="Kill#Execute"><img alt="Death from Below.png" src="/wiki/images/Pyke_Death_from_Below.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Kill#Execute" title="Kill">executes</a></span> enemies once they reach a certain <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">health</span></span> threshold.',
    ],
    description: [
      {
        description: 'Passive:  Dark Sphere gains ability haste.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-ability="Dark Sphere" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL#Dark_Sphere" title="Dark Sphere"><img alt="Dark Sphere" src="/wiki/images/Syndra_Dark_Sphere.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL#Dark_Sphere" title="Syndra/LoL">Dark Sphere</a></span></span> gains ability haste.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Ability Haste:',
            values: '10 / 15 / 20 / 25 / 30',
            valuesHTML: '10 / 15 / 20 / 25 / 30',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Ability Haste:',
            raw: '10 / 15 / 20 / 25 / 30',
            values: [10, 15, 20, 25, 30],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 15 / 20 / 25 / 30',
          },
        ],
      },
      {
        icon: '/wiki/images/Unleashed_Power.png',
        description:
          'Active: Syndra enters a 0.264 seconds cast time, creating  3 Dark Spheres and grabbing up to 4 nearby Dark Spheres that were last spawned. Afterwards, the collected Dark Spheres are hurled in a volley at the target enemy champion, each dealing magic damage upon hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Syndra</b> enters a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.25 seconds, but rounded up to the next game tick.">0.<small>264</small> seconds</span> cast time, creating <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-ability="Dark Sphere" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL#Dark_Sphere" title="3 Dark Spheres"><img alt="3 Dark Spheres" src="/wiki/images/Syndra_Dark_Sphere.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL#Dark_Sphere" title="Syndra/LoL">3 Dark Spheres</a></span></span></i> and grabbing up to 4 nearby <i>Dark Spheres</i> that were last spawned. Afterwards, the collected <i>Dark Spheres</i> are hurled in a volley at the target enemy champion, each dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> upon hit.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage per Sphere:',
            values: '90 / 110 / 130 / 150 / 170 (+ 17% AP)',
            valuesHTML:
              '90 / 110 / 130 / 150 / 170 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;17% AP)</span>',
          },
          {
            name: 'Minimum Magic Damage:',
            values: '270 / 330 / 390 / 450 / 510 (+ 51% AP)',
            valuesHTML:
              '270 / 330 / 390 / 450 / 510 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;51% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage per Sphere:',
            raw: '90 / 110 / 130 / 150 / 170 (+ 17% AP)',
            damagetype: 'Magic',
            values: [90, 110, 130, 150, 170],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '90 / 110 / 130 / 150 / 170',
            children: [
              {
                values: 17,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 17% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Minimum Magic Damage:',
            raw: '270 / 330 / 390 / 450 / 510 (+ 51% AP)',
            damagetype: 'Magic',
            values: [270, 330, 390, 450, 510],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '270 / 330 / 390 / 450 / 510',
            children: [
              {
                values: 51,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 51% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'The  Dark Spheres will then remain on the ground for 6 seconds.',
        descriptionHTML:
          'The <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-ability="Dark Sphere" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL#Dark_Sphere" title="Dark Spheres"><img alt="Dark Spheres" src="/wiki/images/Syndra_Dark_Sphere.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL#Dark_Sphere" title="Syndra/LoL">Dark Spheres</a></span></span></i> will then remain on the ground for 6 seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'The  Dark Spheres will then remain on the ground for 6 seconds.',
            values: 6,
            user: 'none',
            units: '',
            unitsText:
              'Dark Spheres will then remain on the ground for 6 seconds.',
            pre: 'The  Dark Spheres will then remain on the ground for 6 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Unleashed_Power_2.png',
        description:
          'Transcendent Bonus: Collecting 100 Splinters of Wrath enhances Unleashed Power to  execute the target if it would damage them to below  15% of their maximum health.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-ability="Transcendent" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL#Transcendent" title="Transcendent"><img alt="Transcendent" src="/wiki/images/Syndra_Transcendent.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL#Transcendent" title="Syndra/LoL">Transcendent</a></span></span> Bonus:</b></span> Collecting <span style="color: #AF1AAF; white-space:normal">100 Splinters of Wrath</span> enhances <i>Unleashed Power</i> to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Execute"><a href="/wiki/Kill#Execute" title="Kill#Execute"><img alt="Death from Below.png" src="/wiki/images/Pyke_Death_from_Below.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Kill#Execute" title="Kill">execute</a></span> the target if it would damage them to below <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">15% of their <b>maximum</b> health</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Transcendent Bonus:',
            raw: 'Collecting 100 Splinters of Wrath enhances Unleashed Power to  execute the target if it would damage them to below  15% of their maximum health.',
            healType: 'OutgoingHeals',
            values: 1,
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText:
              'of their maximum health.100 Splinters of Wrath enhances Unleashed Power to  execute the target if it would damage them to below  15',
            pre: 'Collecting 100 Splinters of Wrath enhances Unleashed Power to  execute the target if it would damage them to below  15% of their maximum health.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'magic',
    spelleffects: 'spell',
    spellshield: 'Special',
    projectile: 'true',
    callforhelp: 'true',
    notes:
      '* <i>Unleashed Power</i> makes <b>Syndra</b> enter a brief cast time, but the initial cast is completed instantly. If she dies during this cast time, <i>Unleashed Power</i> will still complete the remaining effect.\n<ul><li>Casting <i>Unleashed Power</i> on a target that becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> while the <i>spheres</i> are in flight will not destroy them but cause them to deal no damage instead.</li>\n<li><i>Spheres</i> already in flight will still travel if <b>Syndra\'s</b> target dies, but any remaining <i>sphere</i> will not. However, their duration will still get reset.</li>\n<li>A <i>Dark Sphere</i> summoned very shortly before <i>Unleashed Power</i> <b>will</b> be used as one of the spheres that get thrown.\n<ul><li>Depending on how many <i>spheres</i> are on the map and how far away the enemy is upon casting <i>Unleashed Power</i> it is possible that <b>Syndra</b> would conjure the <i>sphere</i> behind her as if she was going to throw it, but she won\'t.</li></ul></li>\n<li><i>Unleashed Power</i> will not add a <i>Sphere</i> that <b>Syndra</b> is holding with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-ability="Force of Will" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL#Force_of_Will" title="Force of Will"><img alt="Force of Will" src="/wiki/images/Syndra_Force_of_Will.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL#Force_of_Will" title="Syndra/LoL">Force of Will</a></span></span>.</li>\n<li><i>Spheres</i> that are being pushed by <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Syndra" data-ability="Scatter the Weak" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Syndra/LoL#Scatter_the_Weak" title="Scatter the Weak"><img alt="Scatter the Weak" src="/wiki/images/Syndra_Scatter_the_Weak.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Syndra/LoL#Scatter_the_Weak" title="Syndra/LoL">Scatter the Weak</a></span></span> (normally ones that were made late during the push) will not get picked up for <i>Unleashed Power</i>.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will only block the damage of a single <i>sphere</i>.</li></ul>',
  },
} satisfies { [skillName in string]: SkillData };
