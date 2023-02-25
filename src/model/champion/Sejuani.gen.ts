import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Sejuani';

export default {
  'Fury of the North': {
    name: 'Fury of the North',
    display_name: 'Fury of the North',
    champion: 'Sejuani',
    skill: 'I',
    image: {
      full: 'Sejuani_passive.png',
      sprite: 'passive3.png',
      group: 'passive',
      x: 384,
      y: 48,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate - Icebreaker:</b></span> Enemies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> by <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sejuani" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sejuani/LoL" title="Sejuani"><img alt="Sejuani" src="/wiki/images/Sejuani_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sejuani/LoL" title="Sejuani/LoL">Sejuani</a></span></span> are also marked <i>Frozen</i> at the same time. Her next basic attack against a <i>Frozen</i> target will consume the mark to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> based on <span style="color: #1F995C; white-space:normal">their <b>maximum</b> health</span>.',
      '<span class="template_sbc"><b>Innate - Frost Armor:</b></span> <b>Sejuani</b> gains <i>Frost Armor</i>, which lingers shortly after taking damage from enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> or large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>. She restores it after a period without taking damage from them.',
      '<img alt="Sejuani Frost Armor.png" src="/wiki/images/Sejuani_Frost_Armor.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"><span class="template_sbc"><b>Frost Armor:</b></span> Sejuani gains <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resist</span></span>, as well as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow-immune"><a href="/wiki/Slow_resist#Slow_Immunity" title="Slow resist#Slow Immunity"><img alt="Slow immune 2.png" src="/wiki/images/Slow_immune_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow_resist#Slow_Immunity" title="Slow resist">slow immunity</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cripple-immune"><a href="/wiki/Slow_resist#Cripple_Immunity" title="Slow resist#Cripple Immunity"><img alt="Cripple immune.png" src="/wiki/images/Cripple_immune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow_resist#Cripple_Immunity" title="Slow resist">cripple immunity</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Fury of the North.png',
        description:
          "Innate - Icebreaker: Enemies  stunned by Sejuani are marked Frozen for the disable's duration. Sejuani's next basic attack or ability against a Frozen enemy will consume the mark to deal bonus magic damage equal to 10% of their maximum health, capped at 300 against epic monsters.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Icebreaker:</b></span> Enemies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> by <b>Sejuani</b> are marked <i>Frozen</i> for the disable\'s duration. <b>Sejuani\'s</b> next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> or <a href="/wiki/Champion_ability" title="Champion ability">ability</a> against a <i>Frozen</i> enemy will consume the mark to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> equal to <span style="color: #1F995C; white-space:normal">10% of their <b>maximum</b> health</span>, capped at 300 against epic monsters.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: "Sejuani's next basic attack or ability against a Frozen enemy will consume the mark to deal bonus magic damage equal to 10% of their maximum health, capped at 300 against epic monsters.",
            healType: 'BonusHealth',
            values: 1,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              'of their maximum health, capped at 300 against epic monsters.next basic attack or ability against a Frozen enemy will consume the mark to deal bonus magic damage equal to 10',
            pre: "Sejuani's next basic attack or ability against a Frozen enemy will consume the mark to deal bonus magic damage equal to 10% of their maximum health, capped at 300 against epic monsters.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Innate - Frost Armor: Sejuani gains Frost Armor, which lingers for 3 seconds after taking damage from enemy  champions or  monsters. She restores it after 12 − 6 (based on level) seconds without taking damage from them.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Frost Armor:</b></span> <b>Sejuani</b> gains <i>Frost Armor</i>, which lingers for 3 seconds after taking damage from enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>. She restores it after <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="12;" data-finish="6;" data-bot_values="12;11.65;11.29;10.94;10.59;10.24;9.88;9.53;9.18;8.82;8.47;8.12;7.76;7.41;7.06;6.71;6.35;6" data-top_values="">12 − 6 (based on level)</span> seconds without taking damage from them.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate - Frost Armor:',
            raw: ' Sejuani gains Frost Armor, which lingers for 3 seconds after taking damage from enemy  champions or  monsters',
            increasedStat: 'total_armor',
            values: 3,
            units: '',
            unitsText:
              'gains Frost Armor, which lingers for 3 seconds after taking damage from enemy  champions or  monsters',
            pre: 'Sejuani gains Frost Armor, which lingers for 3 seconds after taking damage from enemy  champions or  monsters',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'She restores it after 12 − 6 (based on level) seconds without taking damage from them.',
            damagetype: 'None',
            values: [
              12, 11.65, 11.29, 10.94, 10.59, 10.24, 9.88, 9.53, 9.18, 8.82,
              8.47, 8.12, 7.76, 7.41, 7.06, 6.71, 6.35, 6,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'seconds without taking damage from them.',
            pre: 'She restores it after 12 − 6',
            post: 'seconds without taking damage from them.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Sejuani Frost Armor.png',
        description:
          'Frost Armor: Sejuani gains  slow immunity,  cripple immunity,  10 (+ 50% bonus armor) bonus armor, and  10 (+ 50% bonus magic resistance) bonus magic resistance.',
        descriptionHTML:
          '<span class="template_sbc"><b>Frost Armor:</b></span> <b>Sejuani</b> gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow-immune"><a href="/wiki/Slow_resist#Slow_Immunity" title="Slow resist#Slow Immunity"><img alt="Slow immune 2.png" src="/wiki/images/Slow_immune_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow_resist#Slow_Immunity" title="Slow resist">slow immunity</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cripple-immune"><a href="/wiki/Slow_resist#Cripple_Immunity" title="Slow resist#Cripple Immunity"><img alt="Cripple immune.png" src="/wiki/images/Cripple_immune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow_resist#Cripple_Immunity" title="Slow resist">cripple immunity</a></span>, <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">10 (+&nbsp;50% <b>bonus</b> armor) <b>bonus</b> armor</span></span>, and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">10 (+&nbsp;50% <b>bonus</b> magic resistance) <b>bonus</b> magic resistance</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Frost Armor:',
            raw: ' Sejuani gains  slow immunity,  cripple immunity,  10 (+ 50% bonus armor) bonus armor, and  10 (+ 50% bonus magic resistance) bonus magic resistance.',
            increasedStat: 'bonus_armor',
            values: 1,
            units: '',
            unitsText: 'bonus armor, and  10',
            pre: 'Sejuani gains  slow immunity,  cripple immunity,  10',
            post: 'bonus armor, and  10',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                units: 'bonus_armor',
                unitsText: 'bonus armor',
                pre: '+ 50% bonus armor',
              },
              {
                values: 50,
                valuesIsPercent: true,
                units: 'bonus_mr',
                unitsText: 'bonus magic resistance',
                pre: '+ 50% bonus magic resistance',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self, Enemies',
    damagetype: 'Magic',
    spelleffects: 'proc',
    spellshield: 'Unknown',
    notes:
      '* Gaining <i>Frost Armor</i> does not remove any pre-existing <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cripple"><a href="/wiki/Cripple" title="Cripple"><img alt="Cripple icon.png" src="/wiki/images/Cripple_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cripple" class="mw-redirect" title="Cripple">cripples</a></span>.\n<ul><li><i>Icebreaker</i> will not trigger if the basic attack is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blocked"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span>.</li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: <i>Icebreaker\'s </i> interactions with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodging</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinding</a></span> effects via basic attack.</li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> interaction with <i>Icebreaker</i>.</li></ul>',
  },
  'Arctic Assault': {
    name: 'Arctic Assault',
    display_name: 'Arctic Assault',
    champion: 'Sejuani',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'SejuaniQ.png',
      sprite: 'spell11.png',
      group: 'spell',
      x: 384,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '650',
    speed: '1000',
    cast_time: 'none',
    cost: '70 / 75 / 80 / 85 / 90',
    costtype: 'Mana',
    cooldown: '18 / 16.<small>5</small> / 15 / 13.<small>5</small> / 12',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sejuani" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sejuani/LoL" title="Sejuani"><img alt="Sejuani" src="/wiki/images/Sejuani_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sejuani/LoL" title="Sejuani/LoL">Sejuani</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking up</a></span> enemies she passes through. She will stop upon hitting an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Arctic Assault.png',
        description:
          'Active:  Bristle  dashes to the target location until he collides with an enemy  champion, dealing magic damage to enemies he passes through and  knocking them up for 0.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Bristle" title="Bristle"><img alt="Bristle" src="/wiki/images/BristleSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Bristle" title="Bristle">Bristle</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location until he collides with an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies he passes through and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them up</a></span> for 0.<small>5</small> seconds.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '90 / 140 / 190 / 240 / 290 (+ 60% AP)',
            valuesHTML:
              '90 / 140 / 190 / 240 / 290 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '90 / 140 / 190 / 240 / 290 (+ 60% AP)',
            damagetype: 'Magic',
            values: [90, 140, 190, 240, 290],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '90 / 140 / 190 / 240 / 290',
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
        description:
          'Sejuani can cast any of her abilities during the dash. Arctic Assault will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i><b>Sejuani</b> can cast any of her <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> during the dash. Arctic Assault will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Area of effect',
    spellshield: true,
    notes:
      '* Champions will slightly be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked back</a></span>, while <a href="/wiki/Minion" class="mw-redirect" title="Minion">minions</a> and <a href="/wiki/Monster" title="Monster">monsters</a> will instead be slightly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulled</a></span> for a fixed distance.\n<ul><li><i>Arctic Assault</i> cannot <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock</a></span> enemies over terrain.</li>\n<li>Casting <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> during <i>Arctic Assault</i> will end the dash and affect enemies at the new location.</li>\n<li>Upon colliding with an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, Sejuani will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack"><a href="/wiki/Basic_attack" title="Basic attack">attack</a></span> them.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Sejuani_Original_Q_0.ogg   "Stampede!"',
  },
  "Winter's Wrath": {
    name: "Winter's Wrath",
    display_name: "Winter's Wrath",
    champion: 'Sejuani',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'SejuaniW.png',
      sprite: 'spell11.png',
      group: 'spell',
      x: 432,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '600',
    cast_time: '1',
    cost: '65',
    costtype: 'Mana',
    cooldown: '9 / 8 / 7 / 6 / 5',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sejuani" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sejuani/LoL" title="Sejuani"><img alt="Sejuani" src="/wiki/images/Sejuani_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sejuani/LoL" title="Sejuani/LoL">Sejuani</a></span></span> swings her flail in a cone in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking back</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
      'She then lashes out the flail in a line in the same direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> enemies hit.',
      '<b>Sejuani</b> can move while casting <i>Winter’s Wrath</i>.',
    ],
    description: [
      {
        icon: "/wiki/images/Winter's Wrath.png",
        description:
          'Active: After 0.25 seconds into the cast time, Sejuani swings her flail in a cone in the target direction that deals physical damage to enemies hit and  knocks back  minions and  monsters hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> After 0.<small>25</small> seconds into the cast time, <b>Sejuani</b> swings her flail in a cone in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks back</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> hit.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical Damage:',
            values:
              '20 / 25 / 30 / 35 / 40 (+ 20% AP) (+ 2% of her maximum health)',
            valuesHTML:
              '20 / 25 / 30 / 35 / 40 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;20% AP)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;2% of her <b>maximum</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Physical Damage:',
            raw: '20 / 25 / 30 / 35 / 40 (+ 20% AP) (+ 2% of her maximum health)',
            healType: 'PhysicalVamp',
            values: [20, 25, 30, 35, 40],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 25 / 30 / 35 / 40',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 20% AP',
              },
              {
                values: 2,
                valuesIsPercent: true,
                units: 'maximum_hp',
                unitsText: 'of her maximum health',
                pre: '+ 2% of her maximum health',
              },
            ],
          },
        ],
      },
      {
        description:
          'After the cast time, Sejuani lashes out with her flail in a line in the same direction, dealing physical damage to enemies hit and  slowing them by 75% for 0.25 seconds.',
        descriptionHTML:
          'After the cast time, <b>Sejuani</b> lashes out with her flail in a line in the same direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 75% for 0.<small>25</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'After the cast time, Sejuani lashes out with her flail in a line in the same direction, dealing physical damage to enemies hit and  slowing them by 75% for 0.25 seconds.',
            damagetype: 'Physical',
            values: 7,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'for 0.25 seconds.the cast time, Sejuani lashes out with her flail in a line in the same direction, dealing physical damage to enemies hit and  slowing them by 75',
            pre: 'After the cast time, Sejuani lashes out with her flail in a line in the same direction, dealing physical damage to enemies hit and  slowing them by 75% for 0.25 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values:
              '30 / 70 / 110 / 150 / 190 (+ 60% AP) (+ 6% of her maximum health)',
            valuesHTML:
              '30 / 70 / 110 / 150 / 190 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;6% of her <b>maximum</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Physical Damage:',
            raw: '30 / 70 / 110 / 150 / 190 (+ 60% AP) (+ 6% of her maximum health)',
            healType: 'PhysicalVamp',
            values: [30, 70, 110, 150, 190],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 70 / 110 / 150 / 190',
            children: [
              {
                values: 60,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 60% AP',
              },
              {
                values: 6,
                valuesIsPercent: true,
                units: 'maximum_hp',
                unitsText: 'of her maximum health',
                pre: '+ 6% of her maximum health',
              },
            ],
          },
        ],
      },
      {
        description: "Sejuani can move during Winter's Wrath's cast time.",
        descriptionHTML:
          "<i><b>Sejuani</b> can move during Winter's Wrath's cast time.</i>",
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'spellaoe',
    spellshield: 'Special',
    projectile: 'False',
    notes:
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shields</a></span> will block only a single instance of damage - either the swing or the lash.\n<ul><li>This ability will cast from wherever the caster is at the end of the cast time.\n<ul><li>Both swings will strike in the cast direction, but the second swing will do so from <b>Sejuani\'s</b> location at the end of the cast time.</li></ul></li></ul>',
  },
  Permafrost: {
    name: 'Permafrost',
    display_name: 'Permafrost',
    champion: 'Sejuani',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'SejuaniE.png',
      sprite: 'spell11.png',
      group: 'spell',
      x: 0,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '600',
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Frost stack aura">1100</span>',
    cast_time: '0.<small>25</small>',
    cost: '20',
    costtype: 'Mana',
    cooldown: '1.<small>5</small>',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sejuani" data-ability="Winter\'s Wrath" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sejuani/LoL#Winter\'s_Wrath" title="Winter\'s Wrath"><img alt="Winter\'s Wrath" src="/wiki/images/Sejuani_Winter%27s_Wrath.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sejuani/LoL#Winter\'s_Wrath" title="Sejuani/LoL">Winter\'s Wrath</a></span></span> and both <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sejuani" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sejuani/LoL" title="Sejuani\'s"><img alt="Sejuani\'s" src="/wiki/images/Sejuani_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sejuani/LoL" title="Sejuani/LoL">Sejuani\'s</a></span></span> and nearby allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Melee"><a href="/wiki/Melee" title="Melee"><img alt="Melee role.png" src="/wiki/images/Melee_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Melee" class="mw-redirect" title="Melee">melee</a></span> champions\' attacks apply stacks of <i>Frost</i> against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, medium / large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> and large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>, which lasts a few seconds and stacks up to a cap. <b>Sejuani</b> can cast <i>Permafrost</i> against an enemy with max stacks.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Sejuani</b> hurls a trap at the target enemy that consumes their <i>Frost</i> stacks and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocks them down</a></span>, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them.',
      "Once an enemy's <i>Frost</i> stacks are consumed, they cannot gain any more for a period.",
    ],
    description: [
      {
        icon: '/wiki/images/Sejuani Frost Stack.png',
        description:
          "Passive:  Winter's Wrath and both Sejuani's and nearby allied  melee champions' attacks  on-hit apply stacks of Frost to enemy  champions, medium or large  monsters, and large  minions for 5 seconds, refreshing on subsequent applications and stacking up to 4 times, though not applying if the target is  Frozen. Enemies hit by Permafrost or  Glacial Prison's bola have all of their Frost stacks consumed. Enemy champions cannot be affected by Frost for 10 seconds after having it consumed. Sejuani can cast Permafrost against an enemy with 4 stacks.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sejuani" data-ability="Winter\'s Wrath" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sejuani/LoL#Winter\'s_Wrath" title="Winter\'s Wrath"><img alt="Winter\'s Wrath" src="/wiki/images/Sejuani_Winter%27s_Wrath.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sejuani/LoL#Winter\'s_Wrath" title="Sejuani/LoL">Winter\'s Wrath</a></span></span> and both <b>Sejuani\'s</b> and nearby allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Melee"><a href="/wiki/Melee" title="Melee"><img alt="Melee role.png" src="/wiki/images/Melee_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Melee" class="mw-redirect" title="Melee">melee</a></span> champions\' attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> apply <a href="/wiki/Stack" title="Stack">stacks</a> of <i>Frost</i> to enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, medium or large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, and large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> for 5 seconds, refreshing on subsequent applications and stacking up to 4 times, though not applying if the target is <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sejuani" data-ability="Fury of the North" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sejuani/LoL#Fury_of_the_North" title="Frozen"><img alt="Frozen" src="/wiki/images/Sejuani_Fury_of_the_North.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sejuani/LoL#Fury_of_the_North" title="Sejuani/LoL">Frozen</a></span></span>. Enemies hit by <i>Permafrost</i> or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sejuani" data-ability="Glacial Prison" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sejuani/LoL#Glacial_Prison" title="Glacial Prison\'s"><img alt="Glacial Prison\'s" src="/wiki/images/Sejuani_Glacial_Prison.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sejuani/LoL#Glacial_Prison" title="Sejuani/LoL">Glacial Prison\'s</a></span></span></i> bola have all of their <i>Frost</i> stacks consumed. Enemy champions cannot be affected by <i>Frost</i> for 10 seconds after having it consumed. <br><br><b>Sejuani</b> can cast <i>Permafrost</i> against an enemy with 4 stacks.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Passive:',
            raw: "  Winter's Wrath and both Sejuani's and nearby allied  melee champions' attacks  on-hit apply stacks of Frost to enemy  champions, medium or large  monsters, and large  minions for 5 seconds, refreshing on subsequent applications and stacking up to 4 times, though not applying if the target is  Frozen",
            min: 0,
            max: 10,
            description:
              "  Winter's Wrath and both Sejuani's and nearby allied  melee champions' attacks  on-hit apply stacks of Frost to enemy  champions, medium or large  monsters, and large  minions for 5 seconds, refreshing on subsequent applications and stacking up to 4 times, though not applying if the target is  Frozen",
            values: 5,
            units: 'total_ap',
            unitsText:
              "Wrath and both Sejuani's and nearby allied  melee champions' attacks  on-hit apply stacks of Frost to enemy  champions, medium or large  monsters, and large  minions for 5 seconds, refreshing on subsequent applications and stacking up to 4 times, though not applying if the target is  Frozen",
            pre: "Winter's Wrath and both Sejuani's and nearby allied  melee champions' attacks  on-hit apply stacks of Frost to enemy  champions, medium or large  monsters, and large  minions for 5 seconds, refreshing on subsequent applications and stacking up to 4 times, though not applying if the target is  Frozen",
          },
          {
            effectType: 'Unique',
            name: 'Line 3:',
            raw: 'Enemy champions cannot be affected by Frost for 10 seconds after having it consumed',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'champions cannot be affected by Frost for 10 seconds after having it consumed',
            pre: 'Enemy champions cannot be affected by Frost for 10 seconds after having it consumed',
          },
          {
            effectType: 'Gain',
            name: 'Line 4:',
            raw: 'Sejuani can cast Permafrost against an enemy with 4 stacks.',
            increasedStat: 'feastStacks',
            values: 4,
            units: '',
            unitsText: 'can cast Permafrost against an enemy with 4 stacks.',
            pre: 'Sejuani can cast Permafrost against an enemy with 4 stacks.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Permafrost.png',
        description:
          'Active: Sejuani hurls a trap at the  visible enemy with 4 stacks of Frost closest to the cursor, which deals magic damage,  knocks them down, and  stuns them for 1 second.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Sejuani</b> hurls a trap at the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy with 4 stacks of <i>Frost</i> closest to the cursor, which deals <span style="color: #00B0F0; white-space:normal">magic damage</span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocks them down</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> them for 1 second.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Active:',
            raw: ' Sejuani hurls a trap at the  visible enemy with 4 stacks of Frost closest to the cursor, which deals magic damage,  knocks them down, and  stuns them for 1 second.',
            min: 0,
            max: 10,
            description:
              ' Sejuani hurls a trap at the  visible enemy with 4 stacks of Frost closest to the cursor, which deals magic damage,  knocks them down, and  stuns them for 1 second.',
            values: 4,
            units: 'total_ap',
            unitsText:
              'hurls a trap at the  visible enemy with 4 stacks of Frost closest to the cursor, which deals magic damage,  knocks them down, and  stuns them for 1 second.',
            pre: 'Sejuani hurls a trap at the  visible enemy with 4 stacks of Frost closest to the cursor, which deals magic damage,  knocks them down, and  stuns them for 1 second.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '55 / 105 / 155 / 205 / 255 (+ 60% AP)',
            valuesHTML:
              '55 / 105 / 155 / 205 / 255 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '55 / 105 / 155 / 205 / 255 (+ 60% AP)',
            damagetype: 'Magic',
            values: [55, 105, 155, 205, 255],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 105 / 155 / 205 / 255',
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
        description: "Permafrost  resets Sejuani's basic attack timer.",
        descriptionHTML:
          '<i>Permafrost <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Sejuani\'s</b> basic attack timer.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies, Allies, Self',
    damagetype: 'Magic',
    spelleffects: 'Single target',
    spellshield: true,
    projectile: 'True',
    callforhelp: 'True',
    notes:
      '* <i>Permafrost\'s</i> targeting prioritizes champions within 50 of cursor, then non-champions within 50 of cursor, then champions within 350 of cursor, then closest unit to cursor within 2500 (this only applies if there is no target directly under the cursor).\n<ul><li><i>Permafrost</i> also slightly knocks back the target upon hitting them. This does not apply <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span>.</li>\n<li><i>Frost</i> stacks will not be applied if the basic attack is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blocked"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span>.</li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: <i>Permafrost\'s</i> stack application interaction with <i>parrying</i> effects (<span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jax" data-ability="Counter Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jax/LoL#Counter_Strike" title="dodge"><img alt="dodge" src="/wiki/images/Jax_Counter_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jax/LoL#Counter_Strike" title="Jax/LoL">dodge</a></span></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blind</a></span>).</li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but still go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> and pay its cost.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul>',
  },
  'Glacial Prison': {
    name: 'Glacial Prison',
    display_name: 'Glacial Prison',
    champion: 'Sejuani',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'SejuaniR.png',
      sprite: 'spell11.png',
      group: 'spell',
      x: 48,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '1300',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 240',
    speed: '1600',
    cast_time: '0.<small>25</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown: '120 / 110 / 100 / 90 / 80',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sejuani" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sejuani/LoL" title="Sejuani"><img alt="Sejuani" src="/wiki/images/Sejuani_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sejuani/LoL" title="Sejuani/LoL">Sejuani</a></span></span> throws an ice bola in the target direction that stops upon hitting an enemy champion, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them.',
      'If the bola travels far enough, it becomes empowered to detonate upon reaching max range or hitting an enemy champion, gaining increased damage and stun duration. It also creates a frost storm that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> enemies within.',
      'After a brief moment, the storm shatters to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> enemies within.',
    ],
    description: [
      {
        icon: '/wiki/images/Glacial Prison.png',
        description:
          'Active: Sejuani throws an ice bola in the target direction that stops upon hitting an enemy champion, dealing magic damage and  stunning them for 1 second.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Sejuani</b> throws an ice bola in the target direction that stops upon hitting an enemy champion, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 1 second.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Sejuani throws an ice bola in the target direction that stops upon hitting an enemy champion, dealing magic damage and  stunning them for 1 second.',
            damagetype: 'Magic',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'throws an ice bola in the target direction that stops upon hitting an enemy champion, dealing magic damage and  stunning them for 1 second.',
            pre: 'Sejuani throws an ice bola in the target direction that stops upon hitting an enemy champion, dealing magic damage and  stunning them for 1 second.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '125 / 137.5 / 150 / 162.5 / 175 (+ 40% AP)',
            valuesHTML:
              '125 / 137.<small>5</small> / 150 / 162.<small>5</small> / 175 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '125 / 137.5 / 150 / 162.5 / 175 (+ 40% AP)',
            damagetype: 'Magic',
            values: [125, 137.5, 150, 162.5, 175],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '125 / 137.5 / 150 / 162.5 / 175',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 40% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          'If the bola travels over 400 units, it becomes empowered to detonate upon reaching maximum range or hitting an enemy champion, dealing increased damage and  stunning for 1.5 seconds instead. For the same duration, a frost storm is created that  slows enemies within by 30% and grants  sight of the area in a smaller radius.',
        descriptionHTML:
          'If the bola travels over 400 units, it becomes empowered to detonate upon reaching maximum range or hitting an enemy champion, dealing increased damage and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> for 1.<small>5</small> seconds instead. For the same duration, a frost storm is created that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> enemies within by 30% and grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area in a smaller radius.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'If the bola travels over 400 units, it becomes empowered to detonate upon reaching maximum range or hitting an enemy champion, dealing increased damage and  stunning for 1.5 seconds instead',
            damagetype: 'None',
            values: 4,
            units: 'total_ad',
            unitsText:
              'the bola travels over 400 units, it becomes empowered to detonate upon reaching maximum range or hitting an enemy champion, dealing increased damage and  stunning for 1.5 seconds instead',
            pre: 'If the bola travels over 400 units, it becomes empowered to detonate upon reaching maximum range or hitting an enemy champion, dealing increased damage and  stunning for 1.5 seconds instead',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'For the same duration, a frost storm is created that  slows enemies within by 30% and grants  sight of the area in a smaller radius.',
            increasedStat: 'total_ad',
            values: 3,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'and grants  sight of the area in a smaller radius.the same duration, a frost storm is created that  slows enemies within by 30',
            pre: 'For the same duration, a frost storm is created that  slows enemies within by 30% and grants  sight of the area in a smaller radius.',
          },
        ],
        leveling: [
          {
            name: 'Increased Damage:',
            values: '200 / 250 / 300 / 350 / 400 (+ 80% AP)',
            valuesHTML:
              '200 / 250 / 300 / 350 / 400 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;80% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Increased Damage:',
            raw: '200 / 250 / 300 / 350 / 400 (+ 80% AP)',
            damagetype: 'None',
            values: [200, 250, 300, 350, 400],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 250 / 300 / 350 / 400',
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
          'Afterwards, the storm shatters to deal magic damage to enemies hit and  slow them by 80% for 1 second, as well as  revealing them and granting  sight of the area for 0.5 seconds.',
        descriptionHTML:
          'Afterwards, the storm shatters to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> them by 80% for 1 second, as well as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> them and granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area for 0.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Afterwards, the storm shatters to deal magic damage to enemies hit and  slow them by 80% for 1 second, as well as  revealing them and granting  sight of the area for 0.5 seconds.',
            values: 8,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'for 1 second, as well as  revealing them and granting  sight of the area for 0.5 seconds.the storm shatters to deal magic damage to enemies hit and  slow them by 80',
            pre: 'Afterwards, the storm shatters to deal magic damage to enemies hit and  slow them by 80% for 1 second, as well as  revealing them and granting  sight of the area for 0.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '200 / 250 / 300 / 350 / 400 (+ 80% AP)',
            valuesHTML:
              '200 / 250 / 300 / 350 / 400 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;80% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '200 / 250 / 300 / 350 / 400 (+ 80% AP)',
            damagetype: 'Magic',
            values: [200, 250, 300, 350, 400],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 250 / 300 / 350 / 400',
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
          "The enemy hit by the bola is not affected by the storm's effects.",
        descriptionHTML:
          "The enemy hit by the bola is not affected by the storm's effects.",
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Special',
    spellshield: 'Special',
    projectile: 'True',
    notes:
      '* Applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell damage"><a href="/wiki/Damage" title="Damage"><img alt="Disintegrate.png" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">spell damage</a></span> to the primary target and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span> to secondary targets in the ice storm.\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shields</a></span> will block only a single instance of damage.</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li>\n<li>Both areas of effect will be centered on the first champion struck, not at the location the missile collided with them.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Sejuani_Original_R_0.ogg   "A gift from the Freljord!"',
  },
} satisfies { [skillName in string]: SkillData };
