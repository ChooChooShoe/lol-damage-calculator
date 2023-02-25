import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Udyr';

export default {
  'Bridge Between': {
    name: 'Bridge Between',
    display_name: 'Bridge Between',
    champion: 'Udyr',
    skill: 'I',
    image: {
      full: 'Udyr_P.UdyrVGU.png',
      sprite: 'passive4.png',
      group: 'passive',
      x: 240,
      y: 48,
      w: 48,
      h: 48,
    },
    static:
      '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="50;1" data-finish="20;16" data-bot_values="50;40;30;20" data-top_values="1;6;11;16">50 / 40 / 30 / 20 (based on level)</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate - Awakened Spirit:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Udyr" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Udyr/LoL" title="Udyr"><img alt="Udyr" src="/wiki/images/Udyr_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Udyr/LoL" title="Udyr/LoL">Udyr</a></span></span> has no ultimate ability and instead he has 4 basic abilities that each incur a <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;brief</span> global cooldown. Each ability grants a <i>Stance</i> that empowers his next two basic attacks.',
      'Periodically, after <b>Udyr</b> enters a <i>Stance</i>, he can cast it again to <i>Awaken</i> it: empowering the <i>Stance</i> with an additional effect.',
      '<span class="template_sbc"><b>Innate - Monk Training:</b></span> After casting any of his abilities, <i>Udyr\'s</i> next two basic attacks gain <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">attack speed</span></span> and reduce <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<i>Awakened Spirit\'s</i></span> cooldown.',
    ],
    description: [
      {
        icon: '/wiki/images/Udyr_Bridge_Between.png',
        description:
          'Innate - Awakened Spirit: Udyr has no ultimate ability and instead has 4 basic abilities that each incur a  1.5-second global cooldown when cast. Each ability grants a Stance that empowers his next two basic attacks, and switching Stances will replace the empowered attacks from the previous Stance.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Awakened Spirit:</b></span> <b>Udyr</b> has no <a href="/wiki/Champion_ability" title="Champion ability">ultimate ability</a> and instead has 4 <a href="/wiki/Champion_ability" title="Champion ability">basic abilities</a> that each incur a <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Affected by ability haste">1.<small>5</small>-second global cooldown</span></span> when cast. Each ability grants a <i>Stance</i> that empowers his next two basic attacks, and switching <i>Stances</i> will replace the empowered attacks from the previous <i>Stance</i>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Innate - Awakened Spirit:',
            raw: 'Udyr has no ultimate ability and instead has 4 basic abilities that each incur a  1.5-second global cooldown when cast',
            damagetype: 'None',
            values: 4,
            units: 'total_ad',
            unitsText:
              'has no ultimate ability and instead has 4 basic abilities that each incur a  1.5-second global cooldown when cast',
            pre: 'Udyr has no ultimate ability and instead has 4 basic abilities that each incur a  1.5-second global cooldown when cast',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Periodically, after Udyr enters a Stance, he can cast it again at no cost after 0.25 seconds to Awaken it, refreshing the cooldown and empowering the Stance with an additional effect.This effect is placed on cooldown at the start of the game.',
        descriptionHTML:
          'Periodically, after <b>Udyr</b> enters a <i>Stance</i>, he can cast it again at no cost after 0.<small>25</small> seconds to <i>Awaken</i> it, refreshing the cooldown and empowering the <i>Stance</i> with an additional effect.<br>This effect is placed on cooldown at the start of the game.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Udyr_Bridge_Between_2.png',
        description:
          "Innate - Monk Training: After casting an ability, Udyr empowers his next two basic attacks within 4 seconds to gain  30% bonus attack speed and refund 5% of Awakened Spirit's total cooldown, though not if the remaining cooldown is less than 1 second.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Monk Training:</b></span> After casting an ability, <b>Udyr</b> empowers his next two <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> within 4 seconds to gain <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">30% <b>bonus</b> attack speed</span></span> and refund 5% of <i>Awakened Spirit\'s</i> <b>total</b> cooldown, though not if the remaining cooldown is less than 1 second.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate - Monk Training:',
            raw: "After casting an ability, Udyr empowers his next two basic attacks within 4 seconds to gain  30% bonus attack speed and refund 5% of Awakened Spirit's total cooldown, though not if the remaining cooldown is less than 1 second.",
            increasedStat: 'bonus_ad',
            values: 4,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'bonus attack speed and refund 5casting an ability, Udyr empowers his next two basic attacks within 4 seconds to gain  30',
            pre: "After casting an ability, Udyr empowers his next two basic attacks within 4 seconds to gain  30% bonus attack speed and refund 5% of Awakened Spirit's total cooldown, though not if the remaining cooldown is less than 1 second.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes:
      '* <span class="inline-image label-after buff-icon" style="display:inline;white-space:pre;" data-param="" data-buff="Cloud Dragon Soul" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cloud_Dragon_Soul" title="Cloud Dragon Soul\'s"><img alt="Cloud Dragon Soul\'s" src="/wiki/images/Cloud_Dragon_Soul_buff.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cloud_Dragon_Soul" class="mw-redirect" title="Cloud Dragon Soul">Cloud Dragon Soul\'s</a></span></span> increased movement speed buff is special cased to activate on all of <b>Udyr\'s</b> spell casts due to not having a traditional ultimate.\n<ul><li><i>Awakened Spirit\'s</i> cooldown is tracked by a secondary resource bar on his <a href="/wiki/Health_bar" title="Health bar">health bar</a>.</li>\n<li>Switching <i>Stances</i> will not cause any additional effects granted by the previous one to end prematurely.</li>\n<li>The global cooldown will not incur on abilities that are currently on a greater cooldown.</li>\n<li>The empowered attacks will not get consumed if they are parried.</li>\n<li><i>Awakened Spirit\'s</i> cast also activates <i>Monk Training</i> and empowers the next 2 attacks by the stances unawakened effects as well, overriding unused unawakened stance attacks.</li></ul>',
  },
  'Wilding Claw': {
    name: 'Wilding Claw',
    display_name: 'Wilding Claw',
    champion: 'Udyr',
    skill: 'Q',
    maxrank: 6,
    image: {
      full: 'UdyrQ.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 288,
      y: 144,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Lightning bounce radius">450</span>',
    cast_time: 'none',
    cost: '20',
    costtype: 'mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on-cast. Recasting refreshes the cooldown.">6</span>',
    blurb: [
      '<span class="template_sbc"><b>Claw Stance:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Udyr" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Udyr/LoL" title="Udyr"><img alt="Udyr" src="/wiki/images/Udyr_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Udyr/LoL" title="Udyr/LoL">Udyr</a></span></span> first two basic attacks deal bonus <span style="color: #FF8C34; white-space:normal">physical damage</span> equal to a portion of the <span style="color: #1F995C; white-space:normal">target\'s <b>maximum</b> health</span>. Additionally, he gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">attack speed</span></span> and bonus on-hit <span style="color: #FF8C34; white-space:normal">physical damage</span> for a few seconds.',
      '<span class="template_sbc"><b>Awaken:</b></span> The next two basic attacks release a chain of lighting that bounces to nearby enemies, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> equal to a portion of <span style="color: #1F995C; white-space:normal">their <b>maximum</b> health</span> and can bounce to the same enemy multiple times for a lack of targets. Additionally, he gains even greater <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">attack speed</span></span> for a few seconds.',
    ],
    description: [
      {
        icon: '/wiki/images/Udyr_Wilding_Claw.png',
        description:
          'Active - Stance: Udyr enters Claw Stance, empowering his next two basic attacks to gain  50 bonus range and deal bonus physical damage.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active - Stance:</b></span> <b>Udyr</b> enters <i>Claw Stance</i>, empowering his next two basic attacks to gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50</span> <b>bonus</b> range and deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active - Stance:',
            raw: 'Udyr enters Claw Stance, empowering his next two basic attacks to gain  50 bonus range and deal bonus physical damage.',
            increasedStat: 'bonus_ad',
            values: 5,
            units: '',
            unitsText:
              'enters Claw Stance, empowering his next two basic attacks to gain  50 bonus range and deal bonus physical damage.',
            pre: 'Udyr enters Claw Stance, empowering his next two basic attacks to gain  50 bonus range and deal bonus physical damage.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Physical Damage:',
            values:
              "3 / 4 / 5 / 6 / 7 / 8% (+ 4% per 100 bonus AD) of target's maximum health",
            valuesHTML:
              '<span style="color: #1F995C; white-space:normal">3 / 4 / 5 / 6 / 7 / 8% <span style="color:orange; white-space:normal">(+&nbsp;4% per 100 <b>bonus</b> AD)</span> of target\'s <b>maximum</b> health</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Bonus Physical Damage:',
            raw: "3 / 4 / 5 / 6 / 7 / 8% (+ 4% per 100 bonus AD) of target's maximum health",
            healType: 'PhysicalVamp',
            values: [3, 4, 5, 6, 7, 8],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: '3 / 4 / 5 / 6 / 7 / 8%',
            post: "of target's maximum health",
            children: [
              {
                values: 4,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'per 100 bonus AD',
                pre: '+ 4% per 100 bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Additionally, Udyr gains bonus attack speed and deals bonus physical damage  on-hit for 4 seconds.',
        descriptionHTML:
          'Additionally, <b>Udyr</b> gains <span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span> and deals <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> for 4 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Additionally, Udyr gains bonus attack speed and deals bonus physical damage  on-hit for 4 seconds.',
            increasedStat: 'bonus_ad',
            values: 4,
            units: '',
            unitsText:
              'Udyr gains bonus attack speed and deals bonus physical damage  on-hit for 4 seconds.',
            pre: 'Additionally, Udyr gains bonus attack speed and deals bonus physical damage  on-hit for 4 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Attack Speed:',
            values: '20 / 32 / 44 / 56 / 68 / 80%',
            valuesHTML: '20 / 32 / 44 / 56 / 68 / 80%',
          },
          {
            name: 'Bonus Physical Damage On-Hit:',
            values: '5 / 11 / 17 / 23 / 29 / 35 (+ 25% bonus AD)',
            valuesHTML:
              '5 / 11 / 17 / 23 / 29 / 35 <span style="color:orange; white-space:normal">(+&nbsp;25% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '20 / 32 / 44 / 56 / 68 / 80%',
            values: [20, 32, 44, 56, 68, 80],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 32 / 44 / 56 / 68 / 80%',
          },
          {
            effectType: 'Damage',
            name: 'Bonus Physical Damage On-Hit:',
            raw: '5 / 11 / 17 / 23 / 29 / 35 (+ 25% bonus AD)',
            damagetype: 'Physical',
            values: [5, 11, 17, 23, 29, 35],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 11 / 17 / 23 / 29 / 35',
            children: [
              {
                values: 25,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 25% bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Recast - Awaken: Udyr gains an additional 20% − 70% (based on level) bonus attack speed. The empowered attacks deal an additional 2% − 4% (based on level) (+ 2% per 100 bonus AD) of target's maximum health  bonus physical damage. Udyr's next two basic attacks in any Stance are empowered to strike with lightning 6 times, dealing  bonus magic damage equal to 1.5% − 3% (based on level) (+ 0.8% per 100 AP) of the target's maximum health per hit, chaining to up to 3 nearby  visible enemies and being able to hit the same target multiple times. This deals a minumum of 40 − 160 (based on level) against  minions and is capped at 20 (+ 100% bonus AD) (+ 50% AP) against  monsters.",
        descriptionHTML:
          '<span class="template_sbc"><b>Recast - Awaken:</b></span> <b>Udyr</b> gains an additional <span style="color:orangered; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="20;" data-finish="70;" data-bot_values="20;22.94;25.88;28.82;31.76;34.71;37.65;40.59;43.53;46.47;49.41;52.35;55.29;58.24;61.18;64.12;67.06;70" data-top_values="" data-bot_key="%">20% − 70% (based on level)</span> <b>bonus</b> attack speed</span>. The empowered attacks deal an additional <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="2;" data-finish="4;" data-bot_values="2;2.12;2.24;2.35;2.47;2.59;2.71;2.82;2.94;3.06;3.18;3.29;3.41;3.53;3.65;3.76;3.88;4" data-top_values="" data-bot_key="%">2% − 4% (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;2% per 100 <b>bonus</b> AD)</span> of target\'s <b>maximum</b> health</span> <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike physical icon.png" src="/wiki/images/Critical_strike_physical_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike"><span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span></span>. <b>Udyr\'s</b> next two basic attacks in any <i>Stance</i> are empowered to strike with lightning 6 times, dealing <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike"><span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span></span> equal to <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="1.5;" data-finish="3;" data-bot_values="1.5;1.59;1.68;1.76;1.85;1.94;2.03;2.12;2.21;2.29;2.38;2.47;2.56;2.65;2.74;2.82;2.91;3" data-top_values="" data-bot_key="%">1.<small>5</small>% − 3% (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;0.<small>8</small>% per 100 AP)</span> <span style="color: #1F995C; white-space:normal">of the target\'s <b>maximum</b> health</span> per hit, chaining to up to 3 nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemies and being able to hit the same target multiple times. This deals a minumum of <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="40;" data-finish="160;" data-bot_values="40;47.06;54.12;61.18;68.24;75.29;82.35;89.41;96.47;103.53;110.59;117.65;124.71;131.76;138.82;145.88;152.94;160" data-top_values="">40 − 160 (based on level)</span> against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and is capped at 20 <span style="color:orange; white-space:normal">(+&nbsp;100% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span> against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Recast - Awaken:',
            raw: 'Udyr gains an additional 20% − 70% (based on level) bonus attack speed',
            increasedStat: 'bonus_ad',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            units: '',
            unitsText: 'bonus attack speed',
            pre: 'Udyr gains an additional 20% − 70%',
            post: 'bonus attack speed',
          },
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: "The empowered attacks deal an additional 2% − 4% (based on level) (+ 2% per 100 bonus AD) of target's maximum health  bonus physical damage",
            healType: 'PhysicalVamp',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health  bonus physical damage",
            pre: 'The empowered attacks deal an additional 2% − 4%',
            post: "of target's maximum health  bonus physical damage",
            children: [
              {
                values: 2,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'per 100 bonus AD',
                pre: '+ 2% per 100 bonus AD',
              },
            ],
          },
          {
            effectType: 'Heal',
            name: 'Line 3:',
            raw: "Udyr's next two basic attacks in any Stance are empowered to strike with lightning 6 times, dealing  bonus magic damage equal to 1.5% − 3% (based on level) (+ 0.8% per 100 AP) of the target's maximum health per hit, chaining to up to 3 nearby  visible enemies and being able to hit the same target multiple times",
            healType: 'OutgoingHeals',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'target',
            units: 'maximum_hp',
            unitsText:
              "of the target's maximum health per hit, chaining to up to 3 nearby  visible enemies and being able to hit the same target multiple times",
            pre: "Udyr's next two basic attacks in any Stance are empowered to strike with lightning 6 times, dealing  bonus magic damage equal to 1.5% − 3%",
            post: "of the target's maximum health per hit, chaining to up to 3 nearby  visible enemies and being able to hit the same target multiple times",
            children: [
              {
                values: 0.8,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 0.8% per 100 AP',
              },
            ],
          },
          {
            effectType: 'Gain',
            name: 'Line 4:',
            raw: 'This deals a minumum of 40 − 160 (based on level) against  minions and is capped at 20 (+ 100% bonus AD) (+ 50% AP) against  monsters.',
            increasedStat: 'total_ap',
            values: [
              40, 47.06, 54.12, 61.18, 68.24, 75.29, 82.35, 89.41, 96.47,
              103.53, 110.59, 117.65, 124.71, 131.76, 138.82, 145.88, 152.94,
              160,
            ],
            basedOn: 'level',
            units: '',
            unitsText: 'against  minions and is capped at 20',
            pre: 'This deals a minumum of 40 − 160',
            post: 'against  minions and is capped at 20',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 100% bonus AD',
              },
              {
                values: 50,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 50% AP',
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
    damagetype:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Physical damage"><a href="/wiki/Physical_damage" title="Physical damage"><img alt="Attack damage.png" src="/wiki/images/Attack_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Physical_damage" title="Physical damage">Physical</a></span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Magic damage"><a href="/wiki/Magic_damage" title="Magic damage"><img alt="Magic damage.png" src="/wiki/images/Magic_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Magic_damage" title="Magic damage">Magic</a></span>',
    spelleffects: 'special',
    spellshield: 'Special',
    projectile: 'true',
    notes:
      '* Deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell damage"><a href="/wiki/Damage" title="Damage"><img alt="Disintegrate.png" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">spell damage</a></span> to the primary target and applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span> on the lightning strikes.\n<ul><li>The lightning strikes can deal up to <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="9;" data-finish="18;" data-bot_values="9;9.53;10.06;10.59;11.12;11.65;12.18;12.71;13.24;13.76;14.29;14.82;15.35;15.88;16.41;16.94;17.47;18" data-top_values="" data-bot_key="%">9% − 18% (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;3.<small>6</small>% per 100 AP)</span> <span style="color: #1F995C; white-space:normal">of the target\'s <b>maximum</b> health</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> against an isolated target.</li>\n<li>The lightning strikes can stack if the empowered attacks are each used on the same target, with the strikes from each attack occurring all at the same time.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will only block an empowered attack\'s application of the lightning strikes from an <i>Awakened</i> cast.</li>\n<li>The empowered attacks will not trigger nor be consumed if they hit a structure or ward or are parried.</li>\n<li>Maximum single target damage while using both unawakened <i>Wilding Claw</i> + 2 auto attacks + awakened <i>Wilding Claw</i> + 2 auto attacks: <span style="color: #1F995C; white-space:normal">40% <span style="color:orange; white-space:normal">(+&nbsp;24% per 100 <b>bonus</b> AD)</span> of target\'s <b>maximum</b> health</span> + <span style="color:orange; white-space:normal">400% AD</span> + 140 <span style="color:orange; white-space:normal">+&nbsp;120% <b>bonus</b> AD</span> physical damage and <span style="color: #1F995C; white-space:normal">36% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;7.2% per 100 <b>bonus</b> AP)</span> of target\'s <b>maximum</b> health</span> magic damage.</li></ul>',
  },
  'Iron Mantle': {
    name: 'Iron Mantle',
    display_name: 'Iron Mantle',
    champion: 'Udyr',
    skill: 'W',
    maxrank: 6,
    image: {
      full: 'UdyrW.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 336,
      y: 144,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="40;" data-finish="23;" data-bot_values="40;39;38;37;36;35;34;33;32;31;30;29;28;27;26;25;24;23" data-top_values="">40 − 23 (based on level)</span>',
    costtype: 'mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on-cast. Recasting refreshes the cooldown.">6</span>',
    blurb: [
      '<span class="template_sbc"><b>Mantle Stance:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Udyr" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Udyr/LoL" title="Udyr"><img alt="Udyr" src="/wiki/images/Udyr_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Udyr/LoL" title="Udyr/LoL">Udyr</a></span></span> gains a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> and his next two basic attacks gain <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #CE1C42; white-space:normal">life steal</span></span> and <span style="color: #60E08F; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;heal</span></span> him.',
      '<span class="template_sbc"><b>Awaken:</b></span> Gain an even greater shield. The next two basic attack\'s <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #CE1C42; white-space:normal">life steal</span></span> and <span style="color: #60E08F; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;healing</span></span> is also greatly increased.',
    ],
    description: [
      {
        icon: '/wiki/images/Udyr_Iron_Mantle.png',
        description:
          'Active - Stance: Udyr enters Mantle Stance, empowering his next two basic attacks to gain  life steal and  heal him for 1.2% of his maximum health (+ 8% AP) on-hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active - Stance:</b></span> <b>Udyr</b> enters <i>Mantle Stance</i>, empowering his next two basic attacks to gain <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> him for <span style="color: #1F995C; white-space:normal">1.<small>2</small>% of his <b>maximum</b> health</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;8% AP)</span> on-hit.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Active - Stance:',
            raw: 'Udyr enters Mantle Stance, empowering his next two basic attacks to gain  life steal and  heal him for 1.2% of his maximum health (+ 8% AP) on-hit.',
            healType: 'BonusHealth',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'on-hit.',
            pre: 'Udyr enters Mantle Stance, empowering his next two basic attacks to gain  life steal and  heal him for 1.2% of his maximum health',
            post: 'on-hit.',
            children: [
              {
                values: 8,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 8% AP',
              },
            ],
          },
        ],
        leveling: [
          {
            name: 'Life Steal:',
            values: '15 / 16 / 17 / 18 / 19 / 20%',
            valuesHTML: '15 / 16 / 17 / 18 / 19 / 20%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Life Steal:',
            raw: '15 / 16 / 17 / 18 / 19 / 20%',
            values: [15, 16, 17, 18, 19, 20],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 16 / 17 / 18 / 19 / 20%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Additionally, Udyr grants himself a  shield for 4 seconds.',
        descriptionHTML:
          'Additionally, <b>Udyr</b> grants himself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 4 seconds.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Line 1:',
            raw: 'Additionally, Udyr grants himself a  shield for 4 seconds.',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: 4,
            user: 'none',
            units: '',
            unitsText: 'Udyr grants himself a  shield for 4 seconds.',
            pre: 'Additionally, Udyr grants himself a  shield for 4 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Shield Strength:',
            values:
              '45 / 60 / 75 / 90 / 105 / 120 (+ 40% AP) (+ 2 / 2.3 / 2.6 / 2.9 / 3.2 / 3.5% maximum health)',
            valuesHTML:
              '45 / 60 / 75 / 90 / 105 / 120 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40% AP)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;2 / 2.<small>3</small> / 2.<small>6</small> / 2.<small>9</small> / 3.<small>2</small> / 3.<small>5</small>% <b>maximum</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Shield Strength:',
            raw: '45 / 60 / 75 / 90 / 105 / 120 (+ 40% AP) (+ 2 / 2.3 / 2.6 / 2.9 / 3.2 / 3.5% maximum health)',
            healType: 'BonusHealth',
            values: [45, 60, 75, 90, 105, 120],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '45 / 60 / 75 / 90 / 105 / 120',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 40% AP',
              },
              {
                values: [2, 2.3, 2.6, 2.9, 3.2, 3.5],
                valuesIsPercent: true,
                units: 'maximum_hp',
                unitsText: 'maximum health',
                pre: '+ 2 / 2.3 / 2.6 / 2.9 / 3.2 / 3.5% maximum health',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Recast - Awaken: Udyr increases the  shield's strength, stacking with the remaining shield from the first cast, and  heals every 0.25 seconds over the next 4 seconds, as well as causes the empowered attacks to instead gain doubled  life steal and  heal him for 2.4% of his maximum health (+ 16% AP) on-hit.",
        descriptionHTML:
          '<span class="template_sbc"><b>Recast - Awaken:</b></span> <b>Udyr</b> increases the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield\'s</a></span> strength, stacking with the remaining shield from the first cast, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> every 0.<small>25</small> seconds over the next 4 seconds, as well as causes the empowered attacks to instead gain doubled <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> him for <span style="color: #1F995C; white-space:normal">2.<small>4</small>% of his <b>maximum</b> health</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;16% AP)</span> on-hit.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Recast - Awaken:',
            raw: "Udyr increases the  shield's strength, stacking with the remaining shield from the first cast, and  heals every 0.25 seconds over the next 4 seconds, as well as causes the empowered attacks to instead gain doubled  life steal and  heal him for 2.4% of his maximum health (+ 16% AP) on-hit.",
            healType: 'BonusHealth',
            values: 0,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'on-hit.',
            pre: "Udyr increases the  shield's strength, stacking with the remaining shield from the first cast, and  heals every 0.25 seconds over the next 4 seconds, as well as causes the empowered attacks to instead gain doubled  life steal and  heal him for 2.4% of his maximum health",
            post: 'on-hit.',
            children: [
              {
                values: 16,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 16% AP',
              },
            ],
          },
        ],
        leveling: [
          {
            name: 'Increased Shield Strength:',
            values:
              '20 − 150 (based on level) (+ 45 / 60 / 75 / 90 / 105 / 120) (+ 65% AP) (+ 8% maximum health)',
            valuesHTML:
              '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="20;" data-finish="150;" data-bot_values="20;27.65;35.29;42.94;50.59;58.24;65.88;73.53;81.18;88.82;96.47;104.12;111.76;119.41;127.06;134.71;142.35;150" data-top_values="">20 − 150 (based on level)</span> (+ 45 / 60 / 75 / 90 / 105 / 120) <span style="color: #7A6DFF; white-space:normal">(+&nbsp;65% AP)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;8% <b>maximum</b> health)</span>',
          },
          {
            name: 'Total Healing:',
            values:
              '10 − 75 (based on level) (+ 22.5 / 30 / 37.5 / 45 / 52.5 / 60) (+ 32.5% AP) (+ 4% maximum health)',
            valuesHTML:
              '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="10;" data-finish="75;" data-bot_values="10;13.82;17.65;21.47;25.29;29.12;32.94;36.76;40.59;44.41;48.24;52.06;55.88;59.71;63.53;67.35;71.18;75" data-top_values="">10 − 75 (based on level)</span> (+ 22.<small>5</small> / 30 / 37.<small>5</small> / 45 / 52.<small>5</small> / 60) <span style="color: #7A6DFF; white-space:normal">(+&nbsp;32.<small>5</small>% AP)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;4% <b>maximum</b> health)</span>',
          },
          {
            name: 'Increased Life Steal:',
            values: '30 / 32 / 34 / 36 / 38 / 40%',
            valuesHTML: '30 / 32 / 34 / 36 / 38 / 40%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Increased Shield Strength:',
            raw: '20 − 150 (based on level) (+ 45 / 60 / 75 / 90 / 105 / 120) (+ 65% AP) (+ 8% maximum health)',
            healType: 'BonusHealth',
            values: [
              20, 27.65, 35.29, 42.94, 50.59, 58.24, 65.88, 73.53, 81.18, 88.82,
              96.47, 104.12, 111.76, 119.41, 127.06, 134.71, 142.35, 150,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 − 150',
            children: [
              {
                values: [45, 60, 75, 90, 105, 120],
                user: 'none',
                units: '',
                unitsText: '',
                pre: '+ 45 / 60 / 75 / 90 / 105 / 120',
              },
              {
                values: 65,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 65% AP',
              },
              {
                values: 8,
                valuesIsPercent: true,
                units: 'maximum_hp',
                unitsText: 'maximum health',
                pre: '+ 8% maximum health',
              },
            ],
          },
          {
            effectType: 'Heal',
            name: 'Total Healing:',
            raw: '10 − 75 (based on level) (+ 22.5 / 30 / 37.5 / 45 / 52.5 / 60) (+ 32.5% AP) (+ 4% maximum health)',
            healType: 'BonusHealth',
            values: [
              10, 13.82, 17.65, 21.47, 25.29, 29.12, 32.94, 36.76, 40.59, 44.41,
              48.24, 52.06, 55.88, 59.71, 63.53, 67.35, 71.18, 75,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 − 75',
            children: [
              {
                values: [22.5, 30, 37.5, 45, 52.5, 60],
                user: 'none',
                units: '',
                unitsText: '',
                pre: '+ 22.5 / 30 / 37.5 / 45 / 52.5 / 60',
              },
              {
                values: 32.5,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 32.5% AP',
              },
              {
                values: 4,
                valuesIsPercent: true,
                units: 'maximum_hp',
                unitsText: 'maximum health',
                pre: '+ 4% maximum health',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Increased Life Steal:',
            raw: '30 / 32 / 34 / 36 / 38 / 40%',
            values: [30, 32, 34, 36, 38, 40],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 32 / 34 / 36 / 38 / 40%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'Healing on-hit is reduced to 60% against  minions.',
        descriptionHTML:
          'Healing <a href="/wiki/On-hit" class="mw-redirect" title="On-hit">on-hit</a> is reduced to 60% against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: 'Healing on-hit is reduced to 60% against  minions.',
            healType: 'DrainEffect',
            values: 6,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'against  minions.on-hit is reduced to 60',
            pre: 'Healing on-hit is reduced to 60% against  minions.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    spelleffects: 'spell',
    notes:
      '* The empowered attacks apply <a href="/wiki/Spell_effects" class="mw-redirect" title="Spell effects">spell effects</a> to the target.\n<ul><li>The empowered attacks will not trigger nor be consumed if they hit a structure or ward or are parried.</li></ul>',
  },
  'Blazing Stampede': {
    name: 'Blazing Stampede',
    display_name: 'Blazing Stampede',
    champion: 'Udyr',
    skill: 'E',
    maxrank: 6,
    image: {
      full: 'UdyrE.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 384,
      y: 144,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="40;" data-finish="23;" data-bot_values="40;39;38;37;36;35;34;33;32;31;30;29;28;27;26;25;24;23" data-top_values="">40 − 23 (based on level)</span>',
    costtype: 'mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on-cast. Recasting refreshes the cooldown.">6</span>',
    ontargetcdstatic:
      '6 / 5.<small>6</small> / 5.<small>2</small> / 4.<small>8</small> / 4.<small>4</small> / 4',
    blurb: [
      '<span class="template_sbc"><b>Stampede Stance:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Udyr" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Udyr/LoL" title="Udyr"><img alt="Udyr" src="/wiki/images/Udyr_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Udyr/LoL" title="Udyr/LoL">Udyr</a></span></span> gains a burst of <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">movement speed</span></span> that decays over a few seconds. His attacks in this stance briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> his target, but this cannot affect them more than once every few seconds.',
      '<span class="template_sbc"><b>Awaken:</b></span> <b>Udyr</b> gains an even greater burst of <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">movement speed</span></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">cc-immunity</a></span> for a brief duration.',
      '<span class="template_sbc"><b><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cc-immunity</span></b></span>: <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">Crowd control</a></span> cannot be applied during this time.',
    ],
    description: [
      {
        icon: '/wiki/images/Udyr_Blazing_Stampede.png',
        description:
          'Active - Stance: Udyr enters Stampede Stance, empowering his basic attacks to have an  uncancellable windup and  pounce on the target to  stun them for 0.75 seconds. This cannot affect the same target more than once every few seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active - Stance:</b></span> <b>Udyr</b> enters <i>Stampede Stance</i>, empowering his basic attacks to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span> and <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="to 75 units closer than attack range, if Udyr is not closer already (pending for test)"><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">pounce</a></span> on the target</span> to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> them for 0.<small>75</small> seconds. This cannot affect the same target more than once every few seconds.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Additionally, Udyr becomes  ghosted and gains  bonus movement speed for 4 seconds, which decays to 30% effectiveness over 1.5 seconds.',
        descriptionHTML:
          'Additionally, <b>Udyr</b> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for 4 seconds, which decays to 30% effectiveness over 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Additionally, Udyr becomes  ghosted and gains  bonus movement speed for 4 seconds, which decays to 30% effectiveness over 1.5 seconds.',
            values: 4,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'effectiveness over 1.5 seconds.Udyr becomes  ghosted and gains  bonus movement speed for 4 seconds, which decays to 30',
            pre: 'Additionally, Udyr becomes  ghosted and gains  bonus movement speed for 4 seconds, which decays to 30% effectiveness over 1.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Movement Speed:',
            values: '30 / 37 / 44 / 51 / 58 / 65%',
            valuesHTML: '30 / 37 / 44 / 51 / 58 / 65%',
          },
          {
            name: 'Decayed Bonus Movement Speed:',
            values: '9 / 11.1 / 13.2 / 15.3 / 17.4 / 19.5%',
            valuesHTML:
              '9 / 11.<small>1</small> / 13.<small>2</small> / 15.<small>3</small> / 17.<small>4</small> / 19.<small>5</small>%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '30 / 37 / 44 / 51 / 58 / 65%',
            values: [30, 37, 44, 51, 58, 65],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 37 / 44 / 51 / 58 / 65%',
          },
          {
            effectType: 'Unique',
            name: 'Decayed Bonus Movement Speed:',
            raw: '9 / 11.1 / 13.2 / 15.3 / 17.4 / 19.5%',
            values: [9, 11.1, 13.2, 15.3, 17.4, 19.5],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '9 / 11.1 / 13.2 / 15.3 / 17.4 / 19.5%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Recast - Awaken: Udyr gains  75 bonus attack range and an additional 30% − 40% (based on level) bonus movement speed. He also gains  immunity to crowd control for 1.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast - Awaken:</b></span> <b>Udyr</b> gains <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;75</span> <b>bonus</b> attack range and an additional <span style="color: #F5EE99; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="30;" data-finish="40;" data-bot_values="30;30.59;31.18;31.76;32.35;32.94;33.53;34.12;34.71;35.29;35.88;36.47;37.06;37.65;38.24;38.82;39.41;40" data-top_values="" data-bot_key="%">30% − 40% (based on level)</span> <b>bonus</b> movement speed</span>. He also gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">immunity to crowd control</a></span> for 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Recast - Awaken:',
            raw: 'Udyr gains  75 bonus attack range and an additional 30% − 40% (based on level) bonus movement speed',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'bonus movement speed',
            pre: 'Udyr gains  75 bonus attack range and an additional 30% − 40%',
            post: 'bonus movement speed',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'He also gains  immunity to crowd control for 1.5 seconds.',
            values: 1,
            user: 'none',
            units: '',
            unitsText: 'also gains  immunity to crowd control for 1.5 seconds.',
            pre: 'He also gains  immunity to crowd control for 1.5 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self, Enemies',
    spellshield: true,
    notes:
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will prevent the immunity to the stun from being applied.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup>\n<ul><li><b>Udyr</b> cannot dash while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span>, but he will still declare the empowered attack.</li>\n<li>The empowered attack will still apply its effects even if the dash is interrupted.</li>\n<li>The empowered attacks will not trigger nor be consumed if they hit a structure or ward or are parried.\n<ul><li>The immunity to the stun is not applied in any case.</li></ul></li></ul>',
  },
  'Wingborne Storm': {
    name: 'Wingborne Storm',
    display_name: 'Wingborne Storm',
    champion: 'Udyr',
    skill: 'R',
    maxrank: 6,
    image: {
      full: 'UdyrR.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 432,
      y: 144,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Storm and empowered attack radius, center to edge">370</span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Storm lock-on radius">1300</span>',
    speed:
      '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_label="Move Speed" data-displayformula="The spawned unit has 350 base speed and gains a -400 to -100 MS modifier to its raw MS based on Udyr\'s champion level at time of the Awaken cast, scaling linearly. The final MS of the unit is the raw MS after movement speed soft caps. The storm\'s travel speed does not scale past level 18 in Ultra Rapid Fire game mode." data-bot_values="109.5;109.68;109.85;111.47;120.29;129.12;137.94;146.76;155.59;164.41;173.24;182.06;190.88;199.71;208.53;217.35;232.35;250" data-top_values="">109.<small>5</small> − 250 (based on level)</span>',
    cast_time: 'none',
    cost: '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="40;" data-finish="23;" data-bot_values="40;39;38;37;36;35;34;33;32;31;30;29;28;27;26;25;24;23" data-top_values="">40 − 23 (based on level)</span>',
    costtype: 'mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on-cast. Recasting refreshes the cooldown.">6</span>',
    blurb: [
      '<span class="template_sbc"><b>Storm Stance:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Udyr" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Udyr/LoL" title="Udyr"><img alt="Udyr" src="/wiki/images/Udyr_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Udyr/LoL" title="Udyr/LoL">Udyr</a></span></span> summons a blizzard around himself for a few seconds that continuously deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> enemies inside. His next two basic attacks each cause the blizzard to deal a burst of additional <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies inside it.',
      '<span class="template_sbc"><b>Awaken:</b></span> <b>Udyr</b> unleashes the blizzard to seek out the enemy, prioritizing the target of <b>Udyr\'s</b> attacks. It also deals increased <span style="color: #00B0F0; white-space:normal">magic damage</span> equal to a portion of <span style="color: #1F995C; white-space:normal">their <b>maximum</b> health</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Udyr_Wingborne_Storm.png',
        description:
          'Active - Stance: Udyr enters Storm Stance, empowering his next two basic attacks to deal 10 − 30 (based on level) (+ 30% AP) magic damage to nearby enemies.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active - Stance:</b></span> <b>Udyr</b> enters <i>Storm Stance</i>, empowering his next two basic attacks to deal <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="10;" data-finish="30;" data-bot_values="10;11.18;12.35;13.53;14.71;15.88;17.06;18.24;19.41;20.59;21.76;22.94;24.12;25.29;26.47;27.65;28.82;30" data-top_values="">10 − 30 (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span> <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active - Stance:',
            raw: 'Udyr enters Storm Stance, empowering his next two basic attacks to deal 10 − 30 (based on level) (+ 30% AP) magic damage to nearby enemies.',
            damagetype: 'Magic',
            values: [
              10, 11.18, 12.35, 13.53, 14.71, 15.88, 17.06, 18.24, 19.41, 20.59,
              21.76, 22.94, 24.12, 25.29, 26.47, 27.65, 28.82, 30,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'magic damage to nearby enemies.',
            pre: 'Udyr enters Storm Stance, empowering his next two basic attacks to deal 10 − 30',
            post: 'magic damage to nearby enemies.',
            children: [
              {
                values: 30,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 30% AP',
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
          'Additionally, Udyr summons a blizzard around himself for 4 seconds that deals magic damage every 0.5 seconds to nearby enemies and  slows them.  Minions take 50 / 60 / 70 / 80% (based on level) damage.',
        descriptionHTML:
          'Additionally, <b>Udyr</b> summons a blizzard around himself for 4 seconds that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>5</small> seconds to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them. <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">Minions</a></span> take <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="50;1" data-finish="80;16" data-bot_values="50;60;70;80" data-top_values="1;6;11;16" data-bot_key="%">50 / 60 / 70 / 80% (based on level)</span> damage.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Additionally, Udyr summons a blizzard around himself for 4 seconds that deals magic damage every 0.5 seconds to nearby enemies and  slows them',
            damagetype: 'Magic',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'Udyr summons a blizzard around himself for 4 seconds that deals magic damage every 0.5 seconds to nearby enemies and  slows them',
            pre: 'Additionally, Udyr summons a blizzard around himself for 4 seconds that deals magic damage every 0.5 seconds to nearby enemies and  slows them',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: ' Minions take 50 / 60 / 70 / 80% (based on level) damage.',
            damagetype: 'None',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'damage.',
            pre: 'Minions take 50 / 60 / 70 / 80%',
            post: 'damage.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage per Tick:',
            values: '10 / 19 / 28 / 37 / 46 / 55 (+ 17.5% AP)',
            valuesHTML:
              '10 / 19 / 28 / 37 / 46 / 55 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;17.<small>5</small>% AP)</span>',
          },
          {
            name: 'Slow:',
            values: '15 / 18 / 21 / 24 / 27 / 30%',
            valuesHTML: '15 / 18 / 21 / 24 / 27 / 30%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage per Tick:',
            raw: '10 / 19 / 28 / 37 / 46 / 55 (+ 17.5% AP)',
            damagetype: 'Magic',
            values: [10, 19, 28, 37, 46, 55],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 19 / 28 / 37 / 46 / 55',
            children: [
              {
                values: 17.5,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 17.5% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '15 / 18 / 21 / 24 / 27 / 30%',
            values: [15, 18, 21, 24, 27, 30],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 18 / 21 / 24 / 27 / 30%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Recast - Awaken: Udyr ends the blizzard if it is active and unleashes a glacial storm for 4 seconds that is able to move on its own, as well as causes the empowered attacks to instead deal their damage to enemies within that storm. The storm follows the closest nearby  visible target and applies the same effects but deals  bonus magic damage equal to「 1% − 2% (based on level) (+ 0.4375% per 100 AP) of the target's maximum health per tick, capped at 10 − 50 (based on level) 」「 8% − 16% (based on level) (+ 3.5% per 100 AP) of the target's maximum health over the duration, capped at 80 − 400 (based on level) 」against  monsters, and  slows by an additional 5%.",
        descriptionHTML:
          '<span class="template_sbc"><b>Recast - Awaken:</b></span> <b>Udyr</b> ends the blizzard if it is active and unleashes a glacial storm for 4 seconds that is able to move on its own, as well as causes the empowered attacks to instead deal their damage to enemies within that storm. The storm follows the closest nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> target and applies the same effects but deals <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike"><span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span></span> equal to<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="1;" data-finish="2;" data-bot_values="1;1.06;1.12;1.18;1.24;1.29;1.35;1.41;1.47;1.53;1.59;1.65;1.71;1.76;1.82;1.88;1.94;2" data-top_values="" data-bot_key="%">1% − 2% (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;0.<small>4375</small>% per 100 AP)</span> <span style="color: #1F995C; white-space:normal">of the target\'s <b>maximum</b> health</span> per tick, capped at <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="10;" data-finish="50;" data-bot_values="10;12.35;14.71;17.06;19.41;21.76;24.12;26.47;28.82;31.18;33.53;35.88;38.24;40.59;42.94;45.29;47.65;50" data-top_values="">10 − 50 (based on level)</span>&nbsp;」</span><span class="flipText2">「&nbsp;<span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="8;" data-finish="16;" data-bot_values="8;8.47;8.94;9.41;9.88;10.35;10.82;11.29;11.76;12.24;12.71;13.18;13.65;14.12;14.59;15.06;15.53;16" data-top_values="" data-bot_key="%">8% − 16% (based on level)</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;3.<small>5</small>% per 100 AP)</span> <span style="color: #1F995C; white-space:normal">of the target\'s <b>maximum</b> health</span> over the duration, capped at <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="80;" data-finish="400;" data-bot_values="80;98.82;117.65;136.47;155.29;174.12;192.94;211.76;230.59;249.41;268.24;287.06;305.88;324.71;343.53;362.35;381.18;400" data-top_values="">80 − 400 (based on level)</span>&nbsp;」</span></span>against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> by an additional 5%.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Recast - Awaken:',
            raw: 'Udyr ends the blizzard if it is active and unleashes a glacial storm for 4 seconds that is able to move on its own, as well as causes the empowered attacks to instead deal their damage to enemies within that storm',
            damagetype: 'None',
            values: 4,
            units: 'total_ad',
            unitsText:
              'ends the blizzard if it is active and unleashes a glacial storm for 4 seconds that is able to move on its own, as well as causes the empowered attacks to instead deal their damage to enemies within that storm',
            pre: 'Udyr ends the blizzard if it is active and unleashes a glacial storm for 4 seconds that is able to move on its own, as well as causes the empowered attacks to instead deal their damage to enemies within that storm',
          },
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: "The storm follows the closest nearby  visible target and applies the same effects but deals  bonus magic damage equal to「 1% − 2% (based on level) (+ 0.4375% per 100 AP) of the target's maximum health per tick, capped at 10 − 50 (based on level) 」「 8% − 16% (based on level) (+ 3.5% per 100 AP) of the target's maximum health over the duration, capped at 80 − 400 (based on level) 」against  monsters, and  slows by an additional 5%.",
            healType: 'OutgoingHeals',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            units: 'total_ap',
            unitsText:
              "of the target's maximum health per tick, capped at 10 − 50",
            pre: 'The storm follows the closest nearby  visible target and applies the same effects but deals  bonus magic damage equal to「 1% − 2%',
            post: "of the target's maximum health per tick, capped at 10 − 50",
            children: [
              {
                values: 0.4375,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 0.4375% per 100 AP',
              },
              {
                values: 3.5,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 3.5% per 100 AP',
              },
            ],
          },
        ],
        leveling: [
          {
            name: 'Increased Slow:',
            values: '20 / 23 / 26 / 29 / 32 / 35%',
            valuesHTML: '20 / 23 / 26 / 29 / 32 / 35%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Increased Slow:',
            raw: '20 / 23 / 26 / 29 / 32 / 35%',
            values: [20, 23, 26, 29, 32, 35],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 23 / 26 / 29 / 32 / 35%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'The unleashed storm grants  sight of its surroundings and prioritizes following the last enemy Udyr has attacked while he is nearby, then enemy  champions, then non-champions, then Udyr.',
        descriptionHTML:
          'The unleashed storm grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of its <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Does not permeate through terrain or brush">surroundings</span> and prioritizes following the last enemy <b>Udyr</b> has attacked while he is nearby, then enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, then non-champions, then <b>Udyr</b>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self, Enemies',
    damagetype: 'magic',
    spelleffects: 'aoedot',
    spellshield: false,
    notes:
      '* The storm that <b>Udyr</b> surrounds himself with is independent from the unleashed storm.\n<ul><li><ul><li>He can still cast <i>Wingborne Storm</i> to surround himself with a storm while an unleashed storm from an <i>Awakened</i> cast is active.</li>\n<li>Using the <i>Awakened</i> cast ends the storm around <b>Udyr</b> if it is active and summons a separate storm that is able to move on its own.</li></ul></li>\n<li>The slow debuff has a duration equal to the storm\'s remaining duration and is removed immediately when the unit leaves the storm\'s area of effect.\n<ul><li>Units receive the debuff whenever they are in the storm, even after having it removed from leaving the area.</li></ul></li>\n<li>If the target <b>Udyr</b> has most recently attacked is invalid and there are no nearby enemies then the storm will follow him instead.\n<ul><li>The storm can follow <b>Udyr</b> regardless of how far away he is from it.</li></ul></li>\n<li>The storm will remain active even if <b>Udyr</b> dies. Any commands it was issued to follow a target will not be interrupted.</li>\n<li>The storm will follow its target even if they are not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span>, but only for up to 1 second.\n<ul><li>If it does not gain vision of its target within that time, it changes its target.</li></ul></li>\n<li>The storm is obstructed by terrain. If it encounters terrain, then it will automatically navigate its path towards the target.</li>\n<li>The empowered attacks will not trigger nor be consumed if they hit a structure or ward or are parried.</li></ul>',
  },
} satisfies { [skillName in string]: SkillData };
