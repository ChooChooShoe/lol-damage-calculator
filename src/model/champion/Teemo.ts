import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Teemo';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Teemo_Guerrilla_Warfare.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Teemo</b> gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisibility"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisibility</a></span> after 1.<small>5</small> seconds without moving, taking damage, performing actions that <a href="/wiki/Stealth#Breaking_stealth" title="Stealth">break stealth</a>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>, or being in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stasis (buff)"><a href="/wiki/Invulnerability#Stasis" title="Invulnerability#Stasis"><img alt="Stasis icon.png" src="/wiki/images/Stasis_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability#Stasis" title="Invulnerability">stasis</a></span>. <b>Teemo</b> will maintain stealth so long as he remains idle and is not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">displaced</a></span>. While in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Brush"><a href="/wiki/Brush" title="Brush"><img alt="Brushmaker.png" src="/wiki/images/Ivern_Brushmaker.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Brush" title="Brush">brush</a></span>, <b>Teemo</b> gains the stealth even while moving and can move without breaking stealth.',
    leveling: [],
  },
  {
    img: '/wiki/images/Teemo_Element_of_Surprise.png',
    description:
      '<span class="template_sbc"><b>Innate - Element of Surprise:</b></span> When <b>Teemo</b> breaks the stealth, he gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="20;40;60;80" data-top_values="1;5;10;15" data-bot_key="%">20 / 40 / 60 / 80% (based on level)</span> <b>bonus</b> attack speed</span></span> for 5 seconds.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: ' When Teemo breaks the stealth, he gains  20 / 40 / 60 / 80% (based on level) bonus attack speed for 5 seconds',
        increasedStat: 'bonus_ad',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: '',
        unitsText: 'bonus attack speed for 5 seconds',
        pre: 'When Teemo breaks the stealth, he gains  20 / 40 / 60 / 80%',
        post: 'bonus attack speed for 5 seconds',
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Teemo_Blinding_Dart.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Teemo</b> shoots a dart at the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinds</a></span> them for a duration.',
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
      {
        effectType: 'Unique',
        name: 'Blind Duration:',
        raw: '2 / 2.25 / 2.5 / 2.75 / 3',
        values: [2, 2.25, 2.5, 2.75, 3],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '2 / 2.25 / 2.5 / 2.75 / 3',
      },
    ],
  },
  {
    description:
      'The duration of the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blind</a></span> is doubled against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Increased Blind Duration:',
        raw: '4 / 4.5 / 5 / 5.5 / 6',
        values: [4, 4.5, 5, 5.5, 6],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '4 / 4.5 / 5 / 5.5 / 6',
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Teemo</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> after 5 seconds without taking damage from enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed:',
        raw: '10 / 14 / 18 / 22 / 26%',
        values: [10, 14, 18, 22, 26],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 14 / 18 / 22 / 26%',
      },
    ],
  },
  {
    img: '/wiki/images/Teemo_Move_Quick.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Teemo</b> gains <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span> for 3 seconds. This overrides the passive bonus, but prevents the passive effect from being removed.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed:',
        raw: '20 / 28 / 36 / 44 / 52%',
        values: [20, 28, 36, 44, 52],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 28 / 36 / 44 / 52%',
      },
    ],
  },
  {
    description:
      '<i>Casting Move Quick does not interrupt <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Teemo" data-ability="Guerrilla Warfare" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teemo/LoL#Guerrilla_Warfare" title="Guerrilla Warfare"><img alt="Guerrilla Warfare" src="/wiki/images/Teemo_Guerrilla_Warfare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teemo/LoL#Guerrilla_Warfare" title="Teemo/LoL">Guerrilla Warfare</a></span></span>.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Teemo_Toxic_Shot.png',
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Teemo\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> are empowered to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and inflict <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Poison"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL"><img alt="Poison icon.png" src="/wiki/images/Poison_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL">poison</a></span>.<br><br>\n<span class="template_sbc"><b><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Poison"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL"><img alt="Poison icon.png" src="/wiki/images/Poison_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> poison</span>:</b></span> The target takes <span style="color: #00B0F0; white-space:normal">magic damage</span> every second over 4 seconds. Subsequent inflictions refresh the duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage On-Hit:',
        raw: '14 / 25 / 36 / 47 / 58 (+ 30% AP)',
        values: [14, 25, 36, 47, 58],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '14 / 25 / 36 / 47 / 58',
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
        name: 'Magic Damage per Tick:',
        raw: '6 / 12 / 18 / 24 / 30 (+ 10% AP)',
        values: [6, 12, 18, 24, 30],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '6 / 12 / 18 / 24 / 30',
        children: [
          {
            values: 10,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 10% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Poison Damage:',
        raw: '24 / 48 / 72 / 96 / 120 (+ 40% AP)',
        values: [24, 48, 72, 96, 120],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '24 / 48 / 72 / 96 / 120',
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
    ],
  },
  {
    description:
      '<i>Toxic Shot</i> deals 150% damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Monster Damage On-Hit:',
        raw: '21 / 37.5 / 54 / 70.5 / 87 (+ 45% AP)',
        values: [21, 37.5, 54, 70.5, 87],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '21 / 37.5 / 54 / 70.5 / 87',
        children: [
          {
            values: 45,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 45% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Monster Damage per Tick:',
        raw: '9 / 18 / 27 / 36 / 45 (+ 15% AP)',
        values: [9, 18, 27, 36, 45],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '9 / 18 / 27 / 36 / 45',
        children: [
          {
            values: 15,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 15% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Monster Poison Damage:',
        raw: '36 / 72 / 108 / 144 / 180 (+ 60% AP)',
        values: [36, 72, 108, 144, 180],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '36 / 72 / 108 / 144 / 180',
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
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Teemo_Noxious_Trap.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Teemo</b> tosses a poisonous mushroom to the target location that becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stealthed trap"><a href="/wiki/Stealth#Stealthed_traps_and_wards" title="Stealth#Stealthed traps and wards"><img alt="Noxious Trap.png" src="/wiki/images/Teemo_Noxious_Trap.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Stealthed_traps_and_wards" title="Stealth">stealthed</a></span> after arming over 1 second, lasting for up to 5 minutes and granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of its surroundings. If the mushroom lands on an already-placed one, it will bounce forward again for its cast distance, up to a cap, which can happen repeatedly.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bounce Distance Cap:',
        raw: '350 / 450 / 550',
        values: [350, 450, 550],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '350 / 450 / 550',
      },
    ],
  },
  {
    description:
      '<b>Teemo</b> periodically <a href="/wiki/Ammunition" title="Ammunition">stocks</a> a <i>Noxious Trap</i> charge, up to a maximum amount.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Maximum Charges:',
        raw: '3 / 4 / 5',
        values: [3, 4, 5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '3 / 4 / 5',
      },
    ],
  },
  {
    description:
      'The mushroom will explode upon enemy contact, inflicting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Poison"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL"><img alt="Poison icon.png" src="/wiki/images/Poison_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL">poison</a></span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them for 4 seconds, as well as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> them.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Slow:',
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
      '<span class="template_sbc"><b><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Poison"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL"><img alt="Poison icon.png" src="/wiki/images/Poison_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> poison</span>:</b></span> The target takes <span style="color: #00B0F0; white-space:normal">magic damage</span> every second over 4 seconds. Subsequent inflictions refresh the duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage per Tick:',
        raw: '50 / 81.25 / 112.5 (+ 13.75% AP)',
        values: [50, 81.25, 112.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 81.25 / 112.5',
        children: [
          {
            values: 13.75,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 13.75% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '200 / 325 / 450 (+ 55% AP)',
        values: [200, 325, 450],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '200 / 325 / 450',
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
      'A mushroom has <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">6 <b>maximum</b> health</span></span> and can be damaged only by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> basic attacks (2 damage from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ranged" class="mw-redirect" title="Ranged">ranged</a></span> and 3 from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Melee"><a href="/wiki/Melee" title="Melee"><img alt="Melee role.png" src="/wiki/images/Melee_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Melee" class="mw-redirect" title="Melee">melee</a></span>).',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: 'A mushroom has  6 maximum health and can be damaged only by  champions basic attacks (2 damage from  ranged and 3 from  melee)',
        healType: 'BonusHealth',
        values: 6,
        user: 'player',
        units: 'total_ad',
        unitsText:
          'mushroom has  6 maximum health and can be damaged only by  champions basic attacks',
        pre: 'A mushroom has  6 maximum health and can be damaged only by  champions basic attacks',
        children: [
          {
            values: 2,
            user: 'none',
            units: '',
            unitsText: 'damage from  ranged and 3 from  melee',
            pre: '2 damage from  ranged and 3 from  melee',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>See <a href="/wiki/Teemo/LoL#Pets" title="Teemo/LoL">Pets</a> for more details about mushroom traps.</i>',
    leveling: [],
  },
];
export const Teemo = { I, Q, W, E, R };
