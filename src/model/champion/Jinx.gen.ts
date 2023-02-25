import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Jinx';

export default {
  'Get Excited!': {
    name: 'Get Excited!',
    display_name: 'Get Excited!',
    champion: 'Jinx',
    skill: 'I',
    image: {
      full: 'Jinx_Passive.png',
      sprite: 'passive1.png',
      group: 'passive',
      x: 0,
      y: 96,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> Whenever <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jinx" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jinx/LoL" title="Jinx"><img alt="Jinx" src="/wiki/images/Jinx_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jinx/LoL" title="Jinx/LoL">Jinx</a></span></span> scores a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span>, or inhibitor shortly after damaging them, she gains a burst of <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">movement speed</span></span> for a few seconds.',
      'During this time, she also gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> and is allowed to exceed the attack speed cap.',
    ],
    description: [
      {
        icon: '/wiki/images/Get Excited!.png',
        description:
          'Innate: Whenever Jinx scores a  takedown against an enemy  champion, epic  monster,  turret, or inhibitor within 3 seconds of damaging them, she gains  175% bonus movement speed decaying over 6 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> Whenever <b>Jinx</b> scores a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span>, or <a href="/wiki/Inhibitor" title="Inhibitor">inhibitor</a> within 3 seconds of damaging them, she gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">175% <b>bonus</b> movement speed</span></span> decaying over 6 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate:',
            raw: ' Whenever Jinx scores a  takedown against an enemy  champion, epic  monster,  turret, or inhibitor within 3 seconds of damaging them, she gains  175% bonus movement speed decaying over 6 seconds.',
            values: 3,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'bonus movement speed decaying over 6 seconds.Jinx scores a  takedown against an enemy  champion, epic  monster,  turret, or inhibitor within 3 seconds of damaging them, she gains  175',
            pre: 'Whenever Jinx scores a  takedown against an enemy  champion, epic  monster,  turret, or inhibitor within 3 seconds of damaging them, she gains  175% bonus movement speed decaying over 6 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Additionally, she gains  25% total attack speed and is allowed to exceed the attack speed cap for the same duration.',
        descriptionHTML:
          'Additionally, she gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">25% <b>total</b> attack speed</span></span> and is allowed to exceed the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="normally 2.5 attacks per second">attack speed cap</span> for the same duration.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Additionally, she gains  25% total attack speed and is allowed to exceed the attack speed cap for the same duration.',
            increasedStat: 'total_ap',
            values: 2,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'total attack speed and is allowed to exceed the attack speed cap for the same duration.she gains  25',
            pre: 'Additionally, she gains  25% total attack speed and is allowed to exceed the attack speed cap for the same duration.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes:
      '* <b>Jinx\'s</b> <i>attack speed cap</i> is increased to 90.<small>0</small> for the duration, however this value is already beyond the technical limit for attack speed.\n<ul><li><b>Jinx</b> will still trigger <i>Get Excited</i> from killing a summoned <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rift_Herald" title="Rift Herald"><img alt="Rift Herald" src="/wiki/images/Rift_HeraldSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rift_Herald" class="mw-redirect" title="Rift Herald">Rift Herald</a></span></span>.</li>\n<li><b>Jinx</b> will fail to trigger <i>Get Excited</i> in the specific circumstance of killing <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Baron_Nashor" title="Baron Nashor"><img alt="Baron Nashor" src="/wiki/images/Baron_NashorSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Baron_Nashor" class="mw-redirect" title="Baron Nashor">Baron Nashor</a></span></span> while more than ~2500 distance away.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul>',
    yvideo: 'Jinx - Passive',
  },
  'Switcheroo!': {
    name: 'Switcheroo!',
    display_name: 'Switcheroo!',
    champion: 'Jinx',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'JinxQ.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 288,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Rocket splash radius">250</span>',
    cast_time: 'none',
    cost: '20',
    costtype:
      'Mana per attack with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jinx" data-ability="Switcheroo!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jinx/LoL#Switcheroo!" title="Fishbones"><img alt="Fishbones" src="/wiki/images/Jinx_Switcheroo%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jinx/LoL#Switcheroo!" title="Jinx/LoL">Fishbones</a></span></span>',
    static: '0.<small>9</small>',
    blurb: [
      '<span class="template_sbc"><b>Toggle:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jinx" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jinx/LoL" title="Jinx"><img alt="Jinx" src="/wiki/images/Jinx_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jinx/LoL" title="Jinx/LoL">Jinx</a></span></span> switches between Pow-Pow, her minigun, and Fishbones, her rocket launcher.',
      '<span class="template_sbc"><b><span class="inline-image label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jinx#Pow-Pow" title="Pow-Pow"><img alt="Pow-Pow" src="/wiki/images/Jinx_Pow-Pow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jinx#Pow-Pow" title="Jinx">Pow-Pow</a></span></span>:</b></span> Basic attacks with <b>Pow-Pow</b> generate stacks of <a href="https://static.wikia.nocookie.net/leagueoflegends/images/e/e8/Jinx_Rev%27d_up.png/revision/latest?cb=20171221042956" class="image"><img alt="Jinx Rev\'d up.png" src="/wiki/images/Jinx_Rev%27d_up.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <i>Rev\'d up</i> for a short time. Stacks expire one at a time.',
      '<span class="template_sbc"><b><span class="inline-image label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jinx#Fishbones" title="Fishbones"><img alt="Fishbones" src="/wiki/images/Jinx_Switcheroo%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jinx#Fishbones" title="Jinx">Fishbones</a></span></span>:</b></span> Basic attacks with <b>Fishbones</b> <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">cost mana</span></span> to deal <span style="color: #FF8C34; white-space:normal">increased physical damage</span> to the primary target as well as surrounding enemies. While using <b>Fishbones</b>, <i>Jinx</i> gains <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> range</span> but loses a portion of her <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>.',
      '<span class="template_sbc"><b>Rev\'d up:</b></span> For each stack, <b>Jinx</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>, with the first stack being twice as potent. Only the first attack after switching to <b>Fishbones</b> will benefit from <i>Rev\'d up</i>.',
    ],
    description: [
      {
        description:
          'Toggle: Jinx switches between  Pow-Pow, her minigun, and  Fishbones, her rocket launcher.',
        descriptionHTML:
          '<span class="template_sbc"><b>Toggle:</b></span> <b>Jinx</b> switches between <i><span class="inline-image label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jinx#Pow-Pow" title="Pow-Pow"><img alt="Pow-Pow" src="/wiki/images/Jinx_Pow-Pow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jinx#Pow-Pow" title="Jinx">Pow-Pow</a></span></span></i>, her minigun, and <i><span class="inline-image label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jinx#Fishbones" title="Fishbones"><img alt="Fishbones" src="/wiki/images/Jinx_Switcheroo%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jinx#Fishbones" title="Jinx">Fishbones</a></span></span></i>, her rocket launcher.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Pow-Pow.png',
        description:
          "Pow-Pow: Basic attacks with Pow-Pow generate a stack of  Rev'd up for 2.5 seconds, refreshing on subsequent attacks with Pow-Pow and stacking up to 3 times. Each stack of Rev'd up grants  bonus attack speed, with all stacks beyond the first one being 50% effective. Stacks expire by one when the duration ends.",
        descriptionHTML:
          '<span class="template_sbc"><b>Pow-Pow:</b></span> Basic attacks with <i>Pow-Pow</i> generate a <a href="/wiki/Stack" title="Stack">stack</a> of <a href="https://static.wikia.nocookie.net/leagueoflegends/images/e/e8/Jinx_Rev%27d_up.png/revision/latest?cb=20171221042956" class="image"><img alt="Jinx Rev\'d up.png" src="/wiki/images/Jinx_Rev%27d_up.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <i>Rev\'d up</i> for 2.<small>5</small> seconds, refreshing on subsequent attacks with <i>Pow-Pow</i> and stacking up to 3 times. Each stack of <i>Rev\'d up</i> grants <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>, with all stacks beyond the first one being 50% effective. Stacks expire by one when the duration ends.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Pow-Pow:',
            raw: " Basic attacks with Pow-Pow generate a stack of  Rev'd up for 2.5 seconds, refreshing on subsequent attacks with Pow-Pow and stacking up to 3 times",
            min: 0,
            max: 10,
            description:
              " Basic attacks with Pow-Pow generate a stack of  Rev'd up for 2.5 seconds, refreshing on subsequent attacks with Pow-Pow and stacking up to 3 times",
            values: 2,
            units: 'feastStacks',
            unitsText:
              "attacks with Pow-Pow generate a stack of  Rev'd up for 2.5 seconds, refreshing on subsequent attacks with Pow-Pow and stacking up to 3 times",
            pre: "Basic attacks with Pow-Pow generate a stack of  Rev'd up for 2.5 seconds, refreshing on subsequent attacks with Pow-Pow and stacking up to 3 times",
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: "Each stack of Rev'd up grants  bonus attack speed, with all stacks beyond the first one being 50% effective",
            increasedStat: 'feastStacks',
            values: 5,
            valuesIsPercent: true,
            units: '',
            unitsText:
              "effectivestack of Rev'd up grants  bonus attack speed, with all stacks beyond the first one being 50",
            pre: "Each stack of Rev'd up grants  bonus attack speed, with all stacks beyond the first one being 50% effective",
          },
        ],
        leveling: [
          {
            name: 'Bonus Attack Speed:',
            values: '15 / 27.5 / 40 / 52.5 / 65%',
            valuesHTML:
              '15 / 27.<small>5</small> / 40 / 52.<small>5</small> / 65%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '15 / 27.5 / 40 / 52.5 / 65%',
            values: [15, 27.5, 40, 52.5, 65],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 27.5 / 40 / 52.5 / 65%',
          },
        ],
      },
      {
        icon: '/wiki/images/Switcheroo!.png',
        description:
          'Fishbones: Basic attacks with Fishbones cost  mana on-attack to deal 110% AD modified physical damage to the target and nearby enemies. The damage is affected by  critical strike modifiers. While Fishbones is equipped, Jinx gains  bonus range but loses  10% of her bonus attack speed.',
        descriptionHTML:
          '<span class="template_sbc"><b>Fishbones:</b></span> Basic attacks with <i>Fishbones</i> cost <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana</span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> to deal <span style="color:orange; white-space:normal">110% AD</span> <span style="color: #FF8C34; white-space:normal"><b>modified</b> physical damage</span> to the target and nearby enemies. The damage is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers. While <i>Fishbones</i> is equipped, <b>Jinx</b> gains <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> range</span> but loses <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">10% of her <b>bonus</b> attack speed</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Fishbones:',
            raw: ' Basic attacks with Fishbones cost  mana on-attack to deal 110% AD modified physical damage to the target and nearby enemies',
            damagetype: 'Physical',
            values: 1,
            valuesIsPercent: true,
            user: 'target',
            units: 'total_ad',
            unitsText:
              'AD modified physical damage to the target and nearby enemiesattacks with Fishbones cost  mana on-attack to deal 110',
            pre: 'Basic attacks with Fishbones cost  mana on-attack to deal 110% AD modified physical damage to the target and nearby enemies',
          },
          {
            effectType: 'Gain',
            name: 'Line 3:',
            raw: 'While Fishbones is equipped, Jinx gains  bonus range but loses  10% of her bonus attack speed.',
            increasedStat: 'bonus_ad',
            values: 1,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'of her bonus attack speed.Fishbones is equipped, Jinx gains  bonus range but loses  10',
            pre: 'While Fishbones is equipped, Jinx gains  bonus range but loses  10% of her bonus attack speed.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Range:',
            values: '80 / 110 / 140 / 170 / 200',
            valuesHTML: '80 / 110 / 140 / 170 / 200',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Range:',
            raw: '80 / 110 / 140 / 170 / 200',
            values: [80, 110, 140, 170, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 110 / 140 / 170 / 200',
          },
        ],
      },
      {
        description:
          "Only the first attack after switching to Fishbones will benefit from  Rev'd up.",
        descriptionHTML:
          '<i>Only the first attack after switching to </i>Fishbones<i> will benefit from <a href="https://static.wikia.nocookie.net/leagueoflegends/images/e/e8/Jinx_Rev%27d_up.png/revision/latest?cb=20171221042956" class="image"><img alt="Jinx Rev\'d up.png" src="/wiki/images/Jinx_Rev%27d_up.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Rev\'d up</i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    damagetype: 'Physical',
    spelleffects: 'special',
    spellshield: false,
    notes:
      '* Toggle abilities do not count as ability activations for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li><b>Jinx\'s</b> first attack after switching to <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jinx" data-ability="Fishbones" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jinx/LoL#Fishbones" title="Fishbones"><img alt="Fishbones" src="/wiki/images/Jinx_Switcheroo%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jinx/LoL#Fishbones" title="Jinx/LoL"><i>Fishbones</i></a></span></span> can be triggered after 0.<small>4</small> seconds, instead of using the attack timer.</li>\n<li>Despite <b>Jinx</b> starting the game using <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jinx" data-ability="Pow-Pow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jinx/LoL#Pow-Pow" title="Pow-Pow"><img alt="Pow-Pow" src="/wiki/images/Jinx_Pow-Pow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jinx/LoL#Pow-Pow" title="Jinx/LoL"><i>Pow-Pow</i></a></span></span> she doesn\'t receive any bonus attack speed until <i>Switcheroo!</i> has been learned.</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jinx" data-ability="Fishbones" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jinx/LoL#Fishbones" title="Fishbones"><img alt="Fishbones" src="/wiki/images/Jinx_Switcheroo%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jinx/LoL#Fishbones" title="Jinx/LoL"><i>Fishbones</i></a></span></span> splash damage affects structures (minions will target <b>Jinx</b>) but does not affect targets if <b>Jinx\'s</b> attacks are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span>, or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">missed</a></span>.</li>\n<li>With <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane"><img alt="Runaan\'s Hurricane" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">Runaan\'s Hurricane</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jinx" data-ability="Pow-Pow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jinx/LoL#Pow-Pow" title="Pow-Pow"><img alt="Pow-Pow" src="/wiki/images/Jinx_Pow-Pow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jinx/LoL#Pow-Pow" title="Jinx/LoL"><i>Pow-Pow</i></a></span></span> generates one stack per enemy hit.</li>\n<li>Each of <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane\'s"><img alt="Runaan\'s Hurricane\'s" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">Runaan\'s Hurricane\'s</a></span></span> additional bolts apply <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jinx" data-ability="Fishbones" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jinx/LoL#Fishbones" title="Fishbones\'"><img alt="Fishbones\'" src="/wiki/images/Jinx_Switcheroo%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jinx/LoL#Fishbones" title="Jinx/LoL">Fishbones\'</a></span></span> splash damage, which stacks with each other.</li>\n<li>Both weapons deal <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic damage"><a href="/wiki/Damage" title="Damage"><img alt="Basic Attack.png" src="/wiki/images/Basic_Attack.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">basic damage</a></span> to their primary target (this includes the increased damage of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jinx" data-ability="Fishbones" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jinx/LoL#Fishbones" title="Fishbones"><img alt="Fishbones" src="/wiki/images/Jinx_Switcheroo%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jinx/LoL#Fishbones" title="Jinx/LoL"><i>Fishbones</i></a></span></span>), which applies <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;life steal</span> based on the damage dealt (post-mitigation) as usual.</li>\n<li>The splash damage of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jinx" data-ability="Fishbones" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jinx/LoL#Fishbones" title="Fishbones"><img alt="Fishbones" src="/wiki/images/Jinx_Switcheroo%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jinx/LoL#Fishbones" title="Jinx/LoL"><i>Fishbones</i></a></span></span> is based on the pre-mitigation damage done to the primary target (which includes critical strikes), and is not considered <span style="color: #FF8C34; white-space:normal"><b>modified</b> physical damage</span>. It deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Default damage"><a href="/wiki/Damage" title="Damage"><img alt="Umbra Blades.png" src="/wiki/images/Nocturne_Umbra_Blades.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">default damage</a></span>: It doesn\'t apply <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;life steal</span> or <a href="/wiki/On-hit_effect" class="mw-redirect" title="On-hit effect">on-hit effects</a>.\n<ul><li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jinx" data-ability="Fishbones" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jinx/LoL#Fishbones" title="Fishbones"><img alt="Fishbones" src="/wiki/images/Jinx_Switcheroo%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jinx/LoL#Fishbones" title="Jinx/LoL"><i>Fishbones</i></a></span></span> damage: <span style="color:orange; white-space:normal">110% AD</span> (100% + 10%).</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jinx" data-ability="Fishbones" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jinx/LoL#Fishbones" title="Fishbones"><img alt="Fishbones" src="/wiki/images/Jinx_Switcheroo%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jinx/LoL#Fishbones" title="Jinx/LoL"><i>Fishbones</i></a></span></span> critical strike damage: <span style="color:orange; white-space:normal">192.<small>5</small>% AD</span> ((100% + 10%)&nbsp;×&nbsp;1.<small>75</small>).</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jinx" data-ability="Fishbones" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jinx/LoL#Fishbones" title="Fishbones"><img alt="Fishbones" src="/wiki/images/Jinx_Switcheroo%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jinx/LoL#Fishbones" title="Jinx/LoL"><i>Fishbones</i></a></span></span> critical strike damage with <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="Infinity Edge"><img alt="Infinity Edge" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">Infinity Edge</a></span></span>: <span style="color:orange; white-space:normal">231% AD</span> ((100% + 10%)&nbsp;×&nbsp;2.<small>1</small>).</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jinx" data-ability="Fishbones" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jinx/LoL#Fishbones" title="Fishbones"><img alt="Fishbones" src="/wiki/images/Jinx_Switcheroo%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jinx/LoL#Fishbones" title="Jinx/LoL"><i>Fishbones</i></a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="bolt"><img alt="bolt" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">bolt</a></span></span> damage: <span style="color:orange; white-space:normal">44% AD</span> ((100% + 10%)&nbsp;×&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="0.4"><img alt="0.4" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">0.<small>4</small></a></span></span>).</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jinx" data-ability="Fishbones" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jinx/LoL#Fishbones" title="Fishbones"><img alt="Fishbones" src="/wiki/images/Jinx_Switcheroo%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jinx/LoL#Fishbones" title="Jinx/LoL"><i>Fishbones</i></a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="bolt"><img alt="bolt" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">bolt</a></span></span> critical strike damage: <span style="color:orange; white-space:normal">77% AD</span> ((100% + 10%)&nbsp;×&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="0.4"><img alt="0.4" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">0.<small>4</small></a></span></span>&nbsp;×&nbsp;1.<small>75</small>).</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jinx" data-ability="Fishbones" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jinx/LoL#Fishbones" title="Fishbones"><img alt="Fishbones" src="/wiki/images/Jinx_Switcheroo%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jinx/LoL#Fishbones" title="Jinx/LoL"><i>Fishbones</i></a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="bolt"><img alt="bolt" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">bolt</a></span></span> critical strike damage with <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="Infinity Edge"><img alt="Infinity Edge" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">Infinity Edge</a></span></span>: <span style="color:orange; white-space:normal">92.<small>4</small>% AD</span> ((100% + 10%)&nbsp;×&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="0.4"><img alt="0.4" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">0.<small>4</small></a></span></span>&nbsp;×&nbsp;2.<small>1</small>).</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jinx" data-ability="Fishbones" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jinx/LoL#Fishbones" title="Fishbones"><img alt="Fishbones" src="/wiki/images/Jinx_Switcheroo%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jinx/LoL#Fishbones" title="Jinx/LoL"><i>Fishbones</i></a></span></span> potential damage on stacked enemies with <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane"><img alt="Runaan\'s Hurricane" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">Runaan\'s Hurricane</a></span></span>: <span style="color:orange; white-space:normal">198% AD</span> (110% + 44% + 44%).</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jinx" data-ability="Fishbones" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jinx/LoL#Fishbones" title="Fishbones"><img alt="Fishbones" src="/wiki/images/Jinx_Switcheroo%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jinx/LoL#Fishbones" title="Jinx/LoL"><i>Fishbones</i></a></span></span> potential critical strike damage on stacked enemies with <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane"><img alt="Runaan\'s Hurricane" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">Runaan\'s Hurricane</a></span></span>: <span style="color:orange; white-space:normal">346.<small>5</small>% AD</span> ((110% + 44% + 44%)&nbsp;×&nbsp;1.<small>75</small>).</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jinx" data-ability="Fishbones" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jinx/LoL#Fishbones" title="Fishbones"><img alt="Fishbones" src="/wiki/images/Jinx_Switcheroo%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jinx/LoL#Fishbones" title="Jinx/LoL"><i>Fishbones</i></a></span></span> potential critical strike damage on stacked enemies with <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane"><img alt="Runaan\'s Hurricane" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">Runaan\'s Hurricane</a></span></span> and <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="Infinity Edge"><img alt="Infinity Edge" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">Infinity Edge</a></span></span>: <span style="color:orange; white-space:normal">415.<small>8</small>% AD</span> ((110% + 44% + 44%)&nbsp;×&nbsp;2.<small>1</small>).</li></ul></li></ul>',
    yvideo: 'Jinx - Q',
  },
  'Zap!': {
    name: 'Zap!',
    display_name: 'Zap!',
    champion: 'Jinx',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'JinxW.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 336,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '1500 /  1440',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 120',
    speed: '3300',
    cast_time:
      '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:orangered;" data-top_label="bonus attack speed" data-start="0.6;0" data-finish="0.4;250" data-bot_values="0.6;0.58;0.56;0.54;0.52;0.5;0.48;0.46;0.44;0.42;0.4" data-top_values="0;25;50;75;100;125;150;175;200;225;250" data-top_key="%">0.<small>6</small> − 0.<small>4</small> (based on <b>bonus</b> attack speed)</span>',
    cost: '50 / 55 / 60 / 65 / 70',
    costtype: 'Mana',
    cooldown: '8 / 7 / 6 / 5 / 4',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jinx" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jinx/LoL" title="Jinx"><img alt="Jinx" src="/wiki/images/Jinx_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jinx/LoL" title="Jinx/LoL">Jinx</a></span></span> fires a shock bolt in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy hit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> them for a short time.',
    ],
    description: [
      {
        icon: '/wiki/images/Zap!.png',
        description:
          'Active: Jinx fires a shock blast in the target direction that deals physical damage to the first enemy it hits and  reveals and  slows them for 2 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Jinx</b> fires a shock blast in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy it hits and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">reveals</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for 2 seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Jinx fires a shock blast in the target direction that deals physical damage to the first enemy it hits and  reveals and  slows them for 2 seconds.',
            damagetype: 'Physical',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'fires a shock blast in the target direction that deals physical damage to the first enemy it hits and  reveals and  slows them for 2 seconds.',
            pre: 'Jinx fires a shock blast in the target direction that deals physical damage to the first enemy it hits and  reveals and  slows them for 2 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '10 / 60 / 110 / 160 / 210 (+ 160% AD)',
            valuesHTML:
              '10 / 60 / 110 / 160 / 210 <span style="color:orange; white-space:normal">(+&nbsp;160% AD)</span>',
          },
          {
            name: 'Slow:',
            values: '30 / 40 / 50 / 60 / 70%',
            valuesHTML: '30 / 40 / 50 / 60 / 70%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '10 / 60 / 110 / 160 / 210 (+ 160% AD)',
            damagetype: 'Physical',
            values: [10, 60, 110, 160, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 60 / 110 / 160 / 210',
            children: [
              {
                values: 160,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 160% AD',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '30 / 40 / 50 / 60 / 70%',
            values: [30, 40, 50, 60, 70],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 40 / 50 / 60 / 70%',
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Single target',
    spellshield: true,
    projectile: 'True',
    notes:
      '* This ability will cast from wherever the caster is at the start of the cast time.',
    yvideo: 'Jinx - W',
  },
  'Flame Chompers!': {
    name: 'Flame Chompers!',
    display_name: 'Flame Chompers!',
    champion: 'Jinx',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'JinxE.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 384,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '925',
    collision_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Detection radius">115</span>',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage radius">225</span>',
    cast_time: 'none',
    cost: '90',
    costtype: 'Mana',
    cooldown: '24 / 20.<small>5</small> / 17 / 13.<small>5</small> / 10',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jinx" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jinx/LoL" title="Jinx"><img alt="Jinx" src="/wiki/images/Jinx_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jinx/LoL" title="Jinx/LoL">Jinx</a></span></span> tosses a line of <i>Chompers</i> at the target location that explode after a few seconds, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
      'If an enemy champion steps on a <i>Chomper</i>, it will explode, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knock them down</a></span>, and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">root</a></span> them.',
    ],
    description: [
      {
        icon: '/wiki/images/Flame Chompers!.png',
        description:
          'Active: Jinx tosses out 3 Chompers centered at the target location, landing after 0.4 seconds, arming after 0.5 seconds, and exploding after 5 seconds to deal magic damage to nearby enemies.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Jinx</b> tosses out 3 <i>Chompers</i> centered at the target location, landing after 0.<small>4</small> seconds, arming after 0.<small>5</small> seconds, and exploding after 5 seconds to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Jinx tosses out 3 Chompers centered at the target location, landing after 0.4 seconds, arming after 0.5 seconds, and exploding after 5 seconds to deal magic damage to nearby enemies.',
            damagetype: 'Magic',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'tosses out 3 Chompers centered at the target location, landing after 0.4 seconds, arming after 0.5 seconds, and exploding after 5 seconds to deal magic damage to nearby enemies.',
            pre: 'Jinx tosses out 3 Chompers centered at the target location, landing after 0.4 seconds, arming after 0.5 seconds, and exploding after 5 seconds to deal magic damage to nearby enemies.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '70 / 120 / 170 / 220 / 270 (+ 100% AP)',
            valuesHTML:
              '70 / 120 / 170 / 220 / 270 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;100% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 120 / 170 / 220 / 270 (+ 100% AP)',
            damagetype: 'Magic',
            values: [70, 120, 170, 220, 270],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 120 / 170 / 220 / 270',
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
        icon: '/wiki/images/Flame Chompers! 2.png',
        description:
          'Each Chomper explodes on contact with an enemy  champion,  knocking them down and  rooting them for 1.5 seconds. Enemy champions can be affected by only one Chomper.',
        descriptionHTML:
          'Each <i>Chomper</i> explodes on contact with an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocking them down</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooting</a></span> them for 1.<small>5</small> seconds. Enemy champions can be affected by only one <i>Chomper</i>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Each Chomper explodes on contact with an enemy  champion,  knocking them down and  rooting them for 1.5 seconds',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'Chomper explodes on contact with an enemy  champion,  knocking them down and  rooting them for 1.5 seconds',
            pre: 'Each Chomper explodes on contact with an enemy  champion,  knocking them down and  rooting them for 1.5 seconds',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Flame Chompers! will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i>Flame Chompers! will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: 'Special',
    projectile: 'Special',
    notes:
      '* <i>Chompers</i> will halt when encountering <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Wind Wall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Wind Wall"><img alt="Wind Wall" src="/wiki/images/Yasuo_Wind_Wall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Yasuo/LoL">Wind Wall</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-ability="Unbreakable" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL#Unbreakable" title="Unbreakable"><img alt="Unbreakable" src="/wiki/images/Braum_Unbreakable.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL#Unbreakable" title="Braum/LoL">Unbreakable</a></span></span>.\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> does not negate the explosion.</li></ul>',
    yvideo: 'Jinx - E',
  },
  'Super Mega Death Rocket!': {
    name: 'Super Mega Death Rocket!',
    display_name: 'Super Mega Death Rocket!',
    champion: 'Jinx',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'JinxR.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 432,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: 'Global',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="radius of explosion">400</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="sight radius of missile">1000</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="radius of reveal from explosion">1000</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="missile width">280</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Initial rocket speed">1700</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="After traveling 1350 units">2200</span>',
    cast_time: '0.<small>6</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown: '75 / 70 / 65 / 60 / 55',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jinx" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jinx/LoL" title="Jinx"><img alt="Jinx" src="/wiki/images/Jinx_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jinx/LoL" title="Jinx/LoL">Jinx</a></span></span> fires a rocket in the target direction that explodes upon the first enemy champion hit, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to the target and surrounding enemies.',
    ],
    description: [
      {
        icon: '/wiki/images/Super Mega Death Rocket!.png',
        description:
          'Active: Jinx fires a massive rocket in the target direction, briefly granting  sight of its surroundings and exploding upon colliding with an enemy champion. The explosion deals physical damage to nearby enemies and grants  sight of the area for 2 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Jinx</b> fires a massive rocket in the target direction, briefly granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of its <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cannot grant sight into brush nor through terrain">surroundings</span> and exploding upon colliding with an enemy champion. The explosion deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="centered on the initial target">nearby</span> enemies and grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Can grant sight into brush and through terrain">area</span> for 2 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'The explosion deals physical damage to nearby enemies and grants  sight of the area for 2 seconds.',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'explosion deals physical damage to nearby enemies and grants  sight of the area for 2 seconds.',
            pre: 'The explosion deals physical damage to nearby enemies and grants  sight of the area for 2 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Super Mega Death Rocket! deals 10% − 100% (based on distance traveled) damage. This does not affect the bonus damage based on the target's missing health.",
        descriptionHTML:
          '<i>Super Mega Death Rocket!</i> deals <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="distance traveled" data-start="10;0" data-finish="100;1500" data-bot_values="10;16;22;28;34;40;46;52;58;64;70;76;82;88;94;100" data-top_values="0;100;200;300;400;500;600;700;800;900;1000;1100;1200;1300;1400;1500" data-bot_key="%">10% − 100% (based on distance traveled)</span> damage. This does not affect the <b>bonus</b> damage based on the <span style="color: #1F995C; white-space:normal">target\'s <b>missing</b> health</span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Super Mega Death Rocket! deals 10% − 100% (based on distance traveled) damage',
            damagetype: 'None',
            values: 1,
            valuesIsPercent: true,
            basedOn: 'distance traveled',
            user: 'none',
            units: '',
            unitsText: 'damage',
            pre: 'Super Mega Death Rocket! deals 10% − 100%',
            post: 'damage',
          },
        ],
        leveling: [
          {
            name: 'Maximum Physical Damage:',
            values:
              "300 / 375 / 450 / 525 / 600 (+ 150% bonus AD) (+ 25 / 27.5 / 30 / 32.5 / 35% of target's missing health)",
            valuesHTML:
              '300 / 375 / 450 / 525 / 600 <span style="color:orange; white-space:normal">(+&nbsp;150% <b>bonus</b> AD)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;25 / 27.<small>5</small> / 30 / 32.<small>5</small> / 35% of target\'s <b>missing</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Maximum Physical Damage:',
            raw: "300 / 375 / 450 / 525 / 600 (+ 150% bonus AD) (+ 25 / 27.5 / 30 / 32.5 / 35% of target's missing health)",
            healType: 'PhysicalVamp',
            values: [300, 375, 450, 525, 600],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '300 / 375 / 450 / 525 / 600',
            children: [
              {
                values: 150,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 150% bonus AD',
              },
              {
                values: [25, 27.5, 30, 32.5, 35],
                valuesIsPercent: true,
                user: 'target',
                units: 'missing_hp',
                unitsText: "of target's missing health",
                pre: "+ 25 / 27.5 / 30 / 32.5 / 35% of target's missing health",
              },
            ],
          },
        ],
      },
      {
        description:
          "Enemies surrounding the primary target take 80% damage. The bonus damage based on the target's missing health is capped at 800 against  monsters.",
        descriptionHTML:
          'Enemies surrounding the primary target take 80% damage. The <b>bonus</b> damage based on the <span style="color: #1F995C; white-space:normal">target\'s <b>missing</b> health</span> is capped at 800 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Enemies surrounding the primary target take 80% damage',
            damagetype: 'None',
            values: 8,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'damagesurrounding the primary target take 80',
            pre: 'Enemies surrounding the primary target take 80% damage',
          },
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: "The bonus damage based on the target's missing health is capped at 800 against  monsters.",
            healType: 'OutgoingHeals',
            values: 8,
            units: 'total_ap',
            unitsText:
              "bonus damage based on the target's missing health is capped at 800 against  monsters.",
            pre: "The bonus damage based on the target's missing health is capped at 800 against  monsters.",
          },
        ],
        leveling: [
          {
            name: 'Maximum Secondary Damage:',
            values:
              "240 / 300 / 360 / 420 / 480 (+ 120% bonus AD) (+ 20 / 22 / 24 / 26 / 28% of target's missing health)",
            valuesHTML:
              '240 / 300 / 360 / 420 / 480 <span style="color:orange; white-space:normal">(+&nbsp;120% <b>bonus</b> AD)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;20 / 22 / 24 / 26 / 28% of target\'s <b>missing</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Maximum Secondary Damage:',
            raw: "240 / 300 / 360 / 420 / 480 (+ 120% bonus AD) (+ 20 / 22 / 24 / 26 / 28% of target's missing health)",
            healType: 'OutgoingHeals',
            values: [240, 300, 360, 420, 480],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '240 / 300 / 360 / 420 / 480',
            children: [
              {
                values: 120,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 120% bonus AD',
              },
              {
                values: [20, 22, 24, 26, 28],
                valuesIsPercent: true,
                user: 'target',
                units: 'missing_hp',
                unitsText: "of target's missing health",
                pre: "+ 20 / 22 / 24 / 26 / 28% of target's missing health",
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Area of effect',
    spellshield: 'Special',
    projectile: 'True',
    notes:
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will not prevent the explosion.\n<ul><li><i>Super Mega Death Rocket\'s</i> projectile has an <img alt="Super Mega Death Rocket! Minimap.png" src="/wiki/images/Super_Mega_Death_Rocket%21_Minimap.png" decoding="async" loading="lazy" width="40" height="40" class="lazyload"> icon on the mini-map while it is in flight. It can be seen by only <b>Jinx</b> and her allies.</li>\n<li>The bonus damage based on missing health is based on each unit\'s own missing health and not the primary target\'s.</li>\n<li>Unlike similar spells, <i>Super Mega Death Rocket</i> will not increase it\'s damage when ranked up while the missile is in flight.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup>\n<ul><li>This is because the base damage is fixed at a multiple of the damage the rocket initially started with.</li>\n<li>The <span style="color:orange; white-space:normal"><b>bonus</b> AD</span> ratio will still update when <span style="color:orange; white-space:normal">AD</span> is gained or lost between the cast and hit of the missile.</li></ul></li>\n<li>This ability will cast from wherever the caster is at the start of the cast time.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Jinx_Original_R_2.ogg   "Bye bye!"',
    video: 'Jinx - R',
  },
} satisfies { [skillName in string]: SkillData };
