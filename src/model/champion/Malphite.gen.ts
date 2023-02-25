import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Malphite';

export default {
  'Granite Shield': {
    name: 'Granite Shield',
    display_name: 'Granite Shield',
    champion: 'Malphite',
    skill: 'I',
    image: {
      full: 'Malphite_GraniteShield.png',
      sprite: 'passive2.png',
      group: 'passive',
      x: 144,
      y: 48,
      w: 48,
      h: 48,
    },
    static:
      '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="8;1" data-finish="6;13" data-bot_values="8;7;6" data-top_values="1;7;13">8 / 7 / 6 (based on level)</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Malphite" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Malphite/LoL" title="Malphite"><img alt="Malphite" src="/wiki/images/Malphite_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Malphite/LoL" title="Malphite/LoL">Malphite</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shields"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span> himself equal to a portion of <span style="color: #1F995C; white-space:normal">his <b>maximum</b> health</span>, which refreshes after a few seconds without taking damage.',
    ],
    description: [
      {
        description:
          'Innate - Shard of the Monolith: Malphite gains increased percentage size equal to 8% of his total armor, capped at 35% increased size at 437.5 armor.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Shard of the Monolith:</b></span> <b>Malphite</b> gains increased percentage <a href="/wiki/Size" title="Size">size</a> equal to <span style="color:yellow; white-space:normal">8% of his <b>total</b> armor</span>, capped at 35% increased size at <span style="color:yellow; white-space:normal">437.<small>5</small> armor</span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate - Shard of the Monolith:',
            raw: 'Malphite gains increased percentage size equal to 8% of his total armor, capped at 35% increased size at 437.5 armor.',
            increasedStat: 'total_ap',
            values: 8,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'of his total armor, capped at 35gains increased percentage size equal to 8',
            pre: 'Malphite gains increased percentage size equal to 8% of his total armor, capped at 35% increased size at 437.5 armor.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Granite_Shield.png',
        description:
          'Innate: Malphite grants himself a  shield for 9% of his maximum health. The shield lasts until it is broken, and refreshes after a few seconds of not taking damage.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Malphite</b> grants himself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for <span style="color: #1F995C; white-space:normal">9% of his <b>maximum</b> health</span>. The shield lasts until it is broken, and refreshes after a few seconds of not taking damage.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Innate:',
            raw: 'Malphite grants himself a  shield for 9% of his maximum health',
            healType: 'BonusHealth',
            values: 9,
            valuesIsPercent: true,
            units: 'maximum_hp',
            unitsText: 'of his maximum healthgrants himself a  shield for 9',
            pre: 'Malphite grants himself a  shield for 9% of his maximum health',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    spelleffects: 'Shield',
    notes:
      '* <b>Malphite\'s</b> increased size is affected by his base armor and growth, but also reduced by <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Black Cleaver" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Black_Cleaver" title="Black Cleaver"><img alt="Black Cleaver" src="/wiki/images/Black_Cleaver_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Black_Cleaver" title="Black Cleaver">Black Cleaver</a></span></span>. His increased size does not consider <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Malphite" data-ability="Thunderclap" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Malphite/LoL#Thunderclap" title="Thunderclap\'s"><img alt="Thunderclap\'s" src="/wiki/images/Malphite_Thunderclap.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Malphite/LoL#Thunderclap" title="Malphite/LoL">Thunderclap\'s</a></span></span> <b>bonus</b> armor.\n<ul><li><ul><li>The bonus <b>will</b> become a size reduction if <b>Malphite</b> is dropped to <i>negative</i> armor values.</li></ul></li>\n<li><i>Granite Shield</i> does not refresh its cooldown from damage that is mitigated by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span>.</li></ul>',
  },
  'Seismic Shard': {
    name: 'Seismic Shard',
    display_name: 'Seismic Shard',
    champion: 'Malphite',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'SeismicShard.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 384,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '625',
    speed: '1200',
    cast_time: '0.<small>25</small>',
    cost: '70 / 75 / 80 / 85 / 90',
    costtype: 'Mana',
    cooldown: '8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Malphite" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Malphite/LoL" title="Malphite"><img alt="Malphite" src="/wiki/images/Malphite_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Malphite/LoL" title="Malphite/LoL">Malphite</a></span></span> sends a shard to the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for a few seconds.',
      'He also gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for the same duration.',
    ],
    description: [
      {
        icon: '/wiki/images/Seismic_Shard.png',
        description:
          'Active: Malphite sends a shard to the target enemy that deals magic damage and  slows them for 3 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Malphite</b> sends a shard to the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for 3 seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Malphite sends a shard to the target enemy that deals magic damage and  slows them for 3 seconds.',
            damagetype: 'Magic',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'sends a shard to the target enemy that deals magic damage and  slows them for 3 seconds.',
            pre: 'Malphite sends a shard to the target enemy that deals magic damage and  slows them for 3 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '70 / 120 / 170 / 220 / 270 (+ 60% AP)',
            valuesHTML:
              '70 / 120 / 170 / 220 / 270 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
          {
            name: 'Slow:',
            values: '20 / 25 / 30 / 35 / 40%',
            valuesHTML: '20 / 25 / 30 / 35 / 40%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 120 / 170 / 220 / 270 (+ 60% AP)',
            damagetype: 'Magic',
            values: [70, 120, 170, 220, 270],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 120 / 170 / 220 / 270',
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
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '20 / 25 / 30 / 35 / 40%',
            values: [20, 25, 30, 35, 40],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 25 / 30 / 35 / 40%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Malphite also gains  bonus movement speed equal to the raw amount the target lost from the slow for the duration.',
        descriptionHTML:
          '<b>Malphite</b> also gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> equal to the raw amount the target lost from the slow for the duration.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'magic',
    spelleffects: 'single',
    spellshield: 'Special',
    projectile: 'true',
    callforhelp: 'True',
    notes:
      '* The rock spawns 100 units in front of <b>Malphite</b>.\n<ul><li><b>Malphite</b> will gain the bonus movement speed for the full duration as long as <i>Seismic Shard</i> impacts the target.\n<ul><li>Both a buff shown in the hotbar and duration bar above the ability icon will indicate the remaining duration.</li></ul></li>\n<li><i>Seismic Shard\'s</i> movement speed gain is entirely based off the target\'s current, and loss of, movement speed.\n<ul><li>Targets that are already <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by another effect will grant <b>Malphite</b> diminished movement speed.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow resist"><a href="/wiki/Slow_resist" title="Slow resist"><img alt="Slow immune icon.png" src="/wiki/images/Slow_immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow_resist" title="Slow resist">Slow-resistant</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow-immune"><a href="/wiki/Slow_resist#Slow_Immunity" title="Slow resist#Slow Immunity"><img alt="Slow immune 2.png" src="/wiki/images/Slow_immune_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow_resist#Slow_Immunity" title="Slow resist">slow-immune</a></span> targets will reduce or nullify <b>Malphite\'s</b> gain.</li></ul></li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).</li></ul>',
  },
  Thunderclap: {
    name: 'Thunderclap',
    display_name: 'Thunderclap',
    champion: 'Malphite',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'Obduracy.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 432,
      y: 96,
      w: 48,
      h: 48,
    },
    cast_time: 'None',
    cost: '30 / 35 / 40 / 45 / 50',
    costtype: 'mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">10 / 9.<small>5</small> / 9 / 8.<small>5</small> / 8</span>',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Malphite" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Malphite/LoL" title="Malphite"><img alt="Malphite" src="/wiki/images/Malphite_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Malphite/LoL" title="Malphite/LoL">Malphite</a></span></span> gains <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span>, tripled while <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Malphite" data-ability="Granite Shield" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Malphite/LoL#Granite_Shield" title="Granite Shield"><img alt="Granite Shield" src="/wiki/images/Malphite_Granite_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Malphite/LoL#Granite_Shield" title="Malphite/LoL">Granite Shield</a></span></span> is active.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Malphite\'s</b> next basic attack within a few seconds is empowered to gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> range</span> and deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.',
      'Additionally, <b>Malphite\'s</b> basic attacks for the next few seconds trigger a cone in the direction of the target that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit.',
    ],
    description: [
      {
        description:
          'Passive: Malphite gains  bonus armor, tripled while  Granite Shield is active.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Malphite</b> gains <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span>, tripled while <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Malphite" data-ability="Granite Shield" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Malphite/LoL#Granite_Shield" title="Granite Shield"><img alt="Granite Shield" src="/wiki/images/Malphite_Granite_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Malphite/LoL#Granite_Shield" title="Malphite/LoL">Granite Shield</a></span></span> is active.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Bonus Armor:',
            values: '10 / 15 / 20 / 25 / 30% armor',
            valuesHTML:
              '<span style="color:yellow; white-space:normal">10 / 15 / 20 / 25 / 30% armor</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Armor:',
            raw: '10 / 15 / 20 / 25 / 30% armor',
            values: [10, 15, 20, 25, 30],
            valuesIsPercent: true,
            units: 'total_armor',
            unitsText: 'armor',
            pre: '10 / 15 / 20 / 25 / 30% armor',
          },
        ],
      },
      {
        icon: '/wiki/images/Thunderclap.png',
        description:
          'Active: Malphite empowers his next basic attack within 6 seconds to gain  50 bonus range and deal  bonus physical damage  on-hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Malphite</b> empowers his next basic attack within 6 seconds to gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50 <b>bonus</b> range</span> and deal <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike physical icon.png" src="/wiki/images/Critical_strike_physical_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike"><span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Malphite empowers his next basic attack within 6 seconds to gain  50 bonus range and deal  bonus physical damage  on-hit.',
            increasedStat: 'bonus_ad',
            values: 6,
            units: '',
            unitsText:
              'empowers his next basic attack within 6 seconds to gain  50 bonus range and deal  bonus physical damage  on-hit.',
            pre: 'Malphite empowers his next basic attack within 6 seconds to gain  50 bonus range and deal  bonus physical damage  on-hit.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Physical Damage:',
            values: '30 / 45 / 60 / 75 / 90 (+ 20% AP) (+ 15% armor)',
            valuesHTML:
              '30 / 45 / 60 / 75 / 90 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;20% AP)</span> <span style="color:yellow; white-space:normal">(+&nbsp;15% armor)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Physical Damage:',
            raw: '30 / 45 / 60 / 75 / 90 (+ 20% AP) (+ 15% armor)',
            damagetype: 'Physical',
            values: [30, 45, 60, 75, 90],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 45 / 60 / 75 / 90',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 20% AP',
              },
              {
                values: 15,
                valuesIsPercent: true,
                units: 'total_armor',
                unitsText: 'armor',
                pre: '+ 15% armor',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Additionally, Malphite's basic attacks  on-hit for the next 5 seconds are empowered to trigger a cone in the direction of the target that deals physical damage to enemies hit.",
        descriptionHTML:
          'Additionally, <b>Malphite\'s</b> basic attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> for the next 5 seconds are empowered to trigger a cone in the direction of the target that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: "Additionally, Malphite's basic attacks  on-hit for the next 5 seconds are empowered to trigger a cone in the direction of the target that deals physical damage to enemies hit.",
            damagetype: 'Physical',
            values: 5,
            user: 'target',
            units: 'total_ad',
            unitsText:
              "Malphite's basic attacks  on-hit for the next 5 seconds are empowered to trigger a cone in the direction of the target that deals physical damage to enemies hit.",
            pre: "Additionally, Malphite's basic attacks  on-hit for the next 5 seconds are empowered to trigger a cone in the direction of the target that deals physical damage to enemies hit.",
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '15 / 25 / 35 / 45 / 55 (+ 30% AP) (+ 20% armor)',
            valuesHTML:
              '15 / 25 / 35 / 45 / 55 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span> <span style="color:yellow; white-space:normal">(+&nbsp;20% armor)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '15 / 25 / 35 / 45 / 55 (+ 30% AP) (+ 20% armor)',
            damagetype: 'Physical',
            values: [15, 25, 35, 45, 55],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 25 / 35 / 45 / 55',
            children: [
              {
                values: 30,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 30% AP',
              },
              {
                values: 20,
                valuesIsPercent: true,
                units: 'total_armor',
                unitsText: 'armor',
                pre: '+ 20% armor',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description: "Thunderclap  resets Malphite's basic attack timer.",
        descriptionHTML:
          '<i>Thunderclap <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Malphite\'s</b> basic attack timer.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    damagetype: 'physical',
    spelleffects: 'Proc',
    spellshield: false,
    notes:
      '* The passive <b>will</b> amplify <a href="/wiki/Armor_penetration#Reducing_armor" title="Armor penetration"><i>negative</i> armor</a>, too, if <b>Malphite\'s</b> armor is dropped that low.\n<ul><li>The empowered attack:\n<ul><li>Benefits from <i>Thunderclap\'s</i> cone effect.</li>\n<li>Prevents <b>Malphite</b> from casting <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Malphite" data-ability="Seismic Shard" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Malphite/LoL#Seismic_Shard" title="Seismic Shard"><img alt="Seismic Shard" src="/wiki/images/Malphite_Seismic_Shard.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Malphite/LoL#Seismic_Shard" title="Malphite/LoL">Seismic Shard</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Malphite" data-ability="Ground Slam" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Malphite/LoL#Ground_Slam" title="Ground Slam"><img alt="Ground Slam" src="/wiki/images/Malphite_Ground_Slam.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Malphite/LoL#Ground_Slam" title="Malphite/LoL">Ground Slam</a></span></span> during its windup.</li>\n<li><i>Cannot</i> have its <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attack windup"><a href="/wiki/Basic_attack#Windup" title="Basic attack">windup</a></span> canceled by new movement or attack commands, or casting <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Malphite" data-ability="Unstoppable Force" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Malphite/LoL#Unstoppable_Force" title="Unstoppable Force"><img alt="Unstoppable Force" src="/wiki/images/Malphite_Unstoppable_Force.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Malphite/LoL#Unstoppable_Force" title="Malphite/LoL">Unstoppable Force</a></span></span>.</li>\n<li><i>Can</i> have its windup canceled by casting <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Hextech Rocketbelt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt"><img alt="Hextech Rocketbelt" src="/wiki/images/Hextech_Rocketbelt_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt">Hextech Rocketbelt</a></span></span>.</li></ul></li>\n<li>The cone starts from <b>Malphite\'s</b> location.\n<ul><li>Unlike similar spells, it does not deal its damage separately to the primary target of the attack(s); if the target is outside the <a href="/wiki/Area_of_effect" title="Area of effect">area of effect</a> when struck, it will not take the bonus damage.</li></ul></li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: Interaction with parrying effects (<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodge</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">block</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blind</a></span>).</li>\n<li>Taking into account <b>Malphite\'s</b> <span style="color:orangered; white-space:normal"><b>base</b> attack speed</span> and attack speed growth, he\'ll be able to use up to 4-6 (levels 1-18) empowered attacks (including the initial one).\n<ul><li>With <span style="color:orangered; white-space:normal">2.<small>5</small> attack speed</span>, he\'ll be able to use up to 12.</li></ul></li></ul>',
  },
  'Ground Slam': {
    name: 'Ground Slam',
    display_name: 'Ground Slam',
    champion: 'Malphite',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'Landslide.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 0,
      y: 144,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 400',
    cast_time: '0.<small>2419</small>',
    cost: '50',
    costtype: 'Mana',
    cooldown: '7',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Malphite" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Malphite/LoL" title="Malphite"><img alt="Malphite" src="/wiki/images/Malphite_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Malphite/LoL" title="Malphite/LoL">Malphite</a></span></span> slams the ground beneath him, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cripple"><a href="/wiki/Cripple" title="Cripple"><img alt="Cripple icon.png" src="/wiki/images/Cripple_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cripple" class="mw-redirect" title="Cripple">crippling</a></span> them for a short time.',
    ],
    description: [
      {
        icon: '/wiki/images/Ground_Slam.png',
        description:
          'Active: Malphite slams the ground beneath him, dealing magic damage to nearby enemies and  crippling them for 3 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Malphite</b> slams the ground beneath him, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cripple"><a href="/wiki/Cripple" title="Cripple"><img alt="Cripple icon.png" src="/wiki/images/Cripple_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cripple" class="mw-redirect" title="Cripple">crippling</a></span> them for 3 seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Malphite slams the ground beneath him, dealing magic damage to nearby enemies and  crippling them for 3 seconds.',
            damagetype: 'Magic',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'slams the ground beneath him, dealing magic damage to nearby enemies and  crippling them for 3 seconds.',
            pre: 'Malphite slams the ground beneath him, dealing magic damage to nearby enemies and  crippling them for 3 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '70 / 110 / 150 / 190 / 230 (+ 60% AP) (+ 40% armor)',
            valuesHTML:
              '70 / 110 / 150 / 190 / 230 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span> <span style="color:yellow; white-space:normal">(+&nbsp;40% armor)</span>',
          },
          {
            name: 'Cripple:',
            values: '30 / 35 / 40 / 45 / 50%',
            valuesHTML: '30 / 35 / 40 / 45 / 50%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 110 / 150 / 190 / 230 (+ 60% AP) (+ 40% armor)',
            damagetype: 'Magic',
            values: [70, 110, 150, 190, 230],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 110 / 150 / 190 / 230',
            children: [
              {
                values: 60,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 60% AP',
              },
              {
                values: 40,
                valuesIsPercent: true,
                units: 'total_armor',
                unitsText: 'armor',
                pre: '+ 40% armor',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Cripple:',
            raw: '30 / 35 / 40 / 45 / 50%',
            values: [30, 35, 40, 45, 50],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 35 / 40 / 45 / 50%',
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'magic',
    spelleffects: 'aoe',
    spellshield: true,
    notes:
      '* The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cripple"><a href="/wiki/Cripple" title="Cripple"><img alt="Cripple icon.png" src="/wiki/images/Cripple_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cripple" class="mw-redirect" title="Cripple">cripple</a></span> <a href="/wiki/Stacking#Stacks_multiplicatively" title="Stacking">stacks multiplicatively</a> with other sources of <a href="/wiki/Attack_speed#Decreasing_attack_speed" title="Attack speed">attack speed reductions</a>.\n<ul><li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>',
  },
  'Unstoppable Force': {
    name: 'Unstoppable Force',
    display_name: 'Unstoppable Force',
    champion: 'Malphite',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'UFSlash.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 48,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '1000',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 325',
    speed:
      '1500 + <span style="color: #F5EE99; white-space:normal">100% movement speed</span>',
    cast_time: 'none',
    cost: '100',
    costtype: 'Mana',
    cooldown: '130 / 105 / 80',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Malphite" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Malphite/LoL" title="Malphite"><img alt="Malphite" src="/wiki/images/Malphite_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Malphite/LoL" title="Malphite/LoL">Malphite</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span> to the target location. Upon arrival, he deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks them up</a></span>.',
      '<span class="template_sbc"><b><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> displacement immunity</span>:</b></span> The dash cannot be deterred by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Unstoppable_Force.png',
        description:
          'Active: Malphite  dashes with  displacement immunity to the target location. Upon arrival, he deals magic damage to nearby enemies and  knocks them up for 1.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Malphite</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span> to the target location. Upon arrival, he deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks them up</a></span> for 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Upon arrival, he deals magic damage to nearby enemies and  knocks them up for 1.5 seconds.',
            damagetype: 'Magic',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'arrival, he deals magic damage to nearby enemies and  knocks them up for 1.5 seconds.',
            pre: 'Upon arrival, he deals magic damage to nearby enemies and  knocks them up for 1.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '200 / 300 / 400 (+ 90% AP)',
            valuesHTML:
              '200 / 300 / 400 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;90% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '200 / 300 / 400 (+ 90% AP)',
            damagetype: 'Magic',
            values: [200, 300, 400],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 300 / 400',
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
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Unstoppable Force will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i>Unstoppable Force will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'magic',
    spelleffects: 'aoe',
    spellshield: true,
    notes:
      '* The dash speed can be up-to doubled if <i>Unstoppable Force</i> is targeted at the middle of a wall so that his destination ends up on the other side.\n<ul><li><ul><li>It will be decreased if his destination ends up closer to him than his target location.</li></ul></li>\n<li>If <b>Malphite</b> dies during his <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span>, the ability cancels.\n<ul><li>If the dash is interrupted without <b>Malphite</b> dying, for instance when he enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span> during <i>Unstoppable Force</i>, he halts and the ability instead affects enemies at the stopped location.</li></ul></li></ul>',
  },
} satisfies { [skillName in string]: SkillData };
