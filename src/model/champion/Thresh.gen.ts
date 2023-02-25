import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Thresh';

export default {
  Damnation: {
    name: 'Damnation',
    display_name: 'Damnation',
    champion: 'Thresh',
    skill: 'I',
    image: {
      full: 'Thresh_Passive.png',
      sprite: 'passive4.png',
      group: 'passive',
      x: 432,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius: '1900',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Thresh" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Thresh/LoL" title="Thresh\'s"><img alt="Thresh\'s" src="/wiki/images/Thresh_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Thresh/LoL" title="Thresh/LoL">Thresh\'s</a></span></span> <span style="color:yellow; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;armor</span></span> cannot increase by <span style="white-space:nowrap"><a href="/wiki/Experience_(champion)" title="Experience (champion)"><img alt="Experience icon.png" src="/wiki/images/Experience_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;leveling</span> up.',
      '<span class="template_sbc"><b>Innate:</b></span> Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> and large enemies that die near <b>Thresh</b> will drop a <i>Soul</i> for a period. <b>Thresh</b> automatically collects <i>Souls</i> near him or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Thresh" data-ability="Dark Passage" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Thresh/LoL#Dark_Passage" title="Dark Passage"><img alt="Dark Passage" src="/wiki/images/Thresh_Dark_Passage.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Thresh/LoL#Dark_Passage" title="Thresh/LoL">Dark Passage</a></span></span></i>.',
      '<span class="template_sbc"><b>Soul:</b></span> For each stack, <b>Thresh</b> gains <span style="white-space:nowrap"><a href="/wiki/Ability_power" title="Ability power"><img alt="Ability power icon.png" src="/wiki/images/Ability_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #7A6DFF; white-space:normal">ability power</span></span> and <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span>.',
    ],
    description: [
      {
        description:
          "Innate: Thresh's armor cannot increase through growth (per level).",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Thresh\'s</b> <span style="color:yellow; white-space:normal">armor</span> cannot increase through <a href="/wiki/Growth#Increasing_Statistics" class="mw-redirect" title="Growth">growth (per level)</a>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Innate:',
            raw: "Thresh's armor cannot increase through growth (per level).",
            values: 0,
            user: 'none',
            units: '',
            unitsText: '.',
            pre: "Thresh's armor cannot increase through growth",
            post: '.',
            children: [
              {
                values: 0,
                user: 'none',
                units: '',
                unitsText: 'per level',
                pre: 'per level',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Damnation.png',
        description:
          'Innate: Enemy  champions, large  minions and large  monsters that die near Thresh drop a Soul for 8 seconds. Epic monsters drop 2 Souls while lesser minions and monsters have a 33.3% chance to drop a Soul.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> that die near <b>Thresh</b> drop a <i>Soul</i> for 8 seconds. Epic monsters drop 2 <i>Souls</i> while lesser minions and monsters have a 33.<small><span style="text-decoration: overline;">3</span></small>% chance to drop a <i>Soul</i>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Innate:',
            raw: 'Enemy  champions, large  minions and large  monsters that die near Thresh drop a Soul for 8 seconds',
            values: 8,
            units: 'darkHarvestStacks',
            unitsText:
              'champions, large  minions and large  monsters that die near Thresh drop a Soul for 8 seconds',
            pre: 'Enemy  champions, large  minions and large  monsters that die near Thresh drop a Soul for 8 seconds',
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'Epic monsters drop 2 Souls while lesser minions and monsters have a 33.3% chance to drop a Soul.',
            values: 2,
            valuesIsPercent: true,
            units: 'darkHarvestStacks',
            unitsText:
              'chance to drop a Soul.monsters drop 2 Souls while lesser minions and monsters have a 33.3',
            pre: 'Epic monsters drop 2 Souls while lesser minions and monsters have a 33.3% chance to drop a Soul.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Thresh automatically collects Souls near him or a placed  Dark Passage.',
        descriptionHTML:
          '<b>Thresh</b> automatically collects <i>Souls</i> near him or a placed <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Thresh" data-ability="Dark Passage" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Thresh/LoL#Dark_Passage" title="Dark Passage"><img alt="Dark Passage" src="/wiki/images/Thresh_Dark_Passage.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Thresh/LoL#Dark_Passage" title="Thresh/LoL">Dark Passage</a></span></span></i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Soul: For each stack, Thresh gains  1 ability power and  1 bonus armor.',
        descriptionHTML:
          '<span class="template_sbc"><b>Soul:</b></span> For each <a href="/wiki/Stack" title="Stack">stack</a>, <b>Thresh</b> gains <span style="white-space:nowrap"><a href="/wiki/Ability_power" title="Ability power"><img alt="Ability power icon.png" src="/wiki/images/Ability_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #7A6DFF; white-space:normal">1 ability power</span></span> and <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">1 <b>bonus</b> armor</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Soul:',
            raw: 'For each stack, Thresh gains  1 ability power and  1 bonus armor.',
            min: 0,
            max: 10,
            description:
              'For each stack, Thresh gains  1 ability power and  1 bonus armor.',
            values: 1,
            units: 'genericStacks',
            unitsText:
              'each stack, Thresh gains  1 ability power and  1 bonus armor.',
            pre: 'For each stack, Thresh gains  1 ability power and  1 bonus armor.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes:
      '* <i>Souls</i> grant a small area of <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span>.\n<ul><li><i>Souls</i> are visible to allies and only become visible to enemies if their team has <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of <b>Thresh</b>.</li>\n<li>The probability for <i>souls</i> dropping from small minions and monster on <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Summoner\'s rift"><a href="/wiki/Summoner%27s_Rift_(League_of_Legends)" title="Summoner\'s Rift (League of Legends)"><img alt="Summoner\'s Rift icon.png" src="/wiki/images/Summoner%27s_Rift_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Summoner%27s_Rift_(League_of_Legends)" title="Summoner\'s Rift (League of Legends)">Summoner\'s Rift</a></span> starts at 33% but adjusts dynamically to match the expected quota of <i>souls</i> dropped (lowers if above, rises if below, remains if even). <i>Souls</i> collected are not considered when adjusting the probability.</li>\n<li>The maximum amount of <i>souls</i> <b>Thresh</b> can collect is 999,999, granting him <span style="color: #7A6DFF; white-space:normal">999,999 <b>bonus</b> ability power</span> and <span style="color:yellow; white-space:normal">999,999 <b>bonus</b> armor</span> (99.<small>99</small>% damage reduction, reduced to 99.<small>98</small>% when hit by <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Last Whisper" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Last_Whisper" title="Last Whisper"><img alt="Last Whisper" src="/wiki/images/Last_Whisper_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Last_Whisper" title="Last Whisper">Last Whisper</a></span></span>).</li>\n<li><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nunu &amp; Willump" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nunu_%26_Willump/LoL" title="Nunu &amp; Willump"><img alt="Nunu &amp; Willump" src="/wiki/images/Nunu_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nunu_%26_Willump/LoL" class="mw-redirect" title="Nunu &amp; Willump/LoL">Nunu &amp; Willump</a></span></span> drop a soul each.</li></ul>',
  },
  'Death Sentence': {
    name: 'Death Sentence',
    display_name: 'Death Sentence',
    champion: 'Thresh',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'ThreshQ.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 96,
      y: 48,
      w: 48,
      h: 48,
    },
    range: '1100 /  1040',
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="For the stun and pulling">Global</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="For being able to cast Deathly Leap; estimated">3000</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 140',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Missile speed">1900</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dash speed, estimated">1400</span>',
    cast_time: '0.<small>5</small>',
    cost: '70',
    costtype: 'Mana',
    cooldown: '19 / 16.<small>5</small> / 14 / 11.<small>5</small> / 9',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Thresh" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Thresh/LoL" title="Thresh"><img alt="Thresh" src="/wiki/images/Thresh_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Thresh/LoL" title="Thresh/LoL">Thresh</a></span></span> casts out his scythe in the target direction that catches the first enemy hit, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>, <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reducing</span> the cooldown, and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> them. <b>Thresh</b> will also mark them <i>Shackled</i>, during which he is briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> and unable to declare basic attacks.',
      'While the target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span>, <b>Thresh</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulls</a></span> them twice over a short distance. He can also recast <i>Death Sentence</i>.',
      '<span class="template_sbc"><b>Recast - Deathly Leap:</b></span> <b>Thresh</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the <i>Shackled</i> enemy.',
    ],
    description: [
      {
        icon: '/wiki/images/Death_Sentence.png',
        description:
          'Active: Thresh throws out his scythe in the target direction, becoming  unable to move or attack while it is in flight.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Thresh</b> throws out his scythe in the target direction, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">unable</a></span> to move or attack while it is in flight.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "The scythe catches the first enemy hit to deal magic damage and  stun and  reveal them for 1.5 seconds, as well as reduce Death Sentence's  current cooldown by 3 seconds. Thresh will also mark the target Shackled for 1.5 seconds, during which he is unable to declare basic attacks, and is  slowed by 20% for 1 second.",
        descriptionHTML:
          'The scythe catches the first enemy hit to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">reveal</a></span> them for 1.<small>5</small> seconds, as well as reduce <i>Death Sentence\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> by 3 seconds. <b>Thresh</b> will also mark the target <i>Shackled</i> for 1.<small>5</small> seconds, during which he is unable to declare basic attacks, and is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 20% for 1 second.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: "The scythe catches the first enemy hit to deal magic damage and  stun and  reveal them for 1.5 seconds, as well as reduce Death Sentence's  current cooldown by 3 seconds",
            damagetype: 'Magic',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              "scythe catches the first enemy hit to deal magic damage and  stun and  reveal them for 1.5 seconds, as well as reduce Death Sentence's  current cooldown by 3 seconds",
            pre: "The scythe catches the first enemy hit to deal magic damage and  stun and  reveal them for 1.5 seconds, as well as reduce Death Sentence's  current cooldown by 3 seconds",
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'Thresh will also mark the target Shackled for 1.5 seconds, during which he is unable to declare basic attacks, and is  slowed by 20% for 1 second.',
            values: 1,
            valuesIsPercent: true,
            units: 'kindredMarks',
            unitsText:
              'for 1 second.will also mark the target Shackled for 1.5 seconds, during which he is unable to declare basic attacks, and is  slowed by 20',
            pre: 'Thresh will also mark the target Shackled for 1.5 seconds, during which he is unable to declare basic attacks, and is  slowed by 20% for 1 second.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '100 / 150 / 200 / 250 / 300 (+ 90% AP)',
            valuesHTML:
              '100 / 150 / 200 / 250 / 300 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;90% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '100 / 150 / 200 / 250 / 300 (+ 90% AP)',
            damagetype: 'Magic',
            values: [100, 150, 200, 250, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 150 / 200 / 250 / 300',
            children: [
              {
                values: 90,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 90% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'While the target is  stunned, Thresh tugs twice over 0.8 seconds,  pulling the target a short distance with each tug. After 0.5 seconds of hitting an enemy or instantly after hitting a  minion or  monster, Thresh can recast the ability while the target is Shackled, which will cause him to stop tugging.',
        descriptionHTML:
          'While the target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span>, <b>Thresh</b> tugs twice over 0.<small>8</small> seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulling</a></span> the target a short distance with each tug. After 0.<small>5</small> seconds of hitting an enemy or instantly after hitting a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>, <b>Thresh</b> can recast the ability while the target is <i>Shackled</i>, which will cause him to stop tugging.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Deathly_Leap.png',
        description:
          'Recast - Deathly Leap: Thresh  dashes to the Shackled enemy, becoming able to attack again upon arrival. He can cast  Dark Passage and  Flay during the dash.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast - Deathly Leap:</b></span> <b>Thresh</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the <i>Shackled</i> enemy, becoming able to attack again upon arrival. He can cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Thresh" data-ability="Dark Passage" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Thresh/LoL#Dark_Passage" title="Dark Passage"><img alt="Dark Passage" src="/wiki/images/Thresh_Dark_Passage.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Thresh/LoL#Dark_Passage" title="Thresh/LoL">Dark Passage</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Thresh" data-ability="Flay" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Thresh/LoL#Flay" title="Flay"><img alt="Flay" src="/wiki/images/Thresh_Flay.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Thresh/LoL#Flay" title="Thresh/LoL">Flay</a></span></span></i> during the dash.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting:
      '<a href="/wiki/Direction-targeted" class="mw-redirect" title="Direction-targeted">Direction</a> / <a href="/wiki/Auto-targeted" class="mw-redirect" title="Auto-targeted">Auto</a>',
    affects: 'Enemies / Self',
    damagetype: 'Magic',
    spelleffects: 'spell',
    spellshield: true,
    projectile: 'True',
    notes:
      '* <b>Thresh</b> will track the target if they change locations.\n<ul><li><ul><li>He will dash to the target\'s previous location if the target is too far away or moves beyond <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">2000</span> units.</li></ul></li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li>\n<li><b>Thresh</b> will not tug if the target is too close to him.</li>\n<li><b>Thresh</b> will turn his facing direction towards the cast direction only after <i>Death Sentence\'s</i> cast is complete.\n<ul><li>If <b>Thresh</b> is facing <b>more</b> than 90° away from the cast direction in either direction, he will turn to face <i>exactly</i> 90° away from the cast direction over the cast time, then turn towards the cast direction when the missile is fired.</li>\n<li>If <b>Thresh</b> is facing <b>less</b> than 90° away from the cast direction, he will keep his facing direction until the missile is fired.</li>\n<li><a target="_blank" rel="nofollow noreferrer noopener" class="external text" href="http://web.archive.org/web/0/http://na.leagueoflegends.com/board/showthread.php?p=33837947#post33837947">This prevents the enemy from knowing where exactly <b>Thresh</b> is aiming at before the cast animation is complete.</a></li></ul></li>\n<li><i>Death Sentence</i> triggers on-cast effects (such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>) once at the start of the cast, and once at the end of the cast. It may trigger on-cast effects a third time when casting <i>Deathly Leap</i>.\n<ul><li>This is because a separate spell is cast to prevent <b>Thresh</b> from facing towards the target direction immediately, which is (incorrectly) flagged to trigger on-cast effects.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul></li>\n<li><i>Deathly Leap</i> has a maximum cast range. If <b>Thresh</b> or his victim move too far away from one another, <i>Death Sentence</i> will show its cooldown prematurely, preventing <i>Deathly Leap</i> from being cast.\n<ul><li>This behaves similarly to a tether range.</li>\n<li>If <b>Thresh</b> is already outside the maximum range when the scythe lands and the <i>hook</i> is created, <i>Death Sentence</i> will not be on cooldown<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup>, however actually casting <i>Deathly Leap</i> will cause it to fizzle unless <b>Thresh</b> has walked into range again.</li></ul></li>\n<li><i>Death Sentence</i> cannot be recast while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span>.</li>\n<li><i>Death Sentence</i> can be recast even while the target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>.</li>\n<li>Only <i>Death Sentence\'s</i> first chain tug puts the target <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span>. Outside the first ~0.<small>3</small> seconds, the target is only stunned.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li>\n<li><i>Death Sentence</i> will not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> enemies that are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immune"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immune</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">immune to crowd control</a></span> but the target will still be <i>hooked</i> and <b>Thresh</b> is still granted the ability to recast for his dash.</li>\n<li><b>Thresh</b> will not tug at all if the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> is not active on the target or if he used the recast.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block all of <i>Death Sentence\'s</i> effects, including the <i>hook</i> as well as prevent the cooldown reduction.</li>\n<li><i>Death Sentence\'s</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> duration is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tenacity"><a href="/wiki/Tenacity" title="Tenacity"><img alt="Tenacity icon.png" src="/wiki/images/Tenacity_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tenacity" title="Tenacity">tenacity</a></span> but the <i>hook</i> will always persist for 1.<small>5</small> seconds, unless the target uses a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleansing</a></span> effect, in which case the <i>hook</i> is removed.\n<ul><li><i>Death Sentence\'s</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> will persist even if <b>Thresh</b> dies before the duration ends. The tug will not occur as <b>Thresh</b> is not alive.</li></ul></li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Cast time\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All the other item-actives are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death, unless protected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">Resurrection</a></span>\n</li></td></tr></tbody></table>',
  },
  'Dark Passage': {
    name: 'Dark Passage',
    display_name: 'Dark Passage',
    champion: 'Thresh',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'ThreshW.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 144,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '950',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Shield granting radius">350</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Lantern pickup radius, radius and range behaviour pending for test">150</span>',
    tether_radius: '1500',
    cast_time: 'none',
    cost: '50 / 55 / 60 / 65 / 70',
    costtype: 'Mana',
    cooldown: '21 / 20 / 19 / 18 / 17',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Thresh" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Thresh/LoL" title="Thresh"><img alt="Thresh" src="/wiki/images/Thresh_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Thresh/LoL" title="Thresh/LoL">Thresh</a></span></span> throws his lantern to the target location that remains for a few seconds while he remains nearby. He and the first allied champion to come near the lantern are granted a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for a few seconds, with the amount based on <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Thresh" data-ability="Damnation" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Thresh/LoL#Damnation" title="Souls"><img alt="Souls" src="/wiki/images/Thresh_Damnation.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Thresh/LoL#Damnation" title="Thresh/LoL">Souls</a></span></span></i>.',
      'An ally can grab the lantern to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> to <b>Thresh</b> and gain the shield, but cannot do so while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span>, or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">silenced</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Dark_Passage.png',
        description:
          'Active: Thresh throws his lantern to the target location over 0.5 seconds, lasting for 6 seconds while he remains nearby and granting  sight of its surroundings. If Thresh moves too far away from the lantern, it returns back to him immediately.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Thresh</b> throws his lantern to the target location over 0.<small>5</small> seconds, lasting for 6 seconds while he remains nearby and granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of its surroundings. If <b>Thresh</b> moves too far away from the lantern, it returns back to him immediately.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Thresh and the first allied champion to come near the lantern are granted a  shield for 4 seconds. An ally can select the lantern while in proximity of it,  dashing to Thresh and gaining the shield.',
        descriptionHTML:
          '<b>Thresh</b> and the first allied champion to come near the lantern are granted a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 4 seconds. An ally can select the lantern while in proximity of it, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashing</a></span> to <b>Thresh</b> and gaining the shield.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Line 1:',
            raw: 'Thresh and the first allied champion to come near the lantern are granted a  shield for 4 seconds',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'and the first allied champion to come near the lantern are granted a  shield for 4 seconds',
            pre: 'Thresh and the first allied champion to come near the lantern are granted a  shield for 4 seconds',
          },
        ],
        leveling: [
          {
            name: 'Shield Strength:',
            values: '50 / 70 / 90 / 110 / 130 (+ 1.5 per  Soul collected)',
            valuesHTML:
              '50 / 70 / 90 / 110 / 130 (+ 1.<small>5</small> per <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Thresh" data-ability="Damnation" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Thresh/LoL#Damnation" title="Soul"><img alt="Soul" src="/wiki/images/Thresh_Damnation.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Thresh/LoL#Damnation" title="Thresh/LoL">Soul</a></span></span> collected)',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Shield',
            name: 'Shield Strength:',
            raw: '50 / 70 / 90 / 110 / 130 (+ 1.5 per  Soul collected)',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: [50, 70, 90, 110, 130],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 70 / 90 / 110 / 130',
            children: [
              {
                values: 1.5,
                units: 'darkHarvestStacks',
                unitsText: 'per  Soul collected',
                pre: '+ 1.5 per  Soul collected',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'An ally cannot select the lantern while  immobilized,  grounded, or  silenced. The lantern will not expire from Thresh moving too far away if he is dashing with  Deathly Leap.',
        descriptionHTML:
          '<i>An ally cannot select the lantern while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span>, or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">silenced</a></span>. The lantern will not expire from <b>Thresh</b> moving too far away if he is dashing with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Thresh" data-ability="Deathly Leap" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Thresh/LoL#Deathly_Leap" title="Deathly Leap"><img alt="Deathly Leap" src="/wiki/images/Thresh_Deathly_Leap.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Thresh/LoL#Deathly_Leap" title="Thresh/LoL">Deathly Leap</a></span></span>.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Allies',
    spelleffects: 'Shield',
    projectile: 'True',
    notes:
      '* The dashing ally will track <b>Thresh</b> if he changes locations.\n<ul><li><ul><li>They will dash to <b>Thresh\'s</b> previous location if he is too far away or moves beyond <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">2200</span> units.</li></ul></li>\n<li>The lantern is considered a unit and can be targeted by an allied <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span>, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jax" data-ability="Leap Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jax/LoL#Leap_Strike" title="Leap Strike"><img alt="Leap Strike" src="/wiki/images/Jax_Leap_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jax/LoL#Leap_Strike" title="Jax/LoL">Leap Strike</a></span></span></i>, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Katarina" data-ability="Shunpo" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Katarina/LoL#Shunpo" title="Shunpo"><img alt="Shunpo" src="/wiki/images/Katarina_Shunpo.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Katarina/LoL#Shunpo" title="Katarina/LoL">Shunpo</a></span></span></i>, and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lee Sin" data-ability="Safeguard" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lee_Sin/LoL#Safeguard" title="Safeguard"><img alt="Safeguard" src="/wiki/images/Lee_Sin_Safeguard.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lee_Sin/LoL#Safeguard" title="Lee Sin/LoL">Safeguard</a></span></span></i>.\n<ul><li>It is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> to enemies.</li></ul></li>\n<li>The lantern\'s duration and maximum leash range are each displayed as a circle on the ground.</li>\n<li><b>Thresh</b> will gain <i>Dark Passage\'s</i> shield from moving out of leash range of the lantern.</li>\n<li><i>Dark Passage</i> is special cased to trigger <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Guardian" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Guardian_(Rune)" title="Guardian"><img alt="Guardian" src="/wiki/images/Guardian_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Guardian_(Rune)" class="mw-redirect" title="Guardian (Rune)">Guardian</a></span></span>.</li></ul>',
  },
  Flay: {
    name: 'Flay',
    display_name: 'Flay',
    champion: 'Thresh',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'ThreshE.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 192,
      y: 48,
      w: 48,
      h: 48,
    },
    range: '537.5 / 537.5',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Radius around Thresh, estimated">270</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Missile width">220</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Missile speed">2000</span>',
    cast_time:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Effects start immediately">0.<small>3889</small></span>',
    cost: '60 / 65 / 70 / 75 / 80',
    costtype: 'Mana',
    cooldown:
      '13 / 12.<small>25</small> / 11.<small>5</small> / 10.<small>75</small> / 10',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Thresh" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Thresh/LoL" title="Thresh\'s"><img alt="Thresh\'s" src="/wiki/images/Thresh_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Thresh/LoL" title="Thresh/LoL">Thresh\'s</a></span></span> basic attacks deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> based on <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Thresh" data-ability="Damnation" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Thresh/LoL#Damnation" title="Souls"><img alt="Souls" src="/wiki/images/Thresh_Damnation.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Thresh/LoL#Damnation" title="Thresh/LoL">Souls</a></span></span></i>, which increases over a period without basic attacking enemies.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Thresh</b> sweeps his chain in a broad area, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking</a></span> them in the target direction, after which they are briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Flay.gif',
        description:
          "Passive: Thresh's basic attacks are empowered to deal bonus magic damage, with the  AD ratio increasing over 10 seconds without basic attacking enemies.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Thresh\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> are empowered to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>, with the <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal">AD</span></span> ratio increasing over 10 seconds without basic attacking enemies.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Passive:',
            raw: "Thresh's basic attacks are empowered to deal bonus magic damage, with the  AD ratio increasing over 10 seconds without basic attacking enemies.",
            damagetype: 'Magic',
            values: 1,
            units: 'bonus_ad',
            unitsText:
              'basic attacks are empowered to deal bonus magic damage, with the  AD ratio increasing over 10 seconds without basic attacking enemies.',
            pre: "Thresh's basic attacks are empowered to deal bonus magic damage, with the  AD ratio increasing over 10 seconds without basic attacking enemies.",
          },
        ],
        leveling: [
          {
            name: 'Minimum Bonus Magic Damage:',
            values: '1.5 per  Soul collected (+ 0% AD)',
            valuesHTML:
              '1.<small>5</small> per <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Thresh" data-ability="Damnation" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Thresh/LoL#Damnation" title="Soul"><img alt="Soul" src="/wiki/images/Thresh_Damnation.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Thresh/LoL#Damnation" title="Thresh/LoL">Soul</a></span></span> collected <span style="color:orange; white-space:normal">(+&nbsp;0% AD)</span>',
          },
          {
            name: 'Maximum Bonus Magic Damage:',
            values:
              '1.5 per  Soul collected (+ 80 / 110 / 140 / 170 / 200% AD)',
            valuesHTML:
              '1.<small>5</small> per <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Thresh" data-ability="Damnation" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Thresh/LoL#Damnation" title="Soul"><img alt="Soul" src="/wiki/images/Thresh_Damnation.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Thresh/LoL#Damnation" title="Thresh/LoL">Soul</a></span></span> collected <span style="color:orange; white-space:normal">(+&nbsp;80 / 110 / 140 / 170 / 200% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Minimum Bonus Magic Damage:',
            raw: '1.5 per  Soul collected (+ 0% AD)',
            damagetype: 'Magic',
            values: 1.5,
            units: 'darkHarvestStacks',
            unitsText: 'per  Soul collected',
            pre: '1.5 per  Soul collected',
            children: [
              {
                values: 0,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 0% AD',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Maximum Bonus Magic Damage:',
            raw: '1.5 per  Soul collected (+ 80 / 110 / 140 / 170 / 200% AD)',
            damagetype: 'Magic',
            values: 1.5,
            units: 'darkHarvestStacks',
            unitsText: 'per  Soul collected',
            pre: '1.5 per  Soul collected',
            children: [
              {
                values: [80, 110, 140, 170, 200],
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 80 / 110 / 140 / 170 / 200% AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Flay.png',
        description:
          'Active: Thresh sweeps his chain across the ground in a broad line and a radius around him, starting behind him and towards the target direction. Enemies hit are dealt magic damage and  knocked 200 units in the target direction, and then are  slowed for 1 second.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Thresh</b> sweeps his chain across the ground in a broad line and a radius around him, starting behind him and towards the target direction. Enemies hit are dealt <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked</a></span> 200 units in the target direction, and then are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> for 1 second.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Enemies hit are dealt magic damage and  knocked 200 units in the target direction, and then are  slowed for 1 second.',
            damagetype: 'Magic',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'hit are dealt magic damage and  knocked 200 units in the target direction, and then are  slowed for 1 second.',
            pre: 'Enemies hit are dealt magic damage and  knocked 200 units in the target direction, and then are  slowed for 1 second.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '75 / 115 / 155 / 195 / 235 (+ 70% AP)',
            valuesHTML:
              '75 / 115 / 155 / 195 / 235 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;70% AP)</span>',
          },
          {
            name: 'Slow:',
            values: '20 / 25 / 30 / 35 / 40%',
            valuesHTML: '20 / 25 / 30 / 35 / 40%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '75 / 115 / 155 / 195 / 235 (+ 70% AP)',
            damagetype: 'Magic',
            values: [75, 115, 155, 195, 235],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 115 / 155 / 195 / 235',
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
            name: 'Slow:',
            raw: '20 / 25 / 30 / 35 / 40%',
            values: [20, 25, 30, 35, 40],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 25 / 30 / 35 / 40%',
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'special',
    spellshield: true,
    projectile: 'false',
    notes:
      '* <i>Flay\'s</i> effects start at the start of the cast time. <b>Thresh</b> can cast other spells once the cast time completes, but remains unable to attack and move and use mobility spells (such as <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span>) until the chain completed its way entirely.\n<ul><li>Applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span> on the ability and deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Proc damage"><a href="/wiki/Damage" title="Damage"><img alt="Wit\'s End item.png" src="/wiki/images/Wit%27s_End_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">proc damage</a></span> on the enhanced basic attack.</li>\n<li>The knockback\'s <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> debuff is set to last longer than the forced movement, but gets removed as soon as the forced movement from <i>Flay</i> ends or is overridden by another.</li>\n<li><i>Flay\'s</i> passive\'s buff icon changes colors depending on charge level. At 100%, <i>Thresh\'s</i> scythe will glow green and a sound effect will play.</li></ul>\n<center><div id="gallery-noaccent" hash="5fe27b7bbc16daa1ca3c6b0a3868bd11" data-seq-no="1" class="wikia-gallery wikia-gallery-caption-below wikia-gallery-position-left wikia-gallery-spacing-small wikia-gallery-border-small wikia-gallery-captions-center wikia-gallery-caption-size-medium"><div class="wikia-gallery-row"><div class="wikia-gallery-item" style="width:66px; "><div class="thumb" style="height:66px;"><div class="gallery-image-wrapper accent" id="Thresh_Flay_2-png" style="position: relative; height:64px; width:64px;"><a class="image lightbox" href="/wiki/File:Thresh_Flay_2.png" title="Thresh Flay 2.png (8 KB)" style="height:64px; width:64px;"><noscript><img style="" src="https://static.wikia.nocookie.net/leagueoflegends/images/2/2a/Thresh_Flay_2.png/revision/latest?cb=20171221051034" title="Thresh Flay 2.png (8 KB)" class="thumbimage" alt="Thresh Flay 2" data-image-name="Thresh Flay 2.png" data-image-key="Thresh_Flay_2.png" data-caption="0 - 50%"></noscript><img style="" src="/wiki/images/Thresh_Flay_2.png" title="Thresh Flay 2.png (8 KB)" class="thumbimage lazyload" alt="Thresh Flay 2" data-caption="0 - 50%"></a></div></div><div class="lightbox-caption" style="width:64px;">0 - 50%</div></div><div class="wikia-gallery-item" style="width:66px; "><div class="thumb" style="height:66px;"><div class="gallery-image-wrapper accent" id="Thresh_Flay_3-png" style="position: relative; height:64px; width:64px;"><a class="image lightbox" href="/wiki/File:Thresh_Flay_3.png" title="Thresh Flay 3.png (7 KB)" style="height:64px; width:64px;"><noscript><img style="" src="https://static.wikia.nocookie.net/leagueoflegends/images/d/d1/Thresh_Flay_3.png/revision/latest?cb=20171221051047" title="Thresh Flay 3.png (7 KB)" class="thumbimage" alt="Thresh Flay 3" data-image-name="Thresh Flay 3.png" data-image-key="Thresh_Flay_3.png" data-caption="50 - 75%"></noscript><img style="" src="/wiki/images/Thresh_Flay_3.png" title="Thresh Flay 3.png (7 KB)" class="thumbimage lazyload" alt="Thresh Flay 3" data-caption="50 - 75%"></a></div></div><div class="lightbox-caption" style="width:64px;">50 - 75%</div></div><div class="wikia-gallery-item" style="width:66px; "><div class="thumb" style="height:66px;"><div class="gallery-image-wrapper accent" id="Thresh_Flay_4-png" style="position: relative; height:64px; width:64px;"><a class="image lightbox" href="/wiki/File:Thresh_Flay_4.png" title="Thresh Flay 4.png (8 KB)" style="height:64px; width:64px;"><noscript><img style="" src="https://static.wikia.nocookie.net/leagueoflegends/images/6/6d/Thresh_Flay_4.png/revision/latest?cb=20171221051058" title="Thresh Flay 4.png (8 KB)" class="thumbimage" alt="Thresh Flay 4" data-image-name="Thresh Flay 4.png" data-image-key="Thresh_Flay_4.png" data-caption="75% - 100%"></noscript><img style="" src="/wiki/images/Thresh_Flay_4.png" title="Thresh Flay 4.png (8 KB)" class="thumbimage lazyload" alt="Thresh Flay 4" data-caption="75% - 100%"></a></div></div><div class="lightbox-caption" style="width:64px;">75% - 100%</div></div><div class="wikia-gallery-item" style="width:66px; "><div class="thumb" style="height:66px;"><div class="gallery-image-wrapper accent" id="Thresh_Flay_5-png" style="position: relative; height:64px; width:64px;"><a class="image lightbox" href="/wiki/File:Thresh_Flay_5.png" title="Thresh Flay 5.png (9 KB)" style="height:64px; width:64px;"><noscript><img style="" src="https://static.wikia.nocookie.net/leagueoflegends/images/3/3c/Thresh_Flay_5.png/revision/latest?cb=20171221051110" title="Thresh Flay 5.png (9 KB)" class="thumbimage" alt="Thresh Flay 5" data-image-name="Thresh Flay 5.png" data-image-key="Thresh_Flay_5.png" data-caption="100%"></noscript><img style="" src="/wiki/images/Thresh_Flay_5.png" title="Thresh Flay 5.png (9 KB)" class="thumbimage lazyload" alt="Thresh Flay 5" data-caption="100%"></a></div></div><div class="lightbox-caption" style="width:64px;">100%</div></div></div></div></center>\n<ul><li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane\'s"><img alt="Runaan\'s Hurricane\'s" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">Runaan\'s Hurricane\'s</a></span></span> <a href="/wiki/Named_item_effect#Wind\'s_Fury" title="Named item effect">Wind\'s Fury</a> will apply <i>Flay\'s</i> passive to each enemy hit, with the secondary targets taking minimum damage (charge resets upon hitting the primary target).</li>\n<li>The enhanced attack applies other <a href="/wiki/On-hit_effect" class="mw-redirect" title="On-hit effect">on-hit effects</a> and can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> as normal (the bonus damage cannot).</li>\n<li><i>Flay\'s</i> passive enhanced attack can be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodged"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span> (the enhanced attack is not consumed and the charge is not reset) and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blocked"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span> (the enhanced attack is consumed and the charge is reset).</li>\n<li>The empowered attack will not trigger against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a> nor <a href="/wiki/Ward" title="Ward">wards</a>.\n<ul><li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: Enhanced attack\'s interactions with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinding</a></span> effects (regarding both bonus damage and charge reset).</li></ul></li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Cast time\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All the other item-actives are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death, unless protected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">Resurrection</a></span>\n</li></td></tr></tbody></table>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Thresh_Original_E_5.ogg   "This way!"',
  },
  'The Box': {
    name: 'The Box',
    display_name: 'The Box',
    champion: 'Thresh',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'ThreshRPenta.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 240,
      y: 48,
      w: 48,
      h: 48,
    },
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 30',
    cast_time: '0.<small>45</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown: '140 / 120 / 100',
    customlabel: 'Side length',
    custominfo:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 470',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Thresh" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Thresh/LoL" title="Thresh"><img alt="Thresh" src="/wiki/images/Thresh_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Thresh/LoL" title="Thresh/LoL">Thresh</a></span></span> erects a pentagon of spectral walls around him that each last a few seconds. A wall will break upon enemy champion contact, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them for a short time.',
    ],
    description: [
      {
        icon: '/wiki/images/The_Box.png',
        description:
          'Active: Thresh erects a pentagon of spectral walls around him that each last for 5 seconds. A wall will break upon enemy champion contact, dealing magic damage and  slowing them by 99% for 2 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Thresh</b> erects a pentagon of spectral walls around him that each last for 5 seconds. A wall will break upon enemy champion contact, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 99% for 2 seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: 'Thresh erects a pentagon of spectral walls around him that each last for 5 seconds',
            values: 5,
            user: 'none',
            units: '',
            unitsText:
              'erects a pentagon of spectral walls around him that each last for 5 seconds',
            pre: 'Thresh erects a pentagon of spectral walls around him that each last for 5 seconds',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'A wall will break upon enemy champion contact, dealing magic damage and  slowing them by 99% for 2 seconds.',
            damagetype: 'Magic',
            values: 9,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'for 2 seconds.wall will break upon enemy champion contact, dealing magic damage and  slowing them by 99',
            pre: 'A wall will break upon enemy champion contact, dealing magic damage and  slowing them by 99% for 2 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '250 / 400 / 550 (+ 100% AP)',
            valuesHTML:
              '250 / 400 / 550 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;100% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '250 / 400 / 550 (+ 100% AP)',
            damagetype: 'Magic',
            values: [250, 400, 550],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '250 / 400 / 550',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 100% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Enemies that break a wall cannot do so again for 1 second. Subsequent walls they break will deal no damage and  slow for only 1 second.',
        descriptionHTML:
          'Enemies that break a wall cannot do so again for 1 second. Subsequent walls they break will deal no damage and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> for only 1 second.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Enemies that break a wall cannot do so again for 1 second',
            values: 1,
            user: 'none',
            units: '',
            unitsText: 'that break a wall cannot do so again for 1 second',
            pre: 'Enemies that break a wall cannot do so again for 1 second',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Subsequent walls they break will deal no damage and  slow for only 1 second.',
            damagetype: 'None',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'walls they break will deal no damage and  slow for only 1 second.',
            pre: 'Subsequent walls they break will deal no damage and  slow for only 1 second.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Area of effect',
    spellshield: true,
    notes:
      '* This ability will cast from wherever the caster is at the start of the cast time.\n<ul><li><i>The Box</i> always uses <a href="/wiki/Quick_cast" title="Quick cast">quick cast</a>, regardless of player settings.\n<ul><li><i>The Box</i> always faces into the same direction (one of the walls is due North, and spreads West-East).\n<ul><li>The cast indicator does not show this behavior.</li></ul></li></ul></li>\n<li>The corners of <i>The Box</i> are placed 400 units around <b>Thresh</b>.\n<ul><li>Each wall is 470.<small>228</small> units long.</li>\n<li>Each wall passes 323.<small>607</small> units from the center of <i>The Box</i> at the closest approach (ignoring its width).</li>\n<li>A pentagon has an angle of 72° between each corner.</li></ul></li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Thresh_Original_R_3.ogg   "Nowhere to hide."',
  },
} satisfies { [skillName in string]: SkillData };
