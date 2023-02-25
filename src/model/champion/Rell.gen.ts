import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Rell';

export default {
  'Break the Mold': {
    name: 'Break the Mold',
    display_name: 'Break the Mold',
    champion: 'Rell',
    skill: 'I',
    image: {
      full: 'RellP.png',
      sprite: 'passive3.png',
      group: 'passive',
      x: 0,
      y: 48,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rell" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rell/LoL" title="Rell\'s"><img alt="Rell\'s" src="/wiki/images/Rell_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rell/LoL" title="Rell/LoL">Rell\'s</a></span></span> basic attacks deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> before reducing the target\'s <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">magic resist</span></span> for a few seconds. Basic attacks against enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> will refresh the duration for all nearby afflicted enemies.',
      '<b>Rell</b> gains <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resist</span></span> equal to the sum reduced from all afflicted enemies, <i>Break the Mold\'s</i> damage is increased by the sum resistances reduced from the target.',
    ],
    description: [
      {
        icon: '/wiki/images/Break the Mold.png',
        description:
          "Innate: Rell's basic attacks are empowered to deal 8 − 16 (based on level) bonus magic damage before reducing the target's  armor and  magic resistance by 10% for 4 seconds, refreshing on subsequent hits. Basic attacks against enemy  champions will refresh the duration for all nearby afflicted enemies.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Rell\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> are empowered to deal <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="8;" data-finish="16;" data-bot_values="8;8.47;8.94;9.41;9.88;10.35;10.82;11.29;11.76;12.24;12.71;13.18;13.65;14.12;14.59;15.06;15.53;16" data-top_values="">8 − 16 (based on level)</span></span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> before reducing the target\'s <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">magic resistance</span></span> by 10% for 4 seconds, refreshing on subsequent hits. Basic attacks against enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> will refresh the duration for all nearby afflicted enemies.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Innate:',
            raw: " Rell's basic attacks are empowered to deal 8 − 16 (based on level) bonus magic damage before reducing the target's  armor and  magic resistance by 10% for 4 seconds, refreshing on subsequent hits",
            damagetype: 'Magic',
            values: [
              8, 8.47, 8.94, 9.41, 9.88, 10.35, 10.82, 11.29, 11.76, 12.24,
              12.71, 13.18, 13.65, 14.12, 14.59, 15.06, 15.53, 16,
            ],
            basedOn: 'level',
            user: 'target',
            units: 'bonus_armor',
            unitsText:
              "bonus magic damage before reducing the target's  armor and  magic resistance by 10% for 4 seconds, refreshing on subsequent hits",
            pre: "Rell's basic attacks are empowered to deal 8 − 16",
            post: "bonus magic damage before reducing the target's  armor and  magic resistance by 10% for 4 seconds, refreshing on subsequent hits",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Rell gains bonus armor and bonus magic resistance equal to the sum resistances reduced from all afflicted enemies, and Break the Mold's bonus damage is increased equal to the sum resistances reduced from the target.",
        descriptionHTML:
          '<b>Rell</b> gains <span style="color:yellow; white-space:normal"><b>bonus</b> armor</span> and <span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resistance</span> equal to the sum resistances reduced from all afflicted enemies, and <i>Break the Mold\'s</i> <b>bonus</b> damage is increased equal to the sum resistances reduced from the target.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Break the Mold will reduce the target's armor and magic resistance by a minimum of 5 − 12 (based on level), or 0.5 / 1.25 / 2 (based on level) versus  minions.",
        descriptionHTML:
          '<i>Break the Mold</i> will reduce the target\'s <span style="color:yellow; white-space:normal">armor</span> and <span style="color: #00FFFF; white-space:normal">magic resistance</span> by a minimum of <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="5;6;7;8;9;10;11;12" data-top_values="1;3;5;8;10;12;15;17">5 − 12 (based on level)</span>, or <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="0.5;1.25;2" data-top_values="1;2;13">0.<small>5</small> / 1.<small>25</small> / 2 (based on level)</span> versus <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: "Break the Mold will reduce the target's armor and magic resistance by a minimum of 5 − 12 (based on level), or 0.5 / 1.25 / 2 (based on level) versus  minions.",
            damagetype: 'Magic',
            values: [
              5, 5.41, 5.82, 6.24, 6.65, 7.06, 7.47, 7.88, 8.29, 8.71, 9.12,
              9.53, 9.94, 10.35, 10.76, 11.18, 11.59, 12,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: ', or 0.5 / 1.25 / 2',
            pre: "Break the Mold will reduce the target's armor and magic resistance by a minimum of 5 − 12",
            post: ', or 0.5 / 1.25 / 2',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Rell's attack windup is reduced「 by 0% − 7.14% (based on level). 」「 to 42% − 39% (based on level). 」",
        descriptionHTML:
          '<b>Rell\'s</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attack windup"><a href="/wiki/Basic_attack#Windup" title="Basic attack">attack windup</a></span> is reduced<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-useformula="100-((0.42)+((0.39)-(0.42))/(times-1)*(x-1))/0.42*100" data-bot_values="0;0.42;0.84;1.26;1.68;2.1;2.52;2.94;3.36;3.78;4.2;4.62;5.04;5.46;5.88;6.3;6.72;7.14" data-top_values="" data-bot_key="%">0% − 7.<small>14</small>% (based on level)</span>.&nbsp;」</span><span class="flipText2">「&nbsp;to <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-useformula="((0.42)+((0.39)-(0.42))/(times-1)*(x-1))/(0.55/0.55)*100" data-bot_values="42;41.824;41.647;41.471;41.294;41.118;40.941;40.765;40.588;40.412;40.235;40.059;39.882;39.706;39.529;39.353;39.176;39" data-top_values="" data-bot_key="%">42% − 39% (based on level)</span>.&nbsp;」</span></span>',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: "Rell's attack windup is reduced「 by 0% − 7.14% (based on level). 」「 to 42% − 39% (based on level). 」",
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: '. 」「 to 42% − 39%',
            pre: "Rell's attack windup is reduced「 by 0% − 7.14%",
            post: '. 」「 to 42% − 39%',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self, Enemies',
    damagetype: 'magic',
    spelleffects: 'proc',
    spellshield: false,
    notes:
      '* <b>Rell\'s</b> <a href="/wiki/Buff" title="Buff">buff</a> accumulates enemies with <i>Break the Mold\'s</i> <a href="/wiki/Debuff" title="Debuff">debuff</a> and she will consequently lose a portion of the bonus resistances gained as afflicted enemies die. This is contrary to other effects described as "thefts" (e.g. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Malphite" data-ability="Seismic Shard" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Malphite/LoL#Seismic_Shard" title="Seismic Shard"><img alt="Seismic Shard" src="/wiki/images/Malphite_Seismic_Shard.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Malphite/LoL#Seismic_Shard" title="Malphite/LoL">Seismic Shard</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Trundle" data-ability="Subjugate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Trundle/LoL#Subjugate" title="Subjugate"><img alt="Subjugate" src="/wiki/images/Trundle_Subjugate.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Trundle/LoL#Subjugate" title="Trundle/LoL">Subjugate</a></span></span>) that are implemented by granting a buff to the caster that is proportionate, though independent, to the debuff applied to the target (i.e. in those instances, each persists for the full duration regardless).\n<ul><li>The attacks do not affect <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.</li></ul>',
  },
  'Shattering Strike': {
    name: 'Shattering Strike',
    display_name: 'Shattering Strike',
    champion: 'Rell',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'RellQ.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 288,
      y: 48,
      w: 48,
      h: 48,
    },
    range: '685 / -150',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Rectangle width">150</span>',
    cast_time: '0.<small>35</small>',
    cost: '50',
    costtype: 'mana',
    cooldown: '9 / 8 / 7 / 6 / 5',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rell" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rell/LoL" title="Rell"><img alt="Rell" src="/wiki/images/Rell_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rell/LoL" title="Rell/LoL">Rell</a></span></span> thrusts her lance in the target direction that destroys damage <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span> of enemies hit before dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>, reduced beyond the first. The first enemy hit is afflicted with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rell" data-ability="Break the Mold" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rell/LoL#Break_the_Mold" title="Break the Mold"><img alt="Break the Mold" src="/wiki/images/Rell_Break_the_Mold.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rell/LoL#Break_the_Mold" title="Rell/LoL">Break the Mold</a></span></span></i>.',
      'If <b>Rell</b> is tethered with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rell" data-ability="Attract and Repel" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rell/LoL#Attract_and_Repel" title="Attract and Repel"><img alt="Attract and Repel" src="/wiki/images/Rell_Attract_and_Repel.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rell/LoL#Attract_and_Repel" title="Rell/LoL">Attract and Repel</a></span></span></i>, she and the bound ally will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> for each enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> hit.',
    ],
    description: [
      {
        icon: '/wiki/images/Shattering Strike.png',
        description:
          'Active: Rell thrusts her lance in the target direction that completely destroys damage-mitigating  shields of enemies hit before dealing magic damage, reduced to 50% against enemies beyond the first. The first enemy hit is also afflicted with  Break the Mold.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Rell</b> thrusts her lance in the target direction that completely destroys damage-mitigating <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span> of enemies hit before dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>, reduced to 50% against enemies beyond the first. The first enemy hit is also afflicted with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rell" data-ability="Break the Mold" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rell/LoL#Break_the_Mold" title="Break the Mold"><img alt="Break the Mold" src="/wiki/images/Rell_Break_the_Mold.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rell/LoL#Break_the_Mold" title="Rell/LoL">Break the Mold</a></span></span></i>.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Active:',
            raw: ' Rell thrusts her lance in the target direction that completely destroys damage-mitigating  shields of enemies hit before dealing magic damage, reduced to 50% against enemies beyond the first',
            damagetype: 'Magic',
            shieldType: 'OutgoingShields',
            values: 5,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'against enemies beyond the firstthrusts her lance in the target direction that completely destroys damage-mitigating  shields of enemies hit before dealing magic damage, reduced to 50',
            pre: 'Rell thrusts her lance in the target direction that completely destroys damage-mitigating  shields of enemies hit before dealing magic damage, reduced to 50% against enemies beyond the first',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '70 / 105 / 140 / 175 / 210 (+ 50% AP)',
            valuesHTML:
              '70 / 105 / 140 / 175 / 210 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 105 / 140 / 175 / 210 (+ 50% AP)',
            damagetype: 'Magic',
            values: [70, 105, 140, 175, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 105 / 140 / 175 / 210',
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
      {
        description:
          'If Rell is tethered with  Attract and Repel, she and the bound ally  heal for each enemy  champion hit.',
        descriptionHTML:
          'If <b>Rell</b> is tethered with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rell" data-ability="Attract and Repel" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rell/LoL#Attract_and_Repel" title="Attract and Repel"><img alt="Attract and Repel" src="/wiki/images/Rell_Attract_and_Repel.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rell/LoL#Attract_and_Repel" title="Rell/LoL">Attract and Repel</a></span></span></i>, she and the bound ally <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> for each enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> hit.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Heal Per Champion Hit:',
            values:
              '10 / 15 / 20 / 25 / 30 (+ 30% AP) (+ 4% of missing health)',
            valuesHTML:
              '10 / 15 / 20 / 25 / 30 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;4% of <b>missing</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Heal Per Champion Hit:',
            raw: '10 / 15 / 20 / 25 / 30 (+ 30% AP) (+ 4% of missing health)',
            healType: 'BonusHealth',
            values: [10, 15, 20, 25, 30],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 15 / 20 / 25 / 30',
            children: [
              {
                values: 30,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 30% AP',
              },
              {
                values: 4,
                valuesIsPercent: true,
                units: 'missing_hp',
                unitsText: 'of missing health',
                pre: '+ 4% of missing health',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'false',
    notes:
      '* This ability will cast from wherever the caster is at the end of the cast time.\n<ul><li><b>Rell</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">locked out</a></span> of moving, attacking, and casting any other ability except <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rell" data-ability="Attract and Repel" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rell/LoL#Attract_and_Repel" title="Attract and Repel"><img alt="Attract and Repel" src="/wiki/images/Rell_Attract_and_Repel.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rell/LoL#Attract_and_Repel" title="Rell/LoL">Attract and Repel</a></span></span> for 0.<small>35</small> seconds after <i>Shattering Strike</i> is cast.\n<ul><li>Casting <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rell" data-ability="Attract and Repel" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rell/LoL#Attract_and_Repel" title="Attract and Repel"><img alt="Attract and Repel" src="/wiki/images/Rell_Attract_and_Repel.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rell/LoL#Attract_and_Repel" title="Rell/LoL">Attract and Repel</a></span></span> will cancel <i>Shattering Strike</i>. The ability will not go on cooldown but will still expend <span style="color: #0099CC; white-space:normal">mana</span>.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup></li></ul></li>\n<li><i>Shattering Strike</i>, while binded to an ally, will grant the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> from hitting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clones</a></span> as well.</li></ul>',
  },
  'Ferromancy: Crash Down': {
    name: 'Ferromancy: Crash Down',
    display_name: 'Ferromancy: Crash Down',
    champion: 'Rell',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'RellW_Dismount.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 336,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '500 / 100',
    collision_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Sliding dash collision radius">200</span>',
    cast_time: '0.<small>625</small>',
    cost: '40',
    costtype: 'Mana',
    cooldown: '11',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> While <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rell" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rell/LoL" title="Rell"><img alt="Rell" src="/wiki/images/Rell_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rell/LoL" title="Rell/LoL">Rell</a></span></span> is <span class="template_sbc"><b>Mounted</b></span>, she gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>. This bonus is reduced for a few seconds when taking non-minion damage, and removed for a few seconds when she becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Polymorph"><a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control#Polymorph"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control">polymorphed</a></span>.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Rell</b> becomes <span class="template_sbc"><b>Dismounted</b></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaps</a></span> to the target location, gaining a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> that lasts until destroyed or casting <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rell" data-ability="Ferromancy: Mount Up" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rell/LoL#Ferromancy:_Mount_Up" title="Ferromancy: Mount Up"><img alt="Ferromancy: Mount Up" src="/wiki/images/Rell_Ferromancy-_Mount_Up.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rell/LoL#Ferromancy:_Mount_Up" title="Rell/LoL">Ferromancy: Mount Up</a></span></span></i>.',
      'Upon arrival, she deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks up</a></span> nearby enemies. She will continue <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">sliding</a></span> forward to affect further enemies along her path.',
      'While <b>Rell</b> is <span class="template_sbc"><b>Dismounted</b></span>, she can cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rell" data-ability="Ferromancy: Mount Up" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rell/LoL#Ferromancy:_Mount_Up" title="Ferromancy: Mount Up"><img alt="Ferromancy: Mount Up" src="/wiki/images/Rell_Ferromancy-_Mount_Up.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rell/LoL#Ferromancy:_Mount_Up" title="Rell/LoL">Ferromancy: Mount Up</a></span></span></i>. She will revert to <span class="template_sbc"><b>Mounted</b></span> form after <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="recalling"><img alt="recalling" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">recalling</a></span></span> or respawning.',
    ],
    description: [
      {
        description:
          'Passive: While Rell is Mounted, she gains  5% − 15% (based on level) bonus movement speed, which is only 20% − 40% (based on level) as effective for 3 seconds when she takes damage from non- minions and is removed for 4 seconds when she becomes  immobilized or  polymorphed.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> While <b>Rell</b> is <span class="template_sbc"><b>Mounted</b></span>, she gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="5;6;7;8;9;10;11;12;13;14;15" data-top_values="1;7;8;9;10;11;12;13;14;15;16" data-bot_key="%">5% − 15% (based on level)</span> <b>bonus</b> movement speed</span></span>, which is only <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="20% + (40% - 20%) / 17 * (level - 1)" data-bot_values="20;21.18;22.35;23.53;24.71;25.88;27.06;28.24;29.41;30.59;31.76;32.94;34.12;35.29;36.47;37.65;38.82;40" data-top_values="" data-bot_key="%">20% − 40% (based on level)</span> as effective for 3 seconds when she takes damage from non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and is removed for 4 seconds when she becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Polymorph"><a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control#Polymorph"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control">polymorphed</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Passive:',
            raw: ' While Rell is Mounted, she gains  5% − 15% (based on level) bonus movement speed, which is only 20% − 40% (based on level) as effective for 3 seconds when she takes damage from non- minions and is removed for 4 seconds when she becomes  immobilized or  polymorphed.',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'bonus movement speed, which is only 20% − 40%',
            pre: 'While Rell is Mounted, she gains  5% − 15%',
            post: 'bonus movement speed, which is only 20% − 40%',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Ferromancy Crash Down.png',
        description:
          'Active: Rell becomes Dismounted and  leaps to the target location over the cast time, granting herself a  shield that lasts until destroyed or casting  Ferromancy: Mount Up. Upon arrival, she deals magic damage to nearby enemies and  knocks them up for 1 second. She will continue  sliding forward another 300 units over 0.5 seconds, though not through terrain, affecting further enemies along her path.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Rell</b> becomes <span class="template_sbc"><b>Dismounted</b></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaps</a></span> to the target location over the cast time, granting herself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> that lasts until destroyed or casting <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rell" data-ability="Ferromancy: Mount Up" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rell/LoL#Ferromancy:_Mount_Up" title="Ferromancy: Mount Up"><img alt="Ferromancy: Mount Up" src="/wiki/images/Rell_Ferromancy-_Mount_Up.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rell/LoL#Ferromancy:_Mount_Up" title="Rell/LoL">Ferromancy: Mount Up</a></span></span></i>. Upon arrival, she deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks them up</a></span> for 1 second. She will continue <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">sliding</a></span> forward another <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">300 units</span> over <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">0.<small>5</small> seconds</span>, though not through terrain, affecting further enemies along her path.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Upon arrival, she deals magic damage to nearby enemies and  knocks them up for 1 second',
            damagetype: 'Magic',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'arrival, she deals magic damage to nearby enemies and  knocks them up for 1 second',
            pre: 'Upon arrival, she deals magic damage to nearby enemies and  knocks them up for 1 second',
          },
          {
            effectType: 'Unique',
            name: 'Line 3:',
            raw: 'She will continue  sliding forward another 300 units over 0.5 seconds, though not through terrain, affecting further enemies along her path.',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'will continue  sliding forward another 300 units over 0.5 seconds, though not through terrain, affecting further enemies along her path.',
            pre: 'She will continue  sliding forward another 300 units over 0.5 seconds, though not through terrain, affecting further enemies along her path.',
          },
        ],
        leveling: [
          {
            name: 'Shield Strength:',
            values: '35 / 60 / 85 / 110 / 135 (+ 12% of maximum health)',
            valuesHTML:
              '35 / 60 / 85 / 110 / 135 <span style="color: #1F995C; white-space:normal">(+&nbsp;12% of <b>maximum</b> health)</span>',
          },
          {
            name: 'Magic Damage:',
            values: '70 / 105 / 140 / 175 / 210 (+ 60% AP)',
            valuesHTML:
              '70 / 105 / 140 / 175 / 210 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Shield Strength:',
            raw: '35 / 60 / 85 / 110 / 135 (+ 12% of maximum health)',
            healType: 'BonusHealth',
            values: [35, 60, 85, 110, 135],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 60 / 85 / 110 / 135',
            children: [
              {
                values: 12,
                valuesIsPercent: true,
                units: 'maximum_hp',
                unitsText: 'of maximum health',
                pre: '+ 12% of maximum health',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 105 / 140 / 175 / 210 (+ 60% AP)',
            damagetype: 'Magic',
            values: [70, 105, 140, 175, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 105 / 140 / 175 / 210',
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
          "While Rell is Dismounted, she can cast  Ferromancy: Mount Up. Upon completing a  Recall channel or respawning, Rell will automatically revert to Mounted form without casting the ability and reset  Ferromancy: Mount Up's  cooldown.",
        descriptionHTML:
          'While <b>Rell</b> is <span class="template_sbc"><b>Dismounted</b></span>, she can cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rell" data-ability="Ferromancy: Mount Up" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rell/LoL#Ferromancy:_Mount_Up" title="Ferromancy: Mount Up"><img alt="Ferromancy: Mount Up" src="/wiki/images/Rell_Ferromancy-_Mount_Up.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rell/LoL#Ferromancy:_Mount_Up" title="Rell/LoL">Ferromancy: Mount Up</a></span></span></i>. Upon completing a <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> channel or respawning, <b>Rell</b> will automatically revert to <span class="template_sbc"><b>Mounted</b></span> form without casting the ability and reset <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rell" data-ability="Ferromancy: Mount Up" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rell/LoL#Ferromancy:_Mount_Up" title="Ferromancy: Mount Up\'s"><img alt="Ferromancy: Mount Up\'s" src="/wiki/images/Rell_Ferromancy-_Mount_Up.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rell/LoL#Ferromancy:_Mount_Up" title="Rell/LoL">Ferromancy: Mount Up\'s</a></span></span></i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'This ability can be cast only while Rell is Mounted. Rell can cast  Attract and Repel and  Magnet Storm during the dash, and is not considered to be dismounted until after the leap ends. Ferromancy: Crash Down will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i>This ability can be cast only while Rell is <span class="template_sbc"><b>Mounted</b></span>. <b>Rell</b> can cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rell" data-ability="Attract and Repel" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rell/LoL#Attract_and_Repel" title="Attract and Repel"><img alt="Attract and Repel" src="/wiki/images/Rell_Attract_and_Repel.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rell/LoL#Attract_and_Repel" title="Rell/LoL">Attract and Repel</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rell" data-ability="Magnet Storm" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rell/LoL#Magnet_Storm" title="Magnet Storm"><img alt="Magnet Storm" src="/wiki/images/Rell_Magnet_Storm.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rell/LoL#Magnet_Storm" title="Rell/LoL">Magnet Storm</a></span></span> during the dash, and is not considered to be dismounted until after the leap ends. Ferromancy: Crash Down will cast at max range if cast beyond that.</i>',
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
    notes:
      '* <b>Rell</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">slides</a></span> between 250 and 350 units in testing, depending on how far the spell was targeted. It is not known where this is intended.\n<ul><li>If <b>Rell</b> dashes before a wall on the map, the slide will cover a shorter distance to the terrain over the same time, moving slower.\n<ul><li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span> Interaction with player-made walls.</li></ul></li>\n<li>The following table refers for interactions while <b>Rell</b> is dashing/in cast time:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n\n<tbody><tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rell" data-ability="Shattering Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rell/LoL#Shattering_Strike" title="Shattering Strike"><img alt="Shattering Strike" src="/wiki/images/Rell_Shattering_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rell/LoL#Shattering_Strike" title="Rell/LoL">Shattering Strike</a></span></span> is disabled. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rell" data-ability="Attract and Repel" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rell/LoL#Attract_and_Repel" title="Attract and Repel"><img alt="Attract and Repel" src="/wiki/images/Rell_Attract_and_Repel.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rell/LoL#Attract_and_Repel" title="Rell/LoL">Attract and Repel</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rell" data-ability="Magnet Storm" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rell/LoL#Magnet_Storm" title="Magnet Storm"><img alt="Magnet Storm" src="/wiki/images/Rell_Magnet_Storm.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rell/LoL#Magnet_Storm" title="Rell/LoL">Magnet Storm</a></span></span> are usable.\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>All the other item-actives are usable\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Hextech Rocketbelt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt"><img alt="Hextech Rocketbelt" src="/wiki/images/Hextech_Rocketbelt_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt">Hextech Rocketbelt</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Galeforce" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Galeforce" title="Galeforce"><img alt="Galeforce" src="/wiki/images/Galeforce_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Galeforce" title="Galeforce">Galeforce</a></span></span>   <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Stridebreaker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Stridebreaker" title="Stridebreaker"><img alt="Stridebreaker" src="/wiki/images/Stridebreaker_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Stridebreaker" title="Stridebreaker">Stridebreaker</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death\n</li></td></tr></tbody></table>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Rell_Original_W_Dismount_4.ogg   "Armoring up!"',
  },
  'Ferromancy: Mount Up': {
    name: 'Ferromancy: Mount Up',
    display_name: 'Ferromancy: Mount Up',
    champion: 'Rell',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'RellW_Dismount.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 336,
      y: 48,
      w: 48,
      h: 48,
    },
    cast_time: '0.<small>25</small>',
    cooldown: '11',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> While <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rell" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rell/LoL" title="Rell"><img alt="Rell" src="/wiki/images/Rell_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rell/LoL" title="Rell/LoL">Rell</a></span></span> is <span class="template_sbc"><b>Dismounted</b></span>, she gains <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resist</span></span>, but her <span style="color: #F5EE99; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;movement speed</span></span> is reduced.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Rell</b> becomes <span class="template_sbc"><b>Mounted</b></span> and gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for a short time, increased while moving towards enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>.',
      'During this time, <b>Rell\'s</b> next basic attack will gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack range</span> and causes her to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">charge</a></span> to the target, dealing <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> before briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">flinging</a></span> them over.',
      'While <b>Rell</b> is <span class="template_sbc"><b>Mounted</b></span>, she can cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rell" data-ability="Ferromancy: Crash Down" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rell/LoL#Ferromancy:_Crash_Down" title="Ferromancy: Crash Down"><img alt="Ferromancy: Crash Down" src="/wiki/images/Rell_Ferromancy-_Crash_Down.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rell/LoL#Ferromancy:_Crash_Down" title="Rell/LoL">Ferromancy: Crash Down</a></span></span></i>.',
    ],
    description: [
      {
        description:
          'Passive: While Rell is Dismounted, she gains  10% bonus armor and  10% bonus magic resistance, but her base movement speed is modified to 280. She has a movement speed cap of 290 − 400 (based on level).',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> While <b>Rell</b> is <span class="template_sbc"><b>Dismounted</b></span>, she gains <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">10% <b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">10% <b>bonus</b> magic resistance</span></span>, but her <span style="color: #F5EE99; white-space:normal"><b>base</b> movement speed</span> is modified to <span style="color: #F5EE99; white-space:normal">280</span>. She has a movement speed cap of <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="290 + (110) / 17 * (level - 1)" data-bot_values="290;296.47;302.94;309.41;315.88;322.35;328.82;335.29;341.76;348.24;354.71;361.18;367.65;374.12;380.59;387.06;393.53;400" data-top_values="">290 − 400 (based on level)</span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Passive:',
            raw: ' While Rell is Dismounted, she gains  10% bonus armor and  10% bonus magic resistance, but her base movement speed is modified to 280',
            increasedStat: 'bonus_armor',
            values: 1,
            valuesIsPercent: true,
            units: '',
            unitsText: 'bonus armor and  10Rell is Dismounted, she gains  10',
            pre: 'While Rell is Dismounted, she gains  10% bonus armor and  10% bonus magic resistance, but her base movement speed is modified to 280',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'She has a movement speed cap of 290 − 400 (based on level).',
            damagetype: 'None',
            values: [
              290, 296.47, 302.94, 309.41, 315.88, 322.35, 328.82, 335.29,
              341.76, 348.24, 354.71, 361.18, 367.65, 374.12, 380.59, 387.06,
              393.53, 400,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: '.',
            pre: 'She has a movement speed cap of 290 − 400',
            post: '.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Ferromancy Mount Up.png',
        description:
          'Active: Rell becomes Mounted and gains  15% bonus movement speed for 3.5 seconds, increased while moving towards enemy  champions.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Rell</b> becomes <span class="template_sbc"><b>Mounted</b></span> and gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">15% <b>bonus</b> movement speed</span></span> for 3.<small>5</small> seconds, increased while moving towards enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Rell becomes Mounted and gains  15% bonus movement speed for 3.5 seconds, increased while moving towards enemy  champions.',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'bonus movement speed for 3.5 seconds, increased while moving towards enemy  champions.becomes Mounted and gains  15',
            pre: 'Rell becomes Mounted and gains  15% bonus movement speed for 3.5 seconds, increased while moving towards enemy  champions.',
          },
        ],
        leveling: [
          {
            name: 'Increased Movement Speed:',
            values: '25 / 30 / 35 / 40 / 45%',
            valuesHTML: '25 / 30 / 35 / 40 / 45%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Increased Movement Speed:',
            raw: '25 / 30 / 35 / 40 / 45%',
            values: [25, 30, 35, 40, 45],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 30 / 35 / 40 / 45%',
          },
        ],
      },
      {
        description:
          "During this time, Rell empowers her next basic attack to consume the bonus movement speed to have a 0.2-second cast time, gain  100 bonus attack range and cause her to  charge at the target's location. Upon arrival or collision, she deals bonus magic damage,  stuns the target for 1 second, and  flings them 150 units over herself, though not through terrain.",
        descriptionHTML:
          'During this time, <b>Rell</b> empowers her next basic attack to consume the <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span> to have a 0.<small>2</small>-second cast time, gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;100 <b>bonus</b> attack range</span> and cause her to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">charge</a></span> at the target\'s location. Upon arrival or collision, she deals <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> the target for 1 second, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">flings</a></span> them 150 units over herself, though not through terrain.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Upon arrival or collision, she deals bonus magic damage,  stuns the target for 1 second, and  flings them 150 units over herself, though not through terrain.',
            damagetype: 'Magic',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'arrival or collision, she deals bonus magic damage,  stuns the target for 1 second, and  flings them 150 units over herself, though not through terrain.',
            pre: 'Upon arrival or collision, she deals bonus magic damage,  stuns the target for 1 second, and  flings them 150 units over herself, though not through terrain.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Magic Damage:',
            values: '10 / 25 / 40 / 55 / 70 (+ 40% AP)',
            valuesHTML:
              '10 / 25 / 40 / 55 / 70 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage:',
            raw: '10 / 25 / 40 / 55 / 70 (+ 40% AP)',
            damagetype: 'Magic',
            values: [10, 25, 40, 55, 70],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 25 / 40 / 55 / 70',
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
          'While Rell is Mounted, she can cast  Ferromancy: Crash Down.',
        descriptionHTML:
          'While <b>Rell</b> is <span class="template_sbc"><b>Mounted</b></span>, she can cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rell" data-ability="Ferromancy: Crash Down" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rell/LoL#Ferromancy:_Crash_Down" title="Ferromancy: Crash Down"><img alt="Ferromancy: Crash Down" src="/wiki/images/Rell_Ferromancy-_Crash_Down.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rell/LoL#Ferromancy:_Crash_Down" title="Rell/LoL">Ferromancy: Crash Down</a></span></span></i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Ferromancy: Mount Up  resets Rell's basic attack timer. This ability can be cast only while Rell is Dismounted.",
        descriptionHTML:
          '<i>Ferromancy: Mount Up <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Rell\'s</b> basic attack timer. This ability can be cast only while <b>Rell</b> is <span class="template_sbc"><b>Dismounted</b></span>.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spell',
    spellshield: true,
    notes:
      '* <b>Rell</b> will always respawn and start the game as mounted.\n<ul><li>The basic attack reset is not considered one for <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Hail of Blades" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hail_of_Blades_(Rune)" title="Hail of Blades"><img alt="Hail of Blades" src="/wiki/images/Hail_of_Blades_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Hail_of_Blades_(Rune)" class="mw-redirect" title="Hail of Blades (Rune)">Hail of Blades</a></span></span>.</li>\n<li><b>Rell</b> can use the empowered attack even while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span>.</li>\n<li>The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> can be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocked down</a></span> but the attack\'s effects will still be applied.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">Displacement immunity</a></span> will not resist the application of the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span>.</li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the empowered attack\'s cast time, it is cancelled but not consumed.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Rell_Original_W_MountUp_4.ogg   "Mount up!"',
  },
  'Attract and Repel': {
    name: 'Attract and Repel',
    display_name: 'Attract and Repel',
    champion: 'Rell',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'RellE.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 384,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '1500',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Radius around Rell and her ally">250</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Full width between Rell and her ally">320</span>',
    cast_time:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Recast">0.<small>35</small></span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Ally-cast">0.<small>25</small></span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Self-cast">None</span>',
    cost: '40',
    costtype: 'Mana',
    cooldown: '13',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rell" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rell/LoL" title="Rell"><img alt="Rell" src="/wiki/images/Rell_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rell/LoL" title="Rell/LoL">Rell</a></span></span> forms a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tether</a></span> with the ally bound by <i>Attract and Repel</i>, granting them a portion of her <span style="color:yellow; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;armor</span></span> and <span style="color: #00FFFF; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;magic resist</span></span> while they are nearby.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Rell</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">binds</a></span> herself and the target allied champion with <i>Attract and Repel</i>. <b>Rell</b> can recast <i>Attract and Repel</i> while the tether persists, she can also self-cast to dispel the tether if there are no nearby enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Rell</b> erupts the tether, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> enemies between and around both herself and the bound ally.',
      'Only one ally can be bound at a time, and selecting a new ally overrides the previous bind.',
    ],
    description: [
      {
        description:
          'Passive: Rell forms a  tether between her and the ally bound by Attract and Repel, and grants the ally 10% of her total armor and 10% of her total magic resistance while they are nearby.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Rell</b> forms a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tether</a></span> between her and the ally bound by <i>Attract and Repel</i>, and grants the ally <span style="color:yellow; white-space:normal">10% of her <b>total</b> armor</span> and <span style="color: #00FFFF; white-space:normal">10% of her <b>total</b> magic resistance</span> while they are nearby.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Passive:',
            raw: ' Rell forms a  tether between her and the ally bound by Attract and Repel, and grants the ally 10% of her total armor and 10% of her total magic resistance while they are nearby.',
            increasedStat: 'total_armor',
            values: 1,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'of her total armor and 10forms a  tether between her and the ally bound by Attract and Repel, and grants the ally 10',
            pre: 'Rell forms a  tether between her and the ally bound by Attract and Repel, and grants the ally 10% of her total armor and 10% of her total magic resistance while they are nearby.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Attract and Repel.png',
        description:
          'Active: Rell binds herself and the target allied champion nearest to the cursor with Attract and Repel. Rell can then recast Attract and Repel while the tether persists.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Rell</b> binds herself and the target allied champion nearest to the cursor with <i>Attract and Repel</i>. <b>Rell</b> can then recast <i>Attract and Repel</i> while the tether persists.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Recast: Rell erupts the tether, dealing magic damage and  stunning enemies between and around both herself and the bound ally for 0.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Rell</b> erupts the tether, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> enemies between and around both herself and the bound ally for 0.<small>5</small> seconds.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '80 / 120 / 160 / 200 / 240 (+ 30% AP)',
            valuesHTML:
              '80 / 120 / 160 / 200 / 240 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 120 / 160 / 200 / 240 (+ 30% AP)',
            damagetype: 'Magic',
            values: [80, 120, 160, 200, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 120 / 160 / 200 / 240',
            children: [
              {
                values: 30,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 30% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          'Rell can self-target to dispel the current bind if she and her bound ally are not near enemy champions, and if she has not casted an ability nor taken damage from or attacked enemy champions within the last 3 seconds. Only one ally can be bound at a time, and selecting a new ally overrides the previous bind.Attract and Repel will incur a  2.75-second cooldown with no cost if Rell binds to an ally and a  1-second cooldown with no cost if she self-targets.',
        descriptionHTML:
          '<b>Rell</b> can <a href="/wiki/Unit-targeted" class="mw-redirect" title="Unit-targeted">self-target</a> to dispel the current bind if she and her bound ally are not near enemy champions, and if she has not casted an <a href="/wiki/Champion_ability" title="Champion ability">ability</a> nor taken damage from or attacked enemy champions within the last 3 seconds. Only one ally can be bound at a time, and selecting a new ally overrides the previous bind.<br><i>Attract and Repel</i> will incur a <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;2.<small>75</small>-second</span> cooldown with no cost if <b>Rell</b> binds to an ally and a <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;1-second</span> cooldown with no cost if she self-targets.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Rell can self-target to dispel the current bind if she and her bound ally are not near enemy champions, and if she has not casted an ability nor taken damage from or attacked enemy champions within the last 3 seconds',
            damagetype: 'None',
            values: 3,
            user: 'target',
            units: 'total_ad',
            unitsText:
              'can self-target to dispel the current bind if she and her bound ally are not near enemy champions, and if she has not casted an ability nor taken damage from or attacked enemy champions within the last 3 seconds',
            pre: 'Rell can self-target to dispel the current bind if she and her bound ally are not near enemy champions, and if she has not casted an ability nor taken damage from or attacked enemy champions within the last 3 seconds',
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'Only one ally can be bound at a time, and selecting a new ally overrides the previous bind.Attract and Repel will incur a  2.75-second cooldown with no cost if Rell binds to an ally and a  1-second cooldown with no cost if she self-targets.',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'one ally can be bound at a time, and selecting a new ally overrides the previous bind.Attract and Repel will incur a  2.75-second cooldown with no cost if Rell binds to an ally and a  1-second cooldown with no cost if she self-targets.',
            pre: 'Only one ally can be bound at a time, and selecting a new ally overrides the previous bind.Attract and Repel will incur a  2.75-second cooldown with no cost if Rell binds to an ally and a  1-second cooldown with no cost if she self-targets.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting:
      '<a href="/wiki/Unit-targeted" class="mw-redirect" title="Unit-targeted">Unit</a> / <a href="/wiki/Auto-targeted" class="mw-redirect" title="Auto-targeted">Auto</a>',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes:
      '* The effects render before the cast time.\n<ul><li>All units can see the effective area of the tether. Both conduits can see the tether range when within 600 units of it.</li>\n<li><i>Attract and Repel</i> can be cast on allies even if they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>.\n<ul><li><b>Rell</b> has an arrow indicator that points to the other conduit. Depending on the distance it glows <span style="color:blue;">blue</span> (0–900), <span style="color:yellow;">yellow</span> (900–2020), and <span style="color:red;">red</span> (2020+)</li></ul></li>\n<li><i>Attract and Repel</i> will be placed on a very short cooldown (less than 0.<small>1</small> seconds) when the tether is reapplied to the bound ally after the two become in tether range again.</li>\n<li>Rell immediately unbinds from tethered allies when they or she dies.</li>\n<li>Rell cannot begin, end, or erupt a tether by using the Self-Cast hotkey.</li></ul>',
  },
  'Magnet Storm': {
    name: 'Magnet Storm',
    display_name: 'Magnet Storm',
    champion: 'Rell',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'RellR.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 432,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Initial knockup radius">450</span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Continous effect radius, center to edge">375</span>',
    inner_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Pulls target into at least this radius, continuous kinetics does not affect targets already in this radius">225</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Kinematic attraction speed, in units per second">300</span>',
    cast_time: '0.<small>25</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">120 / 110 / 100 / 90 / 80</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rell" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rell/LoL" title="Rell"><img alt="Rell" src="/wiki/images/Rell_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rell/LoL" title="Rell/LoL">Rell</a></span></span> erupts in magnetic fury, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulling</a></span> nearby enemies inward. She then emits a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Kinematics"><a href="/wiki/Kinematics" title="Kinematics"><img alt="Kinematics icon.png" src="/wiki/images/Kinematics_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Kinematics" class="mw-redirect" title="Kinematics">Kinematic</a></span> field that continually deals <span style="color: #00B0F0; white-space:normal">magic damage</span> over a short time.',
      '<span class="template_sbc"><b><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Kinematics"><a href="/wiki/Kinematics" title="Kinematics"><img alt="Kinematics icon.png" src="/wiki/images/Kinematics_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Kinematics</span>:</b></span> Kinematics drags enemies toward the <b>Source</b>, but does not disable their actions nor intercept other forms of movement.',
    ],
    description: [
      {
        icon: '/wiki/images/Magnet Storm.png',
        description:
          'Active: Rell erupts with magnetic fury,  pulling nearby enemies inward. She then creates a gravitational field around her for the next 2 seconds that deals magic damage every 0.25 seconds to nearby enemies and  drags them towards her over the duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Rell</b> erupts with magnetic fury, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulling</a></span> nearby enemies <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="to a ring 225 units around Rell, but minimum 100 pull distance">inward</span>. She then creates a gravitational field around her for the next 2 seconds that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>25</small> seconds to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Kinematics"><a href="/wiki/Kinematics" title="Kinematics"><img alt="Kinematics icon.png" src="/wiki/images/Kinematics_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Kinematics" class="mw-redirect" title="Kinematics">drags</a></span> them towards her over the duration.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'She then creates a gravitational field around her for the next 2 seconds that deals magic damage every 0.25 seconds to nearby enemies and  drags them towards her over the duration.',
            damagetype: 'Magic',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'then creates a gravitational field around her for the next 2 seconds that deals magic damage every 0.25 seconds to nearby enemies and  drags them towards her over the duration.',
            pre: 'She then creates a gravitational field around her for the next 2 seconds that deals magic damage every 0.25 seconds to nearby enemies and  drags them towards her over the duration.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage Per Tick:',
            values: '15 / 20 / 25 / 30 / 35 (+ 13.75% AP)',
            valuesHTML:
              '15 / 20 / 25 / 30 / 35 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;13.<small>75</small>% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Tick:',
            raw: '15 / 20 / 25 / 30 / 35 (+ 13.75% AP)',
            damagetype: 'Magic',
            values: [15, 20, 25, 30, 35],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 20 / 25 / 30 / 35',
            children: [
              {
                values: 13.75,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 13.75% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'aoedot',
    spellshield: 'Special',
    notes:
      '* This ability will cast from wherever the caster is at the end of the cast time.\n<ul><li><i>Magnet Storm</i> will <b>not</b> drag units that are:\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">Dashing</a></span>.</li>\n<li>Being displaced (e.g. by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> effects or via abilities such as <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Skarner" data-ability="Impale" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Skarner/LoL#Impale" title="Impale"><img alt="Impale" src="/wiki/images/Skarner_Impale.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Skarner/LoL#Impale" title="Skarner/LoL">Impale</a></span></span>).</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attach"><a href="/wiki/Attached" title="Attached"><img alt="You and Me!.png" src="/wiki/images/Yuumi_You_and_Me%21.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attached" title="Attached">Attached</a></span>.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immune"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">Displacement immune</a></span>.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">Immune to crowd control</a></span>.</li></ul></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block the initial <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pull</a></span> but not the dragging effect.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Rell_Original_R_0.ogg   "Nobody leaves!"',
  },
} satisfies { [skillName in string]: SkillData };
