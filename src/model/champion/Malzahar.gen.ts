import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Malzahar';

export default {
  'Void Shift': {
    name: 'Void Shift',
    display_name: 'Void Shift',
    champion: 'Malzahar',
    skill: 'I',
    image: {
      full: 'Malzahar_Passive.png',
      sprite: 'passive2.png',
      group: 'passive',
      x: 192,
      y: 48,
      w: 48,
      h: 48,
    },
    static:
      '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="30;24;18;12" data-top_values="1;6;11;16">30 / 24 / 18 / 12 (based on level)</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> Periodically, <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Malzahar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Malzahar/LoL" title="Malzahar"><img alt="Malzahar" src="/wiki/images/Malzahar_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Malzahar/LoL" title="Malzahar/LoL">Malzahar</a></span></span> gains <i>Void Shift</i> until he takes non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span> damage or negates a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span> effect, to which it then lingers for a brief time before expiring.',
      '<i>Void Shift\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> refreshes whenever <b>Malzahar</b> takes non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span> damage or is affected by a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span> effect.',
      '<span class="template_sbc"><b>Void Shift:</b></span> <b>Malzahar</b> gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">crowd control immunity</a></span> and massive damage reduction.',
    ],
    description: [
      {
        icon: '/wiki/images/Void_Shift.png',
        description:
          'Innate: Periodically, Malzahar gains Void Shift until he takes non- minion damage or negates a  crowd control effect, to which it then lingers for 0.25 seconds before expiring. Void Shift: Malzahar gains  crowd control immunity and 90% damage reduction.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> Periodically, <b>Malzahar</b> gains <i>Void Shift</i> until he takes non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span> damage or negates a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span> effect, to which it then lingers for 0.<small>25</small> seconds before expiring. <br><br><span class="template_sbc"><b>Void Shift:</b></span> <b>Malzahar</b> gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">crowd control immunity</a></span> and 90% damage reduction.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Void Shift:',
            raw: 'Malzahar gains  crowd control immunity and 90% damage reduction.',
            values: 9,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'damage reduction.gains  crowd control immunity and 90',
            pre: 'Malzahar gains  crowd control immunity and 90% damage reduction.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Void Shift's  cooldown refreshes whenever Malzahar takes non- minion damage or is affected by a  crowd control effect, and resets upon respawning.",
        descriptionHTML:
          '<i>Void Shift\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> refreshes whenever <b>Malzahar</b> takes non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span> damage or is affected by a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span> effect, and resets upon <a href="/wiki/Death" title="Death">respawning</a>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes:
      '* <i>Void Shift</i> will not resist allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span> nor will it be deactivated by them.\n<ul><li><i>Void Shift</i> will not mitigate <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True damage"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration.png" src="/wiki/images/Hybrid_penetration.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/True_damage" title="True damage">true damage</a></span> but the buff will still be consumed.\n<ul><li>It does not deactivate against the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Nexus obelisk"><a href="/wiki/Nexus_Obelisk" title="Nexus Obelisk"><img alt="Nexus Obelisk.png" src="/wiki/images/Nexus_Obelisk.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Nexus_Obelisk" title="Nexus Obelisk">Nexus Obelisk</a></span>.</li></ul></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">Shields</a></span> will take priority over <i>Void Shift</i>, but the buff will still be consumed (does not reduce damage inflicted). <i>Void Shift</i> triggers even if the shield negated the damage entirely.\n<ul><li>However, if <b>Malzahar</b> has a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span> and the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> fully mitigates the damage, <i>Void Shift</i> does not trigger.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup> The damage taken must be from an effect that cannot be negated by <i>spell shields</i>.</li></ul></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shields</a></span> take priority over <i>Void Shift</i>. If the triggering hostile ability does not contain a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span> effect, both <i>Void Shift</i> and the <i>spell shield</i> break simultaneously.\n<ul><li>Since <i>spell shields</i> are precedent over <i>Void Shift</i>, applied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span> from effects that cannot be blocked by <i>spell shields</i> (i.e. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karthus" data-ability="Wall of Pain" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karthus/LoL#Wall_of_Pain" title="Wall of Pain"><img alt="Wall of Pain" src="/wiki/images/Karthus_Wall_of_Pain.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karthus/LoL#Wall_of_Pain" title="Karthus/LoL">Wall of Pain</a></span></span>) will also ignore <i>Void Shift</i> despite its <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">crowd control immunity</a></span>. The effect must not damage <b>Malzahar</b> for this event to take place.</li></ul></li>\n<li><i>Void Shift</i> will specifically not deactivate if <b>Malzahar</b> eats <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Honeyfruit" title="Honeyfruit"><img alt="Honeyfruit" src="/wiki/images/HoneyfruitSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Honeyfruit" class="mw-redirect" title="Honeyfruit">Honeyfruit</a></span></span> or is within a hostile <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Frozen Heart" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Frozen_Heart" title="Frozen Heart"><img alt="Frozen Heart" src="/wiki/images/Frozen_Heart_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Frozen_Heart" title="Frozen Heart">Frozen Heart</a></span></span> passive <a href="/wiki/Aura" title="Aura">aura</a>.</li>\n<li><i>Void Shift</i> will prevent <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fizz" data-ability="Chum the Waters" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fizz/LoL#Chum_the_Waters" title="Chum the Waters"><img alt="Chum the Waters" src="/wiki/images/Fizz_Chum_the_Waters.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fizz/LoL#Chum_the_Waters" title="Fizz/LoL">Chum the Waters</a></span></span> from attaching to him.</li></ul>',
  },
  'Call of the Void': {
    name: 'Call of the Void',
    display_name: 'Call of the Void',
    champion: 'Malzahar',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'MalzaharQ.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 96,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '900',
    effect_radius: '200',
    cast_time: '0.<small>25</small>',
    cost: '80',
    costtype: 'Mana',
    cooldown: '6',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Malzahar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Malzahar/LoL" title="Malzahar"><img alt="Malzahar" src="/wiki/images/Malzahar_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Malzahar/LoL" title="Malzahar/LoL">Malzahar</a></span></span> opens two portals to the void at the target location that last a brief time, which then deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies between and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">silence</a></span> them.',
    ],
    description: [
      {
        icon: '/wiki/images/Call_of_the_Void.png',
        description:
          'Active: Malzahar opens two portals to the void centered at the target location, granting  sight of the area in between. After 0.4 seconds, enemies between the portals are dealt magic damage and  silenced for a duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Malzahar</b> opens two portals to the void centered at the target location, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area in between. After 0.<small>4</small> seconds, enemies between the portals are dealt <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">silenced</a></span> for a duration.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '70 / 105 / 140 / 175 / 210 (+ 55% AP)',
            valuesHTML:
              '70 / 105 / 140 / 175 / 210 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;55% AP)</span>',
          },
          {
            name: 'Silence Duration:',
            values: '1 / 1.25 / 1.5 / 1.75 / 2',
            valuesHTML:
              '1 / 1.<small>25</small> / 1.<small>5</small> / 1.<small>75</small> / 2',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 105 / 140 / 175 / 210 (+ 55% AP)',
            damagetype: 'Magic',
            values: [70, 105, 140, 175, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 105 / 140 / 175 / 210',
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
          {
            effectType: 'Unique',
            name: 'Silence Duration:',
            raw: '1 / 1.25 / 1.5 / 1.75 / 2',
            values: [1, 1.25, 1.5, 1.75, 2],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1 / 1.25 / 1.5 / 1.75 / 2',
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
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will prevent <i>Call of the Void\'s</i> refresh on <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Malzahar" data-ability="Malefic Visions" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Malzahar/LoL#Malefic_Visions" title="Malefic Visions"><img alt="Malefic Visions" src="/wiki/images/Malzahar_Malefic_Visions.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Malzahar/LoL#Malefic_Visions" title="Malzahar/LoL">Malefic Visions</a></span></span>.\n<ul><li><ul><li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Malzahar" data-ability="Malefic Visions" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Malzahar/LoL#Malefic_Visions" title="Malefic Visions\'"><img alt="Malefic Visions\'" src="/wiki/images/Malzahar_Malefic_Visions.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Malzahar/LoL#Malefic_Visions" title="Malzahar/LoL">Malefic Visions\'</a></span></span> debuff will also be removed.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup></li></ul></li></ul>',
  },
  'Void Swarm': {
    name: 'Void Swarm',
    display_name: 'Void Swarm',
    champion: 'Malzahar',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'MalzaharW.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 144,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '150',
    cast_time: 'none',
    cost: '40 / 45 / 50 / 55 / 60',
    costtype: 'Mana',
    cooldown: '8',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Malzahar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Malzahar/LoL" title="Malzahar"><img alt="Malzahar" src="/wiki/images/Malzahar_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Malzahar/LoL" title="Malzahar/LoL">Malzahar</a></span></span> generates a stack of <i>Zz\'Rot Swarm</i> when he casts another <a href="/wiki/Champion_ability" title="Champion ability">ability</a>, up to a maximum.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Malzahar</b> consumes all <i>Zz\'Rot Swarm</i> stacks to summon a <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Voidling" title="Voidling"><img alt="Voidling" src="/wiki/images/VoidlingSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Voidling" class="mw-redirect" title="Voidling">Voidling</a></span></span> at the target location. Additional <i>Voidlings</i> are then summoned for each <i>Zz\'Rot Swarm</i> stack consumed.',
      '<i>Voidlings</i> target nearby enemies and deal <span style="color: #00B0F0; white-space:normal">magic damage</span> with their attacks, prioritizing those targeted by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Malzahar" data-ability="Malefic Visions" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Malzahar/LoL#Malefic_Visions" title="Malefic Visions"><img alt="Malefic Visions" src="/wiki/images/Malzahar_Malefic_Visions.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Malzahar/LoL#Malefic_Visions" title="Malzahar/LoL">Malefic Visions</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Malzahar" data-ability="Nether Grasp" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Malzahar/LoL#Nether_Grasp" title="Nether Grasp"><img alt="Nether Grasp" src="/wiki/images/Malzahar_Nether_Grasp.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Malzahar/LoL#Nether_Grasp" title="Malzahar/LoL">Nether Grasp</a></span></span></i>.',
    ],
    description: [
      {
        description:
          "Passive: Malzahar generates a stack of Zz'Rot Swarm when he casts another ability, up to a maximum of 2.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Malzahar</b> generates a stack of <i>Zz\'Rot Swarm</i> when he casts another <a href="/wiki/Champion_ability" title="Champion ability">ability</a>, up to a maximum of 2.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Passive:',
            raw: "Malzahar generates a stack of Zz'Rot Swarm when he casts another ability, up to a maximum of 2.",
            min: 0,
            max: 10,
            description:
              "Malzahar generates a stack of Zz'Rot Swarm when he casts another ability, up to a maximum of 2.",
            values: 2,
            units: 'genericStacks',
            unitsText:
              "generates a stack of Zz'Rot Swarm when he casts another ability, up to a maximum of 2.",
            pre: "Malzahar generates a stack of Zz'Rot Swarm when he casts another ability, up to a maximum of 2.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Void_Swarm.png',
        description:
          "Active: Malzahar consumes all Zz'Rot Swarm stacks and, after a 0.5-second delay, summons a  Voidling at the target location. Additional Voidlings are then summoned for each Zz'Rot Swarm stack consumed.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Malzahar</b> consumes all <i>Zz\'Rot Swarm</i> stacks and, after a 0.<small>5</small>-second delay, summons a <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Voidling" title="Voidling"><img alt="Voidling" src="/wiki/images/VoidlingSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Voidling" class="mw-redirect" title="Voidling">Voidling</a></span></span> at the target location. Additional <i>Voidlings</i> are then summoned for each <i>Zz\'Rot Swarm</i> stack consumed.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Voidling Duration:',
            values: '8 / 8 / 9 / 9 / 10',
            valuesHTML: '8 / 8 / 9 / 9 / 10',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Voidling Duration:',
            raw: '8 / 8 / 9 / 9 / 10',
            values: [8, 8, 9, 9, 10],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '8 / 8 / 9 / 9 / 10',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Voidlings deal magic damage with their attacks, reduced by 50% against epic monsters and increased by 200% to enemy  minions infected by  Malefic Visions.',
        descriptionHTML:
          '<i>Voidlings</i> deal <span style="color: #00B0F0; white-space:normal">magic damage</span> with their attacks, reduced by 50% against epic <a href="/wiki/Monster" title="Monster">monsters</a> and increased by 200% to enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> infected by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Malzahar" data-ability="Malefic Visions" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Malzahar/LoL#Malefic_Visions" title="Malefic Visions"><img alt="Malefic Visions" src="/wiki/images/Malzahar_Malefic_Visions.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Malzahar/LoL#Malefic_Visions" title="Malzahar/LoL">Malefic Visions</a></span></span></i>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Voidlings deal magic damage with their attacks, reduced by 50% against epic monsters and increased by 200% to enemy  minions infected by  Malefic Visions.',
            increasedStat: 'total_ad',
            values: 5,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'against epic monsters and increased by 200deal magic damage with their attacks, reduced by 50',
            pre: 'Voidlings deal magic damage with their attacks, reduced by 50% against epic monsters and increased by 200% to enemy  minions infected by  Malefic Visions.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values:
              '5 − 64.5 (based on level) (+ 12 / 14 / 16 / 18 / 20) (+ 40% bonus AD) (+ 20% AP)',
            valuesHTML:
              '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="5 + 3.5 growth" data-bot_values="5;7.52;10.16;12.93;15.82;18.83;21.96;25.21;28.59;32.09;35.71;39.46;43.33;47.32;51.43;55.66;60.02;64.5" data-top_values="">5 − 64.<small>5</small> (based on level)</span> (+ 12 / 14 / 16 / 18 / 20) <span style="color:orange; white-space:normal">(+&nbsp;40% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;20% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '5 − 64.5 (based on level) (+ 12 / 14 / 16 / 18 / 20) (+ 40% bonus AD) (+ 20% AP)',
            damagetype: 'Magic',
            values: [
              5, 8.5, 12, 15.5, 19, 22.5, 26, 29.5, 33, 36.5, 40, 43.5, 47,
              50.5, 54, 57.5, 61, 64.5,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 − 64.5',
            children: [
              {
                values: [12, 14, 16, 18, 20],
                user: 'none',
                units: '',
                unitsText: '',
                pre: '+ 12 / 14 / 16 / 18 / 20',
              },
              {
                values: 40,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 40% bonus AD',
              },
              {
                values: 20,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 20% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'See Pets for more details about Voidlings.',
        descriptionHTML:
          '<i>See <a href="/wiki/Malzahar/LoL#Pets" title="Malzahar/LoL">Pets</a> for more details about Voidlings.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    notes:
      '* <b>Malzahar</b> loses all <a href="/wiki/Stack" title="Stack">stacks</a> upon <a href="/wiki/Death" title="Death">death</a>.\n<ul><li><i>Zz\'Rot Swarm</i> stacks are gained per cast and not per ability activation. For example, if <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Malzahar" data-ability="Malefic Visions" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Malzahar/LoL#Malefic_Visions" title="Malefic Visions"><img alt="Malefic Visions" src="/wiki/images/Malzahar_Malefic_Visions.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Malzahar/LoL#Malefic_Visions" title="Malzahar/LoL">Malefic Visions</a></span></span> is cast and the ability cancels under certain circumstances, a <i>Zz\'Rot Swarm</i> stack will still be granted despite the ability\'s failure to complete.</li></ul>',
  },
  'Malefic Visions': {
    name: 'Malefic Visions',
    display_name: 'Malefic Visions',
    champion: 'Malzahar',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'MalzaharE.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 192,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '650',
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">650</span>',
    cast_time: '0.<small>25</small>',
    cost: '60 / 70 / 80 / 90 / 100',
    costtype: 'Mana',
    cooldown: '15 / 13 / 11 / 9 / 7',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Malzahar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Malzahar/LoL" title="Malzahar"><img alt="Malzahar" src="/wiki/images/Malzahar_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Malzahar/LoL" title="Malzahar/LoL">Malzahar</a></span></span> infects the target enemy\'s mind, continually dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> over a few seconds, which refreshes upon damaging them with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Malzahar" data-ability="Call of the Void" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Malzahar/LoL#Call_of_the_Void" title="Call of the Void"><img alt="Call of the Void" src="/wiki/images/Malzahar_Call_of_the_Void.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Malzahar/LoL#Call_of_the_Void" title="Malzahar/LoL">Call of the Void</a></span></span></i> or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Malzahar" data-ability="Nether Grasp" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Malzahar/LoL#Nether_Grasp" title="Nether Grasp"><img alt="Nether Grasp" src="/wiki/images/Malzahar_Nether_Grasp.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Malzahar/LoL#Nether_Grasp" title="Malzahar/LoL">Nether Grasp</a></span></span></i>.',
      'If the target dies while infected, they spread <i>Malefic Visions</i> onto the closest nearby enemy and <b>Malzahar</b> restores a portion of <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">his <b>maximum</b> mana</span></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Malefic_Visions.png',
        description:
          "Active: Malzahar infects the target enemy's mind, dealing magic damage every 0.5 seconds over 4 seconds, which refreshes upon damaging them with  Call of the Void or  Nether Grasp. Malefic Visions executes  minions if they would be damaged below  15 − 45 (based on level) health.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Malzahar</b> infects the target enemy\'s mind, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>5</small> seconds over 4 seconds, which refreshes upon damaging them with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Malzahar" data-ability="Call of the Void" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Malzahar/LoL#Call_of_the_Void" title="Call of the Void"><img alt="Call of the Void" src="/wiki/images/Malzahar_Call_of_the_Void.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Malzahar/LoL#Call_of_the_Void" title="Malzahar/LoL">Call of the Void</a></span></span></i> or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Malzahar" data-ability="Nether Grasp" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Malzahar/LoL#Nether_Grasp" title="Nether Grasp"><img alt="Nether Grasp" src="/wiki/images/Malzahar_Nether_Grasp.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Malzahar/LoL#Nether_Grasp" title="Malzahar/LoL">Nether Grasp</a></span></span></i>. <i>Malefic Visions</i> executes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> if they would be damaged below <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="15 +&nbsp;3 per level at level 1" data-bot_values="15;18;21;24;27;30;33;36;39;42;45" data-top_values="">15 − 45 (based on level)</span> health</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: 'Malefic Visions executes  minions if they would be damaged below  15 − 45 (based on level) health.',
            healType: 'BonusHealth',
            values: [
              15, 16.76, 18.53, 20.29, 22.06, 23.82, 25.59, 27.35, 29.12, 30.88,
              32.65, 34.41, 36.18, 37.94, 39.71, 41.47, 43.24, 45,
            ],
            basedOn: 'level',
            units: 'maximum_hp',
            unitsText: 'health.',
            pre: 'Malefic Visions executes  minions if they would be damaged below  15 − 45',
            post: 'health.',
          },
        ],
        leveling: [
          {
            name: 'Total Magic Damage:',
            values: '80 / 115 / 150 / 185 / 220 (+ 80% AP)',
            valuesHTML:
              '80 / 115 / 150 / 185 / 220 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;80% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Total Magic Damage:',
            raw: '80 / 115 / 150 / 185 / 220 (+ 80% AP)',
            damagetype: 'Magic',
            values: [80, 115, 150, 185, 220],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 115 / 150 / 185 / 220',
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
        icon: '/wiki/images/undefined',
        description:
          'If the target dies while infected, they spread Malefic Visions onto the closest nearby enemy and Malzahar restores  2% of his maximum mana.',
        descriptionHTML:
          'If the target dies while infected, they spread <i>Malefic Visions</i> onto the closest nearby enemy and <b>Malzahar</b> restores <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">2% of his <b>maximum</b> mana</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'If the target dies while infected, they spread Malefic Visions onto the closest nearby enemy and Malzahar restores  2% of his maximum mana.',
            damagetype: 'None',
            values: 2,
            valuesIsPercent: true,
            user: 'target',
            units: 'total_ad',
            unitsText:
              'of his maximum mana.the target dies while infected, they spread Malefic Visions onto the closest nearby enemy and Malzahar restores  2',
            pre: 'If the target dies while infected, they spread Malefic Visions onto the closest nearby enemy and Malzahar restores  2% of his maximum mana.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'DoT',
    spellshield: true,
    projectile: 'false',
    callforhelp: 'True',
    notes:
      '* If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).',
  },
  'Nether Grasp': {
    name: 'Nether Grasp',
    display_name: 'Nether Grasp',
    champion: 'Malzahar',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'MalzaharR.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 240,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '700',
    tether_radius: '1250',
    cast_time: '0.<small>005</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on-cast">140 / 125 / 110 / 95 / 80</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <b>Malzahar</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tethers</a></span> to the target enemy champion, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocking them down</a></span>. The tether lasts a short time, during which he <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Suppression"><a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control#Suppression"><img alt="Suppression icon.png" src="/wiki/images/Suppression_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control">suppress</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">reveal</a></span> the target, continually dealing them <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
      'Additionally, a <i>Null Zone</i> is opened beneath the target\'s location for a few seconds, which continually deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within.',
    ],
    description: [
      {
        icon: '/wiki/images/Nether_Grasp.png',
        description:
          'Active: Malzahar  tethers to the target enemy champion,  knocking them down. He then  channels for up to 2.5 seconds,  suppressing and  revealing the target and dealing them magic damage every 0.25 seconds,  revealing himself in the process.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Malzahar</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tethers</a></span> to the target enemy champion, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocking them down</a></span>. He then <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for up to 2.<small>5</small> seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Suppression"><a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control#Suppression"><img alt="Suppression icon.png" src="/wiki/images/Suppression_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control">suppressing</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> the target and dealing them <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>25</small> seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> himself in the process.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'He then  channels for up to 2.5 seconds,  suppressing and  revealing the target and dealing them magic damage every 0.25 seconds,  revealing himself in the process.',
            damagetype: 'Magic',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'then  channels for up to 2.5 seconds,  suppressing and  revealing the target and dealing them magic damage every 0.25 seconds,  revealing himself in the process.',
            pre: 'He then  channels for up to 2.5 seconds,  suppressing and  revealing the target and dealing them magic damage every 0.25 seconds,  revealing himself in the process.',
          },
        ],
        leveling: [
          {
            name: 'Total Magic Damage:',
            values: '125 / 162.5 / 200 / 237.5 / 275 (+ 80% AP)',
            valuesHTML:
              '125 / 162.<small>5</small> / 200 / 237.<small>5</small> / 275 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;80% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Total Magic Damage:',
            raw: '125 / 162.5 / 200 / 237.5 / 275 (+ 80% AP)',
            damagetype: 'Magic',
            values: [125, 162.5, 200, 237.5, 275],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '125 / 162.5 / 200 / 237.5 / 275',
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
        icon: '/wiki/images/undefined',
        description:
          'Malzahar will continue to channel as long as the tether is not broken, even if the suppression is removed.',
        descriptionHTML:
          '<i><b>Malzahar</b> will continue to channel as long as the tether is not broken, even if the suppression is removed.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Null_Zone.png',
        description:
          "Additionally, a Null Zone is opened beneath the target's location at the time of cast that lasts 5 seconds, dealing magic damage every 0.5 seconds to enemies within, capped at 120 per tick against  minions and  monsters.",
        descriptionHTML:
          'Additionally, a <i>Null Zone</i> is opened beneath the target\'s location at the time of cast that lasts 5 seconds, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>5</small> seconds to enemies within, capped at 120 per tick against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: "Additionally, a Null Zone is opened beneath the target's location at the time of cast that lasts 5 seconds, dealing magic damage every 0.5 seconds to enemies within, capped at 120 per tick against  minions and  monsters.",
            increasedStat: 'total_ap',
            values: 5,
            units: '',
            unitsText:
              "a Null Zone is opened beneath the target's location at the time of cast that lasts 5 seconds, dealing magic damage every 0.5 seconds to enemies within, capped at 120 per tick against  minions and  monsters.",
            pre: "Additionally, a Null Zone is opened beneath the target's location at the time of cast that lasts 5 seconds, dealing magic damage every 0.5 seconds to enemies within, capped at 120 per tick against  minions and  monsters.",
          },
        ],
        leveling: [
          {
            name: 'Total Magic Damage:',
            values:
              "10 / 12.5 / 15 / 17.5 / 20% (+ 2.5% per 100 AP) of target's maximum health",
            valuesHTML:
              '<span style="color: #1F995C; white-space:normal">10 / 12.<small>5</small> / 15 / 17.<small>5</small> / 20% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;2.<small>5</small>% per 100 AP)</span> of target\'s <b>maximum</b> health</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Total Magic Damage:',
            raw: "10 / 12.5 / 15 / 17.5 / 20% (+ 2.5% per 100 AP) of target's maximum health",
            healType: 'OutgoingHeals',
            values: [10, 12.5, 15, 17.5, 20],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: '10 / 12.5 / 15 / 17.5 / 20%',
            post: "of target's maximum health",
            children: [
              {
                values: 2.5,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 2.5% per 100 AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Null Zone will persist even if the channel is interrupted.',
        descriptionHTML:
          '<i>Null Zone will persist even if the channel is interrupted.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Special',
    spellshield: true,
    projectile: 'False',
    callforhelp: 'true',
    notes:
      '* Applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Persistent damage"><a href="/wiki/Damage" title="Damage"><img alt="Blaze.png" src="/wiki/images/Brand_Blaze.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">persistent damage</a></span> for the <a href="/wiki/Tether" title="Tether">tether</a> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Persistent area damage"><a href="/wiki/Damage" title="Damage"><img alt="Poison Trail.png" src="/wiki/images/Singed_Poison_Trail.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">persistent area damage</a></span> to enemies within the <i>Null Zone</i>.\n<ul><li>The tether will not break if the target enters a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Zombie state"><a href="/wiki/Death#Zombie_states" title="Death#Zombie states"><img alt="Zombie icon.png" src="/wiki/images/Zombie_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Zombie_states" title="Death">zombie state</a></span> or enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span>.</li>\n<li>Removing the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Suppression"><a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control#Suppression"><img alt="Suppression icon.png" src="/wiki/images/Suppression_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control">suppression</a></span> will also remove the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">reveal</a></span>.</li>\n<li><i>Nether Grasp</i> and <i>Null Zone</i> count as two different abilities for effects such as <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Electrocute" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Electrocute_(Rune)" title="Electrocute"><img alt="Electrocute" src="/wiki/images/Electrocute_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Electrocute_(Rune)" class="mw-redirect" title="Electrocute (Rune)">Electrocute</a></span></span>.</li>\n<li><b>Malzahar</b> places himself onto the ground and interrupts <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">displacements</a></span> affecting him upon starting the channel.</li>\n<li>The following table refers for interactions while <b>Malzahar</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled if attacking Nether Grasp target. Otherwise interrupts after 0.<small>5</small> seconds of channeling.\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled for the first 0.<small>5</small> seconds. Interrupts afterwards.\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Hextech Rocketbelt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt"><img alt="Hextech Rocketbelt" src="/wiki/images/Hextech_Rocketbelt_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt">Hextech Rocketbelt</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>All item-actives not specified above interrupt\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>',
  },
} satisfies { [skillName in string]: SkillData };
