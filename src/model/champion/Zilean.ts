import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Zilean';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Zilean_Time_in_a_Bottle.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Zilean</b> generates <span style="white-space:nowrap"><a href="/wiki/Experience_(champion)" title="Experience (champion)"><img alt="Experience icon.png" src="/wiki/images/Experience_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #883FD1; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_values="2;3.5;5;6;12" data-top_values="1;6;11;16;18">2 / 3.<small>5</small> / 5 / 6 / 12 (based on level)</span> experience</span></span> (does not count towards his own <a href="/wiki/Experience_(champion)" title="Experience (champion)">level up</a>) every 5 seconds. <i>Time in a Bottle</i> is on cooldown when the game starts and becomes disabled when <b>Zilean</b> reaches level 18.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Line 1:',
        raw: ' Zilean generates  2 / 3',
        values: [2, 3],
        user: 'none',
        units: '',
        unitsText: 'generates  2',
        pre: 'Zilean generates  2 / 3',
      },
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: '5 / 5 / 6 / 12 (based on level) experience (does not count towards his own level up) every 5 seconds',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'experience',
        pre: '5 / 5 / 6 / 12',
        post: 'experience',
        children: [
          {
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'does not count towards his own level up',
            pre: 'does not count towards his own level up',
          },
        ],
      },
    ],
  },
  {
    description:
      'When he has enough to level up an allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, he can select them to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channel</a></span> for 1.<small>2</small> seconds after a 0.<small>5</small>-second <a href="/wiki/Channel#Casting_Times" title="Channel">cast time</a>. The channel is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span> and disabled upon entering <a href="/wiki/Combat_status" title="Combat status">combat</a> with enemy champions or taking damage from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span>, placing it on a <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;10-second cooldown</span>. If <b>Zilean</b> interrupts it himself, it is placed on a 1-second cooldown, increased to 2 if he used a <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> against a turret to do so.',
    leveling: [],
  },
  {
    description:
      'A successful channel levels up the target and rewards <b>Zilean</b> the same amount of <span style="color: #883FD1; white-space:normal">experience</span> for himself as well.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Zilean_Time_Bomb.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Zilean</b> throws a ticking time bomb to the target location that grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of its surroundings. The bomb will attach itself to units that move within the epicenter, or those hit directly, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> them.',
    leveling: [],
  },
  {
    description:
      'After 3 seconds, or when the attached unit dies, the bomb explodes to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '75 / 115 / 165 / 230 / 300 (+ 90% AP)',
        values: [75, 115, 165, 230, 300],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '75 / 115 / 165 / 230 / 300',
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
    ],
  },
  {
    description:
      'The bomb detonates immediately if another bomb attaches itself to the same unit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunning</a></span> nearby enemies for a duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Stun Duration:',
        raw: '1.1 / 1.2 / 1.3 / 1.4 / 1.5',
        values: [1.1, 1.2, 1.3, 1.4, 1.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1.1 / 1.2 / 1.3 / 1.4 / 1.5',
      },
    ],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Zilean_Rewind.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Zilean</b> reduces the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldowns</span> of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zilean" data-ability="Time Bomb" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zilean/LoL#Time_Bomb" title="Time Bomb"><img alt="Time Bomb" src="/wiki/images/Zilean_Time_Bomb.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zilean/LoL#Time_Bomb" title="Zilean/LoL">Time Bomb</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zilean" data-ability="Time Warp" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zilean/LoL#Time_Warp" title="Time Warp"><img alt="Time Warp" src="/wiki/images/Zilean_Time_Warp.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zilean/LoL#Time_Warp" title="Zilean/LoL">Time Warp</a></span></span></i> by 10 seconds each.',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Zilean_Time_Warp.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Zilean</b> applies <i>Time Warp</i> to the target champion which lasts for 2.<small>5</small> seconds.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b>Time Warp:</b></span> If the target is an ally, they gain <span style="color: #F5EE99; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> movement speed</span></span>. If the target is an enemy, they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Movement Speed Modifier:',
        raw: '40 / 55 / 70 / 85 / 99%',
        values: [40, 55, 70, 85, 99],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 55 / 70 / 85 / 99%',
      },
    ],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Zilean_Chronoshift.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Zilean</b> places a protective time rune on the target allied <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or himself for 5 seconds.',
    leveling: [],
  },
  {
    description:
      'If the target takes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">fatal damage</a></span> within the duration, they enter <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span> for 3 seconds, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invulnerable"><a href="/wiki/Invulnerability" title="Invulnerability"><img alt="Cosmic Radiance.png" src="/wiki/images/Taric_Cosmic_Radiance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability" title="Invulnerability">invulnerable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">unable to act</a></span>. Afterwards, they revive while being <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healed</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Heal:',
        raw: '600 / 850 / 1100 (+ 200% AP)',
        values: [600, 850, 1100],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '600 / 850 / 1100',
        children: [
          {
            values: 200,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 200% AP',
          },
        ],
      },
    ],
  },
];
export const Zilean = { I, Q, W, E, R };
