import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Gwen';

export default {
  'Thousand Cuts': {
    name: 'Thousand Cuts',
    display_name: 'Thousand Cuts',
    champion: 'Gwen',
    skill: 'I',
    image: {
      full: 'Gwen_Passive.png',
      sprite: 'passive1.png',
      group: 'passive',
      x: 432,
      y: 0,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gwen" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gwen/LoL" title="Gwen\'s"><img alt="Gwen\'s" src="/wiki/images/Gwen_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gwen/LoL" title="Gwen/LoL">Gwen\'s</a></span></span> basic attacks and damaging abilities deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> equal to <span style="color: #1F995C; white-space:normal">a portion of the target\'s <b>maximum</b> health</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> her for a portion of this damage dealt against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Thousand Cuts.png',
        description:
          "Innate: Gwen's basic attacks  on-hit, the center of  Snip Snip!, and  Needlework deal bonus magic damage equal to 1% (+ 0.8% per 100 AP) of the target's maximum health.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Gwen\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>, the center of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gwen" data-ability="Snip Snip!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gwen/LoL#Snip_Snip!" title="Snip Snip!"><img alt="Snip Snip!" src="/wiki/images/Gwen_Snip_Snip%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gwen/LoL#Snip_Snip!" title="Gwen/LoL">Snip Snip!</a></span></span></i>, and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gwen" data-ability="Needlework" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gwen/LoL#Needlework" title="Needlework"><img alt="Needlework" src="/wiki/images/Gwen_Needlework.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gwen/LoL#Needlework" title="Gwen/LoL">Needlework</a></span></span></i> deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> equal to <span style="color: #1F995C; white-space:normal">1% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;0.<small>8</small>% per 100 AP)</span> of the target\'s <b>maximum</b> health</span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Innate:',
            raw: " Gwen's basic attacks  on-hit, the center of  Snip Snip!, and  Needlework deal bonus magic damage equal to 1% (+ 0.8% per 100 AP) of the target's maximum health.",
            healType: 'OutgoingHeals',
            values: 1,
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of the target's maximum health.",
            pre: "Gwen's basic attacks  on-hit, the center of  Snip Snip!, and  Needlework deal bonus magic damage equal to 1%",
            post: "of the target's maximum health.",
            children: [
              {
                values: 0.8,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 0.8% per 100 AP',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Thousand Cuts is modified based on the target:\n Heals Gwen for 50% of post-mitigation damage dealt against  champions, capped at 10 − 25 (based on level) (+ 6.5% AP) per instance.\nDeals an additional 8 − 30 (based on level) bonus magic damage against  minions that are below 40% health.\nDeals a maximum of 6 (+ 10% AP) magic damage against  monsters.',
        descriptionHTML:
          '<i>Thousand Cuts</i> is modified based on the target:\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">Heals</a></span> <b>Gwen</b> for 50% of <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after resistances and most modifiers.">post-mitigation damage</span> dealt against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, capped at <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="10;" data-finish="25;" data-bot_values="10;10.88;11.76;12.65;13.53;14.41;15.29;16.18;17.06;17.94;18.82;19.71;20.59;21.47;22.35;23.24;24.12;25" data-top_values="">10 − 25 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;6.<small>5</small>% AP)</span> per instance.</li>\n<li>Deals an additional <span style="color: #00B0F0; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="8;" data-finish="30;" data-bot_values="8;9.29;10.59;11.88;13.18;14.47;15.76;17.06;18.35;19.65;20.94;22.24;23.53;24.82;26.12;27.41;28.71;30" data-top_values="">8 − 30 (based on level)</span> <b>bonus</b> magic damage</span> against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> that are <span style="color: #1F995C; white-space:normal"><b>below</b> 40% health</span>.</li>\n<li>Deals a maximum of <span style="color: #00B0F0; white-space:normal">6 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;10% AP)</span> magic damage</span> against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.</li></ul>',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Thousand Cuts is modified based on the target:',
            raw: '\n Heals Gwen for 50% of post-mitigation damage dealt against  champions, capped at 10 − 25 (based on level) (+ 6.5% AP) per instance.\nDeals an additional 8 − 30 (based on level) bonus magic damage against  minions that are below 40% health.\nDeals a maximum of 6 (+ 10% AP) magic damage against  monsters.',
            healType: 'BonusHealth',
            values: [
              10, 10.88, 11.76, 12.65, 13.53, 14.41, 15.29, 16.18, 17.06, 17.94,
              18.82, 19.71, 20.59, 21.47, 22.35, 23.24, 24.12, 25,
            ],
            valuesIsPercent: true,
            basedOn: 'level',
            units: 'total_ad',
            unitsText: 'per instance.\nDeals an additional 8 − 30',
            pre: 'Heals Gwen for 50% of post-mitigation damage dealt against  champions, capped at 10 − 25',
            post: 'per instance.\nDeals an additional 8 − 30',
            children: [
              {
                values: 6.5,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 6.5% AP',
              },
              {
                values: 10,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 10% AP',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self, Enemies',
    damagetype: 'magic',
    spelleffects: 'proc',
    notes:
      '* The attacks do not deal the <b>bonus</b> damage against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.',
  },
  'Snip Snip!': {
    name: 'Snip Snip!',
    display_name: 'Snip Snip!',
    champion: 'Gwen',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'GwenQ.png',
      sprite: 'spell4.png',
      group: 'spell',
      x: 96,
      y: 48,
      w: 48,
      h: 48,
    },
    cast_time: '0.<small>5</small>',
    cost: '40',
    costtype: 'mana',
    cooldown:
      '6.<small>5</small> / 5.<small>75</small> / 5 / 4.<small>25</small> / 3.<small>5</small>',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gwen" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gwen/LoL" title="Gwen\'s"><img alt="Gwen\'s" src="/wiki/images/Gwen_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gwen/LoL" title="Gwen/LoL">Gwen\'s</a></span></span> basic attacks <a href="/wiki/On-hit" class="mw-redirect" title="On-hit">on-hit</a> generate stacks of <i>Snippy</i>, up to a cap.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Gwen</b> snips in the target direction, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies in a cone. She snips again for each <i>Snippy</i> stack she has.<br>\n<p><b>Gwen</b> then makes a final snip that deals increased <span style="color: #00B0F0; white-space:normal">magic damage</span>.\n</p>',
      'The center of each snip deals <span style="color: #F9966B; white-space:normal">true damage</span> instead and applies <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gwen" data-ability="Thousand Cuts" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gwen/LoL#Thousand_Cuts" title="Thousand Cuts"><img alt="Thousand Cuts" src="/wiki/images/Gwen_Thousand_Cuts.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gwen/LoL#Thousand_Cuts" title="Gwen/LoL">Thousand Cuts</a></span></span>.',
    ],
    description: [
      {
        description:
          "Passive: Gwen's basic attacks generate a stack of Snippy on-hit for 6 seconds, stacking up to 4 times and refreshing on subsequent attacks.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Gwen\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> generate a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Snippy</i> <a href="/wiki/On-hit" class="mw-redirect" title="On-hit">on-hit</a> for 6 seconds, stacking up to 4 times and refreshing on subsequent attacks.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Passive:',
            raw: " Gwen's basic attacks generate a stack of Snippy on-hit for 6 seconds, stacking up to 4 times and refreshing on subsequent attacks.",
            min: 0,
            max: 10,
            description:
              " Gwen's basic attacks generate a stack of Snippy on-hit for 6 seconds, stacking up to 4 times and refreshing on subsequent attacks.",
            values: 6,
            units: 'feastStacks',
            unitsText:
              'basic attacks generate a stack of Snippy on-hit for 6 seconds, stacking up to 4 times and refreshing on subsequent attacks.',
            pre: "Gwen's basic attacks generate a stack of Snippy on-hit for 6 seconds, stacking up to 4 times and refreshing on subsequent attacks.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Snip Snip!.png',
        description:
          'Active: Gwen snips at least twice with her scissors in a cone in the target direction over the cast time, dealing magic damage per snip to all enemies within the area, with the final snip dealing increased damage. The center of each snip applies  Thousand Cuts and converts 50% of the damage to   true damage instead. Snip Snip! deals 75% damage against  minions, and  executes them on the first damage instance if they are below 20% health.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Gwen</b> snips at least twice with her scissors in a cone in the target direction over the cast time, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> per snip to all enemies within the area, with the final snip dealing increased damage. The center of each snip applies <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gwen" data-ability="Thousand Cuts" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gwen/LoL#Thousand_Cuts" title="Thousand Cuts"><img alt="Thousand Cuts" src="/wiki/images/Gwen_Thousand_Cuts.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gwen/LoL#Thousand_Cuts" title="Gwen/LoL">Thousand Cuts</a></span></span></i> and converts 50% of the damage to <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike true icon.png" src="/wiki/images/Critical_strike_true_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike"><span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal">true damage</span></span></span> instead. <i>Snip Snip!</i> deals 75% damage against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Execute"><a href="/wiki/Kill#Execute" title="Kill#Execute"><img alt="Death from Below.png" src="/wiki/images/Pyke_Death_from_Below.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Kill#Execute" title="Kill">executes</a></span> them on the first damage instance if they are <span style="color: #1F995C; white-space:normal"><b>below</b> 20% health</span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'The center of each snip applies  Thousand Cuts and converts 50% of the damage to   true damage instead',
            damagetype: 'True',
            values: 5,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              'of the damage to   true damage insteadcenter of each snip applies  Thousand Cuts and converts 50',
            pre: 'The center of each snip applies  Thousand Cuts and converts 50% of the damage to   true damage instead',
          },
          {
            effectType: 'Heal',
            name: 'Line 3:',
            raw: 'Snip Snip! deals 75% damage against  minions, and  executes them on the first damage instance if they are below 20% health.',
            healType: 'BonusHealth',
            values: 7,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'damage against  minions, and  executes them on the first damage instance if they are below 20Snip! deals 75',
            pre: 'Snip Snip! deals 75% damage against  minions, and  executes them on the first damage instance if they are below 20% health.',
          },
        ],
        leveling: [
          {
            name: 'Damage per Snip:',
            values: '10 / 15 / 20 / 25 / 30 (+ 5% AP)',
            valuesHTML:
              '10 / 15 / 20 / 25 / 30 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;5% AP)</span>',
          },
          {
            name: 'Final Snip Damage:',
            values: '60 / 85 / 110 / 135 / 160 (+ 35% AP)',
            valuesHTML:
              '60 / 85 / 110 / 135 / 160 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;35% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Damage per Snip:',
            raw: '10 / 15 / 20 / 25 / 30 (+ 5% AP)',
            damagetype: 'None',
            values: [10, 15, 20, 25, 30],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 15 / 20 / 25 / 30',
            children: [
              {
                values: 5,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 5% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Final Snip Damage:',
            raw: '60 / 85 / 110 / 135 / 160 (+ 35% AP)',
            damagetype: 'None',
            values: [60, 85, 110, 135, 160],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 85 / 110 / 135 / 160',
            children: [
              {
                values: 35,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 35% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          'If Gwen has any Snippy stacks, she consumes them to snip an additional time for each.',
        descriptionHTML:
          'If <b>Gwen</b> has any <i>Snippy</i> stacks, she consumes them to snip an additional time for each.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Minimum Damage:',
            values: '70 / 100 / 130 / 160 / 190 (+ 40% AP)',
            valuesHTML:
              '70 / 100 / 130 / 160 / 190 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40% AP)</span>',
          },
          {
            name: 'Maximum Damage:',
            values: '110 / 160 / 210 / 260 / 310 (+ 60% AP)',
            valuesHTML:
              '110 / 160 / 210 / 260 / 310 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Minimum Damage:',
            raw: '70 / 100 / 130 / 160 / 190 (+ 40% AP)',
            damagetype: 'None',
            values: [70, 100, 130, 160, 190],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 100 / 130 / 160 / 190',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 40% AP',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Maximum Damage:',
            raw: '110 / 160 / 210 / 260 / 310 (+ 60% AP)',
            damagetype: 'None',
            values: [110, 160, 210, 260, 310],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '110 / 160 / 210 / 260 / 310',
            children: [
              {
                values: 60,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 60% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Magic damage"><a href="/wiki/Magic_damage" title="Magic damage"><img alt="Magic damage.png" src="/wiki/images/Magic_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Magic_damage" title="Magic damage">Magic</a></span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True damage"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration.png" src="/wiki/images/Hybrid_penetration.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/True_damage" title="True damage">True</a></span>',
    spelleffects: 'aoe',
    spellshield: 'Special',
    notes:
      '* Subsequent basic attacks on-hit also refresh the duration of <i>Snippy</i> stacks.\n<ul><li>The amount of <i>Snippy</i> stacks <b>Gwen</b> has is indicated below her <a href="/wiki/Health_bar" title="Health bar">health bar</a>.</li>\n<li>The damage from <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gwen" data-ability="Thousand Cuts" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gwen/LoL#Thousand_Cuts" title="Thousand Cuts"><img alt="Thousand Cuts" src="/wiki/images/Gwen_Thousand_Cuts.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gwen/LoL#Thousand_Cuts" title="Gwen/LoL">Thousand Cuts</a></span></span> is <b>not</b> converted to <span style="color: #F9966B; white-space:normal">true damage</span>.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> blocks only one snip.</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li>\n<li>The first snip happens at <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Measured, should be 0.1 seconds rounded up to 0.132 seconds">0.<small>13</small> seconds</span>, the last one at the end of the cast time.\n<ul><li>Bonus snips from <i>Snippy</i> stacks each happen at 0.<small>45</small>, 0.<small>4</small>, 0.<small>35</small> and 0.<small>23</small> seconds into the cast time.</li></ul></li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Gwen_Original_Q_4.ogg   "Snip snip!"',
  },
  'Hallowed Mist': {
    name: 'Hallowed Mist',
    display_name: 'Hallowed Mist',
    champion: 'Gwen',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'GwenW.png',
      sprite: 'spell4.png',
      group: 'spell',
      x: 144,
      y: 48,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 480',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Mist travel speed, teleports to Gwen if she is moving outside the zone faster than it can travel">2000</span>',
    cast_time: 'none',
    cost: '60',
    costtype: 'mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">22 / 21 / 20 / 19 / 18</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gwen" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gwen/LoL" title="Gwen"><img alt="Gwen" src="/wiki/images/Gwen_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gwen/LoL" title="Gwen/LoL">Gwen</a></span></span> summons the <i>Hallowed Mist</i> upon her current location for a few seconds. <i>Hallowed Mist</i> can be recast within this time, and does so automatically if she attempts to leave the area.',
      'While inside the mist, <b>Gwen</b> gains <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resistance</span></span> and is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> to enemies who are outside of it.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Gwen</b> commands the mist to move to her current location.',
    ],
    description: [
      {
        icon: '/wiki/images/Hallowed Mist.png',
        description:
          'Active: Gwen summons the Hallowed Mist upon her current location, lasting for 4 seconds. Hallowed Mist can be recast after 0.5 seconds, and does so automatically if Gwen attempts to leave the area.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Gwen</b> summons the Hallowed Mist upon her current location, lasting for 4 seconds. <i>Hallowed Mist</i> can be recast after 0.<small>5</small> seconds, and does so automatically if <b>Gwen</b> attempts to leave the area.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: ' Gwen summons the Hallowed Mist upon her current location, lasting for 4 seconds',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'summons the Hallowed Mist upon her current location, lasting for 4 seconds',
            pre: 'Gwen summons the Hallowed Mist upon her current location, lasting for 4 seconds',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Hallowed Mist 2.png',
        description:
          'While inside the mist, Gwen gains  bonus armor and  bonus magic resistance and is  untargetable to all enemies (except  turrets and  monsters) outside of the mist.',
        descriptionHTML:
          'While inside the mist, <b>Gwen</b> gains <span style="white-space:nowrap"><a href="/wiki/Armor" title="Armor"><img alt="Armor icon.png" src="/wiki/images/Armor_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal"><b>bonus</b> armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_resistance" title="Magic resistance"><img alt="Magic resistance icon.png" src="/wiki/images/Magic_resistance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal"><b>bonus</b> magic resistance</span></span> and is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> to all enemies (except <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>) outside of the mist.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'While inside the mist, Gwen gains  bonus armor and  bonus magic resistance and is  untargetable to all enemies (except  turrets and  monsters) outside of the mist.',
            values: 0,
            user: 'none',
            units: '',
            unitsText: 'outside of the mist.',
            pre: 'While inside the mist, Gwen gains  bonus armor and  bonus magic resistance and is  untargetable to all enemies',
            post: 'outside of the mist.',
            children: [
              {
                values: 0,
                user: 'none',
                units: '',
                unitsText: 'except  turrets and  monsters',
                pre: 'except  turrets and  monsters',
              },
            ],
          },
        ],
        leveling: [
          {
            name: 'Bonus Resistances:',
            values: '17 / 19 / 21 / 23 / 25 (+ 7% AP)',
            valuesHTML:
              '17 / 19 / 21 / 23 / 25 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;7% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Resistances:',
            raw: '17 / 19 / 21 / 23 / 25 (+ 7% AP)',
            damagetype: 'None',
            values: [17, 19, 21, 23, 25],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '17 / 19 / 21 / 23 / 25',
            children: [
              {
                values: 7,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 7% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          'Recast: Gwen commands the mist to move to her current location.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Gwen</b> commands the mist to move to her current location.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Gwen negates all attacks by  monsters outside of the mist.',
        descriptionHTML:
          '<i><b>Gwen</b> negates all attacks by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> outside of the mist.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    notes:
      '* <i>Hallowed Mist\'s</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetability"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetability</a></span> does not apply to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> nor <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span>, meaning they are allowed to gain aggro against <b>Gwen</b> and attack her regardless of being in the mist or not.\n<ul><li><ul><li>However, <b>Gwen</b> will not take damage from monsters that hit her and are outside of the mist.</li></ul></li>\n<li><i>Hallowed Mist</i> does not grant untargetability against enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Pet"><a href="/wiki/Pets" title="Pets"><img alt="Summon Tibbers.png" src="/wiki/images/Annie_Summon-_Tibbers.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Pets" title="Pets">pets</a></span> inside the zone even if their source is not.</li>\n<li>All <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">projectiles</a></span> targeted at <b>Gwen</b> by enemy champions outside the mist are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Homing projectile destruction"><a href="/wiki/Projectile" title="Projectile"><img alt="Bullet strikethrough.png" src="/wiki/images/Bullet_strikethrough.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">destroyed</a></span> upon attempting to pass through the mist or being inside the mist.\n<ul><li>Targeted projectiles sourced by minions or monsters will not be destroyed and can still hit <b>Gwen</b> even if they are outside of the zone.</li></ul></li>\n<li>If <b>Gwen</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> out of the area, the mist will automatically move to the dash\'s destination instead of <b>Gwen\'s</b> location.\n<ul><li>The mist will stop moving immediately if the dash is interrupted.</li></ul></li>\n<li>The recast will move the mist\'s center 75 units through <b>Gwen\'s</b> location at the time.\n<ul><li>If she is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashing</a></span>, the mist will move 75 units through her dash destination instead.</li></ul></li>\n<li>The mist will teleport to <b>Gwen\'s</b> location if she <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> a far distance.</li>\n<li>Enemy champions outside the mist are indicated with a broken sword.</li>\n<li><i>Hallowed Mist</i> will indicate that <i><b>Gwen is Immune</b></i> whenever an effect attempts to hit <b>Gwen</b>.</li></ul>',
  },
  "Skip 'n Slash": {
    name: "Skip 'n Slash",
    display_name: "Skip 'n Slash",
    champion: 'Gwen',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'GwenE.png',
      sprite: 'spell4.png',
      group: 'spell',
      x: 192,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '350 / 450',
    cast_time: 'none',
    cost: '35',
    costtype: 'Mana',
    cooldown: '13 / 12.<small>5</small> / 12 / 11.<small>5</small> / 11',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gwen" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gwen/LoL" title="Gwen"><img alt="Gwen" src="/wiki/images/Gwen_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gwen/LoL" title="Gwen/LoL">Gwen</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location, and afterwards empowers her basic attacks for a duration, gaining <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>, <span style="color: #00B0F0; white-space:normal">magic damage</span>, and <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;range</span>.',
      'The first basic attack within the duration <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;refunds</span> a potion of the cooldown.',
    ],
    description: [
      {
        icon: "/wiki/images/Skip 'n Slash.png",
        description:
          'Active: Gwen  dashes to the target location, then empowers her basic attacks within the next 4 seconds to deal 15 (+ 20% AP) bonus magic damage  on-hit and gain  bonus attack speed and  75 bonus attack range.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Gwen</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location, then empowers her basic attacks within the next 4 seconds to deal <span style="color: #00B0F0; white-space:normal">15</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;20% AP)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> and gain <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> and <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;75 <b>bonus</b> attack range</span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Gwen  dashes to the target location, then empowers her basic attacks within the next 4 seconds to deal 15 (+ 20% AP) bonus magic damage  on-hit and gain  bonus attack speed and  75 bonus attack range.',
            increasedStat: 'bonus_ad',
            values: 4,
            units: '',
            unitsText:
              'bonus magic damage  on-hit and gain  bonus attack speed and  75 bonus attack range.',
            pre: 'Gwen  dashes to the target location, then empowers her basic attacks within the next 4 seconds to deal 15',
            post: 'bonus magic damage  on-hit and gain  bonus attack speed and  75 bonus attack range.',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 20% AP',
              },
            ],
          },
        ],
        leveling: [
          {
            name: 'Bonus Attack Speed:',
            values: '20 / 35 / 50 / 65 / 80%',
            valuesHTML: '20 / 35 / 50 / 65 / 80%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '20 / 35 / 50 / 65 / 80%',
            values: [20, 35, 50, 65, 80],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 35 / 50 / 65 / 80%',
          },
        ],
      },
      {
        description:
          "Gwen's first basic attack within the duration refunds a portion of Skip 'n Slash's  cooldown.",
        descriptionHTML:
          '<b>Gwen\'s</b> first basic attack within the duration refunds a portion of <i>Skip \'n Slash\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Cooldown Refund:',
            values: '25 / 35 / 45 / 55 / 65%',
            valuesHTML: '25 / 35 / 45 / 55 / 65%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Cooldown Refund:',
            raw: '25 / 35 / 45 / 55 / 65%',
            values: [25, 35, 45, 55, 65],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 35 / 45 / 55 / 65%',
          },
        ],
      },
      {
        description:
          "Skip 'n Slash  resets Gwen's basic attack timer, and can be cast during any of her abilities, and vice versa. Skip 'n Slash will cast at max range if cast beyond that.",
        descriptionHTML:
          '<i>Skip \'n Slash <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Gwen\'s</b> basic attack timer, and can be cast during any of her abilities, and vice versa. Skip \'n Slash will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Self',
    damagetype: 'magic',
    spelleffects: 'proc',
    notes:
      '* <i>Skip \'n Slash</i> has no minimum dash range.\n<ul><li>The basic attack reset is not considered one for <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Hail of Blades" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hail_of_Blades_(Rune)" title="Hail of Blades"><img alt="Hail of Blades" src="/wiki/images/Hail_of_Blades_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Hail_of_Blades_(Rune)" class="mw-redirect" title="Hail of Blades (Rune)">Hail of Blades</a></span></span>.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup></li></ul>',
  },
  Needlework: {
    name: 'Needlework',
    display_name: 'Needlework',
    champion: 'Gwen',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'GwenR.png',
      sprite: 'spell4.png',
      group: 'spell',
      x: 240,
      y: 48,
      w: 48,
      h: 48,
    },
    range: '-100 + 1350',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="-150 total width per half-second of travel time">240 to 0</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Needle missiles speed">1800</span>',
    cast_time:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="First cast">0.<small>25</small></span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Second and third casts">0.<small>5</small></span>',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on-cast">120 / 110 / 100 / 90 / 80</span>',
    blurb: [
      '<span class="template_sbc"><b>First Cast:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gwen" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gwen/LoL" title="Gwen"><img alt="Gwen" src="/wiki/images/Gwen_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gwen/LoL" title="Gwen/LoL">Gwen</a></span></span> launches a needle in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> enemies hit. <i>Needlework</i> can be recast up to two more times.',
      '<span class="template_sbc"><b>Second Cast:</b></span> <b>Gwen</b> launches 3 needles.',
      '<span class="template_sbc"><b>Third Cast:</b></span> <b>Gwen</b> launches 5 needles.',
    ],
    description: [
      {
        icon: '/wiki/images/Gwen Needlework.png',
        description:
          'Active: Gwen launches a needle in the target direction that deals magic damage to enemies hit and  slows them for 1.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Gwen</b> launches a needle in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Gwen launches a needle in the target direction that deals magic damage to enemies hit and  slows them for 1.5 seconds.',
            damagetype: 'Magic',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'launches a needle in the target direction that deals magic damage to enemies hit and  slows them for 1.5 seconds.',
            pre: 'Gwen launches a needle in the target direction that deals magic damage to enemies hit and  slows them for 1.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage per Needle:',
            values: '35 / 50 / 65 / 80 / 95 (+ 10% AP)',
            valuesHTML:
              '35 / 50 / 65 / 80 / 95 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;10% AP)</span>',
          },
          {
            name: 'Slow:',
            values: '40 / 45 / 50 / 55 / 60%',
            valuesHTML: '40 / 45 / 50 / 55 / 60%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage per Needle:',
            raw: '35 / 50 / 65 / 80 / 95 (+ 10% AP)',
            damagetype: 'Magic',
            values: [35, 50, 65, 80, 95],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 50 / 65 / 80 / 95',
            children: [
              {
                values: 10,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 10% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '40 / 45 / 50 / 55 / 60%',
            values: [40, 45, 50, 55, 60],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 45 / 50 / 55 / 60%',
          },
        ],
      },
      {
        icon: '/wiki/images/Gwen Needlework 2.png',
        description:
          'Needlework can be recast twice more within 6 seconds of the activation at no additional cost, with a 1-second static cooldown between casts. Each subsequent cast refreshes the duration and increases the number of needles launched by 2. Needle hits beyond the first  slow by a reduced amount against each individual target.',
        descriptionHTML:
          '<i>Needlework</i> can be recast twice more within 6 seconds of the activation at no additional cost, with a 1-second <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Unaffected by ability haste">static cooldown</span> between casts. Each subsequent cast refreshes the duration and increases the number of needles launched by 2. Needle hits beyond the first <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> by a reduced amount against each individual target.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Needlework can be recast twice more within 6 seconds of the activation at no additional cost, with a 1-second static cooldown between casts',
            damagetype: 'None',
            values: 6,
            units: 'total_ad',
            unitsText:
              'can be recast twice more within 6 seconds of the activation at no additional cost, with a 1-second static cooldown between casts',
            pre: 'Needlework can be recast twice more within 6 seconds of the activation at no additional cost, with a 1-second static cooldown between casts',
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'Each subsequent cast refreshes the duration and increases the number of needles launched by 2',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'subsequent cast refreshes the duration and increases the number of needles launched by 2',
            pre: 'Each subsequent cast refreshes the duration and increases the number of needles launched by 2',
          },
        ],
        leveling: [
          {
            name: 'Reduced Slow:',
            values: '15 / 17.5 / 20 / 22.5 / 25%',
            valuesHTML:
              '15 / 17.<small>5</small> / 20 / 22.<small>5</small> / 25%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Reduced Slow:',
            raw: '15 / 17.5 / 20 / 22.5 / 25%',
            values: [15, 17.5, 20, 22.5, 25],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 17.5 / 20 / 22.5 / 25%',
          },
        ],
      },
      {
        icon: '/wiki/images/Gwen Needlework 3.png',
        description:
          "Recast: Gwen mimics the first cast's effects, while launching three needles on the second cast and five on the third cast.",
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Gwen</b> mimics the first cast\'s effects, while launching three needles on the second cast and five on the third cast.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Second Cast Total Damage:',
            values:
              "105 / 150 / 195 / 240 / 285 (+ 30% AP) (+ 3% (+ 2.4% per 100 AP) of the target's maximum health)",
            valuesHTML:
              '105 / 150 / 195 / 240 / 285 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span><br><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gwen" data-ability="Thousand Cuts" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gwen/LoL#Thousand_Cuts" title="(+&nbsp;3% (+&nbsp;2.4% per 100 AP) of the target\'s maximum health)"><img alt="(+&nbsp;3% (+&nbsp;2.4% per 100 AP) of the target\'s maximum health)" src="/wiki/images/Gwen_Thousand_Cuts.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gwen/LoL#Thousand_Cuts" title="Gwen/LoL"><span style="color: #1F995C; white-space:normal">(+&nbsp;3% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;2.<small>4</small>% per 100 AP)</span> of the target\'s <b>maximum</b> health)</span></a></span></span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Second Cast Total Damage:',
            raw: "105 / 150 / 195 / 240 / 285 (+ 30% AP) (+ 3% (+ 2.4% per 100 AP) of the target's maximum health)",
            healType: 'OutgoingHeals',
            values: [105, 150, 195, 240, 285],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '105 / 150 / 195 / 240 / 285',
            children: [
              {
                values: 30,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 30% AP',
              },
              {
                values: 3,
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of the target's maximum health",
                pre: '+ 3%',
                post: "of the target's maximum health",
                children: [
                  {
                    values: 2.4,
                    valuesIsPercent: true,
                    units: 'total_ap',
                    unitsText: 'per 100 AP',
                    pre: '+ 2.4% per 100 AP',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'magic',
    spelleffects: 'aoe',
    spellshield: 'Special',
    projectile: 'true',
    notes:
      ';Details\n<ul><li><b>Gwen</b> can still move during <i>Needlework\'s</i> cast times.</li>\n<li>Dying during the cast time will prevent the remaining needles of the cast from being launched.</li>\n<li>The first cast\'s cast time is 0.<small>25</small> seconds, and the second and third\'s cast times are each 0.<small>5</small> seconds. <b>Gwen</b> launches the needles during the cast times.\n<ul><li>For the second cast, the first needle launches <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.25 seconds, but rounded up to the next game tick.">0.<small>264</small> seconds</span> after the start of the cast, the second needle launches after <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.1 seconds, but rounded up to the next game tick.">0.<small>132</small> seconds</span>, and the third needle launches <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.2 seconds, but rounded up to the next game tick.">0.<small>231</small> seconds</span> after the first.</li>\n<li>For the third cast, the first needle launches <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.25 seconds, but rounded up to the next game tick.">0.<small>264</small> seconds</span> after the start of the cast. Each additional needle launches <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.0625 seconds, but rounded up to the next game tick.">0.<small>066</small> seconds</span> seconds after the previous one.</li></ul></li>\n<li>The needles of each cast will fire based on <b>Gwen\'s</b> location at <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.25 seconds, but rounded up to the next game tick.">0.<small>264</small> seconds</span> into each cast time (in case of the first cast, this is at the end of the cast time).\n<ul><li>The needles fire from 100 units <i>behind</i> the cast location.</li>\n<li>The width of all needle missiles decreases with their distance travelled, forming an approximately triangular missile hitbox.</li>\n<li>Needles of the same cast all travel the same line at a slight delay after one another. The visual origins are offset (by 70 and 110 units to either side from the center missile spawn location), but the actual hitting missiles all follow the central line.</li></ul></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> blocks only one needle.</li>\n<li><i>Needlework</i> is placed on a 0.<small>1</small>-second cooldown when the cast time completes and when <b>Gwen</b> gains a recast (before gaining a recast via the attack, the recast remains sealed even while not on cooldown).</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Gwen_Original_R_0.ogg   "Needles out!"',
  },
} satisfies { [skillName in string]: SkillData };
