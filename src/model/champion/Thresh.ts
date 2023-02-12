import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Thresh';
const I: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Thresh\'s</b> <span style="color:yellow; white-space:normal">armor</span> cannot increase through <a href="/wiki/Growth#Increasing_Statistics" class="mw-redirect" title="Growth">growth (per level)</a>.',
    leveling: [],
  },
  {
    img: '/wiki/images/Thresh_Damnation.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> that die near <b>Thresh</b> drop a <i>Soul</i> for 8 seconds. Epic monsters drop 2 <i>Souls</i> while lesser minions and monsters have a 33.<small><span style="text-decoration: overline;">3</span></small>% chance to drop a <i>Soul</i>.',
    leveling: [],
  },
  {
    description:
      '<b>Thresh</b> automatically collects <i>Souls</i> near him or a placed <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Thresh" data-ability="Dark Passage" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Thresh/LoL#Dark_Passage" title="Dark Passage"><img alt="Dark Passage" src="/wiki/images/Thresh_Dark_Passage.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Thresh/LoL#Dark_Passage" title="Thresh/LoL">Dark Passage</a></span></span></i>.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Soul:</b></span> For each <a href="/wiki/Stack" title="Stack">stack</a>, <b>Thresh</b> gains <span style="white-space:nowrap"><a href="/wiki/Ability_power" title="Ability power"><img alt="Ability power icon.png" src="/wiki/images/Ability_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #7A6DFF; white-space:normal">1 ability power</span></span> and <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">1 <b>bonus</b> armor</span></span>.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Thresh_Death_Sentence.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Thresh</b> throws out his scythe in the target direction, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">unable</a></span> to move or attack while it is in flight.',
    leveling: [],
  },
  {
    description:
      'The scythe catches the first enemy hit to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">reveal</a></span> them for 1.<small>5</small> seconds, as well as reduce <i>Death Sentence\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> by 3 seconds. <b>Thresh</b> will also mark the target <i>Shackled</i> for 1.<small>5</small> seconds, during which he is unable to declare basic attacks, and is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 20% for 1 second.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '100 / 145 / 190 / 235 / 280 (+ 80% AP)',
        values: [100, 145, 190, 235, 280],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '100 / 145 / 190 / 235 / 280',
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
  {
    description:
      'While the target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span>, <b>Thresh</b> tugs twice over 0.<small>8</small> seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulling</a></span> the target a short distance with each tug. After 0.<small>5</small> seconds of hitting an enemy or instantly after hitting a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>, <b>Thresh</b> can recast the ability while the target is <i>Shackled</i>, which will cause him to stop tugging.',
    leveling: [],
  },
  {
    img: '/wiki/images/Thresh_Deathly_Leap.png',
    description:
      '<span class="template_sbc"><b>Recast - Deathly Leap:</b></span> <b>Thresh</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the <i>Shackled</i> enemy, becoming able to attack again upon arrival. He can cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Thresh" data-ability="Dark Passage" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Thresh/LoL#Dark_Passage" title="Dark Passage"><img alt="Dark Passage" src="/wiki/images/Thresh_Dark_Passage.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Thresh/LoL#Dark_Passage" title="Thresh/LoL">Dark Passage</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Thresh" data-ability="Flay" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Thresh/LoL#Flay" title="Flay"><img alt="Flay" src="/wiki/images/Thresh_Flay.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Thresh/LoL#Flay" title="Thresh/LoL">Flay</a></span></span></i> during the dash.',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Thresh_Dark_Passage.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Thresh</b> throws his lantern to the target location over 0.<small>5</small> seconds, lasting for 6 seconds while he remains nearby and granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of its surroundings. If <b>Thresh</b> moves too far away from the lantern, it returns back to him immediately.',
    leveling: [],
  },
  {
    description:
      '<b>Thresh</b> and the first allied champion to come near the lantern are granted a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 4 seconds. An ally can select the lantern while in proximity of it, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashing</a></span> to <b>Thresh</b> and gaining the shield.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Shield Strength:',
        raw: '50 / 75 / 100 / 125 / 150 (+ 1.5 per  Soul collected)',
        values: [50, 75, 100, 125, 150],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 75 / 100 / 125 / 150',
        children: [
          {
            values: 1.5,
            user: 'player',
            units: 'darkHarvestStacks',
            unitsText: 'per  Soul collected',
            pre: '+ 1.5 per  Soul collected',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>An ally cannot select the lantern while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span>, or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">silenced</a></span>. The lantern will not expire from <b>Thresh</b> moving too far away if he is dashing with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Thresh" data-ability="Deathly Leap" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Thresh/LoL#Deathly_Leap" title="Deathly Leap"><img alt="Deathly Leap" src="/wiki/images/Thresh_Deathly_Leap.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Thresh/LoL#Deathly_Leap" title="Thresh/LoL">Deathly Leap</a></span></span>.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Thresh_Flay.gif',
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Thresh\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> are empowered to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>, with the <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal">AD</span></span> ratio increasing over 10 seconds without basic attacking enemies.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Minimum Bonus Magic Damage:',
        raw: '1.5 per  Soul collected (+ 0% AD)',
        values: 1.5,
        user: 'player',
        units: 'darkHarvestStacks',
        unitsText: 'per  Soul collected',
        pre: '1.5 per  Soul collected',
        children: [
          {
            values: 0,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 0% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Bonus Magic Damage:',
        raw: '1.5 per  Soul collected (+ 80 / 110 / 140 / 170 / 200% AD)',
        values: 1.5,
        user: 'player',
        units: 'darkHarvestStacks',
        unitsText: 'per  Soul collected',
        pre: '1.5 per  Soul collected',
        children: [
          {
            values: [80, 110, 140, 170, 200],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 80 / 110 / 140 / 170 / 200% AD',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Thresh_Flay.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Thresh</b> sweeps his chain across the ground in a broad line and a radius around him, starting behind him and towards the target direction. Enemies hit are dealt <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked</a></span> 200 units in the target direction, and then are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> for 1 second.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '75 / 110 / 145 / 180 / 215 (+ 60% AP)',
        values: [75, 110, 145, 180, 215],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '75 / 110 / 145 / 180 / 215',
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
        name: 'Slow:',
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
const R: SubSkill[] = [
  {
    img: '/wiki/images/Thresh_The_Box.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Thresh</b> erects a pentagon of spectral walls around him that each last for 5 seconds. A wall will break upon enemy champion contact, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 99% for 2 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '250 / 400 / 550 (+ 100% AP)',
        values: [250, 400, 550],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '250 / 400 / 550',
        children: [
          {
            values: 100,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 100% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'Enemies that break a wall cannot do so again for 1 second. Subsequent walls they break will deal no damage and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> for only 1 second.',
    leveling: [],
  },
];
export const Thresh = { I, Q, W, E, R };
