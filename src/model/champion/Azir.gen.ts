import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Azir';

export default {
  "Shurima's Legacy": {
    name: "Shurima's Legacy",
    display_name: "Shurima's Legacy",
    champion: 'Azir',
    skill: 'I',
    image: {
      full: 'Azir_Passive.png',
      sprite: 'passive0.png',
      group: 'passive',
      x: 48,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '400',
    tether_radius: '2000',
    static:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts after Sun Disc is destroyed/expired">180</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Azir" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Azir/LoL" title="Azir"><img alt="Azir" src="/wiki/images/Azir_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Azir/LoL" title="Azir/LoL">Azir</a></span></span> periodically can summon the <span style="color: #56C456; white-space:normal">Disc of the Sun</span> from the ruins of allied or enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span>.',
      '<span style="color: #56C456; white-space:normal">Disc of the Sun</span> functions as a turret that decays over time, and weakens when <b>Azir</b> leaves it.',
    ],
    description: [
      {
        description:
          "Innate: Whenever a  turret outside the enemy team's base is destroyed, a marker is placed above its ruins which can be targeted by Azir.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> Whenever a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span> outside the enemy team\'s base is destroyed, a marker is placed above its ruins which can be targeted by <b>Azir</b>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: "/wiki/images/Shurima's Legacy.png",
        description:
          'Innate - Disc of the Sun: Azir can select a marker to construct the Sun Disc above the ruins after a 0.5-second cast time. The Sun Disc will activate after being assembled over 5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Disc of the Sun:</b></span> <b>Azir</b> can select a marker to construct the <span style="color: #56C456; white-space:normal">Sun Disc</span> above the ruins after a 0.<small>5</small>-second <a href="/wiki/Cast_time" class="mw-redirect" title="Cast time">cast time</a>. The <span style="color: #56C456; white-space:normal">Sun Disc</span> will activate after being assembled over 5 seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'The Sun Disc will activate after being assembled over 5 seconds.',
            values: 5,
            user: 'none',
            units: '',
            unitsText:
              'Sun Disc will activate after being assembled over 5 seconds.',
            pre: 'The Sun Disc will activate after being assembled over 5 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "The Sun Disc functions the same as a standard inner turret, gains 15% AP  bonus attack damage, and grants its kill credit to Azir. The Sun Disc's  health decays over 60 seconds and loses  100 armor while Azir is not alive or is too far away.",
        descriptionHTML:
          'The <span style="color: #56C456; white-space:normal">Sun Disc</span> functions the same as a standard <a href="/wiki/Turret#Inner_turret" title="Turret">inner turret</a>, gains <span style="color: #7A6DFF; white-space:normal">15% AP</span> <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span>, and grants its kill credit to <b>Azir</b>. The <span style="color: #56C456; white-space:normal">Sun Disc\'s</span> <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">health</span></span> decays over 60 seconds and loses <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">100 armor</span></span> while <b>Azir</b> is not alive or is too far away.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'The Sun Disc functions the same as a standard inner turret, gains 15% AP  bonus attack damage, and grants its kill credit to Azir',
            increasedStat: 'total_ap',
            values: 1,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'AP  bonus attack damage, and grants its kill credit to AzirSun Disc functions the same as a standard inner turret, gains 15',
            pre: 'The Sun Disc functions the same as a standard inner turret, gains 15% AP  bonus attack damage, and grants its kill credit to Azir',
          },
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: "The Sun Disc's  health decays over 60 seconds and loses  100 armor while Azir is not alive or is too far away.",
            healType: 'BonusHealth',
            values: 6,
            units: 'total_armor',
            unitsText:
              "Sun Disc's  health decays over 60 seconds and loses  100 armor while Azir is not alive or is too far away.",
            pre: "The Sun Disc's  health decays over 60 seconds and loses  100 armor while Azir is not alive or is too far away.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Azir cannot construct a Sun Disc with the marker while he is unable to cast abilities.',
        descriptionHTML:
          '<i><b>Azir</b> cannot construct a <span style="color: #56C456; white-space:normal">Sun Disc</span> with the marker while he is unable to cast abilities.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description: 'See Pets for more details about the Sun Disc.',
        descriptionHTML:
          '<i>See <a href="/wiki/Azir/LoL#Pets" title="Azir/LoL">Pets</a> for more details about the <span style="color: #56C456; white-space:normal">Sun Disc</span>.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Turret ruins',
    damagetype: 'Physical',
    spelleffects: 'Attack',
    spellshield: false,
    projectile: 'False',
    notes: '* No additional notes.',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Azir_Original_ObeliskEnemy_0.ogg   Return!',
    video: 'Azir IVideo.ogv',
  },
  'Conquering Sands': {
    name: 'Conquering Sands',
    display_name: 'Conquering Sands',
    champion: 'Azir',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'AzirQWrapper.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 0,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '740',
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Spear length">370</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dashing soldier missile width">140</span>',
    cast_time: '0.<small>25</small>',
    cost: '55',
    costtype: 'mana',
    cooldown: '14 / 12 / 10 / 8 / 6',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Azir" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Azir/LoL" title="Azir"><img alt="Azir" src="/wiki/images/Azir_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Azir/LoL" title="Azir/LoL">Azir</a></span></span> sends all <span style="color: #56C456; white-space:normal">Sand Soldiers</span> to dash towards a location. They deal <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> enemies they pass through.',
    ],
    description: [
      {
        icon: '/wiki/images/Conquering Sands.png',
        description:
          'Active: Azir orders all Sand Soldiers to dash toward the target location, dealing magic damage to all enemies they pass through and  slowing them by 25% for 1 second.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Azir</b> orders all <span style="color: #56C456; white-space:normal">Sand Soldiers</span> to dash toward the target location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to all enemies they pass through and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 25% for 1 second.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Azir orders all Sand Soldiers to dash toward the target location, dealing magic damage to all enemies they pass through and  slowing them by 25% for 1 second.',
            damagetype: 'Magic',
            values: 2,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'for 1 second.orders all Sand Soldiers to dash toward the target location, dealing magic damage to all enemies they pass through and  slowing them by 25',
            pre: 'Azir orders all Sand Soldiers to dash toward the target location, dealing magic damage to all enemies they pass through and  slowing them by 25% for 1 second.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '70 / 90 / 110 / 130 / 150 (+ 30% AP)',
            valuesHTML:
              '70 / 90 / 110 / 130 / 150 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 90 / 110 / 130 / 150 (+ 30% AP)',
            damagetype: 'Magic',
            values: [70, 90, 110, 130, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 90 / 110 / 130 / 150',
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
          'Enemies hit by subsequent soldiers take no additional damage and are instead  slowed by an additional 25% per soldier.',
        descriptionHTML:
          'Enemies hit by subsequent soldiers take no additional damage and are instead <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by an additional 25% per soldier.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Enemies hit by subsequent soldiers take no additional damage and are instead  slowed by an additional 25% per soldier.',
            damagetype: 'None',
            values: 2,
            valuesIsPercent: true,
            units: 'total_ad',
            unitsText:
              'per soldier.hit by subsequent soldiers take no additional damage and are instead  slowed by an additional 25',
            pre: 'Enemies hit by subsequent soldiers take no additional damage and are instead  slowed by an additional 25% per soldier.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Conquering Sands will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i>Conquering Sands will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'Special',
    notes:
      '* <span style="color: #56C456; white-space:normal">Sand Soldiers</span> will stop their movement upon colliding with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Wind Wall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Wind Wall"><img alt="Wind Wall" src="/wiki/images/Yasuo_Wind_Wall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Yasuo/LoL">Wind Wall</a></span></span> but not with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-ability="Unbreakable" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL#Unbreakable" title="Unbreakable"><img alt="Unbreakable" src="/wiki/images/Braum_Unbreakable.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL#Unbreakable" title="Braum/LoL">Unbreakable</a></span></span>.',
    video: 'Azir QVideo.ogv',
  },
  'Arise!': {
    name: 'Arise!',
    display_name: 'Arise!',
    champion: 'Azir',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'AzirW.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 48,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '500',
    tether_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Soldier command range">660</span>',
    cast_time: '0.<small>25</small>',
    cost: '40',
    costtype: 'mana + 1 Sand Soldier',
    cooldown: '1.<small>5</small>',
    recharge:
      '9 / 8.<small>25</small> / 7.<small>5</small> / 6.<small>75</small> / 6',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> If three <span style="color: #56C456; white-space:normal">Sand Soldiers</span> are summoned, <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Azir" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Azir/LoL" title="Azir"><img alt="Azir" src="/wiki/images/Azir_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Azir/LoL" title="Azir/LoL">Azir</a></span></span> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Azir</b> summons a <span style="color: #56C456; white-space:normal">Sand Soldier</span> to attack nearby targets for him, replacing his <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack"><a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a></span> against enemies within their range. Their attacks deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies in a line.',
      '<span style="color: #56C456; white-space:normal">Sand Soldiers</span> expire faster near <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span> and instantly when <b>Azir</b> leaves them.',
    ],
    description: [
      {
        description:
          'Passive: Azir gains  bonus attack speed, doubled for 5 seconds if he summons a third concurrent soldier with Arise!',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Azir</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>, doubled for 5 seconds if he summons a third concurrent soldier with <i>Arise!</i>',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Passive:',
            raw: ' Azir gains  bonus attack speed, doubled for 5 seconds if he summons a third concurrent soldier with Arise!',
            increasedStat: 'bonus_ad',
            values: 5,
            units: '',
            unitsText:
              'gains  bonus attack speed, doubled for 5 seconds if he summons a third concurrent soldier with Arise!',
            pre: 'Azir gains  bonus attack speed, doubled for 5 seconds if he summons a third concurrent soldier with Arise!',
          },
        ],
        leveling: [
          {
            name: 'Bonus Attack Speed:',
            values: '15 / 25 / 35 / 45 / 55%',
            valuesHTML: '15 / 25 / 35 / 45 / 55%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '15 / 25 / 35 / 45 / 55%',
            values: [15, 25, 35, 45, 55],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 25 / 35 / 45 / 55%',
          },
        ],
      },
      {
        icon: '/wiki/images/Arise!.png',
        description:
          'Active: Azir summons a Sand Soldier at the target location that is  untargetable, lasts 10 seconds, and grants  sight of its surroundings. The Sand Soldier expires twice as fast while within range of an enemy  turret, and does so instantly if Azir is too far away.Azir periodically stocks a Sand Soldier, up to a maximum of 2.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Azir</b> summons a <span style="color: #56C456; white-space:normal">Sand Soldier</span> at the target location that is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, lasts 10 seconds, and grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of its surroundings. The <span style="color: #56C456; white-space:normal">Sand Soldier</span> expires twice as fast while within range of an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span>, and does so instantly if <b>Azir</b> is too far away.<br><br><b>Azir</b> periodically <a href="/wiki/Stock" class="mw-redirect" title="Stock">stocks</a> a <span style="color: #56C456; white-space:normal">Sand Soldier</span>, up to a maximum of 2.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Azir summons a Sand Soldier at the target location that is  untargetable, lasts 10 seconds, and grants  sight of its surroundings',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'summons a Sand Soldier at the target location that is  untargetable, lasts 10 seconds, and grants  sight of its surroundings',
            pre: 'Azir summons a Sand Soldier at the target location that is  untargetable, lasts 10 seconds, and grants  sight of its surroundings',
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'The Sand Soldier expires twice as fast while within range of an enemy  turret, and does so instantly if Azir is too far away.Azir periodically stocks a Sand Soldier, up to a maximum of 2.',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'Sand Soldier expires twice as fast while within range of an enemy  turret, and does so instantly if Azir is too far away.Azir periodically stocks a Sand Soldier, up to a maximum of 2.',
            pre: 'The Sand Soldier expires twice as fast while within range of an enemy  turret, and does so instantly if Azir is too far away.Azir periodically stocks a Sand Soldier, up to a maximum of 2.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "When Azir declares a basic attack against an enemy in a soldier's  attack range, the Sand Soldier attacks in his stead, thrusting their spear in the target's direction to deal 50 − 150 (based on level) (+ 55% AP) magic damage to enemies struck in a line. Targets hit beyond the closest take 25 / 50 / 75 / 100% (based on level) damage. Subsequent Sand Soldiers against the same target deal 25% damage.",
        descriptionHTML:
          'When <b>Azir</b> declares a basic attack against an enemy in a soldier\'s <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;attack range</span>, the <span style="color: #56C456; white-space:normal">Sand Soldier</span> attacks in his stead, thrusting their spear in the target\'s direction to deal <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#00B0F0;" data-bot_values="50;52;54;56;58;60;62;65;70;75;80;90;100;110;120;130;140;150" data-top_values="">50 − 150 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;55% AP)</span> <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies struck in a line. Targets hit beyond the closest take <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="25;1" data-finish="100;16" data-bot_values="25;50;75;100" data-top_values="1;6;11;16" data-bot_key="%">25 / 50 / 75 / 100% (based on level)</span> damage. Subsequent <span style="color: #56C456; white-space:normal">Sand Soldiers</span> against the same target deal 25% damage.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: "When Azir declares a basic attack against an enemy in a soldier's  attack range, the Sand Soldier attacks in his stead, thrusting their spear in the target's direction to deal 50 − 150 (based on level) (+ 55% AP) magic damage to enemies struck in a line",
            values: [
              50, 55.88, 61.76, 67.65, 73.53, 79.41, 85.29, 91.18, 97.06,
              102.94, 108.82, 114.71, 120.59, 126.47, 132.35, 138.24, 144.12,
              150,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'magic damage to enemies struck in a line',
            pre: "When Azir declares a basic attack against an enemy in a soldier's  attack range, the Sand Soldier attacks in his stead, thrusting their spear in the target's direction to deal 50 − 150",
            post: 'magic damage to enemies struck in a line',
            children: [
              {
                values: 55,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 55% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Targets hit beyond the closest take 25 / 50 / 75 / 100% (based on level) damage',
            damagetype: 'None',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'damage',
            pre: 'Targets hit beyond the closest take 25 / 50 / 75 / 100%',
            post: 'damage',
          },
          {
            effectType: 'Gain',
            name: 'Line 3:',
            raw: 'Subsequent Sand Soldiers against the same target deal 25% damage.',
            values: 2,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'damage.Sand Soldiers against the same target deal 25',
            pre: 'Subsequent Sand Soldiers against the same target deal 25% damage.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Sand Soldiers cannot attack  structures,  wards, nor  traps.',
        descriptionHTML:
          '<span style="color: #56C456; white-space:normal">Sand Soldiers</span> cannot attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">structures</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ward"><a href="/wiki/Ward" title="Ward"><img alt="Ward icon.png" src="/wiki/images/Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ward" title="Ward">wards</a></span>, nor <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stealthed trap"><a href="/wiki/Stealth#Stealthed_traps_and_wards" title="Stealth#Stealthed traps and wards"><img alt="Noxious Trap.png" src="/wiki/images/Teemo_Noxious_Trap.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Stealthed_traps_and_wards" title="Stealth">traps</a></span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Arise! will cast at max range if cast beyond that. See Pets for more details about Sand Soldiers.',
        descriptionHTML:
          '<i>Arise! will cast at max range if cast beyond that. See <a href="/wiki/Azir/LoL#Pets" title="Azir/LoL">Pets</a> for more details about <span style="color: #56C456; white-space:normal">Sand Soldiers</span>.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'aoe',
    spellshield: false,
    projectile: 'False',
    callforhelp: 'True',
    notes:
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Nearsight"><a href="/wiki/Nearsight" title="Nearsight"><img alt="Nearsight icon.png" src="/wiki/images/Nearsight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Nearsight" class="mw-redirect" title="Nearsight">Nearsighting</a></span> effects will only allow <b>Azir</b> to perform attacks from soldiers within his own sight radius.\n<ul><li><b>Azir</b> must rank <i>Arise!</i> as his first ability, and will do so automatically if he reaches level 2 before ranking an ability.</li>\n<li><b>Azir</b> can only command his soldiers to attack if he is able to declare <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> commands himself, meaning <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span> effects that disable attacking, such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Disarm"><a href="/wiki/Disarm" title="Disarm"><img alt="Disarm icon.png" src="/wiki/images/Disarm_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Disarm" class="mw-redirect" title="Disarm">disarm</a></span>, do not allow him to order his soldiers to attack in his stead.</li>\n<li>Damage to enemy champions from <i>Sand Soldier</i> stabs will draw minion aggro even if the enemy champion was not the primary target.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup></li>\n<li>Attacking with the soldiers will trigger <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Hail of Blades" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hail_of_Blades_(Rune)" title="Hail of Blades"><img alt="Hail of Blades" src="/wiki/images/Hail_of_Blades_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Hail_of_Blades_(Rune)" class="mw-redirect" title="Hail of Blades (Rune)">Hail of Blades</a></span></span>.</li>\n<li><span style="color: #56C456; white-space:normal">Sand Soldiers</span> will attack the closest enemy to <b>Azir</b> when using attack move (or <span class="template_sbc"><b>A + RMB</b></span> / <span class="template_sbc"><b>Shift + RMB</b></span>) or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Acquisition radius"><a href="/wiki/Basic_attack" title="Basic attack"><img alt="Acquisition range.png" src="/wiki/images/Acquisition_range.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack" title="Basic attack">auto-attack</a></span>.</li></ul>\n<figure class="thumb tleft " style="width: 191px"> \t<a href="https://static.wikia.nocookie.net/leagueoflegends/images/5/5b/Azir_Sand_Soldier_screenshot.png/revision/latest?cb=20200215163146" class="image"><img alt="" src="/wiki/images/Azir_Sand_Soldier_screenshot.png" decoding="async" loading="lazy" width="191" height="217" class="thumbimage lazyload"></a> \t<noscript><a href="https://static.wikia.nocookie.net/leagueoflegends/images/5/5b/Azir_Sand_Soldier_screenshot.png/revision/latest?cb=20200215163146" class="image"><img alt="" src="https://static.wikia.nocookie.net/leagueoflegends/images/5/5b/Azir_Sand_Soldier_screenshot.png/revision/latest?cb=20200215163146" decoding="async" loading="lazy" width="191" height="217" class="thumbimage" data-image-name="Azir Sand Soldier screenshot.png" data-image-key="Azir_Sand_Soldier_screenshot.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/5/5b/Azir_Sand_Soldier_screenshot.png/revision/latest?cb=20200215163146"></a></noscript> \t<figcaption class="thumbcaption"> \t\t \t\t \t\t \t\t\t<p class="caption">An exclamation mark (<b>!</b>) will appear above the <span style="color: #56C456; white-space:normal"><b>Sand Soldier\'s</b></span> head when within the range of an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span>.</p> \t\t \t</figcaption> </figure>',
    video: 'Azir WVideo.ogv',
  },
  'Shifting Sands': {
    name: 'Shifting Sands',
    display_name: 'Shifting Sands',
    champion: 'Azir',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'AzirEWrapper.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 96,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '1100',
    cast_time: 'none',
    cost: '60',
    costtype: 'mana',
    cooldown: '22 / 20.<small>5</small> / 19 / 17.<small>5</small> / 16',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Azir" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Azir/LoL" title="Azir"><img alt="Azir" src="/wiki/images/Azir_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Azir/LoL" title="Azir/LoL">Azir</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span> himself and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target <span style="color: #56C456; white-space:normal">Sand Soldier</span>, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies he passes through.',
      'He will stop upon hitting an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, gaining a charge of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Azir" data-ability="Arise!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Azir/LoL#Arise!" title="Arise!"><img alt="Arise!" src="/wiki/images/Azir_Arise%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Azir/LoL#Arise!" title="Azir/LoL">Arise!</a></span></span></i>.',
    ],
    description: [
      {
        icon: '/wiki/images/Shifting Sands.png',
        description:
          'Active: Azir grants himself a  shield for 1.5 seconds and  dashes to the target Sand Soldier, dealing magic damage to enemies within his path.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Azir</b> grants himself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 1.<small>5</small> seconds and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target <span style="color: #56C456; white-space:normal">Sand Soldier</span>, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within his path.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Active:',
            raw: ' Azir grants himself a  shield for 1.5 seconds and  dashes to the target Sand Soldier, dealing magic damage to enemies within his path.',
            damagetype: 'Magic',
            shieldType: 'SelfShield',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'grants himself a  shield for 1.5 seconds and  dashes to the target Sand Soldier, dealing magic damage to enemies within his path.',
            pre: 'Azir grants himself a  shield for 1.5 seconds and  dashes to the target Sand Soldier, dealing magic damage to enemies within his path.',
          },
        ],
        leveling: [
          {
            name: 'Shield Strength:',
            values: '70 / 110 / 150 / 190 / 230 (+ 60% AP)',
            valuesHTML:
              '70 / 110 / 150 / 190 / 230 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
          {
            name: 'Magic Damage:',
            values: '60 / 90 / 120 / 150 / 180 (+ 40% AP)',
            valuesHTML:
              '60 / 90 / 120 / 150 / 180 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Shield',
            name: 'Shield Strength:',
            raw: '70 / 110 / 150 / 190 / 230 (+ 60% AP)',
            damagetype: 'None',
            shieldType: 'SelfShield',
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
            ],
          },
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 90 / 120 / 150 / 180 (+ 40% AP)',
            damagetype: 'Magic',
            values: [60, 90, 120, 150, 180],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 90 / 120 / 150 / 180',
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
        description:
          'If Azir dashes into an enemy  champion, he stops and gains a charge of  Arise!.',
        descriptionHTML:
          'If <b>Azir</b> dashes into an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, he stops and gains a charge of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Azir" data-ability="Arise!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Azir/LoL#Arise!" title="Arise!"><img alt="Arise!" src="/wiki/images/Azir_Arise%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Azir/LoL#Arise!" title="Azir/LoL">Arise!</a></span></span></i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description: 'Azir can cast of any of his abilities during the dash.',
        descriptionHTML:
          '<i><b>Azir</b> can cast of any of his <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> during the dash.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Self, Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes:
      '* <b>Azir</b> will track the <span style="color: #56C456; white-space:normal">Sand Soldier</span> if they change locations, such as by <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Azir" data-ability="Conquering Sands" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Azir/LoL#Conquering_Sands" title="Conquering Sands"><img alt="Conquering Sands" src="/wiki/images/Azir_Conquering_Sands.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Azir/LoL#Conquering_Sands" title="Azir/LoL">Conquering Sands</a></span></span>.',
    video: 'Azir EVideo.ogv',
  },
  "Emperor's Divide": {
    name: "Emperor's Divide",
    display_name: "Emperor's Divide",
    champion: 'Azir',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'AzirR.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 144,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '400 / -325',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Soldier radius, \'lollipop\' radius where they come to halt">125</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Knockback missiles speed">1000</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Soldiers dash speed">1400</span>',
    cast_time: '0.<small>5</small>',
    cost: '100',
    costtype: 'mana',
    cooldown: '120 / 105 / 90',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Azir" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Azir/LoL" title="Azir"><img alt="Azir" src="/wiki/images/Azir_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Azir/LoL" title="Azir/LoL">Azir</a></span></span> summons a wall of soldiers that charges forward, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking back</a></span> enemies hit.',
      'The soldiers will linger for a few seconds, acting as terrain against enemies while allowing allies to pass.',
    ],
    description: [
      {
        icon: "/wiki/images/Emperor's Divide.png",
        description:
          'Active: Azir calls forth a phalanx of soldiers from 175 units behind him, catching enemies from up to 325 units behind him and charging forward 575 units in the target direction.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Azir</b> calls forth a phalanx of soldiers from <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="See notes">175</span> units behind him, catching enemies from up to <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="See notes">325</span> units behind him and charging forward <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="See notes">575</span> units in the target direction.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: ' Azir calls forth a phalanx of soldiers from 175 units behind him, catching enemies from up to 325 units behind him and charging forward 575 units in the target direction.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'calls forth a phalanx of soldiers from 175 units behind him, catching enemies from up to 325 units behind him and charging forward 575 units in the target direction.',
            pre: 'Azir calls forth a phalanx of soldiers from 175 units behind him, catching enemies from up to 325 units behind him and charging forward 575 units in the target direction.',
          },
        ],
        leveling: [
          {
            name: 'Width:',
            values: '6 / 6.5 / 7 / 7.5 / 8 soldiers',
            valuesHTML:
              '6 / 6.<small>5</small> / 7 / 7.<small>5</small> / 8 soldiers',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Width:',
            raw: '6 / 6.5 / 7 / 7.5 / 8 soldiers',
            values: [6, 6.5, 7, 7.5, 8],
            user: 'none',
            units: '',
            unitsText: 'soldiers',
            pre: '6 / 6.5 / 7 / 7.5 / 8 soldiers',
          },
        ],
      },
      {
        description:
          'Enemies impacted by the charge are dealt magic damage and  knocked away over 1 second to a line 650 units in front of Azir.',
        descriptionHTML:
          'Enemies impacted by the charge are dealt <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked away</a></span> over 1 second to a line 650 units in front of <b>Azir</b>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Enemies impacted by the charge are dealt magic damage and  knocked away over 1 second to a line 650 units in front of Azir.',
            damagetype: 'Magic',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'impacted by the charge are dealt magic damage and  knocked away over 1 second to a line 650 units in front of Azir.',
            pre: 'Enemies impacted by the charge are dealt magic damage and  knocked away over 1 second to a line 650 units in front of Azir.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '175 / 250 / 325 / 400 / 475 (+ 60% AP)',
            valuesHTML:
              '175 / 250 / 325 / 400 / 475 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '175 / 250 / 325 / 400 / 475 (+ 60% AP)',
            damagetype: 'Magic',
            values: [175, 250, 325, 400, 475],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '175 / 250 / 325 / 400 / 475',
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
        description:
          'Upon finishing their charge, the soldiers stand as a wall for 5 seconds, acting as impassible terrain against enemies and granting  sight of their surroundings. Azir and his allies can move through these soldiers.',
        descriptionHTML:
          'Upon finishing their charge, the soldiers stand as a wall for 5 seconds, acting as impassible terrain against enemies and granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of their surroundings. <b>Azir</b> and his allies can move through these soldiers.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Upon finishing their charge, the soldiers stand as a wall for 5 seconds, acting as impassible terrain against enemies and granting  sight of their surroundings',
            values: 5,
            user: 'none',
            units: '',
            unitsText:
              'finishing their charge, the soldiers stand as a wall for 5 seconds, acting as impassible terrain against enemies and granting  sight of their surroundings',
            pre: 'Upon finishing their charge, the soldiers stand as a wall for 5 seconds, acting as impassible terrain against enemies and granting  sight of their surroundings',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'Special',
    notes:
      '* The soldier units are spawned only 175 units behind <b>Azir</b>, but do not control the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock back</a></span> directly. Each comes with a missile that travels the same path and conveys the damage and knockback effect.\n<ul><li><ul><li>The furthest area (from 325 to 175 units behind <b>Azir</b>) is covered by a separate set of missiles with the same effects.</li>\n<li>All of the soldiers and their missiles will end the charge prematurely when one encounters <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Wind Wall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Wind Wall"><img alt="Wind Wall" src="/wiki/images/Yasuo_Wind_Wall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Yasuo/LoL">Wind Wall</a></span></span> / <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-ability="Unbreakable" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL#Unbreakable" title="Unbreakable"><img alt="Unbreakable" src="/wiki/images/Braum_Unbreakable.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL#Unbreakable" title="Braum/LoL">Unbreakable</a></span></span> / <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Blade Whirl" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Blade_Whirl" title="Blade Whirl"><img alt="Blade Whirl" src="/wiki/images/Samira_Blade_Whirl.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Blade_Whirl" title="Samira/LoL">Blade Whirl</a></span></span> or upon colliding with terrain that they cannot charge through.</li></ul></li>\n<li>The charge starts at 0.<small>25</small> seconds into the cast time.</li>\n<li>This ability will cast from wherever the caster is at the start of the cast time.</li>\n<li>When the dash of the soldiers comes to a halt, all not-yet-affected enemies on top of the soldiers\' landing locations (125 radius) are also knocked back.</li>\n<li><i>Emperor\'s Divide</i> will not be canceled if <b>Azir</b> dies during the cast time.</li>\n<li>While the soldiers are charging forward, the wall is not impassable terrain.\n<ul><li>This means enemies that are immune to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> effects can pass through the wall while its moving.</li></ul></li>\n<li>The wall <b>will</b> count as terrain for the purposes of \'into terrain\' effects (e.g. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vayne" data-ability="Condemn" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vayne/LoL#Condemn" title="Condemn"><img alt="Condemn" src="/wiki/images/Vayne_Condemn.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vayne/LoL#Condemn" title="Vayne/LoL">Condemn</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nautilus" data-ability="Dredge Line" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nautilus/LoL#Dredge_Line" title="Dredge Line"><img alt="Dredge Line" src="/wiki/images/Nautilus_Dredge_Line.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nautilus/LoL#Dredge_Line" title="Nautilus/LoL">Dredge Line</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Poppy" data-ability="Heroic Charge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Poppy/LoL#Heroic_Charge" title="Heroic Charge"><img alt="Heroic Charge" src="/wiki/images/Poppy_Heroic_Charge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Poppy/LoL#Heroic_Charge" title="Poppy/LoL">Heroic Charge</a></span></span>). This will only affect enemies, allies will pass through the wall in all circumstances, even if knocked into it by an enemy.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Azir_Original_R_5.ogg   My soldiers march on!',
    video: 'Azir RVideo.ogv',
  },
} satisfies { [skillName in string]: SkillData };
