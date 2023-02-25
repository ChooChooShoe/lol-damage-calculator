import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Zed';

export default {
  'Contempt for the Weak': {
    name: 'Contempt for the Weak',
    display_name: 'Contempt for the Weak',
    champion: 'Zed',
    skill: 'I',
    image: {
      full: 'shadowninja_P.png',
      sprite: 'passive5.png',
      group: 'passive',
      x: 288,
      y: 0,
      w: 48,
      h: 48,
    },
    ontargetcdstatic: '10',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zed" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zed/LoL" title="Zed\'s"><img alt="Zed\'s" src="/wiki/images/Zed_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zed/LoL" title="Zed/LoL">Zed\'s</a></span></span> basic attacks against targets <span style="color: #1F995C; white-space:normal">below half health</span> will deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> equal to a portion of <span style="color: #1F995C; white-space:normal">their <b>maximum</b> health</span>.',
      'This effect cannot recur on the same <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> for a period.',
    ],
    description: [
      {
        icon: '/wiki/images/Contempt for the Weak.png',
        description:
          "Innate: Zed's basic attacks against targets below 50% maximum health are empowered to deal 6 / 8 / 10% (based on level) of the target's maximum health as bonus magic damage.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Zed\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> against targets <span style="color: #1F995C; white-space:normal">below 50% <b>maximum</b> health</span> are empowered to deal <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="6;8;10" data-top_values="1;7;17" data-bot_key="%">6 / 8 / 10% (based on level)</span> of the target\'s <b>maximum</b> health</span> as <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Innate:',
            raw: " Zed's basic attacks against targets below 50% maximum health are empowered to deal 6 / 8 / 10% (based on level) of the target's maximum health as bonus magic damage.",
            healType: 'OutgoingHeals',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of the target's maximum health as bonus magic damage.",
            pre: "Zed's basic attacks against targets below 50% maximum health are empowered to deal 6 / 8 / 10%",
            post: "of the target's maximum health as bonus magic damage.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Against  monsters, Contempt for the Weak deals 200% damage, capped at 300.',
        descriptionHTML:
          'Against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, <i>Contempt for the Weak</i> deals 200% damage, capped at 300.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Against  monsters, Contempt for the Weak deals 200% damage, capped at 300.',
            increasedStat: 'total_ap',
            values: 2,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'damage, capped at 300. monsters, Contempt for the Weak deals 200',
            pre: 'Against  monsters, Contempt for the Weak deals 200% damage, capped at 300.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Contempt for the Weak cannot occur on the same  champion more than once every few seconds.',
        descriptionHTML:
          '<i>Contempt for the Weak</i> cannot occur on the same <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> more than once every few seconds.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies',
    damagetype: 'magic',
    spelleffects: 'proc',
    onhiteffects: 'Special',
    spellshield: false,
    notes:
      '* The enhanced attack applies other <a href="/wiki/On-hit_effect" class="mw-redirect" title="On-hit effect">on-hit effects</a> and can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> as normal (the bonus damage cannot).\n<ul><li><i>Contempt for the Weak</i> is not consumed when <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodged"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">missed</a></span>, but it is consumed when <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blocked"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span>.</li>\n<li><i>Contempt for the Weak</i> considers the target\'s health upon landing the attack, not when it\'s declared.\n<ul><li>If the target falls below the threshold while <b>Zed</b> is winding up the attack, <i>Contempt for the Weak</i> applies, and vice versa.</li></ul></li>\n<li>The empowered attack will not trigger against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.</li></ul>',
  },
  'Razor Shuriken': {
    name: 'Razor Shuriken',
    display_name: 'Razor Shuriken',
    champion: 'Zed',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'ZedQ.png',
      sprite: 'spell16.png',
      group: 'spell',
      x: 0,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '925',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 100',
    speed: '1700',
    cast_time: '0.<small>25</small>',
    cost: '75 / 70 / 65 / 60 / 55',
    costtype: 'energy',
    cooldown: '6',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zed" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zed/LoL" title="Zed"><img alt="Zed" src="/wiki/images/Zed_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zed/LoL" title="Zed/LoL">Zed</a></span></span> throws a shuriken in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit.',
    ],
    description: [
      {
        icon: '/wiki/images/Razor Shuriken.png',
        description:
          'Active: Zed throws a shuriken in the target direction that deals physical damage to enemies hit, reduced to 60% against targets beyond the first.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Zed</b> throws a shuriken in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit, reduced to 60% against targets beyond the first.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Zed throws a shuriken in the target direction that deals physical damage to enemies hit, reduced to 60% against targets beyond the first.',
            values: 6,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'against targets beyond the first.throws a shuriken in the target direction that deals physical damage to enemies hit, reduced to 60',
            pre: 'Zed throws a shuriken in the target direction that deals physical damage to enemies hit, reduced to 60% against targets beyond the first.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '70 / 105 / 140 / 175 / 210 (+ 110% bonus AD)',
            valuesHTML:
              '70 / 105 / 140 / 175 / 210 <span style="color:orange; white-space:normal">(+&nbsp;110% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '70 / 105 / 140 / 175 / 210 (+ 110% bonus AD)',
            damagetype: 'Physical',
            values: [70, 105, 140, 175, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 105 / 140 / 175 / 210',
            children: [
              {
                values: 110,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 110% bonus AD',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Area of effect',
    spellshield: true,
    projectile: 'True',
    notes:
      '* <i>Shurikens</i> blocked by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span> still count as being hit for the reduced pass-through damage.\n<ul><li>If <b>Zed</b> buffers an attack command during <i>Razor Shuriken\'s</i> cast time the attack will perform slower than if <b>Zed</b> had attacked after the cast time.\n<ul><li>The same does not happen if <b>Zed</b> recasts <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zed" data-ability="Living Shadow 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zed/LoL#Living_Shadow_2" title="Living Shadow"><img alt="Living Shadow" src="/wiki/images/Zed_Living_Shadow_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zed/LoL#Living_Shadow_2" title="Zed/LoL">Living Shadow</a></span></span> during <i>Razor Shuriken\'s</i> cast time.</li></ul></li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>',
  },
  'Living Shadow': {
    name: 'Living Shadow',
    display_name: 'Living Shadow',
    champion: 'Zed',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'ZedW.png',
      sprite: 'spell16.png',
      group: 'spell',
      x: 48,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '650',
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Recast range">2000</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Ability mimick range">Global</span>',
    speed: '2500',
    cast_time: 'none',
    cost: '40 / 35 / 30 / 25 / 20',
    costtype: 'energy',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">20 / 18.<small>5</small> / 17 / 15.<small>5</small> / 14</span>',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> Whenever <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zed" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zed/LoL" title="Zed"><img alt="Zed" src="/wiki/images/Zed_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zed/LoL" title="Zed/LoL">Zed</a></span></span> and his <a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Zed%27s_Shadow.png/revision/latest?cb=20180818091903" class="image"><img alt="Zed\'s Shadow.png" src="/wiki/images/Zed%27s_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> <i>Shadows</i> hit an ability on the same target, he restores <span style="white-space:nowrap"><a href="/wiki/Energy" title="Energy"><img alt="Energy icon.png" src="/wiki/images/Energy_icon.png" decoding="async" loading="lazy" width="15" height="16" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">energy</span></span>.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Zed</b> sends a <a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Zed%27s_Shadow.png/revision/latest?cb=20180818091903" class="image"><img alt="Zed\'s Shadow.png" src="/wiki/images/Zed%27s_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> <i>Shadow</i> to the target location that will remain for a few seconds, being able to mimic his <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zed" data-ability="Razor Shuriken" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zed/LoL#Razor_Shuriken" title="Razor Shuriken"><img alt="Razor Shuriken" src="/wiki/images/Zed_Razor_Shuriken.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zed/LoL#Razor_Shuriken" title="Zed/LoL">Razor Shuriken</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zed" data-ability="Shadow Slash" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zed/LoL#Shadow_Slash" title="Shadow Slash"><img alt="Shadow Slash" src="/wiki/images/Zed_Shadow_Slash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zed/LoL#Shadow_Slash" title="Zed/LoL">Shadow Slash</a></span></span></i>. <i>Living Shadow</i> can be recast while within range of the <i>Shadow</i>.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Zed</b> and the <a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Zed%27s_Shadow.png/revision/latest?cb=20180818091903" class="image"><img alt="Zed\'s Shadow.png" src="/wiki/images/Zed%27s_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> <i>Shadow</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blink</a></span> to swap places.',
    ],
    description: [
      {
        description:
          'Passive: Zed restores  energy whenever he and his  Shadows or multiple Shadows hit an ability on the same target. This may only occur once per cast ability.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Zed</b> restores <span style="white-space:nowrap"><a href="/wiki/Energy" title="Energy"><img alt="Energy icon.png" src="/wiki/images/Energy_icon.png" decoding="async" loading="lazy" width="15" height="16" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">energy</span></span> whenever he and his <a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Zed%27s_Shadow.png/revision/latest?cb=20180818091903" class="image"><img alt="Zed\'s Shadow.png" src="/wiki/images/Zed%27s_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> <i>Shadows</i> or multiple <i>Shadows</i> hit an ability on the same target. This may only occur once per cast ability.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Energy Restored:',
            values: '30 / 35 / 40 / 45 / 50',
            valuesHTML:
              '<span style="color:yellow; white-space:normal">30 / 35 / 40 / 45 / 50</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Energy Restored:',
            raw: '30 / 35 / 40 / 45 / 50',
            values: [30, 35, 40, 45, 50],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 35 / 40 / 45 / 50',
          },
        ],
      },
      {
        icon: '/wiki/images/Living Shadow.png',
        description:
          'Active: Zed creates a  Shadow that dashes to the target location and remains there for 5.25 seconds, being able to mimic  Razor Shuriken and  Shadow Slash regardless of range. Living Shadow can be recast while within range of the Shadow.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Zed</b> creates a <a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Zed%27s_Shadow.png/revision/latest?cb=20180818091903" class="image"><img alt="Zed\'s Shadow.png" src="/wiki/images/Zed%27s_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> <i>Shadow</i> that dashes to the target location and remains there for 5.<small>25</small> seconds, being able to mimic <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zed" data-ability="Razor Shuriken" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zed/LoL#Razor_Shuriken" title="Razor Shuriken"><img alt="Razor Shuriken" src="/wiki/images/Zed_Razor_Shuriken.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zed/LoL#Razor_Shuriken" title="Zed/LoL">Razor Shuriken</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zed" data-ability="Shadow Slash" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zed/LoL#Shadow_Slash" title="Shadow Slash"><img alt="Shadow Slash" src="/wiki/images/Zed_Shadow_Slash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zed/LoL#Shadow_Slash" title="Zed/LoL">Shadow Slash</a></span></span></i> regardless of range. <i>Living Shadow</i> can be recast while within range of the <i>Shadow</i>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Zed creates a  Shadow that dashes to the target location and remains there for 5.25 seconds, being able to mimic  Razor Shuriken and  Shadow Slash regardless of range',
            damagetype: 'None',
            values: 5,
            user: 'target',
            units: 'total_ad',
            unitsText:
              'creates a  Shadow that dashes to the target location and remains there for 5.25 seconds, being able to mimic  Razor Shuriken and  Shadow Slash regardless of range',
            pre: 'Zed creates a  Shadow that dashes to the target location and remains there for 5.25 seconds, being able to mimic  Razor Shuriken and  Shadow Slash regardless of range',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Living Shadow 2.png',
        description:
          'Recast: Zed and the  Shadow  blink to swap places. If Living Shadow was recast while the Shadow is dashing, the recast will instead occur once it has been placed.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Zed</b> and the <a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Zed%27s_Shadow.png/revision/latest?cb=20180818091903" class="image"><img alt="Zed\'s Shadow.png" src="/wiki/images/Zed%27s_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> <i>Shadow</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blink</a></span> to swap places. If <i>Living Shadow</i> was recast while the <i>Shadow</i> is dashing, the recast will instead occur once it has been placed.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'If an ability is cast while the Shadow is dashing, it will cast that ability once it has been placed. See Pets for more details about Shadows. Living Shadow will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i>If an ability is cast while the Shadow is dashing, it will cast that ability once it has been placed. See <a href="/wiki/Zed/LoL#Pets" title="Zed/LoL">Pets</a> for more details about Shadows. Living Shadow will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting:
      '<a href="/wiki/Location-targeted" class="mw-redirect" title="Location-targeted">Location</a> / <a href="/wiki/Auto-targeted" class="mw-redirect" title="Auto-targeted">Auto</a>',
    affects: 'Self',
    notes:
      '* <b>Zed</b> gains a buff for 5.<small>25</small> seconds that indicates and determines the duration in which he may recast <i>Living Shadow</i>.\n<ul><li><ul><li>The buff is granted briefly after <i>Living Shadow</i> is cast.\n<ul><li>If cast at minimum distance, the buff and the <i>Shadow\'s</i> individual durations will effectively start at the same time.</li>\n<li>If cast at greater than the minimum distance, then the buff\'s duration will start before the <i>Shadow\'s</i> duration.</li></ul></li></ul></li>\n<li>The passive will grant its energy refund at rank 1 even if <i>Living Shadow</i> hasn\'t been learned yet.</li>\n<li>The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Energy"><a href="/wiki/Energy" title="Energy"><img alt="Energy resource.png" src="/wiki/images/Energy_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Energy" title="Energy">energy</a></span> refund is not granted if the mimicked ability is blocked by a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span>.</li>\n<li><i>Living Shadow</i> cannot be recast while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span>.</li>\n<li>If <i>Living Shadow</i> is recast during <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zed" data-ability="Razor Shuriken" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zed/LoL#Razor_Shuriken" title="Razor Shuriken"><img alt="Razor Shuriken" src="/wiki/images/Zed_Razor_Shuriken.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zed/LoL#Razor_Shuriken" title="Zed/LoL">Razor Shuriken</a></span></span>, <b>Zed</b> will instantly release the shuriken from his original position while still remaining in cast time, and the <a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Zed%27s_Shadow.png/revision/latest?cb=20180818091903" class="image"><img alt="Zed\'s Shadow.png" src="/wiki/images/Zed%27s_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> <i>Shadow</i> will release the shuriken based on <b>Zed\'s</b> remaining cast time.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li>\n<li>The <a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Zed%27s_Shadow.png/revision/latest?cb=20180818091903" class="image"><img alt="Zed\'s Shadow.png" src="/wiki/images/Zed%27s_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> <i>Shadow</i> will cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zed" data-ability="Shadow Slash" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zed/LoL#Shadow_Slash" title="Shadow Slash"><img alt="Shadow Slash" src="/wiki/images/Zed_Shadow_Slash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zed/LoL#Shadow_Slash" title="Zed/LoL">Shadow Slash</a></span></span> independently of being in <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zed" data-ability="Razor Shuriken" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zed/LoL#Razor_Shuriken" title="Razor Shuriken\'s"><img alt="Razor Shuriken\'s" src="/wiki/images/Zed_Razor_Shuriken.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zed/LoL#Razor_Shuriken" title="Zed/LoL">Razor Shuriken\'s</a></span></span> cast time or not.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup></li>\n<li><b>Zed</b> will swap places with the <a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Zed%27s_Shadow.png/revision/latest?cb=20180818091903" class="image"><img alt="Zed\'s Shadow.png" src="/wiki/images/Zed%27s_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> <i>Shadow</i> by all means if he buffers <i>Living Shadow\'s</i> recast during its dash.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup>\n<ul><li><i>Living Shadow</i> cannot be recast while <b>Zed</b> is marking his target with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zed" data-ability="Death Mark" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zed/LoL#Death_Mark" title="Death Mark"><img alt="Death Mark" src="/wiki/images/Zed_Death_Mark.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zed/LoL#Death_Mark" title="Zed/LoL">Death Mark</a></span></span>, but may still be recast if it was buffered.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul></li>\n<li>If <b>Zed</b> casts <i>Living Shadow</i> while a non-<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zed" data-ability="Death Mark 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zed/LoL#Death_Mark_2" title="Death Mark"><img alt="Death Mark" src="/wiki/images/Zed_Death_Mark_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zed/LoL#Death_Mark_2" title="Zed/LoL">Death Mark</a></span></span> Shadow</i> is already present, the previous <i>Shadow</i> will instantly disappear.</li>\n<li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Zed%27s_Shadow.png/revision/latest?cb=20180818091903" class="image"><img alt="Zed\'s Shadow.png" src="/wiki/images/Zed%27s_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> <i>Shadows</i> will not disappear when <b>Zed</b> dies.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Zed_Original_Move_0.ogg   "The shadows have enlightened me."',
  },
  'Shadow Slash': {
    name: 'Shadow Slash',
    display_name: 'Shadow Slash',
    champion: 'Zed',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'ZedE.png',
      sprite: 'spell16.png',
      group: 'spell',
      x: 96,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="From Zed">315</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="From shadow clones">290</span>',
    cast_time: 'none',
    cost: '40',
    costtype: 'energy',
    cooldown:
      '5 / 4.<small>75</small> / 4.<small>5</small> / 4.<small>25</small> / 4',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zed" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zed/LoL" title="Zed"><img alt="Zed" src="/wiki/images/Zed_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zed/LoL" title="Zed/LoL">Zed</a></span></span> slashes to deal <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies hit. Enemies hit by a <a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Zed%27s_Shadow.png/revision/latest?cb=20180818091903" class="image"><img alt="Zed\'s Shadow.png" src="/wiki/images/Zed%27s_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> <i>Shadow\'s</i> slash are also briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span>.',
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zed" data-ability="Living Shadow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zed/LoL#Living_Shadow" title="Living Shadow\'s"><img alt="Living Shadow\'s" src="/wiki/images/Zed_Living_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zed/LoL#Living_Shadow" title="Zed/LoL">Living Shadow\'s</a></span></span></i> cooldown is <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduced</span> for each enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> hit by <b>Zed\'s</b> slash.',
    ],
    description: [
      {
        icon: '/wiki/images/Shadow Slash.png',
        description:
          'Active: Zed slashes to deal physical damage to nearby enemies.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Zed</b> slashes to deal <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '65 / 85 / 105 / 125 / 145 (+ 65% bonus AD)',
            valuesHTML:
              '65 / 85 / 105 / 125 / 145 <span style="color:orange; white-space:normal">(+&nbsp;65% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '65 / 85 / 105 / 125 / 145 (+ 65% bonus AD)',
            damagetype: 'Physical',
            values: [65, 85, 105, 125, 145],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '65 / 85 / 105 / 125 / 145',
            children: [
              {
                values: 65,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 65% bonus AD',
              },
            ],
          },
        ],
      },
      {
        description:
          "Enemies hit by a  Shadow's slash are  slowed for 1.5 seconds, with multiple slashes dealing no additional damage but the slow's effectiveness being increased by 50%.",
        descriptionHTML:
          'Enemies hit by a <a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Zed%27s_Shadow.png/revision/latest?cb=20180818091903" class="image"><img alt="Zed\'s Shadow.png" src="/wiki/images/Zed%27s_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> <i>Shadow\'s</i> slash are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> for 1.<small>5</small> seconds, with multiple slashes dealing no additional damage but the slow\'s effectiveness being increased by 50%.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: "Enemies hit by a  Shadow's slash are  slowed for 1.5 seconds, with multiple slashes dealing no additional damage but the slow's effectiveness being increased by 50%.",
            damagetype: 'None',
            values: 1,
            valuesIsPercent: true,
            units: 'total_ad',
            unitsText:
              ".hit by a  Shadow's slash are  slowed for 1.5 seconds, with multiple slashes dealing no additional damage but the slow's effectiveness being increased by 50",
            pre: "Enemies hit by a  Shadow's slash are  slowed for 1.5 seconds, with multiple slashes dealing no additional damage but the slow's effectiveness being increased by 50%.",
          },
        ],
        leveling: [
          {
            name: 'Slow:',
            values: '20 / 25 / 30 / 35 / 40%',
            valuesHTML: '20 / 25 / 30 / 35 / 40%',
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
        ],
      },
      {
        description:
          "Living Shadow's  current cooldown is reduced by 2 seconds for each enemy  champion hit by Zed's slash.",
        descriptionHTML:
          '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zed" data-ability="Living Shadow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zed/LoL#Living_Shadow" title="Living Shadow\'s"><img alt="Living Shadow\'s" src="/wiki/images/Zed_Living_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zed/LoL#Living_Shadow" title="Zed/LoL">Living Shadow\'s</a></span></span></i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> is reduced by 2 seconds for each enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> hit by <b>Zed\'s</b> slash.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: "Living Shadow's  current cooldown is reduced by 2 seconds for each enemy  champion hit by Zed's slash.",
            damagetype: 'None',
            values: 2,
            units: 'total_ad',
            unitsText:
              "Shadow's  current cooldown is reduced by 2 seconds for each enemy  champion hit by Zed's slash.",
            pre: "Living Shadow's  current cooldown is reduced by 2 seconds for each enemy  champion hit by Zed's slash.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'aoe',
    spellshield: 'Special',
    notes:
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will only block one <i>Shadow Slash</i> even if two hit at the same time, the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> will not apply regardless.\n<ul><li><i>Shadow Slash</i> does not interrupt attack, movement, or cast commands.</li></ul>',
  },
  'Death Mark': {
    name: 'Death Mark',
    display_name: 'Death Mark',
    champion: 'Zed',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'ZedR.png',
      sprite: 'spell16.png',
      group: 'spell',
      x: 144,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '625',
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Recast and ability mimick range">Global</span>',
    cast_time: 'none',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">120 / 110 / 100 / 90 / 80</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zed" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zed/LoL" title="Zed"><img alt="Zed" src="/wiki/images/Zed_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zed/LoL" title="Zed/LoL">Zed</a></span></span> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashing</a></span> to the target enemy champion, then marks them <i>Marked for Death</i> for a short time. He leaves behind a <a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Zed%27s_Shadow.png/revision/latest?cb=20180818091903" class="image"><img alt="Zed\'s Shadow.png" src="/wiki/images/Zed%27s_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> <i>Shadow</i> that will remain for a period and mimic <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zed" data-ability="Razor Shuriken" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zed/LoL#Razor_Shuriken" title="Razor Shuriken"><img alt="Razor Shuriken" src="/wiki/images/Zed_Razor_Shuriken.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zed/LoL#Razor_Shuriken" title="Zed/LoL">Razor Shuriken</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zed" data-ability="Shadow Slash" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zed/LoL#Shadow_Slash" title="Shadow Slash"><img alt="Shadow Slash" src="/wiki/images/Zed_Shadow_Slash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zed/LoL#Shadow_Slash" title="Zed/LoL">Shadow Slash</a></span></span></i>.',
      '<i>Death Mark</i> can be recast while the <a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Zed%27s_Shadow.png/revision/latest?cb=20180818091903" class="image"><img alt="Zed\'s Shadow.png" src="/wiki/images/Zed%27s_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> <i>Shadow</i> remains.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Zed</b> and his <a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Zed%27s_Shadow.png/revision/latest?cb=20180818091903" class="image"><img alt="Zed\'s Shadow.png" src="/wiki/images/Zed%27s_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> <i>Shadow</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blink</a></span> to swap places.',
      '<span class="template_sbc"><b>Marked for Death:</b></span> After the duration, the mark detonates to deal <span style="color: #FF8C34; white-space:normal">physical damage</span> based on the total damage dealt by <b>Zed</b> and his <a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Zed%27s_Shadow.png/revision/latest?cb=20180818091903" class="image"><img alt="Zed\'s Shadow.png" src="/wiki/images/Zed%27s_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> <i>Shadows</i> beforehand.',
    ],
    description: [
      {
        icon: '/wiki/images/Death Mark.png',
        description:
          'Active: Zed becomes  untargetable and, after 0.6 seconds, he  dashes 125 units through the target enemy champion over 0.35 seconds. Afterwards, he becomes targetable again, renders them Marked for Death for 3 seconds, and gains  ghosting for the same duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Zed</b> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> and, after 0.<small>6</small> seconds, he <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> 125 units through the target enemy champion over 0.<small>35</small> seconds. Afterwards, he becomes targetable again, renders them <i>Marked for Death</i> for 3 seconds, and gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghost"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span> for the same duration.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'Afterwards, he becomes targetable again, renders them Marked for Death for 3 seconds, and gains  ghosting for the same duration.',
            increasedStat: 'kindredMarks',
            values: 3,
            units: '',
            unitsText:
              'he becomes targetable again, renders them Marked for Death for 3 seconds, and gains  ghosting for the same duration.',
            pre: 'Afterwards, he becomes targetable again, renders them Marked for Death for 3 seconds, and gains  ghosting for the same duration.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Zed also spawns a  Shadow at his casting position for 9 seconds which is able to mimic  Razor Shuriken and  Shadow Slash regardless of range. Death Mark can be recast after 0.5 seconds of his reappearance while the  Shadow is active, though not in the last 1.25 seconds of its duration.',
        descriptionHTML:
          '<b>Zed</b> also spawns a <a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Zed%27s_Shadow.png/revision/latest?cb=20180818091903" class="image"><img alt="Zed\'s Shadow.png" src="/wiki/images/Zed%27s_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> <i>Shadow</i> at his casting position for 9 seconds which is able to mimic <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zed" data-ability="Razor Shuriken" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zed/LoL#Razor_Shuriken" title="Razor Shuriken"><img alt="Razor Shuriken" src="/wiki/images/Zed_Razor_Shuriken.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zed/LoL#Razor_Shuriken" title="Zed/LoL">Razor Shuriken</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zed" data-ability="Shadow Slash" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zed/LoL#Shadow_Slash" title="Shadow Slash"><img alt="Shadow Slash" src="/wiki/images/Zed_Shadow_Slash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zed/LoL#Shadow_Slash" title="Zed/LoL">Shadow Slash</a></span></span></i> regardless of range. <i>Death Mark</i> can be recast after 0.<small>5</small> seconds of his reappearance while the <a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Zed%27s_Shadow.png/revision/latest?cb=20180818091903" class="image"><img alt="Zed\'s Shadow.png" src="/wiki/images/Zed%27s_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> <i>Shadow</i> is active, though not in the last 1.<small>25</small> seconds of its duration.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Zed also spawns a  Shadow at his casting position for 9 seconds which is able to mimic  Razor Shuriken and  Shadow Slash regardless of range',
            damagetype: 'None',
            values: 9,
            units: 'total_ad',
            unitsText:
              'also spawns a  Shadow at his casting position for 9 seconds which is able to mimic  Razor Shuriken and  Shadow Slash regardless of range',
            pre: 'Zed also spawns a  Shadow at his casting position for 9 seconds which is able to mimic  Razor Shuriken and  Shadow Slash regardless of range',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Marked for Death: Zed stores a portion of all pre-mitigation physical damage and magic damage he and his  Shadows deal to the target, detonating at the end of the duration to deal physical damage.',
        descriptionHTML:
          '<span class="template_sbc"><b>Marked for Death:</b></span> <b>Zed</b> stores a portion of all <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated before modifiers">pre-mitigation</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span style="color: #00B0F0; white-space:normal">magic damage</span> he and his <a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Zed%27s_Shadow.png/revision/latest?cb=20180818091903" class="image"><img alt="Zed\'s Shadow.png" src="/wiki/images/Zed%27s_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> <i>Shadows</i> deal to the target, detonating at the end of the duration to deal <span style="color: #FF8C34; white-space:normal">physical damage</span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '65% AD (+ 25 / 40 / 55% of damage dealt)',
            valuesHTML:
              '<span style="color:orange; white-space:normal">65% AD</span> (+ 25 / 40 / 55% of damage dealt)',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '65% AD (+ 25 / 40 / 55% of damage dealt)',
            damagetype: 'Physical',
            values: 65,
            valuesIsPercent: true,
            units: 'total_ad',
            unitsText: 'AD',
            pre: '65% AD',
            children: [
              {
                values: [25, 40, 55],
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: 'of damage dealt',
                pre: '+ 25 / 40 / 55% of damage dealt',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Death Mark 2.png',
        description: 'Recast: Zed and the  Shadow  blink to swap places.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Zed</b> and the <a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Zed%27s_Shadow.png/revision/latest?cb=20180818091903" class="image"><img alt="Zed\'s Shadow.png" src="/wiki/images/Zed%27s_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> <i>Shadow</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blink</a></span> to swap places.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'If the target dies or is 1950 or more units away before the dash begins, Death Mark is cancelled, goes on a  0.5-second cooldown, and Zed reappears at the cast location. The  Shadow spawned also disappears.',
        descriptionHTML:
          '<i>If the target dies or is 1950 or more units away before the dash begins, Death Mark is cancelled, goes on a <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;0.<small>5</small>-second</span> cooldown, and <b>Zed</b> reappears at the cast location. The <a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Zed%27s_Shadow.png/revision/latest?cb=20180818091903" class="image"><img alt="Zed\'s Shadow.png" src="/wiki/images/Zed%27s_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> Shadow spawned also disappears.</i>',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'If the target dies or is 1950 or more units away before the dash begins, Death Mark is cancelled, goes on a  0.5-second cooldown, and Zed reappears at the cast location',
            damagetype: 'None',
            values: 1,
            units: 'total_ap',
            unitsText:
              'the target dies or is 1950 or more units away before the dash begins, Death Mark is cancelled, goes on a  0.5-second cooldown, and Zed reappears at the cast location',
            pre: 'If the target dies or is 1950 or more units away before the dash begins, Death Mark is cancelled, goes on a  0.5-second cooldown, and Zed reappears at the cast location',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting:
      '<a href="/wiki/Unit-targeted" class="mw-redirect" title="Unit-targeted">Unit</a> / <a href="/wiki/Auto-targeted" class="mw-redirect" title="Auto-targeted">Auto</a>',
    affects: 'Self, Enemies',
    damagetype: 'Physical',
    spelleffects: 'Single target',
    spellshield: 'Special',
    notes:
      '* <b>Zed</b> gains a buff for 7.<small>5</small> seconds that indicates and determines the duration in which he may recast <i>Death Mark</i>.\n<ul><li><ul><li>The buff is granted on-cast and lingers for 0.<small>25</small> seconds after it expires.</li></ul></li>\n<li>The <a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Zed%27s_Shadow.png/revision/latest?cb=20180818091903" class="image"><img alt="Zed\'s Shadow.png" src="/wiki/images/Zed%27s_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> <i>Shadow</i> is spawned the moment <i>Death Mark</i> is cast.</li>\n<li><b>Zed</b> will track the target if they change locations.\n<ul><li>He will dash through the target\'s previous location while still applying the <span style="color: #AF1AAF; white-space:normal">mark</span> if they are 2200 or more units away.</li></ul></li>\n<li><b>Zed</b> will be ordered to basic attack his target after reappearing.</li>\n<li><i>Death Mark\'s</i> stored damage derives from all <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a>, <a href="/wiki/Champion_ability" title="Champion ability">abilities</a>, <a href="/wiki/Item" class="mw-redirect" title="Item">items</a>, <a href="/wiki/Runes_Reforged" class="mw-redirect" title="Runes Reforged">runes</a> and <a href="/wiki/Buff" title="Buff">buffs</a>.</li>\n<li><i>Death Mark\'s</i> <a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Zed%27s_Shadow.png/revision/latest?cb=20180818091903" class="image"><img alt="Zed\'s Shadow.png" src="/wiki/images/Zed%27s_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> <i>Shadow</i> is functionally the same as a regular one, but it lasts longer and can be swapped to regardless of range.\n<ul><li>The range at which it mimics <b>Zed\'s</b> abilities does not change.</li></ul></li>\n<li>The <span style="color: #AF1AAF; white-space:normal">mark</span> can be prevented by becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> before it is applied (untargetability after application will not prevent the mark\'s detonation).</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shields</a></span> will only block the <span style="color: #AF1AAF; white-space:normal">mark\'s</span> application. They will not prevent <b>Zed</b> from initiating the cast nor block the detonation from a <span style="color: #AF1AAF; white-space:normal">mark</span> that is already applied.</li>\n<li>If <b>Zed</b> dies during <i>Death Mark</i>, the ability will cancel instantly and he will reappear at his current location. The cooldown is not compensated.\n<ul><li>If he enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span> before the dash, <i>Death Mark</i> does not cancel. If he enters it while dashing, the dash is interrupted.</li></ul></li>\n<li>If the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> is interrupted, <b>Zed</b> stops, places himself to the ground (ends all displacements affecting him, but does not remove <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> effects), and reappears prematurely at his current location. The <span style="color: #AF1AAF; white-space:normal">mark</span> will still be applied regardless.\n<ul><li><b>Zed</b> will remove <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> effects from himself immediately upon starting the dash.</li></ul></li>\n<li>Once <b>Zed</b> begins the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span>, two <a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Zed%27s_Shadow.png/revision/latest?cb=20180818091903" class="image"><img alt="Zed\'s Shadow.png" src="/wiki/images/Zed%27s_Shadow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> <i>Shadows</i> will also appear to be dashing through his target, each one spawning a certain distance behind the target (from the right and left). These <i>shadows</i> do <b>not</b> mimic abilities and disappear immediately after they stop dashing but they grant <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of their surroundings.\n<ul><li>These <i>shadows</i> have a tracking distance of 2200 and a dash speed of 1750.</li></ul></li>\n<li><i>Death Mark</i> does not cancel if the target enters a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Zombie state"><a href="/wiki/Death#Zombie_states" title="Death#Zombie states"><img alt="Zombie icon.png" src="/wiki/images/Zombie_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Zombie_states" title="Death">zombie state</a></span> before the dash begins.</li>\n<li>If the <span style="color: #AF1AAF; white-space:normal">mark\'s</span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after modifiers">post-mitigation damage</span> is higher than the target\'s <b>current</b> health, a <i>spinning shuriken</i> will appear above the victim. This does not necessarily mean the target will die, as it does not consider <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span> or forms of <a href="/wiki/Damage_modifier" title="Damage modifier">damage modifiers</a> that are not respected by this predictive calculation.</li></ul>\n<div style="clear:both"></div>\n<div class="center"><figure class="thumb tnone " style="width: 185px"> \t<a href="https://static.wikia.nocookie.net/leagueoflegends/images/1/17/Spinning_Shuriken_Indicator.png/revision/latest?cb=20191227041336" class="image"><img alt="" src="/wiki/images/Spinning_Shuriken_Indicator.png" decoding="async" loading="lazy" width="185" height="196" class="thumbimage lazyload"></a> \t<noscript><a href="https://static.wikia.nocookie.net/leagueoflegends/images/1/17/Spinning_Shuriken_Indicator.png/revision/latest?cb=20191227041336" class="image"><img alt="" src="https://static.wikia.nocookie.net/leagueoflegends/images/1/17/Spinning_Shuriken_Indicator.png/revision/latest?cb=20191227041336" decoding="async" loading="lazy" width="185" height="196" class="thumbimage" data-image-name="Spinning Shuriken Indicator.png" data-image-key="Spinning_Shuriken_Indicator.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/1/17/Spinning_Shuriken_Indicator.png/revision/latest?cb=20191227041336"></a></noscript> \t<figcaption class="thumbcaption"> \t\t \t\t \t\t \t\t\t<p class="caption">The indicator shown in-game <i>(base skin)</i>.</p> \t\t \t</figcaption> </figure></div>\n<div style="clear:both"></div>\n<ul><li>This following table refers for interactions while <b>Zed</b> is in <i>Death Mark</i>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n\n<tbody><tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All items are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Mark" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mark" title="Mark"><img alt="Mark" src="/wiki/images/Mark.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mark" title="Mark">Mark</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Dash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mark#Dash" title="Dash"><img alt="Dash" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mark#Dash" title="Mark">Dash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death, unless protected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">Resurrection</a></span>\n</li></td></tr></tbody></table>',
  },
} satisfies { [skillName in string]: SkillData };
