import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Rammus';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Rammus_Spiked_Shell.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Rammus\' </b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> deal <span style="color: #00B0F0; white-space:normal">10</span> <span style="color:yellow; white-space:normal">(+&nbsp;10% armor)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>, increased to <span style="color: #00B0F0; white-space:normal">15</span> <span style="color:yellow; white-space:normal">(+&nbsp;15% armor)</span> during <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rammus" data-ability="Defensive Ball Curl" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rammus/LoL#Defensive_Ball_Curl" title="Defensive Ball Curl"><img alt="Defensive Ball Curl" src="/wiki/images/Rammus_Defensive_Ball_Curl.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rammus/LoL#Defensive_Ball_Curl" title="Rammus/LoL">Defensive Ball Curl</a></span></span></i>.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 1:',
        raw: " Rammus'  basic attacks deal 10 (+ 10% armor) bonus magic damage  on-hit, increased to 15 (+ 15% armor) during  Defensive Ball Curl",
        damagetype: 'Magic',
        values: 1,
        user: 'none',
        units: '',
        unitsText: 'bonus magic damage  on-hit, increased to 15',
        pre: "Rammus'  basic attacks deal 10",
        post: 'bonus magic damage  on-hit, increased to 15',
        children: [
          {
            values: 10,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_armor',
            unitsText: 'armor',
            pre: '+ 10% armor',
          },
          {
            values: 15,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_armor',
            unitsText: 'armor',
            pre: '+ 15% armor',
          },
        ],
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Rammus_Powerball.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Rammus</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for up to 6 seconds to roll into a ball, gaining <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#F5EE99;" data-start="25;" data-finish="39.166666666667;" data-bot_values="25;25.83;26.67;27.5;28.33;29.17;30;30.83;31.67;32.5;33.33;34.17;35;35.83;36.67;37.5;38.33;39.17" data-top_values="" data-bot_key="%">25% − 39.<small>17</small>% (based on level)</span> <span style="color: #F5EE99; white-space:normal"><b>bonus total</b> movement speed</span></span> per second over the duration, up to a maximum of <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#F5EE99;" data-start="150;" data-finish="235;" data-bot_values="150;155;160;165;170;175;180;185;190;195;200;205;210;215;220;225;230;235" data-top_values="" data-bot_key="%">150% − 235% (based on level)</span>. <br><br><i>Powerball</i> can be recast after 1 second within the duration, and does so automatically afterwards or when <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: '17% (based on level) bonus total movement speed per second over the duration, up to a maximum of 150% − 235% (based on level)',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText:
          'bonus total movement speed per second over the duration, up to a maximum of 150% − 235%',
        pre: '17%',
        post: 'bonus total movement speed per second over the duration, up to a maximum of 150% − 235%',
      },
    ],
  },
  {
    description:
      '<b>Rammus</b> stops rolling upon colliding with an enemy, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to all nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them back</a></span> 125 units, though not through terrain. Enemies hit are then <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span> for <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">0.<small>4</small></span> seconds, as well as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> for 1 second.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '100 / 130 / 160 / 190 / 220 (+ 100% AP)',
        values: [100, 130, 160, 190, 220],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '100 / 130 / 160 / 190 / 220',
        children: [
          {
            values: 100,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 100% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Slow:',
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
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Rammus</b> ends <i>Powerball</i>.',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Rammus_Defensive_Ball_Curl.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Rammus</b> enters a defensive stance for 6 seconds, gaining <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resistance</span></span>. While active, enemies that use a basic attack <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> against <b>Rammus</b> are dealt <span style="color: #00B0F0; white-space:normal">magic damage</span> equal to <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rammus" data-ability="Spiked Shell" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rammus/LoL#Spiked_Shell" title="Spiked Shell\'s"><img alt="Spiked Shell\'s" src="/wiki/images/Rammus_Spiked_Shell.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rammus/LoL#Spiked_Shell" title="Rammus/LoL">Spiked Shell\'s</a></span></span></i> <b>bonus</b> damage.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Armor:',
        raw: '35 (+ 40 / 55 / 70 / 85 / 100% total armor)',
        values: 35,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '35',
        children: [
          {
            values: [40, 55, 70, 85, 100],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_armor',
            unitsText: 'total armor',
            pre: '+ 40 / 55 / 70 / 85 / 100% total armor',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Bonus Magic Resistance:',
        raw: '10 (+ 30 / 35 / 40 / 45 / 50% total magic resistance)',
        values: 10,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10',
        children: [
          {
            values: [30, 35, 40, 45, 50],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_mr',
            unitsText: 'total magic resistance',
            pre: '+ 30 / 35 / 40 / 45 / 50% total magic resistance',
          },
        ],
      },
    ],
  },
  {
    description:
      "<b>Rammus' </b> basic attacks extend the remaining duration of <i>Defensive Ball Curl</i> by 0.<small>4</small> seconds, up to a maximum of 4 additional seconds.",
    leveling: [],
  },
  {
    description:
      '<i>Defensive Ball Curl</i> can be recast after 1 second within the duration, and does so automatically upon casting <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rammus" data-ability="Powerball" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rammus/LoL#Powerball" title="Powerball"><img alt="Powerball" src="/wiki/images/Rammus_Powerball.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rammus/LoL#Powerball" title="Rammus/LoL">Powerball</a></span></span></i>.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Rammus</b> ends <i>Defensive Ball Curl</i>.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Rammus_Frenzying_Taunt.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Rammus</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Taunt"><a href="/wiki/Taunt" title="Taunt"><img alt="Taunt icon.png" src="/wiki/images/Taunt_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Taunt" class="mw-redirect" title="Taunt">taunts</a></span> the target enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> for a duration and gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> for the same duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Taunt Duration:',
        raw: '1.2 / 1.4 / 1.6 / 1.8 / 2',
        values: [1.2, 1.4, 1.6, 1.8, 2],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1.2 / 1.4 / 1.6 / 1.8 / 2',
      },
      {
        effectType: 'Unique',
        name: 'Bonus Attack Speed Duration:',
        raw: '1.2 / 1.4 / 1.6 / 1.8 / 2',
        values: [1.2, 1.4, 1.6, 1.8, 2],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1.2 / 1.4 / 1.6 / 1.8 / 2',
      },
      {
        effectType: 'Unique',
        name: 'Bonus Attack Speed:',
        raw: '20 / 25 / 30 / 35 / 40%',
        values: [20, 25, 30, 35, 40],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 25 / 30 / 35 / 40%',
      },
    ],
  },
  {
    description:
      'The duration of the <span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span> continuously refreshes during <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rammus" data-ability="Powerball" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rammus/LoL#Powerball" title="Powerball"><img alt="Powerball" src="/wiki/images/Rammus_Powerball.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rammus/LoL#Powerball" title="Rammus/LoL">Powerball</a></span></span></i>, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rammus" data-ability="Defensive Ball Curl" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rammus/LoL#Defensive_Ball_Curl" title="Defensive Ball Curl"><img alt="Defensive Ball Curl" src="/wiki/images/Rammus_Defensive_Ball_Curl.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rammus/LoL#Defensive_Ball_Curl" title="Rammus/LoL">Defensive Ball Curl</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rammus" data-ability="Soaring Slam" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rammus/LoL#Soaring_Slam" title="Soaring Slam"><img alt="Soaring Slam" src="/wiki/images/Rammus_Soaring_Slam.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rammus/LoL#Soaring_Slam" title="Rammus/LoL">Soaring Slam</a></span></span></i>.',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Rammus_Soaring_Slam.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Rammus</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaps</a></span> to the target location with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immunity"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">immunity to crowd control</a></span>. Upon arrival, he creates an impact that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for 1.<small>5</small> seconds. The impact deals increased damage at the epicenter if <i>Soaring Slam</i> was cast further than 800 units, capped at 1700 units with 50% increased damage.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '100 / 175 / 250 (+ 60% AP)',
        values: [100, 175, 250],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '100 / 175 / 250',
        children: [
          {
            values: 60,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 60% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Center Increased Damage:',
        raw: '150 / 262.5 / 375 (+ 90% AP)',
        values: [150, 262.5, 375],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 262.5 / 375',
        children: [
          {
            values: 90,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 90% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Slow:',
        raw: '15 / 17.5 / 20%',
        values: [15, 17.5, 20],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 17.5 / 20%',
      },
    ],
  },
  {
    description:
      'If <i>Soaring Slam</i> was cast during <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rammus" data-ability="Powerball" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rammus/LoL#Powerball" title="Powerball"><img alt="Powerball" src="/wiki/images/Rammus_Powerball.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rammus/LoL#Powerball" title="Rammus/LoL">Powerball</a></span></span></i>, enemies within the epicenter are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked up</a></span> for 0.<small>75</small> seconds and are dealt <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rammus" data-ability="Powerball" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rammus/LoL#Powerball" title="Powerball\'s"><img alt="Powerball\'s" src="/wiki/images/Rammus_Powerball.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rammus/LoL#Powerball" title="Rammus/LoL">Powerball\'s</a></span></span></i> damage. <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rammus" data-ability="Powerball" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rammus/LoL#Powerball" title="Powerball"><img alt="Powerball" src="/wiki/images/Rammus_Powerball.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rammus/LoL#Powerball" title="Rammus/LoL">Powerball</a></span></span></i> will not collide with enemies during the dash, and its channel will be maintained for the dash and end afterwards.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Center Minimum Damage:',
        raw: '100 / 175 / 250 (+ 60% AP) (+  100 / 130 / 160 / 190 / 220 (+ 100% AP))',
        values: [100, 175, 250],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '100 / 175 / 250',
        children: [
          {
            values: 60,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 60% AP',
          },
          {
            values: [100, 130, 160, 190, 220],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '+  100 / 130 / 160 / 190 / 220',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 100% AP',
              },
            ],
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Center Maximum Damage:',
        raw: '150 / 262.5 / 375 (+ 90% AP) (+  100 / 130 / 160 / 190 / 220 (+ 100% AP))',
        values: [150, 262.5, 375],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '150 / 262.5 / 375',
        children: [
          {
            values: 90,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 90% AP',
          },
          {
            values: [100, 130, 160, 190, 220],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '+  100 / 130 / 160 / 190 / 220',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 100% AP',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    description:
      'The impact causes 3 aftershocks to burst from the area over 3.<small>5</small> seconds, each one dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within and applying the initial <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span>, which stacks up to 4 times.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage per Hit:',
        raw: '20 / 30 / 40 (+ 10% AP)',
        values: [20, 30, 40],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '20 / 30 / 40',
        children: [
          {
            values: 10,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 10% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '60 / 90 / 120 (+ 30% AP)',
        values: [60, 90, 120],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 90 / 120',
        children: [
          {
            values: 30,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 30% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Slow:',
        raw: '60 / 70 / 80%',
        values: [60, 70, 80],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 70 / 80%',
      },
    ],
  },
  {
    description:
      '<i>Soaring Slam\'s</i> damage affects <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a> and is doubled against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span>.',
    leveling: [],
  },
  {
    description:
      '<i>Soaring Slam will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
export const Rammus = { I, Q, W, E, R };
