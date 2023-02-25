import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = "Cho'Gath";

export default {
  Carnivore: {
    name: 'Carnivore',
    display_name: 'Carnivore',
    champion: "Cho'Gath",
    skill: 'I',
    image: {
      full: 'GreenTerror_TailSpike.png',
      sprite: 'passive0.png',
      group: 'passive',
      x: 0,
      y: 96,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> Whenever <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Cho\'Gath" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cho%27Gath/LoL" title="Cho\'Gath"><img alt="Cho\'Gath" src="/wiki/images/Cho%27Gath_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cho%27Gath/LoL" title="Cho\'Gath/LoL">Cho\'Gath</a></span></span> kills an enemy, it <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> and restores <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana</span></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Carnivore.png',
        description:
          "Innate: Whenever Cho'Gath kills an enemy, it  heals for 18 − 52 (based on level) and restores  4.72 − 9.48 (based on level) mana.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> Whenever <b>Cho\'Gath</b> kills an enemy, it <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="18;" data-finish="52;" data-bot_values="18;20;22;24;26;28;30;32;34;36;38;40;42;44;46;48;50;52" data-top_values="">18 − 52 (based on level)</span> and restores <span style="color: #0099CC; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="4.72;" data-finish="9.48;" data-bot_values="4.72;5;5.28;5.56;5.84;6.12;6.4;6.68;6.96;7.24;7.52;7.8;8.08;8.36;8.64;8.92;9.2;9.48" data-top_values="">4.<small>72</small> − 9.<small>48</small> (based on level)</span> mana</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Innate:',
            raw: " Whenever Cho'Gath kills an enemy, it  heals for 18 − 52 (based on level) and restores  4.72 − 9.48 (based on level) mana.",
            healType: 'DrainEffect',
            values: [
              18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48,
              50, 52,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'and restores  4.72 − 9.48',
            pre: "Whenever Cho'Gath kills an enemy, it  heals for 18 − 52",
            post: 'and restores  4.72 − 9.48',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    spelleffects: 'Heal',
    notes:
      '* <i>Carnivore</i> will also trigger when <b>Cho\'Gath</b> destroys a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turret</a></span>, but not from other structures.\n<ul><li><i>Carnivore</i> does not trigger upon destroying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Wards"><a href="/wiki/Ward" title="Ward"><img alt="Ward icon.png" src="/wiki/images/Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ward" title="Ward">wards</a></span> and possibly other similar units.</li></ul>',
  },
  Rupture: {
    name: 'Rupture',
    display_name: 'Rupture',
    champion: "Cho'Gath",
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'Rupture.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 288,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '950',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 250',
    cast_time: '0.<small>5</small>',
    cost: '60',
    costtype: 'mana',
    cooldown: '6',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Cho\'Gath" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cho%27Gath/LoL" title="Cho\'Gath"><img alt="Cho\'Gath" src="/wiki/images/Cho%27Gath_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cho%27Gath/LoL" title="Cho\'Gath/LoL">Cho\'Gath</a></span></span> ruptures the target location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking up</a></span> enemies within, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them upon landing.',
    ],
    description: [
      {
        icon: '/wiki/images/Rupture.png',
        description:
          "Active: Cho'Gath ruptures the target location after a 0.627 seconds-second delay, granting  sight of the area before dealing magic damage to enemies within and  knocking them up for 1 second, and afterwards  slowing them by 60% for 1.5 seconds.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Cho\'Gath</b> ruptures the target location after a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.625 seconds, but rounded up to the next game tick.">0.<small>627</small> seconds</span>-second delay, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area before dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them up</a></span> for 1 second, and afterwards <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 60% for 1.<small>5</small> seconds.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic damage:',
            values: '80 / 135 / 190 / 245 / 300 (+ 100% AP)',
            valuesHTML:
              '80 / 135 / 190 / 245 / 300 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;100% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic damage:',
            raw: '80 / 135 / 190 / 245 / 300 (+ 100% AP)',
            damagetype: 'Magic',
            values: [80, 135, 190, 245, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 135 / 190 / 245 / 300',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 100% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes:
      '* The delay before the rupture does not include the cast time.\n<ul><li>The animation is visible in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Brush"><a href="/wiki/Brush" title="Brush"><img alt="Brushmaker.png" src="/wiki/images/Ivern_Brushmaker.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Brush" title="Brush">brush</a></span> and in <a href="/wiki/Sight" title="Sight">fog of war</a>.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">Cleansing</a></span> the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> will not prevent the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span>.\n<ul><li>The slow itself can also not be blocked by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span>, but will always be prevented if the airborne was.</li></ul></li>\n<li>The area will still rupture even if <b>Cho\'Gath</b> dies during the delay.</li></ul>',
    video: "Cho'Gath QVideo.ogv",
  },
  'Feral Scream': {
    name: 'Feral Scream',
    display_name: 'Feral Scream',
    champion: "Cho'Gath",
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'FeralScream.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 336,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '650',
    angle:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 60°',
    cast_time: '0.<small>5</small>',
    cost: '70 / 80 / 90 / 100 / 110',
    costtype: 'mana',
    cooldown: '13 / 12 / 11 / 10 / 9',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Cho\'Gath" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cho%27Gath/LoL" title="Cho\'Gath"><img alt="Cho\'Gath" src="/wiki/images/Cho%27Gath_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cho%27Gath/LoL" title="Cho\'Gath/LoL">Cho\'Gath</a></span></span> roars in a cone, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">silencing</a></span> enemies hit.',
    ],
    description: [
      {
        icon: '/wiki/images/Feral Scream.png',
        description:
          "Active: Cho'Gath roars in a cone in the target direction, dealing magic damage to enemies hit.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Cho\'Gath</b> roars in a cone in the target direction, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic damage:',
            values: '80 / 135 / 190 / 245 / 300 (+ 70% AP)',
            valuesHTML:
              '80 / 135 / 190 / 245 / 300 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;70% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic damage:',
            raw: '80 / 135 / 190 / 245 / 300 (+ 70% AP)',
            damagetype: 'Magic',
            values: [80, 135, 190, 245, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 135 / 190 / 245 / 300',
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
          'Enemy  champions and  Rift Scuttlers hit are also  silenced for a duration.',
        descriptionHTML:
          'Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> and <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rift_Scuttler" title="Rift Scuttlers"><img alt="Rift Scuttlers" src="/wiki/images/Rift_ScuttlerSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rift_Scuttler" class="mw-redirect" title="Rift Scuttler">Rift Scuttlers</a></span></span> hit are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">silenced</a></span> for a duration.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Silence Duration:',
            values: '1.6 / 1.7 / 1.8 / 1.9 / 2',
            valuesHTML:
              '1.<small>6</small> / 1.<small>7</small> / 1.<small>8</small> / 1.<small>9</small> / 2',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Silence Duration:',
            raw: '1.6 / 1.7 / 1.8 / 1.9 / 2',
            values: [1.6, 1.7, 1.8, 1.9, 2],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1.6 / 1.7 / 1.8 / 1.9 / 2',
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'False',
    notes:
      '* This ability will cast from wherever the caster is at the end of the cast time.\n<ul><li><i>Feral Scream</i> uses <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Edge range"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Range" title="Range">edge range</a></span> for enemy targets only; Its range is <i>center-to-edge</i>.</li></ul>',
    video: "Cho'Gath WVideo.ogv",
  },
  'Vorpal Spikes': {
    name: 'Vorpal Spikes',
    display_name: 'Vorpal Spikes',
    champion: "Cho'Gath",
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'VorpalSpikes.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 384,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '500',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Base value, increases with Feast stacks">340</span>',
    cast_time: 'none',
    cost: '30',
    costtype: 'mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">8 / 7 / 6 / 5 / 4</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Cho\'Gath" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cho%27Gath/LoL" title="Cho\'Gath\'s"><img alt="Cho\'Gath\'s" src="/wiki/images/Cho%27Gath_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cho%27Gath/LoL" title="Cho\'Gath/LoL">Cho\'Gath\'s</a></span></span> next few basic attacks launch forth deadly spikes, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit based on <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Cho\'Gath" data-ability="Feast" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cho%27Gath/LoL#Feast" title="Feast"><img alt="Feast" src="/wiki/images/Cho%27Gath_Feast.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cho%27Gath/LoL#Feast" title="Cho\'Gath/LoL">Feast</a></span></span></i> stacks and each <span style="color: #1F995C; white-space:normal">target\'s <b>maximum</b> health</span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them.',
    ],
    description: [
      {
        icon: '/wiki/images/Vorpal Spikes.png',
        description:
          "Active: Cho'Gath empowers its next 3 basic attacks within 6 seconds to gain  50 bonus range and launch a blast of spikes on-attack in the target's direction. Enemies struck are dealt magic damage and  slowed by an amount that decays over 1.5 seconds. The damage based on the target's health ratio is capped against  minions and  monsters.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Cho\'Gath</b> empowers its next 3 <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> within 6 seconds to gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50 <b>bonus</b> range</span> and launch a blast of spikes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> in the target\'s direction. Enemies struck are dealt <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by an amount that decays over 1.<small>5</small> seconds. The damage based on the target\'s health ratio is capped against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: " Cho'Gath empowers its next 3 basic attacks within 6 seconds to gain  50 bonus range and launch a blast of spikes on-attack in the target's direction",
            increasedStat: 'bonus_ad',
            values: 3,
            user: 'target',
            units: '',
            unitsText:
              "empowers its next 3 basic attacks within 6 seconds to gain  50 bonus range and launch a blast of spikes on-attack in the target's direction",
            pre: "Cho'Gath empowers its next 3 basic attacks within 6 seconds to gain  50 bonus range and launch a blast of spikes on-attack in the target's direction",
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Enemies struck are dealt magic damage and  slowed by an amount that decays over 1.5 seconds',
            damagetype: 'Magic',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'struck are dealt magic damage and  slowed by an amount that decays over 1.5 seconds',
            pre: 'Enemies struck are dealt magic damage and  slowed by an amount that decays over 1.5 seconds',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values:
              "22 / 34 / 46 / 58 / 70 (+ 30% AP) (+ 3% (+ 0.5% per  Feast stack) of target's maximum health)",
            valuesHTML:
              '22 / 34 / 46 / 58 / 70 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;3% <span style="color: #AF1AAF; white-space:normal">(+&nbsp;0.<small>5</small>% per <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Cho\'Gath" data-ability="Feast" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cho%27Gath/LoL#Feast" title="Feast"><img alt="Feast" src="/wiki/images/Cho%27Gath_Feast.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cho%27Gath/LoL#Feast" title="Cho\'Gath/LoL">Feast</a></span></span> stack)</span> of target\'s <b>maximum</b> health)</span>',
          },
          {
            name: 'Capped Monster Percent Damage:',
            values: '60 / 80 / 100 / 120 / 140',
            valuesHTML: '60 / 80 / 100 / 120 / 140',
          },
          {
            name: 'Slow:',
            values: '30 / 35 / 40 / 45 / 50%',
            valuesHTML: '30 / 35 / 40 / 45 / 50%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Magic Damage:',
            raw: "22 / 34 / 46 / 58 / 70 (+ 30% AP) (+ 3% (+ 0.5% per  Feast stack) of target's maximum health)",
            healType: 'OutgoingHeals',
            values: [22, 34, 46, 58, 70],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '22 / 34 / 46 / 58 / 70',
            children: [
              {
                values: 30,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 30% AP',
              },
              {
                values: 3,
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of target's maximum health",
                pre: '+ 3%',
                post: "of target's maximum health",
                children: [
                  {
                    values: 0.5,
                    valuesIsPercent: true,
                    units: 'feastStacks',
                    unitsText: 'per  Feast stack',
                    pre: '+ 0.5% per  Feast stack',
                  },
                ],
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Capped Monster Percent Damage:',
            raw: '60 / 80 / 100 / 120 / 140',
            damagetype: 'None',
            values: [60, 80, 100, 120, 140],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 80 / 100 / 120 / 140',
          },
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '30 / 35 / 40 / 45 / 50%',
            values: [30, 35, 40, 45, 50],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 35 / 40 / 45 / 50%',
          },
        ],
      },
      {
        description: "Vorpal Spikes  resets Cho'Gath's basic attack timer.",
        descriptionHTML:
          '<i>Vorpal Spikes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Cho\'Gath\'s</b> basic attack timer.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self / Enemies',
    damagetype: 'Magic',
    spelleffects: 'aoe',
    spellshield: false,
    projectile: 'True',
    notes:
      '* <b>Cho\'Gath\'s</b> size factors into the wideness of the hitbox <i>Vorpal Spikes</i> has. External size modifiers (<span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lulu" data-ability="Wild Growth" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lulu/LoL#Wild_Growth" title="Wild Growth"><img alt="Wild Growth" src="/wiki/images/Lulu_Wild_Growth.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lulu/LoL#Wild_Growth" title="Lulu/LoL">Wild Growth</a></span></span>) contribute to this.\n<ul><li>When attacking enemies right on top of <b>Cho\'Gath</b>, the missile may fire in the opposite direction.</li>\n<li>The empowered attack will trigger but not apply its effects against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.</li></ul>',
    video: "Cho'Gath EVideo.ogv",
  },
  Feast: {
    name: 'Feast',
    display_name: 'Feast',
    champion: "Cho'Gath",
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'Feast.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 432,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '175',
    cast_time: '0.<small>25</small>',
    cost: '100',
    costtype: 'mana',
    cooldown: '80 / 75 / 70 / 65 / 60',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Cho\'Gath" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cho%27Gath/LoL" title="Cho\'Gath"><img alt="Cho\'Gath" src="/wiki/images/Cho%27Gath_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cho%27Gath/LoL" title="Cho\'Gath/LoL">Cho\'Gath</a></span></span> devours an enemy, dealing <span style="color: #F9966B; white-space:normal">true damage</span> based on <span style="color: #1F995C; white-space:normal"><b>Cho\'Gath\'s bonus</b> health</span>. If this attack kills the target, <b>Cho\'Gath</b> gains a permanent <i>Feast</i> stack that infinitely stacks.',
      '<span class="template_sbc"><b>Feast:</b></span> For each stack, <b>Cho\'Gath</b> gains <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> health</span></span>, <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack range</span> and increased <a href="/wiki/Size" title="Size">size</a>.',
    ],
    description: [
      {
        icon: '/wiki/images/Feast.png',
        description:
          "Active: Cho'Gath attempts to eat the target enemy, dealing them  true damage. Against non-champions, the base damage is modified.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Cho\'Gath</b> attempts to eat the target enemy, dealing them <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal">true damage</span></span>. Against non-champions, the <b>base</b> damage is modified.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Champion True Damage:',
            values: '300 / 475 / 650 (+ 50% AP) (+ 10% bonus health)',
            valuesHTML:
              '300 / 475 / 650 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;10% <b>bonus</b> health)</span>',
          },
          {
            name: 'Non-Champion True Damage:',
            values: '1200 (+ 50% AP) (+ 10% bonus health)',
            valuesHTML:
              '1200 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;10% <b>bonus</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Champion True Damage:',
            raw: '300 / 475 / 650 (+ 50% AP) (+ 10% bonus health)',
            healType: 'BonusHealth',
            values: [300, 475, 650],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '300 / 475 / 650',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 50% AP',
              },
              {
                values: 10,
                valuesIsPercent: true,
                units: 'bonus_hp',
                unitsText: 'bonus health',
                pre: '+ 10% bonus health',
              },
            ],
          },
          {
            effectType: 'Heal',
            name: 'Non-Champion True Damage:',
            raw: '1200 (+ 50% AP) (+ 10% bonus health)',
            healType: 'BonusHealth',
            values: 1200,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1200',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 50% AP',
              },
              {
                values: 10,
                valuesIsPercent: true,
                units: 'bonus_hp',
                unitsText: 'bonus health',
                pre: '+ 10% bonus health',
              },
            ],
          },
        ],
      },
      {
        description:
          "If the target is killed, Cho'Gath gains a stack of Feast. Only 6 stacks can be gained from non-epic  monsters or  minions.",
        descriptionHTML:
          'If the target is killed, <b>Cho\'Gath</b> gains a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Feast</i>. Only 6 stacks can be gained from non-epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'Only 6 stacks can be gained from non-epic  monsters or  minions.',
            increasedStat: 'feastStacks',
            values: 6,
            units: '',
            unitsText:
              '6 stacks can be gained from non-epic  monsters or  minions.',
            pre: 'Only 6 stacks can be gained from non-epic  monsters or  minions.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Each stack of Feast grants Cho'Gath  bonus health as well as  bonus attack range and increased size, capping at  75 bonus attack range and 100% increased size.",
        descriptionHTML:
          'Each stack of <i>Feast</i> grants <b>Cho\'Gath</b> <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> health</span></span> as well as <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack range</span> and increased <a href="/wiki/Size" title="Size">size</a>, capping at <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;75 <b>bonus</b> attack range</span> and 100% increased size.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: "Each stack of Feast grants Cho'Gath  bonus health as well as  bonus attack range and increased size, capping at  75 bonus attack range and 100% increased size.",
            healType: 'BonusHealth',
            values: 7,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              "increased size.stack of Feast grants Cho'Gath  bonus health as well as  bonus attack range and increased size, capping at  75 bonus attack range and 100",
            pre: "Each stack of Feast grants Cho'Gath  bonus health as well as  bonus attack range and increased size, capping at  75 bonus attack range and 100% increased size.",
          },
        ],
        leveling: [
          {
            name: 'Bonus Health Per Stack:',
            values: '80 / 100 / 120 / 140 / 160',
            valuesHTML: '80 / 100 / 120 / 140 / 160',
          },
          {
            name: 'Bonus Attack Range Per Stack:',
            values: '4.62 / 5.38 / 6.15 / 6.92 / 7.69',
            valuesHTML:
              '4.<small>62</small> / 5.<small>38</small> / 6.<small>15</small> / 6.<small>92</small> / 7.<small>69</small>',
          },
          {
            name: 'Bonus Size Per Stack:',
            values: '6 / 7 / 8 / 9 / 10%',
            valuesHTML: '6 / 7 / 8 / 9 / 10%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Bonus Health Per Stack:',
            raw: '80 / 100 / 120 / 140 / 160',
            healType: 'BonusHealth',
            values: [80, 100, 120, 140, 160],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 100 / 120 / 140 / 160',
          },
          {
            effectType: 'Stacks',
            name: 'Bonus Attack Range Per Stack:',
            raw: '4.62 / 5.38 / 6.15 / 6.92 / 7.69',
            min: 0,
            max: 10,
            description: '4.62 / 5.38 / 6.15 / 6.92 / 7.69',
            values: [4.62, 5.38, 6.15, 6.92, 7.69],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '4.62 / 5.38 / 6.15 / 6.92 / 7.69',
          },
          {
            effectType: 'Stacks',
            name: 'Bonus Size Per Stack:',
            raw: '6 / 7 / 8 / 9 / 10%',
            min: 0,
            max: 10,
            description: '6 / 7 / 8 / 9 / 10%',
            values: [6, 7, 8, 9, 10],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '6 / 7 / 8 / 9 / 10%',
          },
        ],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies / Self',
    damagetype: 'True',
    spelleffects: 'spell',
    spellshield: true,
    callforhelp: 'True',
    notes:
      '* The increased size stacks additively with other size increases.\n<ul><li>The name of the bonus health buff is <i>"Feast"</i>.</li>\n<li>The bonus attack range and increase size cap at respectively 16.<small>25</small> / 13.<small>93</small> / 12.<small>19</small> / 10.<small>83</small> / 9.<small>75</small> and 16.<small>67</small> / 14.<small>29</small> / 12.<small>5</small> / 11.<small>11</small> / 10 stacks, with the last stack being effective as the decimal part of the value (no decimal meaning 100% as effective).</li>\n<li>Each stack of <i>Feast</i> increases the damage by 8 / 12 / 16.</li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).</li></ul>\n<ul><li>If an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> has health below the amount of <span style="color: #F9966B; white-space:normal">true damage</span> <i>Feast</i> deals, they will be marked for execution. This indicator does not consider <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invulnerability"><a href="/wiki/Invulnerability" title="Invulnerability"><img alt="Cosmic Radiance.png" src="/wiki/images/Taric_Cosmic_Radiance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability" title="Invulnerability">invulnerability</a></span>.</li></ul>\n<figure class="thumb tleft " style="width: 150px"> \t<a href="https://static.wikia.nocookie.net/leagueoflegends/images/7/72/Feast_Execute_Indicator.png/revision/latest?cb=20200417061434" class="image"><img alt="" src="/wiki/images/Feast_Execute_Indicator.png" decoding="async" loading="lazy" width="150" height="180" class="thumbimage lazyload"></a> \t<noscript><a href="https://static.wikia.nocookie.net/leagueoflegends/images/7/72/Feast_Execute_Indicator.png/revision/latest?cb=20200417061434" class="image"><img alt="" src="https://static.wikia.nocookie.net/leagueoflegends/images/7/72/Feast_Execute_Indicator.png/revision/latest/scale-to-width-down/150?cb=20200417061434" decoding="async" loading="lazy" width="150" height="180" class="thumbimage" data-image-name="Feast Execute Indicator.png" data-image-key="Feast_Execute_Indicator.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/72/Feast_Execute_Indicator.png/revision/latest/scale-to-width-down/150?cb=20200417061434"></a></noscript> \t<figcaption class="thumbcaption"> \t\t \t\t \t\t \t\t\t<p class="caption">This indicator is only visible to <b>Cho\'Gath</b>.</p> \t\t \t</figcaption> </figure>',
    video: "Cho'Gath RVideo.ogv",
  },
} satisfies { [skillName in string]: SkillData };
