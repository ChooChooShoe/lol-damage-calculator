import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Sett';

export default {
  'Pit Grit': {
    name: 'Pit Grit',
    display_name: 'Pit Grit',
    champion: 'Sett',
    skill: 'I',
    image: {
      full: 'Sett_P.png',
      sprite: 'passive3.png',
      group: 'passive',
      x: 48,
      y: 96,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate - Heart of the Half-Beast:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sett" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sett/LoL" title="Sett"><img alt="Sett" src="/wiki/images/Sett_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sett/LoL" title="Sett/LoL">Sett</a></span></span> <span style="white-space:nowrap"><a href="/wiki/Health_regeneration" title="Health regeneration"><img alt="Health regeneration icon.png" src="/wiki/images/Health_regeneration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;regenerates</span> additional health based on <span style="color: #1F995C; white-space:normal">his <b>missing</b> health</span>.',
      '<span class="template_sbc"><b>Innate - Heavy Hands:</b></span> <b>Sett\'s</b> basic attacks alternate between his <span style="color:yellow; white-space:normal">Left Punch</span> and a <span style="color: #E34D4C; white-space:normal">Right Punch</span>. His <span style="color: #E34D4C; white-space:normal">Right Punch</span> attacks more quickly with <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> range</span> and deals <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.',
    ],
    description: [
      {
        description:
          'Innate - Heart of the Half-Beast: Sett  regenerates「 an additional 0.15 / 0.5 / 1 / 2 (based on level) health per second for every  5% of his missing health. 」「 up-to 2.85 / 9.5 / 19 / 38 (based on level) health per second (maximum reached at  95% missing health). 」',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Heart of the Half-Beast:</b></span> <b>Sett</b> <span style="white-space:nowrap"><a href="/wiki/Health_regeneration" title="Health regeneration"><img alt="Health regeneration icon.png" src="/wiki/images/Health_regeneration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Health_regeneration" title="Health regeneration">regenerates</a></span><span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;an additional <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="0.15;0.5;1;2" data-top_values="1;6;11;16">0.<small>15</small> / 0.<small>5</small> / 1 / 2 (based on level)</span> health</span> per second for every <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">5% of his <b>missing</b> health</span></span>.&nbsp;」</span><span class="flipText2">「&nbsp;up-to <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="2.85;9.5;19;38" data-top_values="1;6;11;16">2.<small>85</small> / 9.<small>5</small> / 19 / 38 (based on level)</span> health</span> per second (maximum reached at <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">95% <b>missing</b> health</span></span>).&nbsp;」</span></span>',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Innate - Heart of the Half-Beast:',
            raw: ' Sett  regenerates「 an additional 0.15 / 0.5 / 1 / 2 (based on level) health per second for every  5% of his missing health. 」「 up-to 2.85 / 9.5 / 19 / 38 (based on level) health per second (maximum reached at  95% missing health). 」',
            healType: 'HealthRegen',
            values: [],
            basedOn: 'level',
            units: 'missing_hp',
            unitsText:
              'health per second for every  5% of his missing health. 」「 up-to 2.85 / 9.5 / 19 / 38',
            pre: 'Sett  regenerates「 an additional 0.15 / 0.5 / 1 / 2',
            post: 'health per second for every  5% of his missing health. 」「 up-to 2.85 / 9.5 / 19 / 38',
            children: [
              {
                values: 9,
                valuesIsPercent: true,
                units: 'missing_hp',
                unitsText: 'missing healthreached at  95',
                pre: 'maximum reached at  95% missing health',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Pit Grit.png',
        description:
          "Innate - Heavy Hands: Sett's basic attacks alternate between his Left Punch and a Right Punch on-attack. Sett begins attacking with his Left Punch, and will reset back to it after 2 seconds of not performing a Right Punch.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Heavy Hands:</b></span> <b>Sett\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> alternate between his <span style="color:yellow; white-space:normal">Left Punch</span> and a <span style="color: #E34D4C; white-space:normal">Right Punch</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span>. <b>Sett</b> begins attacking with his <span style="color:yellow; white-space:normal">Left Punch</span>, and will reset back to it after 2 seconds of not performing a <span style="color: #E34D4C; white-space:normal">Right Punch</span>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'Sett begins attacking with his Left Punch, and will reset back to it after 2 seconds of not performing a Right Punch.',
            values: 2,
            units: 'total_ad',
            unitsText:
              'begins attacking with his Left Punch, and will reset back to it after 2 seconds of not performing a Right Punch.',
            pre: 'Sett begins attacking with his Left Punch, and will reset back to it after 2 seconds of not performing a Right Punch.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Sett's Right Punch is empowered to gain  50 bonus range (unless  Knuckle Down is active), attack at 8 times the Left Punch's attack speed, and deal 5 − 90 (based on level) (+ 55% bonus AD) bonus physical damage.",
        descriptionHTML:
          '<b>Sett\'s</b> <span style="color: #E34D4C; white-space:normal">Right Punch</span> is empowered to gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50 <b>bonus</b> range</span> (unless <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sett" data-ability="Knuckle Down" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sett/LoL#Knuckle_Down" title="Knuckle Down"><img alt="Knuckle Down" src="/wiki/images/Sett_Knuckle_Down.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sett/LoL#Knuckle_Down" title="Sett/LoL">Knuckle Down</a></span></span></i> is active), attack at 8 times the <span style="color:yellow; white-space:normal">Left Punch\'s</span> <span style="color:orangered; white-space:normal">attack speed</span>, and deal <span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="5;" data-finish="90;" data-bot_values="5;10;15;20;25;30;35;40;45;50;55;60;65;70;75;80;85;90" data-top_values="">5 − 90 (based on level)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;55% <b>bonus</b> AD)</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: "Sett's Right Punch is empowered to gain  50 bonus range (unless  Knuckle Down is active), attack at 8 times the Left Punch's attack speed, and deal 5 − 90 (based on level) (+ 55% bonus AD) bonus physical damage.",
            increasedStat: 'total_ad',
            values: [],
            basedOn: 'level',
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
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 55% bonus AD',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self, Enemies',
    damagetype: 'physical',
    spelleffects: 'Proc',
    notes:
      '* The <span style="color: #E34D4C; white-space:normal">Right Punch</span> does not grant <span style="color:orangered; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack speed</span></span>, rather its windup is sped up and fixed at <span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;12.<small>5</small>% of a <span style="color:yellow; white-space:normal">Left Punch\'s</span> windup time.&nbsp;」</span><span class="flipText2">「&nbsp;800% of a <span style="color:yellow; white-space:normal">Left Punch\'s</span> windup speed.&nbsp;」</span></span>\n<ul><li><ul><li>The windup is still affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cripple"><a href="/wiki/Cripple" title="Cripple"><img alt="Cripple icon.png" src="/wiki/images/Cripple_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cripple" class="mw-redirect" title="Cripple">cripples</a></span> and attack speed buffs that were not already active for the previous <span style="color:yellow; white-space:normal">Left Punch\'s</span>.</li></ul></li>\n<li>The bonus physical damage from the <span style="color: #E34D4C; white-space:normal">Right Punch</span> benefits from <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span>.</li></ul>',
  },
  'Knuckle Down': {
    name: 'Knuckle Down',
    display_name: 'Knuckle Down',
    champion: 'Sett',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'SettQ.png',
      sprite: 'spell11.png',
      group: 'spell',
      x: 0,
      y: 96,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cooldown: '9 / 8 / 7 / 6 / 5',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sett" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sett/LoL" title="Sett"><img alt="Sett" src="/wiki/images/Sett_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sett/LoL" title="Sett/LoL">Sett</a></span></span> empowers his next two basic attacks within a few seconds to gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> range</span> and deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> based on the <span style="color: #1F995C; white-space:normal">target\'s <b>maximum</b> health</span>.',
      'He also briefly gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> while moving toward enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Knuckle Down.png',
        description:
          'Active: Sett empowers his next two basic attacks within 5 seconds to gain  50 bonus range and deal bonus physical damage, capped at 400 total damage of each attack against  monsters.(bug)',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Sett</b> empowers his next two basic attacks within 5 seconds to gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50 <b>bonus</b> range</span> and deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>, capped at 400 <b>total</b> damage of each attack against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup>',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Sett empowers his next two basic attacks within 5 seconds to gain  50 bonus range and deal bonus physical damage, capped at 400 total damage of each attack against  monsters.(bug)',
            increasedStat: 'total_ap',
            values: 5,
            units: '',
            unitsText:
              'empowers his next two basic attacks within 5 seconds to gain  50 bonus range and deal bonus physical damage, capped at 400 total damage of each attack against  monsters.',
            pre: 'Sett empowers his next two basic attacks within 5 seconds to gain  50 bonus range and deal bonus physical damage, capped at 400 total damage of each attack against  monsters.',
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
        leveling: [
          {
            name: 'Bonus Physical Damage:',
            values:
              "10 / 20 / 30 / 40 / 50 (+ 1% (+ 1 / 1.5 / 2 / 2.5 / 3% per 100 AD) of target's maximum health)",
            valuesHTML:
              '10 / 20 / 30 / 40 / 50 <span style="color: #1F995C; white-space:normal">(+&nbsp;1% <span style="color:orange; white-space:normal">(+&nbsp;1 / 1.<small>5</small> / 2 / 2.<small>5</small> / 3% per 100 AD)</span> of target\'s <b>maximum</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Bonus Physical Damage:',
            raw: "10 / 20 / 30 / 40 / 50 (+ 1% (+ 1 / 1.5 / 2 / 2.5 / 3% per 100 AD) of target's maximum health)",
            healType: 'PhysicalVamp',
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
                    units: 'total_ad',
                    unitsText: 'per 100 AD',
                    pre: '+ 1 / 1.5 / 2 / 2.5 / 3% per 100 AD',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Looking for a Fight.png',
        description:
          'For 1.5 seconds, Sett also gains  30% bonus movement speed while facing  visible enemy  champions within 2000 units.',
        descriptionHTML:
          'For 1.<small>5</small> seconds, <b>Sett</b> also gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">30% <b>bonus</b> movement speed</span></span> while facing <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> within 2000 units.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'For 1.5 seconds, Sett also gains  30% bonus movement speed while facing  visible enemy  champions within 2000 units.',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'bonus movement speed while facing  visible enemy  champions within 2000 units.1.5 seconds, Sett also gains  30',
            pre: 'For 1.5 seconds, Sett also gains  30% bonus movement speed while facing  visible enemy  champions within 2000 units.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Knuckle Down  resets Sett's basic attack timer. The empowered attacks are guaranteed to be a Left Punch followed by a Right Punch, resetting Sett's current  Pit Grit state (if applicable) and ignoring the usual time-out period for a follow-up Right Punch.",
        descriptionHTML:
          '<i>Knuckle Down <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Sett\'s</b> basic attack timer. The empowered attacks are guaranteed to be a <span style="color:yellow; white-space:normal">Left Punch</span> followed by a <span style="color: #E34D4C; white-space:normal">Right Punch</span>, resetting <b>Sett\'s</b> current <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sett" data-ability="Pit Grit" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sett/LoL#Pit_Grit" title="Pit Grit"><img alt="Pit Grit" src="/wiki/images/Sett_Pit_Grit.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sett/LoL#Pit_Grit" title="Sett/LoL">Pit Grit</a></span></span> state (if applicable) and ignoring the usual time-out period for a follow-up <span style="color: #E34D4C; white-space:normal">Right Punch</span>.</i>',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: "The empowered attacks are guaranteed to be a Left Punch followed by a Right Punch, resetting Sett's current  Pit Grit state (if applicable) and ignoring the usual time-out period for a follow-up Right Punch.",
            damagetype: 'None',
            values: 0,
            user: 'none',
            units: '',
            unitsText:
              'and ignoring the usual time-out period for a follow-up Right Punch.',
            pre: "The empowered attacks are guaranteed to be a Left Punch followed by a Right Punch, resetting Sett's current  Pit Grit state",
            post: 'and ignoring the usual time-out period for a follow-up Right Punch.',
            children: [
              {
                values: 0,
                units: 'total_ap',
                unitsText: 'if applicable',
                pre: 'if applicable',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self, Enemies',
    damagetype: 'Physical',
    spelleffects: 'Proc',
    spellshield: false,
    notes:
      '* The bonus movement speed buff is named <i>Looking For a Fight</i>.\n<ul><li><i>Knuckle Down</i> can be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodged"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blocked"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span> or missed while <b>Sett</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span>.</li>\n<li>Due to the way the damage cap against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> is implemented, <i>Knuckle Down</i> may deal less damage to monsters at high amounts of <span style="color:orange; white-space:normal">AD</span> than <b>Sett\'s</b> basic attacks.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup>\n<ul><li>If the attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strikes</a></span>, the capped damage will.</li></ul></li></ul>',
  },
  Haymaker: {
    name: 'Haymaker',
    display_name: 'Haymaker',
    champion: 'Sett',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'SettW.png',
      sprite: 'spell11.png',
      group: 'spell',
      x: 48,
      y: 96,
      w: 48,
      h: 48,
    },
    range: '725',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Inner true damage rectangle width, center-to-edge range">60</span>',
    angle: '27°',
    cast_time: '0.<small>75</small>',
    cost: '100%',
    costtype: 'Current Grit',
    cooldown: '18 / 16.<small>5</small> / 15 / 13.<small>5</small> / 12',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sett" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sett/LoL" title="Sett"><img alt="Sett" src="/wiki/images/Sett_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sett/LoL" title="Sett/LoL">Sett</a></span></span> stores <i>Grit</i> equal to damage taken, which gradually expires after a few seconds.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Sett</b> converts his current <i>Grit</i> into a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> that decays over a short time. He also unleashes a blast in a cone in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit based on his expended <i>Grit</i>. Enemies hit in a center line are dealt <span style="color: #F9966B; white-space:normal">true damage</span> instead.',
    ],
    description: [
      {
        description:
          'Passive: Sett stores 100% of post-mitigation damage taken as Grit on his resource bar, up to 50% of his maximum health. Each instance of stored Grit decays by 30% every second after 4 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Sett</b> stores 100% of <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after resistances and modifiers.">post-mitigation damage</span> taken as <i>Grit</i> on his resource bar, up to <span style="color: #1F995C; white-space:normal">50% of his <b>maximum</b> health</span>. Each instance of stored <i>Grit</i> decays by 30% every second after 4 seconds.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Passive:',
            raw: ' Sett stores 100% of post-mitigation damage taken as Grit on his resource bar, up to 50% of his maximum health',
            healType: 'BonusHealth',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'of post-mitigation damage taken as Grit on his resource bar, up to 50stores 100',
            pre: 'Sett stores 100% of post-mitigation damage taken as Grit on his resource bar, up to 50% of his maximum health',
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'Each instance of stored Grit decays by 30% every second after 4 seconds.',
            values: 3,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'every second after 4 seconds.instance of stored Grit decays by 30',
            pre: 'Each instance of stored Grit decays by 30% every second after 4 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Haymaker.png',
        description:
          'Active: Sett immediately grants himself a  shield equal to his expended Grit for 3 seconds, decaying after 0.75 seconds, and charges up a strike over the cast time.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Sett</b> immediately grants himself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> equal to his expended <i>Grit</i> for 3 seconds, decaying after 0.<small>75</small> seconds, and charges up a strike over the cast time.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Active:',
            raw: ' Sett immediately grants himself a  shield equal to his expended Grit for 3 seconds, decaying after 0.75 seconds, and charges up a strike over the cast time.',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'immediately grants himself a  shield equal to his expended Grit for 3 seconds, decaying after 0.75 seconds, and charges up a strike over the cast time.',
            pre: 'Sett immediately grants himself a  shield equal to his expended Grit for 3 seconds, decaying after 0.75 seconds, and charges up a strike over the cast time.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'After the cast time, he unleashes a blast in a cone in the target direction that deals physical damage to enemies hit; those hit in a center line are dealt   true damage instead.',
        descriptionHTML:
          'After the cast time, he unleashes a blast in a cone in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit; those hit in a center line are dealt <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike true icon.png" src="/wiki/images/Critical_strike_true_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike"><span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal">true damage</span></span></span> instead.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Damage:',
            values:
              '80 / 100 / 120 / 140 / 160 (+ 25% (+ 25% per 100 bonus AD) of expended Grit)',
            valuesHTML:
              '80 / 100 / 120 / 140 / 160 (+ 25% <span style="color:orange; white-space:normal">(+&nbsp;25% per 100 <b>bonus</b> AD)</span> of expended <i>Grit</i>)',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Damage:',
            raw: '80 / 100 / 120 / 140 / 160 (+ 25% (+ 25% per 100 bonus AD) of expended Grit)',
            damagetype: 'None',
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
    ],
    targeting: 'Direction',
    affects: 'Self, Enemies',
    damagetype:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Physical damage"><a href="/wiki/Physical_damage" title="Physical damage"><img alt="Attack damage.png" src="/wiki/images/Attack_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Physical_damage" title="Physical damage"><span style="color: #FF8C34; white-space:normal">Physical damage</span></a></span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True damage"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration.png" src="/wiki/images/Hybrid_penetration.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/True_damage" title="True damage"><span style="color: #F9966B; white-space:normal">True damage</span></a></span>',
    spelleffects: 'aoe',
    spellshield: true,
    projectile: 'false',
    notes:
      '* <span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span> Trapezoid effect hitbox geometry values, backwards range (true damage rectangle does NOT start at 0 distance from Sett; doesn\'T have as much reach backwards while still being edge range).\n<ul><li>The shield is created immediately and will decay after the blast delay.\n<ul><li>The buff for the shield is named <i>Down But Not Out</i>.</li></ul></li>\n<li><b>Sett</b> does not store <span style="color: #FFD700; white-space:normal">Grit</span> from damage that was mitigated by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span>.</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li>\n<li><b>Sett</b> will turn towards the target direction at the start of the cast time.</li>\n<li><b>Sett</b> will glow when attaining 90% <span style="color: #FFD700; white-space:normal">Grit</span>. Casting <i>Haymaker</i> at this amount has a different visual and audio effect.</li></ul>\n<figure class="thumb tleft " style="width: 130px"> \t<a href="https://static.wikia.nocookie.net/leagueoflegends/images/e/e5/90%25_Grit_Sett.png/revision/latest?cb=20200425062843" class="image"><img alt="" src="/wiki/images/90%25_Grit_Sett.png" decoding="async" loading="lazy" width="130" height="148" class="thumbimage lazyload"></a> \t<noscript><a href="https://static.wikia.nocookie.net/leagueoflegends/images/e/e5/90%25_Grit_Sett.png/revision/latest?cb=20200425062843" class="image"><img alt="" src="https://static.wikia.nocookie.net/leagueoflegends/images/e/e5/90%25_Grit_Sett.png/revision/latest?cb=20200425062843" decoding="async" loading="lazy" width="130" height="148" class="thumbimage" data-image-name="90% Grit Sett.png" data-image-key="90%25_Grit_Sett.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/e/e5/90%25_Grit_Sett.png/revision/latest?cb=20200425062843"></a></noscript> \t<figcaption class="thumbcaption"> \t\t \t\t \t\t \t\t\t<p class="caption"><b>Sett</b> will turn <span style="color:#FFDF00;"><b>golden</b></span> <i>(base skin)</i>.</p> \t\t \t</figcaption> </figure>',
  },
  Facebreaker: {
    name: 'Facebreaker',
    display_name: 'Facebreaker',
    champion: 'Sett',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'SettE.png',
      sprite: 'spell11.png',
      group: 'spell',
      x: 96,
      y: 96,
      w: 48,
      h: 48,
    },
    range: '450',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Rectangle width, center-to-edge range">280</span>',
    cast_time: '0.<small>25</small>',
    cooldown: '16 / 14.<small>5</small> / 13 / 11.<small>5</small> / 10',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sett" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sett/LoL" title="Sett"><img alt="Sett" src="/wiki/images/Sett_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sett/LoL" title="Sett/LoL">Sett</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulls in</a></span> enemies along the target direction from both sides of himself, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span>.',
      'If <i>Facebreaker</i> affects at least one enemy on each side, all enemies are also briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Facebreaker.png',
        description:
          'Active: Sett  pulls in enemies at his front and back along the target direction, dealing physical damage and  slowing them by 70% for 0.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Sett</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulls in</a></span> enemies at his front and back along the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 70% for 0.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Sett  pulls in enemies at his front and back along the target direction, dealing physical damage and  slowing them by 70% for 0.5 seconds.',
            damagetype: 'Physical',
            values: 7,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'for 0.5 seconds. pulls in enemies at his front and back along the target direction, dealing physical damage and  slowing them by 70',
            pre: 'Sett  pulls in enemies at his front and back along the target direction, dealing physical damage and  slowing them by 70% for 0.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '50 / 70 / 90 / 110 / 130 (+ 60% AD)',
            valuesHTML:
              '50 / 70 / 90 / 110 / 130 <span style="color:orange; white-space:normal">(+&nbsp;60% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '50 / 70 / 90 / 110 / 130 (+ 60% AD)',
            damagetype: 'Physical',
            values: [50, 70, 90, 110, 130],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 70 / 90 / 110 / 130',
            children: [
              {
                values: 60,
                valuesIsPercent: true,
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
          'If Facebreaker affects at least one enemy on each side, all enemies are  stunned for 1 second upon landing.',
        descriptionHTML:
          'If <i>Facebreaker</i> affects at least one enemy on each side, all enemies are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for 1 second upon landing.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'If Facebreaker affects at least one enemy on each side, all enemies are  stunned for 1 second upon landing.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'Facebreaker affects at least one enemy on each side, all enemies are  stunned for 1 second upon landing.',
            pre: 'If Facebreaker affects at least one enemy on each side, all enemies are  stunned for 1 second upon landing.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Sett is unable to move or attack for 0.25 seconds after Facebreaker's cast time.",
        descriptionHTML:
          "<i><b>Sett</b> is unable to move or attack for 0.<small>25</small> seconds after Facebreaker's cast time.</i>",
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'aoe',
    spellshield: true,
    projectile: 'False',
    notes:
      '* <b>Sett</b> will afterwards attempt to basic attack the closest target picked up by <i>Facebreaker</i>, prioritising champions and prioritising those in front of him.\n<ul><li>If <i>Facebreaker</i> does not hit an enemy, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sett" data-ability="Haymaker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sett/LoL#Haymaker" title="Haymaker"><img alt="Haymaker" src="/wiki/images/Sett_Haymaker.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sett/LoL#Haymaker" title="Sett/LoL">Haymaker</a></span></span> is also unable to be cast for 0.<small>25</small> seconds after the cast time.</li>\n<li>Targets will be pulled towards <b>Sett\'s</b> location in a straight line and rebound to 150 units from him back in the same line.</li>\n<li>The <a href="/wiki/Spell_indicator" title="Spell indicator">spell indicator</a> is slightly shorter than the actual hitbox\' rectangle length, and slightly wider than the width (note that the effects are edge-range from the hitbox rectangle).</li>\n<li>If targets on either opposite side are protected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shields</a></span>, <i>Facebreaker</i> will not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span>.</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Cast time\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All the other item-actives are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death, unless protected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">Resurrection</a></span>\n</li></td></tr></tbody></table>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Sett_Original_E_1.ogg   "Facebreaker!"',
  },
  'The Show Stopper': {
    name: 'The Show Stopper',
    display_name: 'The Show Stopper',
    champion: 'Sett',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'SettR.png',
      sprite: 'spell11.png',
      group: 'spell',
      x: 144,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '400',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="From Sett\'s own final landing destination (may be a bug)">600</span>',
    cast_time: 'none',
    cooldown: '120 / 110 / 100 / 90 / 80',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sett" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sett/LoL" title="Sett"><img alt="Sett" src="/wiki/images/Sett_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sett/LoL" title="Sett/LoL">Sett</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Suppression"><a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control#Suppression"><img alt="Suppression icon.png" src="/wiki/images/Suppression_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control">carries</a></span> the target enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> through the air with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span>, then slams them into the ground to deal <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies based on the <span style="color: #1F995C; white-space:normal">target\'s <b>bonus</b> health</span>. Enemies hit are also briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span>.',
      '<span class="template_sbc"><b><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> displacement immunity</span>:</b></span> The dash cannot be deterred by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/The Show Stopper.png',
        description:
          'Active: Sett  suppresses and  reveals the target enemy  champion while  dashing with  displacement immunity to their location and  attaching them to himself upon arrival. He leaps another 600 units in the same direction to slam the target into the ground, creating a massive shockwave and quickly  sliding forward 250 units beyond the impact.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Sett</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Suppression"><a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control#Suppression"><img alt="Suppression icon.png" src="/wiki/images/Suppression_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control">suppresses</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">reveals</a></span> the target enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashing</a></span> with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span> to their location and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attach"><a href="/wiki/Attached" title="Attached"><img alt="You and Me!.png" src="/wiki/images/Yuumi_You_and_Me%21.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attached" title="Attached">attaching</a></span> them to himself upon arrival. He leaps another 600 units in the same direction to slam the target into the ground, creating a massive shockwave and quickly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">sliding</a></span> forward 250 units beyond the impact.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'He leaps another 600 units in the same direction to slam the target into the ground, creating a massive shockwave and quickly  sliding forward 250 units beyond the impact.',
            damagetype: 'None',
            values: 6,
            units: 'total_ap',
            unitsText:
              'leaps another 600 units in the same direction to slam the target into the ground, creating a massive shockwave and quickly  sliding forward 250 units beyond the impact.',
            pre: 'He leaps another 600 units in the same direction to slam the target into the ground, creating a massive shockwave and quickly  sliding forward 250 units beyond the impact.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Enemies within the epicenter take  physical damage, and other enemies hit by the shockwave take physical damage that is reduced by up to 75% based on proximity. All targets hit are  slowed by 99% for 1 second.',
        descriptionHTML:
          'Enemies within <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="125 unit radius around the target\'s landing location, but not the true center of the area of effect">the epicenter</span> take <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike physical icon.png" src="/wiki/images/Critical_strike_physical_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike"><span style="color: #FF8C34; white-space:normal">physical damage</span></span>, and other enemies hit by the shockwave take <span style="color: #FF8C34; white-space:normal">physical damage</span> that is reduced by up to 75% based on proximity. All targets hit are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 99% for 1 second.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Enemies within the epicenter take  physical damage, and other enemies hit by the shockwave take physical damage that is reduced by up to 75% based on proximity',
            damagetype: 'Physical',
            values: 7,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'based on proximitywithin the epicenter take  physical damage, and other enemies hit by the shockwave take physical damage that is reduced by up to 75',
            pre: 'Enemies within the epicenter take  physical damage, and other enemies hit by the shockwave take physical damage that is reduced by up to 75% based on proximity',
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'All targets hit are  slowed by 99% for 1 second.',
            values: 9,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'for 1 second.targets hit are  slowed by 99',
            pre: 'All targets hit are  slowed by 99% for 1 second.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values:
              "200 / 250 / 300 / 350 / 400 (+ 120% bonus AD) (+ 40 / 45 / 50 / 55 / 60% of primary target's bonus health)",
            valuesHTML:
              '200 / 250 / 300 / 350 / 400 <span style="color:orange; white-space:normal">(+&nbsp;120% <b>bonus</b> AD)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;40 / 45 / 50 / 55 / 60% of primary target\'s <b>bonus</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Physical Damage:',
            raw: "200 / 250 / 300 / 350 / 400 (+ 120% bonus AD) (+ 40 / 45 / 50 / 55 / 60% of primary target's bonus health)",
            healType: 'PhysicalVamp',
            values: [200, 250, 300, 350, 400],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 250 / 300 / 350 / 400',
            children: [
              {
                values: 120,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 120% bonus AD',
              },
              {
                values: [40, 45, 50, 55, 60],
                valuesIsPercent: true,
                user: 'target',
                units: 'bonus_hp',
                unitsText: "of primary target's bonus health",
                pre: "+ 40 / 45 / 50 / 55 / 60% of primary target's bonus health",
              },
            ],
          },
        ],
      },
      {
        description:
          'The dash will end and create the impact prematurely upon encountering terrain that cannot be dashed through, whether by distance or invalid space.',
        descriptionHTML:
          '<i>The dash will end and create the impact prematurely upon encountering terrain that cannot be dashed through, whether by distance or invalid space.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'physical',
    spelleffects: 'aoe',
    spellshield: true,
    notes:
      '* At maximum cast range and if the dash is not shortened due to terrain in <b>Sett\'s</b> way, <i>The Show Stopper\'s</i> movement takes 1.<small>5</small> seconds, causing the slam <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">within 1.<small>23</small> seconds.</span>\n<ul><li><b>Sett</b> will dash from <i>The Show Stopper</i> even if the target resists the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attach"><a href="/wiki/Attached" title="Attached"><img alt="You and Me!.png" src="/wiki/images/Yuumi_You_and_Me%21.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attached" title="Attached">attachment</a></span> or detaches from him, which can be done so by negating or removing the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Suppression"><a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control#Suppression"><img alt="Suppression icon.png" src="/wiki/images/Suppression_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control">suppression</a></span>. This includes if the target:\n<ul><li>Has a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span>.</li>\n<li>Is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">crowd control immune</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immune"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immune</a></span>.</li>\n<li>Uses a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleansing</a></span> effect, either before or after the attachment.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">Dies</a></span> or enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span>.</li>\n<li>Is <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="Devour" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#Devour" title="Devoured"><img alt="Devoured" src="/wiki/images/Tahm_Kench_Devour.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#Devour" title="Tahm Kench/LoL">Devoured</a></span></span>.</li></ul></li>\n<li><b>Sett</b> will only attach the target to him if they are still suppressed upon his arrival.</li>\n<li>If the dash is interrupted, the target will be detached from <b>Sett</b> and the suppression will end immediately.\n<ul><li>If <b>Sett</b> enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span> the moment before the attachment, <b>Sett</b> will continue to perform the dash.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul></li>\n<li>If the target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> upon <b>Sett\'s</b> arrival, he will stop the dash immediately.</li>\n<li>If the target is 2000 or more units away before <b>Sett\'s</b> arrival, he will not attach them to him. The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Suppression"><a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control#Suppression"><img alt="Suppression icon.png" src="/wiki/images/Suppression_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control">suppression</a></span> will last 5 seconds in this case.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li>\n<li>The "crater" VFX originates from the target\'s landing, which inaccurately illustrates the damage\'s area of effect (from Sett).<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup></li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Sett_Original_R_0.ogg   "This is gonna hurt!"',
  },
} satisfies { [skillName in string]: SkillData };
