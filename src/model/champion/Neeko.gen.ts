import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Neeko';

export default {
  'Inherent Glamour': {
    name: 'Inherent Glamour',
    display_name: 'Inherent Glamour',
    champion: 'Neeko',
    skill: 'I',
    image: {
      full: 'Neeko_P.png',
      sprite: 'passive2.png',
      group: 'passive',
      x: 192,
      y: 96,
      w: 48,
      h: 48,
    },
    static:
      '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="25-3 every 3 levels" data-bot_values="25;22;19;16;13;10" data-top_values="1;4;7;10;13;16">25 − 10 (based on level)</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Neeko" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Neeko/LoL" title="Neeko"><img alt="Neeko" src="/wiki/images/Neeko_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Neeko/LoL" title="Neeko/LoL">Neeko</a></span></span> can select an allied champion to take their appearance. She can choose a new champion to switch her disguise or select herself to deactivate her disguise, placing <i>Inherent Glamour</i> on a short cooldown.',
      'The disguise will break when <b>Neeko</b> takes damage from enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> or performs her damaging abilities, placing it on full cooldown.',
    ],
    description: [
      {
        icon: '/wiki/images/Inherent Glamour.png',
        description:
          'Innate: Neeko is offered a selection of allied  champions to take on their appearance. She can choose a new champion to switch her disguise or select herself to deactivate her disguise, placing Inherent Glamour on a 2-second cooldown.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Neeko</b> is offered a selection of allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> to take on their appearance. She can choose a new champion to switch her disguise or select herself to deactivate her disguise, placing <i>Inherent Glamour</i> on a 2-second cooldown.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'She can choose a new champion to switch her disguise or select herself to deactivate her disguise, placing Inherent Glamour on a 2-second cooldown.',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'can choose a new champion to switch her disguise or select herself to deactivate her disguise, placing Inherent Glamour on a 2-second cooldown.',
            pre: 'She can choose a new champion to switch her disguise or select herself to deactivate her disguise, placing Inherent Glamour on a 2-second cooldown.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'While disguised, Neeko can use basic attacks while keeping her form. Taking direct damage from enemy  champions or using a damaging ability, summoner spell, or item active puts Inherent Glamour on full  cooldown.',
        descriptionHTML:
          'While disguised, <b>Neeko</b> can use basic attacks while keeping her form. Taking direct damage from enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> or using a damaging <a href="/wiki/Champion_ability" title="Champion ability">ability</a>, <a href="/wiki/Summoner_spell" title="Summoner spell">summoner spell</a>, or <a href="/wiki/Active_ability_items" title="Active ability items">item active</a> puts <i>Inherent Glamour</i> on full <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Neeko cannot activate Inherent Glamour while she is unable to cast abilities.',
        descriptionHTML:
          '<i><b>Neeko</b> cannot activate Inherent Glamour while she is unable to cast abilities.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes:
      '* <b>Neeko</b> will copy aesthetics as well as superficial mechanical <a href="/wiki/Champion_statistic" title="Champion statistic">statistics</a>. She will fake a number of readings:\n<ul><li><ul><li><a href="/wiki/Health" title="Health">Health bar</a> (original\'s current amount becomes her apparent maximum)</li>\n<li><a href="/wiki/Manaless" title="Manaless">Secondary resource</a> - e.g. <span style="color: #0099CC; white-space:normal">mana</span>, <span style="color:yellow; white-space:normal">energy</span> or none at all (original\'s current amount becomes her apparent maximum)</li>\n<li><a href="/wiki/Champion_statistic" title="Champion statistic">Stats</a></li>\n<li><a href="/wiki/Buff" title="Buff">Buffs</a> and <a href="/wiki/Debuff" title="Debuff">debuffs</a> with their respective icons and VFX/SFX (there are exceptions)\n<ul><li><b>Neeko</b> sees the buffs that are actually applied to her, while enemies see the disguised champion\'s buffs.</li></ul></li>\n<li>Kill feed icon</li></ul></li>\n<li>A number of attributes she actually adopts are:\n<ul><li>Base movement speed</li>\n<li>The melee or ranged classification of the champion</li>\n<li>Base attack speed and attack ratio</li>\n<li>The projectile or non-projectile quality of their attack</li>\n<li>Attack range (will not adopt longer <a href="/wiki/Range" title="Range">attack range</a>)</li>\n<li><a href="/wiki/Size" title="Size">Size</a> (including size modifiers and base champion size)</li>\n<li>Default transformation toggle (non-innate)</li>\n<li>Voice lines</li>\n<li>Character interactions (jokes, taunts, dances, laughs, toggle effects), as well as their <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> animation\n<ul><li><b>Neeko</b> can copy <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL" title="Samira\'s"><img alt="Samira\'s" src="/wiki/images/Samira_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL" title="Samira/LoL">Samira\'s</a></span></span> taunt animation but she will not actually throw the coin via the <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Samira" data-ability="Taunt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Samira/LoL#Taunt" title="Taunt"><img alt="Taunt" src="/wiki/images/Samira_splash_coin.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Samira/LoL#Taunt" title="Samira/LoL">Taunt</a></span></span> ability.</li></ul></li></ul></li>\n<li><i>Inherent Glamour\'s</i> disguise is broken by the following:\n<ul><li>Casting <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Neeko" data-ability="Blooming Burst" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Neeko/LoL#Blooming_Burst" title="Blooming Burst"><img alt="Blooming Burst" src="/wiki/images/Neeko_Blooming_Burst.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Neeko/LoL#Blooming_Burst" title="Neeko/LoL">Blooming Burst</a></span></span> or <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Neeko" data-ability="Tangle-Barbs" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Neeko/LoL#Tangle-Barbs" title="Tangle-Barbs"><img alt="Tangle-Barbs" src="/wiki/images/Neeko_Tangle-Barbs.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Neeko/LoL#Tangle-Barbs" title="Neeko/LoL">Tangle-Barbs</a></span></span>.\n<ul><li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Neeko" data-ability="Pop Blossom" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Neeko/LoL#Pop_Blossom" title="Pop Blossom\'s"><img alt="Pop Blossom\'s" src="/wiki/images/Neeko_Pop_Blossom.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Neeko/LoL#Pop_Blossom" title="Neeko/LoL">Pop Blossom\'s</a></span></span> cast will not break the disguise, but does so after its windup completes.</li></ul></li>\n<li>Using <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span>, <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span>, or <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>.</li>\n<li>Activating <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Everfrost" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Everfrost" title="Everfrost"><img alt="Everfrost" src="/wiki/images/Everfrost_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Everfrost" title="Everfrost">Everfrost</a></span></span>, <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Galeforce" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Galeforce" title="Galeforce"><img alt="Galeforce" src="/wiki/images/Galeforce_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Galeforce" title="Galeforce">Galeforce</a></span></span>, <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Hextech Rocketbelt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt"><img alt="Hextech Rocketbelt" src="/wiki/images/Hextech_Rocketbelt_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt">Hextech Rocketbelt</a></span></span>, <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Ironspike Whip" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ironspike_Whip" title="Ironspike Whip"><img alt="Ironspike Whip" src="/wiki/images/Ironspike_Whip_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ironspike_Whip" title="Ironspike Whip">Ironspike Whip</a></span></span> (<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Goredrinker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Goredrinker" title="Goredrinker"><img alt="Goredrinker" src="/wiki/images/Goredrinker_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Goredrinker" title="Goredrinker">Goredrinker</a></span></span> / <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Stridebreaker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Stridebreaker" title="Stridebreaker"><img alt="Stridebreaker" src="/wiki/images/Stridebreaker_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Stridebreaker" title="Stridebreaker">Stridebreaker</a></span></span>), or <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Redemption" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Redemption" title="Redemption"><img alt="Redemption" src="/wiki/images/Redemption_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Redemption" title="Redemption">Redemption</a></span></span>.\n<ul><li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Prowler\'s Claw" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Prowler%27s_Claw" title="Prowler\'s Claw\'s"><img alt="Prowler\'s Claw\'s" src="/wiki/images/Prowler%27s_Claw_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Prowler%27s_Claw" title="Prowler\'s Claw">Prowler\'s Claw\'s</a></span></span> initial activation will not break the disguise, but does so upon dealing damage.</li></ul></li></ul></li></ul>',
    video: 'Neeko - Passive',
  },
  'Blooming Burst': {
    name: 'Blooming Burst',
    display_name: 'Blooming Burst',
    champion: 'Neeko',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'NeekoQ.png',
      sprite: 'spell8.png',
      group: 'spell',
      x: 96,
      y: 144,
      w: 48,
      h: 48,
    },
    range: '800',
    effect_radius: '225',
    cast_time: '0.<small>25</small>',
    cost: '50 / 60 / 70 / 80 / 90',
    costtype: 'Mana',
    cooldown: '7',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Neeko" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Neeko/LoL" title="Neeko"><img alt="Neeko" src="/wiki/images/Neeko_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Neeko/LoL" title="Neeko/LoL">Neeko</a></span></span> tosses a seed that <i>blooms</i> at the target location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies.',
      'If the <i>bloom</i> kills an enemy or hits a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>, it will briefly <i>bloom</i> again to deal <span style="color: #00B0F0; white-space:normal">magic damage</span>, up to two times per cast.',
    ],
    description: [
      {
        icon: '/wiki/images/Blooming Burst.png',
        description:
          'Active: Neeko tosses a seed that blooms at the target location, dealing magic damage to nearby enemies.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Neeko</b> tosses a seed that <i>blooms</i> at the target location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '80 / 125 / 170 / 215 / 260 (+ 50% AP)',
            valuesHTML:
              '80 / 125 / 170 / 215 / 260 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 125 / 170 / 215 / 260 (+ 50% AP)',
            damagetype: 'Magic',
            values: [80, 125, 170, 215, 260],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 125 / 170 / 215 / 260',
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
      {
        description:
          'If the bloom kills an enemy or hits a  champion or large  monster, it will bloom again after 0.75 seconds to deal magic damage. This may occur up to 2 times per cast.',
        descriptionHTML:
          'If the <i>bloom</i> kills an enemy or hits a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>, it will <i>bloom</i> again after 0.<small>75</small> seconds to deal <span style="color: #00B0F0; white-space:normal">magic damage</span>. This may occur up to 2 times per cast.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'This may occur up to 2 times per cast.',
            values: 2,
            user: 'none',
            units: '',
            unitsText: 'may occur up to 2 times per cast.',
            pre: 'This may occur up to 2 times per cast.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '40 / 65 / 90 / 115 / 140 (+ 20% AP)',
            valuesHTML:
              '40 / 65 / 90 / 115 / 140 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;20% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '40 / 65 / 90 / 115 / 140 (+ 20% AP)',
            damagetype: 'Magic',
            values: [40, 65, 90, 115, 140],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 65 / 90 / 115 / 140',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 20% AP',
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
    spellshield: 'Special',
    projectile: 'True',
    notes:
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> blocks an instance of damage but does not prevent subsequent <i>Blooms</i>.',
    video: 'Neeko - Q',
  },
  Shapesplitter: {
    name: 'Shapesplitter',
    display_name: 'Shapesplitter',
    champion: 'Neeko',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'NeekoW.png',
      sprite: 'spell8.png',
      group: 'spell',
      x: 144,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '900',
    cast_time: 'none',
    cooldown: '16 / 15 / 14 / 13 / 12',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Neeko" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Neeko/LoL" title="Neeko\'s"><img alt="Neeko\'s" src="/wiki/images/Neeko_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Neeko/LoL" title="Neeko/LoL">Neeko\'s</a></span></span> basic attacks generate stacks of <i>Shapesplitter</i>. At max stacks, her next basic attack will consume them all to become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">non-projectile</a></span>, deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>, and briefly grant her <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Neeko</b> creates a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clone</a></span> of her <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Neeko" data-ability="Inherent Glamour" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Neeko/LoL#Inherent_Glamour" title="current form"><img alt="current form" src="/wiki/images/Neeko_Inherent_Glamour.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Neeko/LoL#Inherent_Glamour" title="Neeko/LoL">current form</a></span></span> and together they enter brief <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisibility"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisibility</a></span>, and gain <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span> for a short time.',
      'The clone spawns briefly untargetable, and will run in the target direction for a short time before expiring.',
    ],
    description: [
      {
        description:
          "Passive: Neeko's basic attacks  on-hit generate a stack of Shapesplitter, stacking up to 2 times. At 2 stacks, her next basic attack on-attack is empowered to consume them all to become  non-projectile, deal bonus magic damage and grant her  bonus movement speed for 1 second.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Neeko\'s</b> basic attacks <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> generate a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Shapesplitter</i>, stacking up to 2 times. At 2 stacks, her next basic attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> is empowered to consume them all to become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">non-projectile</a></span>, deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> and grant her <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for 1 second.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Passive:',
            raw: " Neeko's basic attacks  on-hit generate a stack of Shapesplitter, stacking up to 2 times",
            min: 0,
            max: 10,
            description:
              " Neeko's basic attacks  on-hit generate a stack of Shapesplitter, stacking up to 2 times",
            values: 2,
            units: 'total_ap',
            unitsText:
              'basic attacks  on-hit generate a stack of Shapesplitter, stacking up to 2 times',
            pre: "Neeko's basic attacks  on-hit generate a stack of Shapesplitter, stacking up to 2 times",
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'At 2 stacks, her next basic attack on-attack is empowered to consume them all to become  non-projectile, deal bonus magic damage and grant her  bonus movement speed for 1 second.',
            increasedStat: 'feastStacks',
            values: 2,
            units: '',
            unitsText:
              '2 stacks, her next basic attack on-attack is empowered to consume them all to become  non-projectile, deal bonus magic damage and grant her  bonus movement speed for 1 second.',
            pre: 'At 2 stacks, her next basic attack on-attack is empowered to consume them all to become  non-projectile, deal bonus magic damage and grant her  bonus movement speed for 1 second.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Magic Damage:',
            values: '50 / 80 / 110 / 140 / 170 (+ 60% AP)',
            valuesHTML:
              '50 / 80 / 110 / 140 / 170 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
          {
            name: 'Bonus Movement Speed:',
            values: '10 / 17.5 / 25 / 32.5 / 40%',
            valuesHTML:
              '10 / 17.<small>5</small> / 25 / 32.<small>5</small> / 40%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Magic Damage:',
            raw: '50 / 80 / 110 / 140 / 170 (+ 60% AP)',
            damagetype: 'Magic',
            values: [50, 80, 110, 140, 170],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 80 / 110 / 140 / 170',
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
            name: 'Bonus Movement Speed:',
            raw: '10 / 17.5 / 25 / 32.5 / 40%',
            values: [10, 17.5, 25, 32.5, 40],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 17.5 / 25 / 32.5 / 40%',
          },
        ],
      },
      {
        icon: '/wiki/images/Shapesplitter.png',
        description:
          'Active: Neeko creates a  clone of her  current form, after which they both instantly become  invisible for 0.5 seconds and gain bonus movement speed for 3 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Neeko</b> creates a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clone</a></span> of her <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Neeko" data-ability="Inherent Glamour" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Neeko/LoL#Inherent_Glamour" title="current form"><img alt="current form" src="/wiki/images/Neeko_Inherent_Glamour.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Neeko/LoL#Inherent_Glamour" title="Neeko/LoL">current form</a></span></span>, after which they both instantly become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisible"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisible</a></span> for 0.<small>5</small> seconds and gain <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span> for 3 seconds.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Bonus Movement Speed:',
            values: '20 / 25 / 30 / 35 / 40%',
            valuesHTML: '20 / 25 / 30 / 35 / 40%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
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
          'The clone lasts for 3 seconds, and starts running a fixed distance in the target direction. It is  untargetable to allies and for the first 0.5 seconds of its lifespan to enemies.',
        descriptionHTML:
          'The clone lasts for 3 seconds, and starts running a fixed distance in the target direction. It is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> to allies and for the first 0.<small>5</small> seconds of its lifespan to enemies.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'The clone lasts for 3 seconds, and starts running a fixed distance in the target direction',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'clone lasts for 3 seconds, and starts running a fixed distance in the target direction',
            pre: 'The clone lasts for 3 seconds, and starts running a fixed distance in the target direction',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Self',
    damagetype: 'Magic',
    spelleffects: 'Proc',
    occurrence: 'on-hit',
    projectile: 'False',
    notes:
      '* Both <b>Neeko</b> and the clone use the same running animation.\n<ul><li>The clone can still be targeted by allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Auto-targeted"><a href="/wiki/Auto-targeted" title="Auto-targeted"><img alt="Electrical Surge.png" src="/wiki/images/Kennen_Electrical_Surge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Auto-targeted" class="mw-redirect" title="Auto-targeted">auto-targeted</a></span> effects (e.g. <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayle" data-ability="Celestial Blessing" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayle/LoL#Celestial_Blessing" title="Celestial Blessing"><img alt="Celestial Blessing" src="/wiki/images/Kayle_Celestial_Blessing.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayle/LoL#Celestial_Blessing" title="Kayle/LoL">Celestial Blessing</a></span></span>).</li>\n<li>The empowered attack will not trigger against <a href="/wiki/Ward" title="Ward">wards</a>.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Neeko_Original_W_CloneDestroyed_6.ogg   "Haha! You fell for it!"',
    video: 'Neeko - W',
  },
  'Tangle-Barbs': {
    name: 'Tangle-Barbs',
    display_name: 'Tangle-Barbs',
    champion: 'Neeko',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'NeekoE.png',
      sprite: 'spell8.png',
      group: 'spell',
      x: 192,
      y: 144,
      w: 48,
      h: 48,
    },
    range: '1000',
    width:
      '140 / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Empowered">200</span>',
    speed:
      '1300 / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Empowered">1500</span>',
    cast_time: '0.<small>25</small>',
    cost: '60 / 65 / 70 / 75 / 80',
    costtype: 'Mana',
    cooldown: '12 / 11.<small>5</small> / 11 / 10.<small>5</small> / 10',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Neeko" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Neeko/LoL" title="Neeko"><img alt="Neeko" src="/wiki/images/Neeko_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Neeko/LoL" title="Neeko/LoL">Neeko</a></span></span> slings a magical spiral in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">roots</a></span> enemies hit.',
      'If the spiral hits at least one enemy, it grows in size, speed, and root duration.',
    ],
    description: [
      {
        icon: '/wiki/images/Tangle-Barbs.png',
        description:
          'Active: Neeko slings a magical spiral in the target direction that deals magic damage to enemies hit and  roots them for a duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Neeko</b> slings a magical spiral in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">roots</a></span> them for a duration.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '80 / 115 / 150 / 185 / 220 (+ 60% AP)',
            valuesHTML:
              '80 / 115 / 150 / 185 / 220 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
          {
            name: 'Root Duration:',
            values: '0.7 / 0.9 / 1.1 / 1.3 / 1.5',
            valuesHTML:
              '0.<small>7</small> / 0.<small>9</small> / 1.<small>1</small> / 1.<small>3</small> / 1.<small>5</small>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 115 / 150 / 185 / 220 (+ 60% AP)',
            damagetype: 'Magic',
            values: [80, 115, 150, 185, 220],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 115 / 150 / 185 / 220',
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
            name: 'Root Duration:',
            raw: '0.7 / 0.9 / 1.1 / 1.3 / 1.5',
            values: [0.7, 0.9, 1.1, 1.3, 1.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '0.7 / 0.9 / 1.1 / 1.3 / 1.5',
          },
        ],
      },
      {
        description:
          'If the spiral hits at least one enemy, it grows in size and its speed and root duration is increased.',
        descriptionHTML:
          'If the spiral hits at least one enemy, it grows in size and its speed and root duration is increased.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Empowered Root Duration:',
            values: '1.8 / 2.1 / 2.4 / 2.7 / 3',
            valuesHTML:
              '1.<small>8</small> / 2.<small>1</small> / 2.<small>4</small> / 2.<small>7</small> / 3',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Empowered Root Duration:',
            raw: '1.8 / 2.1 / 2.4 / 2.7 / 3',
            values: [1.8, 2.1, 2.4, 2.7, 3],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1.8 / 2.1 / 2.4 / 2.7 / 3',
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'AoE',
    spellshield: true,
    projectile: 'True',
    notes:
      '* This ability will cast from wherever the caster is at the end of the cast time.',
    video: 'Neeko - E',
  },
  'Pop Blossom': {
    name: 'Pop Blossom',
    display_name: 'Pop Blossom',
    champion: 'Neeko',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'NeekoR.png',
      sprite: 'spell8.png',
      group: 'spell',
      x: 240,
      y: 144,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Radius for nearby enemies increasing the shield">700</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Burst radius">600</span>',
    cast_time: '0.<small>6</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">90</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Neeko" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Neeko/LoL" title="Neeko"><img alt="Neeko" src="/wiki/images/Neeko_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Neeko/LoL" title="Neeko/LoL">Neeko</a></span></span> winds up spiritual essence and highlights the area over a brief time, which is visible to enemies unless <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Neeko" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Neeko/LoL" title="Neeko"><img alt="Neeko" src="/wiki/images/Neeko_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Neeko/LoL" title="Neeko/LoL">Neeko</a></span></span> is <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Neeko" data-ability="Inherent Glamour" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Neeko/LoL#Inherent_Glamour" title="disguised"><img alt="disguised" src="/wiki/images/Neeko_Inherent_Glamour.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Neeko/LoL#Inherent_Glamour" title="Neeko/LoL">disguised</a></span></span>.',
      'Afterwards, <b>Neeko</b> leaps into the air and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shields"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span> herself for a short time for each nearby enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>. When <b>Neeko</b> lands, she emits a burst of energy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> nearby enemies.',
    ],
    description: [
      {
        icon: '/wiki/images/Pop Blossom.png',
        description:
          'Active: Neeko winds up spiritual essence over 1.25 seconds and highlights an area around herself, which is visible to enemies unless Neeko is  disguised.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Neeko</b> winds up spiritual essence over 1.<small>25</small> seconds and highlights an area around herself, which is visible to enemies unless <b>Neeko</b> is <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Neeko" data-ability="Inherent Glamour" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Neeko/LoL#Inherent_Glamour" title="disguised"><img alt="disguised" src="/wiki/images/Neeko_Inherent_Glamour.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Neeko/LoL#Inherent_Glamour" title="Neeko/LoL">disguised</a></span></span></i>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: ' Neeko winds up spiritual essence over 1.25 seconds and highlights an area around herself, which is visible to enemies unless Neeko is  disguised.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'winds up spiritual essence over 1.25 seconds and highlights an area around herself, which is visible to enemies unless Neeko is  disguised.',
            pre: 'Neeko winds up spiritual essence over 1.25 seconds and highlights an area around herself, which is visible to enemies unless Neeko is  disguised.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'After winding up, the cast time begins and Neeko leaps into the air, granting herself a  shield for 2 seconds that is increased for each nearby enemy  champion.',
        descriptionHTML:
          'After winding up, the cast time begins and <b>Neeko</b> leaps into the air, granting herself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 2 seconds that is increased for each nearby enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Line 1:',
            raw: 'After winding up, the cast time begins and Neeko leaps into the air, granting herself a  shield for 2 seconds that is increased for each nearby enemy  champion.',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: 2,
            units: 'total_ap',
            unitsText:
              'winding up, the cast time begins and Neeko leaps into the air, granting herself a  shield for 2 seconds that is increased for each nearby enemy  champion.',
            pre: 'After winding up, the cast time begins and Neeko leaps into the air, granting herself a  shield for 2 seconds that is increased for each nearby enemy  champion.',
          },
        ],
        leveling: [
          {
            name: 'Shield Strength:',
            values: '75 / 87.5 / 100 / 112.5 / 125 (+ 75% AP)',
            valuesHTML:
              '75 / 87.<small>5</small> / 100 / 112.<small>5</small> / 125 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;75% AP)</span>',
          },
          {
            name: 'Bonus Shield Per Champion:',
            values: '40 / 50 / 60 / 70 / 80 (+ 40% AP)',
            valuesHTML:
              '40 / 50 / 60 / 70 / 80 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Shield',
            name: 'Shield Strength:',
            raw: '75 / 87.5 / 100 / 112.5 / 125 (+ 75% AP)',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: [75, 87.5, 100, 112.5, 125],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 87.5 / 100 / 112.5 / 125',
            children: [
              {
                values: 75,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 75% AP',
              },
            ],
          },
          {
            effectType: 'Shield',
            name: 'Bonus Shield Per Champion:',
            raw: '40 / 50 / 60 / 70 / 80 (+ 40% AP)',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: [40, 50, 60, 70, 80],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 50 / 60 / 70 / 80',
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
          'When the cast time ends, she lands to emit a burst of energy that deals magic damage to nearby enemies and  stuns them for 1.25 seconds.',
        descriptionHTML:
          'When the cast time ends, she lands to emit a burst of energy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> them for 1.<small>25</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'When the cast time ends, she lands to emit a burst of energy that deals magic damage to nearby enemies and  stuns them for 1.25 seconds.',
            damagetype: 'Magic',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'the cast time ends, she lands to emit a burst of energy that deals magic damage to nearby enemies and  stuns them for 1.25 seconds.',
            pre: 'When the cast time ends, she lands to emit a burst of energy that deals magic damage to nearby enemies and  stuns them for 1.25 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '200 / 312.5 / 425 / 537.5 / 650 (+ 130% AP)',
            valuesHTML:
              '200 / 312.<small>5</small> / 425 / 537.<small>5</small> / 650 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;130% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '200 / 312.5 / 425 / 537.5 / 650 (+ 130% AP)',
            damagetype: 'Magic',
            values: [200, 312.5, 425, 537.5, 650],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 312.5 / 425 / 537.5 / 650',
            children: [
              {
                values: 130,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 130% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies, Self',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes:
      '<b>Ability details:</b>\n<ul><li>The wind up uses a special bar similar to cast bars to represent when <i>Pop Blossom\'s</i> cast time will start.\n<ul><li>The wind up has no special interactions.</li></ul></li>\n<li>The highlighted area is fixed around <b>Neeko</b>.</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Neeko" data-ability="Shapesplitter" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Neeko/LoL#Shapesplitter" title="Shapesplitter"><img alt="Shapesplitter" src="/wiki/images/Neeko_Shapesplitter.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Neeko/LoL#Shapesplitter" title="Neeko/LoL">Shapesplitter</a></span></span> clones disappear when <i>Pop Blossom\'s</i> cast time starts.</li>\n<li>The shield amount considers <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clones</a></span> as well.</li>\n<li><i>Pop Blossom\'s</i> bonus shield is not capped at 5 enemy champions being nearby.</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>\n<p><b>Interactions:</b>\n</p>\n<ul><li>On-cast effects are applied on activation.</li>\n<li><i>Pop Blossom</i> can start its cast time during <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stasis (buff)"><a href="/wiki/Invulnerability#Stasis" title="Invulnerability#Stasis"><img alt="Stasis icon.png" src="/wiki/images/Stasis_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability#Stasis" title="Invulnerability">stasis</a></span>.</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Cast time\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All items are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death, unless protected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">Resurrection</a></span>\n</li></td></tr></tbody></table>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Neeko_Original_R_0.ogg   "Get ready!"',
    video: 'Neeko - R',
  },
} satisfies { [skillName in string]: SkillData };
