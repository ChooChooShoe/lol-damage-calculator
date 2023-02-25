import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Master Yi';

export default {
  'Double Strike': {
    name: 'Double Strike',
    display_name: 'Double Strike',
    champion: 'Master Yi',
    skill: 'I',
    image: {
      full: 'MasterYi_Passive1.png',
      sprite: 'passive2.png',
      group: 'passive',
      x: 288,
      y: 48,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Master Yi" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Master_Yi/LoL" title="Master Yi\'s"><img alt="Master Yi\'s" src="/wiki/images/Master_Yi_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Master_Yi/LoL" title="Master Yi/LoL">Master Yi\'s</a></span></span> basic attacks generate a stack of <i>Double Strike</i> for a few seconds. At 3 stacks, his next basic attack will consume them to make a second attack that deals <span style="color: #FF8C34; white-space:normal"><b>reduced</b> physical damage</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Double_Strike.png',
        description:
          "Innate: Master Yi's basic attacks  on-hit generate a stack of Double Strike for 4 seconds, refreshing on subsequent hits and stacking up to 3 times. At 3 stacks, Master Yi's next basic attack on-attack is empowered to consume the stacks to strike twice, the second strike dealing 50% AD physical damage.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Master Yi\'s</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack"><a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> generate a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Double Strike</i> for 4 seconds, refreshing on subsequent hits and stacking up to 3 times. At 3 stacks, <b>Master Yi\'s</b> next basic attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> is empowered to consume the stacks to strike twice, the second strike dealing <span style="color:orange; white-space:normal">50% AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span>.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Innate:',
            raw: "Master Yi's basic attacks  on-hit generate a stack of Double Strike for 4 seconds, refreshing on subsequent hits and stacking up to 3 times",
            min: 0,
            max: 3,
            description:
              "Master Yi's basic attacks  on-hit generate a stack of Double Strike for 4 seconds, refreshing on subsequent hits and stacking up to 3 times",
            values: 4,
            units: 'genericStacks',
            unitsText:
              "Yi's basic attacks  on-hit generate a stack of Double Strike for 4 seconds, refreshing on subsequent hits and stacking up to 3 times",
            pre: "Master Yi's basic attacks  on-hit generate a stack of Double Strike for 4 seconds, refreshing on subsequent hits and stacking up to 3 times",
          },
          {
            effectType: 'Stacks',
            name: 'Line 2:',
            raw: "At 3 stacks, Master Yi's next basic attack on-attack is empowered to consume the stacks to strike twice, the second strike dealing 50% AD physical damage.",
            min: 0,
            max: 10,
            description:
              "At 3 stacks, Master Yi's next basic attack on-attack is empowered to consume the stacks to strike twice, the second strike dealing 50% AD physical damage.",
            values: 3,
            valuesIsPercent: true,
            units: 'genericStacks',
            unitsText:
              "AD physical damage.3 stacks, Master Yi's next basic attack on-attack is empowered to consume the stacks to strike twice, the second strike dealing 50",
            pre: "At 3 stacks, Master Yi's next basic attack on-attack is empowered to consume the stacks to strike twice, the second strike dealing 50% AD physical damage.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'The second strike applies  on-hit and on-attack effects at 100% effectiveness and is affected by  critical strike modifiers.',
        descriptionHTML:
          'The second strike applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects at 100% effectiveness and is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'The second strike applies  on-hit and on-attack effects at 100% effectiveness and is affected by  critical strike modifiers.',
            damagetype: 'None',
            values: 1,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              'effectiveness and is affected by  critical strike modifiers.second strike applies  on-hit and on-attack effects at 100',
            pre: 'The second strike applies  on-hit and on-attack effects at 100% effectiveness and is affected by  critical strike modifiers.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "If Master Yi's primary target is killed before the second strike, he automatically attacks another enemy within 300 range.",
        descriptionHTML:
          "If <b>Master Yi's</b> primary target is killed before the second strike, he automatically attacks another enemy within 300 range.",
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: "If Master Yi's primary target is killed before the second strike, he automatically attacks another enemy within 300 range.",
            values: 3,
            user: 'target',
            units: 'total_ad',
            unitsText:
              "Master Yi's primary target is killed before the second strike, he automatically attacks another enemy within 300 range.",
            pre: "If Master Yi's primary target is killed before the second strike, he automatically attacks another enemy within 300 range.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'The second strike can  critically strike  structures.',
        descriptionHTML:
          '<i>The second strike can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">structures</a></span>.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'attack',
    occurrence: 'On-hit',
    callforhelp: 'true',
    notes:
      '* Since <i>Double Strike</i> resets the counter on-attack and the second strike applies on-hit effects, the second strike is able to add a stack for the next <i>Double Strike</i> activation.\n<ul><li>If <i>Double Strike\'s</i> target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> shortly after the triggering attack, it will still occur and deal its effects as usual.</li>\n<li>The second strike will trigger but not consume <i>Double Strike</i> stacks if the primary attack is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span>.\n<ul><li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">Blind</a></span></li></ul></li></ul>',
  },
  'Alpha Strike': {
    name: 'Alpha Strike',
    display_name: 'Alpha Strike',
    champion: 'Master Yi',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'AlphaStrike.png',
      sprite: 'spell8.png',
      group: 'spell',
      x: 0,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '600',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 600',
    cast_time: 'none',
    cost: '50 / 55 / 60 / 65 / 70',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">20 / 19.<small>5</small> / 19 / 18.<small>5</small> / 18</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Master Yi" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Master_Yi/LoL" title="Master Yi"><img alt="Master Yi" src="/wiki/images/Master_Yi_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Master_Yi/LoL" title="Master Yi/LoL">Master Yi</a></span></span> briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Vanish"><a href="/wiki/Untargetability#Vanish" title="Untargetability#Vanish"><img alt="Hallucinate.png" src="/wiki/images/Shaco_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetability#Vanish" title="Untargetability">vanishes</a></span> and marks the target enemy, then rapidly marks up to 3 other nearby enemies. If there are no other eligible targets before then, <b>Master Yi</b> can mark the same enemies again.',
      'Upon finishing marking, he <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blinks"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">reappears</a></span> and detonates the marks, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> and applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects. Subsequent marks on a target have less effect.',
      'Basic attacks <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduce</span> <i>Alpha Strike\'s</i> cooldown.',
    ],
    description: [
      {
        icon: '/wiki/images/Alpha_Strike.png',
        description:
          'Active: Master Yi  vanishes and becomes  unable to act. After 0.231 seconds, he marks the target enemy and then proceeds to mark the nearest  visible un-marked enemy within 600 units, recurring every 0.231 seconds up to 3 times. If there are no other eligible targets before then, Master Yi can mark the same enemies again.\nUpon finishing marking, he  reappears 75 units in front of the target and becomes able to act again「 after 0.165 seconds. 」「 1.087 seconds after the start of the cast with 4 bounces. 」During Alpha Strike, Master Yi may choose a direction around the primary target to instead reappear 75 units in that direction. If the primary target  dies or is too far away during the delay, he will reappear at the cast location instead.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Master Yi</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Vanish"><a href="/wiki/Untargetability#Vanish" title="Untargetability#Vanish"><img alt="Hallucinate.png" src="/wiki/images/Shaco_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetability#Vanish" title="Untargetability">vanishes</a></span> and becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">unable to act</a></span>. After <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.2 seconds, but rounded up to the next game tick.">0.<small>231</small> seconds</span>, he marks the target enemy and then proceeds to mark the nearest <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> un-marked enemy within 600 units, recurring every <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.2 seconds, but rounded up to the next game tick.">0.<small>231</small> seconds</span> up to 3 times. If there are no other eligible targets before then, <b>Master Yi</b> can mark the same enemies again.<br><br>\n<p>Upon finishing marking, he <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blinks"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">reappears</a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="before the target in their current facing direction">75 units in front of the target</span> and becomes able to act again<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;after <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.15 seconds, but rounded up to the next game tick.">0.<small>165</small> seconds</span>.&nbsp;」</span><span class="flipText2">「&nbsp;<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="effective time due to game ticks">1.<small>087</small> seconds</span> after the start of the cast with 4 bounces.&nbsp;」</span></span>During <i>Alpha Strike</i>, <b>Master Yi</b> may choose a direction around the primary target to instead reappear 75 units in that direction. If the primary target <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span> or is too far away during the delay, he will reappear at the cast location instead.\n</p>',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 3:',
            raw: 'If there are no other eligible targets before then, Master Yi can mark the same enemies again.\nUpon finishing marking, he  reappears 75 units in front of the target and becomes able to act again「 after 0.165 seconds. 」「 1.087 seconds after the start of the cast with 4 bounces. 」During Alpha Strike, Master Yi may choose a direction around the primary target to instead reappear 75 units in that direction',
            increasedStat: 'kindredMarks',
            values: 7,
            units: '',
            unitsText:
              'there are no other eligible targets before then, Master Yi can mark the same enemies again.',
            pre: 'If there are no other eligible targets before then, Master Yi can mark the same enemies again.\nUpon finishing marking, he  reappears 75 units in front of the target and becomes able to act again「 after 0.165 seconds. 」「 1.087 seconds after the start of the cast with 4 bounces. 」During Alpha Strike, Master Yi may choose a direction around the primary target to instead reappear 75 units in that direction',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Master Yi then detonates the marks, dealing physical damage and applying  on-hit effects at 75% effectiveness. Subsequent marks on a target instantly deal 25% damage and apply  on-hit effects at 18.75% effectiveness. Alpha Strike deals bonus physical damage to  monsters per hit.',
        descriptionHTML:
          '<b>Master Yi</b> then detonates the marks, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> and applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects at 75% effectiveness. Subsequent marks on a target instantly deal 25% damage and apply <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects at 18.<small>75</small>% effectiveness. <i>Alpha Strike</i> deals <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> per hit.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Master Yi then detonates the marks, dealing physical damage and applying  on-hit effects at 75% effectiveness',
            damagetype: 'Physical',
            values: 7,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              'effectivenessYi then detonates the marks, dealing physical damage and applying  on-hit effects at 75',
            pre: 'Master Yi then detonates the marks, dealing physical damage and applying  on-hit effects at 75% effectiveness',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Subsequent marks on a target instantly deal 25% damage and apply  on-hit effects at 18.75% effectiveness',
            damagetype: 'None',
            values: 2,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              'damage and apply  on-hit effects at 18.75marks on a target instantly deal 25',
            pre: 'Subsequent marks on a target instantly deal 25% damage and apply  on-hit effects at 18.75% effectiveness',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '30 / 60 / 90 / 120 / 150 (+ 50% AD)',
            valuesHTML:
              '30 / 60 / 90 / 120 / 150 <span style="color:orange; white-space:normal">(+&nbsp;50% AD)</span>',
          },
          {
            name: 'Monster Bonus Damage:',
            values: '75 / 100 / 125 / 150 / 175',
            valuesHTML: '75 / 100 / 125 / 150 / 175',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '30 / 60 / 90 / 120 / 150 (+ 50% AD)',
            damagetype: 'Physical',
            values: [30, 60, 90, 120, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 60 / 90 / 120 / 150',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 50% AD',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Monster Bonus Damage:',
            raw: '75 / 100 / 125 / 150 / 175',
            damagetype: 'None',
            values: [75, 100, 125, 150, 175],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 100 / 125 / 150 / 175',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Alpha Strike's primary and lesser damage can  critically strike for bonus physical damage equal to (17.5% +  6.125%) AD and (4.375% +  1.53125%) AD respectively.",
        descriptionHTML:
          '<i>Alpha Strike\'s</i> primary and lesser damage can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> equal to <span style="color:orange; white-space:normal">(17.<small>5</small>%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="6.125%"><img alt="6.125%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">6.<small>125</small>%</a></span></span>) AD</span> and <span style="color:orange; white-space:normal">(4.<small>375</small>%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="1.53125%"><img alt="1.53125%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">1.<small>53125</small>%</a></span></span>) AD</span> respectively.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: "Alpha Strike's primary and lesser damage can  critically strike for bonus physical damage equal to (17.5% +  6.125%) AD and (4.375% +  1.53125%) AD respectively.",
            damagetype: 'Physical',
            values: 0,
            units: 'total_ad',
            unitsText: 'AD and',
            pre: "Alpha Strike's primary and lesser damage can  critically strike for bonus physical damage equal to",
            post: 'AD and',
            children: [
              {
                values: 17.5,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: '+  6.125',
                pre: '17.5% +  6.125%',
              },
              {
                values: 4.375,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: '+  1.53125',
                pre: '4.375% +  1.53125%',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Basic attacks  on-hit reduce Alpha Strike's  current cooldown by 1 second.",
        descriptionHTML:
          'Basic attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> reduce <i>Alpha Strike\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> by <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Affected by ability haste">1 second</span>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: "Basic attacks  on-hit reduce Alpha Strike's  current cooldown by 1 second.",
            values: 1,
            units: 'total_ad',
            unitsText:
              "attacks  on-hit reduce Alpha Strike's  current cooldown by 1 second.",
            pre: "Basic attacks  on-hit reduce Alpha Strike's  current cooldown by 1 second.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Wuju Style and  Highlander can be cast during Alpha Strike. Each time Alpha Strike hits a target, the durations of  Wuju Style and  Highlander are refreshed by their current duration. Alpha Strike does not trigger its cooldown reduction nor grant a stack of  Double Strike when applying on-hit effects.',
        descriptionHTML:
          '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Master Yi" data-ability="Wuju Style" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Master_Yi/LoL#Wuju_Style" title="Wuju Style"><img alt="Wuju Style" src="/wiki/images/Master_Yi_Wuju_Style.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Master_Yi/LoL#Wuju_Style" title="Master Yi/LoL">Wuju Style</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Master Yi" data-ability="Highlander" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Master_Yi/LoL#Highlander" title="Highlander"><img alt="Highlander" src="/wiki/images/Master_Yi_Highlander.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Master_Yi/LoL#Highlander" title="Master Yi/LoL">Highlander</a></span></span> can be cast during Alpha Strike. Each time Alpha Strike hits a target, the durations of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Master Yi" data-ability="Wuju Style" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Master_Yi/LoL#Wuju_Style" title="Wuju Style"><img alt="Wuju Style" src="/wiki/images/Master_Yi_Wuju_Style.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Master_Yi/LoL#Wuju_Style" title="Master Yi/LoL">Wuju Style</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Master Yi" data-ability="Highlander" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Master_Yi/LoL#Highlander" title="Highlander"><img alt="Highlander" src="/wiki/images/Master_Yi_Highlander.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Master_Yi/LoL#Highlander" title="Master Yi/LoL">Highlander</a></span></span> are refreshed by their <b>current</b> duration. Alpha Strike does not trigger its cooldown reduction nor grant a stack of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Master Yi" data-ability="Double Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Master_Yi/LoL#Double_Strike" title="Double Strike"><img alt="Double Strike" src="/wiki/images/Master_Yi_Double_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Master_Yi/LoL#Double_Strike" title="Master Yi/LoL">Double Strike</a></span></span> when applying on-hit effects.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Self, Enemies',
    damagetype: 'Physical',
    spelleffects: 'AoE',
    spellshield: 'Special',
    notes:
      '* <i>Alpha Strike\'s</i> primary damage applies after <b>Master Yi</b> reappears.\n<ul><li><i>Alpha Strike\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown reduction</span> applies on <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">structures</a></span>.</li>\n<li>When <b>Master Yi</b> bounces from a unit it will grant <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">vision</a></span> in a 600 radius around it for up-until <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.6 seconds, but rounded up to the next game tick.">0.<small>627</small> seconds</span>  after <i>Alpha Strike</i> ends, including across terrain, though not into <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Brush"><a href="/wiki/Brush" title="Brush"><img alt="Brushmaker.png" src="/wiki/images/Ivern_Brushmaker.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Brush" title="Brush">brushes</a></span>. It will always grant vision around the primary target even if he doesn\'t bounce off it.</li>\n<li><i>Alpha Strike\'s</i> damage is calculated the moment the mark is placed. Because of this it is possible to inflict differing amounts of damage if <b>Master Yi</b> changes his <span style="color:orange; white-space:normal">AD</span> in the middle of <i>Alpha Strike</i>.</li>\n<li><b>Master Yi</b> will follow all his primary target\'s movements.\n<ul><li><i>Alpha Strike</i> can only follow up-to <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="From Yi\'s location at start of cast">2000</span> units; If the target teleports a very long distance, it will not be followed.</li></ul></li>\n<li>If the primary target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> and there are no other nearby valid targets, <i>Alpha Strike</i> will end prematurely and will not deal the damage occurring after <b>Master Yi\'s</b> reappearance.</li>\n<li>If the primary target is a champion <b>Master Yi</b> will automatically attack it once <i>Alpha Strike</i> ends, and thus <b>Master Yi</b> will not be able to buffer other abilities.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will only block a single instance of damage.</li>\n<li>On-hit damage applied by <i>Alpha Strike</i> will be negated by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodge</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">block</a></span>, but not while <b>Master Yi</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span>.\n<ul><li><i>Alpha Strike\'s</i> own damage will not be negated.</li></ul></li>\n<li>If <b>Master Yi</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span> during <i>Alpha Strike</i> and he is only focusing one target, the ability will only deal the reduced damage strikes and not the final tick of damage from reappearing.\n<ul><li>If he is striking multiple targets the damage will be dealt immediately when <i>dying</i>, and if he <i>dies</i> before the bounce from the last target, <i>Alpha Strike</i> will deal reduced damage only to all units he already bounced from.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul></li>\n<li>If <b>Master Yi</b> enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span> during <i>Alpha Strike</i> and he is only focusing one target, the ability will deal the reduced damage strikes as normal and the final tick of damage after being <i>resurrected</i>.\n<ul><li>If he is striking multiple targets, <i>Alpha Strike</i> will <i>sometimes</i> deal the reduced damage from repeated bounces and the main damage after being <i>resurrected</i>, and <i>sometimes</i> only the reduced damage, unrelated to the number of targets available.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul></li>\n<li>The following table refers for interactions while <b>Master Yi</b> is performing <i>Alpha Strike</i>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n\n<tbody><tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Master Yi" data-ability="Wuju Style" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Master_Yi/LoL#Wuju_Style" title="Wuju Style"><img alt="Wuju Style" src="/wiki/images/Master_Yi_Wuju_Style.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Master_Yi/LoL#Wuju_Style" title="Master Yi/LoL">Wuju Style</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Master Yi" data-ability="Highlander" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Master_Yi/LoL#Highlander" title="Highlander"><img alt="Highlander" src="/wiki/images/Master_Yi_Highlander.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Master_Yi/LoL#Highlander" title="Master Yi/LoL">Highlander</a></span></span> are usable. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Master Yi" data-ability="Meditate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Master_Yi/LoL#Meditate" title="Meditate"><img alt="Meditate" src="/wiki/images/Master_Yi_Meditate.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Master_Yi/LoL#Meditate" title="Master Yi/LoL">Meditate</a></span></span> is disabled.\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All items are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death\n</li></td></tr></tbody></table>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Master_Yi_Original_Q_5.ogg   "Many foes, one strike!"',
  },
  Meditate: {
    name: 'Meditate',
    display_name: 'Meditate',
    champion: 'Master Yi',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'Meditate.png',
      sprite: 'spell8.png',
      group: 'spell',
      x: 48,
      y: 0,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '40 mana + <span style="color: #0099CC; white-space:normal">6% <b>maximum</b></span>',
    costtype:
      '<span style="color: #0099CC; white-space:normal">mana</span> per second',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">9</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Master Yi" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Master_Yi/LoL" title="Master Yi"><img alt="Master Yi" src="/wiki/images/Master_Yi_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Master_Yi/LoL" title="Master Yi/LoL">Master Yi</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channels"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for a few seconds, rapidly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Healing"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> himself based on <span style="color: #1F995C; white-space:normal">his <b>missing</b> health</span>.',
      'While channeling, <b>Master Yi</b> gains damage reduction, pauses <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Master Yi" data-ability="Wuju Style" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Master_Yi/LoL#Wuju_Style" title="Wuju Style\'s"><img alt="Wuju Style\'s" src="/wiki/images/Master_Yi_Wuju_Style.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Master_Yi/LoL#Wuju_Style" title="Master Yi/LoL">Wuju Style\'s</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Master Yi" data-ability="Highlander" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Master_Yi/LoL#Highlander" title="Highlander\'s"><img alt="Highlander\'s" src="/wiki/images/Master_Yi_Highlander.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Master_Yi/LoL#Highlander" title="Master Yi/LoL">Highlander\'s</a></span></span></i> duration, and gains one stack of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Master Yi" data-ability="Double Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Master_Yi/LoL#Double_Strike" title="Double Strike"><img alt="Double Strike" src="/wiki/images/Master_Yi_Double_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Master_Yi/LoL#Double_Strike" title="Master Yi/LoL">Double Strike</a></span></span></i> per second.',
    ],
    description: [
      {
        icon: '/wiki/images/Meditate.png',
        description:
          'Active: Master Yi  channels for up to 4 seconds,  healing himself every 0.5 seconds, increased by 0% − 100% (based on missing health).',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Master Yi</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channels"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for up to 4 seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Healing"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> himself every 0.<small>5</small> seconds, increased by <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="missing health" data-displayformula="1% per 1% missing health" data-bot_values="0;10;20;30;40;50;60;70;80;90;100" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 100% (based on <b>missing</b> health)</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Active:',
            raw: 'Master Yi  channels for up to 4 seconds,  healing himself every 0.5 seconds, increased by 0% − 100% (based on missing health).',
            healType: 'BonusHealth',
            values: 4,
            valuesIsPercent: true,
            basedOn: 'missing health',
            user: 'none',
            units: '',
            unitsText: '.',
            pre: 'Master Yi  channels for up to 4 seconds,  healing himself every 0.5 seconds, increased by 0% − 100%',
            post: '.',
          },
        ],
        leveling: [
          {
            name: 'Minimum Heal Per Tick:',
            values: '15 / 25 / 35 / 45 / 55 (+ 12.5% AP)',
            valuesHTML:
              '15 / 25 / 35 / 45 / 55 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;12.<small>5</small>% AP)</span>',
          },
          {
            name: 'Minimum Total Heal:',
            values: '120 / 200 / 280 / 360 / 440 (+ 100% AP)',
            valuesHTML:
              '120 / 200 / 280 / 360 / 440 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;100% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Minimum Heal Per Tick:',
            raw: '15 / 25 / 35 / 45 / 55 (+ 12.5% AP)',
            healType: 'DrainEffect',
            values: [15, 25, 35, 45, 55],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 25 / 35 / 45 / 55',
            children: [
              {
                values: 12.5,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 12.5% AP',
              },
            ],
          },
          {
            effectType: 'Heal',
            name: 'Minimum Total Heal:',
            raw: '120 / 200 / 280 / 360 / 440 (+ 100% AP)',
            healType: 'DrainEffect',
            values: [120, 200, 280, 360, 440],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '120 / 200 / 280 / 360 / 440',
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
          "While channeling, Master Yi gains 90% damage reduction for the first 0.5 seconds, which is then modified to a reduced amount for the remaining duration of the channel. Meditate's damage reduction is halved against  turrets and lingers for 0.5 seconds after the channel ends.",
        descriptionHTML:
          'While channeling, <b>Master Yi</b> gains 90% damage reduction for the first 0.<small>5</small> seconds, which is then modified to a reduced amount for the remaining duration of the channel. <i>Meditate\'s</i> damage reduction is halved against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span> and lingers for 0.<small>5</small> seconds after the channel ends.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'While channeling, Master Yi gains 90% damage reduction for the first 0.5 seconds, which is then modified to a reduced amount for the remaining duration of the channel',
            values: 9,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'damage reduction for the first 0.5 seconds, which is then modified to a reduced amount for the remaining duration of the channelchanneling, Master Yi gains 90',
            pre: 'While channeling, Master Yi gains 90% damage reduction for the first 0.5 seconds, which is then modified to a reduced amount for the remaining duration of the channel',
          },
        ],
        leveling: [
          {
            name: 'Damage Reduction:',
            values: '45 / 47.5 / 50 / 52.5 / 55%',
            valuesHTML:
              '45 / 47.<small>5</small> / 50 / 52.<small>5</small> / 55%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Damage Reduction:',
            raw: '45 / 47.5 / 50 / 52.5 / 55%',
            damagetype: 'None',
            values: [45, 47.5, 50, 52.5, 55],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '45 / 47.5 / 50 / 52.5 / 55%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Meditate  resets Master Yi's basic attack timer, pauses  Wuju Style's and  Highlander's duration, and grants one stack of  Double Strike per second during the channel.",
        descriptionHTML:
          '<i>Meditate <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Master Yi\'s</b> basic attack timer, pauses <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Master Yi" data-ability="Wuju Style" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Master_Yi/LoL#Wuju_Style" title="Wuju Style\'s"><img alt="Wuju Style\'s" src="/wiki/images/Master_Yi_Wuju_Style.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Master_Yi/LoL#Wuju_Style" title="Master Yi/LoL">Wuju Style\'s</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Master Yi" data-ability="Highlander" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Master_Yi/LoL#Highlander" title="Highlander\'s"><img alt="Highlander\'s" src="/wiki/images/Master_Yi_Highlander.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Master_Yi/LoL#Highlander" title="Master Yi/LoL">Highlander\'s</a></span></span> duration, and grants one stack of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Master Yi" data-ability="Double Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Master_Yi/LoL#Double_Strike" title="Double Strike"><img alt="Double Strike" src="/wiki/images/Master_Yi_Double_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Master_Yi/LoL#Double_Strike" title="Master Yi/LoL">Double Strike</a></span></span> per second during the channel.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    spelleffects: 'Heal',
    notes:
      '* <i>Meditate\'s</i> healing amount updates dynamically as he heals himself, making <b>Master Yi</b> heal for less as his <b>current</b> health increases.\n<ul><li>The following table refers for interactions while <b>Master Yi</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Hextech Rocketbelt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt"><img alt="Hextech Rocketbelt" src="/wiki/images/Hextech_Rocketbelt_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt">Hextech Rocketbelt</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>All item-actives not specified above interrupt\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Master_Yi_Original_W_0.ogg   "Mind and body."',
  },
  'Wuju Style': {
    name: 'Wuju Style',
    display_name: 'Wuju Style',
    champion: 'Master Yi',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'WujuStyle.png',
      sprite: 'spell8.png',
      group: 'spell',
      x: 96,
      y: 0,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on-cast">18</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Master Yi" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Master_Yi/LoL" title="Master Yi"><img alt="Master Yi" src="/wiki/images/Master_Yi_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Master_Yi/LoL" title="Master Yi/LoL">Master Yi</a></span></span> empowers his sword, causing his basic attacks to deal <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal"><b>bonus</b> true damage</span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> for a few seconds.',
    ],
    description: [
      {
        icon: '/wiki/images/Wuju_Style.png',
        description:
          'Active: Master Yi empowers his basic attacks within the next 5 seconds to deal  bonus true damage  on-hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Master Yi</b> empowers his basic attacks within the next 5 seconds to deal <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal"><b>bonus</b> true damage</span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Master Yi empowers his basic attacks within the next 5 seconds to deal  bonus true damage  on-hit.',
            damagetype: 'True',
            values: 5,
            units: 'bonus_ad',
            unitsText:
              'Yi empowers his basic attacks within the next 5 seconds to deal  bonus true damage  on-hit.',
            pre: 'Master Yi empowers his basic attacks within the next 5 seconds to deal  bonus true damage  on-hit.',
          },
        ],
        leveling: [
          {
            name: 'Bonus True Damage:',
            values: '30 / 35 / 40 / 45 / 50 (+ 30% bonus AD)',
            valuesHTML:
              '30 / 35 / 40 / 45 / 50 <span style="color:orange; white-space:normal">(+&nbsp;30% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus True Damage:',
            raw: '30 / 35 / 40 / 45 / 50 (+ 30% bonus AD)',
            damagetype: 'True',
            values: [30, 35, 40, 45, 50],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 35 / 40 / 45 / 50',
            children: [
              {
                values: 30,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 30% bonus AD',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    damagetype: 'True',
    spelleffects: 'Proc',
    notes:
      '* <i>Wuju Style</i> can be cast during <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Master Yi" data-ability="Alpha Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Master_Yi/LoL#Alpha_Strike" title="Alpha Strike"><img alt="Alpha Strike" src="/wiki/images/Master_Yi_Alpha_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Master_Yi/LoL#Alpha_Strike" title="Master Yi/LoL">Alpha Strike</a></span></span>.\n<ul><li><i>Wuju Style</i> can\'t be cast while it is already active.</li>\n<li><i>Wuju Style\'s</i> bonus true damage does not interact with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strikes</a></span>.</li>\n<li><i>Wuju Style\'s</i> bonus true damage cannot be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span> but can be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span> and/or missed if <b>Master Yi</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span>.</li>\n<li>The attacks do not deal the <b>bonus</b> damage against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.</li></ul>',
  },
  Highlander: {
    name: 'Highlander',
    display_name: 'Highlander',
    champion: 'Master Yi',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'Highlander.png',
      sprite: 'spell8.png',
      group: 'spell',
      x: 144,
      y: 0,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">85</span>',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> Scoring a champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> massively <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduces</span> the <b>current</b> cooldowns of <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Master Yi" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Master_Yi/LoL" title="Master Yi\'s"><img alt="Master Yi\'s" src="/wiki/images/Master_Yi_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Master_Yi/LoL" title="Master Yi/LoL">Master Yi\'s</a></span></span> basic abilities.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Master Yi</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleanses</a></span> himself from all <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cripple"><a href="/wiki/Cripple" title="Cripple"><img alt="Cripple icon.png" src="/wiki/images/Cripple_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cripple" class="mw-redirect" title="Cripple">cripples</a></span> and gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosting"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span>, <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>, <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow-immune"><a href="/wiki/Slow_resist#Slow_Immunity" title="Slow resist#Slow Immunity"><img alt="Slow immune 2.png" src="/wiki/images/Slow_immune_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow_resist#Slow_Immunity" title="Slow resist">slow immunity</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cripple-immune"><a href="/wiki/Slow_resist#Cripple_Immunity" title="Slow resist#Cripple Immunity"><img alt="Cripple immune.png" src="/wiki/images/Cripple_immune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow_resist#Cripple_Immunity" title="Slow resist">cripple immunity</a></span> all for the next few seconds.',
      'While active, scoring a champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> extends <i>Highlander\'s</i> duration by a few seconds.',
    ],
    description: [
      {
        description:
          "Passive: Scoring a champion  takedown reduces the  current cooldowns of Master Yi's basic abilities by 70%.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> Scoring a champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> reduces the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldowns</span> of <b>Master Yi\'s</b> basic <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> by 70%.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Passive:',
            raw: "Scoring a champion  takedown reduces the  current cooldowns of Master Yi's basic abilities by 70%.",
            values: 7,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              ".a champion  takedown reduces the  current cooldowns of Master Yi's basic abilities by 70",
            pre: "Scoring a champion  takedown reduces the  current cooldowns of Master Yi's basic abilities by 70%.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Highlander.png',
        description:
          'Active: Master Yi  cleanses himself from all  slows and  cripples. For the next 7 seconds, he gains  ghosting,  bonus attack speed,  bonus movement speed,  slow immunity, and  cripple immunity.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Master Yi</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleanses</a></span> himself from all <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cripple"><a href="/wiki/Cripple" title="Cripple"><img alt="Cripple icon.png" src="/wiki/images/Cripple_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cripple" class="mw-redirect" title="Cripple">cripples</a></span>. For the next 7 seconds, he gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosting"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span>, <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>, <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow-immune"><a href="/wiki/Slow_resist#Slow_Immunity" title="Slow resist#Slow Immunity"><img alt="Slow immune 2.png" src="/wiki/images/Slow_immune_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow_resist#Slow_Immunity" title="Slow resist">slow immunity</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cripple-immune"><a href="/wiki/Slow_resist#Cripple_Immunity" title="Slow resist#Cripple Immunity"><img alt="Cripple immune.png" src="/wiki/images/Cripple_immune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow_resist#Cripple_Immunity" title="Slow resist">cripple immunity</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'For the next 7 seconds, he gains  ghosting,  bonus attack speed,  bonus movement speed,  slow immunity, and  cripple immunity.',
            increasedStat: 'bonus_ad',
            values: 7,
            units: '',
            unitsText:
              'the next 7 seconds, he gains  ghosting,  bonus attack speed,  bonus movement speed,  slow immunity, and  cripple immunity.',
            pre: 'For the next 7 seconds, he gains  ghosting,  bonus attack speed,  bonus movement speed,  slow immunity, and  cripple immunity.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Attack Speed:',
            values: '25 / 30 / 35 / 40 / 45%',
            valuesHTML: '25 / 30 / 35 / 40 / 45%',
          },
          {
            name: 'Bonus Movement Speed:',
            values: '35 / 40 / 45 / 50 / 55%',
            valuesHTML: '35 / 40 / 45 / 50 / 55%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '25 / 30 / 35 / 40 / 45%',
            values: [25, 30, 35, 40, 45],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 30 / 35 / 40 / 45%',
          },
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '35 / 40 / 45 / 50 / 55%',
            values: [35, 40, 45, 50, 55],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 40 / 45 / 50 / 55%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "While active, scoring a champion  takedown extends Highlander's duration by 7 seconds.",
        descriptionHTML:
          'While active, scoring a champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> extends <i>Highlander\'s</i> duration by 7 seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: "While active, scoring a champion  takedown extends Highlander's duration by 7 seconds.",
            values: 7,
            user: 'none',
            units: '',
            unitsText:
              "active, scoring a champion  takedown extends Highlander's duration by 7 seconds.",
            pre: "While active, scoring a champion  takedown extends Highlander's duration by 7 seconds.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    notes:
      '* <i>Highlander</i> can be cast during <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Master Yi" data-ability="Alpha Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Master_Yi/LoL#Alpha_Strike" title="Alpha Strike"><img alt="Alpha Strike" src="/wiki/images/Master_Yi_Alpha_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Master_Yi/LoL#Alpha_Strike" title="Master Yi/LoL">Alpha Strike</a></span></span>.\n<ul><li>There are two situations that can happen if <b>Master Yi</b> uses <i>Highlander</i> while <i>Highlander\'s</i> buff is active.\n<ul><li>If the buff\'s duration is under 7 seconds, the buff refreshes to 7 seconds.</li>\n<li>If the buff\'s duration is above 7 seconds, nothing happens.</li></ul></li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Master_Yi_Original_R_6.ogg   "Speed of thought!"',
  },
} satisfies { [skillName in string]: SkillData };
