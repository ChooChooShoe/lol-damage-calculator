import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Gragas';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Gragas_Happy_Hour.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Periodically, after casting an <a href="/wiki/Champion_ability" title="Champion ability">ability</a>, <b>Gragas</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> himself for <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;6.<small>5</small>% of his <b>maximum</b> health</span></span>.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Gragas_Barrel_Roll.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Gragas</b> rolls a cask to the target location, remaining there for 4 seconds, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area, and fermenting over 2 seconds to increase its <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> effectiveness, up to a maximum of 150%. <i>Barrel Roll</i> can be recast at any time within its duration after the cask has fully travelled, and does so automatically after its duration ends.',
    leveling: [],
  },
  {
    img: '/wiki/images/Gragas_Barrel_Roll_2.png',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Gragas</b> detonates the cask, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies, reduced by 30% against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them for 2 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Minimum Magic Damage:',
        raw: '80 / 120 / 160 / 200 / 240 (+ 80% AP)',
        values: [80, 120, 160, 200, 240],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 120 / 160 / 200 / 240',
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
        name: 'Maximum Magic Damage:',
        raw: '120 / 180 / 240 / 300 / 360 (+ 120% AP)',
        values: [120, 180, 240, 300, 360],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '120 / 180 / 240 / 300 / 360',
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
      {
        effectType: 'Unique',
        name: 'Minimum Minion Damage:',
        raw: '56 / 84 / 112 / 140 / 168 (+ 56% AP)',
        values: [56, 84, 112, 140, 168],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '56 / 84 / 112 / 140 / 168',
        children: [
          {
            values: 56,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 56% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Minion Damage:',
        raw: '84 / 126 / 168 / 210 / 252 (+ 84% AP)',
        values: [84, 126, 168, 210, 252],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '84 / 126 / 168 / 210 / 252',
        children: [
          {
            values: 84,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 84% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Minimum Slow:',
        raw: '40 / 45 / 50 / 55 / 60%',
        values: [40, 45, 50, 55, 60],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 45 / 50 / 55 / 60%',
      },
      {
        effectType: 'Unique',
        name: 'Maximum Slow:',
        raw: '60 / 67.5 / 75 / 82.5 / 90%',
        values: [60, 67.5, 75, 82.5, 90],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 67.5 / 75 / 82.5 / 90%',
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Gragas_Drunken_Rage.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Gragas</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for 0.<small>75</small> seconds, drinking out of his brew, and gains damage reduction for 2.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Damage Reduction:',
        raw: '10 / 12 / 14 / 16 / 18% (+ 4% per 100 AP)',
        values: [10, 12, 14, 16, 18],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 12 / 14 / 16 / 18%',
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
    ],
  },
  {
    img: '/wiki/images/Gragas_Drunken_Rage_2.png',
    description:
      'Upon completing the channel, <b>Gragas</b> empowers his next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> within 5 seconds to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>, gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50 <b>bonus</b> range</span> and deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> to the target and nearby enemies, capped at 300 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Bonus Magic Damage:',
        raw: "20 / 50 / 80 / 110 / 140 (+ 7% of target's maximum health) (+ 70% AP)",
        healType: 'OutgoingHeals',
        values: [20, 50, 80, 110, 140],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 50 / 80 / 110 / 140',
        children: [
          {
            values: 7,
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: "+ 7% of target's maximum health",
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
        effectType: 'Unique',
        name: 'Capped Monster Damage:',
        raw: '320 / 350 / 380 / 410 / 440 (+ 70% AP)',
        values: [320, 350, 380, 410, 440],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '320 / 350 / 380 / 410 / 440',
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
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Gragas_Body_Slam.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Gragas</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">charges</a></span> in the target direction and stops upon colliding with an enemy, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to all nearby enemies, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them back</a></span>, though not through terrain, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 1 second.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '80 / 125 / 170 / 215 / 260 (+ 60% AP)',
        values: [80, 125, 170, 215, 260],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 125 / 170 / 215 / 260',
        children: [
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
    ],
  },
  {
    description:
      '<i>Body Slam\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> is reduced by 3 seconds if <b>Gragas</b> hits an enemy.',
    leveling: [],
  },
  {
    description:
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gragas" data-ability="Barrel Roll" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gragas/LoL#Barrel_Roll" title="Barrel Roll"><img alt="Barrel Roll" src="/wiki/images/Gragas_Barrel_Roll.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gragas/LoL#Barrel_Roll" title="Gragas/LoL">Barrel Roll</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gragas" data-ability="Explosive Cask" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gragas/LoL#Explosive_Cask" title="Explosive Cask"><img alt="Explosive Cask" src="/wiki/images/Gragas_Explosive_Cask.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gragas/LoL#Explosive_Cask" title="Gragas/LoL">Explosive Cask</a></span></span> can be cast during the dash.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Gragas_Explosive_Cask.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Gragas</b> hurls a cask that travels to the target location over 0.<small>55</small> seconds, exploding on impact to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to all enemies within the area and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock them back</a></span> 900 units, though not through terrain, from the epicenter of the explosion, as well as granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area for 1 second.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '200 / 300 / 400 (+ 80% AP)',
        values: [200, 300, 400],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '200 / 300 / 400',
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
];
export const Gragas = { I, Q, W, E, R };
