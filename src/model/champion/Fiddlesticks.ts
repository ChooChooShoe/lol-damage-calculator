import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = 'Fiddlesticks';
const I: SubSkill[] = [
  {
    img: '/wiki/images/Fiddlesticks_A_Harmless_Scarecrow.png',
    description:
      '<span class="template_sbc"><b>Innate - Scarecrow Effigy:</b></span> <b>Fiddlesticks</b> begins the game with an exclusive <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Scarecrow Effigy" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Scarecrow_Effigy" title="Scarecrow Effigy"><img alt="Scarecrow Effigy" src="/wiki/images/Scarecrow_Effigy_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Scarecrow_Effigy" title="Scarecrow Effigy">Scarecrow Effigy</a></span></span>, which permanently occupies the <a href="/wiki/Trinket_item" title="Trinket item">trinket</a> slot. <b>Fiddlesticks</b> can pretend to be an <i>Effigy</i> by standing still and not acting nor being acted upon for 2 seconds, during which it adjusts its body into a scarecrow and extends its arm out to expose its lantern.',
    leveling: [],
  },
  {
    img: '/wiki/images/Fiddlesticks_A_Harmless_Scarecrow_2.png',
    description:
      '<span class="template_sbc"><b>Innate - A Harmless Scarecrow:</b></span> From <a href="/wiki/Experience_(champion)" title="Experience (champion)">level</a> 6 onward, placing an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Effigy"><a href="/wiki/Ward" title="Ward"><img alt="Totem Ward icon.png" src="/wiki/images/Totem_Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ward" title="Ward">Effigy</a></span> also summons a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sweeper drone"><a href="/wiki/Oracle_Lens" title="Oracle Lens"><img alt="Sweeper Drone icon.png" src="/wiki/images/Sweeper_Drone_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Oracle_Lens" title="Oracle Lens">Sweeper Drone</a></span> at the location for 6 seconds.',
    leveling: [],
  },
];
const Q: SubSkill[] = [
  {
    description:
      '<span class="template_sbc"><b>Passive:</b></span> While <b>Fiddlesticks</b> has been <a href="/wiki/Combat_status" title="Combat status">out of combat</a> for at least <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">2.<small>5</small> seconds</span> and is not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> to the enemy team, or is pretending to be an <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Fiddlesticks" data-ability="A Harmless Scarecrow" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Fiddlesticks/LoL#A_Harmless_Scarecrow" title="Effigy"><img alt="Effigy" src="/wiki/images/Fiddlesticks_A_Harmless_Scarecrow.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Fiddlesticks/LoL#A_Harmless_Scarecrow" title="Fiddlesticks/LoL">Effigy</a></span></span></i>, its next damaging ability will additionally <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fear"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">fear</a></span> targets hit for a duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Fear Duration:',
        raw: '1.25 / 1.5 / 1.75 / 2 / 2.25',
        values: [1.25, 1.5, 1.75, 2, 2.25],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1.25 / 1.5 / 1.75 / 2 / 2.25',
      },
    ],
  },
  {
    img: '/wiki/images/Fiddlesticks_Terrify.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Fiddlesticks</b> launches a crow at the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fear"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">fears</a></span> them for a duration. <i>Terrify</i> has a minimum damage threshold and is capped at 400 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Magic Damage:',
        raw: "6 / 7 / 8 / 9 / 10% (+ 2% per 100 AP) of target's current health",
        healType: 'OutgoingHeals',
        values: [6, 7, 8, 9, 10],
        valuesIsPercent: true,
        user: 'target',
        units: 'current_hp',
        unitsText: "of target's current health",
        pre: '6 / 7 / 8 / 9 / 10%',
        post: "of target's current health",
        children: [
          {
            values: 2,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 2% per 100 AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Minimum Damage:',
        raw: '40 / 60 / 80 / 100 / 120',
        values: [40, 60, 80, 100, 120],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '40 / 60 / 80 / 100 / 120',
      },
      {
        effectType: 'Unique',
        name: 'Fear Duration:',
        raw: '1.25 / 1.5 / 1.75 / 2 / 2.25',
        values: [1.25, 1.5, 1.75, 2, 2.25],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1.25 / 1.5 / 1.75 / 2 / 2.25',
      },
    ],
  },
  {
    description:
      'Targets feared by <b>Fiddlesticks</b> by any means cannot be affected by it again for a duration equal to <i>Terrify\'s</i> cooldown. Against these targets, <i>Terrify\'s</i> <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">damage</span> and minimum threshold are doubled.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Increased Magic Damage:',
        raw: "12 / 14 / 16 / 18 / 20% (+ 4% per 100 AP) of target's current health",
        healType: 'OutgoingHeals',
        values: [12, 14, 16, 18, 20],
        valuesIsPercent: true,
        user: 'target',
        units: 'current_hp',
        unitsText: "of target's current health",
        pre: '12 / 14 / 16 / 18 / 20%',
        post: "of target's current health",
        children: [
          {
            values: 4,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'per 100 AP',
            pre: '+ 4% per 100 AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Increased Minimum Damage:',
        raw: '80 / 120 / 160 / 200 / 240',
        values: [80, 120, 160, 200, 240],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 120 / 160 / 200 / 240',
      },
    ],
  },
  {
    description:
      '<i>Terrify</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> affected targets by 90%.',
    leveling: [],
  },
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Fiddlesticks_Bountiful_Harvest.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Fiddlesticks</b> forms a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tether</a></span> between itself and each nearby enemy over the cast time, then <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for up to 2 seconds to harvest their souls, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> them in the process.',
    leveling: [],
  },
  {
    description:
      'While <b>Fiddlesticks</b> is channeling, the tethered enemies are dealt <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>25</small> seconds, with the final tick at the end of the channel dealing additional <span style="color: #00B0F0; white-space:normal">magic damage</span>. <i>Bountiful Harvest</i> deals 135% damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> and 50% damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage per Tick:',
        raw: '15 / 22.5 / 30 / 37.5 / 45 (+ 8.75% AP)',
        values: [15, 22.5, 30, 37.5, 45],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 22.5 / 30 / 37.5 / 45',
        children: [
          {
            values: 8.75,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 8.75% AP',
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Last Tick of Damage:',
        raw: "15 / 22.5 / 30 / 37.5 / 45 (+ 8.75% AP) (+ 12 / 14.5 / 17 / 19.5 / 22% of target's missing health)",
        healType: 'OutgoingHeals',
        values: [15, 22.5, 30, 37.5, 45],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '15 / 22.5 / 30 / 37.5 / 45',
        children: [
          {
            values: 8.75,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 8.75% AP',
          },
          {
            values: [12, 14.5, 17, 19.5, 22],
            valuesIsPercent: true,
            user: 'target',
            units: 'missing_hp',
            unitsText: "of target's missing health",
            pre: "+ 12 / 14.5 / 17 / 19.5 / 22% of target's missing health",
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Total Magic Damage:',
        raw: "120 / 180 / 240 / 300 / 360 (+ 70% AP) (+ 12 / 14.5 / 17 / 19.5 / 22% of target's missing health)",
        healType: 'OutgoingHeals',
        values: [120, 180, 240, 300, 360],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '120 / 180 / 240 / 300 / 360',
        children: [
          {
            values: 70,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 70% AP',
          },
          {
            values: [12, 14.5, 17, 19.5, 22],
            valuesIsPercent: true,
            user: 'target',
            units: 'missing_hp',
            unitsText: "of target's missing health",
            pre: "+ 12 / 14.5 / 17 / 19.5 / 22% of target's missing health",
          },
        ],
      },
    ],
  },
  {
    description:
      '<b>Fiddlesticks</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> itself for a percentage of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage dealt before modifiers">pre-mitigation damage</span> dealt, modified to 45% against monsters and 15% against minions.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Champion Heal Percentage:',
        raw: '25 / 32.5 / 40 / 47.5 / 55%',
        values: [25, 32.5, 40, 47.5, 55],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '25 / 32.5 / 40 / 47.5 / 55%',
      },
      {
        effectType: 'Heal',
        name: 'Total Heal per Champion:',
        raw: "30 / 58.5 / 96 / 142.5 / 198 (+ 17.5 / 22.75 / 28 / 33.25 / 38.5% AP) (+ 3 / 4.7125 / 6.8 / 9.2625 / 12.1% of target's missing health)",
        healType: 'OutgoingHeals',
        values: [30, 58.5, 96, 142.5, 198],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '30 / 58.5 / 96 / 142.5 / 198',
        children: [
          {
            values: [17.5, 22.75, 28, 33.25, 38.5],
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 17.5 / 22.75 / 28 / 33.25 / 38.5% AP',
          },
          {
            values: [3, 4.7125, 6.8, 9.2625, 12.1],
            valuesIsPercent: true,
            user: 'target',
            units: 'missing_hp',
            unitsText: "of target's missing health",
            pre: "+ 3 / 4.7125 / 6.8 / 9.2625 / 12.1% of target's missing health",
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Total Heal per Monster:',
        raw: "72.9 / 109.35 / 145.8 / 182.25 / 218.7 (+ 42.525% AP) (+ 7.29 / 8.80875 / 10.3275 / 11.84625 / 13.365% of target's missing health)",
        healType: 'OutgoingHeals',
        values: [72.9, 109.35, 145.8, 182.25, 218.7],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '72.9 / 109.35 / 145.8 / 182.25 / 218.7',
        children: [
          {
            values: 42.525,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 42.525% AP',
          },
          {
            values: [7.29, 8.80875, 10.3275, 11.84625, 13.365],
            valuesIsPercent: true,
            user: 'target',
            units: 'missing_hp',
            unitsText: "of target's missing health",
            pre: "+ 7.29 / 8.80875 / 10.3275 / 11.84625 / 13.365% of target's missing health",
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Total Heal per Minion:',
        raw: "9 / 13.5 / 18 / 22.5 / 27 (+ 5.25% AP) (+ 0.9 / 1.0875 / 1.275 / 1.4625 / 1.65% of target's missing health)",
        healType: 'OutgoingHeals',
        values: [9, 13.5, 18, 22.5, 27],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '9 / 13.5 / 18 / 22.5 / 27',
        children: [
          {
            values: 5.25,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 5.25% AP',
          },
          {
            values: [0.9, 1.0875, 1.275, 1.4625, 1.65],
            valuesIsPercent: true,
            user: 'target',
            units: 'missing_hp',
            unitsText: "of target's missing health",
            pre: "+ 0.9 / 1.0875 / 1.275 / 1.4625 / 1.65% of target's missing health",
          },
        ],
      },
    ],
  },
  {
    description:
      '<i>Bountiful Harvest</i> ends if all targets have died or broken their tethers. If the channel was not <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="e.g. by Fiddlesticks or crowd control effects">interrupted</span>, 60% of the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> is refunded.',
    leveling: [],
  },
  {
    description:
      '<i>A nearby enemy is required to cast this ability. The target does not have to be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> to be tethered by this ability.</i>',
    leveling: [],
  },
];
const E: SubSkill[] = [
  {
    img: '/wiki/images/Fiddlesticks_Reap.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Fiddlesticks</b> slashes the target location with its scythe, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within the area and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them for 1.<small>25</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage:',
        raw: '70 / 105 / 140 / 175 / 210 (+ 50% AP)',
        values: [70, 105, 140, 175, 210],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '70 / 105 / 140 / 175 / 210',
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
      'Enemies hit in the center of the area are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">silenced</a></span> for 1.<small>25</small> seconds.',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Fiddlesticks_Crowstorm.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Fiddlesticks</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for 1.<small>5</small> seconds, then <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> to the target location upon completion with a murder of crows flying wildly around it for 5 seconds, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>25</small> seconds to nearby enemies.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic Damage per Tick:',
        raw: '37.5 / 62.5 / 87.5 (+ 12.5% AP)',
        values: [37.5, 62.5, 87.5],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '37.5 / 62.5 / 87.5',
        children: [
          {
            values: 12.5,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 12.5% AP',
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Total Magic Damage:',
        raw: '750 / 1250 / 1750 (+ 250% AP)',
        values: [750, 1250, 1750],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '750 / 1250 / 1750',
        children: [
          {
            values: 250,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 250% AP',
          },
        ],
      },
    ],
  },
  {
    description: '<i>Crowstorm will cast at max range if cast beyond that.</i>',
    leveling: [],
  },
];
export const Fiddlesticks = { I, Q, W, E, R };
