import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Rengar';
const I: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Rengar</b> generates <span style="color: #E34D4C; white-space:normal">1 Ferocity</span> upon casting a <a href="/wiki/Champion_ability" title="Champion ability">basic ability</a> or using <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rengar" data-ability="Savagery" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rengar/LoL#Savagery" title="Savagery\'s"><img alt="Savagery\'s" src="/wiki/images/Rengar_Savagery.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rengar/LoL#Savagery" title="Rengar/LoL">Savagery\'s</a></span></span></i> first attack. At <span style="color: #E34D4C; white-space:normal">4 Ferocity</span>, his next basic ability consumes them all to become empowered with an additional effect and grant him an additional cast along with <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#F5EE99;" data-start="30;1" data-finish="50;13" data-bot_values="30;40;50" data-top_values="1;7;13" data-bot_key="%">30 / 40 / 50% (based on level)</span> <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for 1.<small>5</small> seconds. Reaching <span style="color: #E34D4C; white-space:normal">4 Ferocity</span> with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rengar" data-ability="Savagery" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rengar/LoL#Savagery" title="Savagery"><img alt="Savagery" src="/wiki/images/Rengar_Savagery.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rengar/LoL#Savagery" title="Rengar/LoL">Savagery</a></span></span></i> or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rengar" data-ability="Bola Strike" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rengar/LoL#Bola_Strike" title="Bola Strike"><img alt="Bola Strike" src="/wiki/images/Rengar_Bola_Strike.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rengar/LoL#Bola_Strike" title="Rengar/LoL">Bola Strike</a></span></span></i> locks them from use for 0.<small>1</small> seconds before and after casting. All <span style="color: #E34D4C; white-space:normal">Ferocity</span> is lost after 10 seconds of being <a href="/wiki/Combat_status" title="Combat status">out of combat</a>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 2:',
        raw: ' At 4 Ferocity, his next basic ability consumes them all to become empowered with an additional effect and grant him an additional cast along with  30 / 40 / 50% (based on level) bonus movement speed for 1',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'bonus movement speed for 1',
        pre: 'At 4 Ferocity, his next basic ability consumes them all to become empowered with an additional effect and grant him an additional cast along with  30 / 40 / 50%',
        post: 'bonus movement speed for 1',
      },
    ],
  },
  {
    description:
      '<span class="template_sbc"><b>Innate:</b></span> While in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Brush"><a href="/wiki/Brush" title="Brush"><img alt="Brushmaker.png" src="/wiki/images/Ivern_Brushmaker.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Brush" title="Brush">brush</a></span>, <b>Rengar</b> gains <i>Unseen Predator</i>.',
    leveling: [],
  },
  {
    img: '/wiki/images/Rengar_Unseen_Predator.png',
    description:
      '<span class="template_sbc"><b>Unseen Predator:</b></span> <b>Rengar\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> have massively increased range and cause him to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leap</a></span> to the target\'s location, attacking the target upon arrival and landing closer than his normal <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Melee"><a href="/wiki/Melee" title="Melee"><img alt="Melee role.png" src="/wiki/images/Melee_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Melee" class="mw-redirect" title="Melee">melee</a></span> range. This generates <span style="color: #E34D4C; white-space:normal">1 Ferocity</span> if <b>Rengar</b> had <span style="color: #E34D4C; white-space:normal">0 Ferocity</span> at one point. <i>Unseen Predator</i> lingers for 0.<small>35</small> seconds upon exiting brush but is lost immediately if <b>Rengar</b> casts <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> or <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span> to do so.<br><br><i><b>Rengar</b> can cast any of his abilities during the dash.</i>',
    leveling: [],
  },
  {
    img: '/wiki/images/Rengar_Bonetooth_Necklace.png',
    description:
      '<span class="template_sbc"><b>Innate - Bonetooth Necklace:</b></span> Scoring a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> within 3 seconds of damaging them grants <b>Rengar</b> a <i>Trophy</i>, once per unique champion and up to 5. An additional <i>Trophy</i> is made available through the event <i><a href="/wiki/The_Hunt_is_On!" class="mw-redirect" title="The Hunt is On!">The Hunt is On!</a></i> with the <img alt="Head of Kha\'Zix.png" src="/wiki/images/Kha%27Zix_Unseen_Threat.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <i>Head of Kha\'Zix</i>. <i>Trophies</i> grant <span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span> equal to <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="[[File:Bonetooth Necklace Green.png|20px|border|adjustsize|link=]] Trophies" data-displayformula="(Number of Trophies) * (Number of Trophies)" data-bot_values="1;4;9;16;25;36" data-top_values="1;2;3;4;5;Head of Kha\'Zix" data-bot_key="%">1% − 36% (based on <img alt="adjustsize" src="/wiki/images/Rengar_Bonetooth_Necklace_Green.png" decoding="async" loading="lazy" title="adjustsize" width="20" height="20" class="thumbborder lazyload"> Trophies)</span> <b>bonus</b> AD</span>.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 3:',
        raw: ' Trophies grant  bonus attack damage equal to 1% − 36% (based on  Trophies) bonus AD',
        increasedStat: 'bonus_ad',
        values: 1,
        valuesIsPercent: true,
        user: 'player',
        units: '',
        unitsText: 'bonus AD',
        pre: 'Trophies grant  bonus attack damage equal to 1% − 36%',
        post: 'bonus AD',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'based on  Trophies',
            pre: 'based on  Trophies',
          },
        ],
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Rengar_Savagery.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Rengar</b> empowers his next two basic attacks within 3 seconds to gain <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">40% <b>bonus</b> attack speed</span></span>. <br><br>His first attack has an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>, gains <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;25 <b>bonus</b> range</span>, and deals <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>, reduced by 40% against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>. This attack will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>, though is not affected by <span style="color: #944B00; white-space:normal">critical strike damage</span>, and its damage is increased by <span style="color: #E56013; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="critical strike chance" data-displayformula="0.66% per 1% critical strike chance" data-bot_values="0;6.6;13.2;19.8;26.4;33;39.6;46.2;52.8;59.4;66" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 66% (based on critical strike chance)</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Physical Damage:',
        raw: '30 / 60 / 90 / 120 / 150 (+ 0 / 5 / 10 / 15 / 20% AD)',
        values: [30, 60, 90, 120, 150],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 60 / 90 / 120 / 150',
        children: [
          {
            values: [0, 5, 10, 15, 20],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 0 / 5 / 10 / 15 / 20% AD',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Rengar_Savagery_2.png',
    description:
      '<span class="template_sbc"><b>Ferocity Bonus:</b></span> <i>Savagery\'s</i> damage is modified. <b>Rengar</b> gains <span style="color:orangered; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="50;" data-finish="101;" data-bot_values="50;53;56;59;62;65;68;71;74;77;80;83;86;89;92;95;98;101" data-top_values="" data-bot_key="%">50% − 101% (based on level)</span> <b>bonus</b> attack speed</span> for 5 seconds.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 2:',
        raw: ' Rengar gains 50% − 101% (based on level) bonus attack speed for 5 seconds',
        increasedStat: 'bonus_ad',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: '',
        unitsText: 'bonus attack speed for 5 seconds',
        pre: 'Rengar gains 50% − 101%',
        post: 'bonus attack speed for 5 seconds',
      },
      {
        effectType: 'Unique',
        name: 'Empowered Bonus Damage:',
        raw: '30 − 235 (based on level) (+ 40% AD)',
        values: [
          30, 42.06, 54.12, 66.18, 78.24, 90.29, 102.35, 114.41, 126.47, 138.53,
          150.59, 162.65, 174.71, 186.76, 198.82, 210.88, 222.94, 235,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 − 235',
        children: [
          {
            values: 40,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 40% AD',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Savagery <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Rengar\'s</b> basic attack timer.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Rengar</b> stores 50% of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after modifiers">post-mitigation damage</span> he has taken in the last 1.<small>5</small> seconds as <a href="/wiki/Health#Grey_health" title="Health">grey health</a> on his <a href="/wiki/Health_bar" title="Health bar">health bar</a>, increased to 100% of damage taken from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [],
  },
  {
    img: '/wiki/images/Rengar_Battle_Roar.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Rengar</b> roars, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="65;" data-finish="130;" data-bot_values="65;68.82;72.65;76.47;80.29;84.12;87.94;91.76;95.59;99.41;103.24;107.06;110.88;114.71;118.53;122.35;126.18;130" data-top_values="">65 − 130 (based on level)</span> <b>bonus</b> magic damage</span> to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, and consuming his <a href="/wiki/Health#Grey_health" title="Health">grey health</a> to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> for the same amount.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: ' Rengar roars, dealing magic damage to nearby enemies and 65 − 130 (based on level) bonus magic damage to  monsters, and consuming his grey health to  heal for the same amount',
        healType: 'BonusHealth',
        values: [
          65, 68.82, 72.65, 76.47, 80.29, 84.12, 87.94, 91.76, 95.59, 99.41,
          103.24, 107.06, 110.88, 114.71, 118.53, 122.35, 126.18, 130,
        ],
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'bonus_hp',
        unitsText:
          'bonus magic damage to  monsters, and consuming his grey health to  heal for the same amount',
        pre: 'Rengar roars, dealing magic damage to nearby enemies and 65 − 130',
        post: 'bonus magic damage to  monsters, and consuming his grey health to  heal for the same amount',
      },
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '50 / 80 / 110 / 140 / 170 (+ 80% AP)',
        values: [50, 80, 110, 140, 170],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 80 / 110 / 140 / 170',
        children: [
          {
            values: 80,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 80% AP',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Rengar_Battle_Roar_2.png',
    description:
      '<span class="template_sbc"><b>Ferocity Bonus:</b></span> <i>Battle Roar\'s</i> damage is modified. <b>Rengar</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleanses</a></span> himself from all <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Empowered Damage:',
        raw: '50 − 220 (based on level) (+ 80% AP)',
        values: [
          50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190,
          200, 210, 220,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 − 220',
        children: [
          {
            values: 80,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 80% AP',
          },
        ],
      },
    ],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Rengar_Bola_Strike.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Rengar</b> throws a bola in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for 1.<small>75</small> seconds, as well as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> them for 2 seconds and granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of a 150-unit radius around them for the same duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '55 / 100 / 145 / 190 / 235 (+ 80% bonus AD)',
        values: [55, 100, 145, 190, 235],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '55 / 100 / 145 / 190 / 235',
        children: [
          {
            values: 80,
            valuesIsPercent: true,
            user: 'player',
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
    img: '/wiki/images/Rengar_Bola_Strike_2.png',
    description:
      '<span class="template_sbc"><b>Ferocity Bonus:</b></span> <i>Bola Strike\'s</i> damage is modified. The target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span> instead of <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Empowered Damage:',
        raw: '50 − 305 (based on level) (+ 80% bonus AD)',
        values: [
          50, 65, 80, 95, 110, 125, 140, 155, 170, 185, 200, 215, 230, 245, 260,
          275, 290, 305,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 − 305',
        children: [
          {
            values: 80,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 80% bonus AD',
          },
        ],
      },
    ],
  },
];
const R: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Rengar</b> also gains <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rengar" data-ability="Unseen Predator" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rengar/LoL#Unseen_Predator" title="Unseen Predator"><img alt="Unseen Predator" src="/wiki/images/Rengar_Unseen_Predator.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rengar/LoL#Unseen_Predator" title="Rengar/LoL">Unseen Predator</a></span></span></i> while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Camouflage"><a href="/wiki/Stealth#Camouflage" title="Stealth#Camouflage"><img alt="Ambush 2.png" src="/wiki/images/Twitch_Ambush_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Camouflage" title="Stealth">camouflaged</a></span> from any source.',
    leveling: [],
  },
  {
    img: '/wiki/images/Rengar_Thrill_of_the_Hunt.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Rengar</b> prowls for a duration, gaining <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>. After a 2-second delay, he also becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Camouflage"><a href="/wiki/Stealth#Camouflage" title="Stealth#Camouflage"><img alt="Ambush 2.png" src="/wiki/images/Twitch_Ambush_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Camouflage" title="Stealth">camouflaged</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Duration:',
        raw: '12 / 16 / 20',
        values: [12, 16, 20],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '12 / 16 / 20',
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
    img: '/wiki/images/Thrill_of_the_Hunt_3.png',
    description:
      'During this time, <b>Rengar</b> will detect the nearest enemy champion in range, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> and gaining <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of a 100-unit radius around them. Enemies detected are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span> for the remaining full duration.',
    leveling: [],
  },
  {
    img: '/wiki/images/Thrill_of_the_Hunt_2.png',
    description:
      "The nearest detected enemy within 1600 range is also marked, alerting all of their allies within 1200 range about <b>Rengar's</b> presence.",
    leveling: [],
  },
  {
    description:
      '<b>Rengar\'s</b> next basic attack within <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="125 range">normal attack range</span> against any enemy or with <i>Unseen Predator</i> to the marked enemy deals <span style="color:orange; white-space:normal">50% AD</span> <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> and inflicts <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor reduction</span></span> for 4 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Armor Reduction:',
        raw: '12 / 18 / 24',
        values: [12, 18, 24],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '12 / 18 / 24',
      },
    ],
  },
  {
    description:
      '<a href="/wiki/Basic_attack" title="Basic attack">Attacking</a> or casting <a href="/wiki/Champion_ability" title="Champion ability">abilities</a>, other than <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rengar" data-ability="Savagery" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rengar/LoL#Savagery" title="Savagery"><img alt="Savagery" src="/wiki/images/Rengar_Savagery.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rengar/LoL#Savagery" title="Rengar/LoL">Savagery</a></span></span></i>, ends <i>Thrill of the Hunt</i> immediately.',
    leveling: [],
  },
];
export const Rengar = { I, Q, W, E, R };
