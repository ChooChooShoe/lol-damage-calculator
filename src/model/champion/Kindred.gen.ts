import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Kindred';

export default {
  'Mark of the Kindred': {
    name: 'Mark of the Kindred',
    display_name: 'Mark of the Kindred',
    champion: 'Kindred',
    skill: 'I',
    image: {
      full: 'Kindred_Passive.png',
      sprite: 'passive2.png',
      group: 'passive',
      x: 48,
      y: 0,
      w: 48,
      h: 48,
    },
    ontargetcdstatic:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Lamb\'s mark">240</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> Both <b>Lamb</b> and <b>Wolf</b> mark targets to <i>hunt</i>. Scoring a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against a <i>hunted</i> target collects a permanent stack of <i>Mark of the Kindred</i>. <b>Lamb</b> can select an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> to <i>hunt</i>, and <b>Wolf</b> automatically selects a large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> to <i>hunt</i>.',
      '<span class="template_sbc"><b>Mark of the Kindred:</b></span> <b>Lamb</b> gains <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> range</span> on her basic attacks and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kindred" data-ability="Mounting Dread" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kindred/LoL#Mounting_Dread" title="Mounting Dread"><img alt="Mounting Dread" src="/wiki/images/Kindred_Mounting_Dread.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kindred/LoL#Mounting_Dread" title="Kindred/LoL">Mounting Dread</a></span></span></i>. For each stack, <b>Kindred\'s</b> abilities become more potent.',
    ],
    description: [
      {
        icon: '/wiki/images/Mark of the Kindred.png',
        description:
          'Innate: Both Lamb and Wolf mark targets to hunt. Scoring a  takedown against a hunted target collects a stack of Mark of the Kindred. Mark of the Kindred: Lamb gains 75 − 250 (based on marks)  bonus range on her basic attacks and  Mounting Dread.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> Both <b>Lamb</b> and <b>Wolf</b> mark targets to <i>hunt</i>. Scoring a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against a <i>hunted</i> target collects a stack of <i>Mark of the Kindred</i>. <br><br><span class="template_sbc"><b>Mark of the Kindred:</b></span> <b>Lamb</b> gains <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="marks" data-displayformula="+75 at 4 stacks, and +25 every 3 stacks thereafter, up to 250 bonus range at 25 stacks." data-bot_values="75;100;125;150;175;200;225;250" data-top_values="4;7;10;13;16;19;22;25">75 − 250 (based on marks)</span> <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> range</span> on her basic attacks and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kindred" data-ability="Mounting Dread" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kindred/LoL#Mounting_Dread" title="Mounting Dread"><img alt="Mounting Dread" src="/wiki/images/Kindred_Mounting_Dread.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kindred/LoL#Mounting_Dread" title="Kindred/LoL">Mounting Dread</a></span></span></i>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Mark of the Kindred:',
            raw: ' Lamb gains 75 − 250 (based on marks)  bonus range on her basic attacks and  Mounting Dread.',
            increasedStat: 'bonus_ad',
            values: [7, 250],
            basedOn: 'marks',
            units: '',
            unitsText: 'bonus range on her basic attacks and  Mounting Dread.',
            pre: 'Lamb gains 75 − 250',
            post: 'bonus range on her basic attacks and  Mounting Dread.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: "/wiki/images/Lamb's Mask profileicon.png",
        description:
          'Innate - Lamb: Lamb is offered a selection of enemy  champions to hunt if she has not been in combat with them in the last 6 seconds. Once selected, the mark is applied after an 8-second delay and thereafter it can be collected by Kindred. Lamb gains the ability to select a new target every 75 seconds. Targets successfully hunted cannot be marked again for 4 minutes.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Lamb:</b></span> <b>Lamb</b> is offered a selection of enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> to <i>hunt</i> if she has not been <a href="/wiki/Combat_status" title="Combat status">in combat</a> with them in the last 6 seconds. Once selected, the mark is applied after an 8-second delay and thereafter it can be collected by <b>Kindred</b>. <b>Lamb</b> gains the ability to select a new target every 75 seconds. <i>Targets successfully hunted cannot be marked again for 4 minutes.</i>',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Innate - Lamb:',
            raw: ' Lamb is offered a selection of enemy  champions to hunt if she has not been in combat with them in the last 6 seconds',
            values: 6,
            user: 'none',
            units: '',
            unitsText:
              'is offered a selection of enemy  champions to hunt if she has not been in combat with them in the last 6 seconds',
            pre: 'Lamb is offered a selection of enemy  champions to hunt if she has not been in combat with them in the last 6 seconds',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Once selected, the mark is applied after an 8-second delay and thereafter it can be collected by Kindred',
            damagetype: 'None',
            values: 8,
            units: 'total_ap',
            unitsText:
              'selected, the mark is applied after an 8-second delay and thereafter it can be collected by Kindred',
            pre: 'Once selected, the mark is applied after an 8-second delay and thereafter it can be collected by Kindred',
          },
          {
            effectType: 'Gain',
            name: 'Line 3:',
            raw: 'Lamb gains the ability to select a new target every 75 seconds',
            increasedStat: 'total_ap',
            values: 7,
            user: 'target',
            units: '',
            unitsText:
              'gains the ability to select a new target every 75 seconds',
            pre: 'Lamb gains the ability to select a new target every 75 seconds',
          },
          {
            effectType: 'Gain',
            name: 'Line 4:',
            raw: 'Targets successfully hunted cannot be marked again for 4 minutes.',
            increasedStat: 'kindredMarks',
            values: 4,
            units: '',
            unitsText:
              'successfully hunted cannot be marked again for 4 minutes.',
            pre: 'Targets successfully hunted cannot be marked again for 4 minutes.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: "/wiki/images/Wolf's Mask profileicon.png",
        description:
          "Innate - Wolf: Starting at 3:15, Wolf periodically marks a random large  monster within the enemy team's jungle for 180 seconds. The hunted camp is highlighted on the mini map to both teams. Once the hunted target is slain or the mark expires, Wolf will wait 45 seconds before selecting a new target. The type of monster that Wolf can mark changes based on Kindred's current Mark of the Kindred stacks:\n0 :  Rift Scuttler\n1 – 3:  Rift Scuttler,  Crimson Raptor,  Gromp\n4 – 7:  Ancient Krug,  Blue Sentinel,  Greater Murk Wolf, or  Red Brambleback\n8 + :  Rift Herald or  Baron Nashor,  Dragon or  Elder Dragon",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Wolf:</b></span> Starting at <span class="template_sbc"><b>3:15</b></span>, <b>Wolf</b> periodically marks a random large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> within the enemy team\'s jungle for 180 seconds. The <i>hunted</i> camp is highlighted on the <a href="/wiki/Map_(League_of_Legends)" title="Map (League of Legends)">mini map</a> to both teams. Once the <i>hunted</i> target is slain or the mark expires, <b>Wolf</b> will wait 45 seconds before selecting a new target. <br>The type of monster that <b>Wolf</b> can mark changes based on <b>Kindred\'s</b> current <i>Mark of the Kindred</i> stacks:\n<ul><li><span class="template_sbc"><b>0&nbsp;:</b></span> <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rift_Scuttler" title="Rift Scuttler"><img alt="Rift Scuttler" src="/wiki/images/Rift_ScuttlerSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rift_Scuttler" class="mw-redirect" title="Rift Scuttler">Rift Scuttler</a></span></span></li>\n<li><span class="template_sbc"><b>1 – 3:</b></span> <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rift_Scuttler" title="Rift Scuttler"><img alt="Rift Scuttler" src="/wiki/images/Rift_ScuttlerSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rift_Scuttler" class="mw-redirect" title="Rift Scuttler">Rift Scuttler</a></span></span>, <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Crimson_Raptor" title="Crimson Raptor"><img alt="Crimson Raptor" src="/wiki/images/Crimson_RaptorSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Crimson_Raptor" class="mw-redirect" title="Crimson Raptor">Crimson Raptor</a></span></span>, <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gromp" title="Gromp"><img alt="Gromp" src="/wiki/images/GrompSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gromp" title="Gromp">Gromp</a></span></span></li>\n<li><span class="template_sbc"><b>4 – 7:</b></span> <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ancient_Krug" title="Ancient Krug"><img alt="Ancient Krug" src="/wiki/images/Ancient_KrugSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ancient_Krug" class="mw-redirect" title="Ancient Krug">Ancient Krug</a></span></span>, <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Blue_Sentinel" title="Blue Sentinel"><img alt="Blue Sentinel" src="/wiki/images/Blue_SentinelSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Blue_Sentinel" title="Blue Sentinel">Blue Sentinel</a></span></span>, <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Greater_Murk_Wolf" title="Greater Murk Wolf"><img alt="Greater Murk Wolf" src="/wiki/images/Greater_Murk_WolfSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Greater_Murk_Wolf" class="mw-redirect" title="Greater Murk Wolf">Greater Murk Wolf</a></span></span>, or <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Red_Brambleback" title="Red Brambleback"><img alt="Red Brambleback" src="/wiki/images/Red_BramblebackSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Red_Brambleback" title="Red Brambleback">Red Brambleback</a></span></span></li>\n<li><span class="template_sbc"><b>8 +&nbsp;:</b></span> <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rift_Herald" title="Rift Herald"><img alt="Rift Herald" src="/wiki/images/Rift_HeraldSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rift_Herald" class="mw-redirect" title="Rift Herald">Rift Herald</a></span></span> or <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Baron_Nashor" title="Baron Nashor"><img alt="Baron Nashor" src="/wiki/images/Baron_NashorSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Baron_Nashor" class="mw-redirect" title="Baron Nashor">Baron Nashor</a></span></span>, <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Dragon" title="Dragon"><img alt="Dragon" src="/wiki/images/DragonSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Dragon" title="Dragon">Dragon</a></span></span> or <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elder_Dragon" title="Elder Dragon"><img alt="Elder Dragon" src="/wiki/images/Elder_DragonSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elder_Dragon" title="Elder Dragon">Elder Dragon</a></span></span></li></ul>',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Innate - Wolf:',
            raw: " Starting at 3:15, Wolf periodically marks a random large  monster within the enemy team's jungle for 180 seconds",
            values: 3,
            units: 'kindredMarks',
            unitsText:
              "at 3:15, Wolf periodically marks a random large  monster within the enemy team's jungle for 180 seconds",
            pre: "Starting at 3:15, Wolf periodically marks a random large  monster within the enemy team's jungle for 180 seconds",
          },
          {
            effectType: 'Unique',
            name: 'Line 3:',
            raw: 'Once the hunted target is slain or the mark expires, Wolf will wait 45 seconds before selecting a new target',
            values: 4,
            units: 'kindredMarks',
            unitsText:
              'the hunted target is slain or the mark expires, Wolf will wait 45 seconds before selecting a new target',
            pre: 'Once the hunted target is slain or the mark expires, Wolf will wait 45 seconds before selecting a new target',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self, Enemies',
    notes:
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">Takedowns</a></span> on <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> occur if <b>Kindred</b> had damaged them within the last 6 seconds.\n<ul><li><ul><li>This only includes if the monster was slain by <b>Kindred</b> or an ally.</li></ul></li>\n<li>Only killing the large monster is required to claim <b>Wolf\'s</b> mark.</li>\n<li>Gaining stacks from champions that would change what constitutes as a valid target for <b>Wolf</b> will not affect <b>Kindred\'s</b> ability to claim <b>Wolf\'s</b> current target.</li>\n<li><b>Wolf</b> cannot mark monsters that have been slain, even if <b>Kindred\'s</b> team doesn\'t know that the camp has been slain.</li>\n<li><b>Wolf\'s</b> cooldown is not displayed in-game. Combined with the above point and the target restrictions, <b>Wolf</b> may go extended periods of time without seeming to do anything.</li>\n<li><b>Wolf\'s</b> marked target will always have its mark removed from the map 15 seconds after dying for both teams, regardless of whether they have vision of it or not.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Kindred_Original_Passive_Mark_Enemy_10.ogg   "Our mark looms over you."',
  },
  'Dance of Arrows': {
    name: 'Dance of Arrows',
    display_name: 'Dance of Arrows',
    champion: 'Kindred',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'KindredQ.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 0,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '300',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="affected by Rapid Firecannon">Kindred\'s <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;attack range</span></span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">500 + <span style="color: #F5EE99; white-space:normal">100% movement speed</span></span>',
    cast_time: 'none',
    cost: '35',
    costtype: 'Mana',
    cooldown: '8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <b>Lamb</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> toward the target location, gaining <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for a few seconds. She then fires at up to three nearby enemies, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span>.',
      'Casting <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kindred" data-ability="Wolf\'s Frenzy" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kindred/LoL#Wolf\'s_Frenzy" title="Wolf\'s Frenzy"><img alt="Wolf\'s Frenzy" src="/wiki/images/Kindred_Wolf%27s_Frenzy.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kindred/LoL#Wolf\'s_Frenzy" title="Kindred/LoL">Wolf\'s Frenzy</a></span></span></i> or using <i>Dance of Arrows</i> while inside its area will <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduce</span> the cooldown.',
    ],
    description: [
      {
        icon: '/wiki/images/Dance of Arrows.png',
        description:
          'Active: Lamb  dashes toward the target location, gaining  35% (+ 5% per  mark) bonus attack speed for 4 seconds and firing an arrow at up to 3 nearby  visible enemies that deals physical damage. Her current attack target within any proximity will be prioritized by one of the arrows.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Lamb</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> toward the target location, gaining <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">35%</span></span> <span style="color: #AF1AAF; white-space:normal">(+&nbsp;5% per <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kindred" data-ability="Mark of the Kindred" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kindred/LoL#Mark_of_the_Kindred" title="mark"><img alt="mark" src="/wiki/images/Kindred_Mark_of_the_Kindred.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kindred/LoL#Mark_of_the_Kindred" title="Kindred/LoL">mark</a></span></span>)</span> <span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span> for 4 seconds and firing an arrow at up to 3 nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemies that deals <span style="color: #FF8C34; white-space:normal">physical damage</span>. Her current attack target within any proximity will be prioritized by one of the arrows.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Lamb  dashes toward the target location, gaining  35% (+ 5% per  mark) bonus attack speed for 4 seconds and firing an arrow at up to 3 nearby  visible enemies that deals physical damage',
            increasedStat: 'bonus_ad',
            values: 3,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'bonus attack speed for 4 seconds and firing an arrow at up to 3 nearby  visible enemies that deals physical damage',
            pre: 'Lamb  dashes toward the target location, gaining  35%',
            post: 'bonus attack speed for 4 seconds and firing an arrow at up to 3 nearby  visible enemies that deals physical damage',
            children: [
              {
                values: 5,
                valuesIsPercent: true,
                units: 'kindredMarks',
                unitsText: 'per  mark',
                pre: '+ 5% per  mark',
              },
            ],
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '50 / 75 / 100 / 125 / 150 (+ 75% bonus AD)',
            valuesHTML:
              '50 / 75 / 100 / 125 / 150 <span style="color:orange; white-space:normal">(+&nbsp;75% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '50 / 75 / 100 / 125 / 150 (+ 75% bonus AD)',
            damagetype: 'Physical',
            values: [50, 75, 100, 125, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 75 / 100 / 125 / 150',
            children: [
              {
                values: 75,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 75% bonus AD',
              },
            ],
          },
        ],
      },
      {
        description:
          "Dance of Arrows'   total cooldown is reduced to an amount while Lamb is within the area of  Wolf's Frenzy. Casting  Wolf's Frenzy reduces Dance of Arrows'  current cooldown to the same amount.",
        descriptionHTML:
          '<i>Dance of Arrows\' </i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>total</b> cooldown</span> is reduced to an amount while <b>Lamb</b> is within the area of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kindred" data-ability="Wolf\'s Frenzy" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kindred/LoL#Wolf\'s_Frenzy" title="Wolf\'s Frenzy"><img alt="Wolf\'s Frenzy" src="/wiki/images/Kindred_Wolf%27s_Frenzy.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kindred/LoL#Wolf\'s_Frenzy" title="Kindred/LoL">Wolf\'s Frenzy</a></span></span></i>. Casting <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kindred" data-ability="Wolf\'s Frenzy" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kindred/LoL#Wolf\'s_Frenzy" title="Wolf\'s Frenzy"><img alt="Wolf\'s Frenzy" src="/wiki/images/Kindred_Wolf%27s_Frenzy.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kindred/LoL#Wolf\'s_Frenzy" title="Kindred/LoL">Wolf\'s Frenzy</a></span></span></i> reduces <i>Dance of Arrows\' </i> <b>current</b> cooldown to the same amount.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Static Cooldown:',
            values: '4 / 3.5 / 3 / 2.5 / 2',
            valuesHTML: '4 / 3.<small>5</small> / 3 / 2.<small>5</small> / 2',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Static Cooldown:',
            raw: '4 / 3.5 / 3 / 2.5 / 2',
            values: [4, 3.5, 3, 2.5, 2],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '4 / 3.5 / 3 / 2.5 / 2',
          },
        ],
      },
      {
        description:
          "Dance of Arrows  resets Lamb's basic attack timer. Lamb can cast any of her abilities during the dash. Dance of Arrows will cast at max range if cast beyond that.",
        descriptionHTML:
          '<i>Dance of Arrows <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Lamb\'s</b> basic attack timer. <b>Lamb</b> can cast any of her <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> during the dash. Dance of Arrows will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Area of effect',
    spellshield: true,
    projectile: 'True',
    notes:
      '* The dash does not have a fixed range, it can be directed by up to 340 units.\n<ul><li>The dash distance can be extended to up to 400 units when dashing across terrain.</li>\n<li>The cooldown will not be modified if it cannot be reduced (the current cooldown would have to be less than the reduction amount in this case).</li></ul>',
  },
  "Wolf's Frenzy": {
    name: "Wolf's Frenzy",
    display_name: "Wolf's Frenzy",
    champion: 'Kindred',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'KindredW.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 48,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '500',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 800',
    speed: '1400',
    cast_time: 'none',
    cost: '40',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="From when the ability is cast">18 / 17 / 16 / 15 / 14</span>',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> As <b>Kindred</b> move and attack, they build up stacks of <i>Hunter\'s Vigor</i>. At full stacks, <b>Lamb\'s</b> next basic attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> her.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Wolf</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location and occupies the area for a period. He attacks enemies within the area, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>. Against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, <b>Wolf\'s</b> attacks deal increased damage and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> the target for a short time.',
      "<i>Wolf's Frenzy</i> ends immediately if <b>Lamb</b> leaves the area or dies.",
    ],
    description: [
      {
        description:
          "Passive: As Kindred move and attack, they build up to 100 stacks of Hunter's Vigor. At maximum stacks, Lamb's next basic attack  heals her for 0% − 100% (based on Kindred's missing health) of 47 − 81 (based on level). The heal is not triggered if Kindred is at full health.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> As <b>Kindred</b> move and attack, they build up to 100 stacks of <i>Hunter\'s Vigor</i>. At maximum stacks, <b>Lamb\'s</b> next basic attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> her for <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_label="Percent of level-scaling value" data-top_label="Missing health" data-displayformula="1.25% per 1% of \'\'\'Kindred\'s missing\'\'\' health. \'\'This is capped at 80% \'\'\'missing\'\'\' health.\'\'" data-bot_values="0;25;50;75;100" data-top_values="0;20;40;60;80" data-bot_key="%" data-top_key="%">0% − 100% (based on <b>Kindred\'s</b> <b>missing</b> health)</span></span> of <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="47;" data-finish="81;" data-bot_values="47;49;51;53;55;57;59;61;63;65;67;69;71;73;75;77;79;81" data-top_values="">47 − 81 (based on level)</span>. The heal is not triggered if <b>Kindred</b> is at full health.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Passive:',
            raw: " As Kindred move and attack, they build up to 100 stacks of Hunter's Vigor",
            min: 0,
            max: 10,
            description:
              " As Kindred move and attack, they build up to 100 stacks of Hunter's Vigor",
            values: 1,
            units: 'feastStacks',
            unitsText:
              "Kindred move and attack, they build up to 100 stacks of Hunter's Vigor",
            pre: "As Kindred move and attack, they build up to 100 stacks of Hunter's Vigor",
          },
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: "At maximum stacks, Lamb's next basic attack  heals her for 0% − 100% (based on Kindred's missing health) of 47 − 81 (based on level)",
            healType: 'BonusHealth',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'of 47 − 81',
            pre: "At maximum stacks, Lamb's next basic attack  heals her for 0% − 100%",
            post: 'of 47 − 81',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: "/wiki/images/Wolf's Frenzy.png",
        description:
          'Active: Wolf  dashes to the target location, then claims the surrounding area as his territory for the next 8.5 seconds, separating from Lamb. He automatically attacks the closest nearby  visible enemy within the area, prioritizing the last enemy Lamb has attacked, then enemy champions, then non-champions.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Wolf</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location, then claims the surrounding area as his territory for the next 8.<small>5</small> seconds, separating from <b>Lamb</b>. He automatically attacks the closest nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy within the area, prioritizing the last enemy <b>Lamb</b> has attacked, then enemy champions, then non-champions.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: ' Wolf  dashes to the target location, then claims the surrounding area as his territory for the next 8.5 seconds, separating from Lamb',
            values: 8,
            user: 'none',
            units: '',
            unitsText:
              'dashes to the target location, then claims the surrounding area as his territory for the next 8.5 seconds, separating from Lamb',
            pre: 'Wolf  dashes to the target location, then claims the surrounding area as his territory for the next 8.5 seconds, separating from Lamb',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Wolf's attacks deal magic damage and scale with 25% of Kindred's bonus attack speed. Against monsters, his attacks deal 150% damage and  slow the target by 50% for 2 seconds.",
        descriptionHTML:
          '<b>Wolf\'s</b> attacks deal <span style="color: #00B0F0; white-space:normal">magic damage</span> and scale with <span style="color:orangered; white-space:normal">25% of <b>Kindred\'s bonus</b> attack speed</span>. Against monsters, his attacks deal 150% damage and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> the target by 50% for 2 seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: "Wolf's attacks deal magic damage and scale with 25% of Kindred's bonus attack speed",
            damagetype: 'Magic',
            values: 2,
            valuesIsPercent: true,
            units: 'bonus_ad',
            unitsText:
              "of Kindred's bonus attack speedattacks deal magic damage and scale with 25",
            pre: "Wolf's attacks deal magic damage and scale with 25% of Kindred's bonus attack speed",
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'Against monsters, his attacks deal 150% damage and  slow the target by 50% for 2 seconds.',
            increasedStat: 'total_ad',
            values: 1,
            valuesIsPercent: true,
            user: 'target',
            units: '',
            unitsText:
              'damage and  slow the target by 50monsters, his attacks deal 150',
            pre: 'Against monsters, his attacks deal 150% damage and  slow the target by 50% for 2 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values:
              "25 / 30 / 35 / 40 / 45 (+ 20% bonus AD) (+ 1.5% (+ 1% per  mark) of target's current health)",
            valuesHTML:
              '25 / 30 / 35 / 40 / 45 <span style="color:orange; white-space:normal">(+&nbsp;20% <b>bonus</b> AD)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;1.<small>5</small>% <span style="color: #AF1AAF; white-space:normal">(+&nbsp;1% per <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kindred" data-ability="Mark of the Kindred" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kindred/LoL#Mark_of_the_Kindred" title="mark"><img alt="mark" src="/wiki/images/Kindred_Mark_of_the_Kindred.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kindred/LoL#Mark_of_the_Kindred" title="Kindred/LoL">mark</a></span></span>)</span> of target\'s <b>current</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Magic Damage:',
            raw: "25 / 30 / 35 / 40 / 45 (+ 20% bonus AD) (+ 1.5% (+ 1% per  mark) of target's current health)",
            healType: 'OutgoingHeals',
            values: [25, 30, 35, 40, 45],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 30 / 35 / 40 / 45',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 20% bonus AD',
              },
              {
                values: 1.5,
                valuesIsPercent: true,
                user: 'target',
                units: 'current_hp',
                unitsText: "of target's current health",
                pre: '+ 1.5%',
                post: "of target's current health",
                children: [
                  {
                    values: 1,
                    valuesIsPercent: true,
                    units: 'kindredMarks',
                    unitsText: 'per  mark',
                    pre: '+ 1% per  mark',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        description:
          "Wolf's Frenzy ends immediately if Lamb leaves the area or dies.",
        descriptionHTML:
          "<i>Wolf's Frenzy</i> ends immediately if <b>Lamb</b> leaves the area or dies.",
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Area of effect',
    spellshield: true,
    projectile: 'False',
    notes:
      '* <b>Wolf</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> but he cannot move through terrain other than the initial dash on activation.\n<ul><li><b>Wolf</b> is not able to re-target <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rift_Scuttler" title="Rift Scuttler"><img alt="Rift Scuttler" src="/wiki/images/Rift_ScuttlerSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rift_Scuttler" class="mw-redirect" title="Rift Scuttler">Rift Scuttler</a></span></span> if he loses <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of her while he\'s attacking it.</li>\n<li><i>Wolf\'s Frenzy</i> does not end if <b>Lamb</b> enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span>.</li>\n<li><i>Wolf\'s Frenzy</i> applies ability haste to its cooldown post-effect.\n<ul><li>Given a base cooldown of 14 seconds at rank 5 with 100 ability haste, casting the ability and then ending it after 4 seconds will result in a remaining cooldown of <img src="https://wikimedia.org/api/rest_v1/media/math/render/png/f2101fc17e9a392eef13df58f5050727ba05c67d" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -0.838ex; max-width:18.21ex; max-height:2.843ex;" alt="{\\displaystyle (14-4)\\times 0.5=5}"> seconds, where 0.5 is <a target="_blank" rel="noreferrer noopener" class="text" href="https://leagueoflegends.fandom.com/wiki/Haste#Formula">derived from ability haste</a>.</li>\n<li>Because of this, there will always be some cooldown time remaining post-effect regardless of the amount of ability haste, unlike certain other abilities with cooldowns that start on-cast.</li></ul></li></ul>',
  },
  'Mounting Dread': {
    name: 'Mounting Dread',
    display_name: 'Mounting Dread',
    champion: 'Kindred',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'KindredEWrapper.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 96,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '500 − 750 (based on Marks)',
    cast_time: '0.<small>25</small>',
    cost: '50',
    costtype: 'Mana',
    cooldown: '14 / 13 / 12 / 11 / 10',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <b>Lamb</b> fires a shot at the target enemy that briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them. This attack applies a stack of <i>Mounting Dread</i>, which can stack up to 4 times by <b>Lamb\'s</b> basic attacks.',
      'The fourth stack will consume them all and direct <b>Wolf</b> to pounce on the target to deal <span style="color:orange; white-space:normal"><b>additional</b> physical damage</span>, which <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strikes"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strikes</a></span> targets at low health.',
    ],
    description: [
      {
        icon: '/wiki/images/Mounting Dread.png',
        description:
          'Active: Lamb fires a shot at the target enemy that  slows them by 50% for 1 second and applies a stack of Mounting Dread for 4 seconds. Her basic attacks each apply an additional stack, refreshing the duration and stacking up to 4 times.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Lamb</b> fires a shot at the target enemy that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 50% for 1 second and applies a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Mounting Dread</i> for 4 seconds. Her basic attacks each apply an additional stack, refreshing the duration and stacking up to 4 times.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Active:',
            raw: ' Lamb fires a shot at the target enemy that  slows them by 50% for 1 second and applies a stack of Mounting Dread for 4 seconds',
            min: 0,
            max: 10,
            description:
              ' Lamb fires a shot at the target enemy that  slows them by 50% for 1 second and applies a stack of Mounting Dread for 4 seconds',
            values: 5,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              'for 1 second and applies a stack of Mounting Dread for 4 secondsfires a shot at the target enemy that  slows them by 50',
            pre: 'Lamb fires a shot at the target enemy that  slows them by 50% for 1 second and applies a stack of Mounting Dread for 4 seconds',
          },
          {
            effectType: 'Stacks',
            name: 'Line 2:',
            raw: 'Her basic attacks each apply an additional stack, refreshing the duration and stacking up to 4 times.',
            min: 0,
            max: 10,
            description:
              'Her basic attacks each apply an additional stack, refreshing the duration and stacking up to 4 times.',
            values: 4,
            units: 'total_ap',
            unitsText:
              'basic attacks each apply an additional stack, refreshing the duration and stacking up to 4 times.',
            pre: 'Her basic attacks each apply an additional stack, refreshing the duration and stacking up to 4 times.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Her next basic attack against a target with 3 stacks directs Wolf to pounce on the target, consuming all stacks to deal additional physical damage, capped at 300 against  monsters.',
        descriptionHTML:
          'Her next basic attack against a target with 3 stacks directs <b>Wolf</b> to pounce on the target, consuming all stacks to deal <span style="color:orange; white-space:normal"><b>additional</b> physical damage</span>, capped at 300 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Her next basic attack against a target with 3 stacks directs Wolf to pounce on the target, consuming all stacks to deal additional physical damage, capped at 300 against  monsters.',
            increasedStat: 'total_ap',
            values: 3,
            units: '',
            unitsText:
              'next basic attack against a target with 3 stacks directs Wolf to pounce on the target, consuming all stacks to deal additional physical damage, capped at 300 against  monsters.',
            pre: 'Her next basic attack against a target with 3 stacks directs Wolf to pounce on the target, consuming all stacks to deal additional physical damage, capped at 300 against  monsters.',
          },
        ],
        leveling: [
          {
            name: 'Additional Physical Damage:',
            values:
              "80 / 100 / 120 / 140 / 160 (+ 80% bonus AD) (+ 8% (+ 0.5% per  Mark) of target's missing health)",
            valuesHTML:
              '80 / 100 / 120 / 140 / 160 <span style="color:orange; white-space:normal">(+&nbsp;80% <b>bonus</b> AD)</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;8% <span style="color: #AF1AAF; white-space:normal">(+&nbsp;0.<small>5</small>% per <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kindred" data-ability="Mark of the Kindred" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kindred/LoL#Mark_of_the_Kindred" title="Mark"><img alt="Mark" src="/wiki/images/Kindred_Mark_of_the_Kindred.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kindred/LoL#Mark_of_the_Kindred" title="Kindred/LoL">Mark</a></span></span>)</span> of target\'s <b>missing</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Additional Physical Damage:',
            raw: "80 / 100 / 120 / 140 / 160 (+ 80% bonus AD) (+ 8% (+ 0.5% per  Mark) of target's missing health)",
            healType: 'PhysicalVamp',
            values: [80, 100, 120, 140, 160],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 100 / 120 / 140 / 160',
            children: [
              {
                values: 80,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 80% bonus AD',
              },
              {
                values: 8,
                valuesIsPercent: true,
                user: 'target',
                units: 'missing_hp',
                unitsText: "of target's missing health",
                pre: '+ 8%',
                post: "of target's missing health",
                children: [
                  {
                    values: 0.5,
                    valuesIsPercent: true,
                    units: 'kindredMarks',
                    unitsText: 'per  Mark',
                    pre: '+ 0.5% per  Mark',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        description:
          'The additional damage will  critically strike against targets below 15% − 65% (based on critical strike chance) of their  maximum health, increasing the missing health portion by (50% +  35%), and cannot  critically strike otherwise. The base damage of the pounce can independently  critically strike.',
        descriptionHTML:
          'The <b>additional</b> damage will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> against targets below <span style="color: #1F995C; white-space:normal"><span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="critical strike chance" data-displayformula="15% (+&nbsp;0.5% per 1% critical strike chance). \'\'This is capped at 100% critical strike chance.\'\'" data-bot_values="15;20;25;30;35;40;45;50;55;60;65" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">15% − 65% (based on critical strike chance)</span></span> of their <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>maximum</b> health</span></span>, increasing the <span style="color: #1F995C; white-space:normal"><b>missing</b> health</span> portion by <span style="color: #944B00; white-space:normal">(50%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="35%"><img alt="35%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">35%</a></span></span>)</span>, and cannot <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> otherwise. The <b>base</b> damage of the pounce can independently <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: 'The additional damage will  critically strike against targets below 15% − 65% (based on critical strike chance) of their  maximum health, increasing the missing health portion by (50% +  35%), and cannot  critically strike otherwise',
            healType: 'OutgoingHeals',
            values: 1,
            valuesIsPercent: true,
            basedOn: 'critical strike chance',
            units: 'maximum_hp',
            unitsText:
              'of their  maximum health, increasing the missing health portion by',
            pre: 'The additional damage will  critically strike against targets below 15% − 65%',
            post: 'of their  maximum health, increasing the missing health portion by',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: '+  35',
                pre: '50% +  35%',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'spell',
    spellshield: true,
    projectile: 'True',
    notes:
      '* <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Guinsoo\'s Rageblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Guinsoo%27s_Rageblade" title="Guinsoo\'s Rageblade"><img alt="Guinsoo\'s Rageblade" src="/wiki/images/Guinsoo%27s_Rageblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Guinsoo%27s_Rageblade" title="Guinsoo\'s Rageblade">Guinsoo\'s Rageblade</a></span></span> does not prevent the <b>additional</b> damage from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically striking</a></span>.\n<ul><li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel and not pay its cost but still go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li>\n<li>This ability cannot be cast on a target with <i>Mounting Dread</i> stacks.</li></ul>',
  },
  "Lamb's Respite": {
    name: "Lamb's Respite",
    display_name: "Lamb's Respite",
    champion: 'Kindred',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'KindredR.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 144,
      y: 96,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 535',
    cast_time: 'None',
    cost: '100',
    costtype: 'Mana',
    cooldown: '180 / 165 / 150 / 135 / 120',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <b>Lamb</b> blesses the ground under herself for a few seconds. Any unit inside the area will become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invulnerable"><a href="/wiki/Invulnerability" title="Invulnerability"><img alt="Cosmic Radiance.png" src="/wiki/images/Taric_Cosmic_Radiance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability" title="Invulnerability">invulnerable</a></span> upon reaching <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minimum health threshold"><a href="/wiki/Death#Ways_to_prevent_dying_by_not_losing_health" title="Death#Ways to prevent dying by not losing health"><img alt="Unkillable icon.png" src="/wiki/images/Unkillable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_dying_by_not_losing_health" title="Death">low health</a></span>.',
      'Units within the area are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healed</a></span> when the blessing ends.',
    ],
    description: [
      {
        icon: "/wiki/images/Lamb's Respite.png",
        description:
          'Active: Lamb blesses the ground under herself for 4 seconds and enters a 0.264 seconds cast time. All units inside the zone gain a  minimum health threshold of  10% of their maximum health, and will become  invulnerable for the remaining duration when they reach or are at the threshold, during which they also cannot be  healed, but can still  regenerate health.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Lamb</b> blesses the ground under herself for 4 seconds and enters a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.25 seconds, but rounded up to the next game tick.">0.<small>264</small> seconds</span> <a href="/wiki/Channel#Casting_Times" title="Channel">cast time</a>. <b>All</b> units inside the zone gain a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minimum health threshold"><a href="/wiki/Death#Ways_to_prevent_dying_by_not_losing_health" title="Death#Ways to prevent dying by not losing health"><img alt="Unkillable icon.png" src="/wiki/images/Unkillable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_dying_by_not_losing_health" title="Death">minimum health threshold</a></span> of <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;10% of their <b>maximum</b> health</span></span>, and will become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invulnerable"><a href="/wiki/Invulnerability" title="Invulnerability"><img alt="Cosmic Radiance.png" src="/wiki/images/Taric_Cosmic_Radiance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability" title="Invulnerability">invulnerable</a></span> for the remaining duration when they reach or are at the threshold, during which they also cannot be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healed</a></span>, but can still <span style="white-space:nowrap"><a href="/wiki/Health_regeneration" title="Health regeneration"><img alt="Health regeneration icon.png" src="/wiki/images/Health_regeneration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Health_regeneration" title="Health regeneration">regenerate health</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: ' Lamb blesses the ground under herself for 4 seconds and enters a 0.264 seconds cast time',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'blesses the ground under herself for 4 seconds and enters a 0.264 seconds cast time',
            pre: 'Lamb blesses the ground under herself for 4 seconds and enters a 0.264 seconds cast time',
          },
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: 'All units inside the zone gain a  minimum health threshold of  10% of their maximum health, and will become  invulnerable for the remaining duration when they reach or are at the threshold, during which they also cannot be  healed, but can still  regenerate health.',
            healType: 'HealthRegen',
            values: 1,
            valuesIsPercent: true,
            units: 'maximum_hp',
            unitsText:
              'of their maximum health, and will become  invulnerable for the remaining duration when they reach or are at the threshold, during which they also cannot be  healed, but can still  regenerate health.units inside the zone gain a  minimum health threshold of  10',
            pre: 'All units inside the zone gain a  minimum health threshold of  10% of their maximum health, and will become  invulnerable for the remaining duration when they reach or are at the threshold, during which they also cannot be  healed, but can still  regenerate health.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'All targetable units within the zone are  healed when the blessing ends.',
        descriptionHTML:
          'All targetable units within the zone are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healed</a></span> when the blessing ends.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Heal:',
            values: '225 / 262.5 / 300 / 337.5 / 375',
            valuesHTML:
              '225 / 262.<small>5</small> / 300 / 337.<small>5</small> / 375',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Heal:',
            raw: '225 / 262.5 / 300 / 337.5 / 375',
            healType: 'DrainEffect',
            values: [225, 262.5, 300, 337.5, 375],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '225 / 262.5 / 300 / 337.5 / 375',
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Self, Allies, Enemies',
    spelleffects: 'Heal',
    notes:
      '* <i>Lamb\'s Respite</i> will affect all <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, but not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ward"><a href="/wiki/Ward" title="Ward"><img alt="Ward icon.png" src="/wiki/images/Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ward" title="Ward">wards</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span>, or <a href="/wiki/Jungle_plants" title="Jungle plants">jungle plants</a>.\n<ul><li><i>Lamb\'s Respite</i> will affect <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> units but does not grant them the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> at the end of the blessing.\n<ul><li>It will specifically not affect champions that are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrecting</a></span> from <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Guardian Angel" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Guardian_Angel" title="Guardian Angel"><img alt="Guardian Angel" src="/wiki/images/Guardian_Angel_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Guardian_Angel" title="Guardian Angel">Guardian Angel</a></span></span>.</li></ul></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Health resource"><a href="/wiki/Manaless#Health" title="Manaless#Health"><img alt="Health resource.png" src="/wiki/images/Health_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Health" title="Manaless">Health costs</a></span> will ignore <i>Lamb\'s Respite\'s</i> threshold.\n<ul><li>The cost will not be paid if the caster is below the threshold.</li></ul></li>\n<li><i>Lamb\'s Respite</i> has no effect on <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Zombie state"><a href="/wiki/Death#Zombie_states" title="Death#Zombie states"><img alt="Zombie icon.png" src="/wiki/images/Zombie_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Zombie_states" title="Death">zombie state</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clone</a></span> units.</li>\n<li>The effects are applied before the cast time.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Kindred_Original_R_1.ogg   "Shine once more, before the end."',
  },
} satisfies { [skillName in string]: SkillData };
