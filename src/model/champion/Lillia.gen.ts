import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Lillia';

export default {
  'Dream-Laden Bough': {
    name: 'Dream-Laden Bough',
    display_name: 'Dream-Laden Bough',
    champion: 'Lillia',
    skill: 'I',
    image: {
      full: 'Lillia_Icon_Passive.png',
      sprite: 'passive2.png',
      group: 'passive',
      x: 384,
      y: 0,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lillia" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lillia/LoL" title="Lillia\'s"><img alt="Lillia\'s" src="/wiki/images/Lillia_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lillia/LoL" title="Lillia/LoL">Lillia\'s</a></span></span> abilities apply <i>Dream Dust</i> to enemies hit, which continually deals <span style="color: #00B0F0; white-space:normal">magic damage</span> based on the <span style="color: #1F995C; white-space:normal">target\'s <b>maximum</b> health</span> over a short time, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> her for the same duration.',
    ],
    description: [
      {
        icon: '/wiki/images/Dream-Laden Bough.png',
        description:
          "Innate: Lillia's abilities apply Dream Dust to enemies hit, which deals「 5% (+ 1.5% per 100 AP) of the target's maximum health total magic damage over 3 seconds, capped at 50 − 150 (based on level) 」「 0.83% (+ 0.25% per 100 AP) of the target's maximum health magic damage every 0.5 seconds over 3 seconds, capped at 8.33 − 25 (based on level) per tick 」against  monsters.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Lillia\'s</b> <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> apply <i>Dream Dust</i> to enemies hit, which deals<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color: #1F995C; white-space:normal">5% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;1.<small>5</small>% per 100 AP)</span> of the target\'s <b>maximum</b> health</span> <span style="color: #00B0F0; white-space:normal"><b>total</b> magic damage</span> over 3 seconds, capped at <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="50;" data-finish="150;" data-bot_values="50;55.88;61.76;67.65;73.53;79.41;85.29;91.18;97.06;102.94;108.82;114.71;120.59;126.47;132.35;138.24;144.12;150" data-top_values="">50 − 150 (based on level)</span>&nbsp;」</span><span class="flipText2">「&nbsp;<span style="color: #1F995C; white-space:normal">0.<small>8<span style="text-decoration: overline;">3</span></small>% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;0.<small>25</small>% per 100 AP)</span> of the target\'s <b>maximum</b> health</span> <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>5</small> seconds over 3 seconds, capped at <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="8.3333333333333;" data-finish="25;" data-bot_values="8.33;9.31;10.29;11.27;12.25;13.24;14.22;15.2;16.18;17.16;18.14;19.12;20.1;21.08;22.06;23.04;24.02;25" data-top_values="">8.<small>33</small> − 25 (based on level)</span> per tick&nbsp;」</span></span>against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Innate:',
            raw: " Lillia's abilities apply Dream Dust to enemies hit, which deals「 5% (+ 1.5% per 100 AP) of the target's maximum health total magic damage over 3 seconds, capped at 50 − 150 (based on level) 」「 0.83% (+ 0.25% per 100 AP) of the target's maximum health magic damage every 0.5 seconds over 3 seconds, capped at 8.33 − 25 (based on level) per tick 」against  monsters.",
            healType: 'OutgoingHeals',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            units: 'total_ap',
            unitsText:
              "of the target's maximum health total magic damage over 3 seconds, capped at 50 − 150",
            pre: "Lillia's abilities apply Dream Dust to enemies hit, which deals「 5%",
            post: "of the target's maximum health total magic damage over 3 seconds, capped at 50 − 150",
            children: [
              {
                values: 1.5,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 1.5% per 100 AP',
              },
              {
                values: 0.25,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 0.25% per 100 AP',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Lillia  heals for 24 − 75 (based on level) (+ 5.4% AP) against large  monsters and 6 − 120 (based on level) (+ 18% AP) against  champions over the duration of Dream Dust, reduced to 33% effectiveness for each target beyond the first. She may only heal against 1 monster at a time.',
        descriptionHTML:
          '<b>Lillia</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="24;" data-finish="75;" data-bot_values="24;27;30;33;36;39;42;45;48;51;54;57;60;63;66;69;72;75" data-top_values="">24 − 75 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;5.<small>4</small>% AP)</span> against large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> and <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-useformula="(1 + (19 / 17) * (x - 1) * (0.7025 + 0.0175 * (x - 1)))*6" data-bot_values="6;10.83;15.89;21.19;26.72;32.49;38.49;44.73;51.2;57.9;64.84;72.02;79.43;87.07;94.95;103.07;111.42;120" data-top_values="">6 − 120 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;18% AP)</span> against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> over the duration of <i>Dream Dust</i>, reduced to 33% effectiveness for each target beyond the first. She may only heal against 1 monster at a time.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: 'Lillia  heals for 24 − 75 (based on level) (+ 5.4% AP) against large  monsters and 6 − 120 (based on level) (+ 18% AP) against  champions over the duration of Dream Dust, reduced to 33% effectiveness for each target beyond the first',
            healType: 'OutgoingHeals',
            values: [
              24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69,
              72, 75,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'against large  monsters and 6 − 120',
            pre: 'Lillia  heals for 24 − 75',
            post: 'against large  monsters and 6 − 120',
            children: [
              {
                values: 5.4,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 5.4% AP',
              },
              {
                values: 18,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 18% AP',
              },
            ],
          },
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: 'She may only heal against 1 monster at a time.',
            healType: 'DrainEffect',
            values: 1,
            user: 'none',
            units: '',
            unitsText: 'may only heal against 1 monster at a time.',
            pre: 'She may only heal against 1 monster at a time.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies',
    damagetype: 'magic',
    spelleffects: 'dot',
    spellshield: true,
    notes:
      '* <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lillia" data-ability="Lilting Lullaby" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lillia/LoL#Lilting_Lullaby" title="Lilting Lullaby\'s"><img alt="Lilting Lullaby\'s" src="/wiki/images/Lillia_Lilting_Lullaby.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lillia/LoL#Lilting_Lullaby" title="Lillia/LoL">Lilting Lullaby\'s</a></span></span> application does not apply <i>Dream Dust</i>, but its triggering damage does.\n<ul><li><i>Dream Dust</i> is applied even if the target takes no damage from an ability, e.g. by being <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shielded</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invulnerability"><a href="/wiki/Invulnerability" title="Invulnerability"><img alt="Cosmic Radiance.png" src="/wiki/images/Taric_Cosmic_Radiance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability" title="Invulnerability">invulnerable</a></span>, but not when the ability hit is prevented in the first place (e.g. <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span>).</li></ul>',
  },
  'Blooming Blows': {
    name: 'Blooming Blows',
    display_name: 'Blooming Blows',
    champion: 'Lillia',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'LilliaQ.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 384,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Inner Radius">225</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Outer Radius">485</span>',
    cast_time: '0.<small>25</small>',
    cost: '65',
    costtype: 'Mana',
    cooldown: '6 / 5.<small>5</small> / 5 / 4.<small>5</small> / 4',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> Whenever <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lillia" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lillia/LoL" title="Lillia\'s"><img alt="Lillia\'s" src="/wiki/images/Lillia_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lillia/LoL" title="Lillia/LoL">Lillia\'s</a></span></span> abilities hit at least one enemy, she generates a stack of <i>Prance</i>, up to a cap.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Lillia</b> swings her censer around her, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies. Enemies hit within the outer edge of the area additionally take the same amount as <span style="color: #F9966B; white-space:normal"><b>bonus</b> true damage</span>.',
      '<span class="template_sbc"><b>Prance:</b></span> For each stack, <b>Lillia</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>.',
    ],
    description: [
      {
        description:
          "Passive: Whenever Lillia's abilities hit at least one enemy, she generates a stack of Prance for 6.5 seconds, refreshing on subsequent hits and stacking up to 4 times. Stacks expire by one every 1.5 seconds when the duration ends.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> Whenever <b>Lillia\'s</b> abilities hit at least one enemy, she generates a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Prance</i> for 6.<small>5</small> seconds, refreshing on subsequent hits and stacking up to 4 times. Stacks expire by one every 1.<small>5</small> seconds when the duration ends.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Passive:',
            raw: " Whenever Lillia's abilities hit at least one enemy, she generates a stack of Prance for 6.5 seconds, refreshing on subsequent hits and stacking up to 4 times",
            min: 0,
            max: 10,
            description:
              " Whenever Lillia's abilities hit at least one enemy, she generates a stack of Prance for 6.5 seconds, refreshing on subsequent hits and stacking up to 4 times",
            values: 6,
            units: 'feastStacks',
            unitsText:
              "Lillia's abilities hit at least one enemy, she generates a stack of Prance for 6.5 seconds, refreshing on subsequent hits and stacking up to 4 times",
            pre: "Whenever Lillia's abilities hit at least one enemy, she generates a stack of Prance for 6.5 seconds, refreshing on subsequent hits and stacking up to 4 times",
          },
          {
            effectType: 'Stacks',
            name: 'Line 2:',
            raw: 'Stacks expire by one every 1.5 seconds when the duration ends.',
            min: 0,
            max: 10,
            description:
              'Stacks expire by one every 1.5 seconds when the duration ends.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'expire by one every 1.5 seconds when the duration ends.',
            pre: 'Stacks expire by one every 1.5 seconds when the duration ends.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Prance.png',
        description:
          'Prance: For each stack, Lillia gains  bonus movement speed.',
        descriptionHTML:
          '<span class="template_sbc"><b>Prance:</b></span> For each stack, <b>Lillia</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Bonus Movement Speed:',
            values: '3 / 4 / 5 / 6 / 7% (+ 3% per 100 AP)',
            valuesHTML:
              '3 / 4 / 5 / 6 / 7% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;3% per 100 AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Movement Speed:',
            raw: '3 / 4 / 5 / 6 / 7% (+ 3% per 100 AP)',
            damagetype: 'None',
            values: [3, 4, 5, 6, 7],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '3 / 4 / 5 / 6 / 7%',
            children: [
              {
                values: 3,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 3% per 100 AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Blooming Blows.png',
        description:
          'Active: Lillia swings her censer around her, dealing magic damage to nearby enemies. Enemies hit within the outer edge of the area additionally take the same amount as  bonus true damage.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Lillia</b> swings her censer around her, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies. Enemies hit within the outer edge of the area additionally take the same amount as <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal"><b>bonus</b> true damage</span></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '35 / 45 / 55 / 65 / 75 (+ 45% AP)',
            valuesHTML:
              '35 / 45 / 55 / 65 / 75 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;45% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '35 / 45 / 55 / 65 / 75 (+ 45% AP)',
            damagetype: 'Magic',
            values: [35, 45, 55, 65, 75],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 45 / 55 / 65 / 75',
            children: [
              {
                values: 45,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 45% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Self, Enemies',
    damagetype:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Magic damage"><a href="/wiki/Magic_damage" title="Magic damage"><img alt="Magic damage.png" src="/wiki/images/Magic_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Magic_damage" title="Magic damage">Magic</a></span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True damage"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration.png" src="/wiki/images/Hybrid_penetration.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/True_damage" title="True damage">True</a></span>',
    spelleffects: 'aoe',
    spellshield: true,
    notes:
      '* <b>Lillia</b> can move during <i>Blooming Blows\' </i>cast time.\n<ul><li>This ability will cast from wherever the caster is at the end of the cast time.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will not prevent <b>Lillia</b> from gaining a <i>Prance</i> stack.</li>\n<li>For the purpose of aim-assist, <b>Lillia\'s</b> <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Range" title="Range">attack range</a></span> is reduced<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;to 275&nbsp;」</span><span class="flipText2">「&nbsp;by 50&nbsp;」</span></span>during <i>Blooming Blows\'s</i> cast time.</li></ul>',
  },
  'Watch Out! Eep!': {
    name: 'Watch Out! Eep!',
    display_name: 'Watch Out! Eep!',
    champion: 'Lillia',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'LilliaW.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 432,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '500 / 350',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Inner Radius">65</span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Outer Radius">250</span>',
    cast_time:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dash starts immediately before a 0.25 cast time, but actual delay is 0.6 to 0.75 seconds">None</span>',
    cost: '50',
    costtype: 'Mana',
    cooldown: '14 / 13 / 12 / 11 / 10',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lillia" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lillia/LoL" title="Lillia"><img alt="Lillia" src="/wiki/images/Lillia_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lillia/LoL" title="Lillia/LoL">Lillia</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> toward the target area and smashes her censer, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit. Enemies hit within the epicenter are dealt <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">increased damage</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Watch Out! Eep!.png',
        description:
          'Active: Lillia  dashes to 150 units in front of the target location over 0.759 seconds, though not through terrain, and deals magic damage in an area around the target spot. Enemies hit within the epicenter are dealt  200% increased damage.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Lillia</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to 150 units in front of the target location over <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.75 seconds, but rounded up to the next game tick.">0.<small>759</small> seconds</span>, though not through terrain, and deals <span style="color: #00B0F0; white-space:normal">magic damage</span> in an area around the target spot. Enemies hit within the epicenter are dealt <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">200% increased damage</span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Lillia  dashes to 150 units in front of the target location over 0.759 seconds, though not through terrain, and deals magic damage in an area around the target spot',
            damagetype: 'Magic',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'dashes to 150 units in front of the target location over 0.759 seconds, though not through terrain, and deals magic damage in an area around the target spot',
            pre: 'Lillia  dashes to 150 units in front of the target location over 0.759 seconds, though not through terrain, and deals magic damage in an area around the target spot',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Enemies hit within the epicenter are dealt  200% increased damage.',
            damagetype: 'None',
            values: 2,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'increased damage.hit within the epicenter are dealt  200',
            pre: 'Enemies hit within the epicenter are dealt  200% increased damage.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '80 / 100 / 120 / 140 / 160 (+ 35% AP)',
            valuesHTML:
              '80 / 100 / 120 / 140 / 160 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;35% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 100 / 120 / 140 / 160 (+ 35% AP)',
            damagetype: 'Magic',
            values: [80, 100, 120, 140, 160],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 100 / 120 / 140 / 160',
            children: [
              {
                values: 35,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 35% AP',
              },
            ],
          },
        ],
      },
      {
        description: 'Watch Out! Eep! deals 50% damage to  minions.',
        descriptionHTML:
          '<i>Watch Out! Eep!</i> deals 50% damage to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Watch Out! Eep! deals 50% damage to  minions.',
            damagetype: 'None',
            values: 5,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'damage to  minions.Out! Eep! deals 50',
            pre: 'Watch Out! Eep! deals 50% damage to  minions.',
          },
        ],
        leveling: [
          {
            name: 'Minion Damage:',
            values: '40 / 50 / 60 / 70 / 80 (+ 17.5% AP)',
            valuesHTML:
              '40 / 50 / 60 / 70 / 80 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;17.<small>5</small>% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Minion Damage:',
            raw: '40 / 50 / 60 / 70 / 80 (+ 17.5% AP)',
            damagetype: 'None',
            values: [40, 50, 60, 70, 80],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 50 / 60 / 70 / 80',
            children: [
              {
                values: 17.5,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 17.5% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          'Watch Out! Eep! will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i>Watch Out! Eep! will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'aoe',
    spellshield: true,
    notes:
      '* <b>Lillia</b> dashes to her target location over <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.6 to 0.75 seconds, but rounded to the next game tick">0.<small>627</small> to 0.<small>759</small> seconds</span>, but cannot move before the strike goes off at 0.<small>759</small> seconds, regardless.\n<ul><li><b>Lillia</b> can hop over the edges of certain walls despite the ability being unable to traverse terrain.</li></ul>',
  },
  Swirlseed: {
    name: 'Swirlseed',
    display_name: 'Swirlseed',
    champion: 'Lillia',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'LilliaE.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 0,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '700 / Global',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Landing Location Hit Radius, estimated">150</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Lobbed and rolling seed (Lobbed seed does not collide by itself)">120</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Lobbed seed">5000</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Rolling Seed">1400</span>',
    cast_time: '0.<small>4</small>',
    cost: '70',
    costtype: 'Mana',
    cooldown: '14',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lillia" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lillia/LoL" title="Lillia"><img alt="Lillia" src="/wiki/images/Lillia_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lillia/LoL" title="Lillia/LoL">Lillia</a></span></span> lobs a seed at the target area that rolls forward indefinitely. The seed detonates upon hitting an enemy or terrain, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies in a cone, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> them for a short time.',
    ],
    description: [
      {
        icon: '/wiki/images/Swirlseed.png',
        description:
          'Active: Lillia lobs a seed at the target location that rolls forward indefinitely. The seed detonates upon hitting an enemy or terrain while on the ground, dealing magic damage to enemies in a cone,  slowing them by 40% for 3 seconds and  revealing them for 2 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Lillia</b> lobs a seed at the target location that rolls forward indefinitely. The seed detonates upon hitting an enemy or terrain while on the ground, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies in a cone, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 40% for 3 seconds and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> them for 2 seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'The seed detonates upon hitting an enemy or terrain while on the ground, dealing magic damage to enemies in a cone,  slowing them by 40% for 3 seconds and  revealing them for 2 seconds.',
            damagetype: 'Magic',
            values: 4,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'for 3 seconds and  revealing them for 2 seconds.seed detonates upon hitting an enemy or terrain while on the ground, dealing magic damage to enemies in a cone,  slowing them by 40',
            pre: 'The seed detonates upon hitting an enemy or terrain while on the ground, dealing magic damage to enemies in a cone,  slowing them by 40% for 3 seconds and  revealing them for 2 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '70 / 95 / 120 / 145 / 170 (+ 60% AP)',
            valuesHTML:
              '70 / 95 / 120 / 145 / 170 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 95 / 120 / 145 / 170 (+ 60% AP)',
            damagetype: 'Magic',
            values: [70, 95, 120, 145, 170],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 95 / 120 / 145 / 170',
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
        description: 'Swirlseed will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i>Swirlseed will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'aoe',
    spellshield: 'Special',
    projectile: 'special',
    notes:
      '* <i>Swirlseed\'s</i> origin is determined from <b>Lillia\'s</b> position at the start of cast, the rolling direction is determined from <b>Lillia\'s</b> position at the end of cast (when the projectile is created, not when the seed starts rolling).\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> does not prevent the seed from detonating thus striking nearby targets.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">Projectile destroying effects</a></span> will still make the rolling seed detonate upon colliding with them, but not when the initial arcing missile is destroyed.\n<ul><li>If <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL" title="Braum\'s"><img alt="Braum\'s" src="/wiki/images/Braum_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL" title="Braum/LoL">Braum\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-ability="Unbreakable" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL#Unbreakable" title="Unbreakable"><img alt="Unbreakable" src="/wiki/images/Braum_Unbreakable.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL#Unbreakable" title="Braum/LoL">Unbreakable</a></span></span></span> blocks the initial projectile, it is destroyed and deals 0 damage to him, as well as not triggering the cone-shaped area of effect.</li></ul></li>\n<li>The spot at which the seed will collide with terrain is highlighted while it is rolling.</li></ul>\n<figure class="thumb tleft " style="width: 175px"> \t<a href="https://static.wikia.nocookie.net/leagueoflegends/images/7/72/Swirlseed_collision_indicator.png/revision/latest?cb=20200721182502" class="image"><img alt="" src="/wiki/images/Swirlseed_collision_indicator.png" decoding="async" loading="lazy" width="175" height="156" class="thumbimage lazyload"></a> \t<noscript><a href="https://static.wikia.nocookie.net/leagueoflegends/images/7/72/Swirlseed_collision_indicator.png/revision/latest?cb=20200721182502" class="image"><img alt="" src="https://static.wikia.nocookie.net/leagueoflegends/images/7/72/Swirlseed_collision_indicator.png/revision/latest/scale-to-width-down/175?cb=20200721182502" decoding="async" loading="lazy" width="175" height="156" class="thumbimage" data-image-name="Swirlseed collision indicator.png" data-image-key="Swirlseed_collision_indicator.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/7/72/Swirlseed_collision_indicator.png/revision/latest/scale-to-width-down/175?cb=20200721182502"></a></noscript> \t<figcaption class="thumbcaption"> \t\t \t\t \t\t \t\t\t<p class="caption">Collision indicator</p> \t\t \t</figcaption> </figure>',
  },
  'Lilting Lullaby': {
    name: 'Lilting Lullaby',
    display_name: 'Lilting Lullaby',
    champion: 'Lillia',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'LilliaR.png',
      sprite: 'spell7.png',
      group: 'spell',
      x: 48,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="or 19500">Global</span>',
    cast_time: '0.<small>4</small>',
    cost: '50',
    costtype: 'Mana',
    cooldown: '150 / 140 / 130 / 120 / 110',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lillia" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lillia/LoL" title="Lillia"><img alt="Lillia" src="/wiki/images/Lillia_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lillia/LoL" title="Lillia/LoL">Lillia</a></span></span> casts a magical lullaby over all enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> affected by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lillia" data-ability="Dream-Laden Bough" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lillia/LoL#Dream-Laden_Bough" title="Dream Dust"><img alt="Dream Dust" src="/wiki/images/Lillia_Dream-Laden_Bough.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lillia/LoL#Dream-Laden_Bough" title="Lillia/LoL">Dream Dust</a></span></span></i>, making them <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Drowsy"><a href="/wiki/Types_of_Crowd_Control#Drowsy" title="Types of Crowd Control#Drowsy"><img alt="Drowsy icon.png" src="/wiki/images/Drowsy_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Drowsy" title="Types of Crowd Control">drowsy</a></span> before falling <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Asleep"><a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control#Sleep"><img alt="Sleep icon.png" src="/wiki/images/Sleep_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control">asleep</a></span> for a few seconds.',
      'Damaging <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sleep"><a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control#Sleep"><img alt="Sleep icon.png" src="/wiki/images/Sleep_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control">sleeping</a></span> targets consumes the debuff to deal additional <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Lilting Lullaby.png',
        description:
          'Active: Lillia casts a magical lullaby over all enemy  champions affected by  Dream Dust, which arrives after 0.3 seconds and renders them  drowsy for 1.5 seconds,  slowing them by 10%. After the duration, they fall  asleep for a duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Lillia</b> casts a magical lullaby over all enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> affected by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lillia" data-ability="Dream-Laden Bough" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lillia/LoL#Dream-Laden_Bough" title="Dream Dust"><img alt="Dream Dust" src="/wiki/images/Lillia_Dream-Laden_Bough.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lillia/LoL#Dream-Laden_Bough" title="Lillia/LoL">Dream Dust</a></span></span></i>, which <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="fixed travel time missile">arrives after 0.<small>3</small> seconds</span> and renders them <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Drowsy"><a href="/wiki/Types_of_Crowd_Control#Drowsy" title="Types of Crowd Control#Drowsy"><img alt="Drowsy icon.png" src="/wiki/images/Drowsy_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Drowsy" title="Types of Crowd Control">drowsy</a></span> for 1.<small>5</small> seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 10%. After the duration, they fall <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Asleep"><a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control#Sleep"><img alt="Sleep icon.png" src="/wiki/images/Sleep_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control">asleep</a></span> for a duration.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Sleep Duration:',
            values: '2 / 2.125 / 2.25 / 2.375 / 2.5',
            valuesHTML:
              '2 / 2.<small>125</small> / 2.<small>25</small> / 2.<small>375</small> / 2.<small>5</small>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Sleep Duration:',
            raw: '2 / 2.125 / 2.25 / 2.375 / 2.5',
            values: [2, 2.125, 2.25, 2.375, 2.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '2 / 2.125 / 2.25 / 2.375 / 2.5',
          },
        ],
      },
      {
        icon: '/wiki/images/Lilting Lullaby 2.png',
        description:
          'The next instance of non- persistent non- minion non-small and medium  monster damage against a  sleeping target consumes the debuff to deal additional magic damage.',
        descriptionHTML:
          'The next instance of non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Persistent damage"><a href="/wiki/Damage" title="Damage"><img alt="Blaze.png" src="/wiki/images/Brand_Blaze.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">persistent</a></span> non-<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span> non-small and medium <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> damage against a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sleep"><a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control#Sleep"><img alt="Sleep icon.png" src="/wiki/images/Sleep_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control">sleeping</a></span> target consumes the debuff to deal <span style="color: #00B0F0; white-space:normal"><b>additional</b> magic damage</span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '100 / 125 / 150 / 175 / 200 (+ 40% AP)',
            valuesHTML:
              '100 / 125 / 150 / 175 / 200 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '100 / 125 / 150 / 175 / 200 (+ 40% AP)',
            damagetype: 'Magic',
            values: [100, 125, 150, 175, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 125 / 150 / 175 / 200',
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
          'An enemy champion affected by  Dream Dust is required to cast this ability.',
        descriptionHTML:
          '<i>An enemy champion affected by <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lillia" data-ability="Dream-Laden Bough" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lillia/LoL#Dream-Laden_Bough" title="Dream Dust"><img alt="Dream Dust" src="/wiki/images/Lillia_Dream-Laden_Bough.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lillia/LoL#Dream-Laden_Bough" title="Lillia/LoL">Dream Dust</a></span></span> is required to cast this ability.</i>',
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
    projectile: 'true',
    notes:
      '* The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sleep"><a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control#Sleep"><img alt="Sleep icon.png" src="/wiki/images/Sleep_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control">sleep</a></span> debuff is named <i>Shhh.. They\'re Asleep</i>.\n<ul><li><b>Lillia</b> can move during <i>Lilting Lullaby\'s</i> cast time.</li>\n<li>The additional <span style="color: #00B0F0; white-space:normal">magic damage</span> dealt is accredited to <b>Lillia</b> and benefits from her <span style="white-space:nowrap"><a href="/wiki/Magic_penetration" title="Magic penetration"><img alt="Magic penetration icon.png" src="/wiki/images/Magic_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:turquoise; white-space:normal">magic penetration</span></span>.</li>\n<li><i>Lilting Lullaby\'s</i> missile will still hit even if the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> during the cast time.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup>\n<ul><li>If the target becomes so while it is travelling, it will be destroyed.</li></ul></li>\n<li><i>Lilting Lullaby\'s</i> application does not trigger aggro from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span>, only its triggering damage does.\n<ul><li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lillia" data-ability="Dream-Laden Bough" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lillia/LoL#Dream-Laden_Bough" title="Dream Dust\'s"><img alt="Dream Dust\'s" src="/wiki/images/Lillia_Dream-Laden_Bough.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lillia/LoL#Dream-Laden_Bough" title="Lillia/LoL">Dream Dust\'s</a></span></span> persistent damage will still cause <b>Lillia</b> to trigger turret aggro, unless she casts <i>Lilting Lullaby</i> right before it runs out.</li></ul></li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lillia" data-ability="Dream-Laden Bough" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lillia/LoL#Dream-Laden_Bough" title="Dream Dust"><img alt="Dream Dust" src="/wiki/images/Lillia_Dream-Laden_Bough.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lillia/LoL#Dream-Laden_Bough" title="Lillia/LoL">Dream Dust</a></span></span> will mark targets if <i>Lilting Lullaby</i> is learned.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Lillia_Original_R_0.ogg   "Sleepy time!"',
  },
} satisfies { [skillName in string]: SkillData };
