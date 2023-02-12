import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Ziggs';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Ziggs_Short_Fuse.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Periodically, <b>Ziggs</b> empowers his next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> to deal <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="16 +&nbsp;4 per level up to 6, then +&nbsp;8 per level up to 12, and then +&nbsp;12 per level up to 18" data-bot_values="20;24;28;32;36;40;48;56;64;72;80;88;100;112;124;136;148;160" data-top_values="">20 − 160 (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>,<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;increased by 150% against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.&nbsp;」</span><span class="flipText2">「&nbsp;increased to <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="40 +&nbsp;10 per level up to 6, then +&nbsp;20 per level up to 12, and then +&nbsp;30 per level up to 18" data-bot_values="50;60;70;80;90;100;120;140;160;180;200;220;250;280;310;340;370;400" data-top_values="">50 − 400 (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;125% AP)</span> against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.&nbsp;」</span></span>',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: ' Periodically, Ziggs empowers his next basic attack to deal 20 − 160 (based on level) (+ 50% AP) bonus magic damage,「 increased by 150% against structures',
        values: [
          20, 28.24, 36.47, 44.71, 52.94, 61.18, 69.41, 77.65, 85.88, 94.12,
          102.35, 110.59, 118.82, 127.06, 135.29, 143.53, 151.76, 160,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'bonus magic damage,「 increased by 150% against structures',
        pre: 'Periodically, Ziggs empowers his next basic attack to deal 20 − 160',
        post: 'bonus magic damage,「 increased by 150% against structures',
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
      {
        effectType: 'Gain',
        name: 'Line 2:',
        raw: ' 」「 increased to 50 − 400 (based on level) (+ 125% AP) against structures',
        values: [
          50, 70.59, 91.18, 111.76, 132.35, 152.94, 173.53, 194.12, 214.71,
          235.29, 255.88, 276.47, 297.06, 317.65, 338.24, 358.82, 379.41, 400,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'against structures',
        pre: '」「 increased to 50 − 400',
        post: 'against structures',
        children: [
          {
            values: 125,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 125% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Short Fuse\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is reduced by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="4;1" data-finish="6;13" data-bot_values="4;5;6" data-top_values="1;7;13">4 / 5 / 6 (based on level)</span> seconds whenever <b>Ziggs</b> casts an <a href="/wiki/Champion_ability" title="Champion ability">ability</a>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 1:',
        raw: "Short Fuse's  cooldown is reduced by 4 / 5 / 6 (based on level) seconds whenever Ziggs casts an ability",
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'total_ap',
        unitsText: 'seconds whenever Ziggs casts an ability',
        pre: "Short Fuse's  cooldown is reduced by 4 / 5 / 6",
        post: 'seconds whenever Ziggs casts an ability',
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Ziggs_Bouncing_Bomb.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Ziggs</b> throws a bomb to the target location that bounces forward up to two times, the distance traveled each time being based on how far it was originally thrown.',
    leveling: [],
  },
  {
    description:
      'The bomb explodes upon landing near an enemy, within terrain, or the final bounce, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '95 / 145 / 195 / 245 / 295 (+ 65% AP)',
        values: [95, 145, 195, 245, 295],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '95 / 145 / 195 / 245 / 295',
        children: [
          {
            values: 65,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 65% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Bouncing Bomb will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Ziggs_Satchel_Charge.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Ziggs</b> hurls a charge to the target location, remaining there for 4 seconds and granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area. <i>Satchel Charge</i> can be recast within the duration, and does so automatically afterwards. If recast while in flight, the charge will explode immediately upon landing.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Ziggs</b> detonates the charge, causing it to explode to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock them back</a></span> up to 500 units away from the center of the explosion, though not through terrain. If this hits <b>Ziggs</b>, he will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> up to 825 units away from the center.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 105 / 140 / 175 / 210 (+ 50% AP)',
        values: [70, 105, 140, 175, 210],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 105 / 140 / 175 / 210',
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
      '<span class="inline-image label-after" style="display:inline;white-space:pre;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><img alt="Turret Explosion:" src="/wiki/images/Satchel_Charge_Turret_Explosion_Indicator.png" decoding="async" loading="lazy" title="Turret Explosion:" width="20" height="20" class="lazyload"></span> <span style="white-space:normal;"><span class="template_sbc"><b>Turret Explosion:</b></span></span></span> The explosion also <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike"><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Execute"><a href="/wiki/Kill#Execute" title="Kill#Execute"><img alt="Death from Below.png" src="/wiki/images/Pyke_Death_from_Below.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Kill#Execute" title="Kill">executes</a></span></span> enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span> within that are below a <span style="color: #1F995C; white-space:normal"><b>maximum</b> health</span> threshold.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Demolition Threshold:',
        raw: "25 / 27.5 / 30 / 32.5 / 35% of turret's maximum health",
        healType: 'BonusHealth',
        values: [25, 27.5, 30, 32.5, 35],
        valuesIsPercent: true,
        user: 'player',
        units: 'maximum_hp',
        unitsText: "of turret's maximum health",
        pre: "25 / 27.5 / 30 / 32.5 / 35% of turret's maximum health",
      },
    ],
  },
  {
    description:
      '<i><b>Ziggs</b> does not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> if he is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span>. He can cast any of his abilities during the dash.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Ziggs_Hexplosive_Minefield.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Ziggs</b> scatters a cluster of 11 proximity mines over the target location that grant <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area for 2 seconds, <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="travel time of the mines spreading out plus a brief delay">arming after 0.<small>5</small> seconds</span> and lasting for up to 10 seconds.',
    leveling: [],
  },
  {
    description:
      'Each mine within the area explodes upon contact with terrain or an enemy, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them for 1.<small>5</small> seconds, as well as granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area around the explosion for 2 seconds. An enemy takes 40% damage from subsequent mines.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage per Mine:',
        raw: '30 / 70 / 110 / 150 / 190 (+ 30% AP)',
        values: [30, 70, 110, 150, 190],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 70 / 110 / 150 / 190',
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
      {
        effectType: 'Unique',
        name: 'Reduced Damage per Mine:',
        raw: '12 / 28 / 44 / 60 / 76 (+ 12% AP)',
        values: [12, 28, 44, 60, 76],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '12 / 28 / 44 / 60 / 76',
        children: [
          {
            values: 12,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 12% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Total Magic Damage:',
        raw: '150 / 350 / 550 / 750 / 950 (+ 150% AP)',
        values: [150, 350, 550, 750, 950],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 350 / 550 / 750 / 950',
        children: [
          {
            values: 150,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 150% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Slow:',
        raw: '10 / 20 / 30 / 40 / 50%',
        values: [10, 20, 30, 40, 50],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 20 / 30 / 40 / 50%',
      },
    ],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Ziggs_Mega_Inferno_Bomb.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Ziggs</b> catapults the <i>Mega Inferno Bomb</i> to the target location, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> within a 600 radius around its destination for 4 seconds.',
    leveling: [],
  },
  {
    img: '/wiki/images/Mega_Inferno_Bomb_Minimap.png',
    description:
      'The bomb explodes upon arrival to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit, increased by 50% against those in the epicenter.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '200 / 300 / 400 (+ 73.33% AP)',
        values: [200, 300, 400],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '200 / 300 / 400',
        children: [
          {
            values: 73.33,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 73.33% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Increased Damage:',
        raw: '300 / 450 / 600 (+ 110% AP)',
        values: [300, 450, 600],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '300 / 450 / 600',
        children: [
          {
            values: 110,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 110% AP',
          },
        ],
      },
    ],
  },
];
export const Ziggs = { I, Q, W, E, R };
