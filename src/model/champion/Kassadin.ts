import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Kassadin';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Kassadin_Void_Stone.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Kassadin</b> is permanently <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and takes 10% reduced <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Magic damage"><a href="/wiki/Magic_damage" title="Magic damage"><img alt="Magic damage.png" src="/wiki/images/Magic_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Magic_damage" title="Magic damage"><span style="color: #00B0F0; white-space:normal">magic damage</span></a></span>.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Kassadin_Null_Sphere.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Kassadin</b> fires an orb of void energy at the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Disrupt"><a href="/wiki/Types_of_Crowd_Control#Disrupt" title="Types of Crowd Control#Disrupt"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Disrupt" title="Types of Crowd Control">disrupts</a></span> their ongoing <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '65 / 95 / 125 / 155 / 185 (+ 70% AP)',
        values: [65, 95, 125, 155, 185],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '65 / 95 / 125 / 155 / 185',
        children: [
          {
            values: 70,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 70% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'He also gains a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> that absorbs <span style="color: #00B0F0; white-space:normal">magic damage</span> for 1.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Shield Strength:',
        raw: '80 / 110 / 140 / 170 / 200 (+ 30% AP)',
        values: [80, 110, 140, 170, 200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 110 / 140 / 170 / 200',
        children: [
          {
            values: 30,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 30% AP',
          },
        ],
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Kassadin\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> deal <span style="color: #00B0F0; white-space:normal">20</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;10% AP)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: " Kassadin's basic attacks deal 20 (+ 10% AP) bonus magic damage  on-hit",
        damagetype: 'Magic',
        values: 2,
        user: 'none',
        units: '',
        unitsText: 'bonus magic damage  on-hit',
        pre: "Kassadin's basic attacks deal 20",
        post: 'bonus magic damage  on-hit',
        children: [
          {
            values: 10,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 10% AP',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Kassadin_Nether_Blade.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Kassadin</b> empowers his next basic attack within 5 seconds to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>, gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50 <b>bonus</b> range</span>, deal increased <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>, and restore <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana</span></span>, with the restoration amount quintupled against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Increased Bonus Magic Damage:',
        raw: '50 / 75 / 100 / 125 / 150 (+ 80% AP)',
        values: [50, 75, 100, 125, 150],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 75 / 100 / 125 / 150',
        children: [
          {
            values: 80,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 80% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Mana Restored:',
        raw: '4 / 4.5 / 5 / 5.5 / 6% of missing mana',
        values: [4, 4.5, 5, 5.5, 6],
        valuesIsPercent: true,
        user: 'player',
        units: 'total_mana',
        unitsText: 'of missing mana',
        pre: '4 / 4.5 / 5 / 5.5 / 6% of missing mana',
      },
      {
        effectType: 'Unique',
        name: 'Mana Restored Against Champions:',
        raw: '20 / 22.5 / 25 / 27.5 / 30% of missing mana',
        values: [20, 22.5, 25, 27.5, 30],
        valuesIsPercent: true,
        user: 'player',
        units: 'total_mana',
        unitsText: 'of missing mana',
        pre: '20 / 22.5 / 25 / 27.5 / 30% of missing mana',
      },
    ],
  },
  {
    description:
      '<i>Nether Blade <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Kassadin\'s</b> basic attack timer.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> Each time <b>Kassadin</b> or a nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> casts an <a href="/wiki/Champion_ability" title="Champion ability">ability</a>, <i>Force Pulse\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> is reduced by 0.<small>75</small> seconds.',
    leveling: [],
  },
  {
    img: '/wiki/images/Kassadin_Force_Pulse.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Kassadin</b> emits a pulse of void energy in a cone in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for 1 second.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '60 / 90 / 120 / 150 / 180 (+ 85% AP)',
        values: [60, 90, 120, 150, 180],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 90 / 120 / 150 / 180',
        children: [
          {
            values: 85,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 85% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Slow:',
        raw: '50 / 60 / 70 / 80 / 90%',
        values: [50, 60, 70, 80, 90],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 60 / 70 / 80 / 90%',
      },
    ],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Kassadin_Riftwalk.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Kassadin</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blinks"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> toward the target location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to all nearby enemies upon arrival. He then gains a stack of <i>Riftwalk</i> for 5 seconds, refreshing on subsequent casts and stacking up to 4 times.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 90 / 110 (+ 40% AP) (+ 2% maximum mana)',
        values: [70, 90, 110],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 90 / 110',
        children: [
          {
            values: 40,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 40% AP',
          },
          {
            values: 2,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_mana',
            unitsText: 'maximum mana',
            pre: '+ 2% maximum mana',
          },
        ],
      },
    ],
  },
  {
    description:
      '<span class="template_sbc"><b>Riftwalk:</b></span> For each stack, <i>Riftwalk</i> deals <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> at an increased <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana cost</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Damage Per Stack:',
        raw: '35 / 45 / 55 (+ 10% AP) (+ 1% maximum mana)',
        values: [35, 45, 55],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '35 / 45 / 55',
        children: [
          {
            values: 10,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 10% AP',
          },
          {
            values: 1,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_mana',
            unitsText: 'maximum mana',
            pre: '+ 1% maximum mana',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Bonus Damage:',
        raw: '140 / 180 / 220 (+ 40% AP) (+ 4% maximum mana)',
        values: [140, 180, 220],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '140 / 180 / 220',
        children: [
          {
            values: 40,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 40% AP',
          },
          {
            values: 4,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_mana',
            unitsText: 'maximum mana',
            pre: '+ 4% maximum mana',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Magic Damage:',
        raw: '210 / 270 / 330 (+ 80% AP) (+ 6% maximum mana)',
        values: [210, 270, 330],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '210 / 270 / 330',
        children: [
          {
            values: 80,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 80% AP',
          },
          {
            values: 6,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_mana',
            unitsText: 'maximum mana',
            pre: '+ 6% maximum mana',
          },
        ],
      },
    ],
  },
  {
    description: '<i>Riftwalk will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
export const Kassadin = { I, Q, W, E, R };
