import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Kayle';

export default {
  'Divine Ascent': {
    name: 'Divine Ascent',
    display_name: 'Divine Ascent',
    champion: 'Kayle',
    skill: 'I',
    image: {
      full: 'Kayle_P.png',
      sprite: 'passive1.png',
      group: 'passive',
      x: 336,
      y: 96,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayle" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayle/LoL" title="Kayle"><img alt="Kayle" src="/wiki/images/Kayle_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayle/LoL" title="Kayle/LoL">Kayle</a></span></span> ascends through four forms that each grant additional bonuses:\n<ul><li><span class="template_sbc"><b>Level 1 - Zealous:</b></span> <b>Kayle\'s</b> basic attacks grant her stacking <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">attack speed</span></span>, and at maximum stacks she also gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">move speed</span></span>.</li>\n<li><span class="template_sbc"><b>Level 6 - Arisen:</b></span> <b>Kayle</b> gains <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #FFFDC9; white-space:normal">range</span></span> and becomes a ranged champion.</li>\n<li><span class="template_sbc"><b>Level 11 - Aflame:</b></span> While at maximum stacks, <b>Kayle\'s</b> basic attacks launches a fire wave that deals <span style="color: #00B0F0; white-space:normal">magic damage</span>.</li>\n<li><span class="template_sbc"><b>Level 16 - Transcendent:</b></span> <b>Kayle</b> is permanently at maximum stacks, in addition to gaining even more <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #FFFDC9; white-space:normal">range</span></span>.</li></ul>',
    ],
    description: [
      {
        icon: '/wiki/images/Divine_Ascent.png',
        description:
          'Innate: Kayle ascends through four forms that each grant additional bonuses. She ascends upon spending a skill point at levels 1, 6, 11, and 16.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Kayle</b> ascends through four forms that each grant additional bonuses. She ascends upon spending a skill point at <a href="/wiki/Experience_(champion)" title="Experience (champion)">levels</a> 1, 6, 11, and 16.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'She ascends upon spending a skill point at levels 1, 6, 11, and 16.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'ascends upon spending a skill point at levels 1, 6, 11, and 16.',
            pre: 'She ascends upon spending a skill point at levels 1, 6, 11, and 16.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Zealous.png',
        description:
          "Level 1 - Zealous: Kayle's basic attacks on-attack generate a stack of Zeal for 5 seconds, refreshing on subsequent hits and stacking up to 5 times. For each stack, she gains  6% (+ 1% per 100 AP) bonus attack speed, up to a maximum  30% (+ 5% per 100 AP). At max stacks, she becomes Exalted, gaining  10% bonus movement speed.",
        descriptionHTML:
          '<span class="template_sbc"><b>Level 1 - Zealous:</b></span> <b>Kayle\'s</b> basic attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> generate a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Zeal</i> for 5 seconds, refreshing on subsequent hits and stacking up to 5 times. For each stack, she gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">6%</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;1% per 100 AP)</span> <span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>, up to a maximum <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">30%</span></span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;5% per 100 AP)</span>. At max stacks, she becomes <i>Exalted</i>, gaining <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">10% <b>bonus</b> movement speed</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Level 1 - Zealous:',
            raw: "Kayle's basic attacks on-attack generate a stack of Zeal for 5 seconds, refreshing on subsequent hits and stacking up to 5 times",
            min: 0,
            max: 5,
            description:
              "Kayle's basic attacks on-attack generate a stack of Zeal for 5 seconds, refreshing on subsequent hits and stacking up to 5 times",
            values: 5,
            units: 'genericStacks',
            unitsText:
              'basic attacks on-attack generate a stack of Zeal for 5 seconds, refreshing on subsequent hits and stacking up to 5 times',
            pre: "Kayle's basic attacks on-attack generate a stack of Zeal for 5 seconds, refreshing on subsequent hits and stacking up to 5 times",
          },
          {
            effectType: 'Stacks',
            name: 'Line 2:',
            raw: 'For each stack, she gains  6% (+ 1% per 100 AP) bonus attack speed, up to a maximum  30% (+ 5% per 100 AP)',
            min: 0,
            max: 10,
            description:
              'For each stack, she gains  6% (+ 1% per 100 AP) bonus attack speed, up to a maximum  30% (+ 5% per 100 AP)',
            values: 6,
            valuesIsPercent: true,
            units: 'bonus_ad',
            unitsText: 'bonus attack speed, up to a maximum  30%',
            pre: 'For each stack, she gains  6%',
            post: 'bonus attack speed, up to a maximum  30%',
            children: [
              {
                values: 1,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 1% per 100 AP',
              },
              {
                values: 5,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 5% per 100 AP',
              },
            ],
          },
          {
            effectType: 'Stacks',
            name: 'Line 3:',
            raw: 'At max stacks, she becomes Exalted, gaining  10% bonus movement speed.',
            min: 0,
            max: 10,
            description:
              'At max stacks, she becomes Exalted, gaining  10% bonus movement speed.',
            values: 1,
            valuesIsPercent: true,
            units: 'genericStacks',
            unitsText:
              'bonus movement speed.max stacks, she becomes Exalted, gaining  10',
            pre: 'At max stacks, she becomes Exalted, gaining  10% bonus movement speed.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Level 6 - Arisen: Kayle becomes  ranged and gains  350 bonus attack range for a total of  525.',
        descriptionHTML:
          '<span class="template_sbc"><b>Level 6 - Arisen:</b></span> <b>Kayle</b> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ranged" class="mw-redirect" title="Ranged">ranged</a></span> and gains <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;350 <b>bonus</b> attack range</span> for a total of <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;525</span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Level 6 - Arisen:',
            raw: 'Kayle becomes  ranged and gains  350 bonus attack range for a total of  525.',
            increasedStat: 'total_ad',
            values: 3,
            units: '',
            unitsText:
              'becomes  ranged and gains  350 bonus attack range for a total of  525.',
            pre: 'Kayle becomes  ranged and gains  350 bonus attack range for a total of  525.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Level 11 - Aflame: Kayle gains 10% bonus size. While Kayle is Exalted, her basic attacks on-attack also launch a wave of fire forward that deals 15 − 35 (based on  Starfire Spellblade's Rank) (+ 10% bonus AD) (+ 25% AP) magic damage to all enemies it passes through. The wave is affected by  critical strike modifiers.",
        descriptionHTML:
          '<span class="template_sbc"><b>Level 11 - Aflame:</b></span> <b>Kayle</b> gains 10% bonus <a href="/wiki/Size" title="Size">size</a>. While <b>Kayle</b> is <i>Exalted</i>, her basic attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> also launch a <i>wave</i> of fire forward that deals <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="[[File:Starfire Spellblade.png|20px|link=]] Starfire Spellblade\'s Rank" data-bot_values="15;15;20;25;30;35" data-top_values="0;1;2;3;4;5">15 − 35 (based on <img alt="Starfire Spellblade.png" src="/wiki/images/Kayle_Starfire_Spellblade.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> Starfire Spellblade\'s Rank)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;10% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;25% AP)</span> <span style="color: #00B0F0; white-space:normal">magic damage</span> to all enemies it passes through. The <i>wave</i> is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Level 11 - Aflame:',
            raw: 'Kayle gains 10% bonus size',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'bonus sizegains 10',
            pre: 'Kayle gains 10% bonus size',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: "While Kayle is Exalted, her basic attacks on-attack also launch a wave of fire forward that deals 15 − 35 (based on  Starfire Spellblade's Rank) (+ 10% bonus AD) (+ 25% AP) magic damage to all enemies it passes through",
            damagetype: 'Magic',
            values: [1, 35],
            basedOn: " Starfire Spellblade's Rank",
            user: 'none',
            units: '',
            unitsText: 'magic damage to all enemies it passes through',
            pre: 'While Kayle is Exalted, her basic attacks on-attack also launch a wave of fire forward that deals 15 − 35',
            post: 'magic damage to all enemies it passes through',
            children: [
              {
                values: 10,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 10% bonus AD',
              },
              {
                values: 25,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 25% AP',
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
          'Level 16 - Transcendent: Kayle gains an additional  100 bonus attack range for a total of  625, and permanently gains the full effects of Zealous.',
        descriptionHTML:
          '<span class="template_sbc"><b>Level 16 - Transcendent:</b></span> <b>Kayle</b> gains an additional <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;100 <b>bonus</b> attack range</span> for a total of <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;625</span>, and permanently gains the full effects of <i>Zealous</i>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Level 16 - Transcendent:',
            raw: 'Kayle gains an additional  100 bonus attack range for a total of  625, and permanently gains the full effects of Zealous.',
            increasedStat: 'total_ad',
            values: 1,
            units: '',
            unitsText:
              'gains an additional  100 bonus attack range for a total of  625, and permanently gains the full effects of Zealous.',
            pre: 'Kayle gains an additional  100 bonus attack range for a total of  625, and permanently gains the full effects of Zealous.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self, Enemies',
    damagetype: 'magic',
    spelleffects: 'AoE',
    projectile: 'special',
    notes:
      '<b>Zealous</b>\n<ul><li>The stacking attack speed can be tracked in the HUD via a buff called <img alt="Zealous.png" src="/wiki/images/Kayle_Zealous.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> <b>Zeal</b>, while the maximum stacks bonus grants the buff <img alt="Divine Ascent.png" src="/wiki/images/Kayle_Divine_Ascent.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> <b>Exalted</b>.</li>\n<li>Subsequent applications will also refresh the duration of all stacks, but all of them are lost when expired.</li>\n<li>If <b>Kayle</b> is in her attack animation after the stacks expire, she gains another 0.<small>5</small> seconds to refresh/stack <img alt="Zealous.png" src="/wiki/images/Kayle_Zealous.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> <b>Zeal</b>.</li>\n<li>Each stack increase attack speed based on the amount of ability power <b>Kayle</b> has at the time the stack is acquired and will not update if it is changed.\n<ul><li>For example, if a stack acquired while she has no ability power, it will the increase attack speed by <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">6%</span></span>. If <span style="white-space:nowrap"><a href="/wiki/Ability_power" title="Ability power"><img alt="Ability power icon.png" src="/wiki/images/Ability_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #7A6DFF; white-space:normal">200</span></span> acquired afterwards, the next stack will grant <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">8%</span></span>. The two increased attack speed by <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">14%</span></span> (6 + 8) and not <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">16%</span></span> (8 + 8).</li></ul></li></ul>\n<p><b>Arisen</b>\n</p>\n<ul><li>Basic attacks within <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;175</span> will still use <b>Kayle\'s</b> melee basic attack animations and do not utilize <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">projectiles</a></span>.\n<ul><li>They are still classified as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ranged" class="mw-redirect" title="Ranged">ranged</a></span> attacks.</li>\n<li>Due to this fact, projectile blocking effects cannot intercept basic attacks while <b>Kayle\'s</b> target is within her "melee" range.</li></ul></li></ul>\n<p><b>Aflame</b>\n</p>\n<ul><li>On becoming <span class="template_sbc"><b>Aflame</b></span>, <b>Kayle\'s</b> bonus size grows linearily over 1 second.</li>\n<li>Basic attacks against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a> and <a href="/wiki/Ward" title="Ward">wards</a> do not trigger fire waves.</li>\n<li>While at 4 stacks of <img alt="Zealous.png" src="/wiki/images/Kayle_Zealous.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> <b>Zeal</b>, the next <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> reaching the fifth stack will be empowered by <span class="template_sbc"><b>Aflame</b></span>, releasing the first fire wave.</li></ul>\n<p><b>Transcendent</b>\n</p>\n<ul><li><img alt="Zealous.png" src="/wiki/images/Kayle_Zealous.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> <b>Zeal</b> and <img alt="Divine Ascent.png" src="/wiki/images/Kayle_Divine_Ascent.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> <b>Exalted</b> buffs swapped to a new buff that grants the benefit of both and it is not visible on Kayle\'s HUD.</li>\n<li>This buff also updates its <span style="color:orangered; white-space:normal">attack speed</span> value whenever a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="A stat update happens once every 0.25 seconds.">stat update</span> happens and <span style="color: #7A6DFF; white-space:normal">ability power</span> is changed, however, it does not track <span style="color: #7A6DFF; white-space:normal">ability power</span> from other buffs, unless they have been specifically special cased. The following buffs are not special cased yet and will not grant bonus <span style="color:orangered; white-space:normal">attack speed</span>:\n<ul><li><a href="/wiki/Rune" class="mw-redirect" title="Rune">Runes</a> (including <a href="/wiki/Runes_Reforged#Shards" title="Runes Reforged#Shards"><img alt="Rune shard Adaptive Force.png" src="/wiki/images/Rune_shard_Adaptive_Force.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Runes_Reforged#Shards" class="mw-redirect" title="Runes Reforged">Adaptive Force rune shards</a> )</li>\n<li><span class="inline-image label-after buff-icon" style="display:inline;white-space:pre;" data-param="" data-buff="Infernal Might" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infernal_Might" title="Infernal Might"><img alt="Infernal Might" src="/wiki/images/Infernal_Dragon_buff.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infernal_Might" class="mw-redirect" title="Infernal Might">Infernal Might</a></span></span></li>\n<li><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yuumi" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yuumi/LoL" title="Yuumi\'s"><img alt="Yuumi\'s" src="/wiki/images/Yuumi_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yuumi/LoL" title="Yuumi/LoL">Yuumi\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yuumi" data-ability="You and Me!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yuumi/LoL#You_and_Me!" title="You and Me!"><img alt="You and Me!" src="/wiki/images/Yuumi_You_and_Me%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yuumi/LoL#You_and_Me!" title="Yuumi/LoL">You and Me!</a></span></span></span></li></ul></li></ul>\n<p><b>Fire Waves Details</b>\n</p>\n<ul><li><figure class="thumb tright " style="width: 180px"> \t<a href="https://static.wikia.nocookie.net/leagueoflegends/images/6/6e/Celestine_Wish_Kayle_Fire_Wave.png/revision/latest?cb=20201219175021" class="image"><img alt="" src="/wiki/images/Celestine_Wish_Kayle_Fire_Wave.png" decoding="async" loading="lazy" width="180" height="150" class="thumbimage lazyload"></a> \t<noscript><a href="https://static.wikia.nocookie.net/leagueoflegends/images/6/6e/Celestine_Wish_Kayle_Fire_Wave.png/revision/latest?cb=20201219175021" class="image"><img alt="" src="https://static.wikia.nocookie.net/leagueoflegends/images/6/6e/Celestine_Wish_Kayle_Fire_Wave.png/revision/latest/scale-to-width-down/180?cb=20201219175021" decoding="async" loading="lazy" width="180" height="150" class="thumbimage" data-image-name="Celestine Wish Kayle Fire Wave.png" data-image-key="Celestine_Wish_Kayle_Fire_Wave.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/6/6e/Celestine_Wish_Kayle_Fire_Wave.png/revision/latest/scale-to-width-down/180?cb=20201219175021"></a></noscript> \t<figcaption class="thumbcaption"> \t\t \t\t \t\t \t\t\t<p class="caption">Hitboxes shows by a graph side by side.</p> \t\t \t</figcaption> </figure> A wave consists of three projectiles for the hitbox and a fourth for visuals.</li>\n<li>The hitbox projectiles spawn 75 units behind <b>Kayle</b>, travel through her, and are destroyed once they\'ve traveled 850 units. Their technical details are:\n<ul><li><span class="template_sbc"><b>Range:</b></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Range" title="Range">850</a></span> (755 effective)</li>\n<li><span class="template_sbc"><b>Width:</b></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Range" title="Range">200</a></span></li>\n<li><span class="template_sbc"><b>Projectile Speed:</b></span> 2800</li>\n<li><span class="template_sbc"><b>Angle:</b></span> 18° (left and right at 9° to their side, respectively)</li></ul></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">Projectile</a></span> blocking effects can block each projectile individually.\n<ul><li>It is possible to block the visuals, but still get hit by an unblocked "invisible" hitbox projectile.</li></ul></li>\n<li>Hitting an enemy with multiple projectiles of the same wave will not increase the damage dealt.</li>\n<li>The fire wave shares <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast instance"><a href="/wiki/Champion_ability" title="Champion ability">cast instance</a></span> with the triggering basic attack.\n<ul><li>The amount of <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Conqueror" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Conqueror_(Rune)" title="Conqueror"><img alt="Conqueror" src="/wiki/images/Conqueror_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Conqueror_(Rune)" class="mw-redirect" title="Conqueror (Rune)">Conqueror</a></span></span> stacks gained will be <span style="white-space:pre;">(<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Melee"><a href="/wiki/Melee" title="Melee"><img alt="Melee role.png" src="/wiki/images/Melee_role.png" decoding="async" loading="lazy" width="16" height="16" class="lazyload"></a> 2</span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width="16" height="16" class="lazyload"></a> 1</span>)</span> if the basic attack deals damage first or 2 if the wave does so.</li></ul></li>\n<li>Keep in mind that it\'s still two damage instances. If one triggers <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Bone Plating" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Bone_Plating_(Rune)" title="Bone Plating"><img alt="Bone Plating" src="/wiki/images/Bone_Plating_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Bone_Plating_(Rune)" class="mw-redirect" title="Bone Plating (Rune)">Bone Plating</a></span></span>, the other\'s damage will be blocked.</li>\n<li>Fire waves roll <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike chance</a></span> on each target hit individually.</li>\n<li>The distance of the fire waves scales with <b>bonus</b> attack range.</li>\n<li>A known issue is that despite dealing <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area spell damage</a></span> the fire wave does not:\n<ul><li>consume <a href="/wiki/Named_item_effect#Mana_Charge" title="Named item effect">Mana Charge</a> from <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Tear of the Goddess" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tear_of_the_Goddess" title="Tear of the Goddess"><img alt="Tear of the Goddess" src="/wiki/images/Tear_of_the_Goddess_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tear_of_the_Goddess" title="Tear of the Goddess">Tear of the Goddess</a></span></span> and its upgrades,</li>\n<li>or trigger <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Manaflow Band" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Manaflow_Band_(Rune)" title="Manaflow Band"><img alt="Manaflow Band" src="/wiki/images/Manaflow_Band_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Manaflow_Band_(Rune)" class="mw-redirect" title="Manaflow Band (Rune)">Manaflow Band</a></span></span>.</li></ul></li></ul>\n<p><b>Interactions &amp; Other</b>\n</p>\n<ul><li>Because <b>Kayle</b> is both a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Melee"><a href="/wiki/Melee" title="Melee"><img alt="Melee role.png" src="/wiki/images/Melee_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Melee" class="mw-redirect" title="Melee">melee</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ranged" class="mw-redirect" title="Ranged">ranged</a></span> champion, she can purchase both ranged and melee exclusive items at anytime, but their effects will function depending on her current range type; the same principle also applies to <a href="/wiki/Runes" class="mw-redirect" title="Runes">runes</a>.\n<ul><li>However, keep in mind that, prior to ascending to <i>Arisen</i>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayle" data-ability="Starfire Spellblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayle/LoL#Starfire_Spellblade" title="Starfire Spellblade"><img alt="Starfire Spellblade" src="/wiki/images/Kayle_Starfire_Spellblade.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayle/LoL#Starfire_Spellblade" title="Kayle/LoL">Starfire Spellblade</a></span></span> also changes this behaviour based on its usage.</li></ul></li>\n<li>Waves are fired in the direction that <b>Kayle</b> is facing. Changing that during the attack windup via <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> will also change the direction of the wave.</li>\n<li>Each ascension has an unique animation and a voice line. <i>(<a href="/wiki/Kayle/LoL/Audio" title="Kayle/LoL/Audio">See: Kayle\'s quotes</a>)</i></li>\n<li>The ascensions\' animation will override the current one, but it does not cancel <b>Kayle\'s</b> current action, nor her previous orders.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Kayle_Original_107.ogg   "Behold, the righteous flame!"',
    yvideo: 'Kayle Passive Divine Ascent',
  },
  'Radiant Blast': {
    name: 'Radiant Blast',
    display_name: 'Radiant Blast',
    champion: 'Kayle',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'KayleQ.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 192,
      y: 0,
      w: 48,
      h: 48,
    },
    range: '900',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Missile width">150</span>',
    speed: '1600',
    cast_time:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cast time is equal to this period.">Attack Windup Time</span>',
    cost: '70 / 75 / 80 / 85 / 90',
    costtype: 'Mana',
    cooldown: '12 / 11 / 10 / 9 / 8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayle" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayle/LoL" title="Kayle"><img alt="Kayle" src="/wiki/images/Kayle_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayle/LoL" title="Kayle/LoL">Kayle</a></span></span> summons a celestial sword that travels forward and expands upon hitting a target, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span>, and reducing the <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">magic resist</span></span> of all targets struck.',
    ],
    description: [
      {
        icon: '/wiki/images/Radiant_Blast.png',
        description:
          'Active: Kayle conjures a portal in front of her that faces the target direction, from which a celestial sword launches forward. The sword expands upon hitting an enemy, targets struck in the area are dealt magic damage,  slowed for 2 seconds, and inflicted with 15% reduced  armor and  magic resistance for 4 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Kayle</b> conjures a portal in front of her that faces the target direction, from which a celestial sword launches forward. The sword expands upon hitting an enemy, targets struck in the area are dealt <span style="color: #00B0F0; white-space:normal">magic damage</span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> for 2 seconds, and inflicted with 15% <b>reduced</b> <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">magic resistance</span></span> for 4 seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'The sword expands upon hitting an enemy, targets struck in the area are dealt magic damage,  slowed for 2 seconds, and inflicted with 15% reduced  armor and  magic resistance for 4 seconds.',
            damagetype: 'Magic',
            values: 2,
            valuesIsPercent: true,
            user: 'target',
            units: 'total_armor',
            unitsText:
              'reduced  armor and  magic resistance for 4 seconds.sword expands upon hitting an enemy, targets struck in the area are dealt magic damage,  slowed for 2 seconds, and inflicted with 15',
            pre: 'The sword expands upon hitting an enemy, targets struck in the area are dealt magic damage,  slowed for 2 seconds, and inflicted with 15% reduced  armor and  magic resistance for 4 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '60 / 100 / 140 / 180 / 220 (+ 60% bonus AD) (+ 50% AP)',
            valuesHTML:
              '60 / 100 / 140 / 180 / 220 <span style="color:orange; white-space:normal">(+&nbsp;60% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span>',
          },
          {
            name: 'Slow:',
            values: '26 / 32 / 38 / 44 / 50%',
            valuesHTML: '26 / 32 / 38 / 44 / 50%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 100 / 140 / 180 / 220 (+ 60% bonus AD) (+ 50% AP)',
            damagetype: 'Magic',
            values: [60, 100, 140, 180, 220],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 100 / 140 / 180 / 220',
            children: [
              {
                values: 60,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 60% bonus AD',
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
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '26 / 32 / 38 / 44 / 50%',
            values: [26, 32, 38, 44, 50],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '26 / 32 / 38 / 44 / 50%',
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'true',
    notes:
      '<b>Details</b>\n<ul><li>This ability has a cast time and cast delay. The former represents the amount of time Kayle needs to spend to cast and is equal to her attack windup time. The latter is the amount of time the portal needs to launch the sword, which is always <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.25 seconds, but rounded up to the next game tick.">0.<small>264</small> seconds</span> seconds, starting from the beginning of the cast time.\n<ul><li>As implied by the previous point, the portal is created at the start of the cast time and <b>Kayle</b> does not have to be alive for it to launch the sword.</li>\n<li>The portal does not follow <b>Kayle\'s</b> movements, using <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> or getting displaced won\'t change its position nor direction either.</li></ul></li>\n<li>The cast time can be calculated by dividing <b>Kayle\'s</b> <i>windup percent</i> value (0.<small>193555</small>) with her current total attack speed.\n<ul><li><i>Radiant Blast\'s</i> cast time is <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.30968 seconds, but rounded up to the next game tick.">0.<small>33</small> seconds</span> at base attack speed, is at most <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.96775 seconds, but rounded up to the next game tick.">0.<small>99</small> seconds</span> at the minimum attack speed of <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">0.2</span></span>, and is <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.07742 seconds, but rounded up to the next game tick.">0.<small>099</small> seconds</span> at the attack speed cap of <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">2.5</span></span>. The cast time can be further decreased with effects that allows the player to bypass the attack speed cap, such as <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Lethal Tempo" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lethal_Tempo_(Rune)" title="Lethal Tempo"><img alt="Lethal Tempo" src="/wiki/images/Lethal_Tempo_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Lethal_Tempo_(Rune)" class="mw-redirect" title="Lethal Tempo (Rune)">Lethal Tempo</a></span></span>,</li>\n<li>Additionally, it should be noted that due to action only taking place on whole game ticks, the cast time can only be changed in fractions of 0.<small>033</small> seconds. This also means that the lowest possible cast time is 0.<small>033</small> seconds, requiring at least <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">5.8652</span></span> attack speed.</li>\n<li><span style="color:#D53D3D;font-weight:bold;">Correction:</span> Important to note that in patch <a href="/wiki/V9.17" title="V9.17">V9.17</a>, <i>Radiant Blast\'s</i> cast time was changed to be a flat 0.<small>25</small> seconds, rather than scaling with the attack windup time. In patch <a href="/wiki/V10.4" title="V10.4">V10.4</a>, this was undocumentedly changed back. Whether the change to scale with windup time again was intentional or not is unknown.</li></ul></li>\n<li>The resistance reduction is applied after the damage has been dealt.</li>\n<li>The expansion consist of 5 hitboxes, forming a cross-like shape centered 100 units ahead from the impact in its direction. Their technical details can be seen below and visualized on the image to the right. <figure class="thumb tright " style="width: 180px"> \t<a href="https://static.wikia.nocookie.net/leagueoflegends/images/d/d7/Celestine_Wish_Kayle_Q_Explosion.png/revision/latest?cb=20200616003750" class="image"><img alt="" src="/wiki/images/Celestine_Wish_Kayle_Q_Explosion.png" decoding="async" loading="lazy" width="180" height="300" class="thumbimage lazyload"></a> \t<noscript><a href="https://static.wikia.nocookie.net/leagueoflegends/images/d/d7/Celestine_Wish_Kayle_Q_Explosion.png/revision/latest?cb=20200616003750" class="image"><img alt="" src="https://static.wikia.nocookie.net/leagueoflegends/images/d/d7/Celestine_Wish_Kayle_Q_Explosion.png/revision/latest/scale-to-width-down/180?cb=20200616003750" decoding="async" loading="lazy" width="180" height="300" class="thumbimage" data-image-name="Celestine Wish Kayle Q Explosion.png" data-image-key="Celestine_Wish_Kayle_Q_Explosion.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/d/d7/Celestine_Wish_Kayle_Q_Explosion.png/revision/latest/scale-to-width-down/180?cb=20200616003750"></a></noscript> \t<figcaption class="thumbcaption"> \t\t \t\t \t\t \t\t\t<p class="caption">The left side shows projectile\'s width and the total area traveled if it does not hit a target, while the right side shows the explosions when it hits a target.</p> \t\t \t</figcaption> </figure>\n<ul><li><code>ExplosionCenter</code>: 100 radius</li>\n<li><code>ExplosionLeft</code>: 150 distance, 125 width</li>\n<li><code>ExplosionRight</code>: 150 distance, 125 width</li>\n<li><code>ExplosionBackward</code>: 100 distance, 90 width</li>\n<li><code>ExplosionForward</code>: 400 distance, 90 width</li></ul></li></ul>\n<p><b>Interactions &amp; Other</b>\n</p>\n<ul><li>The visual effects of the explosion shows the blade and guard of <b>Kayle\'s</b> swords.</li>\n<li>The resistance reduction can be tracked on the HUD as a debuff called <i>Sundered</i> and has a special icon that can be seen below.<br><a href="https://static.wikia.nocookie.net/leagueoflegends/images/b/b3/Kayle_Radiant_Blast_2.png/revision/latest?cb=20200619073622" class="image" title="Sundered icon"><img alt="Sundered icon" src="/wiki/images/Kayle_Radiant_Blast_2.png" decoding="async" loading="lazy" width="64" height="64" class="thumbborder lazyload"></a></li>\n<li><span style="color:#D53D3D;font-weight:bold;">Correction:</span> Note that the <a href="https://static.wikia.nocookie.net/leagueoflegends/images/d/df/Kayle_PsyOpsCircle.png/revision/latest?cb=20200902205450" class="image"><img alt="Kayle PsyOpsCircle.png" src="/wiki/images/Kayle_PsyOpsCircle.png" decoding="async" loading="lazy" width="32" height="32" class="lazyload"></a> PsyOps skin still uses the old shred VFX, which also only shows for 3 seconds (effect duration is not affected). This is possibly an oversight as all existing, and at the time released Dragon Slayer, skins were updated properly in <a href="/wiki/V11.18" title="V11.18">V11.18</a>.</li></ul>\n<p><video src="https://static.wikia.nocookie.net/leagueoflegends/images/8/81/Celestine_Wish_Kayle_PsyOps_Shred_Indicator_Issue.mp4/revision/latest?cb=20220125044547" width="300" height="169" style="max-width: 100%; max-height: 100%; width: 300px; height: 169px;" controls=""><a href="https://leagueoflegends.fandom.com/wiki/File:Celestine_Wish_Kayle_PsyOps_Shred_Indicator_Issue.mp4">https://leagueoflegends.fandom.com/wiki/File:Celestine_Wish_Kayle_PsyOps_Shred_Indicator_Issue.mp4</a></video>\n</p>',
    video: 'Kayle Q Radiant Blast',
  },
  'Celestial Blessing': {
    name: 'Celestial Blessing',
    display_name: 'Celestial Blessing',
    champion: 'Kayle',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'KayleW.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 240,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '900',
    cast_time: '0.<small>25</small>',
    cost: '90 / 100 / 110 / 120 / 130',
    costtype: 'Mana',
    cooldown: '15',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayle" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayle/LoL" title="Kayle"><img alt="Kayle" src="/wiki/images/Kayle_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayle/LoL" title="Kayle/LoL">Kayle</a></span></span> <span style="color: #60E08F; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;heals</span></span> herself and an allied champion. Additionally, both of them gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">move speed</span></span> for a brief time.',
    ],
    description: [
      {
        icon: '/wiki/images/Celestial_Blessing.png',
        description:
          'Active: Kayle and the target allied champion are  healed and gain bonus movement speed for 2 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Kayle</b> and the target allied champion are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healed</a></span> and gain <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span> for 2 seconds.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Active:',
            raw: 'Kayle and the target allied champion are  healed and gain bonus movement speed for 2 seconds.',
            healType: 'OutgoingHeals',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'and the target allied champion are  healed and gain bonus movement speed for 2 seconds.',
            pre: 'Kayle and the target allied champion are  healed and gain bonus movement speed for 2 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Heal:',
            values: '55 / 80 / 105 / 130 / 155 (+ 25% AP)',
            valuesHTML:
              '55 / 80 / 105 / 130 / 155 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;25% AP)</span>',
          },
          {
            name: 'Bonus Movement Speed:',
            values: '24 / 28 / 32 / 36 / 40% (+ 8% per 100 AP)',
            valuesHTML:
              '24 / 28 / 32 / 36 / 40% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;8% per 100 AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Heal:',
            raw: '55 / 80 / 105 / 130 / 155 (+ 25% AP)',
            healType: 'DrainEffect',
            values: [55, 80, 105, 130, 155],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 80 / 105 / 130 / 155',
            children: [
              {
                values: 25,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 25% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Bonus Movement Speed:',
            raw: '24 / 28 / 32 / 36 / 40% (+ 8% per 100 AP)',
            damagetype: 'None',
            values: [24, 28, 32, 36, 40],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '24 / 28 / 32 / 36 / 40%',
            children: [
              {
                values: 8,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 8% per 100 AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'If cast without a valid target, or self-cast, Celestial Blessing will automatically target the closest allied champion in range, prioritizing the one with the lowest  health.',
        descriptionHTML:
          'If cast without a valid target, or <a href="/wiki/Self-targeted" title="Self-targeted">self-cast</a>, <i>Celestial Blessing</i> will automatically target the closest allied champion in range, prioritizing the one with the lowest <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">health</span></span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting:
      '<a href="/wiki/Unit-targeted" class="mw-redirect" title="Unit-targeted">Unit</a> / <a href="/wiki/Auto-targeted" class="mw-redirect" title="Auto-targeted">Auto</a>',
    affects: 'Self, Allies',
    notes:
      '<b>Details</b>\n<ul><li><i>Celestial Blessing\'s</i> cast time does not interrupt movement and the effects are applied at the start.</li></ul>\n<p><b>Interactions &amp; Other</b>\n</p>\n<ul><li>If cast with <a href="/wiki/Auto-targeted" class="mw-redirect" title="Auto-targeted">auto-targeting</a>, <i>Celestial Blessing</i> may target allies who are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, or allied clones that cannot be targeted by allies (such as <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Wukong" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Wukong/LoL" title="Wukong\'s"><img alt="Wukong\'s" src="/wiki/images/Wukong_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Wukong/LoL" title="Wukong/LoL">Wukong\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Wukong" data-ability="Warrior Trickster" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Wukong/LoL#Warrior_Trickster" title="Warrior Trickster"><img alt="Warrior Trickster" src="/wiki/images/Wukong_Warrior_Trickster.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Wukong/LoL#Warrior_Trickster" title="Wukong/LoL">Warrior Trickster</a></span></span></span>).</li></ul>',
    video: 'Kayle W Celestial Blessing',
  },
  'Starfire Spellblade': {
    name: 'Starfire Spellblade',
    display_name: 'Starfire Spellblade',
    champion: 'Kayle',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'KayleE.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 288,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 350',
    cast_time: 'none',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">8 / 7.<small>5</small> / 7 / 6.<small>5</small> / 6</span>',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayle" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayle/LoL" title="Kayle"><img alt="Kayle" src="/wiki/images/Kayle_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayle/LoL" title="Kayle/LoL">Kayle</a></span></span> deals <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> on-hit.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Kayle</b> kindles her blade, causing her next basic attack to deal additional <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> based on the <span style="color: #1F995C; white-space:normal">target\'s <b>missing</b> health</span>.',
      '<span class="template_sbc"><b>Level 11 - <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayle" data-ability="Divine Ascent" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayle/LoL#Divine_Ascent" title="Aflame"><img alt="Aflame" src="/wiki/images/Kayle_Divine_Ascent.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayle/LoL#Divine_Ascent" title="Kayle/LoL">Aflame</a></span></span> Bonus:</b></span> The attack explodes upon the target, dealing its damage to surronding enemies.',
      '<i>Starfire Spellblade</i> applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects and <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #CE1C42; white-space:normal">life steal</span></span> on all targets struct.',
    ],
    description: [
      {
        description:
          "Passive: Kayle deals bonus magic damage  on-hit. The waves from  Divine Ascent have base damage equal to this effect's base damage.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Kayle</b> deals <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>. The <i>waves</i> from <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayle" data-ability="Divine Ascent" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayle/LoL#Divine_Ascent" title="Divine Ascent"><img alt="Divine Ascent" src="/wiki/images/Kayle_Divine_Ascent.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayle/LoL#Divine_Ascent" title="Kayle/LoL">Divine Ascent</a></span></span></i> have base damage equal to this effect\'s base damage.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Passive Damage:',
            values: '15 / 20 / 25 / 30 / 35 (+ 10% bonus AD) (+ 25% AP)',
            valuesHTML:
              '15 / 20 / 25 / 30 / 35 <span style="color:orange; white-space:normal">(+&nbsp;10% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;25% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Passive Damage:',
            raw: '15 / 20 / 25 / 30 / 35 (+ 10% bonus AD) (+ 25% AP)',
            damagetype: 'None',
            values: [15, 20, 25, 30, 35],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 20 / 25 / 30 / 35',
            children: [
              {
                values: 10,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 10% bonus AD',
              },
              {
                values: 25,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 25% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Starfire_Spellblade.png',
        description:
          'Active: Kayle kindles her blade, empowering her next basic attack within 6 seconds to have an  uncancellable windup and deal additional bonus magic damage  on-hit that is capped at 400 against  monsters. If Kayle is not yet  Arisen, this attack becomes  ranged with  525 range.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Kayle</b> kindles her blade, empowering her next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> within 6 seconds to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span> and deal additional <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> that is capped at 400 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>. If <b>Kayle</b> is not yet <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayle" data-ability="Divine Ascent" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayle/LoL#Divine_Ascent" title="Arisen"><img alt="Arisen" src="/wiki/images/Kayle_Divine_Ascent.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayle/LoL#Divine_Ascent" title="Kayle/LoL">Arisen</a></span></span></i>, this attack becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ranged" class="mw-redirect" title="Ranged">ranged</a></span> with <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;525 range</span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Kayle kindles her blade, empowering her next basic attack within 6 seconds to have an  uncancellable windup and deal additional bonus magic damage  on-hit that is capped at 400 against  monsters',
            increasedStat: 'total_ap',
            values: 6,
            units: '',
            unitsText:
              'kindles her blade, empowering her next basic attack within 6 seconds to have an  uncancellable windup and deal additional bonus magic damage  on-hit that is capped at 400 against  monsters',
            pre: 'Kayle kindles her blade, empowering her next basic attack within 6 seconds to have an  uncancellable windup and deal additional bonus magic damage  on-hit that is capped at 400 against  monsters',
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'If Kayle is not yet  Arisen, this attack becomes  ranged with  525 range.',
            values: 5,
            units: 'total_ad',
            unitsText:
              'Kayle is not yet  Arisen, this attack becomes  ranged with  525 range.',
            pre: 'If Kayle is not yet  Arisen, this attack becomes  ranged with  525 range.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Magic Damage:',
            values:
              "8 / 8.5 / 9 / 9.5 / 10% (+ 1.5% per 100 AP) of target's missing health",
            valuesHTML:
              '<span style="color: #1F995C; white-space:normal">8 / 8.<small>5</small> / 9 / 9.<small>5</small> / 10% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;1.<small>5</small>% per 100 AP)</span> of target\'s <b>missing</b> health</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Bonus Magic Damage:',
            raw: "8 / 8.5 / 9 / 9.5 / 10% (+ 1.5% per 100 AP) of target's missing health",
            healType: 'OutgoingHeals',
            values: [8, 8.5, 9, 9.5, 10],
            valuesIsPercent: true,
            user: 'target',
            units: 'missing_hp',
            unitsText: "of target's missing health",
            pre: '8 / 8.5 / 9 / 9.5 / 10%',
            post: "of target's missing health",
            children: [
              {
                values: 1.5,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 1.5% per 100 AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Starfire_Spellblade_2.png',
        description:
          'Aflame Bonus: The attack explodes upon the target, dealing its damage to surrounding enemies and applying  on-hit effects. This is affected by  critical strike modifiers.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayle" data-ability="Divine Ascent" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayle/LoL#Divine_Ascent" title="Aflame"><img alt="Aflame" src="/wiki/images/Kayle_Divine_Ascent.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayle/LoL#Divine_Ascent" title="Kayle/LoL">Aflame</a></span></span> Bonus:</b></span> The attack explodes upon the target, dealing its damage to surrounding enemies and applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects. This is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description: "Starfire Spellblade  resets Kayle's basic attack timer.",
        descriptionHTML:
          '<i>Starfire Spellblade <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Kayle\'s</b> basic attack timer.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self, Enemies',
    damagetype: 'Magic',
    spelleffects: 'Special',
    onhiteffects: 'True',
    spellshield: true,
    projectile: 'true',
    callforhelp: 'true',
    notes:
      '<b>Details</b>\n<ul><li><i>Starfire Spellblade</i> will be buffered and cast when the cooldown ends if the player attempts to cast it within 0.1 seconds of the cooldown ending.</li>\n<li><i>Starfire Spellblade</i> consist of 3 parts, each dealing different type of damage source type:\n<ul><li>The basic attack part deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic damage"><a href="/wiki/Damage" title="Damage"><img alt="Basic Attack.png" src="/wiki/images/Basic_Attack.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">basic</a></span>.</li>\n<li>The passive\'s on-hit effect deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Proc damage"><a href="/wiki/Damage" title="Damage"><img alt="Wit\'s End item.png" src="/wiki/images/Wit%27s_End_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">proc</a></span>.</li>\n<li>The active\'s portion deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell damage"><a href="/wiki/Damage" title="Damage"><img alt="Disintegrate.png" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">spell</a></span>.</li>\n<li>Additionally, the damage against secondary targets caught in the explosion is also tagged as <a href="/wiki/Area_of_effect" title="Area of effect">area of effect</a>.</li></ul></li>\n<li>The basic attack and the active\'s portion shares the same <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast instance"><a href="/wiki/Champion_ability" title="Champion ability">cast instance</a></span> since patch <a href="/wiki/V11.1" title="V11.1">V11.1</a>. (Exception: <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Muramana" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Muramana" title="Muramana"><img alt="Muramana" src="/wiki/images/Muramana_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Muramana" title="Muramana">Muramana</a></span></span>, see under <b>Interactions &amp; Other</b>.)</li>\n<li>Parry interactions:\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">Blind</a></span>: The main target will never receive damage, but the secondary targets will receive the active\'s spell damage.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">Block</a></span>: Blocking will always negate all damage. Keep in mind that if a secondary target is outside of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shen" data-ability="Spirit\'s Refuge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shen/LoL#Spirit\'s_Refuge" title="Spirit\'s Refuge\'s"><img alt="Spirit\'s Refuge\'s" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shen/LoL#Spirit\'s_Refuge" title="Shen/LoL">Spirit\'s Refuge\'s</a></span></span> zone, they won\'t block damage.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">Dodge</a></span>: Dodging will always negate all damage.</li></ul></li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: All parry interactions are marked for retesting because of patch <a href="/wiki/V11.1" title="V11.1">V11.1</a> changes.</li></ul>\n<p><b>Interactions &amp; Other</b>\n</p>\n<ul><li>While the active\'s effect is up, a circle is visible to <b>Kayle</b>, indicating her <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;range</span>, however, this circle only takes into account <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayle" data-ability="Divine Ascent" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayle/LoL#Divine_Ascent" title="Divine Ascent\'s"><img alt="Divine Ascent\'s" src="/wiki/images/Kayle_Divine_Ascent.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayle/LoL#Divine_Ascent" title="Kayle/LoL">Divine Ascent\'s</a></span></span> effect on her range, not other sources such as <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Rapid Firecannon" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rapid_Firecannon" title="Rapid Firecannon"><img alt="Rapid Firecannon" src="/wiki/images/Rapid_Firecannon_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rapid_Firecannon" title="Rapid Firecannon">Rapid Firecannon</a></span></span>.\n<ul><li>The increased range (with the item\'s effect included) will be <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;675</span> prior to ascending to <span class="template_sbc"><b>Transcendent</b></span>, after which it\'s <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;725</span>.</li></ul></li>\n<li>To clarify the description, <i>Starfire Spellblade</i> can behave both as a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ranged" class="mw-redirect" title="Ranged">ranged</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Melee"><a href="/wiki/Melee" title="Melee"><img alt="Melee role.png" src="/wiki/images/Melee_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Melee" class="mw-redirect" title="Melee">melee</a></span> attack based on how far the target is prior to <b>Kayle</b> ascending to <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayle" data-ability="Divine Ascent" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayle/LoL#Divine_Ascent" title="Arisen"><img alt="Arisen" src="/wiki/images/Kayle_Divine_Ascent.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayle/LoL#Divine_Ascent" title="Kayle/LoL">Arisen</a></span></span>, after which the attack will be always using ranged standards.\n<ul><li>If the target is 200 units away or closer, the attack will be considered melee. This also uses her melee animations, not utilizing projectiles even after ascending.</li>\n<li>If the target is over 200 units, the attack will be considered ranged.</li></ul></li>\n<li>To further expand on this: Using the ranged empowered attack will change <b>Kayle\'s</b> range type to ranged while the projectile is alive. This means that if the target could outrun the projectile, <b>Kayle</b> would be stuck on being ranged, although the bonuses from the active are not kept. While it\'s unlikely to be on this temporary ranged state for longer than half a seconds during a normal playthrough, it is possible to achieve few seconds when specific conditions are met.</li>\n<li>Keep in mind that while on-hit effects will be applied to all targets in the explision, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> effects are only applied once per basic attack, not per target hit.</li>\n<li>Single-use on-hits, such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span>, will be applied to the main target.\n<ul><li>If the main target died prior to the projectile reaching them, or if it was a <a href="/wiki/Jungle_plants" title="Jungle plants">jungle plant</a>, the effects will be applied to the closest target from the explosion\'s center.</li></ul></li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Guinsoo\'s Rageblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Guinsoo%27s_Rageblade" title="Guinsoo\'s Rageblade\'s"><img alt="Guinsoo\'s Rageblade\'s" src="/wiki/images/Guinsoo%27s_Rageblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Guinsoo%27s_Rageblade" title="Guinsoo\'s Rageblade">Guinsoo\'s Rageblade\'s</a></span></span> <a href="/wiki/Named_item_effect#Phantom_Hit" title="Named item effect">Phantom Hit</a> can only be applied to the main target.</li>\n<li>Despite being one cast instance, <i>Starfire Spellblade</i> triggers <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Muramana" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Muramana" title="Muramana\'s"><img alt="Muramana\'s" src="/wiki/images/Muramana_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Muramana" title="Muramana">Muramana\'s</a></span></span> <a href="/wiki/Named_item_effect#Shock" title="Named item effect">Shock</a> twice on each target, dealing normal bonus damage after the basic attack and increased bonus damage after the spell, totalling at <span style="color: #FF8C34; white-space:normal"><span style="color: #0099CC; white-space:normal"><span style="white-space:pre;">(<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Melee"><a href="/wiki/Melee" title="Melee"><img alt="Melee role.png" src="/wiki/images/Melee_role.png" decoding="async" loading="lazy" width="16" height="16" class="lazyload"></a> 5%</span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width="16" height="16" class="lazyload"></a> 4.<small>2</small>%</span>)</span> <b>maximum</b> mana</span> <span style="color:orange; white-space:normal">(+&nbsp;6% AD)</span> <b>bonus</b> physical damage</span>.</li></ul>',
    video: 'Kayle E Starfire Spellblade',
  },
  'Divine Judgment': {
    name: 'Divine Judgment',
    display_name: 'Divine Judgment',
    champion: 'Kayle',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'KayleR.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 336,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '900',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 500',
    cast_time: '1.<small>5</small>',
    cost: '100 / 75 / 50 / 25 / 0',
    costtype: 'mana',
    cooldown: '160 / 140 / 120 / 100 / 80',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayle" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayle/LoL" title="Kayle"><img alt="Kayle" src="/wiki/images/Kayle_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayle/LoL" title="Kayle/LoL">Kayle</a></span></span> grants herself or an allied champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invulnerable"><a href="/wiki/Invulnerability" title="Invulnerability"><img alt="Cosmic Radiance.png" src="/wiki/images/Taric_Cosmic_Radiance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability" title="Invulnerability">invulnerability</a></span> for the next few seconds, and conjures flaming swords around herself.',
      'After a brief delay, the swords rain down around the target, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
    ],
    description: [
      {
        icon: '/wiki/images/Divine_Judgment.png',
        description:
          'Active: Kayle grants herself or a target allied champion  invulnerability for a few seconds and conjures swords of fire.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Kayle</b> grants herself or a target allied champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invulnerable"><a href="/wiki/Invulnerability" title="Invulnerability"><img alt="Cosmic Radiance.png" src="/wiki/images/Taric_Cosmic_Radiance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability" title="Invulnerability">invulnerability</a></span> for a few seconds and conjures swords of fire.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Invulnerability Duration:',
            values: '2 / 2.25 / 2.5 / 2.75 / 3',
            valuesHTML:
              '2 / 2.<small>25</small> / 2.<small>5</small> / 2.<small>75</small> / 3',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Invulnerability Duration:',
            raw: '2 / 2.25 / 2.5 / 2.75 / 3',
            values: [2, 2.25, 2.5, 2.75, 3],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '2 / 2.25 / 2.5 / 2.75 / 3',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'When she finishes the cast, she rains the swords down around the target, dealing magic damage to nearby enemies.',
        descriptionHTML:
          'When she finishes the cast, she rains the swords down around the target, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '200 / 275 / 350 / 425 / 500 (+ 100% bonus AD) (+ 80% AP)',
            valuesHTML:
              '200 / 275 / 350 / 425 / 500 <span style="color:orange; white-space:normal">(+&nbsp;100% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;80% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '200 / 275 / 350 / 425 / 500 (+ 100% bonus AD) (+ 80% AP)',
            damagetype: 'Magic',
            values: [200, 275, 350, 425, 500],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 275 / 350 / 425 / 500',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 100% bonus AD',
              },
              {
                values: 80,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 80% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Unit',
    affects: 'Allies, Self',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes:
      '<b>Details</b>\n<ul><li><i>Divine Judgment\'s</i> cast time does not interrupt movement and the cast will finish even after <b>Kayle\'s</b>  death.</li>\n<li>Since <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Raw damage"><a href="/wiki/Damage" title="Damage"><img alt="Fear Beyond Death 2.png" src="/wiki/images/Urgot_Fear_Beyond_Death_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">internalraw</a></span> damage ignores invulnerability, the target may still die via the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Nexus obelisk"><a href="/wiki/Nexus_Obelisk" title="Nexus Obelisk"><img alt="Nexus Obelisk.png" src="/wiki/images/Nexus_Obelisk.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Nexus_Obelisk" title="Nexus Obelisk">Nexus Obelisk</a></span>, but the ability will finish at their corpse\'s position regardless.</li>\n<li><i>Divine Judgment</i> will prioritize casting on allies over <b>Kayle</b>. This means that if Kayle\'s and an ally\'s selection ranges are intercepting each other on the cursor\'s position, the cast will always occur on the ally.</li>\n<li>As implied by the description, the invulnerability is granted at the beginning of the 1.<small>5</small> seconds cast time, while the damage is dealt at the end.</li>\n<li>Note that the cast time and the invulnerability duration is independent from each other. Some players may confuse the cast finish as the end of the invulnerability, but the target will be still invulnerable for 0.<small>5</small> / 0.<small>75</small> / 1 / 1.<small>25</small> / 1.<small>5</small> more seconds.</li>\n<li>If casted on herself, <b>Kayle\'s</b> basic <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Range" title="Range">attack range</a></span> is reduced to 400 during <i>Divine Judgment\'s</i> cast time for the purpose of helping her stay in effective range of the ability with attack commands.</li>\n<li>Prior to becoming <span class="template_sbc"><b>Transcended</b></span> via <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayle" data-ability="Divine Ascent" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayle/LoL#Divine_Ascent" title="Divine Ascent"><img alt="Divine Ascent" src="/wiki/images/Kayle_Divine_Ascent.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayle/LoL#Divine_Ascent" title="Kayle/LoL">Divine Ascent</a></span></span>, casting <i>Divine Judgment</i> refreshes the duration of <img alt="Zealous.png" src="/wiki/images/Kayle_Zealous.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> <b>Zeal</b> stacks at the start of the cast time to ensure that it does not expire while she can\'t attack during the cast.</li>\n<li>During cast, an indicator for the damaging area can be seen around the target, however, this is not visible if there is no <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> on the them.</li>\n<li><i>Divine Judgment</i> can be cast on <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clones</a></span> too, including <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Neeko" data-ability="Shapesplitter" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Neeko/LoL#Shapesplitter" title="Shapesplitter"><img alt="Shapesplitter" src="/wiki/images/Neeko_Shapesplitter.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Neeko/LoL#Shapesplitter" title="Neeko/LoL">Shapesplitter</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Wukong" data-ability="Warrior Trickster" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Wukong/LoL#Warrior_Trickster" title="Warrior Trickster"><img alt="Warrior Trickster" src="/wiki/images/Wukong_Warrior_Trickster.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Wukong/LoL#Warrior_Trickster" title="Wukong/LoL">Warrior Trickster</a></span></span>, which are normally not targetable for allies.</li>\n<li>While it\'s uncommon occurence, it is possible to cast <i>Divine Judgment</i> on targets who just entered <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Zombie state"><a href="/wiki/Death#Zombie_states" title="Death#Zombie states"><img alt="Zombie icon.png" src="/wiki/images/Zombie_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Zombie_states" title="Death">zombie state</a></span>. This is only possible with very strict timing and perhaps high latency.</li>\n<li>It\'s recommended to avoid both of the afformentioned interactions, as they renders the usage of <i>Divine Judgment</i> useless in many cases.</li></ul>\n<p><b>Interactions &amp; Other</b>\n</p>\n<ul><li>While the target is invulnerable, a number indicator will appear beneath them whenever they would receive damage to show the amount that was entirely mitigated. This is calculated pre-mitigation, or before resistances and reductions are taken into account.</li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Rapid Firecannon" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rapid_Firecannon" title="Rapid Firecannon\'s"><img alt="Rapid Firecannon\'s" src="/wiki/images/Rapid_Firecannon_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rapid_Firecannon" title="Rapid Firecannon">Rapid Firecannon\'s</a></span></span> <a href="/wiki/Named_item_effect#Energized" title="Named item effect">Energized</a> effect behaves strangely with the set basic attack range:\n<ul><li>If the ability is cast while the effect is ready, the range goes from <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;400</span> to <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;385</span> over 4 <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="A stat update occurs every 0.264 seconds.">stat updates</span> (400 -&gt; 390 -&gt; 387 -&gt; 385). When the cast completes, the proper range needs 2 updates to set in (<span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;660</span> - <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;675</span> while <span class="template_sbc"><b>Arisen</b></span>; <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;710</span> - <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;725</span> while <span class="template_sbc"><b>Transcended</b></span>).</li>\n<li>Gaining the effect during the cast will cause the range to cycle between <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;525</span> and <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;550</span> until the cast finishes, then the proper range is set after 1 update.</li>\n<li>Selling the item during the cast causes the range to be set to <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;250</span>.</li></ul></li></ul>\n<p><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span> Range values are outdated because of patch <a href="/wiki/V11.18" title="V11.18">V11.18</a> changes to <b>Kayle</b>.\n</p>\n<ul><li>The invulnerability can be tracked on the HUD via a buff called <img alt="Divine Judgment.png" src="/wiki/images/Kayle_Divine_Judgment.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> <b>Intervention</b>.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Kayle_Original_064.ogg   "Drown in holy fire!"',
    video: 'Kayle R Divine Judgement',
  },
} satisfies { [skillName in string]: SkillData };
