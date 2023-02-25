import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Fiddlesticks';

export default {
  'A Harmless Scarecrow': {
    name: 'A Harmless Scarecrow',
    display_name: 'A Harmless Scarecrow',
    champion: 'Fiddlesticks',
    skill: 'I',
    image: {
      full: 'FiddleSticks_Passive.png',
      sprite: 'passive1.png',
      group: 'passive',
      x: 0,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Reveal radius, center to edge">900</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiddlesticks" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiddlesticks/LoL" title="Fiddlesticks"><img alt="Fiddlesticks" src="/wiki/images/Fiddlesticks_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiddlesticks/LoL" title="Fiddlesticks/LoL">Fiddlesticks</a></span></span> has a <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Scarecrow Effigy" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Scarecrow_Effigy" title="Scarecrow Effigy"><img alt="Scarecrow Effigy" src="/wiki/images/Scarecrow_Effigy_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Scarecrow_Effigy" title="Scarecrow Effigy">Scarecrow Effigy</a></span></span> in place of a trinket, which will imitate <b>Fiddlesticks</b>. <b>Fiddlesticks</b> can impersonate an effigy by remaining idle <a href="/wiki/Combat_status" title="Combat status">out of combat</a>.',
      'After level 6, placing an effigy will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">reveal</a></span> the area for a few seconds.',
    ],
    description: [
      {
        icon: '/wiki/images/A_Harmless_Scarecrow.png',
        description:
          'Innate - Scarecrow Effigy: Fiddlesticks begins the game with an exclusive  Scarecrow Effigy, which permanently occupies the trinket slot. Fiddlesticks can pretend to be an Effigy by standing still and not acting nor being acted upon for 2 seconds, during which it adjusts its body into a scarecrow and extends its arm out to expose its lantern.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Scarecrow Effigy:</b></span> <b>Fiddlesticks</b> begins the game with an exclusive <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Scarecrow Effigy" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Scarecrow_Effigy" title="Scarecrow Effigy"><img alt="Scarecrow Effigy" src="/wiki/images/Scarecrow_Effigy_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Scarecrow_Effigy" title="Scarecrow Effigy">Scarecrow Effigy</a></span></span>, which permanently occupies the <a href="/wiki/Trinket_item" title="Trinket item">trinket</a> slot. <b>Fiddlesticks</b> can pretend to be an <i>Effigy</i> by standing still and not acting nor being acted upon for 2 seconds, during which it adjusts its body into a scarecrow and extends its arm out to expose its lantern.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Fiddlesticks can pretend to be an Effigy by standing still and not acting nor being acted upon for 2 seconds, during which it adjusts its body into a scarecrow and extends its arm out to expose its lantern.',
            damagetype: 'None',
            values: 2,
            units: 'total_ad',
            unitsText:
              'can pretend to be an Effigy by standing still and not acting nor being acted upon for 2 seconds, during which it adjusts its body into a scarecrow and extends its arm out to expose its lantern.',
            pre: 'Fiddlesticks can pretend to be an Effigy by standing still and not acting nor being acted upon for 2 seconds, during which it adjusts its body into a scarecrow and extends its arm out to expose its lantern.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/A_Harmless_Scarecrow_2.png',
        description:
          'Innate - A Harmless Scarecrow: From level 6 onward, placing an  Effigy also summons a  Sweeper Drone at the location for 6 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - A Harmless Scarecrow:</b></span> From <a href="/wiki/Experience_(champion)" title="Experience (champion)">level</a> 6 onward, placing an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Effigy"><a href="/wiki/Ward" title="Ward"><img alt="Totem Ward icon.png" src="/wiki/images/Totem_Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ward" title="Ward">Effigy</a></span> also summons a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sweeper drone"><a href="/wiki/Oracle_Lens" title="Oracle Lens"><img alt="Sweeper Drone icon.png" src="/wiki/images/Sweeper_Drone_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Oracle_Lens" title="Oracle Lens">Sweeper Drone</a></span> at the location for 6 seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Innate - A Harmless Scarecrow:',
            raw: 'From level 6 onward, placing an  Effigy also summons a  Sweeper Drone at the location for 6 seconds.',
            values: 6,
            user: 'none',
            units: '',
            unitsText:
              'level 6 onward, placing an  Effigy also summons a  Sweeper Drone at the location for 6 seconds.',
            pre: 'From level 6 onward, placing an  Effigy also summons a  Sweeper Drone at the location for 6 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Vector',
    affects: 'Self',
    notes:
      '* <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Scarecrow Effigy" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Scarecrow_Effigy" title="Scarecrow Effigies"><img alt="Scarecrow Effigies" src="/wiki/images/Scarecrow_Effigy_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Scarecrow_Effigy" title="Scarecrow Effigy">Scarecrow Effigies</a></span></span> are unavailable on <a href="/wiki/ARAM" title="ARAM">ARAM</a> until <b>Fiddlesticks</b> uses its <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Poro-Snax" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Poro-Snax" title="Poro-Snax"><img alt="Poro-Snax" src="/wiki/images/Poro-Snax_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Poro-Snax" title="Poro-Snax">Poro-Snax</a></span></span>.\n<ul><li>The process of or the act of pretending to be an <i>Effigy</i> will be interrupted if <b>Fiddlesticks</b>:\n<ul><li>Moves.</li>\n<li>Takes damage.</li>\n<li>Declares an attack.</li>\n<li>Casts any ability or spell.</li>\n<li>Starts <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>.</li>\n<li>Is hit by an ability.</li>\n<li>Is affected by a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span> effect.</li></ul></li>\n<li><i>Effigies</i> will mimic <b>Fiddlesticks\' </b> idle animations and their <a href="/wiki/Health_bar" title="Health bar">health bars</a> are hidden until they fake an action.\n<ul><li>If <b>Fiddlesticks</b> pretends to be an <i>Effigy</i>, its health bar stays hidden until the pose is interrupted.</li></ul></li>\n<li>Effigies are considered <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clones</a></span>.\n<ul><li>They are not valid targets to <a href="/wiki/Direction-targeted" class="mw-redirect" title="Direction-targeted">direction</a>, <a href="/wiki/Ground-targeted" class="mw-redirect" title="Ground-targeted">ground</a>, and <a href="/wiki/Auto-targeted" class="mw-redirect" title="Auto-targeted">auto-targeted</a> effects for first <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">1.<small>5</small> seconds</span> of their lifespan.</li></ul></li>\n<li>The trinket slot can still be temporarily replaced by <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Eye of the Herald" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Eye_of_the_Herald" title="Eye of the Herald"><img alt="Eye of the Herald" src="/wiki/images/Eye_of_the_Herald_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Eye_of_the_Herald" title="Eye of the Herald">Eye of the Herald</a></span></span>.</li>\n<li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/1/19/Fiddlesticks_A_Harmless_Scarecrow_Surprise_Party.png/revision/latest?cb=20200318130248" class="image"><img alt="A Harmless Scarecrow Surprise Party.png" src="/wiki/images/Fiddlesticks_A_Harmless_Scarecrow_Surprise_Party.png" decoding="async" loading="lazy" width="30" height="30" class="thumbborder lazyload"></a> - <span style="white-space:pre"><span class="inline-image label-after skin-icon" style="display:inline;white-space:pre;" data-param="" data-skin="Surprise Party" data-champion="Fiddlesticks" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiddlesticks/LoL/Cosmetics" title="Surprise Party Fiddlesticks"><img alt="Surprise Party Fiddlesticks" src="/wiki/images/Fiddlesticks_SurprisePartyCircle.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiddlesticks/LoL/Cosmetics" title="Fiddlesticks/LoL/Cosmetics">Surprise Party Fiddlesticks</a></span></span></span> has a special icon for this ability.</li></ul>',
  },
  Terrify: {
    name: 'Terrify',
    display_name: 'Terrify',
    champion: 'Fiddlesticks',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'FiddleSticksQ.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 288,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '575',
    cast_time: '0.<small>35</small>',
    cost: '65',
    costtype: 'Mana',
    cooldown: '15 / 14.<small>5</small> / 14 / 13.<small>5</small> / 13',
    ontargetcd: '15 / 14.<small>5</small> / 14 / 13.<small>5</small> / 13',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> While <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiddlesticks" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiddlesticks/LoL" title="Fiddlesticks"><img alt="Fiddlesticks" src="/wiki/images/Fiddlesticks_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiddlesticks/LoL" title="Fiddlesticks/LoL">Fiddlesticks</a></span></span> is unseen or impersonating an <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiddlesticks" data-ability="A Harmless Scarecrow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiddlesticks/LoL#A_Harmless_Scarecrow" title="effigy"><img alt="effigy" src="/wiki/images/Fiddlesticks_A_Harmless_Scarecrow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiddlesticks/LoL#A_Harmless_Scarecrow" title="Fiddlesticks/LoL">effigy</a></span></span>, its next damaging ability will briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fear"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">fear</a></span> targets hit.',
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiddlesticks" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiddlesticks/LoL" title="Fiddlesticks"><img alt="Fiddlesticks" src="/wiki/images/Fiddlesticks_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiddlesticks/LoL" title="Fiddlesticks/LoL">Fiddlesticks</a></span></span> screeches at the target enemy, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fear"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">fearing</a></span> them and dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> based on the <span style="color: #1F995C; white-space:normal">target\'s <b>current</b> health</span>.',
      'If the target has recently been feared by <b>Fiddlesticks</b>, <i>Terrify</i> will instead deal <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">double damage</span>.',
    ],
    description: [
      {
        description:
          'Passive: While Fiddlesticks has been out of combat for at least 2.5 seconds and is not  visible to the enemy team, or is pretending to be an  Effigy, its next damaging ability will additionally  fear targets hit for a duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> While <b>Fiddlesticks</b> has been <a href="/wiki/Combat_status" title="Combat status">out of combat</a> for at least <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">2.<small>5</small> seconds</span> and is not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> to the enemy team, or is pretending to be an <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiddlesticks" data-ability="A Harmless Scarecrow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiddlesticks/LoL#A_Harmless_Scarecrow" title="Effigy"><img alt="Effigy" src="/wiki/images/Fiddlesticks_A_Harmless_Scarecrow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiddlesticks/LoL#A_Harmless_Scarecrow" title="Fiddlesticks/LoL">Effigy</a></span></span></i>, its next damaging ability will additionally <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fear"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">fear</a></span> targets hit for a duration.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Passive:',
            raw: 'While Fiddlesticks has been out of combat for at least 2.5 seconds and is not  visible to the enemy team, or is pretending to be an  Effigy, its next damaging ability will additionally  fear targets hit for a duration.',
            damagetype: 'None',
            values: 2,
            user: 'target',
            units: 'total_ad',
            unitsText:
              'Fiddlesticks has been out of combat for at least 2.5 seconds and is not  visible to the enemy team, or is pretending to be an  Effigy, its next damaging ability will additionally  fear targets hit for a duration.',
            pre: 'While Fiddlesticks has been out of combat for at least 2.5 seconds and is not  visible to the enemy team, or is pretending to be an  Effigy, its next damaging ability will additionally  fear targets hit for a duration.',
          },
        ],
        leveling: [
          {
            name: 'Fear Duration:',
            values: '1.25 / 1.5 / 1.75 / 2 / 2.25',
            valuesHTML:
              '1.<small>25</small> / 1.<small>5</small> / 1.<small>75</small> / 2 / 2.<small>25</small>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Fear Duration:',
            raw: '1.25 / 1.5 / 1.75 / 2 / 2.25',
            values: [1.25, 1.5, 1.75, 2, 2.25],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1.25 / 1.5 / 1.75 / 2 / 2.25',
          },
        ],
      },
      {
        icon: '/wiki/images/Terrify.png',
        description:
          'Active: Fiddlesticks launches a crow at the target enemy that deals magic damage and  fears them for a duration. Terrify has a minimum damage threshold and is capped at 400 against  monsters.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Fiddlesticks</b> launches a crow at the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fear"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">fears</a></span> them for a duration. <i>Terrify</i> has a minimum damage threshold and is capped at 400 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'Terrify has a minimum damage threshold and is capped at 400 against  monsters.',
            increasedStat: 'total_ap',
            values: 4,
            units: '',
            unitsText:
              'has a minimum damage threshold and is capped at 400 against  monsters.',
            pre: 'Terrify has a minimum damage threshold and is capped at 400 against  monsters.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values:
              "6 / 7 / 8 / 9 / 10% (+ 2% per 100 AP) of target's current health",
            valuesHTML:
              '<span style="color: #1F995C; white-space:normal">6 / 7 / 8 / 9 / 10% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;2% per 100 AP)</span> of target\'s <b>current</b> health</span>',
          },
          {
            name: 'Minimum Damage:',
            values: '40 / 60 / 80 / 100 / 120',
            valuesHTML: '40 / 60 / 80 / 100 / 120',
          },
          {
            name: 'Fear Duration:',
            values: '1.25 / 1.5 / 1.75 / 2 / 2.25',
            valuesHTML:
              '1.<small>25</small> / 1.<small>5</small> / 1.<small>75</small> / 2 / 2.<small>25</small>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Magic Damage:',
            raw: "6 / 7 / 8 / 9 / 10% (+ 2% per 100 AP) of target's current health",
            healType: 'OutgoingHeals',
            values: [6, 7, 8, 9, 10],
            valuesIsPercent: true,
            user: 'target',
            units: 'current_hp',
            unitsText: "of target's current health",
            pre: '6 / 7 / 8 / 9 / 10%',
            post: "of target's current health",
            children: [
              {
                values: 2,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 2% per 100 AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Minimum Damage:',
            raw: '40 / 60 / 80 / 100 / 120',
            damagetype: 'None',
            values: [40, 60, 80, 100, 120],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 60 / 80 / 100 / 120',
          },
          {
            effectType: 'Unique',
            name: 'Fear Duration:',
            raw: '1.25 / 1.5 / 1.75 / 2 / 2.25',
            values: [1.25, 1.5, 1.75, 2, 2.25],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1.25 / 1.5 / 1.75 / 2 / 2.25',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Targets feared by Fiddlesticks by any means cannot be affected by it again for a duration equal to Terrify's cooldown. Against these targets, Terrify's  damage and minimum threshold are doubled.",
        descriptionHTML:
          'Targets feared by <b>Fiddlesticks</b> by any means cannot be affected by it again for a duration equal to <i>Terrify\'s</i> cooldown. Against these targets, <i>Terrify\'s</i> <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">damage</span> and minimum threshold are doubled.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Increased Magic Damage:',
            values:
              "12 / 14 / 16 / 18 / 20% (+ 4% per 100 AP) of target's current health",
            valuesHTML:
              '<span style="color: #1F995C; white-space:normal">12 / 14 / 16 / 18 / 20% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;4% per 100 AP)</span> of target\'s <b>current</b> health</span>',
          },
          {
            name: 'Increased Minimum Damage:',
            values: '80 / 120 / 160 / 200 / 240',
            valuesHTML: '80 / 120 / 160 / 200 / 240',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Increased Magic Damage:',
            raw: "12 / 14 / 16 / 18 / 20% (+ 4% per 100 AP) of target's current health",
            healType: 'OutgoingHeals',
            values: [12, 14, 16, 18, 20],
            valuesIsPercent: true,
            user: 'target',
            units: 'current_hp',
            unitsText: "of target's current health",
            pre: '12 / 14 / 16 / 18 / 20%',
            post: "of target's current health",
            children: [
              {
                values: 4,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 4% per 100 AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Increased Minimum Damage:',
            raw: '80 / 120 / 160 / 200 / 240',
            damagetype: 'None',
            values: [80, 120, 160, 200, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 120 / 160 / 200 / 240',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'Terrify  slows affected targets by 90%.',
        descriptionHTML:
          '<i>Terrify</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> affected targets by 90%.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Terrify  slows affected targets by 90%.',
            values: 9,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '. slows affected targets by 90',
            pre: 'Terrify  slows affected targets by 90%.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Spell',
    spellshield: true,
    projectile: 'false',
    callforhelp: 'True',
    notes:
      '* The fear-immunity timer is not refreshed by subsequent attempts to fear the target.\n<ul><li>The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fear"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">fear</a></span> is applied <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.363 seconds after the start of cast, due game tick rate">at the end of the cast time</span>, regardless of the target\'s distance or the missile landing.\n<ul><li>The missile cannot be destroyed, either.</li></ul></li>\n<li><b>Fiddlesticks</b> is considered "seen" if it is visible and is inside an enemy champion\'s <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="1350 units">sight radius</span>. Vision from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ward"><a href="/wiki/Ward" title="Ward"><img alt="Ward icon.png" src="/wiki/images/Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ward" title="Ward">wards</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span> will not prevent <b>Fiddlesticks</b> from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Flee"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">fearing</a></span> if there are no nearby enemy champions.\n<ul><li>There is a very brief grace period after being seen or when entering combat. This can allow for multiple spells to inflict <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fear"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">fear</a></span>.</li></ul></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">Monsters</a></span> are feared by <b>Fiddlesticks\'s</b> abilities when <b>Fiddlesticks</b> is out of combat, with some exceptions.\n<ul><li>If <b>Fiddlesticks</b> has recently damaged a monster from a camp with a basic attack or abilities (including <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> but not item active abilities), monsters in that camp will not be feared by his other abilities.</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiddlesticks" data-ability="Bountiful Harvest" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiddlesticks/LoL#Bountiful_Harvest" title="Bountiful Harvest"><img alt="Bountiful Harvest" src="/wiki/images/Fiddlesticks_Bountiful_Harvest.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiddlesticks/LoL#Bountiful_Harvest" title="Fiddlesticks/LoL">Bountiful Harvest</a></span></span> will not fear monsters unless <b>Fiddlesticks</b> is pretending to be an <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiddlesticks" data-ability="A Harmless Scarecrow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiddlesticks/LoL#A_Harmless_Scarecrow" title="Effigy"><img alt="Effigy" src="/wiki/images/Fiddlesticks_A_Harmless_Scarecrow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiddlesticks/LoL#A_Harmless_Scarecrow" title="Fiddlesticks/LoL">Effigy</a></span></span> or is not visible to them.</li>\n<li>Scuttle crab\'s shield will prevent <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiddlesticks" data-ability="Bountiful Harvest" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiddlesticks/LoL#Bountiful_Harvest" title="Bountiful Harvest"><img alt="Bountiful Harvest" src="/wiki/images/Fiddlesticks_Bountiful_Harvest.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiddlesticks/LoL#Bountiful_Harvest" title="Fiddlesticks/LoL">Bountiful Harvest</a></span></span> and the edges of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiddlesticks" data-ability="Reap" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiddlesticks/LoL#Reap" title="Reap"><img alt="Reap" src="/wiki/images/Fiddlesticks_Reap.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiddlesticks/LoL#Reap" title="Fiddlesticks/LoL">Reap</a></span></span> from fearing it unless <b>Fiddlesticks</b> is not visible to it.</li>\n<li>Scuttle crab\'s shield will prevent <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiddlesticks" data-ability="Crowstorm" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiddlesticks/LoL#Crowstorm" title="Crowstorm"><img alt="Crowstorm" src="/wiki/images/Fiddlesticks_Crowstorm.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiddlesticks/LoL#Crowstorm" title="Fiddlesticks/LoL">Crowstorm</a></span></span> from fearing it.</li></ul></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">Minions</a></span> are always feared if <b>Fiddlesticks</b> is not attacking them and there is no enemy champion in its view.</li>\n<li>The passive portion does not currently communicate any information to <b>Fiddlesticks</b>, its allies nor its enemies. There is no indicator to say that <b>Fiddlesticks</b> is out of combat; and no indicator or debuff icon on affected enemies.\n<ul><li>A visual indicator will circle around all enemy champions while <b>Fiddlesticks</b> is channeling <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiddlesticks" data-ability="Crowstorm" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiddlesticks/LoL#Crowstorm" title="Crowstorm"><img alt="Crowstorm" src="/wiki/images/Fiddlesticks_Crowstorm.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiddlesticks/LoL#Crowstorm" title="Fiddlesticks/LoL">Crowstorm</a></span></span> if it is unseen. This is only visible to <b>Fiddlesticks</b>.</li></ul></li>\n<li>The fear immunity applies even if the target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">crowd control immune</a></span>. It is not applied if it is blocked by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span>.</li>\n<li><i>Terrify</i> will still cast and affect the target even if <b>Fiddlesticks</b> dies or loses <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of them during the cast time.\n<ul><li><i>Terrify</i> will still cast but not affect the target if they die or become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> during the cast time. There is no compensation.</li></ul></li>\n<li>The <a href="/wiki/Summoner" title="Summoner">player\'s</a> screen will have a visual effect when successfully <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Flee"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">feared</a></span> by <i>Terrify</i>.</li>\n<li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/f/f7/Fiddlesticks_Terrify_Surprise_Party.png/revision/latest?cb=20200318130543" class="image"><img alt="Terrify Surprise Party.png" src="/wiki/images/Fiddlesticks_Terrify_Surprise_Party.png" decoding="async" loading="lazy" width="30" height="30" class="thumbborder lazyload"></a> - <span style="white-space:pre"><span class="inline-image label-after skin-icon" style="display:inline;white-space:pre;" data-param="" data-skin="Surprise Party" data-champion="Fiddlesticks" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiddlesticks/LoL/Cosmetics" title="Surprise Party Fiddlesticks"><img alt="Surprise Party Fiddlesticks" src="/wiki/images/Fiddlesticks_SurprisePartyCircle.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiddlesticks/LoL/Cosmetics" title="Fiddlesticks/LoL/Cosmetics">Surprise Party Fiddlesticks</a></span></span></span> has a special icon for this ability.</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiddlesticks" data-ability="Crowstorm" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiddlesticks/LoL#Crowstorm" title="Crowstorm"><img alt="Crowstorm" src="/wiki/images/Fiddlesticks_Crowstorm.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiddlesticks/LoL#Crowstorm" title="Fiddlesticks/LoL">Crowstorm</a></span></span> will not fear enemy champions if cast while they have vision of <b>Fiddlesticks</b>, even if <b>Fiddlesticks</b> is pretending to be an <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiddlesticks" data-ability="A Harmless Scarecrow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiddlesticks/LoL#A_Harmless_Scarecrow" title="Effigy"><img alt="Effigy" src="/wiki/images/Fiddlesticks_A_Harmless_Scarecrow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiddlesticks/LoL#A_Harmless_Scarecrow" title="Fiddlesticks/LoL">Effigy</a></span></span>.</li></ul>',
  },
  'Bountiful Harvest': {
    name: 'Bountiful Harvest',
    display_name: 'Bountiful Harvest',
    champion: 'Fiddlesticks',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'FiddleSticksW.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 336,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 650',
    tether_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Pending for test">850</span>',
    cast_time: '0.<small>25</small>',
    cost: '60 / 65 / 70 / 75 / 80',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">10 / 9.<small>5</small> / 9 / 8.<small>5</small> / 8</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiddlesticks" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiddlesticks/LoL" title="Fiddlesticks"><img alt="Fiddlesticks" src="/wiki/images/Fiddlesticks_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiddlesticks/LoL" title="Fiddlesticks/LoL">Fiddlesticks</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tethers"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tethers</a></span> to nearby enemies, continually dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> for a portion of damage dealt.',
      'If Fiddlesticks ends the channel without interruption, the last tick deals increased <span style="color: #00B0F0; white-space:normal">magic damage</span> and the remaining cooldown is <span style="white-space:nowrap"><a href="/wiki/Ability_haste" title="Ability haste"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduced</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Bountiful_Harvest.png',
        description:
          'Active: Fiddlesticks forms a  tether between itself and each nearby enemy over the cast time, then  channels for up to 2 seconds to harvest their souls,  revealing them in the process.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Fiddlesticks</b> forms a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tether</a></span> between itself and each nearby enemy over the cast time, then <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for up to 2 seconds to harvest their souls, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> them in the process.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: 'Fiddlesticks forms a  tether between itself and each nearby enemy over the cast time, then  channels for up to 2 seconds to harvest their souls,  revealing them in the process.',
            values: 2,
            units: 'darkHarvestStacks',
            unitsText:
              'forms a  tether between itself and each nearby enemy over the cast time, then  channels for up to 2 seconds to harvest their souls,  revealing them in the process.',
            pre: 'Fiddlesticks forms a  tether between itself and each nearby enemy over the cast time, then  channels for up to 2 seconds to harvest their souls,  revealing them in the process.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'While Fiddlesticks is channeling, the tethered enemies are dealt magic damage every 0.25 seconds, with the final tick at the end of the channel dealing additional magic damage. Bountiful Harvest deals 135% damage against  monsters and 50% damage against  minions.',
        descriptionHTML:
          'While <b>Fiddlesticks</b> is channeling, the tethered enemies are dealt <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>25</small> seconds, with the final tick at the end of the channel dealing additional <span style="color: #00B0F0; white-space:normal">magic damage</span>. <i>Bountiful Harvest</i> deals 135% damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> and 50% damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'Bountiful Harvest deals 135% damage against  monsters and 50% damage against  minions.',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'damage against  monsters and 50Harvest deals 135',
            pre: 'Bountiful Harvest deals 135% damage against  monsters and 50% damage against  minions.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage per Tick:',
            values: '15 / 22.5 / 30 / 37.5 / 45 (+ 8.75% AP)',
            valuesHTML:
              '15 / 22.<small>5</small> / 30 / 37.<small>5</small> / 45 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;8.<small>75</small>% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage per Tick:',
            raw: '15 / 22.5 / 30 / 37.5 / 45 (+ 8.75% AP)',
            damagetype: 'Magic',
            values: [15, 22.5, 30, 37.5, 45],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 22.5 / 30 / 37.5 / 45',
            children: [
              {
                values: 8.75,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 8.75% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Fiddlesticks  heals itself for a percentage of the pre-mitigation damage dealt, modified to 45% against monsters and 15% against minions.',
        descriptionHTML:
          '<b>Fiddlesticks</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> itself for a percentage of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage dealt before modifiers">pre-mitigation damage</span> dealt, modified to 45% against monsters and 15% against minions.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: 'Fiddlesticks  heals itself for a percentage of the pre-mitigation damage dealt, modified to 45% against monsters and 15% against minions.',
            healType: 'SelfHeal',
            values: 4,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'against monsters and 15 heals itself for a percentage of the pre-mitigation damage dealt, modified to 45',
            pre: 'Fiddlesticks  heals itself for a percentage of the pre-mitigation damage dealt, modified to 45% against monsters and 15% against minions.',
          },
        ],
        leveling: [
          {
            name: 'Champion Heal Percentage:',
            values: '25 / 32.5 / 40 / 47.5 / 55%',
            valuesHTML:
              '25 / 32.<small>5</small> / 40 / 47.<small>5</small> / 55%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Champion Heal Percentage:',
            raw: '25 / 32.5 / 40 / 47.5 / 55%',
            healType: 'DrainEffect',
            values: [25, 32.5, 40, 47.5, 55],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 32.5 / 40 / 47.5 / 55%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Bountiful Harvest ends if all targets have died or broken their tethers. If the channel was not interrupted, 60% of the  current cooldown is refunded.',
        descriptionHTML:
          '<i>Bountiful Harvest</i> ends if all targets have died or broken their tethers. If the channel was not <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="e.g. by Fiddlesticks or crowd control effects">interrupted</span>, 60% of the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> is refunded.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'If the channel was not interrupted, 60% of the  current cooldown is refunded.',
            values: 6,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'of the  current cooldown is refunded.the channel was not interrupted, 60',
            pre: 'If the channel was not interrupted, 60% of the  current cooldown is refunded.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'A nearby enemy is required to cast this ability. The target does not have to be  visible to be tethered by this ability.',
        descriptionHTML:
          '<i>A nearby enemy is required to cast this ability. The target does not have to be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> to be tethered by this ability.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'aoedot',
    spellshield: 'Special',
    notes:
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block the tether\'s application but not the damage of one already applied.\n<ul><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/45/Fiddlesticks_Bountiful_Harvest_Surprise_Party.png/revision/latest?cb=20200318130356" class="image"><img alt="Bountiful Harvest Surprise Party.png" src="/wiki/images/Fiddlesticks_Bountiful_Harvest_Surprise_Party.png" decoding="async" loading="lazy" width="30" height="30" class="thumbborder lazyload"></a> - <span style="white-space:pre"><span class="inline-image label-after skin-icon" style="display:inline;white-space:pre;" data-param="" data-skin="Surprise Party" data-champion="Fiddlesticks" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiddlesticks/LoL/Cosmetics" title="Surprise Party Fiddlesticks"><img alt="Surprise Party Fiddlesticks" src="/wiki/images/Fiddlesticks_SurprisePartyCircle.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiddlesticks/LoL/Cosmetics" title="Fiddlesticks/LoL/Cosmetics">Surprise Party Fiddlesticks</a></span></span></span> has a special icon for this ability.</li>\n<li>The following table refers for interactions while <b>Fiddlesticks</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Hextech Rocketbelt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt"><img alt="Hextech Rocketbelt" src="/wiki/images/Hextech_Rocketbelt_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt">Hextech Rocketbelt</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>All item-actives not specified above interrupt\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Mark" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mark" title="Mark"><img alt="Mark" src="/wiki/images/Mark.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mark" title="Mark">Mark</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Dash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mark#Dash" title="Dash"><img alt="Dash" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mark#Dash" title="Mark">Dash</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>',
  },
  Reap: {
    name: 'Reap',
    display_name: 'Reap',
    champion: 'Fiddlesticks',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'FiddleSticksE.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 384,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '850',
    cast_time: '0.<small>4</small>',
    cost: '40 / 45 / 50 / 55 / 60',
    costtype: 'Mana',
    cooldown: '10 / 9 / 8 / 7 / 6',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiddlesticks" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiddlesticks/LoL" title="Fiddlesticks"><img alt="Fiddlesticks" src="/wiki/images/Fiddlesticks_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiddlesticks/LoL" title="Fiddlesticks/LoL">Fiddlesticks</a></span></span> slashes the target area, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> enemies hit.',
      'Enemies hit in the center of the slash are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">silenced</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Reap.png',
        description:
          'Active: Fiddlesticks slashes the target location with its scythe, dealing magic damage to enemies within the area and  slowing them for 1.25 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Fiddlesticks</b> slashes the target location with its scythe, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within the area and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them for 1.<small>25</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Fiddlesticks slashes the target location with its scythe, dealing magic damage to enemies within the area and  slowing them for 1.25 seconds.',
            damagetype: 'Magic',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'slashes the target location with its scythe, dealing magic damage to enemies within the area and  slowing them for 1.25 seconds.',
            pre: 'Fiddlesticks slashes the target location with its scythe, dealing magic damage to enemies within the area and  slowing them for 1.25 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '70 / 105 / 140 / 175 / 210 (+ 50% AP)',
            valuesHTML:
              '70 / 105 / 140 / 175 / 210 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span>',
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
            raw: '70 / 105 / 140 / 175 / 210 (+ 50% AP)',
            damagetype: 'Magic',
            values: [70, 105, 140, 175, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 105 / 140 / 175 / 210',
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
        icon: '/wiki/images/undefined',
        description:
          'Enemies hit in the center of the area are also  silenced for 1.25 seconds.',
        descriptionHTML:
          'Enemies hit in the center of the area are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">silenced</a></span> for 1.<small>25</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Enemies hit in the center of the area are also  silenced for 1.25 seconds.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'hit in the center of the area are also  silenced for 1.25 seconds.',
            pre: 'Enemies hit in the center of the area are also  silenced for 1.25 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: '',
    damagetype: 'Magic',
    spelleffects: 'AoE',
    spellshield: true,
    notes:
      '* <a href="https://static.wikia.nocookie.net/leagueoflegends/images/1/1f/Fiddlesticks_Reap_Surprise_Party.png/revision/latest?cb=20200318130532" class="image"><img alt="Reap Surprise Party.png" src="/wiki/images/Fiddlesticks_Reap_Surprise_Party.png" decoding="async" loading="lazy" width="30" height="30" class="thumbborder lazyload"></a> - <span style="white-space:pre"><span class="inline-image label-after skin-icon" style="display:inline;white-space:pre;" data-param="" data-skin="Surprise Party" data-champion="Fiddlesticks" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiddlesticks/LoL/Cosmetics" title="Surprise Party Fiddlesticks"><img alt="Surprise Party Fiddlesticks" src="/wiki/images/Fiddlesticks_SurprisePartyCircle.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiddlesticks/LoL/Cosmetics" title="Fiddlesticks/LoL/Cosmetics">Surprise Party Fiddlesticks</a></span></span></span> has a special icon for this ability.',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Fiddlesticks_Original_E_6.ogg   "Reap!"',
  },
  Crowstorm: {
    name: 'Crowstorm',
    display_name: 'Crowstorm',
    champion: 'Fiddlesticks',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'FiddleSticksR.png',
      sprite: 'spell3.png',
      group: 'spell',
      x: 432,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '800',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 600',
    cast_time: 'none',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">140 / 125 / 110 / 95 / 80</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiddlesticks" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiddlesticks/LoL" title="Fiddlesticks"><img alt="Fiddlesticks" src="/wiki/images/Fiddlesticks_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiddlesticks/LoL" title="Fiddlesticks/LoL">Fiddlesticks</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channels"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span>, then <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blinks"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> to the target location surrounded by a murder of crows, continually dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies.',
    ],
    description: [
      {
        icon: '/wiki/images/Crowstorm.png',
        description:
          'Active: Fiddlesticks  channels for 1.5 seconds, then  blinks to the target location upon completion with a murder of crows flying wildly around it for 5 seconds, dealing magic damage every 0.25 seconds to nearby enemies.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Fiddlesticks</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for 1.<small>5</small> seconds, then <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> to the target location upon completion with a murder of crows flying wildly around it for 5 seconds, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>25</small> seconds to nearby enemies.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Fiddlesticks  channels for 1.5 seconds, then  blinks to the target location upon completion with a murder of crows flying wildly around it for 5 seconds, dealing magic damage every 0.25 seconds to nearby enemies.',
            damagetype: 'Magic',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'channels for 1.5 seconds, then  blinks to the target location upon completion with a murder of crows flying wildly around it for 5 seconds, dealing magic damage every 0.25 seconds to nearby enemies.',
            pre: 'Fiddlesticks  channels for 1.5 seconds, then  blinks to the target location upon completion with a murder of crows flying wildly around it for 5 seconds, dealing magic damage every 0.25 seconds to nearby enemies.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage per Tick:',
            values: '37.5 / 50 / 62.5 / 75 / 87.5 (+ 12.5% AP)',
            valuesHTML:
              '37.<small>5</small> / 50 / 62.<small>5</small> / 75 / 87.<small>5</small> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;12.<small>5</small>% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage per Tick:',
            raw: '37.5 / 50 / 62.5 / 75 / 87.5 (+ 12.5% AP)',
            damagetype: 'Magic',
            values: [37.5, 50, 62.5, 75, 87.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '37.5 / 50 / 62.5 / 75 / 87.5',
            children: [
              {
                values: 12.5,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 12.5% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'Crowstorm will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i>Crowstorm will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: '',
    damagetype: 'Magic',
    spelleffects: 'aoe',
    notes:
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">Roots</a></span> do not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupt</a></span> the ability despite being a <a href="/wiki/Channel#Movement_Channels" title="Channel">movement channel</a>.\n<ul><li><b>Fiddlesticks</b> will always <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blink</a></span> to its intended location even if its position changes during the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channel</a></span> without being interrupted (e.g. by <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ryze" data-ability="Realm Warp" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ryze/LoL#Realm_Warp" title="Realm Warp"><img alt="Realm Warp" src="/wiki/images/Ryze_Realm_Warp.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ryze/LoL#Realm_Warp" title="Ryze/LoL">Realm Warp</a></span></span>).</li>\n<li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/c/cf/Fiddlesticks_Crowstorm_Surprise_Party.png/revision/latest?cb=20200318130434" class="image"><img alt="Crowstorm Surprise Party.png" src="/wiki/images/Fiddlesticks_Crowstorm_Surprise_Party.png" decoding="async" loading="lazy" width="30" height="30" class="thumbborder lazyload"></a> - <span style="white-space:pre"><span class="inline-image label-after skin-icon" style="display:inline;white-space:pre;" data-param="" data-skin="Surprise Party" data-champion="Fiddlesticks" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiddlesticks/LoL/Cosmetics" title="Surprise Party Fiddlesticks"><img alt="Surprise Party Fiddlesticks" src="/wiki/images/Fiddlesticks_SurprisePartyCircle.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiddlesticks/LoL/Cosmetics" title="Fiddlesticks/LoL/Cosmetics">Surprise Party Fiddlesticks</a></span></span></span> has a special icon for this ability.</li>\n<li>The following table refers for interactions while <b>Fiddlesticks</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All the other item-actives are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/26/Grounded_icon.png/revision/latest?cb=20160509000039" class="image"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Grounding effects</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Fiddlesticks_Original_R_0.ogg   "Fear!"',
  },
} satisfies { [skillName in string]: SkillData };
