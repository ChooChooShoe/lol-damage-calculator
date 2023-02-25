import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Braum';

export default {
  'Concussive Blows': {
    name: 'Concussive Blows',
    display_name: 'Concussive Blows',
    champion: 'Braum',
    skill: 'I',
    image: {
      full: 'Braum_Passive.png',
      sprite: 'passive0.png',
      group: 'passive',
      x: 288,
      y: 48,
      w: 48,
      h: 48,
    },
    ontargetcdstatic:
      '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="8;1" data-finish="4;11" data-bot_values="8;6;4" data-top_values="1;6;11">8 / 6 / 4 (based on level)</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL" title="Braum\'s"><img alt="Braum\'s" src="/wiki/images/Braum_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL" title="Braum/LoL">Braum\'s</a></span></span> basic attacks and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-ability="Winter\'s Bite" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL#Winter\'s_Bite" title="Winter\'s Bite"><img alt="Winter\'s Bite" src="/wiki/images/Braum_Winter%27s_Bite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL#Winter\'s_Bite" title="Braum/LoL">Winter\'s Bite</a></span></span> apply a stack of <i>Concussive Blows</i>. Once the first stack is applied, allied champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic damage"><a href="/wiki/Damage" title="Damage"><img alt="Basic Attack.png" src="/wiki/images/Basic_Attack.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">basic attacks</a></span> can also stack <i>Concussive Blows</i>.',
      'At maximum stacks, the target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> and takes <span style="color: #00B0F0; white-space:normal">magic damage</span>. For the next few seconds they cannot receive new stacks, but take bonus <span style="color: #00B0F0; white-space:normal">magic damage</span> from <b>Braum\'s</b> basic attacks.',
    ],
    description: [
      {
        icon: '/wiki/images/Concussive Blows.png',
        description:
          "Innate: Braum's basic attacks and  Winter's Bite each apply a stack of Concussive Blows to their target for 4 seconds, refreshing on subsequent applications and stacking up to 4 times. Once the first stack has been applied, any allied  champion's basic attack applies an additional stack to the target  on-hit.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Braum\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-ability="Winter\'s Bite" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL#Winter\'s_Bite" title="Winter\'s Bite"><img alt="Winter\'s Bite" src="/wiki/images/Braum_Winter%27s_Bite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL#Winter\'s_Bite" title="Braum/LoL">Winter\'s Bite</a></span></span></i> each apply a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Concussive Blows</i> to their target for 4 seconds, refreshing on subsequent applications and stacking up to 4 times. Once the first stack has been applied, any allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion\'s</a></span> basic attack applies an additional stack to the target <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Innate:',
            raw: " Braum's basic attacks and  Winter's Bite each apply a stack of Concussive Blows to their target for 4 seconds, refreshing on subsequent applications and stacking up to 4 times",
            min: 0,
            max: 10,
            description:
              " Braum's basic attacks and  Winter's Bite each apply a stack of Concussive Blows to their target for 4 seconds, refreshing on subsequent applications and stacking up to 4 times",
            values: 4,
            units: 'total_ap',
            unitsText:
              "basic attacks and  Winter's Bite each apply a stack of Concussive Blows to their target for 4 seconds, refreshing on subsequent applications and stacking up to 4 times",
            pre: "Braum's basic attacks and  Winter's Bite each apply a stack of Concussive Blows to their target for 4 seconds, refreshing on subsequent applications and stacking up to 4 times",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'The fourth stack against a target consumes them all to deal 26 − 196 (based on level) magic damage and  stun them for 1.25 − 1.75 (based on level) seconds.',
        descriptionHTML:
          'The fourth stack against a target consumes them all to deal <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="26;" data-finish="196;" data-bot_values="26;36;46;56;66;76;86;96;106;116;126;136;146;156;166;176;186;196" data-top_values="">26 − 196 (based on level)</span></span> <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> them for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="1.25;1" data-finish="1.75;13" data-bot_values="1.25;1.5;1.75" data-top_values="1;7;13">1.<small>25</small> − 1.<small>75</small> (based on level)</span> seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'The fourth stack against a target consumes them all to deal 26 − 196 (based on level) magic damage and  stun them for 1.25 − 1.75 (based on level) seconds.',
            values: [
              26, 36, 46, 56, 66, 76, 86, 96, 106, 116, 126, 136, 146, 156, 166,
              176, 186, 196,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'magic damage and  stun them for 1.25 − 1.75',
            pre: 'The fourth stack against a target consumes them all to deal 26 − 196',
            post: 'magic damage and  stun them for 1.25 − 1.75',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "This effect cannot apply to the same target more than once every few seconds. During this immunity period, affected targets take「 bonus magic damage equal to 20% of the trigger damage 」「 5.2 − 39.2 (based on level) bonus magic damage 」from Braum's basic attacks.",
        descriptionHTML:
          'This effect cannot apply to the same target more than once every few seconds. During this immunity period, affected targets take<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> equal to 20% of the trigger damage&nbsp;」</span><span class="flipText2">「&nbsp;<span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="5.2;" data-finish="39.2;" data-bot_values="5.2;7.2;9.2;11.2;13.2;15.2;17.2;19.2;21.2;23.2;25.2;27.2;29.2;31.2;33.2;35.2;37.2;39.2" data-top_values="">5.<small>2</small> − 39.<small>2</small> (based on level)</span> <b>bonus</b> magic damage</span>&nbsp;」</span></span>from <b>Braum\'s</b> basic attacks.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: "During this immunity period, affected targets take「 bonus magic damage equal to 20% of the trigger damage 」「 5.2 − 39.2 (based on level) bonus magic damage 」from Braum's basic attacks.",
            damagetype: 'Magic',
            values: [
              5.2, 7.2, 9.2, 11.2, 13.2, 15.2, 17.2, 19.2, 21.2, 23.2, 25.2,
              27.2, 29.2, 31.2, 33.2, 35.2, 37.2, 39.2,
            ],
            valuesIsPercent: true,
            basedOn: 'level',
            units: 'bonus_ad',
            unitsText: "bonus magic damage 」from Braum's basic attacks.",
            pre: 'During this immunity period, affected targets take「 bonus magic damage equal to 20% of the trigger damage 」「 5.2 − 39.2',
            post: "bonus magic damage 」from Braum's basic attacks.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Proc',
    spellshield: true,
    notes:
      '* <i>Concussive Blows</i> won\'t be applied if the attack is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span> or if the attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">misses</a></span>.',
    video: 'Braum IVideo.ogv',
  },
  "Winter's Bite": {
    name: "Winter's Bite",
    display_name: "Winter's Bite",
    champion: 'Braum',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'BraumQ.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 0,
      y: 0,
      w: 48,
      h: 48,
    },
    range: '1050 /  990',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 120',
    speed: '1700',
    cast_time: '0.<small>25</small>',
    cost: '45 / 50 / 55 / 60 / 65',
    costtype: 'mana',
    cooldown: '8 / 7.<small>5</small> / 7 / 6.<small>5</small> / 6',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL" title="Braum"><img alt="Braum" src="/wiki/images/Braum_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL" title="Braum/LoL">Braum</a></span></span> propels freezing ice from his shield, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> and dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit.',
    ],
    description: [
      {
        icon: "/wiki/images/Winter's Bite.png",
        description:
          'Active: Braum propels ice from his shield in the target direction, dealing magic damage to the first enemy hit and  slowing them by 70% decaying over 2 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Braum</b> propels ice from his shield in the target direction, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 70% decaying over 2 seconds.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Active:',
            raw: ' Braum propels ice from his shield in the target direction, dealing magic damage to the first enemy hit and  slowing them by 70% decaying over 2 seconds.',
            damagetype: 'Magic',
            shieldType: 'OutgoingShields',
            values: 7,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'decaying over 2 seconds.propels ice from his shield in the target direction, dealing magic damage to the first enemy hit and  slowing them by 70',
            pre: 'Braum propels ice from his shield in the target direction, dealing magic damage to the first enemy hit and  slowing them by 70% decaying over 2 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values:
              "75 / 125 / 175 / 225 / 275 (+ 2.5% of Braum's maximum health)",
            valuesHTML:
              '75 / 125 / 175 / 225 / 275 <span style="color: #1F995C; white-space:normal">(+&nbsp;2.<small>5</small>% of <b>Braum\'s</b> <b>maximum</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Magic Damage:',
            raw: "75 / 125 / 175 / 225 / 275 (+ 2.5% of Braum's maximum health)",
            healType: 'BonusHealth',
            values: [75, 125, 175, 225, 275],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 125 / 175 / 225 / 275',
            children: [
              {
                values: 2.5,
                valuesIsPercent: true,
                units: 'maximum_hp',
                unitsText: "of Braum's maximum health",
                pre: "+ 2.5% of Braum's maximum health",
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
    video: 'Braum QVideo.ogv',
  },
  'Stand Behind Me': {
    name: 'Stand Behind Me',
    display_name: 'Stand Behind Me',
    champion: 'Braum',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'BraumW.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 48,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '650',
    cast_time: 'none',
    cost: '40',
    costtype: 'mana',
    cooldown: '12 / 11 / 10 / 9 / 8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL" title="Braum"><img alt="Braum" src="/wiki/images/Braum_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL" title="Braum/LoL">Braum</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to a target allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span>. On arrival, both of them gain <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">magic resistance</span></span> for a few seconds.',
    ],
    description: [
      {
        icon: '/wiki/images/Stand Behind Me.png',
        description:
          'Active: Braum  dashes to put himself between the target ally and the closest  visible enemy  champion within 1500 units, and upon arrival grants himself and the ally  bonus armor and  bonus magic resistance for 3 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Braum</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to put himself <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="150 units from his ally towards the closest enemy">between</span> the target ally and the closest <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="from the ally\'s location">within 1500 units</span>, and upon arrival grants himself and the ally <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resistance</span></span> for 3 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Braum  dashes to put himself between the target ally and the closest  visible enemy  champion within 1500 units, and upon arrival grants himself and the ally  bonus armor and  bonus magic resistance for 3 seconds.',
            increasedStat: 'bonus_armor',
            values: 1,
            user: 'target',
            units: '',
            unitsText:
              'dashes to put himself between the target ally and the closest  visible enemy  champion within 1500 units, and upon arrival grants himself and the ally  bonus armor and  bonus magic resistance for 3 seconds.',
            pre: 'Braum  dashes to put himself between the target ally and the closest  visible enemy  champion within 1500 units, and upon arrival grants himself and the ally  bonus armor and  bonus magic resistance for 3 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Ally Bonus Armor:',
            values: '20 / 25 / 30 / 35 / 40 (+ 12% bonus armor)',
            valuesHTML:
              '20 / 25 / 30 / 35 / 40 <span style="color:yellow; white-space:normal">(+&nbsp;12% <b>bonus</b> armor)</span>',
          },
          {
            name: 'Ally Bonus Magic Resistance:',
            values: '20 / 25 / 30 / 35 / 40 (+ 12% bonus magic resistance)',
            valuesHTML:
              '20 / 25 / 30 / 35 / 40 <span style="color: #00FFFF; white-space:normal">(+&nbsp;12% <b>bonus</b> magic resistance)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Ally Bonus Armor:',
            raw: '20 / 25 / 30 / 35 / 40 (+ 12% bonus armor)',
            values: [20, 25, 30, 35, 40],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 25 / 30 / 35 / 40',
            children: [
              {
                values: 12,
                valuesIsPercent: true,
                units: 'bonus_armor',
                unitsText: 'bonus armor',
                pre: '+ 12% bonus armor',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Ally Bonus Magic Resistance:',
            raw: '20 / 25 / 30 / 35 / 40 (+ 12% bonus magic resistance)',
            damagetype: 'Magic',
            values: [20, 25, 30, 35, 40],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 25 / 30 / 35 / 40',
            children: [
              {
                values: 12,
                valuesIsPercent: true,
                units: 'bonus_mr',
                unitsText: 'bonus magic resistance',
                pre: '+ 12% bonus magic resistance',
              },
            ],
          },
        ],
      },
      {
        description:
          'Stand Behind Me can be self cast to instantly grant Braum the bonus resistances.',
        descriptionHTML:
          '<i>Stand Behind Me</i> can be <a href="/wiki/Self-targeted" title="Self-targeted">self cast</a> to instantly grant <b>Braum</b> the <b>bonus</b> resistances.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Self Bonus Armor:',
            values: '20 / 25 / 30 / 35 / 40 (+ 36% bonus armor)',
            valuesHTML:
              '20 / 25 / 30 / 35 / 40 <span style="color:yellow; white-space:normal">(+&nbsp;36% <b>bonus</b> armor)</span>',
          },
          {
            name: 'Self Bonus Magic Resistance:',
            values: '20 / 25 / 30 / 35 / 40 (+ 36% bonus magic resistance)',
            valuesHTML:
              '20 / 25 / 30 / 35 / 40 <span style="color: #00FFFF; white-space:normal">(+&nbsp;36% <b>bonus</b> magic resistance)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Self Bonus Armor:',
            raw: '20 / 25 / 30 / 35 / 40 (+ 36% bonus armor)',
            values: [20, 25, 30, 35, 40],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 25 / 30 / 35 / 40',
            children: [
              {
                values: 36,
                valuesIsPercent: true,
                units: 'bonus_armor',
                unitsText: 'bonus armor',
                pre: '+ 36% bonus armor',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Self Bonus Magic Resistance:',
            raw: '20 / 25 / 30 / 35 / 40 (+ 36% bonus magic resistance)',
            damagetype: 'Magic',
            values: [20, 25, 30, 35, 40],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 25 / 30 / 35 / 40',
            children: [
              {
                values: 36,
                valuesIsPercent: true,
                units: 'bonus_mr',
                unitsText: 'bonus magic resistance',
                pre: '+ 36% bonus magic resistance',
              },
            ],
          },
        ],
      },
      {
        description: 'Unbreakable can be cast during the dash.',
        descriptionHTML:
          '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-ability="Unbreakable" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL#Unbreakable" title="Unbreakable"><img alt="Unbreakable" src="/wiki/images/Braum_Unbreakable.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL#Unbreakable" title="Braum/LoL">Unbreakable</a></span></span> can be cast during the dash.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Self, Allies',
    notes:
      '* <i>Stand Behind Me</i> can be used on allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> but not on <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ward"><a href="/wiki/Ward" title="Ward"><img alt="Ward icon.png" src="/wiki/images/Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ward" title="Ward">wards</a></span> nor <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stealthed trap"><a href="/wiki/Stealth#Stealthed_traps_and_wards" title="Stealth#Stealthed traps and wards"><img alt="Noxious Trap.png" src="/wiki/images/Teemo_Noxious_Trap.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Stealthed_traps_and_wards" title="Stealth">traps</a></span>.\n<ul><li>If there are no nearby enemy champions, <b>Braum</b> will dash to land up-to 150 units on the far side of his target.</li>\n<li>The maximum dash range without enemy champions present is ~650. An enemy champion on the far side of the ally will allow <b>Braum</b> to dash a total of up-to 800 units.</li>\n<li>If <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-ability="Unbreakable" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL#Unbreakable" title="Unbreakable"><img alt="Unbreakable" src="/wiki/images/Braum_Unbreakable.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL#Unbreakable" title="Braum/LoL">Unbreakable</a></span></span> is cast during the dash, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-ability="Winter\'s Bite" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL#Winter\'s_Bite" title="Winter\'s Bite"><img alt="Winter\'s Bite" src="/wiki/images/Braum_Winter%27s_Bite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL#Winter\'s_Bite" title="Braum/LoL">Winter\'s Bite</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-ability="Glacial Fissure" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL#Glacial_Fissure" title="Glacial Fissure"><img alt="Glacial Fissure" src="/wiki/images/Braum_Glacial_Fissure.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL#Glacial_Fissure" title="Braum/LoL">Glacial Fissure</a></span></span> may also be cast.</li>\n<li>If the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> is interrupted, neither <b>Braum</b> not his ally receive the bonus resistances.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Braum_Original_W_2.ogg   "Stand behind Braum!"',
    video: 'Braum WVideo.ogv',
  },
  Unbreakable: {
    name: 'Unbreakable',
    display_name: 'Unbreakable',
    champion: 'Braum',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'BraumE.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 96,
      y: 0,
      w: 48,
      h: 48,
    },
    angle:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">180°</span>',
    cast_time: 'none',
    cost: '30 / 35 / 40 / 45 / 50',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">16 / 14 / 12 / 10 / 8</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL" title="Braum"><img alt="Braum" src="/wiki/images/Braum_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL" title="Braum/LoL">Braum</a></span></span> sets his shield in a direction for a few seconds, intercepting any enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">projectiles</a></span> to hit him and be destroyed.',
      'He gains damage reduction and negates the first instance of damage dealt by a champion completely from this direction.',
    ],
    description: [
      {
        icon: '/wiki/images/Unbreakable.png',
        description:
          'Active: Braum sets his shield in the target direction for a few seconds, creating a barrier that intercepts all incoming hostile  projectiles and reduces the damage Braum takes through it. The first instance of damage dealt by a  champion from this direction is reduced by 100%. Unbreakable does not affect  turrets.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Braum</b> sets his shield in the target direction for a few seconds, creating a barrier that intercepts all incoming hostile <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectiles"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">projectiles</a></span> and reduces the damage <b>Braum</b> takes through it. The first instance of damage dealt by a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> from this direction is reduced by 100%. <i>Unbreakable</i> does not affect <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'The first instance of damage dealt by a  champion from this direction is reduced by 100%',
            damagetype: 'None',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'first instance of damage dealt by a  champion from this direction is reduced by 100',
            pre: 'The first instance of damage dealt by a  champion from this direction is reduced by 100%',
          },
        ],
        leveling: [
          {
            name: 'Damage reduction:',
            values: '35 / 40 / 45 / 50 / 55%',
            valuesHTML: '35 / 40 / 45 / 50 / 55%',
          },
          {
            name: 'Barrier Duration:',
            values: '3 / 3.25 / 3.5 / 3.75 / 4',
            valuesHTML:
              '3 / 3.<small>25</small> / 3.<small>5</small> / 3.<small>75</small> / 4',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Damage reduction:',
            raw: '35 / 40 / 45 / 50 / 55%',
            damagetype: 'None',
            values: [35, 40, 45, 50, 55],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 40 / 45 / 50 / 55%',
          },
          {
            effectType: 'Unique',
            name: 'Barrier Duration:',
            raw: '3 / 3.25 / 3.5 / 3.75 / 4',
            values: [3, 3.25, 3.5, 3.75, 4],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '3 / 3.25 / 3.5 / 3.75 / 4',
          },
        ],
      },
      {
        description:
          'While his shield is raised, Braum also gains  10% bonus movement speed and  ghosting.',
        descriptionHTML:
          'While his shield is raised, <b>Braum</b> also gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">10% <b>bonus</b> movement speed</span></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosting"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Line 1:',
            raw: 'While his shield is raised, Braum also gains  10% bonus movement speed and  ghosting.',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'bonus movement speed and  ghosting.his shield is raised, Braum also gains  10',
            pre: 'While his shield is raised, Braum also gains  10% bonus movement speed and  ghosting.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Self',
    notes:
      '* <span class="template_sbc"><b>Definitions</b></span>\n<ul><li><ul><li><span class="template_sbc"><b>Incoming:</b></span> Damage sources coming from somewhere facing the shield. Those coming from different sides are not affected.</li>\n<li><span class="template_sbc"><b>Projectiles:</b></span> Sped up entities not classified as a unit (<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, etc.)</li>\n<li><span class="template_sbc"><b>Intercepting:</b></span> A projectile hitting <b>Braum</b> because he is standing in front of the intended target. In addition to being redirected, an intercepted projectile is also destroyed <b>after</b> hitting <b>Braum</b> (although this is only applicable to pass-through projectiles).</li></ul></li>\n<li><i>Unbreakable\'s</i> full damage reduction can block multiple instances of damage if they\'re dealt at the same time.</li>\n<li>Moving units do not count for being blocked by <i>Unbreakable</i>.\n<ul><li><a href="/wiki/Champion_summoned_units" title="Champion summoned units">Champion summoned units</a> are not classified as units until they hit the ground (e.g. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Maokai" data-ability="Sapling Toss" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Maokai/LoL#Sapling_Toss" title="Sapling Toss"><img alt="Sapling Toss" src="/wiki/images/Maokai_Sapling_Toss.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Maokai/LoL#Sapling_Toss" title="Maokai/LoL">Sapling Toss</a></span></span>) and thus will interact with <i>Unbreakable</i> whilst en route.</li></ul></li>\n<li>Projectiles whose effects trigger on collision will still trigger - dealing damage, applying <a href="/wiki/Debuff" title="Debuff">debuffs</a>, creating area of effects and marking the target as \'hit\'.</li>\n<li>Projectiles that create an <a href="/wiki/Area_of_effect" title="Area of effect">area of effect</a> upon their collision will still affect other units and not only <b>Braum</b>.</li>\n<li>Projectiles that <b>cannot</b> hit <b>Braum</b> or his allies (such as an enemy <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lux" data-ability="Prismatic Barrier" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lux/LoL#Prismatic_Barrier" title="Prismatic Barrier"><img alt="Prismatic Barrier" src="/wiki/images/Lux_Prismatic_Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lux/LoL#Prismatic_Barrier" title="Lux/LoL">Prismatic Barrier</a></span></span>) will not be intercepted.<sup id="cite_ref-2" class="reference"><a href="#cite_note-2">[2]</a></sup>\n<ul><li><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Soraka" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Soraka/LoL" title="Soraka\'s"><img alt="Soraka\'s" src="/wiki/images/Soraka_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Soraka/LoL" title="Soraka/LoL">Soraka\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Soraka" data-ability="Starcall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Soraka/LoL#Starcall" title="Starcall\'s"><img alt="Starcall\'s" src="/wiki/images/Soraka_Starcall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Soraka/LoL#Starcall" title="Soraka/LoL">Starcall\'s</a></span></span></span> <i>Rejuvenation</i> projectile is however blocked.</li></ul></li>\n<li>The <b>damage reduction</b> will affect any source of damage whose origin is in front of the shield. This includes:\n<ul><li>All intercepted projectiles.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Melee"><a href="/wiki/Melee" title="Melee"><img alt="Melee role.png" src="/wiki/images/Melee_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Melee" class="mw-redirect" title="Melee">Melee</a></span> and non-projectile-based <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ranged" class="mw-redirect" title="Ranged">ranged</a></span> attacks.</li>\n<li>Instantaneous <a href="/wiki/Direction-targeted" class="mw-redirect" title="Direction-targeted">direction-targeted</a> abilities (e.g. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xerath" data-ability="Arcanopulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xerath/LoL#Arcanopulse" title="Arcanopulse"><img alt="Arcanopulse" src="/wiki/images/Xerath_Arcanopulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xerath/LoL#Arcanopulse" title="Xerath/LoL">Arcanopulse</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lux" data-ability="Final Spark" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lux/LoL#Final_Spark" title="Final Spark"><img alt="Final Spark" src="/wiki/images/Lux_Final_Spark.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lux/LoL#Final_Spark" title="Lux/LoL">Final Spark</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vel\'Koz" data-ability="Lifeform Disintegration Ray" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vel%27Koz/LoL#Lifeform_Disintegration_Ray" title="Lifeform Disintegration Ray"><img alt="Lifeform Disintegration Ray" src="/wiki/images/Vel%27Koz_Life_Form_Disintegration_Ray.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vel%27Koz/LoL#Lifeform_Disintegration_Ray" title="Vel\'Koz/LoL">Lifeform Disintegration Ray</a></span></span>.)</li>\n<li>Instantaneously-placed <a href="/wiki/Ground-targeted" class="mw-redirect" title="Ground-targeted">ground-targeted</a> abilities (e.g. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karthus" data-ability="Lay Waste" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karthus/LoL#Lay_Waste" title="Lay Waste"><img alt="Lay Waste" src="/wiki/images/Karthus_Lay_Waste.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karthus/LoL#Lay_Waste" title="Karthus/LoL">Lay Waste</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Brand" data-ability="Pillar of Flame" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Brand/LoL#Pillar_of_Flame" title="Pillar of Flame"><img alt="Pillar of Flame" src="/wiki/images/Brand_Pillar_of_Flame.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Brand/LoL#Pillar_of_Flame" title="Brand/LoL">Pillar of Flame</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Cho\'Gath" data-ability="Rupture" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cho%27Gath/LoL#Rupture" title="Rupture"><img alt="Rupture" src="/wiki/images/Cho%27Gath_Rupture.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cho%27Gath/LoL#Rupture" title="Cho\'Gath/LoL">Rupture</a></span></span>) relative to the ability\'s center and <b>not</b> the caster\'s.</li>\n<li>Point-blank area-of-effects (e.g. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Malphite" data-ability="Ground Slam" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Malphite/LoL#Ground_Slam" title="Ground Slam"><img alt="Ground Slam" src="/wiki/images/Malphite_Ground_Slam.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Malphite/LoL#Ground_Slam" title="Malphite/LoL">Ground Slam</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Amumu" data-ability="Tantrum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Amumu/LoL#Tantrum" title="Tantrum"><img alt="Tantrum" src="/wiki/images/Amumu_Tantrum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Amumu/LoL#Tantrum" title="Amumu/LoL">Tantrum</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zilean" data-ability="Time Bomb" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zilean/LoL#Time_Bomb" title="Time Bomb"><img alt="Time Bomb" src="/wiki/images/Zilean_Time_Bomb.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zilean/LoL#Time_Bomb" title="Zilean/LoL">Time Bomb</a></span></span> <i>not</i> targeted at <b>Braum</b>)</li>\n<li>Instantaneous targeted abilities (e.g. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Malzahar" data-ability="Malefic Visions" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Malzahar/LoL#Malefic_Visions" title="Malefic Visions"><img alt="Malefic Visions" src="/wiki/images/Malzahar_Malefic_Visions.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Malzahar/LoL#Malefic_Visions" title="Malzahar/LoL">Malefic Visions</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vladimir" data-ability="Transfusion" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vladimir/LoL#Transfusion" title="Transfusion"><img alt="Transfusion" src="/wiki/images/Vladimir_Transfusion.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vladimir/LoL#Transfusion" title="Vladimir/LoL">Transfusion</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zilean" data-ability="Time Bomb" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zilean/LoL#Time_Bomb" title="Time Bomb"><img alt="Time Bomb" src="/wiki/images/Zilean_Time_Bomb.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zilean/LoL#Time_Bomb" title="Zilean/LoL">Time Bomb</a></span></span> targeted at <b>Braum</b>) and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Aoe dot"><a href="/wiki/Damage" title="Damage"><img alt="Poison Trail.png" src="/wiki/images/Singed_Poison_Trail.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">AoE DoT</a></span> (e.g. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nasus" data-ability="Spirit Fire" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nasus/LoL#Spirit_Fire" title="Spirit Fire"><img alt="Spirit Fire" src="/wiki/images/Nasus_Spirit_Fire.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nasus/LoL#Spirit_Fire" title="Nasus/LoL">Spirit Fire</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Morgana" data-ability="Tormented Shadow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Morgana/LoL#Tormented_Shadow" title="Tormented Shadow"><img alt="Tormented Shadow" src="/wiki/images/Morgana_Tormented_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Morgana/LoL#Tormented_Shadow" title="Morgana/LoL">Tormented Shadow</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Singed" data-ability="Poison Trail" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Singed/LoL#Poison_Trail" title="Poison Trail"><img alt="Poison Trail" src="/wiki/images/Singed_Poison_Trail.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Singed/LoL#Poison_Trail" title="Singed/LoL">Poison Trail</a></span></span>).</li></ul></li>\n<li>The damage reduction only benefits <b>Braum</b>.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Damage over time"><a href="/wiki/Damage" title="Damage"><img alt="Blaze.png" src="/wiki/images/Brand_Blaze.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">Damage over time</a></span> is calculated per tick but the full damage reduction will still only apply to a single tick.</li>\n<li>If the damage mitigated by <i>Unbreakable</i> exceeds a minimum threshold it is represented with floating text similar to the damage mitigated by shields (\'<span class="template_sbc"><b>-X</b></span>\')\n<ul><li>This floating text is always shown for the single fully-reduced damage source.</li></ul></li>\n<li><b>Braum\'s</b> facing direction is in the direction he\'s moving in.</li>\n<li>If <b>Braum</b> is protected by a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span>, both it and the one-time-use full damage reduction can be consumed by a single blockable spell.\n<ul><li>The one-time-use full damage reduction will not be consumed if the damage source is nothing but <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True damage"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration.png" src="/wiki/images/Hybrid_penetration.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/True_damage" title="True damage">true damage</a></span>.</li></ul></li>\n<li><i>Unbreakable</i> will grant <a href="/wiki/Assist" title="Assist">assist</a> credit if the enemy whose damaging projectile is blocked from is killed within 10 seconds.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Braum_Original_E_3.ogg   "My shield is here for you."',
    video: 'Braum EVideo.ogv',
  },
  'Glacial Fissure': {
    name: 'Glacial Fissure',
    display_name: 'Glacial Fissure',
    champion: 'Braum',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'BraumRWrapper.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 144,
      y: 0,
      w: 48,
      h: 48,
    },
    range: '1200 /  1200',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Point blank effect radius">300</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Fissure missile width">230</span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Slow field width">170</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Fissure missile speed; slow field segments spawning speed">1400</span>',
    cast_time: '0.<small>5</small>',
    cost: '100',
    costtype: 'mana',
    cooldown: '120 / 110 / 100 / 90 / 80',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL" title="Braum"><img alt="Braum" src="/wiki/images/Braum_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL" title="Braum/LoL">Braum</a></span></span> slams the ground, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking up</a></span> enemies nearby and in a line in front of him. A fissure is left along the line that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> enemies.',
    ],
    description: [
      {
        icon: '/wiki/images/Glacial Fissure.png',
        description:
          'Active: Braum leaps into the air and slams his shield into the ground, creating a fissure that travels forth in the target direction, dealing magic damage to enemies within its path as well as those around Braum.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Braum</b> leaps into the air and slams his shield into the ground, creating a fissure that travels forth in the target direction, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within its path as well as those around <b>Braum</b>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '150 / 225 / 300 / 375 / 450 (+ 60% AP)',
            valuesHTML:
              '150 / 225 / 300 / 375 / 450 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '150 / 225 / 300 / 375 / 450 (+ 60% AP)',
            damagetype: 'Magic',
            values: [150, 225, 300, 375, 450],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 225 / 300 / 375 / 450',
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
          'The first target hit is  knocked up for at least 0.3 seconds, increased if they are further away from Braum. All other enemies hit are  knocked up for 0.3 seconds.',
        descriptionHTML:
          'The first target hit is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked up</a></span> for at least 0.<small>3</small> seconds, increased if they are further away from <b>Braum</b>. All other enemies hit are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked up</a></span> for 0.<small>3</small> seconds.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Maximum Knockup Duration:',
            values: '1 / 1.25 / 1.5 / 1.75 / 2',
            valuesHTML:
              '1 / 1.<small>25</small> / 1.<small>5</small> / 1.<small>75</small> / 2',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Maximum Knockup Duration:',
            raw: '1 / 1.25 / 1.5 / 1.75 / 2',
            values: [1, 1.25, 1.5, 1.75, 2],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1 / 1.25 / 1.5 / 1.75 / 2',
          },
        ],
      },
      {
        description:
          "A field of ice is created along the fissure's path, lasting for 4 seconds and  slowing enemies within the area every 0.25 seconds. The field disappears after the duration ends in the same order and speed it was created with.",
        descriptionHTML:
          'A field of ice is created along the fissure\'s path, lasting for 4 seconds and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> enemies within the area every 0.<small>25</small> seconds. The field disappears after the duration ends in the same order and speed it was created with.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: "A field of ice is created along the fissure's path, lasting for 4 seconds and  slowing enemies within the area every 0.25 seconds",
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              "field of ice is created along the fissure's path, lasting for 4 seconds and  slowing enemies within the area every 0.25 seconds",
            pre: "A field of ice is created along the fissure's path, lasting for 4 seconds and  slowing enemies within the area every 0.25 seconds",
          },
        ],
        leveling: [
          {
            name: 'Slow:',
            values: '40 / 45 / 50 / 55 / 60%',
            valuesHTML: '40 / 45 / 50 / 55 / 60%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '40 / 45 / 50 / 55 / 60%',
            values: [40, 45, 50, 55, 60],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 45 / 50 / 55 / 60%',
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'True',
    notes:
      '* This ability will cast from wherever the caster is at the end of the cast time.\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Cast time\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All the other item-actives are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death, unless protected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">Resurrection</a></span>\n</li></td></tr></tbody></table>',
    video: 'Braum RVideo.ogv',
  },
} satisfies { [skillName in string]: SkillData };
