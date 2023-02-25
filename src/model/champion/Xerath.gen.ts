import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Xerath';

export default {
  'Mana Surge': {
    name: 'Mana Surge',
    display_name: 'Mana Surge',
    champion: 'Xerath',
    skill: 'I',
    image: {
      full: 'Xerath_Passive1.png',
      sprite: 'passive4.png',
      group: 'passive',
      x: 432,
      y: 96,
      w: 48,
      h: 48,
    },
    static: '12',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> Periodically, <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xerath" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xerath/LoL" title="Xerath\'s"><img alt="Xerath\'s" src="/wiki/images/Xerath_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xerath/LoL" title="Xerath/LoL">Xerath\'s</a></span></span> next basic attack restores <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana</span></span>, doubled against an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Mana_Surge.png',
        description:
          'Innate: Periodically, Xerath empowers his next basic attack to restore  30 − 195 (based on level) mana, doubled to 60 − 390 (based on level) against enemy  champions.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> Periodically, <b>Xerath</b> empowers his next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> to restore <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#0099CC;" data-displayformula="27 + 3 at each level up to 3, then + 6 at each level up to 6, then + 9 at each level up to 10, 12 at each level up to 15, then + 15 at each level" data-bot_values="30;33;36;42;48;54;63;72;81;90;102;114;126;138;150;165;180;195" data-top_values="">30 − 195 (based on level)</span> <span style="color: #0099CC; white-space:normal">mana</span></span>, doubled to <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#0099CC;" data-displayformula="54 + 6 at each level up to 3, then + 12 at each level up to 6, then + 18 at each level up to 10, then + 24 at each level up to 15, then + 30 at each level" data-bot_values="60;66;72;84;96;108;126;144;162;180;204;228;252;276;300;330;360;390" data-top_values="">60 − 390 (based on level)</span> against enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate:',
            raw: 'Periodically, Xerath empowers his next basic attack to restore  30 − 195 (based on level) mana, doubled to 60 − 390 (based on level) against enemy  champions.',
            increasedStat: 'total_mana',
            values: [
              30, 39.71, 49.41, 59.12, 68.82, 78.53, 88.24, 97.94, 107.65,
              117.35, 127.06, 136.76, 146.47, 156.18, 165.88, 175.59, 185.29,
              195,
            ],
            basedOn: 'level',
            units: '',
            unitsText: 'mana, doubled to 60 − 390',
            pre: 'Periodically, Xerath empowers his next basic attack to restore  30 − 195',
            post: 'mana, doubled to 60 − 390',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Mana Surge does not trigger if Xerath would restore above his maximum mana.',
        descriptionHTML:
          '<i>Mana Surge does not trigger if <b>Xerath</b> would restore above <span style="color: #0099CC; white-space:normal">his <b>maximum</b> mana</span>.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes:
      '* <i>Mana Surge</i> will trigger even if the attack is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blocked"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span>.\n<ul><li>The empowered attack will not trigger against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.</li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: <i>Mana Surge\'s </i> interactions with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodging</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinding</a></span> effects.</li></ul>',
  },
  Arcanopulse: {
    name: 'Arcanopulse',
    display_name: 'Arcanopulse',
    champion: 'Xerath',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'XerathArcanopulseChargeUp.png',
      sprite: 'spell15.png',
      group: 'spell',
      x: 96,
      y: 48,
      w: 48,
      h: 48,
    },
    range: '700 − 1450 (based on channel time)',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 140',
    cast_time: 'none',
    cost: '80 / 90 / 100 / 110 / 120',
    costtype: 'mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">9 / 8 / 7 / 6 / 5</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xerath" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xerath/LoL" title="Xerath"><img alt="Xerath" src="/wiki/images/Xerath_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xerath/LoL" title="Xerath/LoL">Xerath</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">charges</a></span> up to a short time, increasing the <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;range</span> of his beam.',
      '<i>Arcanopulse</i> can be recast within the duration and will cancel automatically afterwards, refunding half the <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana cost</span></span>.',
      '<span class="template_sbc"><b>Recast:</b></span> After a brief delay, <b>Xerath</b>  fires a beam of energy in a line in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
    ],
    description: [
      {
        icon: '/wiki/images/Arcanopulse.png',
        description:
          "Active: Xerath  charges while being  slowed by 0% − 40% (based on channel time) for up to 3 seconds to increase Arcanopulse's  range over the first 1.5 to 1.75 seconds of the channel.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Xerath</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">charges</a></span> while being <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="channel time" data-displayformula="10% after 0 to 0.25 seconds, then &nbsp;+&nbsp;5% per 0.25 seconds channeled, capped at 40%" data-bot_values="0;10;15;20;25;30;35;40" data-top_values="0;0.25;0.5;0.75;1;1.25;1.5;1.75" data-bot_key="%">0% − 40% (based on channel time)</span> for up to 3 seconds to increase <i>Arcanopulse\'s</i> <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;range</span> over the first 1.<small>5</small> to 1.<small>75</small> seconds of the channel.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Arcanopulse can be recast within the duration. If the charge is  interrupted or completes without reactivation, Arcanopulse is cancelled and refunds  half the mana cost.',
        descriptionHTML:
          '<i>Arcanopulse</i> can be recast within the duration. If the charge is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span> or completes without reactivation, <i>Arcanopulse</i> is cancelled and refunds <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">half the mana cost</span></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Mana Refunded:',
            values: '40 / 45 / 50 / 55 / 60',
            valuesHTML:
              '<span style="color: #0099CC; white-space:normal">40 / 45 / 50 / 55 / 60</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Mana Refunded:',
            raw: '40 / 45 / 50 / 55 / 60',
            values: [40, 45, 50, 55, 60],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 45 / 50 / 55 / 60',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Recast: After a 0.528 seconds delay, Xerath fires a beam of energy in a line in the target direction that deals magic damage to enemies hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> After a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.5 seconds, but rounded up to the next game tick.">0.<small>528</small> seconds</span> delay, <b>Xerath</b> fires a beam of energy in a line in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '70 / 110 / 150 / 190 / 230 (+ 85% AP)',
            valuesHTML:
              '70 / 110 / 150 / 190 / 230 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;85% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 110 / 150 / 190 / 230 (+ 85% AP)',
            damagetype: 'Magic',
            values: [70, 110, 150, 190, 230],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 110 / 150 / 190 / 230',
            children: [
              {
                values: 85,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 85% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Self, Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'False',
    notes:
      '* The onset of <i>Arcanopulse\'s</i> self-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> and first range increase is at a random interval of 0 to 0.<small>25</small> seconds. The real time to maximum self-slow and range is thus 1.<small>5</small> to 1.<small>75</small> seconds.\n<ul><li>The rectangle hitbox\'s minimum range is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 0, right through <b>Xerath\'s</b> center.</li>\n<li><i>Arcanopulse</i> will still fire and deal damage if <b>Xerath</b> dies during the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.5 seconds, but rounded up to the next game tick.">0.<small>528</small> seconds</span> recast delay.</li>\n<li>The following table refers for interactions while <b>Xerath</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Charge channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Allowed\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All items are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Disabled, but can still use trinkets.\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span> (Recasts)\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>',
  },
  'Eye of Destruction': {
    name: 'Eye of Destruction',
    display_name: 'Eye of Destruction',
    champion: 'Xerath',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'XerathArcaneBarrage2.png',
      sprite: 'spell15.png',
      group: 'spell',
      x: 144,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '1000',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Effect radius">275</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Inner radius">125</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Sight radius">250</span>',
    cast_time: '0.<small>25</small>',
    cost: '70 / 80 / 90 / 100 / 110',
    costtype: 'mana',
    cooldown: '14 / 13 / 12 / 11 / 10',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xerath" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xerath/LoL" title="Xerath"><img alt="Xerath" src="/wiki/images/Xerath_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xerath/LoL" title="Xerath/LoL">Xerath</a></span></span> casts down a blast of energy that strikes the target location after a brief delay, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> enemies hit. The effects are increased against enemies in the epicenter.',
    ],
    description: [
      {
        icon: '/wiki/images/Eye_of_Destruction.png',
        description:
          'Active: Xerath casts down a blast of arcane energy that strikes the target location after 0.528 seconds, briefly granting  sight of the area and dealing magic damage to enemies hit and  slowing them by 25% for 2.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Xerath</b> casts down a blast of arcane energy that strikes the target location after <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.5 seconds, but rounded up to the next game tick.">0.<small>528</small> seconds</span>, briefly granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area and dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 25% for 2.<small>5</small> seconds.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '60 / 95 / 130 / 165 / 200 (+ 60% AP)',
            valuesHTML:
              '60 / 95 / 130 / 165 / 200 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 95 / 130 / 165 / 200 (+ 60% AP)',
            damagetype: 'Magic',
            values: [60, 95, 130, 165, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 95 / 130 / 165 / 200',
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
      {
        icon: '/wiki/images/undefined',
        description:
          'Enemies in the epicenter take 66.7% increased damage and are  slowed by a greater amount, decaying to 25% over the duration.',
        descriptionHTML:
          'Enemies in the epicenter take 66.<small>7</small>% increased damage and are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by a greater amount, decaying to 25% over the duration.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Enemies in the epicenter take 66.7% increased damage and are  slowed by a greater amount, decaying to 25% over the duration.',
            damagetype: 'None',
            values: 6,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'increased damage and are  slowed by a greater amount, decaying to 25in the epicenter take 66.7',
            pre: 'Enemies in the epicenter take 66.7% increased damage and are  slowed by a greater amount, decaying to 25% over the duration.',
          },
        ],
        leveling: [
          {
            name: 'Increased Damage:',
            values:
              '100.02 / 158.365 / 216.71 / 275.055 / 333.4 (+ 100.02% AP)',
            valuesHTML:
              '100.<small>02</small> / 158.<small>365</small> / 216.<small>71</small> / 275.<small>055</small> / 333.<small>4</small> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;100.<small>02</small>% AP)</span>',
          },
          {
            name: 'Increased Slow:',
            values: '60 / 65 / 70 / 75 / 80%',
            valuesHTML: '60 / 65 / 70 / 75 / 80%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Increased Damage:',
            raw: '100.02 / 158.365 / 216.71 / 275.055 / 333.4 (+ 100.02% AP)',
            damagetype: 'None',
            values: [100.02, 158.365, 216.71, 275.055, 333.4],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100.02 / 158.365 / 216.71 / 275.055 / 333.4',
            children: [
              {
                values: 100.02,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 100.02% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Increased Slow:',
            raw: '60 / 65 / 70 / 75 / 80%',
            values: [60, 65, 70, 75, 80],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 65 / 70 / 75 / 80%',
          },
        ],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Area of effect',
    spellshield: true,
    notes:
      '* <b>Xerath\'s</b> location gets <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span> to the enemy (400 radius for 4.5 seconds) if <i>Eye of Destruction\'s</i> cast location is within 100 units of a valid enemy at the start of the cast time due to something related to targeting types.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup>\n<ul><li><b>Eye of Destruction\'</b>s <a href="/wiki/Targeting" title="Targeting">targeting</a> indicator appears on the player\'s <span class="new" title="Mini-map (page does not exist)" data-uncrawlable-url="L3dpa2kvTWluaS1tYXA/YWN0aW9uPWVkaXQmcmVkbGluaz0x">mini-map</span>, despite the ability not having the longer range of others with this quality.\n<ul><li>This is likely a remnant from a version of the ability tested on the <a href="/wiki/PBE" class="mw-redirect" title="PBE">PBE</a> for <b>Xerath\'</b>s <a href="/wiki/V4.2" title="V4.2">V4.2</a> <a href="/wiki/Champion_updates" title="Champion updates">Rework</a>, that had a longer range.<sup>[<i><a href="/wiki/Category:Citation_needed" title="Category:Citation needed">citation needed</a></i>]</sup></li></ul></li></ul>',
  },
  'Shocking Orb': {
    name: 'Shocking Orb',
    display_name: 'Shocking Orb',
    champion: 'Xerath',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'XerathMageSpear.png',
      sprite: 'spell15.png',
      group: 'spell',
      x: 192,
      y: 48,
      w: 48,
      h: 48,
    },
    range: '1125',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 120',
    speed: '1400',
    cast_time: '0.<small>25</small>',
    cost: '60 / 65 / 70 / 75 / 80',
    costtype: 'mana',
    cooldown: '13 / 12.<small>5</small> / 12 / 11.<small>5</small> / 11',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xerath" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xerath/LoL" title="Xerath"><img alt="Xerath" src="/wiki/images/Xerath_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xerath/LoL" title="Xerath/LoL">Xerath</a></span></span> fires an orb of energy in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them based on travel distance.',
    ],
    description: [
      {
        icon: '/wiki/images/Shocking_Orb.png',
        description:
          'Active: Xerath fires an orb of energy in the target direction that deals magic damage to the first enemy hit and  stuns them for 0.75 − 2.25 (based on orb travel distance) seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Xerath</b> fires an orb of energy in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stuns"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> them for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="orb travel distance" data-displayformula="0.75+(0.15 per 105 units). \'\'This is capped at 1050 units traveled.\'\'" data-bot_values="0.75;0.9;1.05;1.2;1.35;1.5;1.65;1.8;1.95;2.1;2.25" data-top_values="0;105;210;315;420;525;630;735;840;945;1050">0.<small>75</small> − 2.<small>25</small> (based on orb travel distance)</span> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Xerath fires an orb of energy in the target direction that deals magic damage to the first enemy hit and  stuns them for 0.75 − 2.25 (based on orb travel distance) seconds.',
            damagetype: 'Magic',
            values: [0, 2.25],
            basedOn: 'orb travel distance',
            user: 'none',
            units: '',
            unitsText: 'seconds.',
            pre: 'Xerath fires an orb of energy in the target direction that deals magic damage to the first enemy hit and  stuns them for 0.75 − 2.25',
            post: 'seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '80 / 110 / 140 / 170 / 200 (+ 45% AP)',
            valuesHTML:
              '80 / 110 / 140 / 170 / 200 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;45% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 110 / 140 / 170 / 200 (+ 45% AP)',
            damagetype: 'Magic',
            values: [80, 110, 140, 170, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 110 / 140 / 170 / 200',
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
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Single target',
    spellshield: true,
    projectile: 'True',
    notes:
      '* This ability will cast from wherever the caster is at the end of the cast time.',
  },
  'Rite of the Arcane': {
    name: 'Rite of the Arcane',
    display_name: 'Rite of the Arcane',
    champion: 'Xerath',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'XerathLocusOfPower2.png',
      sprite: 'spell15.png',
      group: 'spell',
      x: 240,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '5000',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 200',
    cast_time: 'none',
    cost: '100',
    costtype: 'mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">130 / 122.<small>5</small> / 115 / 107.<small>5</small> / 100</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xerath" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xerath/LoL" title="Xerath"><img alt="Xerath" src="/wiki/images/Xerath_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xerath/LoL" title="Xerath/LoL">Xerath</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> up to a period, being able to fire several arcane missiles across the surrounding area.',
      'If <i>Rite of the Arcane</i> ends without using any recasts, half of the cooldown is <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;refunded</span>.',
      '<span class="template_sbc"><b>Recast - Arcane Barrage:</b></span> <b>Xerath</b> catapults an arcane missile to the target location that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
      '<i>Rite of the Arcane\'s</i> range is always <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Obscured"><a href="/wiki/Sight#Obscured_vision" title="Sight#Obscured vision"><img alt="Sweeper Drone icon.png" src="/wiki/images/Sweeper_Drone_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#Obscured_vision" title="Sight">visible</a></span>. <b>Xerath</b> will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">reveal</a></span> himself if a missile lands near an enemy.',
    ],
    description: [
      {
        icon: '/wiki/images/Rite_of_the_Arcane.png',
        description:
          'Active: Xerath  channels for up to 10 seconds, gaining the ability to recast Rite of the Arcane multiple times after 0.5 seconds within the duration. If Rite of the Arcane ends without any of the recasts being used, half of its  cooldown is refunded.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Xerath</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for up to 10 seconds, gaining the ability to recast <i>Rite of the Arcane</i> multiple times after 0.<small>5</small> seconds within the duration. If <i>Rite of the Arcane</i> ends without any of the recasts being used, half of its <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is refunded.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Xerath  channels for up to 10 seconds, gaining the ability to recast Rite of the Arcane multiple times after 0.5 seconds within the duration',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'channels for up to 10 seconds, gaining the ability to recast Rite of the Arcane multiple times after 0.5 seconds within the duration',
            pre: 'Xerath  channels for up to 10 seconds, gaining the ability to recast Rite of the Arcane multiple times after 0.5 seconds within the duration',
          },
        ],
        leveling: [
          {
            name: 'Number of Recasts:',
            values: '3 / 3.5 / 4 / 4.5 / 5',
            valuesHTML: '3 / 3.<small>5</small> / 4 / 4.<small>5</small> / 5',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Number of Recasts:',
            raw: '3 / 3.5 / 4 / 4.5 / 5',
            values: [3, 3.5, 4, 4.5, 5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '3 / 3.5 / 4 / 4.5 / 5',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Recast - Arcane Barrage: Xerath catapults an arcane missile that strikes the target location after a 0.627 seconds delay, briefly granting  sight of the area and dealing magic damage to enemies hit. Each cast has a static cooldown of 0.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast - Arcane Barrage:</b></span> <b>Xerath</b> catapults an arcane missile that strikes the target location after a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.6 seconds, but rounded up to the next game tick.">0.<small>627</small> seconds</span> delay, briefly granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area and dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit. Each cast has a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Unaffected by ability haste">static cooldown</span> of 0.<small>5</small> seconds.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '200 / 225 / 250 / 275 / 300 (+ 45% AP)',
            valuesHTML:
              '200 / 225 / 250 / 275 / 300 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;45% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '200 / 225 / 250 / 275 / 300 (+ 45% AP)',
            damagetype: 'Magic',
            values: [200, 225, 250, 275, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 225 / 250 / 275 / 300',
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
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Xerath will  reveal himself if a missile strikes near an enemy.',
        descriptionHTML:
          '<b>Xerath</b> will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">reveal</a></span> himself if a missile strikes near an enemy.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Distance:',
            values: '175 / 187.5 / 200 / 212.5 / 225',
            valuesHTML:
              '175 / 187.<small>5</small> / 200 / 212.<small>5</small> / 225',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Distance:',
            raw: '175 / 187.5 / 200 / 212.5 / 225',
            values: [175, 187.5, 200, 212.5, 225],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '175 / 187.5 / 200 / 212.5 / 225',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Rite of the Arcane's recast will cast at max range if cast beyond that.",
        descriptionHTML:
          "<i>Rite of the Arcane's recast will cast at max range if cast beyond that.</i>",
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting:
      '<a href="/wiki/Auto-targeted" class="mw-redirect" title="Auto-targeted">Auto</a> / <a href="/wiki/Location-targeted" class="mw-redirect" title="Location-targeted">Location</a>',
    affects: 'Self, Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'False',
    notes:
      '* Each cast counts as an ability activation for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li>A circular indicator will be displayed at the target location to signify that the area will be blasted.</li>\n<li>A circle indicating the ability\'s maximum range forms on the map over 1 second (starting small and rapidly expanding to the maximum range over the delay) for the channel\'s duration.\n<ul><li>The maximum-range indicator is visible to both allies and enemies and is color coded for friendly (blue) or hostile (red).</li></ul></li>\n<li><i>Rite of the Arcane</i> uses a <a href="/wiki/Champion_ability" title="Champion ability">barrage system</a> so that it can be recast multiple times within a given period at no additional cost.</li>\n<li><b>Xerath</b> will turn to face toward the direction of the target location after using a recast.</li>\n<li><b>Xerath</b> gains a wider field of view during <i>Rite of the Arcane</i>.</li>\n<li><b>Xerath</b> can use <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Thresh" data-ability="Dark Passage" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Thresh/LoL#Dark_Passage" title="Dark Passage"><img alt="Dark Passage" src="/wiki/images/Thresh_Dark_Passage.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Thresh/LoL#Dark_Passage" title="Thresh/LoL">Dark Passage</a></span></span> while channeling.</li>\n<li>The following table refers for interactions while <b>Xerath</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled for the first 1.<small>25</small> seconds, otherwise, interrupts.\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Hextech Rocketbelt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt"><img alt="Hextech Rocketbelt" src="/wiki/images/Hextech_Rocketbelt_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt">Hextech Rocketbelt</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>All item-actives not specified above interrupt\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span>   <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>\n<ul><li><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> is disabled for the first 1.<small>25</small> seconds of the channel.</li></ul>',
  },
} satisfies { [skillName in string]: SkillData };
