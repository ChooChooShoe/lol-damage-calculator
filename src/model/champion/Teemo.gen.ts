import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Teemo';

export default {
  'Guerrilla Warfare': {
    name: 'Guerrilla Warfare',
    display_name: 'Guerrilla Warfare',
    champion: 'Teemo',
    skill: 'I',
    image: {
      full: 'Teemo_P.png',
      sprite: 'passive4.png',
      group: 'passive',
      x: 384,
      y: 0,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Teemo" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teemo/LoL" title="Teemo"><img alt="Teemo" src="/wiki/images/Teemo_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teemo/LoL" title="Teemo/LoL">Teemo</a></span></span> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisible"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisible</a></span> after a brief moment remaining idle without taking damage, and will maintain so long as he remains idle or not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">displaced</a></span>.',
      'While <b>Teemo</b> is in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Brush"><a href="/wiki/Brush" title="Brush"><img alt="Brushmaker.png" src="/wiki/images/Ivern_Brushmaker.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Brush" title="Brush">brush</a></span>, he will gain and maintain stealth even while moving.',
      '<span class="template_sbc"><b>Innate - Element of Surprise:</b></span> When <b>Teemo</b> breaks the stealth, he gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for a few seconds.',
    ],
    description: [
      {
        icon: '/wiki/images/Guerrilla Warfare.png',
        description:
          'Innate: Teemo gains  invisibility after 1.5 seconds without moving, taking damage, performing actions that break stealth,  channeling, or being in  stasis. Teemo will maintain stealth so long as he remains idle and is not  displaced. While in  brush, Teemo gains the stealth even while moving and can move without breaking stealth.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Teemo</b> gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisibility"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisibility</a></span> after 1.<small>5</small> seconds without moving, taking damage, performing actions that <a href="/wiki/Stealth#Breaking_stealth" title="Stealth">break stealth</a>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>, or being in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stasis (buff)"><a href="/wiki/Invulnerability#Stasis" title="Invulnerability#Stasis"><img alt="Stasis icon.png" src="/wiki/images/Stasis_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability#Stasis" title="Invulnerability">stasis</a></span>. <b>Teemo</b> will maintain stealth so long as he remains idle and is not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">displaced</a></span>. While in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Brush"><a href="/wiki/Brush" title="Brush"><img alt="Brushmaker.png" src="/wiki/images/Ivern_Brushmaker.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Brush" title="Brush">brush</a></span>, <b>Teemo</b> gains the stealth even while moving and can move without breaking stealth.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate:',
            raw: ' Teemo gains  invisibility after 1.5 seconds without moving, taking damage, performing actions that break stealth,  channeling, or being in  stasis',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'gains  invisibility after 1.5 seconds without moving, taking damage, performing actions that break stealth,  channeling, or being in  stasis',
            pre: 'Teemo gains  invisibility after 1.5 seconds without moving, taking damage, performing actions that break stealth,  channeling, or being in  stasis',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Element of Surprise.png',
        description:
          'Innate - Element of Surprise: When Teemo breaks the stealth, he gains  20 / 40 / 60 / 80% (based on level) bonus attack speed for 5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Element of Surprise:</b></span> When <b>Teemo</b> breaks the stealth, he gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="20;40;60;80" data-top_values="1;5;10;15" data-bot_key="%">20 / 40 / 60 / 80% (based on level)</span> <b>bonus</b> attack speed</span></span> for 5 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate - Element of Surprise:',
            raw: ' When Teemo breaks the stealth, he gains  20 / 40 / 60 / 80% (based on level) bonus attack speed for 5 seconds.',
            increasedStat: 'bonus_ad',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            units: '',
            unitsText: 'bonus attack speed for 5 seconds.',
            pre: 'When Teemo breaks the stealth, he gains  20 / 40 / 60 / 80%',
            post: 'bonus attack speed for 5 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes:
      '* If <b>Teemo</b> triggers <i>Element of Surprise</i> twice in less than 3 seconds he will only refresh the <span style="color:orangered; white-space:normal"><b>bonus</b> attack speed\'s</span> duration (it will not <a href="/wiki/Stack" title="Stack">stack</a> with itself).\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Charm"><a href="/wiki/Charm" title="Charm"><img alt="Charm icon.png" src="/wiki/images/Charm_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Charm" class="mw-redirect" title="Charm">Charm</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Flee"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">Flee</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Taunt"><a href="/wiki/Taunt" title="Taunt"><img alt="Taunt icon.png" src="/wiki/images/Taunt_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Taunt" class="mw-redirect" title="Taunt">Taunt</a></span> will <i>force</i> him out of <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stealth"><a href="/wiki/Stealth" title="Stealth"><img alt="Guerrilla Warfare.png" src="/wiki/images/Teemo_Guerrilla_Warfare.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth" title="Stealth">stealth</a></span>.\n<ul><li>If <b>Teemo</b> is in a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Brush"><a href="/wiki/Brush" title="Brush"><img alt="Brushmaker.png" src="/wiki/images/Ivern_Brushmaker.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Brush" title="Brush">brush</a></span> while stealthed, only <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Taunt"><a href="/wiki/Taunt" title="Taunt"><img alt="Taunt icon.png" src="/wiki/images/Taunt_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Taunt" class="mw-redirect" title="Taunt">Taunt</a></span> will break it.</li></ul></li>\n<li><i>Guerilla Warfare\'s</i> stealth is special-cased to be interrupted whenever <b>Teemo</b> moves from his location by any means (whether by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashing</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinking</a></span>, being <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">displaced</a></span>, or simply moving), thus, performing actions that do not normally <a href="/wiki/Stealth#Breaking_stealth" title="Stealth">break stealth</a> which also involve movement will cause the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisibility"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisibility</a></span> to break. Notably, <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> and <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span>. If <b>Teemo</b> is in a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Brush"><a href="/wiki/Brush" title="Brush"><img alt="Brushmaker.png" src="/wiki/images/Ivern_Brushmaker.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Brush" title="Brush">brush</a></span> the aforementioned spells do not end the stealth so long as his exact destination is still inside brush.\n<ul><li>Starting <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport\'s"><img alt="Teleport\'s" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport\'s</a></span></span> channel will not break <i>Guerilla Warfare</i>, only the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blink</a></span> upon completing the channel will (with the exception stated above).</li></ul></li>\n<li><i>Guerilla Warfare</i> will not activate while <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recalling"><img alt="Recalling" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recalling</a></span></span>.</li></ul>',
  },
  'Blinding Dart': {
    name: 'Blinding Dart',
    display_name: 'Blinding Dart',
    champion: 'Teemo',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'BlindingDart.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 384,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '680',
    speed: '2500',
    cast_time: '0.<small>25</small>',
    cost: '70 / 75 / 80 / 85 / 90',
    costtype: 'Mana',
    cooldown: '7',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Teemo" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teemo/LoL" title="Teemo"><img alt="Teemo" src="/wiki/images/Teemo_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teemo/LoL" title="Teemo/LoL">Teemo</a></span></span> shoots a dart at the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinds</a></span> them for a short time.',
    ],
    description: [
      {
        icon: '/wiki/images/Blinding Dart.png',
        description:
          'Active: Teemo shoots a dart at the target enemy that deals magic damage and  blinds them for a duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Teemo</b> shoots a dart at the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinds</a></span> them for a duration.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '80 / 125 / 170 / 215 / 260 (+ 80% AP)',
            valuesHTML:
              '80 / 125 / 170 / 215 / 260 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;80% AP)</span>',
          },
          {
            name: 'Blind Duration:',
            values: '2 / 2.25 / 2.5 / 2.75 / 3',
            valuesHTML:
              '2 / 2.<small>25</small> / 2.<small>5</small> / 2.<small>75</small> / 3',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 125 / 170 / 215 / 260 (+ 80% AP)',
            damagetype: 'Magic',
            values: [80, 125, 170, 215, 260],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 125 / 170 / 215 / 260',
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
          {
            effectType: 'Unique',
            name: 'Blind Duration:',
            raw: '2 / 2.25 / 2.5 / 2.75 / 3',
            values: [2, 2.25, 2.5, 2.75, 3],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '2 / 2.25 / 2.5 / 2.75 / 3',
          },
        ],
      },
      {
        description:
          'The duration of the  blind is doubled against  minions and  monsters.',
        descriptionHTML:
          'The duration of the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blind</a></span> is doubled against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Increased Blind Duration:',
            values: '4 / 4.5 / 5 / 5.5 / 6',
            valuesHTML: '4 / 4.<small>5</small> / 5 / 5.<small>5</small> / 6',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Increased Blind Duration:',
            raw: '4 / 4.5 / 5 / 5.5 / 6',
            values: [4, 4.5, 5, 5.5, 6],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '4 / 4.5 / 5 / 5.5 / 6',
          },
        ],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Single target',
    spellshield: true,
    projectile: 'True',
    callforhelp: 'True',
    notes:
      '* <i>Blinding Dart</i> will not make abilities that can trigger <a href="/wiki/On-hit_effect" class="mw-redirect" title="On-hit effect">on-hit effects</a> (<span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gangplank" data-ability="Parrrley" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gangplank/LoL#Parrrley" title="Parrrley"><img alt="Parrrley" src="/wiki/images/Gangplank_Parrrley.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gangplank/LoL#Parrrley" title="Gangplank/LoL">Parrrley</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ezreal" data-ability="Mystic Shot" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ezreal/LoL#Mystic_Shot" title="Mystic Shot"><img alt="Mystic Shot" src="/wiki/images/Ezreal_Mystic_Shot.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ezreal/LoL#Mystic_Shot" title="Ezreal/LoL">Mystic Shot</a></span></span>) miss.\n<ul><li>When blinded, enemies have a green tint on their screen.</li>\n<li>Because <i>Blinding Dart</i> uses <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Center range"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Range" title="Range">center range</a></span>, it has 45 to 70 more range than his <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack"><a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a></span>, which use <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Edge range"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Range" title="Range">edge range</a></span>, against other <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>.\n<ul><li>This bonus becomes lower if <b>Teemo</b> or his target have <a href="/wiki/Size" title="Size">size</a> bonuses.</li></ul></li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).</li></ul>',
  },
  'Move Quick': {
    name: 'Move Quick',
    display_name: 'Move Quick',
    champion: 'Teemo',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'MoveQuick.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 432,
      y: 0,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '40',
    costtype: 'mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">14</span>',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Teemo" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teemo/LoL" title="Teemo"><img alt="Teemo" src="/wiki/images/Teemo_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teemo/LoL" title="Teemo/LoL">Teemo</a></span></span> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> after a few seconds without taking damage from enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span>.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Teemo</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for a short time. The passive effect cannot be removed during this time.',
    ],
    description: [
      {
        description:
          'Passive: Teemo gains  bonus movement speed after 5 seconds without taking damage from enemy  champions or  turrets.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Teemo</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> after 5 seconds without taking damage from enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Passive:',
            raw: ' Teemo gains  bonus movement speed after 5 seconds without taking damage from enemy  champions or  turrets.',
            values: 5,
            user: 'none',
            units: '',
            unitsText:
              'gains  bonus movement speed after 5 seconds without taking damage from enemy  champions or  turrets.',
            pre: 'Teemo gains  bonus movement speed after 5 seconds without taking damage from enemy  champions or  turrets.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Movement Speed:',
            values: '10 / 14 / 18 / 22 / 26%',
            valuesHTML: '10 / 14 / 18 / 22 / 26%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '10 / 14 / 18 / 22 / 26%',
            values: [10, 14, 18, 22, 26],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 14 / 18 / 22 / 26%',
          },
        ],
      },
      {
        icon: '/wiki/images/Move Quick.png',
        description:
          'Active: Teemo gains bonus movement speed for 3 seconds. This overrides the passive bonus, but prevents the passive effect from being removed.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Teemo</b> gains <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span> for 3 seconds. This overrides the passive bonus, but prevents the passive effect from being removed.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Teemo gains bonus movement speed for 3 seconds',
            values: 3,
            user: 'none',
            units: '',
            unitsText: 'gains bonus movement speed for 3 seconds',
            pre: 'Teemo gains bonus movement speed for 3 seconds',
          },
        ],
        leveling: [
          {
            name: 'Bonus Movement Speed:',
            values: '20 / 28 / 36 / 44 / 52%',
            valuesHTML: '20 / 28 / 36 / 44 / 52%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '20 / 28 / 36 / 44 / 52%',
            values: [20, 28, 36, 44, 52],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 28 / 36 / 44 / 52%',
          },
        ],
      },
      {
        description:
          'Casting Move Quick does not interrupt  Guerrilla Warfare.',
        descriptionHTML:
          '<i>Casting Move Quick does not interrupt <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Teemo" data-ability="Guerrilla Warfare" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teemo/LoL#Guerrilla_Warfare" title="Guerrilla Warfare"><img alt="Guerrilla Warfare" src="/wiki/images/Teemo_Guerrilla_Warfare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teemo/LoL#Guerrilla_Warfare" title="Teemo/LoL">Guerrilla Warfare</a></span></span>.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    notes:
      '* When <i>Move Quick\'s</i> active bonus movement speed ends <b>Teemo</b> will not regain the passive one if he was damaged during the active\'s duration.\n<ul><li><i>Move Quick\'s</i> passive will be disabled even if the damage is blocked with a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span>.</li></ul>',
  },
  'Toxic Shot': {
    name: 'Toxic Shot',
    display_name: 'Toxic Shot',
    champion: 'Teemo',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'ToxicShot.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 0,
      y: 48,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Teemo" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teemo/LoL" title="Teemo\'s"><img alt="Teemo\'s" src="/wiki/images/Teemo_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teemo/LoL" title="Teemo/LoL">Teemo\'s</a></span></span> basic attacks deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> and inflict <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Poison"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL"><img alt="Poison icon.png" src="/wiki/images/Poison_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL">poison</a></span>.',
      '<span class="template_sbc"><b><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Poison"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL"><img alt="Poison icon.png" src="/wiki/images/Poison_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> poison</span>:</b></span> The target continually takes <span style="color: #00B0F0; white-space:normal">magic damage</span> over a few seconds. Subsequent inflictions refresh the duration.',
    ],
    description: [
      {
        icon: '/wiki/images/Toxic Shot.png',
        description:
          "Passive: Teemo's basic attacks are empowered to deal bonus magic damage  on-hit and inflict  poison.\n poison: The target takes magic damage every second over 4 seconds. Subsequent inflictions refresh the duration.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Teemo\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> are empowered to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and inflict <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Poison"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL"><img alt="Poison icon.png" src="/wiki/images/Poison_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL">poison</a></span>.<br><br>\n<p><span class="template_sbc"><b><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Poison"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL"><img alt="Poison icon.png" src="/wiki/images/Poison_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> poison</span>:</b></span> The target takes <span style="color: #00B0F0; white-space:normal">magic damage</span> every second over 4 seconds. Subsequent inflictions refresh the duration.\n</p>',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Passive:',
            raw: " Teemo's basic attacks are empowered to deal bonus magic damage  on-hit and inflict  poison.\n poison: The target takes magic damage every second over 4 seconds",
            damagetype: 'Magic',
            values: 4,
            units: 'bonus_ad',
            unitsText:
              'basic attacks are empowered to deal bonus magic damage  on-hit and inflict  poison.',
            pre: "Teemo's basic attacks are empowered to deal bonus magic damage  on-hit and inflict  poison.\n poison: The target takes magic damage every second over 4 seconds",
          },
        ],
        leveling: [
          {
            name: 'Magic Damage On-Hit:',
            values: '14 / 25 / 36 / 47 / 58 (+ 30% AP)',
            valuesHTML:
              '14 / 25 / 36 / 47 / 58 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span>',
          },
          {
            name: 'Magic Damage per Tick:',
            values: '6 / 12 / 18 / 24 / 30 (+ 10% AP)',
            valuesHTML:
              '6 / 12 / 18 / 24 / 30 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;10% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage On-Hit:',
            raw: '14 / 25 / 36 / 47 / 58 (+ 30% AP)',
            damagetype: 'Magic',
            values: [14, 25, 36, 47, 58],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '14 / 25 / 36 / 47 / 58',
            children: [
              {
                values: 30,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 30% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Magic Damage per Tick:',
            raw: '6 / 12 / 18 / 24 / 30 (+ 10% AP)',
            damagetype: 'Magic',
            values: [6, 12, 18, 24, 30],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '6 / 12 / 18 / 24 / 30',
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
        ],
      },
      {
        description: 'Toxic Shot deals 150% damage against  monsters.',
        descriptionHTML:
          '<i>Toxic Shot</i> deals 150% damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Toxic Shot deals 150% damage against  monsters.',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'damage against  monsters.Shot deals 150',
            pre: 'Toxic Shot deals 150% damage against  monsters.',
          },
        ],
        leveling: [
          {
            name: 'Monster Damage On-Hit:',
            values: '21 / 37.5 / 54 / 70.5 / 87 (+ 45% AP)',
            valuesHTML:
              '21 / 37.<small>5</small> / 54 / 70.<small>5</small> / 87 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;45% AP)</span>',
          },
          {
            name: 'Monster Damage per Tick:',
            values: '9 / 18 / 27 / 36 / 45 (+ 15% AP)',
            valuesHTML:
              '9 / 18 / 27 / 36 / 45 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;15% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Monster Damage On-Hit:',
            raw: '21 / 37.5 / 54 / 70.5 / 87 (+ 45% AP)',
            damagetype: 'None',
            values: [21, 37.5, 54, 70.5, 87],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '21 / 37.5 / 54 / 70.5 / 87',
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
          {
            effectType: 'Damage',
            name: 'Monster Damage per Tick:',
            raw: '9 / 18 / 27 / 36 / 45 (+ 15% AP)',
            damagetype: 'None',
            values: [9, 18, 27, 36, 45],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '9 / 18 / 27 / 36 / 45',
            children: [
              {
                values: 15,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 15% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    damagetype: 'Magic',
    spelleffects: 'proc',
    spellshield: false,
    notes:
      '*The initial hit from Toxic Shot will consume <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Manaflow Band" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Manaflow_Band_(Rune)" title="Manaflow Band"><img alt="Manaflow Band" src="/wiki/images/Manaflow_Band_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Manaflow_Band_(Rune)" class="mw-redirect" title="Manaflow Band (Rune)">Manaflow Band</a></span></span> if it is available.\n<ul><li>The attacks do not affect <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a> nor <a href="/wiki/Ward" title="Ward">wards</a>.</li></ul>',
  },
  'Noxious Trap': {
    name: 'Noxious Trap',
    display_name: 'Noxious Trap',
    champion: 'Teemo',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'TeemoRCast.png',
      sprite: 'spell13.png',
      group: 'spell',
      x: 48,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '600 / 675 / 750 / 825 / 900',
    collision_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Triggering radius">160</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Bounce collision radius">150</span>',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 450',
    cast_time: '0.<small>25</small>',
    cost: '75 / 65 / 55 / 45 / 35',
    costtype: 'Mana + 1 Charge',
    cooldown: '0.<small>25</small>',
    recharge: '30 / 27.<small>5</small> / 25 / 22.<small>5</small> / 20',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Teemo" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teemo/LoL" title="Teemo"><img alt="Teemo" src="/wiki/images/Teemo_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teemo/LoL" title="Teemo/LoL">Teemo</a></span></span> tosses a poisonous mushroom to the target location that becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stealthed trap"><a href="/wiki/Stealth#Stealthed_traps_and_wards" title="Stealth#Stealthed traps and wards"><img alt="Noxious Trap.png" src="/wiki/images/Teemo_Noxious_Trap.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Stealthed_traps_and_wards" title="Stealth">stealthed</a></span> and lasts for a while. It will bounce forward upon landing on another mushroom.',
      '<b>Teemo</b> periodically <a href="/wiki/Ammunition" title="Ammunition">stocks</a> a charge of <i>Noxious Trap</i>, up to a cap.',
      'Mushrooms can be destroyed by enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attacks"><a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a></span> and will explode upon enemy contact, inflicting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Poison"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL"><img alt="Poison icon.png" src="/wiki/images/Poison_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL">poison</a></span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them for a few seconds, as well as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> them.',
      '<span class="template_sbc"><b><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Poison"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL"><img alt="Poison icon.png" src="/wiki/images/Poison_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> poison</span>:</b></span> The target takes <span style="color: #00B0F0; white-space:normal">magic damage</span> every second over a few seconds. Subsequent inflictions refresh the duration.',
    ],
    description: [
      {
        icon: '/wiki/images/Noxious Trap.png',
        description:
          'Active: Teemo tosses a poisonous mushroom to the target location that becomes  stealthed after arming over 1 second, lasting for up to 5 minutes and granting  sight of its surroundings. If the mushroom lands on an already-placed one, it will bounce forward again for its cast distance, up to a cap, which can happen repeatedly.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Teemo</b> tosses a poisonous mushroom to the target location that becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stealthed trap"><a href="/wiki/Stealth#Stealthed_traps_and_wards" title="Stealth#Stealthed traps and wards"><img alt="Noxious Trap.png" src="/wiki/images/Teemo_Noxious_Trap.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Stealthed_traps_and_wards" title="Stealth">stealthed</a></span> after arming over 1 second, lasting for up to 5 minutes and granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of its surroundings. If the mushroom lands on an already-placed one, it will bounce forward again for its cast distance, up to a cap, which can happen repeatedly.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Teemo tosses a poisonous mushroom to the target location that becomes  stealthed after arming over 1 second, lasting for up to 5 minutes and granting  sight of its surroundings',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'tosses a poisonous mushroom to the target location that becomes  stealthed after arming over 1 second, lasting for up to 5 minutes and granting  sight of its surroundings',
            pre: 'Teemo tosses a poisonous mushroom to the target location that becomes  stealthed after arming over 1 second, lasting for up to 5 minutes and granting  sight of its surroundings',
          },
        ],
        leveling: [
          {
            name: 'Bounce Distance Cap:',
            values: '350 / 400 / 450 / 500 / 550',
            valuesHTML: '350 / 400 / 450 / 500 / 550',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bounce Distance Cap:',
            raw: '350 / 400 / 450 / 500 / 550',
            damagetype: 'None',
            values: [350, 400, 450, 500, 550],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '350 / 400 / 450 / 500 / 550',
          },
        ],
      },
      {
        description:
          'Teemo periodically stocks a Noxious Trap charge, up to a maximum amount.',
        descriptionHTML:
          '<b>Teemo</b> periodically <a href="/wiki/Ammunition" title="Ammunition">stocks</a> a <i>Noxious Trap</i> charge, up to a maximum amount.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Maximum Charges:',
            values: '3 / 3.5 / 4 / 4.5 / 5',
            valuesHTML: '3 / 3.<small>5</small> / 4 / 4.<small>5</small> / 5',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Maximum Charges:',
            raw: '3 / 3.5 / 4 / 4.5 / 5',
            values: [3, 3.5, 4, 4.5, 5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '3 / 3.5 / 4 / 4.5 / 5',
          },
        ],
      },
      {
        description:
          'The mushroom will explode upon enemy contact, inflicting  poison to nearby enemies and  slowing them for 4 seconds, as well as  revealing them.',
        descriptionHTML:
          'The mushroom will explode upon enemy contact, inflicting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Poison"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL"><img alt="Poison icon.png" src="/wiki/images/Poison_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL">poison</a></span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them for 4 seconds, as well as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> them.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'The mushroom will explode upon enemy contact, inflicting  poison to nearby enemies and  slowing them for 4 seconds, as well as  revealing them.',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'mushroom will explode upon enemy contact, inflicting  poison to nearby enemies and  slowing them for 4 seconds, as well as  revealing them.',
            pre: 'The mushroom will explode upon enemy contact, inflicting  poison to nearby enemies and  slowing them for 4 seconds, as well as  revealing them.',
          },
        ],
        leveling: [
          {
            name: 'Slow:',
            values: '30 / 35 / 40 / 45 / 50%',
            valuesHTML: '30 / 35 / 40 / 45 / 50%',
          },
        ],
        levelingRatios: [
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
        description:
          'poison: The target takes magic damage every second over 4 seconds. Subsequent inflictions refresh the duration.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Poison"><a href="/wiki/Cassiopeia/LoL" title="Cassiopeia/LoL"><img alt="Poison icon.png" src="/wiki/images/Poison_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> poison</span>:</b></span> The target takes <span style="color: #00B0F0; white-space:normal">magic damage</span> every second over 4 seconds. Subsequent inflictions refresh the duration.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'poison:',
            raw: ' The target takes magic damage every second over 4 seconds',
            damagetype: 'Magic',
            values: 4,
            user: 'none',
            units: '',
            unitsText: 'target takes magic damage every second over 4 seconds',
            pre: 'The target takes magic damage every second over 4 seconds',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage per Tick:',
            values: '50 / 65.625 / 81.25 / 96.875 / 112.5 (+ 13.75% AP)',
            valuesHTML:
              '50 / 65.<small>625</small> / 81.<small>25</small> / 96.<small>875</small> / 112.<small>5</small> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;13.<small>75</small>% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage per Tick:',
            raw: '50 / 65.625 / 81.25 / 96.875 / 112.5 (+ 13.75% AP)',
            damagetype: 'Magic',
            values: [50, 65.625, 81.25, 96.875, 112.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 65.625 / 81.25 / 96.875 / 112.5',
            children: [
              {
                values: 13.75,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 13.75% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          'A mushroom has  6 maximum health and can be damaged only by  champions basic attacks (2 damage from  ranged and 3 from  melee).',
        descriptionHTML:
          'A mushroom has <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">6 <b>maximum</b> health</span></span> and can be damaged only by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> basic attacks (2 damage from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ranged" class="mw-redirect" title="Ranged">ranged</a></span> and 3 from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Melee"><a href="/wiki/Melee" title="Melee"><img alt="Melee role.png" src="/wiki/images/Melee_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Melee" class="mw-redirect" title="Melee">melee</a></span>).',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: 'A mushroom has  6 maximum health and can be damaged only by  champions basic attacks (2 damage from  ranged and 3 from  melee).',
            healType: 'BonusHealth',
            values: 6,
            user: 'none',
            units: '',
            unitsText: '.',
            pre: 'A mushroom has  6 maximum health and can be damaged only by  champions basic attacks',
            post: '.',
            children: [
              {
                values: 2,
                user: 'none',
                units: '',
                unitsText: 'damage from  ranged and 3 from  melee',
                pre: '2 damage from  ranged and 3 from  melee',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'aoedot',
    spellshield: 'Special',
    projectile: 'True',
    notes:
      '* The bounce can occur an indefinite amount of times while <b>Teemo</b> is alive. If <b>Teemo</b> dies before <i>Noxious Trap</i> bounces on another, the trap will disappear.\n<ul><li><span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rift_Scuttler" title="Rift Scuttler"><img alt="Rift Scuttler" src="/wiki/images/Rift_ScuttlerSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rift_Scuttler" class="mw-redirect" title="Rift Scuttler">Rift Scuttler</a></span></span> will not trigger <i>Noxious Trap\'s</i> explosion if it is not being attacked.</li>\n<li>Enemies who step on multiple <i>Noxious Traps</i> will only refresh the duration of the damage over time and slow.</li>\n<li><i>Noxious Trap\'s</i> damage is determined when it detonates and not when planted, meaning if <b>Teemo\'s</b> <span style="white-space:nowrap"><a href="/wiki/Ability_power" title="Ability power"><img alt="Ability power icon.png" src="/wiki/images/Ability_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #7A6DFF; white-space:normal">ability power</span></span> changes, the scaling is also altered to affect the active damage of all <i>Noxious Traps</i> so long as they do not explode.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will prevent the damage over time and slow for all units but will not prevent the detonation itself.</li></ul>',
  },
} satisfies { [skillName in string]: SkillData };
