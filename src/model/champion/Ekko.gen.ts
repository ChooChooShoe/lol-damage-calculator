import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Ekko';

export default {
  'Z-Drive Resonance': {
    name: 'Z-Drive Resonance',
    display_name: 'Z-Drive Resonance',
    champion: 'Ekko',
    skill: 'I',
    image: {
      full: 'Ekko_P.png',
      sprite: 'passive0.png',
      group: 'passive',
      x: 288,
      y: 96,
      w: 48,
      h: 48,
    },
    ontargetcdstatic:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Begins after the stacks are consumed">5</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ekko" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ekko/LoL" title="Ekko\'s"><img alt="Ekko\'s" src="/wiki/images/Ekko_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ekko/LoL" title="Ekko/LoL">Ekko\'s</a></span></span> basic attacks and damaging abilities apply stacks, the third stack deals <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>. If the target was a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, this grants <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> to <b>Ekko</b>.',
    ],
    description: [
      {
        icon: '/wiki/images/Z-Drive Resonance.png',
        description:
          "Innate - Resonance: Ekko's basic attacks  on-hit and damaging abilities apply a stack of Resonance to enemies hit for 4 seconds, refreshing on subsequent hits and stacking up to 3 times. The third stack consumes them all to deal 30 − 140 (based on level) (+ 90% AP) bonus magic damage. Z-Drive Resonance deals 300% damage against  monsters.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Resonance:</b></span> <b>Ekko\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and damaging <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> apply a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Resonance</i> to enemies hit for 4 seconds, refreshing on subsequent hits and stacking up to 3 times. The third stack consumes them all to deal <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#00B0F0;" data-bot_values="30;40;50;60;70;80;85;90;95;100;105;110;115;120;125;130;135;140" data-top_values="">30 − 140 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;90% AP)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>. <i>Z-Drive Resonance</i> deals 300% damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Innate - Resonance:',
            raw: " Ekko's basic attacks  on-hit and damaging abilities apply a stack of Resonance to enemies hit for 4 seconds, refreshing on subsequent hits and stacking up to 3 times",
            min: 0,
            max: 10,
            description:
              " Ekko's basic attacks  on-hit and damaging abilities apply a stack of Resonance to enemies hit for 4 seconds, refreshing on subsequent hits and stacking up to 3 times",
            values: 4,
            units: 'total_ap',
            unitsText:
              'basic attacks  on-hit and damaging abilities apply a stack of Resonance to enemies hit for 4 seconds, refreshing on subsequent hits and stacking up to 3 times',
            pre: "Ekko's basic attacks  on-hit and damaging abilities apply a stack of Resonance to enemies hit for 4 seconds, refreshing on subsequent hits and stacking up to 3 times",
          },
          {
            effectType: 'Stacks',
            name: 'Line 2:',
            raw: 'The third stack consumes them all to deal 30 − 140 (based on level) (+ 90% AP) bonus magic damage',
            min: 0,
            max: 10,
            description:
              'The third stack consumes them all to deal 30 − 140 (based on level) (+ 90% AP) bonus magic damage',
            values: [
              30, 36.47, 42.94, 49.41, 55.88, 62.35, 68.82, 75.29, 81.76, 88.24,
              94.71, 101.18, 107.65, 114.12, 120.59, 127.06, 133.53, 140,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'bonus magic damage',
            pre: 'The third stack consumes them all to deal 30 − 140',
            post: 'bonus magic damage',
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
            effectType: 'Gain',
            name: 'Line 3:',
            raw: 'Z-Drive Resonance deals 300% damage against  monsters.',
            values: 3,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'damage against  monsters.Resonance deals 300',
            pre: 'Z-Drive Resonance deals 300% damage against  monsters.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Resonance cannot affect the same target more than once every few seconds.',
        descriptionHTML:
          '<i>Resonance</i> cannot affect the same target more than once every few seconds.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Z-Drive Resonance 2.png',
        description:
          'Innate - Stolen Time: Triggering Resonance against a  champion grants Ekko 50 / 60 / 70 / 80% (based on level)  bonus movement speed for 2 / 2.5 / 3 (based on level) seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Stolen Time:</b></span> Triggering <i>Resonance</i> against a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> grants <b>Ekko</b> <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#F5EE99;" data-start="50;1" data-finish="80;16" data-bot_values="50;60;70;80" data-top_values="1;6;11;16" data-bot_key="%">50 / 60 / 70 / 80% (based on level)</span> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="2;1" data-finish="3;11" data-bot_values="2;2.5;3" data-top_values="1;6;11">2 / 2.<small>5</small> / 3 (based on level)</span> seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate - Stolen Time:',
            raw: ' Triggering Resonance against a  champion grants Ekko 50 / 60 / 70 / 80% (based on level)  bonus movement speed for 2 / 2.5 / 3 (based on level) seconds.',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'bonus movement speed for 2 / 2.5 / 3',
            pre: 'Triggering Resonance against a  champion grants Ekko 50 / 60 / 70 / 80%',
            post: 'bonus movement speed for 2 / 2.5 / 3',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies / Self',
    damagetype: 'Magic',
    spelleffects: 'Single target',
    occurrence: 'On-hit',
    spellshield: true,
    notes:
      '* <b>Ekko\'s</b> basic attacks have different animations based on how many stacks his target has. His attack pattern is as follows:\n<ul><li><ul><li><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="first stack">Downwards</span> → <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="second stack">Upwards</span> → <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="third stack to consume all stacks">Sideways</span>\n<ul><li>If the target has already been affected by <i>Resonance</i>, <b>Ekko\'s</b> basic attack animations will kick or attack the target sideways.</li></ul></li></ul></li>\n<li><i>Resonance</i> stacks will not be applied nor consumed if the basic attack is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodged"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blocked"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span> or if the attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">misses</a></span>.</li></ul>',
    video: 'Ekko IVideo.ogv',
  },
  Timewinder: {
    name: 'Timewinder',
    display_name: 'Timewinder',
    champion: 'Ekko',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'EkkoQ.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 0,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '1100',
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Temporal Sickness expansion">160 – 210</span>',
    width:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Outward">120</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Returning">200</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Outward">1650</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Temporal Sickness (Estimated)">200</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Returning">2300</span>',
    cast_time: '0.<small>25</small>',
    cost: '50 / 60 / 70 / 80 / 90',
    costtype: 'Mana',
    cooldown: '9 / 8.<small>5</small> / 8 / 7.<small>5</small> / 7',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ekko" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ekko/LoL" title="Ekko"><img alt="Ekko" src="/wiki/images/Ekko_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ekko/LoL" title="Ekko/LoL">Ekko</a></span></span> throws a temporal grenade that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit. It expands at max range or upon hitting an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> nearby enemies.',
      'After a delay, the grenade homes back to <b>Ekko</b>, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
    ],
    description: [
      {
        icon: '/wiki/images/Timewinder.png',
        description:
          'Active: Ekko throws a temporal grenade in the target direction that deals magic damage to enemies hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Ekko</b> throws a temporal grenade in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '60 / 75 / 90 / 105 / 120 (+ 30% AP)',
            valuesHTML:
              '60 / 75 / 90 / 105 / 120 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 75 / 90 / 105 / 120 (+ 30% AP)',
            damagetype: 'Magic',
            values: [60, 75, 90, 105, 120],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 75 / 90 / 105 / 120',
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
          'At 700 units or upon hitting an enemy  champion, the grenade slows down for 1.75 seconds to gradually expand into a Temporal Sickness field that  slows nearby enemies, travelling for another 190 units.',
        descriptionHTML:
          'At 700 units or upon hitting an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, the grenade slows down for 1.<small>75</small> seconds to gradually expand into a <i>Temporal Sickness</i> field that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> nearby enemies, travelling for another 190 units.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'At 700 units or upon hitting an enemy  champion, the grenade slows down for 1.75 seconds to gradually expand into a Temporal Sickness field that  slows nearby enemies, travelling for another 190 units.',
            damagetype: 'None',
            values: 7,
            units: 'total_ad',
            unitsText:
              '700 units or upon hitting an enemy  champion, the grenade slows down for 1.75 seconds to gradually expand into a Temporal Sickness field that  slows nearby enemies, travelling for another 190 units.',
            pre: 'At 700 units or upon hitting an enemy  champion, the grenade slows down for 1.75 seconds to gradually expand into a Temporal Sickness field that  slows nearby enemies, travelling for another 190 units.',
          },
        ],
        leveling: [
          {
            name: 'Slow:',
            values: '32 / 39 / 46 / 53 / 60%',
            valuesHTML: '32 / 39 / 46 / 53 / 60%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '32 / 39 / 46 / 53 / 60%',
            values: [32, 39, 46, 53, 60],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '32 / 39 / 46 / 53 / 60%',
          },
        ],
      },
      {
        description:
          'Afterwards, the grenade contracts and homes back to Ekko at an increased speed, dealing magic damage to enemies hit.',
        descriptionHTML:
          'Afterwards, the grenade contracts and homes back to <b>Ekko</b> at an increased speed, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '40 / 65 / 90 / 115 / 140 (+ 60% AP)',
            valuesHTML:
              '40 / 65 / 90 / 115 / 140 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '40 / 65 / 90 / 115 / 140 (+ 60% AP)',
            damagetype: 'Magic',
            values: [40, 65, 90, 115, 140],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 65 / 90 / 115 / 140',
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
        description: 'Enemies can be hit only once per pass.',
        descriptionHTML: '<i>Enemies can be hit only once per pass.</i>',
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
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block only a single instance of damage.\n<ul><li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>',
    video: 'Ekko QVideo.ogv',
  },
  'Parallel Convergence': {
    name: 'Parallel Convergence',
    display_name: 'Parallel Convergence',
    champion: 'Ekko',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'EkkoW.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 48,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '1600',
    effect_radius: '375',
    cast_time: '0.<small>25</small>',
    cost: '30 / 35 / 40 / 45 / 50',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">22 / 20 / 18 / 16 / 14</span>',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ekko" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ekko/LoL" title="Ekko\'s"><img alt="Ekko\'s" src="/wiki/images/Ekko_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ekko/LoL" title="Ekko/LoL">Ekko\'s</a></span></span> basic attacks deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> against a <span style="color: #1F995C; white-space:normal">low-health</span> target, increased based on <span style="color: #1F995C; white-space:normal">their <b>missing</b> health</span>.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Ekko</b> indicates the target location which, after a delay, he creates a field that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> enemies hit.',
      'If <b>Ekko</b> enters the field, he triggers a detonation, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> enemies within and gaining a brief <span style="white-space:nowrap"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;shield</span>.',
    ],
    description: [
      {
        description:
          "Passive: Ekko's basic attacks deal bonus magic damage equal to 3% (+ 3% per 100 AP) of the target's missing health against enemies below  30% of their maximum health. The damage has a minimum threshold of 15 and is capped at 150 against  minions and  monsters.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Ekko\'s</b> basic attacks deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> equal to <span style="color: #1F995C; white-space:normal">3% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;3% per 100 AP)</span> of the target\'s <b>missing</b> health</span> against enemies below <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">30% of their <b>maximum</b> health</span></span>. The damage has a minimum threshold of 15 and is capped at 150 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Passive:',
            raw: " Ekko's basic attacks deal bonus magic damage equal to 3% (+ 3% per 100 AP) of the target's missing health against enemies below  30% of their maximum health",
            healType: 'OutgoingHeals',
            values: 3,
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText:
              "of the target's missing health against enemies below  30% of their maximum health",
            pre: "Ekko's basic attacks deal bonus magic damage equal to 3%",
            post: "of the target's missing health against enemies below  30% of their maximum health",
            children: [
              {
                values: 3,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 3% per 100 AP',
              },
            ],
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'The damage has a minimum threshold of 15 and is capped at 150 against  minions and  monsters.',
            increasedStat: 'total_ap',
            values: 1,
            units: '',
            unitsText:
              'damage has a minimum threshold of 15 and is capped at 150 against  minions and  monsters.',
            pre: 'The damage has a minimum threshold of 15 and is capped at 150 against  minions and  monsters.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Parallel Convergence.png',
        description:
          'Active: Ekko creates an afterimage of himself that, after 2 seconds, bats a device to the target location and grants  sight of the area for 2.5 seconds. After travelling over 1.25 seconds, the device expands into a chronosphere for 1.5 seconds that  slows enemies within by 40%.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Ekko</b> creates an afterimage of himself that, after 2 seconds, bats a device to the target location and grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area for 2.<small>5</small> seconds. After travelling over 1.<small>25</small> seconds, the device expands into a chronosphere for 1.<small>5</small> seconds that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> enemies within by 40%.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Ekko creates an afterimage of himself that, after 2 seconds, bats a device to the target location and grants  sight of the area for 2.5 seconds',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'creates an afterimage of himself that, after 2 seconds, bats a device to the target location and grants  sight of the area for 2.5 seconds',
            pre: 'Ekko creates an afterimage of himself that, after 2 seconds, bats a device to the target location and grants  sight of the area for 2.5 seconds',
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'After travelling over 1.25 seconds, the device expands into a chronosphere for 1.5 seconds that  slows enemies within by 40%.',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              '.travelling over 1.25 seconds, the device expands into a chronosphere for 1.5 seconds that  slows enemies within by 40',
            pre: 'After travelling over 1.25 seconds, the device expands into a chronosphere for 1.5 seconds that  slows enemies within by 40%.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'If Ekko enters the sphere, it detonates to grant him a  shield for 2 seconds and  stun enemies within for 2.25 seconds.',
        descriptionHTML:
          'If <b>Ekko</b> enters the sphere, it detonates to grant him a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 2 seconds and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> enemies within for 2.<small>25</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Line 1:',
            raw: 'If Ekko enters the sphere, it detonates to grant him a  shield for 2 seconds and  stun enemies within for 2.25 seconds.',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'Ekko enters the sphere, it detonates to grant him a  shield for 2 seconds and  stun enemies within for 2.25 seconds.',
            pre: 'If Ekko enters the sphere, it detonates to grant him a  shield for 2 seconds and  stun enemies within for 2.25 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Shield Strength:',
            values: '70 / 90 / 110 / 130 / 150 (+ 150% AP)',
            valuesHTML:
              '70 / 90 / 110 / 130 / 150 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;150% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Shield',
            name: 'Shield Strength:',
            raw: '70 / 90 / 110 / 130 / 150 (+ 150% AP)',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: [70, 90, 110, 130, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 90 / 110 / 130 / 150',
            children: [
              {
                values: 150,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 150% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          'Enemies can see the indicator for Parallel Convergence after 2 seconds.',
        descriptionHTML:
          '<i>Enemies can see the indicator for Parallel Convergence after 2 seconds.</i>',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Enemies can see the indicator for Parallel Convergence after 2 seconds.',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'can see the indicator for Parallel Convergence after 2 seconds.',
            pre: 'Enemies can see the indicator for Parallel Convergence after 2 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: '',
    occurrence: 'On-hit',
    spellshield: true,
    projectile: 'False',
    notes:
      '* Applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Proc damage"><a href="/wiki/Damage" title="Damage"><img alt="Wit\'s End item.png" src="/wiki/images/Wit%27s_End_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">proc damage</a></span> for the passive.\n<ul><li><b>Ekko</b> can detonate the expansion even while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> (i.e. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ekko" data-ability="Chronobreak" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ekko/LoL#Chronobreak" title="Chronobreak\'s"><img alt="Chronobreak\'s" src="/wiki/images/Ekko_Chronobreak.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ekko/LoL#Chronobreak" title="Ekko/LoL">Chronobreak\'s</a></span></span> dash), but not if he is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrecting</a></span>.</li>\n<li><i>Parallel Convergence</i> will continue to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> enemies even if its expansion is detonated.</li></ul>',
    video: 'Ekko WVideo.ogv',
  },
  'Phase Dive': {
    name: 'Phase Dive',
    display_name: 'Phase Dive',
    champion: 'Ekko',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'EkkoE.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 96,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '325 / 550',
    cast_time: 'none',
    cost: '40 / 45 / 50 / 55 / 60',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">9 / 8.<small>5</small> / 8 / 7.<small>5</small> / 7</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ekko" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ekko/LoL" title="Ekko"><img alt="Ekko" src="/wiki/images/Ekko_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ekko/LoL" title="Ekko/LoL">Ekko</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">rolls</a></span> in the target direction, gaining <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack range</span>.',
      'His next <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack"><a href="/wiki/Basic_attack" title="Basic attack">basic attack</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> him to the target and deals <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Phase Dive.png',
        description:
          'Active: Ekko  dashes in the target direction, then empowers his next basic attack within 3 seconds to have a 0.25-second cast time, gain  300 bonus range, cause him to  blink within 125 range of the target, and deal bonus magic damage.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Ekko</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction, then empowers his next basic attack within 3 seconds to have a 0.<small>25</small>-second cast time, gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;300 <b>bonus</b> range</span>, cause him to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blink</a></span> within <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">125</span> range of the target, and deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Ekko  dashes in the target direction, then empowers his next basic attack within 3 seconds to have a 0.25-second cast time, gain  300 bonus range, cause him to  blink within 125 range of the target, and deal bonus magic damage.',
            increasedStat: 'bonus_ad',
            values: 3,
            user: 'target',
            units: '',
            unitsText:
              'dashes in the target direction, then empowers his next basic attack within 3 seconds to have a 0.25-second cast time, gain  300 bonus range, cause him to  blink within 125 range of the target, and deal bonus magic damage.',
            pre: 'Ekko  dashes in the target direction, then empowers his next basic attack within 3 seconds to have a 0.25-second cast time, gain  300 bonus range, cause him to  blink within 125 range of the target, and deal bonus magic damage.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Magic Damage:',
            values: '50 / 75 / 100 / 125 / 150 (+ 40% AP)',
            valuesHTML:
              '50 / 75 / 100 / 125 / 150 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage:',
            raw: '50 / 75 / 100 / 125 / 150 (+ 40% AP)',
            damagetype: 'Magic',
            values: [50, 75, 100, 125, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 75 / 100 / 125 / 150',
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
          "Phase Dive  resets Ekko's basic attack timer. Ekko can cast any of his abilities during the dash.",
        descriptionHTML:
          '<i>Phase Dive <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Ekko\'s</b> basic attack timer. <b>Ekko</b> can cast any of his abilities during the dash.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Self',
    damagetype: 'Magic',
    spelleffects: 'Spell',
    occurrence: 'On-hit',
    spellshield: true,
    notes:
      '* The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> distance can be extended to up-to 550 units when targeting across terrain. It will only extend for the distance needed to cross the wall.\n<ul><li>While <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span>, <b>Ekko</b> loses the <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack range</span> from <i>Phase Dive</i>.</li>\n<li><i>Phase Drive\'s</i> attack can be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blocked"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodged"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span>, consuming the basic attack without dealing any damage. If the attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">misses</a></span>, the same will happen.</li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away during the empowered attack\'s cast time, it is cancelled but not consumed.</li></ul>',
    video: 'Ekko EVideo.ogv',
  },
  Chronobreak: {
    name: 'Chronobreak',
    display_name: 'Chronobreak',
    champion: 'Ekko',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'EkkoR.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 144,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage radius">375</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Activation radius">Global</span>',
    cast_time: '0.<small>5</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown: '110 / 95 / 80 / 65 / 50',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ekko" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ekko/LoL" title="Ekko"><img alt="Ekko" src="/wiki/images/Ekko_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ekko/LoL" title="Ekko/LoL">Ekko</a></span></span> reveals a time-delayed <i>afterimage</i> of himself that tracks where he was 4 seconds ago.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Ekko</b> enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stasis"><a href="/wiki/Stasis" title="Stasis"><img alt="Stasis icon.png" src="/wiki/images/Stasis_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stasis" class="mw-redirect" title="Stasis">stasis</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">rewinds</a></span> to the <i>afterimage</i>, <span style="color: #60E08F; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;healing</span></span> based on the damage received in the last 4 seconds. He then explodes, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies.',
    ],
    description: [
      {
        description:
          'Passive: Upon learning Chronobreak or if its current cooldown is lower than 4 seconds, Ekko reveals a time-delayed afterimage of himself that constantly tracks where he was 4 seconds ago.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> Upon learning <i>Chronobreak</i> or if its <b>current</b> cooldown is lower than 4 seconds, <b>Ekko</b> reveals a time-delayed <i>afterimage</i> of himself that constantly tracks where he was 4 seconds ago.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Passive:',
            raw: ' Upon learning Chronobreak or if its current cooldown is lower than 4 seconds, Ekko reveals a time-delayed afterimage of himself that constantly tracks where he was 4 seconds ago.',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'learning Chronobreak or if its current cooldown is lower than 4 seconds, Ekko reveals a time-delayed afterimage of himself that constantly tracks where he was 4 seconds ago.',
            pre: 'Upon learning Chronobreak or if its current cooldown is lower than 4 seconds, Ekko reveals a time-delayed afterimage of himself that constantly tracks where he was 4 seconds ago.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Chronobreak.png',
        description:
          "Active: Ekko enters  stasis at the start of the cast time, and afterwards  heals himself and  dashes to his afterimage's current location over 0.5 seconds. Upon arrival, the stasis ends and he creates an explosion that deals magic damage to nearby enemies.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Ekko</b> enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stasis (buff)"><a href="/wiki/Invulnerability#Stasis" title="Invulnerability#Stasis"><img alt="Stasis icon.png" src="/wiki/images/Stasis_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability#Stasis" title="Invulnerability">stasis</a></span> at the start of the cast time, and afterwards <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> himself and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to his <i>afterimage\'s</i> current location over 0.<small>5</small> seconds. Upon arrival, the stasis ends and he creates an explosion that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '200 / 275 / 350 / 425 / 500 (+ 175% AP)',
            valuesHTML:
              '200 / 275 / 350 / 425 / 500 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;175% AP)</span>',
          },
          {
            name: 'Heal:',
            values:
              '100 / 125 / 150 / 175 / 200 (+ 60% AP) (+ 3% per 1% of health lost in the past 4 seconds)',
            valuesHTML:
              '100 / 125 / 150 / 175 / 200 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span> (+ 3% <i>per <span style="color: #1F995C; white-space:normal">1% of health</span> lost in the past 4 seconds</i>)',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '200 / 275 / 350 / 425 / 500 (+ 175% AP)',
            damagetype: 'Magic',
            values: [200, 275, 350, 425, 500],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 275 / 350 / 425 / 500',
            children: [
              {
                values: 175,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 175% AP',
              },
            ],
          },
          {
            effectType: 'Heal',
            name: 'Heal:',
            raw: '100 / 125 / 150 / 175 / 200 (+ 60% AP) (+ 3% per 1% of health lost in the past 4 seconds)',
            healType: 'BonusHealth',
            values: [100, 125, 150, 175, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 125 / 150 / 175 / 200',
            children: [
              {
                values: 60,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 60% AP',
              },
              {
                values: 3,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: 'per 1',
                pre: '+ 3% per 1% of health lost in the past 4 seconds',
              },
            ],
          },
        ],
      },
      {
        description: 'Ekko is immune to all  displacements during Chronobreak.',
        descriptionHTML:
          '<i><b>Ekko</b> is immune to all <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">displacements</a></span> during Chronobreak</i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies / Self',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes:
      '* <b>Ekko</b> will attempt to basic attack the closest target after appearing at the cast location, but can do so quicker if he manually attack commands after the dash, except if <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ekko" data-ability="Phase Dive" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ekko/LoL#Phase_Dive" title="Phase Dive"><img alt="Phase Dive" src="/wiki/images/Ekko_Phase_Dive.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ekko/LoL#Phase_Dive" title="Ekko/LoL">Phase Dive</a></span></span> is primed.\n<ul><li>The <i>afterimage\'s</i> location will explode even if <b>Ekko\'s</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> is interrupted.</li>\n<li>The <i>afterimage</i> is always visible to <b>Ekko</b> and his allies. To enemies, the <i>afterimage</i> can only be seen if they <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of it.</li>\n<li>A <i>link</i> can also be seen between the <i>afterimage</i> and <b>Ekko</b> that traces along his path.\n<ul><li>The <i>link</i> follows the same visibility rules as the <i>afterimage</i>.</li>\n<li>Upon activation, <b>Ekko</b> travels full distance through the <i>link</i>, and thus will detonate <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ekko" data-ability="Parallel Convergence" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ekko/LoL#Parallel_Convergence" title="Parallel Convergence"><img alt="Parallel Convergence" src="/wiki/images/Ekko_Parallel_Convergence.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ekko/LoL#Parallel_Convergence" title="Ekko/LoL">Parallel Convergence</a></span></span> that the <i>link</i> passes through.</li></ul></li>\n<li><img alt="Quicksilver Sash item.png" src="/wiki/images/Quicksilver_Sash_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> <a href="/wiki/Named_item_effect#Quicksilver" title="Named item effect">Quicksilver</a> is placed on a 1-second <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> upon casting <i>Chronobreak</i>.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Ekko_Original_R_0.ogg   "One more time!"',
    video: 'Ekko RVideo.ogv',
  },
} satisfies { [skillName in string]: SkillData };
