import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Irelia';
const I: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Irelia</b> generates a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Ionian Fervor</i> for each enemy champion hit by her <a href="/wiki/Champion_ability" title="Champion ability">abilities</a>, or if she hits at least one non-champion, lasting for 6 seconds, refreshing on basic attacks and ability hits against enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> and large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>, and stacking up to 4 times.',
    leveling: [],
  },
  {
    img: '/wiki/images/Irelia_Ionian_Fervor.png',
    description:
      '<span class="template_sbc"><b>Ionian Fervor:</b></span> For each stack, <b>Irelia</b> gains <span style="color:orangered; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="7.5;13.75;20" data-top_values="1;7;13" data-bot_key="%">7.<small>5</small>% − 20% (based on level)</span> <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack speed</span></span>, up to a maximum of <span style="color:orangered; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="30;55;80" data-top_values="1;7;13" data-bot_key="%">30% − 80% (based on level)</span></span>. At maximum stacks, <b>Irelia\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> are empowered to deal <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="10;" data-finish="61;" data-bot_values="10;13;16;19;22;25;28;31;34;37;40;43;46;49;52;55;58;61" data-top_values="">10 − 61 (based on level)</span></span> <span style="color:orange; white-space:normal">(+&nbsp;20% <b>bonus</b> AD)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: '5% − 20% (based on level)  bonus attack speed, up to a maximum of 30% − 80% (based on level)',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'bonus_ad',
        unitsText: 'bonus attack speed, up to a maximum of 30% − 80%',
        pre: '5% − 20%',
        post: 'bonus attack speed, up to a maximum of 30% − 80%',
      },
      {
        effectType: 'Stacks',
        name: 'Line 3:',
        raw: " At maximum stacks, Irelia's basic attacks are empowered to deal 10 − 61 (based on level) (+ 20% bonus AD) bonus magic damage  on-hit",
        min: 0,
        max: 10,
        description:
          " At maximum stacks, Irelia's basic attacks are empowered to deal 10 − 61 (based on level) (+ 20% bonus AD) bonus magic damage  on-hit",
        values: [
          10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49, 52, 55, 58,
          61,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'bonus magic damage  on-hit',
        pre: "At maximum stacks, Irelia's basic attacks are empowered to deal 10 − 61",
        post: 'bonus magic damage  on-hit',
        children: [
          {
            values: 20,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 20% bonus AD',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Bladesurge_2.png',
    description:
      '<span class="template_sbc"><b>Innate - Unsteady:</b></span> Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> and large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> hit by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Irelia" data-ability="Flawless Duet" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Irelia/LoL#Flawless_Duet" title="Flawless Duet"><img alt="Flawless Duet" src="/wiki/images/Irelia_Flawless_Duet.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Irelia/LoL#Flawless_Duet" title="Irelia/LoL">Flawless Duet</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Irelia" data-ability="Vanguard\'s Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Irelia/LoL#Vanguard\'s_Edge" title="Vanguard\'s Edge\'s"><img alt="Vanguard\'s Edge\'s" src="/wiki/images/Irelia_Vanguard%27s_Edge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Irelia/LoL#Vanguard\'s_Edge" title="Irelia/LoL">Vanguard\'s Edge\'s</a></span></span></i> initial barrage are <span style="color: #AF1AAF; white-space:normal">marked</span> as <i>Unsteady</i> for 5 seconds. The mark can be consumed by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Irelia" data-ability="Bladesurge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Irelia/LoL#Bladesurge" title="Bladesurge"><img alt="Bladesurge" src="/wiki/images/Irelia_Bladesurge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Irelia/LoL#Bladesurge" title="Irelia/LoL">Bladesurge</a></span></span></i>.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Irelia_Bladesurge.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Irelia</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> 100 units through the target enemy\'s location, and upon collision or dash completion, she deals <span style="color: #FF8C34; white-space:normal">physical damage</span>, applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> herself. <i>Bladesurge</i> deals <span style="color: #FF8C34; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="55;" data-finish="259;" data-bot_values="55;67;79;91;103;115;127;139;151;163;175;187;199;211;223;235;247;259" data-top_values="">55 − 259 (based on level)</span> <b>bonus</b> physical damage</span> to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 2:',
        raw: ' Bladesurge deals 55 − 259 (based on level) bonus physical damage to  minions',
        damagetype: 'Physical',
        values: [
          55, 67, 79, 91, 103, 115, 127, 139, 151, 163, 175, 187, 199, 211, 223,
          235, 247, 259,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'bonus physical damage to  minions',
        pre: 'Bladesurge deals 55 − 259',
        post: 'bonus physical damage to  minions',
      },
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '5 / 25 / 45 / 65 / 85 (+ 60% AD)',
        values: [5, 25, 45, 65, 85],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '5 / 25 / 45 / 65 / 85',
        children: [
          {
            values: 60,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 60% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Heal:',
        raw: '9 / 10 / 11 / 12 / 13% AD',
        values: [9, 10, 11, 12, 13],
        valuesIsPercent: true,
        user: 'player',
        units: 'total_ad',
        unitsText: 'AD',
        pre: '9 / 10 / 11 / 12 / 13% AD',
      },
    ],
  },
  {
    description:
      '<i>Bladesurge\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> is reduced to 0.<small>2</small> seconds upon collision of targets <span style="color: #AF1AAF; white-space:normal">marked</span> as <i><span class="inline-image label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Irelia/LoL#Ionian_Fervor" title="Unsteady"><img alt="Unsteady" src="/wiki/images/Bladesurge_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Irelia/LoL#Ionian_Fervor" title="Irelia/LoL">Unsteady</a></span></span></i>, and is reset if the target dies to or during <i>Bladesurge\'s</i> dash.',
    leveling: [],
  },
  {
    description:
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Irelia" data-ability="Flawless Duet" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Irelia/LoL#Flawless_Duet" title="Flawless Duet"><img alt="Flawless Duet" src="/wiki/images/Irelia_Flawless_Duet.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Irelia/LoL#Flawless_Duet" title="Irelia/LoL">Flawless Duet</a></span></span> can be cast during the dash.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Irelia_Defiant_Dance.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Irelia</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">charges</a></span> for up to 1.<small>5</small> seconds, during which she increases <i>Defiant Dance\'s</i> damage over the first 0.<small>75</small> seconds of the channel and reduces incoming <span style="color: #FF8C34; white-space:normal">physical damage</span> by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="40;" data-finish="70;" data-bot_values="40;41.76;43.53;45.29;47.06;48.82;50.59;52.35;54.12;55.88;57.65;59.41;61.18;62.94;64.71;66.47;68.24;70" data-top_values="" data-bot_key="%">40% − 70% (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;7% per 100 AP)</span> and incoming <span style="color: #00B0F0; white-space:normal">magic damage</span> by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="20;" data-finish="35;" data-bot_values="20;20.88;21.76;22.65;23.53;24.41;25.29;26.18;27.06;27.94;28.82;29.71;30.59;31.47;32.35;33.24;34.12;35" data-top_values="" data-bot_key="%">20% − 35% (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;3.<small>5</small>% per 100 AP)</span>.',
    leveling: [
      {
        effectType: 'Damage',
        name: 'Line 3:',
        raw: '75 seconds of the channel and reduces incoming physical damage by 40% − 70% (based on level) (+ 7% per 100 AP) and incoming magic damage by 20% − 35% (based on level) (+ 3',
        damagetype: 'Physical',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'and incoming magic damage by 20% − 35%',
        pre: '75 seconds of the channel and reduces incoming physical damage by 40% − 70%',
        post: 'and incoming magic damage by 20% − 35%',
        children: [
          {
            values: 7,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 7% per 100 AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Defiant Dance</i> can be recast within the duration, and does so automatically afterwards. <i>Defiant Dance\'s</i> charge cannot be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span> by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span>.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Irelia</b> swipes her blades in the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies around her and within a line, increased by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="channel time" data-displayformula="20% per 0.075 seconds. \'\'This is capped at 0.75 seconds.\'\'" data-bot_values="0;20;40;60;80;100;120;140;160;180;200" data-top_values="0;0.08;0.15;0.23;0.3;0.38;0.45;0.53;0.6;0.68;0.75" data-bot_key="%">0% − 200% (based on channel time)</span>. She also retains the damage reduction for 0.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Minimum Physical Damage:',
        raw: '10 / 25 / 40 / 55 / 70 (+ 40% AD) (+ 40% AP)',
        values: [10, 25, 40, 55, 70],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 25 / 40 / 55 / 70',
        children: [
          {
            values: 40,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 40% AD',
          },
          {
            values: 40,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 40% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Maximum Physical Damage:',
        raw: '30 / 75 / 120 / 165 / 210 (+ 120% AD) (+ 120% AP)',
        values: [30, 75, 120, 165, 210],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 75 / 120 / 165 / 210',
        children: [
          {
            values: 120,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 120% AD',
          },
          {
            values: 120,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 120% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Defiant Dance\'s recast can be used while affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast-inhibiting crowd control"><a href="/wiki/Crowd_control#Disrupting" title="Crowd control#Disrupting"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disrupting" title="Crowd control">cast-inhibiting crowd control</a></span>. If <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Irelia" data-ability="Ionian Fervor" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Irelia/LoL#Ionian_Fervor" title="Ionian Fervor"><img alt="Ionian Fervor" src="/wiki/images/Irelia_Ionian_Fervor.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Irelia/LoL#Ionian_Fervor" title="Irelia/LoL">Ionian Fervor</a></span></span> would expire during the charge, it will instead refresh every 0.<small>25</small> seconds for the remaining charge and be retained for 0.<small>5</small> seconds after the recast is initiated.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Irelia_Flawless_Duet.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Irelia</b> sends a blade to the target location for 3.<small>5</small> seconds. <i>Flawless Duet</i> can be recast after 0.<small>15</small> seconds while the blade is active, and does so automatically at the end of its duration, though not if she is unable to cast abilities.',
    leveling: [],
  },
  {
    img: '/wiki/images/Irelia_Flawless_Duet_2.png',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Irelia</b> sends a second blade to the target location, or to her current position if <i>Flawless Duet</i> was recast automatically.',
    leveling: [],
  },
  {
    description:
      'Once both blades have been placed, they fly toward each other regardless of distance and converge over 0.<small>25</small> seconds, afterwards dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to all enemies within a line between them and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 0.<small>75</small> seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '80 / 125 / 170 / 215 / 260 (+ 80% AP)',
        values: [80, 125, 170, 215, 260],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 125 / 170 / 215 / 260',
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
      '<i>Flawless Duet\'s recast can be used during <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Irelia" data-ability="Bladesurge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Irelia/LoL#Bladesurge" title="Bladesurge"><img alt="Bladesurge" src="/wiki/images/Irelia_Bladesurge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Irelia/LoL#Bladesurge" title="Irelia/LoL">Bladesurge</a></span></span> and the cast time of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Irelia" data-ability="Vanguard\'s Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Irelia/LoL#Vanguard\'s_Edge" title="Vanguard\'s Edge"><img alt="Vanguard\'s Edge" src="/wiki/images/Irelia_Vanguard%27s_Edge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Irelia/LoL#Vanguard\'s_Edge" title="Irelia/LoL">Vanguard\'s Edge</a></span></span>. Each of the blades\' travel times are <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.25 seconds, but rounded up to the next game tick.">0.<small>264</small> seconds</span>. Flawless Duet will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Irelia" data-ability="Bladesurge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Irelia/LoL#Bladesurge" title="Bladesurge\'s"><img alt="Bladesurge\'s" src="/wiki/images/Irelia_Bladesurge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Irelia/LoL#Bladesurge" title="Irelia/LoL">Bladesurge\'s</a></span></span> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>total</b> cooldown</span> is reduced by a flat amount.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Flat Cooldown Reduction:',
        raw: '0.5 / 1.5 / 2.5',
        values: [0.5, 1.5, 2.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '0.5 / 1.5 / 2.5',
      },
    ],
  },
  {
    img: '/wiki/images/Irelia_Vanguard%27s_Edge.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Irelia</b> launches a barrage of blades in the target direction, expanding outward upon hitting an enemy champion, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to all enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> them for 1 second.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '125 / 250 / 375 (+ 70% AP)',
        values: [125, 250, 375],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '125 / 250 / 375',
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
      'After expanding, the blades drop on the ground, knocking all enemy units away from them, though not rendering them <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span>, and forming a spade-shaped perimeter around the enemy champion hit for 2.<small>5</small> seconds that grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of its surroundings. Enemies that pass through the blades for the first time are dealt the same <span style="color: #00B0F0; white-space:normal">magic damage</span> and are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 90% for 1.<small>5</small> seconds.',
    leveling: [],
  },
  {
    description:
      "<i>The perimeter will point at the same angle <b>Irelia</b> casted it from, but based on the target's center.</i>",
    leveling: [],
  },
];
export const Irelia = { I, Q, W, E, R };
