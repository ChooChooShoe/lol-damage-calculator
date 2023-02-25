import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Heimerdinger';

export default {
  'Hextech Affinity': {
    name: 'Hextech Affinity',
    display_name: 'Hextech Affinity',
    champion: 'Heimerdinger',
    skill: 'I',
    image: {
      full: 'Heimerdinger_Passive.png',
      sprite: 'passive1.png',
      group: 'passive',
      x: 48,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius: '300',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Heimerdinger" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heimerdinger/LoL" title="Heimerdinger"><img alt="Heimerdinger" src="/wiki/images/Heimerdinger_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heimerdinger/LoL" title="Heimerdinger/LoL">Heimerdinger</a></span></span> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> while near allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">towers</a></span> and <span class="inline-image ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Heimerdinger" data-ability="H-28G Evolution Turret" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heimerdinger/LoL#H-28G_Evolution_Turret" title="Heimerdinger/LoL#H-28G Evolution Turret"><img alt="Heimerdinger H-28G Evolution Turret.png" src="/wiki/images/Heimerdinger_H-28G_Evolution_Turret.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span></span><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Heimerdinger" data-ability="H-28Q Apex Turret" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heimerdinger/LoL#H-28Q_Apex_Turret" title="turrets"><img alt="turrets" src="/wiki/images/Heimerdinger_H-28Q_Apex_Turret.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heimerdinger/LoL#H-28Q_Apex_Turret" title="Heimerdinger/LoL">turrets</a></span></span> he deploys.',
    ],
    description: [
      {
        icon: '/wiki/images/Hextech_Affinity.png',
        description:
          'Innate: Heimerdinger gains  20% bonus movement speed while near an allied  turret or a  H-28G Evolution Turret or  H-28Q Apex Turret deployed by him.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Heimerdinger</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">20% <b>bonus</b> movement speed</span></span> while near an allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span> or a <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Heimerdinger" data-ability="H-28G Evolution Turret" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heimerdinger/LoL#H-28G_Evolution_Turret" title="H-28G Evolution Turret"><img alt="H-28G Evolution Turret" src="/wiki/images/Heimerdinger_H-28G_Evolution_Turret.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heimerdinger/LoL#H-28G_Evolution_Turret" title="Heimerdinger/LoL">H-28G Evolution Turret</a></span></span></i> or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Heimerdinger" data-ability="H-28Q Apex Turret" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heimerdinger/LoL#H-28Q_Apex_Turret" title="H-28Q Apex Turret"><img alt="H-28Q Apex Turret" src="/wiki/images/Heimerdinger_H-28Q_Apex_Turret.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heimerdinger/LoL#H-28Q_Apex_Turret" title="Heimerdinger/LoL">H-28Q Apex Turret</a></span></span></i> deployed by him.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate:',
            raw: 'Heimerdinger gains  20% bonus movement speed while near an allied  turret or a  H-28G Evolution Turret or  H-28Q Apex Turret deployed by him.',
            increasedStat: 'total_ap',
            values: 2,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'bonus movement speed while near an allied  turret or a  H-28G Evolution Turret or  H-28Q Apex Turret deployed by him.gains  20',
            pre: 'Heimerdinger gains  20% bonus movement speed while near an allied  turret or a  H-28G Evolution Turret or  H-28Q Apex Turret deployed by him.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes: '* No additional details.',
  },
  'H-28G Evolution Turret': {
    name: 'H-28G Evolution Turret',
    display_name: 'H-28G Evolution Turret',
    champion: 'Heimerdinger',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'HeimerdingerQ.png',
      sprite: 'spell4.png',
      group: 'spell',
      x: 0,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '350',
    cast_time: '0.<small>25</small>',
    cost: '20',
    costtype: 'Mana + 1 Turret Kit',
    cooldown: '1',
    recharge: '20',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Heimerdinger" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heimerdinger/LoL" title="Heimerdinger"><img alt="Heimerdinger" src="/wiki/images/Heimerdinger_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heimerdinger/LoL" title="Heimerdinger/LoL">Heimerdinger</a></span></span> deploys a rapid-fire turret that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to his target, or a nearby enemy. The turret will become dormant while he leaves it alone.',
      '<b>Heimerdinger</b> periodically <a href="/wiki/Stocks" class="mw-redirect" title="Stocks">stocks</a> a <i>Turret Kit</i>, up to a maximum of 3.',
      'The turret has a secondary beam attack that charges up over time, which deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
    ],
    description: [
      {
        icon: '/wiki/images/H-28G_Evolution_Turret.png',
        description:
          'Active: Heimerdinger deploys a H-28G Evolution Turret at the target location, which lasts until destroyed.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Heimerdinger</b> deploys a <i>H-28G Evolution Turret</i> at the target location, which lasts until destroyed.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: 'Heimerdinger deploys a H-28G Evolution Turret at the target location, which lasts until destroyed.',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'deploys a H-28G Evolution Turret at the target location, which lasts until destroyed.',
            pre: 'Heimerdinger deploys a H-28G Evolution Turret at the target location, which lasts until destroyed.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Heimerdinger periodically stocks a Turret Kit charge, up to a maximum of 3.',
        descriptionHTML:
          '<b>Heimerdinger</b> periodically <a href="/wiki/Stocks" class="mw-redirect" title="Stocks">stocks</a> a <i>Turret Kit</i> charge, up to a maximum of 3.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Heimerdinger periodically stocks a Turret Kit charge, up to a maximum of 3.',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'periodically stocks a Turret Kit charge, up to a maximum of 3.',
            pre: 'Heimerdinger periodically stocks a Turret Kit charge, up to a maximum of 3.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Up to 3 H-28G Evolution Turrets can be deployed at a time, with those deployed beyond the maximum destroying the oldest one.',
        descriptionHTML:
          'Up to 3 <i>H-28G Evolution Turrets</i> can be deployed at a time, with those deployed beyond the maximum destroying the oldest one.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Up to 3 H-28G Evolution Turrets can be deployed at a time, with those deployed beyond the maximum destroying the oldest one.',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'to 3 H-28G Evolution Turrets can be deployed at a time, with those deployed beyond the maximum destroying the oldest one.',
            pre: 'Up to 3 H-28G Evolution Turrets can be deployed at a time, with those deployed beyond the maximum destroying the oldest one.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'See Pets for more details about H-28G Evolution Turrets.',
        descriptionHTML:
          '<i>See <a href="/wiki/Heimerdinger/LoL#Pets" title="Heimerdinger/LoL">Pets</a> for more details about H-28G Evolution Turrets.</i>',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'See Pets for more details about H-28G Evolution Turrets.',
            values: 2,
            user: 'none',
            units: '',
            unitsText: 'Pets for more details about H-28G Evolution Turrets.',
            pre: 'See Pets for more details about H-28G Evolution Turrets.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'magic',
    spelleffects: 'special',
    spellshield: false,
    projectile: 'True',
    callforhelp: 'True',
    notes:
      '* Deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell damage"><a href="/wiki/Damage" title="Damage"><img alt="Disintegrate.png" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">spell damage</a></span> on basic attacks and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span> on the beam.\n<ul><li><i>H-28G Evolution Turret\'s</i> stats are determined on cast, and do not update with ranking up the ability or gaining or losing AP or levels.</li>\n<li>The <i>Turret Kit</i> buff will visually represent the recharge rate cooldown, and how many <i>H-28G Evolution Turret\'s</i> that <b>Heimerdinger</b> has stored. This is visible to both allies and enemies.</li>\n<li>The recharge rate of <i>H-28G Evolution Turret</i> is affected by <a href="/wiki/Ability_haste" class="mw-redirect" title="Ability haste">ability haste</a>.</li>\n<li>The <i>H-28G Evolution Turret</i> has a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> radius of <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="650*0.9">585</span> while active and <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="650*0.35">227.<small>5</small></span> while dormant.\n<ul><li>The -10% sight range modifier is applied only on the first stat update after the <i>H-28G Evolution Turret</i> is spawned, because of this it will have its full 650 sight range for up-to 0.<small>25</small> seconds upon being spawned.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul></li>\n<li>The amount of <i>Turret Kit</i> charges <b>Heimerdinger</b> has is indicated by small nuts orbiting him.</li></ul>',
  },
  'H-28Q Apex Turret': {
    name: 'H-28Q Apex Turret',
    display_name: 'H-28Q Apex Turret',
    champion: 'Heimerdinger',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'HeimerdingerQ.png',
      sprite: 'spell4.png',
      group: 'spell',
      x: 0,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '450',
    cast_time: '0.<small>25</small>',
    cooldown: '1',
    blurb: [
      '<span class="template_sbc"><b>UPGRADE:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Heimerdinger" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heimerdinger/LoL" title="Heimerdinger"><img alt="Heimerdinger" src="/wiki/images/Heimerdinger_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heimerdinger/LoL" title="Heimerdinger/LoL">Heimerdinger</a></span></span> instead deploys a slow-fire turret that attacks a nearby enemy champion, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> nearby enemies.',
      'The turret has a secondary beam attack that charges up over time and while it fires, which deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
    ],
    description: [
      {
        icon: '/wiki/images/H-28Q_Apex_Turret.png',
        description:
          'UPGRADE!!! - Active: Heimerdinger deploys a H-28Q Apex Turret at the target location, which lasts for 8 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Heimerdinger" data-ability="UPGRADE!!!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heimerdinger/LoL#UPGRADE!!!" title="UPGRADE!!!"><img alt="UPGRADE!!!" src="/wiki/images/Heimerdinger_UPGRADE%21%21%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heimerdinger/LoL#UPGRADE!!!" title="Heimerdinger/LoL">UPGRADE!!!</a></span></span> - Active:</b></span> <b>Heimerdinger</b> deploys a <i>H-28Q Apex Turret</i> at the target location, which lasts for 8 seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'UPGRADE!!! - Active:',
            raw: 'Heimerdinger deploys a H-28Q Apex Turret at the target location, which lasts for 8 seconds.',
            damagetype: 'None',
            values: 2,
            units: 'total_ap',
            unitsText:
              'deploys a H-28Q Apex Turret at the target location, which lasts for 8 seconds.',
            pre: 'Heimerdinger deploys a H-28Q Apex Turret at the target location, which lasts for 8 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description: "H-28Q Apex Turret scales with  UPGRADE!!!'s rank.",
        descriptionHTML:
          '<i>H-28Q Apex Turret</i> scales with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Heimerdinger" data-ability="UPGRADE!!!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heimerdinger/LoL#UPGRADE!!!" title="UPGRADE!!!\'s"><img alt="UPGRADE!!!\'s" src="/wiki/images/Heimerdinger_UPGRADE%21%21%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heimerdinger/LoL#UPGRADE!!!" title="Heimerdinger/LoL">UPGRADE!!!\'s</a></span></span></i> rank.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: "H-28Q Apex Turret scales with  UPGRADE!!!'s rank.",
            damagetype: 'None',
            values: 2,
            units: 'total_ap',
            unitsText: "Apex Turret scales with  UPGRADE!!!'s rank.",
            pre: "H-28Q Apex Turret scales with  UPGRADE!!!'s rank.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'See Pets for more details about the H-28Q Apex Turret.',
        descriptionHTML:
          '<i>See <a href="/wiki/Heimerdinger/LoL#Pets" title="Heimerdinger/LoL">Pets</a> for more details about the H-28Q Apex Turret.</i>',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'See Pets for more details about the H-28Q Apex Turret.',
            damagetype: 'None',
            values: 2,
            units: 'total_ap',
            unitsText: 'Pets for more details about the H-28Q Apex Turret.',
            pre: 'See Pets for more details about the H-28Q Apex Turret.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: false,
    projectile: 'True',
    callforhelp: 'True',
    notes:
      '* The <i>H-28Q Apex Turret</i> has a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> radius of <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="1000*0.9">900</span>.\n<ul><li><ul><li>The -10% sight range modifier is applied only on the first stat update after the <i>H-28Q Apex Turret</i> is spawned, because of this it will have its full 1000 sight range for up-to 0.<small>25</small> seconds upon being spawned.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul></li></ul>',
  },
  'Hextech Micro-Rockets': {
    name: 'Hextech Micro-Rockets',
    display_name: 'Hextech Micro-Rockets',
    champion: 'Heimerdinger',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'HeimerdingerW.png',
      sprite: 'spell4.png',
      group: 'spell',
      x: 48,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '1325',
    cast_time: '0.<small>25</small>',
    cost: '50 / 60 / 70 / 80 / 90',
    costtype: 'Mana',
    cooldown: '11 / 10 / 9 / 8 / 7',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Heimerdinger" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heimerdinger/LoL" title="Heimerdinger"><img alt="Heimerdinger" src="/wiki/images/Heimerdinger_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heimerdinger/LoL" title="Heimerdinger/LoL">Heimerdinger</a></span></span> fires a wave of rockets that converge to the target location and fan beyond it to max range, each dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit.',
      'Whenever a rocket hits an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, nearby <span class="inline-image ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Heimerdinger" data-ability="H-28G Evolution Turret" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heimerdinger/LoL#H-28G_Evolution_Turret" title="Heimerdinger/LoL#H-28G Evolution Turret"><img alt="Heimerdinger H-28G Evolution Turret.png" src="/wiki/images/Heimerdinger_H-28G_Evolution_Turret.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span></span><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Heimerdinger" data-ability="H-28Q Apex Turret" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heimerdinger/LoL#H-28Q_Apex_Turret" title="turrets"><img alt="turrets" src="/wiki/images/Heimerdinger_H-28Q_Apex_Turret.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heimerdinger/LoL#H-28Q_Apex_Turret" title="Heimerdinger/LoL">turrets</a></span></span> gain some beam charge.',
    ],
    description: [
      {
        icon: '/wiki/images/Hextech_Micro-Rockets.png',
        description:
          'Active: Heimerdinger unleashes a wave of 5 rockets that converge to the target location and fan beyond it up to a maximum range, with each one dealing magic damage to the first enemy it hits. Every rocket hitting an enemy  champion grants 20% beam charge to all   turrets within 1000 range, up to a maximum of 100% beam charge when hitting 5 rockets on an enemy champion.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Heimerdinger</b> unleashes a wave of 5 rockets that converge to the target location and fan beyond it up to a maximum range, with each one dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy it hits. Every rocket hitting an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> grants 20% beam charge to all <i><span class="inline-image ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Heimerdinger" data-ability="H-28G Evolution Turret" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heimerdinger/LoL#H-28G_Evolution_Turret" title="Heimerdinger/LoL#H-28G Evolution Turret"><img alt="Heimerdinger H-28G Evolution Turret.png" src="/wiki/images/Heimerdinger_H-28G_Evolution_Turret.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Heimerdinger" data-ability="H-28Q Apex Turret" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heimerdinger/LoL#H-28Q_Apex_Turret" title="turrets"><img alt="turrets" src="/wiki/images/Heimerdinger_H-28Q_Apex_Turret.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heimerdinger/LoL#H-28Q_Apex_Turret" title="Heimerdinger/LoL">turrets</a></span></span></i> within 1000 range, up to a maximum of 100% beam charge when hitting 5 rockets on an enemy champion.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Heimerdinger unleashes a wave of 5 rockets that converge to the target location and fan beyond it up to a maximum range, with each one dealing magic damage to the first enemy it hits',
            damagetype: 'Magic',
            values: 5,
            user: 'none',
            units: '',
            unitsText:
              'unleashes a wave of 5 rockets that converge to the target location and fan beyond it up to a maximum range, with each one dealing magic damage to the first enemy it hits',
            pre: 'Heimerdinger unleashes a wave of 5 rockets that converge to the target location and fan beyond it up to a maximum range, with each one dealing magic damage to the first enemy it hits',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'Every rocket hitting an enemy  champion grants 20% beam charge to all   turrets within 1000 range, up to a maximum of 100% beam charge when hitting 5 rockets on an enemy champion.',
            values: 2,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'beam charge to all   turrets within 1000 range, up to a maximum of 100rocket hitting an enemy  champion grants 20',
            pre: 'Every rocket hitting an enemy  champion grants 20% beam charge to all   turrets within 1000 range, up to a maximum of 100% beam charge when hitting 5 rockets on an enemy champion.',
          },
        ],
        leveling: [
          {
            name: 'Initial Magic Damage:',
            values: '40 / 65 / 90 / 115 / 140 (+ 55% AP)',
            valuesHTML:
              '40 / 65 / 90 / 115 / 140 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;55% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Initial Magic Damage:',
            raw: '40 / 65 / 90 / 115 / 140 (+ 55% AP)',
            damagetype: 'Magic',
            values: [40, 65, 90, 115, 140],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 65 / 90 / 115 / 140',
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
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Enemies can be hit by multiple rockets, with each one beyond the first dealing 20% damage, increased to 40% against  minions.',
        descriptionHTML:
          'Enemies can be hit by multiple rockets, with each one beyond the first dealing 20% damage, increased to 40% against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Enemies can be hit by multiple rockets, with each one beyond the first dealing 20% damage, increased to 40% against  minions.',
            values: 2,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'damage, increased to 40can be hit by multiple rockets, with each one beyond the first dealing 20',
            pre: 'Enemies can be hit by multiple rockets, with each one beyond the first dealing 20% damage, increased to 40% against  minions.',
          },
        ],
        leveling: [
          {
            name: 'Additional Magic Damage:',
            values: '8 / 13 / 18 / 23 / 28 (+ 11% AP)',
            valuesHTML:
              '8 / 13 / 18 / 23 / 28 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;11% AP)</span>',
          },
          {
            name: 'Additional Minion Damage:',
            values: '24 / 39 / 54 / 69 / 84 (+ 33% AP)',
            valuesHTML:
              '24 / 39 / 54 / 69 / 84 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;33% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Additional Magic Damage:',
            raw: '8 / 13 / 18 / 23 / 28 (+ 11% AP)',
            damagetype: 'Magic',
            values: [8, 13, 18, 23, 28],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '8 / 13 / 18 / 23 / 28',
            children: [
              {
                values: 11,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 11% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Additional Minion Damage:',
            raw: '24 / 39 / 54 / 69 / 84 (+ 33% AP)',
            damagetype: 'None',
            values: [24, 39, 54, 69, 84],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '24 / 39 / 54 / 69 / 84',
            children: [
              {
                values: 33,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 33% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'True',
    notes:
      "* <i>Hextech Micro-Rockets' </i> direction-targeting allows for custom spread.\n<ul><li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>",
  },
  'Hextech Rocket Swarm': {
    name: 'Hextech Rocket Swarm',
    display_name: 'Hextech Rocket Swarm',
    champion: 'Heimerdinger',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'HeimerdingerW.png',
      sprite: 'spell4.png',
      group: 'spell',
      x: 48,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '1325',
    cast_time: '0.<small>25</small>',
    cooldown: '11 / 10 / 9 / 8 / 7',
    blurb: [
      '<span class="template_sbc"><b>UPGRADE:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Heimerdinger" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heimerdinger/LoL" title="Heimerdinger"><img alt="Heimerdinger" src="/wiki/images/Heimerdinger_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heimerdinger/LoL" title="Heimerdinger/LoL">Heimerdinger</a></span></span> now fires waves of rockets, each rocket dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit.',
    ],
    description: [
      {
        icon: '/wiki/images/Hextech_Rocket_Swarm.png',
        description:
          'UPGRADE!!! - Active: Heimerdinger launches 4 waves of 5 rockets in quick succession to the target location, each one dealing magic damage. Enemy  champions and  monsters are dealt reduced damage from rockets beyond the first, and further reduced beyond the fifth.  Minions take 100% damage from every rocket.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Heimerdinger" data-ability="UPGRADE!!!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heimerdinger/LoL#UPGRADE!!!" title="UPGRADE!!!"><img alt="UPGRADE!!!" src="/wiki/images/Heimerdinger_UPGRADE%21%21%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heimerdinger/LoL#UPGRADE!!!" title="Heimerdinger/LoL">UPGRADE!!!</a></span></span> - Active:</b></span> <b>Heimerdinger</b> launches 4 waves of 5 rockets in quick succession to the target location, each one dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>. Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> are dealt reduced damage from rockets beyond the first, and further reduced beyond the fifth. <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">Minions</a></span> take 100% damage from every rocket.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'UPGRADE!!! - Active:',
            raw: 'Heimerdinger launches 4 waves of 5 rockets in quick succession to the target location, each one dealing magic damage',
            damagetype: 'Magic',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'launches 4 waves of 5 rockets in quick succession to the target location, each one dealing magic damage',
            pre: 'Heimerdinger launches 4 waves of 5 rockets in quick succession to the target location, each one dealing magic damage',
          },
          {
            effectType: 'Damage',
            name: 'Line 3:',
            raw: ' Minions take 100% damage from every rocket.',
            damagetype: 'None',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'damage from every rocket.take 100',
            pre: 'Minions take 100% damage from every rocket.',
          },
        ],
        leveling: [
          {
            name: 'Initial Rocket Damage:',
            values: '135 / 180 / 225 (+ 45% AP)',
            valuesHTML:
              '135 / 180 / 225 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;45% AP)</span>',
          },
          {
            name: 'Minion Rocket Damage:',
            values: '135 / 180 / 225 (+ 45% AP)',
            valuesHTML:
              '135 / 180 / 225 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;45% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Initial Rocket Damage:',
            raw: '135 / 180 / 225 (+ 45% AP)',
            damagetype: 'None',
            values: [135, 180, 225],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '135 / 180 / 225',
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
            effectType: 'Damage',
            name: 'Minion Rocket Damage:',
            raw: '135 / 180 / 225 (+ 45% AP)',
            damagetype: 'None',
            values: [135, 180, 225],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '135 / 180 / 225',
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
        description: "Hextech Rocket Swarm scales with  UPGRADE!!!'s rank.",
        descriptionHTML:
          '<i>Hextech Rocket Swarm</i> scales with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Heimerdinger" data-ability="UPGRADE!!!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heimerdinger/LoL#UPGRADE!!!" title="UPGRADE!!!\'s"><img alt="UPGRADE!!!\'s" src="/wiki/images/Heimerdinger_UPGRADE%21%21%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heimerdinger/LoL#UPGRADE!!!" title="Heimerdinger/LoL">UPGRADE!!!\'s</a></span></span></i> rank.',
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
    projectile: 'True',
    notes:
      "* <i>Hextech Rocket Swarm's</i> direction-targeting allows for custom spread.\n<ul><li><b>Heimerdinger</b> can move once <i>Hextech Rocket Swarm</i> has been cast, even if the projectiles are still spawning or haven't even started to move yet.</li>\n<li><i>Hextech Micro-Rockets</i> will cast from wherever <b>Heimerdinger</b> is at the end of the cast time.</li></ul>",
  },
  'CH-2 Electron Storm Grenade': {
    name: 'CH-2 Electron Storm Grenade',
    display_name: 'CH-2 Electron Storm Grenade',
    champion: 'Heimerdinger',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'HeimerdingerE.png',
      sprite: 'spell4.png',
      group: 'spell',
      x: 96,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '970',
    effect_radius: '250',
    inner_radius: '135',
    speed: '1200',
    cast_time: '0.<small>25</small>',
    cost: '85',
    costtype: 'Mana',
    cooldown: '11',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Heimerdinger" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heimerdinger/LoL" title="Heimerdinger"><img alt="Heimerdinger" src="/wiki/images/Heimerdinger_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heimerdinger/LoL" title="Heimerdinger/LoL">Heimerdinger</a></span></span> lobs a grenade to the target location that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> nearby enemies. Enemies hit at the epicenter are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span>.',
      'If the grenade hits an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, nearby <span class="inline-image ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Heimerdinger" data-ability="H-28G Evolution Turret" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heimerdinger/LoL#H-28G_Evolution_Turret" title="Heimerdinger/LoL#H-28G Evolution Turret"><img alt="Heimerdinger H-28G Evolution Turret.png" src="/wiki/images/Heimerdinger_H-28G_Evolution_Turret.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span></span><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Heimerdinger" data-ability="H-28Q Apex Turret" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heimerdinger/LoL#H-28Q_Apex_Turret" title="turrets"><img alt="turrets" src="/wiki/images/Heimerdinger_H-28Q_Apex_Turret.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heimerdinger/LoL#H-28Q_Apex_Turret" title="Heimerdinger/LoL">turrets</a></span></span> gain full beam charge.',
    ],
    description: [
      {
        icon: '/wiki/images/CH-2_Electron_Storm_Grenade.png',
        description:
          'Active: Heimerdinger hurls a grenade at the target location that detonates upon impact, dealing magic damage to nearby enemies and  slowing them by 35% for 2 seconds. If the grenade hits an enemy  champion, all   turrets within 1000 range of the impact gain 100% beam charge.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Heimerdinger</b> hurls a grenade at the target location that detonates upon impact, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 35% for 2 seconds. If the grenade hits an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, all <i><span class="inline-image ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Heimerdinger" data-ability="H-28G Evolution Turret" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heimerdinger/LoL#H-28G_Evolution_Turret" title="Heimerdinger/LoL#H-28G Evolution Turret"><img alt="Heimerdinger H-28G Evolution Turret.png" src="/wiki/images/Heimerdinger_H-28G_Evolution_Turret.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Heimerdinger" data-ability="H-28Q Apex Turret" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heimerdinger/LoL#H-28Q_Apex_Turret" title="turrets"><img alt="turrets" src="/wiki/images/Heimerdinger_H-28Q_Apex_Turret.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heimerdinger/LoL#H-28Q_Apex_Turret" title="Heimerdinger/LoL">turrets</a></span></span></i> within 1000 range of the impact gain 100% beam charge.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Heimerdinger hurls a grenade at the target location that detonates upon impact, dealing magic damage to nearby enemies and  slowing them by 35% for 2 seconds',
            damagetype: 'Magic',
            values: 3,
            valuesIsPercent: true,
            user: 'target',
            units: 'total_ad',
            unitsText:
              'for 2 secondshurls a grenade at the target location that detonates upon impact, dealing magic damage to nearby enemies and  slowing them by 35',
            pre: 'Heimerdinger hurls a grenade at the target location that detonates upon impact, dealing magic damage to nearby enemies and  slowing them by 35% for 2 seconds',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'If the grenade hits an enemy  champion, all   turrets within 1000 range of the impact gain 100% beam charge.',
            increasedStat: 'total_ad',
            values: 1,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'beam charge.the grenade hits an enemy  champion, all   turrets within 1000 range of the impact gain 100',
            pre: 'If the grenade hits an enemy  champion, all   turrets within 1000 range of the impact gain 100% beam charge.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '60 / 100 / 140 / 180 / 220 (+ 60% AP)',
            valuesHTML:
              '60 / 100 / 140 / 180 / 220 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 100 / 140 / 180 / 220 (+ 60% AP)',
            damagetype: 'Magic',
            values: [60, 100, 140, 180, 220],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 100 / 140 / 180 / 220',
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
        icon: '/wiki/images/undefined',
        description:
          "Enemies hit at the center of the grenade's impact are also  stunned for 1.5 seconds.",
        descriptionHTML:
          'Enemies hit at the center of the grenade\'s impact are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: "Enemies hit at the center of the grenade's impact are also  stunned for 1.5 seconds.",
            damagetype: 'None',
            values: 1,
            units: 'total_ad',
            unitsText:
              "hit at the center of the grenade's impact are also  stunned for 1.5 seconds.",
            pre: "Enemies hit at the center of the grenade's impact are also  stunned for 1.5 seconds.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Area of effect',
    spellshield: true,
    projectile: 'True',
    notes:
      '* This ability will cast from wherever the caster is at the end of the cast time.',
  },
  'CH-3X Lightning Grenade': {
    name: 'CH-3X Lightning Grenade',
    display_name: 'CH-3X Lightning Grenade',
    champion: 'Heimerdinger',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'HeimerdingerE.png',
      sprite: 'spell4.png',
      group: 'spell',
      x: 96,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '970',
    effect_radius: '250',
    inner_radius: '135',
    speed: '1200',
    cast_time: '0.<small>25</small>',
    cooldown: '12',
    blurb: [
      '<span class="template_sbc"><b>UPGRADE:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Heimerdinger" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heimerdinger/LoL" title="Heimerdinger\'s"><img alt="Heimerdinger\'s" src="/wiki/images/Heimerdinger_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heimerdinger/LoL" title="Heimerdinger/LoL">Heimerdinger\'s</a></span></span> grenade now bounces 3 times, each dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> in a larger area.',
      'Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> will not be damaged by subsequent bounces.',
    ],
    description: [
      {
        icon: '/wiki/images/CH-3X_Lightning_Grenade.png',
        description:
          'UPGRADE!!! - Active: Heimerdinger hurls a massive grenade at the target location that bounces a fixed distance 3 times, exploding each time at twice the radius.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Heimerdinger" data-ability="UPGRADE!!!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heimerdinger/LoL#UPGRADE!!!" title="UPGRADE!!!"><img alt="UPGRADE!!!" src="/wiki/images/Heimerdinger_UPGRADE%21%21%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heimerdinger/LoL#UPGRADE!!!" title="Heimerdinger/LoL">UPGRADE!!!</a></span></span> - Active:</b></span> <b>Heimerdinger</b> hurls a massive grenade at the target location that bounces <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="540 range">a fixed distance</span> 3 times, exploding each time at <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="420 explosion radius, 270 stun radius">twice the radius</span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'UPGRADE!!! - Active:',
            raw: 'Heimerdinger hurls a massive grenade at the target location that bounces a fixed distance 3 times, exploding each time at twice the radius.',
            damagetype: 'None',
            values: 3,
            user: 'target',
            units: 'total_ad',
            unitsText:
              'hurls a massive grenade at the target location that bounces a fixed distance 3 times, exploding each time at twice the radius.',
            pre: 'Heimerdinger hurls a massive grenade at the target location that bounces a fixed distance 3 times, exploding each time at twice the radius.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '100 / 200 / 300 (+ 60% AP)',
            valuesHTML:
              '100 / 200 / 300 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '100 / 200 / 300 (+ 60% AP)',
            damagetype: 'Magic',
            values: [100, 200, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 200 / 300',
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
        icon: '/wiki/images/undefined',
        description:
          'Enemy champions can only be damaged once per cast, but can be  slowed and  stunned multiple times if circumstances permit.',
        descriptionHTML:
          'Enemy champions can only be damaged once per cast, but can be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> multiple times if circumstances permit.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description: "CH-3X Lightning Grenade scales with  UPGRADE!!!'s rank.",
        descriptionHTML:
          '<i>CH-3X Lightning Grenade</i> scales with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Heimerdinger" data-ability="UPGRADE!!!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heimerdinger/LoL#UPGRADE!!!" title="UPGRADE!!!\'s"><img alt="UPGRADE!!!\'s" src="/wiki/images/Heimerdinger_UPGRADE%21%21%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heimerdinger/LoL#UPGRADE!!!" title="Heimerdinger/LoL">UPGRADE!!!\'s</a></span></span></i> rank.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: "CH-3X Lightning Grenade scales with  UPGRADE!!!'s rank.",
            damagetype: 'None',
            values: 3,
            units: 'total_ad',
            unitsText: "Lightning Grenade scales with  UPGRADE!!!'s rank.",
            pre: "CH-3X Lightning Grenade scales with  UPGRADE!!!'s rank.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'CH-3X Lightning Grenade will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i>CH-3X Lightning Grenade will cast at max range if cast beyond that.</i>',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'CH-3X Lightning Grenade will cast at max range if cast beyond that.',
            damagetype: 'None',
            values: 3,
            units: 'total_ad',
            unitsText:
              'Lightning Grenade will cast at max range if cast beyond that.',
            pre: 'CH-3X Lightning Grenade will cast at max range if cast beyond that.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Area of effect',
    spellshield: true,
    projectile: 'True',
    notes: '* No additional details.',
  },
  'UPGRADE!!!': {
    name: 'UPGRADE!!!',
    display_name: 'UPGRADE!!!',
    champion: 'Heimerdinger',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'HeimerdingerR.png',
      sprite: 'spell4.png',
      group: 'spell',
      x: 144,
      y: 96,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts after using an empowered ability">100 / 92.<small>5</small> / 85 / 77.<small>5</small> / 70</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Heimerdinger" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heimerdinger/LoL" title="Heimerdinger"><img alt="Heimerdinger" src="/wiki/images/Heimerdinger_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heimerdinger/LoL" title="Heimerdinger/LoL">Heimerdinger</a></span></span> can empower his next ability to apply an additional effect. These empowered abilities have the same <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldowns</span> as their basic forms, deal modified damage, and do not cost mana.',
      '<i>UPGRADE!!!</i> can be recast after a short time, and does so automatically upon casting another ability.',
      '<span class="template_sbc"><b>Recast:</b></span> <i>UPGRADE!!!</i> ends and is put on a short <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/UPGRADE!!!.png',
        description:
          'Active: Heimerdinger empowers his next basic ability for an additional effect. These empowered abilities have the same cooldowns as their basic forms, deal modified damage, and do not have a  mana cost. UPGRADE!!! can be recast after 3 seconds, and does so automatically upon casting another ability.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Heimerdinger</b> empowers his next <a href="/wiki/Champion_ability" title="Champion ability">basic ability</a> for an additional effect. These empowered abilities have the same cooldowns as their basic forms, deal modified damage, and do not have a <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana</span></span> cost. <br><br><i>UPGRADE!!!</i> can be recast after 3 seconds, and does so automatically upon casting another ability.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 3:',
            raw: 'UPGRADE!!! can be recast after 3 seconds, and does so automatically upon casting another ability.',
            damagetype: 'None',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'can be recast after 3 seconds, and does so automatically upon casting another ability.',
            pre: 'UPGRADE!!! can be recast after 3 seconds, and does so automatically upon casting another ability.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Recast: Heimerdinger ends UPGRADE!!! and puts it on a 3-second  cooldown.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Heimerdinger</b> ends <i>UPGRADE!!!</i> and puts it on a 3-second <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Recast:',
            raw: 'Heimerdinger ends UPGRADE!!! and puts it on a 3-second  cooldown.',
            damagetype: 'None',
            values: 3,
            units: 'total_ad',
            unitsText: 'ends UPGRADE!!! and puts it on a 3-second  cooldown.',
            pre: 'Heimerdinger ends UPGRADE!!! and puts it on a 3-second  cooldown.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'UPGRADE!!! can be used while affected by  cast-inhibiting crowd control.',
        descriptionHTML:
          '<i>UPGRADE!!! can be used while affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast-inhibiting crowd control"><a href="/wiki/Crowd_control#Disrupting" title="Crowd control#Disrupting"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disrupting" title="Crowd control">cast-inhibiting crowd control</a></span>.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    notes:
      '*Toggle abilities do not count as ability activations for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li><ul><li>Consuming the buff for an empowered basic <a href="/wiki/Champion_ability" title="Champion ability">ability</a> does.</li></ul></li>\n<li>No compensations for <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana</span></span> are made if <i>UPGRADE!!!</i> is recast.</li></ul>',
  },
} satisfies { [skillName in string]: SkillData };
