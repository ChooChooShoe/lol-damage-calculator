import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Karthus';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Karthus_Death_Defied.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Upon taking <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">fatal damage</a></span>, <b>Karthus</b> enters a <b><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Zombie state"><a href="/wiki/Death#Zombie_states" title="Death#Zombie states"><img alt="Zombie icon.png" src="/wiki/images/Zombie_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Zombie_states" title="Death">zombie state</a></span></b> for 7 seconds, during which he can cast his abilities at no cost. If <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karthus" data-ability="Defile" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karthus/LoL#Defile" title="Defile"><img alt="Defile" src="/wiki/images/Karthus_Defile.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karthus/LoL#Defile" title="Karthus/LoL">Defile</a></span></span></i> has been learned, it will remain toggled on for <i>Death Defied\'s</i> entire duration. <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karthus" data-ability="Requiem" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karthus/LoL#Requiem" title="Requiem"><img alt="Requiem" src="/wiki/images/Karthus_Requiem.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karthus/LoL#Requiem" title="Karthus/LoL">Requiem</a></span></span></i> becomes disabled after <i>Death Defied</i> has lasted 4 seconds.',
    leveling: [],
  },
  {
    description:
      'While under this state, <b>Karthus</b> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">immune to crowd control</a></span> as well as prevents all incoming damage, but is also rendered unable to move, declare <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a>, use <a href="/wiki/Summoner_spell" title="Summoner spell">summoner spells</a>, and <a href="/wiki/Active_ability_items" title="Active ability items">activate items</a>.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Karthus_Lay_Waste.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Karthus</b> conjures a blast at the target location that detonates after <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="See notes"><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.5 seconds, but rounded up to the next game tick.">0.<small>528</small> seconds</span> to <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.75 seconds, but rounded up to the next game tick.">0.<small>759</small> seconds</span></span>, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area and dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to all enemies within, <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">doubled</span> when only one target is struck.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '45 / 62.5 / 80 / 97.5 / 115 (+ 35% AP)',
        values: [45, 62.5, 80, 97.5, 115],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '45 / 62.5 / 80 / 97.5 / 115',
        children: [
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
      {
        effectType: 'Unique',
        name: 'Enhanced Damage:',
        raw: '90 / 125 / 160 / 195 / 230 (+ 70% AP)',
        values: [90, 125, 160, 195, 230],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '90 / 125 / 160 / 195 / 230',
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
  {
    description:
      '<i>Lay Waste</i> deals 95% damage to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Monster Damage:',
        raw: '42.75 / 59.375 / 76 / 92.625 / 109.25 (+ 29.75% AP)',
        values: [42.75, 59.375, 76, 92.625, 109.25],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '42.75 / 59.375 / 76 / 92.625 / 109.25',
        children: [
          {
            values: 29.75,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 29.75% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Enhanced Monster Damage:',
        raw: '85.5 / 118.75 / 152 / 185.25 / 218.5 (+ 66.5% AP)',
        values: [85.5, 118.75, 152, 185.25, 218.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '85.5 / 118.75 / 152 / 185.25 / 218.5',
        children: [
          {
            values: 66.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 66.5% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>During <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karthus" data-ability="Death Defied" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karthus/LoL#Death_Defied" title="Death Defied"><img alt="Death Defied" src="/wiki/images/Karthus_Death_Defied.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karthus/LoL#Death_Defied" title="Karthus/LoL">Death Defied</a></span></span>, Lay Waste will cast at maximum range if cast beyond that.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Karthus_Wall_of_Pain.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Karthus</b> erects a wall of pain at the target location perpendicular to his facing that lasts 5 seconds, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> around its pillars and center.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Wall Length:',
        raw: '800 / 900 / 1000 / 1100 / 1200',
        values: [800, 900, 1000, 1100, 1200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '800 / 900 / 1000 / 1100 / 1200',
      },
    ],
  },
  {
    description:
      'Enemies that touch the wall are inflicted with <span style="white-space:nowrap"><a href="/wiki/Magic_penetration" title="Magic penetration"><img alt="Magic penetration icon.png" src="/wiki/images/Magic_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">15% magic resistance reduction</span></span> and become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> for 4 seconds, decaying over the duration. Enemies can be affected by <i>Wall of Pain</i> only once per cast.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Slow:',
        raw: '40 / 50 / 60 / 70 / 80%',
        values: [40, 50, 60, 70, 80],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 50 / 60 / 70 / 80%',
      },
      {
        effectType: 'Unique',
        name: 'Reduced Slow:',
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
];
const E: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Karthus</b> restores <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana</span></span> whenever he kills an enemy.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Mana Restored:',
        raw: '15 / 25 / 35 / 45 / 55',
        values: [15, 25, 35, 45, 55],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 25 / 35 / 45 / 55',
      },
    ],
  },
  {
    img: '/wiki/images/Karthus_Defile.png',
    description:
      '<span class="template_sbc"><b>Toggle:</b></span> <b>Karthus</b> surrounds himself in a necrotic <a href="/wiki/Aura" title="Aura">aura</a> that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>25</small> seconds to all nearby enemies. Toggling <i>Defile</i> off triggers a final tick of damage.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage Per Tick:',
        raw: '7.5 / 12.5 / 17.5 / 22.5 / 27.5 (+ 5% AP)',
        values: [7.5, 12.5, 17.5, 22.5, 27.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '7.5 / 12.5 / 17.5 / 22.5 / 27.5',
        children: [
          {
            values: 5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 5% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Damage Per Second:',
        raw: '30 / 50 / 70 / 90 / 110 (+ 20% AP)',
        values: [30, 50, 70, 90, 110],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 50 / 70 / 90 / 110',
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
    ],
  },
  {
    description:
      '<i>Defile cannot be toggled off during <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karthus" data-ability="Death Defied" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karthus/LoL#Death_Defied" title="Death Defied"><img alt="Death Defied" src="/wiki/images/Karthus_Death_Defied.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karthus/LoL#Death_Defied" title="Karthus/LoL">Death Defied</a></span></span>.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Karthus_Requiem.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Karthus</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for 3 seconds, then deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to all targetable enemy champions upon completion.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '200 / 350 / 500 (+ 75% AP)',
        values: [200, 350, 500],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '200 / 350 / 500',
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
export const Karthus = { I, Q, W, E, R };
