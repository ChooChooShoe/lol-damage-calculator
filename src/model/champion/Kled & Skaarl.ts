import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Kled & Skaarl';
const I1: SubSkill[] = [
  {
    img: '/wiki/images/Kled_Skaarl_the_Cowardly_Lizard.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Kled</b> rides his semi-trusty mount, <b>Skaarl</b>. While <span class="template_sbc"><b>Mounted</b></span>, all damage dealt to the duo is suffered by <b>Skaarl</b>, who has <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-useformula="810+144*(x-1)*(0.7025+0.0175*(x-1))" data-bot_values="810;913.68;1022.4;1136.16;1254.96;1378.8;1507.68;1641.6;1780.56;1924.56;2073.6;2227.68;2386.8;2550.96;2720.16;2894.4;3073.68;3258" data-top_values="">810 − 3258 (based on level)</span></span> <span style="color: #1F995C; white-space:normal">(+&nbsp;100% <b>bonus</b> health)</span> <span style="color: #1F995C; white-space:normal"><b>base</b> health</span>. Effects based on percentage health consider <b>Kled</b> and <b>Skaarl\'s</b> combined <span style="color: #1F995C; white-space:normal"><b>maximum</b> health</span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 2:',
        raw: ' While Mounted, all damage dealt to the duo is suffered by Skaarl, who has 810 − 3258 (based on level) (+ 100% bonus health) base health',
        healType: 'BonusHealth',
        values: [
          810, 954, 1098, 1242, 1386, 1530, 1674, 1818, 1962, 2106, 2250, 2394,
          2538, 2682, 2826, 2970, 3114, 3258,
        ],
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'base_hp',
        unitsText: 'base health',
        pre: 'While Mounted, all damage dealt to the duo is suffered by Skaarl, who has 810 − 3258',
        post: 'base health',
        children: [
          {
            values: 100,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_hp',
            unitsText: 'bonus health',
            pre: '+ 100% bonus health',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Kled_Dismounted_Skaarl_the_Cowardly_Lizard.png',
    description:
      'Being reduced to <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;0 health</span></span> causes <b>Skaarl</b> to flee, forcing <b>Kled</b> to be <span class="template_sbc"><b>Dismounted</b></span>, with all damage in excess of <b>Skaarl\'s</b> health being ignored. Upon dismounting, <b>Kled</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the direction of the allied <a href="/wiki/Nexus" title="Nexus">Nexus</a>, though not through terrain, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleanses</a></span> himself of all <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span> and becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">unable to act</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">immune to crowd control</a></span> for 0.<small>5</small> seconds, during which he also reduces all incoming damage received by 100%.',
    leveling: [],
  },
  {
    description:
      'While <b>Kled</b> is <span class="template_sbc"><b>Dismounted</b></span>, his <span style="color: #1F995C; white-space:normal"><b>base</b> health</span> and <span style="color: #F5EE99; white-space:normal"><b>base</b> movement speed</span> are reduced, his <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>base</b> attack range</span> is increased, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Bear Trap on a Rope" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Bear_Trap_on_a_Rope" title="Bear Trap on a Rope"><img alt="Bear Trap on a Rope" src="/wiki/images/Kled_Bear_Trap_on_a_Rope.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Bear_Trap_on_a_Rope" title="Kled/LoL">Bear Trap on a Rope</a></span></span></i> is replaced with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Pocket Pistol" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Pocket_Pistol" title="Pocket Pistol"><img alt="Pocket Pistol" src="/wiki/images/Kled_Pocket_Pistol.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Pocket_Pistol" title="Kled/LoL">Pocket Pistol</a></span></span></i>, and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Jousting" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Jousting" title="Jousting"><img alt="Jousting" src="/wiki/images/Kled_Jousting.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Jousting" title="Kled/LoL">Jousting</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Chaaaaaaaarge!!!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Chaaaaaaaarge!!!" title="Chaaaaaaaarge!!!"><img alt="Chaaaaaaaarge!!!" src="/wiki/images/Kled_Chaaaaaaaarge%21%21%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Chaaaaaaaarge!!!" title="Kled/LoL">Chaaaaaaaarge!!!</a></span></span></i> become unusable.',
    leveling: [],
  },
];
const Q1: SubSkill[] = [
  {
    img: '/wiki/images/Kled_Bear_Trap_on_a_Rope.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Kled</b> throws a bear trap in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit, increased by 50% against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and small <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>. The bear trap collides against the first enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> hit, forming a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tether</a></span> between <b>Kled</b> and the target for 1.<small>75</small> seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '30 / 55 / 80 / 105 / 130 (+ 65% bonus AD)',
        values: [30, 55, 80, 105, 130],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 55 / 80 / 105 / 130',
        children: [
          {
            values: 65,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 65% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Minion and Small Monster Damage:',
        raw: '45 / 82.5 / 120 / 157.5 / 195 (+ 90% bonus AD)',
        values: [45, 82.5, 120, 157.5, 195],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '45 / 82.5 / 120 / 157.5 / 195',
        children: [
          {
            values: 90,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 90% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'The tether\'s radius shrinks over its duration, and if it is not broken before then, <b>Kled</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulls</a></span> the target <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">100</span> units toward him, deals <span style="color: #FF8C34; white-space:normal">physical damage</span>, inflicts <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Grievous wounds"><a href="/wiki/Grievous_Wounds" title="Grievous Wounds"><img alt="Grievous Wounds icon.png" src="/wiki/images/Grievous_Wounds_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Grievous_Wounds" title="Grievous Wounds">Grievous Wounds</a></span> for 5 seconds, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for 1.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '60 / 110 / 160 / 210 / 260 (+ 130% bonus AD)',
        values: [60, 110, 160, 210, 260],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 110 / 160 / 210 / 260',
        children: [
          {
            values: 130,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 130% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Physical Damage:',
        raw: '90 / 165 / 240 / 315 / 390 (+ 195% bonus AD)',
        values: [90, 165, 240, 315, 390],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '90 / 165 / 240 / 315 / 390',
        children: [
          {
            values: 195,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 195% bonus AD',
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
      '<i>Bear Trap on a Rope can be cast while <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Jousting" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Jousting" title="Jousting"><img alt="Jousting" src="/wiki/images/Kled_Jousting.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Jousting" title="Kled/LoL">Jousting</a></span></span>.</i>',
    leveling: [],
  },
];
const W1: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Kled</b> periodically gains <i>Violent Tendencies</i>, which starts expiring upon his next basic attack.',
    leveling: [],
  },
  {
    img: '/wiki/images/Kled_Violent_Tendencies.png',
    description:
      '<span class="template_sbc"><b>Violent Tendencies:</b></span> <b>Kled</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">150% <b>bonus</b> attack speed</span></span> on his next 4 basic attacks within 4 seconds. The fourth attack deals <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>, capped against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Bonus Physical Damage:',
        raw: "20 / 30 / 40 / 50 / 60 (+ 4.5 / 5 / 5.5 / 6 / 6.5% (+ 5% per 100 bonus AD) of target's maximum health)",
        healType: 'OutgoingHeals',
        values: [20, 30, 40, 50, 60],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 30 / 40 / 50 / 60',
        children: [
          {
            values: [4.5, 5, 5.5, 6, 6.5],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: '+ 4.5 / 5 / 5.5 / 6 / 6.5%',
            post: "of target's maximum health",
            children: [
              {
                values: 5,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'per 100 bonus AD',
                pre: '+ 5% per 100 bonus AD',
              },
            ],
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Capped Monster Damage:',
        raw: '220 / 230 / 240 / 250 / 260',
        values: [220, 230, 240, 250, 260],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '220 / 230 / 240 / 250 / 260',
      },
    ],
  },
  {
    description:
      '<i><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">Turrets</a></span> are only affected by the base damage.</i>',
    leveling: [],
  },
];
const E1: SubSkill[] = [
  {
    img: '/wiki/images/Kled_Jousting.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Skaarl</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction, though not through terrain, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies he passes through and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulling</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and small <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> hit towards them.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '35 / 60 / 85 / 110 / 135 (+ 65% bonus AD)',
        values: [35, 60, 85, 110, 135],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '35 / 60 / 85 / 110 / 135',
        children: [
          {
            values: 65,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 65% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'Upon hitting an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>, <b>Skaarl</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> a fixed <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="estimated">200</span>-units through them, marking them for 3 seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span>. After the dash ends, the duo gain <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">50% <b>bonus</b> movement speed</span></span> for 1 second. <i>Jousting</i> can be recast after 0.<small>5</small> seconds of the first dash ending while the target is marked.',
    leveling: [],
  },
  {
    img: '/wiki/images/Kled_Jousting_2.png',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Skaarl</b> consumes the mark to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> through the marked target, applying the same effects as the first cast.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Total Physical Damage:',
        raw: '70 / 120 / 170 / 220 / 270 (+ 130% bonus AD)',
        values: [70, 120, 170, 220, 270],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 120 / 170 / 220 / 270',
        children: [
          {
            values: 130,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 130% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'The mark will remain even if the target dies, and ends prematurely if the duo are too far away or <b>Kled</b> <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Dismounted Skaarl the Cowardly Lizard" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Dismounted_Skaarl_the_Cowardly_Lizard" title="dismounts"><img alt="dismounts" src="/wiki/images/Kled_Dismounted_Skaarl_the_Cowardly_Lizard.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Dismounted_Skaarl_the_Cowardly_Lizard" title="Kled/LoL">dismounts</a></span></span></i>.',
    leveling: [],
  },
  {
    description:
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Bear Trap on a Rope" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Bear_Trap_on_a_Rope" title="Bear Trap on a Rope"><img alt="Bear Trap on a Rope" src="/wiki/images/Kled_Bear_Trap_on_a_Rope.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Bear_Trap_on_a_Rope" title="Kled/LoL">Bear Trap on a Rope</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Chaaaaaaaarge!!!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Chaaaaaaaarge!!!" title="Chaaaaaaaarge!!!"><img alt="Chaaaaaaaarge!!!" src="/wiki/images/Kled_Chaaaaaaaarge%21%21%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Chaaaaaaaarge!!!" title="Kled/LoL">Chaaaaaaaarge!!!</a></span></span> can be cast during either of the dashes.</i>',
    leveling: [],
  },
];
const R1: SubSkill[] = [
  {
    img: '/wiki/images/Kled_Chaaaaaaaarge%21%21%21.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Kled</b> &amp; <b>Skaarl</b> charge toward the target location, automatically navigating terrain along the way, during which they\'re <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">immune to crowd control</a></span>. If the charge does not complete within 15 seconds, it will end prematurely. The charge is interrupted instantly if <b>Kled</b> <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Dismounted Skaarl the Cowardly Lizard" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Dismounted_Skaarl_the_Cowardly_Lizard" title="dismounts"><img alt="dismounts" src="/wiki/images/Kled_Dismounted_Skaarl_the_Cowardly_Lizard.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Dismounted_Skaarl_the_Cowardly_Lizard" title="Kled/LoL">dismounts</a></span></span></i> during it.',
    leveling: [],
  },
  {
    img: '/wiki/images/Kled_Chaaaaaaaarge%21%21%21_2.png',
    description:
      'While charging, the duo gain <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> and a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for every 0.<small>25</small> seconds of traveling, up to <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="after movement speed soft caps"><span style="color: #F5EE99; white-space:normal">950 <b>total</b> movement speed</span></span> over 3 seconds and <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_label="Shield Percentage" data-top_label="time traveling" data-displayformula="(\'\'\'maximum\'\'\' shield)/10*((time+0.25)/0.25). \'\'This is capped at 2.25 seconds of time active.\'\'" data-bot_values="10;20;30;40;50;60;70;80;90;100" data-top_values="0;0.25;0.5;0.75;1;1.25;1.5;1.75;2;2.25" data-bot_key="%">10% − 100% (based on time traveling)</span> of the <b>maximum</b> shield amount over 2.<small>25</small> seconds respectively. The shield lasts for 2 seconds upon finishing the charge. The duo trails a directional draft in their wake, lasting 9 seconds. Allied champions following the draft gain <i>Mr. Kled\'s Wild Ride</i>.',
    leveling: [
      {
        effectType: 'Shield',
        name: 'Line 2:',
        raw: '25 seconds of traveling, up to 950 total movement speed over 3 seconds and 10% − 100% (based on time traveling) of the maximum shield amount over 2',
        damagetype: 'None',
        shieldType: 'SelfShield',
        values: 25,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: 'of the maximum shield amount over 2',
        pre: '25 seconds of traveling, up to 950 total movement speed over 3 seconds and 10% − 100%',
        post: 'of the maximum shield amount over 2',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on time traveling',
            pre: 'based on time traveling',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Minimum Shield:',
        raw: '20 / 30 / 40 (+ 30% bonus AD)',
        values: [20, 30, 40],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 30 / 40',
        children: [
          {
            values: 30,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 30% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Shield:',
        raw: '200 / 300 / 400 (+ 300% bonus AD)',
        values: [200, 300, 400],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '200 / 300 / 400',
        children: [
          {
            values: 300,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 300% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      '<span class="template_sbc"><b>Mr. Kled\'s Wild Ride:</b></span> Gain <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="after movement speed soft caps"><span style="color: #F5EE99; white-space:normal">650 <b>total</b> movement speed</span></span>.',
    leveling: [],
  },
  {
    description:
      '<b>Skaarl</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> toward the first enemy champion in range, colliding with the first <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy champion in his path to deal <span style="color: #FF8C34; white-space:normal">physical damage</span>, increased by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_label="Damage Increase" data-top_label="time traveling" data-displayformula="8% increase per 0.16 seconds. \'\'This is capped at 4 seconds of time active.\'\'" data-bot_values="0;8;16;24;32;40;48;56;64;72;80;88;96;104;112;120;128;136;144;152;160;168;176;184;192;200" data-top_values="0;0.16;0.32;0.48;0.64;0.8;0.96;1.12;1.28;1.44;1.6;1.76;1.92;2.08;2.24;2.4;2.56;2.72;2.88;3.04;3.2;3.36;3.52;3.68;3.84;4" data-bot_key="%">0% − 200% (based on time traveling)</span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock them back</a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">100</span> units, though not through terrain.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Minimum Physical Damage:',
        raw: "4 / 5 / 6% (+ 4% per 100 bonus AD) of target's maximum health",
        healType: 'OutgoingHeals',
        values: [4, 5, 6],
        valuesIsPercent: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of target's maximum health",
        pre: '4 / 5 / 6%',
        post: "of target's maximum health",
        children: [
          {
            values: 4,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'per 100 bonus AD',
            pre: '+ 4% per 100 bonus AD',
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Maximum Physical Damage:',
        raw: "12 / 15 / 18% (+ 12% per 100 bonus AD) of target's maximum health",
        healType: 'OutgoingHeals',
        values: [12, 15, 18],
        valuesIsPercent: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of target's maximum health",
        pre: '12 / 15 / 18%',
        post: "of target's maximum health",
        children: [
          {
            values: 12,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'per 100 bonus AD',
            pre: '+ 12% per 100 bonus AD',
          },
        ],
      },
    ],
  },
];
const I2: SubSkill[] = [
  {
    img: '/wiki/images/Kled_Dismounted_Skaarl_the_Cowardly_Lizard.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Kled</b> is only vulnerable to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">death</a></span> while <span class="template_sbc"><b>Dismounted</b></span>. <b>Kled</b> has <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-useformula="410+84*(x-1)*(0.7025+0.0175*(x-1))" data-bot_values="410;470.48;533.9;600.26;669.56;741.8;816.98;895.1;976.16;1060.16;1147.1;1236.98;1329.8;1425.56;1524.26;1625.9;1730.48;1838" data-top_values="">410 − 1838 (based on level)</span> <b>base</b> health</span></span>, which is not improved by sources of <span style="color: #1F995C; white-space:normal"><b>bonus</b> health</span>, as well as reduced <span style="color: #F5EE99; white-space:normal"><b>base</b> movement speed</span> and increased <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;attack range</span>. Effects based on percentage health consider <b>Kled</b> and <b>Skaarl\'s</b> combined <span style="color: #1F995C; white-space:normal"><b>maximum</b> health</span>, meaning that a <span class="template_sbc"><b>Dismounted</b></span> <b>Kled</b> is always considered to be <i>low</i> health.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 2:',
        raw: ' Kled has  410 − 1838 (based on level) base health, which is not improved by sources of bonus health, as well as reduced base movement speed and increased  attack range',
        healType: 'BonusHealth',
        values: [
          410, 494, 578, 662, 746, 830, 914, 998, 1082, 1166, 1250, 1334, 1418,
          1502, 1586, 1670, 1754, 1838,
        ],
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'bonus_ad',
        unitsText:
          'base health, which is not improved by sources of bonus health, as well as reduced base movement speed and increased  attack range',
        pre: 'Kled has  410 − 1838',
        post: 'base health, which is not improved by sources of bonus health, as well as reduced base movement speed and increased  attack range',
      },
    ],
  },
  {
    description:
      '<b>Kled</b> gains <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#F5EE99;" data-start="100;" data-finish="185;" data-bot_values="100;105;110;115;120;125;130;135;140;145;150;155;160;165;170;175;180;185" data-top_values="">100 − 185 (based on level)</span> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> while moving towards <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> within <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="center to center">1000</span> units, but his basic attacks against them are reduced to <span style="color:orange; white-space:normal">80% AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span>. Additionally, he gains the ability to restore <b>Skaarl\'s</b> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Skaarl the Cowardly Lizard 3" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Skaarl_the_Cowardly_Lizard_3" title="Courage"><img alt="Courage" src="/wiki/images/Kled_Skaarl_the_Cowardly_Lizard_3.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Skaarl_the_Cowardly_Lizard_3" title="Kled/LoL"><span style="color: #AF1AAF; white-space:normal">Courage</span></a></span></span> to <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Skaarl the Cowardly Lizard" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Skaarl_the_Cowardly_Lizard" title="reunite"><img alt="reunite" src="/wiki/images/Kled_Skaarl_the_Cowardly_Lizard.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Skaarl_the_Cowardly_Lizard" title="Kled/LoL">reunite</a></span></span></i> again.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: 'Kled gains 100 − 185 (based on level)  bonus movement speed while moving towards  visible enemy  champions within 1000 units, but his basic attacks against them are reduced to 80% AD physical damage',
        increasedStat: 'bonus_ad',
        values: [
          100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165,
          170, 175, 180, 185,
        ],
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: '',
        unitsText:
          'bonus movement speed while moving towards  visible enemy  champions within 1000 units, but his basic attacks against them are reduced to 80% AD physical damage',
        pre: 'Kled gains 100 − 185',
        post: 'bonus movement speed while moving towards  visible enemy  champions within 1000 units, but his basic attacks against them are reduced to 80% AD physical damage',
      },
    ],
  },
  {
    img: '/wiki/images/Kled_Skaarl_the_Cowardly_Lizard_3.png',
    description:
      '<span class="template_sbc"><b>Innate - Courage:</b></span> <b>Kled</b> gains 15 <span style="color: #AF1AAF; white-space:normal">Courage</span> when <a href="/wiki/Basic_attack" title="Basic attack">basic attacking</a> an enemy champion, 20 <span style="color: #AF1AAF; white-space:normal">Courage</span> whenever he scores a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> within 3 seconds of damaging them, 4 <span style="color: #AF1AAF; white-space:normal">Courage</span> for <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span> kills, and 5 <span style="color: #AF1AAF; white-space:normal">Courage</span> when basic attacking a <a href="/wiki/Structures" class="mw-redirect" title="Structures">structure</a> or epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>. At 100 <span style="color: #AF1AAF; white-space:normal">Courage</span>, <b>Skaarl</b> returns with <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="45;1" data-finish="75;16" data-bot_values="45;55;65;75" data-top_values="1;6;11;16" data-bot_key="%">45 / 55 / 65 / 75% (based on level)</span> of <b>Skaarl\'s</b> <b>maximum</b> health</span> and <b>Kled</b> becomes <span class="template_sbc"><b>Mounted</b></span> after 0.<small>7</small> seconds. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Skaarl the Cowardly Lizard" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Skaarl_the_Cowardly_Lizard" title="Mounting up"><img alt="Mounting up" src="/wiki/images/Kled_Skaarl_the_Cowardly_Lizard.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Skaarl_the_Cowardly_Lizard" title="Kled/LoL"><i>Mounting up</i></a></span></span> resets the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldowns</span> of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Bear Trap on a Rope" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Bear_Trap_on_a_Rope" title="Bear Trap on a Rope"><img alt="Bear Trap on a Rope" src="/wiki/images/Kled_Bear_Trap_on_a_Rope.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Bear_Trap_on_a_Rope" title="Kled/LoL">Bear Trap on a Rope</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Jousting" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Jousting" title="Jousting"><img alt="Jousting" src="/wiki/images/Kled_Jousting.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Jousting" title="Kled/LoL">Jousting</a></span></span></i>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 2:',
        raw: " At 100 Courage, Skaarl returns with 45 / 55 / 65 / 75% (based on level) of Skaarl's maximum health and Kled becomes Mounted after 0",
        healType: 'BonusHealth',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'maximum_hp',
        unitsText:
          "of Skaarl's maximum health and Kled becomes Mounted after 0",
        pre: 'At 100 Courage, Skaarl returns with 45 / 55 / 65 / 75%',
        post: "of Skaarl's maximum health and Kled becomes Mounted after 0",
      },
    ],
  },
  {
    description:
      'While at the allied <a href="/wiki/Spawn" title="Spawn">fountain</a>, 25 <span style="color: #AF1AAF; white-space:normal">Courage</span> is generated every 0.<small>25</small> seconds. If reuniting outside of base, <b>Skaarl</b> gets <i>Frayed Nerves</i>, which prevents him from gaining <span style="color: #AF1AAF; white-space:normal">Courage</span> for 30 seconds.',
    leveling: [],
  },
  {
    description:
      'The current status of <b>Kled\'s</b> own health is preserved between subsequent dismounts. While <span class="template_sbc"><b>Mounted</b></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> and <span style="white-space:nowrap"><a href="/wiki/Health_regeneration" title="Health regeneration"><img alt="Health regeneration icon.png" src="/wiki/images/Health_regeneration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Health_regeneration" title="Health regeneration">health regeneration</a></span> will first replenish <b>Skaarl\'s</b> health and will only apply to <b>Kled\'s</b> health while <b>Skaarl</b> is at <i>full</i> health.',
    leveling: [],
  },
];
const Q2: SubSkill[] = [
  {
    img: '/wiki/images/Kled_Pocket_Pistol.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Kled</b> sprays a cone of five <i>pellets</i> in the target direction while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">recoiling</a></span> 300 units in the opposite direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '35 / 50 / 65 / 80 / 95 (+ 80% bonus AD)',
        values: [35, 50, 65, 80, 95],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '35 / 50 / 65 / 80 / 95',
        children: [
          {
            values: 80,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 80% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      '<b>Kled</b> periodically <a href="/wiki/Stock" class="mw-redirect" title="Stock">stocks</a> a <i>Pocket Pistol</i> charge, up to a maximum of 2. He will store charges even while <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Skaarl the Cowardly Lizard" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Skaarl_the_Cowardly_Lizard" title="mounted"><img alt="mounted" src="/wiki/images/Kled_Skaarl_the_Cowardly_Lizard.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Skaarl_the_Cowardly_Lizard" title="Kled/LoL">mounted</a></span></span>.',
    leveling: [],
  },
  {
    description:
      '<i>Pellets</i> collide with the first enemy champion they hit, and deal 20% damage per <i>pellet</i> beyond the first. Each <i>pellet</i> that hits an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> restores <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Skaarl the Cowardly Lizard 3" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Skaarl_the_Cowardly_Lizard_3" title="Courage"><img alt="Courage" src="/wiki/images/Kled_Skaarl_the_Cowardly_Lizard_3.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Skaarl_the_Cowardly_Lizard_3" title="Kled/LoL">Courage</a></span></span></i>, by 5 and 2.<small>5</small> respectively.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Reduced Damage:',
        raw: '7 / 10 / 13 / 16 / 19 (+ 16% bonus AD)',
        values: [7, 10, 13, 16, 19],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '7 / 10 / 13 / 16 / 19',
        children: [
          {
            values: 16,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 16% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Damage:',
        raw: '63 / 90 / 117 / 144 / 171 (+ 144% bonus AD)',
        values: [63, 90, 117, 144, 171],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '63 / 90 / 117 / 144 / 171',
        children: [
          {
            values: 144,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 144% bonus AD',
          },
        ],
      },
    ],
  },
];
const W2: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Kled</b> periodically gains <i>Violent Tendencies</i>, which starts expiring upon his next basic attack.',
    leveling: [],
  },
  {
    img: '/wiki/images/Kled_Violent_Tendencies.png',
    description:
      '<span class="template_sbc"><b>Violent Tendencies:</b></span> <b>Kled</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">150% <b>bonus</b> attack speed</span></span> on his next 4 basic attacks within 4 seconds. The fourth attack deals <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>, capped against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Bonus Physical Damage:',
        raw: "20 / 30 / 40 / 50 / 60 (+ 4.5 / 5 / 5.5 / 6 / 6.5% (+ 5% per 100 bonus AD) of target's maximum health)",
        healType: 'OutgoingHeals',
        values: [20, 30, 40, 50, 60],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 30 / 40 / 50 / 60',
        children: [
          {
            values: [4.5, 5, 5.5, 6, 6.5],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: '+ 4.5 / 5 / 5.5 / 6 / 6.5%',
            post: "of target's maximum health",
            children: [
              {
                values: 5,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'per 100 bonus AD',
                pre: '+ 5% per 100 bonus AD',
              },
            ],
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Capped Monster Damage:',
        raw: '220 / 230 / 240 / 250 / 260',
        values: [220, 230, 240, 250, 260],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '220 / 230 / 240 / 250 / 260',
      },
    ],
  },
  {
    description:
      '<i><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">Turrets</a></span> are only affected by the base damage.</i>',
    leveling: [],
  },
];
const E2: SubSkill[] = [
  {
    img: '/wiki/images/Kled_Unmounted_Jousting.png',
    description:
      'This ability is unusable while <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Dismounted Skaarl the Cowardly Lizard" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Dismounted_Skaarl_the_Cowardly_Lizard" title="unmounted"><img alt="unmounted" src="/wiki/images/Kled_Dismounted_Skaarl_the_Cowardly_Lizard.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Dismounted_Skaarl_the_Cowardly_Lizard" title="Kled/LoL">unmounted</a></span></span></i>.',
    leveling: [],
  },
];
const R2: SubSkill[] = [
  {
    img: '/wiki/images/Kled_Unmounted_Chaaaaaaaarge%21%21%21.png',
    description:
      'This ability is unusable while <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Dismounted Skaarl the Cowardly Lizard" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Dismounted_Skaarl_the_Cowardly_Lizard" title="unmounted"><img alt="unmounted" src="/wiki/images/Kled_Dismounted_Skaarl_the_Cowardly_Lizard.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Dismounted_Skaarl_the_Cowardly_Lizard" title="Kled/LoL">unmounted</a></span></span></i>.',
    leveling: [],
  },
];
export const KledSkaarl = { I1, Q1, W1, E1, R1, I2, Q2, W2, E2, R2 };
