import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Rakan';

export default {
  'Fey Feathers': {
    name: 'Fey Feathers',
    display_name: 'Fey Feathers',
    champion: 'Rakan',
    skill: 'I',
    image: {
      full: 'Rakan_P.png',
      sprite: 'passive3.png',
      group: 'passive',
      x: 336,
      y: 0,
      w: 48,
      h: 48,
    },
    cooldown:
      '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="40;" data-finish="14.5;" data-bot_values="40;38.5;37;35.5;34;32.5;31;29.5;28;26.5;25;23.5;22;20.5;19;17.5;16;14.5" data-top_values="">40 − 14.<small>5</small> (based on level)</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> Periodically, <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rakan" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rakan/LoL" title="Rakan"><img alt="Rakan" src="/wiki/images/Rakan_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rakan/LoL" title="Rakan/LoL">Rakan</a></span></span> generates a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> that regenerates out of combat if not broken.',
      '<b>Rakan\'s</b> basic attacks and ability hits against enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> <span style="white-space:nowrap"><a href="/wiki/Ability_haste" title="Ability haste"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduce</span> the cooldown.',
      '<span class="template_sbc"><b>Innate - Lover\'s Leap:</b></span> If either <b>Rakan</b> or <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xayah" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xayah/LoL" title="Xayah"><img alt="Xayah" src="/wiki/images/Xayah_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xayah/LoL" title="Xayah/LoL">Xayah</a></span></span> is <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="recalling"><img alt="recalling" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">recalling</a></span></span>, the other may travel with them by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span> their <i>Recall</i> beside them.',
    ],
    description: [
      {
        icon: '/wiki/images/Fey Feathers.png',
        description:
          'Innate: Periodically, Rakan grants himself a  shield for 30 − 225 (based on level) (+ 95% AP) that lasts until broken. After being out of combat for 5 seconds, any leftover shield will be restored to maximum value.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> Periodically, <b>Rakan</b> grants himself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="30;" data-finish="225;" data-bot_values="30;41.47;52.94;64.41;75.88;87.35;98.82;110.29;121.76;133.24;144.71;156.18;167.65;179.12;190.59;202.06;213.53;225" data-top_values="">30 − 225 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;95% AP)</span> that lasts until broken. After being <a href="/wiki/Out_of_combat" class="mw-redirect" title="Out of combat">out of combat</a> for 5 seconds, any leftover shield will be restored to <b>maximum</b> value.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Innate:',
            raw: ' Periodically, Rakan grants himself a  shield for 30 − 225 (based on level) (+ 95% AP) that lasts until broken',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: [
              30, 41.47, 52.94, 64.41, 75.88, 87.35, 98.82, 110.29, 121.76,
              133.24, 144.71, 156.18, 167.65, 179.12, 190.59, 202.06, 213.53,
              225,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'that lasts until broken',
            pre: 'Periodically, Rakan grants himself a  shield for 30 − 225',
            post: 'that lasts until broken',
            children: [
              {
                values: 95,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 95% AP',
              },
            ],
          },
          {
            effectType: 'Shield',
            name: 'Line 2:',
            raw: 'After being out of combat for 5 seconds, any leftover shield will be restored to maximum value.',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: 5,
            user: 'none',
            units: '',
            unitsText:
              'being out of combat for 5 seconds, any leftover shield will be restored to maximum value.',
            pre: 'After being out of combat for 5 seconds, any leftover shield will be restored to maximum value.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Rakan's basic attacks and ability hits reduce Fey Feathers'   cooldown by 1 second for each enemy  champion hit.",
        descriptionHTML:
          '<b>Rakan\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> and <a href="/wiki/Champion_ability" title="Champion ability">ability</a> hits reduce <i>Fey Feathers\' </i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> by 1 second for each enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> hit.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: "Rakan's basic attacks and ability hits reduce Fey Feathers'   cooldown by 1 second for each enemy  champion hit.",
            values: 1,
            units: 'total_ad',
            unitsText:
              "basic attacks and ability hits reduce Fey Feathers'   cooldown by 1 second for each enemy  champion hit.",
            pre: "Rakan's basic attacks and ability hits reduce Fey Feathers'   cooldown by 1 second for each enemy  champion hit.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/ProfileIcon1634 Blazing Feathers.png',
        description:
          "Innate - Lover's Leap: If either Rakan or  Xayah is channeling  Recall, the other may move nearby and channel their own to join alongside them. Both reach base at the time of which the initiator's  Recall completes.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Lover\'s Leap:</b></span> If either <b>Rakan</b> or <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xayah" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xayah/LoL" title="Xayah"><img alt="Xayah" src="/wiki/images/Xayah_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xayah/LoL" title="Xayah/LoL">Xayah</a></span></span> is channeling <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>, the other may move nearby and channel their own to join alongside them. <b>Both</b> reach base at the time of which the initiator\'s <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> completes.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    spelleffects: 'Shield',
    notes:
      '* <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Revitalize" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Revitalize_(Rune)" title="Revitalize"><img alt="Revitalize" src="/wiki/images/Revitalize_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Revitalize_(Rune)" class="mw-redirect" title="Revitalize (Rune)">Revitalize</a></span></span> will record bonus shielding when a new shield is created, but not when it regenerates. In either case, there is no bonus shielding received.\n<ul><li>The cooldown reduction is granted even if the ability is blocked by a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span>.</li></ul>',
    yvideo: 'Rakan - Passive',
    yvideo2: 'Rakan - Passive 2',
  },
  'Gleaming Quill': {
    name: 'Gleaming Quill',
    display_name: 'Gleaming Quill',
    champion: 'Rakan',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'RakanQ.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 192,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '900',
    effect_radius: '200',
    cast_time: '0.<small>25</small>',
    cost: '45',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts once the projectile vanishes">11 / 10 / 9 / 8 / 7</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rakan" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rakan/LoL" title="Rakan"><img alt="Rakan" src="/wiki/images/Rakan_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rakan/LoL" title="Rakan/LoL">Rakan</a></span></span> slings an enchanted feather in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit.',
      'If the target was an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>, a circle is marked around <b>Rakan</b>. After a short time or if an ally champion comes within the circle, <b>Rakan</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> himself and nearby allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Gleaming Quill.png',
        description:
          'Active: Rakan slings an enchanted feather in the target direction that deals magic damage to the first enemy hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Rakan</b> slings an enchanted feather in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '70 / 115 / 160 / 205 / 250 (+ 70% AP)',
            valuesHTML:
              '70 / 115 / 160 / 205 / 250 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;70% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 115 / 160 / 205 / 250 (+ 70% AP)',
            damagetype: 'Magic',
            values: [70, 115, 160, 205, 250],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 115 / 160 / 205 / 250',
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
        ],
      },
      {
        description:
          'If the target was an enemy  champion or epic  monster, a radius is marked around Rakan. After 3 seconds or if an allied champion enters the radius, Rakan  heals himself and nearby allied champions for 40 − 210 (based on level) (+ 55% AP).',
        descriptionHTML:
          'If the target was an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>, a radius is marked around <b>Rakan</b>. After 3 seconds or if an allied champion enters the radius, <b>Rakan</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> himself and nearby allied champions for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="40;" data-finish="210;" data-bot_values="40;50;60;70;80;90;100;110;120;130;140;150;160;170;180;190;200;210" data-top_values="">40 − 210 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;55% AP)</span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: 'After 3 seconds or if an allied champion enters the radius, Rakan  heals himself and nearby allied champions for 40 − 210 (based on level) (+ 55% AP).',
            healType: 'SelfHeal',
            values: [
              40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170,
              180, 190, 200, 210,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: '.',
            pre: 'After 3 seconds or if an allied champion enters the radius, Rakan  heals himself and nearby allied champions for 40 − 210',
            post: '.',
            children: [
              {
                values: 55,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 55% AP',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies / Allies',
    damagetype: 'Magic',
    spelleffects: 'spell',
    spellshield: 'Special',
    projectile: 'True',
    notes:
      '* The trigger radius is slightly smaller than the heal radius.\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will not prevent the marked area from being formed.</li>\n<li>The heal can activate immediately after the projectile hits the target, before the healing return animation completes.</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li>\n<li>The heal will trigger and affect <b>Rakan</b> even if he is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>.</li></ul>',
    yvideo: 'Rakan - Q',
  },
  'Grand Entrance': {
    name: 'Grand Entrance',
    display_name: 'Grand Entrance',
    champion: 'Rakan',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'RakanW.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 240,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '600',
    effect_radius: '250',
    speed: '1700',
    cast_time: 'none',
    cost: '50 / 60 / 70 / 80 / 90',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">16 / 14.<small>5</small> / 13 / 11.<small>5</small> / 10</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rakan" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rakan/LoL" title="Rakan"><img alt="Rakan" src="/wiki/images/Rakan_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rakan/LoL" title="Rakan/LoL">Rakan</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location.',
      'After a brief delay, he deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks up</a></span> nearby enemies.',
    ],
    description: [
      {
        icon: '/wiki/images/Grand Entrance.png',
        description:
          'Active: Rakan  dashes to the target location. After a 0.35-second delay upon arrival, he deals magic damage to nearby enemies and  knocks them up for 1 second.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Rakan</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location. After a 0.<small>35</small>-second delay upon arrival, he deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks them up</a></span> for 1 second.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '70 / 120 / 170 / 220 / 270 (+ 80% AP)',
            valuesHTML:
              '70 / 120 / 170 / 220 / 270 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;80% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 120 / 170 / 220 / 270 (+ 80% AP)',
            damagetype: 'Magic',
            values: [70, 120, 170, 220, 270],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 120 / 170 / 220 / 270',
            children: [
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
      {
        description:
          'Rakan will be  knocked down by any  immobilizing or  polymorphing crowd control, excluding  sleep(bug), during Grand Entrance.',
        descriptionHTML:
          '<i><b>Rakan</b> will be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocked down</a></span> by any <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilizing</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Polymorph"><a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control#Polymorph"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control">polymorphing</a></span> crowd control, excluding <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sleep"><a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control#Sleep"><img alt="Sleep icon.png" src="/wiki/images/Sleep_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control">sleep</a></span><sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup>, during Grand Entrance.</i>',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Rakan will be  knocked down by any  immobilizing or  polymorphing crowd control, excluding  sleep(bug), during Grand Entrance.',
            values: 0,
            user: 'none',
            units: '',
            unitsText: ', during Grand Entrance.',
            pre: 'Rakan will be  knocked down by any  immobilizing or  polymorphing crowd control, excluding  sleep',
            post: ', during Grand Entrance.',
            children: [
              {
                values: 0,
                user: 'none',
                units: '',
                unitsText: 'bug',
                pre: 'bug',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Grand Entrance will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i>Grand Entrance will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes: '* No additional details.',
    yvideo: 'Rakan - W',
  },
  'Battle Dance': {
    name: 'Battle Dance',
    display_name: 'Battle Dance',
    champion: 'Rakan',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'RakanE.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 288,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '700 / 1000',
    speed:
      '1250 <span style="color: #F5EE99; white-space:normal">+&nbsp;80% movement speed</span>',
    cast_time: 'none',
    cost: '40 / 45 / 50 / 55 / 60',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">20 / 18 / 16 / 14 / 12</span>',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rakan" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rakan/LoL" title="Rakan"><img alt="Rakan" src="/wiki/images/Rakan_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rakan/LoL" title="Rakan/LoL">Rakan</a></span></span> can cast or re-cast <i>Battle Dance</i> at an increased <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;range</span> when targeting <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xayah" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xayah/LoL" title="Xayah"><img alt="Xayah" src="/wiki/images/Xayah_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xayah/LoL" title="Xayah/LoL">Xayah</a></span></span>.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Rakan</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span> the target allied champion for a short time, then <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to them. <i>Battle Dance</i> can be recast once with no cost.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Rakan</b> mimics the first cast.',
    ],
    description: [
      {
        icon: '/wiki/images/Battle Dance.png',
        description:
          'Active: Rakan grants a  shield to the target allied champion for 3 seconds and then  dashes to and around them. Battle Dance can be recast within 5 seconds at no additional cost.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Rakan</b> grants a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> to the target allied champion for 3 seconds and then <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to and around them. <i>Battle Dance</i> can be recast within 5 seconds at no additional cost.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Active:',
            raw: ' Rakan grants a  shield to the target allied champion for 3 seconds and then  dashes to and around them',
            damagetype: 'None',
            shieldType: 'OutgoingShields',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'grants a  shield to the target allied champion for 3 seconds and then  dashes to and around them',
            pre: 'Rakan grants a  shield to the target allied champion for 3 seconds and then  dashes to and around them',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Battle Dance can be recast within 5 seconds at no additional cost.',
            damagetype: 'None',
            values: 5,
            units: 'total_ad',
            unitsText:
              'Dance can be recast within 5 seconds at no additional cost.',
            pre: 'Battle Dance can be recast within 5 seconds at no additional cost.',
          },
        ],
        leveling: [
          {
            name: 'Shield Strength:',
            values: '50 / 75 / 100 / 125 / 150 (+ 70% AP)',
            valuesHTML:
              '50 / 75 / 100 / 125 / 150 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;70% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Shield',
            name: 'Shield Strength:',
            raw: '50 / 75 / 100 / 125 / 150 (+ 70% AP)',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: [50, 75, 100, 125, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 75 / 100 / 125 / 150',
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
        ],
      },
      {
        icon: '/wiki/images/Battle Dance 2.png',
        description: "Recast: Rakan mimics the first cast's effects.",
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Rakan</b> mimics the first cast\'s effects.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Rakan will be  knocked down by any  immobilizing or  polymorphing crowd control, excluding  sleep(bug), during Battle Dance.',
        descriptionHTML:
          '<i><b>Rakan</b> will be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocked down</a></span> by any <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilizing</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Polymorph"><a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control#Polymorph"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control">polymorphing</a></span> crowd control, excluding <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sleep"><a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control#Sleep"><img alt="Sleep icon.png" src="/wiki/images/Sleep_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control">sleep</a></span><sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup>, during Battle Dance.</i>',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Rakan will be  knocked down by any  immobilizing or  polymorphing crowd control, excluding  sleep(bug), during Battle Dance.',
            values: 0,
            user: 'none',
            units: '',
            unitsText: ', during Battle Dance.',
            pre: 'Rakan will be  knocked down by any  immobilizing or  polymorphing crowd control, excluding  sleep',
            post: ', during Battle Dance.',
            children: [
              {
                values: 0,
                user: 'none',
                units: '',
                unitsText: 'bug',
                pre: 'bug',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'If  Xayah is the target, Battle Dance can be cast from an increased range.',
        descriptionHTML:
          '<i>If <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xayah" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xayah/LoL" title="Xayah"><img alt="Xayah" src="/wiki/images/Xayah_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xayah/LoL" title="Xayah/LoL">Xayah</a></span></span> is the target, Battle Dance can be cast from an increased range.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Allies',
    spelleffects: 'Shield',
    notes:
      '*Both casts count as ability activations for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li>The shields do not stack if <i>Battle Dance</i> is cast on the same target twice. Only the duration and shield amount is refreshed.</li></ul>',
    yvideo: 'Rakan - E',
  },
  'The Quickness': {
    name: 'The Quickness',
    display_name: 'The Quickness',
    champion: 'Rakan',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'RakanR.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 336,
      y: 0,
      w: 48,
      h: 48,
    },
    collision_radius: '150',
    cast_time: '0.5',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">130 / 120 / 110 / 100 / 90</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rakan" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rakan/LoL" title="Rakan"><img alt="Rakan" src="/wiki/images/Rakan_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rakan/LoL" title="Rakan/LoL">Rakan</a></span></span> breaks into a captivating sprint, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span> and gaining <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for a few seconds. <b>Rakan</b> deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies he touches and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Charm"><a href="/wiki/Charm" title="Charm"><img alt="Charm icon.png" src="/wiki/images/Charm_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Charm" class="mw-redirect" title="Charm">charms</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them.',
      'Unique enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> collisions slightly extend <i>The Quickness\' </i>duration. The first enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> <b>Rakan</b> touches also grants him a burst of <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/The Quickness.png',
        description:
          'Active: Rakan breaks into a captivating sprint for 4 seconds, gaining  ghosting and  75% bonus movement speed for the duration. During this time, he deals magic damage to enemies he collides with and  charms and  slows them by 75% for a duration. This cannot affect the same enemy more than once.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Rakan</b> breaks into a captivating sprint for 4 seconds, gaining <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosting"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span> and <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">75% <b>bonus</b> movement speed</span></span> for the duration. During this time, he deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies he collides with and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Charm"><a href="/wiki/Charm" title="Charm"><img alt="Charm icon.png" src="/wiki/images/Charm_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Charm" class="mw-redirect" title="Charm">charms</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 75% for a duration. This cannot affect the same enemy more than once.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Rakan breaks into a captivating sprint for 4 seconds, gaining  ghosting and  75% bonus movement speed for the duration',
            increasedStat: 'total_ap',
            values: 4,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'bonus movement speed for the durationbreaks into a captivating sprint for 4 seconds, gaining  ghosting and  75',
            pre: 'Rakan breaks into a captivating sprint for 4 seconds, gaining  ghosting and  75% bonus movement speed for the duration',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'During this time, he deals magic damage to enemies he collides with and  charms and  slows them by 75% for a duration',
            damagetype: 'Magic',
            values: 7,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'for a durationthis time, he deals magic damage to enemies he collides with and  charms and  slows them by 75',
            pre: 'During this time, he deals magic damage to enemies he collides with and  charms and  slows them by 75% for a duration',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '100 / 150 / 200 / 250 / 300 (+ 50% AP)',
            valuesHTML:
              '100 / 150 / 200 / 250 / 300 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span>',
          },
          {
            name: 'Disable Duration:',
            values: '1 / 1.125 / 1.25 / 1.375 / 1.5',
            valuesHTML:
              '1 / 1.<small>125</small> / 1.<small>25</small> / 1.<small>375</small> / 1.<small>5</small>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '100 / 150 / 200 / 250 / 300 (+ 50% AP)',
            damagetype: 'Magic',
            values: [100, 150, 200, 250, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 150 / 200 / 250 / 300',
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
          {
            effectType: 'Unique',
            name: 'Disable Duration:',
            raw: '1 / 1.125 / 1.25 / 1.375 / 1.5',
            values: [1, 1.125, 1.25, 1.375, 1.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1 / 1.125 / 1.25 / 1.375 / 1.5',
          },
        ],
      },
      {
        description:
          "Colliding with an enemy  champion extends The Quickness' duration by 0.25 seconds, which can occur once per champion. When Rakan collides with his first enemy champion, he gains an additional 75% bonus movement speed that decays after 0.5 seconds by 20% every 0.5 seconds, then by 15% after decaying by 60% over 1.5 seconds.",
        descriptionHTML:
          'Colliding with an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> extends <i>The Quickness\' </i>duration by 0.<small>25</small> seconds, which can occur once per champion. When <b>Rakan</b> collides with his first enemy champion, he gains an additional <span style="color: #F5EE99; white-space:normal">75% <b>bonus</b> movement speed</span> that decays after 0.<small>5</small> seconds by 20% every 0.<small>5</small> seconds, then by 15% after decaying by 60% over 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'When Rakan collides with his first enemy champion, he gains an additional 75% bonus movement speed that decays after 0.5 seconds by 20% every 0.5 seconds, then by 15% after decaying by 60% over 1.5 seconds.',
            increasedStat: 'bonus_ad',
            values: 7,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'bonus movement speed that decays after 0.5 seconds by 20Rakan collides with his first enemy champion, he gains an additional 75',
            pre: 'When Rakan collides with his first enemy champion, he gains an additional 75% bonus movement speed that decays after 0.5 seconds by 20% every 0.5 seconds, then by 15% after decaying by 60% over 1.5 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'During The Quickness, Rakan cannot basic attack enemy champions he did not collide with, unless the attack command was inputted before the ability was activated.',
        descriptionHTML:
          '<i>During The Quickness, <b>Rakan</b> cannot basic attack enemy champions he did not collide with, unless the attack command was inputted before the ability was activated.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self / Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes:
      '<div style="clear:both"></div>\n<ul><li>The following table refers for interactions while <b>Rakan</b> is in cast time:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Cast time\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Allowed\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td><img alt="Grand Entrance.png" src="/wiki/images/Rakan_Grand_Entrance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> <i>Grand Entrance</i> is disabled but can still be buffered. <img alt="Gleaming Quill.png" src="/wiki/images/Rakan_Gleaming_Quill.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> <i>Gleaming Quill</i> and <img alt="Battle Dance.png" src="/wiki/images/Rakan_Battle_Dance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> <i>Battle Dance</i> are usable.\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Allowed\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>All the other item-actives are usable\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>  <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death, unless protected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">Resurrection</a></span>\n</li></td></tr></tbody></table>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Rakan_Original_R_0.ogg   "Party starter!"',
    yvideo: 'Rakan - R',
  },
} satisfies { [skillName in string]: SkillData };
