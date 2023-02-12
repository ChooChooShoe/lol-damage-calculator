import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Rakan';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Rakan_Fey_Feathers.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Periodically, <b>Rakan</b> grants himself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="30;" data-finish="225;" data-bot_values="30;41.47;52.94;64.41;75.88;87.35;98.82;110.29;121.76;133.24;144.71;156.18;167.65;179.12;190.59;202.06;213.53;225" data-top_values="">30 − 225 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;95% AP)</span> that lasts until broken. After being <a href="/wiki/Out_of_combat" class="mw-redirect" title="Out of combat">out of combat</a> for 5 seconds, any leftover shield will be restored to <b>maximum</b> value.',
    leveling: [
      {
        effectType: 'Shield',
        name: 'Line 1:',
        raw: ' Periodically, Rakan grants himself a  shield for 30 − 225 (based on level) (+ 95% AP) that lasts until broken',
        damagetype: 'None',
        shieldType: 'SelfShield',
        values: [
          30, 41.47, 52.94, 64.41, 75.88, 87.35, 98.82, 110.29, 121.76, 133.24,
          144.71, 156.18, 167.65, 179.12, 190.59, 202.06, 213.53, 225,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'that lasts until broken',
        pre: 'Periodically, Rakan grants himself a  shield for 30 − 225',
        post: 'that lasts until broken',
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
      '<b>Rakan\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> and <a href="/wiki/Champion_ability" title="Champion ability">ability</a> hits reduce <i>Fey Feathers\' </i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> by 1 second for each enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> hit.',
    leveling: [],
  },
  {
    img: '/wiki/images/Blazing_Feathers_profileicon.png',
    description:
      '<span class="template_sbc"><b>Innate - Lover\'s Leap:</b></span> If either <b>Rakan</b> or <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xayah" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xayah/LoL" title="Xayah"><img alt="Xayah" src="/wiki/images/Xayah_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xayah/LoL" title="Xayah/LoL">Xayah</a></span></span> is channeling <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>, the other may move nearby and channel their own to join alongside them. <b>Both</b> reach base at the time of which the initiator\'s <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> completes.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Rakan_Gleaming_Quill.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Rakan</b> slings an enchanted feather in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 115 / 160 / 205 / 250 (+ 70% AP)',
        values: [70, 115, 160, 205, 250],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 115 / 160 / 205 / 250',
        children: [
          {
            values: 70,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 70% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'If the target was an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>, a radius is marked around <b>Rakan</b>. After 3 seconds or if an allied champion enters the radius, <b>Rakan</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> himself and nearby allied champions for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="40;" data-finish="210;" data-bot_values="40;50;60;70;80;90;100;110;120;130;140;150;160;170;180;190;200;210" data-top_values="">40 − 210 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;55% AP)</span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 2:',
        raw: ' After 3 seconds or if an allied champion enters the radius, Rakan  heals himself and nearby allied champions for 40 − 210 (based on level) (+ 55% AP)',
        healType: 'SelfHeal',
        values: [
          40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180,
          190, 200, 210,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: 'After 3 seconds or if an allied champion enters the radius, Rakan  heals himself and nearby allied champions for 40 − 210',
        children: [
          {
            values: 55,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 55% AP',
          },
        ],
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Rakan_Grand_Entrance.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Rakan</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location. After a 0.<small>35</small>-second delay upon arrival, he deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocks them up</a></span> for 1 second.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 120 / 170 / 220 / 270 (+ 80% AP)',
        values: [70, 120, 170, 220, 270],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 120 / 170 / 220 / 270',
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
    description:
      '<i><b>Rakan</b> will be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocked down</a></span> by any <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilizing</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Polymorph"><a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control#Polymorph"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control">polymorphing</a></span> crowd control, excluding <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sleep"><a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control#Sleep"><img alt="Sleep icon.png" src="/wiki/images/Sleep_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control">sleep</a></span><sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup>, during Grand Entrance.</i>',
    leveling: [],
  },
  {
    description:
      '<i>Grand Entrance will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Rakan_Battle_Dance.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Rakan</b> grants a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> to the target allied champion for 3 seconds and then <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to and around them. <i>Battle Dance</i> can be recast within 5 seconds at no additional cost.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Shield Strength:',
        raw: '50 / 75 / 100 / 125 / 150 (+ 70% AP)',
        values: [50, 75, 100, 125, 150],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '50 / 75 / 100 / 125 / 150',
        children: [
          {
            values: 70,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 70% AP',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Rakan_Battle_Dance_2.png',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Rakan</b> mimics the first cast\'s effects.',
    leveling: [],
  },
  {
    description:
      '<i><b>Rakan</b> will be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocked down</a></span> by any <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilizing</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Polymorph"><a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control#Polymorph"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Polymorph" title="Types of Crowd Control">polymorphing</a></span> crowd control, excluding <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sleep"><a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control#Sleep"><img alt="Sleep icon.png" src="/wiki/images/Sleep_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Sleep" title="Types of Crowd Control">sleep</a></span><sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup>, during Battle Dance.</i>',
    leveling: [],
  },
  {
    description:
      '<i>If <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Xayah" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Xayah/LoL" title="Xayah"><img alt="Xayah" src="/wiki/images/Xayah_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Xayah/LoL" title="Xayah/LoL">Xayah</a></span></span> is the target, Battle Dance can be cast from an increased range.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Rakan_The_Quickness.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Rakan</b> breaks into a captivating sprint for 4 seconds, gaining <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosting"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span> and <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">75% <b>bonus</b> movement speed</span></span> for the duration. During this time, he deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies he collides with and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Charm"><a href="/wiki/Charm" title="Charm"><img alt="Charm icon.png" src="/wiki/images/Charm_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Charm" class="mw-redirect" title="Charm">charms</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 75% for a duration. This cannot affect the same enemy more than once.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '100 / 200 / 300 (+ 50% AP)',
        values: [100, 200, 300],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '100 / 200 / 300',
        children: [
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 50% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Disable Duration:',
        raw: '1 / 1.25 / 1.5',
        values: [1, 1.25, 1.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1 / 1.25 / 1.5',
      },
    ],
  },
  {
    description:
      'Colliding with an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> extends <i>The Quickness\' </i>duration by 0.<small>25</small> seconds, which can occur once per champion. When <b>Rakan</b> collides with his first enemy champion, he gains an additional <span style="color: #F5EE99; white-space:normal">75% <b>bonus</b> movement speed</span> that decays after 0.<small>5</small> seconds by 20% every 0.<small>5</small> seconds, then by 15% after decaying by 60% over 1.<small>5</small> seconds.',
    leveling: [],
  },
  {
    description:
      '<i>During The Quickness, <b>Rakan</b> cannot basic attack enemy champions he did not collide with, unless the attack command was inputted before the ability was activated.</i>',
    leveling: [],
  },
];
export const Rakan = { I, Q, W, E, R };
