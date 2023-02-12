import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Zoe';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Zoe_More_Sparkles%21.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> After casting an <a href="/wiki/Champion_ability" title="Champion ability">ability</a>, <b>Zoe</b> empowers her next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zoe" data-ability="Spell Thief" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zoe/LoL#Spell_Thief" title="Spell Thief"><img alt="Spell Thief" src="/wiki/images/Zoe_Spell_Thief.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zoe/LoL#Spell_Thief" title="Zoe/LoL">Spell Thief</a></span></span></i> bolt within 5 seconds to become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">non-projectile</a></span> and deal <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#00B0F0;" data-bot_values="16;20;24;28;32;36;42;48;54;60;66;74;82;90;100;110;120;130" data-top_values="">16 − 130 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;20% AP)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: ' After casting an ability, Zoe empowers her next basic attack or  Spell Thief bolt within 5 seconds to become  non-projectile and deal 16 − 130 (based on level) (+ 20% AP) bonus magic damage',
        damagetype: 'Magic',
        values: [
          16, 22.71, 29.41, 36.12, 42.82, 49.53, 56.24, 62.94, 69.65, 76.35,
          83.06, 89.76, 96.47, 103.18, 109.88, 116.59, 123.29, 130,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'bonus magic damage',
        pre: 'After casting an ability, Zoe empowers her next basic attack or  Spell Thief bolt within 5 seconds to become  non-projectile and deal 16 − 130',
        post: 'bonus magic damage',
        children: [
          {
            values: 20,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 20% AP',
          },
        ],
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Zoe_Paddle_Star.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Zoe</b> shoots a star in the target direction that explodes upon hitting an enemy, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies hit, reduced to 80% for enemies hit beyond the first. The <b>total</b> damage is increased by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="distance traveled" data-bot_values="0;25;50;75;100;125;150" data-top_values="800;950;1350;1650;1950;2250;2550" data-bot_key="%">0% − 150% (based on distance traveled)</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Minimum Magic Damage:',
        raw: '7 − 50 (based on level) (+ 50 / 80 / 110 / 140 / 170) (+ 60% AP)',
        values: [
          7, 9.53, 12.06, 14.59, 17.12, 19.65, 22.18, 24.71, 27.24, 29.76,
          32.29, 34.82, 37.35, 39.88, 42.41, 44.94, 47.47, 50,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '7 − 50',
        children: [
          {
            values: [50, 80, 110, 140, 170],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '+ 50 / 80 / 110 / 140 / 170',
          },
          {
            values: 60,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 60% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Magic Damage:',
        raw: '17.5 − 125 (based on level) (+ 125 / 200 / 275 / 350 / 425) (+ 150% AP)',
        values: [
          17.5, 23.82, 30.15, 36.47, 42.79, 49.12, 55.44, 61.76, 68.09, 74.41,
          80.74, 87.06, 93.38, 99.71, 106.03, 112.35, 118.68, 125,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '17.5 − 125',
        children: [
          {
            values: [125, 200, 275, 350, 425],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '+ 125 / 200 / 275 / 350 / 425',
          },
          {
            values: 150,
            valuesIsPercent: true,
            user: 'player',
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
      'The star lingers at maximum range for 1 second, during which <i>Paddle Star</i> can be recast after 0.<small>25</small> seconds in the duration.',
    leveling: [],
  },
  {
    img: '/wiki/images/Zoe_Paddle_Star_2.png',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Zoe</b> redirects the star in the target path, empowering it with increased speed and radius, and resetting its damage modifier on cast. The redirected star can travel until it reaches 800-units outbound from <b>Zoe</b>.',
    leveling: [],
  },
  {
    description:
      '<i>Paddle Star\'s recast can be used while affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast-inhibiting crowd control"><a href="/wiki/Crowd_control#Disrupting" title="Crowd control#Disrupting"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disrupting" title="Crowd control">cast-inhibiting crowd control</a></span>.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Zoe_Spell_Thief_2.png',
    description:
      '<span class="template_sbc"><b>Passive - Wheeeee:</b></span> Whenever <b>Zoe</b> casts <i>Spell Thief</i> or a summoner spell, she gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for a duration, and summons three bolts that orbit her for the next 10 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed:',
        raw: '30 / 40 / 50 / 60 / 70%',
        values: [30, 40, 50, 60, 70],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 40 / 50 / 60 / 70%',
      },
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed Duration:',
        raw: '2 / 2.25 / 2.5 / 2.75 / 3',
        values: [2, 2.25, 2.5, 2.75, 3],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '2 / 2.25 / 2.5 / 2.75 / 3',
      },
    ],
  },
  {
    description:
      'If <b>Zoe</b> is not affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Complete crowd control"><a href="/wiki/Crowd_control#Loss_of_Control" title="Crowd control#Loss of Control"><img alt="Suppression icon.png" src="/wiki/images/Suppression_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Loss_of_Control" title="Crowd control">complete crowd control</a></span>, she shoots one bolt at a time at the nearest non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sleep"><a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control#Sleep"><img alt="Sleep icon.png" src="/wiki/images/Sleep_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control">sleeping</a></span> enemy in range, prioritizing her attack target, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> with each bolt.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage Per Bolt:',
        raw: '25 / 35 / 45 / 55 / 65 (+ 13.3% AP)',
        values: [25, 35, 45, 55, 65],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 35 / 45 / 55 / 65',
        children: [
          {
            values: 13.3,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 13.3% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '75 / 105 / 135 / 165 / 195 (+ 40% AP)',
        values: [75, 105, 135, 165, 195],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '75 / 105 / 135 / 165 / 195',
        children: [
          {
            values: 40,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 40% AP',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Zoe_Spell_Thief.png',
    description:
      '<span class="template_sbc"><b>Passive:</b></span> Whenever an enemy champion casts a <span class="inline-image label-after" style="display:inline;white-space:pre;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Summoner_spell" title="summoner spell"><img alt="summoner spell" src="/wiki/images/Summoner_spell_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Summoner_spell" title="Summoner spell">summoner spell</a></span></span> or <span class="inline-image label-after" style="display:inline;white-space:pre;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Active_ability_items" title="item active"><img alt="item active" src="/wiki/images/Active_ability_item_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Active_ability_items" title="Active ability items">item active</a></span></span>, they drop the corresponding <i><span style="color:yellow; white-space:normal"><span class="inline-image label-after" style="display:inline;white-space:pre;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><img alt="Spell Shard" src="/wiki/images/Spell_Thief_Minimap.png" decoding="async" loading="lazy" title="Spell Shard" width="20" height="20" class="lazyload"></span> <span style="white-space:normal;">Spell Shard</span></span></span></i> onto the ground that grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> over a 100-radius area and remains for 40 seconds. Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> have a 10% chance to spawn with a random <i><span style="color:yellow; white-space:normal">Spell Shard</span></i> that drops and remains for 20 seconds if <b>Zoe</b> kills them. Allied champions that kill them will cause the orb to drop only if <b>Zoe</b> is nearby.',
    leveling: [],
  },
  {
    description:
      '<b>Zoe</b> can collect a <i><span style="color:yellow; white-space:normal">Spell Shard</span></i> for 60 seconds, and replace it by moving directly onto another <i><span style="color:yellow; white-space:normal">Spell Shard</span></i>.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Zoe</b> mimics the active of the collected <i><span style="color:yellow; white-space:normal">Spell Shard</span></i>.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Zoe_Sleepy_Trouble_Bubble.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Zoe</b> kicks a bubble in the target direction that bursts upon the first enemy hit, otherwise lingering at maximum range over 1 second, then becoming a trap for 5 seconds that bursts upon contact with an enemy. The bubble can move through <a href="/wiki/Terrain" title="Terrain">terrain</a> only once, but travels the entire distance as <b>bonus</b> range, and will fall short if it would enter terrain again.',
    leveling: [],
  },
  {
    description:
      'The burst deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the target and inflicts them with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Drowsy"><a href="/wiki/Types_of_Crowd_Control#Drowsy" title="Types of Crowd Control#Drowsy"><img alt="Drowsy icon.png" src="/wiki/images/Drowsy_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Drowsy" title="Types of Crowd Control">drowsy</a></span> for 1.<small>4</small> seconds, which gradually <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them until they fall <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sleep"><a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control#Sleep"><img alt="Sleep icon.png" src="/wiki/images/Sleep_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control">asleep</a></span> for 2.<small>25</small> seconds. While the target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sleep"><a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control#Sleep"><img alt="Sleep icon.png" src="/wiki/images/Sleep_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control">asleep</a></span>, they are inflicted with <span style="white-space:nowrap"><a href="/wiki/Magic_penetration" title="Magic penetration"><img alt="Magic penetration icon.png" src="/wiki/images/Magic_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">magic resistance reduction</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 110 / 150 / 190 / 230 (+ 45% AP)',
        values: [70, 110, 150, 190, 230],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 110 / 150 / 190 / 230',
        children: [
          {
            values: 45,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 45% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Slow:',
        raw: '10 / 15 / 20 / 25 / 30%',
        values: [10, 15, 20, 25, 30],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 15 / 20 / 25 / 30%',
      },
      {
        effectType: 'Unique',
        name: 'Magic Resistance Reduction:',
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
  {
    description:
      'The next instance of non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Persistent damage"><a href="/wiki/Damage" title="Damage"><img alt="Blaze.png" src="/wiki/images/Brand_Blaze.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">persistent</a></span> damage that the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sleep"><a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control#Sleep"><img alt="Sleep icon.png" src="/wiki/images/Sleep_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control">sleeping</a></span> target takes from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Structures"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">structures</a></span> consumes the debuff to deal <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal"><b>bonus</b> true damage</span></span> equal to the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after modifiers">post-mitigation damage</span> dealt, capped at <i>Sleepy Trouble Bubble\'s</i> damage. The <b>bonus</b> damage is dealt before the triggering damage.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Damage Cap:',
        raw: '70 / 110 / 150 / 190 / 230 (+ 45% AP)',
        values: [70, 110, 150, 190, 230],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 110 / 150 / 190 / 230',
        children: [
          {
            values: 45,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 45% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Mixed Damage:',
        raw: '140 / 220 / 300 / 380 / 460 (+ 90% AP)',
        values: [140, 220, 300, 380, 460],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '140 / 220 / 300 / 380 / 460',
        children: [
          {
            values: 90,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 90% AP',
          },
        ],
      },
    ],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Zoe_Portal_Jump.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Zoe</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blinks"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> in the target direction and remains there for 0.<small>75</small> seconds, during which she sets her <span style="color: #F5EE99; white-space:normal">movement speed</span> to a <span style="color: #F5EE99; white-space:normal">static 0</span> and has <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Unobstructed vision"><a href="/wiki/Sight#Unobstructed_vision" title="Sight#Unobstructed vision"><img alt="Stealth Ward icon.png" src="/wiki/images/Stealth_Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#Unobstructed_vision" title="Sight">unobstructed vision</a></span>. Afterwards, she <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blinks"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> back to her casting position.',
    leveling: [],
  },
  {
    description:
      '<i>Portal Jump <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Zoe\'s</b> basic attack timer. <b>Zoe</b> is unable to basic attack and cast her abilities and movement spells for 0.<small>75</small> seconds after casting </i>Portal Jump<i> and for 0.<small>5</small> seconds after blinking back.</i>',
    leveling: [],
  },
];
export const Zoe = { I, Q, W, E, R };
