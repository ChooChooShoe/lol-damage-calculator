import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Yorick';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Yorick_Shepherd_of_Souls.png',
    description:
      '<span class="template_sbc"><b>Innate - Final Service:</b></span> <b>Yorick</b> raises a <i>grave</i> for every enemy he kills with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yorick" data-ability="Last Rites" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yorick/LoL#Last_Rites" title="Last Rites"><img alt="Last Rites" src="/wiki/images/Yorick_Last_Rites.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yorick/LoL#Last_Rites" title="Yorick/LoL">Last Rites</a></span></span></i>, as well as for every enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> and large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> that dies near him. Additionally, <b>Yorick</b> raises a grave for every <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="12th;6th;2nd" data-top_values="1;7;13">12th / 6th / 2nd (based on level)</span> enemy that dies otherwise near him. Up to 4 <i>graves</i> can exist at once, with the furthest ones being replaced by the newest.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: ' Additionally, Yorick raises a grave for every 12th / 6th / 2nd (based on level) enemy that dies otherwise near him',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'enemy that dies otherwise near him',
        pre: 'Additionally, Yorick raises a grave for every 12th / 6th / 2nd',
        post: 'enemy that dies otherwise near him',
      },
    ],
  },
  {
    description:
      '<b>Yorick</b> can use <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yorick" data-ability="Awakening" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yorick/LoL#Awakening" title="Awakening"><img alt="Awakening" src="/wiki/images/Yorick_Awakening.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yorick/LoL#Awakening" title="Yorick/LoL">Awakening</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yorick" data-ability="Mourning Mist" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yorick/LoL#Mourning_Mist" title="Mourning Mist\'s"><img alt="Mourning Mist\'s" src="/wiki/images/Yorick_Mourning_Mist.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yorick/LoL#Mourning_Mist" title="Yorick/LoL">Mourning Mist\'s</a></span></span></i> mark to raise a <span style="color: #26DFB0; white-space:normal">Mist Walker</span> from each <i>grave</i>.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Innate - The Cursed Horde:</b></span> Up to 4 <span style="color: #26DFB0; white-space:normal">Mist Walkers</span> can be active at once, with the closest ones being replaced by the newest.',
    leveling: [],
  },
  {
    description:
      '<i>See <a href="/wiki/Yorick/LoL#Pets" title="Yorick/LoL">Pets</a> for more details about <span style="color: #26DFB0; white-space:normal">Mist Walkers</span>.</i>',
    leveling: [],
  },
];
const Q1: SubSkill[] = [
  {
    img: '/wiki/images/Yorick_Last_Rites.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Yorick</b> empowers his next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> within 5 seconds to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>, gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50 <b>bonus</b> range</span>, deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> him for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="10 + 2 per level until 6, then + 3 per level until 12, then + 5 per level" data-bot_values="10;12;14;16;18;20;23;26;29;32;35;38;43;48;53;58;63;68" data-top_values="">10 − 68 (based on level)</span>. The heal is doubled to <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="20 + 4 per level until 6, then + 6 per level until 12, then + 10 per level" data-bot_values="20;24;28;32;36;40;46;52;58;64;70;76;86;96;106;116;126;136" data-top_values="">20 − 136 (based on level)</span> if he is <span style="color: #1F995C; white-space:normal">below 50% <b>maximum</b> health</span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: ' Yorick empowers his next basic attack within 5 seconds to have an  uncancellable windup, gain  50 bonus range, deal bonus physical damage, and  heal him for 10 − 68 (based on level)',
        healType: 'PhysicalVamp',
        values: [
          10, 13.41, 16.82, 20.24, 23.65, 27.06, 30.47, 33.88, 37.29, 40.71,
          44.12, 47.53, 50.94, 54.35, 57.76, 61.18, 64.59, 68,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: 'Yorick empowers his next basic attack within 5 seconds to have an  uncancellable windup, gain  50 bonus range, deal bonus physical damage, and  heal him for 10 − 68',
      },
      {
        effectType: 'Heal',
        name: 'Line 2:',
        raw: ' The heal is doubled to 20 − 136 (based on level) if he is below 50% maximum health',
        healType: 'BonusHealth',
        values: [
          20, 26.82, 33.65, 40.47, 47.29, 54.12, 60.94, 67.76, 74.59, 81.41,
          88.24, 95.06, 101.88, 108.71, 115.53, 122.35, 129.18, 136,
        ],
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'maximum_hp',
        unitsText: 'if he is below 50% maximum health',
        pre: 'The heal is doubled to 20 − 136',
        post: 'if he is below 50% maximum health',
      },
      {
        effectType: 'Unique',
        name: 'Bonus Physical Damage:',
        raw: '30 / 55 / 80 / 105 / 130 (+ 40% AD)',
        values: [30, 55, 80, 105, 130],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 55 / 80 / 105 / 130',
        children: [
          {
            values: 40,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 40% AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'While there are at least 3 <i>graves</i> nearby and <i>Last Rites</i> is active or on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>, <b>Yorick</b> can cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yorick" data-ability="Awakening" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yorick/LoL#Awakening" title="Awakening"><img alt="Awakening" src="/wiki/images/Yorick_Awakening.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yorick/LoL#Awakening" title="Yorick/LoL">Awakening</a></span></span></i>.',
    leveling: [],
  },
  {
    description:
      '<i>Last Rites <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Yorick\'s</b> basic attack timer.</i>',
    leveling: [],
  },
];
const Q2: SubSkill[] = [
  {
    img: '/wiki/images/Yorick_Awakening.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Yorick</b> exhumes a <span style="color: #26DFB0; white-space:normal">Mist Walker</span> under his command from each nearby <i>grave</i>.',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Yorick_Dark_Procession.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Yorick</b> summons a ring of spirits around the target location that arises after a 0.<small>75</small>-second delay, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking aside</a></span> enemies hit over 0.<small>25</small> seconds, though not through terrain. Within <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">210-units</span>, they are pulled inside; otherwise they are pushed away. The ring remains for 4 seconds as impassible <a href="/wiki/Terrain" title="Terrain">terrain</a> against enemies, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> inside the ring.',
    leveling: [],
  },
  {
    description:
      '<i>Dark Procession</i> can only be targeted by enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> basic attacks and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span>. The wall takes 1 <a href="/wiki/Damage" title="Damage">damage</a> per attack from champions and is destroyed instantly from turret attacks.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Wall Health:',
        raw: '2 / 2 / 3 / 3 / 4',
        values: [2, 2, 3, 3, 4],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '2 / 2 / 3 / 3 / 4',
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Yorick_Mourning_Mist.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Yorick</b> hurls a globule of Black Mist that splashes across an area at the target location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit equal to <span style="color: #1F995C; white-space:normal">15% of the target\'s <b>current</b> health</span>, down to a minimum threshold.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Minimum Magic Damage:',
        raw: '70 / 105 / 140 / 175 / 210 (+ 70% AP)',
        values: [70, 105, 140, 175, 210],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 105 / 140 / 175 / 210',
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
      'Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> hit are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 30% for 2 seconds, and marked as <i>Cursed</i> for 4 seconds. <i>Cursed</i> champions are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span>.',
    leveling: [],
  },
  {
    img: '/wiki/images/Mourning_Mist_2.png',
    description:
      '<span class="template_sbc"><b>Cursed:</b></span> The target takes 40% <b>bonus</b> damage from 8 attacks by <span style="color: #26DFB0; white-space:normal">Mist Walkers</span> and continually raises a <span style="color: #26DFB0; white-space:normal">Mist Walker</span> from each nearby <i>grave</i>, up to a maximum of 4.<br><br>\n<b>Yorick</b>, <span style="color: #26DFB0; white-space:normal">Mist Walkers</span> and the <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yorick" data-ability="Eulogy of the Isles" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yorick/LoL#Eulogy_of_the_Isles" title="The Maiden"><img alt="The Maiden" src="/wiki/images/Yorick_Eulogy_of_the_Isles.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yorick/LoL#Eulogy_of_the_Isles" title="Yorick/LoL">The Maiden</a></span></span></i> gain <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">20% <b>bonus</b> movement speed</span></span> while facing nearby <i>Cursed</i> enemies. <span style="color: #26DFB0; white-space:normal">Mist Walkers</span> will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leap</a></span> to nearby <i>Cursed</i> enemy champions and large monsters, dealing <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike physical icon.png" src="/wiki/images/Critical_strike_physical_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike"><span style="color:orange; white-space:normal">100% of their AD</span></span> upon arrival.',
    leveling: [],
  },
  {
    description:
      '<i>Mourning Mist will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Yorick_Eulogy_of_the_Isles.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Yorick</b> summons the <i>Maiden of the Mist</i> surrounded by a number of <span style="color: #26DFB0; white-space:normal">Mist Walkers</span> at the target location, which remain on the battlefield until she or <b>Yorick</b> dies. <i>Eulogy of the Isles</i> can be recast once while the <i>Maiden</i> is alive after 10 seconds of the activation.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Mist Walkers:',
        raw: '2 / 3 / 4',
        values: [2, 3, 4],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '2 / 3 / 4',
      },
    ],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Yorick</b> sets the <i>Maiden</i> free, allowing her to push the nearest <a href="/wiki/Lanes" title="Lanes">lane</a> until she dies.',
    leveling: [],
  },
  {
    description:
      '<i>See <a href="/wiki/Yorick/LoL#Pets" title="Yorick/LoL">Pets</a> for more details about The Maiden of the Mist. Eulogy of the Isles will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
export const Yorick = { I, Q1, Q2, W, E, R };
