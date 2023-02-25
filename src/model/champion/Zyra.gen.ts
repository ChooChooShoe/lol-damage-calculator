import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Zyra';

export default {
  'Garden of Thorns': {
    name: 'Garden of Thorns',
    display_name: 'Garden of Thorns',
    champion: 'Zyra',
    skill: 'I',
    image: {
      full: 'ZyraP.png',
      sprite: 'passive5.png',
      group: 'passive',
      x: 48,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius: '900',
    static:
      '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="\'\'Estimated\'\'" data-bot_values="13;12;11;10;9" data-top_values="1;5;9;13;18">13 / 12 / 11 / 10 / 9 (based on level)</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zyra" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zyra/LoL" title="Zyra\'s"><img alt="Zyra\'s" src="/wiki/images/Zyra_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zyra/LoL" title="Zyra/LoL">Zyra\'s</a></span></span> <span style="color: #56C456; white-space:normal">Seeds</span> can be turned into plants by hitting them with her basic abilities. Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> can step over a <span style="color: #56C456; white-space:normal">Seed</span> to destroy it.',
      '<span class="template_sbc"><b>Innate:</b></span> Periodically, <b>Zyra</b> plants one or two <span style="color: #56C456; white-space:normal">Seeds</span> nearby that remain for some time.',
    ],
    description: [
      {
        icon: '/wiki/images/Garden_of_Thorns.png',
        description:
          'Innate: Periodically, Zyra spawns one or two Seeds nearby that last for 30 seconds, granting  sight over the surrounding area for 1 second.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> Periodically, <b>Zyra</b> spawns one or two <span style="color: #56C456; white-space:normal">Seeds</span> nearby that last for 30 seconds, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> over the surrounding area for 1 second.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate:',
            raw: 'Periodically, Zyra spawns one or two Seeds nearby that last for 30 seconds, granting  sight over the surrounding area for 1 second.',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'Zyra spawns one or two Seeds nearby that last for 30 seconds, granting  sight over the surrounding area for 1 second.',
            pre: 'Periodically, Zyra spawns one or two Seeds nearby that last for 30 seconds, granting  sight over the surrounding area for 1 second.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'After 1 second, enemy  champions can destroy Seeds by stepping on them.',
        descriptionHTML:
          'After 1 second, enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> can destroy Seeds by stepping on them.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'After 1 second, enemy  champions can destroy Seeds by stepping on them.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              '1 second, enemy  champions can destroy Seeds by stepping on them.',
            pre: 'After 1 second, enemy  champions can destroy Seeds by stepping on them.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Zyra can only have a total of 8 Seeds planted at a time, preserving Seeds spawned by  Rampant Growth over Seeds spawned by Garden of Thorns.',
        descriptionHTML:
          '<b>Zyra</b> can only have a total of 8 <i>Seeds</i> planted at a time, preserving <span style="color: #AF1AAF; white-space:normal">Seeds</span> spawned by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zyra" data-ability="Rampant Growth" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zyra/LoL#Rampant_Growth" title="Rampant Growth"><img alt="Rampant Growth" src="/wiki/images/Zyra_Rampant_Growth.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zyra/LoL#Rampant_Growth" title="Zyra/LoL">Rampant Growth</a></span></span></i> over <span style="color: #56C456; white-space:normal">Seeds</span> spawned by <i>Garden of Thorns</i>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Zyra can only have a total of 8 Seeds planted at a time, preserving Seeds spawned by  Rampant Growth over Seeds spawned by Garden of Thorns.',
            values: 8,
            user: 'none',
            units: '',
            unitsText:
              'can only have a total of 8 Seeds planted at a time, preserving Seeds spawned by  Rampant Growth over Seeds spawned by Garden of Thorns.',
            pre: 'Zyra can only have a total of 8 Seeds planted at a time, preserving Seeds spawned by  Rampant Growth over Seeds spawned by Garden of Thorns.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes:
      '* <b>Zyra</b> tries to plant <span style="color: #AF1AAF; white-space:normal">Seeds</span> in brush and not on top of walls.\n<ul><li><b>Zyra</b> tries not to plant <span style="color: #AF1AAF; white-space:normal">Seeds</span> too close together and at different angles.</li>\n<li><b>Zyra</b> does not plant any <span style="color: #AF1AAF; white-space:normal">Seeds</span> if she is concealed within a brush (unless there is an enemy ward in it, in which case it takes her a little longer to plant the <span style="color: #AF1AAF; white-space:normal">Seed</span>) or when there is no room for additional ones.</li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: <b>Zyra</b> tries to plant <span style="color: #AF1AAF; white-space:normal">Seeds</span> close to an enemy near her.</li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: <b>Zyra</b> tries to plant <span style="color: #AF1AAF; white-space:normal">Seeds</span> under enemy structures only if she is in basic attack range of them.</li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: <b>Zyra</b> tries to plant <span style="color: #AF1AAF; white-space:normal">Seeds</span> on the other side of the wall she is facing and/or standing right next to.</li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: <b>Zyra</b> tries to plant <span style="color: #AF1AAF; white-space:normal">Seeds</span> in the direction she is facing and/or moving.</li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: <b>Zyra</b> tries to plant <span style="color: #AF1AAF; white-space:normal">Seeds</span> near jungle path entrances.</li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: <b>Zyra</b> tries to plant <span style="color: #AF1AAF; white-space:normal">Seeds</span> behind herself when she is walking through the river and there are no jungle path entrances near her.</li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: <b>Zyra</b> tries to plant <span style="color: #AF1AAF; white-space:normal">Seeds</span> between herself and the enemy champion she has vision of (or is heading towards her) in a 45º angle to the left or to the right depending on where on lane she is standing.</li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: <b>Zyra</b> tries to plant <span style="color: #AF1AAF; white-space:normal">Seeds</span> against the inner walls of epic monster pits (<span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Dragon" title="Dragon"><img alt="Dragon" src="/wiki/images/DragonSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Dragon" title="Dragon">Dragon</a></span></span>, <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rift_Herald" title="Rift Herald"><img alt="Rift Herald" src="/wiki/images/Rift_HeraldSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rift_Herald" class="mw-redirect" title="Rift Herald">Rift Herald</a></span></span>, <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Baron_Nashor" title="Baron Nashor"><img alt="Baron Nashor" src="/wiki/images/Baron_NashorSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Baron_Nashor" class="mw-redirect" title="Baron Nashor">Baron Nashor</a></span></span>)</li>\n<li><b>Zyra</b> has a hidden passive that grants her 10% increased <a href="/wiki/Size" title="Size">size</a> for <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">33 seconds</span> after having <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Leona" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Leona/LoL" title="Leona\'s"><img alt="Leona\'s" src="/wiki/images/Leona_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Leona/LoL" title="Leona/LoL">Leona\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Leona" data-ability="Sunlight" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Leona/LoL#Sunlight" title="Sunlight"><img alt="Sunlight" src="/wiki/images/Leona_Sunlight.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Leona/LoL#Sunlight" title="Leona/LoL">Sunlight</a></span></span></span> applied to her.</li></ul>',
  },
  'Deadly Spines': {
    name: 'Deadly Spines',
    display_name: 'Deadly Spines',
    champion: 'Zyra',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'ZyraQ.png',
      sprite: 'spell16.png',
      group: 'spell',
      x: 0,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '800',
    cast_time: '0.<small>25</small>',
    cost: '70',
    costtype: 'mana',
    cooldown: '7 / 6.<small>5</small> / 6 / 5.<small>5</small> / 5',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zyra" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zyra/LoL" title="Zyra"><img alt="Zyra" src="/wiki/images/Zyra_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zyra/LoL" title="Zyra/LoL">Zyra</a></span></span> sprouts a field of thorny vines at the target location that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zyra" data-ability="Garden of Thorns" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zyra/LoL#Garden_of_Thorns" title="Seed"><img alt="Seed" src="/wiki/images/Zyra_Garden_of_Thorns.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zyra/LoL#Garden_of_Thorns" title="Zyra/LoL">Seed</a></span></span> Bonus:</b></span> The <span style="color: #56C456; white-space:normal">Seed</span> spawns a <i>Thorn Spitter</i> that inflicts <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ranged" class="mw-redirect" title="Ranged">ranged</a></span> attacks.',
    ],
    description: [
      {
        icon: '/wiki/images/Deadly_Spines.png',
        description:
          'Active: Zyra sprouts thorny spines at the target location that appear after a 0.625-seconds delay, dealing magic damage to enemies hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Zyra</b> sprouts thorny spines at the target location that appear after a 0.<small>625</small>-seconds delay, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '60 / 95 / 130 / 165 / 200 (+ 60% AP)',
            valuesHTML:
              '60 / 95 / 130 / 165 / 200 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 95 / 130 / 165 / 200 (+ 60% AP)',
            damagetype: 'Magic',
            values: [60, 95, 130, 165, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 95 / 130 / 165 / 200',
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
        icon: '/wiki/images/undefined',
        description:
          'If Deadly Spine hits a Seed, it sprouts into a  Thorn Spitter that remains for 8 seconds.',
        descriptionHTML:
          'If <i>Deadly Spine</i> hits a <span style="color: #56C456; white-space:normal">Seed</span>, it sprouts into a <a href="/wiki/Zyra/LoL#Pets" title="Zyra/LoL#Pets"><img alt="Zyra Deadly Spines Render.png" src="/wiki/images/Zyra_Deadly_Spines_Render.png" decoding="async" loading="lazy" width="20" height="25" class="lazyload"></a> <i><a href="/wiki/Zyra/LoL#Pets" title="Zyra/LoL">Thorn Spitter</a></i> that remains for 8 seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'If Deadly Spine hits a Seed, it sprouts into a  Thorn Spitter that remains for 8 seconds.',
            damagetype: 'None',
            values: 8,
            units: 'total_ad',
            unitsText:
              'Deadly Spine hits a Seed, it sprouts into a  Thorn Spitter that remains for 8 seconds.',
            pre: 'If Deadly Spine hits a Seed, it sprouts into a  Thorn Spitter that remains for 8 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Area of effect',
    spellshield: true,
    notes:
      '* Each <a href="/wiki/Zyra/LoL#Pets" title="Zyra/LoL#Pets"><img alt="Zyra Deadly Spines Render.png" src="/wiki/images/Zyra_Deadly_Spines_Render.png" decoding="async" loading="lazy" width="20" height="25" class="lazyload"></a> <i><a href="/wiki/Zyra/LoL#Pets" title="Zyra/LoL">Thorn Spitter</a></i> will generate 2 stacks of <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Conqueror" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Conqueror_(Rune)" title="Conqueror"><img alt="Conqueror" src="/wiki/images/Conqueror_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Conqueror_(Rune)" class="mw-redirect" title="Conqueror (Rune)">Conqueror</a></span></span> and 1 stack of each of <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Phase Rush" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Phase_Rush_(Rune)" title="Phase Rush"><img alt="Phase Rush" src="/wiki/images/Phase_Rush_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Phase_Rush_(Rune)" class="mw-redirect" title="Phase Rush (Rune)">Phase Rush</a></span></span> and <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Electrocute" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Electrocute_(Rune)" title="Electrocute"><img alt="Electrocute" src="/wiki/images/Electrocute_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Electrocute_(Rune)" class="mw-redirect" title="Electrocute (Rune)">Electrocute</a></span></span>.',
  },
  'Rampant Growth': {
    name: 'Rampant Growth',
    display_name: 'Rampant Growth',
    champion: 'Zyra',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'ZyraW.png',
      sprite: 'spell16.png',
      group: 'spell',
      x: 48,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '850',
    cast_time: 'none',
    cost: '1',
    costtype: 'Seed',
    recharge: '18 / 16 / 14 / 12 / 10',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zyra" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zyra/LoL" title="Zyra"><img alt="Zyra" src="/wiki/images/Zyra_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zyra/LoL" title="Zyra/LoL">Zyra</a></span></span> plants a <span style="color: #AF1AAF; white-space:normal">Seed</span> at the target location that remains for a while. It will briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">reveal</a></span> the enemy that destroys it.',
      '<b>Zyra</b> periodically stocks a <i>Rampant Growth</i> charge, up to a maximum of 2. The charge cooldown is <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduced</span> each time she kills an enemy, increased on large enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedowns"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedowns</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Rampant_Growth.png',
        description:
          'Active: Zyra plants a Seed at the target location that remains for 60 seconds and grants  sight over the surrounding area, though decreasing in radius after 1 second. After 1.5 seconds, enemy champions can destroy the Seed by stepping on it, which  reveals them for 2 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Zyra</b> plants a <span style="color: #883FD1; white-space:normal">Seed</span> at the target location that remains for 60 seconds and grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> over the surrounding area, though decreasing in radius after 1 second. After 1.<small>5</small> seconds, enemy champions can destroy the <span style="color: #AF1AAF; white-space:normal">Seed</span> by stepping on it, which <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">reveals</a></span> them for 2 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Zyra plants a Seed at the target location that remains for 60 seconds and grants  sight over the surrounding area, though decreasing in radius after 1 second',
            increasedStat: 'total_ad',
            values: 6,
            user: 'target',
            units: '',
            unitsText:
              'plants a Seed at the target location that remains for 60 seconds and grants  sight over the surrounding area, though decreasing in radius after 1 second',
            pre: 'Zyra plants a Seed at the target location that remains for 60 seconds and grants  sight over the surrounding area, though decreasing in radius after 1 second',
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'After 1.5 seconds, enemy champions can destroy the Seed by stepping on it, which  reveals them for 2 seconds.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              '1.5 seconds, enemy champions can destroy the Seed by stepping on it, which  reveals them for 2 seconds.',
            pre: 'After 1.5 seconds, enemy champions can destroy the Seed by stepping on it, which  reveals them for 2 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Zyra periodically stocks a Seed charge, up to a maximum of 2. Killing an enemy generates 20% charge toward a Seed, increased to 100% for large enemies and whenever scoring an enemy  champion  takedown.',
        descriptionHTML:
          '<b>Zyra</b> periodically <a href="/wiki/Stock" class="mw-redirect" title="Stock">stocks</a> a <i>Seed</i> charge, up to a maximum of 2. Killing an enemy generates 20% charge toward a <i>Seed</i>, increased to 100% for large enemies and whenever scoring an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Zyra periodically stocks a Seed charge, up to a maximum of 2',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'periodically stocks a Seed charge, up to a maximum of 2',
            pre: 'Zyra periodically stocks a Seed charge, up to a maximum of 2',
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'Killing an enemy generates 20% charge toward a Seed, increased to 100% for large enemies and whenever scoring an enemy  champion  takedown.',
            values: 2,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'charge toward a Seed, increased to 100an enemy generates 20',
            pre: 'Killing an enemy generates 20% charge toward a Seed, increased to 100% for large enemies and whenever scoring an enemy  champion  takedown.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Self, Enemies',
    spellshield: false,
    notes:
      '* <span style="color: #883FD1; white-space:normal">Seeds</span> are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>.',
  },
  'Grasping Roots': {
    name: 'Grasping Roots',
    display_name: 'Grasping Roots',
    champion: 'Zyra',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'ZyraE.png',
      sprite: 'spell16.png',
      group: 'spell',
      x: 96,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '1100',
    speed: '1150',
    cast_time: '0.<small>25</small>',
    cost: '70 / 75 / 80 / 85 / 90',
    costtype: 'Mana',
    cooldown: '12',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zyra" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zyra/LoL" title="Zyra"><img alt="Zyra" src="/wiki/images/Zyra_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zyra/LoL" title="Zyra/LoL">Zyra</a></span></span> shoots a surge of vines in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">roots</a></span> them.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zyra" data-ability="Garden of Thorns" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zyra/LoL#Garden_of_Thorns" title="Seed"><img alt="Seed" src="/wiki/images/Zyra_Garden_of_Thorns.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zyra/LoL#Garden_of_Thorns" title="Zyra/LoL">Seed</a></span></span> Bonus:</b></span> The <span style="color: #56C456; white-space:normal">Seed</span> spawns a <i>Vine Lasher</i> that inflicts <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Melee"><a href="/wiki/Melee" title="Melee"><img alt="Melee role.png" src="/wiki/images/Melee_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Melee" class="mw-redirect" title="Melee">melee</a></span> attacks that briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> the target.',
    ],
    description: [
      {
        icon: '/wiki/images/Grasping_Roots.png',
        description:
          'Active: Zyra shoots a surge of vines in the target direction that deals magic damage to enemies hit and  roots them for a duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Zyra</b> shoots a surge of vines in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">roots</a></span> them for a duration.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '60 / 105 / 150 / 195 / 240 (+ 50% AP)',
            valuesHTML:
              '60 / 105 / 150 / 195 / 240 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span>',
          },
          {
            name: 'Root Duration:',
            values: '1 / 1.25 / 1.5 / 1.75 / 2',
            valuesHTML:
              '1 / 1.<small>25</small> / 1.<small>5</small> / 1.<small>75</small> / 2',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 105 / 150 / 195 / 240 (+ 50% AP)',
            damagetype: 'Magic',
            values: [60, 105, 150, 195, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 105 / 150 / 195 / 240',
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
          {
            effectType: 'Unique',
            name: 'Root Duration:',
            raw: '1 / 1.25 / 1.5 / 1.75 / 2',
            values: [1, 1.25, 1.5, 1.75, 2],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1 / 1.25 / 1.5 / 1.75 / 2',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'If Grasping Roots hits a Seed, it sprouts into a  Vine Lasher, which remains on the battlefield for 8 seconds.',
        descriptionHTML:
          'If <i>Grasping Roots</i> hits a <span style="color: #56C456; white-space:normal">Seed</span>, it sprouts into a <a href="/wiki/Zyra/LoL#Pets" title="Zyra/LoL#Pets"><img alt="Zyra Grasping Roots Render.png" src="/wiki/images/Zyra_Grasping_Roots_Render.png" decoding="async" loading="lazy" width="20" height="32" class="lazyload"></a> <i><a href="/wiki/Zyra/LoL#Pets" title="Zyra/LoL">Vine Lasher</a></i>, which remains on the battlefield for 8 seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'If Grasping Roots hits a Seed, it sprouts into a  Vine Lasher, which remains on the battlefield for 8 seconds.',
            values: 8,
            user: 'none',
            units: '',
            unitsText:
              'Grasping Roots hits a Seed, it sprouts into a  Vine Lasher, which remains on the battlefield for 8 seconds.',
            pre: 'If Grasping Roots hits a Seed, it sprouts into a  Vine Lasher, which remains on the battlefield for 8 seconds.',
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
    spellshield: true,
    projectile: 'True',
    notes:
      '* This ability will cast from wherever the caster is at the start of the cast time.\n<ul><li><b>Zyra</b> will be locked for 0.<small>15</small> seconds after casting <i>Grasping Roots</i>.</li>\n<li>Each <a href="/wiki/Zyra/LoL#Pets" title="Zyra/LoL#Pets"><img alt="Zyra Grasping Roots Render.png" src="/wiki/images/Zyra_Grasping_Roots_Render.png" decoding="async" loading="lazy" width="20" height="32" class="lazyload"></a> <i><a href="/wiki/Zyra/LoL#Pets" title="Zyra/LoL">Vine Lasher</a></i> will generate 2 stacks of <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Conqueror" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Conqueror_(Rune)" title="Conqueror"><img alt="Conqueror" src="/wiki/images/Conqueror_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Conqueror_(Rune)" class="mw-redirect" title="Conqueror (Rune)">Conqueror</a></span></span> and 1 stack of each of <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Phase Rush" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Phase_Rush_(Rune)" title="Phase Rush"><img alt="Phase Rush" src="/wiki/images/Phase_Rush_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Phase_Rush_(Rune)" class="mw-redirect" title="Phase Rush (Rune)">Phase Rush</a></span></span> and <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Electrocute" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Electrocute_(Rune)" title="Electrocute"><img alt="Electrocute" src="/wiki/images/Electrocute_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Electrocute_(Rune)" class="mw-redirect" title="Electrocute (Rune)">Electrocute</a></span></span>.</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Cast time\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All the other item-actives are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death, unless protected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">Resurrection</a></span>\n</li></td></tr></tbody></table>',
  },
  Stranglethorns: {
    name: 'Stranglethorns',
    display_name: 'Stranglethorns',
    champion: 'Zyra',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'ZyraR.png',
      sprite: 'spell16.png',
      group: 'spell',
      x: 144,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '700',
    effect_radius: '500',
    cast_time: '0.<small>25</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown: '110 / 105 / 100 / 95 / 90',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zyra" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zyra/LoL" title="Zyra"><img alt="Zyra" src="/wiki/images/Zyra_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zyra/LoL" title="Zyra/LoL">Zyra</a></span></span> summons a monstrous thicket at the target location that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit as it expands.',
      'After a brief moment, the thicket snaps upward to briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock up</a></span> enemies within.',
      'All <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zyra" data-ability="Garden of Thorns" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zyra/LoL#Garden_of_Thorns" title="Plants"><img alt="Plants" src="/wiki/images/Zyra_Garden_of_Thorns.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zyra/LoL#Garden_of_Thorns" title="Zyra/LoL">Plants</a></span></span> hit will gain <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;health</span></span> and attack in double strikes.',
    ],
    description: [
      {
        icon: '/wiki/images/Stranglethorns.png',
        description:
          'Active: Zyra summons a monstrous thicket at the target location that deals magic damage to enemies hit as it expands.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Zyra</b> summons a monstrous thicket at the target location that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit as it expands.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '180 / 222.5 / 265 / 307.5 / 350 (+ 70% AP)',
            valuesHTML:
              '180 / 222.<small>5</small> / 265 / 307.<small>5</small> / 350 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;70% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '180 / 222.5 / 265 / 307.5 / 350 (+ 70% AP)',
            damagetype: 'Magic',
            values: [180, 222.5, 265, 307.5, 350],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '180 / 222.5 / 265 / 307.5 / 350',
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
          'After 2 seconds, the thicket snaps upward to  knock up enemies within for 1 second.',
        descriptionHTML:
          'After 2 seconds, the thicket snaps upward to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock up</a></span> enemies within for 1 second.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'After 2 seconds, the thicket snaps upward to  knock up enemies within for 1 second.',
            damagetype: 'None',
            values: 2,
            units: 'total_ap',
            unitsText:
              '2 seconds, the thicket snaps upward to  knock up enemies within for 1 second.',
            pre: 'After 2 seconds, the thicket snaps upward to  knock up enemies within for 1 second.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Plants hit by the thicket become enraged, restoring  50% of their current health, increasing their  maximum health by 50%, gaining 25% increased size and refreshing their duration while the thicket expands. Additionally they attack in a flurry, launching two shots per attack, dealing 「 150% damage per flurry. 」「 75% damage per shot. 」',
        descriptionHTML:
          '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zyra" data-ability="Garden of Thorns" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zyra/LoL#Garden_of_Thorns" title="Plants"><img alt="Plants" src="/wiki/images/Zyra_Garden_of_Thorns.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zyra/LoL#Garden_of_Thorns" title="Zyra/LoL">Plants</a></span></span></i> hit by the thicket become enraged, restoring <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50% of their <b>current</b> health</span></span>, increasing their <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>maximum</b> health by 50%</span></span>, gaining 25% increased <a href="/wiki/Size" title="Size">size</a> and refreshing their duration while the thicket expands. Additionally they attack in a flurry, launching two shots per attack, dealing <span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;150% damage per flurry.&nbsp;」</span><span class="flipText2">「&nbsp;75% damage per shot.&nbsp;」</span></span>',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: 'Plants hit by the thicket become enraged, restoring  50% of their current health, increasing their  maximum health by 50%, gaining 25% increased size and refreshing their duration while the thicket expands',
            healType: 'BonusHealth',
            values: 5,
            valuesIsPercent: true,
            units: 'maximum_hp',
            unitsText:
              'of their current health, increasing their  maximum health by 50hit by the thicket become enraged, restoring  50',
            pre: 'Plants hit by the thicket become enraged, restoring  50% of their current health, increasing their  maximum health by 50%, gaining 25% increased size and refreshing their duration while the thicket expands',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Additionally they attack in a flurry, launching two shots per attack, dealing 「 150% damage per flurry. 」「 75% damage per shot. 」',
            damagetype: 'None',
            values: 1,
            valuesIsPercent: true,
            units: 'total_ad',
            unitsText:
              'damage per flurry. 」「 75they attack in a flurry, launching two shots per attack, dealing 「 150',
            pre: 'Additionally they attack in a flurry, launching two shots per attack, dealing 「 150% damage per flurry. 」「 75% damage per shot. 」',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Area of effect',
    spellshield: true,
    notes:
      '* <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zyra" data-ability="Garden of Thorns" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zyra/LoL#Garden_of_Thorns" title="Plants"><img alt="Plants" src="/wiki/images/Zyra_Garden_of_Thorns.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zyra/LoL#Garden_of_Thorns" title="Zyra/LoL">Plants</a></span></span> grown during the 2 seconds prior to the displacement will also be enraged.\n<ul><li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zyra" data-ability="Garden of Thorns" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zyra/LoL#Garden_of_Thorns" title="Plants"><img alt="Plants" src="/wiki/images/Zyra_Garden_of_Thorns.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zyra/LoL#Garden_of_Thorns" title="Zyra/LoL">Plants</a></span></span> already grown before <i>Stranglethorns</i> is cast will have their duration refreshed if they are inside the area of effect.</li>\n<li><i>Stranglethorns</i>\\\' buff on <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zyra" data-ability="Garden of Thorns" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zyra/LoL#Garden_of_Thorns" title="Plants"><img alt="Plants" src="/wiki/images/Zyra_Garden_of_Thorns.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zyra/LoL#Garden_of_Thorns" title="Zyra/LoL">Plants</a></span></span> lasts 10 seconds, however the <i>Plants</i> normally die naturally after 8 seconds.</li></ul>',
  },
} satisfies { [skillName in string]: SkillData };
