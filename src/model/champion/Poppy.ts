import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Poppy';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Poppy_Iron_Ambassador.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Periodically, <b>Poppy\'s</b> next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> is empowered to throw her buckler, gaining <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;350 <b>bonus</b> range</span> and dealing <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#00B0F0;" data-start="20;" data-finish="180;" data-bot_values="20;29.41;38.82;48.24;57.65;67.06;76.47;85.88;95.29;104.71;114.12;123.53;132.94;142.35;151.76;161.18;170.59;180" data-top_values="">20 − 180 (based on level)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>. After it hits, the buckler then falls to a location near the target over 1 second, landing and remaining there for up to 4 seconds.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: " Periodically, Poppy's next basic attack is empowered to throw her buckler, gaining  350 bonus range and dealing 20 − 180 (based on level) bonus magic damage",
        values: [
          20, 29.41, 38.82, 48.24, 57.65, 67.06, 76.47, 85.88, 95.29, 104.71,
          114.12, 123.53, 132.94, 142.35, 151.76, 161.18, 170.59, 180,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'bonus magic damage',
        pre: "Periodically, Poppy's next basic attack is empowered to throw her buckler, gaining  350 bonus range and dealing 20 − 180",
        post: 'bonus magic damage',
      },
    ],
  },
  {
    img: '/wiki/images/Poppy_Iron_Ambassador_2.png',
    description:
      '<b>Poppy</b> can move over the buckler to retrieve it, gaining a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="13;1" data-finish="18;13" data-bot_values="13;15.5;18" data-top_values="1;7;13" data-bot_key="%">13 / 15.<small>5</small> / 18% (based on level)</span> of her <b>maximum</b> health</span></span> for 3 seconds. If the buckler kills the target, it bounces back to <b>Poppy</b> instead of falling. Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> can move over the buckler to destroy it.',
    leveling: [
      {
        effectType: 'Shield',
        name: 'Line 1:',
        raw: 'Poppy can move over the buckler to retrieve it, gaining a  shield for  13 / 15',
        damagetype: 'None',
        shieldType: 'SelfShield',
        values: [1, 15],
        user: 'none',
        units: '',
        unitsText:
          'can move over the buckler to retrieve it, gaining a  shield for  13',
        pre: 'Poppy can move over the buckler to retrieve it, gaining a  shield for  13 / 15',
      },
      {
        effectType: 'Heal',
        name: 'Line 2:',
        raw: '5 / 18% (based on level) of her maximum health for 3 seconds',
        healType: 'BonusHealth',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'maximum_hp',
        unitsText: 'of her maximum health for 3 seconds',
        pre: '5 / 18%',
        post: 'of her maximum health for 3 seconds',
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Poppy_Hammer_Shock.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Poppy</b> smashes the area in the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit. Against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, the damage based on their health ratio is capped.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Physical Damage:',
        raw: "40 / 60 / 80 / 100 / 120 (+ 90% bonus AD) (+ 8% of target's maximum health)",
        healType: 'OutgoingHeals',
        values: [40, 60, 80, 100, 120],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 60 / 80 / 100 / 120',
        children: [
          {
            values: 90,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 90% bonus AD',
          },
          {
            values: 8,
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: "+ 8% of target's maximum health",
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Capped Monster Health Damage:',
        raw: '30 / 60 / 90 / 120 / 150',
        values: [30, 60, 90, 120, 150],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 60 / 90 / 120 / 150',
      },
      {
        effectType: 'Unique',
        name: 'Maximum Monster Damage:',
        raw: '70 / 120 / 170 / 220 / 270 (+ 90% bonus AD)',
        values: [70, 120, 170, 220, 270],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 120 / 170 / 220 / 270',
        children: [
          {
            values: 90,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 90% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'The impact creates a field for 1 second that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> enemies within, which then ruptures to deal the same <span style="color: #FF8C34; white-space:normal">physical damage</span>.',
    leveling: [
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
      {
        effectType: 'Heal',
        name: 'Total Physical Damage:',
        raw: "80 / 120 / 160 / 200 / 240 (+ 180% bonus AD) (+ 16% of target's maximum health)",
        healType: 'OutgoingHeals',
        values: [80, 120, 160, 200, 240],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 120 / 160 / 200 / 240',
        children: [
          {
            values: 180,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 180% bonus AD',
          },
          {
            values: 16,
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: "+ 16% of target's maximum health",
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Maximum Monster Damage:',
        raw: '140 / 240 / 340 / 440 / 540 (+ 180% bonus AD)',
        values: [140, 240, 340, 440, 540],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '140 / 240 / 340 / 440 / 540',
        children: [
          {
            values: 180,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 180% bonus AD',
          },
        ],
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Poppy_Stubborn_to_a_Fault.png',
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Poppy</b> increases her <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>total</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>total</b> magic resistance</span></span> by 10%, doubled to 20% while she is <span style="color: #1F995C; white-space:normal">below 40% <b>maximum</b> health</span>.',
    leveling: [],
  },
  {
    img: '/wiki/images/Poppy_Steadfast_Presence.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Poppy</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">40% <b>bonus</b> movement speed</span></span> and creates an <a href="/wiki/Aura" title="Aura">aura</a> around herself for 2 seconds, causing all enemies who attempt to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> into or within it to be dealt <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked up</a></span> for 0.<small>5</small> seconds. If a target was successfully interrupted, they become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Grounded"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 25% for 2 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 110 / 150 / 190 / 230 (+ 70% AP)',
        values: [70, 110, 150, 190, 230],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 110 / 150 / 190 / 230',
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
      '<i>Steadfast Presence</i> can only block a single dash per enemy per cast.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Poppy_Heroic_Charge.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Poppy</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target enemy\'s location. If they are in range upon arrival, she deals <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">carries</a></span> them along with her for up to 400 units.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '60 / 80 / 100 / 120 / 140 (+ 50% bonus AD)',
        values: [60, 80, 100, 120, 140],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 80 / 100 / 120 / 140',
        children: [
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 50% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'If the target hits terrain, she stops to deal the same <span style="color: #FF8C34; white-space:normal">physical damage</span> again and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> them for a duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Stun Duration:',
        raw: '1.6 / 1.7 / 1.8 / 1.9 / 2',
        values: [1.6, 1.7, 1.8, 1.9, 2],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1.6 / 1.7 / 1.8 / 1.9 / 2',
      },
      {
        effectType: 'Unique',
        name: 'Total Physical Damage:',
        raw: '120 / 160 / 200 / 240 / 280 (+ 100% bonus AD)',
        values: [120, 160, 200, 240, 280],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '120 / 160 / 200 / 240 / 280',
        children: [
          {
            values: 100,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 100% bonus AD',
          },
        ],
      },
    ],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Poppy_Keeper%27s_Verdict.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Poppy</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channels"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">charges</a></span> while being <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 15% for up to 4 seconds to increase <i>Keeper\'s Verdict\'s</i> <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;range</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock back</a></span> distance over 0.<small>5</small> seconds after the first 0.<small>5</small> seconds of the channel. <i>Keeper\'s Verdict</i> can be recast within the duration.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Poppy</b> releases the charge to launch her hammer upwards, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies nearby and in an area in front of her and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them up</a></span> for 1 second.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '100 / 150 / 200 (+ 45% bonus AD)',
        values: [100, 150, 200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '100 / 150 / 200',
        children: [
          {
            values: 45,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 45% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'If <i>Keeper\'s Verdict</i> was charged for at least 0.<small>5</small> seconds, it deals 100% increased damage and enemies hit are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked back</a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Scales up to this value over the first 1 second of the channel">up-to 3400 units</span> toward the enemy team\'s <a href="/wiki/Spawn" title="Spawn">fountain</a>. Additionally, if no enemies are hit <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Same as uncharged radius">in front</span> of <b>Poppy</b>, she sends a shockwave that travels in the target direction until it collides with an enemy champion, which causes a hammer to erupt. Targets hit by the shockwave or the eruption receive the charged effects.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Increased Damage:',
        raw: '200 / 300 / 400 (+ 90% bonus AD)',
        values: [200, 300, 400],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '200 / 300 / 400',
        children: [
          {
            values: 90,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 90% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'If the charge is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span> or completes without reactivation, <i>Keeper\'s Verdict</i> is cancelled and the ability is put on a <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;15-second</span> cooldown.',
    leveling: [],
  },
  {
    description:
      'Enemies knocked <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span> and are rendered <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> while being displaced if <i>Keeper\'s Verdict</i> was charged for more than 0.<small>5</small> seconds.',
    leveling: [],
  },
];
export const Poppy = { I, Q, W, E, R };
