import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Lillia';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Lillia_Dream-Laden_Bough.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Lillia\'s</b> <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> apply <i>Dream Dust</i> to enemies hit, which deals<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color: #1F995C; white-space:normal">5% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;1.<small>5</small>% per 100 AP)</span> of the target\'s <b>maximum</b> health</span> <span style="color: #00B0F0; white-space:normal"><b>total</b> magic damage</span> over 3 seconds, capped at <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="50;" data-finish="150;" data-bot_values="50;55.88;61.76;67.65;73.53;79.41;85.29;91.18;97.06;102.94;108.82;114.71;120.59;126.47;132.35;138.24;144.12;150" data-top_values="">50 − 150 (based on level)</span>&nbsp;」</span><span class="flipText2">「&nbsp;<span style="color: #1F995C; white-space:normal">0.<small>8<span style="text-decoration: overline;">3</span></small>% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;0.<small>25</small>% per 100 AP)</span> of the target\'s <b>maximum</b> health</span> <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>5</small> seconds over 3 seconds, capped at <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="8.3333333333333;" data-finish="25;" data-bot_values="8.33;9.31;10.29;11.27;12.25;13.24;14.22;15.2;16.18;17.16;18.14;19.12;20.1;21.08;22.06;23.04;24.02;25" data-top_values="">8.<small>33</small> − 25 (based on level)</span> per tick&nbsp;」</span></span>against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 2:',
        raw: "5% per 100 AP) of the target's maximum health total magic damage over 3 seconds, capped at 50 − 150 (based on level) 」「 0",
        healType: 'OutgoingHeals',
        values: [
          50, 55.88, 61.76, 67.65, 73.53, 79.41, 85.29, 91.18, 97.06, 102.94,
          108.82, 114.71, 120.59, 126.47, 132.35, 138.24, 144.12, 150,
        ],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '」「 0',
        pre: "5% per 100 AP of the target's maximum health total magic damage over 3 seconds, capped at 50 − 150",
        post: '」「 0',
      },
      {
        effectType: 'Gain',
        name: 'Line 6:',
        raw: '33 − 25 (based on level) per tick 」against  monsters',
        values: [
          33, 32.53, 32.06, 31.59, 31.12, 30.65, 30.18, 29.71, 29.24, 28.76,
          28.29, 27.82, 27.35, 26.88, 26.41, 25.94, 25.47, 25,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'per tick 」against  monsters',
        pre: '33 − 25',
        post: 'per tick 」against  monsters',
      },
    ],
  },
  {
    description:
      '<b>Lillia</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="24;" data-finish="75;" data-bot_values="24;27;30;33;36;39;42;45;48;51;54;57;60;63;66;69;72;75" data-top_values="">24 − 75 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;5.<small>4</small>% AP)</span> against large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> and <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-useformula="(1 + (19 / 17) * (x - 1) * (0.7025 + 0.0175 * (x - 1)))*6" data-bot_values="6;10.83;15.89;21.19;26.72;32.49;38.49;44.73;51.2;57.9;64.84;72.02;79.43;87.07;94.95;103.07;111.42;120" data-top_values="">6 − 120 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;18% AP)</span> against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> over the duration of <i>Dream Dust</i>, reduced to 33% effectiveness for each target beyond the first. She may only heal against 1 monster at a time.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: 'Lillia  heals for 24 − 75 (based on level) (+ 5',
        healType: 'DrainEffect',
        values: [
          24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72,
          75,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '+ 5',
        pre: 'Lillia  heals for 24 − 75',
        post: '+ 5',
      },
      {
        effectType: 'Gain',
        name: 'Line 2:',
        raw: '4% AP) against large  monsters and 6 − 120 (based on level) (+ 18% AP) against  champions over the duration of Dream Dust, reduced to 33% effectiveness for each target beyond the first',
        values: [
          6, 12.71, 19.41, 26.12, 32.82, 39.53, 46.24, 52.94, 59.65, 66.35,
          73.06, 79.76, 86.47, 93.18, 99.88, 106.59, 113.29, 120,
        ],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText:
          'against  champions over the duration of Dream Dust, reduced to 33% effectiveness for each target beyond the first',
        pre: '4% AP against large  monsters and 6 − 120',
        post: 'against  champions over the duration of Dream Dust, reduced to 33% effectiveness for each target beyond the first',
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
    ],
  },
];
const Q: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> Whenever <b>Lillia\'s</b> abilities hit at least one enemy, she generates a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Prance</i> for 6.<small>5</small> seconds, refreshing on subsequent hits and stacking up to 4 times. Stacks expire by one every 1.<small>5</small> seconds when the duration ends.',
    leveling: [],
  },
  {
    img: '/wiki/images/Lillia_Prance.png',
    description:
      '<span class="template_sbc"><b>Prance:</b></span> For each stack, <b>Lillia</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Movement Speed:',
        raw: '3 / 4 / 5 / 6 / 7% (+ 3% per 100 AP)',
        values: [3, 4, 5, 6, 7],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '3 / 4 / 5 / 6 / 7%',
        children: [
          {
            values: 3,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 3% per 100 AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Bonus Movement Speed:',
        raw: '12 / 16 / 20 / 24 / 28% (+ 12% per 100 AP)',
        values: [12, 16, 20, 24, 28],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '12 / 16 / 20 / 24 / 28%',
        children: [
          {
            values: 12,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 12% per 100 AP',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Lillia_Blooming_Blows.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Lillia</b> swings her censer around her, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies. Enemies hit within the outer edge of the area additionally take the same amount as <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal"><b>bonus</b> true damage</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '35 / 45 / 55 / 65 / 75 (+ 45% AP)',
        values: [35, 45, 55, 65, 75],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '35 / 45 / 55 / 65 / 75',
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
        name: 'Total Mixed Damage:',
        raw: '70 / 90 / 110 / 130 / 150 (+ 90% AP)',
        values: [70, 90, 110, 130, 150],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 90 / 110 / 130 / 150',
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
    img: '/wiki/images/Lillia_Watch_Out%21_Eep%21.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Lillia</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to 150 units in front of the target location over <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.75 seconds, but rounded up to the next game tick.">0.<small>759</small> seconds</span>, though not through terrain, and deals <span style="color: #00B0F0; white-space:normal">magic damage</span> in an area around the target spot. Enemies hit within the epicenter are dealt <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">200% increased damage</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '80 / 100 / 120 / 140 / 160 (+ 35% AP)',
        values: [80, 100, 120, 140, 160],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 100 / 120 / 140 / 160',
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
        name: 'Increased Damage:',
        raw: '240 / 300 / 360 / 420 / 480 (+ 105% AP)',
        values: [240, 300, 360, 420, 480],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '240 / 300 / 360 / 420 / 480',
        children: [
          {
            values: 105,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 105% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Watch Out! Eep!</i> deals 50% damage to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Minion Damage:',
        raw: '40 / 50 / 60 / 70 / 80 (+ 17.5% AP)',
        values: [40, 50, 60, 70, 80],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 50 / 60 / 70 / 80',
        children: [
          {
            values: 17.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 17.5% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Increased Minion Damage:',
        raw: '120 / 150 / 180 / 210 / 240 (+ 52.5% AP)',
        values: [120, 150, 180, 210, 240],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '120 / 150 / 180 / 210 / 240',
        children: [
          {
            values: 52.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 52.5% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Watch Out! Eep! will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Lillia_Swirlseed.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Lillia</b> lobs a seed at the target location that rolls forward indefinitely. The seed detonates upon hitting an enemy or terrain while on the ground, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies in a cone, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 40% for 3 seconds and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> them for 2 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 95 / 120 / 145 / 170 (+ 60% AP)',
        values: [70, 95, 120, 145, 170],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 95 / 120 / 145 / 170',
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
    description: '<i>Swirlseed will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Lillia_Lilting_Lullaby.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Lillia</b> casts a magical lullaby over all enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> affected by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lillia" data-ability="Dream-Laden Bough" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lillia/LoL#Dream-Laden_Bough" title="Dream Dust"><img alt="Dream Dust" src="/wiki/images/Lillia_Dream-Laden_Bough.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lillia/LoL#Dream-Laden_Bough" title="Lillia/LoL">Dream Dust</a></span></span></i>, which <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="fixed travel time missile">arrives after 0.<small>3</small> seconds</span> and renders them <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Drowsy"><a href="/wiki/Types_of_Crowd_Control#Drowsy" title="Types of Crowd Control#Drowsy"><img alt="Drowsy icon.png" src="/wiki/images/Drowsy_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Drowsy" title="Types of Crowd Control">drowsy</a></span> for 1.<small>5</small> seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 10%. After the duration, they fall <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Asleep"><a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control#Sleep"><img alt="Sleep icon.png" src="/wiki/images/Sleep_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control">asleep</a></span> for a duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Sleep Duration:',
        raw: '2 / 2.25 / 2.5',
        values: [2, 2.25, 2.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '2 / 2.25 / 2.5',
      },
    ],
  },
  {
    img: '/wiki/images/Lillia_Lilting_Lullaby_2.png',
    description:
      'The next instance of non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Persistent damage"><a href="/wiki/Damage" title="Damage"><img alt="Blaze.png" src="/wiki/images/Brand_Blaze.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">persistent</a></span> non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span> non-small and medium <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> damage against a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sleep"><a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control#Sleep"><img alt="Sleep icon.png" src="/wiki/images/Sleep_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control">sleeping</a></span> target consumes the debuff to deal <span style="color: #00B0F0; white-space:normal"><b>additional</b> magic damage</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '100 / 150 / 200 (+ 40% AP)',
        values: [100, 150, 200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '100 / 150 / 200',
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
      '<i>An enemy champion affected by <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lillia" data-ability="Dream-Laden Bough" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lillia/LoL#Dream-Laden_Bough" title="Dream Dust"><img alt="Dream Dust" src="/wiki/images/Lillia_Dream-Laden_Bough.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lillia/LoL#Dream-Laden_Bough" title="Lillia/LoL">Dream Dust</a></span></span> is required to cast this ability.</i>',
    leveling: [],
  },
];
export const Lillia = { I, Q, W, E, R };
