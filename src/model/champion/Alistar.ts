import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Alistar';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Alistar_Triumphant_Roar.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Alistar</b> generates a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Triumph</i> for each enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> he <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stuns"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">displaces</a></span> with his <a href="/wiki/Champion_ability" title="Champion ability">abilities</a>, and each time a nearby enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span> or non-epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> dies. He generates 7 stacks if a nearby enemy champion or epic monster dies.',
    leveling: [],
  },
  {
    description:
      'At 7 stacks, <b>Alistar</b> consumes them all to <span style="color: #60E08F; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;heal</span></span> himself for <span style="color: #1F995C; white-space:normal">5% of his <b>maximum</b> health</span> and nearby allied champions for <span style="color: #1F995C; white-space:normal">6% of his <b>maximum</b> health</span>.',
    leveling: [],
  },
  {
    description:
      '<i>Triumphant Roar</i> can occur only once every few seconds, though <b>Alistar</b> may still generate stacks before then.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Alistar_Pulverize.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Alistar</b> smashes the ground, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them up</a></span> simultaneously for 1 second.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '60 / 100 / 140 / 180 / 220 (+ 70% AP)',
        values: [60, 100, 140, 180, 220],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 100 / 140 / 180 / 220',
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
    img: '/wiki/images/Alistar_Headbutt.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Alistar</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target enemy\'s location. If they are within 400 units upon arrival, he deals them <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks them back</a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="200 units when combined with Pulverize">700 units</span> over 0.<small>5</small> seconds while also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 0.<small>75</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '55 / 110 / 165 / 220 / 275 (+ 90% AP)',
        values: [55, 110, 165, 220, 275],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '55 / 110 / 165 / 220 / 275',
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
const E: SubSkill[] = [
  {
    img: '/wiki/images/Alistar_Trample.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Alistar</b> tramples the ground around him every 0.<small>5</small> seconds over 5 seconds, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies. Each time this damages at least one enemy champion, he generates a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Trample</i> that lasts for the remaining duration, stacking up to 5 times.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage Per Tick:',
        raw: '8 / 11 / 14 / 17 / 20 (+ 7% AP)',
        values: [8, 11, 14, 17, 20],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '8 / 11 / 14 / 17 / 20',
        children: [
          {
            values: 7,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 7% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '80 / 110 / 140 / 170 / 200 (+ 70% AP)',
        values: [80, 110, 140, 170, 200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 110 / 140 / 170 / 200',
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
    img: '/wiki/images/Trample_2.png',
    description:
      'At 5 stacks, <b>Alistar\'s</b> next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> against a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> within 6 seconds is empowered to deal <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="20;" data-finish="275;" data-bot_values="20;35;50;65;80;95;110;125;140;155;170;185;200;215;230;245;260;275" data-top_values="">20 − 275 (based on level)</span> <b>bonus</b> magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> the target for 1 second. This will end <i>Trample</i> prematurely.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: "At 5 stacks, Alistar's next basic attack against a  champion within 6 seconds is empowered to deal 20 − 275 (based on level) bonus magic damage and  stun the target for 1 second",
        values: [
          20, 35, 50, 65, 80, 95, 110, 125, 140, 155, 170, 185, 200, 215, 230,
          245, 260, 275,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'bonus magic damage and  stun the target for 1 second',
        pre: "At 5 stacks, Alistar's next basic attack against a  champion within 6 seconds is empowered to deal 20 − 275",
        post: 'bonus magic damage and  stun the target for 1 second',
      },
    ],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Alistar_Unbreakable_Will.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Alistar</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleanses</a></span> himself of all <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span>. For the next 7 seconds, he reduces incoming damage taken.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Damage Reduction:',
        raw: '55 / 65 / 75%',
        values: [55, 65, 75],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '55 / 65 / 75%',
      },
    ],
  },
];
export const Alistar = { I, Q, W, E, R };
