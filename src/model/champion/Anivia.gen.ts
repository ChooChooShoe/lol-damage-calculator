import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Anivia';

export default {
  Rebirth: {
    name: 'Rebirth',
    display_name: 'Rebirth',
    champion: 'Anivia',
    skill: 'I',
    image: {
      full: 'Anivia_P.png',
      sprite: 'passive0.png',
      group: 'passive',
      x: 288,
      y: 0,
      w: 48,
      h: 48,
    },
    static: '240',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> Periodically, upon <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dying</a></span>, <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Anivia" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Anivia/LoL" title="Anivia"><img alt="Anivia" src="/wiki/images/Anivia_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Anivia/LoL" title="Anivia/LoL">Anivia</a></span></span> will instead revert into an egg. If the egg can survive for a few seconds, she is gloriously <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">reborn</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Rebirth.png',
        description:
          'Innate: Periodically, upon taking  fatal damage, Anivia enters  resurrection for 6 seconds and restores all of her  health.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> Periodically, upon taking <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">fatal damage</a></span>, <b>Anivia</b> enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span> for 6 seconds and restores all of her <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">health</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Innate:',
            raw: 'Periodically, upon taking  fatal damage, Anivia enters  resurrection for 6 seconds and restores all of her  health.',
            healType: 'BonusHealth',
            values: 6,
            units: 'maximum_hp',
            unitsText:
              'upon taking  fatal damage, Anivia enters  resurrection for 6 seconds and restores all of her  health.',
            pre: 'Periodically, upon taking  fatal damage, Anivia enters  resurrection for 6 seconds and restores all of her  health.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'While under resurrection, Anivia is  unable to act and gains -40 − 20 (based on level)  bonus armor and  bonus magic resistance.',
        descriptionHTML:
          'While under resurrection, <b>Anivia</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">unable to act</a></span> and gains <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="-40;-25;-10;5;20" data-top_values="1;5;8;12;15">-40 − 20 (based on level)</span> <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resistance</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'While under resurrection, Anivia is  unable to act and gains -40 − 20 (based on level)  bonus armor and  bonus magic resistance.',
            increasedStat: 'bonus_armor',
            values: [
              40, 38.82, 37.65, 36.47, 35.29, 34.12, 32.94, 31.76, 30.59, 29.41,
              28.24, 27.06, 25.88, 24.71, 23.53, 22.35, 21.18, 20,
            ],
            basedOn: 'level',
            units: '',
            unitsText: 'bonus armor and  bonus magic resistance.',
            pre: 'While under resurrection, Anivia is  unable to act and gains -40 − 20',
            post: 'bonus armor and  bonus magic resistance.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'If Anivia remains alive by the end of the duration, she is revived with her current health.',
        descriptionHTML:
          'If <b>Anivia</b> remains alive by the end of the duration, she is revived with her <span style="color: #1F995C; white-space:normal"><b>current</b> health</span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    spelleffects: 'Heal',
    notes:
      '* Triggering <i>Rebirth</i> will break <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tethers</a></span> on <b>Anivia</b>.\n<ul><li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zilean" data-ability="Chronoshift" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zilean/LoL#Chronoshift" title="Chronoshift"><img alt="Chronoshift" src="/wiki/images/Zilean_Chronoshift.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zilean/LoL#Chronoshift" title="Zilean/LoL">Chronoshift</a></span></span> and <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Guardian Angel" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Guardian_Angel" title="Guardian Angel"><img alt="Guardian Angel" src="/wiki/images/Guardian_Angel_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Guardian_Angel" title="Guardian Angel">Guardian Angel</a></span></span> will take priority over <i>Rebirth</i>.</li>\n<li>If <i>Rebirth</i> triggers while <b>Anivia</b> is channeling <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span>, her channel won\'t be interrupted.\n<ul><li>All other <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> will be interrupted upon triggering <i>Rebirth</i>.</li></ul></li>\n<li>The following refers for interactions while <b>Anivia</b> is resurrecting:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n\n<tbody><tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All items are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Mark" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mark" title="Mark"><img alt="Mark" src="/wiki/images/Mark.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mark" title="Mark">Mark</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Dash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mark#Dash" title="Dash"><img alt="Dash" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mark#Dash" title="Mark">Dash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death\n</li></td></tr></tbody></table>',
    video: 'Anivia IVideo.ogv',
  },
  'Flash Frost': {
    name: 'Flash Frost',
    display_name: 'Flash Frost',
    champion: 'Anivia',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'FlashFrost.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 0,
      y: 0,
      w: 48,
      h: 48,
    },
    range: '1100',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 225',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 220',
    speed: '950',
    cast_time: '0.<small>25</small>',
    cost: '80 / 85 / 90 / 95 / 100',
    costtype: 'mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">12 / 11 / 10 / 9 / 8</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Anivia" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Anivia/LoL" title="Anivia"><img alt="Anivia" src="/wiki/images/Anivia_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Anivia/LoL" title="Anivia/LoL">Anivia</a></span></span> launches a chunk of ice that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> enemies hit.',
      '<i>Flash Frost</i> will recast at max range, or can recast early.',
      '<span class="template_sbc"><b>Recast:</b></span> The ice explodes, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> nearby enemies.',
    ],
    description: [
      {
        icon: '/wiki/images/Flash_Frost.png',
        description:
          "Active: Anivia launches a chunk of ice in the target direction that deals magic damage to enemies hit and  slows them by 20% − 40% (based on  Glacial Storm's Rank) for 3 seconds.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Anivia</b> launches a chunk of ice in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="[[File:Glacial Storm.png|20px|border|link=]] Glacial Storm\'s Rank" data-displayformula="20%+(10%*(\'\'Glacial Storm\'\' Rank-1))" data-bot_values="20;20;30;40" data-top_values="0;1;2;3" data-bot_key="%">20% − 40% (based on <img alt="Glacial Storm.png" src="/wiki/images/Anivia_Glacial_Storm.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <i>Glacial Storm\'s</i> Rank)</span> for 3 seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: "Anivia launches a chunk of ice in the target direction that deals magic damage to enemies hit and  slows them by 20% − 40% (based on  Glacial Storm's Rank) for 3 seconds.",
            damagetype: 'Magic',
            values: 2,
            valuesIsPercent: true,
            basedOn: " Glacial Storm's Rank",
            user: 'none',
            units: '',
            unitsText: 'for 3 seconds.',
            pre: 'Anivia launches a chunk of ice in the target direction that deals magic damage to enemies hit and  slows them by 20% − 40%',
            post: 'for 3 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '50 / 70 / 90 / 110 / 130 (+ 25% AP)',
            valuesHTML:
              '50 / 70 / 90 / 110 / 130 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;25% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '50 / 70 / 90 / 110 / 130 (+ 25% AP)',
            damagetype: 'Magic',
            values: [50, 70, 90, 110, 130],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 70 / 90 / 110 / 130',
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
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Flash Frost can be recast while the ice is in flight after its cast time, and does so automatically at maximum range.',
        descriptionHTML:
          '<i>Flash Frost</i> can be recast while the ice is in flight after its cast time, and does so automatically at maximum range.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Recast: Anivia shatters the ice, dealing magic damage to nearby enemies and  stunning them for a duration, as well as refreshing the  slow.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Anivia</b> shatters the ice, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for a duration, as well as refreshing the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '60 / 95 / 130 / 165 / 200 (+ 45% AP)',
            valuesHTML:
              '60 / 95 / 130 / 165 / 200 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;45% AP)</span>',
          },
          {
            name: 'Stun Duration:',
            values: '1.1 / 1.2 / 1.3 / 1.4 / 1.5',
            valuesHTML:
              '1.<small>1</small> / 1.<small>2</small> / 1.<small>3</small> / 1.<small>4</small> / 1.<small>5</small>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 95 / 130 / 165 / 200 (+ 45% AP)',
            damagetype: 'Magic',
            values: [60, 95, 130, 165, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 95 / 130 / 165 / 200',
            children: [
              {
                values: 45,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 45% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Stun Duration:',
            raw: '1.1 / 1.2 / 1.3 / 1.4 / 1.5',
            values: [1.1, 1.2, 1.3, 1.4, 1.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1.1 / 1.2 / 1.3 / 1.4 / 1.5',
          },
        ],
      },
    ],
    targeting:
      '<a href="/wiki/Direction-targeted" class="mw-redirect" title="Direction-targeted">Direction</a> / <a href="/wiki/Auto-targeted" class="mw-redirect" title="Auto-targeted">Auto</a>',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: 'Special',
    projectile: 'True',
    notes:
      '*The initial cast and the manual recast count as ability activations for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li><ul><li>If the ability is not manually recasted, the secondary effect will trigger without being considered as an ability activation.</li></ul></li>\n<li><i>Flash Frost</i> can only proc <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Conqueror" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Conqueror_(Rune)" title="Conqueror"><img alt="Conqueror" src="/wiki/images/Conqueror_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Conqueror_(Rune)" class="mw-redirect" title="Conqueror (Rune)">Conqueror</a></span></span> once even if it damages the same target twice.</li>\n<li><i>Flash Frost</i> will fire from wherever <b>Anivia</b> was at the start of the cast time.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> can only prevent either the collision hit or recast from affecting the target.</li></ul>',
    video: 'Anivia QVideo.ogv',
  },
  Crystallize: {
    name: 'Crystallize',
    display_name: 'Crystallize',
    champion: 'Anivia',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'Crystallize.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 48,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '1000 / 100',
    cast_time: '0.<small>25</small>',
    cost: '70',
    costtype: 'mana',
    cooldown: '17',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Anivia" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Anivia/LoL" title="Anivia"><img alt="Anivia" src="/wiki/images/Anivia_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Anivia/LoL" title="Anivia/LoL">Anivia</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">erects</a></span> a wall of ice that lingers for a few seconds, blocking movement.',
    ],
    description: [
      {
        icon: '/wiki/images/Crystallize.png',
        description:
          'Active: Anivia summons a wall of ice at the target location perpendicular to her facing,  knocking all units away from it, though not through terrain. The wall lingers as impassable terrain for 5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Anivia</b> summons a wall of ice at the target location perpendicular to her facing, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking</a></span> all units away from it, though not through terrain. The wall lingers as impassable terrain for 5 seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'The wall lingers as impassable terrain for 5 seconds.',
            values: 5,
            user: 'none',
            units: '',
            unitsText: 'wall lingers as impassable terrain for 5 seconds.',
            pre: 'The wall lingers as impassable terrain for 5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Width:',
            values: '600 / 700 / 800 / 900 / 1000 units',
            valuesHTML:
              '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Pathing radius"><a href="/wiki/Unit_radius" title="Unit radius"><img alt="Pathing radius.png" src="/wiki/images/Pathing_radius.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 600 / 700 / 800 / 900 / 1000 units',
          },
          {
            name: 'Number of ice segments:',
            values: '4 / 5 / 6 / 7 / 8 chunks of ice',
            valuesHTML: '4 / 5 / 6 / 7 / 8 chunks of ice',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Width:',
            raw: '600 / 700 / 800 / 900 / 1000 units',
            values: [600, 700, 800, 900, 1000],
            user: 'none',
            units: '',
            unitsText: 'units',
            pre: '600 / 700 / 800 / 900 / 1000 units',
          },
          {
            effectType: 'Unique',
            name: 'Number of ice segments:',
            raw: '4 / 5 / 6 / 7 / 8 chunks of ice',
            values: [4, 5, 6, 7, 8],
            user: 'none',
            units: '',
            unitsText: 'chunks of ice',
            pre: '4 / 5 / 6 / 7 / 8 chunks of ice',
          },
        ],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    spelleffects: 'False',
    spellshield: false,
    notes:
      '* <i>Crystallize\'s</i> displacement triggers in-combat effects by dealing 0 <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Proc damage"><a href="/wiki/Damage" title="Damage"><img alt="Wit\'s End item.png" src="/wiki/images/Wit%27s_End_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">proc</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True damage"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration.png" src="/wiki/images/Hybrid_penetration.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/True_damage" title="True damage">true damage</a></span>, such as drawing turret aggro, <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Sudden Impact" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sudden_Impact_(Rune)" title="Sudden Impact"><img alt="Sudden Impact" src="/wiki/images/Sudden_Impact_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Sudden_Impact_(Rune)" class="mw-redirect" title="Sudden Impact (Rune)">Sudden Impact</a></span></span> and applying <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Elixir of Sorcery" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elixir_of_Sorcery" title="Elixir of Sorcery"><img alt="Elixir of Sorcery" src="/wiki/images/Elixir_of_Sorcery_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elixir_of_Sorcery" title="Elixir of Sorcery">Elixir of Sorcery</a></span></span>.\n<ul><li>Individual ice chunks have both 100 units <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Pathing radius"><a href="/wiki/Unit_radius" title="Unit radius"><img alt="Pathing radius.png" src="/wiki/images/Pathing_radius.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_radius" title="Unit radius">pathing radius</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Gameplay radius"><a href="/wiki/Unit_radius" title="Unit radius"><img alt="Gameplay radius.png" src="/wiki/images/Gameplay_radius.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_radius" title="Unit radius">gameplay radius</a></span>.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">Champions</a></span> are knocked 120 units to either side of a wall segment, non-champions 250 units.\n<ul><li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span> Knockback speed?</li></ul></li>\n<li>Player-generated terrain such as <i>Crystallize</i> does not block <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span>.</li></ul>',
    video: 'Anivia WVideo.ogv',
  },
  Frostbite: {
    name: 'Frostbite',
    display_name: 'Frostbite',
    champion: 'Anivia',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'Frostbite.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 96,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '600',
    speed: '1600',
    cast_time: '0.<small>25</small>',
    cost: '50',
    costtype: 'mana',
    cooldown: '4',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Anivia" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Anivia/LoL" title="Anivia"><img alt="Anivia" src="/wiki/images/Anivia_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Anivia/LoL" title="Anivia/LoL">Anivia</a></span></span> blasts a freezing wind at the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
      'If the target had been recently hit by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Anivia" data-ability="Flash Frost" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Anivia/LoL#Flash_Frost" title="Flash Frost"><img alt="Flash Frost" src="/wiki/images/Anivia_Flash_Frost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Anivia/LoL#Flash_Frost" title="Anivia/LoL">Flash Frost</a></span></span></i> or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Anivia" data-ability="Glacial Storm" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Anivia/LoL#Glacial_Storm" title="Glacial Storm"><img alt="Glacial Storm" src="/wiki/images/Anivia_Glacial_Storm.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Anivia/LoL#Glacial_Storm" title="Anivia/LoL">Glacial Storm</a></span></span></i>, the damage is <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">doubled</span>.',
    ],
    description: [
      {
        description:
          'Passive: Enemies hit by  Flash Frost or a fully formed  Glacial Storm become Chilled for 3 seconds, refreshing on subsequent hits.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> Enemies hit by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Anivia" data-ability="Flash Frost" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Anivia/LoL#Flash_Frost" title="Flash Frost"><img alt="Flash Frost" src="/wiki/images/Anivia_Flash_Frost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Anivia/LoL#Flash_Frost" title="Anivia/LoL">Flash Frost</a></span></span></i> or a fully formed <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Anivia" data-ability="Glacial Storm" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Anivia/LoL#Glacial_Storm" title="Glacial Storm"><img alt="Glacial Storm" src="/wiki/images/Anivia_Glacial_Storm.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Anivia/LoL#Glacial_Storm" title="Anivia/LoL">Glacial Storm</a></span></span></i> become <i>Chilled</i> for 3 seconds, refreshing on subsequent hits.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Passive:',
            raw: 'Enemies hit by  Flash Frost or a fully formed  Glacial Storm become Chilled for 3 seconds, refreshing on subsequent hits.',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'hit by  Flash Frost or a fully formed  Glacial Storm become Chilled for 3 seconds, refreshing on subsequent hits.',
            pre: 'Enemies hit by  Flash Frost or a fully formed  Glacial Storm become Chilled for 3 seconds, refreshing on subsequent hits.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Frostbite.png',
        description:
          'Active: Anivia blasts a freezing wind at the target enemy that deals magic damage,  doubled if they were Chilled.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Anivia</b> blasts a freezing wind at the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span>, <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">doubled</span> if they were <i>Chilled</i>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '50 / 75 / 100 / 125 / 150 (+ 60% AP)',
            valuesHTML:
              '50 / 75 / 100 / 125 / 150 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '50 / 75 / 100 / 125 / 150 (+ 60% AP)',
            damagetype: 'Magic',
            values: [50, 75, 100, 125, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 75 / 100 / 125 / 150',
            children: [
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
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spell',
    spellshield: true,
    projectile: 'True',
    callforhelp: 'True',
    notes:
      '* The damage of <i>Frostbite</i> is calculated once it hits. If the target\'s mark from being hit by <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Anivia" data-ability="Flash Frost" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Anivia/LoL#Flash_Frost" title="Flash Frost"><img alt="Flash Frost" src="/wiki/images/Anivia_Flash_Frost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Anivia/LoL#Flash_Frost" title="Anivia/LoL">Flash Frost</a></span></span> or a fully formed <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Anivia" data-ability="Glacial Storm" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Anivia/LoL#Glacial_Storm" title="Glacial Storm"><img alt="Glacial Storm" src="/wiki/images/Anivia_Glacial_Storm.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Anivia/LoL#Glacial_Storm" title="Anivia/LoL">Glacial Storm</a></span></span> wares off while the projectile is traveling, the damage is not doubled.\n<ul><li><i>Frostbite</i> has a different sound effect when it hits a target for double damage.</li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).</li></ul>',
  },
  'Glacial Storm': {
    name: 'Glacial Storm',
    display_name: 'Glacial Storm',
    champion: 'Anivia',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'GlacialStorm.png',
      sprite: 'spell1.png',
      group: 'spell',
      x: 144,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '750',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="time active" data-bot_values="200;225;250;275;300;325;350;375;400;400" data-top_values="0;0.19;0.38;0.56;0.75;0.94;1.13;1.31;1.5;1.5+">200 − 400 (based on time active)</span>',
    tether_radius: '1000',
    cast_time: 'none',
    cost: '60',
    costtype: 'mana&nbsp;+&nbsp;35 / 45 / 55 per second',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts after storm disappears">4 / 3.<small>5</small> / 3 / 2.<small>5</small> / 2</span>',
    blurb: [
      '<span class="template_sbc"><b>Toggle:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Anivia" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Anivia/LoL" title="Anivia"><img alt="Anivia" src="/wiki/images/Anivia_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Anivia/LoL" title="Anivia/LoL">Anivia</a></span></span> summons a driving rain of ice and hail at the target location that continually deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Magic damage"><a href="/wiki/Magic_damage" title="Magic damage"><img alt="Magic damage.png" src="/wiki/images/Magic_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Magic_damage" title="Magic damage">magic damage</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> enemies within.',
      '<i>Glacial Storm</i> is deactivated when <b>Anivia</b> leaves it or gets hit by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">disables</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Glacial_Storm.png',
        description:
          'Active: Anivia calls forth a driving rain of ice and hail at the target location, dealing magic damage every 0.5 seconds to enemies within and  slowing them for 1 second, refreshing every 0.5 seconds while they remain inside.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Anivia</b> calls forth a driving rain of ice and hail at the target location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>5</small> seconds to enemies within and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them for 1 second, refreshing every 0.<small>5</small> seconds while they remain inside.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage per Tick:',
            values: '15 / 18.75 / 22.5 / 26.25 / 30 (+ 6.25% AP)',
            valuesHTML:
              '15 / 18.<small>75</small> / 22.<small>5</small> / 26.<small>25</small> / 30 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;6.<small>25</small>% AP)</span>',
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
            name: 'Magic Damage per Tick:',
            raw: '15 / 18.75 / 22.5 / 26.25 / 30 (+ 6.25% AP)',
            damagetype: 'Magic',
            values: [15, 18.75, 22.5, 26.25, 30],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 18.75 / 22.5 / 26.25 / 30',
            children: [
              {
                values: 6.25,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 6.25% AP',
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
      {
        icon: '/wiki/images/undefined',
        description:
          'The blizzard increases in size over 1.5 seconds. At maximum size, Glacial Storm is empowered to deal 300% damage and increase the effectiveness of its slow by 50%, which also instead lasts 1.5 seconds and refreshes every 0.25 seconds.',
        descriptionHTML:
          'The blizzard increases in size over 1.<small>5</small> seconds. At maximum size, <i>Glacial Storm</i> is empowered to deal 300% damage and increase the effectiveness of its slow by 50%, which also instead lasts 1.<small>5</small> seconds and refreshes every 0.<small>25</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'The blizzard increases in size over 1.5 seconds',
            values: 1,
            user: 'none',
            units: '',
            unitsText: 'blizzard increases in size over 1.5 seconds',
            pre: 'The blizzard increases in size over 1.5 seconds',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'At maximum size, Glacial Storm is empowered to deal 300% damage and increase the effectiveness of its slow by 50%, which also instead lasts 1.5 seconds and refreshes every 0.25 seconds.',
            damagetype: 'None',
            values: 3,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'damage and increase the effectiveness of its slow by 50maximum size, Glacial Storm is empowered to deal 300',
            pre: 'At maximum size, Glacial Storm is empowered to deal 300% damage and increase the effectiveness of its slow by 50%, which also instead lasts 1.5 seconds and refreshes every 0.25 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Empowered Damage per Tick:',
            values: '45 / 56.25 / 67.5 / 78.75 / 90 (+ 18.75% AP)',
            valuesHTML:
              '45 / 56.<small>25</small> / 67.<small>5</small> / 78.<small>75</small> / 90 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;18.<small>75</small>% AP)</span>',
          },
          {
            name: 'Empowered Slow:',
            values: '30 / 37.5 / 45 / 52.5 / 60%',
            valuesHTML:
              '30 / 37.<small>5</small> / 45 / 52.<small>5</small> / 60%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Empowered Damage per Tick:',
            raw: '45 / 56.25 / 67.5 / 78.75 / 90 (+ 18.75% AP)',
            damagetype: 'None',
            values: [45, 56.25, 67.5, 78.75, 90],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '45 / 56.25 / 67.5 / 78.75 / 90',
            children: [
              {
                values: 18.75,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 18.75% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Empowered Slow:',
            raw: '30 / 37.5 / 45 / 52.5 / 60%',
            values: [30, 37.5, 45, 52.5, 60],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 37.5 / 45 / 52.5 / 60%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Glacial Storm can be recast after 1 second, and does so automatically if Anivia is no longer in range or unable to pay the  mana cost, or becomes affected by any form of  interrupting  crowd control.',
        descriptionHTML:
          '<i>Glacial Storm</i> can be recast after 1 second, and does so automatically if <b>Anivia</b> is no longer in range or unable to pay the <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana</span></span> cost, or becomes affected by any form of <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupting</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Glacial Storm can be recast after 1 second, and does so automatically if Anivia is no longer in range or unable to pay the  mana cost, or becomes affected by any form of  interrupting  crowd control.',
            values: 1,
            units: 'total_mana',
            unitsText:
              'Storm can be recast after 1 second, and does so automatically if Anivia is no longer in range or unable to pay the  mana cost, or becomes affected by any form of  interrupting  crowd control.',
            pre: 'Glacial Storm can be recast after 1 second, and does so automatically if Anivia is no longer in range or unable to pay the  mana cost, or becomes affected by any form of  interrupting  crowd control.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Recast: Anivia ends Glacial Storm, dealing one last tick of damage.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Anivia</b> ends <i>Glacial Storm</i>, dealing one last tick of damage.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting:
      '<a href="/wiki/Location-targeted" class="mw-redirect" title="Location-targeted">Location</a> / <a href="/wiki/Auto-targeted" class="mw-redirect" title="Auto-targeted">Auto</a>',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'aoedot',
    spellshield: false,
    notes:
      '*Toggle abilities do not count as ability activations for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li><i>Glacial Storm\'s</i> slow leaves a trail that is visible even if the target is <a href="/wiki/Stealth" title="Stealth">stealthed</a>.</li>\n<li><i>Glacial Storm</i> deals 3 half ticks at 200 / 267 / 333 radius for a total of 1.<small>5</small> normal damage ticks before it starts dealing empowered damage at 400 radius.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stasis (buff)"><a href="/wiki/Invulnerability#Stasis" title="Invulnerability#Stasis"><img alt="Stasis icon.png" src="/wiki/images/Stasis_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability#Stasis" title="Invulnerability">Stasis</a></span> via <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Stopwatch" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Stopwatch" title="Stopwatch"><img alt="Stopwatch" src="/wiki/images/Stopwatch_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Stopwatch" title="Stopwatch">Stopwatch</a></span></span> / <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Zhonya\'s Hourglass" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zhonya%27s_Hourglass" title="Zhonya\'s Hourglass"><img alt="Zhonya\'s Hourglass" src="/wiki/images/Zhonya%27s_Hourglass_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zhonya%27s_Hourglass" title="Zhonya\'s Hourglass">Zhonya\'s Hourglass</a></span></span> doesn\'t interrupt <i>Glacial Storm</i>.\n<ul><li><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL" title="Tahm Kench\'s"><img alt="Tahm Kench\'s" src="/wiki/images/Tahm_Kench_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL" title="Tahm Kench/LoL">Tahm Kench\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="Devour" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#Devour" title="Devour"><img alt="Devour" src="/wiki/images/Tahm_Kench_Devour.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#Devour" title="Tahm Kench/LoL">Devour</a></span></span></span> <b>does</b> interrupt (allied and enemy) <i>Glacial Storm</i>.</li></ul></li></ul>',
    video: 'Anivia RVideo.ogv',
  },
} satisfies { [skillName in string]: SkillData };
