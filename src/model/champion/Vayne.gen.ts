import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Vayne';

export default {
  'Night Hunter': {
    name: 'Night Hunter',
    display_name: 'Night Hunter',
    champion: 'Vayne',
    skill: 'I',
    image: {
      full: 'Vayne_NightHunter.png',
      sprite: 'passive4.png',
      group: 'passive',
      x: 384,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 2000',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vayne" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vayne/LoL" title="Vayne"><img alt="Vayne" src="/wiki/images/Vayne_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vayne/LoL" title="Vayne/LoL">Vayne</a></span></span> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> while facing a nearby enemy champion.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vayne" data-ability="Final Hour" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vayne/LoL#Final_Hour" title="Final Hour"><img alt="Final Hour" src="/wiki/images/Vayne_Final_Hour.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vayne/LoL#Final_Hour" title="Vayne/LoL">Final Hour</a></span></span> Bonus:</b></span> The <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span> is tripled.',
    ],
    description: [
      {
        icon: '/wiki/images/Night Hunter.png',
        description:
          'Innate: Vayne gains  30 bonus movement speed while facing a nearby  visible enemy champion.\n Final Hour Bonus: The bonus movement speed is tripled to 90.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Vayne</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">30 <b>bonus</b> movement speed</span></span> while facing a nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy champion.<br><br>\n<p><span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vayne" data-ability="Final Hour" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vayne/LoL#Final_Hour" title="Final Hour"><img alt="Final Hour" src="/wiki/images/Vayne_Final_Hour.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vayne/LoL#Final_Hour" title="Vayne/LoL">Final Hour</a></span></span> Bonus:</b></span> The <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span> is tripled to <span style="color: #F5EE99; white-space:normal">90</span>.\n</p>',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate:',
            raw: ' Vayne gains  30 bonus movement speed while facing a nearby  visible enemy champion.\n Final Hour Bonus: The bonus movement speed is tripled to 90.',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'gains  30 bonus movement speed while facing a nearby  visible enemy champion.',
            pre: 'Vayne gains  30 bonus movement speed while facing a nearby  visible enemy champion.\n Final Hour Bonus: The bonus movement speed is tripled to 90.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes:
      '* The <b>bonus</b> movement speed persists for 2 seconds after <b>Vayne</b> loses <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of an enemy champion.',
  },
  Tumble: {
    name: 'Tumble',
    display_name: 'Tumble',
    champion: 'Vayne',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'VayneTumble.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 384,
      y: 0,
      w: 48,
      h: 48,
    },
    range: '300',
    cast_time: 'none',
    cost: '30',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">4 / 3.<small>5</small> / 3 / 2.<small>5</small> / 2</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vayne" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vayne/LoL" title="Vayne"><img alt="Vayne" src="/wiki/images/Vayne_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vayne/LoL" title="Vayne/LoL">Vayne</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction. Her next basic attack within a few seconds will deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Tumble.png',
        description:
          'Active: Vayne  dashes a fixed distance in the target direction, though not through terrain, and empowers her next basic attack within 7 seconds to deal bonus physical damage.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Vayne</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> a fixed distance in the target direction, though not through terrain, and empowers her next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> within 7 seconds to deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Vayne  dashes a fixed distance in the target direction, though not through terrain, and empowers her next basic attack within 7 seconds to deal bonus physical damage.',
            damagetype: 'Physical',
            values: 7,
            user: 'target',
            units: 'bonus_ad',
            unitsText:
              'dashes a fixed distance in the target direction, though not through terrain, and empowers her next basic attack within 7 seconds to deal bonus physical damage.',
            pre: 'Vayne  dashes a fixed distance in the target direction, though not through terrain, and empowers her next basic attack within 7 seconds to deal bonus physical damage.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Physical Damage:',
            values: '60 / 65 / 70 / 75 / 80% AD',
            valuesHTML:
              '<span style="color:orange; white-space:normal">60 / 65 / 70 / 75 / 80% AD</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Physical Damage:',
            raw: '60 / 65 / 70 / 75 / 80% AD',
            damagetype: 'Physical',
            values: [60, 65, 70, 75, 80],
            valuesIsPercent: true,
            units: 'total_ad',
            unitsText: 'AD',
            pre: '60 / 65 / 70 / 75 / 80% AD',
          },
        ],
      },
      {
        description: "Tumble  resets Vayne's basic attack timer.",
        descriptionHTML:
          '<i>Tumble <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Vayne\'s</b> basic attack timer.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: '<a href="/wiki/Self-targeted" title="Self-targeted">Self</a>',
    damagetype: 'physical',
    spelleffects: 'spell',
    notes:
      '* The bonus damage applies <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span>.\n<ul><li>Although <i>Tumble</i> will reset the basic attack timer, <b>Vayne</b> cannot attack until the animation is complete.</li>\n<li><b>Vayne</b> can cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vayne" data-ability="Final Hour" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vayne/LoL#Final_Hour" title="Final Hour"><img alt="Final Hour" src="/wiki/images/Vayne_Final_Hour.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vayne/LoL#Final_Hour" title="Vayne/LoL">Final Hour</a></span></span> during <i>Tumble</i>. She does not become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisible"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisible</a></span> during the dash.</li></ul>',
  },
  'Silver Bolts': {
    name: 'Silver Bolts',
    display_name: 'Silver Bolts',
    champion: 'Vayne',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'VayneSilveredBolts.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 432,
      y: 0,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vayne" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vayne/LoL" title="Vayne\'s"><img alt="Vayne\'s" src="/wiki/images/Vayne_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vayne/LoL" title="Vayne/LoL">Vayne\'s</a></span></span> basic attacks and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vayne" data-ability="Condemn" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vayne/LoL#Condemn" title="Condemn"><img alt="Condemn" src="/wiki/images/Vayne_Condemn.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vayne/LoL#Condemn" title="Vayne/LoL">Condemn</a></span></span></i> will apply a stack of <i>Silver Bolts</i>, which expires upon attacking a new enemy.',
      'The third stack will consume them all to deal <span style="color: #F9966B; white-space:normal"><b>bonus</b> true damage</span> based on the <span style="color: #1F995C; white-space:normal">target\'s <b>maximum</b> health</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Silver Bolts.png',
        description:
          "Passive: Vayne's basic attacks  on-hit and  Condemn apply a stack of Silver Bolts for 3.5 seconds, refreshing on subsequent applications, expiring upon attacking a new enemy, and stacking up to 3 times.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Vayne\'s</b> <a href="/wiki/Basic_attacks" class="mw-redirect" title="Basic attacks">basic attacks</a> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vayne" data-ability="Condemn" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vayne/LoL#Condemn" title="Condemn"><img alt="Condemn" src="/wiki/images/Vayne_Condemn.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vayne/LoL#Condemn" title="Vayne/LoL">Condemn</a></span></span></i> apply a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Silver Bolts</i> for 3.<small>5</small> seconds, refreshing on subsequent applications, expiring upon attacking a new enemy, and stacking up to 3 times.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Passive:',
            raw: " Vayne's basic attacks  on-hit and  Condemn apply a stack of Silver Bolts for 3.5 seconds, refreshing on subsequent applications, expiring upon attacking a new enemy, and stacking up to 3 times.",
            min: 0,
            max: 10,
            description:
              " Vayne's basic attacks  on-hit and  Condemn apply a stack of Silver Bolts for 3.5 seconds, refreshing on subsequent applications, expiring upon attacking a new enemy, and stacking up to 3 times.",
            values: 3,
            units: 'total_ap',
            unitsText:
              'basic attacks  on-hit and  Condemn apply a stack of Silver Bolts for 3.5 seconds, refreshing on subsequent applications, expiring upon attacking a new enemy, and stacking up to 3 times.',
            pre: "Vayne's basic attacks  on-hit and  Condemn apply a stack of Silver Bolts for 3.5 seconds, refreshing on subsequent applications, expiring upon attacking a new enemy, and stacking up to 3 times.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'The third stack consumes them all to deal  bonus true damage, with a minimum threshold. This damage is capped at 200 against  monsters.',
        descriptionHTML:
          'The third stack consumes them all to deal <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal"><b>bonus</b> true damage</span></span>, with a minimum threshold. This damage is capped at 200 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'This damage is capped at 200 against  monsters.',
            increasedStat: 'total_ap',
            values: 2,
            units: '',
            unitsText: 'damage is capped at 200 against  monsters.',
            pre: 'This damage is capped at 200 against  monsters.',
          },
        ],
        leveling: [
          {
            name: 'Bonus True Damage:',
            values: "4 / 6 / 8 / 10 / 12% of target's maximum health",
            valuesHTML:
              '<span style="color: #1F995C; white-space:normal">4 / 6 / 8 / 10 / 12% of target\'s <b>maximum</b> health</span>',
          },
          {
            name: 'Minimum Bonus Damage:',
            values: '50 / 65 / 80 / 95 / 110',
            valuesHTML: '50 / 65 / 80 / 95 / 110',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Bonus True Damage:',
            raw: "4 / 6 / 8 / 10 / 12% of target's maximum health",
            healType: 'OutgoingHeals',
            values: [4, 6, 8, 10, 12],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: "4 / 6 / 8 / 10 / 12% of target's maximum health",
          },
          {
            effectType: 'Damage',
            name: 'Minimum Bonus Damage:',
            raw: '50 / 65 / 80 / 95 / 110',
            damagetype: 'None',
            values: [50, 65, 80, 95, 110],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 65 / 80 / 95 / 110',
          },
        ],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies',
    damagetype: 'true',
    spelleffects: 'Proc',
    spellshield: false,
    notes:
      '* <a href="/wiki/Stack" title="Stack">Stacks</a> are not removed if <b>Vayne</b> switches to attacking a target immune to <i>Silver Bolts</i> (<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">structures</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ward"><a href="/wiki/Ward" title="Ward"><img alt="Ward icon.png" src="/wiki/images/Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ward" title="Ward">wards</a></span>).\n<ul><li><i>Silver Bolts</i> do not apply to additional targets with <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane"><img alt="Runaan\'s Hurricane" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">Runaan\'s Hurricane</a></span></span>.</li>\n<li>The stacks can be consumed even if the target is in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stasis"><a href="/wiki/Stasis" title="Stasis"><img alt="Stasis icon.png" src="/wiki/images/Stasis_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stasis" class="mw-redirect" title="Stasis">stasis</a></span>.</li>\n<li>The attacks do not affect <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a> nor <a href="/wiki/Ward" title="Ward">wards</a>.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Vayne_Original_LevelUpW_0.ogg   "Purge with silver."',
  },
  Condemn: {
    name: 'Condemn',
    display_name: 'Condemn',
    champion: 'Vayne',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'VayneCondemn.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 0,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '550',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Missile speed">2200</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Knockback speed">2000</span>',
    cast_time: '0.<small>25</small>',
    cost: '90',
    costtype: 'Mana',
    cooldown: '20 / 18 / 16 / 14 / 12',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vayne" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vayne/LoL" title="Vayne"><img alt="Vayne" src="/wiki/images/Vayne_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vayne/LoL" title="Vayne/LoL">Vayne</a></span></span> fires a heavy bolt at the target enemy that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks them back</a></span>.',
      'If the target hits <a href="/wiki/Terrain" title="Terrain">terrain</a>, they are briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> and dealt <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Condemn.png',
        description:
          'Active: Vayne fires a heavy bolt at the target enemy that deals physical damage and  knocks them back 475 units, though not through terrain.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Vayne</b> fires a heavy bolt at the target enemy that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks them back</a></span> 475 units, though not through terrain.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Vayne fires a heavy bolt at the target enemy that deals physical damage and  knocks them back 475 units, though not through terrain.',
            damagetype: 'Physical',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'fires a heavy bolt at the target enemy that deals physical damage and  knocks them back 475 units, though not through terrain.',
            pre: 'Vayne fires a heavy bolt at the target enemy that deals physical damage and  knocks them back 475 units, though not through terrain.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '50 / 85 / 120 / 155 / 190 (+ 50% bonus AD)',
            valuesHTML:
              '50 / 85 / 120 / 155 / 190 <span style="color:orange; white-space:normal">(+&nbsp;50% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '50 / 85 / 120 / 155 / 190 (+ 50% bonus AD)',
            damagetype: 'Physical',
            values: [50, 85, 120, 155, 190],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 85 / 120 / 155 / 190',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 50% bonus AD',
              },
            ],
          },
        ],
      },
      {
        description:
          'If the target collides with terrain, they take  bonus physical damage and become  stunned for 1.5 seconds.',
        descriptionHTML:
          'If the target collides with <a href="/wiki/Terrain" title="Terrain">terrain</a>, they take <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike physical icon.png" src="/wiki/images/Critical_strike_physical_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike"><span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span></span> and become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'If the target collides with terrain, they take  bonus physical damage and become  stunned for 1.5 seconds.',
            damagetype: 'Physical',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'the target collides with terrain, they take  bonus physical damage and become  stunned for 1.5 seconds.',
            pre: 'If the target collides with terrain, they take  bonus physical damage and become  stunned for 1.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Physical Damage:',
            values: '75 / 127.5 / 180 / 232.5 / 285 (+ 75% bonus AD)',
            valuesHTML:
              '75 / 127.<small>5</small> / 180 / 232.<small>5</small> / 285 <span style="color:orange; white-space:normal">(+&nbsp;75% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Physical Damage:',
            raw: '75 / 127.5 / 180 / 232.5 / 285 (+ 75% bonus AD)',
            damagetype: 'Physical',
            values: [75, 127.5, 180, 232.5, 285],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 127.5 / 180 / 232.5 / 285',
            children: [
              {
                values: 75,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 75% bonus AD',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'physical',
    spelleffects: 'spell',
    spellshield: true,
    projectile: 'true',
    callforhelp: 'True',
    notes:
      '* <i>Condemn\'s</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">displacement</a></span> direction is determined at the end of the cast time.\n<ul><li><ul><li>Because of this, <b>Vayne</b> may use <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> during the cast time to create a better angle.</li></ul></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">Cleansing</a></span> the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock back</a></span> will also end the displacement early.</li>\n<li>The <a href="/wiki/Spell_indicator" title="Spell indicator">spell indicator</a> for this ability also displays the direction for the knock back relative to <b>Vayne\'s</b> position.</li>\n<li><i>Condemn\'s</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> duration starts when <b>Vayne\'s</b> target collides with a wall (they can be immobilized for up to 2 seconds depending on <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">displacement</a></span> duration based on distance traveled).</li>\n<li><i>Condemn\'s</i> missile will fail to fire if <b>Vayne</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Suppression"><a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control#Suppression"><img alt="Suppression icon.png" src="/wiki/images/Suppression_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control">suppressed</a></span> during the cast time.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup></li>\n<li><i>Condemn</i> can interact with <a href="/wiki/Terrain#Player-Generated" title="Terrain">player-generated terrain</a>.</li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).</li></ul>',
  },
  'Final Hour': {
    name: 'Final Hour',
    display_name: 'Final Hour',
    champion: 'Vayne',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'VayneInquisition.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 48,
      y: 48,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '80',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">100 / 92.<small>5</small> / 85 / 77.<small>5</small> / 70</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vayne" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vayne/LoL" title="Vayne"><img alt="Vayne" src="/wiki/images/Vayne_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vayne/LoL" title="Vayne/LoL">Vayne</a></span></span> equips her crossbow for a period, gaining <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span> and empowering <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vayne" data-ability="Night Hunter" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vayne/LoL#Night_Hunter" title="Night Hunter"><img alt="Night Hunter" src="/wiki/images/Vayne_Night_Hunter.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vayne/LoL#Night_Hunter" title="Vayne/LoL">Night Hunter</a></span></span></i>.',
      'Additionally, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vayne" data-ability="Tumble" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vayne/LoL#Tumble" title="Tumble"><img alt="Tumble" src="/wiki/images/Vayne_Tumble.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vayne/LoL#Tumble" title="Vayne/LoL">Tumble</a></span></span></i> becomes empowered with brief <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisibility"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisibility</a></span> and <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduced</span> cooldown.',
      '<i>Final Hour\'s</i> duration can be extended by scoring an enemy champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Final Hour.png',
        description:
          "Active: Vayne equips her crossbow, gaining  bonus attack damage and tripling  Night Hunter's bonus for a duration.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Vayne</b> equips her crossbow, gaining <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span> and tripling <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vayne" data-ability="Night Hunter" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vayne/LoL#Night_Hunter" title="Night Hunter\'s"><img alt="Night Hunter\'s" src="/wiki/images/Vayne_Night_Hunter.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vayne/LoL#Night_Hunter" title="Vayne/LoL">Night Hunter\'s</a></span></span></i> <b>bonus</b> for a duration.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Duration:',
            values: '8 / 9 / 10 / 11 / 12',
            valuesHTML: '8 / 9 / 10 / 11 / 12',
          },
          {
            name: 'Bonus Attack Damage:',
            values: '25 / 40 / 55',
            valuesHTML: '25 / 40 / 55',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Duration:',
            raw: '8 / 9 / 10 / 11 / 12',
            values: [8, 9, 10, 11, 12],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '8 / 9 / 10 / 11 / 12',
          },
          {
            effectType: 'Damage',
            name: 'Bonus Attack Damage:',
            raw: '25 / 40 / 55',
            damagetype: 'None',
            values: [25, 40, 55],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 40 / 55',
          },
        ],
      },
      {
        description:
          'Additionally,  Tumble becomes empowered with a reduced  cooldown, and grants Vayne  invisibility for 1 second. Attacking or casting  Condemn breaks the stealth immediately.',
        descriptionHTML:
          'Additionally, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vayne" data-ability="Tumble" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vayne/LoL#Tumble" title="Tumble"><img alt="Tumble" src="/wiki/images/Vayne_Tumble.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vayne/LoL#Tumble" title="Vayne/LoL">Tumble</a></span></span></i> becomes empowered with a reduced <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>, and grants <b>Vayne</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisibility"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisibility</a></span> for 1 second. Attacking or casting <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vayne" data-ability="Condemn" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vayne/LoL#Condemn" title="Condemn"><img alt="Condemn" src="/wiki/images/Vayne_Condemn.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vayne/LoL#Condemn" title="Vayne/LoL">Condemn</a></span></span></i> breaks the stealth immediately.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Additionally,  Tumble becomes empowered with a reduced  cooldown, and grants Vayne  invisibility for 1 second',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'Tumble becomes empowered with a reduced  cooldown, and grants Vayne  invisibility for 1 second',
            pre: 'Additionally,  Tumble becomes empowered with a reduced  cooldown, and grants Vayne  invisibility for 1 second',
          },
        ],
        leveling: [
          {
            name: 'Tumble Cooldown Reduction:',
            values: '30 / 35 / 40 / 45 / 50%',
            valuesHTML: '30 / 35 / 40 / 45 / 50%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Tumble Cooldown Reduction:',
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
      {
        description:
          "Scoring an enemy champion  takedown within 3 seconds of damaging them will extend Final Hour's duration by 4 seconds, up to its original duration.",
        descriptionHTML:
          'Scoring an enemy champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> within 3 seconds of damaging them will extend <i>Final Hour\'s</i> duration by 4 seconds, up to its original duration.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: "Scoring an enemy champion  takedown within 3 seconds of damaging them will extend Final Hour's duration by 4 seconds, up to its original duration.",
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              "an enemy champion  takedown within 3 seconds of damaging them will extend Final Hour's duration by 4 seconds, up to its original duration.",
            pre: "Scoring an enemy champion  takedown within 3 seconds of damaging them will extend Final Hour's duration by 4 seconds, up to its original duration.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    notes:
      "* <b>Vayne's</b> animations and basic attack projectiles change slightly during <i>Final Hour</i>.\n<ul><li><i>Tumble's</i> visual effects can be seen by enemies upon <b>Vayne</b> becoming invisible.</li></ul>",
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Vayne_Original_R_1.ogg   "Time for reckoning."',
  },
} satisfies { [skillName in string]: SkillData };
