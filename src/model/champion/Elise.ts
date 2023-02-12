import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Elise';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Elise_Spider_Queen.png',
    description:
      '<span class="template_sbc"><b>Innate - Human Form:</b></span> <b>Elise</b> gains one dormant <i>Spiderling</i> whenever she hits an enemy with an <a href="/wiki/Champion_ability" title="Champion ability">ability</a>, storing up to <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="[[File:Elise OriginalSquare.png|20px|link=]] Human Form\'s Rank" data-start="2;" data-finish="5;" data-bot_values="2;3;4;5" data-top_values="">2 / 3 / 4 / 5 (based on <img alt="Elise OriginalSquare.png" src="/wiki/images/Elise_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> <i>Human Form\'s</i> Rank)</span> at a time.',
    leveling: [
      {
        effectType: 'Gain',
        name: 'Line 1:',
        raw: " Elise gains one dormant Spiderling whenever she hits an enemy with an ability, storing up to 2 / 3 / 4 / 5 (based on  Human Form's Rank) at a time",
        values: [2, 3, 4, 5],
        user: 'none',
        units: '',
        unitsText: 'at a time',
        pre: 'Elise gains one dormant Spiderling whenever she hits an enemy with an ability, storing up to 2 / 3 / 4 / 5',
        post: 'at a time',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: "based on  Human Form's Rank",
            pre: "based on  Human Form's Rank",
          },
        ],
      },
    ],
  },
  {
    description:
      '<span class="template_sbc"><b>Innate - Spider Form:</b></span> <b>Elise\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> deal <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#00B0F0;" data-top_label="[[File:Spider Form.png|20px|link=]] Spider Form\'s Rank" data-start="10;" data-finish="40;" data-bot_values="10;20;30;40" data-top_values="">10 / 20 / 30 / 40 (based on <img alt="Spider Form.png" src="/wiki/images/Elise_Spider_Form.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> Spider Form\'s Rank)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;20% AP)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> her for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="[[File:Spider Form.png|20px|link=]] Spider Form\'s Rank" data-start="4;" data-finish="10;" data-bot_values="4;6;8;10" data-top_values="">4 / 6 / 8 / 10 (based on <img alt="Spider Form.png" src="/wiki/images/Elise_Spider_Form.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"> <i>Spider Form\'s</i> Rank)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;8% AP)</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: " Elise's basic attacks deal 10 / 20 / 30 / 40 (based on  Spider Form's Rank) (+ 20% AP) bonus magic damage and  heal her for 4 / 6 / 8 / 10 (based on  Spider Form's Rank) (+ 8% AP)  on-hit",
        healType: 'BonusHealth',
        values: [1, 20, 30, 40],
        user: 'none',
        units: '',
        unitsText: 'bonus magic damage and  heal her for 4 / 6 / 8 / 10',
        pre: "Elise's basic attacks deal 10 / 20 / 30 / 40",
        post: 'bonus magic damage and  heal her for 4 / 6 / 8 / 10',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: "based on  Spider Form's Rank",
            pre: "based on  Spider Form's Rank",
          },
          {
            values: 20,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 20% AP',
          },
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: "based on  Spider Form's Rank",
            pre: "based on  Spider Form's Rank",
          },
          {
            values: 8,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 8% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>See <a href="/wiki/Elise/LoL#Pets" title="Elise/LoL">Pets</a> for more details about Spiderlings.</i>',
    leveling: [],
  },
];
const Q1: SubSkill[] = [
  {
    img: '/wiki/images/Elise_Neurotoxin.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Elise</b> fires a toxin at the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span>, with the damage based on the target\'s health ratio being capped against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Magic Damage:',
        raw: "40 / 75 / 110 / 145 / 180 (+ 4% (+ 3% per 100 AP) of target's current health)",
        healType: 'OutgoingHeals',
        values: [40, 75, 110, 145, 180],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 75 / 110 / 145 / 180',
        children: [
          {
            values: 4,
            valuesIsPercent: true,
            user: 'target',
            units: 'current_hp',
            unitsText: "of target's current health",
            pre: '+ 4%',
            post: "of target's current health",
            children: [
              {
                values: 3,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 3% per 100 AP',
              },
            ],
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Capped Monster Damage:',
        raw: '75 / 100 / 125 / 150 / 175',
        values: [75, 100, 125, 150, 175],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '75 / 100 / 125 / 150 / 175',
      },
    ],
  },
];
const W1: SubSkill[] = [
  {
    img: '/wiki/images/Elise_Volatile_Spiderling.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Elise</b> summons a venom-gorged spider for 3 seconds, which is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> and crawls to the target location, navigating its path upon encountering terrain.',
    leveling: [],
  },
  {
    description:
      'The spider explodes upon contact with an enemy or at the end of its lifespan, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '60 / 105 / 150 / 195 / 240 (+ 95% AP)',
        values: [60, 105, 150, 195, 240],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 105 / 150 / 195 / 240',
        children: [
          {
            values: 95,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 95% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'If the spider does not hit an enemy before reaching the target location, it chases down a nearby enemy, prioritizing <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> and gaining <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> based on its proximity to the target.',
    leveling: [],
  },
];
const E1: SubSkill[] = [
  {
    img: '/wiki/images/Elise_Cocoon.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Elise</b> fires a web in the target direction, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> the first enemy hit for a few seconds, during which they are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Stun Duration:',
        raw: '1.6 / 1.7 / 1.8 / 1.9 / 2',
        values: [1.6, 1.7, 1.8, 1.9, 2],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1.6 / 1.7 / 1.8 / 1.9 / 2',
      },
    ],
  },
];
const Q2: SubSkill[] = [
  {
    img: '/wiki/images/Elise_Venomous_Bite.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Elise</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">pounces</a></span> at the target enemy with her fangs and bites them, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>, capped against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, and applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects at 100% effectiveness.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Magic Damage:',
        raw: "70 / 105 / 140 / 175 / 210 (+ 8% (+ 3% per 100 AP) of target's missing health)",
        healType: 'OutgoingHeals',
        values: [70, 105, 140, 175, 210],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 105 / 140 / 175 / 210',
        children: [
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
                values: 3,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 3% per 100 AP',
              },
            ],
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Monster Damage:',
        raw: '145 / 210 / 275 / 340 / 405',
        values: [145, 210, 275, 340, 405],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '145 / 210 / 275 / 340 / 405',
      },
    ],
  },
  {
    description:
      'If there are active <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Elise" data-ability="Spider Queen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elise/LoL#Spider_Queen" title="Spiderlings"><img alt="Spiderlings" src="/wiki/images/Elise_Spider_Queen.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elise/LoL#Spider_Queen" title="Elise/LoL">Spiderlings</a></span></span></i> or <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Elise" data-ability="Volatile Spiderling" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elise/LoL#Volatile_Spiderling" title="Volatile Spiderlings"><img alt="Volatile Spiderlings" src="/wiki/images/Elise_Volatile_Spiderling.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elise/LoL#Volatile_Spiderling" title="Elise/LoL">Volatile Spiderlings</a></span></span></i> nearby, they will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> alongside <b>Elise</b> towards <i>Venomous Bite\'s</i> target and reprioritize them.',
    leveling: [],
  },
];
const W2: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Elise\'s</b> <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Elise" data-ability="Spider Queen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elise/LoL#Spider_Queen" title="Spiderlings"><img alt="Spiderlings" src="/wiki/images/Elise_Spider_Queen.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elise/LoL#Spider_Queen" title="Elise/LoL">Spiderlings</a></span></span></i> gain <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: ' Spiderling Bonus Attack Speed:',
        raw: '5 / 10 / 15 / 20 / 25%',
        values: [5, 10, 15, 20, 25],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5 / 10 / 15 / 20 / 25%',
      },
    ],
  },
  {
    img: '/wiki/images/Elise_Skittering_Frenzy.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Elise</b> and her <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Elise" data-ability="Spider Queen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elise/LoL#Spider_Queen" title="Spiderlings"><img alt="Spiderlings" src="/wiki/images/Elise_Spider_Queen.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elise/LoL#Spider_Queen" title="Elise/LoL">Spiderlings</a></span></span></i> gain <span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span> for 3 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Attack Speed:',
        raw: '60 / 70 / 80 / 90 / 100%',
        values: [60, 70, 80, 90, 100],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 70 / 80 / 90 / 100%',
      },
    ],
  },
  {
    description:
      '<i>Skittering Frenzy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Elise\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> timer. <b>Elise</b> loses Skittering Frenzy immediately when she switches to <a href="/wiki/Elise#Human_Form" title="Human Form"><img alt="Human Form" src="/wiki/images/Elise_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a> <a href="/wiki/Elise#Spider_Form_/_Human_Form" title="Elise">Human Form</a>.</i>',
    leveling: [],
  },
];
const E2: SubSkill[] = [
  {
    img: '/wiki/images/Elise_Rappel.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Elise</b> and her <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Elise" data-ability="Spider Queen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elise/LoL#Spider_Queen" title="Spiderlings"><img alt="Spiderlings" src="/wiki/images/Elise_Spider_Queen.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elise/LoL#Spider_Queen" title="Elise/LoL">Spiderlings</a></span></span></i> lift up into the air, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Vanish"><a href="/wiki/Untargetability#Vanish" title="Untargetability#Vanish"><img alt="Hallucinate.png" src="/wiki/images/Shaco_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetability#Vanish" title="Untargetability">vanishing</a></span> and becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">unable to act</a></span> for up to 2 seconds and granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area for the duration.',
    leveling: [],
  },
  {
    description:
      '<i>Rappel</i> can be recast on a target enemy within the duration, and does so automatically after the duration without a target.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Elise</b> and her <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Elise" data-ability="Spider Queen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elise/LoL#Spider_Queen" title="Spiderlings"><img alt="Spiderlings" src="/wiki/images/Elise_Spider_Queen.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elise/LoL#Spider_Queen" title="Elise/LoL">Spiderlings</a></span></span></i> instantly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">descend</a></span> behind the target, or their current position if there is no target.',
    leveling: [],
  },
  {
    description:
      'If cast directly on an enemy, <b>Elise</b> and her <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Elise" data-ability="Spider Queen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elise/LoL#Spider_Queen" title="Spiderlings"><img alt="Spiderlings" src="/wiki/images/Elise_Spider_Queen.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elise/LoL#Spider_Queen" title="Elise/LoL">Spiderlings</a></span></span></i> automatically recast on the target after 1 second. Upon landing this way, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Elise" data-ability="Spider Queen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elise/LoL#Spider_Queen" title="Spider Queen\'s"><img alt="Spider Queen\'s" src="/wiki/images/Elise_Spider_Queen.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elise/LoL#Spider_Queen" title="Elise/LoL">Spider Queen\'s</a></span></span></i> bonuses are increased for 5 seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Spider Effects Increase:',
        raw: '40 / 55 / 70 / 85 / 100%',
        values: [40, 55, 70, 85, 100],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 55 / 70 / 85 / 100%',
      },
    ],
  },
  {
    description:
      '<i>Rappel\'s recast can be used while affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast-inhibiting crowd control"><a href="/wiki/Crowd_control#Disrupting" title="Crowd control#Disrupting"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disrupting" title="Crowd control">cast-inhibiting crowd control</a></span>.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Elise" data-ability="Spider Queen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elise/LoL#Spider_Queen" title="Spider Queen\'s"><img alt="Spider Queen\'s" src="/wiki/images/Elise_Spider_Queen.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elise/LoL#Spider_Queen" title="Elise/LoL">Spider Queen\'s</a></span></span></i> bonuses are increased.',
    leveling: [],
  },
  {
    img: '/wiki/images/Elise_Spider_Form.png',
    description:
      '<span class="template_sbc"><b>Toggle:</b></span> <b>Elise</b> switches between her <img alt="Elise OriginalSquare.png" src="/wiki/images/Elise_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <span class="template_sbc"><b>Human Form</b></span> and <img alt="Spider Form.png" src="/wiki/images/Elise_Spider_Form.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> <span class="template_sbc"><b>Spider Form</b></span>.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b><img alt="Spider Form.png" src="/wiki/images/Elise_Spider_Form.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> Spider Form:</b></span> <b>Elise</b> transforms into a spider, gaining <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">25 <b>bonus</b> movement speed</span></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Melee"><a href="/wiki/Melee" title="Melee"><img alt="Melee role.png" src="/wiki/images/Melee_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Melee" class="mw-redirect" title="Melee">melee</a></span> basic attacks with <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;125 range</span>, and access to her arachnid abilities. Additionally, <b>Elise</b> unleashes all stored <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Elise" data-ability="Spider Queen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elise/LoL#Spider_Queen" title="Spiderlings"><img alt="Spiderlings" src="/wiki/images/Elise_Spider_Queen.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elise/LoL#Spider_Queen" title="Elise/LoL">Spiderlings</a></span></span></i>.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b><img alt="Elise OriginalSquare.png" src="/wiki/images/Elise_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"> Human Form:</b></span> <b>Elise</b> transforms into a human, gaining <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ranged"><a href="/wiki/Ranged" title="Ranged"><img alt="Ranged role.png" src="/wiki/images/Ranged_role.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ranged" class="mw-redirect" title="Ranged">ranged</a></span> basic attacks, and access to her human abilities. Additionally, <b>Elise</b> stores all unleashed <i>Spiderlings</i>.',
    leveling: [],
  },
  {
    description:
      '<b>Elise</b> begins with one rank in <i>Spider Form / Human Form</i> and can increase it at levels 6, 11, and 16.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 1:',
        raw: 'Elise begins with one rank in Spider Form / Human Form and can increase it at levels 6, 11, and 16',
        values: [0, 6],
        user: 'none',
        units: '',
        unitsText:
          'Elise begins with one rank in Spider Form / Human Form and can increase it at levels 6, 11, and 16',
        pre: 'Elise begins with one rank in Spider Form / Human Form and can increase it at levels 6, 11, and 16',
      },
    ],
  },
];
export const Elise = { I, Q1, W1, E1, Q2, W2, E2, R };
