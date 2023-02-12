import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Bard';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Bard_Traveler%27s_Call.png',
    description:
      '<span class="template_sbc"><b>Innate - Ancient Chimes:</b></span> <b>Bard\'s</b> presence causes sacred <img alt="Traveler\'s Call Minimap.png" src="/wiki/images/Traveler%27s_Call_Minimap.png" decoding="async" loading="lazy" width="16" height="16" class="lazyload"> <span style="color: #56C456; white-space:normal">Chimes</span> to appear at random locations on the map, lingering for up to 10 minutes. Collecting a <span style="color: #56C456; white-space:normal">Chime</span> grants <b>Bard</b> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">24% <b>bonus</b> movement speed</span></span> <a href="/wiki/Combat_status" title="Combat status">out of combat</a> for 7 seconds, stacking up to 5 times, with every other <span style="color: #56C456; white-space:normal">Chime</span> collected beyond the first granting an additional <span style="color: #F5EE99; white-space:normal">14% <b>bonus</b> movement speed</span>, up to a total of <span style="color: #F5EE99; white-space:normal">80% <b>bonus</b> movement speed</span>, <span style="white-space:nowrap"><a href="/wiki/Experience_(champion)" title="Experience (champion)"><img alt="Experience icon.png" src="/wiki/images/Experience_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #883FD1; white-space:normal">20 +&nbsp;(<i>1 per minute after 5 minutes</i>) experience</span></span>, and <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">12% <b>maximum</b> mana</span></span>. <b>Bard</b> empowers his <span style="color: #E34D4C; white-space:normal">Meeps</span> each time he collects <span style="color: #56C456; white-space:normal">5 Chimes</span>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 2:',
        raw: ' Collecting a Chime grants Bard  24% bonus movement speed out of combat for 7 seconds, stacking up to 5 times, with every other Chime collected beyond the first granting an additional 14% bonus movement speed, up to a total of 80% bonus movement speed,  20 + (1 per minute after 5 minutes) experience, and  12% maximum mana',
        increasedStat: 'total_mana',
        values: 2,
        valuesIsPercent: true,
        user: 'player',
        units: '',
        unitsText: 'experience, and  12% maximum mana',
        pre: 'Collecting a Chime grants Bard  24% bonus movement speed out of combat for 7 seconds, stacking up to 5 times, with every other Chime collected beyond the first granting an additional 14% bonus movement speed, up to a total of 80% bonus movement speed,  20 +',
        post: 'experience, and  12% maximum mana',
        children: [
          {
            values: 1,
            user: 'none',
            units: '',
            unitsText: 'per minute after 5 minutes',
            pre: '1 per minute after 5 minutes',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Bard_Traveler%27s_Call_2.png',
    description:
      '<span class="template_sbc"><b>Innate - Meeps:</b></span> <b>Bard\'s</b> presence attracts <span style="color: #E34D4C; white-space:normal">Meeps</span>, which are small spirits that come to his side. While he has <span style="color: #E34D4C; white-space:normal">Meeps</span>, his basic attacks are empowered to each consume a <span style="color: #E34D4C; white-space:normal">Meep</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> to deal <span style="color: #00B0F0; white-space:normal">35</span> (<i>+ <span style="color: #00B0F0; white-space:normal">14</span> per 5 <span style="color: #56C456; white-space:normal">Chimes</span> collected</i>) <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.\n',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 2:',
        raw: ' While he has Meeps, his basic attacks are empowered to each consume a Meep on-attack to deal 35 (+ 14 per 5 Chimes collected) (+ 30% AP) bonus magic damage',
        damagetype: 'Magic',
        values: 3,
        user: 'none',
        units: '',
        unitsText: 'bonus magic damage',
        pre: 'While he has Meeps, his basic attacks are empowered to each consume a Meep on-attack to deal 35',
        post: 'bonus magic damage',
        children: [
          {
            values: 14,
            user: 'none',
            units: '',
            unitsText: 'per 5 Chimes collected',
            pre: '+ 14 per 5 Chimes collected',
          },
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
    ],
  },
  {
    description:
      '<span style="color: #E34D4C; white-space:normal">Meeps</span> spawn every <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="number of Chimes" data-bot_values="8;7;6;5;4" data-top_values="0;20;40;55;70">8 − 4 (based on number of Chimes)</span> seconds and <b>Bard</b> can have up to <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="number of Chimes" data-bot_values="1;2;3;4;5;6;7;8;9" data-top_values="0;10;30;50;65;80;90;95;100">1 − 9 (based on number of Chimes)</span> of them at a time.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 1:',
        raw: 'Meeps spawn every 8 − 4 (based on number of Chimes) seconds and Bard can have up to 1 − 9 (based on number of Chimes) of them at a time',
        values: [8, 4],
        user: 'none',
        units: '',
        unitsText: 'seconds and Bard can have up to 1 − 9',
        pre: 'Meeps spawn every 8 − 4',
        post: 'seconds and Bard can have up to 1 − 9',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on number of Chimes',
            pre: 'based on number of Chimes',
          },
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on number of Chimes',
            pre: 'based on number of Chimes',
          },
        ],
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Bard_Cosmic_Binding.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Bard</b> fires an energy bolt in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 60% for a duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '80 / 125 / 170 / 215 / 260 (+ 65% AP)',
        values: [80, 125, 170, 215, 260],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 125 / 170 / 215 / 260',
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
      {
        effectType: 'Unique',
        name: 'Disable Duration:',
        raw: '1 / 1.2 / 1.4 / 1.6 / 1.8',
        values: [1, 1.2, 1.4, 1.6, 1.8],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1 / 1.2 / 1.4 / 1.6 / 1.8',
      },
    ],
  },
  {
    description:
      'After <i>Cosmic Binding</i> hits an enemy, the bolt continues behind them for <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">300 units</span>. If the bolt hits terrain or a second enemy, it <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> both targets for the same duration, dealing the same damage to the secondary target.',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Bard_Caretaker%27s_Shrine.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Bard</b> conjures a shrine at the target location that gathers power over 10 seconds, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of its surroundings for <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">1.<small>8</small> seconds</span>. Shrines last until they are consumed by champions moving over them. Up to 3 shrines may be active at a time.',
    leveling: [],
  },
  {
    description:
      'If the champion was an ally or <b>Bard</b> himself, they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healed</a></span> for an amount based on the shrine\'s power and gain <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">30% <b>bonus</b> movement speed</span></span> that decays over 1.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Minimum Heal:',
        raw: '25 / 50 / 75 / 100 / 125 (+ 30% AP)',
        values: [25, 50, 75, 100, 125],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 50 / 75 / 100 / 125',
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
        name: 'Maximum Heal:',
        raw: '50 / 87.5 / 125 / 162.5 / 200 (+ 60% AP)',
        values: [50, 87.5, 125, 162.5, 200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 87.5 / 125 / 162.5 / 200',
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
const E: SubSkill[] = [
  {
    img: '/wiki/images/Bard_Magical_Journey.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Bard</b> opens a one-way magical corridor through a piece of <a href="/wiki/Terrain" title="Terrain">terrain</a> in the target direction for 10 seconds.',
    leveling: [],
  },
  {
    description:
      'A champion can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">pass</a></span> through the corridor by selecting it, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span> during the travel. <b>Bard</b> and allies travel through the portal at 33% increased speed.',
    leveling: [],
  },
  {
    description:
      '<i>A nearby valid piece of terrain is required to cast this ability. Magical Journey cannot be taken while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span>.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Bard_Tempered_Fate.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Bard</b> sends magical energy arcing to the target location, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area during travel. Upon impact, it puts all units within into <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stasis"><a href="/wiki/Stasis" title="Stasis"><img alt="Stasis icon.png" src="/wiki/images/Stasis_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stasis" class="mw-redirect" title="Stasis">stasis</a></span> for 2.<small>5</small> seconds, as well as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> all enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span> struck for the same duration. Enemies hit are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span> for the duration.',
    leveling: [],
  },
  {
    description:
      '<i>Epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span> are affected by Tempered Fate despite being <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">immune to crowd control</a></span>.</i>',
    leveling: [],
  },
];
export const Bard = { I, Q, W, E, R };
