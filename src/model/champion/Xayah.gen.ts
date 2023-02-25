import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Xayah';

export default {
  'Clean Cuts': {
    name: 'Clean Cuts',
    display_name: 'Clean Cuts',
    champion: 'Xayah',
    skill: 'I',
    image: {
      full: 'XayahPassive.png',
      sprite: 'passive4.png',
      group: 'passive',
      x: 384,
      y: 96,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Feather landing location from Xayah\'s location, taken at the time of the attack dealing damage to main target">1000</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 120',
    speed: '4000',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span style="color: #AF1AAF; white-space:normal">Feathers</span> shot by <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xayah" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xayah/LoL" title="Xayah"><img alt="Xayah" src="/wiki/images/Xayah_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xayah/LoL" title="Xayah/LoL">Xayah</a></span></span> will linger in the ground at max range for a few seconds.',
      '<span class="template_sbc"><b>Innate:</b></span> <b>Xayah\'s</b> ability casts generate three stacks of <i>Clean Cuts</i>, stacking up to five times. <b>Xayah\'s</b> basic attacks consume a stack to instead shoot a <span style="color: #AF1AAF; white-space:normal">Feather</span> that deals <span style="color: #FF8C34; white-space:normal">the attack\'s damage</span> to the target and <span style="color: #FF8C34; white-space:normal">physical damage</span> to other enemies hit.',
      '<span class="template_sbc"><b>Innate - Lover\'s Leap:</b></span> <b>Xayah</b> and <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rakan" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rakan/LoL" title="Rakan"><img alt="Rakan" src="/wiki/images/Rakan_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rakan/LoL" title="Rakan/LoL">Rakan</a></span></span> can join each other\'s <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> to complete together.',
    ],
    description: [
      {
        icon: '/wiki/images/Clean_Cuts.png',
        description:
          'Innate: Feathers shot by Xayah will linger in the ground at maximum range for 6 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <span style="color: #AF1AAF; white-space:normal">Feathers</span> shot by <b>Xayah</b> will linger in the ground at maximum range for 6 seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Innate:',
            raw: 'Feathers shot by Xayah will linger in the ground at maximum range for 6 seconds.',
            values: 6,
            user: 'none',
            units: '',
            unitsText:
              'shot by Xayah will linger in the ground at maximum range for 6 seconds.',
            pre: 'Feathers shot by Xayah will linger in the ground at maximum range for 6 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Innate: Xayah's ability casts generate 3 stacks of Clean Cuts, lasting for 8 seconds, refreshing on subsequent casts, and stacking up to 5 times. Xayah's basic attacks are empowered to each consume a stack on-attack to instead shoot a Feather that deals the attack's damage to the primary target and 30 / 40 / 50% (based on level) AD physical damage to other enemies hit, with the secondary damage also  critically striking if the main attack does.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Xayah\'s</b> <a href="/wiki/Champion_ability" title="Champion ability">ability</a> casts generate 3 <a href="/wiki/Stack" title="Stack">stacks</a> of <i>Clean Cuts</i>, lasting for 8 seconds, refreshing on subsequent casts, and stacking up to 5 times. <b>Xayah\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> are empowered to each consume a stack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> to instead shoot a <span style="color: #AF1AAF; white-space:normal">Feather</span> that deals the <span style="color:orange; white-space:normal">attack\'s damage</span> to the primary target and <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="30;1" data-finish="50;13" data-bot_values="30;40;50" data-top_values="1;7;13" data-bot_key="%">30 / 40 / 50% (based on level)</span> AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> to other enemies hit, with the secondary damage also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically striking</a></span> if the main attack does.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Innate:',
            raw: "Xayah's ability casts generate 3 stacks of Clean Cuts, lasting for 8 seconds, refreshing on subsequent casts, and stacking up to 5 times",
            min: 0,
            max: 5,
            description:
              "Xayah's ability casts generate 3 stacks of Clean Cuts, lasting for 8 seconds, refreshing on subsequent casts, and stacking up to 5 times",
            values: 3,
            units: 'genericStacks',
            unitsText:
              'ability casts generate 3 stacks of Clean Cuts, lasting for 8 seconds, refreshing on subsequent casts, and stacking up to 5 times',
            pre: "Xayah's ability casts generate 3 stacks of Clean Cuts, lasting for 8 seconds, refreshing on subsequent casts, and stacking up to 5 times",
          },
          {
            effectType: 'Stacks',
            name: 'Line 2:',
            raw: "Xayah's basic attacks are empowered to each consume a stack on-attack to instead shoot a Feather that deals the attack's damage to the primary target and 30 / 40 / 50% (based on level) AD physical damage to other enemies hit, with the secondary damage also  critically striking if the main attack does.",
            min: 0,
            max: 10,
            description:
              "Xayah's basic attacks are empowered to each consume a stack on-attack to instead shoot a Feather that deals the attack's damage to the primary target and 30 / 40 / 50% (based on level) AD physical damage to other enemies hit, with the secondary damage also  critically striking if the main attack does.",
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            units: 'total_ad',
            unitsText:
              'AD physical damage to other enemies hit, with the secondary damage also  critically striking if the main attack does.',
            pre: "Xayah's basic attacks are empowered to each consume a stack on-attack to instead shoot a Feather that deals the attack's damage to the primary target and 30 / 40 / 50%",
            post: 'AD physical damage to other enemies hit, with the secondary damage also  critically striking if the main attack does.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/ProfileIcon1634_Blazing_Feathers.png',
        description:
          "Innate - Lover's Leap: If either Xayah or  Rakan is channeling  Recall, the other may move nearby and channel their own to join alongside them. Both reach base at the time of which the initiator's  Recall completes.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Lover\'s Leap:</b></span> If either <b>Xayah</b> or <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rakan" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rakan/LoL" title="Rakan"><img alt="Rakan" src="/wiki/images/Rakan_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rakan/LoL" title="Rakan/LoL">Rakan</a></span></span> is channeling <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>, the other may move nearby and channel their own to join alongside them. <b>Both</b> reach base at the time of which the initiator\'s <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> completes.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies',
    spellshield: false,
    projectile: 'special',
    notes:
      '* <span style="color: #AF1AAF; white-space:normal">Feathers</span> will stop upon being intercepted by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">projectile-blocking</a></span> effects.\n<ul><li><ul><li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Homing projectile destruction"><a href="/wiki/Projectile" title="Projectile"><img alt="Bullet strikethrough.png" src="/wiki/images/Bullet_strikethrough.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">Missile popping</a></span> before and after striking the primary target.</li></ul></li>\n<li>After striking their target, the attack will proceed in a line in the same direction it was already flying.\n<ul><li>If the target is more than 1000 units from <b>Xayah</b> when the empowered attack hits them, the attack will not keep flying in a line and drop the <span style="color: #AF1AAF; white-space:normal">Feather</span> at their location immediately.</li>\n<li>Unlike similar effects, the homing and line trajectories use the same missile.</li></ul></li>\n<li>All her <span style="color: #AF1AAF; white-space:normal">Feathers</span> on the ground will be destroyed when <b>Xayah</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, and while she is dead, missiles that are still in flight will not spawn new ones, either.</li>\n<li><i>Clean Cut\'s</i> feathers will spawn even if the basic attack is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blocked"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span>.</li>\n<li><i>Clean Cut\'s</i> hit can be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span> by or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">missed</a></span> against the primary target.\n<ul><li>This will not prevent the missile from continuing on its path nor from dealing damage to secondary targets. The damage cannot be dodged as or missed against a secondary target.</li></ul></li>\n<li>The empowered attack will not trigger against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a> nor <a href="/wiki/Ward" title="Ward">wards</a>.\n<ul><li>The duration will be refreshed when starting the attack windup against them.</li></ul></li></ul>',
    yvideo: 'Xayah - Passive',
    yvideo2: 'Xayah - Passive 2',
  },
  'Double Daggers': {
    name: 'Double Daggers',
    display_name: 'Double Daggers',
    champion: 'Xayah',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'XayahQ.png',
      sprite: 'spell15.png',
      group: 'spell',
      x: 384,
      y: 0,
      w: 48,
      h: 48,
    },
    range: '1100',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 100 (plus offset)',
    cast_time:
      "<span class=\"pp-tooltip\" style=\"position:relative; border-bottom:1px dotted; cursor:help; color:orangered;\" data-top_label=\"bonus attack speed\" data-displayformula=\"0.25-(0.07 per 100% '''bonus''' attack speed). ''This is capped at 60% reduction at 214.3% '''bonus''' attack speed.''\" data-bot_values=\"0.25;0.231;0.198;0.165;0.132;0.1\" data-top_values=\"0;27.15;74.29;121.43;168.58;214.3\" data-top_key=\"%\">0.<small>25</small> − 0.<small>1</small> (based on <b>bonus</b> attack speed)</span>",
    cost: '50',
    costtype: 'Mana',
    cooldown: '10 / 9.<small>5</small> / 9 / 8.<small>5</small> / 8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xayah" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xayah/LoL" title="Xayah"><img alt="Xayah" src="/wiki/images/Xayah_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xayah/LoL" title="Xayah/LoL">Xayah</a></span></span> throws a volley of two <span style="color: #AF1AAF; white-space:normal">Feathers</span> in the target direction that each deal <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit.',
    ],
    description: [
      {
        icon: '/wiki/images/Double_Daggers.png',
        description:
          'Active: Xayah throws a volley of two Feathers in the target direction that each deal physical damage to enemies hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Xayah</b> throws a volley of two <span style="color: #AF1AAF; white-space:normal">Feathers</span> in the target direction that each deal <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical Damage Per Hit:',
            values: '45 / 60 / 75 / 90 / 105 (+ 50% bonus AD)',
            valuesHTML:
              '45 / 60 / 75 / 90 / 105 <span style="color:orange; white-space:normal">(+&nbsp;50% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage Per Hit:',
            raw: '45 / 60 / 75 / 90 / 105 (+ 50% bonus AD)',
            damagetype: 'Physical',
            values: [45, 60, 75, 90, 105],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '45 / 60 / 75 / 90 / 105',
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
        description: 'Targets hit after the first take 50% reduced damage.',
        descriptionHTML: 'Targets hit after the first take 50% reduced damage.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Targets hit after the first take 50% reduced damage.',
            damagetype: 'None',
            values: 5,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'reduced damage.hit after the first take 50',
            pre: 'Targets hit after the first take 50% reduced damage.',
          },
        ],
        leveling: [
          {
            name: 'Reduced Damage per Hit:',
            values: '22.5 / 30 / 37.5 / 45 / 52.5 (+ 25% bonus AD)',
            valuesHTML:
              '22.<small>5</small> / 30 / 37.<small>5</small> / 45 / 52.<small>5</small> <span style="color:orange; white-space:normal">(+&nbsp;25% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Reduced Damage per Hit:',
            raw: '22.5 / 30 / 37.5 / 45 / 52.5 (+ 25% bonus AD)',
            damagetype: 'None',
            values: [22.5, 30, 37.5, 45, 52.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '22.5 / 30 / 37.5 / 45 / 52.5',
            children: [
              {
                values: 25,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 25% bonus AD',
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
    projectile: 'special',
    notes:
      '* Daggers shoot from <b>Xayah\'s</b> left and right side.\n<ul><li>Because of the usual tick intervals of the server, <i>Double Daggers\' </i>minimum cast time is typically reached at <span style="color:orangered; white-space:normal">168.<small>58</small>% <b>bonus</b> attack speed</span> already, for a cast time of 0.<small>132</small> seconds (from the default <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.25 seconds, but rounded up to the next game tick.">0.<small>264</small> seconds</span>), or the duration of 4 game ticks.\n<ul><li>If the first 3 game ticks happen to be slightly longer than normal, the minimum cast time of 0.<small>1</small> seconds can actually be reached in very rare cases because of that.</li></ul></li>\n<li><b>Xayah</b> is unable to declare basic attacks for a set duration during the cast time of <i>Double Daggers</i>. The lock out duration is reduced by <span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;0.<small>007</small> seconds per every <span style="color:orangered; white-space:normal">1% <b>bonus</b> attack speed</span>&nbsp;」</span><span class="flipText2">「&nbsp;1 second per every <span style="color:orangered; white-space:normal">140% <b>bonus</b> attack speed</span>&nbsp;」</span></span>.</li>\n<li>The <span style="color: #AF1AAF; white-space:normal">Feathers</span> will stop upon being intercepted by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">projectile-blocking</a></span> effects.</li>\n<li>As the feathers are forming, they will deal damage in a small area around <b>Xayah\'s</b> before firing.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will only block a single instance of damage.</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>',
    yvideo: 'Xayah - Q',
  },
  'Deadly Plumage': {
    name: 'Deadly Plumage',
    display_name: 'Deadly Plumage',
    champion: 'Xayah',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'XayahW.png',
      sprite: 'spell15.png',
      group: 'spell',
      x: 432,
      y: 0,
      w: 48,
      h: 48,
    },
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Spline missile speed">3000</span>',
    cast_time: 'none',
    cost: '60 / 55 / 50 / 45 / 40',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">20 / 19 / 18 / 17 / 16</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xayah" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xayah/LoL" title="Xayah"><img alt="Xayah" src="/wiki/images/Xayah_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xayah/LoL" title="Xayah/LoL">Xayah</a></span></span> empowers herself for a few seconds, gaining <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> and causing her basic attacks to strike a second time, dealing <b>reduced</b> damage.',
      'Whenever she hits an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, she briefly gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>.',
      '<i>If <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rakan" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rakan/LoL" title="Rakan"><img alt="Rakan" src="/wiki/images/Rakan_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rakan/LoL" title="Rakan/LoL">Rakan</a></span></span> is nearby upon cast, he also becomes empowered and gains the <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> at the same time as <b>Xayah</b>.</i>',
    ],
    description: [
      {
        icon: '/wiki/images/Deadly_Plumage.png',
        description:
          'Active: Xayah enters a frenzy for 4 seconds, gaining  bonus attack speed and empowering her basic attacks to strike a second time, dealing 20% damage.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Xayah</b> enters a frenzy for 4 seconds, gaining <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> and empowering her basic attacks to strike a second time, dealing 20% damage.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Xayah enters a frenzy for 4 seconds, gaining  bonus attack speed and empowering her basic attacks to strike a second time, dealing 20% damage.',
            increasedStat: 'bonus_ad',
            values: 4,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'damage.enters a frenzy for 4 seconds, gaining  bonus attack speed and empowering her basic attacks to strike a second time, dealing 20',
            pre: 'Xayah enters a frenzy for 4 seconds, gaining  bonus attack speed and empowering her basic attacks to strike a second time, dealing 20% damage.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Attack Speed:',
            values: '35 / 40 / 45 / 50 / 55%',
            valuesHTML: '35 / 40 / 45 / 50 / 55%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '35 / 40 / 45 / 50 / 55%',
            values: [35, 40, 45, 50, 55],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 40 / 45 / 50 / 55%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Whenever Xayah hits an enemy  champion with the strike, she gains  30% bonus movement speed for 1.5 seconds.',
        descriptionHTML:
          'Whenever <b>Xayah</b> hits an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> with the strike, she gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">30% <b>bonus</b> movement speed</span></span> for 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Whenever Xayah hits an enemy  champion with the strike, she gains  30% bonus movement speed for 1.5 seconds.',
            values: 3,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'bonus movement speed for 1.5 seconds.Xayah hits an enemy  champion with the strike, she gains  30',
            pre: 'Whenever Xayah hits an enemy  champion with the strike, she gains  30% bonus movement speed for 1.5 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'If  Rakan is nearby upon cast, he also becomes empowered, and gains the  bonus movement speed at the same time as Xayah.',
        descriptionHTML:
          '<i>If <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rakan" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rakan/LoL" title="Rakan"><img alt="Rakan" src="/wiki/images/Rakan_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rakan/LoL" title="Rakan/LoL">Rakan</a></span></span> is nearby upon cast, he also becomes empowered, and gains the <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> at the same time as <b>Xayah</b>.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self, Rakan',
    damagetype: 'Physical',
    spelleffects: 'periodic',
    projectile: 'true',
    notes:
      '* The lesser bolts count as additional sources of single target physical damage, and will apply bonus stacks of <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="The Black Cleaver" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/The_Black_Cleaver" title="The Black Cleaver"><img alt="The Black Cleaver" src="/wiki/images/Black_Cleaver_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/The_Black_Cleaver" class="mw-redirect" title="The Black Cleaver">The Black Cleaver</a></span></span> and <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Electrocute" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Electrocute_(Rune)" title="Electrocute"><img alt="Electrocute" src="/wiki/images/Electrocute_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Electrocute_(Rune)" class="mw-redirect" title="Electrocute (Rune)">Electrocute</a></span></span>.\n<ul><li>The lesser bolts from <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane"><img alt="Runaan\'s Hurricane" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">Runaan\'s Hurricane</a></span></span> will also deal 20% increased damage, which is represented with additional lesser bolts. The damage dealt by <i>Deadly Plumage\'s</i> bolts is 20% of the fired bolt from <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane"><img alt="Runaan\'s Hurricane" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">Runaan\'s Hurricane</a></span></span>, <i>not</i> of the initial basic attack.</li>\n<li>The lesser bolts deal 20% of the triggering basic attack\'s damage, not based on her <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal">attack damage</span></span>. Thus, if the basic attack is a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span>, the lesser bolt will also deal increased damage.</li>\n<li>The empowered attack will not trigger against <a href="/wiki/Ward" title="Ward">wards</a>.</li></ul>',
    yvideo: 'Xayah - W',
  },
  Bladecaller: {
    name: 'Bladecaller',
    display_name: 'Bladecaller',
    champion: 'Xayah',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'XayahE.png',
      sprite: 'spell15.png',
      group: 'spell',
      x: 0,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius: 'Global',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 160',
    speed: '4000',
    cast_time: 'none',
    cost: '30',
    costtype: 'Mana',
    cooldown: '10 / 9.<small>5</small> / 9 / 8.<small>5</small> / 8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xayah" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xayah/LoL" title="Xayah"><img alt="Xayah" src="/wiki/images/Xayah_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xayah/LoL" title="Xayah/LoL">Xayah</a></span></span> recalls all <span style="color: #AF1AAF; white-space:normal">Feathers</span> to shoot back to her, each dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit based on her <span style="color: #E56013; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike chance icon.png" src="/wiki/images/Critical_strike_chance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;critical strike chance</span></span>.',
      'An enemy hit by at least three <span style="color: #AF1AAF; white-space:normal">Feathers</span> is briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Bladecaller.png',
        description:
          'Active: Xayah recalls all planted Feathers to shoot back to her, each dealing physical damage to enemies hit, increased by 0% − 75% (based on critical strike chance). Bladecaller deals 50% damage to  minions.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Xayah</b> recalls all planted <span style="color: #AF1AAF; white-space:normal">Feathers</span> to shoot back to her, each dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit, increased by <span style="color: #E56013; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="critical strike chance" data-displayformula="0.75 × critical strike chance" data-bot_values="0;7.5;15;22.5;30;37.5;45;52.5;60;67.5;75" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 75% (based on critical strike chance)</span></span>. <i>Bladecaller</i> deals 50% damage to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Bladecaller deals 50% damage to  minions.',
            damagetype: 'None',
            values: 5,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'damage to  minions.deals 50',
            pre: 'Bladecaller deals 50% damage to  minions.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage Per Feather:',
            values: '55 / 65 / 75 / 85 / 95 (+ 60% bonus AD)',
            valuesHTML:
              '55 / 65 / 75 / 85 / 95 <span style="color:orange; white-space:normal">(+&nbsp;60% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage Per Feather:',
            raw: '55 / 65 / 75 / 85 / 95 (+ 60% bonus AD)',
            damagetype: 'Physical',
            values: [55, 65, 75, 85, 95],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 65 / 75 / 85 / 95',
            children: [
              {
                values: 60,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 60% bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'An enemy takes 100% − 10% (based on previous feathers hit) damage from a Feather.',
        descriptionHTML:
          'An enemy takes <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="previous feathers hit" data-displayformula="100%-(5% per previous feather hit). \'\'This is capped at 10% damage.\'\'" data-bot_values="100;95;90;85;80;75;70;65;60;55;50;45;40;35;30;25;20;15;10" data-top_values="0;1;2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17;18" data-bot_key="%">100% − 10% (based on previous feathers hit)</span> damage from a <span style="color: #AF1AAF; white-space:normal">Feather</span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'An enemy takes 100% − 10% (based on previous feathers hit) damage from a Feather.',
            damagetype: 'None',
            values: 1,
            valuesIsPercent: true,
            basedOn: 'previous feathers hit',
            user: 'none',
            units: '',
            unitsText: 'damage from a Feather.',
            pre: 'An enemy takes 100% − 10%',
            post: 'damage from a Feather.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'A target hit by at least three Feathers is  rooted for 1.25 seconds.',
        descriptionHTML:
          'A target hit by at least three <span style="color: #AF1AAF; white-space:normal">Feathers</span> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span> for 1.<small>25</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'A target hit by at least three Feathers is  rooted for 1.25 seconds.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'target hit by at least three Feathers is  rooted for 1.25 seconds.',
            pre: 'A target hit by at least three Feathers is  rooted for 1.25 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Enemies can be hit by an individual Feather only once per pass.',
        descriptionHTML:
          '<i>Enemies can be hit by an individual <span style="color: #AF1AAF; white-space:normal">Feather</span> only once per pass.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'spellaoe',
    spellshield: 'Special',
    projectile: 'True',
    notes:
      '* <span style="color: #AF1AAF; white-space:normal">Feathers</span> that are \'in flight\' will be called to <b>Xayah</b> too, but only once they\'ve landed normally first.\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will only block a single instance of damage.</li>\n<li>This ability cannot be ranked at <a href="/wiki/Experience_(champion)" title="Experience (champion)">Level</a> 1.</li>\n<li>The damage dealt by <i>Bladecaller</i> follows a diminishing returns formula not mentioned in the ability\'s description, successively reducing extra damage from feathers beyond the first.\n<ul><li>This formula is:\n<ul><li>For feathers &lt;=19: Damage of one feather&nbsp;×&nbsp;(n&nbsp;−&nbsp;0.<small>05</small>&nbsp;×&nbsp;(n&nbsp;−&nbsp;1)&nbsp;÷&nbsp;2&nbsp;×&nbsp;n) where n stands for the number of feathers hit.</li>\n<li>For feathers &gt;=20: Damage of one feather&nbsp;×&nbsp;(19&nbsp;−&nbsp;0.<small>05</small>&nbsp;×&nbsp;(19&nbsp;−&nbsp;1)&nbsp;÷&nbsp;2&nbsp;×&nbsp;19&nbsp;+&nbsp;0.1&nbsp;×&nbsp;(n&nbsp;−&nbsp;19)) where n stands for the number of feathers hit.</li></ul></li>\n<li>For example, at rank 1 <i>Bladecaller</i> deals <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="feathers hit" data-useformula="55*(x-0.05*(x-1)/2*x)" data-bot_values="55;107.25;156.75;203.5;247.5;288.75;327.25;363;396;426.25;453.75;478.5;500.5;519.75;536.25;550;561;569.25;574.75" data-top_values="">55 − 574.<small>75</small> (based on feathers hit)</span>.</li></ul></li>\n<li><i>Bladecaller</i> cannot be cast without a <span style="color: #AF1AAF; white-space:normal">Feather</span> on the ground.</li></ul>',
    yvideo: 'Xayah - E',
  },
  Featherstorm: {
    name: 'Featherstorm',
    display_name: 'Featherstorm',
    champion: 'Xayah',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'XayahR.png',
      sprite: 'spell15.png',
      group: 'spell',
      x: 48,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Measured">1060</span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 1000',
    angle:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">30°</span>',
    cast_time: 'none',
    cost: '100',
    costtype: 'Mana',
    cooldown: '140 / 130 / 120 / 110 / 100',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xayah" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xayah/LoL" title="Xayah"><img alt="Xayah" src="/wiki/images/Xayah_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xayah/LoL" title="Xayah/LoL">Xayah</a></span></span> leaps into the air and briefly becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, then throws five <span style="color: #AF1AAF; white-space:normal">Feathers</span> in a cone in the target direction that each deal <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit.',
      '<i><b>Xayah</b> can move during Featherstorm.</i>',
    ],
    description: [
      {
        icon: '/wiki/images/Featherstorm.png',
        description:
          'Active: Xayah leaps into the air, becoming  untargetable and  ghosted for 1.5 seconds. After 1 second, she shoots 5 Feathers in a cone in the target direction that deal physical damage to enemies hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Xayah</b> leaps into the air, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> for 1.<small>5</small> seconds. After 1 second, she shoots 5 <span style="color: #AF1AAF; white-space:normal">Feathers</span> in a cone in the target direction that deal <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Xayah leaps into the air, becoming  untargetable and  ghosted for 1.5 seconds',
            damagetype: 'None',
            values: 1,
            units: 'total_ap',
            unitsText:
              'leaps into the air, becoming  untargetable and  ghosted for 1.5 seconds',
            pre: 'Xayah leaps into the air, becoming  untargetable and  ghosted for 1.5 seconds',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'After 1 second, she shoots 5 Feathers in a cone in the target direction that deal physical damage to enemies hit.',
            damagetype: 'Physical',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              '1 second, she shoots 5 Feathers in a cone in the target direction that deal physical damage to enemies hit.',
            pre: 'After 1 second, she shoots 5 Feathers in a cone in the target direction that deal physical damage to enemies hit.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '200 / 250 / 300 / 350 / 400 (+ 100% bonus AD)',
            valuesHTML:
              '200 / 250 / 300 / 350 / 400 <span style="color:orange; white-space:normal">(+&nbsp;100% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '200 / 250 / 300 / 350 / 400 (+ 100% bonus AD)',
            damagetype: 'Physical',
            values: [200, 250, 300, 350, 400],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 250 / 300 / 350 / 400',
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
      {
        icon: '/wiki/images/undefined',
        description:
          'Xayah is unable to basic attack or cast abilities during Featherstorm, but can still move.',
        descriptionHTML:
          '<i><b>Xayah</b> is unable to basic attack or cast abilities during Featherstorm, but can still move.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'special',
    notes:
      '* The individual missiles have 1100 range but start slightly behind Xayah, reducing their total range.\n<ul><li>The following table refers for interactions while <b>Xayah</b> is in <i>Featherstorm</i>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n\n<tbody><tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Allowed\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All items are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Mark" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mark" title="Mark"><img alt="Mark" src="/wiki/images/Mark.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mark" title="Mark">Mark</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Dash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mark#Dash" title="Dash"><img alt="Dash" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mark#Dash" title="Mark">Dash</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death\n</li></td></tr></tbody></table>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Xayah_Original_R.ogg   "Feathers fly!"',
    yvideo: 'Xayah - R',
  },
} satisfies { [skillName in string]: SkillData };
