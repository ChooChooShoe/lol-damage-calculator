import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Renata Glasc';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Renata_Glasc_Leverage.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Renata\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> are empowered to apply a mark that lasts 6 seconds, refreshes on subsequent hits and expires when attacking a new enemy. If the enemy was unmarked, the attack also deals <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> equal to <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="1;" data-finish="2;" data-bot_values="1;1.13;1.25;1.38;1.5;1.63;1.75;1.88;2" data-top_values="" data-bot_key="%">1% − 2% (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;2% per 100 AP)</span> <span style="color: #1F995C; white-space:normal">of the target\'s <b>maximum</b> health</span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 2:',
        raw: " If the enemy was unmarked, the attack also deals bonus magic damage equal to 1% − 2% (based on level) (+ 2% per 100 AP) of the target's maximum health",
        healType: 'OutgoingHeals',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of the target's maximum health",
        pre: 'If the enemy was unmarked, the attack also deals bonus magic damage equal to 1% − 2%',
        post: "of the target's maximum health",
        children: [
          {
            values: 2,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 2% per 100 AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'Allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions\'</a></span> damaging attacks and abilities against a marked target will consume the mark to deal <span style="color: #00B0F0; white-space:normal">additional <b>bonus</b> magic damage</span> equal to <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="1;" data-finish="2;" data-bot_values="1;1.13;1.25;1.38;1.5;1.63;1.75;1.88;2" data-top_values="" data-bot_key="%">1% − 2% (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;2% per 100 AP)</span> <span style="color: #1F995C; white-space:normal">of the target\'s <b>maximum</b> health</span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: "Allied  champions' damaging attacks and abilities against a marked target will consume the mark to deal additional bonus magic damage equal to 1% − 2% (based on level) (+ 2% per 100 AP) of the target's maximum health",
        healType: 'OutgoingHeals',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of the target's maximum health",
        pre: "Allied  champions' damaging attacks and abilities against a marked target will consume the mark to deal additional bonus magic damage equal to 1% − 2%",
        post: "of the target's maximum health",
        children: [
          {
            values: 2,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 2% per 100 AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Leverage\'s</i> damage is capped at 150 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Renata_Glasc_Handshake.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Renata</b> fires a hook in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">roots</a></span> them for 1 second, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span>.<br><br>If the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">root</a></span> was applied, <b>Renata</b> forms a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tether</a></span> between her and the target for the same duration, causing <b>Renata</b> to become unable to declare attacks and have her <span style="color: #F5EE99; white-space:normal">movement speed</span> <b>reduced</b> by <span style="color: #F5EE99; white-space:normal">30%</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '80 / 125 / 170 / 215 / 260 (+ 80% AP)',
        values: [80, 125, 170, 215, 260],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 125 / 170 / 215 / 260',
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
    description: '<i>Handshake</i> can be recast while the tether is active.',
    leveling: [],
  },
  {
    img: '/wiki/images/Renata_Glasc_Handshake_2.png',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Renata</b> breaks the tether to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock</a></span> the target in the target direction, though not through terrain, dealing the same damage to enemies they pass through. If the thrown target is a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, all secondary targets hit are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for 0.<small>5</small> seconds.',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Renata_Glasc_Bailout.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Renata</b> infuses herself or the target allied champion with a chemtech formula for 5 seconds, granting the target <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> in addition to <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> while they are facing nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy champions and minions, both increasing in effectiveness by 100% over the duration. <br><i>Bailout\'s</i> duration resets whenever the target scores a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against an enemy champion within 6 seconds of damaging them.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Attack Speed:',
        raw: '10 / 15 / 20 / 25 / 30% (+ 1% per 100 AP)',
        values: [10, 15, 20, 25, 30],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 15 / 20 / 25 / 30%',
        children: [
          {
            values: 1,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 1% per 100 AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Bonus Attack Speed:',
        raw: '20 / 30 / 40 / 50 / 60% (+ 2% per 100 AP)',
        values: [20, 30, 40, 50, 60],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 30 / 40 / 50 / 60%',
        children: [
          {
            values: 2,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 2% per 100 AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed:',
        raw: '10 / 12.5 / 15 / 17.5 / 20% (+ 1% per 100 AP)',
        values: [10, 12.5, 15, 17.5, 20],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 12.5 / 15 / 17.5 / 20%',
        children: [
          {
            values: 1,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 1% per 100 AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Bonus Movement Speed:',
        raw: '20 / 25 / 30 / 35 / 40% (+ 2% per 100 AP)',
        values: [20, 25, 30, 35, 40],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 25 / 30 / 35 / 40%',
        children: [
          {
            values: 2,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 2% per 100 AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'If the target takes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">fatal damage</a></span> while <i>Bailout</i> is active, they are restored to <span style="color: #1F995C; white-space:normal">100% of their <b>maximum</b> health</span> but suffer a <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal">true damage</span></span> burn equal to <span style="color: #1F995C; white-space:normal">10% of their <b>maximum</b> health</span> every <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.25 seconds, but rounded up to the next game tick.">0.<small>264</small> seconds</span> until they die from reaching 0 health, during which <i>Bailout\'s</i> duration resets every 0.<small>25</small> seconds. This effect may occur only <i>once</i> per application of <i>Bailout</i> while the target already has the buff and is not burning.<br>During this time, if they score a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against an enemy champion within 6 seconds of damaging them, the burn is stopped prematurely and they are set to <span style="color: #1F995C; white-space:normal">20% of their <b>maximum</b> health</span>.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Renata_Glasc_Loyalty_Program.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Renata</b> sends out chemtech rockets from either side of her that instantly strike targets around her. After <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.4 seconds, but rounded up to the next game tick.">0.<small>429</small> seconds</span> they converge and travel to the target location as a single missile, striking targets along its path and exploding upon reaching the target location.',
    leveling: [],
  },
  {
    description:
      '<b>Renata</b> and allies struck are granted a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 3 seconds and enemies struck are dealt <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 30% for 2 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '65 / 95 / 125 / 155 / 185 (+ 55% AP)',
        values: [65, 95, 125, 155, 185],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '65 / 95 / 125 / 155 / 185',
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
      {
        effectType: 'Unique',
        name: 'Shield Strength:',
        raw: '50 / 65 / 80 / 95 / 110 (+ 50% AP)',
        values: [50, 65, 80, 95, 110],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 65 / 80 / 95 / 110',
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
      '<i>Loyalty Program will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Renata_Glasc_Hostile_Takeover.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Renata</b> launches a cloud of potent chemicals that travels in the target direction, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of its surroundings. Enemy champions and minions hit become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Berserk"><a href="/wiki/Berserk" title="Berserk"><img alt="Berserk icon.png" src="/wiki/images/Berserk_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Berserk" class="mw-redirect" title="Berserk">berserk</a></span> for a duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Berserk Duration:',
        raw: '1.25 / 1.75 / 2.25',
        values: [1.25, 1.75, 2.25],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1.25 / 1.75 / 2.25',
      },
    ],
  },
  {
    description:
      '<i>Berserked</i> units gain <span style="color:orangered; white-space:normal">100% <b>bonus</b> attack speed</span> and 25% increased <a href="/wiki/Size" title="Size">size</a>. Within their targeting radius, they prioritize attacking the closest unit by the following categories in descending order:\n',
    leveling: [],
  },
];
export const RenataGlasc = { I, Q, W, E, R };
