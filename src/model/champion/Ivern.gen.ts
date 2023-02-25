import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Ivern';

export default {
  'Friend of the Forest': {
    name: 'Friend of the Forest',
    display_name: 'Friend of the Forest',
    champion: 'Ivern',
    skill: 'I',
    image: {
      full: 'IvernP.png',
      sprite: 'passive1.png',
      group: 'passive',
      x: 192,
      y: 48,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ivern" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ivern/LoL" title="Ivern"><img alt="Ivern" src="/wiki/images/Ivern_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ivern/LoL" title="Ivern/LoL">Ivern</a></span></span> cannot attack nor damage non-epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>. When he targets a jungle camp, he <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">plants</a></span> a magical <span style="color: #56C456; white-space:normal">grove</span> under it at the cost of <span style="color: #1F995C; white-space:normal">health</span> and <span style="color: #0099CC; white-space:normal">mana</span>.',
      'The <span style="color: #56C456; white-space:normal">grove</span> charges up over time to fully mature, upon which <b>Ivern</b> can then target the monsters to instantly clear the camp. Using <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> on a monster in the <span style="color: #56C456; white-space:normal">grove</span> will clear the camp regardless of maturity.',
      'After level 5, any <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Red_Brambleback" title="Red Brambleback"><img alt="Red Brambleback" src="/wiki/images/Red_BramblebackSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Red_Brambleback" title="Red Brambleback">Red Brambleback</a></span></span> and <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Blue_Sentinel" title="Blue Sentinel"><img alt="Blue Sentinel" src="/wiki/images/Blue_SentinelSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Blue_Sentinel" title="Blue Sentinel">Blue Sentinel</a></span></span> that <b>Ivern</b> clears will additionally drop a sapling that can be gathered by one allied champion for a copy of the buff. If an ally clears the camp, a sapling will drop that only <b>Ivern</b> can gather.',
    ],
    description: [
      {
        icon: '/wiki/images/Friend_of_the_Forest.png',
        description:
          'Innate: Ivern cannot attack nor damage non-epic  monsters. Instead, targeting a jungle camp initiates a 2.5 second  channel that will plant a grove upon the camp. Placing a grove costs  98.25 − 0.14 (based on level) health and  90 − 0.37 (based on level) mana. The channel cannot be cancelled in the first 0.15 seconds and in the last 0.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Ivern</b> cannot attack nor damage non-epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>. Instead, targeting a jungle camp initiates a 2.<small>5</small> second <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channel</a></span> that will plant a <span style="color: #56C456; white-space:normal">grove</span> upon the camp. Placing a <span style="color: #56C456; white-space:normal">grove</span> costs <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="(15% - 0.882% per level after 1) of base health" data-bot_values="98.25;102.54;106.02;108.62;110.24;110.78;110.15;108.27;105.04;100.37;94.17;86.34;76.8;65.45;52.2;36.96;19.64;0.14" data-top_values="">98.<small>25</small> − 0.<small>14</small> (based on level)</span> health</span></span> and <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="(20% - 1.175% per level after 1) of base mana" data-bot_values="90;92.84;95.05;96.53;97.22;97.04;95.92;93.79;90.57;86.18;80.56;73.63;65.31;55.54;44.23;31.31;16.72;0.37" data-top_values="">90 − 0.<small>37</small> (based on level)</span> mana</span></span>. The channel cannot be cancelled in the first 0.<small>15</small> seconds and in the last 0.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Instead, targeting a jungle camp initiates a 2.5 second  channel that will plant a grove upon the camp',
            damagetype: 'None',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'targeting a jungle camp initiates a 2.5 second  channel that will plant a grove upon the camp',
            pre: 'Instead, targeting a jungle camp initiates a 2.5 second  channel that will plant a grove upon the camp',
          },
          {
            effectType: 'Heal',
            name: 'Line 3:',
            raw: 'Placing a grove costs  98.25 − 0.14 (based on level) health and  90 − 0.37 (based on level) mana',
            healType: 'BonusHealth',
            values: [
              98.25, 92.48, 86.71, 80.94, 75.17, 69.39, 63.62, 57.85, 52.08,
              46.31, 40.54, 34.77, 29, 23.22, 17.45, 11.68, 5.91, 0.14,
            ],
            basedOn: 'level',
            units: 'maximum_hp',
            unitsText: 'health and  90 − 0.37',
            pre: 'Placing a grove costs  98.25 − 0.14',
            post: 'health and  90 − 0.37',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Ivern cannot place a grove while he is unable to cast abilities.',
        descriptionHTML:
          '<b>Ivern</b> cannot place a grove while he is unable to cast abilities.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'The grove matures over 40 − 1 (based on level) seconds. When fully matured, Ivern can target the camp again to free it after a 0.5-second cast time, clearing the camp and receiving the  full gold and  full experience bounties. Using  Smite on a monster within the grove will instantly free the camp regardless of maturity.',
        descriptionHTML:
          'The <span style="color: #56C456; white-space:normal">grove</span> matures over <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="42 - 2 per level until level 6, then 3 until level 11, then 4 until level 15. \'\'This is capped at 1 second at level 15.\'\'" data-bot_values="40;38;36;34;32;30;27;24;21;18;15;11;7;3;1" data-top_values="">40 − 1 (based on level)</span> seconds. When fully matured, <b>Ivern</b> can target the camp again to <i>free</i> it after a 0.<small>5</small>-second <a href="/wiki/Channel#Casting_Times" title="Channel">cast time</a>, clearing the camp and receiving the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Not full when freeing Krug camp, see notes"><span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="full gold Gold"><img alt="full gold Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">full gold</span></span> and <span style="white-space:nowrap"><a href="/wiki/Experience_(champion)" title="Experience (champion)"><img alt="Experience icon.png" src="/wiki/images/Experience_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #883FD1; white-space:normal">full experience</span></span></span> <a href="/wiki/Bounty" class="mw-disambig" title="Bounty">bounties</a>. Using <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> on a monster within the <span style="color: #56C456; white-space:normal">grove</span> will instantly <i>free</i> the camp regardless of maturity.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'The grove matures over 40 − 1 (based on level) seconds',
            values: [
              40, 37.71, 35.41, 33.12, 30.82, 28.53, 26.24, 23.94, 21.65, 19.35,
              17.06, 14.76, 12.47, 10.18, 7.88, 5.59, 3.29, 1,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'seconds',
            pre: 'The grove matures over 40 − 1',
            post: 'seconds',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "If the camp's large monster has already been slain prior to planting a grove, Ivern will free the camp upon completing the channel at no cost. Similarly, the grove will instantly mature if the large monster is slain.",
        descriptionHTML:
          'If the camp\'s large monster has already been slain prior to planting a <span style="color: #56C456; white-space:normal">grove</span>, <b>Ivern</b> will <i>free</i> the camp upon completing the channel at no cost. Similarly, the <span style="color: #56C456; white-space:normal">grove</span> will instantly mature if the large monster is slain.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Starting at level 5, freeing the  Red Brambleback or the  Blue Sentinel leaves behind a sapling for 60 seconds that can be gathered by one allied  champion to gain the camp's respective buff, either the  Crest of Cinders or the  Crest of Insight. If an ally kills either monster, they also leave behind a sapling that only Ivern can consume.",
        descriptionHTML:
          'Starting at level 5, freeing the <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Red_Brambleback" title="Red Brambleback"><img alt="Red Brambleback" src="/wiki/images/Red_BramblebackSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Red_Brambleback" title="Red Brambleback">Red Brambleback</a></span></span> or the <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Blue_Sentinel" title="Blue Sentinel"><img alt="Blue Sentinel" src="/wiki/images/Blue_SentinelSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Blue_Sentinel" title="Blue Sentinel">Blue Sentinel</a></span></span> leaves behind a <i>sapling</i> for 60 seconds that can be gathered by one allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> to gain the camp\'s respective buff, either the <span class="inline-image label-after buff-icon" style="display:inline;white-space:pre;" data-param="" data-buff="Crest of Cinders" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Crest_of_Cinders" title="Crest of Cinders"><img alt="Crest of Cinders" src="/wiki/images/Crest_of_Cinders_buff.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Crest_of_Cinders" title="Crest of Cinders">Crest of Cinders</a></span></span> or the <span class="inline-image label-after buff-icon" style="display:inline;white-space:pre;" data-param="" data-buff="Crest of Insight" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Crest_of_Insight" title="Crest of Insight"><img alt="Crest of Insight" src="/wiki/images/Crest_of_Insight_buff.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Crest_of_Insight" title="Crest of Insight">Crest of Insight</a></span></span>. If an ally kills either monster, they also leave behind a <i>sapling</i> that only <b>Ivern</b> can consume.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: "Starting at level 5, freeing the  Red Brambleback or the  Blue Sentinel leaves behind a sapling for 60 seconds that can be gathered by one allied  champion to gain the camp's respective buff, either the  Crest of Cinders or the  Crest of Insight",
            increasedStat: 'total_ap',
            values: 5,
            units: '',
            unitsText:
              "at level 5, freeing the  Red Brambleback or the  Blue Sentinel leaves behind a sapling for 60 seconds that can be gathered by one allied  champion to gain the camp's respective buff, either the  Crest of Cinders or the  Crest of Insight",
            pre: "Starting at level 5, freeing the  Red Brambleback or the  Blue Sentinel leaves behind a sapling for 60 seconds that can be gathered by one allied  champion to gain the camp's respective buff, either the  Crest of Cinders or the  Crest of Insight",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Monsters',
    notes:
      '* Freeing a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Krugs"><a href="/wiki/Krug_camp" title="Krug camp"><img alt="Ancient KrugSquare.png" src="/wiki/images/Ancient_KrugSquare.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Krug_camp" title="Krug camp">Krugs</a></span> camp will only give the <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="gold Gold"><img alt="gold Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">gold</span></span> and <span style="color: #883FD1; white-space:normal">experience</span> of 1 <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ancient_Krug" title="Ancient Krug"><img alt="Ancient Krug" src="/wiki/images/Ancient_KrugSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ancient_Krug" class="mw-redirect" title="Ancient Krug">Ancient Krug</a></span></span>, 2 <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Krug" title="Krugs"><img alt="Krugs" src="/wiki/images/KrugSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Krug" class="mw-redirect" title="Krug">Krugs</a></span></span>, and 3 <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Krug" title="Mini Krugs"><img alt="Mini Krugs" src="/wiki/images/KrugSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Krug" class="mw-redirect" title="Krug">Mini Krugs</a></span></span>, for a total of <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#883FD1;" data-top_label="monster\'s level" data-displayformula="\'\'This is capped at monster\'s level 9.\'\'" data-bot_values="95;97.38;102.13;109.25;118.75;128.25" data-top_values="1;3;4;5;7;9">95 − 128.<small>25</small> (based on monster\'s level)</span> <span style="color: #883FD1; white-space:normal">experience</span> and <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="85 Gold"><img alt="85 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">85</span></span>.\n<ul><li><ul><li>The entire <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Krugs"><a href="/wiki/Krug_camp" title="Krug camp"><img alt="Ancient KrugSquare.png" src="/wiki/images/Ancient_KrugSquare.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Krug_camp" title="Krug camp">Krugs</a></span> camp is usually a total of 1 <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ancient_Krug" title="Ancient Krug"><img alt="Ancient Krug" src="/wiki/images/Ancient_KrugSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ancient_Krug" class="mw-redirect" title="Ancient Krug">Ancient Krug</a></span></span>, 3 <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Krug" title="Krugs"><img alt="Krugs" src="/wiki/images/KrugSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Krug" class="mw-redirect" title="Krug">Krugs</a></span></span>, and 6 <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Krug" title="Mini Krugs"><img alt="Mini Krugs" src="/wiki/images/KrugSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Krug" class="mw-redirect" title="Krug">Mini Krugs</a></span></span>, for a total of <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#883FD1;" data-top_label="monster\'s level" data-displayformula="\'\'This is capped at monster\'s level 9.\'\'" data-bot_values="153;156.82;164.48;175.95;191.25;206.55" data-top_values="1;3;4;5;7;9">153 − 206.<small>55</small> (based on monster\'s level)</span> and <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="131 Gold"><img alt="131 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">131</span></span>.</li></ul></li>\n<li><b>Ivern</b> must be within <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 275 units of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="if still alive">large monster</span> of the targeted camp to start channeling or collect a <span style="color: #56C456; white-space:normal">grove</span>. The large monsters also must be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span>.</li>\n<li>If <b>Ivern</b> cannot afford the cost to place a grove, <i>Friend of the Forest</i> is placed on a cooldown equal to the number of seconds it takes for his <span style="white-space:nowrap"><a href="/wiki/Health_regeneration" title="Health regeneration"><img alt="Health regeneration icon.png" src="/wiki/images/Health_regeneration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Health_regeneration" title="Health regeneration">health regeneration</a></span> and/or <span style="white-space:nowrap"><a href="/wiki/Mana_regeneration" title="Mana regeneration"><img alt="Mana regeneration icon.png" src="/wiki/images/Mana_regeneration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Mana_regeneration" title="Mana regeneration">mana regeneration</a></span> to restore him to the amount of health and/or mana needed to afford the cost.\n<ul><li>The cooldown will update based on <b>Ivern\'s</b> <b>current</b> health and mana regeneration, as well as his <b>current</b> health and mana.</li></ul></li>\n<li><i>Friend of the Forest</i> can be used while <b>Ivern</b> or the camp is in combat and, once the <span style="color: #56C456; white-space:normal">grove</span> is placed, <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> can be used to instantly claim the camp. <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">Interrupting</a></span> <b>Ivern\'s</b> channel is the only way to contest jungle camps, short of killing the camp during the channel time.</li>\n<li><i>Saplings</i> cannot be gathered by allied champions in a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Zombie state"><a href="/wiki/Death#Zombie_states" title="Death#Zombie states"><img alt="Zombie icon.png" src="/wiki/images/Zombie_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Zombie_states" title="Death">zombie state</a></span> nor allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clones</a></span>.</li>\n<li><i>Saplings</i> can be gathered while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>.</li>\n<li>Allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clones</a></span> killing buff monsters will also cause a <i>sapling</i> to be spawned.</li>\n<li>Freeing a <span style="color: #56C456; white-space:normal">grove</span> causes the monsters within the camp to be dealt <span style="color: #F9966B; white-space:normal">5000 true damage</span> in the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Raw damage"><a href="/wiki/Damage" title="Damage"><img alt="Fear Beyond Death 2.png" src="/wiki/images/Urgot_Fear_Beyond_Death_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">internalraw damage</a></span> source type by <b>Ivern</b>, despite his inability to damage them.</li>\n<li><i>Friend of the Forest</i> will leave <b>Ivern</b> at <span style="color: #1F995C; white-space:normal">1 health</span> if cast with exactly the required amount. <i>Friend of the Forest</i> cannot be cast with less, unlike other abilities with health costs.</li>\n<li>The following table refers for interactions while <b>Ivern</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>:\n<ul><li><b>Ivern</b> is unable to act during the first 0.<small>15</small> and last 0.<small>5</small> seconds of the channel.</li></ul></li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Hextech Rocketbelt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt"><img alt="Hextech Rocketbelt" src="/wiki/images/Hextech_Rocketbelt_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt">Hextech Rocketbelt</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>All item-actives not specified above interrupt\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Damaging effects</li><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>',
    video: 'Ivern - Passive',
  },
  Rootcaller: {
    name: 'Rootcaller',
    display_name: 'Rootcaller',
    champion: 'Ivern',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'IvernQ.png',
      sprite: 'spell4.png',
      group: 'spell',
      x: 96,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '1100 /  125 /  Attack range',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 160',
    speed: '1300',
    cast_time: '0.<small>25</small>',
    cost: '60',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">14 / 13 / 12 / 11 / 10</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ivern" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ivern/LoL" title="Ivern"><img alt="Ivern" src="/wiki/images/Ivern_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ivern/LoL" title="Ivern/LoL">Ivern</a></span></span> throws a vine in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">roots</a></span> the first enemy hit.',
      'While the target is rooted, <b>Ivern</b> can recast <i>Rootcaller</i>. He and his allies can select the target to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> closer to the location.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Ivern</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target.',
    ],
    description: [
      {
        icon: '/wiki/images/Rootcaller.png',
        description:
          'Active: Ivern throws a vine in the target direction, dealing magic damage to the first enemy hit and  rooting them for a duration, during which they are also  revealed. Rootcaller can be recast while the target is  rooted.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Ivern</b> throws a vine in the target direction, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooting</a></span> them for a duration, during which they are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span>. <i>Rootcaller</i> can be recast while the target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '80 / 125 / 170 / 215 / 260 (+ 70% AP)',
            valuesHTML:
              '80 / 125 / 170 / 215 / 260 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;70% AP)</span>',
          },
          {
            name: 'Root Duration:',
            values: '1.2 / 1.4 / 1.6 / 1.8 / 2',
            valuesHTML:
              '1.<small>2</small> / 1.<small>4</small> / 1.<small>6</small> / 1.<small>8</small> / 2',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 125 / 170 / 215 / 260 (+ 70% AP)',
            damagetype: 'Magic',
            values: [80, 125, 170, 215, 260],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 125 / 170 / 215 / 260',
            children: [
              {
                values: 70,
                valuesIsPercent: true,
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
        icon: '/wiki/images/undefined',
        description:
          'Ivern and allied champions can select the target  rooted by Rootcaller to  dash to their location, with allies stopping at  their attack range and Ivern stopping within 125 units from the target.',
        descriptionHTML:
          '<b>Ivern</b> and allied champions can select the target <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span> by <i>Rootcaller</i> to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> to their location, with allies stopping at <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;their attack range</span> and <b>Ivern</b> stopping within 125 units from the target.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Ivern and allied champions can select the target  rooted by Rootcaller to  dash to their location, with allies stopping at  their attack range and Ivern stopping within 125 units from the target.',
            values: 1,
            user: 'target',
            units: 'total_ad',
            unitsText:
              'and allied champions can select the target  rooted by Rootcaller to  dash to their location, with allies stopping at  their attack range and Ivern stopping within 125 units from the target.',
            pre: 'Ivern and allied champions can select the target  rooted by Rootcaller to  dash to their location, with allies stopping at  their attack range and Ivern stopping within 125 units from the target.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'Recast: Ivern  dashes to the target.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Ivern</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting:
      '<a href="/wiki/Direction-targeted" class="mw-redirect" title="Direction-targeted">Direction</a> / <a href="/wiki/Auto-targeted" class="mw-redirect" title="Auto-targeted">Auto</a>',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Single target',
    spellshield: true,
    projectile: 'True',
    notes:
      '* This ability will cast from wherever the caster is at the start of the cast time.\n<ul><li><i>Rootcaller</i> will hit <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> but does not deal damage to them unless they were an epic monster.</li>\n<li><b>Ivern\'s</b> pull/attack range is determined when he dashes to the target - not from when he initially casts <i>Rootcaller</i> and throws the vine.</li>\n<li><b>Ivern</b> is not able to dash to the target unless they are within approximately 1200 range.\n<ul><li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: This also counts for allies.</li></ul></li>\n<li><i>Rootcaller</i> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="By either clicking on the target or Ivern recasts">cannot be used</span> to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span>. This applies to <b>Ivern</b> and his allies.</li>\n<li><i>Rootcaller\'s</i> dash does not follow targets, their position at the time of starting the dash is the location <b>Ivern</b> and his allies will stop from.</li>\n<li><b>Ivern</b> and his teammates cannot dash to a target if the root was not applied to them.</li></ul>',
    video: 'Ivern - Q',
  },
  Brushmaker: {
    name: 'Brushmaker',
    display_name: 'Brushmaker',
    champion: 'Ivern',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'IvernW.png',
      sprite: 'spell4.png',
      group: 'spell',
      x: 144,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '1000',
    cast_time: '0.<small>25</small>',
    cost: '30',
    costtype: 'Mana',
    static: '0.<small>5</small>',
    recharge: '40 / 36 / 32 / 28 / 24',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> While <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ivern" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ivern/LoL" title="Ivern"><img alt="Ivern" src="/wiki/images/Ivern_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ivern/LoL" title="Ivern/LoL">Ivern</a></span></span> is in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Brush"><a href="/wiki/Brush" title="Brush"><img alt="Brushmaker.png" src="/wiki/images/Ivern_Brushmaker.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Brush" title="Brush">brush</a></span>, his basic attacks deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Ivern</b> grows a patch of <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Brush"><a href="/wiki/Brush" title="Brush"><img alt="Brushmaker.png" src="/wiki/images/Ivern_Brushmaker.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Brush" title="Brush">brush</a></span> at the target location. More brush will be created if grown near <a href="/wiki/Terrain" title="Terrain">terrain</a> or other brush.',
    ],
    description: [
      {
        description:
          'Passive: While Ivern is in  brush, his basic attacks are empowered to deal bonus magic damage  on-hit. This bonus persists for 3 seconds after leaving brush.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> While <b>Ivern</b> is in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Brush"><a href="/wiki/Brush" title="Brush"><img alt="Brushmaker.png" src="/wiki/images/Ivern_Brushmaker.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Brush" title="Brush">brush</a></span>, his basic attacks are empowered to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>. This bonus persists for 3 seconds after leaving brush.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'This bonus persists for 3 seconds after leaving brush.',
            values: 3,
            user: 'none',
            units: '',
            unitsText: 'bonus persists for 3 seconds after leaving brush.',
            pre: 'This bonus persists for 3 seconds after leaving brush.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Magic Damage:',
            values: '30 / 37.5 / 45 / 52.5 / 60 (+ 30% AP)',
            valuesHTML:
              '30 / 37.<small>5</small> / 45 / 52.<small>5</small> / 60 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage:',
            raw: '30 / 37.5 / 45 / 52.5 / 60 (+ 30% AP)',
            damagetype: 'Magic',
            values: [30, 37.5, 45, 52.5, 60],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 37.5 / 45 / 52.5 / 60',
            children: [
              {
                values: 30,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 30% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Brushmaker.png',
        description:
          'Active: Ivern grows a patch of  brush at the target location for 30 seconds, granting  sight of the area within and around it for 3 seconds. Spawning brush near terrain or other brush increases its radius.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Ivern</b> grows a patch of <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Brush"><a href="/wiki/Brush" title="Brush"><img alt="Brushmaker.png" src="/wiki/images/Ivern_Brushmaker.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Brush" title="Brush">brush</a></span> at the target location for 30 seconds, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area within and around it for 3 seconds. Spawning brush near <a href="/wiki/Terrain" title="Terrain">terrain</a> or other brush increases its radius.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Ivern grows a patch of  brush at the target location for 30 seconds, granting  sight of the area within and around it for 3 seconds',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'grows a patch of  brush at the target location for 30 seconds, granting  sight of the area within and around it for 3 seconds',
            pre: 'Ivern grows a patch of  brush at the target location for 30 seconds, granting  sight of the area within and around it for 3 seconds',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Ivern periodically stocks a Brushmaker charge, up to a maximum of 3.',
        descriptionHTML:
          '<b>Ivern</b> periodically <a href="/wiki/Stocks" class="mw-redirect" title="Stocks">stocks</a> a <i>Brushmaker</i> charge, up to a maximum of 3.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Ivern periodically stocks a Brushmaker charge, up to a maximum of 3.',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'periodically stocks a Brushmaker charge, up to a maximum of 3.',
            pre: 'Ivern periodically stocks a Brushmaker charge, up to a maximum of 3.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Self, Allies',
    damagetype: 'Magic',
    spelleffects: 'spell',
    spellshield: false,
    notes:
      '* A <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Brush"><a href="/wiki/Brush" title="Brush"><img alt="Brushmaker.png" src="/wiki/images/Ivern_Brushmaker.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Brush" title="Brush">brush</a></span> will be immediately <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Expose"><a href="/wiki/Sight" title="Sight"><img alt="Exposed icon.png" src="/wiki/images/Exposed_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">exposed</a></span> if grown within the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span>.\n<ul><li>The bonus damage applies to turrets.</li>\n<li>The bonus damage can be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span>.\n<ul><li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: Passive\'s interactions with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinding</a></span> effects.</li></ul></li></ul>',
    video: 'Ivern - W',
  },
  Triggerseed: {
    name: 'Triggerseed',
    display_name: 'Triggerseed',
    champion: 'Ivern',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'IvernE.png',
      sprite: 'spell4.png',
      group: 'spell',
      x: 192,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '750',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 500',
    cast_time: 'none',
    cost: '70',
    costtype: 'Mana',
    cooldown: '11 / 10 / 9 / 8 / 7',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ivern" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ivern/LoL" title="Ivern"><img alt="Ivern" src="/wiki/images/Ivern_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ivern/LoL" title="Ivern/LoL">Ivern</a></span></span> can target an ally champion, <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Daisy" title="Daisy"><img alt="Daisy" src="/wiki/images/DaisySquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Daisy" title="Daisy">Daisy</a></span></span>, or himself to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> them for a short time.',
      'The target then explodes to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> nearby enemies.',
    ],
    description: [
      {
        icon: '/wiki/images/Triggerseed.png',
        description:
          'Active: Ivern places a seed on the target allied champion,  Daisy, or himself, granting the target a  shield for 2 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Ivern</b> places a seed on the target allied champion, <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Daisy" title="Daisy"><img alt="Daisy" src="/wiki/images/DaisySquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Daisy" title="Daisy">Daisy</a></span></span>, or himself, granting the target a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 2 seconds.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Active:',
            raw: 'Ivern places a seed on the target allied champion,  Daisy, or himself, granting the target a  shield for 2 seconds.',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'places a seed on the target allied champion,  Daisy, or himself, granting the target a  shield for 2 seconds.',
            pre: 'Ivern places a seed on the target allied champion,  Daisy, or himself, granting the target a  shield for 2 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Shield Strength:',
            values: '80 / 115 / 150 / 185 / 220 (+ 75% AP)',
            valuesHTML:
              '80 / 115 / 150 / 185 / 220 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;75% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Shield',
            name: 'Shield Strength:',
            raw: '80 / 115 / 150 / 185 / 220 (+ 75% AP)',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: [80, 115, 150, 185, 220],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 115 / 150 / 185 / 220',
            children: [
              {
                values: 75,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 75% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'After 2 seconds, the seed explodes to deal magic damage to nearby enemies and  slow them for 2 seconds.',
        descriptionHTML:
          'After 2 seconds, the seed explodes to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> them for 2 seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'After 2 seconds, the seed explodes to deal magic damage to nearby enemies and  slow them for 2 seconds.',
            damagetype: 'Magic',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              '2 seconds, the seed explodes to deal magic damage to nearby enemies and  slow them for 2 seconds.',
            pre: 'After 2 seconds, the seed explodes to deal magic damage to nearby enemies and  slow them for 2 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '70 / 90 / 110 / 130 / 150 (+ 80% AP)',
            valuesHTML:
              '70 / 90 / 110 / 130 / 150 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;80% AP)</span>',
          },
          {
            name: 'Slow:',
            values: '50 / 55 / 60 / 65 / 70%',
            valuesHTML: '50 / 55 / 60 / 65 / 70%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 90 / 110 / 130 / 150 (+ 80% AP)',
            damagetype: 'Magic',
            values: [70, 90, 110, 130, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 90 / 110 / 130 / 150',
            children: [
              {
                values: 80,
                valuesIsPercent: true,
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
    ],
    targeting: 'Unit',
    affects: 'Allies, Self, Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes:
      '* The explosion occurs regardless of whether the shield is maintained.\n<ul><li>The damage of <i>Triggerseed</i> is attributed to the champion the shield was cast on.\n<ul><li>If cast on <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Daisy" title="Daisy"><img alt="Daisy" src="/wiki/images/DaisySquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Daisy" title="Daisy">Daisy</a></span></span>, the damage is attributed to <b>Ivern</b>.</li>\n<li>The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> debuff is always attributed to <b>Ivern</b>.</li>\n<li>Therefore, placing <i>Triggerseed</i> on allied champions:\n<ul><li>grants them credit for all <a href="/wiki/Kill" title="Kill">kills</a> on enemy units that it causes.</li>\n<li>triggers turret aggro on them if it deals damage to an enemy champion.</li>\n<li>triggers their spell effects instead of <b>Ivern\'s</b>.</li>\n<li>benefits from their <span style="white-space:nowrap"><a href="/wiki/Magic_penetration" title="Magic penetration"><img alt="Magic penetration icon.png" src="/wiki/images/Magic_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:turquoise; white-space:normal">magic penetration</span></span> stat.</li></ul></li>\n<li><b>Ivern\'s</b> player can appreciate the damage <i>Triggerseed</i> from an ally deals via a yellow damage number intended to reflect the damage dealt.\n<ul><li>This yellow damage number wrongfully uses <b>Ivern\'s</b> <span style="white-space:nowrap"><a href="/wiki/Magic_penetration" title="Magic penetration"><img alt="Magic penetration icon.png" src="/wiki/images/Magic_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:turquoise; white-space:normal">magic penetration</span></span> stat to calculate the expected damage dealt, instead of reflecting the actual damage dealt.</li></ul></li></ul></li></ul>',
    video: 'Ivern - E',
  },
  'Daisy!': {
    name: 'Daisy!',
    display_name: 'Daisy!',
    champion: 'Ivern',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'IvernR.png',
      sprite: 'spell4.png',
      group: 'spell',
      x: 240,
      y: 144,
      w: 48,
      h: 48,
    },
    cast_time: '0.<small>5</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">140 / 135 / 130 / 125 / 120</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ivern" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ivern/LoL" title="Ivern"><img alt="Ivern" src="/wiki/images/Ivern_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ivern/LoL" title="Ivern/LoL">Ivern</a></span></span> summons his Sentinel friend <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Daisy" title="Daisy"><img alt="Daisy" src="/wiki/images/DaisySquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Daisy" title="Daisy">Daisy</a></span></span> to fight with him.',
      '<i>Daisy!</i> can be recast any number of times while <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Daisy" title="Daisy"><img alt="Daisy" src="/wiki/images/DaisySquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Daisy" title="Daisy">Daisy</a></span></span> is alive. The recast cannot be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span>.',
      '<span class="template_sbc"><b>Recast:</b></span> <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Daisy" title="Daisy"><img alt="Daisy" src="/wiki/images/DaisySquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Daisy" title="Daisy">Daisy</a></span></span> is commanded to move to the target location. If recast on <b>Ivern</b>, she will follow him.',
      '<span class="template_sbc"><b>Daisy Smash!:</b></span> Whenever <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Daisy" title="Daisy"><img alt="Daisy" src="/wiki/images/DaisySquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Daisy" title="Daisy">Daisy</a></span></span> attacks the same champion three times in a row, she will send a shockwave that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks up</a></span> enemies hit within a line.',
    ],
    description: [
      {
        icon: '/wiki/images/Daisy!.png',
        description:
          'Active: Ivern summons his sentinel friend  Daisy to his side, who lands 350 units away from him in the target direction and remains on the field for up to 60 seconds as a controllable  pet.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Ivern</b> summons his sentinel friend <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Daisy" title="Daisy"><img alt="Daisy" src="/wiki/images/DaisySquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Daisy" title="Daisy">Daisy</a></span></span> to his side, who lands 350 units away from him in the target direction and remains on the field for up to 60 seconds as a controllable <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Pet"><a href="/wiki/Pets" title="Pets"><img alt="Summon Tibbers.png" src="/wiki/images/Annie_Summon-_Tibbers.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Pets" title="Pets">pet</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: 'Ivern summons his sentinel friend  Daisy to his side, who lands 350 units away from him in the target direction and remains on the field for up to 60 seconds as a controllable  pet.',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'summons his sentinel friend  Daisy to his side, who lands 350 units away from him in the target direction and remains on the field for up to 60 seconds as a controllable  pet.',
            pre: 'Ivern summons his sentinel friend  Daisy to his side, who lands 350 units away from him in the target direction and remains on the field for up to 60 seconds as a controllable  pet.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'Daisy! can be recast at any time while  Daisy is alive.',
        descriptionHTML:
          '<i>Daisy!</i> can be recast at any time while <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Daisy" title="Daisy"><img alt="Daisy" src="/wiki/images/DaisySquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Daisy" title="Daisy">Daisy</a></span></span> is alive.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Daisy,_wait!.png',
        description:
          'Recast: Ivern commands  Daisy to move to the target location. If cast on Ivern,  Daisy will follow him.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Ivern</b> commands <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Daisy" title="Daisy"><img alt="Daisy" src="/wiki/images/DaisySquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Daisy" title="Daisy">Daisy</a></span></span> to move to the target location. If cast on <b>Ivern</b>, <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Daisy" title="Daisy"><img alt="Daisy" src="/wiki/images/DaisySquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Daisy" title="Daisy">Daisy</a></span></span> will follow him.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'The recast of Daisy! can be used while affected by  cast-inhibiting crowd control. See Pets for more details about  Daisy.',
        descriptionHTML:
          '<i>The recast of Daisy! can be used while affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast-inhibiting crowd control"><a href="/wiki/Crowd_control#Disrupting" title="Crowd control#Disrupting"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disrupting" title="Crowd control">cast-inhibiting crowd control</a></span>. See <a href="/wiki/Ivern/LoL#Pets" title="Ivern/LoL">Pets</a> for more details about <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Daisy" title="Daisy"><img alt="Daisy" src="/wiki/images/DaisySquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Daisy" title="Daisy">Daisy</a></span></span>.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'None',
    damagetype: 'physical',
    spelleffects: 'spellaoe',
    notes:
      '* <i>Daisy</i>, when the ability is initially cast, is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> until she lands.',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Ivern_Original_R_6.ogg   Daisy!',
    video: 'Ivern - R',
  },
} satisfies { [skillName in string]: SkillData };
