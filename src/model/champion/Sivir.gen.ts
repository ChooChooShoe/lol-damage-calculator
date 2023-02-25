import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Sivir';

export default {
  'Fleet of Foot': {
    name: 'Fleet of Foot',
    display_name: 'Fleet of Foot',
    champion: 'Sivir',
    skill: 'I',
    image: {
      full: 'Sivir_Passive.png',
      sprite: 'passive3.png',
      group: 'passive',
      x: 336,
      y: 96,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sivir" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sivir/LoL" title="Sivir\'s"><img alt="Sivir\'s" src="/wiki/images/Sivir_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sivir/LoL" title="Sivir/LoL">Sivir\'s</a></span></span> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> and <a href="/wiki/Champion_ability" title="Champion ability">ability</a> hits against enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> grant her <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for a short time, which refreshes on subsequent hits.',
    ],
    description: [
      {
        icon: '/wiki/images/Fleet of Foot.png',
        description:
          "Innate: Sivir's basic attacks and ability hits against enemy  champions grant her  55 − 75 (based on level) bonus movement speed decaying over 1.5 seconds, refreshing on subsequent hits.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Sivir\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> and <a href="/wiki/Champion_ability" title="Champion ability">ability</a> hits against enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> grant her <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="55;60;65;70;75" data-top_values="1;6;11;16;18">55 − 75 (based on level)</span> <b>bonus</b> movement speed</span></span> decaying over 1.<small>5</small> seconds, refreshing on subsequent hits.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate:',
            raw: " Sivir's basic attacks and ability hits against enemy  champions grant her  55 − 75 (based on level) bonus movement speed decaying over 1.5 seconds, refreshing on subsequent hits.",
            values: [
              55, 56.18, 57.35, 58.53, 59.71, 60.88, 62.06, 63.24, 64.41, 65.59,
              66.76, 67.94, 69.12, 70.29, 71.47, 72.65, 73.82, 75,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText:
              'bonus movement speed decaying over 1.5 seconds, refreshing on subsequent hits.',
            pre: "Sivir's basic attacks and ability hits against enemy  champions grant her  55 − 75",
            post: 'bonus movement speed decaying over 1.5 seconds, refreshing on subsequent hits.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes: '* No additional details.',
  },
  'Boomerang Blade': {
    name: 'Boomerang Blade',
    display_name: 'Boomerang Blade',
    champion: 'Sivir',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'SivirQ.png',
      sprite: 'spell12.png',
      group: 'spell',
      x: 192,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '1250',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Outgoing missile">180</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Returning missile">200</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Outgoing missile">1450</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Returning missile">1200</span>',
    cast_time:
      '<span style="color:orangered; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="bonus attack speed" data-displayformula="0.25*(1-(0.5 per 100% \'\'\'bonus\'\'\' attack speed)). \'\'This is capped at 60% reduction at 120% \'\'\'bonus\'\'\' attack speed.\'\'" data-bot_values="0.25;0.231;0.198;0.165;0.132;0.1" data-top_values="0;15.2;41.6;68;94.4;120" data-top_key="%">0.<small>25</small> − 0.<small>1</small> (based on <b>bonus</b> attack speed)</span></span>',
    cost: '55 / 60 / 65 / 70 / 75',
    costtype: 'Mana',
    cooldown: '10 / 9.<small>5</small> / 9 / 8.<small>5</small> / 8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sivir" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sivir/LoL" title="Sivir"><img alt="Sivir" src="/wiki/images/Sivir_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sivir/LoL" title="Sivir/LoL">Sivir</a></span></span> hurls her crossblade in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit. At max range, it homes back to <b>Sivir</b> to deal <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit.',
    ],
    description: [
      {
        icon: '/wiki/images/Boomerang Blade.png',
        description:
          'Active: Sivir hurls her crossblade in the target direction, dealing physical damage to enemies within its path, increased by 0% − 50% (based on critical strike chance).',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Sivir</b> hurls her crossblade in the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies within its path, increased by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#E56013;" data-top_label="critical strike chance" data-displayformula="0.5% per 1% critical strike chance" data-bot_values="0;5;10;15;20;25;30;35;40;45;50" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 50% (based on critical strike chance)</span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical Damage:',
            values:
              '15 / 30 / 45 / 60 / 75 (+ 80 / 85 / 90 / 95 / 100% AD) (+ 60% AP)',
            valuesHTML:
              '15 / 30 / 45 / 60 / 75 <span style="color:orange; white-space:normal">(+&nbsp;80 / 85 / 90 / 95 / 100% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '15 / 30 / 45 / 60 / 75 (+ 80 / 85 / 90 / 95 / 100% AD) (+ 60% AP)',
            damagetype: 'Physical',
            values: [15, 30, 45, 60, 75],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 30 / 45 / 60 / 75',
            children: [
              {
                values: [80, 85, 90, 95, 100],
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 80 / 85 / 90 / 95 / 100% AD',
              },
              {
                values: 60,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 60% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          "Boomerang Blade's damage is reduced by 0% − 60% (based on non-champions hit). Upon reaching maximum range, the crossblade returns to her, resetting the damage modifier and dealing the same damage to enemies on its way back.",
        descriptionHTML:
          '<i>Boomerang Blade\'s</i> damage is reduced by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="non-champions hit" data-displayformula="100%-(15%*Nº of non-champions hit). \'\'This is capped at 40% damage at 4 enemies hit.\'\'" data-bot_values="0;15;30;45;60" data-top_values="0;1;2;3;4" data-bot_key="%">0% − 60% (based on non-champions hit)</span>. Upon reaching maximum range, the crossblade returns to her, resetting the damage modifier and dealing the same damage to enemies on its way back.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Minimum Damage:',
            values:
              '6 / 12 / 18 / 24 / 30 (+ 32 / 34 / 36 / 38 / 40% AD) (+ 24% AP)',
            valuesHTML:
              '6 / 12 / 18 / 24 / 30 <span style="color:orange; white-space:normal">(+&nbsp;32 / 34 / 36 / 38 / 40% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;24% AP)</span>',
          },
          {
            name: 'Total Maximum Champion Damage:',
            values:
              '30 / 60 / 90 / 120 / 150 (+ 160 / 170 / 180 / 190 / 200% AD) (+ 120% AP)',
            valuesHTML:
              '30 / 60 / 90 / 120 / 150 <span style="color:orange; white-space:normal">(+&nbsp;160 / 170 / 180 / 190 / 200% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;120% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Minimum Damage:',
            raw: '6 / 12 / 18 / 24 / 30 (+ 32 / 34 / 36 / 38 / 40% AD) (+ 24% AP)',
            damagetype: 'None',
            values: [6, 12, 18, 24, 30],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '6 / 12 / 18 / 24 / 30',
            children: [
              {
                values: [32, 34, 36, 38, 40],
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 32 / 34 / 36 / 38 / 40% AD',
              },
              {
                values: 24,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 24% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Total Maximum Champion Damage:',
            raw: '30 / 60 / 90 / 120 / 150 (+ 160 / 170 / 180 / 190 / 200% AD) (+ 120% AP)',
            damagetype: 'None',
            values: [30, 60, 90, 120, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 60 / 90 / 120 / 150',
            children: [
              {
                values: [160, 170, 180, 190, 200],
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 160 / 170 / 180 / 190 / 200% AD',
              },
              {
                values: 120,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 120% AP',
              },
            ],
          },
        ],
      },
      {
        description: 'Enemies can be hit only once per pass.',
        descriptionHTML: '<i>Enemies can be hit only once per pass.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'AoE',
    spellshield: 'Special',
    projectile: 'True',
    notes:
      '* Due to the cast time effectively rounding up to full game ticks, at undesturbed game tick interval times the technical minimum cast time is <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.1875 seconds, but rounded up to the next game tick.">0.<small>198</small> seconds</span> reached at <span style="color:orangered; white-space:normal">99.<small>8</small>% <b>bonus</b> attack speed</span>.\n<ul><li>This ability will cast from wherever the caster is at the end of the cast time.</li>\n<li>If <b>Sivir</b> enters <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Zhonya\'s Hourglass" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zhonya%27s_Hourglass" title="stasis"><img alt="stasis" src="/wiki/images/Zhonya%27s_Hourglass_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zhonya%27s_Hourglass" title="Zhonya\'s Hourglass">stasis</a></span></span> during <i>Boomerang Blade\'s</i> initial flight, it will not return to her.\n<ul><li>This will also prevent it from dealing damage a second time.</li></ul></li>\n<li>The damage reduction per unit hit resets back to full damage upon changing direction.</li>\n<li><i>Boomerang Blade</i> will still return to <b>Sivir</b> even if she dies before it changes direction.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> only blocks one instance of damage.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Sivir_Original_Q_2.ogg   "Take this!"',
  },
  Ricochet: {
    name: 'Ricochet',
    display_name: 'Ricochet',
    champion: 'Sivir',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'SivirW.png',
      sprite: 'spell12.png',
      group: 'spell',
      x: 240,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Bounce range">500</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Attack missile speed, same as basic attack">1750</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Bounced missile speed">1000</span>',
    cast_time: 'none',
    cost: '60',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">12</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sivir" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sivir/LoL" title="Sivir\'s"><img alt="Sivir\'s" src="/wiki/images/Sivir_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sivir/LoL" title="Sivir/LoL">Sivir\'s</a></span></span> basic attacks within a few seconds are empowered to bounce to additional surrounding enemies, dealing physical damage. If the attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strikes</a></span>, the bounces will do so as well.',
    ],
    description: [
      {
        icon: '/wiki/images/Ricochet.png',
        description:
          'Active: Sivir empowers her crossblade for the next 4 seconds, gaining  bonus attack speed and causing her basic attacks to bounce to additional surrounding enemies, dealing them physical damage. If the triggering attack  critically strikes, the bounces will do so as well. Ricochet deals 65% damage against  minions and executes them if they would be left below  15 health.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Sivir</b> empowers her crossblade for the next 4 seconds, gaining <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> and causing her basic attacks to bounce to additional surrounding enemies, dealing them <span style="color: #FF8C34; white-space:normal">physical damage</span>. If the triggering attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strikes</a></span>, the bounces will do so as well. <i>Ricochet</i> deals 65% damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and executes them if they would be left below <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">15 health</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Sivir empowers her crossblade for the next 4 seconds, gaining  bonus attack speed and causing her basic attacks to bounce to additional surrounding enemies, dealing them physical damage',
            increasedStat: 'bonus_ad',
            values: 4,
            units: '',
            unitsText:
              'empowers her crossblade for the next 4 seconds, gaining  bonus attack speed and causing her basic attacks to bounce to additional surrounding enemies, dealing them physical damage',
            pre: 'Sivir empowers her crossblade for the next 4 seconds, gaining  bonus attack speed and causing her basic attacks to bounce to additional surrounding enemies, dealing them physical damage',
          },
          {
            effectType: 'Heal',
            name: 'Line 3:',
            raw: 'Ricochet deals 65% damage against  minions and executes them if they would be left below  15 health.',
            healType: 'BonusHealth',
            values: 6,
            valuesIsPercent: true,
            units: 'total_hp',
            unitsText:
              'damage against  minions and executes them if they would be left below  15 health.deals 65',
            pre: 'Ricochet deals 65% damage against  minions and executes them if they would be left below  15 health.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Attack Speed:',
            values: '20 / 25 / 30 / 35 / 40%',
            valuesHTML: '20 / 25 / 30 / 35 / 40%',
          },
          {
            name: 'Bounce Damage:',
            values: '25 / 30 / 35 / 40 / 45% AD',
            valuesHTML:
              '<span style="color:orange; white-space:normal">25 / 30 / 35 / 40 / 45% AD</span>',
          },
          {
            name: 'Minion Bounce Damage:',
            values: '16.25 / 19.5 / 22.75 / 26 / 29.25% AD',
            valuesHTML:
              '<span style="color:orange; white-space:normal">16.<small>25</small> / 19.<small>5</small> / 22.<small>75</small> / 26 / 29.<small>25</small>% AD</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '20 / 25 / 30 / 35 / 40%',
            values: [20, 25, 30, 35, 40],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 25 / 30 / 35 / 40%',
          },
          {
            effectType: 'Damage',
            name: 'Bounce Damage:',
            raw: '25 / 30 / 35 / 40 / 45% AD',
            damagetype: 'None',
            values: [25, 30, 35, 40, 45],
            valuesIsPercent: true,
            units: 'total_ad',
            unitsText: 'AD',
            pre: '25 / 30 / 35 / 40 / 45% AD',
          },
          {
            effectType: 'Damage',
            name: 'Minion Bounce Damage:',
            raw: '16.25 / 19.5 / 22.75 / 26 / 29.25% AD',
            damagetype: 'None',
            values: [16.25, 19.5, 22.75, 26, 29.25],
            valuesIsPercent: true,
            units: 'total_ad',
            unitsText: 'AD',
            pre: '16.25 / 19.5 / 22.75 / 26 / 29.25% AD',
          },
        ],
      },
      {
        description:
          'Bounces occur only up to 8 times and can target each enemy up to one additional time per empowered attack. They prioritize the nearest new target, then the nearest target if no new targets are available.',
        descriptionHTML:
          'Bounces occur only up to 8 times and can target each enemy up to one additional time per empowered attack. They prioritize the nearest new target, then the nearest target if no new targets are available.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Bounces occur only up to 8 times and can target each enemy up to one additional time per empowered attack',
            damagetype: 'None',
            values: 8,
            user: 'target',
            units: 'total_ad',
            unitsText:
              'occur only up to 8 times and can target each enemy up to one additional time per empowered attack',
            pre: 'Bounces occur only up to 8 times and can target each enemy up to one additional time per empowered attack',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Ricochet  resets Sivir's basic attack timer. The target does not have to be  visible to be bounced to.",
        descriptionHTML:
          '<i>Ricochet <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Sivir\'s</b> basic attack timer. The target does not have to be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> to be bounced to.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    damagetype: 'Physical',
    spelleffects: 'default',
    onhiteffects: 'Special',
    spellshield: false,
    projectile: 'True',
    notes:
      '* <i>Ricochet</i>-enhanced basic attacks can bounce from structures onto secondary targets but not from nearby units onto structures.\n<ul><li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: <i>Ricochet\'s </i> interactions with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodging</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocking</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinding</a></span> effects.</li>\n<li><i>Ricochet</i> do not apply to additional targets with <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane"><img alt="Runaan\'s Hurricane" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">Runaan\'s Hurricane</a></span></span>.</li></ul>',
  },
  'Spell Shield': {
    name: 'Spell Shield',
    display_name: 'Spell Shield',
    champion: 'Sivir',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'SivirE.png',
      sprite: 'spell12.png',
      group: 'spell',
      x: 288,
      y: 0,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cooldown: '24 / 22.<small>5</small> / 21 / 19.<small>5</small> / 18',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sivir" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sivir/LoL" title="Sivir"><img alt="Sivir" src="/wiki/images/Sivir_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sivir/LoL" title="Sivir/LoL">Sivir</a></span></span> gains a brief <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span>, which heals her and activates <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sivir" data-ability="Fleet of Foot" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sivir/LoL#Fleet_of_Foot" title="Fleet of Foot"><img alt="Fleet of Foot" src="/wiki/images/Sivir_Fleet_of_Foot.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sivir/LoL#Fleet_of_Foot" title="Sivir/LoL">Fleet of Foot</a></span></span> upon a successful block.',
    ],
    description: [
      {
        icon: '/wiki/images/Spell Shield.png',
        description:
          'Active: Sivir gains a  spell shield for 1.5 seconds. Upon successfully blocking a hostile effect, she  heals herself and activates  Fleet of Foot after 0.25 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Sivir</b> gains a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span> for 1.<small>5</small> seconds. Upon successfully blocking a hostile effect, she <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> herself and activates <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sivir" data-ability="Fleet of Foot" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sivir/LoL#Fleet_of_Foot" title="Fleet of Foot"><img alt="Fleet of Foot" src="/wiki/images/Sivir_Fleet_of_Foot.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sivir/LoL#Fleet_of_Foot" title="Sivir/LoL">Fleet of Foot</a></span></span></i> after 0.<small>25</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Active:',
            raw: ' Sivir gains a  spell shield for 1.5 seconds',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: 1,
            user: 'none',
            units: '',
            unitsText: 'gains a  spell shield for 1.5 seconds',
            pre: 'Sivir gains a  spell shield for 1.5 seconds',
          },
        ],
        leveling: [
          {
            name: 'Heal:',
            values: '60 / 65 / 70 / 75 / 80% AD (+ 50% AP)',
            valuesHTML:
              '<span style="color:orange; white-space:normal">60 / 65 / 70 / 75 / 80% AD</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Heal:',
            raw: '60 / 65 / 70 / 75 / 80% AD (+ 50% AP)',
            healType: 'DrainEffect',
            values: [60, 65, 70, 75, 80],
            valuesIsPercent: true,
            units: 'total_ad',
            unitsText: 'AD',
            pre: '60 / 65 / 70 / 75 / 80% AD',
            children: [
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
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    notes:
      '* <i>Spell Shield</i> will heal and activate <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sivir" data-ability="Fleet of Foot" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sivir/LoL#Fleet_of_Foot" title="Fleet of Foot"><img alt="Fleet of Foot" src="/wiki/images/Sivir_Fleet_of_Foot.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sivir/LoL#Fleet_of_Foot" title="Sivir/LoL">Fleet of Foot</a></span></span> if any effect is blocked. This includes effects such as <a href="/wiki/Champion_ability" title="Champion ability">champion abilities</a>, <a href="/wiki/Named_item_effect" title="Named item effect">item effects</a>, <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Dragon" title="Dragon\'s"><img alt="Dragon\'s" src="/wiki/images/DragonSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Dragon" title="Dragon">Dragon\'s</a></span></span> basic attacks, as well as the abilities of <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Baron_Nashor" title="Baron Nashor"><img alt="Baron Nashor" src="/wiki/images/Baron_NashorSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Baron_Nashor" class="mw-redirect" title="Baron Nashor">Baron Nashor</a></span></span> and <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rift_Herald" title="Rift Herald"><img alt="Rift Herald" src="/wiki/images/Rift_HeraldSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rift_Herald" class="mw-redirect" title="Rift Herald">Rift Herald</a></span></span>.\n<ul><li><i>Spell Shield</i> will still block abilities that have already been applied to <b>Sivir</b> if the delayed effects of that ability is <a href="/wiki/Area_of_effect" title="Area of effect">area of effect</a> (e.g. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Brand" data-ability="Blaze 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Brand/LoL#Blaze_2" title="Blaze\'s"><img alt="Blaze\'s" src="/wiki/images/Brand_Blaze_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Brand/LoL#Blaze_2" title="Brand/LoL">Blaze\'s</a></span></span> explosion, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fizz" data-ability="Chum the Waters" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fizz/LoL#Chum_the_Waters" title="Chum the Waters"><img alt="Chum the Waters" src="/wiki/images/Fizz_Chum_the_Waters.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fizz/LoL#Chum_the_Waters" title="Fizz/LoL">Chum the Waters</a></span></span>, and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zilean" data-ability="Time Bomb" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zilean/LoL#Time_Bomb" title="Time Bomb"><img alt="Time Bomb" src="/wiki/images/Zilean_Time_Bomb.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zilean/LoL#Time_Bomb" title="Zilean/LoL">Time Bomb</a></span></span>).</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Sivir_Original_EProc_1.ogg   "Nice try."',
  },
  'On the Hunt': {
    name: 'On the Hunt',
    display_name: 'On the Hunt',
    champion: 'Sivir',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'SivirR.png',
      sprite: 'spell12.png',
      group: 'spell',
      x: 336,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius: '1000',
    cast_time: 'none',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">120 / 110 / 100 / 90 / 80</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <b>Sivir</b> gains <i>On the Hunt</i> for a period, and creates an aura that grants allied champions <i>On the Hunt</i> for the remaining duration.',
      '<span class="template_sbc"><b>On the Hunt:</b></span> Gain <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/On the Hunt.png',
        description:
          'Active: Sivir gains On the Hunt for a duration and grants it to nearby allied champions for the remaining duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Sivir</b> gains <i>On the Hunt</i> for a duration and grants it to nearby allied champions for the remaining duration.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Buff Duration:',
            values: '8 / 9 / 10 / 11 / 12',
            valuesHTML: '8 / 9 / 10 / 11 / 12',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Buff Duration:',
            raw: '8 / 9 / 10 / 11 / 12',
            values: [8, 9, 10, 11, 12],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '8 / 9 / 10 / 11 / 12',
          },
        ],
      },
      {
        description: 'On the Hunt: Gain  bonus movement speed.',
        descriptionHTML:
          '<span class="template_sbc"><b>On the Hunt:</b></span> Gain <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Bonus Movement Speed:',
            values: '20 / 22.5 / 25 / 27.5 / 30%',
            valuesHTML:
              '20 / 22.<small>5</small> / 25 / 27.<small>5</small> / 30%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '20 / 22.5 / 25 / 27.5 / 30%',
            values: [20, 22.5, 25, 27.5, 30],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 22.5 / 25 / 27.5 / 30%',
          },
        ],
      },
      {
        description:
          "While active, Sivir's basic attacks on-attack reduce her basic abilities'  current cooldowns by 0.5 seconds each.",
        descriptionHTML:
          'While active, <b>Sivir\'s</b> basic attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> reduce her basic abilities\' <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldowns</span> by 0.<small>5</small> seconds each.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "On the Hunt's duration is refreshed whenever Sivir scores a  takedown against an enemy  champion within 3 seconds of damaging them.",
        descriptionHTML:
          '<i>On the Hunt\'s</i> duration is refreshed whenever <b>Sivir</b> scores a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> within 3 seconds of damaging them.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: "On the Hunt's duration is refreshed whenever Sivir scores a  takedown against an enemy  champion within 3 seconds of damaging them.",
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              "the Hunt's duration is refreshed whenever Sivir scores a  takedown against an enemy  champion within 3 seconds of damaging them.",
            pre: "On the Hunt's duration is refreshed whenever Sivir scores a  takedown against an enemy  champion within 3 seconds of damaging them.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Allies',
    notes: '* No additional notes.',
  },
} satisfies { [skillName in string]: SkillData };
