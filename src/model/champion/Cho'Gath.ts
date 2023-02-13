import type { SubSkill } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
import ChampionListData from '../ChampionListData';
export const name: ChampionName = "Cho'Gath";
const I: SubSkill[] = [
  {
    img: '/wiki/images/Cho%27Gath_Carnivore.png',
    description:
      '<span class="template_sbc"><b>Innate:</b></span> Whenever <b>Cho\'Gath</b> kills an enemy, it <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="18;" data-finish="52;" data-bot_values="18;20;22;24;26;28;30;32;34;36;38;40;42;44;46;48;50;52" data-top_values="">18 − 52 (based on level)</span> and restores <span style="color: #0099CC; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="4.72;" data-finish="9.48;" data-bot_values="4.72;5;5.28;5.56;5.84;6.12;6.4;6.68;6.96;7.24;7.52;7.8;8.08;8.36;8.64;8.92;9.2;9.48" data-top_values="">4.<small>72</small> − 9.<small>48</small> (based on level)</span> mana</span></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Line 1:',
        raw: " Whenever Cho'Gath kills an enemy, it  heals for 18 − 52 (based on level) and restores  4",
        healType: 'DrainEffect',
        values: [
          18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50,
          52,
        ],
        valuesIsBasedOnLevel: true,
        user: 'none',
        units: '',
        unitsText: 'and restores  4',
        pre: "Whenever Cho'Gath kills an enemy, it  heals for 18 − 52",
        post: 'and restores  4',
      },
      {
        effectType: 'Unique',
        name: 'Line 2:',
        raw: '72 − 9',
        values: [72, 9],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '72 − 9',
      },
      {
        effectType: 'Unique',
        name: 'Line 3:',
        raw: '48 (based on level) mana',
        values: [],
        valuesIsBasedOnLevel: true,
        user: 'player',
        units: 'total_mana',
        unitsText: 'mana',
        pre: '48',
        post: 'mana',
      },
    ],
  },
];
const Q: SubSkill[] = [
  {
    img: '/wiki/images/Cho%27Gath_Rupture.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Cho\'Gath</b> ruptures the target location after a <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.625 seconds, but rounded up to the next game tick.">0.<small>627</small> seconds</span>-second delay, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area before dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them up</a></span> for 1 second, and afterwards <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 60% for 1.<small>5</small> seconds.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic damage:',
        raw: '80 / 135 / 190 / 245 / 300 (+ 100% AP)',
        values: [80, 135, 190, 245, 300],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 135 / 190 / 245 / 300',
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
];
const W: SubSkill[] = [
  {
    img: '/wiki/images/Cho%27Gath_Feral_Scream.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Cho\'Gath</b> roars in a cone in the target direction, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Magic damage:',
        raw: '80 / 135 / 190 / 245 / 300 (+ 70% AP)',
        values: [80, 135, 190, 245, 300],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 135 / 190 / 245 / 300',
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
      'Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> and <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rift_Scuttler" title="Rift Scuttlers"><img alt="Rift Scuttlers" src="/wiki/images/Rift_ScuttlerSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rift_Scuttler" class="mw-redirect" title="Rift Scuttler">Rift Scuttlers</a></span></span> hit are also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">silenced</a></span> for a duration.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Silence Duration:',
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
const E: SubSkill[] = [
  {
    img: '/wiki/images/Cho%27Gath_Vorpal_Spikes.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Cho\'Gath</b> empowers its next 3 <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> within 6 seconds to gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50 <b>bonus</b> range</span> and launch a blast of spikes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> in the target\'s direction. Enemies struck are dealt <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by an amount that decays over 1.<small>5</small> seconds. The damage based on the target\'s health ratio is capped against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Magic Damage:',
        raw: "22 / 34 / 46 / 58 / 70 (+ 30% AP) (+ 3% (+ 0.5% per  Feast stack) of target's maximum health)",
        healType: 'OutgoingHeals',
        values: [22, 34, 46, 58, 70],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '22 / 34 / 46 / 58 / 70',
        children: [
          {
            values: 30,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 30% AP',
          },
          {
            values: 3,
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: '+ 3%',
            post: "of target's maximum health",
            children: [
              {
                values: 0.5,
                valuesIsPercent: true,
                user: 'player',
                units: 'feastStacks',
                unitsText: 'per  Feast stack',
                pre: '+ 0.5% per  Feast stack',
              },
            ],
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Total Magic Damage:',
        raw: "66 / 102 / 138 / 174 / 210 (+ 90% AP) (+ 9% (+ 1.5% per  Feast stack) of target's maximum health)",
        healType: 'OutgoingHeals',
        values: [66, 102, 138, 174, 210],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '66 / 102 / 138 / 174 / 210',
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
            values: 9,
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: '+ 9%',
            post: "of target's maximum health",
            children: [
              {
                values: 1.5,
                valuesIsPercent: true,
                user: 'player',
                units: 'feastStacks',
                unitsText: 'per  Feast stack',
                pre: '+ 1.5% per  Feast stack',
              },
            ],
          },
        ],
      },
      {
        effectType: 'Unique',
        name: 'Capped Monster Percent Damage:',
        raw: '60 / 80 / 100 / 120 / 140',
        values: [60, 80, 100, 120, 140],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '60 / 80 / 100 / 120 / 140',
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
      '<i>Vorpal Spikes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Cho\'Gath\'s</b> basic attack timer.</i>',
    leveling: [],
  },
];
const R: SubSkill[] = [
  {
    img: '/wiki/images/Cho%27Gath_Feast.png',
    description:
      '<span class="template_sbc"><b>Active:</b></span> <b>Cho\'Gath</b> attempts to eat the target enemy, dealing them <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal">true damage</span></span>. Against non-champions, the <b>base</b> damage is modified.',
    leveling: [
      {
        effectType: 'Heal',
        name: 'Champion True Damage:',
        raw: '300 / 475 / 650 (+ 50% AP) (+ 10% bonus health)',
        healType: 'BonusHealth',
        values: [300, 475, 650],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '300 / 475 / 650',
        children: [
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 50% AP',
          },
          {
            values: 10,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_hp',
            unitsText: 'bonus health',
            pre: '+ 10% bonus health',
          },
        ],
      },
      {
        effectType: 'Heal',
        name: 'Non-Champion True Damage:',
        raw: '1200 (+ 50% AP) (+ 10% bonus health)',
        healType: 'BonusHealth',
        values: 1200,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '1200',
        children: [
          {
            values: 50,
            valuesIsPercent: true,
            user: 'player',
            units: 'total_ap',
            unitsText: 'AP',
            pre: '+ 50% AP',
          },
          {
            values: 10,
            valuesIsPercent: true,
            user: 'player',
            units: 'bonus_hp',
            unitsText: 'bonus health',
            pre: '+ 10% bonus health',
          },
        ],
      },
    ],
  },
  {
    description:
      'If the target is killed, <b>Cho\'Gath</b> gains a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Feast</i>. Only 6 stacks can be gained from non-epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
    leveling: [],
  },
  {
    description:
      'Each stack of <i>Feast</i> grants <b>Cho\'Gath</b> <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> health</span></span> as well as <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack range</span> and increased <a href="/wiki/Size" title="Size">size</a>, capping at <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;75 <b>bonus</b> attack range</span> and 100% increased size.',
    leveling: [
      {
        effectType: 'Unique',
        name: 'Bonus Health Per Stack:',
        raw: '80 / 120 / 160',
        values: [80, 120, 160],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '80 / 120 / 160',
      },
      {
        effectType: 'Unique',
        name: 'Bonus Attack Range Per Stack:',
        raw: '4.62 / 6.15 / 7.69',
        values: [4.62, 6.15, 7.69],
        user: 'none',
        units: '',
        unitsText: '',
        pre: '4.62 / 6.15 / 7.69',
      },
      {
        effectType: 'Unique',
        name: 'Bonus Size Per Stack:',
        raw: '6 / 8 / 10%',
        values: [6, 8, 10],
        valuesIsPercent: true,
        user: 'none',
        units: '',
        unitsText: '',
        pre: '6 / 8 / 10%',
      },
    ],
  },
];
export const ChoGath = { I, Q, W, E, R };
