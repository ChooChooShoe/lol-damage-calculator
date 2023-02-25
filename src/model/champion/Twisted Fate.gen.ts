import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Twisted Fate';

export default {
  'Loaded Dice': {
    name: 'Loaded Dice',
    display_name: 'Loaded Dice',
    champion: 'Twisted Fate',
    skill: 'I',
    image: {
      full: 'Cardmaster_SealFate.png',
      sprite: 'passive4.png',
      group: 'passive',
      x: 144,
      y: 48,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> Whenever <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twisted Fate" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twisted_Fate/LoL" title="Twisted Fate"><img alt="Twisted Fate" src="/wiki/images/Twisted_Fate_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twisted_Fate/LoL" title="Twisted Fate/LoL">Twisted Fate</a></span></span> kills an enemy, he generates a small amount of <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="bonus gold Gold"><img alt="bonus gold Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;"><b>bonus</b> gold</span></span> based on chance.',
      '<small><i>Since his dice are loaded, <b>Twisted Fate</b> has an increased chance of gaining <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="maximum gold Gold"><img alt="maximum gold Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;"><b>maximum</b> gold</span></span>.</i></small>',
    ],
    description: [
      {
        icon: '/wiki/images/Loaded Dice.png',
        description:
          'Innate: Whenever Twisted Fate kills an enemy, he generates 1 − 6 (based on probability).',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> Whenever <b>Twisted Fate</b> kills an enemy, he generates <span class="inline-image" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="Gold"><img alt="Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span></span><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#FFD700;" data-top_label="probability" data-bot_values="1;2;3;4;5;6" data-top_values="13.33;13.33;13.33;13.33;13.33;33.33" data-top_key="%">1 − 6 (based on probability)</span>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Innate:',
            raw: ' Whenever Twisted Fate kills an enemy, he generates 1 − 6 (based on probability).',
            values: [1, 6],
            basedOn: 'probability',
            user: 'none',
            units: '',
            unitsText: '.',
            pre: 'Whenever Twisted Fate kills an enemy, he generates 1 − 6',
            post: '.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Since his dice are loaded, Twisted Fate has an increased chance of gaining  6.',
        descriptionHTML:
          '<i>Since his dice are loaded, <b>Twisted Fate</b> has an increased chance of gaining <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="6 Gold"><img alt="6 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">6</span></span>.</i>',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Since his dice are loaded, Twisted Fate has an increased chance of gaining  6.',
            increasedStat: 'total_ad',
            values: 6,
            units: '',
            unitsText:
              'his dice are loaded, Twisted Fate has an increased chance of gaining  6.',
            pre: 'Since his dice are loaded, Twisted Fate has an increased chance of gaining  6.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes:
      '* The expected bonus gold gained per unit killed is <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="4 Gold"><img alt="4 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">4</span></span>.',
  },
  'Wild Cards': {
    name: 'Wild Cards',
    display_name: 'Wild Cards',
    champion: 'Twisted Fate',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'WildCards.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 384,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '1450',
    angle: '45°',
    speed: '1000',
    cast_time: '0.<small>25</small>',
    cost: '60 / 70 / 80 / 90 / 100',
    costtype: 'Mana',
    cooldown:
      '6 / 5.<small>75</small> / 5.<small>5</small> / 5.<small>25</small> / 5',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twisted Fate" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twisted_Fate/LoL" title="Twisted Fate"><img alt="Twisted Fate" src="/wiki/images/Twisted_Fate_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twisted_Fate/LoL" title="Twisted Fate/LoL">Twisted Fate</a></span></span> throws a fan of three cards in the target direction that each deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
    ],
    description: [
      {
        icon: '/wiki/images/Wild Cards.png',
        description:
          'Active: Twisted Fate throws a fan of three cards in a cone in the target direction that each deal magic damage to enemies hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Twisted Fate</b> throws a fan of three cards in a cone in the target direction that each deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '60 / 100 / 140 / 180 / 220 (+ 80% AP)',
            valuesHTML:
              '60 / 100 / 140 / 180 / 220 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;80% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 100 / 140 / 180 / 220 (+ 80% AP)',
            damagetype: 'Magic',
            values: [60, 100, 140, 180, 220],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 100 / 140 / 180 / 220',
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
        description: 'Enemies can be damaged only once per pass.',
        descriptionHTML: '<i>Enemies can be damaged only once per pass.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Area of effect',
    spellshield: true,
    projectile: 'True',
    notes:
      '* This ability will cast from wherever the caster is at the end of the cast time.',
  },
  'Pick a Card': {
    name: 'Pick a Card',
    display_name: 'Pick a Card',
    champion: 'Twisted Fate',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'PickACard.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 432,
      y: 96,
      w: 48,
      h: 48,
    },
    effect_radius: '100',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Attack missile speed, same as basic attacks">1500</span>',
    cast_time: 'none',
    cost: '30 / 40 / 50 / 60 / 70',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">8 / 7.<small>5</small> / 7 / 6.<small>5</small> / 6</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twisted Fate" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twisted_Fate/LoL" title="Twisted Fate"><img alt="Twisted Fate" src="/wiki/images/Twisted_Fate_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twisted_Fate/LoL" title="Twisted Fate/LoL">Twisted Fate</a></span></span> cycles through three cards over the next few seconds. <i>Pick a Card</i> can be recast within the duration, which selects the current card hovered.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Twisted Fate\'s</b> next basic attack becomes empowered to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> and apply an additional effect based on the card selected.\n<ul><li><img alt="Blue Card.png" src="/wiki/images/Twisted_Fate_Blue_Card.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> <span class="template_sbc"><b>Blue Card Bonus:</b></span> Deals significantly increased <span style="color: #00B0F0; white-space:normal">magic damage</span> and restores <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana</span></span>.</li>\n<li><img alt="Red Card.png" src="/wiki/images/Twisted_Fate_Red_Card.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> <span class="template_sbc"><b>Red Card Bonus:</b></span> Deals increased <span style="color: #00B0F0; white-space:normal">magic damage</span> to the target and surrounding enemies, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them for a short time.</li>\n<li><img alt="Gold Card.png" src="/wiki/images/Twisted_Fate_Gold_Card.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> <span class="template_sbc"><b>Gold Card Bonus:</b></span> Deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> the target.</li></ul>',
    ],
    description: [
      {
        icon: '/wiki/images/Pick a Card.png',
        description:
          'Active: Twisted Fate cycles through three cards for 6 seconds, hovering each for 0.5 seconds at a time. Pick a Card can be recast within the duration, which selects the current card hovered.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Twisted Fate</b> cycles through three cards for 6 seconds, hovering each for 0.<small>5</small> seconds at a time. <i>Pick a Card</i> can be recast within the duration, which selects the current card hovered.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: ' Twisted Fate cycles through three cards for 6 seconds, hovering each for 0.5 seconds at a time',
            values: 6,
            user: 'none',
            units: '',
            unitsText:
              'Fate cycles through three cards for 6 seconds, hovering each for 0.5 seconds at a time',
            pre: 'Twisted Fate cycles through three cards for 6 seconds, hovering each for 0.5 seconds at a time',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Twisted Fate Pick a Card.gif',
        description:
          'Recast: Twisted Fate empowers his next basic attack within 6 seconds to have a 0.25-second cast time, deal modified magic damage, and apply an additional effect based on the card selected, though not being able to  critically strike.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Twisted Fate</b> empowers his next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> within 6 seconds to have a 0.<small>25</small>-second cast time, deal <span style="color: #00B0F0; white-space:normal"><b>modified</b> magic damage</span>, and apply an additional effect based on the card selected, though not being able to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Recast:',
            raw: ' Twisted Fate empowers his next basic attack within 6 seconds to have a 0.25-second cast time, deal modified magic damage, and apply an additional effect based on the card selected, though not being able to  critically strike.',
            damagetype: 'Magic',
            values: 6,
            units: 'total_ap',
            unitsText:
              'Fate empowers his next basic attack within 6 seconds to have a 0.25-second cast time, deal modified magic damage, and apply an additional effect based on the card selected, though not being able to  critically strike.',
            pre: 'Twisted Fate empowers his next basic attack within 6 seconds to have a 0.25-second cast time, deal modified magic damage, and apply an additional effect based on the card selected, though not being able to  critically strike.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Blue Card.png',
        description: 'Blue Card Bonus: Restores  mana.',
        descriptionHTML:
          '<span class="template_sbc"><b>Blue Card Bonus:</b></span> Restores <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana</span></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '40 / 60 / 80 / 100 / 120 (+ 100% AD) (+ 115% AP)',
            valuesHTML:
              '40 / 60 / 80 / 100 / 120 <span style="color:orange; white-space:normal">(+&nbsp;100% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;115% AP)</span>',
          },
          {
            name: 'Mana Restored:',
            values: '50 / 75 / 100 / 125 / 150',
            valuesHTML:
              '<span style="color: #0099CC; white-space:normal">50 / 75 / 100 / 125 / 150</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '40 / 60 / 80 / 100 / 120 (+ 100% AD) (+ 115% AP)',
            damagetype: 'Magic',
            values: [40, 60, 80, 100, 120],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 60 / 80 / 100 / 120',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 100% AD',
              },
              {
                values: 115,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 115% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Mana Restored:',
            raw: '50 / 75 / 100 / 125 / 150',
            values: [50, 75, 100, 125, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 75 / 100 / 125 / 150',
          },
        ],
      },
      {
        icon: '/wiki/images/Red Card.png',
        description:
          'Red Card Bonus: Deals magic damage to the target and surrounding enemies,  slowing them for 2.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Red Card Bonus:</b></span> Deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the target and surrounding enemies, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them for 2.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Red Card Bonus:',
            raw: ' Deals magic damage to the target and surrounding enemies,  slowing them for 2.5 seconds.',
            damagetype: 'Magic',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'magic damage to the target and surrounding enemies,  slowing them for 2.5 seconds.',
            pre: 'Deals magic damage to the target and surrounding enemies,  slowing them for 2.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '30 / 45 / 60 / 75 / 90 (+ 100% AD) (+ 70% AP)',
            valuesHTML:
              '30 / 45 / 60 / 75 / 90 <span style="color:orange; white-space:normal">(+&nbsp;100% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;70% AP)</span>',
          },
          {
            name: 'Slow:',
            values: '30 / 35 / 40 / 45 / 50%',
            valuesHTML: '30 / 35 / 40 / 45 / 50%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '30 / 45 / 60 / 75 / 90 (+ 100% AD) (+ 70% AP)',
            damagetype: 'Magic',
            values: [30, 45, 60, 75, 90],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 45 / 60 / 75 / 90',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 100% AD',
              },
              {
                values: 70,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 70% AP',
              },
            ],
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
        icon: '/wiki/images/Gold Card.png',
        description: 'Gold Card Bonus:  Stuns the target for a duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Gold Card Bonus:</b></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">Stuns</a></span> the target for a duration.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '15 / 22.5 / 30 / 37.5 / 45 (+ 100% AD) (+ 50% AP)',
            valuesHTML:
              '15 / 22.<small>5</small> / 30 / 37.<small>5</small> / 45 <span style="color:orange; white-space:normal">(+&nbsp;100% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span>',
          },
          {
            name: 'Stun Duration:',
            values: '1 / 1.25 / 1.5 / 1.75 / 2',
            valuesHTML:
              '1 / 1.<small>25</small> / 1.<small>5</small> / 1.<small>75</small> / 2',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '15 / 22.5 / 30 / 37.5 / 45 (+ 100% AD) (+ 50% AP)',
            damagetype: 'Magic',
            values: [15, 22.5, 30, 37.5, 45],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 22.5 / 30 / 37.5 / 45',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 100% AD',
              },
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
            name: 'Stun Duration:',
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
    targeting: 'Auto',
    affects: 'Enemies, Self',
    damagetype: 'Magic',
    spelleffects: 'spell',
    spellshield: true,
    projectile: 'True',
    notes:
      '*The initial cast counts as an ability activation for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li><ul><li>Recasting the ability does not.</li></ul></li>\n<li>The first card shown is random but the order always remains the same (<span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twisted Fate" data-ability="Blue Card" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twisted_Fate/LoL#Blue_Card" title="Blue Card"><img alt="Blue Card" src="/wiki/images/Twisted_Fate_Blue_Card.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twisted_Fate/LoL#Blue_Card" title="Twisted Fate/LoL">Blue Card</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twisted Fate" data-ability="Red Card" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twisted_Fate/LoL#Red_Card" title="Red Card"><img alt="Red Card" src="/wiki/images/Twisted_Fate_Red_Card.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twisted_Fate/LoL#Red_Card" title="Twisted Fate/LoL">Red Card</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twisted Fate" data-ability="Gold Card" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twisted_Fate/LoL#Gold_Card" title="Gold Card"><img alt="Gold Card" src="/wiki/images/Twisted_Fate_Gold_Card.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twisted_Fate/LoL#Gold_Card" title="Twisted Fate/LoL">Gold Card</a></span></span>, repeat).\n<ul><li>Upon activation, an indicator visible to allies and enemies appears above <b>Twisted Fate</b> to show him shuffling his deck of cards while remaining in the same order, the card he can choose at every moment glows over the others. The selected card is specified for the duration of the enhanced attack.</li></ul></li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span> The interval until the next card is hovered is <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.5 seconds, but rounded up to the next game tick.">0.<small>528</small> seconds</span> every time, instead of some times 0.<small>528</small> and other times 0.<small>495</small>.</li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away during the empowered attack\'s cast time, it is cancelled but not consumed.</li>\n<li>The empowered attack will not trigger against <a href="/wiki/Buildings" class="mw-redirect" title="Buildings">buildings</a> nor <a href="/wiki/Ward" title="Ward">wards</a>.\n<ul><li>It will trigger against <a href="/wiki/Turret" title="Turret">Turrets</a> though.</li></ul></li></ul>',
  },
  'Stacked Deck': {
    name: 'Stacked Deck',
    display_name: 'Stacked Deck',
    champion: 'Twisted Fate',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'CardmasterStack.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 0,
      y: 144,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twisted Fate" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twisted_Fate/LoL" title="Twisted Fate"><img alt="Twisted Fate" src="/wiki/images/Twisted_Fate_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twisted_Fate/LoL" title="Twisted Fate/LoL">Twisted Fate</a></span></span> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>. His basic attacks generate <a href="/wiki/Stack" title="Stack">stacks</a> of <i>Stacked Deck</i>, which stacks up to a cap.',
      'At max stacks, his next basic attack consumes them all to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Stacked Deck.png',
        description:
          'Passive: Twisted Fate gains  bonus attack speed. His basic attacks generate a stack of Stacked Deck, stacking up to 3 times. At 3 stacks, his next basic attack is empowered to consume them all to deal bonus magic damage.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Twisted Fate</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>. His basic attacks generate a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Stacked Deck</i>, stacking up to 3 times.<br><br> At 3 stacks, his next basic attack is empowered to consume them all to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Line 2:',
            raw: 'His basic attacks generate a stack of Stacked Deck, stacking up to 3 times',
            min: 0,
            max: 10,
            description:
              'His basic attacks generate a stack of Stacked Deck, stacking up to 3 times',
            values: 3,
            units: 'feastStacks',
            unitsText:
              'basic attacks generate a stack of Stacked Deck, stacking up to 3 times',
            pre: 'His basic attacks generate a stack of Stacked Deck, stacking up to 3 times',
          },
          {
            effectType: 'Stacks',
            name: 'Line 3:',
            raw: 'At 3 stacks, his next basic attack is empowered to consume them all to deal bonus magic damage.',
            min: 0,
            max: 10,
            description:
              'At 3 stacks, his next basic attack is empowered to consume them all to deal bonus magic damage.',
            values: 3,
            units: 'feastStacks',
            unitsText:
              '3 stacks, his next basic attack is empowered to consume them all to deal bonus magic damage.',
            pre: 'At 3 stacks, his next basic attack is empowered to consume them all to deal bonus magic damage.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Attack Speed:',
            values: '10 / 17.5 / 25 / 32.5 / 40%',
            valuesHTML:
              '10 / 17.<small>5</small> / 25 / 32.<small>5</small> / 40%',
          },
          {
            name: 'Bonus Magic Damage:',
            values: '65 / 90 / 115 / 140 / 165 (+ 50% AP)',
            valuesHTML:
              '65 / 90 / 115 / 140 / 165 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '10 / 17.5 / 25 / 32.5 / 40%',
            values: [10, 17.5, 25, 32.5, 40],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 17.5 / 25 / 32.5 / 40%',
          },
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage:',
            raw: '65 / 90 / 115 / 140 / 165 (+ 50% AP)',
            damagetype: 'Magic',
            values: [65, 90, 115, 140, 165],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '65 / 90 / 115 / 140 / 165',
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
    ],
    targeting: 'Passive',
    affects: 'Enemies, Self',
    damagetype: 'Magic',
    spelleffects: 'proc',
    spellshield: false,
    projectile: 'True',
    notes:
      '* <i>Stacked Deck</i> can be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodged"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span> and/or missed if <b>Twisted Fate</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span> (the on-hit effect is not consumed in either case) but cannot be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blocked"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span> (the enhanced attack is consumed and the bonus damage is still applied).\n<ul><li>The empowered attack will not trigger against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a> nor <a href="/wiki/Ward" title="Ward">wards</a>.</li></ul>',
  },
  Destiny: {
    name: 'Destiny',
    display_name: 'Destiny',
    champion: 'Twisted Fate',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'Destiny.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 48,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '5500',
    effect_radius: 'Global',
    cast_time: 'none',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect or upon using the recast">180 / 165 / 150 / 135 / 120</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twisted Fate" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twisted_Fate/LoL" title="Twisted Fate"><img alt="Twisted Fate" src="/wiki/images/Twisted_Fate_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twisted_Fate/LoL" title="Twisted Fate/LoL">Twisted Fate</a></span></span> marks all enemy champions, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> them for a few seconds. <i>Destiny</i> can be recast within the duration.',
      '<span class="template_sbc"><b>Recast - Gate:</b></span> <b>Twisted Fate</b> briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channels"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> before <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinking</a></span> to the target location, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Homing projectile destruction"><a href="/wiki/Projectile" title="Projectile"><img alt="Bullet strikethrough.png" src="/wiki/images/Bullet_strikethrough.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">destroying</a></span> all incoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectiles"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">projectiles</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Destiny.png',
        description:
          'Active: Twisted Fate marks all targetable enemy champions,  revealing them for a duration. Destiny can be recast after 0.5 seconds within the duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Twisted Fate</b> marks all targetable enemy champions, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> them for a duration. <i>Destiny</i> can be recast after 0.<small>5</small> seconds within the duration.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Duration:',
            values: '6 / 7 / 8 / 9 / 10',
            valuesHTML: '6 / 7 / 8 / 9 / 10',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Duration:',
            raw: '6 / 7 / 8 / 9 / 10',
            values: [6, 7, 8, 9, 10],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '6 / 7 / 8 / 9 / 10',
          },
        ],
      },
      {
        icon: '/wiki/images/Gate.png',
        description:
          'Recast - Gate: Twisted Fate  channels for 1.5 seconds before  blinking to the target location,  destroying all  projectiles targeting him in the process.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast - Gate:</b></span> <b>Twisted Fate</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channels"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for 1.<small>5</small> seconds before <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinking</a></span> to the target location, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Homing projectile destruction"><a href="/wiki/Projectile" title="Projectile"><img alt="Bullet strikethrough.png" src="/wiki/images/Bullet_strikethrough.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">destroying</a></span> all <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectiles"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">projectiles</a></span> targeting him in the process.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Recast - Gate:',
            raw: ' Twisted Fate  channels for 1.5 seconds before  blinking to the target location,  destroying all  projectiles targeting him in the process.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'Fate  channels for 1.5 seconds before  blinking to the target location,  destroying all  projectiles targeting him in the process.',
            pre: 'Twisted Fate  channels for 1.5 seconds before  blinking to the target location,  destroying all  projectiles targeting him in the process.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting:
      '<a href="/wiki/Auto-targeted" class="mw-redirect" title="Auto-targeted">Auto</a> / <a href="/wiki/Location-targeted" class="mw-redirect" title="Location-targeted">Location</a>',
    affects: 'Enemies, Allies, Self',
    spellshield: true,
    notes:
      '*Both casts count as ability activations for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li><b>Twisted Fate</b> cannot recast <i>Destiny</i> while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span>.</li>\n<li>The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Nearsight"><a href="/wiki/Nearsight" title="Nearsight"><img alt="Nearsight icon.png" src="/wiki/images/Nearsight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Nearsight" class="mw-redirect" title="Nearsight">nearsight</a></span> from <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nocturne" data-ability="Paranoia" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nocturne/LoL#Paranoia" title="Paranoia"><img alt="Paranoia" src="/wiki/images/Nocturne_Paranoia.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nocturne/LoL#Paranoia" title="Nocturne/LoL">Paranoia</a></span></span> will overpower the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">reveal</a></span> from <i>Destiny</i> regardless of which one was cast first (enemy champions can still be revealed by <i>Destiny</i> after <i>Paranoia</i> ends if durations permit).</li>\n<li>Using the recast will inform allies with a <a href="/wiki/Ping" title="Ping">ping</a>.\n<ul><li>Both allies and enemies can see an indicator at the targeted location of where <b>Twisted Fate</b> will appear.</li></ul></li>\n<li>The following table refers for interactions while <b>Twisted Fate</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twisted Fate" data-ability="Pick a Card" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twisted_Fate/LoL#Pick_a_Card" title="Pick a Card"><img alt="Pick a Card" src="/wiki/images/Twisted_Fate_Pick_a_Card.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twisted_Fate/LoL#Pick_a_Card" title="Twisted Fate/LoL">Pick a Card</a></span></span> is usable. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Twisted Fate" data-ability="Wild Cards" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Twisted_Fate/LoL#Wild_Cards" title="Wild Cards"><img alt="Wild Cards" src="/wiki/images/Twisted_Fate_Wild_Cards.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Twisted_Fate/LoL#Wild_Cards" title="Twisted Fate/LoL">Wild Cards</a></span></span> is disabled.\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>All the other item-actives are usable\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Hextech Rocketbelt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt"><img alt="Hextech Rocketbelt" src="/wiki/images/Hextech_Rocketbelt_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt">Hextech Rocketbelt</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Galeforce" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Galeforce" title="Galeforce"><img alt="Galeforce" src="/wiki/images/Galeforce_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Galeforce" title="Galeforce">Galeforce</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Everfrost" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Everfrost" title="Everfrost"><img alt="Everfrost" src="/wiki/images/Everfrost_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Everfrost" title="Everfrost">Everfrost</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Prowler\'s Claw" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Prowler%27s_Claw" title="Prowler\'s Claw"><img alt="Prowler\'s Claw" src="/wiki/images/Prowler%27s_Claw_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Prowler%27s_Claw" title="Prowler\'s Claw">Prowler\'s Claw</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Stridebreaker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Stridebreaker" title="Stridebreaker"><img alt="Stridebreaker" src="/wiki/images/Stridebreaker_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Stridebreaker" title="Stridebreaker">Stridebreaker</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Ironspike Whip" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ironspike_Whip" title="Ironspike Whip"><img alt="Ironspike Whip" src="/wiki/images/Ironspike_Whip_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ironspike_Whip" title="Ironspike Whip">Ironspike Whip</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Goredrinker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Goredrinker" title="Goredrinker"><img alt="Goredrinker" src="/wiki/images/Goredrinker_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Goredrinker" title="Goredrinker">Goredrinker</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Stopwatch" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Stopwatch" title="Stopwatch"><img alt="Stopwatch" src="/wiki/images/Stopwatch_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Stopwatch" title="Stopwatch">Stopwatch</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Zhonya\'s Hourglass" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zhonya%27s_Hourglass" title="Zhonya\'s Hourglass"><img alt="Zhonya\'s Hourglass" src="/wiki/images/Zhonya%27s_Hourglass_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zhonya%27s_Hourglass" title="Zhonya\'s Hourglass">Zhonya\'s Hourglass</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Mark" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mark" title="Mark"><img alt="Mark" src="/wiki/images/Mark.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mark" title="Mark">Mark</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Dash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mark#Dash" title="Dash"><img alt="Dash" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mark#Dash" title="Mark">Dash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/26/Grounded_icon.png/revision/latest?cb=20160509000039" class="image"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Grounding effects</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/9/9d/Stun_icon.png/revision/latest?cb=20171201223940" class="image"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Immobilizing effects</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>\n<ul><li>Trying to cast a disabled active will buffer it to cast at the completion of the channel.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Twisted_Fate_Original_R_1.ogg   "No fightin\' destiny."',
  },
} satisfies { [skillName in string]: SkillData };
