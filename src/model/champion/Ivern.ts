import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Ivern';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Ivern_Friend_of_the_Forest.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Ivern</b> cannot attack nor damage non-epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>. Instead, targeting a jungle camp initiates a 2.<small>5</small> second <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channel</a></span> that will plant a <span style="color: #56C456; white-space:normal">grove</span> upon the camp. Placing a <span style="color: #56C456; white-space:normal">grove</span> costs <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="(15% - 0.882% per level after 1) of base health" data-bot_values="98.25;102.54;106.02;108.62;110.24;110.78;110.15;108.27;105.04;100.37;94.17;86.34;76.8;65.45;52.2;36.96;19.64;0.14" data-top_values="">98.<small>25</small> − 0.<small>14</small> (based on level)</span> health</span></span> and <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="(20% - 1.175% per level after 1) of base mana" data-bot_values="90;92.84;95.05;96.53;97.22;97.04;95.92;93.79;90.57;86.18;80.56;73.63;65.31;55.54;44.23;31.31;16.72;0.37" data-top_values="">90 − 0.<small>37</small> (based on level)</span> mana</span></span>. The channel cannot be cancelled in the first 0.<small>15</small> seconds and in the last 0.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 5:',
        raw: '25 − 0',
        values: [25, 0],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 − 0',
      },
      {
        effectType: 'Heal',
        name: 'Line 6:',
        raw: '14 (based on level) health and  90 − 0',
        healType: 'BonusHealth',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'total_hp',
        unitsText: 'health and  90 − 0',
        pre: '14',
        post: 'health and  90 − 0',
      },
      {
        effectType: 'Unique',
        name: 'Line 7:',
        raw: '37 (based on level) mana',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'total_mana',
        unitsText: 'mana',
        pre: '37',
        post: 'mana',
      },
    ],
  },
  {
    description:
      '<b>Ivern</b> cannot place a grove while he is unable to cast abilities.',
    leveling: [],
  },
  {
    description:
      'The <span style="color: #56C456; white-space:normal">grove</span> matures over <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="42 - 2 per level until level 6, then 3 until level 11, then 4 until level 15. \'\'This is capped at 1 second at level 15.\'\'" data-bot_values="40;38;36;34;32;30;27;24;21;18;15;11;7;3;1" data-top_values="">40 − 1 (based on level)</span> seconds. When fully matured, <b>Ivern</b> can target the camp again to <i>free</i> it after a 0.<small>5</small>-second <a href="/wiki/Channel#Casting_Times" title="Channel">cast time</a>, clearing the camp and receiving the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Not full when freeing Krug camp, see notes"><span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="full gold Gold"><img alt="full gold Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">full gold</span></span> and <span style="white-space:nowrap"><a href="/wiki/Experience_(champion)" title="Experience (champion)"><img alt="Experience icon.png" src="/wiki/images/Experience_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #883FD1; white-space:normal">full experience</span></span></span> <a href="/wiki/Bounty" class="mw-disambig" title="Bounty">bounties</a>. Using <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> on a monster within the <span style="color: #56C456; white-space:normal">grove</span> will instantly <i>free</i> the camp regardless of maturity.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 1:',
        raw: 'The grove matures over 40 − 1 (based on level) seconds',
        values: [
          40, 37.71, 35.41, 33.12, 30.82, 28.53, 26.24, 23.94, 21.65, 19.35,
          17.06, 14.76, 12.47, 10.18, 7.88, 5.59, 3.29, 1,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'seconds',
        pre: 'The grove matures over 40 − 1',
        post: 'seconds',
      },
    ],
  },
  {
    description:
      'If the camp\'s large monster has already been slain prior to planting a <span style="color: #56C456; white-space:normal">grove</span>, <b>Ivern</b> will <i>free</i> the camp upon completing the channel at no cost. Similarly, the <span style="color: #56C456; white-space:normal">grove</span> will instantly mature if the large monster is slain.',
    leveling: [],
  },
  {
    description:
      'Starting at level 5, freeing the <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Red_Brambleback" title="Red Brambleback"><img alt="Red Brambleback" src="/wiki/images/Red_BramblebackSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Red_Brambleback" title="Red Brambleback">Red Brambleback</a></span></span> or the <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Blue_Sentinel" title="Blue Sentinel"><img alt="Blue Sentinel" src="/wiki/images/Blue_SentinelSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Blue_Sentinel" title="Blue Sentinel">Blue Sentinel</a></span></span> leaves behind a <i>sapling</i> for 60 seconds that can be gathered by one allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> to gain the camp\'s respective buff, either the <span class="inline-image label-after buff-icon" style="display:inline;white-space:pre;" data-param="" data-buff="Crest of Cinders" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Crest_of_Cinders" title="Crest of Cinders"><img alt="Crest of Cinders" src="/wiki/images/Crest_of_Cinders_buff.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Crest_of_Cinders" title="Crest of Cinders">Crest of Cinders</a></span></span> or the <span class="inline-image label-after buff-icon" style="display:inline;white-space:pre;" data-param="" data-buff="Crest of Insight" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Crest_of_Insight" title="Crest of Insight"><img alt="Crest of Insight" src="/wiki/images/Crest_of_Insight_buff.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Crest_of_Insight" title="Crest of Insight">Crest of Insight</a></span></span>. If an ally kills either monster, they also leave behind a <i>sapling</i> that only <b>Ivern</b> can consume.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Ivern_Rootcaller.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Ivern</b> throws a vine in the target direction, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooting</a></span> them for a duration, during which they are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span>. <i>Rootcaller</i> can be recast while the target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '80 / 125 / 170 / 215 / 260 (+ 70% AP)',
        values: [80, 125, 170, 215, 260],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 125 / 170 / 215 / 260',
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
      {
        effectType: 'Unique',
        name: 'Root Duration:',
        raw: '1.2 / 1.4 / 1.6 / 1.8 / 2',
        values: [1.2, 1.4, 1.6, 1.8, 2],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1.2 / 1.4 / 1.6 / 1.8 / 2',
      },
    ],
  },
  {
    description:
      '<b>Ivern</b> and allied champions can select the target <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span> by <i>Rootcaller</i> to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> to their location, with allies stopping at <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;their attack range</span> and <b>Ivern</b> stopping within 125 units from the target.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Ivern</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target.',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> While <b>Ivern</b> is in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Brush"><a href="/wiki/Brush" title="Brush"><img alt="Brushmaker.png" src="/wiki/images/Ivern_Brushmaker.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Brush" title="Brush">brush</a></span>, his basic attacks are empowered to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>. This bonus persists for 3 seconds after leaving brush.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Magic Damage:',
        raw: '30 / 37.5 / 45 / 52.5 / 60 (+ 30% AP)',
        values: [30, 37.5, 45, 52.5, 60],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 37.5 / 45 / 52.5 / 60',
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
    ],
  },
  {
    img: '/wiki/images/Ivern_Brushmaker.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Ivern</b> grows a patch of <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Brush"><a href="/wiki/Brush" title="Brush"><img alt="Brushmaker.png" src="/wiki/images/Ivern_Brushmaker.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Brush" title="Brush">brush</a></span> at the target location for 30 seconds, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area within and around it for 3 seconds. Spawning brush near <a href="/wiki/Terrain" title="Terrain">terrain</a> or other brush increases its radius.',
    leveling: [],
  },
  {
    description:
      '<b>Ivern</b> periodically <a href="/wiki/Stocks" class="mw-redirect" title="Stocks">stocks</a> a <i>Brushmaker</i> charge, up to a maximum of 3.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Ivern_Triggerseed.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Ivern</b> places a seed on the target allied champion, <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Daisy" title="Daisy"><img alt="Daisy" src="/wiki/images/DaisySquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Daisy" title="Daisy">Daisy</a></span></span>, or himself, granting the target a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 2 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Shield Strength:',
        raw: '80 / 115 / 150 / 185 / 220 (+ 75% AP)',
        values: [80, 115, 150, 185, 220],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 115 / 150 / 185 / 220',
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
  {
    description:
      'After 2 seconds, the seed explodes to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> them for 2 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 90 / 110 / 130 / 150 (+ 80% AP)',
        values: [70, 90, 110, 130, 150],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 90 / 110 / 130 / 150',
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
        name: 'Slow:',
        raw: '50 / 55 / 60 / 65 / 70%',
        values: [50, 55, 60, 65, 70],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 55 / 60 / 65 / 70%',
      },
    ],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Ivern_Daisy%21.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Ivern</b> summons his sentinel friend <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Daisy" title="Daisy"><img alt="Daisy" src="/wiki/images/DaisySquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Daisy" title="Daisy">Daisy</a></span></span> to his side, who lands 350 units away from him in the target direction and remains on the field for up to 60 seconds as a controllable <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Pet"><a href="/wiki/Pets" title="Pets"><img alt="Summon Tibbers.png" src="/wiki/images/Annie_Summon-_Tibbers.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Pets" title="Pets">pet</a></span>.',
    leveling: [],
  },
  {
    description:
      '<i>Daisy!</i> can be recast at any time while <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Daisy" title="Daisy"><img alt="Daisy" src="/wiki/images/DaisySquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Daisy" title="Daisy">Daisy</a></span></span> is alive.',
    leveling: [],
  },
  {
    img: '/wiki/images/Ivern_Daisy%2C_wait%21.png',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Ivern</b> commands <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Daisy" title="Daisy"><img alt="Daisy" src="/wiki/images/DaisySquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Daisy" title="Daisy">Daisy</a></span></span> to move to the target location. If cast on <b>Ivern</b>, <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Daisy" title="Daisy"><img alt="Daisy" src="/wiki/images/DaisySquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Daisy" title="Daisy">Daisy</a></span></span> will follow him.',
    leveling: [],
  },
  {
    description:
      '<i>The recast of Daisy! can be used while affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast-inhibiting crowd control"><a href="/wiki/Crowd_control#Disrupting" title="Crowd control#Disrupting"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disrupting" title="Crowd control">cast-inhibiting crowd control</a></span>. See <a href="/wiki/Ivern/LoL#Pets" title="Ivern/LoL">Pets</a> for more details about <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Daisy" title="Daisy"><img alt="Daisy" src="/wiki/images/DaisySquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Daisy" title="Daisy">Daisy</a></span></span>.</i>',
    leveling: [],
  },
];
export const Ivern = { I, Q, W, E, R };
