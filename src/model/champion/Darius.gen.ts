import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Darius';

export default {
  Hemorrhage: {
    name: 'Hemorrhage',
    display_name: 'Hemorrhage',
    champion: 'Darius',
    skill: 'I',
    image: {
      full: 'Darius_Icon_Hemorrhage.png',
      sprite: 'passive0.png',
      group: 'passive',
      x: 96,
      y: 96,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Darius" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Darius/LoL" title="Darius\'"><img alt="Darius\'" src="/wiki/images/Darius_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Darius/LoL" title="Darius/LoL">Darius\'</a></span></span> basic attacks and damaging abilities apply a stack of <i>Hemorrhage</i>, which stacks up to 5 times. When <b>Darius</b> kills a champion with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Darius" data-ability="Noxian Guillotine" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Darius/LoL#Noxian_Guillotine" title="Noxian Guillotine"><img alt="Noxian Guillotine" src="/wiki/images/Darius_Noxian_Guillotine.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Darius/LoL#Noxian_Guillotine" title="Darius/LoL">Noxian Guillotine</a></span></span></i>, or applies 5 stacks on an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, he becomes empowered with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Darius" data-ability="Hemorrhage 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Darius/LoL#Hemorrhage_2" title="Noxian Might"><img alt="Noxian Might" src="/wiki/images/Darius_Hemorrhage_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Darius/LoL#Hemorrhage_2" title="Darius/LoL">Noxian Might</a></span></span></i> for a few seconds.',
      '<span class="template_sbc"><b>Hemorrhage:</b></span> For each stack, the target is continually dealt <span style="color: #FF8C34; white-space:normal">physical damage</span>. <br><br><span class="template_sbc"><b>Noxian Might:</b></span> <b>Darius</b> gains <span style="color:orange; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;attack damage</span></span> and increases the amount of <i>Hemorrhage</i> he applies to full stacks.',
    ],
    description: [
      {
        description:
          "Innate: Darius'  damaging basic attacks and abilities apply a stack of Hemorrhage to enemies for 5 seconds, refreshing on subsequent applications and stacking up to 5 times.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Darius\' </b> damaging <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> and <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> apply a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Hemorrhage</i> to enemies for 5 seconds, refreshing on subsequent applications and stacking up to 5 times.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Innate:',
            raw: " Darius'  damaging basic attacks and abilities apply a stack of Hemorrhage to enemies for 5 seconds, refreshing on subsequent applications and stacking up to 5 times.",
            min: 0,
            max: 10,
            description:
              " Darius'  damaging basic attacks and abilities apply a stack of Hemorrhage to enemies for 5 seconds, refreshing on subsequent applications and stacking up to 5 times.",
            values: 5,
            units: 'total_ap',
            unitsText:
              'damaging basic attacks and abilities apply a stack of Hemorrhage to enemies for 5 seconds, refreshing on subsequent applications and stacking up to 5 times.',
            pre: "Darius'  damaging basic attacks and abilities apply a stack of Hemorrhage to enemies for 5 seconds, refreshing on subsequent applications and stacking up to 5 times.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Hemorrhage.png',
        description:
          'Hemorrhage: For each stack, the target is dealt「 13 − 30 (based on level) (+ 30% bonus AD) total physical damage over the duration, 」「 3.25 − 7.5 (based on level) (+ 7.5% bonus AD) physical damage every 1.25 seconds over the duration, 」up to a maximum of「 65 − 150 (based on level) (+ 150% bonus AD) total physical damage over the duration. 」「 16.25 − 37.5 (based on level) (+ 37.5% bonus AD) physical damage with each tick. 」Hemorrhage deals 300% damage against  monsters.',
        descriptionHTML:
          '<span class="template_sbc"><b>Hemorrhage:</b></span> For each stack, the target is dealt<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="13;" data-finish="30;" data-bot_values="13;14;15;16;17;18;19;20;21;22;23;24;25;26;27;28;29;30" data-top_values="">13 − 30 (based on level)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;30% <b>bonus</b> AD)</span> <span style="color: #FF8C34; white-space:normal"><b>total</b> physical damage</span> over the duration,&nbsp;」</span><span class="flipText2">「&nbsp;<span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="3.25;" data-finish="7.5;" data-bot_values="3.25;3.5;3.75;4;4.25;4.5;4.75;5;5.25;5.5;5.75;6;6.25;6.5;6.75;7;7.25;7.5" data-top_values="">3.<small>25</small> − 7.<small>5</small> (based on level)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;7.<small>5</small>% <b>bonus</b> AD)</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> every 1.<small>25</small> seconds over the duration,&nbsp;」</span></span>up to a maximum of<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="65;" data-finish="150;" data-bot_values="65;70;75;80;85;90;95;100;105;110;115;120;125;130;135;140;145;150" data-top_values="">65 − 150 (based on level)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;150% <b>bonus</b> AD)</span> <span style="color: #FF8C34; white-space:normal"><b>total</b> physical damage</span> over the duration.&nbsp;」</span><span class="flipText2">「&nbsp;<span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="16.25;" data-finish="37.5;" data-bot_values="16.25;17.5;18.75;20;21.25;22.5;23.75;25;26.25;27.5;28.75;30;31.25;32.5;33.75;35;36.25;37.5" data-top_values="">16.<small>25</small> − 37.<small>5</small> (based on level)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;37.<small>5</small>% <b>bonus</b> AD)</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> with each tick.&nbsp;」</span></span><i>Hemorrhage</i> deals 300% damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Hemorrhage:',
            raw: ' For each stack, the target is dealt「 13 − 30 (based on level) (+ 30% bonus AD) total physical damage over the duration, 」「 3.25 − 7.5 (based on level) (+ 7.5% bonus AD) physical damage every 1.25 seconds over the duration, 」up to a maximum of「 65 − 150 (based on level) (+ 150% bonus AD) total physical damage over the duration. 」「 16.25 − 37.5 (based on level) (+ 37.5% bonus AD) physical damage with each tick. 」Hemorrhage deals 300% damage against  monsters.',
            values: [
              13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
              29, 30,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText:
              'total physical damage over the duration, 」「 3.25 − 7.5',
            pre: 'For each stack, the target is dealt「 13 − 30',
            post: 'total physical damage over the duration, 」「 3.25 − 7.5',
            children: [
              {
                values: 30,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 30% bonus AD',
              },
              {
                values: 7.5,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 7.5% bonus AD',
              },
              {
                values: 150,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 150% bonus AD',
              },
              {
                values: 37.5,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 37.5% bonus AD',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Hemorrhage 3.png',
        description:
          'When Darius kills a champion with  Noxian Guillotine, or applies 5 stacks on an enemy  champion, he becomes empowered with Noxian Might for 5 seconds.',
        descriptionHTML:
          'When <b>Darius</b> kills a champion with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Darius" data-ability="Noxian Guillotine" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Darius/LoL#Noxian_Guillotine" title="Noxian Guillotine"><img alt="Noxian Guillotine" src="/wiki/images/Darius_Noxian_Guillotine.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Darius/LoL#Noxian_Guillotine" title="Darius/LoL">Noxian Guillotine</a></span></span></i>, or applies 5 stacks on an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, he becomes empowered with <i>Noxian Might</i> for 5 seconds.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Line 1:',
            raw: 'When Darius kills a champion with  Noxian Guillotine, or applies 5 stacks on an enemy  champion, he becomes empowered with Noxian Might for 5 seconds.',
            min: 0,
            max: 10,
            description:
              'When Darius kills a champion with  Noxian Guillotine, or applies 5 stacks on an enemy  champion, he becomes empowered with Noxian Might for 5 seconds.',
            values: 5,
            units: 'total_ap',
            unitsText:
              'Darius kills a champion with  Noxian Guillotine, or applies 5 stacks on an enemy  champion, he becomes empowered with Noxian Might for 5 seconds.',
            pre: 'When Darius kills a champion with  Noxian Guillotine, or applies 5 stacks on an enemy  champion, he becomes empowered with Noxian Might for 5 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Hemorrhage 2.png',
        description:
          'Noxian Might: Darius gains 30 − 230 (based on level)  bonus attack damage and instantly applies 5 Hemorrhage stacks through his usual means.',
        descriptionHTML:
          '<span class="template_sbc"><b>Noxian Might:</b></span> <b>Darius</b> gains <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:orange;" data-displayformula="30 + 5 per level until level 10, then + 10 per level until level 13, then + 25 per level" data-bot_values="30;35;40;45;50;55;60;65;70;75;85;95;105;130;155;180;205;230" data-top_values="">30 − 230 (based on level)</span> <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span> and instantly applies 5 <i>Hemorrhage</i> stacks through his usual means.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Noxian Might:',
            raw: ' Darius gains 30 − 230 (based on level)  bonus attack damage and instantly applies 5 Hemorrhage stacks through his usual means.',
            increasedStat: 'total_ap',
            values: [
              30, 41.76, 53.53, 65.29, 77.06, 88.82, 100.59, 112.35, 124.12,
              135.88, 147.65, 159.41, 171.18, 182.94, 194.71, 206.47, 218.24,
              230,
            ],
            basedOn: 'level',
            units: '',
            unitsText:
              'bonus attack damage and instantly applies 5 Hemorrhage stacks through his usual means.',
            pre: 'Darius gains 30 − 230',
            post: 'bonus attack damage and instantly applies 5 Hemorrhage stacks through his usual means.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'default',
    spellshield: 'Special',
    notes:
      '* If Hemorrhage\'s <b>total</b> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after modifiers">post-mitigation</span> damage is higher than the <span style="color: #1F995C; white-space:normal">target\'s <b>current</b> health</span>, a small area of <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> is granted around the target for the duration of Hemorrhage and for another 2 seconds after it ends.\n<ul><li><i>Hemorrhage</i> does not apply to <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a> nor <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Wards"><a href="/wiki/Ward" title="Ward"><img alt="Ward icon.png" src="/wiki/images/Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ward" title="Ward">wards</a></span>.</li>\n<li><b>Darius\'</b> attacks and abilities have to deal damage to apply <i>Hemorrhage</i>.\n<ul><li><i>Hemorrhage</i> cannot be applied to/refreshed against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invulnerable"><a href="/wiki/Invulnerability" title="Invulnerability"><img alt="Cosmic Radiance.png" src="/wiki/images/Taric_Cosmic_Radiance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability" title="Invulnerability">invulnerable</a></span> targets.</li>\n<li><i>Hemorrhage</i> <b>can</b> be applied to and refreshed against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shielded</a></span> targets.</li>\n<li><i>Hemorrhage</i> can also be applied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>, but will specifically not do so if the target is invulnerable.</li></ul></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> prevents <i>Hemorrhage\'s</i> application from abilities only.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Darius_Original_PassiveMax_0.ogg   "Witness true strength."',
    video: 'Darius IVideo.ogv',
  },
  Decimate: {
    name: 'Decimate',
    display_name: 'Decimate',
    champion: 'Darius',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'DariusCleave.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 192,
      y: 96,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Inner Radius">240</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Outer Radius">460</span>',
    cast_time: 'none',
    cost: '30 / 35 / 40 / 45 / 50',
    costtype: 'mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">9 / 8 / 7 / 6 / 5</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Darius" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Darius/LoL" title="Darius"><img alt="Darius" src="/wiki/images/Darius_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Darius/LoL" title="Darius/LoL">Darius</a></span></span> winds up and swings his axe in a wide circle, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit.',
      'Enemies hit by the <i>handle</i> closer to <b>Darius</b> take reduced damage. He will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> based on the number of enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> hit by the <i>blade</i>.',
    ],
    description: [
      {
        icon: '/wiki/images/Decimate.png',
        description:
          'Active: Darius hefts his axe for 0.75 seconds, and then swings it around himself, dealing physical damage to nearby enemies, reduced to 35% against enemies hit by the handle.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Darius</b> hefts his axe for 0.<small>75</small> seconds, and then swings it around himself, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies, reduced to 35% against enemies hit by the <i>handle</i>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical Damage:',
            values:
              '50 / 80 / 110 / 140 / 170 (+ 100 / 110 / 120 / 130 / 140% AD)',
            valuesHTML:
              '50 / 80 / 110 / 140 / 170 <span style="color:orange; white-space:normal">(+&nbsp;100 / 110 / 120 / 130 / 140% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '50 / 80 / 110 / 140 / 170 (+ 100 / 110 / 120 / 130 / 140% AD)',
            damagetype: 'Physical',
            values: [50, 80, 110, 140, 170],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 80 / 110 / 140 / 170',
            children: [
              {
                values: [100, 110, 120, 130, 140],
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 100 / 110 / 120 / 130 / 140% AD',
              },
            ],
          },
        ],
      },
      {
        description:
          "Against champions and large monsters hit, Darius  heals for  13% − 39% (based on enemies hit by the blade) of his missing health. The handle of Darius'  axe will not heal him nor apply nor refresh  Hemorrhage.",
        descriptionHTML:
          'Against champions and large monsters hit, <b>Darius</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> for <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="enemies hit by the blade" data-displayformula="13%*Enemies hit. \'\'This is capped at 3 enemies.\'\'" data-bot_values="13;26;39" data-top_values="1;2;3+" data-bot_key="%">13% − 39% (based on enemies hit by the <i>blade</i>)</span> of his <b>missing</b> health</span></span>. The <i>handle</i> of <b>Darius\' </b> axe will not heal him nor apply nor refresh <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Darius" data-ability="Hemorrhage" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Darius/LoL#Hemorrhage" title="Hemorrhage"><img alt="Hemorrhage" src="/wiki/images/Darius_Hemorrhage.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Darius/LoL#Hemorrhage" title="Darius/LoL">Hemorrhage</a></span></span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: 'Against champions and large monsters hit, Darius  heals for  13% − 39% (based on enemies hit by the blade) of his missing health',
            healType: 'BonusHealth',
            values: 1,
            valuesIsPercent: true,
            basedOn: 'enemies hit by the blade',
            units: 'missing_hp',
            unitsText: 'of his missing health',
            pre: 'Against champions and large monsters hit, Darius  heals for  13% − 39%',
            post: 'of his missing health',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Darius is unable to declare basic attacks or cast  Apprehend or  Noxian Guillotine during Decimate.',
        descriptionHTML:
          '<i><b>Darius</b> is unable to declare basic attacks or cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Darius" data-ability="Apprehend" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Darius/LoL#Apprehend" title="Apprehend"><img alt="Apprehend" src="/wiki/images/Darius_Apprehend.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Darius/LoL#Apprehend" title="Darius/LoL">Apprehend</a></span></span> or <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Darius" data-ability="Noxian Guillotine" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Darius/LoL#Noxian_Guillotine" title="Noxian Guillotine"><img alt="Noxian Guillotine" src="/wiki/images/Darius_Noxian_Guillotine.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Darius/LoL#Noxian_Guillotine" title="Darius/LoL">Noxian Guillotine</a></span></span> during Decimate.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes:
      '* <i>Decimate</i> will cancel if <b>Darius</b> enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stasis (buff)"><a href="/wiki/Invulnerability#Stasis" title="Invulnerability#Stasis"><img alt="Stasis icon.png" src="/wiki/images/Stasis_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability#Stasis" title="Invulnerability">stasis</a></span> or uses <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Dash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mark#Dash" title="Dash"><img alt="Dash" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mark#Dash" title="Mark">Dash</a></span></span> during the delay.\n<ul><li><ul><li>After the delay, <i>Decimate</i> will be placed on a 1-second cooldown.</li></ul></li></ul>',
    video: 'Darius QVideo.ogv',
  },
  'Crippling Strike': {
    name: 'Crippling Strike',
    display_name: 'Crippling Strike',
    champion: 'Darius',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'DariusNoxianTacticsONH.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 240,
      y: 96,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '40',
    costtype: 'mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">5</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Darius" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Darius/LoL" title="Darius\'"><img alt="Darius\'" src="/wiki/images/Darius_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Darius/LoL" title="Darius/LoL">Darius\'</a></span></span> next basic attack deals increased <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> the target.',
      'If this attack kills the target, the cooldown is <span style="white-space:nowrap"><a href="/wiki/Ability_haste" title="Ability haste"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduced</span> and the <span style="color: #0099CC; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;mana cost</span></span> is refunded.',
    ],
    description: [
      {
        icon: '/wiki/images/Crippling Strike.png',
        description:
          'Active: Darius empowers his next basic attack within 4 seconds to have an  uncancellable windup, gain  25 bonus range, deal modified physical damage and  slow the target by 90% for 1 second.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Darius</b> empowers his next basic attack within 4 seconds to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>, gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;25 <b>bonus</b> range</span>, deal <span style="color: #FF8C34; white-space:normal"><b>modified</b> physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> the target by 90% for 1 second.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Darius empowers his next basic attack within 4 seconds to have an  uncancellable windup, gain  25 bonus range, deal modified physical damage and  slow the target by 90% for 1 second.',
            increasedStat: 'bonus_ad',
            values: 4,
            valuesIsPercent: true,
            user: 'target',
            units: '',
            unitsText:
              'for 1 second.empowers his next basic attack within 4 seconds to have an  uncancellable windup, gain  25 bonus range, deal modified physical damage and  slow the target by 90',
            pre: 'Darius empowers his next basic attack within 4 seconds to have an  uncancellable windup, gain  25 bonus range, deal modified physical damage and  slow the target by 90% for 1 second.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '140 / 145 / 150 / 155 / 160% AD',
            valuesHTML:
              '<span style="color:orange; white-space:normal">140 / 145 / 150 / 155 / 160% AD</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '140 / 145 / 150 / 155 / 160% AD',
            damagetype: 'Physical',
            values: [140, 145, 150, 155, 160],
            valuesIsPercent: true,
            units: 'total_ad',
            unitsText: 'AD',
            pre: '140 / 145 / 150 / 155 / 160% AD',
          },
        ],
      },
      {
        description:
          "If this attack kills the target, half of Crippling Strike's  cooldown is reduced and its  mana cost is refunded.",
        descriptionHTML:
          'If this attack kills the target, half of <i>Crippling Strike\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is reduced and its <span style="color: #0099CC; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;mana cost</span></span> is refunded.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Crippling Strike's total damage is affected by  critical strike modifiers.",
        descriptionHTML:
          '<i>Crippling Strike\'s</i> <b>total</b> damage is affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> modifiers.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description: "Crippling Strike  resets Darius'  basic attack timer.",
        descriptionHTML:
          '<i>Crippling Strike <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Darius\' </b> basic attack timer.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies, Structures',
    damagetype: 'Physical',
    spelleffects: 'spell',
    spellshield: 'Special',
    notes:
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will not block the damage.\n<ul><li>The attack\'s animation can be cancelled by casting <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Darius" data-ability="Decimate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Darius/LoL#Decimate" title="Decimate"><img alt="Decimate" src="/wiki/images/Darius_Decimate.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Darius/LoL#Decimate" title="Darius/LoL">Decimate</a></span></span>, but the attack will still land.</li>\n<li><i>Crippling Strike</i> will trigger <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Manaflow Band" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Manaflow_Band_(Rune)" title="Manaflow Band"><img alt="Manaflow Band" src="/wiki/images/Manaflow_Band_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Manaflow_Band_(Rune)" class="mw-redirect" title="Manaflow Band (Rune)">Manaflow Band</a></span></span>, <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Tear of the Goddess" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tear_of_the_Goddess" title="Tear of the Goddess\'"><img alt="Tear of the Goddess\'" src="/wiki/images/Tear_of_the_Goddess_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tear_of_the_Goddess" title="Tear of the Goddess">Tear of the Goddess\'</a></span></span> <a href="/wiki/Named_item_effect#Mana_Charge" title="Named item effect">Mana Charge</a> and <a href="/wiki/Spell_effects" class="mw-redirect" title="Spell effects">spell effects</a>.</li>\n<li>Despite its name, <i>Crippling Strike</i> does not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cripple"><a href="/wiki/Cripple" title="Cripple"><img alt="Cripple icon.png" src="/wiki/images/Cripple_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cripple" class="mw-redirect" title="Cripple">cripple</a></span> <a href="/wiki/V5.16" title="V5.16">anymore</a>.</li>\n<li>If <b>Darius</b> <a href="/wiki/Basic_attacks" class="mw-redirect" title="Basic attacks">basic attacks</a> shortly before the empowered effect runs out, the attack will deal no damage<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul>',
    video: 'Darius WVideo.ogv',
  },
  Apprehend: {
    name: 'Apprehend',
    display_name: 'Apprehend',
    champion: 'Darius',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'DariusAxeGrabCone.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 288,
      y: 96,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 535',
    angle:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 50°',
    cast_time: '0.<small>25</small>',
    cost: '70 / 60 / 50 / 40 / 30',
    costtype: 'mana',
    cooldown: '24 / 21.<small>5</small> / 19 / 16.<small>5</small> / 14',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Darius" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Darius/LoL" title="Darius"><img alt="Darius" src="/wiki/images/Darius_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Darius/LoL" title="Darius/LoL">Darius</a></span></span> gains <span style="color:yellow; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;armor penetration</span></span>.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Darius</b> sweeps in a cone in the target direction, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulling</a></span> enemies hit towards him.',
    ],
    description: [
      {
        description: 'Passive: Darius gains  armor penetration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Darius</b> gains <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor penetration</span></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Armor Penetration:',
            values: '15 / 20 / 25 / 30 / 35%',
            valuesHTML: '15 / 20 / 25 / 30 / 35%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Armor Penetration:',
            raw: '15 / 20 / 25 / 30 / 35%',
            values: [15, 20, 25, 30, 35],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 20 / 25 / 30 / 35%',
          },
        ],
      },
      {
        icon: '/wiki/images/Apprehend.png',
        description:
          'Active: Darius sweeps his axe in a cone in the target direction, granting  sight of the area for 1 second while  pulling enemies hit towards him. Upon arrival, they rebound 150 units off of him, remaining  airborne and becoming  slowed by 40% for 1 second.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Darius</b> sweeps his axe in a cone in the target direction, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area for 1 second while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulling</a></span> enemies hit towards him. Upon arrival, they rebound <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">150</span> units off of him, remaining <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> and becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 40% for 1 second.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Darius sweeps his axe in a cone in the target direction, granting  sight of the area for 1 second while  pulling enemies hit towards him',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'sweeps his axe in a cone in the target direction, granting  sight of the area for 1 second while  pulling enemies hit towards him',
            pre: 'Darius sweeps his axe in a cone in the target direction, granting  sight of the area for 1 second while  pulling enemies hit towards him',
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'Upon arrival, they rebound 150 units off of him, remaining  airborne and becoming  slowed by 40% for 1 second.',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'for 1 second.arrival, they rebound 150 units off of him, remaining  airborne and becoming  slowed by 40',
            pre: 'Upon arrival, they rebound 150 units off of him, remaining  airborne and becoming  slowed by 40% for 1 second.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Darius is unable to move or cast  Decimate or  Noxian Guillotine for 0.4 seconds after Apprehend's cast time.",
        descriptionHTML:
          '<i><b>Darius</b> is unable to move or cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Darius" data-ability="Decimate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Darius/LoL#Decimate" title="Decimate"><img alt="Decimate" src="/wiki/images/Darius_Decimate.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Darius/LoL#Decimate" title="Darius/LoL">Decimate</a></span></span> or <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Darius" data-ability="Noxian Guillotine" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Darius/LoL#Noxian_Guillotine" title="Noxian Guillotine"><img alt="Noxian Guillotine" src="/wiki/images/Darius_Noxian_Guillotine.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Darius/LoL#Noxian_Guillotine" title="Darius/LoL">Noxian Guillotine</a></span></span> for 0.<small>4</small> seconds after Apprehend\'s cast time.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    spellshield: true,
    projectile: 'False',
    notes:
      '* Enemies hit by <i>Apprehend</i> will quickly be dragged to <b>Darius</b> before rebounding over a longer period.\n<ul><li><ul><li>The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> duration starts as soon as the target rebounds off of <b>Darius</b>.</li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: The rebound location is determined when the target reaches <b>Darius\' </b>location.</li>\n<li>The rebound\'s forced movement\'s duration is roughly 0.<small>5</small> seconds, finishing before the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> duration ends.</li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: There is no <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> applied for the same duration of the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span>, meaning <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Brittle"><a href="/wiki/Crowd_control#Increasing_the_duration_of_Crowd_Control" title="Crowd control#Increasing the duration of Crowd Control"><img alt="Brittle icon.png" src="/wiki/images/Brittle_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Increasing_the_duration_of_Crowd_Control" title="Crowd control">brittle</a></span> cannot extend the disable duration. It will not increase the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> duration in most situations because of the negative tenacity falling off before the slow is applied.</li></ul></li>\n<li>After the pull, <b>Darius</b> will attempt to basic attack the closest pulled target, prioritizing enemy champions.</li>\n<li>The armor penetration <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stacks multiplicatively"><a href="/wiki/Stacking#Stacks_multiplicatively" title="Stacking#Stacks multiplicatively"><img alt="Multiple stacking icon.png" src="/wiki/images/Multiple_stacking_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stacking#Stacks_multiplicatively" title="Stacking">stacks multiplicatively</a></span> with other forms of <a href="/wiki/Armor_penetration#Percentage_armor_penetration" title="Armor penetration">percentage armor penetration</a>.</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Cast time\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All the other item-actives are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death, unless protected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">Resurrection</a></span>\n</li></td></tr></tbody></table>',
    video: 'Darius EVideo.ogv',
  },
  'Noxian Guillotine': {
    name: 'Noxian Guillotine',
    display_name: 'Noxian Guillotine',
    champion: 'Darius',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'DariusExecute.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 336,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '475',
    cast_time: '0.<small>3667</small>',
    cost: '100 / 100 / 0',
    costtype: 'mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on-cast">120 / 100 / 80</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Darius" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Darius/LoL" title="Darius"><img alt="Darius" src="/wiki/images/Darius_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Darius/LoL" title="Darius/LoL">Darius</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lunge"><a href="/wiki/Dash#Lunge" title="Dash#Lunge"><img alt="Bear Stance.png" src="/wiki/images/Udyr_Bear_Stance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash#Lunge" title="Dash">leaps</a></span> to an enemy champion and strikes a lethal blow, dealing <span style="color: #F9966B; white-space:normal">true damage</span> based on the amount of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Darius" data-ability="Hemorrhage" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Darius/LoL#Hemorrhage" title="Hemorrhage"><img alt="Hemorrhage" src="/wiki/images/Darius_Hemorrhage.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Darius/LoL#Hemorrhage" title="Darius/LoL">Hemorrhage</a></span></span></i> stacks on the target.',
      'If this attack kills the target, <b>Darius</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fear"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">fears</a></span> and gradually <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, and the cooldown will <span style="white-space:nowrap"><a href="/wiki/Ability_haste" title="Ability haste"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reset</span> for some time before going on cooldown.',
      'At max rank, <i>Noxian Guillotine</i> has no <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana cost</span></span> and recast timer.',
    ],
    description: [
      {
        icon: '/wiki/images/Noxian Guillotine.png',
        description:
          'Active: Darius attempts to execute the target enemy  champion,  leaping towards them to deal  true damage, increased by 0% − 100% (based on  Hemorrhage stacks), and granting  sight of the area around them for 2.5 seconds from the start of the cast time.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Darius</b> attempts to execute the target enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lunge"><a href="/wiki/Dash#Lunge" title="Dash#Lunge"><img alt="Bear Stance.png" src="/wiki/images/Udyr_Bear_Stance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash#Lunge" title="Dash">leaping</a></span> towards them to deal <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal">true damage</span></span>, increased by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="[[File:Hemorrhage.png|20px]] Hemorrhage stacks" data-start="0;0" data-finish="100;5" data-bot_values="0;20;40;60;80;100" data-top_values="0;1;2;3;4;5" data-bot_key="%">0% − 100% (based on <a href="https://static.wikia.nocookie.net/leagueoflegends/images/d/de/Darius_Hemorrhage.png/revision/latest?cb=20191111171216" class="image"><img alt="Hemorrhage.png" src="/wiki/images/Darius_Hemorrhage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Hemorrhage stacks)</span>, and granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area around them for 2.<small>5</small> seconds from the start of the cast time.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'True Damage:',
            values: '125 / 187.5 / 250 / 312.5 / 375 (+ 75% bonus AD)',
            valuesHTML:
              '125 / 187.<small>5</small> / 250 / 312.<small>5</small> / 375 <span style="color:orange; white-space:normal">(+&nbsp;75% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'True Damage:',
            raw: '125 / 187.5 / 250 / 312.5 / 375 (+ 75% bonus AD)',
            damagetype: 'True',
            values: [125, 187.5, 250, 312.5, 375],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '125 / 187.5 / 250 / 312.5 / 375',
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
          'If the target dies within 0.15 seconds after being hit by Noxian Guillotine, Darius  fears nearby  minions and  monsters for 3 seconds, during which they are gradually  slowed by up to 99% over the duration. He can also recast the ability within 20 seconds at no cost, which refreshes on further executions.',
        descriptionHTML:
          'If the target dies within 0.<small>15</small> seconds after being hit by <i>Noxian Guillotine</i>, <b>Darius</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fear"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">fears</a></span> nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> for 3 seconds, during which they are gradually <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by up to 99% over the duration. He can also recast the ability within 20 seconds at no cost, which refreshes on further executions.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'He can also recast the ability within 20 seconds at no cost, which refreshes on further executions.',
            values: 2,
            units: 'total_ap',
            unitsText:
              'can also recast the ability within 20 seconds at no cost, which refreshes on further executions.',
            pre: 'He can also recast the ability within 20 seconds at no cost, which refreshes on further executions.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'At rank 3, Noxian Guillotine has no  mana cost and recast timer.',
        descriptionHTML:
          'At rank 3, <i>Noxian Guillotine</i> has no <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana cost</span></span> and recast timer.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'At rank 3, Noxian Guillotine has no  mana cost and recast timer.',
            values: 3,
            units: 'total_mana',
            unitsText:
              'rank 3, Noxian Guillotine has no  mana cost and recast timer.',
            pre: 'At rank 3, Noxian Guillotine has no  mana cost and recast timer.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Darius is unable to cast  Decimate or  Apprehend for 0.25 seconds after Noxian Guillotine's cast time.",
        descriptionHTML:
          '<i><b>Darius</b> is unable to cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Darius" data-ability="Decimate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Darius/LoL#Decimate" title="Decimate"><img alt="Decimate" src="/wiki/images/Darius_Decimate.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Darius/LoL#Decimate" title="Darius/LoL">Decimate</a></span></span> or <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Darius" data-ability="Apprehend" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Darius/LoL#Apprehend" title="Apprehend"><img alt="Apprehend" src="/wiki/images/Darius_Apprehend.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Darius/LoL#Apprehend" title="Darius/LoL">Apprehend</a></span></span> for 0.<small>25</small> seconds after Noxian Guillotine\'s cast time.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'True',
    spelleffects: 'spell',
    spellshield: true,
    callforhelp: 'True',
    notes:
      '* <i>Noxian Guillotine\'s</i> cooldown after the recast or recast window is calculated by taking the values at the end, and using this formula: (<i>Noxian Guillotine\'s</i> Cooldown - time since first cast)&nbsp;×&nbsp;100&nbsp;÷&nbsp;(100 + <span style="white-space:nowrap"><a href="/wiki/Ability_haste" title="Ability haste"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;AH</span>).\n<ul><li><i>Noxian Guillotine</i> applies <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Darius" data-ability="Hemorrhage" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Darius/LoL#Hemorrhage" title="Hemorrhage"><img alt="Hemorrhage" src="/wiki/images/Darius_Hemorrhage.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Darius/LoL#Hemorrhage" title="Darius/LoL">Hemorrhage</a></span></span> after the damage.</li>\n<li><b>Darius</b> will only leap towards the target if it is at range, or leap backwards if it is very close.\n<ul><li>This leap can pass very thin terrain and will otherwise not be able to. In any case, <b>Darius</b> will still hit the target.</li>\n<li>The ability is disabled while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span> even if <b>Darius</b> is in the range in which he does not leap.</li></ul></li>\n<li><i>Noxian Guillotine</i> will not reset nor trigger <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Darius" data-ability="Hemorrhage 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Darius/LoL#Hemorrhage_2" title="Noxian Might"><img alt="Noxian Might" src="/wiki/images/Darius_Hemorrhage_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Darius/LoL#Hemorrhage_2" title="Darius/LoL">Noxian Might</a></span></span> if used to kill a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clone</a></span> or a target protected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span>.</li>\n<li><i>Noxian Guillotine</i> will reset but not trigger <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Darius" data-ability="Hemorrhage 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Darius/LoL#Hemorrhage_2" title="Noxian Might"><img alt="Noxian Might" src="/wiki/images/Darius_Hemorrhage_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Darius/LoL#Hemorrhage_2" title="Darius/LoL">Noxian Might</a></span></span> if it finishes off a target that is in a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Zombie state"><a href="/wiki/Death#Zombie_states" title="Death#Zombie states"><img alt="Zombie icon.png" src="/wiki/images/Zombie_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Zombie_states" title="Death">zombie state</a></span>.</li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).</li></ul>',
    video: 'Darius RVideo.ogv',
  },
} satisfies { [skillName in string]: SkillData };
