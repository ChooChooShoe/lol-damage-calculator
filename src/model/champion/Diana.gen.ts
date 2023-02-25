import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Diana';

export default {
  'Moonsilver Blade': {
    name: 'Moonsilver Blade',
    display_name: 'Moonsilver Blade',
    champion: 'Diana',
    skill: 'I',
    image: {
      full: 'Diana_Passive_LunarBlade.png',
      sprite: 'passive0.png',
      group: 'passive',
      x: 144,
      y: 96,
      w: 48,
      h: 48,
    },
    effect_radius: '175',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Diana" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Diana/LoL" title="Diana"><img alt="Diana" src="/wiki/images/Diana_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Diana/LoL" title="Diana/LoL">Diana</a></span></span> gains <span style="color:orangered; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;attack speed</span></span>, increased shortly after casting an ability.',
      'Every third basic attack in quick succession will cleave nearby enemies, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
    ],
    description: [
      {
        description:
          'Innate: Diana gains  15% − 40% (based on level) bonus attack speed. After casting an ability, this bonus is tripled to 45% − 120% (based on level) for 3 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Diana</b> gains <span style="color:orangered; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="15;19.17;23.33;27.5;31.67;35.83;40" data-top_values="1;3;6;9;12;15;18" data-bot_key="%">15% − 40% (based on level)</span> <b>bonus</b> attack speed</span></span>. After casting an <a href="/wiki/Champion_ability" title="Champion ability">ability</a>, this bonus is tripled to <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:orangered;" data-bot_values="45;57.5;70;82.5;95;107.5;120" data-top_values="1;3;6;9;12;15;18" data-bot_key="%">45% − 120% (based on level)</span> for 3 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate:',
            raw: 'Diana gains  15% − 40% (based on level) bonus attack speed',
            increasedStat: 'bonus_ad',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            units: '',
            unitsText: 'bonus attack speed',
            pre: 'Diana gains  15% − 40%',
            post: 'bonus attack speed',
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'After casting an ability, this bonus is tripled to 45% − 120% (based on level) for 3 seconds.',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'for 3 seconds.',
            pre: 'After casting an ability, this bonus is tripled to 45% − 120%',
            post: 'for 3 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Moonsilver_Blade.png',
        description:
          "Innate: Diana's basic attacks generate a stack of Moonsilver Blade for 3.5 seconds, refreshing on subsequent attacks and stacking up to 2 times. At 2 stacks, Diana empowers her next basic attack to consume the stacks  on-hit to additionally cleave nearby enemies, dealing them 20 − 220 (based on level) (+ 50% AP) magic damage. Moonsilver Blade deals 300% damage against  monsters.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Diana\'s</b> <a href="/wiki/Basic_attacks" class="mw-redirect" title="Basic attacks">basic attacks</a> generate a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Moonsilver Blade</i> for 3.<small>5</small> seconds, refreshing on subsequent attacks and stacking up to 2 times. At 2 stacks, <b>Diana</b> empowers her next basic attack to consume the stacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> to additionally cleave nearby enemies, dealing them <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#00B0F0;" data-displayformula="20 + 5 per level until level 6, then + 10 per level until level 11, then + 15 per level until level 16, then + 25 per level" data-bot_values="20;25;30;35;40;45;55;65;75;85;95;110;125;140;155;170;195;220" data-top_values="">20 − 220 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span> <span style="color: #00B0F0; white-space:normal">magic damage</span>. <i>Moonsilver Blade</i> deals 300% damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Innate:',
            raw: "Diana's basic attacks generate a stack of Moonsilver Blade for 3.5 seconds, refreshing on subsequent attacks and stacking up to 2 times",
            min: 0,
            max: 2,
            description:
              "Diana's basic attacks generate a stack of Moonsilver Blade for 3.5 seconds, refreshing on subsequent attacks and stacking up to 2 times",
            values: 3,
            units: 'genericStacks',
            unitsText:
              'basic attacks generate a stack of Moonsilver Blade for 3.5 seconds, refreshing on subsequent attacks and stacking up to 2 times',
            pre: "Diana's basic attacks generate a stack of Moonsilver Blade for 3.5 seconds, refreshing on subsequent attacks and stacking up to 2 times",
          },
          {
            effectType: 'Stacks',
            name: 'Line 2:',
            raw: 'At 2 stacks, Diana empowers her next basic attack to consume the stacks  on-hit to additionally cleave nearby enemies, dealing them 20 − 220 (based on level) (+ 50% AP) magic damage',
            min: 0,
            max: 10,
            description:
              'At 2 stacks, Diana empowers her next basic attack to consume the stacks  on-hit to additionally cleave nearby enemies, dealing them 20 − 220 (based on level) (+ 50% AP) magic damage',
            values: [
              20, 31.76, 43.53, 55.29, 67.06, 78.82, 90.59, 102.35, 114.12,
              125.88, 137.65, 149.41, 161.18, 172.94, 184.71, 196.47, 208.24,
              220,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'magic damage',
            pre: 'At 2 stacks, Diana empowers her next basic attack to consume the stacks  on-hit to additionally cleave nearby enemies, dealing them 20 − 220',
            post: 'magic damage',
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
          {
            effectType: 'Gain',
            name: 'Line 3:',
            raw: 'Moonsilver Blade deals 300% damage against  monsters.',
            increasedStat: 'total_ad',
            values: 3,
            valuesIsPercent: true,
            units: '',
            unitsText: 'damage against  monsters.Blade deals 300',
            pre: 'Moonsilver Blade deals 300% damage against  monsters.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self / Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes:
      '* <i>Moonsilver Blade</i> will affect <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.\n<ul><li>Each attack has a distinct animation and she will glow when the empowered attack is ready.</li></ul>',
    video: 'Diana IVideo.ogv',
  },
  'Crescent Strike': {
    name: 'Crescent Strike',
    display_name: 'Crescent Strike',
    champion: 'Diana',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'DianaQ.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 384,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '900',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Inner arc speed">1900</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Outer arc speed">2100</span>',
    cast_time: '0.<small>25</small>',
    cost: '50',
    costtype: 'mana',
    cooldown: '8 / 7.<small>5</small> / 7 / 6.<small>5</small> / 6',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Diana" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Diana/LoL" title="Diana"><img alt="Diana" src="/wiki/images/Diana_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Diana/LoL" title="Diana/LoL">Diana</a></span></span> unleashes a bolt of lunar energy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit in an arc before exploding at the target location.',
      'Enemies hit are marked with <i>Moonlight</i>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> them.',
    ],
    description: [
      {
        icon: '/wiki/images/Crescent_Strike.png',
        description:
          'Active: Diana unleashes a bolt of lunar energy that travels in a counter-clockwise arc before exploding at the target location, granting  sight of the area for 0.5 seconds and dealing magic damage to enemies hit and afflicting them with Moonlight for 3 seconds, during which they are  revealed.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Diana</b> unleashes a bolt of lunar energy that travels in a counter-clockwise arc before exploding at the target location, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area for 0.<small>5</small> seconds and dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and afflicting them with <i>Moonlight</i> for 3 seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '60 / 95 / 130 / 165 / 200 (+ 70% AP)',
            valuesHTML:
              '60 / 95 / 130 / 165 / 200 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;70% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 95 / 130 / 165 / 200 (+ 70% AP)',
            damagetype: 'Magic',
            values: [60, 95, 130, 165, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 95 / 130 / 165 / 200',
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
        icon: '/wiki/images/undefined',
        description: 'Lunar Rush interacts with Moonlight.',
        descriptionHTML:
          '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Diana" data-ability="Lunar Rush" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Diana/LoL#Lunar_Rush" title="Lunar Rush"><img alt="Lunar Rush" src="/wiki/images/Diana_Lunar_Rush.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Diana/LoL#Lunar_Rush" title="Diana/LoL">Lunar Rush</a></span></span></i> interacts with <i>Moonlight</i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Crescent Strike will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i>Crescent Strike will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'aoe',
    spellshield: 'Special',
    projectile: 'True',
    notes:
      '* Even if the target <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shields</a></span> the bolt, they may still be damaged by the explosion. <i>Moonlight</i> is not applied to the protected target if blocked.\n<ul><li>This ability will cast from wherever the caster is at the end of the cast time.\n<ul><li>If the ability is cast at max range and she is moved backwards while casting, the bolt will travel to the target location with increased distance.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul></li></ul>',
    video: 'Diana QVideo.ogv',
  },
  'Pale Cascade': {
    name: 'Pale Cascade',
    display_name: 'Pale Cascade',
    champion: 'Diana',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'DianaOrbs.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 432,
      y: 96,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Orbit and explosion">200</span>',
    cast_time: 'none',
    cost: '40 / 45 / 50 / 55 / 60',
    costtype: 'mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">15 / 13.<small>5</small> / 12 / 10.<small>5</small> / 9</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Diana" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Diana/LoL" title="Diana"><img alt="Diana" src="/wiki/images/Diana_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Diana/LoL" title="Diana/LoL">Diana</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span> herself, creating three orbiting spheres that detonate on contact with enemies to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> in an area.',
      'If all the spheres detonate, she gains more <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Pale_Cascade.png',
        description:
          'Active: Diana grants herself a  shield for up to 5 seconds and creates three spheres that orbit her for the same duration, detonating upon contact with an enemy to deal magic damage to nearby enemies.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Diana</b> grants herself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for up to 5 seconds and creates three spheres that orbit her for the same duration, detonating upon contact with an enemy to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Active:',
            raw: 'Diana grants herself a  shield for up to 5 seconds and creates three spheres that orbit her for the same duration, detonating upon contact with an enemy to deal magic damage to nearby enemies.',
            damagetype: 'Magic',
            shieldType: 'SelfShield',
            values: 5,
            user: 'none',
            units: '',
            unitsText:
              'grants herself a  shield for up to 5 seconds and creates three spheres that orbit her for the same duration, detonating upon contact with an enemy to deal magic damage to nearby enemies.',
            pre: 'Diana grants herself a  shield for up to 5 seconds and creates three spheres that orbit her for the same duration, detonating upon contact with an enemy to deal magic damage to nearby enemies.',
          },
        ],
        leveling: [
          {
            name: 'Shield Strength:',
            values: '40 / 55 / 70 / 85 / 100 (+ 25% AP) (+ 9% bonus health)',
            valuesHTML:
              '40 / 55 / 70 / 85 / 100 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;25% AP)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;9% <b>bonus</b> health)</span>',
          },
          {
            name: 'Magic Damage per Orb:',
            values: '18 / 30 / 42 / 54 / 66 (+ 15% AP)',
            valuesHTML:
              '18 / 30 / 42 / 54 / 66 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;15% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Shield Strength:',
            raw: '40 / 55 / 70 / 85 / 100 (+ 25% AP) (+ 9% bonus health)',
            healType: 'BonusHealth',
            values: [40, 55, 70, 85, 100],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 55 / 70 / 85 / 100',
            children: [
              {
                values: 25,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 25% AP',
              },
              {
                values: 9,
                valuesIsPercent: true,
                units: 'bonus_hp',
                unitsText: 'bonus health',
                pre: '+ 9% bonus health',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Magic Damage per Orb:',
            raw: '18 / 30 / 42 / 54 / 66 (+ 15% AP)',
            damagetype: 'Magic',
            values: [18, 30, 42, 54, 66],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '18 / 30 / 42 / 54 / 66',
            children: [
              {
                values: 15,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 15% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "If all three spheres detonate, Pale Cascade's shield is reapplied, stacking with its original shield and refreshing the duration.",
        descriptionHTML:
          "If all three spheres detonate, <i>Pale Cascade's</i> shield is reapplied, stacking with its original shield and refreshing the duration.",
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self, Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'True',
    notes:
      '* On the second application of <i>Pale Cascade\'s</i> shield, <span style="white-space:nowrap"><a href="/wiki/Heal_and_shield_power" title="Heal and shield power"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Heal_and_shield_power" title="Heal and shield power">Shield Power</a></span> will apply to both the new shield amount and the shield amount remaining from the first shield, which has already benefited from <i>shield power</i>.\n<ul><li><ul><li>Because of this, <i>shield power</i> effectively applies to the second shield twice, but with reduced efficiency, for up to an increase of 50% of <i>shield power</i> (maximum benefit if no damage was mitigated by the first shield). With 10% <i>shield power</i>, the second shield\'s total amount will be increased by up to an additional 5%, for a total of <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="1.1*1.05">15.<small>5</small>%</span> <b>bonus</b> shield.</li>\n<li>The formula for the total amount of shield <b>Diana</b> will receive from both shield applications is:\n<ul><li><i>Total Shield = (((Shield Amount × (1 + Shield Power)) - Damage Blocked by Shield) + Shield Amount) × (1 + Shield Power)</i></li></ul></li></ul></li></ul>',
    video: 'Diana WVideo.ogv',
  },
  'Lunar Rush': {
    name: 'Lunar Rush',
    display_name: 'Lunar Rush',
    champion: 'Diana',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'DianaTeleport.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 0,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '825',
    cast_time: 'none',
    cost: '40 / 45 / 50 / 55 / 60',
    costtype: 'mana',
    cooldown: '22 / 20 / 18 / 16 / 14',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Diana" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Diana/LoL" title="Diana"><img alt="Diana" src="/wiki/images/Diana_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Diana/LoL" title="Diana/LoL">Diana</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to an enemy and deals <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
      'If used on a target afflicted with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Diana" data-ability="Crescent Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Diana/LoL#Crescent_Strike" title="Moonlight"><img alt="Moonlight" src="/wiki/images/Diana_Crescent_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Diana/LoL#Crescent_Strike" title="Diana/LoL"><i>Moonlight</i></a></span></span>, the cooldown is massively <span style="white-space:nowrap"><a href="/wiki/Ability_haste" title="Ability haste"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduced</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Lunar_Rush.png',
        description:
          "Active: Diana  dashes to the target enemy's location, and upon completion, she deals them magic damage and consumes  Moonlight from all enemies. If the target is within 400 range, Diana will dash through their location.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Diana</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target enemy\'s location, and upon completion, she deals them <span style="color: #00B0F0; white-space:normal">magic damage</span> and consumes <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Diana" data-ability="Crescent Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Diana/LoL#Crescent_Strike" title="Moonlight"><img alt="Moonlight" src="/wiki/images/Diana_Crescent_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Diana/LoL#Crescent_Strike" title="Diana/LoL">Moonlight</a></span></span></i> from all enemies. If the target is within 400 range, <b>Diana</b> will dash through their location.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'If the target is within 400 range, Diana will dash through their location.',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'the target is within 400 range, Diana will dash through their location.',
            pre: 'If the target is within 400 range, Diana will dash through their location.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '50 / 70 / 90 / 110 / 130 (+ 50% AP)',
            valuesHTML:
              '50 / 70 / 90 / 110 / 130 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '50 / 70 / 90 / 110 / 130 (+ 50% AP)',
            damagetype: 'Magic',
            values: [50, 70, 90, 110, 130],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 70 / 90 / 110 / 130',
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
          "If Moonlight is consumed from the target, Lunar Rush's  current cooldown is reduced to 0.5 seconds.",
        descriptionHTML:
          'If <i>Moonlight</i> is consumed from the target, <i>Lunar Rush\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> is reduced to 0.<small>5</small> seconds.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'Diana can cast any of her abilities during the dash.',
        descriptionHTML:
          '<i><b>Diana</b> can cast any of her abilities during the dash.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Single target',
    spellshield: true,
    callforhelp: 'True',
    notes:
      '* <b>Diana</b> will attempt to basic attack the target. This will not grant a stack of <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Conqueror" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Conqueror_(Rune)" title="Conqueror"><img alt="Conqueror" src="/wiki/images/Conqueror_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Conqueror_(Rune)" class="mw-redirect" title="Conqueror (Rune)">Conqueror</a></span></span>, <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Electrocute" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Electrocute_(Rune)" title="Electrocute"><img alt="Electrocute" src="/wiki/images/Electrocute_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Electrocute_(Rune)" class="mw-redirect" title="Electrocute (Rune)">Electrocute</a></span></span>, <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Phase Rush" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Phase_Rush_(Rune)" title="Phase Rush"><img alt="Phase Rush" src="/wiki/images/Phase_Rush_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Phase_Rush_(Rune)" class="mw-redirect" title="Phase Rush (Rune)">Phase Rush</a></span></span> or <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Spellthief\'s Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Spellthief%27s_Edge" title="Spellthief\'s Edge"><img alt="Spellthief\'s Edge" src="/wiki/images/Spellthief%27s_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Spellthief%27s_Edge" title="Spellthief\'s Edge">Spellthief\'s Edge</a></span></span>.\n<ul><li><i>Lunar Rush\'s</i> cooldown will also be reset if the target dies during the dash while being affected by <i>Moonlight</i>.</li>\n<li><i>Lunar Rush</i> consumes <i>Moonlight</i> upon ending the dash (even if <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span>).</li>\n<li><i>Lunar Rush</i> will still deal damage even if the target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> by the end of the dash.</li>\n<li>If <i>Lunar Rush</i> is blocked by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span> the <i>Moonlight</i> debuff is still consumed but <i>Lunar Rush\'s</i> cooldown is not reset.</li></ul>',
    video: 'Diana RVideo.ogv',
  },
  Moonfall: {
    name: 'Moonfall',
    display_name: 'Moonfall',
    champion: 'Diana',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'DianaR.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 48,
      y: 144,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Effect radius">475</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Maximum Pull distance">225</span>',
    cast_time: '0.<small>25</small>',
    cost: '100',
    costtype: 'mana',
    cooldown: '100 / 95 / 90 / 85 / 80',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Diana" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Diana/LoL" title="Diana"><img alt="Diana" src="/wiki/images/Diana_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Diana/LoL" title="Diana/LoL">Diana</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">draws</a></span> in and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> nearby enemies.',
      'If she pulls an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, she calls down a beam of moonlight to strike upon the area after a delay, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>, increased if she pulled more champions.',
    ],
    description: [
      {
        icon: '/wiki/images/Moonfall.png',
        description:
          'Active: Diana  pulls in all nearby enemies, during which they are  revealed, then  slows them for 2 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Diana</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulls</a></span> in all nearby enemies, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span>, then <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for 2 seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: 'Diana  pulls in all nearby enemies, during which they are  revealed, then  slows them for 2 seconds.',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'pulls in all nearby enemies, during which they are  revealed, then  slows them for 2 seconds.',
            pre: 'Diana  pulls in all nearby enemies, during which they are  revealed, then  slows them for 2 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Slow:',
            values: '40 / 45 / 50 / 55 / 60%',
            valuesHTML: '40 / 45 / 50 / 55 / 60%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '40 / 45 / 50 / 55 / 60%',
            values: [40, 45, 50, 55, 60],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 45 / 50 / 55 / 60%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'If an enemy  champion is pulled in, she calls down a beam of moonlight to strike upon the area around her after 1 second, dealing magic damage to all nearby enemies, increased for each champion pulled beyond the first.',
        descriptionHTML:
          'If an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> is pulled in, she calls down a beam of moonlight to strike upon the area around her after 1 second, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to all nearby enemies, increased for each champion pulled beyond the first.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'If an enemy  champion is pulled in, she calls down a beam of moonlight to strike upon the area around her after 1 second, dealing magic damage to all nearby enemies, increased for each champion pulled beyond the first.',
            damagetype: 'Magic',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'an enemy  champion is pulled in, she calls down a beam of moonlight to strike upon the area around her after 1 second, dealing magic damage to all nearby enemies, increased for each champion pulled beyond the first.',
            pre: 'If an enemy  champion is pulled in, she calls down a beam of moonlight to strike upon the area around her after 1 second, dealing magic damage to all nearby enemies, increased for each champion pulled beyond the first.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '200 / 250 / 300 / 350 / 400 (+ 60% AP)',
            valuesHTML:
              '200 / 250 / 300 / 350 / 400 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
          {
            name: 'Bonus Damage Per Champion:',
            values: '35 / 47.5 / 60 / 72.5 / 85 (+ 15% AP)',
            valuesHTML:
              '35 / 47.<small>5</small> / 60 / 72.<small>5</small> / 85 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;15% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '200 / 250 / 300 / 350 / 400 (+ 60% AP)',
            damagetype: 'Magic',
            values: [200, 250, 300, 350, 400],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 250 / 300 / 350 / 400',
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
            name: 'Bonus Damage Per Champion:',
            raw: '35 / 47.5 / 60 / 72.5 / 85 (+ 15% AP)',
            damagetype: 'None',
            values: [35, 47.5, 60, 72.5, 85],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 47.5 / 60 / 72.5 / 85',
            children: [
              {
                values: 15,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 15% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Self, Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: 'Special',
    notes:
      '* Enemies stay in the area for a maximum of approximately 0.<small>5</small> seconds while being pulled.\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">Crowd control immunity</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span> still count as being "pulled in" by the ability.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">Clones</a></span> count as champions for increasing this ability\'s damage.</li>\n<li><i>Moonfall\'s</i> additional damage is not capped at 4 champions.</li>\n<li>The beam of moonlight does not crash down if champions hit blocked the initial effect with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span>.\n<ul><li>Enemy champions protected by <i>spell shield</i> do not count towards the damage increase.</li></ul></li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li>\n<li>A lunar phase of the moon will appear above <b>Diana</b> while she is casting <i>Moonfall</i>, each phase is based on the number of enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> pulled:</li></ul>\n<div id="gallery-1" hash="f6944deefa9924251e1d746c8768756a" data-seq-no="1" class="wikia-gallery wikia-gallery-caption-below wikia-gallery-position-left wikia-gallery-spacing-medium wikia-gallery-border-small wikia-gallery-captions-left wikia-gallery-caption-size-medium"><div class="wikia-gallery-item" style="width:82px; "><div class="thumb" style="height:81px;"><div class="gallery-image-wrapper accent" id="New_Moon_Moonfall_-1_Enemy_Champion--png" style="position: relative; height:76px; width:80px; top:1.5px;"><a class="image lightbox" href="/wiki/File:New_Moon_Moonfall_(1_Enemy_Champion).png" title="New Moon Moonfall (1 Enemy Champion).png (25 KB)" style="height:76px; width:80px;"><noscript><img style="" src="https://static.wikia.nocookie.net/leagueoflegends/images/6/6f/New_Moon_Moonfall_%281_Enemy_Champion%29.png/revision/latest/scale-to-width-down/80?cb=20200501020924" title="New Moon Moonfall (1 Enemy Champion).png (25 KB)" class="thumbimage" alt="New Moon Moonfall (1 Enemy Champion)" data-image-name="New Moon Moonfall (1 Enemy Champion).png" data-image-key="New_Moon_Moonfall_%281_Enemy_Champion%29.png" data-caption="<span class=&quot;template_sbc&quot;><b>New Moon:</b></span> <b>1</b> Enemy Champion Pulled"></noscript><img style="" src="/wiki/images/New_Moon_Moonfall_%281_Enemy_Champion%29.png" title="New Moon Moonfall (1 Enemy Champion).png (25 KB)" class="thumbimage lazyload" alt="New Moon Moonfall (1 Enemy Champion)" data-caption="<span class=&quot;template_sbc&quot;><b>New Moon:</b></span> <b>1</b> Enemy Champion Pulled"></a></div></div><div class="lightbox-caption" style="width:80px;"><span class="template_sbc"><b>New Moon:</b></span> <b>1</b> Enemy Champion Pulled</div></div><div class="wikia-gallery-item" style="width:82px; "><div class="thumb" style="height:81px;"><div class="gallery-image-wrapper accent" id="Waning_Crescent_Moonfall_-2_Enemy_Champions--png" style="position: relative; height:79px; width:80px;"><a class="image lightbox" href="/wiki/File:Waning_Crescent_Moonfall_(2_Enemy_Champions).png" title="Waning Crescent Moonfall (2 Enemy Champions).png (32 KB)" style="height:79px; width:80px;"><noscript><img style="" src="https://static.wikia.nocookie.net/leagueoflegends/images/c/c6/Waning_Crescent_Moonfall_%282_Enemy_Champions%29.png/revision/latest/scale-to-width-down/80?cb=20200501021056" title="Waning Crescent Moonfall (2 Enemy Champions).png (32 KB)" class="thumbimage" alt="Waning Crescent Moonfall (2 Enemy Champions)" data-image-name="Waning Crescent Moonfall (2 Enemy Champions).png" data-image-key="Waning_Crescent_Moonfall_%282_Enemy_Champions%29.png" data-caption="<span class=&quot;template_sbc&quot;><b>Waning Crescent:</b></span> <b>2</b> Enemy Champions Pulled"></noscript><img style="" src="/wiki/images/Waning_Crescent_Moonfall_%282_Enemy_Champions%29.png" title="Waning Crescent Moonfall (2 Enemy Champions).png (32 KB)" class="thumbimage lazyload" alt="Waning Crescent Moonfall (2 Enemy Champions)" data-caption="<span class=&quot;template_sbc&quot;><b>Waning Crescent:</b></span> <b>2</b> Enemy Champions Pulled"></a></div></div><div class="lightbox-caption" style="width:80px;"><span class="template_sbc"><b>Waning Crescent:</b></span> <b>2</b> Enemy Champions Pulled</div></div><div class="wikia-gallery-item" style="width:82px; "><div class="thumb" style="height:81px;"><div class="gallery-image-wrapper accent" id="Third_Quarter_Moonfall_-3_Enemy_Champions--png" style="position: relative; height:75px; width:80px; top:2px;"><a class="image lightbox" href="/wiki/File:Third_Quarter_Moonfall_(3_Enemy_Champions).png" title="Third Quarter Moonfall (3 Enemy Champions).png (34 KB)" style="height:75px; width:80px;"><noscript><img style="" src="https://static.wikia.nocookie.net/leagueoflegends/images/e/eb/Third_Quarter_Moonfall_%283_Enemy_Champions%29.png/revision/latest/scale-to-width-down/80?cb=20200501021123" title="Third Quarter Moonfall (3 Enemy Champions).png (34 KB)" class="thumbimage" alt="Third Quarter Moonfall (3 Enemy Champions)" data-image-name="Third Quarter Moonfall (3 Enemy Champions).png" data-image-key="Third_Quarter_Moonfall_%283_Enemy_Champions%29.png" data-caption="<span class=&quot;template_sbc&quot;><b>Third Quarter:</b></span> <b>3</b> Enemy Champions Pulled"></noscript><img style="" src="/wiki/images/Third_Quarter_Moonfall_%283_Enemy_Champions%29.png" title="Third Quarter Moonfall (3 Enemy Champions).png (34 KB)" class="thumbimage lazyload" alt="Third Quarter Moonfall (3 Enemy Champions)" data-caption="<span class=&quot;template_sbc&quot;><b>Third Quarter:</b></span> <b>3</b> Enemy Champions Pulled"></a></div></div><div class="lightbox-caption" style="width:80px;"><span class="template_sbc"><b>Third Quarter:</b></span> <b>3</b> Enemy Champions Pulled</div></div><div class="wikia-gallery-item" style="width:82px; "><div class="thumb" style="height:81px;"><div class="gallery-image-wrapper accent" id="Waning_Gibbous_Moonfall_-4_Enemy_Champions--png" style="position: relative; height:76px; width:80px; top:1.5px;"><a class="image lightbox" href="/wiki/File:Waning_Gibbous_Moonfall_(4_Enemy_Champions).png" title="Waning Gibbous Moonfall (4 Enemy Champions).png (40 KB)" style="height:76px; width:80px;"><noscript><img style="" src="https://static.wikia.nocookie.net/leagueoflegends/images/7/75/Waning_Gibbous_Moonfall_%284_Enemy_Champions%29.png/revision/latest/scale-to-width-down/80?cb=20200501021211" title="Waning Gibbous Moonfall (4 Enemy Champions).png (40 KB)" class="thumbimage" alt="Waning Gibbous Moonfall (4 Enemy Champions)" data-image-name="Waning Gibbous Moonfall (4 Enemy Champions).png" data-image-key="Waning_Gibbous_Moonfall_%284_Enemy_Champions%29.png" data-caption="<span class=&quot;template_sbc&quot;><b>Waning Gibbous:</b></span> <b>4</b> Enemy Champions Pulled"></noscript><img style="" src="/wiki/images/Waning_Gibbous_Moonfall_%284_Enemy_Champions%29.png" title="Waning Gibbous Moonfall (4 Enemy Champions).png (40 KB)" class="thumbimage lazyload" alt="Waning Gibbous Moonfall (4 Enemy Champions)" data-caption="<span class=&quot;template_sbc&quot;><b>Waning Gibbous:</b></span> <b>4</b> Enemy Champions Pulled"></a></div></div><div class="lightbox-caption" style="width:80px;"><span class="template_sbc"><b>Waning Gibbous:</b></span> <b>4</b> Enemy Champions Pulled</div></div><div class="wikia-gallery-item" style="width:82px; "><div class="thumb" style="height:81px;"><div class="gallery-image-wrapper accent" id="Full_Moon_Moonfall_-5_Enemy_Champions--png" style="position: relative; height:71px; width:80px; top:4px;"><a class="image lightbox" href="/wiki/File:Full_Moon_Moonfall_(5_Enemy_Champions).png" title="Full Moon Moonfall (5 Enemy Champions).png (25 KB)" style="height:71px; width:80px;"><noscript><img style="" src="https://static.wikia.nocookie.net/leagueoflegends/images/1/10/Full_Moon_Moonfall_%285_Enemy_Champions%29.png/revision/latest/scale-to-width-down/80?cb=20200501021414" title="Full Moon Moonfall (5 Enemy Champions).png (25 KB)" class="thumbimage" alt="Full Moon Moonfall (5 Enemy Champions)" data-image-name="Full Moon Moonfall (5 Enemy Champions).png" data-image-key="Full_Moon_Moonfall_%285_Enemy_Champions%29.png" data-caption="<span class=&quot;template_sbc&quot;><b>Full Moon:</b></span> <b>5</b> Enemy Champions Pulled"></noscript><img style="" src="/wiki/images/Full_Moon_Moonfall_%285_Enemy_Champions%29.png" title="Full Moon Moonfall (5 Enemy Champions).png (25 KB)" class="thumbimage lazyload" alt="Full Moon Moonfall (5 Enemy Champions)" data-caption="<span class=&quot;template_sbc&quot;><b>Full Moon:</b></span> <b>5</b> Enemy Champions Pulled"></a></div></div><div class="lightbox-caption" style="width:80px;"><span class="template_sbc"><b>Full Moon:</b></span> <b>5</b> Enemy Champions Pulled</div></div></div>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Diana_Original_R_0.ogg   "Night approaches!"',
  },
} satisfies { [skillName in string]: SkillData };
