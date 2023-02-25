import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Poppy';

export default {
  'Iron Ambassador': {
    name: 'Iron Ambassador',
    display_name: 'Iron Ambassador',
    champion: 'Poppy',
    skill: 'I',
    image: {
      full: 'Poppy_Passive.png',
      sprite: 'passive3.png',
      group: 'passive',
      x: 144,
      y: 0,
      w: 48,
      h: 48,
    },
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Both attack missile and on-kill return missile speeds">1600</span>',
    static:
      '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="13;1" data-finish="7;13" data-bot_values="13;10;7" data-top_values="1;7;13">13 / 10 / 7 (based on level)</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> Periodically, <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Poppy" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Poppy/LoL" title="Poppy"><img alt="Poppy" src="/wiki/images/Poppy_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Poppy/LoL" title="Poppy/LoL">Poppy</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">throws</a></span> her buckler as her next basic attack, which has <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> range</span> and deals <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>. The buckler then falls nearby and remains for a few seconds, which she and enemy champions can step over to destroy it.',
      'Upon retrieving the buckler, <b>Poppy</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span> herself for a portion of <span style="color: #1F995C; white-space:normal">her <b>maximum</b> health</span>, lasting a short time.',
    ],
    description: [
      {
        icon: '/wiki/images/Iron_Ambassador.png',
        description:
          "Innate: Periodically, Poppy's next basic attack is empowered to throw her buckler, gaining  350 bonus range and dealing 20 − 180 (based on level) bonus magic damage. After it hits, the buckler then falls to a location near the target over 1 second, landing and remaining there for up to 4 seconds.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> Periodically, <b>Poppy\'s</b> next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> is empowered to throw her buckler, gaining <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;350 <b>bonus</b> range</span> and dealing <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#00B0F0;" data-start="20;" data-finish="180;" data-bot_values="20;29.41;38.82;48.24;57.65;67.06;76.47;85.88;95.29;104.71;114.12;123.53;132.94;142.35;151.76;161.18;170.59;180" data-top_values="">20 − 180 (based on level)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>. After it hits, the buckler then falls to a location near the target over 1 second, landing and remaining there for up to 4 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate:',
            raw: "Periodically, Poppy's next basic attack is empowered to throw her buckler, gaining  350 bonus range and dealing 20 − 180 (based on level) bonus magic damage",
            values: [
              20, 29.41, 38.82, 48.24, 57.65, 67.06, 76.47, 85.88, 95.29,
              104.71, 114.12, 123.53, 132.94, 142.35, 151.76, 161.18, 170.59,
              180,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'bonus magic damage',
            pre: "Periodically, Poppy's next basic attack is empowered to throw her buckler, gaining  350 bonus range and dealing 20 − 180",
            post: 'bonus magic damage',
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'After it hits, the buckler then falls to a location near the target over 1 second, landing and remaining there for up to 4 seconds.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'it hits, the buckler then falls to a location near the target over 1 second, landing and remaining there for up to 4 seconds.',
            pre: 'After it hits, the buckler then falls to a location near the target over 1 second, landing and remaining there for up to 4 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Iron_Ambassador_2.png',
        description:
          'Poppy can move over the buckler to retrieve it, gaining a  shield for  13 / 15.5 / 18% (based on level) of her maximum health for 3 seconds. If the buckler kills the target, it bounces back to Poppy instead of falling. Enemy  champions can move over the buckler to destroy it.',
        descriptionHTML:
          '<b>Poppy</b> can move over the buckler to retrieve it, gaining a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="13;1" data-finish="18;13" data-bot_values="13;15.5;18" data-top_values="1;7;13" data-bot_key="%">13 / 15.<small>5</small> / 18% (based on level)</span> of her <b>maximum</b> health</span></span> for 3 seconds. If the buckler kills the target, it bounces back to <b>Poppy</b> instead of falling. Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> can move over the buckler to destroy it.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: 'Poppy can move over the buckler to retrieve it, gaining a  shield for  13 / 15.5 / 18% (based on level) of her maximum health for 3 seconds',
            healType: 'BonusHealth',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            units: 'maximum_hp',
            unitsText: 'of her maximum health for 3 seconds',
            pre: 'Poppy can move over the buckler to retrieve it, gaining a  shield for  13 / 15.5 / 18%',
            post: 'of her maximum health for 3 seconds',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    damagetype: 'Magic',
    spelleffects: 'Proc',
    spellshield: false,
    projectile: 'True',
    notes: '* No additional details.',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Poppy_Original_PassiveAttack_OnHit_0.ogg   "Shield to the face!"',
  },
  'Hammer Shock': {
    name: 'Hammer Shock',
    display_name: 'Hammer Shock',
    champion: 'Poppy',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'PoppyQ.png',
      sprite: 'spell9.png',
      group: 'spell',
      x: 384,
      y: 96,
      w: 48,
      h: 48,
    },
    range: '460 / -120',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 160',
    cast_time: '0.<small>25</small>',
    cost: '35 / 40 / 45 / 50 / 55',
    costtype: 'Mana',
    cooldown: '8 / 7 / 6 / 5 / 4',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Poppy" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Poppy/LoL" title="Poppy"><img alt="Poppy" src="/wiki/images/Poppy_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Poppy/LoL" title="Poppy/LoL">Poppy</a></span></span> smashes the area in the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit based on <span style="color: #1F995C; white-space:normal">their <b>maximum</b> health</span>.',
      'The impact creates a brief field that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> enemies within, then ruptures to deal <span style="color: #FF8C34; white-space:normal">physical damage</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Hammer_Shock.png',
        description:
          'Active: Poppy smashes the area in the target direction, dealing physical damage to enemies hit. Against  monsters, the damage based on their health ratio is capped.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Poppy</b> smashes the area in the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit. Against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, the damage based on their health ratio is capped.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical Damage:',
            values:
              "40 / 60 / 80 / 100 / 120 (+ 90% bonus AD) (+ 8% of target's maximum health)",
            valuesHTML:
              '40 / 60 / 80 / 100 / 120 <span style="color:orange; white-space:normal">(+&nbsp;90% <b>bonus</b> AD)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;8% of target\'s <b>maximum</b> health)</span>',
          },
          {
            name: 'Capped Monster Health Damage:',
            values: '30 / 60 / 90 / 120 / 150',
            valuesHTML: '30 / 60 / 90 / 120 / 150',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Physical Damage:',
            raw: "40 / 60 / 80 / 100 / 120 (+ 90% bonus AD) (+ 8% of target's maximum health)",
            healType: 'PhysicalVamp',
            values: [40, 60, 80, 100, 120],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 60 / 80 / 100 / 120',
            children: [
              {
                values: 90,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 90% bonus AD',
              },
              {
                values: 8,
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of target's maximum health",
                pre: "+ 8% of target's maximum health",
              },
            ],
          },
          {
            effectType: 'Heal',
            name: 'Capped Monster Health Damage:',
            raw: '30 / 60 / 90 / 120 / 150',
            healType: 'BonusHealth',
            values: [30, 60, 90, 120, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 60 / 90 / 120 / 150',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'The impact creates a field for 1 second that  slows enemies within, which then ruptures to deal the same physical damage.',
        descriptionHTML:
          'The impact creates a field for 1 second that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> enemies within, which then ruptures to deal the same <span style="color: #FF8C34; white-space:normal">physical damage</span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'The impact creates a field for 1 second that  slows enemies within, which then ruptures to deal the same physical damage.',
            damagetype: 'Physical',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'impact creates a field for 1 second that  slows enemies within, which then ruptures to deal the same physical damage.',
            pre: 'The impact creates a field for 1 second that  slows enemies within, which then ruptures to deal the same physical damage.',
          },
        ],
        leveling: [
          {
            name: 'Slow:',
            values: '20 / 25 / 30 / 35 / 40%',
            valuesHTML: '20 / 25 / 30 / 35 / 40%',
          },
          {
            name: 'Total Physical Damage:',
            values:
              "80 / 120 / 160 / 200 / 240 (+ 180% bonus AD) (+ 16% of target's maximum health)",
            valuesHTML:
              '80 / 120 / 160 / 200 / 240 <span style="color:orange; white-space:normal">(+&nbsp;180% <b>bonus</b> AD)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;16% of target\'s <b>maximum</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '20 / 25 / 30 / 35 / 40%',
            values: [20, 25, 30, 35, 40],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 25 / 30 / 35 / 40%',
          },
          {
            effectType: 'Heal',
            name: 'Total Physical Damage:',
            raw: "80 / 120 / 160 / 200 / 240 (+ 180% bonus AD) (+ 16% of target's maximum health)",
            healType: 'PhysicalVamp',
            values: [80, 120, 160, 200, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 120 / 160 / 200 / 240',
            children: [
              {
                values: 180,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 180% bonus AD',
              },
              {
                values: 16,
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of target's maximum health",
                pre: "+ 16% of target's maximum health",
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'spellaoe',
    spellshield: 'Special',
    projectile: 'False',
    notes:
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shields</a></span> will block only a single instance of damage.\n<ul><li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>',
  },
  'Steadfast Presence': {
    name: 'Steadfast Presence',
    display_name: 'Steadfast Presence',
    champion: 'Poppy',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'PoppyW.png',
      sprite: 'spell9.png',
      group: 'spell',
      x: 432,
      y: 96,
      w: 48,
      h: 48,
    },
    effect_radius: '400',
    cast_time: 'none',
    cost: '50',
    costtype: 'Mana',
    cooldown: '20 / 18 / 16 / 14 / 12',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Poppy" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Poppy/LoL" title="Poppy"><img alt="Poppy" src="/wiki/images/Poppy_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Poppy/LoL" title="Poppy/LoL">Poppy</a></span></span> increases her <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>total</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>total</b> magic resist</span></span>. This effect is doubled while she is <span style="color: #1F995C; white-space:normal">at low health</span>.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Poppy</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for a short time and creates an <a href="/wiki/Aura" title="Aura">aura</a> that stops enemy dashes. Enemies that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> within the aura are dealt <span style="color: #00B0F0; white-space:normal">magic damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked up</a></span>, they are then <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Grounded"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> for a short time.',
    ],
    description: [
      {
        icon: '/wiki/images/Stubborn_to_a_Fault.png',
        description:
          'Passive: Poppy increases her  total armor and  total magic resistance by 10%, doubled to 20% while she is below 40% maximum health.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Poppy</b> increases her <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>total</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>total</b> magic resistance</span></span> by 10%, doubled to 20% while she is <span style="color: #1F995C; white-space:normal">below 40% <b>maximum</b> health</span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Passive:',
            raw: 'Poppy increases her  total armor and  total magic resistance by 10%, doubled to 20% while she is below 40% maximum health.',
            healType: 'BonusHealth',
            values: 1,
            valuesIsPercent: true,
            units: 'total_armor',
            unitsText:
              ', doubled to 20increases her  total armor and  total magic resistance by 10',
            pre: 'Poppy increases her  total armor and  total magic resistance by 10%, doubled to 20% while she is below 40% maximum health.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Steadfast_Presence.png',
        description:
          'Active: Poppy gains  40% bonus movement speed and creates an aura around herself for 2 seconds, causing all enemies who attempt to  dash into or within it to be dealt magic damage and  knocked up for 0.5 seconds. If a target was successfully interrupted, they become  grounded and  slowed by 25% for 2 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Poppy</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">40% <b>bonus</b> movement speed</span></span> and creates an <a href="/wiki/Aura" title="Aura">aura</a> around herself for 2 seconds, causing all enemies who attempt to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> into or within it to be dealt <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked up</a></span> for 0.<small>5</small> seconds. If a target was successfully interrupted, they become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Grounded"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 25% for 2 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Poppy gains  40% bonus movement speed and creates an aura around herself for 2 seconds, causing all enemies who attempt to  dash into or within it to be dealt magic damage and  knocked up for 0.5 seconds',
            values: 4,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'bonus movement speed and creates an aura around herself for 2 seconds, causing all enemies who attempt to  dash into or within it to be dealt magic damage and  knocked up for 0.5 secondsgains  40',
            pre: 'Poppy gains  40% bonus movement speed and creates an aura around herself for 2 seconds, causing all enemies who attempt to  dash into or within it to be dealt magic damage and  knocked up for 0.5 seconds',
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'If a target was successfully interrupted, they become  grounded and  slowed by 25% for 2 seconds.',
            values: 2,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'for 2 seconds.a target was successfully interrupted, they become  grounded and  slowed by 25',
            pre: 'If a target was successfully interrupted, they become  grounded and  slowed by 25% for 2 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '70 / 110 / 150 / 190 / 230 (+ 70% AP)',
            valuesHTML:
              '70 / 110 / 150 / 190 / 230 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;70% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 110 / 150 / 190 / 230 (+ 70% AP)',
            damagetype: 'Magic',
            values: [70, 110, 150, 190, 230],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 110 / 150 / 190 / 230',
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
        icon: '/wiki/images/undefined',
        description:
          'Steadfast Presence can only block a single dash per enemy per cast.',
        descriptionHTML:
          '<i>Steadfast Presence</i> can only block a single dash per enemy per cast.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    damagetype: 'Magic',
    spelleffects: 'aoe',
    spellshield: true,
    notes:
      '* <i>Steadfast Presence</i> does not stop <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> if the unit is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">crowd control immune</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immune"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immune</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, or protected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span> in the process (e.g. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zed" data-ability="Death Mark" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zed/LoL#Death_Mark" title="Death Mark"><img alt="Death Mark" src="/wiki/images/Zed_Death_Mark.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zed/LoL#Death_Mark" title="Zed/LoL">Death Mark</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Volibear" data-ability="Stormbringer" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Volibear/LoL#Stormbringer" title="Stormbringer"><img alt="Stormbringer" src="/wiki/images/Volibear_Stormbringer.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Volibear/LoL#Stormbringer" title="Volibear/LoL">Stormbringer</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Malphite" data-ability="Unstoppable Force" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Malphite/LoL#Unstoppable_Force" title="Unstoppable Force"><img alt="Unstoppable Force" src="/wiki/images/Malphite_Unstoppable_Force.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Malphite/LoL#Unstoppable_Force" title="Malphite/LoL">Unstoppable Force</a></span></span>).\n<ul><li><ul><li>Dashes when the unit is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">crowd control immune</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immune"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immune</a></span> still trigger the aura and take the damage, but do not get <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked up</a></span> and thus also never become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span>.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shields</a></span> deny all the effects if <i>Steadfast Presence</i> is triggered by their holder, and are consumed in the process.</li>\n<li>Being <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> prevents <i>Steadfast Presence</i> from triggering, but this does not prevent it from triggering against another, targetable dash.</li></ul></li>\n<li><i>Steadfast Presence</i> does not trigger against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lunge"><a href="/wiki/Dash#Lunge" title="Dash#Lunge"><img alt="Bear Stance.png" src="/wiki/images/Udyr_Bear_Stance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash#Lunge" title="Dash">lunges</a></span>.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Poppy_Original_WKnockUp_0.ogg   "No getting through me."',
  },
  'Heroic Charge': {
    name: 'Heroic Charge',
    display_name: 'Heroic Charge',
    champion: 'Poppy',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'PoppyE.png',
      sprite: 'spell9.png',
      group: 'spell',
      x: 0,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '475',
    cast_time: 'none',
    cost: '70',
    costtype: 'Mana',
    cooldown: '14 / 13 / 12 / 11 / 10',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Poppy" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Poppy/LoL" title="Poppy"><img alt="Poppy" src="/wiki/images/Poppy_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Poppy/LoL" title="Poppy/LoL">Poppy</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target enemy, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">carrying</a></span> them forward. If the target hits terrain, <b>Poppy</b> deals <span style="color: #FF8C34; white-space:normal">physical damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> them.',
    ],
    description: [
      {
        icon: '/wiki/images/Heroic_Charge.png',
        description:
          "Active: Poppy  dashes to the target enemy's location. If they are in range upon arrival, she deals physical damage and  carries them along with her for up to 400 units.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Poppy</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target enemy\'s location. If they are in range upon arrival, she deals <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">carries</a></span> them along with her for up to 400 units.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'If they are in range upon arrival, she deals physical damage and  carries them along with her for up to 400 units.',
            damagetype: 'Physical',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'they are in range upon arrival, she deals physical damage and  carries them along with her for up to 400 units.',
            pre: 'If they are in range upon arrival, she deals physical damage and  carries them along with her for up to 400 units.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '60 / 80 / 100 / 120 / 140 (+ 50% bonus AD)',
            valuesHTML:
              '60 / 80 / 100 / 120 / 140 <span style="color:orange; white-space:normal">(+&nbsp;50% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '60 / 80 / 100 / 120 / 140 (+ 50% bonus AD)',
            damagetype: 'Physical',
            values: [60, 80, 100, 120, 140],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 80 / 100 / 120 / 140',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 50% bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'If the target hits terrain, she stops to deal the same physical damage again and  stuns them for a duration.',
        descriptionHTML:
          'If the target hits terrain, she stops to deal the same <span style="color: #FF8C34; white-space:normal">physical damage</span> again and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> them for a duration.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Stun Duration:',
            values: '1.6 / 1.7 / 1.8 / 1.9 / 2',
            valuesHTML:
              '1.<small>6</small> / 1.<small>7</small> / 1.<small>8</small> / 1.<small>9</small> / 2',
          },
          {
            name: 'Total Physical Damage:',
            values: '120 / 160 / 200 / 240 / 280 (+ 100% bonus AD)',
            valuesHTML:
              '120 / 160 / 200 / 240 / 280 <span style="color:orange; white-space:normal">(+&nbsp;100% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Stun Duration:',
            raw: '1.6 / 1.7 / 1.8 / 1.9 / 2',
            values: [1.6, 1.7, 1.8, 1.9, 2],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1.6 / 1.7 / 1.8 / 1.9 / 2',
          },
          {
            effectType: 'Damage',
            name: 'Total Physical Damage:',
            raw: '120 / 160 / 200 / 240 / 280 (+ 100% bonus AD)',
            damagetype: 'Physical',
            values: [120, 160, 200, 240, 280],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '120 / 160 / 200 / 240 / 280',
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
        ],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'spell',
    spellshield: true,
    callforhelp: 'true',
    notes:
      '* <b>Poppy</b> will be ordered to basic attack the target.\n<ul><li><i>Heroic Charge</i> can apply <a href="/wiki/Ability_effects" title="Ability effects">spell effects</a> twice (once when <b>Poppy</b> hits her target and once she stuns them against a wall). ** Both instances of damage and crowd control are all the same <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast instance"><a href="/wiki/Champion_ability" title="Champion ability">cast instance</a></span>. Effects that only trigger once per spell cast will not trigger twice.</li>\n<li><b>Poppy</b> dashes slightly less far than the distance she pushes the target.</li>\n<li><i>Heroic Charge</i> can interact with <a href="/wiki/Terrain#Player-Generated" title="Terrain">player-generated terrain</a>.</li>\n<li>The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> does not follow targets. The target\'s position at the time of <i>Heroic Charge\'s</i> cast is the direction <b>Poppy</b> will dash towards.\n<ul><li><b>Poppy</b> does not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">carry</a></span> nor deal damage to the target if they have left a certain radius before she collides with them.</li></ul></li></ul>',
  },
  "Keeper's Verdict": {
    name: "Keeper's Verdict",
    display_name: "Keeper's Verdict",
    champion: 'Poppy',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'PoppyR.png',
      sprite: 'spell9.png',
      group: 'spell',
      x: 48,
      y: 144,
      w: 48,
      h: 48,
    },
    range: '500 /  850 − 1200 (based on channel time)',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Uncharged radius around Poppy">180</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Eruption radius upon missile collision">225</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Both uncharged area and shockwave missile width">180</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Shockwave missile speed">2500</span>',
    cast_time:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Uncharged release">0.<small>25</small></span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Charged release">0.<small>35</small></span>',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">140 / 120 / 100</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Poppy" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Poppy/LoL" title="Poppy"><img alt="Poppy" src="/wiki/images/Poppy_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Poppy/LoL" title="Poppy/LoL">Poppy</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channels"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">charges</a></span> up to a few seconds, increasing the <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;range</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knockback</a></span> distance of her hammer. After a brief period, it becomes empowered with a new effect.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Poppy</b> swings her hammer, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies nearby and in the area in front of her, briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them up</a></span>.',
      '<span class="template_sbc"><b>Empowered Recast:</b></span> <b>Poppy</b> sends a shockwave in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit. Upon hitting an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, a hammer erupts dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them back</a></span> based on how long she charged up.',
    ],
    description: [
      {
        icon: "/wiki/images/Keeper's_Verdict.png",
        description:
          "Active: Poppy  charges while being  slowed by 15% for up to 4 seconds to increase Keeper's Verdict's  range and  knock back distance over 0.5 seconds after the first 0.5 seconds of the channel. Keeper's Verdict can be recast within the duration.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Poppy</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channels"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">charges</a></span> while being <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 15% for up to 4 seconds to increase <i>Keeper\'s Verdict\'s</i> <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;range</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock back</a></span> distance over 0.<small>5</small> seconds after the first 0.<small>5</small> seconds of the channel. <i>Keeper\'s Verdict</i> can be recast within the duration.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: "Poppy  charges while being  slowed by 15% for up to 4 seconds to increase Keeper's Verdict's  range and  knock back distance over 0.5 seconds after the first 0.5 seconds of the channel",
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              "for up to 4 seconds to increase Keeper's Verdict's  range and  knock back distance over 0.5 seconds after the first 0.5 seconds of the channel charges while being  slowed by 15",
            pre: "Poppy  charges while being  slowed by 15% for up to 4 seconds to increase Keeper's Verdict's  range and  knock back distance over 0.5 seconds after the first 0.5 seconds of the channel",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Recast: Poppy releases the charge to launch her hammer upwards, dealing physical damage to enemies nearby and in an area in front of her and  knocking them up for 1 second.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Poppy</b> releases the charge to launch her hammer upwards, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies nearby and in an area in front of her and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them up</a></span> for 1 second.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Recast:',
            raw: 'Poppy releases the charge to launch her hammer upwards, dealing physical damage to enemies nearby and in an area in front of her and  knocking them up for 1 second.',
            damagetype: 'Physical',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'releases the charge to launch her hammer upwards, dealing physical damage to enemies nearby and in an area in front of her and  knocking them up for 1 second.',
            pre: 'Poppy releases the charge to launch her hammer upwards, dealing physical damage to enemies nearby and in an area in front of her and  knocking them up for 1 second.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '100 / 150 / 200 (+ 45% bonus AD)',
            valuesHTML:
              '100 / 150 / 200 <span style="color:orange; white-space:normal">(+&nbsp;45% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '100 / 150 / 200 (+ 45% bonus AD)',
            damagetype: 'Physical',
            values: [100, 150, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 150 / 200',
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
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "If Keeper's Verdict was charged for at least 0.5 seconds, it deals 100% increased damage and enemies hit are  knocked back up-to 3400 units toward the enemy team's fountain. Additionally, if no enemies are hit in front of Poppy, she sends a shockwave that travels in the target direction until it collides with an enemy champion, which causes a hammer to erupt. Targets hit by the shockwave or the eruption receive the charged effects.",
        descriptionHTML:
          'If <i>Keeper\'s Verdict</i> was charged for at least 0.<small>5</small> seconds, it deals 100% increased damage and enemies hit are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked back</a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Scales up to this value over the first 1 second of the channel">up-to 3400 units</span> toward the enemy team\'s <a href="/wiki/Spawn" title="Spawn">fountain</a>. Additionally, if no enemies are hit <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Same as uncharged radius">in front</span> of <b>Poppy</b>, she sends a shockwave that travels in the target direction until it collides with an enemy champion, which causes a hammer to erupt. Targets hit by the shockwave or the eruption receive the charged effects.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Increased Damage:',
            values: '200 / 300 / 400 (+ 90% bonus AD)',
            valuesHTML:
              '200 / 300 / 400 <span style="color:orange; white-space:normal">(+&nbsp;90% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Increased Damage:',
            raw: '200 / 300 / 400 (+ 90% bonus AD)',
            damagetype: 'None',
            values: [200, 300, 400],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 300 / 400',
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
        icon: '/wiki/images/undefined',
        description:
          "If the charge is  interrupted or completes without reactivation, Keeper's Verdict is cancelled and the ability is put on a  15-second cooldown.",
        descriptionHTML:
          'If the charge is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span> or completes without reactivation, <i>Keeper\'s Verdict</i> is cancelled and the ability is put on a <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;15-second</span> cooldown.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: "If the charge is  interrupted or completes without reactivation, Keeper's Verdict is cancelled and the ability is put on a  15-second cooldown.",
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              "the charge is  interrupted or completes without reactivation, Keeper's Verdict is cancelled and the ability is put on a  15-second cooldown.",
            pre: "If the charge is  interrupted or completes without reactivation, Keeper's Verdict is cancelled and the ability is put on a  15-second cooldown.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Enemies knocked  airborne are  revealed and are rendered  untargetable while being displaced if Keeper's Verdict was charged for more than 0.5 seconds.",
        descriptionHTML:
          'Enemies knocked <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span> and are rendered <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> while being displaced if <i>Keeper\'s Verdict</i> was charged for more than 0.<small>5</small> seconds.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting:
      '<a href="/wiki/Auto-targeted" class="mw-redirect" title="Auto-targeted">Auto</a> / <a href="/wiki/Direction-targeted" class="mw-redirect" title="Direction-targeted">Direction</a>',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Area of effect',
    spellshield: true,
    projectile: 'True',
    notes:
      '* During the Recast\'s cast time, <b>Poppy\'s</b> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">sealed</a></span>.\n<ul><li>The erupting hammer of the charged cast that sends out a missile will be centered on the first champion struck, not at the location the missile collided with them.</li>\n<li>Enemies within the enemy team\'s fountain (at least 400 units away from the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="the respawning point">center of the fountain</span>) that are hit by a <i>Keeper\'s Verdict</i> that would knock them back are instead <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked up</a></span> for 0.<small>75</small> seconds and not rendered <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, like the uncharged effect. They still receive the full damage.</li>\n<li><i>Keeper\'s Verdict</i> does not destroy in-flight <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">projectiles</a></span> for enemies hit if they are rendered <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>.</li>\n<li>The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock back</a></span> will only displace enemies as far as they can go (e.g. to the furthest current spot available of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Mordekaiser" data-ability="Realm of Death" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mordekaiser/LoL#Realm_of_Death" title="Realm of Death\'s"><img alt="Realm of Death\'s" src="/wiki/images/Mordekaiser_Realm_of_Death.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mordekaiser/LoL#Realm_of_Death" title="Mordekaiser/LoL">Realm of Death\'s</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Camille" data-ability="The Hextech Ultimatum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Camille/LoL#The_Hextech_Ultimatum" title="The Hextech Ultimatum\'s"><img alt="The Hextech Ultimatum\'s" src="/wiki/images/Camille_The_Hextech_Ultimatum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Camille/LoL#The_Hextech_Ultimatum" title="Camille/LoL">The Hextech Ultimatum\'s</a></span></span> borders and to the corner of the fountain).\n<ul><li>The displacement\'s duration will remain unchanged regardless of if the knock back cannot achieve its full distance due to the affected target being restricted by boundaries they are unable to cross. In order for this to be possible, the speed of the knock back is decreased (based on where the actual landing point is) to match the amount of distance covered to time spent displaced.</li></ul></li>\n<li><i>Keeper\'s Verdict\'s</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> debuff is non-dispellable and thus cannot be removed by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleansing</a></span> effects.\n<ul><li>The debuff will remove itself automatically when the forced movement ends.</li></ul></li>\n<li>The following table refers for interactions while <b>Poppy</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Charge channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Allowed\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Hextech Rocketbelt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt"><img alt="Hextech Rocketbelt" src="/wiki/images/Hextech_Rocketbelt_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt">Hextech Rocketbelt</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>All item-actives not specified above interrupt\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span> (Recasts)\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Cast time\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All the other item-actives are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death, unless protected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">Resurrection</a></span>\n</li></td></tr></tbody></table>',
  },
} satisfies { [skillName in string]: SkillData };
