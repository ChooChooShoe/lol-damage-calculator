import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Maokai';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Maokai_Sap_Magic.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Periodically, <b>Maokai</b> empowers his next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> him for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="4;9;14;19;24;29;34" data-top_values="1;6;9;11;13;15;17">4 − 34 (based on level)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="4% at level 1, then +1.33% at level 6, then +1.33% at level 9, then +1.34% at level 11, then +1.33% at level 13, then +1.33% at level 15, then +1.34% at level 17" data-bot_values="4;5.33;6.66;8;9.33;10.66;12" data-top_values="1;6;9;11;13;15;17" data-bot_key="%">4% − 12% (based on level)</span> <b>maximum</b> health)</span> after a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Reduced by attack speed.">0.<small>25</small></span>-second delay.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: ' Periodically, Maokai empowers his next basic attack to have an  uncancellable windup and  heal him for 4 − 34 (based on level) (+ 4% − 12% (based on level) maximum health) after a 0',
        healType: 'BonusHealth',
        values: [
          4, 5.76, 7.53, 9.29, 11.06, 12.82, 14.59, 16.35, 18.12, 19.88, 21.65,
          23.41, 25.18, 26.94, 28.71, 30.47, 32.24, 34,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'after a 0',
        pre: 'Periodically, Maokai empowers his next basic attack to have an  uncancellable windup and  heal him for 4 − 34',
        post: 'after a 0',
        children: [
          {
            values: [],
            valuesIsPercent: true,
            valuesIsBasedOnLevel: true,
            user: 'player',
            units: 'maximum_hp',
            unitsText: 'maximum health',
            pre: '+ 4% − 12%',
            post: 'maximum health',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Maokai_Sap_Magic_2.png',
    description:
      'Each time <b>Maokai</b> casts an <a href="/wiki/Champion_ability" title="Champion ability">ability</a>, hits at least one enemy champion or epic monster with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Maokai" data-ability="Sapling Toss" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Maokai/LoL#Sapling_Toss" title="Sapling Toss"><img alt="Sapling Toss" src="/wiki/images/Maokai_Sapling_Toss.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Maokai/LoL#Sapling_Toss" title="Maokai/LoL">Sapling Toss</a></span></span></i>, or is struck by an enemy\'s ability, <i>Sap Magic\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is reduced by 4 seconds, modified to 1.<small>5</small> if he is hit by a large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster\'s</a></span> basic attack or ability.',
    leveling: [],
  },
  {
    description:
      '<i>Sap Magic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Maokai\'s</b> basic attack timer, and will not trigger if he is <span style="color: #1F995C; white-space:normal">above 95% <b>maximum</b> <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;health</span></span>.</i>',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Maokai_Bramble_Smash.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Maokai</b> sends a shockwave in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 99% for 0.<small>25</small> seconds. <i>Bramble Smash</i> deals <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Magic Damage:',
        raw: "70 / 120 / 170 / 220 / 270 (+ 2 / 2.25 / 2.5 / 2.75 / 3% of the target's maximum health) (+ 40% AP)",
        healType: 'OutgoingHeals',
        values: [70, 120, 170, 220, 270],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 120 / 170 / 220 / 270',
        children: [
          {
            values: [2, 2.25, 2.5, 2.75, 3],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of the target's maximum health",
            pre: "+ 2 / 2.25 / 2.5 / 2.75 / 3% of the target's maximum health",
          },
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
        name: 'Bonus Monster Damage:',
        raw: '100 / 120 / 140 / 160 / 180',
        values: [100, 120, 140, 160, 180],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '100 / 120 / 140 / 160 / 180',
      },
      {
        effectType: 'Heal',
        name: 'Total Monster Damage:',
        raw: "170 / 240 / 310 / 380 / 450 (+ 2 / 2.25 / 2.5 / 2.75 / 3% of the target's maximum health) (+ 40% AP)",
        healType: 'OutgoingHeals',
        values: [170, 240, 310, 380, 450],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '170 / 240 / 310 / 380 / 450',
        children: [
          {
            values: [2, 2.25, 2.5, 2.75, 3],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of the target's maximum health",
            pre: "+ 2 / 2.25 / 2.5 / 2.75 / 3% of the target's maximum health",
          },
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
    description:
      'Enemies near <b>Maokai</b> are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for 0.<small>5</small> seconds and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked back</a></span> up to 300 units based on their proximity to him.',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Maokai_Twisted_Advance.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Maokai</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target enemy while being <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>. Upon arrival, he deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">roots</a></span> them for a duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '60 / 85 / 110 / 135 / 160 (+ 40% AP)',
        values: [60, 85, 110, 135, 160],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 85 / 110 / 135 / 160',
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
        name: 'Root Duration:',
        raw: '1 / 1.1 / 1.2 / 1.3 / 1.4',
        values: [1, 1.1, 1.2, 1.3, 1.4],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1 / 1.1 / 1.2 / 1.3 / 1.4',
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Maokai_Sapling_Toss.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Maokai</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">flings</a></span> a <i>Sapling</i> to the target location, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="can see across terrain from the center, but not into brush">area</span>.',
    leveling: [],
  },
  {
    description:
      'Once landed, a <i>Sapling</i> remains stationary for 30 seconds or until it reacts to the first nearby visible enemy, chasing them for up to 2.<small>5</small> seconds. The <i>Sapling</i> explodes upon colliding with an enemy or when it expires, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies, capped at 300 against non-champions, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 45% for 2 seconds.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Magic Damage:',
        raw: '55 / 80 / 105 / 130 / 155 (+ 5% bonus health) (+ 35% AP)',
        healType: 'BonusHealth',
        values: [55, 80, 105, 130, 155],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '55 / 80 / 105 / 130 / 155',
        children: [
          {
            values: 5,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_hp',
            unitsText: 'bonus health',
            pre: '+ 5% bonus health',
          },
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
      'A <i>Sapling</i> placed in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Brush"><a href="/wiki/Brush" title="Brush"><img alt="Brushmaker.png" src="/wiki/images/Ivern_Brushmaker.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Brush" title="Brush">brush</a></span> instead lasts 30 <span style="color: #1F995C; white-space:normal">(+&nbsp;2.<small>5</small>% <b>bonus</b> health)</span> seconds, deals double damage to struck non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span> targets over 3 bursts, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 45% <span style="color: #1F995C; white-space:normal">(+&nbsp;0.<small>9</small>% per 100 <b>bonus</b> health)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;4% per 100 AP)</span>, as well as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">reveals</a></span> them for 3 seconds. The first instance of damage is dealt instantly and the second and third instances occur each 0.<small>75</small> seconds thereafter. The <b>total</b> damage is capped at 600 against non-champions.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 3:',
        raw: '9% per 100 bonus health) (+ 4% per 100 AP), as well as  reveals them for 3 seconds',
        healType: 'BonusHealth',
        values: 9,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: ', as well as  reveals them for 3 seconds',
        pre: '9% per 100 bonus health',
        post: ', as well as  reveals them for 3 seconds',
        children: [
          {
            values: 4,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 4% per 100 AP',
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Total Enhanced Damage:',
        raw: '110 / 160 / 210 / 260 / 310 (+ 10% bonus health) (+ 70% AP)',
        healType: 'BonusHealth',
        values: [110, 160, 210, 260, 310],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '110 / 160 / 210 / 260 / 310',
        children: [
          {
            values: 10,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_hp',
            unitsText: 'bonus health',
            pre: '+ 10% bonus health',
          },
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
      {
        effectType: 'Heal',
        name: 'Enhanced Damage Per Tick:',
        raw: '36.67 / 53.33 / 70 / 86.67 / 103.33 (+ 3.33% bonus health) (+ 23.33% AP)',
        healType: 'BonusHealth',
        values: [36.67, 53.33, 70, 86.67, 103.33],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '36.67 / 53.33 / 70 / 86.67 / 103.33',
        children: [
          {
            values: 3.33,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_hp',
            unitsText: 'bonus health',
            pre: '+ 3.33% bonus health',
          },
          {
            values: 23.33,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 23.33% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>See <a href="/wiki/Maokai/LoL#Pets" title="Maokai/LoL">Pets</a> for more details about Saplings.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Maokai_Nature%27s_Grasp.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Maokai</b> summons a colossal wall of five thorny brambles that slowly advances in the target direction, accelerating over time, each stopping when they collide with an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>. Hitting at least one enemy champion grants <b>Maokai</b> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> decaying over 2 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed:',
        raw: '40 / 50 / 60%',
        values: [40, 50, 60],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 50 / 60%',
      },
    ],
  },
  {
    description:
      'Each bramble deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">roots</a></span> them for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="distance traveled" data-displayformula="Starts at 0.8 seconds and increases up to 2.6 seconds over 1000 units traveled" data-bot_values="0.8;0.98;1.16;1.34;1.52;1.7;1.88;2.06;2.24;2.42;2.6" data-top_values="0;100;200;300;400;500;600;700;800;900;1000">0.<small>8</small> − 2.<small>6</small> (based on distance traveled)</span> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: '8 − 2',
        values: [8, 2],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '8 − 2',
      },
      {
        effectType: 'Unique',
        name: 'Line 3:',
        raw: '6 (based on distance traveled) seconds',
        values: 6,
        user: 'none',
        units: '',
        unitsText: 'seconds',
        pre: '6',
        post: 'seconds',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on distance traveled',
            pre: 'based on distance traveled',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '150 / 225 / 300 (+ 75% AP)',
        values: [150, 225, 300],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 225 / 300',
        children: [
          {
            values: 75,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 75% AP',
          },
        ],
      },
    ],
  },
];
export const Maokai = { I, Q, W, E, R };
