import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Kindred';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Kindred_Mark_of_the_Kindred.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Both <b>Lamb</b> and <b>Wolf</b> mark targets to <i>hunt</i>. Scoring a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against a <i>hunted</i> target collects a stack of <i>Mark of the Kindred</i>. <br><br><span class="template_sbc"><b>Mark of the Kindred:</b></span> <b>Lamb</b> gains <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="marks" data-displayformula="+75 at 4 stacks, and +25 every 3 stacks thereafter, up to 250 bonus range at 25 stacks." data-bot_values="75;100;125;150;175;200;225;250" data-top_values="4;7;10;13;16;19;22;25">75 − 250 (based on marks)</span> <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> range</span> on her basic attacks and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kindred" data-ability="Mounting Dread" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kindred/LoL#Mounting_Dread" title="Mounting Dread"><img alt="Mounting Dread" src="/wiki/images/Kindred_Mounting_Dread.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kindred/LoL#Mounting_Dread" title="Kindred/LoL">Mounting Dread</a></span></span></i>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 3:',
        raw: ' Lamb gains 75 − 250 (based on marks)  bonus range on her basic attacks and  Mounting Dread',
        increasedStat: 'bonus_ad',
        values: [7, 250],
        user: 'player',
        units: '',
        unitsText: 'bonus range on her basic attacks and  Mounting Dread',
        pre: 'Lamb gains 75 − 250',
        post: 'bonus range on her basic attacks and  Mounting Dread',
        children: [
          {
            values: 0,
            user: 'player',
            units: 'kindredMarks',
            unitsText: 'based on marks',
            pre: 'based on marks',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Lamb%27s_Mask_profileicon.png',
    description:
      '<span class="template_sbc"><b>Innate - Lamb:</b></span> <b>Lamb</b> is offered a selection of enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> to <i>hunt</i> if she has not been <a href="/wiki/Combat_status" title="Combat status">in combat</a> with them in the last 6 seconds. Once selected, the mark is applied after an 8-second delay and thereafter it can be collected by <b>Kindred</b>. <b>Lamb</b> gains the ability to select a new target every 75 seconds. <i>Targets successfully hunted cannot be marked again for 4 minutes.</i>',
    leveling: [],
  },
  {
    img: '/wiki/images/Wolf%27s_Mask_profileicon.png',
    description:
      '<span class="template_sbc"><b>Innate - Wolf:</b></span> Starting at <span class="template_sbc"><b>3:15</b></span>, <b>Wolf</b> periodically marks a random large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> within the enemy team\'s jungle for 180 seconds. The <i>hunted</i> camp is highlighted on the <a href="/wiki/Map_(League_of_Legends)" title="Map (League of Legends)">mini map</a> to both teams. Once the <i>hunted</i> target is slain or the mark expires, <b>Wolf</b> will wait 45 seconds before selecting a new target. <br>The type of monster that <b>Wolf</b> can mark changes based on <b>Kindred\'s</b> current <i>Mark of the Kindred</i> stacks:\n',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Kindred_Dance_of_Arrows.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Lamb</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> toward the target location, gaining <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">35%</span></span> <span style="color: #AF1AAF; white-space:normal">(+&nbsp;5% per <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kindred" data-ability="Mark of the Kindred" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kindred/LoL#Mark_of_the_Kindred" title="mark"><img alt="mark" src="/wiki/images/Kindred_Mark_of_the_Kindred.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kindred/LoL#Mark_of_the_Kindred" title="Kindred/LoL">mark</a></span></span>)</span> <span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span> for 4 seconds and firing an arrow at up to 3 nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemies that deals <span style="color: #FF8C34; white-space:normal">physical damage</span>. Her current attack target within any proximity will be prioritized by one of the arrows.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: ' Lamb  dashes toward the target location, gaining  35% (+ 5% per  mark) bonus attack speed for 4 seconds and firing an arrow at up to 3 nearby  visible enemies that deals physical damage',
        increasedStat: 'bonus_ad',
        values: 3,
        valuesIsPercent: true,
        user: 'player',
        units: '',
        unitsText:
          'bonus attack speed for 4 seconds and firing an arrow at up to 3 nearby  visible enemies that deals physical damage',
        pre: 'Lamb  dashes toward the target location, gaining  35%',
        post: 'bonus attack speed for 4 seconds and firing an arrow at up to 3 nearby  visible enemies that deals physical damage',
        children: [
          {
            values: 5,
            valuesIsPercent: true,
            user: 'player',
            units: 'kindredMarks',
            unitsText: 'per  mark',
            pre: '+ 5% per  mark',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '50 / 75 / 100 / 125 / 150 (+ 75% bonus AD)',
        values: [50, 75, 100, 125, 150],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 75 / 100 / 125 / 150',
        children: [
          {
            values: 75,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 75% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Dance of Arrows\' </i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>total</b> cooldown</span> is reduced to an amount while <b>Lamb</b> is within the area of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kindred" data-ability="Wolf\'s Frenzy" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kindred/LoL#Wolf\'s_Frenzy" title="Wolf\'s Frenzy"><img alt="Wolf\'s Frenzy" src="/wiki/images/Kindred_Wolf%27s_Frenzy.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kindred/LoL#Wolf\'s_Frenzy" title="Kindred/LoL">Wolf\'s Frenzy</a></span></span></i>. Casting <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kindred" data-ability="Wolf\'s Frenzy" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kindred/LoL#Wolf\'s_Frenzy" title="Wolf\'s Frenzy"><img alt="Wolf\'s Frenzy" src="/wiki/images/Kindred_Wolf%27s_Frenzy.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kindred/LoL#Wolf\'s_Frenzy" title="Kindred/LoL">Wolf\'s Frenzy</a></span></span></i> reduces <i>Dance of Arrows\' </i> <b>current</b> cooldown to the same amount.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Static Cooldown:',
        raw: '4 / 3.5 / 3 / 2.5 / 2',
        values: [4, 3.5, 3, 2.5, 2],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '4 / 3.5 / 3 / 2.5 / 2',
      },
    ],
  },
  {
    description:
      '<i>Dance of Arrows <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Lamb\'s</b> basic attack timer. <b>Lamb</b> can cast any of her <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> during the dash. Dance of Arrows will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> As <b>Kindred</b> move and attack, they build up to 100 stacks of <i>Hunter\'s Vigor</i>. At maximum stacks, <b>Lamb\'s</b> next basic attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> her for <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_label="Percent of level-scaling value" data-top_label="Missing health" data-displayformula="1.25% per 1% of \'\'\'Kindred\'s missing\'\'\' health. \'\'This is capped at 80% \'\'\'missing\'\'\' health.\'\'" data-bot_values="0;25;50;75;100" data-top_values="0;20;40;60;80" data-bot_key="%" data-top_key="%">0% − 100% (based on <b>Kindred\'s</b> <b>missing</b> health)</span></span> of <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="47;" data-finish="81;" data-bot_values="47;49;51;53;55;57;59;61;63;65;67;69;71;73;75;77;79;81" data-top_values="">47 − 81 (based on level)</span>. The heal is not triggered if <b>Kindred</b> is at full health.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 2:',
        raw: " At maximum stacks, Lamb's next basic attack  heals her for 0% − 100% (based on Kindred's missing health) of 47 − 81 (based on level)",
        healType: 'BonusHealth',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'of 47 − 81',
        pre: "At maximum stacks, Lamb's next basic attack  heals her for 0% − 100%",
        post: 'of 47 − 81',
        children: [
          {
            values: 0,
            user: 'player',
            units: 'missing_hp',
            unitsText: "based on Kindred's missing health",
            pre: "based on Kindred's missing health",
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Kindred_Wolf%27s_Frenzy.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Wolf</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location, then claims the surrounding area as his territory for the next 8.<small>5</small> seconds, separating from <b>Lamb</b>. He automatically attacks the closest nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy within the area, prioritizing the last enemy <b>Lamb</b> has attacked, then enemy champions, then non-champions.',
    leveling: [],
  },
  {
    description:
      '<b>Wolf\'s</b> attacks deal <span style="color: #00B0F0; white-space:normal">magic damage</span> and scale with <span style="color:orangered; white-space:normal">25% of <b>Kindred\'s bonus</b> attack speed</span>. Against monsters, his attacks deal 150% damage and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> the target by 50% for 2 seconds.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Magic Damage:',
        raw: "25 / 30 / 35 / 40 / 45 (+ 20% bonus AD) (+ 1.5% (+ 1% per  mark) of target's current health)",
        healType: 'OutgoingHeals',
        values: [25, 30, 35, 40, 45],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 30 / 35 / 40 / 45',
        children: [
          {
            values: 20,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 20% bonus AD',
          },
          {
            values: 1.5,
            valuesIsPercent: true,
            user: 'target',
            units: 'current_hp',
            unitsText: "of target's current health",
            pre: '+ 1.5%',
            post: "of target's current health",
            children: [
              {
                values: 1,
                valuesIsPercent: true,
                user: 'player',
                units: 'kindredMarks',
                unitsText: 'per  mark',
                pre: '+ 1% per  mark',
              },
            ],
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Monster Damage:',
        raw: "37.5 / 45 / 52.5 / 60 / 67.5 (+ 30% bonus AD) (+ 2.25% (+ 1.5% per  mark) of target's current health)",
        healType: 'OutgoingHeals',
        values: [37.5, 45, 52.5, 60, 67.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '37.5 / 45 / 52.5 / 60 / 67.5',
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
            values: 2.25,
            valuesIsPercent: true,
            user: 'target',
            units: 'current_hp',
            unitsText: "of target's current health",
            pre: '+ 2.25%',
            post: "of target's current health",
            children: [
              {
                values: 1.5,
                valuesIsPercent: true,
                user: 'player',
                units: 'kindredMarks',
                unitsText: 'per  mark',
                pre: '+ 1.5% per  mark',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    description:
      "<i>Wolf's Frenzy</i> ends immediately if <b>Lamb</b> leaves the area or dies.",
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Kindred_Mounting_Dread.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Lamb</b> fires a shot at the target enemy that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 50% for 1 second and applies a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Mounting Dread</i> for 4 seconds. Her basic attacks each apply an additional stack, refreshing the duration and stacking up to 4 times.',
    leveling: [],
  },
  {
    description:
      'Her next basic attack against a target with 3 stacks directs <b>Wolf</b> to pounce on the target, consuming all stacks to deal <span style="color:orange; white-space:normal"><b>additional</b> physical damage</span>, capped at 300 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Additional Physical Damage:',
        raw: "80 / 100 / 120 / 140 / 160 (+ 80% bonus AD) (+ 8% (+ 0.5% per  Mark) of target's missing health)",
        healType: 'OutgoingHeals',
        values: [80, 100, 120, 140, 160],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 100 / 120 / 140 / 160',
        children: [
          {
            values: 80,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 80% bonus AD',
          },
          {
            values: 8,
            valuesIsPercent: true,
            user: 'target',
            units: 'missing_hp',
            unitsText: "of target's missing health",
            pre: '+ 8%',
            post: "of target's missing health",
            children: [
              {
                values: 0.5,
                valuesIsPercent: true,
                user: 'player',
                units: 'kindredMarks',
                unitsText: 'per  Mark',
                pre: '+ 0.5% per  Mark',
              },
            ],
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Enhanced damage below threshold:',
        raw: "80 / 100 / 120 / 140 / 160 (+ 80% bonus AD) (+ 12% (+2.8%) (+ 0.75% (+0.175%) per  Mark) of target's missing health)",
        healType: 'OutgoingHeals',
        values: [80, 100, 120, 140, 160],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 100 / 120 / 140 / 160',
        children: [
          {
            values: 80,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 80% bonus AD',
          },
          {
            values: 12,
            valuesIsPercent: true,
            user: 'target',
            units: 'missing_hp',
            unitsText: "of target's missing health",
            pre: '+ 12%',
            post: "of target's missing health",
            children: [
              {
                values: 2.8,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: '',
                pre: '+2.8%',
              },
              {
                values: 0.75,
                valuesIsPercent: true,
                user: 'player',
                units: 'kindredMarks',
                unitsText: 'per  Mark',
                pre: '+ 0.75%',
                post: 'per  Mark',
                children: [
                  {
                    values: 0.175,
                    valuesIsPercent: true,
                    user: 'none',
                    units: '',
                    unitsText: '',
                    pre: '+0.175%',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    description:
      'The <b>additional</b> damage will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> against targets below <span style="color: #1F995C; white-space:normal"><span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="critical strike chance" data-displayformula="15% (+&nbsp;0.5% per 1% critical strike chance). \'\'This is capped at 100% critical strike chance.\'\'" data-bot_values="15;20;25;30;35;40;45;50;55;60;65" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">15% − 65% (based on critical strike chance)</span></span> of their <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>maximum</b> health</span></span>, increasing the <span style="color: #1F995C; white-space:normal"><b>missing</b> health</span> portion by <span style="color: #944B00; white-space:normal">(50%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="35%"><img alt="35%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">35%</a></span></span>)</span>, and cannot <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> otherwise. The <b>base</b> damage of the pounce can independently <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: 'The additional damage will  critically strike against targets below 15% − 65% (based on critical strike chance) of their  maximum health, increasing the missing health portion by (50% +  35%), and cannot  critically strike otherwise',
        healType: 'OutgoingHeals',
        values: 1,
        valuesIsPercent: true,
        user: 'player',
        units: 'maximum_hp',
        unitsText:
          'of their  maximum health, increasing the missing health portion by',
        pre: 'The additional damage will  critically strike against targets below 15% − 65%',
        post: 'of their  maximum health, increasing the missing health portion by',
        children: [
          {
            values: 0,
            user: 'player',
            units: 'base_critchance',
            unitsText: 'based on critical strike chance',
            pre: 'based on critical strike chance',
          },
          {
            values: 50,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '+  35',
            pre: '50% +  35%',
          },
        ],
      },
    ],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Kindred_Lamb%27s_Respite.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Lamb</b> blesses the ground under herself for 4 seconds and enters a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.25 seconds, but rounded up to the next game tick.">0.<small>264</small> seconds</span> <a href="/wiki/Channel#Casting_Times" title="Channel">cast time</a>. <b>All</b> units inside the zone gain a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minimum health threshold"><a href="/wiki/Death#Ways_to_prevent_dying_by_not_losing_health" title="Death#Ways to prevent dying by not losing health"><img alt="Unkillable icon.png" src="/wiki/images/Unkillable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_dying_by_not_losing_health" title="Death">minimum health threshold</a></span> of <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;10% of their <b>maximum</b> health</span></span>, and will become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invulnerable"><a href="/wiki/Invulnerability" title="Invulnerability"><img alt="Cosmic Radiance.png" src="/wiki/images/Taric_Cosmic_Radiance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability" title="Invulnerability">invulnerable</a></span> for the remaining duration when they reach or are at the threshold, during which they also cannot be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healed</a></span>, but can still <span style="white-space:nowrap"><a href="/wiki/Health_regeneration" title="Health regeneration"><img alt="Health regeneration icon.png" src="/wiki/images/Health_regeneration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Health_regeneration" title="Health regeneration">regenerate health</a></span>.',
    leveling: [],
  },
  {
    description:
      'All targetable units within the zone are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healed</a></span> when the blessing ends.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Heal:',
        raw: '225 / 300 / 375',
        values: [225, 300, 375],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '225 / 300 / 375',
      },
    ],
  },
];
export const Kindred = { I, Q, W, E, R };
