import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name = 'Aatrox';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Aatrox_Deathbringer_Stance.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Periodically, <b>Aatrox</b> empowers his next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> to gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50 <b>bonus</b> range</span> and deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> equal to <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="4;" data-finish="10;" data-bot_values="4;4.35;4.71;5.06;5.41;5.76;6.12;6.47;6.82;7.18;7.53;7.88;8.24;8.59;8.94;9.29;9.65;10" data-top_values="" data-bot_key="%">4% − 10% (based on level)</span> of the target\'s <b>maximum</b> health</span>, capped at 100 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.<br> <b>Aatrox</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> for 80% of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after modifiers">post-mitigation <b>bonus</b> damage</span> dealt, reduced to 25% against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: " Periodically, Aatrox empowers his next basic attack to gain  50 bonus range and deal bonus physical damage equal to 4% − 10% (based on level) of the target's maximum health, capped at 100 against  monsters",
        healType: 'PhysicalVamp',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'total_ap',
        unitsText:
          "of the target's maximum health, capped at 100 against  monsters",
        pre: 'Periodically, Aatrox empowers his next basic attack to gain  50 bonus range and deal bonus physical damage equal to 4% − 10%',
        post: "of the target's maximum health, capped at 100 against  monsters",
      },
    ],
  },
  {
    description:
      'Whenever <b>Aatrox</b> hits at least one enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> with a basic attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> or an <a href="/wiki/Champion_ability" title="Champion ability">ability</a>, the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> of <i>Deathbringer Stance</i> is reduced by 2 seconds, modified to 4 if he hits with the <span style="color: #E34D4C; white-space:normal">Sweetspot</span> of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aatrox" data-ability="The Darkin Blade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aatrox/LoL#The_Darkin_Blade" title="The Darkin Blade"><img alt="The Darkin Blade" src="/wiki/images/Aatrox_The_Darkin_Blade.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aatrox/LoL#The_Darkin_Blade" title="Aatrox/LoL">The Darkin Blade</a></span></span></i>.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Aatrox</b> can activate <i>The Darkin Blade</i> three times before the ability goes on cooldown, with a 1 second <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Unaffected by ability haste">static cooldown</span> between casts. If <b>Aatrox</b> does not recast the ability within 4 seconds of the previous cast, it goes on cooldown.',
    leveling: [],
  },
  {
    description:
      '<b>Aatrox</b> performs a strike with his greatsword for each of the three casts, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit within an area. Enemies hit within a <span style="color: #E34D4C; white-space:normal">Sweetspot</span> of the area take <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike physical icon.png" src="/wiki/images/Critical_strike_physical_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">60% <b>bonus</b> damage</span> and also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked up</a></span> for 0.<small>25</small> seconds. Each subsequent cast increases <i>The Darkin Blade\'s</i> damage by 25%.',
    leveling: [],
  },
  {
    img: '/wiki/images/Aatrox_The_Darkin_Blade.png',
    description:
      '<span class="template_sbc"><b>First Cast:</b></span> <b>Aatrox\'s</b> first strike affects a 625&nbsp;×&nbsp;180-unit rectangular area in the target direction, with him centered on the back line and the <span style="color: #E34D4C; white-space:normal">Sweetspot</span> at the farthest edge.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'First Cast Damage:',
        raw: '10 / 30 / 50 / 70 / 90 (+ 60 / 65 / 70 / 75 / 80% AD)',
        values: [10, 30, 50, 70, 90],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 30 / 50 / 70 / 90',
        children: [
          {
            values: [60, 65, 70, 75, 80],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 60 / 65 / 70 / 75 / 80% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'First Sweetspot Damage:',
        raw: '16 / 48 / 80 / 112 / 144 (+ 96 / 104 / 112 / 120 / 128% AD)',
        values: [16, 48, 80, 112, 144],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '16 / 48 / 80 / 112 / 144',
        children: [
          {
            values: [96, 104, 112, 120, 128],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 96 / 104 / 112 / 120 / 128% AD',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Aatrox_The_Darkin_Blade_2.png',
    description:
      '<span class="template_sbc"><b>Second Cast:</b></span> <b>Aatrox\'s</b> second strike affects a trapezoidal area in the target direction, with the <span style="color: #E34D4C; white-space:normal">Sweetspot</span> at the farthest edge. The hitbox begins 100-units behind <b>Aatrox</b> and extends 475-units in front of him, measuring between 300 and 500-units wide from behind to in front.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Second Cast Damage:',
        raw: '12.5 / 37.5 / 62.5 / 87.5 / 112.5 (+ 75 / 81.25 / 87.5 / 93.75 / 100% AD)',
        values: [12.5, 37.5, 62.5, 87.5, 112.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '12.5 / 37.5 / 62.5 / 87.5 / 112.5',
        children: [
          {
            values: [75, 81.25, 87.5, 93.75, 100],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 75 / 81.25 / 87.5 / 93.75 / 100% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Second Sweetspot Damage:',
        raw: '20 / 60 / 100 / 140 / 180 (+ 120 / 130 / 140 / 150 / 160% AD)',
        values: [20, 60, 100, 140, 180],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 60 / 100 / 140 / 180',
        children: [
          {
            values: [120, 130, 140, 150, 160],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 120 / 130 / 140 / 150 / 160% AD',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Aatrox_The_Darkin_Blade_3.png',
    description:
      '<span class="template_sbc"><b>Third Cast:</b></span> <b>Aatrox\'s</b> third strike affects a 300-radius circular area centered on a target location that is 200 units in front of him, with a 180-radius <span style="color: #E34D4C; white-space:normal">Sweetspot</span> within.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Third Cast Damage:',
        raw: '15 / 45 / 75 / 105 / 135 (+ 90 / 97.5 / 105 / 112.5 / 120% AD)',
        values: [15, 45, 75, 105, 135],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 45 / 75 / 105 / 135',
        children: [
          {
            values: [90, 97.5, 105, 112.5, 120],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 90 / 97.5 / 105 / 112.5 / 120% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Third Sweetspot Damage:',
        raw: '24 / 72 / 120 / 168 / 216 (+ 144 / 156 / 168 / 180 / 192% AD)',
        values: [24, 72, 120, 168, 216],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '24 / 72 / 120 / 168 / 216',
        children: [
          {
            values: [144, 156, 168, 180, 192],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 144 / 156 / 168 / 180 / 192% AD',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>The Darkin Blade</i> deals 55% damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>, and the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock up</a></span> duration from hitting the <span style="color: #E34D4C; white-space:normal">Sweetspot</span> is doubled to 0.<small>5</small> seconds against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Maximum Non-Minion Damage:',
        raw: '60 / 180 / 300 / 420 / 540 (+ 360 / 390 / 420 / 450 / 480% AD)',
        values: [60, 180, 300, 420, 540],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 180 / 300 / 420 / 540',
        children: [
          {
            values: [360, 390, 420, 450, 480],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 360 / 390 / 420 / 450 / 480% AD',
          },
        ],
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Aatrox_Infernal_Chains.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Aatrox</b> sends a chain in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy hit, doubled against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 25% for 1.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '30 / 40 / 50 / 60 / 70 (+ 40% AD)',
        values: [30, 40, 50, 60, 70],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 40 / 50 / 60 / 70',
        children: [
          {
            values: 40,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 40% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Minion Damage:',
        raw: '60 / 80 / 100 / 120 / 140 (+ 80% AD)',
        values: [60, 80, 100, 120, 140],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 80 / 100 / 120 / 140',
        children: [
          {
            values: 80,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 80% AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'If this hits an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>, a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tether</a></span> is formed between the target and the ground beneath them for 1.<small>5</small> seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span>.',
    leveling: [],
  },
  {
    description:
      'If the tether is not broken by the end of its duration, the target is dealt the same <span style="color: #FF8C34; white-space:normal">physical damage</span> again and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulled</a></span> to the center of the area.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Total Damage:',
        raw: '60 / 80 / 100 / 120 / 140 (+ 80% AD)',
        values: [60, 80, 100, 120, 140],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 80 / 100 / 120 / 140',
        children: [
          {
            values: 80,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 80% AD',
          },
        ],
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Aatrox</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> for a portion of the non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Persistent damage"><a href="/wiki/Damage" title="Damage"><img alt="Blaze.png" src="/wiki/images/Brand_Blaze.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">persistent</a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after modifiers">post-mitigation damage</span> he deals against enemy champions, increased during <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Aatrox" data-ability="World Ender" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aatrox/LoL#World_Ender" title="World Ender"><img alt="World Ender" src="/wiki/images/Aatrox_World_Ender.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aatrox/LoL#World_Ender" title="Aatrox/LoL">World Ender</a></span></span></i>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Healing:',
        raw: '18 / 19.5 / 21 / 22.5 / 24%',
        values: [18, 19.5, 21, 22.5, 24],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '18 / 19.5 / 21 / 22.5 / 24%',
      },
      {
        effectType: 'Unique',
        name: ' World Ender Increased Healing:',
        raw: '20 / 24 / 28 / 32 / 36%',
        values: [20, 24, 28, 32, 36],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 24 / 28 / 32 / 36%',
      },
    ],
  },
  {
    img: '/wiki/images/Aatrox_Umbral_Dash.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Aatrox</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction.',
    leveling: [],
  },
  {
    description:
      '<i>Umbral Dash <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Aatrox\'s</b> basic attack timer and can be cast during his other abilities without cancelling them and vice versa.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Aatrox_World_Ender.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Aatrox</b> unleashes his true form for 10 seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fear"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">fearing</a></span> nearby enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> for 3 seconds, during which they are gradually <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by up to 99% over the duration. He also gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosting"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span> and <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> that decays by 10% of the <b>current bonus</b> every 0.<small>25</small> seconds, lasting until <i>World Ender</i> has ended.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed:',
        raw: '50 / 65 / 80%',
        values: [50, 65, 80],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 65 / 80%',
      },
    ],
  },
  {
    description:
      'Whenever <b>Aatrox</b> scores a champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span>, he extends the duration by 5 seconds and becomes unleashed again.',
    leveling: [],
  },
  {
    description:
      'During <i>World Ender</i>, <b>Aatrox</b> gains <span style="color:orange; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack damage</span></span> and 5% increased <a href="/wiki/Size" title="Size">size</a>, and receives increased <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">self-healing</a></span> from all sources.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Attack Damage:',
        raw: '20 / 30 / 40% AD',
        values: [20, 30, 40],
        valuesIsPercent: true,
        user: 'player',
        units: 'total_ad',
        unitsText: 'AD',
        pre: '20 / 30 / 40% AD',
      },
      {
        effectType: 'Unique',
        name: 'Increased Healing:',
        raw: '25 / 35 / 45%',
        values: [25, 35, 45],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 35 / 45%',
      },
    ],
  },
];
export const Aatrox = { I, Q, W, E, R };
