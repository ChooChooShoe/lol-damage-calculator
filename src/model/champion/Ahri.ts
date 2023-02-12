import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Ahri';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Ahri_Essence_Theft.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Ahri</b> generates a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Essence Fragment</i> whenever she kills a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>. At 9 stacks, she consumes them to <span style="color: #60E08F; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;heal</span></span> herself for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="35;" data-finish="95;" data-bot_values="35;38.53;42.06;45.59;49.12;52.65;56.18;59.71;63.24;66.76;70.29;73.82;77.35;80.88;84.41;87.94;91.47;95" data-top_values="">35 − 95 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;20% AP)</span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 2:',
        raw: ' At 9 stacks, she consumes them to  heal herself for 35 − 95 (based on level) (+ 20% AP)',
        healType: 'SelfHeal',
        values: [
          35, 38.53, 42.06, 45.59, 49.12, 52.65, 56.18, 59.71, 63.24, 66.76,
          70.29, 73.82, 77.35, 80.88, 84.41, 87.94, 91.47, 95,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: 'At 9 stacks, she consumes them to  heal herself for 35 − 95',
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
      'Additionally, whenever <b>Ahri</b> scores a champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> within 3 seconds of damaging them, she consumes their essence to <span style="color: #60E08F; white-space:normal">heal</span> herself for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="75;" data-finish="165;" data-bot_values="75;80.29;85.59;90.88;96.18;101.47;106.76;112.06;117.35;122.65;127.94;133.24;138.53;143.82;149.12;154.41;159.71;165" data-top_values="">75 − 165 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: 'Additionally, whenever Ahri scores a champion  takedown within 3 seconds of damaging them, she consumes their essence to heal herself for 75 − 165 (based on level) (+ 30% AP)',
        healType: 'SelfHeal',
        values: [
          75, 80.29, 85.59, 90.88, 96.18, 101.47, 106.76, 112.06, 117.35,
          122.65, 127.94, 133.24, 138.53, 143.82, 149.12, 154.41, 159.71, 165,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: 'Additionally, whenever Ahri scores a champion  takedown within 3 seconds of damaging them, she consumes their essence to heal herself for 75 − 165',
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
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Ahri_Orb_of_Deception.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Ahri</b> sends her orb in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit. At maximum range, the orb homes back to her to deal the same in <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal">true damage</span></span> to enemies hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Damage Per Pass:',
        raw: '40 / 65 / 90 / 115 / 140 (+ 45% AP)',
        values: [40, 65, 90, 115, 140],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 65 / 90 / 115 / 140',
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
        raw: '80 / 130 / 180 / 230 / 280 (+ 90% AP)',
        values: [80, 130, 180, 230, 280],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 130 / 180 / 230 / 280',
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
  {
    description: '<i>Enemies can be hit only once per pass.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Ahri_Fox-Fire.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Ahri</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">40% <b>bonus</b> movement speed</span></span> that decays over 2 seconds and conjures three flames which orbit her clockwise for up to 2.<small>5</small> seconds.',
    leveling: [],
  },
  {
    description:
      'After 0.<small>25</small> seconds, each flame targets a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy, or after 0.<small>4</small> seconds targets the closest visible enemy in range, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>. The damage is doubled against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> below <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">20% <b>maximum</b> health</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '50 / 75 / 100 / 125 / 150 (+ 30% AP)',
        values: [50, 75, 100, 125, 150],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 75 / 100 / 125 / 150',
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
        name: 'Increased Minion Damage:',
        raw: '100 / 150 / 200 / 250 / 300 (+ 60% AP)',
        values: [100, 150, 200, 250, 300],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '100 / 150 / 200 / 250 / 300',
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
    description: 'Subsequent flames on a single target deal 30% damage.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Additional Magic Damage:',
        raw: '15 / 22.5 / 30 / 37.5 / 45 (+ 9% AP)',
        values: [15, 22.5, 30, 37.5, 45],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 22.5 / 30 / 37.5 / 45',
        children: [
          {
            values: 9,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 9% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Single Target Damage:',
        raw: '80 / 120 / 160 / 200 / 240 (+ 48% AP)',
        values: [80, 120, 160, 200, 240],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 120 / 160 / 200 / 240',
        children: [
          {
            values: 48,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 48% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'Flames prioritize enemy champions hit by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ahri" data-ability="Charm" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ahri/LoL#Charm" title="Charm"><img alt="Charm" src="/wiki/images/Ahri_Charm.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ahri/LoL#Charm" title="Ahri/LoL">Charm</a></span></span></i>, then enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, then minions that would die to <i>Fox-Fire\'s</i> damage, and then the target of <b>Ahri\'s</b> last basic attack within 3 seconds.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Ahri_Charm.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Ahri</b> blows forth a kiss in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocking them down</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Charm"><a href="/wiki/Charm" title="Charm"><img alt="Charm icon.png" src="/wiki/images/Charm_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Charm" class="mw-redirect" title="Charm">charming</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 65% for a duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '80 / 110 / 140 / 170 / 200 (+ 60% AP)',
        values: [80, 110, 140, 170, 200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 110 / 140 / 170 / 200',
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
        name: 'Disable Duration:',
        raw: '1.2 / 1.4 / 1.6 / 1.8 / 2',
        values: [1.2, 1.4, 1.6, 1.8, 2],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1.2 / 1.4 / 1.6 / 1.8 / 2',
      },
    ],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Ahri_Spirit_Rush.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Ahri</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location and then fires essence bolts to up to 3 nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemies, each dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>. <br><br><i>Spirit Rush</i> can be recast twice more within 15 seconds of the activation at no additional cost, with a 1 second <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Unaffected by ability haste">static cooldown</span> between casts. Consuming a champion\'s essence with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ahri" data-ability="Essence Theft" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ahri/LoL#Essence_Theft" title="Essence Theft"><img alt="Essence Theft" src="/wiki/images/Ahri_Essence_Theft.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ahri/LoL#Essence_Theft" title="Ahri/LoL">Essence Theft</a></span></span></i> while <i>Spirit Rush</i> is active extends the recast duration by and up to 10 seconds, and grants an additional recast, storing up to 3 recasts at a time.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic damage:',
        raw: '60 / 90 / 120 (+ 35% AP)',
        values: [60, 90, 120],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 90 / 120',
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
    ],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Ahri</b> mimics the first cast\'s effects.',
    leveling: [],
  },
  {
    description:
      '<i>Spirit Rush\'s recast duration will persist even after having used all recasts. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ahri" data-ability="Fox-Fire" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ahri/LoL#Fox-Fire" title="Fox-Fire"><img alt="Fox-Fire" src="/wiki/images/Ahri_Fox-Fire.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ahri/LoL#Fox-Fire" title="Ahri/LoL">Fox-Fire</a></span></span> can be cast during the dash. Spirit Rush will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
export const Ahri = { I, Q, W, E, R };
