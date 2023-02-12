import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Xerath';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Xerath_Mana_Surge.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Periodically, <b>Xerath</b> empowers his next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> to restore <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#0099CC;" data-displayformula="27 + 3 at each level up to 3, then + 6 at each level up to 6, then + 9 at each level up to 10, 12 at each level up to 15, then + 15 at each level" data-bot_values="30;33;36;42;48;54;63;72;81;90;102;114;126;138;150;165;180;195" data-top_values="">30 − 195 (based on level)</span> <span style="color: #0099CC; white-space:normal">mana</span></span>, doubled to <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#0099CC;" data-displayformula="54 + 6 at each level up to 3, then + 12 at each level up to 6, then + 18 at each level up to 10, then + 24 at each level up to 15, then + 30 at each level" data-bot_values="60;66;72;84;96;108;126;144;162;180;204;228;252;276;300;330;360;390" data-top_values="">60 − 390 (based on level)</span> against enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: ' Periodically, Xerath empowers his next basic attack to restore  30 − 195 (based on level) mana, doubled to 60 − 390 (based on level) against enemy  champions',
        increasedStat: 'total_mana',
        values: [
          30, 39.71, 49.41, 59.12, 68.82, 78.53, 88.24, 97.94, 107.65, 117.35,
          127.06, 136.76, 146.47, 156.18, 165.88, 175.59, 185.29, 195,
        ],
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: '',
        unitsText: 'mana, doubled to 60 − 390',
        pre: 'Periodically, Xerath empowers his next basic attack to restore  30 − 195',
        post: 'mana, doubled to 60 − 390',
      },
    ],
  },
  {
    description:
      '<i>Mana Surge does not trigger if <b>Xerath</b> would restore above <span style="color: #0099CC; white-space:normal">his <b>maximum</b> mana</span>.</i>',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Xerath_Arcanopulse.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Xerath</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">charges</a></span> while being <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="channel time" data-displayformula="10% after 0 to 0.25 seconds, then &nbsp;+&nbsp;5% per 0.25 seconds channeled, capped at 40%" data-bot_values="0;10;15;20;25;30;35;40" data-top_values="0;0.25;0.5;0.75;1;1.25;1.5;1.75" data-bot_key="%">0% − 40% (based on channel time)</span> for up to 3 seconds to increase <i>Arcanopulse\'s</i> <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;range</span> over the first 1.<small>5</small> to 1.<small>75</small> seconds of the channel.',
    leveling: [],
  },
  {
    description:
      '<i>Arcanopulse</i> can be recast within the duration. If the charge is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span> or completes without reactivation, <i>Arcanopulse</i> is cancelled and refunds <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">half the mana cost</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Mana Refunded:',
        raw: '40 / 45 / 50 / 55 / 60',
        values: [40, 45, 50, 55, 60],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 45 / 50 / 55 / 60',
      },
    ],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> After a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.5 seconds, but rounded up to the next game tick.">0.<small>528</small> seconds</span> delay, <b>Xerath</b> fires a beam of energy in a line in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 110 / 150 / 190 / 230 (+ 85% AP)',
        values: [70, 110, 150, 190, 230],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 110 / 150 / 190 / 230',
        children: [
          {
            values: 85,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 85% AP',
          },
        ],
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Xerath_Eye_of_Destruction.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Xerath</b> casts down a blast of arcane energy that strikes the target location after <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.5 seconds, but rounded up to the next game tick.">0.<small>528</small> seconds</span>, briefly granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area and dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 25% for 2.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '60 / 95 / 130 / 165 / 200 (+ 60% AP)',
        values: [60, 95, 130, 165, 200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 95 / 130 / 165 / 200',
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
    description:
      'Enemies in the epicenter take 66.<small>7</small>% increased damage and are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by a greater amount, decaying to 25% over the duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Increased Damage:',
        raw: '100.02 / 158.365 / 216.71 / 275.055 / 333.4 (+ 100.02% AP)',
        values: [100.02, 158.365, 216.71, 275.055, 333.4],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '100.02 / 158.365 / 216.71 / 275.055 / 333.4',
        children: [
          {
            values: 100.02,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 100.02% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Increased Slow:',
        raw: '60 / 65 / 70 / 75 / 80%',
        values: [60, 65, 70, 75, 80],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 65 / 70 / 75 / 80%',
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Xerath_Shocking_Orb.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Xerath</b> fires an orb of energy in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stuns"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> them for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="orb travel distance" data-displayformula="0.75+(0.15 per 105 units). \'\'This is capped at 1050 units traveled.\'\'" data-bot_values="0.75;0.9;1.05;1.2;1.35;1.5;1.65;1.8;1.95;2.1;2.25" data-top_values="0;105;210;315;420;525;630;735;840;945;1050">0.<small>75</small> − 2.<small>25</small> (based on orb travel distance)</span> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: '75 − 2',
        values: [75, 2],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '75 − 2',
      },
      {
        effectType: 'Unique',
        name: 'Line 3:',
        raw: '25 (based on orb travel distance) seconds',
        values: 25,
        user: 'none',
        units: '',
        unitsText: 'seconds',
        pre: '25',
        post: 'seconds',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on orb travel distance',
            pre: 'based on orb travel distance',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '80 / 110 / 140 / 170 / 200 (+ 45% AP)',
        values: [80, 110, 140, 170, 200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 110 / 140 / 170 / 200',
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
    ],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Xerath_Rite_of_the_Arcane.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Xerath</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for up to 10 seconds, gaining the ability to recast <i>Rite of the Arcane</i> multiple times after 0.<small>5</small> seconds within the duration. If <i>Rite of the Arcane</i> ends without any of the recasts being used, half of its <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is refunded.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Number of Recasts:',
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
      '<span class="template_sbc"><b>Recast - Arcane Barrage:</b></span> <b>Xerath</b> catapults an arcane missile that strikes the target location after a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.6 seconds, but rounded up to the next game tick.">0.<small>627</small> seconds</span> delay, briefly granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area and dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit. Each cast has a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Unaffected by ability haste">static cooldown</span> of 0.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '200 / 250 / 300 (+ 45% AP)',
        values: [200, 250, 300],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '200 / 250 / 300',
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
        name: 'Total Magic Damage:',
        raw: '600 / 1000 / 1500 (+ 135 / 180 / 225% AP)',
        values: [600, 1000, 1500],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '600 / 1000 / 1500',
        children: [
          {
            values: [135, 180, 225],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 135 / 180 / 225% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<b>Xerath</b> will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">reveal</a></span> himself if a missile strikes near an enemy.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Distance:',
        raw: '175 / 200 / 225',
        values: [175, 200, 225],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '175 / 200 / 225',
      },
    ],
  },
  {
    description:
      "<i>Rite of the Arcane's recast will cast at max range if cast beyond that.</i>",
    leveling: [],
  },
];
export const Xerath = { I, Q, W, E, R };
