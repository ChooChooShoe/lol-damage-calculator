import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Braum';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Braum_Concussive_Blows.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Braum\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-ability="Winter\'s Bite" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL#Winter\'s_Bite" title="Winter\'s Bite"><img alt="Winter\'s Bite" src="/wiki/images/Braum_Winter%27s_Bite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL#Winter\'s_Bite" title="Braum/LoL">Winter\'s Bite</a></span></span></i> each apply a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Concussive Blows</i> to their target for 4 seconds, refreshing on subsequent applications and stacking up to 4 times. Once the first stack has been applied, any allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion\'s</a></span> basic attack applies an additional stack to the target <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>.',
    leveling: [],
  },
  {
    description:
      'The fourth stack against a target consumes them all to deal <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="26;" data-finish="196;" data-bot_values="26;36;46;56;66;76;86;96;106;116;126;136;146;156;166;176;186;196" data-top_values="">26 − 196 (based on level)</span></span> <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> them for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="1.25;1" data-finish="1.75;13" data-bot_values="1.25;1.5;1.75" data-top_values="1;7;13">1.<small>25</small> − 1.<small>75</small> (based on level)</span> seconds.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: 'The fourth stack against a target consumes them all to deal 26 − 196 (based on level) magic damage and  stun them for 1',
        values: [
          26, 36, 46, 56, 66, 76, 86, 96, 106, 116, 126, 136, 146, 156, 166,
          176, 186, 196,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'magic damage and  stun them for 1',
        pre: 'The fourth stack against a target consumes them all to deal 26 − 196',
        post: 'magic damage and  stun them for 1',
      },
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: '25 − 1',
        values: [25, 1],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 − 1',
      },
      {
        effectType: 'Unique',
        name: 'Line 3:',
        raw: '75 (based on level) seconds',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'seconds',
        pre: '75',
        post: 'seconds',
      },
    ],
  },
  {
    description:
      'This effect cannot apply to the same target more than once every few seconds. During this immunity period, affected targets take<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> equal to 20% of the trigger damage&nbsp;」</span><span class="flipText2">「&nbsp;<span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="5.2;" data-finish="39.2;" data-bot_values="5.2;7.2;9.2;11.2;13.2;15.2;17.2;19.2;21.2;23.2;25.2;27.2;29.2;31.2;33.2;35.2;37.2;39.2" data-top_values="">5.<small>2</small> − 39.<small>2</small> (based on level)</span> <b>bonus</b> magic damage</span>&nbsp;」</span></span>from <b>Braum\'s</b> basic attacks.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 3:',
        raw: '2 − 39',
        values: [2, 39],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '2 − 39',
      },
      {
        effectType: 'Damage',
        name: 'Line 4:',
        raw: "2 (based on level) bonus magic damage 」from Braum's basic attacks",
        damagetype: 'Magic',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'bonus_ad',
        unitsText: "bonus magic damage 」from Braum's basic attacks",
        pre: '2',
        post: "bonus magic damage 」from Braum's basic attacks",
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Braum_Winter%27s_Bite.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Braum</b> propels ice from his shield in the target direction, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 70% decaying over 2 seconds.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Magic Damage:',
        raw: "75 / 125 / 175 / 225 / 275 (+ 2.5% of Braum's maximum health)",
        healType: 'BonusHealth',
        values: [75, 125, 175, 225, 275],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '75 / 125 / 175 / 225 / 275',
        children: [
          {
            values: 2.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'maximum_hp',
            unitsText: "of Braum's maximum health",
            pre: "+ 2.5% of Braum's maximum health",
          },
        ],
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Braum_Stand_Behind_Me.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Braum</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to put himself <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="150 units from his ally towards the closest enemy">between</span> the target ally and the closest <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="from the ally\'s location">within 1500 units</span>, and upon arrival grants himself and the ally <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resistance</span></span> for 3 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Ally Bonus Armor:',
        raw: '20 / 25 / 30 / 35 / 40 (+ 12% bonus armor)',
        values: [20, 25, 30, 35, 40],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 25 / 30 / 35 / 40',
        children: [
          {
            values: 12,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_armor',
            unitsText: 'bonus armor',
            pre: '+ 12% bonus armor',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Ally Bonus Magic Resistance:',
        raw: '20 / 25 / 30 / 35 / 40 (+ 12% bonus magic resistance)',
        values: [20, 25, 30, 35, 40],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 25 / 30 / 35 / 40',
        children: [
          {
            values: 12,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_mr',
            unitsText: 'bonus magic resistance',
            pre: '+ 12% bonus magic resistance',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Stand Behind Me</i> can be <a href="/wiki/Self-targeted" title="Self-targeted">self cast</a> to instantly grant <b>Braum</b> the <b>bonus</b> resistances.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Self Bonus Armor:',
        raw: '20 / 25 / 30 / 35 / 40 (+ 36% bonus armor)',
        values: [20, 25, 30, 35, 40],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 25 / 30 / 35 / 40',
        children: [
          {
            values: 36,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_armor',
            unitsText: 'bonus armor',
            pre: '+ 36% bonus armor',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Self Bonus Magic Resistance:',
        raw: '20 / 25 / 30 / 35 / 40 (+ 36% bonus magic resistance)',
        values: [20, 25, 30, 35, 40],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 25 / 30 / 35 / 40',
        children: [
          {
            values: 36,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_mr',
            unitsText: 'bonus magic resistance',
            pre: '+ 36% bonus magic resistance',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-ability="Unbreakable" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL#Unbreakable" title="Unbreakable"><img alt="Unbreakable" src="/wiki/images/Braum_Unbreakable.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL#Unbreakable" title="Braum/LoL">Unbreakable</a></span></span> can be cast during the dash.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Braum_Unbreakable.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Braum</b> sets his shield in the target direction for a few seconds, creating a barrier that intercepts all incoming hostile <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectiles"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">projectiles</a></span> and reduces the damage <b>Braum</b> takes through it. The first instance of damage dealt by a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> from this direction is reduced by 100%. <i>Unbreakable</i> does not affect <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Damage reduction:',
        raw: '35 / 40 / 45 / 50 / 55%',
        values: [35, 40, 45, 50, 55],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '35 / 40 / 45 / 50 / 55%',
      },
      {
        effectType: 'Unique',
        name: 'Barrier Duration:',
        raw: '3 / 3.25 / 3.5 / 3.75 / 4',
        values: [3, 3.25, 3.5, 3.75, 4],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '3 / 3.25 / 3.5 / 3.75 / 4',
      },
    ],
  },
  {
    description:
      'While his shield is raised, <b>Braum</b> also gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">10% <b>bonus</b> movement speed</span></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosting"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span>.',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Braum_Glacial_Fissure.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Braum</b> leaps into the air and slams his shield into the ground, creating a fissure that travels forth in the target direction, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within its path as well as those around <b>Braum</b>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '150 / 300 / 450 (+ 60% AP)',
        values: [150, 300, 450],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 300 / 450',
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
      'The first target hit is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked up</a></span> for at least 0.<small>3</small> seconds, increased if they are further away from <b>Braum</b>. All other enemies hit are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked up</a></span> for 0.<small>3</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Maximum Knockup Duration:',
        raw: '1 / 1.5 / 2',
        values: [1, 1.5, 2],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1 / 1.5 / 2',
      },
    ],
  },
  {
    description:
      'A field of ice is created along the fissure\'s path, lasting for 4 seconds and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> enemies within the area every 0.<small>25</small> seconds. The field disappears after the duration ends in the same order and speed it was created with.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Slow:',
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
];
export const Braum = { I, Q, W, E, R };
