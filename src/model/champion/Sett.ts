import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Sett';
const I: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Innate - Heart of the Half-Beast:</b></span> <b>Sett</b> <span style="white-space:nowrap"><a href="/wiki/Health_regeneration" title="Health regeneration"><img alt="Health regeneration icon.png" src="/wiki/images/Health_regeneration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Health_regeneration" title="Health regeneration">regenerates</a></span><span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;an additional <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="0.15;0.5;1;2" data-top_values="1;6;11;16">0.<small>15</small> / 0.<small>5</small> / 1 / 2 (based on level)</span> health</span> per second for every <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">5% of his <b>missing</b> health</span></span>.&nbsp;」</span><span class="flipText2">「&nbsp;up-to <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="2.85;9.5;19;38" data-top_values="1;6;11;16">2.<small>85</small> / 9.<small>5</small> / 19 / 38 (based on level)</span> health</span> per second (maximum reached at <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">95% <b>missing</b> health</span></span>).&nbsp;」</span></span>',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: '15 / 0',
        values: [15, 0],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 0',
      },
      {
        effectType: 'Heal',
        name: 'Line 3:',
        raw: '5 / 1 / 2 (based on level) health per second for every  5% of his missing health',
        healType: 'BonusHealth',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'missing_hp',
        unitsText: 'health per second for every  5% of his missing health',
        pre: '5 / 1 / 2',
        post: 'health per second for every  5% of his missing health',
      },
      {
        effectType: 'Unique',
        name: 'Line 5:',
        raw: '85 / 9',
        values: [85, 9],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '85 / 9',
      },
      {
        effectType: 'Heal',
        name: 'Line 6:',
        raw: '5 / 19 / 38 (based on level) health per second (maximum reached at  95% missing health)',
        healType: 'BonusHealth',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'total_hp',
        unitsText: 'health per second',
        pre: '5 / 19 / 38',
        post: 'health per second',
        children: [
          {
            values: 9,
            valuesIsPercent: true,
            user: 'player',
            units: 'missing_hp',
            unitsText: 'missing healthreached at  95',
            pre: 'maximum reached at  95% missing health',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Sett_Pit_Grit.png',
    description:
      '<span class="template_sbc"><b>Innate - Heavy Hands:</b></span> <b>Sett\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> alternate between his <span style="color:yellow; white-space:normal">Left Punch</span> and a <span style="color: #E34D4C; white-space:normal">Right Punch</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span>. <b>Sett</b> begins attacking with his <span style="color:yellow; white-space:normal">Left Punch</span>, and will reset back to it after 2 seconds of not performing a <span style="color: #E34D4C; white-space:normal">Right Punch</span>.',
    leveling: [],
  },
  {
    description:
      '<b>Sett\'s</b> <span style="color: #E34D4C; white-space:normal">Right Punch</span> is empowered to gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50 <b>bonus</b> range</span> (unless <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sett" data-ability="Knuckle Down" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sett/LoL#Knuckle_Down" title="Knuckle Down"><img alt="Knuckle Down" src="/wiki/images/Sett_Knuckle_Down.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sett/LoL#Knuckle_Down" title="Sett/LoL">Knuckle Down</a></span></span></i> is active), attack at 8 times the <span style="color:yellow; white-space:normal">Left Punch\'s</span> <span style="color:orangered; white-space:normal">attack speed</span>, and deal <span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="5;" data-finish="90;" data-bot_values="5;10;15;20;25;30;35;40;45;50;55;60;65;70;75;80;85;90" data-top_values="">5 − 90 (based on level)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;55% <b>bonus</b> AD)</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: "Sett's Right Punch is empowered to gain  50 bonus range (unless  Knuckle Down is active), attack at 8 times the Left Punch's attack speed, and deal 5 − 90 (based on level) (+ 55% bonus AD) bonus physical damage",
        increasedStat: 'total_ad',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: '',
        unitsText:
          ", attack at 8 times the Left Punch's attack speed, and deal 5 − 90",
        pre: "Sett's Right Punch is empowered to gain  50 bonus range",
        post: ", attack at 8 times the Left Punch's attack speed, and deal 5 − 90",
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'unless  Knuckle Down is active',
            pre: 'unless  Knuckle Down is active',
          },
          {
            values: 55,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 55% bonus AD',
          },
        ],
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Sett_Knuckle_Down.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Sett</b> empowers his next two basic attacks within 5 seconds to gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50 <b>bonus</b> range</span> and deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>, capped at 400 <b>total</b> damage of each attack against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup>',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Bonus Physical Damage:',
        raw: "10 / 20 / 30 / 40 / 50 (+ 1% (+ 1 / 1.5 / 2 / 2.5 / 3% per 100 AD) of target's maximum health)",
        healType: 'OutgoingHeals',
        values: [10, 20, 30, 40, 50],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 20 / 30 / 40 / 50',
        children: [
          {
            values: 1,
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: '+ 1%',
            post: "of target's maximum health",
            children: [
              {
                values: [1, 1.5, 2, 2.5, 3],
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'per 100 AD',
                pre: '+ 1 / 1.5 / 2 / 2.5 / 3% per 100 AD',
              },
            ],
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Total Bonus Physical Damage:',
        raw: "20 / 40 / 60 / 80 / 100 (+ 2% (+ 2 / 3 / 4 / 5 / 6% per 100 AD) of target's maximum health)",
        healType: 'OutgoingHeals',
        values: [20, 40, 60, 80, 100],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 40 / 60 / 80 / 100',
        children: [
          {
            values: 2,
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: '+ 2%',
            post: "of target's maximum health",
            children: [
              {
                values: [2, 3, 4, 5, 6],
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ad',
                unitsText: 'per 100 AD',
                pre: '+ 2 / 3 / 4 / 5 / 6% per 100 AD',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Sett_Looking_for_a_Fight.png',
    description:
      'For 1.<small>5</small> seconds, <b>Sett</b> also gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">30% <b>bonus</b> movement speed</span></span> while facing <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> within 2000 units.',
    leveling: [],
  },
  {
    description:
      '<i>Knuckle Down <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Sett\'s</b> basic attack timer. The empowered attacks are guaranteed to be a <span style="color:yellow; white-space:normal">Left Punch</span> followed by a <span style="color: #E34D4C; white-space:normal">Right Punch</span>, resetting <b>Sett\'s</b> current <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sett" data-ability="Pit Grit" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sett/LoL#Pit_Grit" title="Pit Grit"><img alt="Pit Grit" src="/wiki/images/Sett_Pit_Grit.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sett/LoL#Pit_Grit" title="Sett/LoL">Pit Grit</a></span></span> state (if applicable) and ignoring the usual time-out period for a follow-up <span style="color: #E34D4C; white-space:normal">Right Punch</span>.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Sett</b> stores 100% of <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after resistances and modifiers.">post-mitigation damage</span> taken as <i>Grit</i> on his resource bar, up to <span style="color: #1F995C; white-space:normal">50% of his <b>maximum</b> health</span>. Each instance of stored <i>Grit</i> decays by 30% every second after 4 seconds.',
    leveling: [],
  },
  {
    img: '/wiki/images/Sett_Haymaker.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Sett</b> immediately grants himself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> equal to his expended <i>Grit</i> for 3 seconds, decaying after 0.<small>75</small> seconds, and charges up a strike over the cast time.',
    leveling: [],
  },
  {
    description:
      'After the cast time, he unleashes a blast in a cone in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit; those hit in a center line are dealt <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike true icon.png" src="/wiki/images/Critical_strike_true_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike"><span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal">true damage</span></span></span> instead.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Damage:',
        raw: '80 / 100 / 120 / 140 / 160 (+ 25% (+ 25% per 100 bonus AD) of expended Grit)',
        values: [80, 100, 120, 140, 160],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 100 / 120 / 140 / 160',
        children: [
          {
            values: 25,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'of expended Grit',
            pre: '+ 25%',
            post: 'of expended Grit',
            children: [
              {
                values: 25,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_ad',
                unitsText: 'per 100 bonus AD',
                pre: '+ 25% per 100 bonus AD',
              },
            ],
          },
        ],
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Sett_Facebreaker.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Sett</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulls in</a></span> enemies at his front and back along the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 70% for 0.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '50 / 70 / 90 / 110 / 130 (+ 60% AD)',
        values: [50, 70, 90, 110, 130],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 70 / 90 / 110 / 130',
        children: [
          {
            values: 60,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 60% AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'If <i>Facebreaker</i> affects at least one enemy on each side, all enemies are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for 1 second upon landing.',
    leveling: [],
  },
  {
    description:
      "<i><b>Sett</b> is unable to move or attack for 0.<small>25</small> seconds after Facebreaker's cast time.</i>",
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Sett_The_Show_Stopper.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Sett</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Suppression"><a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control#Suppression"><img alt="Suppression icon.png" src="/wiki/images/Suppression_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control">suppresses</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">reveals</a></span> the target enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashing</a></span> with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span> to their location and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attach"><a href="/wiki/Attached" title="Attached"><img alt="You and Me!.png" src="/wiki/images/Yuumi_You_and_Me%21.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attached" title="Attached">attaching</a></span> them to himself upon arrival. He leaps another 600 units in the same direction to slam the target into the ground, creating a massive shockwave and quickly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">sliding</a></span> forward 250 units beyond the impact.',
    leveling: [],
  },
  {
    description:
      'Enemies within <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="125 unit radius around the target\'s landing location, but not the true center of the area of effect">the epicenter</span> take <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike physical icon.png" src="/wiki/images/Critical_strike_physical_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike"><span style="color: #FF8C34; white-space:normal">physical damage</span></span>, and other enemies hit by the shockwave take <span style="color: #FF8C34; white-space:normal">physical damage</span> that is reduced by up to 75% based on proximity. All targets hit are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 99% for 1 second.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Physical Damage:',
        raw: "200 / 300 / 400 (+ 120% bonus AD) (+ 40 / 50 / 60% of primary target's bonus health)",
        healType: 'OutgoingHeals',
        values: [200, 300, 400],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '200 / 300 / 400',
        children: [
          {
            values: 120,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 120% bonus AD',
          },
          {
            values: [40, 50, 60],
            valuesIsPercent: true,
            user: 'target',
            units: 'bonus_hp',
            unitsText: "of primary target's bonus health",
            pre: "+ 40 / 50 / 60% of primary target's bonus health",
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Reduced Damage:',
        raw: "50 / 75 / 100 (+ 30% bonus AD) (+ 10 / 12.5 / 15% of primary target's bonus health)",
        healType: 'OutgoingHeals',
        values: [50, 75, 100],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 75 / 100',
        children: [
          {
            values: 30,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 30% bonus AD',
          },
          {
            values: [10, 12.5, 15],
            valuesIsPercent: true,
            user: 'target',
            units: 'bonus_hp',
            unitsText: "of primary target's bonus health",
            pre: "+ 10 / 12.5 / 15% of primary target's bonus health",
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>The dash will end and create the impact prematurely upon encountering terrain that cannot be dashed through, whether by distance or invalid space.</i>',
    leveling: [],
  },
];
export const Sett = { I, Q, W, E, R };
