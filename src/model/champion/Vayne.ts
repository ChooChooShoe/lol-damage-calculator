import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Vayne';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Vayne_Night_Hunter.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Vayne</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">30 <b>bonus</b> movement speed</span></span> while facing a nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy champion.<br><br>\n<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vayne" data-ability="Final Hour" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vayne/LoL#Final_Hour" title="Final Hour"><img alt="Final Hour" src="/wiki/images/Vayne_Final_Hour.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vayne/LoL#Final_Hour" title="Vayne/LoL">Final Hour</a></span></span> Bonus:</b></span> The <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span> is tripled to <span style="color: #F5EE99; white-space:normal">90</span>.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Vayne_Tumble.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Vayne</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> a fixed distance in the target direction, though not through terrain, and empowers her next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> within 7 seconds to deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Physical Damage:',
        raw: '60 / 65 / 70 / 75 / 80% AD',
        values: [60, 65, 70, 75, 80],
        valuesIsPercent: true,
        user: 'player',
        units: 'total_ad',
        unitsText: 'AD',
        pre: '60 / 65 / 70 / 75 / 80% AD',
      },
    ],
  },
  {
    description:
      '<i>Tumble <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Vayne\'s</b> basic attack timer.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Vayne_Silver_Bolts.png',
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Vayne\'s</b> <a href="/wiki/Basic_attacks" class="mw-redirect" title="Basic attacks">basic attacks</a> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vayne" data-ability="Condemn" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vayne/LoL#Condemn" title="Condemn"><img alt="Condemn" src="/wiki/images/Vayne_Condemn.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vayne/LoL#Condemn" title="Vayne/LoL">Condemn</a></span></span></i> apply a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Silver Bolts</i> for 3.<small>5</small> seconds, refreshing on subsequent applications, expiring upon attacking a new enemy, and stacking up to 3 times.',
    leveling: [],
  },
  {
    description:
      'The third stack consumes them all to deal <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal"><b>bonus</b> true damage</span></span>, with a minimum threshold. This damage is capped at 200 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Bonus True Damage:',
        raw: "4 / 6 / 8 / 10 / 12% of target's maximum health",
        healType: 'OutgoingHeals',
        values: [4, 6, 8, 10, 12],
        valuesIsPercent: true,
        user: 'target',
        units: 'maximum_hp',
        unitsText: "of target's maximum health",
        pre: "4 / 6 / 8 / 10 / 12% of target's maximum health",
      },
      {
        effectType: 'Unique',
        name: 'Minimum Bonus Damage:',
        raw: '50 / 65 / 80 / 95 / 110',
        values: [50, 65, 80, 95, 110],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 65 / 80 / 95 / 110',
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Vayne_Condemn.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Vayne</b> fires a heavy bolt at the target enemy that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks them back</a></span> 475 units, though not through terrain.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '50 / 85 / 120 / 155 / 190 (+ 50% bonus AD)',
        values: [50, 85, 120, 155, 190],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 85 / 120 / 155 / 190',
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
      'If the target collides with <a href="/wiki/Terrain" title="Terrain">terrain</a>, they take <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike physical icon.png" src="/wiki/images/Critical_strike_physical_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike"><span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span></span> and become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for 1.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Physical Damage:',
        raw: '75 / 127.5 / 180 / 232.5 / 285 (+ 75% bonus AD)',
        values: [75, 127.5, 180, 232.5, 285],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '75 / 127.5 / 180 / 232.5 / 285',
        children: [
          {
            values: 75,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 75% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Physical Damage:',
        raw: '125 / 212.5 / 300 / 387.5 / 475 (+ 125% bonus AD)',
        values: [125, 212.5, 300, 387.5, 475],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '125 / 212.5 / 300 / 387.5 / 475',
        children: [
          {
            values: 125,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 125% bonus AD',
          },
        ],
      },
    ],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Vayne_Final_Hour.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Vayne</b> equips her crossbow, gaining <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span> and tripling <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vayne" data-ability="Night Hunter" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vayne/LoL#Night_Hunter" title="Night Hunter\'s"><img alt="Night Hunter\'s" src="/wiki/images/Vayne_Night_Hunter.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vayne/LoL#Night_Hunter" title="Vayne/LoL">Night Hunter\'s</a></span></span></i> <b>bonus</b> for a duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Duration:',
        raw: '8 / 10 / 12',
        values: [8, 10, 12],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '8 / 10 / 12',
      },
      {
        effectType: 'Unique',
        name: 'Bonus Attack Damage:',
        raw: '25 / 40 / 55',
        values: [25, 40, 55],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 40 / 55',
      },
    ],
  },
  {
    description:
      'Additionally, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vayne" data-ability="Tumble" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vayne/LoL#Tumble" title="Tumble"><img alt="Tumble" src="/wiki/images/Vayne_Tumble.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vayne/LoL#Tumble" title="Vayne/LoL">Tumble</a></span></span></i> becomes empowered with a reduced <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>, and grants <b>Vayne</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisibility"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisibility</a></span> for 1 second. Attacking or casting <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vayne" data-ability="Condemn" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vayne/LoL#Condemn" title="Condemn"><img alt="Condemn" src="/wiki/images/Vayne_Condemn.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vayne/LoL#Condemn" title="Vayne/LoL">Condemn</a></span></span></i> breaks the stealth immediately.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Tumble Cooldown Reduction:',
        raw: '30 / 40 / 50%',
        values: [30, 40, 50],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 40 / 50%',
      },
    ],
  },
  {
    description:
      'Scoring an enemy champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> within 3 seconds of damaging them will extend <i>Final Hour\'s</i> duration by 4 seconds, up to its original duration.',
    leveling: [],
  },
];
export const Vayne = { I, Q, W, E, R };
