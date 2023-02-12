import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Illaoi';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Illaoi_Prophet_of_an_Elder_God.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Periodically, <b>Illaoi</b> spawns a <span style="color: #56C456; white-space:normal">Tentacle</span> on the nearest terrain perpendicular to her location, if no other Tentacles are already nearby it. Tentacles fully spawn after a 2 second delay and are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> in the meantime. <br> <span style="color: #56C456; white-space:normal">Tentacles</span> are commanded to attack by <b>Illaoi\'s</b> <a href="/wiki/Champion_ability" title="Champion ability">abilities</a>.',
    leveling: [],
  },
  {
    description:
      '<i>See <a href="/wiki/Illaoi/LoL#Pets" title="Illaoi/LoL">Pets</a> for more details about <span style="color: #56C456; white-space:normal">Tentacles</span>.</i>',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <span style="color: #56C456; white-space:normal">Tentacle</span> damage is increased.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Damage Increase:',
        raw: '10 / 15 / 20 / 25 / 30%',
        values: [10, 15, 20, 25, 30],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 15 / 20 / 25 / 30%',
      },
    ],
  },
  {
    img: '/wiki/images/Illaoi_Tentacle_Smash.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Illaoi</b> slams down a <span style="color: #56C456; white-space:normal">Tentacle</span> in the target direction.',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Illaoi_Harsh_Lesson.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Illaoi\'s</b> next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> within 6 seconds gains <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;225 <b>bonus</b> range</span> and causes her to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leap</a></span> to the target\'s location if they\'re beyond her normal basic attack range.',
    leveling: [],
  },
  {
    description:
      'The attack deals <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>, with a minimum threshold, and capped at 300 against non-champions, and commands all <span style="color: #56C456; white-space:normal">Tentacles</span> in range to attack the target. The minimum <b>bonus</b> damage can also be applied against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Bonus Physical Damage:',
        raw: "3 / 3.5 / 4 / 4.5 / 5% (+ 4% per 100 AD) of target's maximum health",
        healType: 'OutgoingHeals',
        values: [3, 3.5, 4, 4.5, 5],
        valuesIsPercent: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of target's maximum health",
        pre: '3 / 3.5 / 4 / 4.5 / 5%',
        post: "of target's maximum health",
        children: [
          {
            values: 4,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'per 100 AD',
            pre: '+ 4% per 100 AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Minimum Physical Damage:',
        raw: '20 / 30 / 40 / 50 / 60',
        values: [20, 30, 40, 50, 60],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 30 / 40 / 50 / 60',
      },
    ],
  },
  {
    description:
      '<i>Harsh Lesson</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Illaoi\'s</b> basic attack timer.',
    leveling: [],
  },
  {
    description:
      '<i>Harsh Lesson can be activated during <b>Illaoi\'s</b> other abilities, other than while <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Illaoi" data-ability="Test of Spirit" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Illaoi/LoL#Test_of_Spirit" title="pulling"><img alt="pulling" src="/wiki/images/Illaoi_Test_of_Spirit.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Illaoi/LoL#Test_of_Spirit" title="Illaoi/LoL">pulling</a></span></span> a <span style="color: #AF1AAF; white-space:normal">Spirit</span>.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Illaoi_Test_of_Spirit.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Illaoi</b> launches a tendril in the target direction that stops at the first enemy hit, pulling their <span style="color: #AF1AAF; white-space:normal">Spirit</span> out in front of <b>Illaoi</b> over 0.<small>75</small> seconds if they\'re a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>. The target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tethered</a></span> to the <span style="color: #AF1AAF; white-space:normal">Spirit</span> for <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Timer starts when the target gets hit">7 seconds</span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> them in addition to granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area around them while the tether remains.',
    leveling: [],
  },
  {
    description:
      'The <span style="color: #AF1AAF; white-space:normal">Spirit</span> spawns with the target\'s <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><b>current</b> health</span></span>, <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">magic resist</span></span>, and redirects a portion of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated before modifiers">pre-mitigation damage</span> received to the tethered champion.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Damage Transmission:',
        raw: '25 / 30 / 35 / 40 / 45% (+ 8% per 100 AD)',
        values: [25, 30, 35, 40, 45],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 30 / 35 / 40 / 45%',
        children: [
          {
            values: 8,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'per 100 AD',
            pre: '+ 8% per 100 AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'When the <span style="color: #AF1AAF; white-space:normal">Spirit</span> is killed or the target leaves tether range, the tether is severed, marking the target as a <span style="color: #E34D4C; white-space:normal">Vessel</span> for 10 seconds and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 80% for 1.<small>5</small> seconds once the tether returns back to them. Each <span style="color: #56C456; white-space:normal">Tentacle</span> autonomously attacks the closest <span style="color: #E34D4C; white-space:normal">Vessel</span> or <span style="color: #AF1AAF; white-space:normal">Spirit</span>, prioritizing the latter, once every <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="5.5-1 every 6 lvls. Cooldown starts upon starting the slam" data-bot_values="5.5;4.5;3.5" data-top_values="1;7;13">5.<small>5</small> / 4.<small>5</small> / 3.<small>5</small> (based on level)</span> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 4:',
        raw: '5 / 4',
        values: [5, 4],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5 / 4',
      },
      {
        effectType: 'Unique',
        name: 'Line 5:',
        raw: '5 / 3',
        values: [5, 3],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5 / 3',
      },
      {
        effectType: 'Unique',
        name: 'Line 6:',
        raw: '5 (based on level) seconds',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'seconds',
        pre: '5',
        post: 'seconds',
      },
    ],
  },
  {
    img: '/wiki/images/Illaoi_Vessel.png',
    description:
      'Enemies made a <span style="color: #E34D4C; white-space:normal">Vessel</span> also spawn a <span style="color: #56C456; white-space:normal">Tentacle</span> near themselves every <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="5;1" data-finish="3;13" data-bot_values="5;4;3" data-top_values="1;7;13">5 / 4 / 3 (based on level)</span> seconds. <span style="color: #56C456; white-space:normal">Tentacles</span> can spawn 250 units closer to each other than when spawned by <b>Illaoi</b>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 1:',
        raw: 'Enemies made a Vessel also spawn a Tentacle near themselves every 5 / 4 / 3 (based on level) seconds',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'seconds',
        pre: 'Enemies made a Vessel also spawn a Tentacle near themselves every 5 / 4 / 3',
        post: 'seconds',
      },
    ],
  },
  {
    description:
      '<i><b>Illaoi</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">unable to act</a></span> while firing the projectile and while the target\'s <span style="color: #AF1AAF; white-space:normal">Spirit</span> is being pulled.</i><br>\n',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Illaoi_Leap_of_Faith.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Illaoi</b> gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span> and leaps into the air for the cast time. She then slams her idol into the ground, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies. For each enemy champion hit, a <span style="color: #56C456; white-space:normal">Tentacle</span> is summoned for 8 seconds (up to a maximum of 6 summons).',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 3:',
        raw: ' For each enemy champion hit, a Tentacle is summoned for 8 seconds (up to a maximum of 6 summons)',
        values: 8,
        user: 'none',
        units: '',
        unitsText:
          'each enemy champion hit, a Tentacle is summoned for 8 seconds',
        pre: 'For each enemy champion hit, a Tentacle is summoned for 8 seconds',
        children: [
          {
            values: 6,
            user: 'none',
            units: '',
            unitsText: 'to a maximum of 6 summons',
            pre: 'up to a maximum of 6 summons',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '150 / 250 / 350 (+ 50% bonus AD)',
        values: [150, 250, 350],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 250 / 350',
        children: [
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
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
      'For the duration, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Illaoi" data-ability="Harsh Lesson" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Illaoi/LoL#Harsh_Lesson" title="Harsh Lesson\'s"><img alt="Harsh Lesson\'s" src="/wiki/images/Illaoi_Harsh_Lesson.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Illaoi/LoL#Harsh_Lesson" title="Illaoi/LoL">Harsh Lesson\'s</a></span></span></i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is halved, all <span style="color: #56C456; white-space:normal">Tentacles</span> awakened by <b>Illaoi</b> are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, will not show their hitboxes, nor go dormant, and will take half the amount of time to make an attack. This however does not affect the <span style="color: #56C456; white-space:normal">Tentacle</span> attack from <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Illaoi" data-ability="Tentacle Smash" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Illaoi/LoL#Tentacle_Smash" title="Tentacle Smash"><img alt="Tentacle Smash" src="/wiki/images/Illaoi_Tentacle_Smash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Illaoi/LoL#Tentacle_Smash" title="Illaoi/LoL">Tentacle Smash</a></span></span></i>.',
    leveling: [],
  },
];
export const Illaoi = { I, Q, W, E, R };
