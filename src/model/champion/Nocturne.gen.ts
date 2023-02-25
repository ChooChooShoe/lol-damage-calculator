import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Nocturne';

export default {
  'Umbra Blades': {
    name: 'Umbra Blades',
    display_name: 'Umbra Blades',
    champion: 'Nocturne',
    skill: 'I',
    image: {
      full: 'Nocturne_UmbraBlades.png',
      sprite: 'passive2.png',
      group: 'passive',
      x: 336,
      y: 96,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 360',
    static: '13',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> Periodically, <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nocturne" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nocturne/LoL" title="Nocturne\'s"><img alt="Nocturne\'s" src="/wiki/images/Nocturne_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nocturne/LoL" title="Nocturne/LoL">Nocturne\'s</a></span></span> next basic attack causes him to slash in a circle that deals <span style="color: #FF8C34; white-space:normal"><b>increased</b> physical damage</span> to the target and nearby enemies, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> him for each enemy hit.',
      'Basic attacks <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduce</span> <i>Umbra Blade\'s</i> cooldown, increased against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Umbra_Blades.png',
        description:
          "Innate: Periodically, Nocturne empowers his next basic attack to slash in a circle, dealing 120% AD physical damage to the target and nearby enemies and  healing himself for 13 − 30 (based on level) (+ 30% AP) per enemy hit. Against  minions, Umbra Blade's damage to secondary targets and healing are reduced by 50% and it applies  on-hit effects(bug) to all targets at 100% effectiveness.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> Periodically, <b>Nocturne</b> empowers his next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> to slash in a circle, dealing <span style="color:orange; white-space:normal">120% AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> to the target and nearby enemies and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Healing"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> himself for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="13;" data-finish="30;" data-bot_values="13;14;15;16;17;18;19;20;21;22;23;24;25;26;27;28;29;30" data-top_values="">13 − 30 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span> per enemy hit. Against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>, <i>Umbra Blade\'s</i> damage to secondary targets and healing are reduced by 50% and it applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup> to all targets at 100% effectiveness.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Innate:',
            raw: 'Periodically, Nocturne empowers his next basic attack to slash in a circle, dealing 120% AD physical damage to the target and nearby enemies and  healing himself for 13 − 30 (based on level) (+ 30% AP) per enemy hit',
            healType: 'PhysicalVamp',
            values: [
              13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
              29, 30,
            ],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'per enemy hit',
            pre: 'Periodically, Nocturne empowers his next basic attack to slash in a circle, dealing 120% AD physical damage to the target and nearby enemies and  healing himself for 13 − 30',
            post: 'per enemy hit',
            children: [
              {
                values: 30,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 30% AP',
              },
            ],
          },
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: "Against  minions, Umbra Blade's damage to secondary targets and healing are reduced by 50% and it applies  on-hit effects(bug) to all targets at 100% effectiveness.",
            healType: 'OutgoingHeals',
            values: 5,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'to all targets at 100% effectiveness.',
            pre: "Against  minions, Umbra Blade's damage to secondary targets and healing are reduced by 50% and it applies  on-hit effects",
            post: 'to all targets at 100% effectiveness.',
            children: [
              {
                values: 0,
                user: 'none',
                units: '',
                unitsText: 'bug',
                pre: 'bug',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Umbra Blades can  critically strike against the primary target, modifying the physical damage dealt to「 (192.5% +  38.5%) AD. 」「 110% of the  critical damage of his basic attacks. 」',
        descriptionHTML:
          '<i>Umbra Blades</i> can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> against the primary target, modifying the <span style="color: #FF8C34; white-space:normal">physical damage</span> dealt to<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;<span style="color:orange; white-space:normal">(192.<small>5</small>%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="38.5%"><img alt="38.5%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">38.<small>5</small>%</a></span></span>) AD</span>.&nbsp;」</span><span class="flipText2">「&nbsp;110% of the <span style="white-space:nowrap"><a href="/wiki/Critical_strike#Modifying_Critical_Strike_Damage" title="Critical strike#Modifying Critical Strike Damage"><img alt="Critical strike damage icon.png" src="/wiki/images/Critical_strike_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #944B00; white-space:normal">critical damage</span></span> of his basic attacks.&nbsp;」</span></span>',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Umbra Blades can  critically strike against the primary target, modifying the physical damage dealt to「 (192.5% +  38.5%) AD. 」「 110% of the  critical damage of his basic attacks. 」',
            increasedStat: 'total_ad',
            values: 0,
            units: '',
            unitsText:
              'AD. 」「 110% of the  critical damage of his basic attacks. 」',
            pre: 'Umbra Blades can  critically strike against the primary target, modifying the physical damage dealt to「',
            post: 'AD. 」「 110% of the  critical damage of his basic attacks. 」',
            children: [
              {
                values: 192.5,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: '+  38.5',
                pre: '192.5% +  38.5%',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Steel_Blades.png',
        description:
          "Basic attacks reduce Umbra Blades'   cooldown by 1 second, increased to 3 against enemy  champions and  monsters.",
        descriptionHTML:
          'Basic attacks reduce <i>Umbra Blades\' </i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> by 1 second, increased to 3 against enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: "Basic attacks reduce Umbra Blades'   cooldown by 1 second, increased to 3 against enemy  champions and  monsters.",
            increasedStat: 'total_ad',
            values: 1,
            units: '',
            unitsText:
              "attacks reduce Umbra Blades'   cooldown by 1 second, increased to 3 against enemy  champions and  monsters.",
            pre: "Basic attacks reduce Umbra Blades'   cooldown by 1 second, increased to 3 against enemy  champions and  monsters.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'special',
    spellshield: false,
    notes:
      '* The primary target of the enhanced attack takes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic damage"><a href="/wiki/Damage" title="Damage"><img alt="Basic Attack.png" src="/wiki/images/Basic_Attack.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">basic damage</a></span> while the secondary targets of the slash are dealt <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Default damage"><a href="/wiki/Damage" title="Damage"><img alt="Umbra Blades.png" src="/wiki/images/Nocturne_Umbra_Blades.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">default damage</a></span>.\n<ul><li>The enhanced attack will apply other <a href="/wiki/On-hit_effect" class="mw-redirect" title="On-hit effect">on-hit effects</a> (only to main target) and can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> as normal.\n<ul><li>The critical strike damage of the attack is notably unusual.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup> It stems from a time where critical strikes by default did <span style="color:orange; white-space:normal">200% AD</span> damage, which meant that 110% of it equaled <span style="color:orange; white-space:normal">220% AD</span>, equal to a more standard <i>Umbral Blades\' </i>bonus damage of <span style="color:orange; white-space:normal">20% AD</span> added to the critical damage. This also causes bonus critial damage such as <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="Infinity Edge\'s"><img alt="Infinity Edge\'s" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">Infinity Edge\'s</a></span></span> passive to be 10% stronger on the attack. <br>Now, the formula reduces the expected critical damage slightly by <span style="color:orange; white-space:normal">-2.<small>5</small>% AD</span>, which is 10% of the reduction in base critical damage from <a href="/wiki/Patch_(League_of_Legends)/Season_Eleven#Pre-Season_Eleven" title="Patch (League of Legends)/Season Eleven">Pre-Season 11</a>.</li></ul></li>\n<li>The empowered attack will not trigger against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a> nor <a href="/wiki/Ward" title="Ward">wards</a>.\n<ul><li>Basic attacks against them will still grant the cooldown reduction.</li></ul></li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: <i>Umbral Blade\'s</i> interaction with <i>parrying</i> effects (<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodge</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">block</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blind</a></span>).</li></ul>',
  },
  Duskbringer: {
    name: 'Duskbringer',
    display_name: 'Duskbringer',
    champion: 'Nocturne',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'NocturneDuskbringer.png',
      sprite: 'spell9.png',
      group: 'spell',
      x: 192,
      y: 0,
      w: 48,
      h: 48,
    },
    range: '1200',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dusk Trail blob radiuses">150</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Shadow blade missile width">120</span>',
    speed: '1600',
    cast_time: '0.<small>25</small>',
    cost: '60 / 65 / 70 / 75 / 80',
    costtype: 'Mana',
    cooldown: '8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nocturne" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nocturne/LoL" title="Nocturne"><img alt="Nocturne" src="/wiki/images/Nocturne_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nocturne/LoL" title="Nocturne/LoL">Nocturne</a></span></span> casts out a shadow blade in the target direction that leaves a <i>Dusk Trail</i> in its wake, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit. Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> hit will leave a <i>Dusk Trail</i> in their wake for a few seconds.',
      'While on the <i>Dusk Trail</i>, Nocturne is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> and <span style="color:orange; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack damage</span></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Duskbringer.png',
        description:
          'Active: Nocturne casts out a shadow blade in the target direction that leaves a Dusk Trail in its wake, dealing physical damage to enemies hit. Enemy  champions hit will leave a Dusk Trail behind while moving. Dusk Trails last 5 seconds and will slowly disappear afterwards.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Nocturne</b> casts out a shadow blade in the target direction that leaves a <i>Dusk Trail</i> in its wake, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit. Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> hit will leave a <i>Dusk Trail</i> behind while moving. <i>Dusk Trails</i> last 5 seconds and will slowly disappear afterwards.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 3:',
            raw: 'Dusk Trails last 5 seconds and will slowly disappear afterwards.',
            damagetype: 'None',
            values: 5,
            units: 'total_ap',
            unitsText:
              'Trails last 5 seconds and will slowly disappear afterwards.',
            pre: 'Dusk Trails last 5 seconds and will slowly disappear afterwards.',
          },
        ],
        leveling: [
          {
            name: 'Physical damage:',
            values: '65 / 110 / 155 / 200 / 245 (+ 85% bonus AD)',
            valuesHTML:
              '65 / 110 / 155 / 200 / 245 <span style="color:orange; white-space:normal">(+&nbsp;85% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical damage:',
            raw: '65 / 110 / 155 / 200 / 245 (+ 85% bonus AD)',
            damagetype: 'Physical',
            values: [65, 110, 155, 200, 245],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '65 / 110 / 155 / 200 / 245',
            children: [
              {
                values: 85,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 85% bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'While on the Dusk Trail, Nocturne is  ghosted and gains  bonus attack damage and  bonus total movement speed.',
        descriptionHTML:
          'While on the <i>Dusk Trail</i>, <b>Nocturne</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and gains <span style="color:orange; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_damage" title="Attack damage"><img alt="Attack damage icon.png" src="/wiki/images/Attack_damage_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack damage</span></span> and <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus total</b> movement speed</span></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Bonus Attack Damage:',
            values: '20 / 30 / 40 / 50 / 60',
            valuesHTML: '20 / 30 / 40 / 50 / 60',
          },
          {
            name: 'Bonus Movement Speed:',
            values: '15 / 20 / 25 / 30 / 35%',
            valuesHTML: '15 / 20 / 25 / 30 / 35%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Attack Damage:',
            raw: '20 / 30 / 40 / 50 / 60',
            damagetype: 'None',
            values: [20, 30, 40, 50, 60],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 30 / 40 / 50 / 60',
          },
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '15 / 20 / 25 / 30 / 35%',
            values: [15, 20, 25, 30, 35],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 20 / 25 / 30 / 35%',
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Area of effect',
    spellshield: true,
    projectile: 'True',
    notes:
      '* <i>Duskbringer\'s</i> damage is not increased by the <span style="color:orange; white-space:normal"><b>bonus</b> AD</span> gained from its trail, meaning that casting it again while on the trail from the last cast will not result in higher damage.\n<ul><li><ul><li>It is observed from seasons ago that this is intentionally hard-coded into the ability to avoid the projectile increasing its own damage. This feature is somewhat deprecated as it also limits chain-casting <i>Duskbringer</i>.</li></ul></li>\n<li><i>Duskbringer\'s Dusk Trail</i> will expose the path of affected units until its duration ends. It is a form of <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Obscured vision"><a href="/wiki/Sight#Obscured_vision" title="Sight#Obscured vision"><img alt="Sweeper Drone icon.png" src="/wiki/images/Sweeper_Drone_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#Obscured_vision" title="Sight">obscured vision</a></span>; the trail indirectly reveals the location of enemy units even in the fog of war, including those shrouded by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stealth"><a href="/wiki/Stealth" title="Stealth"><img alt="Guerrilla Warfare.png" src="/wiki/images/Teemo_Guerrilla_Warfare.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth" title="Stealth">stealth</a></span>.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block the damage and also prevents the <i>Dusk Trail</i> from following the target.</li>\n<li>The formed <i>Dusk Trail</i> does not disappear if <i>Duskbringer</i> is intercepted by <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yasuo" data-ability="Wind Wall" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Wind Wall"><img alt="Wind Wall" src="/wiki/images/Yasuo_Wind_Wall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yasuo/LoL#Wind_Wall" title="Yasuo/LoL">Wind Wall</a></span></span> or <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Braum" data-ability="Unbreakable" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Braum/LoL#Unbreakable" title="Unbreakable"><img alt="Unbreakable" src="/wiki/images/Braum_Unbreakable.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Braum/LoL#Unbreakable" title="Braum/LoL">Unbreakable</a></span></span>.</li>\n<li>This ability will cast from wherever the caster is at the start of the cast time.</li>\n<li>The <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stacks multiplicatively"><a href="/wiki/Stacking#Stacks_multiplicatively" title="Stacking#Stacks multiplicatively"><img alt="Multiple stacking icon.png" src="/wiki/images/Multiple_stacking_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stacking#Stacks_multiplicatively" title="Stacking">stacks multiplicatively</a></span> with other sources of movement speed boosts.</li></ul>',
  },
  'Shroud of Darkness': {
    name: 'Shroud of Darkness',
    display_name: 'Shroud of Darkness',
    champion: 'Nocturne',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'NocturneShroudofDarkness.png',
      sprite: 'spell9.png',
      group: 'spell',
      x: 240,
      y: 0,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '50',
    costtype: 'Mana',
    cooldown: '20 / 18 / 16 / 14 / 12',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nocturne" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nocturne/LoL" title="Nocturne"><img alt="Nocturne" src="/wiki/images/Nocturne_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nocturne/LoL" title="Nocturne/LoL">Nocturne</a></span></span> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Nocturne</b> gains a brief <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span>. If it blocks an ability, the <span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span> is doubled for a few seconds.',
    ],
    description: [
      {
        description: 'Passive: Nocturne gains  bonus attack speed.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Nocturne</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Bonus Attack Speed:',
            values: '30 / 35 / 40 / 45 / 50%',
            valuesHTML: '30 / 35 / 40 / 45 / 50%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
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
        icon: '/wiki/images/Shroud_of_Darkness.png',
        description:
          "Active: Nocturne gains a  spell shield for 1.5 seconds. Upon successfully blocking a hostile effect, Shroud of Darkness' bonus attack speed is doubled for 5 seconds.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Nocturne</b> gains a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shield</a></span> for 1.<small>5</small> seconds. Upon successfully blocking a hostile effect, <i>Shroud of Darkness\' </i><span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span> is doubled for 5 seconds.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Active:',
            raw: 'Nocturne gains a  spell shield for 1.5 seconds',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: 1,
            user: 'none',
            units: '',
            unitsText: 'gains a  spell shield for 1.5 seconds',
            pre: 'Nocturne gains a  spell shield for 1.5 seconds',
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: "Upon successfully blocking a hostile effect, Shroud of Darkness' bonus attack speed is doubled for 5 seconds.",
            values: 5,
            units: 'bonus_ad',
            unitsText:
              "successfully blocking a hostile effect, Shroud of Darkness' bonus attack speed is doubled for 5 seconds.",
            pre: "Upon successfully blocking a hostile effect, Shroud of Darkness' bonus attack speed is doubled for 5 seconds.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    notes:
      '* If <i>Shroud of Darkness</i> is active when <b>Nocturne</b> re-casts <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nocturne" data-ability="Paranoia" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nocturne/LoL#Paranoia" title="Paranoia"><img alt="Paranoia" src="/wiki/images/Nocturne_Paranoia.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nocturne/LoL#Paranoia" title="Nocturne/LoL">Paranoia</a></span></span></i> to dash to a target, its duration is refreshed every 0.<small>25</small> seconds during the dash.',
  },
  'Unspeakable Horror': {
    name: 'Unspeakable Horror',
    display_name: 'Unspeakable Horror',
    champion: 'Nocturne',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'NocturneUnspeakableHorror.png',
      sprite: 'spell9.png',
      group: 'spell',
      x: 288,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '425',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Fear MS radius">1000</span>',
    tether_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 465',
    cast_time: 'none',
    cost: '60 / 65 / 70 / 75 / 80',
    costtype: 'mana',
    cooldown: '15 / 14 / 13 / 12 / 11',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nocturne" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nocturne/LoL" title="Nocturne"><img alt="Nocturne" src="/wiki/images/Nocturne_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nocturne/LoL" title="Nocturne/LoL">Nocturne</a></span></span> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> while moving towards <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fear"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">feared</a></span> targets.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Nocturne</b> torments the target, forming a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tether</a></span> that continually deals <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
      'If the tether is not broken after a short time, the target is briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fear"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">feared</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span>.',
    ],
    description: [
      {
        description:
          'Passive: Nocturne gains  90% bonus movement speed while facing nearby  feared targets.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Nocturne</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">90% <b>bonus</b> movement speed</span></span> while facing nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fear"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">feared</a></span> targets.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Passive:',
            raw: 'Nocturne gains  90% bonus movement speed while facing nearby  feared targets.',
            values: 9,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'bonus movement speed while facing nearby  feared targets.gains  90',
            pre: 'Nocturne gains  90% bonus movement speed while facing nearby  feared targets.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Unspeakable_Horror.png',
        description:
          'Active: Nocturne torments the target, forming a  tether between himself and the target for 2 seconds, during which the target takes magic damage every 0.5 seconds over the duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Nocturne</b> torments the target, forming a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tether</a></span> between himself and the target for 2 seconds, during which the target takes <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>5</small> seconds over the duration.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Nocturne torments the target, forming a  tether between himself and the target for 2 seconds, during which the target takes magic damage every 0.5 seconds over the duration.',
            damagetype: 'Magic',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'torments the target, forming a  tether between himself and the target for 2 seconds, during which the target takes magic damage every 0.5 seconds over the duration.',
            pre: 'Nocturne torments the target, forming a  tether between himself and the target for 2 seconds, during which the target takes magic damage every 0.5 seconds over the duration.',
          },
        ],
        leveling: [
          {
            name: 'Total Magic Damage:',
            values: '80 / 125 / 170 / 215 / 260 (+ 100% AP)',
            valuesHTML:
              '80 / 125 / 170 / 215 / 260 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;100% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Total Magic Damage:',
            raw: '80 / 125 / 170 / 215 / 260 (+ 100% AP)',
            damagetype: 'Magic',
            values: [80, 125, 170, 215, 260],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 125 / 170 / 215 / 260',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 100% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'If the tether is not broken by the end of its duration, the target is  feared for a duration while being  slowed by 90%.',
        descriptionHTML:
          'If the tether is not broken by the end of its duration, the target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fear"><a href="/wiki/Flee" title="Flee"><img alt="Flee icon.png" src="/wiki/images/Flee_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flee" class="mw-redirect" title="Flee">feared</a></span> for a duration while being <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 90%.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'If the tether is not broken by the end of its duration, the target is  feared for a duration while being  slowed by 90%.',
            values: 9,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              '.the tether is not broken by the end of its duration, the target is  feared for a duration while being  slowed by 90',
            pre: 'If the tether is not broken by the end of its duration, the target is  feared for a duration while being  slowed by 90%.',
          },
        ],
        leveling: [
          {
            name: 'Disable Duration:',
            values: '1.25 / 1.5 / 1.75 / 2 / 2.25',
            valuesHTML:
              '1.<small>25</small> / 1.<small>5</small> / 1.<small>75</small> / 2 / 2.<small>25</small>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Disable Duration:',
            raw: '1.25 / 1.5 / 1.75 / 2 / 2.25',
            values: [1.25, 1.5, 1.75, 2, 2.25],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1.25 / 1.5 / 1.75 / 2 / 2.25',
          },
        ],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'DoT',
    spellshield: 'Special',
    projectile: 'False',
    callforhelp: 'True',
    notes:
      '* Feared enemies in a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 180° total angle within <b>Nocturne\'s</b> facing direction will trigger <i>Unspeakable Horror\'s</i> passive.\n<ul><li><ul><li>The movement speed buff is granted even while <b>Nocturne</b> is standing still.</li>\n<li><b>Nocturne</b> does not need to have sight of fleeing targets to gain movement speed towards them.</li></ul></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block the tether\'s application but not the damage and aftereffects of one already applied.</li></ul>',
  },
  Paranoia: {
    name: 'Paranoia',
    display_name: 'Paranoia',
    champion: 'Nocturne',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'NocturneParanoia.png',
      sprite: 'spell9.png',
      group: 'spell',
      x: 336,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '2500 / 3250 / 4000',
    effect_radius: 'Global',
    speed: '1800',
    cast_time: 'none',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">140 / 115 / 90</span>',
    customlabel: 'Sight Reduction',
    custominfo:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Reduces enemy champions\' sight radius to 1,050 units">300</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nocturne" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nocturne/LoL" title="Nocturne"><img alt="Nocturne" src="/wiki/images/Nocturne_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nocturne/LoL" title="Nocturne/LoL">Nocturne</a></span></span> terrorizes all enemy champions, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Nearsight"><a href="/wiki/Nearsight" title="Nearsight"><img alt="Nearsight icon.png" src="/wiki/images/Nearsight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Nearsight" class="mw-redirect" title="Nearsight">nearsighting</a></span> them for a few seconds. He can recast <i>Paranoia</i> during this time.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Nocturne</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span> to the target enemy champion, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> upon arrival.',
      '<span class="template_sbc"><b><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> displacement immunity</span>:</b></span> The dash cannot be deterred by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Paranoia.png',
        description:
          'Active: Nocturne terrorizes all enemy champions,  nearsighting them for 6 seconds. He can recast Paranoia for the same duration after 0.25 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Nocturne</b> terrorizes all enemy champions, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Nearsight"><a href="/wiki/Nearsight" title="Nearsight"><img alt="Nearsight icon.png" src="/wiki/images/Nearsight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Nearsight" class="mw-redirect" title="Nearsight">nearsighting</a></span> them for 6 seconds. He can recast <i>Paranoia</i> for the same duration after 0.<small>25</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: 'Nocturne terrorizes all enemy champions,  nearsighting them for 6 seconds',
            values: 6,
            user: 'none',
            units: '',
            unitsText:
              'terrorizes all enemy champions,  nearsighting them for 6 seconds',
            pre: 'Nocturne terrorizes all enemy champions,  nearsighting them for 6 seconds',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Recast: Nocturne  dashes with  displacement immunity to the target enemy champion, dealing physical damage upon arrival.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Nocturne</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span> to the target enemy champion, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> upon arrival.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '150 / 275 / 400 (+ 120% bonus AD)',
            valuesHTML:
              '150 / 275 / 400 <span style="color:orange; white-space:normal">(+&nbsp;120% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '150 / 275 / 400 (+ 120% bonus AD)',
            damagetype: 'Physical',
            values: [150, 275, 400],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '150 / 275 / 400',
            children: [
              {
                values: 120,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 120% bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'Nocturne can cast any of his abilities during the dash.',
        descriptionHTML:
          '<i><b>Nocturne</b> can cast any of his <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> during the dash.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting:
      '<a href="/wiki/Auto-targeted" class="mw-redirect" title="Auto-targeted">Auto</a> / <a href="/wiki/Unit-targeted" class="mw-redirect" title="Unit-targeted">Unit</a>',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'spell',
    spellshield: true,
    callforhelp: 'true',
    notes:
      '* <b>Nocturne</b> will track the target if they change locations.\n<ul><li><ul><li>He will dash to the target\'s previous location without dealing damage if the target is too far away or moves beyond 3500 / 4250 / 5000 (based on <i>Paranoia\'s</i> rank) units.</li></ul></li>\n<li><i>Paranoia\'s</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Nearsight"><a href="/wiki/Nearsight" title="Nearsight"><img alt="Nearsight icon.png" src="/wiki/images/Nearsight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Nearsight" class="mw-redirect" title="Nearsight">nearsight</a></span> will apply to enemy champions that are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> or are dead, and will persist through <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">death</a></span>.</li>\n<li><b>Nocturne</b> can cast any of his <a href="/wiki/Champion_ability" title="Champion ability">abilities</a>, <a href="/wiki/Summoner_spell" title="Summoner spell">summoner spells</a> (excluding <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>), or <a href="/wiki/Active_ability_items" title="Active ability items">item actives</a> during flight.\n<ul><li>Using a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blink</a></span> ability will interrupt the flight.</li></ul></li>\n<li><i>Paranoia</i> cannot be recast while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span>.</li>\n<li><i>Paranoia\'s</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Nearsight"><a href="/wiki/Nearsight" title="Nearsight"><img alt="Nearsight icon.png" src="/wiki/images/Nearsight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Nearsight" class="mw-redirect" title="Nearsight">nearsight</a></span> does not apply to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clones</a></span>.</li>\n<li><a href="/wiki/Summoner" title="Summoner">Players\'</a> screens will turn a different color when <i>Paranoia</i> is cast, based on their perspective: blue for allies and red for enemies.</li>\n<li>A <a href="/wiki/Spell_indicator" title="Spell indicator">spell indicator</a> telegraphed to <b>Nocturne</b> and his allies will be placed on all enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> within range of <i>Paranoia\'s</i> recast while the ability is active. <i>The following images display the indicator for the default <a href="/wiki/Skin" class="mw-redirect mw-disambig" title="Skin">skin</a>:</i></li></ul>\n<figure class="thumb tleft " style="width: 180px"> \t<a href="https://static.wikia.nocookie.net/leagueoflegends/images/d/d9/Nocturne_Original_Paranoia_Indicator_Red.png/revision/latest?cb=20200423193541" class="image"><img alt="" src="/wiki/images/Nocturne_Original_Paranoia_Indicator_Red.png" decoding="async" loading="lazy" width="180" height="114" class="thumbimage lazyload"></a> \t<noscript><a href="https://static.wikia.nocookie.net/leagueoflegends/images/d/d9/Nocturne_Original_Paranoia_Indicator_Red.png/revision/latest?cb=20200423193541" class="image"><img alt="" src="https://static.wikia.nocookie.net/leagueoflegends/images/d/d9/Nocturne_Original_Paranoia_Indicator_Red.png/revision/latest/scale-to-width-down/180?cb=20200423193541" decoding="async" loading="lazy" width="180" height="114" class="thumbimage" data-image-name="Nocturne Original Paranoia Indicator Red.png" data-image-key="Nocturne_Original_Paranoia_Indicator_Red.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/d/d9/Nocturne_Original_Paranoia_Indicator_Red.png/revision/latest/scale-to-width-down/180?cb=20200423193541"></a></noscript> \t<figcaption class="thumbcaption"> \t\t \t\t \t\t \t\t\t<p class="caption">A glowing <b><span style="color:#8b0000;">red silhouette</span></b> of <b>Nocturne\'s</b> blades indicates an enemy champion can be targeted by <i>Paranoia\'s</i> recast.</p> \t\t \t</figcaption> </figure>\n<figure class="thumb tleft " style="width: 180px"> \t<a href="https://static.wikia.nocookie.net/leagueoflegends/images/d/db/Nocturne_Original_Paranoia_Indicator.png/revision/latest?cb=20200423193540" class="image"><img alt="" src="/wiki/images/Nocturne_Original_Paranoia_Indicator.png" decoding="async" loading="lazy" width="180" height="114" class="thumbimage lazyload"></a> \t<noscript><a href="https://static.wikia.nocookie.net/leagueoflegends/images/d/db/Nocturne_Original_Paranoia_Indicator.png/revision/latest?cb=20200423193540" class="image"><img alt="" src="https://static.wikia.nocookie.net/leagueoflegends/images/d/db/Nocturne_Original_Paranoia_Indicator.png/revision/latest/scale-to-width-down/180?cb=20200423193540" decoding="async" loading="lazy" width="180" height="114" class="thumbimage" data-image-name="Nocturne Original Paranoia Indicator.png" data-image-key="Nocturne_Original_Paranoia_Indicator.png" data-src="https://static.wikia.nocookie.net/leagueoflegends/images/d/db/Nocturne_Original_Paranoia_Indicator.png/revision/latest/scale-to-width-down/180?cb=20200423193540"></a></noscript> \t<figcaption class="thumbcaption"> \t\t \t\t \t\t \t\t\t<p class="caption">A glowing <b><span style="color:#32CD32;">green silhouette</span></b> of <b>Nocturne\'s</b> blades signifies an enemy champion has been targeted by <i>Paranoia\'s</i> recast.</p> \t\t \t</figcaption> </figure>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Nocturne_Original_R_1.ogg   "Darkness... " https://leagueoflegends.fandom.com/wiki/File:Nocturne_Original_R_SFX_0.ogg   Activation alert.',
  },
} satisfies { [skillName in string]: SkillData };
