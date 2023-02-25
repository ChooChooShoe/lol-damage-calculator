import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Seraphine';

export default {
  'Stage Presence': {
    name: 'Stage Presence',
    display_name: 'Stage Presence',
    champion: 'Seraphine',
    skill: 'I',
    image: {
      full: 'Seraphine_Passive.png',
      sprite: 'passive3.png',
      group: 'passive',
      x: 0,
      y: 96,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Note granting radius">800</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Note missiles speed">3000</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate - Echo:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Seraphine" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Seraphine/LoL" title="Seraphine\'s"><img alt="Seraphine\'s" src="/wiki/images/Seraphine_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Seraphine/LoL" title="Seraphine/LoL">Seraphine\'s</a></span></span> <a href="/wiki/Champion_ability" title="Champion ability">basic ability</a> casts generate stacks of <i>Echo</i>. At max stacks, her next basic ability consumes them all to cast twice in quick succession at no cost.',
      '<span class="template_sbc"><b>Innate - Harmony:</b></span> <b>Seraphine\'s</b> ability casts grant <i>Notes</i> to her and nearby allied champions, which last a few seconds and stack up to a cap.',
      'While any <i>Notes</i> are active, <b>Seraphine\'s</b> basic attacks gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> range</span> based on total <i>Notes</i>, and will fire them all at the target to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> for each <i>Note</i> hit.',
    ],
    description: [
      {
        icon: '/wiki/images/Stage Presence.png',
        description:
          "Innate - Echo: Seraphine basic abilities generate a stack of Echo, stacking up to 2 times. At 2 stacks, Seraphine's next basic ability casts an additional time at no cost after a 0.033 seconds delay, consuming all Echo stacks after the cast time of the second cast.Seraphine gains maximum stacks of Echo when the game starts and upon respawning.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Echo:</b></span> <b>Seraphine</b> <a href="/wiki/Champion_ability" title="Champion ability">basic abilities</a> generate a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Echo</i>, stacking up to 2 times. At 2 stacks, <b>Seraphine\'s</b> next basic ability casts an additional time at no cost after a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.01 seconds, but rounded up to the next game tick.">0.<small>033</small> seconds</span> delay, consuming all <i>Echo</i> stacks after the <a href="/wiki/Cast_time" class="mw-redirect" title="Cast time">cast time</a> of the second cast.<br><b>Seraphine</b> gains maximum stacks of <i>Echo</i> when the game starts and upon <a href="/wiki/Death" title="Death">respawning</a>.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Innate - Echo:',
            raw: ' Seraphine basic abilities generate a stack of Echo, stacking up to 2 times',
            min: 0,
            max: 10,
            description:
              ' Seraphine basic abilities generate a stack of Echo, stacking up to 2 times',
            values: 2,
            units: 'feastStacks',
            unitsText:
              'basic abilities generate a stack of Echo, stacking up to 2 times',
            pre: 'Seraphine basic abilities generate a stack of Echo, stacking up to 2 times',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: "At 2 stacks, Seraphine's next basic ability casts an additional time at no cost after a 0.033 seconds delay, consuming all Echo stacks after the cast time of the second cast.Seraphine gains maximum stacks of Echo when the game starts and upon respawning.",
            increasedStat: 'total_ap',
            values: 2,
            units: '',
            unitsText:
              "2 stacks, Seraphine's next basic ability casts an additional time at no cost after a 0.033 seconds delay, consuming all Echo stacks after the cast time of the second cast.Seraphine gains maximum stacks of Echo when the game starts and upon respawning.",
            pre: "At 2 stacks, Seraphine's next basic ability casts an additional time at no cost after a 0.033 seconds delay, consuming all Echo stacks after the cast time of the second cast.Seraphine gains maximum stacks of Echo when the game starts and upon respawning.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Innate - Harmony: Seraphine's ability casts grant a Note to herself and nearby allied  champions that lasts 6 seconds, refreshes on subsequent Notes and stacks up to 4 times on each unit.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Harmony:</b></span> <b>Seraphine\'s</b> ability casts grant a <i>Note</i> to herself and nearby allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> that lasts 6 seconds, refreshes on subsequent <i>Notes</i> and stacks up to 4 times on each unit.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate - Harmony:',
            raw: " Seraphine's ability casts grant a Note to herself and nearby allied  champions that lasts 6 seconds, refreshes on subsequent Notes and stacks up to 4 times on each unit.",
            increasedStat: 'feastStacks',
            values: 6,
            units: '',
            unitsText:
              'ability casts grant a Note to herself and nearby allied  champions that lasts 6 seconds, refreshes on subsequent Notes and stacks up to 4 times on each unit.',
            pre: "Seraphine's ability casts grant a Note to herself and nearby allied  champions that lasts 6 seconds, refreshes on subsequent Notes and stacks up to 4 times on each unit.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "While any amount of Notes are active, Seraphine's next basic attack is empowered to have an  uncancellable windup, gain  25 bonus attack range per Note, and fire all Notes at the target, with each one dealing 4 / 8 / 14 / 24 (based on level) (+ 7% AP) magic damage, reduced by 75% for Notes from allies and increased by 200% against  minions.",
        descriptionHTML:
          'While any amount of <i>Notes</i> are active, <b>Seraphine\'s</b> next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> is empowered to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>, gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;25 <b>bonus</b> attack range</span> per <i>Note</i>, and fire all <i>Notes</i> at the target, with each one dealing <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="4;8;14;24" data-top_values="1;6;11;16">4 / 8 / 14 / 24 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;7% AP)</span> magic damage</span>, reduced by 75% for <i>Notes</i> from allies and increased by 200% against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: "While any amount of Notes are active, Seraphine's next basic attack is empowered to have an  uncancellable windup, gain  25 bonus attack range per Note, and fire all Notes at the target, with each one dealing 4 / 8 / 14 / 24 (based on level) (+ 7% AP) magic damage, reduced by 75% for Notes from allies and increased by 200% against  minions.",
            values: [],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText:
              'magic damage, reduced by 75% for Notes from allies and increased by 200% against  minions.',
            pre: "While any amount of Notes are active, Seraphine's next basic attack is empowered to have an  uncancellable windup, gain  25 bonus attack range per Note, and fire all Notes at the target, with each one dealing 4 / 8 / 14 / 24",
            post: 'magic damage, reduced by 75% for Notes from allies and increased by 200% against  minions.',
            children: [
              {
                values: 7,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 7% AP',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self, Allies, Enemies',
    damagetype: 'Magic',
    spelleffects: 'proc',
    spellshield: false,
    projectile: 'true',
    notes:
      '<b>Echo Details:</b>\n<ul><li><i>Echo\'s</i> stacks are represented by a stack counter underneath <b>Seraphine\'s</b> health bar.</li>\n<li><b>Seraphine\'s</b> basic abilities alternate their icons between 3 different ones each, depending on the current amount of stacks she has.</li>\n<li>The second cast must complete for <i>Echo</i> stacks to be consumed; if the cast time does not finish or does not begin at all, <b>Seraphine</b> will keep her stacks.</li>\n<li>The additional cast is completely free; the <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana</span></span> cost and <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> of the mimicked ability are unaffected by it.</li>\n<li>The additional cast counts as a separate <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast instance"><a href="/wiki/Champion_ability" title="Champion ability">cast instance</a></span> for the purpose of e.g. <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Electrocute" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Electrocute_(Rune)" title="Electrocute"><img alt="Electrocute" src="/wiki/images/Electrocute_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Electrocute_(Rune)" class="mw-redirect" title="Electrocute (Rune)">Electrocute</a></span></span> or <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Conqueror" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Conqueror_(Rune)" title="Conqueror"><img alt="Conqueror" src="/wiki/images/Conqueror_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Conqueror_(Rune)" class="mw-redirect" title="Conqueror (Rune)">Conqueror</a></span></span>.</li></ul>\n<p><b>Harmony Details:</b>\n</p>\n<ul><li>Against minions, each <i>Note</i> from <b>Seraphine</b> deals <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="12;24;42;72" data-top_values="1;6;11;16">12 / 24 / 42 / 72 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="18;21;24;27" data-top_values="1;6;11;16" data-bot_key="%">18 / 21 / 24 / 27% (based on level)</span> AP)</span> magic damage</span> and each note from allies deals <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="3;6;10.5;18" data-top_values="1;6;11;16">3 / 6 / 10.<small>5</small> / 18 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="4.5;5.25;6;6.75" data-top_values="1;6;11;16" data-bot_key="%">4.<small>5</small> / 5.<small>25</small> / 6 / 6.<small>75</small>% (based on level)</span> AP)</span> magic damage</span>.</li>\n<li>Against non-minions, each <i>Note</i> from <b>Seraphine</b> deals normal damage and each note from allies deals <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="1;2;3.5;6" data-top_values="1;6;11;16">1 / 2 / 3.<small>5</small> / 6 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="1.5;1.75;2;2.25" data-top_values="1;6;11;16" data-bot_key="%">1.<small>5</small> / 1.<small>75</small> / 2 / 2.<small>25</small>% (based on level)</span> AP)</span> magic damage</span>.</li>\n<li><i>Notes</i> orbit at a radius of 100 from the center of their holder and they fire from this location.</li>\n<li>The empowered attack cannot <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li>\n<li>The empowered attack will not trigger against <a href="/wiki/Ward" title="Ward">wards</a>.</li>\n<li><i>Notes</i> are fired one after another with a short delay.</li>\n<li><b>Seraphine</b> can grant <i>Notes</i> to more than 4 allied champions.</li>\n<li><i>Harmony</i> does <b>not</b> grant <i>Notes</i> to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clones</a></span>.</li>\n<li><i>Harmony</i> grants <i>Notes</i> even if the ally is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>.</li>\n<li>The <i>Notes</i> will fire from allies regardless of how far they are away from <b>Seraphine</b>.</li>\n<li><b>Seraphine</b> gains a faint blue attack range indicator when there are <i>Notes</i> present.</li>\n<li><i>Notes</i> do not discharge when attacking <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Wards"><a href="/wiki/Ward" title="Ward"><img alt="Ward icon.png" src="/wiki/images/Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ward" title="Ward">wards</a></span>, allowing <b>Seraphine</b> to attack them from increased range multiple times.</li></ul>\n<p><b>Other Details:</b>\n</p>\n<ul><li><b>Seraphine</b>, while alive, will play music if there is at least one ally champion nearby.\n<ul><li>This is audible to <b>Seraphine</b> and all allied champions that are in range of <i>Harmony</i>, indicative of if they can receive a <i>Note</i> or not.</li></ul></li></ul>',
    video: 'Seraphine IVideo.ogv',
  },
  'High Note': {
    name: 'High Note',
    display_name: 'High Note',
    champion: 'Seraphine',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'SeraphineQ.png',
      sprite: 'spell11.png',
      group: 'spell',
      x: 288,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '900',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 350',
    speed: '1200',
    cast_time: '0.<small>25</small>',
    cost: '65 / 70 / 75 / 80 / 85',
    costtype: 'Mana',
    cooldown:
      '10 / 8.<small>75</small> / 7.<small>5</small> / 6.<small>25</small> / 5',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Seraphine" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Seraphine/LoL" title="Seraphine"><img alt="Seraphine" src="/wiki/images/Seraphine_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Seraphine/LoL" title="Seraphine/LoL">Seraphine</a></span></span> hurls a soundwave to the target location that quickly expands upon arrival, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within based on <span style="color: #1F995C; white-space:normal">their <b>missing</b> health</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/High Note.png',
        description:
          "Active: Seraphine hurls a soundwave to the target location that quickly expands in a radius upon arrival, dealing magic damage to enemies within the area,  increased by 0% − 50% (based on target's missing health).",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Seraphine</b> hurls a soundwave to the target location that quickly expands in a radius upon arrival, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within the area, <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">increased</span> by <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="target\'s missing health" data-displayformula="5% per 7.5% of target\'s \'\'\'missing\'\'\' health, capped at 75% \'\'\'missing\'\'\' health" data-bot_values="0;5;10;15;20;25;30;35;40;45;50" data-top_values="0;7.5;15;22.5;30;37.5;45;52.5;60;67.5;75" data-bot_key="%" data-top_key="%">0% − 50% (based on target\'s <b>missing</b> health)</span></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '55 / 70 / 85 / 100 / 115 (+ 45 / 50 / 55 / 60 / 65% AP)',
            valuesHTML:
              '55 / 70 / 85 / 100 / 115 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;45 / 50 / 55 / 60 / 65% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '55 / 70 / 85 / 100 / 115 (+ 45 / 50 / 55 / 60 / 65% AP)',
            damagetype: 'Magic',
            values: [55, 70, 85, 100, 115],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 70 / 85 / 100 / 115',
            children: [
              {
                values: [45, 50, 55, 60, 65],
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 45 / 50 / 55 / 60 / 65% AP',
              },
            ],
          },
        ],
      },
      {
        description: 'High Note will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i>High Note will cast at max range if cast beyond that.</i>',
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
    projectile: 'true',
    notes:
      '* <i>High Note</i> uses a modified icon for the <a href="https://static.wikia.nocookie.net/leagueoflegends/images/d/de/Seraphine_High_Note_2.png/revision/latest?cb=20201015204957" class="image"><img alt="High Note 2.png" src="/wiki/images/Seraphine_High_Note_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> second and <a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/4a/Seraphine_High_Note_3.png/revision/latest?cb=20201015205030" class="image"><img alt="High Note 3.png" src="/wiki/images/Seraphine_High_Note_3.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> third stack of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Seraphine" data-ability="Stage Presence" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Seraphine/LoL#Stage_Presence" title="Stage Presence"><img alt="Stage Presence" src="/wiki/images/Seraphine_Stage_Presence.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Seraphine/LoL#Stage_Presence" title="Seraphine/LoL">Stage Presence</a></span></span>.\n<ul><li>The maximum damage of <i>High Note</i> uses a <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike">cosmetic critical strike</a>.</li>\n<li><i>High Note</i> will fire from wherever <i>Seraphine</i> is at the end of the cast time.</li>\n<li>The impact delay depends solely on the missile speed. It is 0 seconds to 0.<small>75</small> seconds (after end of cast time) within the standard cast radius, but can be increased further by <b>Seraphine</b> being moved away from the cast location during the cast time.</li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span> The area of effect is covered via expansion in several rings (similar to <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lissandra" data-ability="Frozen Tomb" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lissandra/LoL#Frozen_Tomb" title="Frozen Tomb\'s"><img alt="Frozen Tomb\'s" src="/wiki/images/Lissandra_Frozen_Tomb.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lissandra/LoL#Frozen_Tomb" title="Lissandra/LoL">Frozen Tomb\'s</a></span></span> area of effect) and targets can only be hit once.</li>\n<li>The range indicator for the target range has a radius of 950 units, but the center of <i>High Note</i> can only be cast up to 900 units. The area indicator shows the proper 350 are of effect radius and cast location.</li></ul>',
    video: 'Seraphine QVideo.ogv',
  },
  'Surround Sound': {
    name: 'Surround Sound',
    display_name: 'Surround Sound',
    champion: 'Seraphine',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'SeraphineW.png',
      sprite: 'spell11.png',
      group: 'spell',
      x: 336,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Note granting radius">800</span>',
    cast_time: '0.<small>25</small>',
    cost: '50 / 60 / 70 / 80 / 90',
    costtype: 'Mana',
    cooldown: '28 / 26 / 24 / 22 / 20',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Seraphine" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Seraphine/LoL" title="Seraphine"><img alt="Seraphine" src="/wiki/images/Seraphine_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Seraphine/LoL" title="Seraphine/LoL">Seraphine</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span> herself and nearby allied champions for a short time. She also gains a burst of <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">movement speed</span></span> and grants allies <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>.',
      'If <b>Seraphine</b> already had a <span style="white-space:nowrap"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;shield</span>, <i>Surround Sound</i> will pulse after the duration, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> herself and nearby allies based on <span style="color: #1F995C; white-space:normal">their <b>missing</b> health</span>, which is further increased based on the number of allies affected.',
    ],
    description: [
      {
        icon: '/wiki/images/Surround Sound.png',
        description:
          'Active: Seraphine grants a  shield to herself and nearby allied champions for 2.5 seconds. For the same duration, she also gains  20% (+ 4% per 100 AP) decaying bonus movement speed and grants allies 8% (+ 1.6% per 100 AP) bonus movement speed.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Seraphine</b> grants a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> to herself and nearby allied champions for 2.<small>5</small> seconds. For the same duration, she also gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">20%</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;4% per 100 AP)</span> <span style="color: #F5EE99; white-space:normal">decaying <b>bonus</b> movement speed</span></span> and grants allies <span style="color: #F5EE99; white-space:normal">8%</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;1.<small>6</small>% per 100 AP)</span> <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span>.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Active:',
            raw: ' Seraphine grants a  shield to herself and nearby allied champions for 2.5 seconds',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'grants a  shield to herself and nearby allied champions for 2.5 seconds',
            pre: 'Seraphine grants a  shield to herself and nearby allied champions for 2.5 seconds',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'For the same duration, she also gains  20% (+ 4% per 100 AP) decaying bonus movement speed and grants allies 8% (+ 1.6% per 100 AP) bonus movement speed.',
            values: 2,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'decaying bonus movement speed and grants allies 8%',
            pre: 'For the same duration, she also gains  20%',
            post: 'decaying bonus movement speed and grants allies 8%',
            children: [
              {
                values: 4,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 4% per 100 AP',
              },
              {
                values: 1.6,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 1.6% per 100 AP',
              },
            ],
          },
        ],
        leveling: [
          {
            name: 'Shield Strength:',
            values: '50 / 70 / 90 / 110 / 130 (+ 25% AP)',
            valuesHTML:
              '50 / 70 / 90 / 110 / 130 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;25% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Shield',
            name: 'Shield Strength:',
            raw: '50 / 70 / 90 / 110 / 130 (+ 25% AP)',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: [50, 70, 90, 110, 130],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 70 / 90 / 110 / 130',
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
          'If Seraphine already had a  shield at the time of cast, Surround Sound will pulse after the duration,  healing herself and nearby allied champions, increased for each ally.',
        descriptionHTML:
          'If <b>Seraphine</b> already had a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> at the time of cast, <i>Surround Sound</i> will pulse after the duration, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> herself and nearby allied champions, increased for each <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="including Seraphine herself">ally</span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Heal Per Ally:',
            values:
              "5 / 5.5 / 6 / 6.5 / 7% (+ 0.4% per 100 AP) of target's missing health",
            valuesHTML:
              '<span style="color: #1F995C; white-space:normal">5 / 5.<small>5</small> / 6 / 6.<small>5</small> / 7% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;0.<small>4</small>% per 100 AP)</span> of target\'s <b>missing</b> health</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Heal Per Ally:',
            raw: "5 / 5.5 / 6 / 6.5 / 7% (+ 0.4% per 100 AP) of target's missing health",
            healType: 'OutgoingHeals',
            values: [5, 5.5, 6, 6.5, 7],
            valuesIsPercent: true,
            user: 'target',
            units: 'missing_hp',
            unitsText: "of target's missing health",
            pre: '5 / 5.5 / 6 / 6.5 / 7%',
            post: "of target's missing health",
            children: [
              {
                values: 0.4,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 0.4% per 100 AP',
              },
            ],
          },
        ],
      },
      {
        description: "Surround Sound's effects can stack up to 2 times.",
        descriptionHTML:
          "<i>Surround Sound's effects can stack up to 2 times.</i>",
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Line 1:',
            raw: "Surround Sound's effects can stack up to 2 times.",
            min: 0,
            max: 10,
            description: "Surround Sound's effects can stack up to 2 times.",
            values: 2,
            units: 'feastStacks',
            unitsText: "Sound's effects can stack up to 2 times.",
            pre: "Surround Sound's effects can stack up to 2 times.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self, Allies',
    spelleffects: 'Shield',
    projectile: 'special',
    notes:
      '* <i>Surround Sound</i> uses a modified icon for the <a href="https://static.wikia.nocookie.net/leagueoflegends/images/0/03/Seraphine_Surround_Sound_2.png/revision/latest?cb=20201015205059" class="image"><img alt="Surround Sound 2.png" src="/wiki/images/Seraphine_Surround_Sound_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> second and <a href="https://static.wikia.nocookie.net/leagueoflegends/images/5/50/Seraphine_Surround_Sound_3.png/revision/latest?cb=20201015205120" class="image"><img alt="Surround Sound 3.png" src="/wiki/images/Seraphine_Surround_Sound_3.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> third stack of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Seraphine" data-ability="Stage Presence" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Seraphine/LoL#Stage_Presence" title="Stage Presence"><img alt="Stage Presence" src="/wiki/images/Seraphine_Stage_Presence.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Seraphine/LoL#Stage_Presence" title="Seraphine/LoL">Stage Presence</a></span></span>.\n<ul><li>All effects are gained at the start of the cast time.</li>\n<li><b>Seraphine</b> can move during the cast time.</li>\n<li><i>Surround Sound\'s</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> buff can have up to 2 stacks, for a total of 200% shield strength at a time.\n<ul><li>Most shields in the game can only have one stack, refreshing their shield strength when reapplied.</li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span> StackingType</li></ul></li>\n<li><i>Surround Sound</i> will empower from any <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> that <b>Seraphine</b> has. It does not have to be sourced from <i>Surround Sound</i>.</li>\n<li>Casting <i>Surround Sound</i> during the 2.<small>5</small>-second delay refreshes the delay.</li>\n<li>The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> affects <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clones</a></span> and counts them for increasing the <b>missing</b> health percentage.</li>\n<li>A large indicator similar to <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Redemption" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Redemption" title="Redemption\'s"><img alt="Redemption\'s" src="/wiki/images/Redemption_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Redemption" title="Redemption">Redemption\'s</a></span></span> signals the heal area of effect and delay.</li>\n<li>The heal will be canceled and the indicator disappears when <b>Seraphine</b> dies.</li>\n<li>The heal occurs instantly on <b>Seraphine</b> and all nearby allied champions once the delay ends.\n<ul><li>There is a missile that flows through all allied champions which can be blocked by <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Wind Wall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Wind Wall"><img alt="Wind Wall" src="/wiki/images/Yasuo_Wind_Wall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Yasuo/LoL">Wind Wall</a></span></span>. The heal is unaffected by this.</li></ul></li>\n<li><i>Surround Sound</i> will affect <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> allies.</li></ul>',
    video: 'Seraphine WVideo.ogv',
  },
  'Beat Drop': {
    name: 'Beat Drop',
    display_name: 'Beat Drop',
    champion: 'Seraphine',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'SeraphineE.png',
      sprite: 'spell11.png',
      group: 'spell',
      x: 384,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '1300',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 140',
    speed: '1200',
    cast_time: '0.<small>25</small>',
    cost: '60 / 70 / 80 / 90 / 100',
    costtype: 'Mana',
    cooldown: '10',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Seraphine" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Seraphine/LoL" title="Seraphine"><img alt="Seraphine" src="/wiki/images/Seraphine_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Seraphine/LoL" title="Seraphine/LoL">Seraphine</a></span></span> fires a heavy soundwave in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> enemies hit.',
      'Enemies that are already <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span> for the same duration.',
      'Enemies that are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for the same duration.',
    ],
    description: [
      {
        icon: '/wiki/images/Beat Drop.png',
        description:
          'Active: Seraphine fires a heavy soundwave in the target direction that deals magic damage to enemies hit and  slows them by 99% for 1.25 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Seraphine</b> fires a heavy soundwave in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 99% for 1.<small>25</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Seraphine fires a heavy soundwave in the target direction that deals magic damage to enemies hit and  slows them by 99% for 1.25 seconds.',
            damagetype: 'Magic',
            values: 9,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'for 1.25 seconds.fires a heavy soundwave in the target direction that deals magic damage to enemies hit and  slows them by 99',
            pre: 'Seraphine fires a heavy soundwave in the target direction that deals magic damage to enemies hit and  slows them by 99% for 1.25 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '60 / 80 / 100 / 120 / 140 (+ 35% AP)',
            valuesHTML:
              '60 / 80 / 100 / 120 / 140 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;35% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 80 / 100 / 120 / 140 (+ 35% AP)',
            damagetype: 'Magic',
            values: [60, 80, 100, 120, 140],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 80 / 100 / 120 / 140',
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
        icon: '/wiki/images/Beat Drop 4.png',
        description:
          'Enemies that are already  slowed are also  rooted for the same duration.',
        descriptionHTML:
          'Enemies that are already <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span> for the same duration.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Beat Drop 5.png',
        description:
          'Enemies that are  immobilized or  grounded are also  stunned for the same duration.',
        descriptionHTML:
          'Enemies that are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for the same duration.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'true',
    notes:
      '* <i>Beat Drop</i> will only be empowered from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilizes</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounding</a></span> effects applied by herself or her allies.\n<ul><li><i>Beat Drop</i> uses a modified icon for the <a href="https://static.wikia.nocookie.net/leagueoflegends/images/0/09/Seraphine_Beat_Drop_2.png/revision/latest?cb=20201019220214" class="image"><img alt="Beat Drop 2.png" src="/wiki/images/Seraphine_Beat_Drop_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> second and <a href="https://static.wikia.nocookie.net/leagueoflegends/images/a/aa/Seraphine_Beat_Drop_3.png/revision/latest?cb=20201015204900" class="image"><img alt="Beat Drop 3.png" src="/wiki/images/Seraphine_Beat_Drop_3.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> third stack of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Seraphine" data-ability="Stage Presence" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Seraphine/LoL#Stage_Presence" title="Stage Presence"><img alt="Stage Presence" src="/wiki/images/Seraphine_Stage_Presence.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Seraphine/LoL#Stage_Presence" title="Seraphine/LoL">Stage Presence</a></span></span>.</li>\n<li><i>Beat Drop</i> may still be empowered even if the disable ends shortly after the ability hits.</li>\n<li>The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">root</a></span> and the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> cannot apply at the same time.\n<ul><li>The root will only apply if the target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> and not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span>.\n<ul><li>The stun will apply as normal; it does not consider if the target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span>.</li></ul></li>\n<li>The root will be overridden by the stun if the target is hit by <i>Beat Drop</i> again while they were rooted by it.</li></ul></li>\n<li>A quarter note will appear next to an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> while they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> and two quarter notes tied will appear if they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span>.\n<ul><li>This indicates if <i>Beat Drop</i> will apply an additional <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a> effect if it strikes the target.</li></ul></li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>',
    video: 'Seraphine EVideo.ogv',
  },
  Encore: {
    name: 'Encore',
    display_name: 'Encore',
    champion: 'Seraphine',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'SeraphineR.png',
      sprite: 'spell11.png',
      group: 'spell',
      x: 432,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '1200',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 320',
    speed: '1600',
    cast_time: '0.<small>5</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown: '160 / 145 / 130 / 115 / 100',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Seraphine" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Seraphine/LoL" title="Seraphine"><img alt="Seraphine" src="/wiki/images/Seraphine_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Seraphine/LoL" title="Seraphine/LoL">Seraphine</a></span></span> projects a captivating force in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit, briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Charm"><a href="/wiki/Charm" title="Charm"><img alt="Charm icon.png" src="/wiki/images/Charm_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Charm" class="mw-redirect" title="Charm">charming</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> them.',
      '<i>Encore\'s</i> range extends upon hitting allied or enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>. Allied champions hit gain max <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Seraphine" data-ability="Stage Presence" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Seraphine/LoL#Stage_Presence" title="Notes"><img alt="Notes" src="/wiki/images/Seraphine_Stage_Presence.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Seraphine/LoL#Stage_Presence" title="Seraphine/LoL">Notes</a></span></span></i>.',
    ],
    description: [
      {
        icon: '/wiki/images/Encore.png',
        description:
          'Active: Seraphine projects a captivating force in the target direction that deals magic damage to enemies hit,  charms them, during which they are  revealed, and  slows them by 40% for a duration, increasing by 15% every 0.25 seconds over the duration up to 99%.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Seraphine</b> projects a captivating force in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Charm"><a href="/wiki/Charm" title="Charm"><img alt="Charm icon.png" src="/wiki/images/Charm_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Charm" class="mw-redirect" title="Charm">charms</a></span> them, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 40% for a duration, increasing by 15% every 0.<small>25</small> seconds over the duration up to 99%.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Seraphine projects a captivating force in the target direction that deals magic damage to enemies hit,  charms them, during which they are  revealed, and  slows them by 40% for a duration, increasing by 15% every 0.25 seconds over the duration up to 99%.',
            damagetype: 'Magic',
            values: 4,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              'for a duration, increasing by 15projects a captivating force in the target direction that deals magic damage to enemies hit,  charms them, during which they are  revealed, and  slows them by 40',
            pre: 'Seraphine projects a captivating force in the target direction that deals magic damage to enemies hit,  charms them, during which they are  revealed, and  slows them by 40% for a duration, increasing by 15% every 0.25 seconds over the duration up to 99%.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '150 / 175 / 200 / 225 / 250 (+ 60% AP)',
            valuesHTML:
              '150 / 175 / 200 / 225 / 250 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
          {
            name: 'Disable Duration:',
            values: '1.25 / 1.375 / 1.5 / 1.625 / 1.75',
            valuesHTML:
              '1.<small>25</small> / 1.<small>375</small> / 1.<small>5</small> / 1.<small>625</small> / 1.<small>75</small>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '150 / 175 / 200 / 225 / 250 (+ 60% AP)',
            damagetype: 'Magic',
            values: [150, 175, 200, 225, 250],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 175 / 200 / 225 / 250',
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
          {
            effectType: 'Unique',
            name: 'Disable Duration:',
            raw: '1.25 / 1.375 / 1.5 / 1.625 / 1.75',
            values: [1.25, 1.375, 1.5, 1.625, 1.75],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1.25 / 1.375 / 1.5 / 1.625 / 1.75',
          },
        ],
      },
      {
        description:
          "Encore's projectile resets its remaining travel distance whenever it hits an allied or enemy  champion, excluding Seraphine. Allied champions hit gain  4 Notes.",
        descriptionHTML:
          '<i>Encore\'s</i> projectile resets its remaining travel distance whenever it hits an allied or enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, excluding <b>Seraphine</b>. Allied champions hit gain <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Seraphine" data-ability="Stage Presence" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Seraphine/LoL#Stage_Presence" title="4 Notes"><img alt="4 Notes" src="/wiki/images/Seraphine_Stage_Presence.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Seraphine/LoL#Stage_Presence" title="Seraphine/LoL">4 Notes</a></span></span></i>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'Allied champions hit gain  4 Notes.',
            values: 4,
            user: 'none',
            units: '',
            unitsText: 'champions hit gain  4 Notes.',
            pre: 'Allied champions hit gain  4 Notes.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'true',
    notes:
      '* <i>Encore</i> has two cast times. Both last 0.<small>5</small> seconds. The wave will always project after the first cast time, and the second cast time only serves as a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">lock out</a></span> for <b>Seraphine</b>.\n<ul><li><ul><li><b>Seraphine</b> cannot buffer casts during the first cast time, but she may do so during the second cast time.</li></ul></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">Clones</a></span> also count for <i>Encore\'s</i> extension.</li>\n<li><i>Encore</i> will not extend on enemy champions that are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, but will do so for allied champions.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will also prevent <i>Encore</i> from extending.</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.\n<ul><li><i>Encore</i> fires from <b>Seraphine\'s</b> location at the end of the initial cast time.</li></ul></li>\n<li>There is no limit as to how many times the wave can extend.</li>\n<li>Each <i>Encore</i> cast cannot extend from the same <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> more than once.\n<ul><li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Zombie state"><a href="/wiki/Death#Zombie_states" title="Death#Zombie states"><img alt="Zombie icon.png" src="/wiki/images/Zombie_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Zombie_states" title="Death">Champions that died, clearing marker buffs</a></span></li></ul></li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Seraphine_Original_R_Accompany_SFX.ogg   Activation alert.',
    video: 'Seraphine RVideo.ogv',
  },
} satisfies { [skillName in string]: SkillData };
