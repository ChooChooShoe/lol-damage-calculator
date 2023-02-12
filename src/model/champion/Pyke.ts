import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Pyke';
const I: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Pyke\'s</b> <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><b>maximum</b> health</span></span> cannot increase except through <a href="/wiki/Growth#Increasing_Statistics" class="mw-redirect" title="Growth">growth (per level)</a>, instead he gains<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal">1 <b>bonus</b> attack damage</span></span> <span style="color: #1F995C; white-space:normal">per 14 <b>bonus</b> health</span>.&nbsp;」</span><span class="flipText2">「&nbsp;<span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orange; white-space:normal"><b>bonus</b> attack damage</span></span> equal to <span style="color: #1F995C; white-space:normal">7.<small>143</small>% of <b>bonus</b> health</span>.&nbsp;」</span></span>',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Pyke</b> gains <span style="color: #F5EE99; white-space:normal">1 <b>bonus</b> movement speed</span> while in the river.',
    leveling: [],
  },
  {
    img: '/wiki/images/Pyke_Gift_of_the_Drowned_Ones.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Pyke</b> stores 9% <span style="color:tomato; white-space:normal">(+&nbsp;0.<small>2</small>% per 1 Lethality)</span> of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after modifiers">post-mitigation damage</span> he takes from enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> as <a href="/wiki/Health#Grey_health" title="Health">grey health</a> on his <a href="/wiki/Health_bar" title="Health bar">health bar</a>, increased to 40% <span style="color:tomato; white-space:normal">(+&nbsp;0.<small>4</small>% per 1 Lethality)</span> while there are two or more <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy champions nearby. He can store up to 80 <span style="color:orange; white-space:normal">(+&nbsp;800% <b>bonus</b> AD)</span> <a href="/wiki/Health#Grey_health" title="Health">grey health</a>, with an upper cap of <span style="color: #1F995C; white-space:normal">55% of his <b>maximum</b> health</span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 4:',
        raw: ' He can store up to 80 (+ 800% bonus AD) grey health, with an upper cap of 55% of his maximum health',
        healType: 'BonusHealth',
        values: 8,
        user: 'player',
        units: 'total_ap',
        unitsText:
          'grey health, with an upper cap of 55% of his maximum health',
        pre: 'He can store up to 80',
        post: 'grey health, with an upper cap of 55% of his maximum health',
        children: [
          {
            values: 800,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 800% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'While <b>Pyke</b> is not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> to enemies, he rapidly consumes his <a href="/wiki/Health#Grey_health" title="Health">grey health</a> to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> for the same amount.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Pyke_Bone_Skewer.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Pyke</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">charges</a></span> while being <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 20% for up to 3 seconds to increase <i>Bone Skewer\'s</i> <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;range</span> over the first second of the channel. <i>Bone Skewer</i> can be recast within the duration.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Pyke</b> hurls his harpoon in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to the first enemy hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulls</a></span> them, during which they are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span>, then <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 90% for 1 second.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '100 / 150 / 200 / 250 / 300 (+ 60% bonus AD)',
        values: [100, 150, 200, 250, 300],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '100 / 150 / 200 / 250 / 300',
        children: [
          {
            values: 60,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 60% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'Releasing the ability within 0.<small>4</small> seconds causes <b>Pyke</b> to instead thrust his blade in the target direction, dealing the same damage to the closest enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, or closest enemy otherwise.',
    leveling: [],
  },
  {
    description:
      'If the charge is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span> or completes without reactivation, <i>Bone Skewer</i> is cancelled and the ability is put on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;full</span> cooldown but refunds <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">75% of the mana cost</span></span>. <i>Bone Skewer\'s</i> <span style="color: #0099CC; white-space:normal">mana cost</span> is fully refunded if it hits an enemy champion.',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Pyke_Ghostwater_Dive.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Pyke</b> submerges into water for 5 seconds, entering <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Camouflage"><a href="/wiki/Stealth#Camouflage" title="Stealth#Camouflage"><img alt="Ambush 2.png" src="/wiki/images/Twitch_Ambush_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Camouflage" title="Stealth">camouflage</a></span> and gaining <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">40%</span> <span style="color:tomato; white-space:normal">(+&nbsp;1.<small>5</small>% per 1 Lethality)</span> <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> that decays over the duration. Attacking or casting abilities ends <i>Ghostwater Dive</i> immediately.',
    leveling: [],
  },
  {
    description:
      '<i>Enemy champions within 1500 units of <b>Pyke</b> are alerted of his presence and whether he can execute them with <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Pyke" data-ability="Death from Below" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Pyke/LoL#Death_from_Below" title="Death from Below"><img alt="Death from Below" src="/wiki/images/Pyke_Death_from_Below.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Pyke/LoL#Death_from_Below" title="Pyke/LoL">Death from Below</a></span></span>.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Pyke_Phantom_Undertow.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Pyke</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction, leaving behind a <i>Phantom</i>.',
    leveling: [],
  },
  {
    description:
      'After 1 second, the <i>Phantom</i> homes back to <b>Pyke</b> to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> enemies around it and those it passes through along the way for 1.<small>25</small> <span style="color:tomato; white-space:normal">(+&nbsp;0.<small>1</small> per 10 Lethality)</span> seconds. Enemy champions hit also take <span style="color: #FF8C34; white-space:normal">physical damage</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '105 / 145 / 185 / 225 / 265 (+ 100% bonus AD)',
        values: [105, 145, 185, 225, 265],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '105 / 145 / 185 / 225 / 265',
        children: [
          {
            values: 100,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 100% bonus AD',
          },
        ],
      },
    ],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Pyke_Death_from_Below.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Pyke</b> marks the target location with an <i>X</i> before striking it, <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike true icon.png" src="/wiki/images/Critical_strike_true_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike"><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Execute"><a href="/wiki/Kill#Execute" title="Kill">executing</a></span></span> enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> within the area that are below <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="250;290;330;370;400;430;450;470;490;510;530;540;550" data-top_values="6;7;8;9;10;11;12;13;14;15;16;17;18">250 − 550 (based on level)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;80% <b>bonus</b> AD)</span> <span style="color:tomato; white-space:normal">(+&nbsp;1.<small>5</small> per 1 Lethality)</span> <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">health</span></span>. Other enemies hit and enemy champions above the threshold are instead dealt<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;50% of the amount as <span style="color: #FF8C34; white-space:normal">physical damage</span>.&nbsp;」</span><span class="flipText2">「&nbsp;<span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="125;145;165;185;200;215;225;235;245;255;265;270;275" data-top_values="6;7;8;9;10;11;12;13;14;15;16;17;18">125 − 275 (based on level)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;40% <b>bonus</b> AD)</span> <span style="color:tomato; white-space:normal">(+&nbsp;0.<small>75</small> per 1 Lethality)</span> <span style="color: #FF8C34; white-space:normal">physical damage</span>.&nbsp;」</span></span>',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 1:',
        raw: ' Pyke marks the target location with an X before striking it,  executing enemy  champions within the area that are below 250 − 550 (based on level) (+ 80% bonus AD) (+ 1',
        values: [
          250, 267.65, 285.29, 302.94, 320.59, 338.24, 355.88, 373.53, 391.18,
          408.82, 426.47, 444.12, 461.76, 479.41, 497.06, 514.71, 532.35, 550,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '+ 1',
        pre: 'Pyke marks the target location with an X before striking it,  executing enemy  champions within the area that are below 250 − 550',
        post: '+ 1',
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
        name: 'Line 4:',
        raw: ' 」「 125 − 275 (based on level) (+ 40% bonus AD) (+ 0',
        values: [
          125, 133.82, 142.65, 151.47, 160.29, 169.12, 177.94, 186.76, 195.59,
          204.41, 213.24, 222.06, 230.88, 239.71, 248.53, 257.35, 266.18, 275,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '+ 0',
        pre: '」「 125 − 275',
        post: '+ 0',
        children: [
          {
            values: 40,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 40% bonus AD',
          },
        ],
      },
    ],
  },
  {
    description:
      'If <i>Death from Below</i> hits an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or at least one is <a href="/wiki/Death" title="Death">killed</a> inside the <i>X</i> by the <i>execution</i> or an ally, <b>Pyke</b> will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blink</a></span> to the center of the <i>X</i>. For the latter case <b>Pyke</b> can also recast the ability within 20 seconds at no cost.',
    leveling: [],
  },
  {
    img: '/wiki/images/Death_from_Below_2.png',
    description:
      'Each successful <i>execution</i> grants one <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Your Cut" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Your_Cut" title="Your Cut"><img alt="Your Cut" src="/wiki/images/%27Your_Cut%27_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Your_Cut" title="Your Cut">Your Cut</a></span></span> to the last assisting ally, instead of its natural <a href="/wiki/Assist" title="Assist">assist</a> <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="gold Gold"><img alt="gold Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">gold</span></span>. In addition, <b>Pyke</b> is granted a <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Your Cut" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Your_Cut" title="Your Cut"><img alt="Your Cut" src="/wiki/images/%27Your_Cut%27_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Your_Cut" title="Your Cut">Your Cut</a></span></span> for each enemy champion killed inside the <i>X</i> by an ally during <i>Death from Below\'s</i> cast time.',
    leveling: [],
  },
];
export const Pyke = { I, Q, W, E, R };
