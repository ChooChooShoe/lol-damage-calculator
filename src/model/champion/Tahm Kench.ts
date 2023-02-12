import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Tahm Kench';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Tahm_Kench_An_Acquired_Taste.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> <b>Tahm Kench\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="Tongue Lash" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#Tongue_Lash" title="Tongue Lash"><img alt="Tongue Lash" src="/wiki/images/Tahm_Kench_Tongue_Lash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#Tongue_Lash" title="Tahm Kench/LoL">Tongue Lash</a></span></span></i> are empowered to deal <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#00B0F0;" data-start="8;" data-finish="60;" data-bot_values="8;11.06;14.12;17.18;20.24;23.29;26.35;29.41;32.47;35.53;38.59;41.65;44.71;47.76;50.82;53.88;56.94;60" data-top_values="">8 − 60 (based on level)</span> (<span style="color: #7A6DFF; white-space:normal">+&nbsp;2% AP</span> <span style="color: #1F995C; white-space:normal">per 100 <b>bonus</b> health</span>) <span style="color: #1F995C; white-space:normal">(+&nbsp;3% of his <b>bonus</b> health)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> and apply a <a href="/wiki/Stack" title="Stack">stack</a> of <i>An Acquired Taste</i> against enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> for 5 seconds, refreshing on subsequent hits and stacking up to 3 times. Stacks expire by one every 0.<small>67</small> seconds when the duration ends.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: " Tahm Kench's basic attacks  on-hit and  Tongue Lash are empowered to deal 8 − 60 (based on level) (+ 2% AP per 100 bonus health) (+ 3% of his bonus health) bonus magic damage and apply a stack of An Acquired Taste against enemy  champions for 5 seconds, refreshing on subsequent hits and stacking up to 3 times",
        healType: 'BonusHealth',
        values: [
          8, 11.06, 14.12, 17.18, 20.24, 23.29, 26.35, 29.41, 32.47, 35.53,
          38.59, 41.65, 44.71, 47.76, 50.82, 53.88, 56.94, 60,
        ],
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'total_ap',
        unitsText:
          'bonus magic damage and apply a stack of An Acquired Taste against enemy  champions for 5 seconds, refreshing on subsequent hits and stacking up to 3 times',
        pre: "Tahm Kench's basic attacks  on-hit and  Tongue Lash are empowered to deal 8 − 60",
        post: 'bonus magic damage and apply a stack of An Acquired Taste against enemy  champions for 5 seconds, refreshing on subsequent hits and stacking up to 3 times',
        children: [
          {
            values: 2,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP per 100 bonus health',
            pre: '+ 2% AP per 100 bonus health',
          },
          {
            values: 3,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_hp',
            unitsText: 'of his bonus health',
            pre: '+ 3% of his bonus health',
          },
        ],
      },
    ],
  },
  {
    description:
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="Tongue Lash" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#Tongue_Lash" title="Tongue Lash"><img alt="Tongue Lash" src="/wiki/images/Tahm_Kench_Tongue_Lash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#Tongue_Lash" title="Tahm Kench/LoL">Tongue Lash</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="Devour" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#Devour" title="Devour"><img alt="Devour" src="/wiki/images/Tahm_Kench_Devour.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#Devour" title="Tahm Kench/LoL">Devour</a></span></span></i> gain additional effects against enemies with 3 stacks, consuming them all.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Tahm_Kench_Tongue_Lash.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Tahm Kench</b> lashes his tongue in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them by 50% for 2 seconds. If this hits an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, <b>Tahm Kench</b> also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> himself.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Magic Damage:',
        raw: '80 / 130 / 180 / 230 / 280 (+ 100% AP) (+ 8 − 60 (based on level) (+ 2% AP per 100 bonus health) (+ 3% bonus health))',
        healType: 'BonusHealth',
        values: [80, 130, 180, 230, 280],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 130 / 180 / 230 / 280',
        children: [
          {
            values: 100,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 100% AP',
          },
          {
            values: [
              8, 11.06, 14.12, 17.18, 20.24, 23.29, 26.35, 29.41, 32.47, 35.53,
              38.59, 41.65, 44.71, 47.76, 50.82, 53.88, 56.94, 60,
            ],
            valuesIsBasedOnLevel: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '+ 8 − 60',
            children: [
              {
                values: 2,
                valuesIsPercent: true,
                user: 'player',
                units: 'total_ap',
                unitsText: 'AP per 100 bonus health',
                pre: '+ 2% AP per 100 bonus health',
              },
              {
                values: 3,
                valuesIsPercent: true,
                user: 'player',
                units: 'bonus_hp',
                unitsText: 'bonus health',
                pre: '+ 3% bonus health',
              },
            ],
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Heal:',
        raw: '10 / 15 / 20 / 25 / 30 (+ 5 / 5.5 / 6 / 6.5 / 7% of missing health)',
        healType: 'BonusHealth',
        values: [10, 15, 20, 25, 30],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '10 / 15 / 20 / 25 / 30',
        children: [
          {
            values: [5, 5.5, 6, 6.5, 7],
            valuesIsPercent: true,
            user: 'player',
            units: 'missing_hp',
            unitsText: 'of missing health',
            pre: '+ 5 / 5.5 / 6 / 6.5 / 7% of missing health',
          },
        ],
      },
    ],
  },
  {
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="An Acquired Taste" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#An_Acquired_Taste" title="An Acquired Taste"><img alt="An Acquired Taste" src="/wiki/images/Tahm_Kench_An_Acquired_Taste.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#An_Acquired_Taste" title="Tahm Kench/LoL">An Acquired Taste</a></span></span> Bonus:</b></span> The target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stunned</a></span> for 1.<small>5</small> seconds. <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="Devour" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#Devour" title="Devour"><img alt="Devour" src="/wiki/images/Tahm_Kench_Devour.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#Devour" title="Tahm Kench/LoL">Devour</a></span></span></i> can be cast during <i>Tongue Lash</i> at no cost to pull the target to <b>Tahm Kench</b> before swallowing them.',
    leveling: [],
  },
  {
    description:
      '<i><b>Tahm Kench</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">unable</a></span> to move, attack, or cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="Abyssal Dive" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#Abyssal_Dive" title="Abyssal Dive"><img alt="Abyssal Dive" src="/wiki/images/Tahm_Kench_Abyssal_Dive.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#Abyssal_Dive" title="Tahm Kench/LoL">Abyssal Dive</a></span></span> or <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="Devour" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#Devour" title="Devour"><img alt="Devour" src="/wiki/images/Tahm_Kench_Devour.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#Devour" title="Tahm Kench/LoL">Devour</a></span></span> on a different target while his tongue is in flight. Tongue Lash\'s range and travel speed can be increased by <b>Tahm Kench\'s</b> <a href="/wiki/Size" title="Size">size</a>.</i>',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Tahm_Kench_Abyssal_Dive.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Tahm Kench</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channels"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for 1.<small>35</small> seconds as he dives into the waters, then <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> to the target location after a 0.<small>15</small>-second delay and remains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">unable to act</a></span> for 0.<small>65</small> seconds after the channel completes. <i>Abyssal Dive</i> grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area during the channel.',
    leveling: [],
  },
  {
    description:
      '<b>Tahm Kench</b> emerges to deal <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies, as well as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock up</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> them for 1 second. If this hits at least one enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span>, 40% of <i>Abyssal Dive\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> and <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana</span></span> cost are refunded.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '100 / 135 / 170 / 205 / 240 (+ 150% AP)',
        values: [100, 135, 170, 205, 240],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '100 / 135 / 170 / 205 / 240',
        children: [
          {
            values: 150,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 150% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      "<i>Enemies can see the indicator for <b>Tahm Kench's</b> destination after he has channeled for 0.<small>75</small> seconds. Abyssal Dive will cast at max range if cast beyond that.</i>",
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> <b>Tahm Kench</b> stores a portion of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after modifiers">post-mitigation damage</span> he takes as <a href="/wiki/Health#Grey_health" title="Health">grey health</a> on his <a href="/wiki/Health_bar" title="Health bar">health bar</a>, increased while there are at least 2 nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy champions either dead or alive. He can store up to <span style="color: #1F995C; white-space:normal">300% of his <b>maximum</b> health</span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Damage Stored into Grey Health:',
        raw: '13 / 21 / 29 / 37 / 45%',
        values: [13, 21, 29, 37, 45],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '13 / 21 / 29 / 37 / 45%',
      },
      {
        effectType: 'Unique',
        name: 'Increased Damage Stored into Grey Health:',
        raw: '40 / 42.5 / 45 / 47.5 / 50%',
        values: [40, 42.5, 45, 47.5, 50],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 42.5 / 45 / 47.5 / 50%',
      },
    ],
  },
  {
    description:
      'While <i>Thick Skin</i> is not on cooldown, and after 4 seconds without taking damage, <b>Tahm Kench</b> rapidly consumes his <a href="/wiki/Health#Grey_health" title="Health">grey health</a> to restore <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="45;" data-finish="100;" data-bot_values="45;48.24;51.47;54.71;57.94;61.18;64.41;67.65;70.88;74.12;77.35;80.59;83.82;87.06;90.29;93.53;96.76;100" data-top_values="" data-bot_key="%">45% − 100% (based on level)</span> of the amount, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Healing"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> for <span style="color: #1F995C; white-space:normal">10% of his <b>maximum</b> health</span> every <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.25 seconds, but rounded up to the next game tick.">0.<small>264</small> seconds</span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: 'While Thick Skin is not on cooldown, and after 4 seconds without taking damage, Tahm Kench rapidly consumes his grey health to restore 45% − 100% (based on level) of the amount,  healing for 10% of his maximum health every 0',
        healType: 'BonusHealth',
        values: [],
        valuesIsPercent: true,
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'maximum_hp',
        unitsText:
          'of the amount,  healing for 10% of his maximum health every 0',
        pre: 'While Thick Skin is not on cooldown, and after 4 seconds without taking damage, Tahm Kench rapidly consumes his grey health to restore 45% − 100%',
        post: 'of the amount,  healing for 10% of his maximum health every 0',
      },
    ],
  },
  {
    img: '/wiki/images/Tahm_Kench_Thick_Skin.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Tahm Kench</b> converts his current <a href="/wiki/Health#Grey_health" title="Health">grey health</a> into a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> that lasts for 2.<small>5</small> seconds.',
    leveling: [],
  },
];
const R1: SubSkill[] = [
  {
    img: '/wiki/images/Tahm_Kench_Devour.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Tahm Kench</b> swallows the target <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> for up to 3 seconds, rendering them <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immune"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immune</a></span>. <i>Devour</i> can be cast on enemies only with 3 stacks of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="An Acquired Taste" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#An_Acquired_Taste" title="An Acquired Taste"><img alt="An Acquired Taste" src="/wiki/images/Tahm_Kench_An_Acquired_Taste.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#An_Acquired_Taste" title="Tahm Kench/LoL">An Acquired Taste</a></span></span></i>.',
    leveling: [],
  },
  {
    description:
      'If the target is an ally, they become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">unable to act</a></span> and are granted a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span>, which decays in strength by 50 every 0.<small>25</small> seconds after they are <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="Regurgitate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#Regurgitate" title="Regurgitated"><img alt="Regurgitated" src="/wiki/images/Tahm_Kench_Regurgitate.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#Regurgitate" title="Tahm Kench/LoL">Regurgitated</a></span></span></i>. <b>Tahm Kench</b> will also gain <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">40% <b>bonus</b> movement speed</span></span> for 3 seconds and is unable to cast movement spells besides <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="Abyssal Dive" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#Abyssal_Dive" title="Abyssal Dive"><img alt="Abyssal Dive" src="/wiki/images/Tahm_Kench_Abyssal_Dive.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#Abyssal_Dive" title="Tahm Kench/LoL">Abyssal Dive</a></span></span></i> while an ally is swallowed.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Shield Strength:',
        raw: '650 / 800 / 950 (+ 150% AP)',
        values: [650, 800, 950],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '650 / 800 / 950',
        children: [
          {
            values: 150,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 150% AP',
          },
        ],
      },
    ],
  },
  {
    description:
      'After 1 second, <b>Tahm Kench</b> can cast <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="Regurgitate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#Regurgitate" title="Regurgitate"><img alt="Regurgitate" src="/wiki/images/Tahm_Kench_Regurgitate.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#Regurgitate" title="Tahm Kench/LoL">Regurgitate</a></span></span></i> within the duration, and automatically does so afterwards. The swallowed ally can also input a movement command to force this cast in the target direction, unless they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Immobilize"><a href="/wiki/Crowd_control#Immobilizing" title="Crowd control#Immobilizing"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immobilizing" title="Crowd control">immobilized</a></span>.',
    leveling: [],
  },
  {
    description:
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="An Acquired Taste" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#An_Acquired_Taste" title="An Acquired Taste"><img alt="An Acquired Taste" src="/wiki/images/Tahm_Kench_An_Acquired_Taste.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#An_Acquired_Taste" title="Tahm Kench/LoL">An Acquired Taste</a></span></span> Bonus:</b></span> The target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Suppression"><a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control#Suppression"><img alt="Suppression icon.png" src="/wiki/images/Suppression_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control">suppressed</a></span> while swallowed. <b>Tahm Kench</b> will also be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Grounded"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 40% while an enemy is swallowed.',
    leveling: [],
  },
  {
    description:
      '<i>If <b>Tahm Kench</b> is performing <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="Abyssal Dive" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#Abyssal_Dive" title="Abyssal Dive"><img alt="Abyssal Dive" src="/wiki/images/Tahm_Kench_Abyssal_Dive.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#Abyssal_Dive" title="Tahm Kench/LoL">Abyssal Dive</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="Regurgitate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#Regurgitate" title="Regurgitate"><img alt="Regurgitate" src="/wiki/images/Tahm_Kench_Regurgitate.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#Regurgitate" title="Tahm Kench/LoL">Regurgitate</a></span></span> will not automatically cast until after he finishes.</i>',
    leveling: [],
  },
];
const R2: SubSkill[] = [
  {
    img: '/wiki/images/Tahm_Kench_Regurgitate.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Tahm Kench</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">spits</a></span> the swallowed champion in the target direction. If they are an enemy, he deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to them at the end of the displacement.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Magic Damage:',
        raw: "100 / 250 / 400 (+ 15% (+ 7% per 100 AP) of the target's maximum health)",
        healType: 'OutgoingHeals',
        values: [100, 250, 400],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '100 / 250 / 400',
        children: [
          {
            values: 15,
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of the target's maximum health",
            pre: '+ 15%',
            post: "of the target's maximum health",
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
    ],
  },
];
export const TahmKench = { I, Q, W, E, R1, R2 };
