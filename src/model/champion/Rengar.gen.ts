import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Rengar';

export default {
  'Unseen Predator': {
    name: 'Unseen Predator',
    display_name: 'Unseen Predator',
    champion: 'Rengar',
    skill: 'I',
    image: {
      full: 'Rengar_P.png',
      sprite: 'passive3.png',
      group: 'passive',
      x: 144,
      y: 48,
      w: 48,
      h: 48,
    },
    range: '745',
    target_range: '50',
    speed: '1450',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rengar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rengar/LoL" title="Rengar"><img alt="Rengar" src="/wiki/images/Rengar_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rengar/LoL" title="Rengar/LoL">Rengar</a></span></span> generates <span style="color: #E34D4C; white-space:normal">Ferocity</span> when he casts a basic ability or uses <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rengar" data-ability="Savagery" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rengar/LoL#Savagery" title="Savagery\'s"><img alt="Savagery\'s" src="/wiki/images/Rengar_Savagery.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rengar/LoL#Savagery" title="Rengar/LoL">Savagery\'s</a></span></span></i> empowered attack, which expires after a period <a href="/wiki/Out_of_combat" class="mw-redirect" title="Out of combat">out of combat</a>. At max <span style="color: #E34D4C; white-space:normal">Ferocity</span>, his next basic ability consumes them to become empowered with an additional effect, gain an extra cast, and briefly grant him <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>.',
      '<span class="template_sbc"><b>Innate - Bonetooth Necklace:</b></span> <b>Rengar</b> generates a permanent <img alt="Bonetooth Necklace.png" src="/wiki/images/Rengar_Bonetooth_Necklace.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> <i>Trophy</i> stack for each unique <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, gaining <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span>.',
      '<span class="template_sbc"><b>Innate:</b></span> While in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Brush"><a href="/wiki/Brush" title="Brush"><img alt="Brushmaker.png" src="/wiki/images/Ivern_Brushmaker.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Brush" title="Brush">brush</a></span>, <b>Rengar</b> gains <i>Unseen Predator</i>.',
      '<span class="template_sbc"><b>Unseen Predator:</b></span> <b>Rengar\'s</b> basic <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;attack range</span> is increased and causes him to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leap</a></span> to the target. This generates <span style="color: #E34D4C; white-space:normal">Ferocity</span> if he had none at one point.',
    ],
    description: [
      {
        description:
          "Innate: Rengar generates 1 Ferocity upon casting a basic ability or using  Savagery's first attack. At 4 Ferocity, his next basic ability consumes them all to become empowered with an additional effect and grant him an additional cast along with  30 / 40 / 50% (based on level) bonus movement speed for 1.5 seconds. Reaching 4 Ferocity with  Savagery or  Bola Strike locks them from use for 0.1 seconds before and after casting. All Ferocity is lost after 10 seconds of being out of combat.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Rengar</b> generates <span style="color: #E34D4C; white-space:normal">1 Ferocity</span> upon casting a <a href="/wiki/Champion_ability" title="Champion ability">basic ability</a> or using <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rengar" data-ability="Savagery" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rengar/LoL#Savagery" title="Savagery\'s"><img alt="Savagery\'s" src="/wiki/images/Rengar_Savagery.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rengar/LoL#Savagery" title="Rengar/LoL">Savagery\'s</a></span></span></i> first attack. At <span style="color: #E34D4C; white-space:normal">4 Ferocity</span>, his next basic ability consumes them all to become empowered with an additional effect and grant him an additional cast along with <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#F5EE99;" data-start="30;1" data-finish="50;13" data-bot_values="30;40;50" data-top_values="1;7;13" data-bot_key="%">30 / 40 / 50% (based on level)</span> <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for 1.<small>5</small> seconds. Reaching <span style="color: #E34D4C; white-space:normal">4 Ferocity</span> with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rengar" data-ability="Savagery" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rengar/LoL#Savagery" title="Savagery"><img alt="Savagery" src="/wiki/images/Rengar_Savagery.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rengar/LoL#Savagery" title="Rengar/LoL">Savagery</a></span></span></i> or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rengar" data-ability="Bola Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rengar/LoL#Bola_Strike" title="Bola Strike"><img alt="Bola Strike" src="/wiki/images/Rengar_Bola_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rengar/LoL#Bola_Strike" title="Rengar/LoL">Bola Strike</a></span></span></i> locks them from use for 0.<small>1</small> seconds before and after casting. All <span style="color: #E34D4C; white-space:normal">Ferocity</span> is lost after 10 seconds of being <a href="/wiki/Combat_status" title="Combat status">out of combat</a>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Innate:',
            raw: "Rengar generates 1 Ferocity upon casting a basic ability or using  Savagery's first attack",
            values: 1,
            units: 'total_ad',
            unitsText:
              "generates 1 Ferocity upon casting a basic ability or using  Savagery's first attack",
            pre: "Rengar generates 1 Ferocity upon casting a basic ability or using  Savagery's first attack",
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'At 4 Ferocity, his next basic ability consumes them all to become empowered with an additional effect and grant him an additional cast along with  30 / 40 / 50% (based on level) bonus movement speed for 1.5 seconds',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'bonus movement speed for 1.5 seconds',
            pre: 'At 4 Ferocity, his next basic ability consumes them all to become empowered with an additional effect and grant him an additional cast along with  30 / 40 / 50%',
            post: 'bonus movement speed for 1.5 seconds',
          },
          {
            effectType: 'Unique',
            name: 'Line 3:',
            raw: 'Reaching 4 Ferocity with  Savagery or  Bola Strike locks them from use for 0.1 seconds before and after casting',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              '4 Ferocity with  Savagery or  Bola Strike locks them from use for 0.1 seconds before and after casting',
            pre: 'Reaching 4 Ferocity with  Savagery or  Bola Strike locks them from use for 0.1 seconds before and after casting',
          },
          {
            effectType: 'Unique',
            name: 'Line 4:',
            raw: 'All Ferocity is lost after 10 seconds of being out of combat.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'Ferocity is lost after 10 seconds of being out of combat.',
            pre: 'All Ferocity is lost after 10 seconds of being out of combat.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'Innate: While in  brush, Rengar gains Unseen Predator.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> While in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Brush"><a href="/wiki/Brush" title="Brush"><img alt="Brushmaker.png" src="/wiki/images/Ivern_Brushmaker.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Brush" title="Brush">brush</a></span>, <b>Rengar</b> gains <i>Unseen Predator</i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Unseen_Predator.png',
        description:
          "Unseen Predator: Rengar's basic attacks have massively increased range and cause him to  leap to the target's location, attacking the target upon arrival and landing closer than his normal  melee range. This generates 1 Ferocity if Rengar had 0 Ferocity at one point. Unseen Predator lingers for 0.35 seconds upon exiting brush but is lost immediately if Rengar casts  Flash or  Hexflash to do so.Rengar can cast any of his abilities during the dash.",
        descriptionHTML:
          '<span class="template_sbc"><b>Unseen Predator:</b></span> <b>Rengar\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> have massively increased range and cause him to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leap</a></span> to the target\'s location, attacking the target upon arrival and landing closer than his normal <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Melee"><a href="/wiki/Melee" title="Melee"><img alt="Melee role.png" src="/wiki/images/Melee_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Melee" class="mw-redirect" title="Melee">melee</a></span> range. This generates <span style="color: #E34D4C; white-space:normal">1 Ferocity</span> if <b>Rengar</b> had <span style="color: #E34D4C; white-space:normal">0 Ferocity</span> at one point. <i>Unseen Predator</i> lingers for 0.<small>35</small> seconds upon exiting brush but is lost immediately if <b>Rengar</b> casts <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> or <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span> to do so.<br><br><i><b>Rengar</b> can cast any of his abilities during the dash.</i>',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'This generates 1 Ferocity if Rengar had 0 Ferocity at one point',
            damagetype: 'None',
            values: 1,
            units: 'total_ad',
            unitsText:
              'generates 1 Ferocity if Rengar had 0 Ferocity at one point',
            pre: 'This generates 1 Ferocity if Rengar had 0 Ferocity at one point',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Bonetooth_Necklace.png',
        description:
          "Innate - Bonetooth Necklace: Scoring a  takedown against an enemy  champion within 3 seconds of damaging them grants Rengar a Trophy, once per unique champion and up to 5. An additional Trophy is made available through the event The Hunt is On! with the  Head of Kha'Zix. Trophies grant  bonus attack damage equal to 1% − 36% (based on  Trophies) bonus AD.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Bonetooth Necklace:</b></span> Scoring a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> within 3 seconds of damaging them grants <b>Rengar</b> a <i>Trophy</i>, once per unique champion and up to 5. An additional <i>Trophy</i> is made available through the event <i><a href="/wiki/The_Hunt_is_On!" class="mw-redirect" title="The Hunt is On!">The Hunt is On!</a></i> with the <img alt="Head of Kha\'Zix.png" src="/wiki/images/Kha%27Zix_Unseen_Threat.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <i>Head of Kha\'Zix</i>. <i>Trophies</i> grant <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span> equal to <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="[[File:Bonetooth Necklace Green.png|20px|border|adjustsize|link=]] Trophies" data-displayformula="(Number of Trophies) * (Number of Trophies)" data-bot_values="1;4;9;16;25;36" data-top_values="1;2;3;4;5;Head of Kha\'Zix" data-bot_key="%">1% − 36% (based on <img alt="adjustsize" src="/wiki/images/Rengar_Bonetooth_Necklace_Green.png" decoding="async" loading="lazy" title="adjustsize" width="20" height="20" class="thumbborder lazyload"> Trophies)</span> <b>bonus</b> AD</span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate - Bonetooth Necklace:',
            raw: 'Scoring a  takedown against an enemy  champion within 3 seconds of damaging them grants Rengar a Trophy, once per unique champion and up to 5',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'a  takedown against an enemy  champion within 3 seconds of damaging them grants Rengar a Trophy, once per unique champion and up to 5',
            pre: 'Scoring a  takedown against an enemy  champion within 3 seconds of damaging them grants Rengar a Trophy, once per unique champion and up to 5',
          },
          {
            effectType: 'Gain',
            name: 'Line 3:',
            raw: 'Trophies grant  bonus attack damage equal to 1% − 36% (based on  Trophies) bonus AD.',
            increasedStat: 'bonus_ad',
            values: 1,
            valuesIsPercent: true,
            basedOn: ' Trophies',
            units: '',
            unitsText: 'bonus AD.',
            pre: 'Trophies grant  bonus attack damage equal to 1% − 36%',
            post: 'bonus AD.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes:
      '* <b>Rengar</b> will not leap to targets already in his normal <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> range.\n<ul><li>While <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span>, <b>Rengar</b> loses the enhanced <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;attack range</span> from <i>Unseen Predator</i>.</li>\n<li><b>Rengar</b> will only leap to a target if his basic attack timer has been refreshed (if not so he will not automatically attempt to path towards his target, despite them being within leap range).</li>\n<li>Only <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> and <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span> instantly end <i>Unseen Predator</i>. Other effects (i.e <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span>) will still cause the buff to linger upon leaving <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Brush"><a href="/wiki/Brush" title="Brush"><img alt="Brushmaker.png" src="/wiki/images/Ivern_Brushmaker.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Brush" title="Brush">brush</a></span>.</li>\n<li><b>Rengar</b> can freely use any <a href="/wiki/Champion_ability" title="Champion ability">abilities</a>, <a href="/wiki/Summoner_spell" title="Summoner spell">summoner spells</a>, or <a href="/wiki/Active_ability_items" title="Active ability items">item actives</a> while leaping.\n<ul><li>Using a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blink</a></span> ability will interrupt the leap.</li></ul></li>\n<li>The leap\'s attack will have no effect if the target dies or becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rengar" data-ability="Savagery" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rengar/LoL#Savagery" title="Savagery\'s"><img alt="Savagery\'s" src="/wiki/images/Rengar_Savagery.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rengar/LoL#Savagery" title="Rengar/LoL">Savagery\'s</a></span></span> empowered attack will always be consumed.</li>\n<li>The attack from the leap will:\n<ul><li><i>Not</i> go off if the dash was interrupted.</li>\n<li>Go off at the end of the dash even if its normal destination is obstructed by boundaries he cannot cross (e.g. terrain, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Camille" data-ability="The Hextech Ultimatum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Camille/LoL#The_Hextech_Ultimatum" title="The Hextech Ultimatum"><img alt="The Hextech Ultimatum" src="/wiki/images/Camille_The_Hextech_Ultimatum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Camille/LoL#The_Hextech_Ultimatum" title="Camille/LoL">The Hextech Ultimatum</a></span></span>).</li>\n<li>Go off regardless of distance the enemy travels away from <b>Rengar\'s</b> original location.</li>\n<li>Go off even if <b>Rengar</b> loses <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the target.</li></ul></li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Rapid Firecannon" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rapid_Firecannon" title="Rapid Firecannon\'s"><img alt="Rapid Firecannon\'s" src="/wiki/images/Rapid_Firecannon_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rapid_Firecannon" title="Rapid Firecannon">Rapid Firecannon\'s</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rengar" data-ability="Savagery" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rengar/LoL#Savagery" title="Savagery\'s"><img alt="Savagery\'s" src="/wiki/images/Rengar_Savagery.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rengar/LoL#Savagery" title="Rengar/LoL">Savagery\'s</a></span></span> <b>bonus</b> ranges are lost after 0.<small>25</small> seconds upon gaining <i>Unseen Predator</i>, and are re-gained after 0.<small>25</small> seconds upon losing <i>Unseen Predator</i>.</li>\n<li><b>Rengar</b> has a resource bar that indicates how much <span style="color: #E34D4C; white-space:normal">Ferocity</span> he currently has.</li>\n<li><i>Bonetooth Necklace</i> uses different icons corresponding to the number of stacks acquired:\n<ul><li><span class="template_sbc"><b>1 Stack:</b></span> <img alt="Bonetooth Necklace Green.png" src="/wiki/images/Rengar_Bonetooth_Necklace_Green.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></li>\n<li><span class="template_sbc"><b>2 Stacks:</b></span> <img alt="Bonetooth Necklace Green 2.png" src="/wiki/images/Rengar_Bonetooth_Necklace_Green_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></li>\n<li><span class="template_sbc"><b>3 Stacks:</b></span> <img alt="Bonetooth Necklace Green 3.png" src="/wiki/images/Rengar_Bonetooth_Necklace_Green_3.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></li>\n<li><span class="template_sbc"><b>4 Stacks:</b></span> <img alt="Bonetooth Necklace Green 4.png" src="/wiki/images/Rengar_Bonetooth_Necklace_Green_4.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></li>\n<li><span class="template_sbc"><b>5 Stacks:</b></span> <img alt="Bonetooth Necklace Green 5.png" src="/wiki/images/Rengar_Bonetooth_Necklace_Green_5.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></li>\n<li><span class="template_sbc"><b>6th Stack:</b></span> <img alt="Head of Kha\'Zix.png" src="/wiki/images/Kha%27Zix_Unseen_Threat.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <b>Head of Kha\'Zix</b></li></ul></li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Rengar_Original_Passive_BonetoothStack3_0.ogg   "Spoils of the hunt!"',
  },
  Savagery: {
    name: 'Savagery',
    display_name: 'Savagery',
    champion: 'Rengar',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'RengarQ.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 384,
      y: 96,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect.">6 / 5.<small>5</small> / 5 / 4.<small>5</small> / 4</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rengar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rengar/LoL" title="Rengar"><img alt="Rengar" src="/wiki/images/Rengar_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rengar/LoL" title="Rengar/LoL">Rengar</a></span></span> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for his next two basic attacks. His next basic attack deals <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> and will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>, dealing increased damage based on his <span style="white-space:nowrap"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike chance icon.png" src="/wiki/images/Critical_strike_chance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #E56013; white-space:normal">critical strike chance</span></span>.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rengar" data-ability="Savagery 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rengar/LoL#Savagery_2" title="Ferocity"><img alt="Ferocity" src="/wiki/images/Rengar_Savagery_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rengar/LoL#Savagery_2" title="Rengar/LoL">Ferocity</a></span></span> Bonus:</b></span> <i>Savagery\'s</i> damage is modified and <b>Rengar</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for a few seconds.',
    ],
    description: [
      {
        icon: '/wiki/images/Savagery.png',
        description:
          'Active: Rengar empowers his next two basic attacks within 3 seconds to gain  40% bonus attack speed. His first attack has an  uncancellable windup, gains  25 bonus range, and deals bonus physical damage, reduced by 40% against structures. This attack will  critically strike, though is not affected by critical strike damage, and its damage is increased by 0% − 66% (based on critical strike chance).',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Rengar</b> empowers his next two basic attacks within 3 seconds to gain <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">40% <b>bonus</b> attack speed</span></span>. <br><br>His first attack has an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>, gains <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;25 <b>bonus</b> range</span>, and deals <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>, reduced by 40% against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>. This attack will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>, though is not affected by <span style="color: #944B00; white-space:normal">critical strike damage</span>, and its damage is increased by <span style="color: #E56013; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="critical strike chance" data-displayformula="0.66% per 1% critical strike chance" data-bot_values="0;6.6;13.2;19.8;26.4;33;39.6;46.2;52.8;59.4;66" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 66% (based on critical strike chance)</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Rengar empowers his next two basic attacks within 3 seconds to gain  40% bonus attack speed',
            increasedStat: 'bonus_ad',
            values: 3,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'bonus attack speedempowers his next two basic attacks within 3 seconds to gain  40',
            pre: 'Rengar empowers his next two basic attacks within 3 seconds to gain  40% bonus attack speed',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'His first attack has an  uncancellable windup, gains  25 bonus range, and deals bonus physical damage, reduced by 40% against structures',
            increasedStat: 'bonus_ad',
            values: 2,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'against structuresfirst attack has an  uncancellable windup, gains  25 bonus range, and deals bonus physical damage, reduced by 40',
            pre: 'His first attack has an  uncancellable windup, gains  25 bonus range, and deals bonus physical damage, reduced by 40% against structures',
          },
        ],
        leveling: [
          {
            name: 'Bonus Physical Damage:',
            values: '30 / 60 / 90 / 120 / 150 (+ 0 / 5 / 10 / 15 / 20% AD)',
            valuesHTML:
              '30 / 60 / 90 / 120 / 150 <span style="color:orange; white-space:normal">(+&nbsp;0 / 5 / 10 / 15 / 20% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Physical Damage:',
            raw: '30 / 60 / 90 / 120 / 150 (+ 0 / 5 / 10 / 15 / 20% AD)',
            damagetype: 'Physical',
            values: [30, 60, 90, 120, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 60 / 90 / 120 / 150',
            children: [
              {
                values: [0, 5, 10, 15, 20],
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 0 / 5 / 10 / 15 / 20% AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Savagery_2.png',
        description:
          "Ferocity Bonus: Savagery's damage is modified. Rengar gains 50% − 101% (based on level) bonus attack speed for 5 seconds.",
        descriptionHTML:
          '<span class="template_sbc"><b>Ferocity Bonus:</b></span> <i>Savagery\'s</i> damage is modified. <b>Rengar</b> gains <span style="color:orangered; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="50;" data-finish="101;" data-bot_values="50;53;56;59;62;65;68;71;74;77;80;83;86;89;92;95;98;101" data-top_values="" data-bot_key="%">50% − 101% (based on level)</span> <b>bonus</b> attack speed</span> for 5 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'Rengar gains 50% − 101% (based on level) bonus attack speed for 5 seconds.',
            increasedStat: 'bonus_ad',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            units: '',
            unitsText: 'bonus attack speed for 5 seconds.',
            pre: 'Rengar gains 50% − 101%',
            post: 'bonus attack speed for 5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Empowered Bonus Damage:',
            values: '30 − 235 (based on level) (+ 40% AD)',
            valuesHTML:
              '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="15 + 15 per level until level 8, then + 10 per level" data-bot_values="30;45;60;75;90;105;120;135;145;155;165;175;185;195;205;215;225;235" data-top_values="">30 − 235 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;40% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Empowered Bonus Damage:',
            raw: '30 − 235 (based on level) (+ 40% AD)',
            damagetype: 'None',
            values: [
              30, 42.06, 54.12, 66.18, 78.24, 90.29, 102.35, 114.41, 126.47,
              138.53, 150.59, 162.65, 174.71, 186.76, 198.82, 210.88, 222.94,
              235,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 − 235',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 40% AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description: "Savagery  resets Rengar's basic attack timer.",
        descriptionHTML:
          '<i>Savagery <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Rengar\'s</b> basic attack timer.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    damagetype: 'Physical',
    spelleffects: 'Basic',
    spellshield: true,
    notes:
      '* With <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="Infinity Edge"><img alt="Infinity Edge" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">Infinity Edge</a></span></span>, <i>Savagery\'s</i> damage amplifier is increased to <span style="color: #E56013; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="critical strike chance" data-displayformula="0.99% per 1% critical strike chance" data-bot_values="59.4;69.3;79.2;89.1;99" data-top_values="60;70;80;90;100" data-bot_key="%" data-top_key="%">59.<small>4</small>% − 99% (based on critical strike chance)</span></span>.\n<ul><li><i>Savagery\'s</i> empowered attack is not consumed by <a href="/wiki/Jungle_plants" title="Jungle plants">jungle plants</a>.</li>\n<li>The enhanced attack applies other <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects as well as <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> as normal (the bonus damage cannot).</li></ul>',
  },
  'Battle Roar': {
    name: 'Battle Roar',
    display_name: 'Battle Roar',
    champion: 'Rengar',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'RengarW.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 432,
      y: 96,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 450',
    cast_time: 'none',
    cooldown: '16 / 14.<small>5</small> / 13 / 11.<small>5</small> / 10',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rengar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rengar/LoL" title="Rengar"><img alt="Rengar" src="/wiki/images/Rengar_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rengar/LoL" title="Rengar/LoL">Rengar</a></span></span> stores <a href="/wiki/Health#Grey_health" title="Health">grey health</a> equal to a portion of damage taken within a brief moment.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Rengar</b> roars, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and consuming his <a href="/wiki/Health#Grey_health" title="Health">grey health</a> to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> himself.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rengar" data-ability="Battle Roar 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rengar/LoL#Battle_Roar_2" title="Ferocity"><img alt="Ferocity" src="/wiki/images/Rengar_Battle_Roar_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rengar/LoL#Battle_Roar_2" title="Rengar/LoL">Ferocity</a></span></span> Bonus:</b></span> <i>Battle Roar\'s</i> damage is modified. <b>Rengar</b> also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleanses</a></span> from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span>.',
    ],
    description: [
      {
        description:
          'Passive: Rengar stores 50% of the post-mitigation damage he has taken in the last 1.5 seconds as grey health on his health bar, increased to 100% of damage taken from  monsters.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Rengar</b> stores 50% of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after modifiers">post-mitigation damage</span> he has taken in the last 1.<small>5</small> seconds as <a href="/wiki/Health#Grey_health" title="Health">grey health</a> on his <a href="/wiki/Health_bar" title="Health bar">health bar</a>, increased to 100% of damage taken from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Passive:',
            raw: 'Rengar stores 50% of the post-mitigation damage he has taken in the last 1.5 seconds as grey health on his health bar, increased to 100% of damage taken from  monsters.',
            healType: 'BonusHealth',
            values: 5,
            valuesIsPercent: true,
            units: 'maximum_hp',
            unitsText:
              'of the post-mitigation damage he has taken in the last 1.5 seconds as grey health on his health bar, increased to 100stores 50',
            pre: 'Rengar stores 50% of the post-mitigation damage he has taken in the last 1.5 seconds as grey health on his health bar, increased to 100% of damage taken from  monsters.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Battle_Roar.png',
        description:
          'Active: Rengar roars, dealing magic damage to nearby enemies and 65 − 130 (based on level) bonus magic damage to  monsters, and consuming his grey health to  heal for the same amount.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Rengar</b> roars, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="65;" data-finish="130;" data-bot_values="65;68.82;72.65;76.47;80.29;84.12;87.94;91.76;95.59;99.41;103.24;107.06;110.88;114.71;118.53;122.35;126.18;130" data-top_values="">65 − 130 (based on level)</span> <b>bonus</b> magic damage</span> to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, and consuming his <a href="/wiki/Health#Grey_health" title="Health">grey health</a> to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> for the same amount.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Active:',
            raw: 'Rengar roars, dealing magic damage to nearby enemies and 65 − 130 (based on level) bonus magic damage to  monsters, and consuming his grey health to  heal for the same amount.',
            healType: 'BonusHealth',
            values: [
              65, 68.82, 72.65, 76.47, 80.29, 84.12, 87.94, 91.76, 95.59, 99.41,
              103.24, 107.06, 110.88, 114.71, 118.53, 122.35, 126.18, 130,
            ],
            basedOn: 'level',
            units: 'bonus_hp',
            unitsText:
              'bonus magic damage to  monsters, and consuming his grey health to  heal for the same amount.',
            pre: 'Rengar roars, dealing magic damage to nearby enemies and 65 − 130',
            post: 'bonus magic damage to  monsters, and consuming his grey health to  heal for the same amount.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '50 / 80 / 110 / 140 / 170 (+ 80% AP)',
            valuesHTML:
              '50 / 80 / 110 / 140 / 170 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;80% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '50 / 80 / 110 / 140 / 170 (+ 80% AP)',
            damagetype: 'Magic',
            values: [50, 80, 110, 140, 170],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 80 / 110 / 140 / 170',
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
        ],
      },
      {
        icon: '/wiki/images/Battle_Roar_2.png',
        description:
          "Ferocity Bonus: Battle Roar's damage is modified. Rengar  cleanses himself from all  crowd control.",
        descriptionHTML:
          '<span class="template_sbc"><b>Ferocity Bonus:</b></span> <i>Battle Roar\'s</i> damage is modified. <b>Rengar</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleanses</a></span> himself from all <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Empowered Damage:',
            values: '50 − 220 (based on level) (+ 80% AP)',
            valuesHTML:
              '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="50;" data-finish="220;" data-bot_values="50;60;70;80;90;100;110;120;130;140;150;160;170;180;190;200;210;220" data-top_values="">50 − 220 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;80% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Empowered Damage:',
            raw: '50 − 220 (based on level) (+ 80% AP)',
            damagetype: 'None',
            values: [
              50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180,
              190, 200, 210, 220,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 − 220',
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
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Self / Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes:
      '* <i>Grey health</i> will not be consumed upon casting <i>Battle Roar</i> despite visually appearing so. It will only ever expire after its duration ends.',
  },
  'Bola Strike': {
    name: 'Bola Strike',
    display_name: 'Bola Strike',
    champion: 'Rengar',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'RengarE.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 0,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '1000',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 140',
    speed: '1500',
    cast_time:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="While not leaping">0.<small>25</small></span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="While leaping with Unseen Predator">None</span>',
    cooldown: '10',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rengar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rengar/LoL" title="Rengar"><img alt="Rengar" src="/wiki/images/Rengar_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rengar/LoL" title="Rengar/LoL">Rengar</a></span></span> throws a bola in the target direction that deals  <span style="color: #FF8C34; white-space:normal">physical damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> the first enemy hit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> them for a short time.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rengar" data-ability="Bola Strike 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rengar/LoL#Bola_Strike_2" title="Ferocity"><img alt="Ferocity" src="/wiki/images/Rengar_Bola_Strike_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rengar/LoL#Bola_Strike_2" title="Rengar/LoL">Ferocity</a></span></span> Bonus:</b></span> <i>Bola Strike\'s</i> damage is modified. The target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span> instead of <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Bola_Strike.png',
        description:
          'Active: Rengar throws a bola in the target direction that deals physical damage to the first enemy hit and  slows them for 1.75 seconds, as well as  revealing them for 2 seconds and granting  sight of a 150-unit radius around them for the same duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Rengar</b> throws a bola in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for 1.<small>75</small> seconds, as well as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> them for 2 seconds and granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of a 150-unit radius around them for the same duration.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Rengar throws a bola in the target direction that deals physical damage to the first enemy hit and  slows them for 1.75 seconds, as well as  revealing them for 2 seconds and granting  sight of a 150-unit radius around them for the same duration.',
            increasedStat: 'total_ad',
            values: 1,
            user: 'target',
            units: '',
            unitsText:
              'throws a bola in the target direction that deals physical damage to the first enemy hit and  slows them for 1.75 seconds, as well as  revealing them for 2 seconds and granting  sight of a 150-unit radius around them for the same duration.',
            pre: 'Rengar throws a bola in the target direction that deals physical damage to the first enemy hit and  slows them for 1.75 seconds, as well as  revealing them for 2 seconds and granting  sight of a 150-unit radius around them for the same duration.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '55 / 100 / 145 / 190 / 235 (+ 80% bonus AD)',
            valuesHTML:
              '55 / 100 / 145 / 190 / 235 <span style="color:orange; white-space:normal">(+&nbsp;80% <b>bonus</b> AD)</span>',
          },
          {
            name: 'Slow:',
            values: '30 / 45 / 60 / 75 / 90%',
            valuesHTML: '30 / 45 / 60 / 75 / 90%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '55 / 100 / 145 / 190 / 235 (+ 80% bonus AD)',
            damagetype: 'Physical',
            values: [55, 100, 145, 190, 235],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 100 / 145 / 190 / 235',
            children: [
              {
                values: 80,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 80% bonus AD',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '30 / 45 / 60 / 75 / 90%',
            values: [30, 45, 60, 75, 90],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 45 / 60 / 75 / 90%',
          },
        ],
      },
      {
        icon: '/wiki/images/Bola_Strike_2.png',
        description:
          "Ferocity Bonus: Bola Strike's damage is modified. The target is  rooted instead of  slowed.",
        descriptionHTML:
          '<span class="template_sbc"><b>Ferocity Bonus:</b></span> <i>Bola Strike\'s</i> damage is modified. The target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span> instead of <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Empowered Damage:',
            values: '50 − 305 (based on level) (+ 80% bonus AD)',
            valuesHTML:
              '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="50;" data-finish="305;" data-bot_values="50;65;80;95;110;125;140;155;170;185;200;215;230;245;260;275;290;305" data-top_values="">50 − 305 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;80% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Empowered Damage:',
            raw: '50 − 305 (based on level) (+ 80% bonus AD)',
            damagetype: 'None',
            values: [
              50, 65, 80, 95, 110, 125, 140, 155, 170, 185, 200, 215, 230, 245,
              260, 275, 290, 305,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 − 305',
            children: [
              {
                values: 80,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 80% bonus AD',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'spell',
    spellshield: true,
    projectile: 'True',
    notes:
      '* If <b>Rengar</b> casts <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rengar" data-ability="Savagery" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rengar/LoL#Savagery" title="Savagery"><img alt="Savagery" src="/wiki/images/Rengar_Savagery.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rengar/LoL#Savagery" title="Rengar/LoL">Savagery</a></span></span> and/or <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rengar" data-ability="Battle Roar" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rengar/LoL#Battle_Roar" title="Battle Roar"><img alt="Battle Roar" src="/wiki/images/Rengar_Battle_Roar.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rengar/LoL#Battle_Roar" title="Rengar/LoL">Battle Roar</a></span></span> during <i>Bola Strike\'s</i> cast time, he will buffer them and cast them when <i>Bola Strike</i> completes.\n<ul><li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Rengar_Original_E_5.ogg   "Easy prey."',
  },
  'Thrill of the Hunt': {
    name: 'Thrill of the Hunt',
    display_name: 'Thrill of the Hunt',
    champion: 'Rengar',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'RengarR.png',
      sprite: 'spell10.png',
      group: 'spell',
      x: 48,
      y: 144,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Rengar\'s reveal range">2500 / 2750 / 3000 / 3250 / 3500</span>',
    cast_time: 'none',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">110 / 105 / 100 / 95 / 90</span>',
    customlabel: 'Detection Radius',
    custominfo: '710',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rengar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rengar/LoL" title="Rengar"><img alt="Rengar" src="/wiki/images/Rengar_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rengar/LoL" title="Rengar/LoL">Rengar</a></span></span> also gains <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rengar" data-ability="Unseen Predator" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rengar/LoL#Unseen_Predator" title="Unseen Predator"><img alt="Unseen Predator" src="/wiki/images/Rengar_Unseen_Predator.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rengar/LoL#Unseen_Predator" title="Rengar/LoL">Unseen Predator</a></span></span></i> while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Camouflage"><a href="/wiki/Stealth#Camouflage" title="Stealth#Camouflage"><img alt="Ambush 2.png" src="/wiki/images/Twitch_Ambush_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Camouflage" title="Stealth">camouflaged</a></span>.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Rengar</b> prowls for some time, gaining <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>. After a short delay, he also becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Camouflage"><a href="/wiki/Stealth#Camouflage" title="Stealth#Camouflage"><img alt="Ambush 2.png" src="/wiki/images/Twitch_Ambush_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Camouflage" title="Stealth">camouflaged</a></span>.',
      'During this time, <b>Rengar</b> will detect the nearest enemy champion in range, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> them for the remaining full duration. As he approaches, he will <a href="https://static.wikia.nocookie.net/leagueoflegends/images/b/b1/Thrill_of_the_Hunt_2.png/revision/latest?cb=20200427070131" class="image"><img alt="Thrill of the Hunt 2.png" src="/wiki/images/Thrill_of_the_Hunt_2.png" decoding="async" loading="lazy" width="24" height="24" class="lazyload"></a> mark the nearest detected enemy.\n<p><br><br><b>Rengar\'s</b> next basic attack will deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>, then <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">reduce the target\'s armor</span></span> for a few seconds.\n</p>',
    ],
    description: [
      {
        description:
          'Passive: Rengar also gains  Unseen Predator while  camouflaged from any source.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Rengar</b> also gains <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rengar" data-ability="Unseen Predator" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rengar/LoL#Unseen_Predator" title="Unseen Predator"><img alt="Unseen Predator" src="/wiki/images/Rengar_Unseen_Predator.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rengar/LoL#Unseen_Predator" title="Rengar/LoL">Unseen Predator</a></span></span></i> while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Camouflage"><a href="/wiki/Stealth#Camouflage" title="Stealth#Camouflage"><img alt="Ambush 2.png" src="/wiki/images/Twitch_Ambush_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Camouflage" title="Stealth">camouflaged</a></span> from any source.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Thrill_of_the_Hunt.png',
        description:
          'Active: Rengar prowls for a duration, gaining  bonus movement speed. After a 2-second delay, he also becomes  camouflaged.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Rengar</b> prowls for a duration, gaining <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>. After a 2-second delay, he also becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Camouflage"><a href="/wiki/Stealth#Camouflage" title="Stealth#Camouflage"><img alt="Ambush 2.png" src="/wiki/images/Twitch_Ambush_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Camouflage" title="Stealth">camouflaged</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'After a 2-second delay, he also becomes  camouflaged.',
            values: 2,
            user: 'none',
            units: '',
            unitsText: 'a 2-second delay, he also becomes  camouflaged.',
            pre: 'After a 2-second delay, he also becomes  camouflaged.',
          },
        ],
        leveling: [
          {
            name: 'Duration:',
            values: '12 / 14 / 16 / 18 / 20',
            valuesHTML: '12 / 14 / 16 / 18 / 20',
          },
          {
            name: 'Bonus Movement Speed:',
            values: '40 / 50 / 60%',
            valuesHTML: '40 / 50 / 60%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Duration:',
            raw: '12 / 14 / 16 / 18 / 20',
            values: [12, 14, 16, 18, 20],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '12 / 14 / 16 / 18 / 20',
          },
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '40 / 50 / 60%',
            values: [40, 50, 60],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 50 / 60%',
          },
        ],
      },
      {
        icon: '/wiki/images/Thrill_of_the_Hunt_3.png',
        description:
          'During this time, Rengar will detect the nearest enemy champion in range,  revealing and gaining  sight of a 100-unit radius around them. Enemies detected are  revealed for the remaining full duration.',
        descriptionHTML:
          'During this time, <b>Rengar</b> will detect the nearest enemy champion in range, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> and gaining <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of a 100-unit radius around them. Enemies detected are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span> for the remaining full duration.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'During this time, Rengar will detect the nearest enemy champion in range,  revealing and gaining  sight of a 100-unit radius around them',
            increasedStat: 'total_ad',
            values: 1,
            units: '',
            unitsText:
              'this time, Rengar will detect the nearest enemy champion in range,  revealing and gaining  sight of a 100-unit radius around them',
            pre: 'During this time, Rengar will detect the nearest enemy champion in range,  revealing and gaining  sight of a 100-unit radius around them',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Thrill_of_the_Hunt_2.png',
        description:
          "The nearest detected enemy within 1600 range is also marked, alerting all of their allies within 1200 range about Rengar's presence.",
        descriptionHTML:
          "The nearest detected enemy within 1600 range is also marked, alerting all of their allies within 1200 range about <b>Rengar's</b> presence.",
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: "The nearest detected enemy within 1600 range is also marked, alerting all of their allies within 1200 range about Rengar's presence.",
            values: 1,
            units: 'kindredMarks',
            unitsText:
              "nearest detected enemy within 1600 range is also marked, alerting all of their allies within 1200 range about Rengar's presence.",
            pre: "The nearest detected enemy within 1600 range is also marked, alerting all of their allies within 1200 range about Rengar's presence.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Rengar's next basic attack within normal attack range against any enemy or with Unseen Predator to the marked enemy deals 50% AD bonus physical damage and inflicts  armor reduction for 4 seconds.",
        descriptionHTML:
          '<b>Rengar\'s</b> next basic attack within <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="125 range">normal attack range</span> against any enemy or with <i>Unseen Predator</i> to the marked enemy deals <span style="color:orange; white-space:normal">50% AD</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> and inflicts <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor reduction</span></span> for 4 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: "Rengar's next basic attack within normal attack range against any enemy or with Unseen Predator to the marked enemy deals 50% AD bonus physical damage and inflicts  armor reduction for 4 seconds.",
            increasedStat: 'kindredMarks',
            values: 5,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'AD bonus physical damage and inflicts  armor reduction for 4 seconds.next basic attack within normal attack range against any enemy or with Unseen Predator to the marked enemy deals 50',
            pre: "Rengar's next basic attack within normal attack range against any enemy or with Unseen Predator to the marked enemy deals 50% AD bonus physical damage and inflicts  armor reduction for 4 seconds.",
          },
        ],
        leveling: [
          {
            name: 'Armor Reduction:',
            values: '12 / 15 / 18 / 21 / 24',
            valuesHTML: '12 / 15 / 18 / 21 / 24',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Armor Reduction:',
            raw: '12 / 15 / 18 / 21 / 24',
            values: [12, 15, 18, 21, 24],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '12 / 15 / 18 / 21 / 24',
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Proc',
    spellshield: false,
    notes:
      '* <i>Thrill of the Hunt\'s</i> duration starts on-cast.\n<ul><li>The armor reduction applies <i>after</i> the attack.</li>\n<li>The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">true sight</a></span> reveal on the target stays until the leap finishes.</li>\n<li><b>Rengar</b> discerns a distinct <a href="https://static.wikia.nocookie.net/leagueoflegends/images/0/02/Thrill_of_the_Hunt_3.png/revision/latest?cb=20200427070132" class="image"><img alt="Thrill of the Hunt 3.png" src="/wiki/images/Thrill_of_the_Hunt_3.png" decoding="async" loading="lazy" width="24" height="24" class="lazyload"></a> <i>heart beat</i> instead of the usual <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">true sight</a></span> indicator. This indicator will be removed when out of range, but the target will remain revealed.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Rengar_Original_R_Heartbeat_SFX.ogg   Detection alert. https://leagueoflegends.fandom.com/wiki/File:Rengar_Original_R_SecondaryTarget_Alert.ogg   Presence alert.',
  },
} satisfies { [skillName in string]: SkillData };
