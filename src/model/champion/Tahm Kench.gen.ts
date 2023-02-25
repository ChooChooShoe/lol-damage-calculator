import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Tahm Kench';

export default {
  'An Acquired Taste': {
    name: 'An Acquired Taste',
    display_name: 'An Acquired Taste',
    champion: 'Tahm Kench',
    skill: 'I',
    image: {
      full: 'TahmKenchP.png',
      sprite: 'passive4.png',
      group: 'passive',
      x: 192,
      y: 0,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL" title="Tahm Kench\'s"><img alt="Tahm Kench\'s" src="/wiki/images/Tahm_Kench_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL" title="Tahm Kench/LoL">Tahm Kench\'s</a></span></span> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="Tongue Lash" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#Tongue_Lash" title="Tongue Lash"><img alt="Tongue Lash" src="/wiki/images/Tahm_Kench_Tongue_Lash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#Tongue_Lash" title="Tahm Kench/LoL">Tongue Lash</a></span></span></i> deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> based on <span style="color: #1F995C; white-space:normal">his <b>bonus</b> health</span>, and apply a stack of <i>An Acquired Taste</i> against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> that stacks up to a cap.',
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="Tongue Lash" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#Tongue_Lash" title="Tongue Lash"><img alt="Tongue Lash" src="/wiki/images/Tahm_Kench_Tongue_Lash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#Tongue_Lash" title="Tahm Kench/LoL">Tongue Lash</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="Devour" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#Devour" title="Devour"><img alt="Devour" src="/wiki/images/Tahm_Kench_Devour.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#Devour" title="Tahm Kench/LoL">Devour</a></span></span></i> gain additional effects against enemies with max stacks, consuming them all.',
    ],
    description: [
      {
        icon: '/wiki/images/An Acquired Taste.png',
        description:
          "Innate: Tahm Kench's basic attacks  on-hit and  Tongue Lash are empowered to deal 8 − 60 (based on level) (+ 2% AP per 100 bonus health) (+ 3% of his bonus health) bonus magic damage and apply a stack of An Acquired Taste against enemy  champions for 5 seconds, refreshing on subsequent hits and stacking up to 3 times. Stacks expire by one every 0.67 seconds when the duration ends.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Tahm Kench\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="Tongue Lash" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#Tongue_Lash" title="Tongue Lash"><img alt="Tongue Lash" src="/wiki/images/Tahm_Kench_Tongue_Lash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#Tongue_Lash" title="Tahm Kench/LoL">Tongue Lash</a></span></span></i> are empowered to deal <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#00B0F0;" data-start="8;" data-finish="60;" data-bot_values="8;11.06;14.12;17.18;20.24;23.29;26.35;29.41;32.47;35.53;38.59;41.65;44.71;47.76;50.82;53.88;56.94;60" data-top_values="">8 − 60 (based on level)</span> (<span style="color: #7A6DFF; white-space:normal">+&nbsp;2% AP</span> <span style="color: #1F995C; white-space:normal">per 100 <b>bonus</b> health</span>) <span style="color: #1F995C; white-space:normal">(+&nbsp;3% of his <b>bonus</b> health)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> and apply a <a href="/wiki/Stack" title="Stack">stack</a> of <i>An Acquired Taste</i> against enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> for 5 seconds, refreshing on subsequent hits and stacking up to 3 times. Stacks expire by one every 0.<small>67</small> seconds when the duration ends.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Innate:',
            raw: " Tahm Kench's basic attacks  on-hit and  Tongue Lash are empowered to deal 8 − 60 (based on level) (+ 2% AP per 100 bonus health) (+ 3% of his bonus health) bonus magic damage and apply a stack of An Acquired Taste against enemy  champions for 5 seconds, refreshing on subsequent hits and stacking up to 3 times",
            healType: 'BonusHealth',
            values: [
              8, 11.06, 14.12, 17.18, 20.24, 23.29, 26.35, 29.41, 32.47, 35.53,
              38.59, 41.65, 44.71, 47.76, 50.82, 53.88, 56.94, 60,
            ],
            basedOn: 'level',
            units: 'total_ap',
            unitsText:
              'bonus magic damage and apply a stack of An Acquired Taste against enemy  champions for 5 seconds, refreshing on subsequent hits and stacking up to 3 times',
            pre: "Tahm Kench's basic attacks  on-hit and  Tongue Lash are empowered to deal 8 − 60",
            post: 'bonus magic damage and apply a stack of An Acquired Taste against enemy  champions for 5 seconds, refreshing on subsequent hits and stacking up to 3 times',
            children: [
              {
                values: 2,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP per 100 bonus health',
                pre: '+ 2% AP per 100 bonus health',
              },
              {
                values: 3,
                valuesIsPercent: true,
                units: 'bonus_hp',
                unitsText: 'of his bonus health',
                pre: '+ 3% of his bonus health',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Tongue Lash and  Devour gain additional effects against enemies with 3 stacks, consuming them all.',
        descriptionHTML:
          '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="Tongue Lash" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#Tongue_Lash" title="Tongue Lash"><img alt="Tongue Lash" src="/wiki/images/Tahm_Kench_Tongue_Lash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#Tongue_Lash" title="Tahm Kench/LoL">Tongue Lash</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="Devour" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#Devour" title="Devour"><img alt="Devour" src="/wiki/images/Tahm_Kench_Devour.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#Devour" title="Tahm Kench/LoL">Devour</a></span></span></i> gain additional effects against enemies with 3 stacks, consuming them all.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Tongue Lash and  Devour gain additional effects against enemies with 3 stacks, consuming them all.',
            increasedStat: 'feastStacks',
            values: 3,
            units: '',
            unitsText:
              'Lash and  Devour gain additional effects against enemies with 3 stacks, consuming them all.',
            pre: 'Tongue Lash and  Devour gain additional effects against enemies with 3 stacks, consuming them all.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    damagetype: 'Magic',
    spelleffects: 'Proc',
    notes: '* The passive bonus damage applies to turrets.',
  },
  'Tongue Lash': {
    name: 'Tongue Lash',
    display_name: 'Tongue Lash',
    champion: 'Tahm Kench',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'TahmKenchQ.png',
      sprite: 'spell12.png',
      group: 'spell',
      x: 96,
      y: 144,
      w: 48,
      h: 48,
    },
    range: '900',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 140',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Increased by size modifiers">2800</span>',
    cast_time: '0.<small>25</small>',
    cost: '50 / 46 / 42 / 38 / 34',
    costtype: 'Mana',
    cooldown: '7 / 6.<small>5</small> / 6 / 5.<small>5</small> / 5',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <b>Tahm Kench</b> lashes his tongue in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit and shortly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them. If this hits an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, <b>Tahm Kench</b> also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> based on <span style="color: #1F995C; white-space:normal">his <b>missing</b> health</span>.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="An Acquired Taste" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#An_Acquired_Taste" title="An Acquired Taste"><img alt="An Acquired Taste" src="/wiki/images/Tahm_Kench_An_Acquired_Taste.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#An_Acquired_Taste" title="Tahm Kench/LoL">An Acquired Taste</a></span></span> Bonus:</b></span> The target is briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span>. <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="Devour" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#Devour" title="Devour"><img alt="Devour" src="/wiki/images/Tahm_Kench_Devour.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#Devour" title="Tahm Kench/LoL">Devour</a></span></span></i> can be cast during <i>Tongue Lash</i> at no cost to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pull</a></span> the target to <b>Tahm Kench</b> before swallowing them.',
    ],
    description: [
      {
        icon: '/wiki/images/Tongue Lash.png',
        description:
          'Active: Tahm Kench lashes his tongue in the target direction that deals magic damage to the first enemy hit and  slows them by 50% for 2 seconds. If this hits an enemy  champion, Tahm Kench also  heals himself.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Tahm Kench</b> lashes his tongue in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 50% for 2 seconds. If this hits an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, <b>Tahm Kench</b> also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> himself.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Tahm Kench lashes his tongue in the target direction that deals magic damage to the first enemy hit and  slows them by 50% for 2 seconds',
            damagetype: 'Magic',
            values: 5,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'for 2 secondsKench lashes his tongue in the target direction that deals magic damage to the first enemy hit and  slows them by 50',
            pre: 'Tahm Kench lashes his tongue in the target direction that deals magic damage to the first enemy hit and  slows them by 50% for 2 seconds',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values:
              '80 / 130 / 180 / 230 / 280 (+ 100% AP) (+ 8 − 60 (based on level) (+ 2% AP per 100 bonus health) (+ 3% bonus health))',
            valuesHTML:
              '80 / 130 / 180 / 230 / 280 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;100% AP)</span><br><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="An Acquired Taste" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#An_Acquired_Taste" title="(+ 8 − 60 (based on level) (+&nbsp;2% AP per 100 bonus health) (+&nbsp;3% bonus health))"><img alt="(+ 8 − 60 (based on level) (+&nbsp;2% AP per 100 bonus health) (+&nbsp;3% bonus health))" src="/wiki/images/Tahm_Kench_An_Acquired_Taste.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#An_Acquired_Taste" title="Tahm Kench/LoL">(+ <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="8;" data-finish="60;" data-bot_values="8;11.06;14.12;17.18;20.24;23.29;26.35;29.41;32.47;35.53;38.59;41.65;44.71;47.76;50.82;53.88;56.94;60" data-top_values="">8 − 60 (based on level)</span> (<span style="color: #7A6DFF; white-space:normal">+&nbsp;2% AP</span> <span style="color: #1F995C; white-space:normal">per 100 <b>bonus</b> health</span>) <span style="color: #1F995C; white-space:normal">(+&nbsp;3% <b>bonus</b> health)</span>)</a></span></span>',
          },
          {
            name: 'Heal:',
            values:
              '10 / 15 / 20 / 25 / 30 (+ 5 / 5.5 / 6 / 6.5 / 7% of missing health)',
            valuesHTML:
              '10 / 15 / 20 / 25 / 30 <span style="color: #1F995C; white-space:normal">(+&nbsp;5 / 5.<small>5</small> / 6 / 6.<small>5</small> / 7% of <b>missing</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Magic Damage:',
            raw: '80 / 130 / 180 / 230 / 280 (+ 100% AP) (+ 8 − 60 (based on level) (+ 2% AP per 100 bonus health) (+ 3% bonus health))',
            healType: 'BonusHealth',
            values: [80, 130, 180, 230, 280],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 130 / 180 / 230 / 280',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 100% AP',
              },
              {
                values: [
                  8, 11.06, 14.12, 17.18, 20.24, 23.29, 26.35, 29.41, 32.47,
                  35.53, 38.59, 41.65, 44.71, 47.76, 50.82, 53.88, 56.94, 60,
                ],
                basedOn: 'level',
                user: 'none',
                units: '',
                unitsText: '',
                pre: '+ 8 − 60',
                children: [
                  {
                    values: 2,
                    valuesIsPercent: true,
                    units: 'total_ap',
                    unitsText: 'AP per 100 bonus health',
                    pre: '+ 2% AP per 100 bonus health',
                  },
                  {
                    values: 3,
                    valuesIsPercent: true,
                    units: 'bonus_hp',
                    unitsText: 'bonus health',
                    pre: '+ 3% bonus health',
                  },
                ],
              },
            ],
          },
          {
            effectType: 'Heal',
            name: 'Heal:',
            raw: '10 / 15 / 20 / 25 / 30 (+ 5 / 5.5 / 6 / 6.5 / 7% of missing health)',
            healType: 'BonusHealth',
            values: [10, 15, 20, 25, 30],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 15 / 20 / 25 / 30',
            children: [
              {
                values: [5, 5.5, 6, 6.5, 7],
                valuesIsPercent: true,
                units: 'missing_hp',
                unitsText: 'of missing health',
                pre: '+ 5 / 5.5 / 6 / 6.5 / 7% of missing health',
              },
            ],
          },
        ],
      },
      {
        description:
          'An Acquired Taste Bonus: The target is  stunned for 1.5 seconds.  Devour can be cast during Tongue Lash at no cost to pull the target to Tahm Kench before swallowing them.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="An Acquired Taste" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#An_Acquired_Taste" title="An Acquired Taste"><img alt="An Acquired Taste" src="/wiki/images/Tahm_Kench_An_Acquired_Taste.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#An_Acquired_Taste" title="Tahm Kench/LoL">An Acquired Taste</a></span></span> Bonus:</b></span> The target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for 1.<small>5</small> seconds. <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="Devour" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#Devour" title="Devour"><img alt="Devour" src="/wiki/images/Tahm_Kench_Devour.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#Devour" title="Tahm Kench/LoL">Devour</a></span></span></i> can be cast during <i>Tongue Lash</i> at no cost to pull the target to <b>Tahm Kench</b> before swallowing them.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'An Acquired Taste Bonus:',
            raw: ' The target is  stunned for 1.5 seconds',
            values: 1,
            user: 'none',
            units: '',
            unitsText: 'target is  stunned for 1.5 seconds',
            pre: 'The target is  stunned for 1.5 seconds',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Tahm Kench is  unable to move, attack, or cast  Abyssal Dive or  Devour on a different target while his tongue is in flight. Tongue Lash's range and travel speed can be increased by Tahm Kench's size.",
        descriptionHTML:
          '<i><b>Tahm Kench</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">unable</a></span> to move, attack, or cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="Abyssal Dive" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#Abyssal_Dive" title="Abyssal Dive"><img alt="Abyssal Dive" src="/wiki/images/Tahm_Kench_Abyssal_Dive.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#Abyssal_Dive" title="Tahm Kench/LoL">Abyssal Dive</a></span></span> or <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="Devour" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#Devour" title="Devour"><img alt="Devour" src="/wiki/images/Tahm_Kench_Devour.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#Devour" title="Tahm Kench/LoL">Devour</a></span></span> on a different target while his tongue is in flight. Tongue Lash\'s range and travel speed can be increased by <b>Tahm Kench\'s</b> <a href="/wiki/Size" title="Size">size</a>.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Spell',
    spellshield: true,
    projectile: 'True',
    notes:
      '* <b>Tongue Lash\'s</b> range and speed scale 1:1 alongside any <a href="/wiki/Size" title="Size">size</a> modifiers to <b>Tahm Kench</b>, but will not be reduced <i>below</i> their base values if his overall size modifier is smaller than 100%.\n<ul><li><ul><li>As the missile range and speed scale simultaneously, <b>Tongue Lash</b> will always take <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.32142857142857 seconds, but rounded up to the next game tick.">0.<small>33</small> seconds</span> to reach its maximum range (no matter the cast range).</li>\n<li>Because of this, increasing <b>Tahm Kench\'s</b> size with items such as <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> and/or <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Elixir of Iron" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elixir_of_Iron" title="Elixir of Iron"><img alt="Elixir of Iron" src="/wiki/images/Elixir_of_Iron_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elixir_of_Iron" title="Elixir of Iron">Elixir of Iron</a></span></span> allows him to hit targets at even the same distance more quickly and giving them less time to dodge.</li></ul></li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="Devour" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#Devour" title="Devour"><img alt="Devour" src="/wiki/images/Tahm_Kench_Devour.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#Devour" title="Tahm Kench/LoL">Devour</a></span></span> can be \'queued\' at any point during <i>Tongue Lash</i> (including the wind-up animation) and will not go on cooldown if <b>Tahm Kench</b> fails to hit a valid target with <i>Tongue Lash</i>.</li>\n<li>All three <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="An Acquired Taste" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#An_Acquired_Taste" title="An Acquired Taste"><img alt="An Acquired Taste" src="/wiki/images/Tahm_Kench_An_Acquired_Taste.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#An_Acquired_Taste" title="Tahm Kench/LoL">An Acquired Taste</a></span></span> stacks will be consumed even if <i>Tongue Lash\'s</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> is negated.</li>\n<li>This ability will cast from wherever the caster is at the start of the cast time.</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Cast time\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All the other item-actives are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death, unless protected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">Resurrection</a></span>\n</li></td></tr></tbody></table>',
  },
  'Abyssal Dive': {
    name: 'Abyssal Dive',
    display_name: 'Abyssal Dive',
    champion: 'Tahm Kench',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'TahmKenchW.png',
      sprite: 'spell12.png',
      group: 'spell',
      x: 144,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '1000 / 1050 / 1100 / 1150 / 1200',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Emerging effects radius">275</span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Sight radius on target location during channel">200</span>',
    cost: '60 / 75 / 90 / 105 / 120',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on-cast">21 / 20 / 19 / 18 / 17</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL" title="Tahm Kench"><img alt="Tahm Kench" src="/wiki/images/Tahm_Kench_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL" title="Tahm Kench/LoL">Tahm Kench</a></span></span> briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channels"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span>, then dives into the waters to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blink</a></span> to the target location. He emerges to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies, as well as briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock up</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> them.',
      'If this hits at least one enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, a portion of the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> and <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana cost</span></span> are refunded.',
      "<i>\"Boy, the world's one river, and I'm its king. Ain't no place I ain't been; ain't no place I can't go again.\"</i>",
    ],
    description: [
      {
        icon: '/wiki/images/Abyssal Dive.png',
        description:
          'Active: Tahm Kench  channels for 1.35 seconds as he dives into the waters, then  blinks to the target location after a 0.15-second delay and remains  unable to act for 0.65 seconds after the channel completes. Abyssal Dive grants  sight of the area during the channel.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Tahm Kench</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channels"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for 1.<small>35</small> seconds as he dives into the waters, then <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> to the target location after a 0.<small>15</small>-second delay and remains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">unable to act</a></span> for 0.<small>65</small> seconds after the channel completes. <i>Abyssal Dive</i> grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area during the channel.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: ' Tahm Kench  channels for 1.35 seconds as he dives into the waters, then  blinks to the target location after a 0.15-second delay and remains  unable to act for 0.65 seconds after the channel completes',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'Kench  channels for 1.35 seconds as he dives into the waters, then  blinks to the target location after a 0.15-second delay and remains  unable to act for 0.65 seconds after the channel completes',
            pre: 'Tahm Kench  channels for 1.35 seconds as he dives into the waters, then  blinks to the target location after a 0.15-second delay and remains  unable to act for 0.65 seconds after the channel completes',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Tahm Kench emerges to deal magic damage to nearby enemies, as well as  knock up and  stun them for 1 second. If this hits at least one enemy  champion, 40% of Abyssal Dive's  cooldown and  mana cost are refunded.",
        descriptionHTML:
          '<b>Tahm Kench</b> emerges to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies, as well as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock up</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> them for 1 second. If this hits at least one enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, 40% of <i>Abyssal Dive\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> and <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana</span></span> cost are refunded.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Tahm Kench emerges to deal magic damage to nearby enemies, as well as  knock up and  stun them for 1 second',
            damagetype: 'Magic',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'Kench emerges to deal magic damage to nearby enemies, as well as  knock up and  stun them for 1 second',
            pre: 'Tahm Kench emerges to deal magic damage to nearby enemies, as well as  knock up and  stun them for 1 second',
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: "If this hits at least one enemy  champion, 40% of Abyssal Dive's  cooldown and  mana cost are refunded.",
            values: 4,
            valuesIsPercent: true,
            units: 'total_mana',
            unitsText:
              "of Abyssal Dive's  cooldown and  mana cost are refunded.this hits at least one enemy  champion, 40",
            pre: "If this hits at least one enemy  champion, 40% of Abyssal Dive's  cooldown and  mana cost are refunded.",
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '100 / 135 / 170 / 205 / 240 (+ 150% AP)',
            valuesHTML:
              '100 / 135 / 170 / 205 / 240 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;150% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '100 / 135 / 170 / 205 / 240 (+ 150% AP)',
            damagetype: 'Magic',
            values: [100, 135, 170, 205, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 135 / 170 / 205 / 240',
            children: [
              {
                values: 150,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 150% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          "Enemies can see the indicator for Tahm Kench's destination after he has channeled for 0.75 seconds. Abyssal Dive will cast at max range if cast beyond that.",
        descriptionHTML:
          "<i>Enemies can see the indicator for <b>Tahm Kench's</b> destination after he has channeled for 0.<small>75</small> seconds. Abyssal Dive will cast at max range if cast beyond that.</i>",
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Self, Allies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes:
      '* <b>Tahm Kench</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Vanish"><a href="/wiki/Untargetability#Vanish" title="Untargetability#Vanish"><img alt="Hallucinate.png" src="/wiki/images/Shaco_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetability#Vanish" title="Untargetability">vanished</a></span> (but does not become untargetable) during the 0.<small>15</small> seconds delay.\n<ul><li>The following table refers for interactions while <b>Tahm Kench</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All the other item-actives are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/26/Grounded_icon.png/revision/latest?cb=20160509000039" class="image"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Grounding effects</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/9/9d/Stun_icon.png/revision/latest?cb=20171201223940" class="image"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Immobilizing effects</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>\n<ul><li>The following table refers for interactions while <b>Tahm Kench</b> is unable to act:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All items are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death\n</li></td></tr></tbody></table>',
  },
  'Thick Skin': {
    name: 'Thick Skin',
    display_name: 'Thick Skin',
    champion: 'Tahm Kench',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'TahmKenchE.png',
      sprite: 'spell12.png',
      group: 'spell',
      x: 192,
      y: 144,
      w: 48,
      h: 48,
    },
    cast_time: '0.<small>25</small>',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts upon shield destruction or expiration">3</span>',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL" title="Tahm Kench"><img alt="Tahm Kench" src="/wiki/images/Tahm_Kench_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL" title="Tahm Kench/LoL">Tahm Kench</a></span></span> stores <a href="/wiki/Health#Grey_health" title="Health">grey health</a> equal to a portion of damage taken, increased while he is near at least 2 enemy champions.',
      'While <i>Thick Skin</i> is off cooldown, and after a few seconds without taking damage, <b>Tahm Kench</b> rapidly consumes his grey health to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> up to a portion.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Tahm Kench</b> converts his grey health into a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> that lasts a short time.',
    ],
    description: [
      {
        description:
          'Passive: Tahm Kench stores a portion of the post-mitigation damage he takes as grey health on his health bar, increased while there are at least 2 nearby  visible enemy champions either dead or alive. He can store up to 300% of his maximum health.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Tahm Kench</b> stores a portion of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after modifiers">post-mitigation damage</span> he takes as <a href="/wiki/Health#Grey_health" title="Health">grey health</a> on his <a href="/wiki/Health_bar" title="Health bar">health bar</a>, increased while there are at least 2 nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy champions either dead or alive. He can store up to <span style="color: #1F995C; white-space:normal">300% of his <b>maximum</b> health</span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Passive:',
            raw: ' Tahm Kench stores a portion of the post-mitigation damage he takes as grey health on his health bar, increased while there are at least 2 nearby  visible enemy champions either dead or alive',
            healType: 'BonusHealth',
            values: 2,
            units: 'total_ad',
            unitsText:
              'Kench stores a portion of the post-mitigation damage he takes as grey health on his health bar, increased while there are at least 2 nearby  visible enemy champions either dead or alive',
            pre: 'Tahm Kench stores a portion of the post-mitigation damage he takes as grey health on his health bar, increased while there are at least 2 nearby  visible enemy champions either dead or alive',
          },
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: 'He can store up to 300% of his maximum health.',
            healType: 'BonusHealth',
            values: 3,
            valuesIsPercent: true,
            units: 'maximum_hp',
            unitsText: 'of his maximum health.can store up to 300',
            pre: 'He can store up to 300% of his maximum health.',
          },
        ],
        leveling: [
          {
            name: 'Damage Stored into Grey Health:',
            values: '13 / 21 / 29 / 37 / 45%',
            valuesHTML: '13 / 21 / 29 / 37 / 45%',
          },
          {
            name: 'Increased Damage Stored into Grey Health:',
            values: '40 / 42.5 / 45 / 47.5 / 50%',
            valuesHTML:
              '40 / 42.<small>5</small> / 45 / 47.<small>5</small> / 50%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Damage Stored into Grey Health:',
            raw: '13 / 21 / 29 / 37 / 45%',
            healType: 'BonusHealth',
            values: [13, 21, 29, 37, 45],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '13 / 21 / 29 / 37 / 45%',
          },
          {
            effectType: 'Heal',
            name: 'Increased Damage Stored into Grey Health:',
            raw: '40 / 42.5 / 45 / 47.5 / 50%',
            healType: 'BonusHealth',
            values: [40, 42.5, 45, 47.5, 50],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 42.5 / 45 / 47.5 / 50%',
          },
        ],
      },
      {
        description:
          'While Thick Skin is not on cooldown, and after 4 seconds without taking damage, Tahm Kench rapidly consumes his grey health to restore 45% − 100% (based on level) of the amount,  healing for 10% of his maximum health every 0.264 seconds.',
        descriptionHTML:
          'While <i>Thick Skin</i> is not on cooldown, and after 4 seconds without taking damage, <b>Tahm Kench</b> rapidly consumes his <a href="/wiki/Health#Grey_health" title="Health">grey health</a> to restore <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="45;" data-finish="100;" data-bot_values="45;48.24;51.47;54.71;57.94;61.18;64.41;67.65;70.88;74.12;77.35;80.59;83.82;87.06;90.29;93.53;96.76;100" data-top_values="" data-bot_key="%">45% − 100% (based on level)</span> of the amount, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Healing"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> for <span style="color: #1F995C; white-space:normal">10% of his <b>maximum</b> health</span> every <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.25 seconds, but rounded up to the next game tick.">0.<small>264</small> seconds</span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: 'While Thick Skin is not on cooldown, and after 4 seconds without taking damage, Tahm Kench rapidly consumes his grey health to restore 45% − 100% (based on level) of the amount,  healing for 10% of his maximum health every 0.264 seconds.',
            healType: 'BonusHealth',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            units: 'maximum_hp',
            unitsText:
              'of the amount,  healing for 10% of his maximum health every 0.264 seconds.',
            pre: 'While Thick Skin is not on cooldown, and after 4 seconds without taking damage, Tahm Kench rapidly consumes his grey health to restore 45% − 100%',
            post: 'of the amount,  healing for 10% of his maximum health every 0.264 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Thick Skin.png',
        description:
          'Active: Tahm Kench converts his current grey health into a  shield that lasts for 2.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Tahm Kench</b> converts his current <a href="/wiki/Health#Grey_health" title="Health">grey health</a> into a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> that lasts for 2.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Active:',
            raw: ' Tahm Kench converts his current grey health into a  shield that lasts for 2.5 seconds.',
            healType: 'BonusHealth',
            values: 2,
            units: 'current_hp',
            unitsText:
              'Kench converts his current grey health into a  shield that lasts for 2.5 seconds.',
            pre: 'Tahm Kench converts his current grey health into a  shield that lasts for 2.5 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    notes:
      '* <i>Thick Skin</i> shield value and <i>grey health</i> percentage heal are both boosted by effects that increase heal and shield power. This means <b>Tahm Kench</b> can technically heal more than the normal amount of <i>grey health</i> and get a shield bigger than his maximum health.\n<ul><li><ul><li>At level 18 <b>Tahm Kench</b> would need 53.<small>8</small>% <span style="white-space:nowrap"><a href="/wiki/Heal_and_shield_power" title="Heal and shield power"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;heal power</span> to heal for 100% of the damage he takes, reduced to 34.<small>9</small>% with <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Revitalize" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Revitalize_(Rune)" title="Revitalize"><img alt="Revitalize" src="/wiki/images/Revitalize_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Revitalize_(Rune)" class="mw-redirect" title="Revitalize (Rune)">Revitalize</a></span></span>, 23.<small>1</small>% with <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Spirit Visage" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Spirit_Visage" title="Spirit Visage"><img alt="Spirit Visage" src="/wiki/images/Spirit_Visage_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Spirit_Visage" title="Spirit Visage">Spirit Visage</a></span></span>, and 6.<small>9</small>% with both.</li></ul></li>\n<li><i>Grey health</i> converts all post-mitigation damage, <i>Thick Skin</i> effectively grants <i>Tahm Kench</i> a form of <span style="color: #F9966B; white-space:normal">true damage</span> mitigation.</li>\n<li><i>Grey health</i> can temporarily exceed 100% of his missing health when <b>Tahm Kench</b> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Any other source of healing besides Thick Skin">heals through other means</span> with a <i>grey health</i> bar at 100%. In that case he will keep the higher <i>grey health</i> value for a few moments until it updates and removes the amount that he healed.</li></ul>',
  },
  Devour: {
    name: 'Devour',
    display_name: 'Devour',
    champion: 'Tahm Kench',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'TahmKenchRWrapper.png',
      sprite: 'spell12.png',
      group: 'spell',
      x: 240,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '250',
    cast_time: '0.<small>25</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect, but time spent active will be reduced by current cooldown afterwards">120 / 110 / 100 / 90 / 80</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL" title="Tahm Kench"><img alt="Tahm Kench" src="/wiki/images/Tahm_Kench_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL" title="Tahm Kench/LoL">Tahm Kench</a></span></span> swallows the target <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> for a short time, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Vanish"><a href="/wiki/Untargetability#Vanish" title="Untargetability#Vanish"><img alt="Hallucinate.png" src="/wiki/images/Shaco_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetability#Vanish" title="Untargetability">vanishing</a></span> them. <i>Devour</i> can be cast on enemies only with max stacks of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="An Acquired Taste" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#An_Acquired_Taste" title="An Acquired Taste"><img alt="An Acquired Taste" src="/wiki/images/Tahm_Kench_An_Acquired_Taste.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#An_Acquired_Taste" title="Tahm Kench/LoL">An Acquired Taste</a></span></span></i>.',
      'If the target is an ally, they are granted a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> that lasts a short time. <b>Tahm Kench</b> will also gain <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for a short time, but cannot cast movement spells besides <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="Abyssal Dive" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#Abyssal_Dive" title="Abyssal Dive"><img alt="Abyssal Dive" src="/wiki/images/Tahm_Kench_Abyssal_Dive.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#Abyssal_Dive" title="Tahm Kench/LoL">Abyssal Dive</a></span></span></i> while an ally is swallowed.',
      '<b>Tahm Kench</b> can cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="Regurgitate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#Regurgitate" title="Regurgitate"><img alt="Regurgitate" src="/wiki/images/Tahm_Kench_Regurgitate.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#Regurgitate" title="Tahm Kench/LoL">Regurgitate</a></span></span></i> within the duration, and automatically does so afterwards. The swallowed ally can also force this cast by attempting to exit in the target direction.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="An Acquired Taste" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#An_Acquired_Taste" title="An Acquired Taste"><img alt="An Acquired Taste" src="/wiki/images/Tahm_Kench_An_Acquired_Taste.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#An_Acquired_Taste" title="Tahm Kench/LoL">An Acquired Taste</a></span></span> Bonus:</b></span> The target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Suppression"><a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control#Suppression"><img alt="Suppression icon.png" src="/wiki/images/Suppression_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control">suppressed</a></span> while swallowed. <b>Tahm Kench</b> will also be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Grounded"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> while an enemy is swallowed.',
    ],
    description: [
      {
        icon: '/wiki/images/Devour.png',
        description:
          'Active: Tahm Kench swallows the target  champion for up to 3 seconds, rendering them  untargetable and  displacement immune. Devour can be cast on enemies only with 3 stacks of  An Acquired Taste.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Tahm Kench</b> swallows the target <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> for up to 3 seconds, rendering them <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immune"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immune</a></span>. <i>Devour</i> can be cast on enemies only with 3 stacks of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="An Acquired Taste" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#An_Acquired_Taste" title="An Acquired Taste"><img alt="An Acquired Taste" src="/wiki/images/Tahm_Kench_An_Acquired_Taste.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#An_Acquired_Taste" title="Tahm Kench/LoL">An Acquired Taste</a></span></span></i>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: ' Tahm Kench swallows the target  champion for up to 3 seconds, rendering them  untargetable and  displacement immune',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'Kench swallows the target  champion for up to 3 seconds, rendering them  untargetable and  displacement immune',
            pre: 'Tahm Kench swallows the target  champion for up to 3 seconds, rendering them  untargetable and  displacement immune',
          },
          {
            effectType: 'Stacks',
            name: 'Line 2:',
            raw: 'Devour can be cast on enemies only with 3 stacks of  An Acquired Taste.',
            min: 0,
            max: 10,
            description:
              'Devour can be cast on enemies only with 3 stacks of  An Acquired Taste.',
            values: 3,
            units: 'feastStacks',
            unitsText:
              'can be cast on enemies only with 3 stacks of  An Acquired Taste.',
            pre: 'Devour can be cast on enemies only with 3 stacks of  An Acquired Taste.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'If the target is an ally, they become  unable to act and are granted a  shield, which decays in strength by 50 every 0.25 seconds after they are  Regurgitated. Tahm Kench will also gain  40% bonus movement speed for 3 seconds and is unable to cast movement spells besides  Abyssal Dive while an ally is swallowed.',
        descriptionHTML:
          'If the target is an ally, they become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">unable to act</a></span> and are granted a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span>, which decays in strength by 50 every 0.<small>25</small> seconds after they are <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="Regurgitate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#Regurgitate" title="Regurgitated"><img alt="Regurgitated" src="/wiki/images/Tahm_Kench_Regurgitate.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#Regurgitate" title="Tahm Kench/LoL">Regurgitated</a></span></span></i>. <b>Tahm Kench</b> will also gain <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">40% <b>bonus</b> movement speed</span></span> for 3 seconds and is unable to cast movement spells besides <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="Abyssal Dive" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#Abyssal_Dive" title="Abyssal Dive"><img alt="Abyssal Dive" src="/wiki/images/Tahm_Kench_Abyssal_Dive.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#Abyssal_Dive" title="Tahm Kench/LoL">Abyssal Dive</a></span></span></i> while an ally is swallowed.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Line 1:',
            raw: 'If the target is an ally, they become  unable to act and are granted a  shield, which decays in strength by 50 every 0.25 seconds after they are  Regurgitated',
            damagetype: 'None',
            shieldType: 'OutgoingShields',
            values: 5,
            user: 'none',
            units: '',
            unitsText:
              'the target is an ally, they become  unable to act and are granted a  shield, which decays in strength by 50 every 0.25 seconds after they are  Regurgitated',
            pre: 'If the target is an ally, they become  unable to act and are granted a  shield, which decays in strength by 50 every 0.25 seconds after they are  Regurgitated',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'Tahm Kench will also gain  40% bonus movement speed for 3 seconds and is unable to cast movement spells besides  Abyssal Dive while an ally is swallowed.',
            values: 4,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'bonus movement speed for 3 seconds and is unable to cast movement spells besides  Abyssal Dive while an ally is swallowed.Kench will also gain  40',
            pre: 'Tahm Kench will also gain  40% bonus movement speed for 3 seconds and is unable to cast movement spells besides  Abyssal Dive while an ally is swallowed.',
          },
        ],
        leveling: [
          {
            name: 'Shield Strength:',
            values: '650 / 725 / 800 / 875 / 950 (+ 150% AP)',
            valuesHTML:
              '650 / 725 / 800 / 875 / 950 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;150% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Shield',
            name: 'Shield Strength:',
            raw: '650 / 725 / 800 / 875 / 950 (+ 150% AP)',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: [650, 725, 800, 875, 950],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '650 / 725 / 800 / 875 / 950',
            children: [
              {
                values: 150,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 150% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          'After 1 second, Tahm Kench can cast  Regurgitate within the duration, and automatically does so afterwards. The swallowed ally can also input a movement command to force this cast in the target direction, unless they are  immobilized.',
        descriptionHTML:
          'After 1 second, <b>Tahm Kench</b> can cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="Regurgitate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#Regurgitate" title="Regurgitate"><img alt="Regurgitate" src="/wiki/images/Tahm_Kench_Regurgitate.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#Regurgitate" title="Tahm Kench/LoL">Regurgitate</a></span></span></i> within the duration, and automatically does so afterwards. The swallowed ally can also input a movement command to force this cast in the target direction, unless they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'After 1 second, Tahm Kench can cast  Regurgitate within the duration, and automatically does so afterwards',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              '1 second, Tahm Kench can cast  Regurgitate within the duration, and automatically does so afterwards',
            pre: 'After 1 second, Tahm Kench can cast  Regurgitate within the duration, and automatically does so afterwards',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'An Acquired Taste Bonus: The target is  suppressed while swallowed. Tahm Kench will also be  grounded and  slowed by 40% while an enemy is swallowed.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="An Acquired Taste" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#An_Acquired_Taste" title="An Acquired Taste"><img alt="An Acquired Taste" src="/wiki/images/Tahm_Kench_An_Acquired_Taste.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#An_Acquired_Taste" title="Tahm Kench/LoL">An Acquired Taste</a></span></span> Bonus:</b></span> The target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Suppression"><a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control#Suppression"><img alt="Suppression icon.png" src="/wiki/images/Suppression_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control">suppressed</a></span> while swallowed. <b>Tahm Kench</b> will also be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Grounded"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 40% while an enemy is swallowed.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'Tahm Kench will also be  grounded and  slowed by 40% while an enemy is swallowed.',
            values: 4,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'while an enemy is swallowed.Kench will also be  grounded and  slowed by 40',
            pre: 'Tahm Kench will also be  grounded and  slowed by 40% while an enemy is swallowed.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'If Tahm Kench is performing  Abyssal Dive,  Regurgitate will not automatically cast until after he finishes.',
        descriptionHTML:
          '<i>If <b>Tahm Kench</b> is performing <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="Abyssal Dive" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#Abyssal_Dive" title="Abyssal Dive"><img alt="Abyssal Dive" src="/wiki/images/Tahm_Kench_Abyssal_Dive.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#Abyssal_Dive" title="Tahm Kench/LoL">Abyssal Dive</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="Regurgitate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#Regurgitate" title="Regurgitate"><img alt="Regurgitate" src="/wiki/images/Tahm_Kench_Regurgitate.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#Regurgitate" title="Tahm Kench/LoL">Regurgitate</a></span></span> will not automatically cast until after he finishes.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Self, Enemies / Allies',
    spellshield: true,
    notes:
      '* <i>Devour</i> will end prematurely under the following circumstances:\n<ul><li><ul><li>The enemy target <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleanses</a></span> the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Suppression"><a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control#Suppression"><img alt="Suppression icon.png" src="/wiki/images/Suppression_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control">suppression</a></span>.</li>\n<li><b>Tahm Kench</b> or his target dies.\n<ul><li>If he dies during the cast time, the target will be dealt <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="Regurgitate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#Regurgitate" title="Regurgitate\'s"><img alt="Regurgitate\'s" src="/wiki/images/Tahm_Kench_Regurgitate.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#Regurgitate" title="Tahm Kench/LoL">Regurgitate\'s</a></span></span></i> damage.</li></ul></li>\n<li><b>Tahm Kench</b> enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span>.\n<ul><li>If he enters resurrection during the cast time, the target will be dealt <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="Regurgitate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#Regurgitate" title="Regurgitate\'s"><img alt="Regurgitate\'s" src="/wiki/images/Tahm_Kench_Regurgitate.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#Regurgitate" title="Tahm Kench/LoL">Regurgitate\'s</a></span></span></i> damage.</li></ul></li>\n<li><b>Tahm Kench</b> or his target enters or leaves the <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Mordekaiser" data-ability="Realm of Death" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mordekaiser/LoL#Realm_of_Death" title="Realm of Death"><img alt="Realm of Death" src="/wiki/images/Mordekaiser_Realm_of_Death.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mordekaiser/LoL#Realm_of_Death" title="Mordekaiser/LoL">Realm of Death</a></span></span></i>.\n<ul><li>If the caster of that ability enters the realm, they will be <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="Regurgitate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#Regurgitate" title="Regurgitated"><img alt="Regurgitated" src="/wiki/images/Tahm_Kench_Regurgitate.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#Regurgitate" title="Tahm Kench/LoL">Regurgitated</a></span></span></i> instead.</li></ul></li></ul></li>\n<li><i>Devour</i> cannot be used on allies that are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span> or using an ability that preloads <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Unstoppableforcemarker"><a href="/wiki/Crowd_control#UnstoppableForceMarker" title="Crowd control">UnstoppableForceMarker</a></span>.</li>\n<li><i>Devour\'s</i> swallow will be resisted by enemies that are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immune"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immune</a></span>.</li>\n<li>The target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immune"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immune</a></span> on-cast.\n<ul><li>Enemy targets will become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Suppression"><a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control#Suppression"><img alt="Suppression icon.png" src="/wiki/images/Suppression_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control">suppressed</a></span> on-cast.\n<ul><li>If the target <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleanses</a></span> the suppression during the cast time they will not be swallowed at the end of the cast time.</li></ul></li></ul></li>\n<li>Swallowed enemy champions will receive the recast\'s damage regardless of how they exit.</li>\n<li>The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">self-slow</a></span> is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow resist"><a href="/wiki/Slow_resist" title="Slow resist"><img alt="Slow immune icon.png" src="/wiki/images/Slow_immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow_resist" title="Slow resist">slow resist</a></span>.</li>\n<li><b>Tahm Kench</b> cannot use <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Gates"><a href="/wiki/Gate" class="mw-disambig" title="Gate">gates</a></span> during <i>Devour</i>.</li>\n<li>Allies can see if this spell is ready next to <b>Tahm Kench\'s</b> health bar.</li>\n<li>The swallowed target is not considered to be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Vanish"><a href="/wiki/Untargetability#Vanish" title="Untargetability#Vanish"><img alt="Hallucinate.png" src="/wiki/images/Shaco_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetability#Vanish" title="Untargetability">vanished</a></span>. They are instead hidden underground to maintain ongoing effects such as <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Senna" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Senna/LoL" title="Senna\'s"><img alt="Senna\'s" src="/wiki/images/Senna_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Senna/LoL" title="Senna/LoL">Senna\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Senna" data-ability="Curse of the Black Mist" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Senna/LoL#Curse_of_the_Black_Mist" title="Curse of the Black Mist"><img alt="Curse of the Black Mist" src="/wiki/images/Senna_Curse_of_the_Black_Mist.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Senna/LoL#Curse_of_the_Black_Mist" title="Senna/LoL">Curse of the Black Mist</a></span></span></span>.</li>\n<li>The following table refers for interactions while the target is unable to act:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n\n<tbody><tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>If an ally, forces <b>Tahm Kench</b> to use <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="Regurgitate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#Regurgitate" title="Regurgitate"><img alt="Regurgitate" src="/wiki/images/Tahm_Kench_Regurgitate.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#Regurgitate" title="Tahm Kench/LoL">Regurgitate</a></span></span> unless movement commands are otherwise restricted. If an enemy, movement commands are disabled.\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All items are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Mark" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mark" title="Mark"><img alt="Mark" src="/wiki/images/Mark.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mark" title="Mark">Mark</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Dash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mark#Dash" title="Dash"><img alt="Dash" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mark#Dash" title="Mark">Dash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death\n</li></td></tr></tbody></table>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Cast time\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All items are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death, unless protected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">Resurrection</a></span>\n</li></td></tr></tbody></table>',
  },
  Regurgitate: {
    name: 'Regurgitate',
    display_name: 'Regurgitate',
    champion: 'Tahm Kench',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'TahmKenchRWrapper.png',
      sprite: 'spell12.png',
      group: 'spell',
      x: 240,
      y: 144,
      w: 48,
      h: 48,
    },
    cast_time: '0.<small>25</small>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <b>Tahm Kench</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">spits</a></span> the swallowed champion in the target direction. If they are an enemy, he deals <span style="color: #00B0F0; white-space:normal">magic damage</span> based on the <span style="color: #1F995C; white-space:normal">target\'s <b>maximum</b> health</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Regurgitate.png',
        description:
          'Active: Tahm Kench  spits the swallowed champion in the target direction. If they are an enemy, he deals magic damage to them at the end of the displacement.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Tahm Kench</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">spits</a></span> the swallowed champion in the target direction. If they are an enemy, he deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to them at the end of the displacement.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values:
              "100 / 175 / 250 / 325 / 400 (+ 15% (+ 7% per 100 AP) of the target's maximum health)",
            valuesHTML:
              '100 / 175 / 250 / 325 / 400 <span style="color: #1F995C; white-space:normal">(+&nbsp;15% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;7% per 100 AP)</span> of the target\'s <b>maximum</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Magic Damage:',
            raw: "100 / 175 / 250 / 325 / 400 (+ 15% (+ 7% per 100 AP) of the target's maximum health)",
            healType: 'OutgoingHeals',
            values: [100, 175, 250, 325, 400],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 175 / 250 / 325 / 400',
            children: [
              {
                values: 15,
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of the target's maximum health",
                pre: '+ 15%',
                post: "of the target's maximum health",
                children: [
                  {
                    values: 7,
                    valuesIsPercent: true,
                    units: 'total_ap',
                    unitsText: 'per 100 AP',
                    pre: '+ 7% per 100 AP',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies / Allies',
    damagetype: 'Magic',
    spelleffects: 'spell',
    spellshield: false,
    notes:
      '* <i>Regurgitate</i> will also automatically cast if <b>Tahm Kench</b> or his target is affected by <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kalista" data-ability="Fate\'s Call" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kalista/LoL#Fate\'s_Call" title="Fate\'s Call"><img alt="Fate\'s Call" src="/wiki/images/Kalista_Fate%27s_Call.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kalista/LoL#Fate\'s_Call" title="Kalista/LoL">Fate\'s Call</a></span></span> or his target enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span>.\n<ul><li><b>Tahm Kench</b> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">unable to act</a></span> for 0.<small>25</small> seconds upon casting <i>Regurgitate</i>.</li></ul>',
  },
} satisfies { [skillName in string]: SkillData };
