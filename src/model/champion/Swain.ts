import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Swain';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Swain_Ravenous_Flock.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Enemy champions that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">die</a></span> will leave behind a <span style="color: #E34D4C; white-space:normal">Soul Fragment</span> for 16 seconds, which can be collected by <b>Swain</b> after 1 second. <b>Swain\'s</b> ravens collect nearby <span style="color: #E34D4C; white-space:normal">Soul Fragments</span>, as well as with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Swain" data-ability="Vision of Empire" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Swain/LoL#Vision_of_Empire" title="Vision of Empire"><img alt="Vision of Empire" src="/wiki/images/Swain_Vision_of_Empire.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Swain/LoL#Vision_of_Empire" title="Swain/LoL">Vision of Empire</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Swain" data-ability="Nevermove" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Swain/LoL#Nevermove" title="Nevermove"><img alt="Nevermove" src="/wiki/images/Swain_Nevermove.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Swain/LoL#Nevermove" title="Swain/LoL">Nevermove</a></span></span></i>.<br><br>\n<span class="template_sbc"><b>Soul Fragment:</b></span> For each stack, <b>Swain</b> gains <span style="color: #1F995C; white-space:normal">12 <b>bonus</b> health</span>. Upon collection, he will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> for <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="3;4;5;6" data-top_values="1;6;11;16" data-bot_key="%">3 / 4 / 5 / 6% (based on level)</span> of his <b>maximum</b> health</span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 4:',
        raw: ' Upon collection, he will  heal for 3 / 4 / 5 / 6% (based on level) of his maximum health',
        healType: 'BonusHealth',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'maximum_hp',
        unitsText: 'of his maximum health',
        pre: 'Upon collection, he will  heal for 3 / 4 / 5 / 6%',
        post: 'of his maximum health',
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Swain_Death%27s_Hand.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Swain</b> unleashes five bolts of eldritch power over <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.25 seconds, but rounded up to the next game tick.">0.<small>264</small> seconds</span> in a cone in the target direction that deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit. Subsequent bolts against an enemy deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '60 / 80 / 100 / 120 / 140 (+ 38% AP)',
        values: [60, 80, 100, 120, 140],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 80 / 100 / 120 / 140',
        children: [
          {
            values: 38,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 38% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Bonus Damage Per Bolt:',
        raw: '12 / 22 / 32 / 42 / 52 (+ 8% AP)',
        values: [12, 22, 32, 42, 52],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '12 / 22 / 32 / 42 / 52',
        children: [
          {
            values: 8,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 8% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Damage:',
        raw: '108 / 168 / 228 / 288 / 348 (+ 70% AP)',
        values: [108, 168, 228, 288, 348],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '108 / 168 / 228 / 288 / 348',
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
const W: SubSkill[] = [
  {
    img: '/wiki/images/Swain_Vision_of_Empire.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Swain</b> summons a demonic eye at the target location that grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area for 2 seconds and explodes after 1.<small>5</small> seconds, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within, halved against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them for 2.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '80 / 115 / 150 / 185 / 220 (+ 55% AP)',
        values: [80, 115, 150, 185, 220],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 115 / 150 / 185 / 220',
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
      {
        effectType: 'Unique',
        name: 'Minion Damage:',
        raw: '40 / 57.5 / 75 / 92.5 / 110 (+ 27.5% AP)',
        values: [40, 57.5, 75, 92.5, 110],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 57.5 / 75 / 92.5 / 110',
        children: [
          {
            values: 27.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 27.5% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Slow:',
        raw: '25 / 35 / 45 / 55 / 65%',
        values: [25, 35, 45, 55, 65],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 35 / 45 / 55 / 65%',
      },
    ],
  },
  {
    description:
      'Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> hit are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span> for a duration and have a <span style="color: #E34D4C; white-space:normal">Soul Fragment</span> collected from them.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Reveal Duration:',
        raw: '4 / 5 / 6 / 7 / 8',
        values: [4, 5, 6, 7, 8],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '4 / 5 / 6 / 7 / 8',
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Swain_Nevermove.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Swain</b> launches a demonic wave in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '35 / 70 / 105 / 140 / 175 (+ 25% AP)',
        values: [35, 70, 105, 140, 175],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '35 / 70 / 105 / 140 / 175',
        children: [
          {
            values: 25,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 25% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'At maximum range, the wave homes back to <b>Swain</b> and detonates upon the first enemy hit, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooting</a></span> them for 1.<small>5</small> seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span>. <i>Nevermove</i> can be recast while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> hit are rooted.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '35 / 45 / 55 / 65 / 75 (+ 25% AP)',
        values: [35, 45, 55, 65, 75],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '35 / 45 / 55 / 65 / 75',
        children: [
          {
            values: 25,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 25% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '70 / 115 / 160 / 205 / 250 (+ 50% AP)',
        values: [70, 115, 160, 205, 250],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 115 / 160 / 205 / 250',
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
    img: '/wiki/images/Swain_Nevermove_2.png',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Swain</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulls</a></span> the rooted champions over 290 units and collects a <span style="color: #E34D4C; white-space:normal">Soul Fragment</span> from each of them. If the targets would be brought past <b>Swain</b>, they are instead <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked back</a></span> the excess distance.',
    leveling: [],
  },
];
const R1: SubSkill[] = [
  {
    img: '/wiki/images/Swain_Demonic_Ascension.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Swain</b> frees the demon within, gaining <i>Demonic Ascension</i> and generating <span style="color: #E2103F; white-space:normal">50 Demonic Energy</span>. <i>Demonic Ascension</i> is maintained with <span style="color: #E2103F; white-space:normal">Demonic Energy</span>, which decays by <span style="color: #E2103F; white-space:normal">5</span> every 0.<small>5</small> seconds, increased to <span style="color: #E2103F; white-space:normal">7.<small>5</small></span> after 5 seconds have elapsed. <b>Swain</b> generates <span style="color: #E2103F; white-space:normal">10 Demonic Energy</span> every 0.<small>5</small> seconds while draining from at least one enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, and fully restores it to the maximum of <span style="color: #E2103F; white-space:normal">50</span> upon scoring a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span>.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Demonic Ascension:</b></span> <b>Swain</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and drains the lifeforce of nearby enemies, both dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Healing"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> himself each second per target affected. The heal is reduced by 90% against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>. <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Swain" data-ability="Nevermove" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Swain/LoL#Nevermove" title="Nevermove\'s"><img alt="Nevermove\'s" src="/wiki/images/Swain_Nevermove.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Swain/LoL#Nevermove" title="Swain/LoL">Nevermove\'s</a></span></span></i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is also reduced by 20%.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage per Tick:',
        raw: '20 / 40 / 60 (+ 10% AP)',
        values: [20, 40, 60],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 40 / 60',
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
        name: 'Heal per Tick:',
        raw: '15 / 27.5 / 40 (+ 18% AP)',
        values: [15, 27.5, 40],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 27.5 / 40',
        children: [
          {
            values: 18,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 18% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Reduced Healing:',
        raw: '1.5 / 2.75 / 4 (+ 1.8% AP)',
        values: [1.5, 2.75, 4],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1.5 / 2.75 / 4',
        children: [
          {
            values: 1.8,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 1.8% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'After 2 seconds, <b>Swain</b> can cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Swain" data-ability="Demonflare" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Swain/LoL#Demonflare" title="Demonflare"><img alt="Demonflare" src="/wiki/images/Swain_Demonflare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Swain/LoL#Demonflare" title="Swain/LoL">Demonflare</a></span></span></i>, and does so automatically when <i>Demonic Ascension</i> expires.',
    leveling: [],
  },
  {
    description:
      '<i>The targets do not have to be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> to be hit by this ability.</i>',
    leveling: [],
  },
];
const R2: SubSkill[] = [
  {
    img: '/wiki/images/Swain_Demonflare.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Swain</b> releases a nova of soulfire that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 60%, decaying over 1.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '150 / 225 / 300 (+ 60% AP)',
        values: [150, 225, 300],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 225 / 300',
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
export const Swain = { I, Q, W, E, R1, R2 };
