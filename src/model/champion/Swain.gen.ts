import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Swain';

export default {
  'Ravenous Flock': {
    name: 'Ravenous Flock',
    display_name: 'Ravenous Flock',
    champion: 'Swain',
    skill: 'I',
    image: {
      full: 'Swain_P.png',
      sprite: 'passive4.png',
      group: 'passive',
      x: 48,
      y: 0,
      w: 48,
      h: 48,
    },
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Raven missile speed">1200</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> Enemy champions that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">die</a></span> will leave behind a <span style="color: #E34D4C; white-space:normal">Soul Fragment</span> for some time. <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Swain" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Swain/LoL" title="Swain"><img alt="Swain" src="/wiki/images/Swain_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Swain/LoL" title="Swain/LoL">Swain</a></span></span> will collect nearby <span style="color: #E34D4C; white-space:normal">Soul Fragments</span>, as well as with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Swain" data-ability="Vision of Empire" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Swain/LoL#Vision_of_Empire" title="Vision of Empire"><img alt="Vision of Empire" src="/wiki/images/Swain_Vision_of_Empire.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Swain/LoL#Vision_of_Empire" title="Swain/LoL">Vision of Empire</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Swain" data-ability="Nevermove" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Swain/LoL#Nevermove" title="Nevermove"><img alt="Nevermove" src="/wiki/images/Swain_Nevermove.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Swain/LoL#Nevermove" title="Swain/LoL">Nevermove</a></span></span></i>.',
      '<span class="template_sbc"><b>Soul Fragment:</b></span> For each stack, <b>Swain</b> gains <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><b>bonus</b> health</span></span>. Upon collection, he will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> for a portion of <span style="color: #1F995C; white-space:normal">his <b>maximum</b> health</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Ravenous Flock.png',
        description:
          "Innate: Enemy champions that  die will leave behind a Soul Fragment for 16 seconds, which can be collected by Swain after 1 second. Swain's ravens collect nearby Soul Fragments, as well as with  Vision of Empire and  Nevermove.\nSoul Fragment: For each stack, Swain gains 12 bonus health. Upon collection, he will  heal for 3 / 4 / 5 / 6% (based on level) of his maximum health.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> Enemy champions that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">die</a></span> will leave behind a <span style="color: #E34D4C; white-space:normal">Soul Fragment</span> for 16 seconds, which can be collected by <b>Swain</b> after 1 second. <b>Swain\'s</b> ravens collect nearby <span style="color: #E34D4C; white-space:normal">Soul Fragments</span>, as well as with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Swain" data-ability="Vision of Empire" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Swain/LoL#Vision_of_Empire" title="Vision of Empire"><img alt="Vision of Empire" src="/wiki/images/Swain_Vision_of_Empire.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Swain/LoL#Vision_of_Empire" title="Swain/LoL">Vision of Empire</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Swain" data-ability="Nevermove" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Swain/LoL#Nevermove" title="Nevermove"><img alt="Nevermove" src="/wiki/images/Swain_Nevermove.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Swain/LoL#Nevermove" title="Swain/LoL">Nevermove</a></span></span></i>.<br><br>\n<p><span class="template_sbc"><b>Soul Fragment:</b></span> For each stack, <b>Swain</b> gains <span style="color: #1F995C; white-space:normal">12 <b>bonus</b> health</span>. Upon collection, he will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> for <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="3;4;5;6" data-top_values="1;6;11;16" data-bot_key="%">3 / 4 / 5 / 6% (based on level)</span> of his <b>maximum</b> health</span>.\n</p>',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Innate:',
            raw: ' Enemy champions that  die will leave behind a Soul Fragment for 16 seconds, which can be collected by Swain after 1 second',
            values: 1,
            units: 'darkHarvestStacks',
            unitsText:
              'champions that  die will leave behind a Soul Fragment for 16 seconds, which can be collected by Swain after 1 second',
            pre: 'Enemy champions that  die will leave behind a Soul Fragment for 16 seconds, which can be collected by Swain after 1 second',
          },
          {
            effectType: 'Heal',
            name: "Swain's ravens collect nearby Soul Fragments, as well as with  Vision of Empire and  Nevermove.\nSoul Fragment:",
            raw: ' For each stack, Swain gains 12 bonus health',
            healType: 'BonusHealth',
            values: 1,
            units: 'feastStacks',
            unitsText: 'each stack, Swain gains 12 bonus health',
            pre: 'For each stack, Swain gains 12 bonus health',
          },
          {
            effectType: 'Heal',
            name: 'Line 3:',
            raw: 'Upon collection, he will  heal for 3 / 4 / 5 / 6% (based on level) of his maximum health.',
            healType: 'BonusHealth',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            units: 'maximum_hp',
            unitsText: 'of his maximum health.',
            pre: 'Upon collection, he will  heal for 3 / 4 / 5 / 6%',
            post: 'of his maximum health.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self, Enemies',
    projectile: 'false',
    notes:
      '* The ravens will only be seen by enemies if they have <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">vision</a></span> of <b>Swain</b>.',
    video: 'Swain - Passive',
  },
  "Death's Hand": {
    name: "Death's Hand",
    display_name: "Death's Hand",
    champion: 'Swain',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'SwainQ.png',
      sprite: 'spell12.png',
      group: 'spell',
      x: 0,
      y: 96,
      w: 48,
      h: 48,
    },
    effect_radius: '725',
    angle: '32°',
    cast_time: '0.<small>25</small>',
    cost: '45 / 50 / 55 / 60 / 65',
    costtype: 'Mana',
    cooldown: '7 / 6 / 5 / 4 / 3',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Swain" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Swain/LoL" title="Swain"><img alt="Swain" src="/wiki/images/Swain_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Swain/LoL" title="Swain/LoL">Swain</a></span></span> unleashes five bolts of eldritch power over <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.25 seconds, but rounded up to the next game tick.">0.<small>264</small> seconds</span> in a cone in the target direction that deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit. Subsequent bolts against an enemy deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
    ],
    description: [
      {
        icon: "/wiki/images/Death's Hand.png",
        description:
          'Active: Swain unleashes five bolts of eldritch power over 0.264 seconds in a cone in the target direction that deal magic damage to enemies hit. Subsequent bolts against an enemy deal bonus magic damage.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Swain</b> unleashes five bolts of eldritch power over <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.25 seconds, but rounded up to the next game tick.">0.<small>264</small> seconds</span> in a cone in the target direction that deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit. Subsequent bolts against an enemy deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '60 / 80 / 100 / 120 / 140 (+ 38% AP)',
            valuesHTML:
              '60 / 80 / 100 / 120 / 140 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;38% AP)</span>',
          },
          {
            name: 'Bonus Damage Per Bolt:',
            values: '12 / 22 / 32 / 42 / 52 (+ 8% AP)',
            valuesHTML:
              '12 / 22 / 32 / 42 / 52 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;8% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 80 / 100 / 120 / 140 (+ 38% AP)',
            damagetype: 'Magic',
            values: [60, 80, 100, 120, 140],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 80 / 100 / 120 / 140',
            children: [
              {
                values: 38,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 38% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Bonus Damage Per Bolt:',
            raw: '12 / 22 / 32 / 42 / 52 (+ 8% AP)',
            damagetype: 'None',
            values: [12, 22, 32, 42, 52],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '12 / 22 / 32 / 42 / 52',
            children: [
              {
                values: 8,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 8% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Area of effect',
    spellshield: true,
    projectile: 'False',
    notes:
      '* <i>Death\'s Hand</i> will still cast and deal damage if <b>Swain</b> dies during the cast time.\n<ul><li>This ability will cast from wherever the caster is at the end of the cast time.</li>\n<li>The total damage to a single target will be split evenly among each bolt that hits, meaning that hitting with more bolts will deal less damage per hit (but more overall damage).</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block all bolts.</li></ul>',
    video: 'Swain - Q',
  },
  'Vision of Empire': {
    name: 'Vision of Empire',
    display_name: 'Vision of Empire',
    champion: 'Swain',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'SwainW.png',
      sprite: 'spell12.png',
      group: 'spell',
      x: 48,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '5500 / 6000 / 6500 / 7000 / 7500',
    effect_radius: '325',
    cast_time: '0.<small>25</small>',
    cost: '60 / 65 / 70 / 75 / 80',
    costtype: 'Mana',
    cooldown: '22 / 21 / 20 / 19 / 18',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Swain" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Swain/LoL" title="Swain"><img alt="Swain" src="/wiki/images/Swain_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Swain/LoL" title="Swain/LoL">Swain</a></span></span> summons a demonic eye at the target location that explodes after a brief moment, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> enemies within for a short time.',
      'Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> hit are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span> for a few seconds and have a <span style="color: #E34D4C; white-space:normal">Soul Fragment</span> collected from them.',
    ],
    description: [
      {
        icon: '/wiki/images/Vision of Empire.png',
        description:
          'Active: Swain summons a demonic eye at the target location that grants  sight of the area for 2 seconds and explodes after 1.5 seconds, dealing magic damage to enemies within, halved against  minions, and  slowing them for 2.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Swain</b> summons a demonic eye at the target location that grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area for 2 seconds and explodes after 1.<small>5</small> seconds, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within, halved against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them for 2.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Swain summons a demonic eye at the target location that grants  sight of the area for 2 seconds and explodes after 1.5 seconds, dealing magic damage to enemies within, halved against  minions, and  slowing them for 2.5 seconds.',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'summons a demonic eye at the target location that grants  sight of the area for 2 seconds and explodes after 1.5 seconds, dealing magic damage to enemies within, halved against  minions, and  slowing them for 2.5 seconds.',
            pre: 'Swain summons a demonic eye at the target location that grants  sight of the area for 2 seconds and explodes after 1.5 seconds, dealing magic damage to enemies within, halved against  minions, and  slowing them for 2.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '80 / 115 / 150 / 185 / 220 (+ 55% AP)',
            valuesHTML:
              '80 / 115 / 150 / 185 / 220 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;55% AP)</span>',
          },
          {
            name: 'Slow:',
            values: '25 / 35 / 45 / 55 / 65%',
            valuesHTML: '25 / 35 / 45 / 55 / 65%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 115 / 150 / 185 / 220 (+ 55% AP)',
            damagetype: 'Magic',
            values: [80, 115, 150, 185, 220],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 115 / 150 / 185 / 220',
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
            name: 'Slow:',
            raw: '25 / 35 / 45 / 55 / 65%',
            values: [25, 35, 45, 55, 65],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 35 / 45 / 55 / 65%',
          },
        ],
      },
      {
        description:
          'Enemy  champions hit are also  revealed for a duration and have a Soul Fragment collected from them.',
        descriptionHTML:
          'Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> hit are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span> for a duration and have a <span style="color: #E34D4C; white-space:normal">Soul Fragment</span> collected from them.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Reveal Duration:',
            values: '4 / 5 / 6 / 7 / 8',
            valuesHTML: '4 / 5 / 6 / 7 / 8',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Reveal Duration:',
            raw: '4 / 5 / 6 / 7 / 8',
            values: [4, 5, 6, 7, 8],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '4 / 5 / 6 / 7 / 8',
          },
        ],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: 'Special',
    notes:
      '* Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> protected by a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span> do not have a <span style="color: #E34D4C; white-space:normal">Soul Fragment</span> collected from them but are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span> anyway.\n<ul><li><i>Vision of Empire</i> will grant <span style="color: #E34D4C; white-space:normal">Soul Fragments</span> from hitting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clones</a></span>.</li>\n<li><b>Swain</b> will not receive the <span style="color: #E34D4C; white-space:normal">Soul Fragments</span> if <i>Vision of Empire</i> hits enemy champions while he is dead.</li>\n<li><i>Vision of Empire</i> is visible and audible to enemies through the <a href="/wiki/Sight" title="Sight">fog of war</a>.</li>\n<li>Hitting an enemy champion with <i>Vision of Empire</i> collects nearby <span style="color: #E34D4C; white-space:normal">Soul Fragments</span>.</li></ul>',
    video: 'Swain - W',
  },
  Nevermove: {
    name: 'Nevermove',
    display_name: 'Nevermove',
    champion: 'Swain',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'SwainE.png',
      sprite: 'spell12.png',
      group: 'spell',
      x: 96,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '850',
    effect_radius: '100',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 170',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Outgoing missile">935</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Returning missile">600</span>',
    cast_time: '0.<small>25</small>',
    cost: '50',
    costtype: 'Mana',
    cooldown: '10',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Swain" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Swain/LoL" title="Swain"><img alt="Swain" src="/wiki/images/Swain_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Swain/LoL" title="Swain/LoL">Swain</a></span></span> launches a demonic wave in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
      'At max range, the wave homes back to <b>Swain</b> and detonates upon the first enemy hit, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies as well as briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooting</a></span> them. <i>Nevermove</i> can be recast while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> hit are rooted.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Swain</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulls</a></span> the rooted champions and collects a <span style="color: #E34D4C; white-space:normal">Soul Fragment</span> from each of them.',
    ],
    description: [
      {
        icon: '/wiki/images/Nevermove.png',
        description:
          'Active: Swain launches a demonic wave in the target direction that deals magic damage to enemies hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Swain</b> launches a demonic wave in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '35 / 70 / 105 / 140 / 175 (+ 25% AP)',
            valuesHTML:
              '35 / 70 / 105 / 140 / 175 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;25% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '35 / 70 / 105 / 140 / 175 (+ 25% AP)',
            damagetype: 'Magic',
            values: [35, 70, 105, 140, 175],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 70 / 105 / 140 / 175',
            children: [
              {
                values: 25,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 25% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          'At maximum range, the wave homes back to Swain and detonates upon the first enemy hit, dealing magic damage to nearby enemies and  rooting them for 1.5 seconds, during which they are  revealed. Nevermove can be recast while  champions hit are rooted.',
        descriptionHTML:
          'At maximum range, the wave homes back to <b>Swain</b> and detonates upon the first enemy hit, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooting</a></span> them for 1.<small>5</small> seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span>. <i>Nevermove</i> can be recast while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> hit are rooted.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'At maximum range, the wave homes back to Swain and detonates upon the first enemy hit, dealing magic damage to nearby enemies and  rooting them for 1.5 seconds, during which they are  revealed',
            damagetype: 'Magic',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'maximum range, the wave homes back to Swain and detonates upon the first enemy hit, dealing magic damage to nearby enemies and  rooting them for 1.5 seconds, during which they are  revealed',
            pre: 'At maximum range, the wave homes back to Swain and detonates upon the first enemy hit, dealing magic damage to nearby enemies and  rooting them for 1.5 seconds, during which they are  revealed',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '35 / 45 / 55 / 65 / 75 (+ 25% AP)',
            valuesHTML:
              '35 / 45 / 55 / 65 / 75 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;25% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '35 / 45 / 55 / 65 / 75 (+ 25% AP)',
            damagetype: 'Magic',
            values: [35, 45, 55, 65, 75],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 45 / 55 / 65 / 75',
            children: [
              {
                values: 25,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 25% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Nevermove 2.png',
        description:
          'Recast: Swain  pulls the rooted champions over 290 units and collects a Soul Fragment from each of them. If the targets would be brought past Swain, they are instead  knocked back the excess distance.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Swain</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulls</a></span> the rooted champions over 290 units and collects a <span style="color: #E34D4C; white-space:normal">Soul Fragment</span> from each of them. If the targets would be brought past <b>Swain</b>, they are instead <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked back</a></span> the excess distance.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Recast:',
            raw: ' Swain  pulls the rooted champions over 290 units and collects a Soul Fragment from each of them',
            values: 2,
            units: 'darkHarvestStacks',
            unitsText:
              'pulls the rooted champions over 290 units and collects a Soul Fragment from each of them',
            pre: 'Swain  pulls the rooted champions over 290 units and collects a Soul Fragment from each of them',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Area of effect',
    spellshield: 'Special',
    projectile: 'True',
    notes:
      '* <i>Nevermove\'s</i> recast can be used during the cast time of other spells.\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shields</a></span> block either the pass-through or the detonation, not both.</li>\n<li>If the root is not applied to or is removed from all champions, the recast does not become available.</li>\n<li>The pull will interrupt <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> at the very beginning, but does not keep the target stunned for the rest of the movement.\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">Channels</a></span> can be started successfully during the pull, provided the previous crowd control does not prevent them still.</li></ul></li>\n<li>This ability will cast from wherever the caster is at the start of the cast time.</li>\n<li>if the target champion is rooted by Nevermove but becomes spell-immune before the pull, Swain will not receive a soul fragment on reactivation since the champion cannot be displaced.</li></ul>',
    video: 'Swain - E',
  },
  'Demonic Ascension': {
    name: 'Demonic Ascension',
    display_name: 'Demonic Ascension',
    champion: 'Swain',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'SwainR.png',
      sprite: 'spell12.png',
      group: 'spell',
      x: 144,
      y: 96,
      w: 48,
      h: 48,
    },
    effect_radius: '650',
    cast_time: '0.<small>5</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">100 / 90 / 80 / 70 / 60</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Swain" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Swain/LoL" title="Swain"><img alt="Swain" src="/wiki/images/Swain_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Swain/LoL" title="Swain/LoL">Swain</a></span></span> frees the demon within, gaining <i>Demonic Ascension</i> and generating <span style="color: #E2103F; white-space:normal">Demonic Energy</span>. <i>Demonic Ascension</i> is maintained with <span style="color: #E2103F; white-space:normal">Demonic Energy</span> that gradually decays over time.',
      '<b>Swain</b> generates <span style="color: #E2103F; white-space:normal">Demonic Energy</span> while draining from at least one enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, and fully restores it upon scoring a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span>.',
      'After a short time, <b>Swain</b> can cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Swain" data-ability="Demonflare" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Swain/LoL#Demonflare" title="Demonflare"><img alt="Demonflare" src="/wiki/images/Swain_Demonflare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Swain/LoL#Demonflare" title="Swain/LoL">Demonflare</a></span></span></i> and does so automatically when <i>Demonic Ascension</i> expires.',
      '<span class="template_sbc"><b>Demonic Ascension:</b></span> <b>Swain</b> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and continually drains the lifeforce of nearby enemies, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Healing"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> himself. <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Swain" data-ability="Nevermove" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Swain/LoL#Nevermove" title="Nevermove\'s"><img alt="Nevermove\'s" src="/wiki/images/Swain_Nevermove.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Swain/LoL#Nevermove" title="Swain/LoL">Nevermove\'s</a></span></span></i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is also reduced.',
    ],
    description: [
      {
        icon: '/wiki/images/Demonic Ascension.png',
        description:
          'Active: Swain frees the demon within, gaining Demonic Ascension and generating 50 Demonic Energy. Demonic Ascension is maintained with Demonic Energy, which decays by 5 every 0.5 seconds, increased to 7.5 after 5 seconds have elapsed. Swain generates 10 Demonic Energy every 0.5 seconds while draining from at least one enemy  champion, and fully restores it to the maximum of 50 upon scoring a  champion  takedown.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Swain</b> frees the demon within, gaining <i>Demonic Ascension</i> and generating <span style="color: #E2103F; white-space:normal">50 Demonic Energy</span>. <i>Demonic Ascension</i> is maintained with <span style="color: #E2103F; white-space:normal">Demonic Energy</span>, which decays by <span style="color: #E2103F; white-space:normal">5</span> every 0.<small>5</small> seconds, increased to <span style="color: #E2103F; white-space:normal">7.<small>5</small></span> after 5 seconds have elapsed. <b>Swain</b> generates <span style="color: #E2103F; white-space:normal">10 Demonic Energy</span> every 0.<small>5</small> seconds while draining from at least one enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, and fully restores it to the maximum of <span style="color: #E2103F; white-space:normal">50</span> upon scoring a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Swain frees the demon within, gaining Demonic Ascension and generating 50 Demonic Energy',
            values: 5,
            user: 'none',
            units: '',
            unitsText:
              'frees the demon within, gaining Demonic Ascension and generating 50 Demonic Energy',
            pre: 'Swain frees the demon within, gaining Demonic Ascension and generating 50 Demonic Energy',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Demonic Ascension is maintained with Demonic Energy, which decays by 5 every 0.5 seconds, increased to 7.5 after 5 seconds have elapsed',
            damagetype: 'None',
            values: 5,
            units: 'total_ap',
            unitsText:
              'Ascension is maintained with Demonic Energy, which decays by 5 every 0.5 seconds, increased to 7.5 after 5 seconds have elapsed',
            pre: 'Demonic Ascension is maintained with Demonic Energy, which decays by 5 every 0.5 seconds, increased to 7.5 after 5 seconds have elapsed',
          },
          {
            effectType: 'Unique',
            name: 'Line 3:',
            raw: 'Swain generates 10 Demonic Energy every 0.5 seconds while draining from at least one enemy  champion, and fully restores it to the maximum of 50 upon scoring a  champion  takedown.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'generates 10 Demonic Energy every 0.5 seconds while draining from at least one enemy  champion, and fully restores it to the maximum of 50 upon scoring a  champion  takedown.',
            pre: 'Swain generates 10 Demonic Energy every 0.5 seconds while draining from at least one enemy  champion, and fully restores it to the maximum of 50 upon scoring a  champion  takedown.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Demonic Ascension: Swain is  ghosted and drains the lifeforce of nearby enemies, both dealing magic damage and  healing himself each second per target affected. The heal is reduced by 90% against  minions and  monsters.  Nevermove's  cooldown is also reduced by 20%.",
        descriptionHTML:
          '<span class="template_sbc"><b>Demonic Ascension:</b></span> <b>Swain</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and drains the lifeforce of nearby enemies, both dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Healing"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> himself each second per target affected. The heal is reduced by 90% against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>. <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Swain" data-ability="Nevermove" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Swain/LoL#Nevermove" title="Nevermove\'s"><img alt="Nevermove\'s" src="/wiki/images/Swain_Nevermove.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Swain/LoL#Nevermove" title="Swain/LoL">Nevermove\'s</a></span></span></i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is also reduced by 20%.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: 'The heal is reduced by 90% against  minions and  monsters',
            healType: 'DrainEffect',
            values: 9,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'against  minions and  monstersheal is reduced by 90',
            pre: 'The heal is reduced by 90% against  minions and  monsters',
          },
          {
            effectType: 'Unique',
            name: 'Line 3:',
            raw: " Nevermove's  cooldown is also reduced by 20%.",
            values: 2,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '. cooldown is also reduced by 20',
            pre: "Nevermove's  cooldown is also reduced by 20%.",
          },
        ],
        leveling: [
          {
            name: 'Magic Damage per Tick:',
            values: '20 / 30 / 40 / 50 / 60 (+ 10% AP)',
            valuesHTML:
              '20 / 30 / 40 / 50 / 60 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;10% AP)</span>',
          },
          {
            name: 'Heal per Tick:',
            values: '15 / 21.25 / 27.5 / 33.75 / 40 (+ 18% AP)',
            valuesHTML:
              '15 / 21.<small>25</small> / 27.<small>5</small> / 33.<small>75</small> / 40 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;18% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage per Tick:',
            raw: '20 / 30 / 40 / 50 / 60 (+ 10% AP)',
            damagetype: 'Magic',
            values: [20, 30, 40, 50, 60],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 30 / 40 / 50 / 60',
            children: [
              {
                values: 10,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 10% AP',
              },
            ],
          },
          {
            effectType: 'Heal',
            name: 'Heal per Tick:',
            raw: '15 / 21.25 / 27.5 / 33.75 / 40 (+ 18% AP)',
            healType: 'DrainEffect',
            values: [15, 21.25, 27.5, 33.75, 40],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 21.25 / 27.5 / 33.75 / 40',
            children: [
              {
                values: 18,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 18% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          'After 2 seconds, Swain can cast  Demonflare, and does so automatically when Demonic Ascension expires.',
        descriptionHTML:
          'After 2 seconds, <b>Swain</b> can cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Swain" data-ability="Demonflare" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Swain/LoL#Demonflare" title="Demonflare"><img alt="Demonflare" src="/wiki/images/Swain_Demonflare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Swain/LoL#Demonflare" title="Swain/LoL">Demonflare</a></span></span></i>, and does so automatically when <i>Demonic Ascension</i> expires.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'After 2 seconds, Swain can cast  Demonflare, and does so automatically when Demonic Ascension expires.',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              '2 seconds, Swain can cast  Demonflare, and does so automatically when Demonic Ascension expires.',
            pre: 'After 2 seconds, Swain can cast  Demonflare, and does so automatically when Demonic Ascension expires.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'The targets do not have to be  visible to be hit by this ability.',
        descriptionHTML:
          '<i>The targets do not have to be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> to be hit by this ability.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self, Enemies',
    damagetype: 'Magic',
    spelleffects: 'aoedot',
    spellshield: false,
    projectile: 'False',
    notes:
      '* <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Swain" data-ability="Demonflare" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Swain/LoL#Demonflare" title="Demonflare"><img alt="Demonflare" src="/wiki/images/Swain_Demonflare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Swain/LoL#Demonflare" title="Swain/LoL">Demonflare</a></span></span> will not automatically cast at the end of <i>Demonic Ascension</i> if it occurs due to <b>Swain\'s</b> death.\n<ul><li><b>Swain</b> can still move during <i>Demonic Ascension\'s</i> cast time.</li></ul>\n<div class="center"><div class="floatnone" style="width: 480px"> <a href="https://leagueoflegends.fandom.com/wiki/File:Swain_-_R" class="video video-thumbnail large "> \t<img src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" alt="Swain_-_R" height="269" width="480" data-video-key="Swain_-_R" data-video-name="Swain - R" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/2/2a/Swain_-_R/revision/latest?cb=20180124082739" class="lazyload"> \t<span class="thumbnail-play-icon-container"> \t\t<svg class="thumbnail-play-icon wds-icon"><use xlink:href="#wds-player-icon-play"></use></svg>\t</span> </a> </div></div>',
  },
  Demonflare: {
    name: 'Demonflare',
    display_name: 'Demonflare',
    champion: 'Swain',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'SwainR.png',
      sprite: 'spell12.png',
      group: 'spell',
      x: 144,
      y: 96,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 675',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Individual missiles">60</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Shockwave speed">3000</span>',
    cast_time: '0.<small>25</small>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <b>Swain</b> emits a nova of soulfire that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and applies a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> that decays over a brief moment.',
    ],
    description: [
      {
        icon: '/wiki/images/Demonflare.png',
        description:
          'Active: Swain releases a nova of soulfire that deals magic damage to nearby enemies and  slows them by 60%, decaying over 1.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Swain</b> releases a nova of soulfire that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 60%, decaying over 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Swain releases a nova of soulfire that deals magic damage to nearby enemies and  slows them by 60%, decaying over 1.5 seconds.',
            damagetype: 'Magic',
            values: 6,
            valuesIsPercent: true,
            units: 'darkHarvestStacks',
            unitsText:
              ', decaying over 1.5 seconds.releases a nova of soulfire that deals magic damage to nearby enemies and  slows them by 60',
            pre: 'Swain releases a nova of soulfire that deals magic damage to nearby enemies and  slows them by 60%, decaying over 1.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '150 / 187.5 / 225 / 262.5 / 300 (+ 60% AP)',
            valuesHTML:
              '150 / 187.<small>5</small> / 225 / 262.<small>5</small> / 300 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '150 / 187.5 / 225 / 262.5 / 300 (+ 60% AP)',
            damagetype: 'Magic',
            values: [150, 187.5, 225, 262.5, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 187.5 / 225 / 262.5 / 300',
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
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'True',
    notes:
      '* <i>Demon Flare</i> counts as an ability activation for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li><i>Demon Flare</i> passes through champions. Effects like <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL" title="Yasuo\'s"><img alt="Yasuo\'s" src="/wiki/images/Yasuo_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL" title="Yasuo/LoL">Yasuo\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Wind Wall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Wind Wall"><img alt="Wind Wall" src="/wiki/images/Yasuo_Wind_Wall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Yasuo/LoL">Wind Wall</a></span></span></span> and <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL" title="Braum\'s"><img alt="Braum\'s" src="/wiki/images/Braum_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL" title="Braum/LoL">Braum\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-ability="Unbreakable" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL#Unbreakable" title="Unbreakable"><img alt="Unbreakable" src="/wiki/images/Braum_Unbreakable.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL#Unbreakable" title="Braum/LoL">Unbreakable</a></span></span></span> will block the portion of the nova they intercept.</li>\n<li><b>Swain</b> can move during <i>Demonflare\'s</i> cast time.</li>\n<li><i>Demonflare</i> will fire from wherever <b>Swain</b> is at the end of the cast time.</li></ul>',
  },
} satisfies { [skillName in string]: SkillData };
