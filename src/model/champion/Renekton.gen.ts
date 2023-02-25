import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Renekton';

export default {
  'Reign of Anger': {
    name: 'Reign of Anger',
    display_name: 'Reign of Anger',
    champion: 'Renekton',
    skill: 'I',
    image: {
      full: 'Renekton_Passive.png',
      sprite: 'passive3.png',
      group: 'passive',
      x: 96,
      y: 48,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renekton" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renekton/LoL" title="Renekton\'s"><img alt="Renekton\'s" src="/wiki/images/Renekton_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renekton/LoL" title="Renekton/LoL">Renekton\'s</a></span></span> basic attacks and ability hits generate <span style="color: #0099CC; white-space:normal"><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless">Fury</a></span></span>, which continually expires after a period without fighting. He generates <span style="color: #FA6533; white-space:normal"><b>bonus</b> Fury</span> while <span style="color: #1F995C; white-space:normal"><b>below</b> half health</span>.',
      'While <b>Renekton</b> has at least <span style="color: #FA6533; white-space:normal">50% Fury</span>, his next basic ability consumes <span style="color: #FA6533; white-space:normal">50% Fury</span> to become empowered with an additional effect.',
    ],
    description: [
      {
        icon: '/wiki/images/Reign of Anger.png',
        description:
          "Innate: Renekton's basic attacks generate  5 Fury. After 12 seconds of being out of combat, he loses 1 Fury every 0.25 seconds.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Renekton\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> generate <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless"><span style="color: #FA6533; white-space:normal">5 Fury</span></a></span>. After 12 seconds of being <a href="/wiki/Out_of_combat" class="mw-redirect" title="Out of combat">out of combat</a>, he loses <span style="color: #FA6533; white-space:normal">1 Fury</span> every 0.<small>25</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Innate:',
            raw: " Renekton's basic attacks generate  5 Fury",
            values: 5,
            units: 'total_ad',
            unitsText: 'basic attacks generate  5 Fury',
            pre: "Renekton's basic attacks generate  5 Fury",
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'After 12 seconds of being out of combat, he loses 1 Fury every 0.25 seconds.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              '12 seconds of being out of combat, he loses 1 Fury every 0.25 seconds.',
            pre: 'After 12 seconds of being out of combat, he loses 1 Fury every 0.25 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'While Renekton has at least 50 Fury, his next basic ability consumes 50 Fury to become empowered with an additional effect. Empowered abilities do not generate Fury.',
        descriptionHTML:
          'While <b>Renekton</b> has at least <span style="color: #FA6533; white-space:normal">50 Fury</span>, his next <a href="/wiki/Champion_ability" title="Champion ability">basic ability</a> consumes <span style="color: #FA6533; white-space:normal">50 Fury</span> to become empowered with an additional effect. Empowered abilities do not generate <span style="color: #FA6533; white-space:normal">Fury</span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'While Renekton has at least 50 Fury, his next basic ability consumes 50 Fury to become empowered with an additional effect',
            damagetype: 'None',
            values: 5,
            units: 'total_ad',
            unitsText:
              'Renekton has at least 50 Fury, his next basic ability consumes 50 Fury to become empowered with an additional effect',
            pre: 'While Renekton has at least 50 Fury, his next basic ability consumes 50 Fury to become empowered with an additional effect',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Renekton generates 50% bonus Fury from all sources while below 50% of his maximum health.',
        descriptionHTML:
          '<b>Renekton</b> generates <span style="color: #FA6533; white-space:normal">50% <b>bonus</b> Fury</span> from all sources while <span style="color: #1F995C; white-space:normal">below 50% of his <b>maximum</b> health</span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: 'Renekton generates 50% bonus Fury from all sources while below 50% of his maximum health.',
            healType: 'BonusHealth',
            values: 5,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'bonus Fury from all sources while below 50generates 50',
            pre: 'Renekton generates 50% bonus Fury from all sources while below 50% of his maximum health.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes:
      '* <i>Renekton</i> generates Fury by collecting <a href="/wiki/Health_Relic_(Howling_Abyss)" class="mw-redirect" title="Health Relic (Howling Abyss)">Health Relics</a> on <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Howling abyss"><a href="/wiki/Howling_Abyss_(League_of_Legends)" title="Howling Abyss (League of Legends)"><img alt="Howling Abyss icon.png" src="/wiki/images/Howling_Abyss_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Howling_Abyss_(League_of_Legends)" title="Howling Abyss (League of Legends)">Howling Abyss</a></span> (interacts with <i>Reign of Anger\'s</i> bonus generation).',
  },
  'Cull the Meek': {
    name: 'Cull the Meek',
    display_name: 'Cull the Meek',
    champion: 'Renekton',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'RenektonCleave.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 192,
      y: 96,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 400 / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="During Dominus">480</span>',
    cast_time: 'none',
    cooldown: '7',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renekton" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renekton/LoL" title="Renekton"><img alt="Renekton" src="/wiki/images/Renekton_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renekton/LoL" title="Renekton/LoL">Renekton</a></span></span> cleaves around himself, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies. He also generates <span style="color: #FA6533; white-space:normal">Fury</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> for each enemy hit, increased against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renekton" data-ability="Reign of Anger" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renekton/LoL#Reign_of_Anger" title="Reign of Anger"><img alt="Reign of Anger" src="/wiki/images/Renekton_Reign_of_Anger.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renekton/LoL#Reign_of_Anger" title="Renekton/LoL">Reign of Anger</a></span></span> Bonus:</b></span> <i>Cull the Meek</i> has increased damage and healing.',
    ],
    description: [
      {
        icon: '/wiki/images/Cull the Meek.png',
        description:
          'Active: Renekton cleaves around himself, dealing physical damage to nearby enemies and  healing himself for each enemy hit, up to a cap.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Renekton</b> cleaves around himself, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> himself for each enemy hit, up to a cap.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '60 / 90 / 120 / 150 / 180 (+ 100% bonus AD)',
            valuesHTML:
              '60 / 90 / 120 / 150 / 180 <span style="color:orange; white-space:normal">(+&nbsp;100% <b>bonus</b> AD)</span>',
          },
          {
            name: 'Healing Cap:',
            values: '50 / 75 / 100 / 125 / 150',
            valuesHTML: '50 / 75 / 100 / 125 / 150',
          },
          {
            name: 'Non-Champion Healing:',
            values: '2 / 3 / 4 / 5 / 6 (+ 2% bonus AD)',
            valuesHTML:
              '2 / 3 / 4 / 5 / 6 <span style="color:orange; white-space:normal">(+&nbsp;2% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '60 / 90 / 120 / 150 / 180 (+ 100% bonus AD)',
            damagetype: 'Physical',
            values: [60, 90, 120, 150, 180],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 90 / 120 / 150 / 180',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 100% bonus AD',
              },
            ],
          },
          {
            effectType: 'Heal',
            name: 'Healing Cap:',
            raw: '50 / 75 / 100 / 125 / 150',
            healType: 'DrainEffect',
            values: [50, 75, 100, 125, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 75 / 100 / 125 / 150',
          },
          {
            effectType: 'Heal',
            name: 'Non-Champion Healing:',
            raw: '2 / 3 / 4 / 5 / 6 (+ 2% bonus AD)',
            healType: 'BonusHealth',
            values: [2, 3, 4, 5, 6],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '2 / 3 / 4 / 5 / 6',
            children: [
              {
                values: 2,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 2% bonus AD',
              },
            ],
          },
        ],
      },
      {
        description: 'Against  champions, the healing is increased by 300%.',
        descriptionHTML:
          'Against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, the healing is increased by 300%.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: 'Against  champions, the healing is increased by 300%.',
            healType: 'DrainEffect',
            values: 3,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '. champions, the healing is increased by 300',
            pre: 'Against  champions, the healing is increased by 300%.',
          },
        ],
        leveling: [
          {
            name: 'Champion Healing:',
            values: '12 / 18 / 24 / 30 / 36 (+ 15% bonus AD)',
            valuesHTML:
              '12 / 18 / 24 / 30 / 36 <span style="color:orange; white-space:normal">(+&nbsp;15% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Champion Healing:',
            raw: '12 / 18 / 24 / 30 / 36 (+ 15% bonus AD)',
            healType: 'BonusHealth',
            values: [12, 18, 24, 30, 36],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '12 / 18 / 24 / 30 / 36',
            children: [
              {
                values: 15,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 15% bonus AD',
              },
            ],
          },
        ],
      },
      {
        description:
          'Renekton generates  2.5 Fury for each non-champion hit and 10 Fury for each champion hit, with the Fury generated per cast capped at 30.',
        descriptionHTML:
          '<b>Renekton</b> generates <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless"><span style="color: #FA6533; white-space:normal">2.<small>5</small> Fury</span></a></span> for each non-champion hit and <span style="color: #FA6533; white-space:normal">10 Fury</span> for each champion hit, with the <span style="color: #FA6533; white-space:normal">Fury</span> generated per cast capped at <span style="color: #FA6533; white-space:normal">30</span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Renekton generates  2.5 Fury for each non-champion hit and 10 Fury for each champion hit, with the Fury generated per cast capped at 30.',
            damagetype: 'None',
            values: 2,
            units: 'total_ap',
            unitsText:
              'generates  2.5 Fury for each non-champion hit and 10 Fury for each champion hit, with the Fury generated per cast capped at 30.',
            pre: 'Renekton generates  2.5 Fury for each non-champion hit and 10 Fury for each champion hit, with the Fury generated per cast capped at 30.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Reign of Anger Bonus: Cull the Meek has increased damage, tripled total healing, and a quadrupled healing cap.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renekton" data-ability="Reign of Anger" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renekton/LoL#Reign_of_Anger" title="Reign of Anger"><img alt="Reign of Anger" src="/wiki/images/Renekton_Reign_of_Anger.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renekton/LoL#Reign_of_Anger" title="Renekton/LoL">Reign of Anger</a></span></span> Bonus:</b></span> <i>Cull the Meek</i> has increased damage, tripled <b>total</b> healing, and a quadrupled healing cap.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Renekton cannot basic attack nor cast  Slice,  Dice, or  Dominus for 0.25 seconds after Cull the Meek's activation.",
        descriptionHTML:
          '<i><b>Renekton</b> cannot basic attack nor cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renekton" data-ability="Slice" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renekton/LoL#Slice" title="Slice"><img alt="Slice" src="/wiki/images/Renekton_Slice.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renekton/LoL#Slice" title="Renekton/LoL">Slice</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renekton" data-ability="Dice" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renekton/LoL#Dice" title="Dice"><img alt="Dice" src="/wiki/images/Renekton_Dice.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renekton/LoL#Dice" title="Renekton/LoL">Dice</a></span></span>, or <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renekton" data-ability="Dominus" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renekton/LoL#Dominus" title="Dominus"><img alt="Dominus" src="/wiki/images/Renekton_Dominus.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renekton/LoL#Dominus" title="Renekton/LoL">Dominus</a></span></span> for 0.<small>25</small> seconds after Cull the Meek\'s activation.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies / Self',
    damagetype: 'Physical',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes:
      '* Healing modifiers such as <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Spirit Visage" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Spirit_Visage" title="Spirit Visage"><img alt="Spirit Visage" src="/wiki/images/Spirit_Visage_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Spirit_Visage" title="Spirit Visage">Spirit Visage</a></span></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Grievous wounds"><a href="/wiki/Grievous_Wounds" title="Grievous Wounds"><img alt="Grievous Wounds icon.png" src="/wiki/images/Grievous_Wounds_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Grievous_Wounds" title="Grievous Wounds">Grievous Wounds</a></span> take effect after <i>Cull the Meek\'s</i> healing cap.',
  },
  'Ruthless Predator': {
    name: 'Ruthless Predator',
    display_name: 'Ruthless Predator',
    champion: 'Renekton',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'RenektonPreExecute.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 240,
      y: 96,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">16 / 14 / 12 / 10 / 8</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renekton" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renekton/LoL" title="Renekton\'s"><img alt="Renekton\'s" src="/wiki/images/Renekton_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renekton/LoL" title="Renekton/LoL">Renekton\'s</a></span></span> next basic attack within a few seconds will strike twice, dealing <span style="color: #FF8C34; white-space:normal"><b>modified</b> physical damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> the target.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renekton" data-ability="Reign of Anger" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renekton/LoL#Reign_of_Anger" title="Reign of Anger"><img alt="Reign of Anger" src="/wiki/images/Renekton_Reign_of_Anger.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renekton/LoL#Reign_of_Anger" title="Renekton/LoL">Reign of Anger</a></span></span> Bonus:</b></span> <b>Renekton</b> instead strikes 3 times with increased stun duration, destroying damage <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shields"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span> on the target before dealing damage.',
    ],
    description: [
      {
        icon: '/wiki/images/Ruthless Predator.png',
        description:
          'Active: Renekton empowers his next basic attack within 7 seconds to have a 0.2-second cast time, gain  50 bonus range and strike the target twice, dealing modified physical damage and  stunning them for 0.75 seconds. Each strike applies  on-hit effects at 100% effectiveness and generates  Fury. Hitting an enemy  champion generates 10 bonus Fury.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Renekton</b> empowers his next basic attack within 7 seconds to have a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="(Estimated)">0.<small>2</small>-second cast time</span>, gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50 <b>bonus</b> range</span> and strike the target twice, dealing <span style="color: #FF8C34; white-space:normal"><b>modified</b> physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 0.<small>75</small> seconds. Each strike applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects at 100% effectiveness and generates <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless"><span style="color: #FA6533; white-space:normal">Fury</span></a></span>. Hitting an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> generates <span style="color: #FA6533; white-space:normal">10 <b>bonus</b> Fury</span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Renekton empowers his next basic attack within 7 seconds to have a 0.2-second cast time, gain  50 bonus range and strike the target twice, dealing modified physical damage and  stunning them for 0.75 seconds',
            increasedStat: 'bonus_ad',
            values: 7,
            user: 'target',
            units: '',
            unitsText:
              'empowers his next basic attack within 7 seconds to have a 0.2-second cast time, gain  50 bonus range and strike the target twice, dealing modified physical damage and  stunning them for 0.75 seconds',
            pre: 'Renekton empowers his next basic attack within 7 seconds to have a 0.2-second cast time, gain  50 bonus range and strike the target twice, dealing modified physical damage and  stunning them for 0.75 seconds',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Each strike applies  on-hit effects at 100% effectiveness and generates  Fury',
            damagetype: 'None',
            values: 1,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              'effectiveness and generates  Furystrike applies  on-hit effects at 100',
            pre: 'Each strike applies  on-hit effects at 100% effectiveness and generates  Fury',
          },
          {
            effectType: 'Unique',
            name: 'Line 3:',
            raw: 'Hitting an enemy  champion generates 10 bonus Fury.',
            values: 1,
            user: 'none',
            units: '',
            unitsText: 'an enemy  champion generates 10 bonus Fury.',
            pre: 'Hitting an enemy  champion generates 10 bonus Fury.',
          },
        ],
        leveling: [
          {
            name: 'Total Physical Damage:',
            values: '10 / 40 / 70 / 100 / 130 (+ 150% AD)',
            valuesHTML:
              '10 / 40 / 70 / 100 / 130 <span style="color:orange; white-space:normal">(+&nbsp;150% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Total Physical Damage:',
            raw: '10 / 40 / 70 / 100 / 130 (+ 150% AD)',
            damagetype: 'Physical',
            values: [10, 40, 70, 100, 130],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 40 / 70 / 100 / 130',
            children: [
              {
                values: 150,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 150% AD',
              },
            ],
          },
        ],
      },
      {
        description:
          'Reign of Anger Bonus: Renekton instead strikes 3 times, completely destroying damage-mitigating  shields on the target upon the first strike, as well as increasing the  stun duration to 1.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renekton" data-ability="Reign of Anger" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renekton/LoL#Reign_of_Anger" title="Reign of Anger"><img alt="Reign of Anger" src="/wiki/images/Renekton_Reign_of_Anger.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renekton/LoL#Reign_of_Anger" title="Renekton/LoL">Reign of Anger</a></span></span> Bonus:</b></span> <b>Renekton</b> instead strikes 3 times, completely destroying damage-mitigating <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span> on the target upon the first strike, as well as increasing the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> duration to 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Reign of Anger Bonus:',
            raw: ' Renekton instead strikes 3 times, completely destroying damage-mitigating  shields on the target upon the first strike, as well as increasing the  stun duration to 1.5 seconds.',
            damagetype: 'None',
            shieldType: 'OutgoingShields',
            values: 3,
            user: 'target',
            units: 'total_ad',
            unitsText:
              'instead strikes 3 times, completely destroying damage-mitigating  shields on the target upon the first strike, as well as increasing the  stun duration to 1.5 seconds.',
            pre: 'Renekton instead strikes 3 times, completely destroying damage-mitigating  shields on the target upon the first strike, as well as increasing the  stun duration to 1.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Total Physical Damage:',
            values: '15 / 60 / 105 / 150 / 195 (+ 225% AD)',
            valuesHTML:
              '15 / 60 / 105 / 150 / 195 <span style="color:orange; white-space:normal">(+&nbsp;225% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Total Physical Damage:',
            raw: '15 / 60 / 105 / 150 / 195 (+ 225% AD)',
            damagetype: 'Physical',
            values: [15, 60, 105, 150, 195],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 60 / 105 / 150 / 195',
            children: [
              {
                values: 225,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 225% AD',
              },
            ],
          },
        ],
      },
      {
        description:
          "Ruthless Predator  resets Renekton's basic attack timer. After Ruthless Predator's standard and empowered attack cast time, Renekton cannot move nor cast  Cull the Meek,  Slice, nor  Dice for 0.528 seconds.",
        descriptionHTML:
          '<i>Ruthless Predator <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Renekton\'s</b> basic attack timer. After Ruthless Predator\'s standard and empowered attack cast time, <b>Renekton</b> cannot move nor cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renekton" data-ability="Cull the Meek" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renekton/LoL#Cull_the_Meek" title="Cull the Meek"><img alt="Cull the Meek" src="/wiki/images/Renekton_Cull_the_Meek.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renekton/LoL#Cull_the_Meek" title="Renekton/LoL">Cull the Meek</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renekton" data-ability="Slice" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renekton/LoL#Slice" title="Slice"><img alt="Slice" src="/wiki/images/Renekton_Slice.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renekton/LoL#Slice" title="Renekton/LoL">Slice</a></span></span>, nor <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renekton" data-ability="Dice" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renekton/LoL#Dice" title="Dice"><img alt="Dice" src="/wiki/images/Renekton_Dice.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renekton/LoL#Dice" title="Renekton/LoL">Dice</a></span></span> for <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.525 seconds, but rounded up to the next game tick.">0.<small>528</small> seconds</span>.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies / Self',
    damagetype: 'Physical',
    spelleffects: 'Proc',
    spellshield: true,
    notes:
      '* The basic attack can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> as normal (the modified damage cannot).\n<ul><li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span> during the empowered attack\'s cast time, it is cancelled but not consumed.</li>\n<li>The empowered attack will not trigger against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.</li></ul>',
  },
  Slice: {
    name: 'Slice',
    display_name: 'Slice',
    champion: 'Renekton',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'RenektonSliceAndDice.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 288,
      y: 96,
      w: 48,
      h: 48,
    },
    range: '450',
    speed:
      '760 + <span style="color: #F5EE99; white-space:normal">100% movement speed</span>',
    cast_time: 'none',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">18 / 17 / 16 / 15 / 14</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renekton" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renekton/LoL" title="Renekton"><img alt="Renekton" src="/wiki/images/Renekton_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renekton/LoL" title="Renekton/LoL">Renekton</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies he passes through.',
      'If he hits an enemy, he can cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renekton" data-ability="Dice" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renekton/LoL#Dice" title="Dice"><img alt="Dice" src="/wiki/images/Renekton_Dice.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renekton/LoL#Dice" title="Renekton/LoL">Dice</a></span></span></i> within the next few seconds.',
    ],
    description: [
      {
        icon: '/wiki/images/Slice.png',
        description:
          'Active: Renekton  dashes a fixed distance in the target direction, dealing physical damage to enemies he passes through.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Renekton</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> a fixed distance in the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies he passes through.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '40 / 70 / 100 / 130 / 160 (+ 90% bonus AD)',
            valuesHTML:
              '40 / 70 / 100 / 130 / 160 <span style="color:orange; white-space:normal">(+&nbsp;90% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '40 / 70 / 100 / 130 / 160 (+ 90% bonus AD)',
            damagetype: 'Physical',
            values: [40, 70, 100, 130, 160],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 70 / 100 / 130 / 160',
            children: [
              {
                values: 90,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 90% bonus AD',
              },
            ],
          },
        ],
      },
      {
        description:
          'If Renekton hits an enemy, he can cast Dice within the next 4 seconds.',
        descriptionHTML:
          'If <b>Renekton</b> hits an enemy, he can cast <i>Dice</i> within the next 4 seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'If Renekton hits an enemy, he can cast Dice within the next 4 seconds.',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'Renekton hits an enemy, he can cast Dice within the next 4 seconds.',
            pre: 'If Renekton hits an enemy, he can cast Dice within the next 4 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes: '* No additional details.',
  },
  Dice: {
    name: 'Dice',
    display_name: 'Dice',
    champion: 'Renekton',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'RenektonSliceAndDice.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 288,
      y: 96,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renekton" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renekton/LoL" title="Renekton"><img alt="Renekton" src="/wiki/images/Renekton_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renekton/LoL" title="Renekton/LoL">Renekton</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies he passes through.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renekton" data-ability="Reign of Anger" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renekton/LoL#Reign_of_Anger" title="Reign of Anger"><img alt="Reign of Anger" src="/wiki/images/Renekton_Reign_of_Anger.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renekton/LoL#Reign_of_Anger" title="Renekton/LoL">Reign of Anger</a></span></span> Bonus:</b></span> <i>Dice</i> deals additional damage and <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">reduces enemy armor</span></span> for a few seconds.',
    ],
    description: [
      {
        icon: '/wiki/images/Dice.png',
        description:
          'Active: Renekton  dashes a fixed distance in the target direction, dealing the same physical damage to enemies he passes through.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Renekton</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> a fixed distance in the target direction, dealing the same <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies he passes through.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Total Physical Damage:',
            values: '80 / 140 / 200 / 260 / 320 (+ 180% bonus AD)',
            valuesHTML:
              '80 / 140 / 200 / 260 / 320 <span style="color:orange; white-space:normal">(+&nbsp;180% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Total Physical Damage:',
            raw: '80 / 140 / 200 / 260 / 320 (+ 180% bonus AD)',
            damagetype: 'Physical',
            values: [80, 140, 200, 260, 320],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 140 / 200 / 260 / 320',
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
        description:
          'Both Slice and Dice generate  2 Fury for each non-champion hit, and 10 Fury for each champion hit, with the Fury generated per dash capped at 30.',
        descriptionHTML:
          'Both <i>Slice</i> and <i>Dice</i> generate <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless"><span style="color: #FA6533; white-space:normal">2 Fury</span></a></span> for each non-champion hit, and <span style="color: #FA6533; white-space:normal">10 Fury</span> for each champion hit, with the <span style="color: #FA6533; white-space:normal">Fury</span> generated per dash capped at 30.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Both Slice and Dice generate  2 Fury for each non-champion hit, and 10 Fury for each champion hit, with the Fury generated per dash capped at 30.',
            damagetype: 'None',
            values: 2,
            units: 'total_ap',
            unitsText:
              'Slice and Dice generate  2 Fury for each non-champion hit, and 10 Fury for each champion hit, with the Fury generated per dash capped at 30.',
            pre: 'Both Slice and Dice generate  2 Fury for each non-champion hit, and 10 Fury for each champion hit, with the Fury generated per dash capped at 30.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Reign of Anger Bonus: Dice deals bonus physical damage and inflicts  armor reduction to enemies hit for 4 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renekton" data-ability="Reign of Anger" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renekton/LoL#Reign_of_Anger" title="Reign of Anger"><img alt="Reign of Anger" src="/wiki/images/Renekton_Reign_of_Anger.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renekton/LoL#Reign_of_Anger" title="Renekton/LoL">Reign of Anger</a></span></span> Bonus:</b></span> <i>Dice</i> deals <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> and inflicts <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor reduction</span></span> to enemies hit for 4 seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Reign of Anger Bonus:',
            raw: ' Dice deals bonus physical damage and inflicts  armor reduction to enemies hit for 4 seconds.',
            damagetype: 'Physical',
            values: 4,
            units: 'bonus_armor',
            unitsText:
              'deals bonus physical damage and inflicts  armor reduction to enemies hit for 4 seconds.',
            pre: 'Dice deals bonus physical damage and inflicts  armor reduction to enemies hit for 4 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Physical Damage:',
            values: '30 / 45 / 60 / 75 / 90 (+ 45% bonus AD)',
            valuesHTML:
              '30 / 45 / 60 / 75 / 90 <span style="color:orange; white-space:normal">(+&nbsp;45% <b>bonus</b> AD)</span>',
          },
          {
            name: 'Armor Reduction:',
            values: "25 / 27.5 / 30 / 32.5 / 35% of target's armor",
            valuesHTML:
              '<span style="color:yellow; white-space:normal">25 / 27.<small>5</small> / 30 / 32.<small>5</small> / 35% of target\'s armor</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Physical Damage:',
            raw: '30 / 45 / 60 / 75 / 90 (+ 45% bonus AD)',
            damagetype: 'Physical',
            values: [30, 45, 60, 75, 90],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 45 / 60 / 75 / 90',
            children: [
              {
                values: 45,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 45% bonus AD',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Armor Reduction:',
            raw: "25 / 27.5 / 30 / 32.5 / 35% of target's armor",
            values: [25, 27.5, 30, 32.5, 35],
            valuesIsPercent: true,
            user: 'target',
            units: 'total_armor',
            unitsText: "of target's armor",
            pre: "25 / 27.5 / 30 / 32.5 / 35% of target's armor",
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes: '* No additional details.',
  },
  Dominus: {
    name: 'Dominus',
    display_name: 'Dominus',
    champion: 'Renekton',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'RenektonReignOfTheTyrant.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 336,
      y: 96,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 375',
    cast_time: '0.<small>25</small>',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">120</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renekton" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renekton/LoL" title="Renekton"><img alt="Renekton" src="/wiki/images/Renekton_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renekton/LoL" title="Renekton/LoL">Renekton</a></span></span> empowers himself for some time, gaining <span style="color: #FA6533; white-space:normal">Fury</span>, <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">bonus health</span></span>, bonus <a href="/wiki/Size" title="Size">size</a>, <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack range</span>, and increased area on <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renekton" data-ability="Cull the Meek" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renekton/LoL#Cull_the_Meek" title="Cull the Meek"><img alt="Cull the Meek" src="/wiki/images/Renekton_Cull_the_Meek.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renekton/LoL#Cull_the_Meek" title="Renekton/LoL">Cull the Meek</a></span></span></i>.',
      'During this time, <b>Renekton</b> creates an aura that continually deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies. He also continually generates <span style="color: #FA6533; white-space:normal">Fury</span>, up to a cap.',
    ],
    description: [
      {
        icon: '/wiki/images/Dominus.png',
        description:
          "Active: Renekton empowers himself for 15 seconds, gaining  bonus health, 20% increased size,  25 bonus attack range, and  20 Fury, as well as increasing  Cull the Meek's effect radius.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Renekton</b> empowers himself for 15 seconds, gaining <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> health</span></span>, 20% increased <a href="/wiki/Size" title="Size">size</a>, <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;25 <b>bonus</b> attack range</span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless"><span style="color: #FA6533; white-space:normal">20 Fury</span></a></span>, as well as increasing <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renekton" data-ability="Cull the Meek" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renekton/LoL#Cull_the_Meek" title="Cull the Meek\'s"><img alt="Cull the Meek\'s" src="/wiki/images/Renekton_Cull_the_Meek.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renekton/LoL#Cull_the_Meek" title="Renekton/LoL">Cull the Meek\'s</a></span></span></i> effect radius.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Active:',
            raw: " Renekton empowers himself for 15 seconds, gaining  bonus health, 20% increased size,  25 bonus attack range, and  20 Fury, as well as increasing  Cull the Meek's effect radius.",
            healType: 'BonusHealth',
            values: 1,
            valuesIsPercent: true,
            units: 'bonus_ad',
            unitsText:
              "increased size,  25 bonus attack range, and  20 Fury, as well as increasing  Cull the Meek's effect radius.empowers himself for 15 seconds, gaining  bonus health, 20",
            pre: "Renekton empowers himself for 15 seconds, gaining  bonus health, 20% increased size,  25 bonus attack range, and  20 Fury, as well as increasing  Cull the Meek's effect radius.",
          },
        ],
        leveling: [
          {
            name: 'Bonus Health:',
            values: '250 / 325 / 400 / 475 / 550',
            valuesHTML: '250 / 325 / 400 / 475 / 550',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Bonus Health:',
            raw: '250 / 325 / 400 / 475 / 550',
            healType: 'BonusHealth',
            values: [250, 325, 400, 475, 550],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '250 / 325 / 400 / 475 / 550',
          },
        ],
      },
      {
        description:
          'During this time, he deals magic damage every 0.5 seconds to nearby enemies and generates 5 Fury per second, up to a maximum of 75 Fury.',
        descriptionHTML:
          'During this time, he deals <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>5</small> seconds to nearby enemies and generates <span style="color: #FA6533; white-space:normal">5 Fury</span> per second, up to a maximum of <span style="color: #FA6533; white-space:normal">75 Fury</span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage Per Tick:',
            values: '25 / 37.5 / 50 / 62.5 / 75 (+ 5% bonus AD) (+ 5% AP)',
            valuesHTML:
              '25 / 37.<small>5</small> / 50 / 62.<small>5</small> / 75 <span style="color:orange; white-space:normal">(+&nbsp;5% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;5% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Tick:',
            raw: '25 / 37.5 / 50 / 62.5 / 75 (+ 5% bonus AD) (+ 5% AP)',
            damagetype: 'Magic',
            values: [25, 37.5, 50, 62.5, 75],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 37.5 / 50 / 62.5 / 75',
            children: [
              {
                values: 5,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 5% bonus AD',
              },
              {
                values: 5,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 5% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies / Self',
    damagetype: 'Magic',
    spelleffects: 'aoedot',
    spellshield: false,
    notes:
      '* <i>Dominus\' </i>range increase does not stack with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renekton" data-ability="Ruthless Predator" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renekton/LoL#Ruthless_Predator" title="Ruthless Predator"><img alt="Ruthless Predator" src="/wiki/images/Renekton_Ruthless_Predator.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renekton/LoL#Ruthless_Predator" title="Renekton/LoL">Ruthless Predator</a></span></span>.\n<ul><li><i>Dominus\' </i><span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is not refunded if <b>Renekton</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span> during the cast animation.</li>\n<li><i>Dominus\' </i>bonus health gain does not interact with <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Spirit Visage" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Spirit_Visage" title="Spirit Visage"><img alt="Spirit Visage" src="/wiki/images/Spirit_Visage_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Spirit_Visage" title="Spirit Visage">Spirit Visage</a></span></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Grievous wounds"><a href="/wiki/Grievous_Wounds" title="Grievous Wounds"><img alt="Grievous Wounds icon.png" src="/wiki/images/Grievous_Wounds_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Grievous_Wounds" title="Grievous Wounds">Grievous Wounds</a></span>.\n<ul><li><b>Renekton</b> retains <i>Dominus\' </i>bonus health (if not over his normal maximum) once the duration ends.</li></ul></li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Renekton_Original_ReignOfTheTyrant_2.ogg   "I will tear the world asunder!"',
  },
} satisfies { [skillName in string]: SkillData };
