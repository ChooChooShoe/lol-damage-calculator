import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Sion';
const I1: SubSkill[] = [
  {
    img: '/wiki/images/Sion_Glory_in_Death.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Upon taking <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">fatal damage</a></span>, <b>Sion</b> enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stasis"><a href="/wiki/Stasis" title="Stasis"><img alt="Stasis icon.png" src="/wiki/images/Stasis_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stasis" class="mw-redirect" title="Stasis">stasis</a></span> for 1.<small>5</small> seconds to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Zombie state"><a href="/wiki/Death#Zombie_states" title="Death#Zombie states"><img alt="Zombie icon.png" src="/wiki/images/Zombie_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Zombie_states" title="Death">reanimate</a></span> into a frenzy, restoring <span style="color: #1F995C; white-space:normal">100% of his <b>maximum</b> health</span> but <a href="/wiki/Health#Health_as_a_casting_resource" title="Health">losing</a> <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="2;" data-finish="19;" data-bot_values="2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17;18;19" data-top_values="">2 − 19 (based on level)</span> health</span> every <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.25 seconds, but rounded up to the next game tick.">0.<small>264</small> seconds</span>, increasing by<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;70% of the <b>base</b> value&nbsp;」</span><span class="flipText2">「&nbsp;<span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="1.4;" data-finish="13.3;" data-bot_values="1.4;2.1;2.8;3.5;4.2;4.9;5.6;6.3;7;7.7;8.4;9.1;9.8;10.5;11.2;11.9;12.6;13.3" data-top_values="">1.<small>4</small> − 13.<small>3</small> (based on level)</span></span>&nbsp;」</span></span>per subsequent tick. <b>Sion\'s</b> <span style="white-space:nowrap"><a href="/wiki/Health_regeneration" title="Health regeneration"><img alt="Health regeneration icon.png" src="/wiki/images/Health_regeneration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Health_regeneration" title="Health regeneration">health regeneration</a></span> and any <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> (except life steal) he receives during this time is <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="See notes">0% effective</span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 2:',
        raw: '5 seconds to  reanimate into a frenzy, restoring 100% of his maximum health but losing 2 − 19 (based on level) health every 0',
        healType: 'BonusHealth',
        values: [
          2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        ],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'total_hp',
        unitsText: 'health every 0',
        pre: '5 seconds to  reanimate into a frenzy, restoring 100% of his maximum health but losing 2 − 19',
        post: 'health every 0',
      },
      {
        effectType: 'Unique',
        name: 'Line 4:',
        raw: '4 − 13',
        values: [4, 13],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '4 − 13',
      },
      {
        effectType: 'Unique',
        name: 'Line 5:',
        raw: '3 (based on level) 」per subsequent tick',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '」per subsequent tick',
        pre: '3',
        post: '」per subsequent tick',
      },
    ],
  },
  {
    description:
      '<b>Sion</b> can only move and use his <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> and <a href="/wiki/Active_ability_items" title="Active ability items">item actives</a>, and empowers himself with the following effects:\n',
    leveling: [],
  },
  {
    description:
      '<b>Sion\'s</b> damage to <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a> is reduced to 40% under the effects of <i>Glory in Death</i>.',
    leveling: [],
  },
];
const I2: SubSkill[] = [
  {
    img: '/wiki/images/Sion_Death_Surge.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Sion</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">67% <b>bonus</b> movement speed</span></span><sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup> that decays over 2.<small>376</small> seconds.\n<br><br><i>Once at least one ability has been learned, Death Surge can be cast using any ability key, even for the abilities that haven\'t been learned yet.</i>',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: ' Sion gains  67% bonus movement speed(bug) that decays over 2',
        values: 6,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: 'that decays over 2',
        pre: 'Sion gains  67% bonus movement speed',
        post: 'that decays over 2',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'bug',
            pre: 'bug',
          },
        ],
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Sion_Decimating_Smash.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Sion</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">charges</a></span> for up to 2 seconds to increase <i>Decimating Smash\'s</i> <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;range</span> over an area, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock up</a></span> duration, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> duration, and damage every 0.<small>25</small> seconds, which has up to a maximum <b>bonus</b> for the <b>base</b> damage and up to a 200% <b>bonus</b> for the <i>scaling</i> damage.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Maximum Base Damage Increase:',
        raw: '125 / 158.33 / 175 / 185 / 191.67%',
        values: [125, 158.33, 175, 185, 191.67],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '125 / 158.33 / 175 / 185 / 191.67%',
      },
      {
        effectType: 'Unique',
        name: 'Minimum Physical Damage:',
        raw: '40 / 60 / 80 / 100 / 120 (+ 45 / 52.5 / 60 / 67.5 / 75% AD)',
        values: [40, 60, 80, 100, 120],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 60 / 80 / 100 / 120',
        children: [
          {
            values: [45, 52.5, 60, 67.5, 75],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 45 / 52.5 / 60 / 67.5 / 75% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Physical Damage:',
        raw: '90 / 155 / 220 / 285 / 350 (+ 135 / 157.5 / 180 / 202.5 / 225% AD)',
        values: [90, 155, 220, 285, 350],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '90 / 155 / 220 / 285 / 350',
        children: [
          {
            values: [135, 157.5, 180, 202.5, 225],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 135 / 157.5 / 180 / 202.5 / 225% AD',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Decimating Smash</i> can be recast within the duration, and does so automatically afterwards. If the charge is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span>, <i>Decimating Smash</i> is placed on a <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;2-second</span> cooldown.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Sion</b> flails his axe in the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 50% for 0.<small>25</small> seconds. <i>Decimating Smash</i> deals 150% damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> and 60% damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Minimum Monster Damage:',
        raw: '60 / 90 / 120 / 150 / 180 (+ 67.5 / 78.75 / 90 / 101.25 / 112.5% AD)',
        values: [60, 90, 120, 150, 180],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 90 / 120 / 150 / 180',
        children: [
          {
            values: [67.5, 78.75, 90, 101.25, 112.5],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 67.5 / 78.75 / 90 / 101.25 / 112.5% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Monster Damage:',
        raw: '135 / 232.5 / 330 / 427.5 / 525 (+ 202.5 / 236.25 / 270 / 303.75 / 337.5% AD)',
        values: [135, 232.5, 330, 427.5, 525],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '135 / 232.5 / 330 / 427.5 / 525',
        children: [
          {
            values: [202.5, 236.25, 270, 303.75, 337.5],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 202.5 / 236.25 / 270 / 303.75 / 337.5% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Minimum Minion Damage:',
        raw: '24 / 36 / 48 / 60 / 72 (+ 27 / 31.5 / 36 / 40.5 / 45% AD)',
        values: [24, 36, 48, 60, 72],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '24 / 36 / 48 / 60 / 72',
        children: [
          {
            values: [27, 31.5, 36, 40.5, 45],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 27 / 31.5 / 36 / 40.5 / 45% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Minion Damage:',
        raw: '54 / 93 / 132 / 171 / 210 (+ 81 / 94.5 / 108 / 121.5 / 135% AD)',
        values: [54, 93, 132, 171, 210],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '54 / 93 / 132 / 171 / 210',
        children: [
          {
            values: [81, 94.5, 108, 121.5, 135],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 81 / 94.5 / 108 / 121.5 / 135% AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'If <i>Decimating Smash</i> was charged for at least 1 second, <b>Sion</b> instead slams his axe down in the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them up</a></span> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="channel time" data-displayformula="0.5+(0.125 every 0.25 seconds). \'\'Calculation starts at the first second.\'\'" data-bot_values="0.5;0.63;0.75;0.88;1" data-top_values="1;1.25;1.5;1.75;2">0.<small>5</small> − 1 (based on channel time)</span> seconds, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="channel time" data-displayformula="1.25+(0.25 every 0.25 seconds). \'\'Calculation starts at the first second.\'\'" data-bot_values="1.25;1.5;1.75;2;2.25" data-top_values="1;1.25;1.5;1.75;2">1.<small>25</small> − 2.<small>25</small> (based on channel time)</span> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: '5 − 1 (based on channel time) seconds, and  stunning them for 1',
        values: [5, 1],
        user: 'none',
        units: '',
        unitsText: 'seconds, and  stunning them for 1',
        pre: '5 − 1',
        post: 'seconds, and  stunning them for 1',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on channel time',
            pre: 'based on channel time',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Line 3:',
        raw: '25 − 2',
        values: [25, 2],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 − 2',
      },
      {
        effectType: 'Unique',
        name: 'Line 4:',
        raw: '25 (based on channel time) seconds',
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
            unitsText: 'based on channel time',
            pre: 'based on channel time',
          },
        ],
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Sion</b> gains <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">4 <b>bonus</b> health</span></span> whenever he kills an <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="see notes for details">enemy</span>, increased to <span style="color: #1F995C; white-space:normal">15</span> for large enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedowns</a></span> against enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>.',
    leveling: [],
  },
  {
    img: '/wiki/images/Sion_Soul_Furnace.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Sion</b> grants himself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> that lasts for up to 6 seconds. <i>Soul Furnace</i> can be recast after 3 seconds while the shield holds, and does so automatically at the end of the duration.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Shield Strength:',
        raw: '60 / 85 / 110 / 135 / 160 (+ 40% AP) (+ 8 / 9 / 10 / 11 / 12% maximum health)',
        healType: 'BonusHealth',
        values: [60, 85, 110, 135, 160],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 85 / 110 / 135 / 160',
        children: [
          {
            values: 40,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 40% AP',
          },
          {
            values: [8, 9, 10, 11, 12],
            valuesIsPercent: true,
            user: 'player',
            units: 'maximum_hp',
            unitsText: 'maximum health',
            pre: '+ 8 / 9 / 10 / 11 / 12% maximum health',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Sion_Soul_Furnace_2.png',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Sion</b> consumes the shield to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies, capped at 400 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Magic Damage:',
        raw: "40 / 65 / 90 / 115 / 140 (+ 40% AP) (+ 10 / 11 / 12 / 13 / 14% of target's maximum health)",
        healType: 'OutgoingHeals',
        values: [40, 65, 90, 115, 140],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 65 / 90 / 115 / 140',
        children: [
          {
            values: 40,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 40% AP',
          },
          {
            values: [10, 11, 12, 13, 14],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: "+ 10 / 11 / 12 / 13 / 14% of target's maximum health",
          },
        ],
      },
    ],
  },
  {
    description:
      "<i>Both of Soul Furnace's casts can be activated during <b>Sion's</b> other abilities.</i>",
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Sion_Roar_of_the_Slayer.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Sion</b> bellows a shockwave in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for 2.<small>5</small> seconds and inflicts them with <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">20% armor reduction</span></span> for 4 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '65 / 100 / 135 / 170 / 205 (+ 55% AP)',
        values: [65, 100, 135, 170, 205],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '65 / 100 / 135 / 170 / 205',
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
        name: 'Slow:',
        raw: '40 / 45 / 50 / 55 / 60%',
        values: [40, 45, 50, 55, 60],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 45 / 50 / 55 / 60%',
      },
    ],
  },
  {
    description:
      'If the target is a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span> or non-epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>, they are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for 0.<small>75</small> seconds and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked back</a></span> for up to 1350 units further, though not through terrain, applying <i>Roar of the Slayer\'s</i> effects to enemies they pass through as well as briefly granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area around their trajectory.',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Sion_Unstoppable_Onslaught.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Sion</b> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">immune to crowd control</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and, after a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.05 (Estimated)">brief delay</span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">charges</a></span> forward in the direction of the cursor for up to 8 seconds, during which he is able to steer at a slow turn rate while automatically navigating his movement. <i>Unstoppable Onslaught</i> can be recast after <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">0.<small>4</small></span> seconds during the channel.',
    leveling: [],
  },
  {
    description:
      'The charge ramps up <b>Sion\'s</b> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Post movement speed caps"><span style="color: #F5EE99; white-space:normal">movement speed</span></span> at the time of cast by <span style="color: #F5EE99; white-space:normal">40 movement speed</span> every 0.<small>1</small> seconds, up to <span style="color: #F5EE99; white-space:normal">950 <b>total</b> movement speed</span>.',
    leveling: [],
  },
  {
    img: '/wiki/images/Sion_Unstoppable_Onslaught_2.png',
    description:
      'At the end of the charge\'s duration, <b>Sion</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lunge"><a href="/wiki/Dash#Lunge" title="Dash#Lunge"><img alt="Bear Stance.png" src="/wiki/images/Udyr_Bear_Stance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash#Lunge" title="Dash">leaps</a></span> forward <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Can end up being slightly shorter, but not related to to Sion\'s speed">300</span> units, landing after 0.<small>55</small> seconds and slamming the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="500 range, estimated">ground</span> beneath him. <b>Sion</b> will stop upon <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="150 units in front of Sion for the charge and point blank for the leap">colliding</span> with an enemy champion or <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Includes structures, read notes for details on player-generated terrain">terrain</span> during the charge, ending <i>Unstoppable Onslaught</i> with a slam. Crashing into terrain <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> <b>Sion</b> for 0.<small>5</small> seconds.',
    leveling: [],
  },
  {
    description:
      'Enemies hit by <b>Sion\'s</b> charge are dealt <span style="color: #FF8C34; white-space:normal">physical damage</span>. The <b>base</b> damage increases by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="channel time" data-displayformula="55.55% every 1 second. \'\'This is capped at 3 seconds.\'\'" data-bot_values="0;55.56;111.11;166.67" data-top_values="0;1;2;3" data-bot_key="%">0% − 166.<small>67</small>% (based on channel time)</span> and the <i>scaling</i> increases by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="channel time" data-displayformula="33.33% every 1 second. \'\'This is capped at 3 seconds.\'\'" data-bot_values="0;33.33;66.67;100" data-top_values="0;1;2;3" data-bot_key="%">0% − 100% (based on channel time)</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 3:',
        raw: '67% (based on channel time) and the scaling increases by 0% − 100% (based on channel time)',
        values: 67,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: 'and the scaling increases by 0% − 100%',
        pre: '67%',
        post: 'and the scaling increases by 0% − 100%',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on channel time',
            pre: 'based on channel time',
          },
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on channel time',
            pre: 'based on channel time',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Minimum Physical Damage:',
        raw: '150 / 300 / 450 (+ 40% bonus AD)',
        values: [150, 300, 450],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 300 / 450',
        children: [
          {
            values: 40,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 40% bonus AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Physical Damage:',
        raw: '400 / 800 / 1200 (+ 80% bonus AD)',
        values: [400, 800, 1200],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '400 / 800 / 1200',
        children: [
          {
            values: 80,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 80% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'Enemies, including <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span>, hit by the slam are dealt the same damage and are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> for 3 seconds. Enemies in a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="350 range, estimated">smaller radius</span> are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulled</a></span> towards <b>Sion</b> over 0.<small>5</small> seconds and become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> after a brief delay for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="seconds" data-start="0.25;0" data-finish="1.75;3" data-bot_values="0.25;0.75;1.25;1.75" data-top_values="0;1;2;3">0.<small>25</small> − 1.<small>75</small> (based on channel time)</span> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 4:',
        raw: '25 − 1',
        values: [25, 1],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 − 1',
      },
      {
        effectType: 'Unique',
        name: 'Line 5:',
        raw: '75 (based on channel time) seconds',
        values: 75,
        user: 'none',
        units: '',
        unitsText: 'seconds',
        pre: '75',
        post: 'seconds',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on channel time',
            pre: 'based on channel time',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Slow:',
        raw: '40 / 45 / 50%',
        values: [40, 45, 50],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 45 / 50%',
      },
    ],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Sion</b> stops charging, causing him to leap forward and slam the ground beneath him as if <i>Unstoppable Onslaught</i> had reached the end of its duration.',
    leveling: [],
  },
];
export const Sion = { I1, I2, Q, W, E, R };
