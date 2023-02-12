import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Neeko';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Neeko_Inherent_Glamour.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Neeko</b> is offered a selection of allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> to take on their appearance. She can choose a new champion to switch her disguise or select herself to deactivate her disguise, placing <i>Inherent Glamour</i> on a 2-second cooldown.',
    leveling: [],
  },
  {
    description:
      'While disguised, <b>Neeko</b> can use basic attacks while keeping her form. Taking direct damage from enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> or using a damaging <a href="/wiki/Champion_ability" title="Champion ability">ability</a>, <a href="/wiki/Summoner_spell" title="Summoner spell">summoner spell</a>, or <a href="/wiki/Active_ability_items" title="Active ability items">item active</a> puts <i>Inherent Glamour</i> on full <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>.',
    leveling: [],
  },
  {
    description:
      '<i><b>Neeko</b> cannot activate Inherent Glamour while she is unable to cast abilities.</i>',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Neeko_Blooming_Burst.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Neeko</b> tosses a seed that <i>blooms</i> at the target location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '80 / 125 / 170 / 215 / 260 (+ 50% AP)',
        values: [80, 125, 170, 215, 260],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 125 / 170 / 215 / 260',
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
      'If the <i>bloom</i> kills an enemy or hits a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>, it will <i>bloom</i> again after 0.<small>75</small> seconds to deal <span style="color: #00B0F0; white-space:normal">magic damage</span>. This may occur up to 2 times per cast.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '40 / 65 / 90 / 115 / 140 (+ 20% AP)',
        values: [40, 65, 90, 115, 140],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 65 / 90 / 115 / 140',
        children: [
          {
            values: 20,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 20% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Maximum Magic Damage:',
        raw: '160 / 255 / 350 / 445 / 540 (+ 90% AP)',
        values: [160, 255, 350, 445, 540],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '160 / 255 / 350 / 445 / 540',
        children: [
          {
            values: 90,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 90% AP',
          },
        ],
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Neeko\'s</b> basic attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> generate a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Shapesplitter</i>, stacking up to 2 times. At 2 stacks, her next basic attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> is empowered to consume them all to become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">non-projectile</a></span>, deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> and grant her <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for 1 second.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Magic Damage:',
        raw: '50 / 80 / 110 / 140 / 170 (+ 60% AP)',
        values: [50, 80, 110, 140, 170],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 80 / 110 / 140 / 170',
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
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed:',
        raw: '10 / 17.5 / 25 / 32.5 / 40%',
        values: [10, 17.5, 25, 32.5, 40],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 17.5 / 25 / 32.5 / 40%',
      },
    ],
  },
  {
    img: '/wiki/images/Neeko_Shapesplitter.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Neeko</b> creates a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clone</a></span> of her <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Neeko" data-ability="Inherent Glamour" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Neeko/LoL#Inherent_Glamour" title="current form"><img alt="current form" src="/wiki/images/Neeko_Inherent_Glamour.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Neeko/LoL#Inherent_Glamour" title="Neeko/LoL">current form</a></span></span>, after which they both instantly become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisible"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisible</a></span> for 0.<small>5</small> seconds and gain <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span> for 3 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed:',
        raw: '20 / 25 / 30 / 35 / 40%',
        values: [20, 25, 30, 35, 40],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 25 / 30 / 35 / 40%',
      },
    ],
  },
  {
    description:
      'The clone lasts for 3 seconds, and starts running a fixed distance in the target direction. It is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> to allies and for the first 0.<small>5</small> seconds of its lifespan to enemies.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Neeko_Tangle-Barbs.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Neeko</b> slings a magical spiral in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">roots</a></span> them for a duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '80 / 115 / 150 / 185 / 220 (+ 60% AP)',
        values: [80, 115, 150, 185, 220],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 115 / 150 / 185 / 220',
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
      {
        effectType: 'Unique',
        name: 'Root Duration:',
        raw: '0.7 / 0.9 / 1.1 / 1.3 / 1.5',
        values: [0.7, 0.9, 1.1, 1.3, 1.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '0.7 / 0.9 / 1.1 / 1.3 / 1.5',
      },
    ],
  },
  {
    description:
      'If the spiral hits at least one enemy, it grows in size and its speed and root duration is increased.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Empowered Root Duration:',
        raw: '1.8 / 2.1 / 2.4 / 2.7 / 3',
        values: [1.8, 2.1, 2.4, 2.7, 3],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1.8 / 2.1 / 2.4 / 2.7 / 3',
      },
    ],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Neeko_Pop_Blossom.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Neeko</b> winds up spiritual essence over 1.<small>25</small> seconds and highlights an area around herself, which is visible to enemies unless <b>Neeko</b> is <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Neeko" data-ability="Inherent Glamour" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Neeko/LoL#Inherent_Glamour" title="disguised"><img alt="disguised" src="/wiki/images/Neeko_Inherent_Glamour.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Neeko/LoL#Inherent_Glamour" title="Neeko/LoL">disguised</a></span></span></i>.',
    leveling: [],
  },
  {
    description:
      'After winding up, the cast time begins and <b>Neeko</b> leaps into the air, granting herself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 2 seconds that is increased for each nearby enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Shield Strength:',
        raw: '75 / 100 / 125 (+ 75% AP)',
        values: [75, 100, 125],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '75 / 100 / 125',
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
      {
        effectType: 'Unique',
        name: 'Bonus Shield Per Champion:',
        raw: '40 / 60 / 80 (+ 40% AP)',
        values: [40, 60, 80],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 60 / 80',
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
        name: 'Total Shield vs. 5 Champions:',
        raw: '275 / 400 / 525 (+ 275% AP)',
        values: [275, 400, 525],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '275 / 400 / 525',
        children: [
          {
            values: 275,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 275% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'When the cast time ends, she lands to emit a burst of energy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> them for 1.<small>25</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '200 / 425 / 650 (+ 130% AP)',
        values: [200, 425, 650],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '200 / 425 / 650',
        children: [
          {
            values: 130,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 130% AP',
          },
        ],
      },
    ],
  },
];
export const Neeko = { I, Q, W, E, R };
