import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Yorick';

export default {
  'Shepherd of Souls': {
    name: 'Shepherd of Souls',
    display_name: 'Shepherd of Souls',
    champion: 'Yorick',
    skill: 'I',
    image: {
      full: 'Yorick_P.png',
      sprite: 'passive5.png',
      group: 'passive',
      x: 144,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Grave summon range">1000</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Grave despawn range, pending for test">2500</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate- Final Service:</b></span> Enemies that die near <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yorick" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yorick/LoL" title="Yorick"><img alt="Yorick" src="/wiki/images/Yorick_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yorick/LoL" title="Yorick/LoL">Yorick</a></span></span> will leave a <i>grave</i>, as well as those he kills with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yorick" data-ability="Last Rites" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yorick/LoL#Last_Rites" title="Last Rites"><img alt="Last Rites" src="/wiki/images/Yorick_Last_Rites.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yorick/LoL#Last_Rites" title="Yorick/LoL">Last Rites</a></span></span></i>. <b>Yorick</b> can use <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yorick" data-ability="Awakening" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yorick/LoL#Awakening" title="Awakening"><img alt="Awakening" src="/wiki/images/Yorick_Awakening.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yorick/LoL#Awakening" title="Yorick/LoL">Awakening</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yorick" data-ability="Mourning Mist" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yorick/LoL#Mourning_Mist" title="Mourning Mist"><img alt="Mourning Mist" src="/wiki/images/Yorick_Mourning_Mist.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yorick/LoL#Mourning_Mist" title="Yorick/LoL">Mourning Mist</a></span></span></i> to turn all <i>graves</i> into <span style="color: #26DFB0; white-space:normal">Mist Walkers</span> that assist him in combat.',
      '<span class="template_sbc"><b>Innate - The Cursed Horde:</b></span> <span style="color: #26DFB0; white-space:normal">Mist Walkers</span> will autonomously advance a lane upon entering combat within. <b>Yorick</b> can have up to 4 <span style="color: #26DFB0; white-space:normal">Mist Walkers</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Shepherd of Souls.png',
        description:
          'Innate - Final Service: Yorick raises a grave for every enemy he kills with  Last Rites, as well as for every enemy  champion and large  monster that dies near him. Additionally, Yorick raises a grave for every 12th / 6th / 2nd (based on level) enemy that dies otherwise near him. Up to 4 graves can exist at once, with the furthest ones being replaced by the newest.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Final Service:</b></span> <b>Yorick</b> raises a <i>grave</i> for every enemy he kills with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yorick" data-ability="Last Rites" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yorick/LoL#Last_Rites" title="Last Rites"><img alt="Last Rites" src="/wiki/images/Yorick_Last_Rites.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yorick/LoL#Last_Rites" title="Yorick/LoL">Last Rites</a></span></span></i>, as well as for every enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> and large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> that dies near him. Additionally, <b>Yorick</b> raises a grave for every <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="12th;6th;2nd" data-top_values="1;7;13">12th / 6th / 2nd (based on level)</span> enemy that dies otherwise near him. Up to 4 <i>graves</i> can exist at once, with the furthest ones being replaced by the newest.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Additionally, Yorick raises a grave for every 12th / 6th / 2nd (based on level) enemy that dies otherwise near him',
            damagetype: 'None',
            values: [],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'enemy that dies otherwise near him',
            pre: 'Additionally, Yorick raises a grave for every 12th / 6th / 2nd',
            post: 'enemy that dies otherwise near him',
          },
          {
            effectType: 'Unique',
            name: 'Line 3:',
            raw: 'Up to 4 graves can exist at once, with the furthest ones being replaced by the newest.',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'to 4 graves can exist at once, with the furthest ones being replaced by the newest.',
            pre: 'Up to 4 graves can exist at once, with the furthest ones being replaced by the newest.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Yorick can use  Awakening and  Mourning Mist's mark to raise a Mist Walker from each grave.",
        descriptionHTML:
          '<b>Yorick</b> can use <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yorick" data-ability="Awakening" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yorick/LoL#Awakening" title="Awakening"><img alt="Awakening" src="/wiki/images/Yorick_Awakening.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yorick/LoL#Awakening" title="Yorick/LoL">Awakening</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yorick" data-ability="Mourning Mist" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yorick/LoL#Mourning_Mist" title="Mourning Mist\'s"><img alt="Mourning Mist\'s" src="/wiki/images/Yorick_Mourning_Mist.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yorick/LoL#Mourning_Mist" title="Yorick/LoL">Mourning Mist\'s</a></span></span></i> mark to raise a <span style="color: #26DFB0; white-space:normal">Mist Walker</span> from each <i>grave</i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Innate - The Cursed Horde: Up to 4 Mist Walkers can be active at once, with the closest ones being replaced by the newest.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - The Cursed Horde:</b></span> Up to 4 <span style="color: #26DFB0; white-space:normal">Mist Walkers</span> can be active at once, with the closest ones being replaced by the newest.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Innate - The Cursed Horde:',
            raw: ' Up to 4 Mist Walkers can be active at once, with the closest ones being replaced by the newest.',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'to 4 Mist Walkers can be active at once, with the closest ones being replaced by the newest.',
            pre: 'Up to 4 Mist Walkers can be active at once, with the closest ones being replaced by the newest.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description: 'See Pets for more details about Mist Walkers.',
        descriptionHTML:
          '<i>See <a href="/wiki/Yorick/LoL#Pets" title="Yorick/LoL">Pets</a> for more details about <span style="color: #26DFB0; white-space:normal">Mist Walkers</span>.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes: '* No additional notes.',
    yvideo: 'Yorick - Passive',
  },
  'Last Rites': {
    name: 'Last Rites',
    display_name: 'Last Rites',
    champion: 'Yorick',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'YorickQ.png',
      sprite: 'spell15.png',
      group: 'spell',
      x: 384,
      y: 96,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '25',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">7 / 6.<small>25</small> / 5.<small>5</small> / 4.<small>75</small> / 4</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yorick" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yorick/LoL" title="Yorick\'s"><img alt="Yorick\'s" src="/wiki/images/Yorick_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yorick/LoL" title="Yorick/LoL">Yorick\'s</a></span></span> next basic attack within a few seconds will gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> range</span>, deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> him. The heal is increased while <span style="color: #1F995C; white-space:normal">below half health</span>.',
      'If there are at least 3 <i>graves</i> nearby while <i>Last Rites</i> is active or on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>, he can cast <i>Awakening</i>.',
    ],
    description: [
      {
        icon: '/wiki/images/Last Rites.png',
        description:
          'Active: Yorick empowers his next basic attack within 5 seconds to have an  uncancellable windup, gain  50 bonus range, deal bonus physical damage, and  heal him for 10 − 68 (based on level). The heal is doubled to 20 − 136 (based on level) if he is below 50% maximum health.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Yorick</b> empowers his next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> within 5 seconds to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>, gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50 <b>bonus</b> range</span>, deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> him for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="10 + 2 per level until 6, then + 3 per level until 12, then + 5 per level" data-bot_values="10;12;14;16;18;20;23;26;29;32;35;38;43;48;53;58;63;68" data-top_values="">10 − 68 (based on level)</span>. The heal is doubled to <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="20 + 4 per level until 6, then + 6 per level until 12, then + 10 per level" data-bot_values="20;24;28;32;36;40;46;52;58;64;70;76;86;96;106;116;126;136" data-top_values="">20 − 136 (based on level)</span> if he is <span style="color: #1F995C; white-space:normal">below 50% <b>maximum</b> health</span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Active:',
            raw: ' Yorick empowers his next basic attack within 5 seconds to have an  uncancellable windup, gain  50 bonus range, deal bonus physical damage, and  heal him for 10 − 68 (based on level)',
            healType: 'PhysicalVamp',
            values: [
              10, 13.41, 16.82, 20.24, 23.65, 27.06, 30.47, 33.88, 37.29, 40.71,
              44.12, 47.53, 50.94, 54.35, 57.76, 61.18, 64.59, 68,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: '',
            pre: 'Yorick empowers his next basic attack within 5 seconds to have an  uncancellable windup, gain  50 bonus range, deal bonus physical damage, and  heal him for 10 − 68',
          },
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: 'The heal is doubled to 20 − 136 (based on level) if he is below 50% maximum health.',
            healType: 'BonusHealth',
            values: [
              20, 26.82, 33.65, 40.47, 47.29, 54.12, 60.94, 67.76, 74.59, 81.41,
              88.24, 95.06, 101.88, 108.71, 115.53, 122.35, 129.18, 136,
            ],
            basedOn: 'level',
            units: 'maximum_hp',
            unitsText: 'if he is below 50% maximum health.',
            pre: 'The heal is doubled to 20 − 136',
            post: 'if he is below 50% maximum health.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Physical Damage:',
            values: '30 / 55 / 80 / 105 / 130 (+ 40% AD)',
            valuesHTML:
              '30 / 55 / 80 / 105 / 130 <span style="color:orange; white-space:normal">(+&nbsp;40% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Physical Damage:',
            raw: '30 / 55 / 80 / 105 / 130 (+ 40% AD)',
            damagetype: 'Physical',
            values: [30, 55, 80, 105, 130],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 55 / 80 / 105 / 130',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 40% AD',
              },
            ],
          },
        ],
      },
      {
        description:
          'While there are at least 3 graves nearby and Last Rites is active or on  cooldown, Yorick can cast  Awakening.',
        descriptionHTML:
          'While there are at least 3 <i>graves</i> nearby and <i>Last Rites</i> is active or on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>, <b>Yorick</b> can cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yorick" data-ability="Awakening" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yorick/LoL#Awakening" title="Awakening"><img alt="Awakening" src="/wiki/images/Yorick_Awakening.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yorick/LoL#Awakening" title="Yorick/LoL">Awakening</a></span></span></i>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'While there are at least 3 graves nearby and Last Rites is active or on  cooldown, Yorick can cast  Awakening.',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'there are at least 3 graves nearby and Last Rites is active or on  cooldown, Yorick can cast  Awakening.',
            pre: 'While there are at least 3 graves nearby and Last Rites is active or on  cooldown, Yorick can cast  Awakening.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description: "Last Rites  resets Yorick's basic attack timer.",
        descriptionHTML:
          '<i>Last Rites <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Yorick\'s</b> basic attack timer.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self, Enemies',
    damagetype: 'Physical',
    spelleffects: 'spell',
    spellshield: false,
    notes: '* No additional notes.',
    yvideo: 'Yorick - Q',
  },
  Awakening: {
    name: 'Awakening',
    display_name: 'Awakening',
    champion: 'Yorick',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'YorickQ.png',
      sprite: 'spell15.png',
      group: 'spell',
      x: 384,
      y: 96,
      w: 48,
      h: 48,
    },
    range: '1000',
    cast_time: 'none',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yorick" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yorick/LoL" title="Yorick"><img alt="Yorick" src="/wiki/images/Yorick_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yorick/LoL" title="Yorick/LoL">Yorick</a></span></span> summons <span style="color: #26DFB0; white-space:normal">Mist Walkers</span> from the <i>graves</i> around him.',
    ],
    description: [
      {
        icon: '/wiki/images/Awakening.png',
        description:
          'Active: Yorick exhumes a Mist Walker under his command from each nearby grave.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Yorick</b> exhumes a <span style="color: #26DFB0; white-space:normal">Mist Walker</span> under his command from each nearby <i>grave</i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    notes:
      '* <i>Awakening</i> counts as an ability activation for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li><i>Mist Walkers</i> update their <a href="/wiki/Champion_statistic" title="Champion statistic">statistics</a> correspondingly to <b>Yorick\'s </b> during the periodic stat update, with the exception of their <span style="color: #1F995C; white-space:normal">maximum health</span>.</li>\n<li><i>Awakening</i> cannot be cast without enough <i>graves</i> in <b>range</b>.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Yorick_Original_Q2_10.ogg   "Arise and return to this world."',
    yvideo: 'Yorick - Q',
  },
  'Dark Procession': {
    name: 'Dark Procession',
    display_name: 'Dark Procession',
    champion: 'Yorick',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'YorickW.png',
      sprite: 'spell15.png',
      group: 'spell',
      x: 432,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '600',
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Spirits spawn radius">225</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Sight radius from center of ring">200</span>',
    cast_time: 'none',
    cost: '70',
    costtype: 'Mana',
    cooldown: '20 / 18 / 16 / 14 / 12',
    customlabel: 'Impassable perimeter',
    custominfo:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Pathing radius"><a href="/wiki/Unit_radius" title="Unit radius"><img alt="Pathing radius.png" src="/wiki/images/Pathing_radius.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Inner radius">125</span> to <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Outher radius">325</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yorick" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yorick/LoL" title="Yorick"><img alt="Yorick" src="/wiki/images/Yorick_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yorick/LoL" title="Yorick/LoL">Yorick</a></span></span> summons a destructible ring of spirits at the target location that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks aside</a></span> enemies hit. It remains as <a href="/wiki/Terrain" title="Terrain">terrain</a> against enemies for a few seconds,',
    ],
    description: [
      {
        icon: '/wiki/images/Dark Procession.png',
        description:
          'Active: Yorick summons a ring of spirits around the target location that arises after a 0.75-second delay,  knocking aside enemies hit over 0.25 seconds, though not through terrain. Within 210-units, they are pulled inside; otherwise they are pushed away. The ring remains for 4 seconds as impassible terrain against enemies, granting  sight inside the ring.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Yorick</b> summons a ring of spirits around the target location that arises after a 0.<small>75</small>-second delay, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking aside</a></span> enemies hit over 0.<small>25</small> seconds, though not through terrain. Within <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">210-units</span>, they are pulled inside; otherwise they are pushed away. The ring remains for 4 seconds as impassible <a href="/wiki/Terrain" title="Terrain">terrain</a> against enemies, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> inside the ring.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'Within 210-units, they are pulled inside; otherwise they are pushed away',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              '210-units, they are pulled inside; otherwise they are pushed away',
            pre: 'Within 210-units, they are pulled inside; otherwise they are pushed away',
          },
          {
            effectType: 'Gain',
            name: 'Line 3:',
            raw: 'The ring remains for 4 seconds as impassible terrain against enemies, granting  sight inside the ring.',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'ring remains for 4 seconds as impassible terrain against enemies, granting  sight inside the ring.',
            pre: 'The ring remains for 4 seconds as impassible terrain against enemies, granting  sight inside the ring.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Dark Procession can only be targeted by enemy  champion basic attacks and  turrets. The wall takes 1 damage per attack from champions and is destroyed instantly from turret attacks.',
        descriptionHTML:
          '<i>Dark Procession</i> can only be targeted by enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> basic attacks and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span>. The wall takes 1 <a href="/wiki/Damage" title="Damage">damage</a> per attack from champions and is destroyed instantly from turret attacks.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'The wall takes 1 damage per attack from champions and is destroyed instantly from turret attacks.',
            damagetype: 'None',
            values: 1,
            units: 'total_ad',
            unitsText:
              'wall takes 1 damage per attack from champions and is destroyed instantly from turret attacks.',
            pre: 'The wall takes 1 damage per attack from champions and is destroyed instantly from turret attacks.',
          },
        ],
        leveling: [
          {
            name: 'Wall Health:',
            values: '2 / 2 / 3 / 3 / 4',
            valuesHTML: '2 / 2 / 3 / 3 / 4',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Wall Health:',
            raw: '2 / 2 / 3 / 3 / 4',
            healType: 'BonusHealth',
            values: [2, 2, 3, 3, 4],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '2 / 2 / 3 / 3 / 4',
          },
        ],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    spellshield: false,
    notes:
      '* <i>Dark Procession</i> has a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span> prioritization value of 6, equal to that of <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Super_minion" title="super minions"><img alt="super minions" src="/wiki/images/Blue_Super_MinionSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Super_minion" title="Super minion">super minions</a></span></span>.\n<ul><li><ul><li><b>Yorick\'s</b> other <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Pet"><a href="/wiki/Pets" title="Pets"><img alt="Summon Tibbers.png" src="/wiki/images/Annie_Summon-_Tibbers.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Pets" title="Pets">pets</a></span> each have a lower prioritization value, allowing him to delay the turret from targeting the <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yorick" data-ability="Eulogy of the Isles" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yorick/LoL#Eulogy_of_the_Isles" title="The Maiden"><img alt="The Maiden" src="/wiki/images/Yorick_Eulogy_of_the_Isles.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yorick/LoL#Eulogy_of_the_Isles" title="Yorick/LoL">The Maiden</a></span></span> or a <span style="color: #26DFB0; white-space:normal">Mist Walker</span> for one attack.</li></ul></li>\n<li><i>Dark Procession</i> deals 0 <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Proc damage"><a href="/wiki/Damage" title="Damage"><img alt="Wit\'s End item.png" src="/wiki/images/Wit%27s_End_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">proc</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True damage"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration.png" src="/wiki/images/Hybrid_penetration.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/True_damage" title="True damage">true damage</a></span> to enemies it knocks aside, which triggers <a href="/wiki/Combat_status" title="Combat status">in-combat</a> effects such as drawing turret and <a href="/wiki/Monster#Monster_Behavior" title="Monster">monster aggression</a>, <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Sudden Impact" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sudden_Impact_(Rune)" title="Sudden Impact"><img alt="Sudden Impact" src="/wiki/images/Sudden_Impact_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Sudden_Impact_(Rune)" class="mw-redirect" title="Sudden Impact (Rune)">Sudden Impact</a></span></span> or applying <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Night Harvester" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Night_Harvester" title="Night Harvester"><img alt="Night Harvester" src="/wiki/images/Night_Harvester_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Night_Harvester" title="Night Harvester">Night Harvester</a></span></span> and <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Elixir of Sorcery" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elixir_of_Sorcery" title="Elixir of Sorcery"><img alt="Elixir of Sorcery" src="/wiki/images/Elixir_of_Sorcery_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elixir_of_Sorcery" title="Elixir of Sorcery">Elixir of Sorcery</a></span></span>.</li>\n<li>The perimeter is made up of 18 units with 100 <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Pathing radius"><a href="/wiki/Unit_radius" title="Unit radius"><img alt="Pathing radius.png" src="/wiki/images/Pathing_radius.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_radius" title="Unit radius">pathing radius</a></span> and 20 <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Gameplay radius"><a href="/wiki/Unit_radius" title="Unit radius"><img alt="Gameplay radius.png" src="/wiki/images/Gameplay_radius.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_radius" title="Unit radius">gameplay radius</a></span> each.</li>\n<li>Repeatedly while the cage persists, all enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> inside it become marked for <b>Yorick</b> to gain an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">assist</a></span> on them should they perish within the standard 10 seconds assist time.</li></ul>',
    yvideo: 'Yorick - W',
  },
  'Mourning Mist': {
    name: 'Mourning Mist',
    display_name: 'Mourning Mist',
    champion: 'Yorick',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'YorickE.png',
      sprite: 'spell15.png',
      group: 'spell',
      x: 0,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '700',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Bonus movement speed range">1500</span>',
    cast_time: '0.<small>33</small>',
    cost: '50 / 55 / 60 / 65 / 70',
    costtype: 'Mana',
    cooldown: '12 / 11 / 10 / 9 / 8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yorick" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yorick/LoL" title="Yorick"><img alt="Yorick" src="/wiki/images/Yorick_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yorick/LoL" title="Yorick/LoL">Yorick</a></span></span> hurls a globule of Black Mist that splashes at the target location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit by a portion of <span style="color: #1F995C; white-space:normal">their <b>current</b> health</span>. Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> hit are also shortly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span>, and marked <i>Cursed</i> for a few seconds.',
      '<b>Yorick</b> and his summons gain <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> toward a <i>Cursed</i> target. <span style="color: #26DFB0; white-space:normal">Mist Walkers</span> will leap to a nearby <i>Cursed</i> target and focus them.',
      '<span class="template_sbc"><b>Cursed:</b></span> The target takes increased damage from <span style="color: #26DFB0; white-space:normal">Mist Walkers</span>. Nearby <i>graves</i> automatically raise a <span style="color: #26DFB0; white-space:normal">Mist Walkers</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Mourning Mist.png',
        description:
          "Active: Yorick hurls a globule of Black Mist that splashes across an area at the target location, dealing magic damage to enemies hit equal to 15% of the target's current health, down to a minimum threshold.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Yorick</b> hurls a globule of Black Mist that splashes across an area at the target location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit equal to <span style="color: #1F995C; white-space:normal">15% of the target\'s <b>current</b> health</span>, down to a minimum threshold.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Active:',
            raw: " Yorick hurls a globule of Black Mist that splashes across an area at the target location, dealing magic damage to enemies hit equal to 15% of the target's current health, down to a minimum threshold.",
            healType: 'OutgoingHeals',
            values: 1,
            valuesIsPercent: true,
            user: 'target',
            units: 'current_hp',
            unitsText:
              "of the target's current health, down to a minimum threshold.hurls a globule of Black Mist that splashes across an area at the target location, dealing magic damage to enemies hit equal to 15",
            pre: "Yorick hurls a globule of Black Mist that splashes across an area at the target location, dealing magic damage to enemies hit equal to 15% of the target's current health, down to a minimum threshold.",
          },
        ],
        leveling: [
          {
            name: 'Minimum Magic Damage:',
            values: '70 / 105 / 140 / 175 / 210 (+ 70% AP)',
            valuesHTML:
              '70 / 105 / 140 / 175 / 210 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;70% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Minimum Magic Damage:',
            raw: '70 / 105 / 140 / 175 / 210 (+ 70% AP)',
            damagetype: 'Magic',
            values: [70, 105, 140, 175, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 105 / 140 / 175 / 210',
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
          'Enemy  champions and  monsters hit are  slowed by 30% for 2 seconds, and marked as Cursed for 4 seconds. Cursed champions are also  revealed.',
        descriptionHTML:
          'Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> hit are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 30% for 2 seconds, and marked as <i>Cursed</i> for 4 seconds. <i>Cursed</i> champions are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Enemy  champions and  monsters hit are  slowed by 30% for 2 seconds, and marked as Cursed for 4 seconds',
            values: 3,
            valuesIsPercent: true,
            units: 'kindredMarks',
            unitsText:
              'for 2 seconds, and marked as Cursed for 4 seconds champions and  monsters hit are  slowed by 30',
            pre: 'Enemy  champions and  monsters hit are  slowed by 30% for 2 seconds, and marked as Cursed for 4 seconds',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Mourning Mist 2.png',
        description:
          'Cursed: The target takes 40% bonus damage from 8 attacks by Mist Walkers and continually raises a Mist Walker from each nearby grave, up to a maximum of 4.\nYorick, Mist Walkers and the  The Maiden gain  20% bonus movement speed while facing nearby Cursed enemies. Mist Walkers will  leap to nearby Cursed enemy champions and large monsters, dealing  100% of their AD upon arrival.',
        descriptionHTML:
          '<span class="template_sbc"><b>Cursed:</b></span> The target takes 40% <b>bonus</b> damage from 8 attacks by <span style="color: #26DFB0; white-space:normal">Mist Walkers</span> and continually raises a <span style="color: #26DFB0; white-space:normal">Mist Walker</span> from each nearby <i>grave</i>, up to a maximum of 4.<br><br>\n<p><b>Yorick</b>, <span style="color: #26DFB0; white-space:normal">Mist Walkers</span> and the <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yorick" data-ability="Eulogy of the Isles" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yorick/LoL#Eulogy_of_the_Isles" title="The Maiden"><img alt="The Maiden" src="/wiki/images/Yorick_Eulogy_of_the_Isles.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yorick/LoL#Eulogy_of_the_Isles" title="Yorick/LoL">The Maiden</a></span></span></i> gain <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">20% <b>bonus</b> movement speed</span></span> while facing nearby <i>Cursed</i> enemies. <span style="color: #26DFB0; white-space:normal">Mist Walkers</span> will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leap</a></span> to nearby <i>Cursed</i> enemy champions and large monsters, dealing <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike physical icon.png" src="/wiki/images/Critical_strike_physical_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike"><span style="color:orange; white-space:normal">100% of their AD</span></span> upon arrival.\n</p>',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Cursed:',
            raw: ' The target takes 40% bonus damage from 8 attacks by Mist Walkers and continually raises a Mist Walker from each nearby grave, up to a maximum of 4.\nYorick, Mist Walkers and the  The Maiden gain  20% bonus movement speed while facing nearby Cursed enemies',
            increasedStat: 'bonus_ad',
            values: 4,
            valuesIsPercent: true,
            user: 'target',
            units: '',
            unitsText:
              'bonus damage from 8 attacks by Mist Walkers and continually raises a Mist Walker from each nearby grave, up to a maximum of 4.\nYorick, Mist Walkers and the  The Maiden gain  20target takes 40',
            pre: 'The target takes 40% bonus damage from 8 attacks by Mist Walkers and continually raises a Mist Walker from each nearby grave, up to a maximum of 4.\nYorick, Mist Walkers and the  The Maiden gain  20% bonus movement speed while facing nearby Cursed enemies',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Mist Walkers will  leap to nearby Cursed enemy champions and large monsters, dealing  100% of their AD upon arrival.',
            damagetype: 'None',
            values: 1,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              'of their AD upon arrival.Walkers will  leap to nearby Cursed enemy champions and large monsters, dealing  100',
            pre: 'Mist Walkers will  leap to nearby Cursed enemy champions and large monsters, dealing  100% of their AD upon arrival.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Mourning Mist will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i>Mourning Mist will cast at max range if cast beyond that.</i>',
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
    projectile: 'True',
    notes:
      '* <b>Yorick</b> will snap his facing direction towards the target location at the start of the cast time.\n<ul><li>The speed boost toward marked targetes does not require <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of them.</li>\n<li>The <span style="color: #26DFB0; white-space:normal">Mist Walkers</span> do not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leap</a></span> if they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span>, or if the <i>marked</i> target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Yorick_Original_EHit_2.ogg   "An unholy mark upon you!"',
    yvideo: 'Yorick - E',
  },
  'Eulogy of the Isles': {
    name: 'Eulogy of the Isles',
    display_name: 'Eulogy of the Isles',
    champion: 'Yorick',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'YorickR.png',
      sprite: 'spell15.png',
      group: 'spell',
      x: 48,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '600',
    cast_time: '0.<small>5</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Begins after Yorick\'s death or the Maiden of the Mist\'s death">160 / 130 / 100</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yorick" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yorick/LoL" title="Yorick"><img alt="Yorick" src="/wiki/images/Yorick_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yorick/LoL" title="Yorick/LoL">Yorick</a></span></span> summons the <i>Maiden of the Mist</i> and a few <span style="color: #26DFB0; white-space:normal">Mist Walkers</span> at the target location. The <i>Maiden</i> will automatically raise <span style="color: #26DFB0; white-space:normal">Mist Walkers</span> from dead enemies, and mark her attack target with <i>Touch of the Maiden</i>.',
      '<i>Eulogy of the Isles</i> can be recast while the <i>Maiden</i> is active.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Yorick</b> sets the <i>Maiden</i> free, allowing her to push the nearest lane.',
      '<span class="template_sbc"><b>Touch of the Maiden:</b></span> <b>Yorick\'s</b> next basic attack will consume the mark to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> by a portion of the <span style="color: #1F995C; white-space:normal">target\'s <b>maximum</b> health</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Eulogy of the Isles.png',
        description:
          'Active: Yorick summons the Maiden of the Mist surrounded by a number of Mist Walkers at the target location, which remain on the battlefield until she or Yorick dies. Eulogy of the Isles can be recast once while the Maiden is alive after 10 seconds of the activation.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Yorick</b> summons the <i>Maiden of the Mist</i> surrounded by a number of <span style="color: #26DFB0; white-space:normal">Mist Walkers</span> at the target location, which remain on the battlefield until she or <b>Yorick</b> dies. <i>Eulogy of the Isles</i> can be recast once while the <i>Maiden</i> is alive after 10 seconds of the activation.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'Eulogy of the Isles can be recast once while the Maiden is alive after 10 seconds of the activation.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'of the Isles can be recast once while the Maiden is alive after 10 seconds of the activation.',
            pre: 'Eulogy of the Isles can be recast once while the Maiden is alive after 10 seconds of the activation.',
          },
        ],
        leveling: [
          {
            name: 'Mist Walkers:',
            values: '2 / 3 / 4',
            valuesHTML: '2 / 3 / 4',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Mist Walkers:',
            raw: '2 / 3 / 4',
            values: [2, 3, 4],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '2 / 3 / 4',
          },
        ],
      },
      {
        description:
          'Recast: Yorick sets the Maiden free, allowing her to push the nearest lane until she dies.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Yorick</b> sets the <i>Maiden</i> free, allowing her to push the nearest <a href="/wiki/Lanes" title="Lanes">lane</a> until she dies.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'See Pets for more details about The Maiden of the Mist. Eulogy of the Isles will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i>See <a href="/wiki/Yorick/LoL#Pets" title="Yorick/LoL">Pets</a> for more details about The Maiden of the Mist. Eulogy of the Isles will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Self',
    notes:
      '* See the <i>Pets</i> section below for more details about <i>The Maiden of the Mist</i> and <span style="color: #26DFB0; white-space:normal">Mist Walkers</span>.\n<ul><li>The extra <span style="color: #26DFB0; white-space:normal">Mist Walkers</span> spawn 250 units from the <i>Maiden</i> summon location.</li>\n<li>The <i>Maiden</i> updates her stats when <b>Yorick\'s</b> <a href="/wiki/Champion_statistic" title="Champion statistic">stats</a> change, and as <i>Eulogy of the Isles</i> is ranked up.</li>\n<li>When <b>Yorick</b> dies, <i>The Maiden</i> rapidly loses portions of her <span style="color: #1F995C; white-space:normal"><b>maximum</b> health</span> over 3 seconds until she dies.\n<ul><li>The loss of <span style="color: #1F995C; white-space:normal"><b>maximum</b> health</span> occurs in 0.<small>6</small>-second intervals, in which she loses 20% on the first, 25% on the second, 33.<small><span style="text-decoration: overline;">3</span></small>% on the third, 50% on the fourth, and 100% on the fifth.</li></ul></li>\n<li><b>Yorick</b> will snap his facing direction towards the target location at the start of the cast time.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Yorick_Original_R_1.ogg   "Behold the horrors of the isles!" https://leagueoflegends.fandom.com/wiki/File:Yorick_Original_R_Maiden_1.ogg   The Maiden of the Mist: "The mist takes all!"',
    yvideo: 'Yorick - R',
  },
} satisfies { [skillName in string]: SkillData };
