import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Dr. Mundo';

export default {
  'Goes Where He Pleases': {
    name: 'Goes Where He Pleases',
    display_name: 'Goes Where He Pleases',
    champion: 'Dr. Mundo',
    skill: 'I',
    image: {
      full: 'DrMundo_P.png',
      sprite: 'passive0.png',
      group: 'passive',
      x: 240,
      y: 96,
      w: 48,
      h: 48,
    },
    static:
      '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="60;52.5;45;37.5;30;22.5;15" data-top_values="1;3;6;8;11;13;16">60 − 15 (based on level)</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Dr. Mundo" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Dr._Mundo/LoL" title="Dr. Mundo"><img alt="Dr. Mundo" src="/wiki/images/Dr._Mundo_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Dr._Mundo/LoL" title="Dr. Mundo/LoL">Dr. Mundo</a></span></span> <span style="white-space:nowrap"><a href="/wiki/Health_regeneration" title="Health regeneration"><img alt="Health regeneration icon.png" src="/wiki/images/Health_regeneration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;regenerates</span> an additional portion of <span style="color: #1F995C; white-space:normal">his <b>maximum</b> health</span>.',
      '<span class="template_sbc"><b>Passive:</b></span> Periodically, <b>Dr. Mundo</b> gains immunity to the next hostile spell\'s <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilizing</a></span> effects, and upon resisting one, he loses a portion of <span style="color: #1F995C; white-space:normal">his <b>current</b> health</span> and drops a canister nearby.',
      '<b>Dr. Mundo</b> and enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> can move near the canister to destroy it. If he destroys the canister, the cooldown is <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduced</span> and he will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> for a portion of <span style="color: #1F995C; white-space:normal">his <b>maximum</b> health</span>.',
    ],
    description: [
      {
        description:
          'Innate: Dr. Mundo  regenerates an additional「 0.4% − 2.3% (based on level) of his maximum health every 5 seconds. 」「 0.08% − 0.46% (based on level) of his maximum health each second. 」',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Dr. Mundo</b> <span style="white-space:nowrap"><a href="/wiki/Health_regeneration" title="Health regeneration"><img alt="Health regeneration icon.png" src="/wiki/images/Health_regeneration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Health_regeneration" title="Health regeneration">regenerates</a></span> an additional<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="0.4% +&nbsp;0.05% per level at level 1, then +&nbsp;0.1% per level starting at level 7, then +&nbsp;0.15% per level starting at level 13, then +&nbsp;0.2% per level starting at level 16" data-bot_values="0.4;0.45;0.5;0.55;0.6;0.65;0.75;0.85;0.95;1.05;1.15;1.25;1.4;1.55;1.7;1.9;2.1;2.3" data-top_values="1;2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17;18" data-bot_key="%">0.<small>4</small>% − 2.<small>3</small>% (based on level)</span> of his <b>maximum</b> health</span> every 5 seconds.&nbsp;」</span><span class="flipText2">「&nbsp;<span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="0.08;0.09;0.1;0.11;0.12;0.13;0.15;0.17;0.19;0.21;0.23;0.25;0.28;0.31;0.34;0.38;0.42;0.46" data-top_values="" data-bot_key="%">0.<small>08</small>% − 0.<small>46</small>% (based on level)</span> of his <b>maximum</b> health</span> each second.&nbsp;」</span></span>',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: 'Mundo  regenerates an additional「 0.4% − 2.3% (based on level) of his maximum health every 5 seconds. 」「 0.08% − 0.46% (based on level) of his maximum health each second. 」',
            healType: 'HealthRegen',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            units: 'maximum_hp',
            unitsText:
              'of his maximum health every 5 seconds. 」「 0.08% − 0.46%',
            pre: 'Mundo  regenerates an additional「 0.4% − 2.3%',
            post: 'of his maximum health every 5 seconds. 」「 0.08% − 0.46%',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Goes Where He Pleases.png',
        description:
          'Passive: Periodically, Dr. Mundo gains immunity to the  immobilizing effects of the next hostile spell to affect him. Upon resisting one, Dr. Mundo pays a health cost equal to 4% of his current health and propels a canister that lands 525 units in the general direction of its source, remaining on the ground for 7 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> Periodically, <b>Dr. Mundo</b> gains immunity to the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilizing</a></span> effects of the next hostile spell to affect him. Upon resisting one, <b>Dr. Mundo</b> pays a <span style="color: #1F995C; white-space:normal">health cost</span> equal to <span style="color: #1F995C; white-space:normal">4% of his <b>current</b> health</span> and propels a canister that lands 525 units in the general direction of its source, remaining on the ground for 7 seconds.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 4:',
            raw: 'Mundo pays a health cost equal to 4% of his current health and propels a canister that lands 525 units in the general direction of its source, remaining on the ground for 7 seconds.',
            healType: 'BonusHealth',
            values: 4,
            valuesIsPercent: true,
            units: 'current_hp',
            unitsText:
              'of his current health and propels a canister that lands 525 units in the general direction of its source, remaining on the ground for 7 seconds.pays a health cost equal to 4',
            pre: 'Mundo pays a health cost equal to 4% of his current health and propels a canister that lands 525 units in the general direction of its source, remaining on the ground for 7 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Dr. Mundo can move near the canister to consume it,  healing himself for 4% of his maximum health and reducing the  cooldown of Goes Where He Pleases by 15 seconds. Enemy  champions can move near it to destroy it.',
        descriptionHTML:
          '<b>Dr. Mundo</b> can move near the canister to consume it, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> himself for <span style="color: #1F995C; white-space:normal">4% of his <b>maximum</b> health</span> and reducing the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> of <i>Goes Where He Pleases</i> by 15 seconds. Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> can move near it to destroy it.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: 'Mundo can move near the canister to consume it,  healing himself for 4% of his maximum health and reducing the  cooldown of Goes Where He Pleases by 15 seconds',
            healType: 'BonusHealth',
            values: 4,
            valuesIsPercent: true,
            units: 'maximum_hp',
            unitsText:
              'of his maximum health and reducing the  cooldown of Goes Where He Pleases by 15 secondscan move near the canister to consume it,  healing himself for 4',
            pre: 'Mundo can move near the canister to consume it,  healing himself for 4% of his maximum health and reducing the  cooldown of Goes Where He Pleases by 15 seconds',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description: "Goes Where He Pleases'  cooldown resets upon respawning.",
        descriptionHTML:
          '<i>Goes Where He Pleases\' </i> cooldown resets upon <a href="/wiki/Respawn" class="mw-redirect" title="Respawn">respawning</a>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    projectile: 'false',
    notes:
      '* Upon being triggered by a hostile <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilizing</a></span> effects, <i>Goes Where He Pleases</i> will also grant <b>Dr. Mundo</b> immunity to additional immobilizing effects from the same <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast instance"><a href="/wiki/Champion_ability" title="Champion ability">cast instance</a></span>.\n<ul><li><ul><li>Abilities where non-immobilizing effects and damage are nested into immobilizing ones will have them also prevented. Non-immobilizing effects and damage applied separately (the vast majority of cases) are not prevented.</li></ul></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Morgana" data-ability="Black Shield" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Morgana/LoL#Black_Shield" title="Black Shield"><img alt="Black Shield" src="/wiki/images/Morgana_Black_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Morgana/LoL#Black_Shield" title="Morgana/LoL">Black Shield</a></span></span> take priority over <i>Goes Where He Pleases</i>.</li>\n<li><i>Goes Where He Pleases</i> will not trigger against nor resist <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rell" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rell/LoL" title="Rell\'s"><img alt="Rell\'s" src="/wiki/images/Rell_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rell/LoL" title="Rell/LoL">Rell\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rell" data-ability="Magnet Storm" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rell/LoL#Magnet_Storm" title="Magnet Storm\'s"><img alt="Magnet Storm\'s" src="/wiki/images/Rell_Magnet_Storm.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rell/LoL#Magnet_Storm" title="Rell/LoL">Magnet Storm\'s</a></span></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Kinematics"><a href="/wiki/Kinematics" title="Kinematics"><img alt="Kinematics icon.png" src="/wiki/images/Kinematics_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Kinematics" class="mw-redirect" title="Kinematics">ongoing kinematic effect</a></span>.\n<ul><li>It will trigger against and prevent the ability\'s initial <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">displacement</a></span>, but even in that case, not prevent the continous effect.</li></ul></li>\n<li>The canister, whether in flight and on the ground, will transition in and out of <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Mordekaiser" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mordekaiser/LoL" title="Mordekaiser\'s"><img alt="Mordekaiser\'s" src="/wiki/images/Mordekaiser_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mordekaiser/LoL" title="Mordekaiser/LoL">Mordekaiser\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Mordekaiser" data-ability="Realm of Death" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mordekaiser/LoL#Realm_of_Death" title="Realm of Death"><img alt="Realm of Death" src="/wiki/images/Mordekaiser_Realm_of_Death.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mordekaiser/LoL#Realm_of_Death" title="Mordekaiser/LoL">Realm of Death</a></span></span></span> alongside <i>Dr. Mundo</i>.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup></li>\n<li>The canister cannot be interacted with while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Dr._Mundo_Original_Move_2.ogg   "Mundo goes where he pleases!"',
  },
  'Infected Bonesaw': {
    name: 'Infected Bonesaw',
    display_name: 'Infected Bonesaw',
    champion: 'Dr. Mundo',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'DrMundoQ.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 288,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '1050 /  990',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 120',
    speed: '2000',
    cast_time: '0.<small>25</small>',
    cost: '<span style="color: #1F995C; white-space:normal">50 / 60 / 70 / 80 / 90</span>',
    costtype: '<span style="color: #1F995C; white-space:normal">Health</span>',
    cooldown: '4',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Dr. Mundo" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Dr._Mundo/LoL" title="Dr. Mundo"><img alt="Dr. Mundo" src="/wiki/images/Dr._Mundo_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Dr._Mundo/LoL" title="Dr. Mundo/LoL">Dr. Mundo</a></span></span> throws an infected bonesaw in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> the first enemy hit.',
      'If the bonesaw hits an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, <b>Dr. Mundo</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> for the entire <span style="color: #1F995C; white-space:normal">health cost</span>, reduced to half <span style="color: #1F995C; white-space:normal">health cost</span> when a non-champion is hit.',
    ],
    description: [
      {
        icon: '/wiki/images/Infected Bonesaw.png',
        description:
          'Active: Dr. Mundo throws an infected bonesaw in the target direction that deals magic damage to the first enemy hit and  slows them by 40% for 2 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Dr. Mundo</b> throws an infected bonesaw in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 40% for 2 seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Mundo throws an infected bonesaw in the target direction that deals magic damage to the first enemy hit and  slows them by 40% for 2 seconds.',
            damagetype: 'Magic',
            values: 4,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'for 2 seconds.throws an infected bonesaw in the target direction that deals magic damage to the first enemy hit and  slows them by 40',
            pre: 'Mundo throws an infected bonesaw in the target direction that deals magic damage to the first enemy hit and  slows them by 40% for 2 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: "20 / 22.5 / 25 / 27.5 / 30% of target's current health",
            valuesHTML:
              '<span style="color: #1F995C; white-space:normal">20 / 22.<small>5</small> / 25 / 27.<small>5</small> / 30% of target\'s <b>current</b> health</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Magic Damage:',
            raw: "20 / 22.5 / 25 / 27.5 / 30% of target's current health",
            healType: 'OutgoingHeals',
            values: [20, 22.5, 25, 27.5, 30],
            valuesIsPercent: true,
            user: 'target',
            units: 'current_hp',
            unitsText: "of target's current health",
            pre: "20 / 22.5 / 25 / 27.5 / 30% of target's current health",
          },
        ],
      },
      {
        description:
          'Infected Bonesaw has a minimum damage threshold, and is capped against  monsters.',
        descriptionHTML:
          '<i>Infected Bonesaw</i> has a minimum damage threshold, and is capped against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Minimum Damage:',
            values: '80 / 130 / 180 / 230 / 280',
            valuesHTML: '80 / 130 / 180 / 230 / 280',
          },
          {
            name: 'Capped Monster Damage:',
            values: '350 / 425 / 500 / 575 / 650',
            valuesHTML: '350 / 425 / 500 / 575 / 650',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Minimum Damage:',
            raw: '80 / 130 / 180 / 230 / 280',
            damagetype: 'None',
            values: [80, 130, 180, 230, 280],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 130 / 180 / 230 / 280',
          },
          {
            effectType: 'Damage',
            name: 'Capped Monster Damage:',
            raw: '350 / 425 / 500 / 575 / 650',
            damagetype: 'None',
            values: [350, 425, 500, 575, 650],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '350 / 425 / 500 / 575 / 650',
          },
        ],
      },
      {
        description:
          'If the bonesaw hits an enemy, Dr. Mundo  heals for 50% of the health cost, increased to 100% against  champions or  monsters.',
        descriptionHTML:
          'If the bonesaw hits an enemy, <b>Dr. Mundo</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> for 50% of the <span style="color: #1F995C; white-space:normal">health cost</span>, increased to 100% against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: 'Mundo  heals for 50% of the health cost, increased to 100% against  champions or  monsters.',
            healType: 'BonusHealth',
            values: 5,
            valuesIsPercent: true,
            units: 'total_hp',
            unitsText: 'of the health cost, increased to 100 heals for 50',
            pre: 'Mundo  heals for 50% of the health cost, increased to 100% against  champions or  monsters.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Self, Enemies',
    damagetype: 'magic',
    spelleffects: 'spell',
    spellshield: true,
    projectile: 'true',
    notes:
      '* This ability will cast from wherever the caster is at the start of the cast time.\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> blocking the ability\'s effects on the enemy does not prevent <b>Dr. Mundo</b> from receiving the health cost refund.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Dr._Mundo_Original_Q_0.ogg   "Bonesaw!"',
  },
  'Heart Zapper': {
    name: 'Heart Zapper',
    display_name: 'Heart Zapper',
    champion: 'Dr. Mundo',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'DrMundoW.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 336,
      y: 144,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 325',
    cast_time: 'none',
    cost: '<span style="color: #1F995C; white-space:normal">8%</span>',
    costtype:
      '<span style="color: #1F995C; white-space:normal"><b>current</b> health</span>',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">17 / 16.<small>5</small> / 16 / 15.<small>5</small> / 15</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Dr. Mundo" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Dr._Mundo/LoL" title="Dr. Mundo"><img alt="Dr. Mundo" src="/wiki/images/Dr._Mundo_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Dr._Mundo/LoL" title="Dr. Mundo/LoL">Dr. Mundo</a></span></span> charges up a defibrillator for a few seconds, continually dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and storing a portion of the post-mitigation damage he takes.',
      '<i>Heart Zapper</i> can be recast within the duration, and does so automatically after the duration.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Dr. Mundo</b> detonates the defibrillator, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> for an amount equal to the stored damage, which is increased if at least one enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> is hit.',
    ],
    description: [
      {
        icon: '/wiki/images/Heart Zapper.png',
        description:
          'Active: Dr. Mundo charges up a defibrillator for up to 3 seconds, dealing magic damage every 0.25 seconds to nearby enemies and storing 80% − 95% (based on level) of post-mitigation damage he takes as grey health on his health bar, reduced to 25% after the first 0.75 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Dr. Mundo</b> charges up a defibrillator for up to 3 seconds, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>25</small> seconds to nearby enemies and storing <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="80;" data-finish="95;" data-bot_values="80;80.88;81.76;82.65;83.53;84.41;85.29;86.18;87.06;87.94;88.82;89.71;90.59;91.47;92.35;93.24;94.12;95" data-top_values="" data-bot_key="%">80% − 95% (based on level)</span> of <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after modifiers">post-mitigation damage</span> he takes as <a href="/wiki/Health#Grey_health" title="Health">grey health</a> on his <a href="/wiki/Health_bar" title="Health bar">health bar</a>, reduced to 25% after the first 0.<small>75</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: 'Mundo charges up a defibrillator for up to 3 seconds, dealing magic damage every 0.25 seconds to nearby enemies and storing 80% − 95% (based on level) of post-mitigation damage he takes as grey health on his health bar, reduced to 25% after the first 0.75 seconds.',
            healType: 'BonusHealth',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            units: 'total_hp',
            unitsText:
              'of post-mitigation damage he takes as grey health on his health bar, reduced to 25% after the first 0.75 seconds.',
            pre: 'Mundo charges up a defibrillator for up to 3 seconds, dealing magic damage every 0.25 seconds to nearby enemies and storing 80% − 95%',
            post: 'of post-mitigation damage he takes as grey health on his health bar, reduced to 25% after the first 0.75 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage per Tick:',
            values: '5 / 8.75 / 12.5 / 16.25 / 20',
            valuesHTML:
              '5 / 8.<small>75</small> / 12.<small>5</small> / 16.<small>25</small> / 20',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage per Tick:',
            raw: '5 / 8.75 / 12.5 / 16.25 / 20',
            damagetype: 'Magic',
            values: [5, 8.75, 12.5, 16.25, 20],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 8.75 / 12.5 / 16.25 / 20',
          },
        ],
      },
      {
        description:
          'Heart Zapper can be recast after 1 second within the duration, and does so automatically after the duration.',
        descriptionHTML:
          '<i>Heart Zapper</i> can be recast after 1 second within the duration, and does so automatically after the duration.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Heart Zapper can be recast after 1 second within the duration, and does so automatically after the duration.',
            damagetype: 'None',
            values: 1,
            units: 'total_ap',
            unitsText:
              'Zapper can be recast after 1 second within the duration, and does so automatically after the duration.',
            pre: 'Heart Zapper can be recast after 1 second within the duration, and does so automatically after the duration.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Heart Zapper 2.png',
        description:
          'Recast: Dr. Mundo detonates the defibrillator, dealing magic damage to nearby enemies and  healing for 50% of grey health, increased to 100% if at least one enemy champion or large monster is hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Dr. Mundo</b> detonates the defibrillator, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> for 50% of <a href="/wiki/Health#Grey_health" title="Health">grey health</a>, increased to 100% if at least one enemy champion or large monster is hit.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: 'Mundo detonates the defibrillator, dealing magic damage to nearby enemies and  healing for 50% of grey health, increased to 100% if at least one enemy champion or large monster is hit.',
            healType: 'BonusHealth',
            values: 5,
            valuesIsPercent: true,
            units: 'total_hp',
            unitsText:
              'of grey health, increased to 100detonates the defibrillator, dealing magic damage to nearby enemies and  healing for 50',
            pre: 'Mundo detonates the defibrillator, dealing magic damage to nearby enemies and  healing for 50% of grey health, increased to 100% if at least one enemy champion or large monster is hit.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '20 / 35 / 50 / 65 / 80 (+ 7% bonus health)',
            valuesHTML:
              '20 / 35 / 50 / 65 / 80 <span style="color: #1F995C; white-space:normal">(+&nbsp;7% <b>bonus</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Magic Damage:',
            raw: '20 / 35 / 50 / 65 / 80 (+ 7% bonus health)',
            healType: 'BonusHealth',
            values: [20, 35, 50, 65, 80],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 35 / 50 / 65 / 80',
            children: [
              {
                values: 7,
                valuesIsPercent: true,
                units: 'bonus_hp',
                unitsText: 'bonus health',
                pre: '+ 7% bonus health',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Self, Enemies',
    damagetype: 'magic',
    spelleffects: 'special',
    spellshield: 'Special',
    notes:
      '* The charge up applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Persistent area damage"><a href="/wiki/Damage" title="Damage"><img alt="Poison Trail.png" src="/wiki/images/Singed_Poison_Trail.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">persistent area damage</a></span> and the detonation deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span>.\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will only block the detonation.</li>\n<li><i>Heart Zapper</i> will occasionally deal an additional tick of damage.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li>\n<li><i>Heart Zapper</i> and its recast will buffer and cast at the end of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Dr. Mundo" data-ability="Infected Bonesaw" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Dr._Mundo/LoL#Infected_Bonesaw" title="Infected Bonesaw\'s"><img alt="Infected Bonesaw\'s" src="/wiki/images/Dr._Mundo_Infected_Bonesaw.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Dr._Mundo/LoL#Infected_Bonesaw" title="Dr. Mundo/LoL">Infected Bonesaw\'s</a></span></span> cast time if attempted to cast during it.\n<ul><li>As with all buffering of this type, another input such as a movement command can override the buffering of the spell again.</li></ul></li></ul>',
  },
  'Blunt Force Trauma': {
    name: 'Blunt Force Trauma',
    display_name: 'Blunt Force Trauma',
    champion: 'Dr. Mundo',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'DrMundoE.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 384,
      y: 144,
      w: 48,
      h: 48,
    },
    range: '800',
    cast_time: 'none',
    cost: '<span style="color: #1F995C; white-space:normal">10 / 25 / 40 / 55 / 70</span>',
    costtype: '<span style="color: #1F995C; white-space:normal">Health</span>',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">9 / 8.<small>25</small> / 7.<small>5</small> / 6.<small>75</small> / 6</span>',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Dr. Mundo" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Dr._Mundo/LoL" title="Dr. Mundo"><img alt="Dr. Mundo" src="/wiki/images/Dr._Mundo_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Dr._Mundo/LoL" title="Dr. Mundo/LoL">Dr. Mundo</a></span></span> gains <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span> based on his <span style="color: #1F995C; white-space:normal"><b>maximum</b> health</span>.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Dr. Mundo\'s</b> next basic attack deals <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>, increased based on <span style="color: #1F995C; white-space:normal">his <b>missing</b> health</span>. If the target dies, their corpse is sent flying away in a line, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies it passes through.',
    ],
    description: [
      {
        description: 'Passive: Dr. Mundo gains  bonus attack damage.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Dr. Mundo</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Bonus Attack Damage:',
            values: '2 / 2.5 / 3 / 3.5 / 4% maximum health',
            valuesHTML:
              '<span style="color: #1F995C; white-space:normal">2 / 2.<small>5</small> / 3 / 3.<small>5</small> / 4% <b>maximum</b> health</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Bonus Attack Damage:',
            raw: '2 / 2.5 / 3 / 3.5 / 4% maximum health',
            healType: 'BonusHealth',
            values: [2, 2.5, 3, 3.5, 4],
            valuesIsPercent: true,
            units: 'maximum_hp',
            unitsText: 'maximum health',
            pre: '2 / 2.5 / 3 / 3.5 / 4% maximum health',
          },
        ],
      },
      {
        icon: '/wiki/images/Blunt Force Trauma.png',
        description:
          "Active: Dr. Mundo empowers his next basic attack within 4 seconds to have an  uncancellable windup, gain  50 bonus range, and deal bonus physical damage, increased by 0% − 60% (based on missing health). If the target dies or is a small monster, they are sent flying away in a line, though not through terrain, causing all enemies they pass through to take 100% AD plus Blunt Force Trauma's minimum bonus damage.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Dr. Mundo</b> empowers his next basic attack within 4 seconds to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>, gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50 <b>bonus</b> range</span>, and deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>, increased by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#1F995C;" data-top_label="missing health" data-displayformula="1.5% per 1% of \'\'\'missing\'\'\' health, capped at 40% \'\'\'missing\'\'\' health" data-bot_values="0;6;12;18;24;30;36;42;48;54;60" data-top_values="0;4;8;12;16;20;24;28;32;36;40" data-bot_key="%" data-top_key="%">0% − 60% (based on <b>missing</b> health)</span>. If the target dies or is a small monster, they are sent flying away in a line, though not through terrain, causing all enemies they pass through to take <span style="color:orange; white-space:normal">100% AD</span> plus <i>Blunt Force Trauma\'s</i> minimum <b>bonus</b> damage.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: 'Mundo empowers his next basic attack within 4 seconds to have an  uncancellable windup, gain  50 bonus range, and deal bonus physical damage, increased by 0% − 60% (based on missing health)',
            healType: 'PhysicalVamp',
            values: 4,
            valuesIsPercent: true,
            basedOn: 'missing health',
            units: 'bonus_ad',
            unitsText:
              '− 60empowers his next basic attack within 4 seconds to have an  uncancellable windup, gain  50 bonus range, and deal bonus physical damage, increased by 0',
            pre: 'Mundo empowers his next basic attack within 4 seconds to have an  uncancellable windup, gain  50 bonus range, and deal bonus physical damage, increased by 0% − 60%',
          },
          {
            effectType: 'Damage',
            name: 'Line 3:',
            raw: "If the target dies or is a small monster, they are sent flying away in a line, though not through terrain, causing all enemies they pass through to take 100% AD plus Blunt Force Trauma's minimum bonus damage.",
            damagetype: 'None',
            values: 1,
            valuesIsPercent: true,
            user: 'target',
            units: 'bonus_ad',
            unitsText:
              "AD plus Blunt Force Trauma's minimum bonus damage.the target dies or is a small monster, they are sent flying away in a line, though not through terrain, causing all enemies they pass through to take 100",
            pre: "If the target dies or is a small monster, they are sent flying away in a line, though not through terrain, causing all enemies they pass through to take 100% AD plus Blunt Force Trauma's minimum bonus damage.",
          },
        ],
        leveling: [
          {
            name: 'Minimum Bonus Physical Damage:',
            values: '5 / 15 / 25 / 35 / 45 (+ 7% bonus health)',
            valuesHTML:
              '5 / 15 / 25 / 35 / 45 <span style="color: #1F995C; white-space:normal">(+&nbsp;7% <b>bonus</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Minimum Bonus Physical Damage:',
            raw: '5 / 15 / 25 / 35 / 45 (+ 7% bonus health)',
            healType: 'PhysicalVamp',
            values: [5, 15, 25, 35, 45],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 15 / 25 / 35 / 45',
            children: [
              {
                values: 7,
                valuesIsPercent: true,
                units: 'bonus_hp',
                unitsText: 'bonus health',
                pre: '+ 7% bonus health',
              },
            ],
          },
        ],
      },
      {
        description:
          "Blunt Force Trauma as well as the triggering attack's damage is increased to 140% against  minions and 150% against  monsters.",
        descriptionHTML:
          '<i>Blunt Force Trauma</i> as well as the triggering <span style="color:orange; white-space:normal">attack\'s damage</span> is increased to 140% against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and 150% against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: "Blunt Force Trauma as well as the triggering attack's damage is increased to 140% against  minions and 150% against  monsters.",
            increasedStat: 'total_ad',
            values: 1,
            valuesIsPercent: true,
            units: '',
            unitsText:
              "against  minions and 150Force Trauma as well as the triggering attack's damage is increased to 140",
            pre: "Blunt Force Trauma as well as the triggering attack's damage is increased to 140% against  minions and 150% against  monsters.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Blunt Force Trauma  resets Dr. Mundo's basic attack timer.",
        descriptionHTML:
          '<i>Blunt Force Trauma <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Dr. Mundo\'s</b> basic attack timer.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: '',
    damagetype: 'physical',
    spelleffects: 'special',
    spellshield: false,
    notes:
      '* <i>Blunt Force Trauma\'s</i> attack deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell damage"><a href="/wiki/Damage" title="Damage"><img alt="Disintegrate.png" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">spell damage</a></span>, while the target\'s body being shoved deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span> to enemies it passes through.\n<ul><li><i>Blunt Force Trauma\'s</i> attack works against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>, consuming the buff and dealing its full damage.</li>\n<li><i>Blunt Force Trauma</i> cannot knock back <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Wards"><a href="/wiki/Ward" title="Ward"><img alt="Ward icon.png" src="/wiki/images/Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ward" title="Ward">wards</a></span>, <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a> or epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> it kills, nor champions that enter a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Zombie state"><a href="/wiki/Death#Zombie_states" title="Death#Zombie states"><img alt="Zombie icon.png" src="/wiki/images/Zombie_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Zombie_states" title="Death">zombie state</a></span> upon dying.</li>\n<li>Targets flung away are rendered <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> in the process.</li>\n<li>The damage of the enemy\'s corpse colliding with enemies does not benefit from <i>Blunt Force Trauma\'s</i> attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically striking</a></span>.</li></ul>',
  },
  'Maximum Dosage': {
    name: 'Maximum Dosage',
    display_name: 'Maximum Dosage',
    champion: 'Dr. Mundo',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'DrMundoR.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 432,
      y: 144,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">120</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Dr. Mundo" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Dr._Mundo/LoL" title="Dr. Mundo"><img alt="Dr. Mundo" src="/wiki/images/Dr._Mundo_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Dr._Mundo/LoL" title="Dr. Mundo/LoL">Dr. Mundo</a></span></span> injects himself with chemicals, gaining <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><b>increased</b> base health</span></span> and <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>, in addition to <span style="white-space:nowrap"><a href="/wiki/Health_regeneration" title="Health regeneration"><img alt="Health regeneration icon.png" src="/wiki/images/Health_regeneration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;regenerating</span> <span style="color: #1F995C; white-space:normal">health</span> over the duration.',
    ],
    description: [
      {
        icon: '/wiki/images/Maximum Dosage.png',
        description:
          'Active: Dr. Mundo injects himself with chemicals to become enhanced for 10 seconds, gaining increased  base health,  bonus movement speed, and  bonus health regeneration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Dr. Mundo</b> injects himself with chemicals to become enhanced for 10 seconds, gaining increased <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><b>base</b> health</span></span>, <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>, and <span style="white-space:nowrap"><a href="/wiki/Health_regeneration" title="Health regeneration"><img alt="Health regeneration icon.png" src="/wiki/images/Health_regeneration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><b>bonus</b> health regeneration</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: 'Mundo injects himself with chemicals to become enhanced for 10 seconds, gaining increased  base health,  bonus movement speed, and  bonus health regeneration.',
            healType: 'HealthRegen',
            values: 1,
            units: 'bonus_hp',
            unitsText:
              'injects himself with chemicals to become enhanced for 10 seconds, gaining increased  base health,  bonus movement speed, and  bonus health regeneration.',
            pre: 'Mundo injects himself with chemicals to become enhanced for 10 seconds, gaining increased  base health,  bonus movement speed, and  bonus health regeneration.',
          },
        ],
        leveling: [
          {
            name: 'Increased Base Health:',
            values: '15 / 17.5 / 20 / 22.5 / 25% missing health',
            valuesHTML:
              '<span style="color: #1F995C; white-space:normal">15 / 17.<small>5</small> / 20 / 22.<small>5</small> / 25% <b>missing</b> health</span>',
          },
          {
            name: 'Bonus Movement Speed:',
            values: '15 / 20 / 25 / 30 / 35%',
            valuesHTML: '15 / 20 / 25 / 30 / 35%',
          },
          {
            name: 'Bonus Health Regeneration:',
            values: '20 / 30 / 40 / 50 / 60% maximum health',
            valuesHTML:
              '<span style="color: #1F995C; white-space:normal">20 / 30 / 40 / 50 / 60% <b>maximum</b> health</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Increased Base Health:',
            raw: '15 / 17.5 / 20 / 22.5 / 25% missing health',
            healType: 'BonusHealth',
            values: [15, 17.5, 20, 22.5, 25],
            valuesIsPercent: true,
            units: 'missing_hp',
            unitsText: 'missing health',
            pre: '15 / 17.5 / 20 / 22.5 / 25% missing health',
          },
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '15 / 20 / 25 / 30 / 35%',
            values: [15, 20, 25, 30, 35],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 20 / 25 / 30 / 35%',
          },
          {
            effectType: 'Heal',
            name: 'Bonus Health Regeneration:',
            raw: '20 / 30 / 40 / 50 / 60% maximum health',
            healType: 'HealthRegen',
            values: [20, 30, 40, 50, 60],
            valuesIsPercent: true,
            units: 'maximum_hp',
            unitsText: 'maximum health',
            pre: '20 / 30 / 40 / 50 / 60% maximum health',
          },
        ],
      },
      {
        description:
          "At rank 3, Maximum Dosage's increased base health and bonus health regeneration are both increased by 5% for each enemy  champion within 1200 units at the time of cast.",
        descriptionHTML:
          'At rank 3, <i>Maximum Dosage\'s</i> increased <span style="color: #1F995C; white-space:normal"><b>base</b> health</span> and <span style="color: #1F995C; white-space:normal"><b>bonus</b> health regeneration</span> are both increased by 5% for each enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> within 1200 units at the time of cast.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: "At rank 3, Maximum Dosage's increased base health and bonus health regeneration are both increased by 5% for each enemy  champion within 1200 units at the time of cast.",
            healType: 'HealthRegen',
            values: 3,
            valuesIsPercent: true,
            units: 'maximum_hp',
            unitsText:
              "for each enemy  champion within 1200 units at the time of cast.rank 3, Maximum Dosage's increased base health and bonus health regeneration are both increased by 5",
            pre: "At rank 3, Maximum Dosage's increased base health and bonus health regeneration are both increased by 5% for each enemy  champion within 1200 units at the time of cast.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    notes:
      '* The health regeneration granted by <i>Maximum Dosage</i> adjusts dynamically to <b>Dr. Mundo\'s</b> <span style="color: #1F995C; white-space:normal"><b>maximum</b> health</span>.\n<ul><li><i>Maximum Dosage</i> will end prematurely upon entering <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span>.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Dr._Mundo_Original_R_1.ogg   "Medicine time!"',
  },
} satisfies { [skillName in string]: SkillData };
