import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Fizz';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Fizz_Nimble_Fighter.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Fizz</b> gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosting"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span> and takes 4 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;1% AP)</span> reduced damage from every instance of damage, up to a maximum of 50% reduction.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: ' Fizz gains  ghosting and takes 4 (+ 1% AP) reduced damage from every instance of damage, up to a maximum of 50% reduction',
        values: 4,
        user: 'none',
        units: '',
        unitsText:
          'reduced damage from every instance of damage, up to a maximum of 50% reduction',
        pre: 'Fizz gains  ghosting and takes 4',
        post: 'reduced damage from every instance of damage, up to a maximum of 50% reduction',
        children: [
          {
            values: 1,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 1% AP',
          },
        ],
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Fizz_Urchin_Strike.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Fizz</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> a fixed distance in the direction of the target enemy. If they are in range upon arrival, he deals <span style="color: #00B0F0; white-space:normal">magic damage</span> plus <span style="color:orange; white-space:normal">100% AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> and applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects at 100% effectiveness.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '10 / 25 / 40 / 55 / 70 (+ 55% AP)',
        values: [10, 25, 40, 55, 70],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 25 / 40 / 55 / 70',
        children: [
          {
            values: 55,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 55% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fizz" data-ability="Seastone Trident" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fizz/LoL#Seastone_Trident" title="Seastone Trident"><img alt="Seastone Trident" src="/wiki/images/Fizz_Seastone_Trident.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fizz/LoL#Seastone_Trident" title="Fizz/LoL">Seastone Trident</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fizz" data-ability="Chum the Waters" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fizz/LoL#Chum_the_Waters" title="Chum the Waters"><img alt="Chum the Waters" src="/wiki/images/Fizz_Chum_the_Waters.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fizz/LoL#Chum_the_Waters" title="Fizz/LoL">Chum the Waters</a></span></span> can be cast during the dash.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Fizz\'s</b> basic attacks rend enemies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>5</small> seconds over 3 seconds, refreshing <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '20 / 30 / 40 / 50 / 60 (+ 40% AP)',
        values: [20, 30, 40, 50, 60],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 30 / 40 / 50 / 60',
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
      {
        effectType: 'Unique',
        name: 'Magic Damage per Tick:',
        raw: '3.33 / 5 / 6.67 / 8.33 / 10 (+ 6.67% AP)',
        values: [3.33, 5, 6.67, 8.33, 10],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '3.33 / 5 / 6.67 / 8.33 / 10',
        children: [
          {
            values: 6.67,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 6.67% AP',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Fizz_Seastone_Trident.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Fizz</b> empowers his next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> within 4 seconds to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>, gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50 <b>bonus</b> range</span>, and deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Magic Damage:',
        raw: '50 / 70 / 90 / 110 / 130 (+ 50% AP)',
        values: [50, 70, 90, 110, 130],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 70 / 90 / 110 / 130',
        children: [
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 50% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'If <i>Seastone Trident</i> kills its target, the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is reduced to 1 second and <b>Fizz</b> restores <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana</span></span>. Otherwise, if the target is not killed, <b>Fizz\'s</b> basic attacks deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> for the next 5 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Mana Restored:',
        raw: '20 / 28 / 36 / 44 / 52',
        values: [20, 28, 36, 44, 52],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 28 / 36 / 44 / 52',
      },
      {
        effectType: 'Unique',
        name: 'Bonus Magic Damage On-Hit:',
        raw: '10 / 15 / 20 / 25 / 30 (+ 35% AP)',
        values: [10, 15, 20, 25, 30],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 15 / 20 / 25 / 30',
        children: [
          {
            values: 35,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 35% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Seastone Trident <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Fizz\'s</b> basic attack timer.</i>',
    leveling: [],
  },
];
const E1: SubSkill[] = [
  {
    img: '/wiki/images/Fizz_Playful.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Fizz</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location while becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, balancing on his trident for 0.<small>75</small> seconds, during which he can cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fizz" data-ability="Trickster" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fizz/LoL#Trickster" title="Trickster"><img alt="Trickster" src="/wiki/images/Fizz_Trickster.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fizz/LoL#Trickster" title="Fizz/LoL">Trickster</a></span></span></i> after 0.<small>15</small> seconds into the duration.',
    leveling: [],
  },
  {
    description:
      'He then begins to hop off of his trident over 0.<small>5</small> seconds, afterwards becoming targetable and landing to create a splash that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to all nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for 2 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 120 / 170 / 220 / 270 (+ 90% AP)',
        values: [70, 120, 170, 220, 270],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 120 / 170 / 220 / 270',
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
    description:
      '<i>While hopping off of the trident, <b>Fizz</b> may input movement commands to direct his landing. Playful will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const E2: SubSkill[] = [
  {
    img: '/wiki/images/Fizz_Trickster.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Fizz</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location, hopping down and splashing onto the ground prematurely upon arrival to deal the same damage in a smaller radius but not applying the slow.',
    leveling: [],
  },
  {
    description: '<i>Trickster will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Fizz_Chum_the_Waters.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Fizz</b> throws down a lure at the target location that attracts a shark, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area before it emerges to chomp at the lure after 2 seconds, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them back</a></span>, though not through terrain, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them for 2 seconds. The further the lure travels in its initial flight, the larger the shark that is attracted; increasing <i>Chum the Waters\' </i> damage, slow, eruption radius and knock back distance.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Guppy (&lt;455):</b></span> 40% slow, 200 eruption radius and 150 unit knock back distance.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Guppy Damage:',
        raw: '150 / 250 / 350 (+ 80% AP)',
        values: [150, 250, 350],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 250 / 350',
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
    ],
  },
  {
    description:
      '<span class="template_sbc"><b>Chomper (455-910):</b></span> 60% slow, 325 eruption radius and 250 unit knock back distance.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Chomper Damage:',
        raw: '225 / 325 / 425 (+ 100% AP)',
        values: [225, 325, 425],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '225 / 325 / 425',
        children: [
          {
            values: 100,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 100% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<span class="template_sbc"><b>Gigalodon (&gt;910):</b></span> 80% slow, 450 eruption radius and 350 unit knock back distance.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Gigalodon Damage:',
        raw: '300 / 400 / 500 (+ 120% AP)',
        values: [300, 400, 500],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '300 / 400 / 500',
        children: [
          {
            values: 120,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 120% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> can intercept the lure while it is in flight, which attaches to them upon contact and causes the shark to emerge at their position after the same delay. The lure\'s holder is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span> for the duration and afterwards is impacted by the eruption but is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked up</a></span> for 1 second instead of knocked back.',
    leveling: [],
  },
  {
    description:
      '<i>Chum the Waters will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
export const Fizz = { I, Q, W, E1, E2, R };
