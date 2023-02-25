import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Jarvan IV';

export default {
  'Martial Cadence': {
    name: 'Martial Cadence',
    display_name: 'Martial Cadence',
    champion: 'Jarvan IV',
    skill: 'I',
    image: {
      full: 'JarvanIV_MartialCadence.png',
      sprite: 'passive1.png',
      group: 'passive',
      x: 288,
      y: 48,
      w: 48,
      h: 48,
    },
    ontargetcdstatic:
      '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="6;1" data-finish="3;16" data-bot_values="6;5;4;3" data-top_values="1;6;11;16">6 / 5 / 4 / 3 (based on level)</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jarvan IV" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jarvan_IV/LoL" title="Jarvan IV\'s"><img alt="Jarvan IV\'s" src="/wiki/images/Jarvan_IV_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jarvan_IV/LoL" title="Jarvan IV/LoL">Jarvan IV\'s</a></span></span> basic attacks deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> equal to a portion of the <span style="color: #1F995C; white-space:normal">target\'s <b>current</b> health</span>.',
      'This effect cannot occur on the same target more than once every few seconds.',
    ],
    description: [
      {
        icon: '/wiki/images/Martial_Cadence.png',
        description:
          "Innate: Jarvan IV's basic attacks are empowered to deal additional physical damage equal to 8% of the target's current health, with a minimum threshold of 20 and capped at 400 against all targets.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Jarvan IV\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> are empowered to deal <span style="color:orange; white-space:normal"><b>additional</b> physical damage</span> equal to <span style="color: #1F995C; white-space:normal">8% of the target\'s <b>current</b> health</span>, with a minimum threshold of 20 and capped at 400 against all targets.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Innate:',
            raw: "Jarvan IV's basic attacks are empowered to deal additional physical damage equal to 8% of the target's current health, with a minimum threshold of 20 and capped at 400 against all targets.",
            healType: 'PhysicalVamp',
            values: 8,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              "of the target's current health, with a minimum threshold of 20 and capped at 400 against all targets.IV's basic attacks are empowered to deal additional physical damage equal to 8",
            pre: "Jarvan IV's basic attacks are empowered to deal additional physical damage equal to 8% of the target's current health, with a minimum threshold of 20 and capped at 400 against all targets.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'This effect cannot occur on the same target more than once every few seconds.',
        descriptionHTML:
          'This effect cannot occur on the same target more than once every few seconds.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Proc',
    spellshield: false,
    notes:
      '* <i>Martial Cadence\'s</i> damage is based on the current health of the target before any damage of the attack has been dealt.\n<ul><li><i>Martial Cadence\'s</i> damage is dealt after the main attack damage.\n<ul><li>If the target dies to the main attack damage, the additional damage will not be dealt.</li></ul></li>\n<li>The empowered attack will not trigger against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.</li></ul>',
  },
  'Dragon Strike': {
    name: 'Dragon Strike',
    display_name: 'Dragon Strike',
    champion: 'Jarvan IV',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'JarvanIVDragonStrike.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 0,
      y: 0,
      w: 48,
      h: 48,
    },
    range: '65 - 785 /  0 - 850',
    collision_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dash collision radius">180</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage area width">136</span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Flag detection width">300</span>',
    cast_time: '0.<small>4</small>',
    cost: '45 / 50 / 55 / 60 / 65',
    costtype: 'Mana',
    cooldown: '10 / 9 / 8 / 7 / 6',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jarvan IV" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jarvan_IV/LoL" title="Jarvan IV"><img alt="Jarvan IV" src="/wiki/images/Jarvan_IV_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jarvan_IV/LoL" title="Jarvan IV/LoL">Jarvan IV</a></span></span> extends his lance in the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> enemies hit and <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">reducing their armor</span></span> for a short time.',
      'If the lance connects with a deployed <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jarvan IV" data-ability="Demacian Standard" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jarvan_IV/LoL#Demacian_Standard" title="Demacian Standard"><img alt="Demacian Standard" src="/wiki/images/Jarvan_IV_Demacian_Standard.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jarvan_IV/LoL#Demacian_Standard" title="Jarvan IV/LoL">Demacian Standard</a></span></span></i>, he will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> to its location, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking up</a></span> enemies he passes by.',
    ],
    description: [
      {
        icon: '/wiki/images/Dragon_Strike.png',
        description:
          'Active: Jarvan IV extends his lance in the target direction, dealing physical damage to enemies hit and inflicting them with  armor reduction for 3 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Jarvan IV</b> extends his lance in the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit and inflicting them with <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor reduction</span></span> for 3 seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Jarvan IV extends his lance in the target direction, dealing physical damage to enemies hit and inflicting them with  armor reduction for 3 seconds.',
            damagetype: 'Physical',
            values: 3,
            user: 'target',
            units: 'total_armor',
            unitsText:
              'IV extends his lance in the target direction, dealing physical damage to enemies hit and inflicting them with  armor reduction for 3 seconds.',
            pre: 'Jarvan IV extends his lance in the target direction, dealing physical damage to enemies hit and inflicting them with  armor reduction for 3 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '90 / 130 / 170 / 210 / 250 (+ 140% bonus AD)',
            valuesHTML:
              '90 / 130 / 170 / 210 / 250 <span style="color:orange; white-space:normal">(+&nbsp;140% <b>bonus</b> AD)</span>',
          },
          {
            name: 'Armor Reduction:',
            values: "10 / 14 / 18 / 22 / 26% of target's armor",
            valuesHTML:
              '<span style="color:yellow; white-space:normal">10 / 14 / 18 / 22 / 26% of target\'s armor</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '90 / 130 / 170 / 210 / 250 (+ 140% bonus AD)',
            damagetype: 'Physical',
            values: [90, 130, 170, 210, 250],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '90 / 130 / 170 / 210 / 250',
            children: [
              {
                values: 140,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 140% bonus AD',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Armor Reduction:',
            raw: "10 / 14 / 18 / 22 / 26% of target's armor",
            values: [10, 14, 18, 22, 26],
            valuesIsPercent: true,
            user: 'target',
            units: 'total_armor',
            unitsText: "of target's armor",
            pre: "10 / 14 / 18 / 22 / 26% of target's armor",
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'If the lance connects with a deployed  Demacian Standard, Jarvan IV  dashes to its location,  knocking up nearby enemies around him and along his path for 0.75 seconds.',
        descriptionHTML:
          'If the lance connects with a deployed <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jarvan IV" data-ability="Demacian Standard" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jarvan_IV/LoL#Demacian_Standard" title="Demacian Standard"><img alt="Demacian Standard" src="/wiki/images/Jarvan_IV_Demacian_Standard.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jarvan_IV/LoL#Demacian_Standard" title="Jarvan IV/LoL">Demacian Standard</a></span></span></i>, <b>Jarvan IV</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to its location, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking up</a></span> nearby enemies around him and along his path for 0.<small>75</small> seconds.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'Jarvan IV can cast any of his abilities during the dash.',
        descriptionHTML:
          '<i><b>Jarvan IV</b> can cast any of his <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> during the dash.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Self, Enemies',
    damagetype: 'Physical',
    spelleffects: 'Aoe',
    spellshield: true,
    notes:
      '* The armor reduction is applied after the damage. The damage dealt does not benefit from it in this case.\n<ul><li>This ability will cast from wherever the caster is at the end of the cast time.</li>\n<li><i>Dragon Strike</i> will still pull <b>Jarvan IV</b> to <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jarvan IV" data-ability="Demacian Standard" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jarvan_IV/LoL#Demacian_Standard" title="Demacian Standard"><img alt="Demacian Standard" src="/wiki/images/Jarvan_IV_Demacian_Standard.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jarvan_IV/LoL#Demacian_Standard" title="Jarvan IV/LoL">Demacian Standard</a></span></span> even if he is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span>.</li>\n<li><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> will interrupt the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> to a <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jarvan IV" data-ability="Demacian Standard" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jarvan_IV/LoL#Demacian_Standard" title="Demacian Standard"><img alt="Demacian Standard" src="/wiki/images/Jarvan_IV_Demacian_Standard.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jarvan_IV/LoL#Demacian_Standard" title="Jarvan IV/LoL">Demacian Standard</a></span></span> but <b>Jarvan IV</b> will still <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock up</a></span> and damage enemies he comes in contact with at the new location.\n<ul><li>Casting <i>Flash</i> right before the <i>dash</i> begins will cause <b>Jarvan IV</b> to be pulled to the flag from the new position.</li>\n<li>Enemies already hit by <i>Dragon Strike</i> cannot be affected more than once.</li></ul></li>\n<li>The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knockup</a></span> also slightly moves the target, landing 50-100 units in a random direction.</li></ul>',
  },
  'Golden Aegis': {
    name: 'Golden Aegis',
    display_name: 'Golden Aegis',
    champion: 'Jarvan IV',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'JarvanIVGoldenAegis.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 48,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 600',
    cast_time: 'none',
    cost: '30',
    costtype: 'Mana',
    cooldown: '9',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jarvan IV" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jarvan_IV/LoL" title="Jarvan IV"><img alt="Jarvan IV" src="/wiki/images/Jarvan_IV_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jarvan_IV/LoL" title="Jarvan IV/LoL">Jarvan IV</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> nearby enemies for a short time.',
      'He will also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> himself for a few seconds, with the strength increased if he hit more enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Golden_Aegis.png',
        description:
          'Active: Jarvan IV  slows all nearby enemies for 2 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Jarvan IV</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> all nearby enemies for 2 seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: 'Jarvan IV  slows all nearby enemies for 2 seconds.',
            values: 2,
            user: 'none',
            units: '',
            unitsText: 'IV  slows all nearby enemies for 2 seconds.',
            pre: 'Jarvan IV  slows all nearby enemies for 2 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Slow:',
            values: '15 / 20 / 25 / 30 / 35%',
            valuesHTML: '15 / 20 / 25 / 30 / 35%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '15 / 20 / 25 / 30 / 35%',
            values: [15, 20, 25, 30, 35],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 20 / 25 / 30 / 35%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Jarvan IV also grants himself a  shield for 4 seconds, increased by 1.3% of his maximum health for each enemy  champion hit by Golden Aegis.',
        descriptionHTML:
          '<b>Jarvan IV</b> also grants himself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 4 seconds, increased by <span style="color: #1F995C; white-space:normal">1.<small>3</small>% of his <b>maximum</b> health</span> for each enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> hit by <i>Golden Aegis</i>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: 'Jarvan IV also grants himself a  shield for 4 seconds, increased by 1.3% of his maximum health for each enemy  champion hit by Golden Aegis.',
            healType: 'BonusHealth',
            values: 4,
            valuesIsPercent: true,
            units: 'gold',
            unitsText:
              'of his maximum health for each enemy  champion hit by Golden Aegis.IV also grants himself a  shield for 4 seconds, increased by 1.3',
            pre: 'Jarvan IV also grants himself a  shield for 4 seconds, increased by 1.3% of his maximum health for each enemy  champion hit by Golden Aegis.',
          },
        ],
        leveling: [
          {
            name: 'Shield Strength:',
            values: '60 / 80 / 100 / 120 / 140 (+ 70% bonus AD)',
            valuesHTML:
              '60 / 80 / 100 / 120 / 140 <span style="color:orange; white-space:normal">(+&nbsp;70% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Shield',
            name: 'Shield Strength:',
            raw: '60 / 80 / 100 / 120 / 140 (+ 70% bonus AD)',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: [60, 80, 100, 120, 140],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 80 / 100 / 120 / 140',
            children: [
              {
                values: 70,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 70% bonus AD',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Self, Enemies',
    spelleffects: 'Shield',
    spellshield: true,
    notes: '* No additional information.',
  },
  'Demacian Standard': {
    name: 'Demacian Standard',
    display_name: 'Demacian Standard',
    champion: 'Jarvan IV',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'JarvanIVDemacianStandard.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 96,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '860',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Impact radius">200</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Aura radius">1000</span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Sight range">700</span>',
    cast_time: 'none',
    cost: '55',
    costtype: 'Mana',
    cooldown: '12 / 11.<small>5</small> / 11 / 10.<small>5</small> / 10',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jarvan IV" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jarvan_IV/LoL" title="Jarvan IV"><img alt="Jarvan IV" src="/wiki/images/Jarvan_IV_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jarvan_IV/LoL" title="Jarvan IV/LoL">Jarvan IV</a></span></span> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Jarvan IV</b> plants a flag at the target location that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies.',
      'The flag lingers for a period, emitting an aura that grants <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> to <b>Jarvan</b> and allied champions.',
    ],
    description: [
      {
        description: 'Passive: Jarvan IV gains  bonus attack speed.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Jarvan IV</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Bonus Attack Speed:',
            values: '20 / 22.5 / 25 / 27.5 / 30%',
            valuesHTML:
              '20 / 22.<small>5</small> / 25 / 27.<small>5</small> / 30%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '20 / 22.5 / 25 / 27.5 / 30%',
            values: [20, 22.5, 25, 27.5, 30],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 22.5 / 25 / 27.5 / 30%',
          },
        ],
      },
      {
        icon: '/wiki/images/Demacian_Standard.png',
        description:
          'Active: Jarvan IV throws a Demacian flag to the target location, dealing magic damage to enemies within the area.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Jarvan IV</b> throws a Demacian flag to the target location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within the area.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '80 / 120 / 160 / 200 / 240 (+ 80% AP)',
            valuesHTML:
              '80 / 120 / 160 / 200 / 240 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;80% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 120 / 160 / 200 / 240 (+ 80% AP)',
            damagetype: 'Magic',
            values: [80, 120, 160, 200, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 120 / 160 / 200 / 240',
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
          "The flag then remains for 8 seconds, granting  sight of its surroundings and providing an aura that grants bonus attack speed equal to Demacian Standard's passive to Jarvan IV and all nearby allied champions.",
        descriptionHTML:
          'The flag then remains for 8 seconds, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of its surroundings and providing an <a href="/wiki/Aura" title="Aura">aura</a> that grants <span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span> equal to <i>Demacian Standard\'s</i> passive to <b>Jarvan IV</b> and all nearby allied champions.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: "The flag then remains for 8 seconds, granting  sight of its surroundings and providing an aura that grants bonus attack speed equal to Demacian Standard's passive to Jarvan IV and all nearby allied champions.",
            increasedStat: 'bonus_ad',
            values: 8,
            units: '',
            unitsText:
              "flag then remains for 8 seconds, granting  sight of its surroundings and providing an aura that grants bonus attack speed equal to Demacian Standard's passive to Jarvan IV and all nearby allied champions.",
            pre: "The flag then remains for 8 seconds, granting  sight of its surroundings and providing an aura that grants bonus attack speed equal to Demacian Standard's passive to Jarvan IV and all nearby allied champions.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Demacian Standard will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i>Demacian Standard will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Self, Enemies',
    damagetype: 'Magic',
    spelleffects: 'Aoe',
    spellshield: true,
    notes:
      '* The attack speed granted from a deployed <i>Demacian Standard</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stacks additively"><a href="/wiki/Stacking#Stacks_additively" title="Stacking#Stacks additively"><img alt="Additive stacking icon.png" src="/wiki/images/Additive_stacking_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stacking#Stacks_additively" title="Stacking">stacks additively</a></span> with <i>Demacian Standard\'s</i> passive permanent bonus attack speed to <b>Jarvan</b>, but the aura from multiple <i>Demacian Standards</i> does not stack.\n<ul><li>The flag has 13.<small>6</small> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Pathing radius"><a href="/wiki/Unit_radius" title="Unit radius"><img alt="Pathing radius.png" src="/wiki/images/Pathing_radius.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_radius" title="Unit radius">pathing radius</a></span> and 65 <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Gameplay radius"><a href="/wiki/Unit_radius" title="Unit radius"><img alt="Gameplay radius.png" src="/wiki/images/Gameplay_radius.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_radius" title="Unit radius">gameplay radius</a></span>.\n<ul><li>The gameplay radius matters to <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jarvan IV" data-ability="Dragon Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jarvan_IV/LoL#Dragon_Strike" title="Dragon Strike"><img alt="Dragon Strike" src="/wiki/images/Jarvan_IV_Dragon_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jarvan_IV/LoL#Dragon_Strike" title="Jarvan IV/LoL">Dragon Strike</a></span></span>.</li></ul></li>\n<li><i>Demacian Standard</i> can be targeted by allied abilities (<span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lee Sin" data-ability="Safeguard" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lee_Sin/LoL#Safeguard" title="Safeguard"><img alt="Safeguard" src="/wiki/images/Lee_Sin_Safeguard.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lee_Sin/LoL#Safeguard" title="Lee Sin/LoL">Safeguard</a></span></span>). The target type is the same as a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span>.</li>\n<li><i>Demacian Standard</i> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> to enemies.</li></ul>',
  },
  Cataclysm: {
    name: 'Cataclysm',
    display_name: 'Cataclysm',
    champion: 'Jarvan IV',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'JarvanIVCataclysm.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 144,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '650',
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Terrain creation radius">350</span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Sight range (from center of the whole structure)">1700</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dash speed based on cast distance">Varies</span>',
    cast_time: 'none',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts after terrain disappears">120 / 112.<small>5</small> / 105 / 97.<small>5</small> / 90</span>',
    customlabel: 'Impassable perimeter',
    custominfo:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Pathing radius"><a href="/wiki/Unit_radius" title="Unit radius"><img alt="Pathing radius.png" src="/wiki/images/Pathing_radius.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Inner radius">255</span> to <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Outher radius">445</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jarvan IV" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jarvan_IV/LoL" title="Jarvan IV"><img alt="Jarvan IV" src="/wiki/images/Jarvan_IV_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jarvan_IV/LoL" title="Jarvan IV/LoL">Jarvan IV</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaps</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immune"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">Unstoppably</a></span> to the target enemy champion\'s location, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies upon impact.',
      'He then erects a circle of <a href="/wiki/Terrain" title="Terrain">terrain</a> that lasts for a short time.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Jarvan IV</b> destroys the created terrain.',
    ],
    description: [
      {
        icon: '/wiki/images/Cataclysm.png',
        description:
          "Active: Jarvan IV  leaps with  displacement immunity to the target enemy champion's location over 0.35 seconds, dealing physical damage to all nearby enemies upon arrival.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Jarvan IV</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaps</a></span> with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span> to the target enemy champion\'s location over 0.<small>35</small> seconds, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to all nearby enemies upon arrival.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '200 / 262.5 / 325 / 387.5 / 450 (+ 180% bonus AD)',
            valuesHTML:
              '200 / 262.<small>5</small> / 325 / 387.<small>5</small> / 450 <span style="color:orange; white-space:normal">(+&nbsp;180% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '200 / 262.5 / 325 / 387.5 / 450 (+ 180% bonus AD)',
            damagetype: 'Physical',
            values: [200, 262.5, 325, 387.5, 450],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 262.5 / 325 / 387.5 / 450',
            children: [
              {
                values: 180,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 180% bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Upon impact, he creates a circle of impassable terrain that initially pulls units inside it, though not rendering them  airborne. The terrain lasts for 3.5 seconds and grants  sight of the area. Cataclysm can be recast after 1 second while the terrain is active.',
        descriptionHTML:
          'Upon impact, he creates a circle of impassable terrain that initially pulls units inside it, though not rendering them <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span>. The terrain lasts for 3.<small>5</small> seconds and grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area. <i>Cataclysm</i> can be recast after 1 second while the terrain is active.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'The terrain lasts for 3.5 seconds and grants  sight of the area',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'terrain lasts for 3.5 seconds and grants  sight of the area',
            pre: 'The terrain lasts for 3.5 seconds and grants  sight of the area',
          },
          {
            effectType: 'Unique',
            name: 'Line 3:',
            raw: 'Cataclysm can be recast after 1 second while the terrain is active.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'can be recast after 1 second while the terrain is active.',
            pre: 'Cataclysm can be recast after 1 second while the terrain is active.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Recast: Jarvan IV destroys the terrain created by Cataclysm.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Jarvan IV</b> destroys the terrain created by <i>Cataclysm</i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Self, Enemies',
    damagetype: 'Physical',
    spelleffects: 'Aoe',
    spellshield: true,
    callforhelp: 'True',
    notes:
      '*The initial cast and the manual recast count as ability activations for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li><ul><li>If the ability is not manually recasted, the secondary effect will trigger without being considered as an ability activation.</li></ul></li>\n<li><i>Cataclysm</i> will not deal damage, generate terrain, nor refund its cooldown if <b>Jarvan IV</b> is killed while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaping</a></span>.</li>\n<li>The perimeter is made up of 24 units with 95 <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Pathing radius"><a href="/wiki/Unit_radius" title="Unit radius"><img alt="Pathing radius.png" src="/wiki/images/Pathing_radius.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_radius" title="Unit radius">pathing radius</a></span>, 65 <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Gameplay radius"><a href="/wiki/Unit_radius" title="Unit radius"><img alt="Gameplay radius.png" src="/wiki/images/Gameplay_radius.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_radius" title="Unit radius">gameplay radius</a></span> and 1350 <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> radius each. Only every other unit is rendered visible.</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ornn" data-ability="Searing Charge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ornn/LoL#Searing_Charge" title="Searing Charge"><img alt="Searing Charge" src="/wiki/images/Ornn_Searing_Charge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ornn/LoL#Searing_Charge" title="Ornn/LoL">Searing Charge</a></span></span> will not destroy the whole ring but only the part that <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ornn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ornn/LoL" title="Ornn"><img alt="Ornn" src="/wiki/images/Ornn_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ornn/LoL" title="Ornn/LoL">Ornn</a></span></span> collides with.</li></ul>',
  },
} satisfies { [skillName in string]: SkillData };
