import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Urgot';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Urgot_Echoing_Flames.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Urgot\'s</b> six legs each conceal a shotgun that covers an arc, together forming a full circle of cover around him. Each shotgun can fire once before incurring a unique <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>.',
    leveling: [],
  },
  {
    description:
      '<b>Urgot\'s</b> next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> within the arc of a shotgun will cause it to fire in a cone, dealing <span style="color:orange; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="40;52;64;76;88;100" data-top_values="1;6;9;11;13;15" data-bot_key="%">40% − 100% (based on level)</span> AD</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="2;3;4;5;6" data-top_values="1;6;9;11;13" data-bot_key="%">2% − 6% (based on level)</span> of target\'s <b>maximum</b> health)</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit, capped at <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="100;" data-finish="360;" data-bot_values="100;115.29;130.59;145.88;161.18;176.47;191.76;207.06;222.35;237.65;252.94;268.24;283.53;298.82;314.12;329.41;344.71;360" data-top_values="">100 − 360 (based on level)</span> against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: "Urgot's next basic attack  on-hit within the arc of a shotgun will cause it to fire in a cone, dealing 40% − 100% (based on level) AD (+ 2% − 6% (based on level) of target's maximum health) physical damage to enemies hit, capped at 100 − 360 (based on level) against  monsters",
        healType: 'PhysicalVamp',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'total_ad',
        unitsText: 'AD',
        pre: "Urgot's next basic attack  on-hit within the arc of a shotgun will cause it to fire in a cone, dealing 40% − 100%",
        post: 'AD',
        children: [
          {
            values: [],
            valuesIsPercent: true,
            valuesIsBasedOnLevel: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: '+ 2% − 6%',
            post: "of target's maximum health",
          },
        ],
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Urgot_Corrosive_Charge.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Urgot</b> launches a canister at the target location. Upon landing, it explodes after 0.<small>3</small> seconds to deal <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> them for 1.<small>25</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '25 / 70 / 115 / 160 / 205 (+ 70% AD)',
        values: [25, 70, 115, 160, 205],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 70 / 115 / 160 / 205',
        children: [
          {
            values: 70,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 70% AD',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Slow:',
        raw: '45 / 50 / 55 / 60 / 65%',
        values: [45, 50, 55, 60, 65],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '45 / 50 / 55 / 60 / 65%',
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Urgot\'s</b> other abilities <i>mark</i> enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> hit for 5 seconds. Only one enemy can be <i>marked</i> at a time.<br><br> Additionally, at maximum rank, <i>Purge</i> lasts indefinitely and becomes a toggled ability.',
    leveling: [],
  },
  {
    img: '/wiki/images/Urgot_Purge.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Urgot</b> equips his machine gun for 4 seconds, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosting"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span> to minions and non-epic monsters around him and autonomously firing at the nearest enemy at a <b>fixed</b> <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">3.<small>0</small> attack speed</span></span>, prioritizing <i>marked</i> enemy champions and refreshing the <i>mark</i> with every attack. While firing, <b>Urgot</b> is able to move and gains 40% <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow resist"><a href="/wiki/Slow_resist" title="Slow resist"><img alt="Slow immune icon.png" src="/wiki/images/Slow_immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow_resist" title="Slow resist">slow resist</a></span>, but his <span style="color: #F5EE99; white-space:normal"><b>base</b> movement speed</span> is reduced by <span style="color: #F5EE99; white-space:normal">125</span>.',
    leveling: [],
  },
  {
    description:
      'Attacks with <i>Purge</i> deal <span style="color: #FF8C34; white-space:normal"><b>modified</b> physical damage</span>, with a minimum threshold of 50 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>, and apply <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> damage at 50% effectiveness, but they cannot <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span>. <b>Urgot</b> cannot perform attacks while unable to declare basic attacks.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Modified Physical Damage:',
        raw: '12 (+ 20 / 23.5 / 27 / 30.5 / 34% AD)',
        values: 12,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '12',
        children: [
          {
            values: [20, 23.5, 27, 30.5, 34],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ad',
            unitsText: 'AD',
            pre: '+ 20 / 23.5 / 27 / 30.5 / 34% AD',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Purge</i> can be recast after 0.<small>5</small> seconds within the duration, and does so automatically afterwards.',
    leveling: [],
  },
  {
    img: '/wiki/images/Urgot_Purge_2.png',
    description:
      '<span class="template_sbc"><b>Recast:</b></span> <b>Urgot</b> ends <i>Purge</i>.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Urgot_Disdain.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Urgot</b> grants himself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for 4 seconds.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Shield Strength:',
        raw: '55 / 75 / 95 / 115 / 135 (+ 135% bonus AD) (+ 13.5% bonus health)',
        healType: 'BonusHealth',
        values: [55, 75, 95, 115, 135],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '55 / 75 / 95 / 115 / 135',
        children: [
          {
            values: 135,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 135% bonus AD',
          },
          {
            values: 13.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_hp',
            unitsText: 'bonus health',
            pre: '+ 13.5% bonus health',
          },
        ],
      },
    ],
  },
  {
    description:
      'After the cast time, <b>Urgot</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction, though not through terrain, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies he passes through, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them aside</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 1 second.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '90 / 120 / 150 / 180 / 210 (+ 100% bonus AD)',
        values: [90, 120, 150, 180, 210],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '90 / 120 / 150 / 180 / 210',
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
  {
    description:
      '<b>Urgot</b> will stop upon hitting an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> them for 1.<small>5</small> seconds and, after 0.<small>25</small> seconds, also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">flinging</a></span> them to the location <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="this destination is a fixed location and is unaffected by size modifiers on Urgot or the target moving away before the displacement started">100 units behind him</span>, though not through terrain.',
    leveling: [],
  },
  {
    description:
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Urgot" data-ability="Purge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Urgot/LoL#Purge" title="Purge"><img alt="Purge" src="/wiki/images/Urgot_Purge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Urgot/LoL#Purge" title="Urgot/LoL">Purge</a></span></span> can be cast during the dash.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Urgot_Fear_Beyond_Death.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Urgot</b> fires a chem-drill in the target direction that impales the first enemy champion hit, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> and leashing the target for 4 seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealed</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="target\'s missing health" data-displayformula="1% per 1% missing health. \'\'This is capped at 75%\'\'" data-bot_values="0;7.5;15;22.5;30;37.5;45;52.5;60;67.5;75" data-top_values="0;7.5;15;22.5;30;37.5;45;52.5;60;67.5;75" data-bot_key="%" data-top_key="%">0% − 75% (based on target\'s <b>missing</b> health)</span></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: " Urgot fires a chem-drill in the target direction that impales the first enemy champion hit, dealing physical damage and leashing the target for 4 seconds, during which they are  revealed and  slowed by 0% − 75% (based on target's missing health)",
        healType: 'PhysicalVamp',
        values: 4,
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText:
          '− 75fires a chem-drill in the target direction that impales the first enemy champion hit, dealing physical damage and leashing the target for 4 seconds, during which they are  revealed and  slowed by 0',
        pre: 'Urgot fires a chem-drill in the target direction that impales the first enemy champion hit, dealing physical damage and leashing the target for 4 seconds, during which they are  revealed and  slowed by 0% − 75%',
        children: [
          {
            values: 0,
            user: 'target',
            units: 'missing_hp',
            unitsText: "based on target's missing health",
            pre: "based on target's missing health",
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Physical Damage:',
        raw: '100 / 225 / 350 (+ 50% bonus AD)',
        values: [100, 225, 350],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '100 / 225 / 350',
        children: [
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '+ 50% bonus AD',
          },
        ],
      },
    ],
  },
  {
    img: '/wiki/images/Fear_Beyond_Death_3.png',
    description:
      '<i>Fear Beyond Death</i> can be recast if the leashed target is below <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;25% of their <b>maximum</b> health</span></span>, and does so automatically if the chem-drill would kill the target, the ability is cast again while the target was above the threshold and is then brought within it, or the target is within the threshold at the end of the duration.',
    leveling: [],
  },
  {
    img: '/wiki/images/Urgot_Fear_Beyond_Death_2.png',
    description:
      '<span class="template_sbc"><b>Recast - Mercy:</b></span> <b>Urgot</b> launches chains at the leashed target, then <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for 1.<small>5</small> seconds once they latch on. During this time, he reels them toward him, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Suppression"><a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control#Suppression"><img alt="Suppression icon.png" src="/wiki/images/Suppression_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control">suppressing</a></span> them, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> them, rendering them <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, and preventing them from taking damage from <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Negates application of damage from any source that is not the execution">other sources</span>. If the target is near <b>Urgot</b> when the chains connect, they are pushed up to <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">1000</span> units away based on their proximity to him. This channel cannot be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span> by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span>.',
    leveling: [],
  },
  {
    description:
      'Upon completing the channel, the target is <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike true icon.png" src="/wiki/images/Critical_strike_true_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike"><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Execute"><a href="/wiki/Kill#Execute" title="Kill#Execute"><img alt="Death from Below.png" src="/wiki/images/Pyke_Death_from_Below.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Kill#Execute" title="Kill">executed</a></span></span>. If the execution is successful, he <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fear"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">fears</a></span> nearby enemies for 1.<small>5</small> seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 75%.',
    leveling: [],
  },
  {
    description:
      '<i>Fear Beyond Death\'s recast can be used while affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cast-inhibiting crowd control"><a href="/wiki/Crowd_control#Disrupting" title="Crowd control#Disrupting"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disrupting" title="Crowd control">cast-inhibiting crowd control</a></span>.</i>',
    leveling: [],
  },
];
export const Urgot = { I, Q, W, E, R };
