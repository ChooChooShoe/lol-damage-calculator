import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Gnar';

export default {
  'Rage Gene': {
    name: 'Rage Gene',
    display_name: 'Rage Gene',
    champion: 'Gnar',
    skill: 'I',
    image: {
      full: 'Gnar_Passive.png',
      sprite: 'passive1.png',
      group: 'passive',
      x: 288,
      y: 0,
      w: 48,
      h: 48,
    },
    blurb: [
      '<b>Gnar</b> generates <i>Rage</i> while fighting. At maximum <i>Rage</i>, his next ability will be <i><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Mega Gnar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mega_Gnar/LoL" title="Mega Gnar\'s"><img alt="Mega Gnar\'s" src="/wiki/images/Gnar_OriginalSquare_Mega.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mega_Gnar/LoL" class="mw-redirect" title="Mega Gnar/LoL">Mega Gnar\'s</a></span></span></i> as he transforms, losing <i>Mini Gnar\'s</i> passive effects in exchange for increased stats and new abilities.',
      '<i>Mega Gnar</i> form lasts for some time before reverting to <i>Mini Gnar</i>, afterwards he cannot generate <i>Rage</i> for some time.',
    ],
    description: [
      {
        icon: '/wiki/images/Rage Gene.png',
        description:
          "Innate - Rage Gene:  Mini Gnar generates 4 / 7 / 11 (based on level)  Rage over 2 seconds upon dealing or receiving damage. Against non-champions, basic attacks and  Boomerang Throw instantly generate「 0.5 / 0.875 / 1.375 (based on level) Rage. 」「 12.5% of the amount. 」 Against champions,  Boomerang Throw instantly generates「 1 / 1.75 / 2.75 (based on level) Rage, 」「 25% of the amount, 」and basic attacks instantly generate「 2 / 3.5 / 5.5 (based on level). 」「 50% of the amount. 」 Boomerang Throw can only generate Rage once per cast, and grants Rage based on the first enemy hit. Gnar's Rage decays after being out of combat for 13 seconds.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Rage Gene:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL" title="Mini Gnar"><img alt="Mini Gnar" src="/wiki/images/Gnar_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gnar/LoL" title="Gnar/LoL">Mini Gnar</a></span></span> generates <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="4;7;11" data-top_values="1;6;11">4 / 7 / 11 (based on level)</span> <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-ability="Rage Gene" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL#Rage_Gene" title="Rage"><img alt="Rage" src="/wiki/images/Gnar_Rage_Gene.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gnar/LoL#Rage_Gene" title="Gnar/LoL">Rage</a></span></span></i> over 2 seconds upon dealing or receiving damage. Against non-champions, <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-ability="Boomerang Throw" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL#Boomerang_Throw" title="Boomerang Throw"><img alt="Boomerang Throw" src="/wiki/images/Gnar_Boomerang_Throw.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gnar/LoL#Boomerang_Throw" title="Gnar/LoL">Boomerang Throw</a></span></span></i> instantly generate<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="0.5;0.875;1.375" data-top_values="1;6;11">0.<small>5</small> / 0.<small>875</small> / 1.<small>375</small> (based on level)</span> <i>Rage</i>.&nbsp;」</span><span class="flipText2">「&nbsp;12.<small>5</small>% of the amount.&nbsp;」</span></span> Against champions, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-ability="Boomerang Throw" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL#Boomerang_Throw" title="Boomerang Throw"><img alt="Boomerang Throw" src="/wiki/images/Gnar_Boomerang_Throw.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gnar/LoL#Boomerang_Throw" title="Gnar/LoL">Boomerang Throw</a></span></span></i> instantly generates<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="1;1.75;2.75" data-top_values="1;6;11">1 / 1.<small>75</small> / 2.<small>75</small> (based on level)</span> <i>Rage</i>,&nbsp;」</span><span class="flipText2">「&nbsp;25% of the amount,&nbsp;」</span></span>and basic attacks instantly generate<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="2;3.5;5.5" data-top_values="1;6;11">2 / 3.<small>5</small> / 5.<small>5</small> (based on level)</span>.&nbsp;」</span><span class="flipText2">「&nbsp;50% of the amount.&nbsp;」</span></span><i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-ability="Boomerang Throw" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL#Boomerang_Throw" title="Boomerang Throw"><img alt="Boomerang Throw" src="/wiki/images/Gnar_Boomerang_Throw.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gnar/LoL#Boomerang_Throw" title="Gnar/LoL">Boomerang Throw</a></span></span></i> can only generate <i>Rage</i> once per cast, and grants <i>Rage</i> based on the first enemy hit. <b>Gnar\'s</b> <i>Rage</i> decays after being <a href="/wiki/Combat_status" title="Combat status">out of combat</a> for 13 seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Innate - Rage Gene:',
            raw: '  Mini Gnar generates 4 / 7 / 11 (based on level)  Rage over 2 seconds upon dealing or receiving damage',
            damagetype: 'None',
            values: [],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'Rage over 2 seconds upon dealing or receiving damage',
            pre: 'Mini Gnar generates 4 / 7 / 11',
            post: 'Rage over 2 seconds upon dealing or receiving damage',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'Against non-champions, basic attacks and  Boomerang Throw instantly generate「 0.5 / 0.875 / 1.375 (based on level) Rage. 」「 12.5% of the amount. 」 Against champions,  Boomerang Throw instantly generates「 1 / 1.75 / 2.75 (based on level) Rage, 」「 25% of the amount, 」and basic attacks instantly generate「 2 / 3.5 / 5.5 (based on level). 」「 50% of the amount. 」 Boomerang Throw can only generate Rage once per cast, and grants Rage based on the first enemy hit',
            values: [],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText:
              'Rage. 」「 12.5% of the amount. 」 Against champions,  Boomerang Throw instantly generates「 1 / 1.75 / 2.75',
            pre: 'Against non-champions, basic attacks and  Boomerang Throw instantly generate「 0.5 / 0.875 / 1.375',
            post: 'Rage. 」「 12.5% of the amount. 」 Against champions,  Boomerang Throw instantly generates「 1 / 1.75 / 2.75',
          },
          {
            effectType: 'Unique',
            name: 'Line 3:',
            raw: "Gnar's Rage decays after being out of combat for 13 seconds.",
            values: 1,
            user: 'none',
            units: '',
            unitsText: 'Rage decays after being out of combat for 13 seconds.',
            pre: "Gnar's Rage decays after being out of combat for 13 seconds.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Rage Gene 2.png',
        description:
          "At maximum Rage, Gnar's abilities are switched to  Mega Gnar's abilities for 4 seconds. Casting one of Mega Gnar's abilities will cause him to transform into  Mega Gnar, else he will transform automatically after the 4 seconds have elapsed.",
        descriptionHTML:
          'At maximum <i>Rage</i>, <b>Gnar\'s</b> abilities are switched to <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Mega Gnar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mega_Gnar/LoL" title="Mega Gnar\'s"><img alt="Mega Gnar\'s" src="/wiki/images/Gnar_OriginalSquare_Mega.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mega_Gnar/LoL" class="mw-redirect" title="Mega Gnar/LoL">Mega Gnar\'s</a></span></span> abilities for 4 seconds. Casting one of <b>Mega Gnar\'s</b> abilities will cause him to transform into <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Mega Gnar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mega_Gnar/LoL" title="Mega Gnar"><img alt="Mega Gnar" src="/wiki/images/Gnar_OriginalSquare_Mega.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mega_Gnar/LoL" class="mw-redirect" title="Mega Gnar/LoL">Mega Gnar</a></span></span>, else he will transform automatically after the 4 seconds have elapsed.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: "At maximum Rage, Gnar's abilities are switched to  Mega Gnar's abilities for 4 seconds",
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              "maximum Rage, Gnar's abilities are switched to  Mega Gnar's abilities for 4 seconds",
            pre: "At maximum Rage, Gnar's abilities are switched to  Mega Gnar's abilities for 4 seconds",
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: "Casting one of Mega Gnar's abilities will cause him to transform into  Mega Gnar, else he will transform automatically after the 4 seconds have elapsed.",
            damagetype: 'None',
            values: 4,
            units: 'total_ap',
            unitsText:
              "one of Mega Gnar's abilities will cause him to transform into  Mega Gnar, else he will transform automatically after the 4 seconds have elapsed.",
            pre: "Casting one of Mega Gnar's abilities will cause him to transform into  Mega Gnar, else he will transform automatically after the 4 seconds have elapsed.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Gnar's  Mega form lasts for 15 seconds, with his Rage bar depleting as an indication of remaining time. Rage cannot be generated while in this form. Afterwards, Gnar returns to  Mini Gnar, retaining his  current percentage health and becoming too  tired to generate Rage for 15 seconds.",
        descriptionHTML:
          '<b>Gnar\'s</b> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Mega Gnar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mega_Gnar/LoL" title="Mega"><img alt="Mega" src="/wiki/images/Gnar_OriginalSquare_Mega.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mega_Gnar/LoL" class="mw-redirect" title="Mega Gnar/LoL">Mega</a></span></span> form lasts for 15 seconds, with his <i>Rage</i> bar depleting as an indication of remaining time. <i>Rage cannot be generated while in this form.</i> Afterwards, <b>Gnar</b> returns to <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL" title="Mini Gnar"><img alt="Mini Gnar" src="/wiki/images/Gnar_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gnar/LoL" title="Gnar/LoL">Mini Gnar</a></span></span>, retaining his <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><b>current</b> percentage health</span></span> and becoming too <a href="https://static.wikia.nocookie.net/leagueoflegends/images/f/f9/Gnar_Rage_Gene_4.png/revision/latest?cb=20170215215644" class="image"><img alt="Rage Gene 4.png" src="/wiki/images/Gnar_Rage_Gene_4.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <i>tired</i> to generate <i>Rage</i> for 15 seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: "Gnar's  Mega form lasts for 15 seconds, with his Rage bar depleting as an indication of remaining time",
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'Mega form lasts for 15 seconds, with his Rage bar depleting as an indication of remaining time',
            pre: "Gnar's  Mega form lasts for 15 seconds, with his Rage bar depleting as an indication of remaining time",
          },
          {
            effectType: 'Heal',
            name: 'Line 3:',
            raw: 'Afterwards, Gnar returns to  Mini Gnar, retaining his  current percentage health and becoming too  tired to generate Rage for 15 seconds.',
            healType: 'BonusHealth',
            values: 1,
            units: 'current_hp',
            unitsText:
              'Gnar returns to  Mini Gnar, retaining his  current percentage health and becoming too  tired to generate Rage for 15 seconds.',
            pre: 'Afterwards, Gnar returns to  Mini Gnar, retaining his  current percentage health and becoming too  tired to generate Rage for 15 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Gnar gains different stat bonuses based on whether he is in  Mini or  Mega form. Both of Gnar's forms share their ability cooldowns.",
        descriptionHTML:
          '<b>Gnar</b> gains different stat bonuses based on whether he is in <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-ability="Mini Gnar" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL#Mini_Gnar" title="Mini"><img alt="Mini" src="/wiki/images/Gnar_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gnar/LoL#Mini_Gnar" title="Gnar/LoL">Mini</a></span></span></i> or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-ability="Mega Gnar" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL#Mega_Gnar" title="Mega"><img alt="Mega" src="/wiki/images/Gnar_Rage_Gene_3.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gnar/LoL#Mega_Gnar" title="Gnar/LoL">Mega</a></span></span></i> form. Both of <b>Gnar\'s</b> forms share their ability cooldowns.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes:
      '* The <i>Rage</i> generated upon dealing or receiving damage occurs over 2 seconds with 4 ticks every 0.<small>5</small> seconds. It also does not stack but instead refreshes with subsequent applications (of dealing or receiving damage).\n<ul><li>The bonus rage generation on basic attacks counts as an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effect, and is triggered by <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane"><img alt="Runaan\'s Hurricane" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">Runaan\'s Hurricane</a></span></span> and <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Guinsoo\'s Rageblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Guinsoo%27s_Rageblade" title="Guinsoo\'s Rageblade"><img alt="Guinsoo\'s Rageblade" src="/wiki/images/Guinsoo%27s_Rageblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Guinsoo%27s_Rageblade" title="Guinsoo\'s Rageblade">Guinsoo\'s Rageblade</a></span></span>.</li>\n<li>In-game, the value on the <i>Rage</i> bar always displays rounded down to the nearest integer.</li>\n<li><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Mega Gnar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mega_Gnar/LoL" title="Mega Gnar\'s"><img alt="Mega Gnar\'s" src="/wiki/images/Gnar_OriginalSquare_Mega.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mega_Gnar/LoL" class="mw-redirect" title="Mega Gnar/LoL">Mega Gnar\'s</a></span></span> gained health is not affected by <a href="/wiki/Healing" title="Healing">healing</a> modifiers such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Grievous wounds"><a href="/wiki/Grievous_Wounds" title="Grievous Wounds"><img alt="Grievous Wounds icon.png" src="/wiki/images/Grievous_Wounds_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Grievous_Wounds" title="Grievous Wounds">Grievous Wounds</a></span> and those from <a href="/wiki/Item" class="mw-redirect" title="Item">items</a> and <a href="/wiki/Rune" class="mw-redirect" title="Rune">runes</a>.</li>\n<li>When returning to <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL" title="Mini Gnar"><img alt="Mini Gnar" src="/wiki/images/Gnar_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gnar/LoL" title="Gnar/LoL">Mini Gnar</a></span></span>, <b>Gnar</b> will only retain his current health percentage, not current health total.\n<ul><li>This is intentional to prevent <b>Gnar</b> from simply triggering <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-ability="Rage Gene 3" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL#Rage_Gene_3" title="Rage Gene"><img alt="Rage Gene" src="/wiki/images/Gnar_Rage_Gene_3.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gnar/LoL#Rage_Gene_3" title="Gnar/LoL">Rage Gene</a></span></span> in order to heal himself over time.</li></ul></li>\n<li><b>Gnar\'s</b> abilities share <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldowns</span> across forms.</li>\n<li>The final stats, after <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-ability="Rage Gene 3" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL#Rage_Gene_3" title="Rage Gene"><img alt="Rage Gene" src="/wiki/images/Gnar_Rage_Gene_3.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gnar/LoL#Rage_Gene_3" title="Gnar/LoL">Rage Gene</a></span></span> being applied, can be seen on <b>Mini Gnar\'s</b> and <b>Mega Gnar\'s</b> respective data template, in the <a href="/wiki/Gnar" title="Gnar">front page</a>.\n<ul><li><b>Mini Gnar</b> gains <span style="color:orangered; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-displayformula="5.5 base +&nbsp;5.5 growth" data-bot_values="5.5;9.46;13.61;17.96;22.5;27.23;32.15;37.26;42.57;48.07;53.76;59.65;65.72;72;78.46;85.11;91.96;99" data-top_values="" data-bot_key="%">5.<small>5</small>% − 99% (based on level)</span></span> <span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span>.</li></ul></li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Gnar_Original_Transform_2.ogg   "GNAR!"',
  },
  'Boomerang Throw': {
    name: 'Boomerang Throw',
    display_name: 'Boomerang Throw',
    champion: 'Gnar',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'GnarQ.png',
      sprite: 'spell4.png',
      group: 'spell',
      x: 0,
      y: 0,
      w: 48,
      h: 48,
    },
    range: '1125 /  3000',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Outgoing missile">110</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Return missile">150</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Outgoing missile, acceleration -3000">2500 - 1400</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Return missile, acceleration 800">60 - 2600</span>',
    cast_time: '0.<small>25</small>',
    cooldown: '20 / 17.<small>5</small> / 15 / 12.<small>5</small> / 10',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL" title="Mini Gnar"><img alt="Mini Gnar" src="/wiki/images/Gnar_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gnar/LoL" title="Gnar/LoL">Mini Gnar</a></span></span> throws a boomerang in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> enemies hit. At maximum range or hitting an enemy, the boomerang flies back toward <b>Gnar</b> based on his current movement, dealing reduced damage.',
      '<b>Gnar</b> can catch the boomerang, which <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduces</span> the cooldown.',
    ],
    description: [
      {
        icon: '/wiki/images/Boomerang Throw.png',
        description:
          'Active: Gnar throws a boomerang in a line in the target direction that deals physical damage to enemies in its path and  slows them for 2 seconds. After reaching its maximum range or hitting an enemy, the boomerang flies back toward Gnar based on his current movement, dealing 50% damage to subsequent targets.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Gnar</b> throws a boomerang in a line in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies in its path and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for 2 seconds. <br><br>After reaching its maximum range or hitting an enemy, the boomerang flies back toward <b>Gnar</b> based on his current movement, dealing 50% damage to subsequent targets.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Gnar throws a boomerang in a line in the target direction that deals physical damage to enemies in its path and  slows them for 2 seconds',
            damagetype: 'Physical',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'throws a boomerang in a line in the target direction that deals physical damage to enemies in its path and  slows them for 2 seconds',
            pre: 'Gnar throws a boomerang in a line in the target direction that deals physical damage to enemies in its path and  slows them for 2 seconds',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'After reaching its maximum range or hitting an enemy, the boomerang flies back toward Gnar based on his current movement, dealing 50% damage to subsequent targets.',
            damagetype: 'None',
            values: 5,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'damage to subsequent targets.reaching its maximum range or hitting an enemy, the boomerang flies back toward Gnar based on his current movement, dealing 50',
            pre: 'After reaching its maximum range or hitting an enemy, the boomerang flies back toward Gnar based on his current movement, dealing 50% damage to subsequent targets.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '5 / 45 / 85 / 125 / 165 (+ 115% AD)',
            valuesHTML:
              '5 / 45 / 85 / 125 / 165 <span style="color:orange; white-space:normal">(+&nbsp;115% AD)</span>',
          },
          {
            name: 'Slow:',
            values: '15 / 20 / 25 / 30 / 35%',
            valuesHTML: '15 / 20 / 25 / 30 / 35%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '5 / 45 / 85 / 125 / 165 (+ 115% AD)',
            damagetype: 'Physical',
            values: [5, 45, 85, 125, 165],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '5 / 45 / 85 / 125 / 165',
            children: [
              {
                values: 115,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 115% AD',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Slow:',
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
        description:
          "Catching the boomerang while it is returning back refunds 40% of the ability's  total cooldown.",
        descriptionHTML:
          'Catching the boomerang while it is returning back refunds 40% of the ability\'s <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>total</b> cooldown</span>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: "Catching the boomerang while it is returning back refunds 40% of the ability's  total cooldown.",
            values: 4,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              "of the ability's  total cooldown.the boomerang while it is returning back refunds 40",
            pre: "Catching the boomerang while it is returning back refunds 40% of the ability's  total cooldown.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description: 'Enemies can be hit only once per pass.',
        descriptionHTML: '<i>Enemies can be hit only once per pass.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Area of effect',
    spellshield: true,
    projectile: 'True',
    notes:
      '* The boomerang return direction is determined at the apex of its flight by <b>Gnar\'s</b> current position and which direction <b>Gnar</b> is heading at the time.\n<ul><li>Since the cooldown between the two is shared, <i>Mini Gnar</i> may pick up a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="refunding 70% of the maximum cooldown time of \'\'Boomerang Throw\'\'">boulder</span> and/or <i>Mega Gnar</i> may catch a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="refunding 40% of the maximum cooldown time of \'\'Boulder Toss\'\'">boomerang</span>.</li>\n<li>This ability will cast from wherever the caster is at the start of the cast time.</li></ul>',
  },
  'Boulder Toss': {
    name: 'Boulder Toss',
    display_name: 'Boulder Toss',
    champion: 'Gnar',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'GnarQ.png',
      sprite: 'spell4.png',
      group: 'spell',
      x: 0,
      y: 0,
      w: 48,
      h: 48,
    },
    range: '1150',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 250',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Missile width">180</span>',
    speed: '2100',
    cast_time: '0.<small>5</small>',
    cooldown: '20 / 17.<small>5</small> / 15 / 12.<small>5</small> / 10',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Mega Gnar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mega_Gnar/LoL" title="Mega Gnar"><img alt="Mega Gnar" src="/wiki/images/Gnar_OriginalSquare_Mega.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mega_Gnar/LoL" class="mw-redirect" title="Mega Gnar/LoL">Mega Gnar</a></span></span> throws a boulder in the target direction that stops upon the first enemy hit, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them.',
      '<b>Mega Gnar</b> can retrieve the boulder, which <span style="white-space:nowrap"><a href="/wiki/Ability_haste" title="Ability haste"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduces</span> the cooldown.',
    ],
    description: [
      {
        icon: '/wiki/images/Boulder Toss.png',
        description:
          'Active: Gnar throws a boulder in the target direction that stops upon hitting an enemy, dealing physical damage to nearby enemies upon impact and  slowing them for 2 seconds. The boulder then remains on the ground for 6 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Gnar</b> throws a boulder in the target direction that stops upon hitting an enemy, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies upon impact and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them for 2 seconds. The boulder then remains on the ground for 6 seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Gnar throws a boulder in the target direction that stops upon hitting an enemy, dealing physical damage to nearby enemies upon impact and  slowing them for 2 seconds',
            damagetype: 'Physical',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'throws a boulder in the target direction that stops upon hitting an enemy, dealing physical damage to nearby enemies upon impact and  slowing them for 2 seconds',
            pre: 'Gnar throws a boulder in the target direction that stops upon hitting an enemy, dealing physical damage to nearby enemies upon impact and  slowing them for 2 seconds',
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'The boulder then remains on the ground for 6 seconds.',
            values: 6,
            user: 'none',
            units: '',
            unitsText: 'boulder then remains on the ground for 6 seconds.',
            pre: 'The boulder then remains on the ground for 6 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '25 / 70 / 115 / 160 / 205 (+ 140% AD)',
            valuesHTML:
              '25 / 70 / 115 / 160 / 205 <span style="color:orange; white-space:normal">(+&nbsp;140% AD)</span>',
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
            name: 'Physical Damage:',
            raw: '25 / 70 / 115 / 160 / 205 (+ 140% AD)',
            damagetype: 'Physical',
            values: [25, 70, 115, 160, 205],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 70 / 115 / 160 / 205',
            children: [
              {
                values: 140,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 140% AD',
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
        description:
          "After 0.3 seconds, Gnar can pick up the boulder by moving within 90 units of it, refunding 70% of the ability's  total cooldown.",
        descriptionHTML:
          'After 0.<small>3</small> seconds, <b>Gnar</b> can pick up the boulder by moving within 90 units of it, refunding 70% of the ability\'s <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>total</b> cooldown</span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Area of effect',
    spellshield: true,
    projectile: 'True',
    notes:
      '* Since the cooldown between the two is shared <i>Mini Gnar</i> may pick up a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="refunding 70% of the maximum cooldown time of \'\'Boomerang Throw\'\'">boulder</span> and/or <i>Mega Gnar</i> may catch a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="refunding 40% of the maximum cooldown time of \'\'Boulder Toss\'\'">boomerang</span>.\n<ul><li>The <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-ability="Boulder Toss" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL#Boulder_Toss" title="Boulder"><img alt="Boulder" src="/wiki/images/Gnar_Boulder_Toss.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gnar/LoL#Boulder_Toss" title="Gnar/LoL">Boulder</a></span></span> will still drop to the ground if colliding with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Wind Wall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Wind Wall"><img alt="Wind Wall" src="/wiki/images/Yasuo_Wind_Wall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Yasuo/LoL">Wind Wall</a></span></span> or <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-ability="Unbreakable" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL#Unbreakable" title="Unbreakable"><img alt="Unbreakable" src="/wiki/images/Braum_Unbreakable.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL#Unbreakable" title="Braum/LoL">Unbreakable</a></span></span>.</li>\n<li>This ability will cast from wherever the caster is at the start of the cast time.</li></ul>',
  },
  Hyper: {
    name: 'Hyper',
    display_name: 'Hyper',
    champion: 'Gnar',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'GnarW.png',
      sprite: 'spell4.png',
      group: 'spell',
      x: 48,
      y: 0,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL" title="Mini Gnar\'s"><img alt="Mini Gnar\'s" src="/wiki/images/Gnar_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gnar/LoL" title="Gnar/LoL">Mini Gnar\'s</a></span></span> basic attacks and damaging abilities apply stacks. The third stack deals <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> based on the <span style="color: #1F995C; white-space:normal">target\'s <b>maximum</b> health</span>, and grants a burst of <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">movement speed</span></span> to <b>Gnar</b>.',
      '<b>Gnar</b> will gain the <span style="color: #F5EE99; white-space:normal">movement speed</span> upon <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-ability="Rage Gene" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL#Rage_Gene" title="transforming"><img alt="transforming" src="/wiki/images/Gnar_Rage_Gene.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gnar/LoL#Rage_Gene" title="Gnar/LoL">transforming</a></span></span> back to <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL" title="Mini Gnar"><img alt="Mini Gnar" src="/wiki/images/Gnar_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gnar/LoL" title="Gnar/LoL">Mini Gnar</a></span></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Hyper 2.png',
        description:
          "Passive: Gnar's basic attacks  on-hit and ability hits apply a stack of Hyper to enemies for 3.5 seconds, refreshing on subsequent applications and stacking up to 3 times.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Gnar\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <a href="/wiki/Champion_ability" title="Champion ability">ability</a> hits apply a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Hyper</i> to enemies for 3.<small>5</small> seconds, refreshing on subsequent applications and stacking up to 3 times.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Passive:',
            raw: " Gnar's basic attacks  on-hit and ability hits apply a stack of Hyper to enemies for 3.5 seconds, refreshing on subsequent applications and stacking up to 3 times.",
            min: 0,
            max: 10,
            description:
              " Gnar's basic attacks  on-hit and ability hits apply a stack of Hyper to enemies for 3.5 seconds, refreshing on subsequent applications and stacking up to 3 times.",
            values: 3,
            units: 'total_ap',
            unitsText:
              'basic attacks  on-hit and ability hits apply a stack of Hyper to enemies for 3.5 seconds, refreshing on subsequent applications and stacking up to 3 times.',
            pre: "Gnar's basic attacks  on-hit and ability hits apply a stack of Hyper to enemies for 3.5 seconds, refreshing on subsequent applications and stacking up to 3 times.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Hyper.png',
        description:
          "The third stack against a target consumes them all to deal bonus magic damage, capped at 300 against  monsters, and grant Gnar 20 / 40 / 60 / 80% (based on  GNAR!'s rank)  bonus movement speed that decays over 3 seconds.",
        descriptionHTML:
          'The third stack against a target consumes them all to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>, capped at 300 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, and grant <b>Gnar</b> <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#F5EE99;" data-top_label="[[File:GNAR!.png|20px|border]] GNAR!\'s rank" data-displayformula="20% + 20% per GNAR!\'s rank" data-bot_values="20;40;60;80" data-top_values="0;1;2;3" data-bot_key="%">20 / 40 / 60 / 80% (based on <a href="https://static.wikia.nocookie.net/leagueoflegends/images/3/31/Gnar_GNAR%21.png/revision/latest?cb=20170818002800" class="image"><img alt="GNAR!.png" src="/wiki/images/Gnar_GNAR%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> <i>GNAR!\'s</i> rank)</span> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> that decays over 3 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: "The third stack against a target consumes them all to deal bonus magic damage, capped at 300 against  monsters, and grant Gnar 20 / 40 / 60 / 80% (based on  GNAR!'s rank)  bonus movement speed that decays over 3 seconds.",
            values: [3, 40, 60, 80],
            valuesIsPercent: true,
            basedOn: " GNAR!'s rank",
            user: 'none',
            units: '',
            unitsText: 'bonus movement speed that decays over 3 seconds.',
            pre: 'The third stack against a target consumes them all to deal bonus magic damage, capped at 300 against  monsters, and grant Gnar 20 / 40 / 60 / 80%',
            post: 'bonus movement speed that decays over 3 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Magic Damage:',
            values:
              "0 / 10 / 20 / 30 / 40 (+ 6 / 8 / 10 / 12 / 14% of target's maximum health) (+ 100% AP)",
            valuesHTML:
              '0 / 10 / 20 / 30 / 40 <span style="color: #1F995C; white-space:normal">(+&nbsp;6 / 8 / 10 / 12 / 14% of target\'s <b>maximum</b> health)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;100% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Bonus Magic Damage:',
            raw: "0 / 10 / 20 / 30 / 40 (+ 6 / 8 / 10 / 12 / 14% of target's maximum health) (+ 100% AP)",
            healType: 'OutgoingHeals',
            values: [0, 10, 20, 30, 40],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '0 / 10 / 20 / 30 / 40',
            children: [
              {
                values: [6, 8, 10, 12, 14],
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of target's maximum health",
                pre: "+ 6 / 8 / 10 / 12 / 14% of target's maximum health",
              },
              {
                values: 100,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 100% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          "Gnar gains Hyper's  bonus movement speed when he leaves  Mega form.",
        descriptionHTML:
          '<b>Gnar</b> gains <i>Hyper\'s</i> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> when he leaves <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Mega Gnar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mega_Gnar/LoL" title="Mega"><img alt="Mega" src="/wiki/images/Gnar_OriginalSquare_Mega.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mega_Gnar/LoL" class="mw-redirect" title="Mega Gnar/LoL">Mega</a></span></span> form.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Proc',
    spellshield: false,
    notes:
      "* The bonus movement speed's duration refreshes whenever <b>Gnar</b> would receive it (by hitting a target three times again).",
  },
  Wallop: {
    name: 'Wallop',
    display_name: 'Wallop',
    champion: 'Gnar',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'GnarW.png',
      sprite: 'spell4.png',
      group: 'spell',
      x: 48,
      y: 0,
      w: 48,
      h: 48,
    },
    range: '550',
    width: '200',
    cast_time: '0.<small>6</small>',
    cooldown: '7',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Mega Gnar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mega_Gnar/LoL" title="Mega Gnar"><img alt="Mega Gnar" src="/wiki/images/Gnar_OriginalSquare_Mega.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mega_Gnar/LoL" class="mw-redirect" title="Mega Gnar/LoL">Mega Gnar</a></span></span> slams his arm down in an area toward the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> enemies within.',
    ],
    description: [
      {
        icon: '/wiki/images/Wallop.png',
        description:
          'Active: Gnar slams his arm down in the target direction, dealing physical damage to all enemies struck within the area and  stunning them for 1.25 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Gnar</b> slams his arm down in the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to all enemies struck within the area and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 1.<small>25</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Gnar slams his arm down in the target direction, dealing physical damage to all enemies struck within the area and  stunning them for 1.25 seconds.',
            damagetype: 'Physical',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'slams his arm down in the target direction, dealing physical damage to all enemies struck within the area and  stunning them for 1.25 seconds.',
            pre: 'Gnar slams his arm down in the target direction, dealing physical damage to all enemies struck within the area and  stunning them for 1.25 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '25 / 55 / 85 / 115 / 145 (+ 100% AD)',
            valuesHTML:
              '25 / 55 / 85 / 115 / 145 <span style="color:orange; white-space:normal">(+&nbsp;100% AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '25 / 55 / 85 / 115 / 145 (+ 100% AD)',
            damagetype: 'Physical',
            values: [25, 55, 85, 115, 145],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 55 / 85 / 115 / 145',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 100% AD',
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
    projectile: 'False',
    notes: '* No additional details.',
  },
  Hop: {
    name: 'Hop',
    display_name: 'Hop',
    champion: 'Gnar',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'GnarE.png',
      sprite: 'spell4.png',
      group: 'spell',
      x: 96,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '475',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Bounce-off radius, center-to-edge">150</span>',
    cast_time: 'none',
    cooldown: '22 / 19.<small>5</small> / 17 / 14.<small>5</small> / 12',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL" title="Mini Gnar"><img alt="Mini Gnar" src="/wiki/images/Gnar_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gnar/LoL" title="Gnar/LoL">Mini Gnar</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaps</a></span> to the target location and bounces off of any unit he lands on, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaping</a></span> forth again without a bounce. He also gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for a few seconds.',
      'Bouncing off an enemy will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> them, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> based on the <span style="color: #1F995C; white-space:normal">target\'s <b>maximum</b> health</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Hop.png',
        description:
          'Active: Gnar  leaps to the target location, then gains  bonus attack speed for 6 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Gnar</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaps</a></span> to the target location, then gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for 6 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Gnar  leaps to the target location, then gains  bonus attack speed for 6 seconds.',
            increasedStat: 'total_ap',
            values: 6,
            units: '',
            unitsText:
              'leaps to the target location, then gains  bonus attack speed for 6 seconds.',
            pre: 'Gnar  leaps to the target location, then gains  bonus attack speed for 6 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Attack Speed:',
            values: '40 / 45 / 50 / 55 / 60%',
            valuesHTML: '40 / 45 / 50 / 55 / 60%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '40 / 45 / 50 / 55 / 60%',
            values: [40, 45, 50, 55, 60],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 45 / 50 / 55 / 60%',
          },
        ],
      },
      {
        description:
          'If Gnar lands on a unit he will  bounce 500 units further in the same direction.',
        descriptionHTML:
          'If <b>Gnar</b> lands on a unit he will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">bounce</a></span> 500 units further in the same direction.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'If Gnar lands on a unit he will  bounce 500 units further in the same direction.',
            values: 5,
            user: 'none',
            units: '',
            unitsText:
              'Gnar lands on a unit he will  bounce 500 units further in the same direction.',
            pre: 'If Gnar lands on a unit he will  bounce 500 units further in the same direction.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Landing on an enemy deals them physical damage and  slows them by 80% for 0.5 seconds.',
        descriptionHTML:
          'Landing on an enemy deals them <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 80% for 0.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Landing on an enemy deals them physical damage and  slows them by 80% for 0.5 seconds.',
            damagetype: 'Physical',
            values: 8,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'for 0.5 seconds.on an enemy deals them physical damage and  slows them by 80',
            pre: 'Landing on an enemy deals them physical damage and  slows them by 80% for 0.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '50 / 85 / 120 / 155 / 190 (+ 6% maximum health)',
            valuesHTML:
              '50 / 85 / 120 / 155 / 190 <span style="color: #1F995C; white-space:normal">(+&nbsp;6% <b>maximum</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Physical Damage:',
            raw: '50 / 85 / 120 / 155 / 190 (+ 6% maximum health)',
            healType: 'PhysicalVamp',
            values: [50, 85, 120, 155, 190],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 85 / 120 / 155 / 190',
            children: [
              {
                values: 6,
                valuesIsPercent: true,
                units: 'maximum_hp',
                unitsText: 'maximum health',
                pre: '+ 6% maximum health',
              },
            ],
          },
        ],
      },
      {
        description:
          'Gnar will not bounce if he is  immobilized, excluding from  sleep(bug), during the first leap.',
        descriptionHTML:
          '<b>Gnar</b> will not bounce if he is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span>, excluding from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sleep"><a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control#Sleep"><img alt="Sleep icon.png" src="/wiki/images/Sleep_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control">sleep</a></span><sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup>, during the first leap.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Gnar will not bounce if he is  immobilized, excluding from  sleep(bug), during the first leap.',
            damagetype: 'None',
            values: 0,
            units: 'total_ap',
            unitsText: ', during the first leap.',
            pre: 'Gnar will not bounce if he is  immobilized, excluding from  sleep',
            post: ', during the first leap.',
            children: [
              {
                values: 0,
                user: 'none',
                units: '',
                unitsText: 'bug',
                pre: 'bug',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Boomerang Throw can be cast during the dash. Hop will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-ability="Boomerang Throw" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL#Boomerang_Throw" title="Boomerang Throw"><img alt="Boomerang Throw" src="/wiki/images/Gnar_Boomerang_Throw.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gnar/LoL#Boomerang_Throw" title="Gnar/LoL">Boomerang Throw</a></span></span> can be cast during the dash. Hop will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Single target',
    spellshield: true,
    notes:
      '* <i>Hop</i> does not allow <b>Gnar</b> to bounce off wards.\n<ul><li><i>Hop</i> does not grant <b>bonus</b> attack speed if used to transform.</li>\n<li>If <i>Hop</i> generates <i>Rage</i> to maximum and <b>Gnar</b> bounces off an enemy, he may cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-ability="GNAR!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL#GNAR!" title="GNAR!"><img alt="GNAR!" src="/wiki/images/Gnar_GNAR%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gnar/LoL#GNAR!" title="Gnar/LoL">GNAR!</a></span></span> during the bounce.</li></ul>',
  },
  Crunch: {
    name: 'Crunch',
    display_name: 'Crunch',
    champion: 'Gnar',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'GnarE.png',
      sprite: 'spell4.png',
      group: 'spell',
      x: 96,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '675',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 375',
    inner_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 200',
    cast_time: 'none',
    cooldown: '22 / 19.<small>5</small> / 17 / 14.<small>5</small> / 12',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Mega Gnar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mega_Gnar/LoL" title="Mega Gnar"><img alt="Mega Gnar" src="/wiki/images/Gnar_OriginalSquare_Mega.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mega_Gnar/LoL" class="mw-redirect" title="Mega Gnar/LoL">Mega Gnar</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaps</a></span> to the target location, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> enemies he lands on and dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies based on each <span style="color: #1F995C; white-space:normal">target\'s <b>maximum</b> health</span>.',
      'If <i>Crunch</i> is used to <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-ability="Rage Gene" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL#Rage_Gene" title="transform"><img alt="transform" src="/wiki/images/Gnar_Rage_Gene.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gnar/LoL#Rage_Gene" title="Gnar/LoL">transform</a></span></span>, <i>Gnar</i> will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">bounce</a></span> as per <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-ability="Hop" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL#Hop" title="Hop"><img alt="Hop" src="/wiki/images/Gnar_Hop.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gnar/LoL#Hop" title="Gnar/LoL">Hop</a></span></span></i>.',
    ],
    description: [
      {
        icon: '/wiki/images/Crunch.png',
        description:
          'Active: Gnar  leaps to the target location and deals physical damage to nearby enemies upon impact. After a 0.25-second delay, additional enemies in a larger radius also take the same damage.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Gnar</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaps</a></span> to the target location and deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies upon impact. After a 0.<small>25</small>-second delay, additional enemies in a larger radius also take the same damage.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '80 / 115 / 150 / 185 / 220 (+ 6% maximum health)',
            valuesHTML:
              '80 / 115 / 150 / 185 / 220 <span style="color: #1F995C; white-space:normal">(+&nbsp;6% <b>maximum</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Physical Damage:',
            raw: '80 / 115 / 150 / 185 / 220 (+ 6% maximum health)',
            healType: 'PhysicalVamp',
            values: [80, 115, 150, 185, 220],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 115 / 150 / 185 / 220',
            children: [
              {
                values: 6,
                valuesIsPercent: true,
                units: 'maximum_hp',
                unitsText: 'maximum health',
                pre: '+ 6% maximum health',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/Hop and Crunch.png',
        description:
          "If Crunch is used to transform, Gnar will still be able to  bounce as per  Hop. Crunch's area of effect occurs in both areas, though enemies can only be damaged once.",
        descriptionHTML:
          'If <i>Crunch</i> is used to transform, <b>Gnar</b> will still be able to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">bounce</a></span> as per <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-ability="Hop" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL#Hop" title="Hop"><img alt="Hop" src="/wiki/images/Gnar_Hop.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gnar/LoL#Hop" title="Gnar/LoL">Hop</a></span></span></i>. <i>Crunch\'s</i> area of effect occurs in both areas, though enemies can only be damaged once.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Enemies Gnar lands directly on top of are affected by Hop's  slow.",
        descriptionHTML:
          'Enemies <b>Gnar</b> lands directly on top of are affected by <i>Hop\'s</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description: 'Crunch will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i>Crunch will cast at max range if cast beyond that.</i>',
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
    notes:
      '* <b>Gnar</b> is locked out of using any other abilities during <i>Crunch</i>, but he can still transform mid-air if he reaches 100 <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-ability="Rage Gene" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL#Rage_Gene" title="Rage"><img alt="Rage" src="/wiki/images/Gnar_Rage_Gene.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gnar/LoL#Rage_Gene" title="Gnar/LoL">Rage</a></span></span></i> during the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">jump</a></span> of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-ability="Hop" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL#Hop" title="Hop"><img alt="Hop" src="/wiki/images/Gnar_Hop.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gnar/LoL#Hop" title="Gnar/LoL">Hop</a></span></span>.\n<ul><li><ul><li>If <i>Crunch</i> is cast to transform and <b>Gnar</b> bounces off of an enemy, he may cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-ability="GNAR!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL#GNAR!" title="GNAR!"><img alt="GNAR!" src="/wiki/images/Gnar_GNAR%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gnar/LoL#GNAR!" title="Gnar/LoL">GNAR!</a></span></span> during the bounce.</li></ul></li></ul>',
  },
  'GNAR!': {
    name: 'GNAR!',
    display_name: 'GNAR!',
    champion: 'Gnar',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'GnarR.png',
      sprite: 'spell4.png',
      group: 'spell',
      x: 144,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 475',
    cast_time: '0.<small>25</small>',
    cooldown: '90 / 75 / 60 / 45 / 30',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-ability="Hyper" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL#Hyper" title="Hyper\'s"><img alt="Hyper\'s" src="/wiki/images/Gnar_Hyper.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gnar/LoL#Hyper" title="Gnar/LoL">Hyper\'s</a></span></span> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> is increased.',
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Mega Gnar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mega_Gnar/LoL" title="Mega Gnar"><img alt="Mega Gnar" src="/wiki/images/Gnar_OriginalSquare_Mega.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mega_Gnar/LoL" class="mw-redirect" title="Mega Gnar/LoL">Mega Gnar</a></span></span> throws enemies around him in the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them upon landing.',
      'An enemy that hits terrain is instead <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> and takes increased damage.',
    ],
    description: [
      {
        description:
          "Mini Gnar - Passive:  Hyper's  bonus movement speed is increased.",
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL" title="Mini Gnar"><img alt="Mini Gnar" src="/wiki/images/Gnar_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gnar/LoL" title="Gnar/LoL">Mini Gnar</a></span></span> - Passive:</b></span> <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gnar" data-ability="Hyper" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gnar/LoL#Hyper" title="Hyper\'s"><img alt="Hyper\'s" src="/wiki/images/Gnar_Hyper.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gnar/LoL#Hyper" title="Gnar/LoL">Hyper\'s</a></span></span></i> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> is increased.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Hyper Bonus Movement Speed:',
            values: '40 / 50 / 60 / 70 / 80%',
            valuesHTML: '40 / 50 / 60 / 70 / 80%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Hyper Bonus Movement Speed:',
            raw: '40 / 50 / 60 / 70 / 80%',
            values: [40, 50, 60, 70, 80],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 50 / 60 / 70 / 80%',
          },
        ],
      },
      {
        icon: '/wiki/images/GNAR!.png',
        description:
          'Mega Gnar - Active: Gnar thrusts in the target direction,  knocking away nearby enemies up to 590 units in that direction, though not through terrain, and afterwards dealing them physical damage, as well as  slowing them by 45% after a 0.4-second delay for a duration.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Mega Gnar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mega_Gnar/LoL" title="Mega Gnar"><img alt="Mega Gnar" src="/wiki/images/Gnar_OriginalSquare_Mega.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mega_Gnar/LoL" class="mw-redirect" title="Mega Gnar/LoL">Mega Gnar</a></span></span> - Active:</b></span> <b>Gnar</b> thrusts in the target direction, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking away</a></span> nearby enemies up to 590 units in that direction, though not through terrain, and afterwards dealing them <span style="color: #FF8C34; white-space:normal">physical damage</span>, as well as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 45% after a 0.<small>4</small>-second delay for a duration.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Mega Gnar - Active:',
            raw: ' Gnar thrusts in the target direction,  knocking away nearby enemies up to 590 units in that direction, though not through terrain, and afterwards dealing them physical damage, as well as  slowing them by 45% after a 0.4-second delay for a duration.',
            damagetype: 'Physical',
            values: 5,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'after a 0.4-second delay for a duration.thrusts in the target direction,  knocking away nearby enemies up to 590 units in that direction, though not through terrain, and afterwards dealing them physical damage, as well as  slowing them by 45',
            pre: 'Gnar thrusts in the target direction,  knocking away nearby enemies up to 590 units in that direction, though not through terrain, and afterwards dealing them physical damage, as well as  slowing them by 45% after a 0.4-second delay for a duration.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '200 / 250 / 300 / 350 / 400 (+ 50% bonus AD) (+ 100% AP)',
            valuesHTML:
              '200 / 250 / 300 / 350 / 400 <span style="color:orange; white-space:normal">(+&nbsp;50% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;100% AP)</span>',
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
            name: 'Physical Damage:',
            raw: '200 / 250 / 300 / 350 / 400 (+ 50% bonus AD) (+ 100% AP)',
            damagetype: 'Physical',
            values: [200, 250, 300, 350, 400],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 250 / 300 / 350 / 400',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 50% bonus AD',
              },
              {
                values: 100,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 100% AP',
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
          'Enemies that collide with terrain take  50% increased damage instantly and are  stunned instead of  slowed.',
        descriptionHTML:
          'Enemies that collide with terrain take <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike physical icon.png" src="/wiki/images/Critical_strike_physical_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">50% increased damage</span> instantly and are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> instead of <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Enemies that collide with terrain take  50% increased damage instantly and are  stunned instead of  slowed.',
            damagetype: 'None',
            values: 5,
            valuesIsPercent: true,
            units: 'total_ad',
            unitsText:
              'increased damage instantly and are  stunned instead of  slowed.that collide with terrain take  50',
            pre: 'Enemies that collide with terrain take  50% increased damage instantly and are  stunned instead of  slowed.',
          },
        ],
        leveling: [
          {
            name: 'Increased Damage:',
            values: '300 / 375 / 450 / 525 / 600 (+ 75% bonus AD) (+ 150% AP)',
            valuesHTML:
              '300 / 375 / 450 / 525 / 600 <span style="color:orange; white-space:normal">(+&nbsp;75% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;150% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Increased Damage:',
            raw: '300 / 375 / 450 / 525 / 600 (+ 75% bonus AD) (+ 150% AP)',
            damagetype: 'None',
            values: [300, 375, 450, 525, 600],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '300 / 375 / 450 / 525 / 600',
            children: [
              {
                values: 75,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 75% bonus AD',
              },
              {
                values: 150,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 150% AP',
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
    projectile: 'False',
    notes:
      '* <i>GNAR!</i> can interact with <a href="/wiki/Terrain#Player-Generated" title="Terrain">player-generated terrain</a>.\n<ul><li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Cast time\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All the other item-actives are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death, unless protected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">Resurrection</a></span>\n</li></td></tr></tbody></table>',
  },
} satisfies { [skillName in string]: SkillData };
