import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Skarner';

export default {
  'Crystal Spires': {
    name: 'Crystal Spires',
    display_name: 'Crystal Spires',
    champion: 'Skarner',
    skill: 'I',
    image: {
      full: 'Skarner_Passive.png',
      sprite: 'passive3.png',
      group: 'passive',
      x: 384,
      y: 96,
      w: 48,
      h: 48,
    },
    effect_radius: '1600',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Skarner" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Skarner/LoL" title="Skarner\'s"><img alt="Skarner\'s" src="/wiki/images/Skarner_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Skarner/LoL" title="Skarner/LoL">Skarner\'s</a></span></span> presence causes <img alt="Crystal Spires Minimap.png" src="/wiki/images/Crystal_Spires_Minimap.png" decoding="async" loading="lazy" width="16" height="16" class="lazyload"> <i>Crystal Spires</i> to spawn at set locations across the map that can be captured by both teams, which grants <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="gold Gold"><img alt="gold Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">gold</span></span> upon capture. While he is near a <i>Crystal Spire</i> that is captured by his team, he gains <i>Crystal Charge</i>.',
      '<span class="template_sbc"><b>Crystal Charge:</b></span> <b>Skarner</b> gains tremendous <span style="color:orangered; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack speed</span></span> and <span style="color: #F5EE99; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> movement speed</span></span>, and continually restores a portion of <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">his <b>maximum</b> mana</span></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Crystal_Spires.png',
        description:
          "Innate: Skarner's presence spawns  6 Crystal Spires at set points across the battlefield:\nOne beside  Baron Nashor's pit\nOne beside  Dragon's pit\nOne near each of the camps for  Blue Sentinel and  Red Brambleback",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Skarner\'s</b> presence spawns <img alt="Crystal Spires Minimap.png" src="/wiki/images/Crystal_Spires_Minimap.png" decoding="async" loading="lazy" width="16" height="16" class="lazyload"> 6 <i>Crystal Spires</i> at set points across the <a href="/wiki/Summoner%27s_Rift" title="Summoner\'s Rift">battlefield</a>:\n<ul><li>One beside <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Baron_Nashor" title="Baron Nashor\'s"><img alt="Baron Nashor\'s" src="/wiki/images/Baron_NashorSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Baron_Nashor" class="mw-redirect" title="Baron Nashor">Baron Nashor\'s</a></span></span> pit</li>\n<li>One beside <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Dragon" title="Dragon\'s"><img alt="Dragon\'s" src="/wiki/images/DragonSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Dragon" title="Dragon">Dragon\'s</a></span></span> pit</li>\n<li>One near each of the camps for <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Blue_Sentinel" title="Blue Sentinel"><img alt="Blue Sentinel" src="/wiki/images/Blue_SentinelSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Blue_Sentinel" title="Blue Sentinel">Blue Sentinel</a></span></span> and <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Red_Brambleback" title="Red Brambleback"><img alt="Red Brambleback" src="/wiki/images/Red_BramblebackSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Red_Brambleback" title="Red Brambleback">Red Brambleback</a></span></span></li></ul>',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Innate:',
            raw: "Skarner's presence spawns  6 Crystal Spires at set points across the battlefield:\nOne beside  Baron Nashor's pit\nOne beside  Dragon's pit\nOne near each of the camps for  Blue Sentinel and  Red Brambleback",
            values: 6,
            user: 'none',
            units: '',
            unitsText:
              'presence spawns  6 Crystal Spires at set points across the battlefield:',
            pre: "Skarner's presence spawns  6 Crystal Spires at set points across the battlefield:\nOne beside  Baron Nashor's pit\nOne beside  Dragon's pit\nOne near each of the camps for  Blue Sentinel and  Red Brambleback",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'After  minions have spawned, a Crystal Spire can be captured by  champions by standing on it for 2 seconds, Once captured, the Crystal Spire is owned by the team until contested, and the defending team can stand on the spire to prevent the opposing team from capturing it.',
        descriptionHTML:
          'After <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> have spawned, a <i>Crystal Spire</i> can be captured by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> by standing on it for 2 seconds, Once captured, the <i>Crystal Spire</i> is owned by the team until contested, and the defending team can stand on the spire to prevent the opposing team from capturing it.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'After  minions have spawned, a Crystal Spire can be captured by  champions by standing on it for 2 seconds, Once captured, the Crystal Spire is owned by the team until contested, and the defending team can stand on the spire to prevent the opposing team from capturing it.',
            damagetype: 'None',
            values: 2,
            units: 'total_ap',
            unitsText:
              'minions have spawned, a Crystal Spire can be captured by  champions by standing on it for 2 seconds, Once captured, the Crystal Spire is owned by the team until contested, and the defending team can stand on the spire to prevent the opposing team from capturing it.',
            pre: 'After  minions have spawned, a Crystal Spire can be captured by  champions by standing on it for 2 seconds, Once captured, the Crystal Spire is owned by the team until contested, and the defending team can stand on the spire to prevent the opposing team from capturing it.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Capturing a Crystal Spire grants  sight of its radius for 1.5 seconds and locks it out from capture for 15 seconds. Crystal Spires grant  30 split among its captors, or  15 for a single captor.',
        descriptionHTML:
          'Capturing a <i>Crystal Spire</i> grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of its radius for 1.<small>5</small> seconds and locks it out from capture for 15 seconds. <i>Crystal Spires</i> grant <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="30 Gold"><img alt="30 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">30</span></span> split among its captors, or <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="15 Gold"><img alt="15 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">15</span></span> for a single captor.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Capturing a Crystal Spire grants  sight of its radius for 1.5 seconds and locks it out from capture for 15 seconds',
            increasedStat: 'total_ap',
            values: 1,
            units: '',
            unitsText:
              'a Crystal Spire grants  sight of its radius for 1.5 seconds and locks it out from capture for 15 seconds',
            pre: 'Capturing a Crystal Spire grants  sight of its radius for 1.5 seconds and locks it out from capture for 15 seconds',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'Crystal Spires grant  30 split among its captors, or  15 for a single captor.',
            increasedStat: 'total_ap',
            values: 3,
            units: '',
            unitsText:
              'Spires grant  30 split among its captors, or  15 for a single captor.',
            pre: 'Crystal Spires grant  30 split among its captors, or  15 for a single captor.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Skarner gains Crystal Charge while within range of a Crystal Spire controlled by his team, for 1.25 seconds after triggering  Crystal Venom, and for 1.75 seconds after stinging an enemy champion with  Impale.',
        descriptionHTML:
          '<b>Skarner</b> gains <i>Crystal Charge</i> while within range of a <i>Crystal Spire</i> controlled by his team, for 1.<small>25</small> seconds after triggering <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Skarner" data-ability="Crystal Venom" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Skarner/LoL#Crystal_Venom" title="Crystal Venom"><img alt="Crystal Venom" src="/wiki/images/Skarner_Crystallizing_Sting.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Skarner/LoL#Crystal_Venom" title="Skarner/LoL">Crystal Venom</a></span></span></i>, and for 1.<small>75</small> seconds after stinging an enemy champion with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Skarner" data-ability="Impale" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Skarner/LoL#Impale" title="Impale"><img alt="Impale" src="/wiki/images/Skarner_Impale.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Skarner/LoL#Impale" title="Skarner/LoL">Impale</a></span></span></i>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Skarner gains Crystal Charge while within range of a Crystal Spire controlled by his team, for 1.25 seconds after triggering  Crystal Venom, and for 1.75 seconds after stinging an enemy champion with  Impale.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'gains Crystal Charge while within range of a Crystal Spire controlled by his team, for 1.25 seconds after triggering  Crystal Venom, and for 1.75 seconds after stinging an enemy champion with  Impale.',
            pre: 'Skarner gains Crystal Charge while within range of a Crystal Spire controlled by his team, for 1.25 seconds after triggering  Crystal Venom, and for 1.75 seconds after stinging an enemy champion with  Impale.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Crystal Charge: Skarner gains  70 − 120 (based on level) bonus movement speed and  43% − 160% (based on level) bonus attack speed and restores  1% maximum mana every 0.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Crystal Charge:</b></span> <b>Skarner</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#F5EE99;" data-displayformula="68 + 2 per level up to 7, + 3 per level up to 13, and + 4 per level" data-bot_values="70;72;74;76;78;80;82;85;88;91;94;97;100;104;108;112;116;120" data-top_values="">70 − 120 (based on level)</span> <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> and <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:orangered;" data-displayformula="38 + 5 per level up to 7, + 7 per level up to 13, and + 9 per level" data-bot_values="43;48;53;58;63;68;73;80;87;94;101;108;115;124;133;142;151;160" data-top_values="" data-bot_key="%">43% − 160% (based on level)</span> <span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> and restores <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">1% <b>maximum</b> mana</span></span> every 0.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Crystal Charge:',
            raw: 'Skarner gains  70 − 120 (based on level) bonus movement speed and  43% − 160% (based on level) bonus attack speed and restores  1% maximum mana every 0.5 seconds.',
            values: [
              70, 72.94, 75.88, 78.82, 81.76, 84.71, 87.65, 90.59, 93.53, 96.47,
              99.41, 102.35, 105.29, 108.24, 111.18, 114.12, 117.06, 120,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'bonus movement speed and  43% − 160%',
            pre: 'Skarner gains  70 − 120',
            post: 'bonus movement speed and  43% − 160%',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes:
      "* <i>Crystal Charge's</i> duration refreshes if it was gained by an ability.",
  },
  'Crystal Slash': {
    name: 'Crystal Slash',
    display_name: 'Crystal Slash',
    champion: 'Skarner',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'SkarnerVirulentSlash.png',
      sprite: 'spell12.png',
      group: 'spell',
      x: 384,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 350',
    cast_time: 'none',
    cost: '10',
    costtype: 'Mana',
    cooldown:
      '3.<small>5</small> / 3.<small>25</small> / 3 / 2.<small>75</small> / 2.<small>5</small>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Skarner" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Skarner/LoL" title="Skarner"><img alt="Skarner" src="/wiki/images/Skarner_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Skarner/LoL" title="Skarner/LoL">Skarner</a></span></span> slashes around himself, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies based on <span style="color: #1F995C; white-space:normal">their <b>maximum</b> health</span>.',
      'If <i>Crystal Slash</i> hits an enemy, the next cast within a few seconds also deals <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> to nearby enemies based on <span style="color: #1F995C; white-space:normal">their <b>maximum</b> health</span>.',
      "Basic attacks reduce <i>Crystal Slash's</i> current cooldown.",
    ],
    description: [
      {
        icon: '/wiki/images/Crystal_Slash.png',
        description:
          'Active: Skarner slashes around himself, dealing physical damage to nearby enemies. If at least one enemy is hit, he becomes charged for 5 seconds, empowering subsequent casts of Crystal Slash to deal bonus magic damage.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Skarner</b> slashes around himself, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies. If at least one enemy is hit, he becomes charged for 5 seconds, empowering subsequent casts of <i>Crystal Slash</i> to deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'If at least one enemy is hit, he becomes charged for 5 seconds, empowering subsequent casts of Crystal Slash to deal bonus magic damage.',
            damagetype: 'Magic',
            values: 5,
            user: 'none',
            units: '',
            unitsText:
              'at least one enemy is hit, he becomes charged for 5 seconds, empowering subsequent casts of Crystal Slash to deal bonus magic damage.',
            pre: 'If at least one enemy is hit, he becomes charged for 5 seconds, empowering subsequent casts of Crystal Slash to deal bonus magic damage.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values:
              "1 / 1.5 / 2 / 2.5 / 3% of target's maximum health (+ 20% AD)",
            valuesHTML:
              '<span style="color: #1F995C; white-space:normal">1 / 1.<small>5</small> / 2 / 2.<small>5</small> / 3% of target\'s <b>maximum</b> health</span> <span style="color:orange; white-space:normal">(+&nbsp;20% AD)</span>',
          },
          {
            name: 'Bonus Magic Damage:',
            values:
              "1 / 1.5 / 2 / 2.5 / 3% of target's maximum health (+ 20% AD) (+ 30% AP)",
            valuesHTML:
              '<span style="color: #1F995C; white-space:normal">1 / 1.<small>5</small> / 2 / 2.<small>5</small> / 3% of target\'s <b>maximum</b> health</span> <span style="color:orange; white-space:normal">(+&nbsp;20% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Physical Damage:',
            raw: "1 / 1.5 / 2 / 2.5 / 3% of target's maximum health (+ 20% AD)",
            healType: 'PhysicalVamp',
            values: [1, 1.5, 2, 2.5, 3],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: "1 / 1.5 / 2 / 2.5 / 3% of target's maximum health",
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 20% AD',
              },
            ],
          },
          {
            effectType: 'Heal',
            name: 'Bonus Magic Damage:',
            raw: "1 / 1.5 / 2 / 2.5 / 3% of target's maximum health (+ 20% AD) (+ 30% AP)",
            healType: 'OutgoingHeals',
            values: [1, 1.5, 2, 2.5, 3],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: "1 / 1.5 / 2 / 2.5 / 3% of target's maximum health",
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 20% AD',
              },
              {
                values: 30,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 30% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Each instance of damage is capped at 200 against epic  monsters.',
        descriptionHTML:
          'Each instance of damage is capped at 200 against epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Each instance of damage is capped at 200 against epic  monsters.',
            increasedStat: 'total_ap',
            values: 2,
            units: '',
            unitsText:
              'instance of damage is capped at 200 against epic  monsters.',
            pre: 'Each instance of damage is capped at 200 against epic  monsters.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Basic attacks reduce Crystal Slash's  current cooldown by 0.25 seconds, increased to 1 second against  champions.",
        descriptionHTML:
          'Basic attacks reduce <i>Crystal Slash\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> by 0.<small>25</small> seconds, increased to 1 second against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies, Self',
    damagetype:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Physical damage"><a href="/wiki/Physical_damage" title="Physical damage"><img alt="Attack damage.png" src="/wiki/images/Attack_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Physical_damage" title="Physical damage">Physical damage</a></span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Magic damage"><a href="/wiki/Magic_damage" title="Magic damage"><img alt="Magic damage.png" src="/wiki/images/Magic_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Magic_damage" title="Magic damage">Magic damage</a></span>',
    spelleffects: 'spellaoe',
    spellshield: 'Special',
    notes:
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block the damage but will not prevent <b>Skarner</b> from triggering the bonus effect.\n<ul><li>Basic attacks against structures will not trigger the cooldown reduction.</li>\n<li>As already noted, each damage instance is capped on its own, meaning that the maximum possible damage against an epic monster with one cast is 400.</li>\n<li>In order to hit the cap, the target needs to have at least <span style="color: #1F995C; white-space:normal">20000 / 13334 / 10000 / 8000 / 6667 health</span> (without considering the ratios).</li></ul>',
  },
  'Crystalline Exoskeleton': {
    name: 'Crystalline Exoskeleton',
    display_name: 'Crystalline Exoskeleton',
    champion: 'Skarner',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'SkarnerExoskeleton.png',
      sprite: 'spell12.png',
      group: 'spell',
      x: 432,
      y: 0,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '60',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on-cast">13 / 12.<small>5</small> / 12 / 11.<small>5</small> / 11</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Skarner" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Skarner/LoL" title="Skarner"><img alt="Skarner" src="/wiki/images/Skarner_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Skarner/LoL" title="Skarner/LoL">Skarner</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span> himself based on <span style="color: #1F995C; white-space:normal">his <b>maximum</b> health</span> and gradually gains <span style="color: #F5EE99; white-space:normal"><b>bonus</b> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;movement speed</span></span> while it persists.',
    ],
    description: [
      {
        icon: '/wiki/images/Crystalline_Exoskeleton.png',
        description:
          'Active: Skarner grants himself a  shield for up to 6 seconds, and while it holds, he gains  bonus movement speed that doubles over the first 3 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Skarner</b> grants himself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for up to 6 seconds, and while it holds, he gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> that doubles over the first 3 seconds.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Active:',
            raw: 'Skarner grants himself a  shield for up to 6 seconds, and while it holds, he gains  bonus movement speed that doubles over the first 3 seconds.',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: 6,
            user: 'none',
            units: '',
            unitsText:
              'grants himself a  shield for up to 6 seconds, and while it holds, he gains  bonus movement speed that doubles over the first 3 seconds.',
            pre: 'Skarner grants himself a  shield for up to 6 seconds, and while it holds, he gains  bonus movement speed that doubles over the first 3 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Shield Strength:',
            values: '9 / 10 / 11 / 12 / 13% maximum health (+ 80% AP)',
            valuesHTML:
              '<span style="color: #1F995C; white-space:normal">9 / 10 / 11 / 12 / 13% <b>maximum</b> health</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;80% AP)</span>',
          },
          {
            name: 'Bonus Movement Speed:',
            values: '8 / 10 / 12 / 14 / 16%',
            valuesHTML: '8 / 10 / 12 / 14 / 16%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Shield Strength:',
            raw: '9 / 10 / 11 / 12 / 13% maximum health (+ 80% AP)',
            healType: 'BonusHealth',
            values: [9, 10, 11, 12, 13],
            valuesIsPercent: true,
            units: 'maximum_hp',
            unitsText: 'maximum health',
            pre: '9 / 10 / 11 / 12 / 13% maximum health',
            children: [
              {
                values: 80,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 80% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Bonus Movement Speed:',
            raw: '8 / 10 / 12 / 14 / 16%',
            values: [8, 10, 12, 14, 16],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '8 / 10 / 12 / 14 / 16%',
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    spelleffects: 'Shield',
    notes: '* No additional notes.',
  },
  Fracture: {
    name: 'Fracture',
    display_name: 'Fracture',
    champion: 'Skarner',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'SkarnerFracture.png',
      sprite: 'spell12.png',
      group: 'spell',
      x: 0,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '1000',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 140',
    speed: '1500',
    cast_time: '0.<small>25</small>',
    cost: '55',
    costtype: 'Mana',
    cooldown: '14 / 13.<small>5</small> / 13 / 12.<small>5</small> / 12',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> Whenever <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Skarner" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Skarner/LoL" title="Skarner"><img alt="Skarner" src="/wiki/images/Skarner_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Skarner/LoL" title="Skarner/LoL">Skarner</a></span></span> triggers <i>Crystal Venom</i> or stings an enemy with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Skarner" data-ability="Impale" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Skarner/LoL#Impale" title="Impale"><img alt="Impale" src="/wiki/images/Skarner_Impale.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Skarner/LoL#Impale" title="Skarner/LoL">Impale</a></span></span></i>, <i>Fracture\'s</i> cooldown will be <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduced</span> by the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control\'s</a></span> duration.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Skarner</b> launches a blast of crystalline energy in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for a short time, as well as marking them with <i>Crystal Venom</i> for a few seconds.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Skarner" data-ability="Crystal Venom" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Skarner/LoL#Crystal_Venom" title="Crystal Venom"><img alt="Crystal Venom" src="/wiki/images/Skarner_Crystallizing_Sting.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Skarner/LoL#Crystal_Venom" title="Skarner/LoL">Crystal Venom</a></span></span>:</b></span> <b>Skarner\'s</b> next basic attack against a marked target consumes the mark to deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> them.',
    ],
    description: [
      {
        description:
          "Passive: Every time Skarner triggers Crystal Venom or stings an enemy with  Impale, Fracture's  current cooldown is reduced by the corresponding base duration of the disable.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> Every time <b>Skarner</b> triggers <i>Crystal Venom</i> or stings an enemy with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Skarner" data-ability="Impale" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Skarner/LoL#Impale" title="Impale"><img alt="Impale" src="/wiki/images/Skarner_Impale.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Skarner/LoL#Impale" title="Skarner/LoL">Impale</a></span></span></i>, <i>Fracture\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> is reduced by the corresponding <b>base</b> duration of the disable.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Fracture.png',
        description:
          'Active: Skarner launches a blast of crystalline energy in the target direction that deals magic damage to enemies hit,  slows them for 2.5 seconds, and marks them with Crystal Venom for 5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Skarner</b> launches a blast of crystalline energy in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for 2.<small>5</small> seconds, and marks them with <i>Crystal Venom</i> for 5 seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Skarner launches a blast of crystalline energy in the target direction that deals magic damage to enemies hit,  slows them for 2.5 seconds, and marks them with Crystal Venom for 5 seconds.',
            damagetype: 'Magic',
            values: 2,
            units: 'kindredMarks',
            unitsText:
              'launches a blast of crystalline energy in the target direction that deals magic damage to enemies hit,  slows them for 2.5 seconds, and marks them with Crystal Venom for 5 seconds.',
            pre: 'Skarner launches a blast of crystalline energy in the target direction that deals magic damage to enemies hit,  slows them for 2.5 seconds, and marks them with Crystal Venom for 5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '40 / 65 / 90 / 115 / 140 (+ 20% AP)',
            valuesHTML:
              '40 / 65 / 90 / 115 / 140 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;20% AP)</span>',
          },
          {
            name: 'Slow:',
            values: '30 / 35 / 40 / 45 / 50%',
            valuesHTML: '30 / 35 / 40 / 45 / 50%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '40 / 65 / 90 / 115 / 140 (+ 20% AP)',
            damagetype: 'Magic',
            values: [40, 65, 90, 115, 140],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 65 / 90 / 115 / 140',
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
        icon: '/wiki/images/Crystal_Venom.png',
        description:
          "Crystal Venom: Skarner's next basic attack against a marked target is empowered to consume the mark to deal bonus physical damage and  stun them for 1.25 seconds.",
        descriptionHTML:
          '<span class="template_sbc"><b>Crystal Venom:</b></span> <b>Skarner\'s</b> next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> against a marked target is empowered to consume the mark to deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> them for 1.<small>25</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Crystal Venom:',
            raw: "Skarner's next basic attack against a marked target is empowered to consume the mark to deal bonus physical damage and  stun them for 1.25 seconds.",
            increasedStat: 'kindredMarks',
            values: 1,
            units: '',
            unitsText:
              'next basic attack against a marked target is empowered to consume the mark to deal bonus physical damage and  stun them for 1.25 seconds.',
            pre: "Skarner's next basic attack against a marked target is empowered to consume the mark to deal bonus physical damage and  stun them for 1.25 seconds.",
          },
        ],
        leveling: [
          {
            name: 'Bonus Physical Damage:',
            values: '30 / 50 / 70 / 90 / 110',
            valuesHTML: '30 / 50 / 70 / 90 / 110',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Bonus Physical Damage:',
            raw: '30 / 50 / 70 / 90 / 110',
            damagetype: 'Physical',
            values: [30, 50, 70, 90, 110],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 50 / 70 / 90 / 110',
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Magic damage"><a href="/wiki/Magic_damage" title="Magic damage"><img alt="Magic damage.png" src="/wiki/images/Magic_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Magic_damage" title="Magic damage">Magic damage</a></span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Physical damage"><a href="/wiki/Physical_damage" title="Physical damage"><img alt="Attack damage.png" src="/wiki/images/Attack_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Physical_damage" title="Physical damage">Physical damage</a></span>',
    spelleffects: 'special',
    spellshield: true,
    projectile: 'True',
    notes:
      '* <i>Fracture</i> is disabled during <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Skarner" data-ability="Impale" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Skarner/LoL#Impale" title="Impale"><img alt="Impale" src="/wiki/images/Skarner_Impale.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Skarner/LoL#Impale" title="Skarner/LoL">Impale</a></span></span>.\n<ul><li>This ability will cast from wherever the caster is at the start of the cast time.</li>\n<li><i>Fracture\'s</i> projectile deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span>, while the <i>Crystal Venom</i> on-hit effect deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Proc damage"><a href="/wiki/Damage" title="Damage"><img alt="Wit\'s End item.png" src="/wiki/images/Wit%27s_End_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">proc damage</a></span>.</li>\n<li><i>Crystal Venom</i> triggers even if the attack is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blocked"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span> (<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> applies), but not if it\'s <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodged"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span>. The damage of the entire attack is negated in both cases.\n<ul><li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">Blind</a></span>.</li></ul></li></ul>',
  },
  Impale: {
    name: 'Impale',
    display_name: 'Impale',
    champion: 'Skarner',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'SkarnerImpale.png',
      sprite: 'spell12.png',
      group: 'spell',
      x: 48,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '350',
    cast_time: '0.<small>25</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">120 / 110 / 100 / 90 / 80</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Skarner" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Skarner/LoL" title="Skarner"><img alt="Skarner" src="/wiki/images/Skarner_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Skarner/LoL" title="Skarner/LoL">Skarner</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">roots</a></span> the target enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> and impales them with his stinger. Upon impaling the target, he deals <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Suppression"><a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control#Suppression"><img alt="Suppression icon.png" src="/wiki/images/Suppression_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control">suppresses</a></span> them, during which <b>Skarner</b> can drag them with himself.<br><br>Afterwards, the target takes the same damage again.',
      '<i>Impale\'s</i> drag <u>ignores</u> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span>.',
      '<span class="template_sbc"><b><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> displacement immunity</span>:</b></span> The target cannot be deterred by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span> that displaces them.',
    ],
    description: [
      {
        icon: '/wiki/images/Impale.png',
        description:
          'Active: Skarner  roots the target enemy  champion over the cast time and attempts to impale them with his stinger. Upon impaling the target, he deals 60% AD physical damage plus magic damage and  suppresses them for 1.75 seconds, during which they are  revealed and Skarner can drag them with himself.\nAfterwards, the target takes the same damage again.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Skarner</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">roots</a></span> the target enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> over the cast time and attempts to impale them with his stinger. Upon impaling the target, he deals <span style="color:orange; white-space:normal">60% AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> plus <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Suppression"><a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control#Suppression"><img alt="Suppression icon.png" src="/wiki/images/Suppression_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control">suppresses</a></span> them for 1.<small>75</small> seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span> and <b>Skarner</b> can drag them with himself.<br><br>\n<p>Afterwards, the target takes the same damage again.\n</p>',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'Upon impaling the target, he deals 60% AD physical damage plus magic damage and  suppresses them for 1.75 seconds, during which they are  revealed and Skarner can drag them with himself.\nAfterwards, the target takes the same damage again.',
            increasedStat: 'total_ad',
            values: 6,
            valuesIsPercent: true,
            user: 'target',
            units: '',
            unitsText:
              'AD physical damage plus magic damage and  suppresses them for 1.75 seconds, during which they are  revealed and Skarner can drag them with himself.\nAfterwards, the target takes the same damage again.impaling the target, he deals 60',
            pre: 'Upon impaling the target, he deals 60% AD physical damage plus magic damage and  suppresses them for 1.75 seconds, during which they are  revealed and Skarner can drag them with himself.\nAfterwards, the target takes the same damage again.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '20 / 40 / 60 / 80 / 100 (+ 50% AP)',
            valuesHTML:
              '20 / 40 / 60 / 80 / 100 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '20 / 40 / 60 / 80 / 100 (+ 50% AP)',
            damagetype: 'Magic',
            values: [20, 40, 60, 80, 100],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 40 / 60 / 80 / 100',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 50% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Impale's drag ignores  displacement immunity. Skarner is unable to basic attack, cast  Fracture, or use  Flash during Impale.",
        descriptionHTML:
          '<i>Impale\'s drag <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="See notes">ignores</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span>. <b>Skarner</b> is unable to basic attack, cast <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Skarner" data-ability="Fracture" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Skarner/LoL#Fracture" title="Fracture"><img alt="Fracture" src="/wiki/images/Skarner_Fracture.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Skarner/LoL#Fracture" title="Skarner/LoL">Fracture</a></span></span>, or use <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> during Impale.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Physical damage"><a href="/wiki/Physical_damage" title="Physical damage"><img alt="Attack damage.png" src="/wiki/images/Attack_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Physical_damage" title="Physical damage">Physical</a></span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Magic damage"><a href="/wiki/Magic_damage" title="Magic damage"><img alt="Magic damage.png" src="/wiki/images/Magic_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Magic_damage" title="Magic damage">Magic</a></span>',
    spelleffects: 'spell',
    spellshield: true,
    callforhelp: 'true',
    notes:
      '* The target will not take <i>Impale\'s</i> secondary damage if the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Suppression"><a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control#Suppression"><img alt="Suppression icon.png" src="/wiki/images/Suppression_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control">suppression</a></span> is removed before the duration ends.\n<ul><li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).\n<ul><li>The range cancel distance is 800 units.</li></ul></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will not block the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">root</a></span>.</li>\n<li><i>Impale</i> is special cased to end prematurely if the target is affected by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="Devour" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#Devour" title="Devour"><img alt="Devour" src="/wiki/images/Tahm_Kench_Devour.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#Devour" title="Tahm Kench/LoL">Devour</a></span></span></i>, both for an ally and enemy <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL" title="Tahm Kench"><img alt="Tahm Kench" src="/wiki/images/Tahm_Kench_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL" title="Tahm Kench/LoL">Tahm Kench</a></span></span> or if <b>Skarner</b> is teleported by <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ryze" data-ability="Realm Warp" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ryze/LoL#Realm_Warp" title="Realm Warp"><img alt="Realm Warp" src="/wiki/images/Ryze_Realm_Warp.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ryze/LoL#Realm_Warp" title="Ryze/LoL">Realm Warp</a></span></span>.\n<ul><li><i>Impale</i> will not end prematurely if <b>Skarner</b> enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span>.</li></ul></li>\n<li><b>Skarner</b> cannot use <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Gates"><a href="/wiki/Gate" class="mw-disambig" title="Gate">gates</a></span> during <i>Impale</i>.</li>\n<li>While <i>Impale</i> is active, and for the purposes of direction-conditioned abilities, (e.g. <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Cassiopeia" data-ability="Petrifying Gaze" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cassiopeia/LoL#Petrifying_Gaze" title="Petrifying Gaze"><img alt="Petrifying Gaze" src="/wiki/images/Cassiopeia_Petrifying_Gaze.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cassiopeia/LoL#Petrifying_Gaze" title="Cassiopeia/LoL">Petrifying Gaze</a></span></span>, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tryndamere" data-ability="Mocking Shout" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tryndamere/LoL#Mocking_Shout" title="Mocking Shout"><img alt="Mocking Shout" src="/wiki/images/Tryndamere_Mocking_Shout.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tryndamere/LoL#Mocking_Shout" title="Tryndamere/LoL">Mocking Shout</a></span></span></i>) <b>Skarner</b> is considered to be facing in the direction he is moving and not the one his model is facing.</li>\n<li><i>Impale</i> applies a small displacement to the target every 0.<small>25</small> seconds whenever they are not close to <b>Skarner</b>. These displacements do <b>not</b> apply <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">airborne</a></span> and are not <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="For instance, Mordekaiser R and Sett R do not force-move their target in the classic sense, but pretend to be displacements for interactions like these.">flagged as displacements</span>, meaning that targets who are not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">immune</a></span> to the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Suppression"><a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control#Suppression"><img alt="Suppression icon.png" src="/wiki/images/Suppression_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Suppression" title="Types of Crowd Control">suppression</a></span> are also never immune to the displacement either. As a consequence, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span> <u>fails</u> to ignore this movement. <i>See the table below.</i></li></ul>\n<table class="article-table" style="width:500px">\n<tbody><tr>\n<th>Special interactions\n</th></tr>\n<tr>\n<td>\n<p>The following <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> are interrupted and do not apply their \'on dash completion\' effects (if they have one) when successfully impaled:\n</p>\n<ul><li><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Corki" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Corki/LoL" title="Corki\'s"><img alt="Corki\'s" src="/wiki/images/Corki_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Corki/LoL" title="Corki/LoL">Corki\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Corki" data-ability="The Package" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Corki/LoL#The_Package" title="The Package"><img alt="The Package" src="/wiki/images/Corki_The_Package.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Corki/LoL#The_Package" title="Corki/LoL">The Package</a></span></span></span></li>\n<li><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nocturne" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nocturne/LoL" title="Nocturne\'s"><img alt="Nocturne\'s" src="/wiki/images/Nocturne_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nocturne/LoL" title="Nocturne/LoL">Nocturne\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nocturne" data-ability="Paranoia" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nocturne/LoL#Paranoia" title="Paranoia\'s"><img alt="Paranoia\'s" src="/wiki/images/Nocturne_Paranoia.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nocturne/LoL#Paranoia" title="Nocturne/LoL">Paranoia\'s</a></span></span></span> recast</li>\n<li><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sett" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sett/LoL" title="Sett\'s"><img alt="Sett\'s" src="/wiki/images/Sett_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sett/LoL" title="Sett/LoL">Sett\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Sett" data-ability="The Show Stopper" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Sett/LoL#The_Show_Stopper" title="The Show Stopper"><img alt="The Show Stopper" src="/wiki/images/Sett_The_Show_Stopper.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Sett/LoL#The_Show_Stopper" title="Sett/LoL">The Show Stopper</a></span></span></span>\n<ul><li>This ability <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Attach"><a href="/wiki/Attached" title="Attached"><img alt="You and Me!.png" src="/wiki/images/Yuumi_You_and_Me%21.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attached" title="Attached">attaches</a></span> its target to Sett. Dragging him out will detach that unit from him.</li></ul></li>\n<li><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shyvana" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shyvana/LoL" title="Shyvana\'s"><img alt="Shyvana\'s" src="/wiki/images/Shyvana_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shyvana/LoL" title="Shyvana/LoL">Shyvana\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Shyvana" data-ability="Dragon\'s Descent" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shyvana/LoL#Dragon\'s_Descent" title="Dragon\'s Descent"><img alt="Dragon\'s Descent" src="/wiki/images/Shyvana_Dragon%27s_Descent.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shyvana/LoL#Dragon\'s_Descent" title="Shyvana/LoL">Dragon\'s Descent</a></span></span></span></li>\n<li><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vex" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vex/LoL" title="Vex\'s"><img alt="Vex\'s" src="/wiki/images/Vex_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vex/LoL" title="Vex/LoL">Vex\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vex" data-ability="Shadow Surge 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vex/LoL#Shadow_Surge_2" title="Shadow Surge"><img alt="Shadow Surge" src="/wiki/images/Vex_Shadow_Surge_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vex/LoL#Shadow_Surge_2" title="Vex/LoL">Shadow Surge</a></span></span></span> (recast)</li>\n<li><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yone" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yone/LoL" title="Yone\'s"><img alt="Yone\'s" src="/wiki/images/Yone_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yone/LoL" title="Yone/LoL">Yone\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yone" data-ability="Soul Unbound 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yone/LoL#Soul_Unbound_2" title="Soul Unbound"><img alt="Soul Unbound" src="/wiki/images/Yone_Soul_Unbound_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yone/LoL#Soul_Unbound_2" title="Yone/LoL">Soul Unbound</a></span></span></span> (recast)\n<ul><li>Yone\'s very high dash speed makes it almost impossible to catch him during the dash. <b>Skarner</b> is required to be close enough to <b>Yone</b> and needs to have near-perfect timing with <i>Impale\'s</i> cast in order to successfully cancel the dash. If <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="or before Soul Unbound\'s cast time starts">cast too early</span>, the recast will be deferred to the end of <i>Impale\'s</i> duration, or if cast too late, <i>Impale</i> will be canceled as Yone is already too far away.</li></ul></li></ul>\n</td></tr>\n<tr>\n<td>\n<p>The following <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> are stopped likewise with the ones mentioned above, however, they do apply \'on dash completion\' effects and when their dash is interrupted, the ability\'s effects are centered around their initial stopping point from <i>Impale</i>.\n</p>\n<ul><li><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Hecarim" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hecarim/LoL" title="Hecarim\'s"><img alt="Hecarim\'s" src="/wiki/images/Hecarim_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hecarim/LoL" title="Hecarim/LoL">Hecarim\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Hecarim" data-ability="Onslaught of Shadows" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hecarim/LoL#Onslaught_of_Shadows" title="Onslaught of Shadows"><img alt="Onslaught of Shadows" src="/wiki/images/Hecarim_Onslaught_of_Shadows.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hecarim/LoL#Onslaught_of_Shadows" title="Hecarim/LoL">Onslaught of Shadows</a></span></span></span></li>\n<li><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jarvan IV" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jarvan_IV/LoL" title="Jarvan IV\'s"><img alt="Jarvan IV\'s" src="/wiki/images/Jarvan_IV_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jarvan_IV/LoL" title="Jarvan IV/LoL">Jarvan IV\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jarvan IV" data-ability="Cataclysm" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jarvan_IV/LoL#Cataclysm" title="Cataclysm"><img alt="Cataclysm" src="/wiki/images/Jarvan_IV_Cataclysm.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jarvan_IV/LoL#Cataclysm" title="Jarvan IV/LoL">Cataclysm</a></span></span></span>\n<ul><li>The terrain that would usually be formed on impact is instead delayed until the forced movement of <i>Impale</i> ends. The displacement immunity is not removed.</li></ul></li>\n<li><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Malphite" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Malphite/LoL" title="Malphite\'s"><img alt="Malphite\'s" src="/wiki/images/Malphite_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Malphite/LoL" title="Malphite/LoL">Malphite\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Malphite" data-ability="Unstoppable Force" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Malphite/LoL#Unstoppable_Force" title="Unstoppable Force"><img alt="Unstoppable Force" src="/wiki/images/Malphite_Unstoppable_Force.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Malphite/LoL#Unstoppable_Force" title="Malphite/LoL">Unstoppable Force</a></span></span></span></li></ul>\n</td></tr>\n<tr>\n<td>\n<p>The following abilities do not have any special interactions with <i>Impale</i> other than being displaced during their cast.\n</p>\n<ul><li><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Illaoi" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Illaoi/LoL" title="Illaoi\'s"><img alt="Illaoi\'s" src="/wiki/images/Illaoi_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Illaoi/LoL" title="Illaoi/LoL">Illaoi\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Illaoi" data-ability="Leap of Faith" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Illaoi/LoL#Leap_of_Faith" title="Leap of Faith"><img alt="Leap of Faith" src="/wiki/images/Illaoi_Leap_of_Faith.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Illaoi/LoL#Leap_of_Faith" title="Illaoi/LoL">Leap of Faith</a></span></span></span></li>\n<li><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ornn" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ornn/LoL" title="Ornn\'s"><img alt="Ornn\'s" src="/wiki/images/Ornn_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ornn/LoL" title="Ornn/LoL">Ornn\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ornn" data-ability="Bellows Breath" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ornn/LoL#Bellows_Breath" title="Bellows Breath"><img alt="Bellows Breath" src="/wiki/images/Ornn_Bellows_Breath.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ornn/LoL#Bellows_Breath" title="Ornn/LoL">Bellows Breath</a></span></span></span>\n<ul><li>The cast direction for this ability cannot be changed.</li></ul></li>\n<li><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viego" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viego/LoL" title="Viego\'s"><img alt="Viego\'s" src="/wiki/images/Viego_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viego/LoL" title="Viego/LoL">Viego\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viego" data-ability="Heartbreaker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viego/LoL#Heartbreaker" title="Heartbreaker"><img alt="Heartbreaker" src="/wiki/images/Viego_Heartbreaker.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viego/LoL#Heartbreaker" title="Viego/LoL">Heartbreaker</a></span></span></span></li></ul>\n</td></tr>\n<tr>\n<td>\n<p><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rek\'Sai" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rek%27Sai/LoL" title="Rek\'Sai\'s"><img alt="Rek\'Sai\'s" src="/wiki/images/Rek%27Sai_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rek%27Sai/LoL" title="Rek\'Sai/LoL">Rek\'Sai\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rek\'Sai" data-ability="Void Rush" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rek%27Sai/LoL#Void_Rush" title="Void Rush"><img alt="Void Rush" src="/wiki/images/Rek%27Sai_Void_Rush.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rek%27Sai/LoL#Void_Rush" title="Rek\'Sai/LoL">Void Rush</a></span></span></span> has two different outcomes:\n</p>\n<ul><li><i>Impale</i> is cast before the burrow into the ground:\n<ul><li>Rek\'Sai will not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Vanish"><a href="/wiki/Untargetability#Vanish" title="Untargetability#Vanish"><img alt="Hallucinate.png" src="/wiki/images/Shaco_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetability#Vanish" title="Untargetability">vanish</a></span> while she\'s being dragged and her ultimate goes on a 10-second <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> after a brief delay. The displacement immunity is not removed in this case however, which ends when the ability cancels.</li></ul></li>\n<li><i>Impale</i> is cast after the emergence:\n<ul><li>Rek\'Sai\'s dash is interrupted.</li></ul></li></ul>\n</td></tr>\n<tr>\n<td>\n<p><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vi" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vi/LoL" title="Vi\'s"><img alt="Vi\'s" src="/wiki/images/Vi_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vi/LoL" title="Vi/LoL">Vi\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Vi" data-ability="Cease and Desist" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Vi/LoL#Cease_and_Desist" title="Cease and Desist"><img alt="Cease and Desist" src="/wiki/images/Vi_Cease_and_Desist.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Vi/LoL#Cease_and_Desist" title="Vi/LoL">Cease and Desist</a></span></span></span> behaves differently in contrast to the previously noted examples due to its uniqueness.\n</p>\n<ul><li>The dash is not interrupted and the displacement immunity is not removed. Vi will continue to march towards the target while simultaneously being displaced by <i>Impale</i> and dragged to <b>Skarner</b>. Once <i>Impale</i> ends, she is free of the displacement and will perform the ability as normal.</li>\n<li>Enemies that come into range of her are still affected by entering her path.</li>\n<li>The primary target is dealt the ability\'s final effects if they move into the respective range of Vi, thus performing the ability successfully in spite of <i>Impale</i>.</li></ul>\n</td></tr>\n<tr>\n<td>\n<p><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Camille" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Camille/LoL" title="Camille\'s"><img alt="Camille\'s" src="/wiki/images/Camille_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Camille/LoL" title="Camille/LoL">Camille\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Camille" data-ability="The Hextech Ultimatum" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Camille/LoL#The_Hextech_Ultimatum" title="The Hextech Ultimatum"><img alt="The Hextech Ultimatum" src="/wiki/images/Camille_The_Hextech_Ultimatum.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Camille/LoL#The_Hextech_Ultimatum" title="Camille/LoL">The Hextech Ultimatum</a></span></span></span> is impractical to test, as it renders her <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> instantly the moment it\'s activated, which will always cancel <i>Impale\'s</i> cast, regardless of the timing.\n</p>\n</td></tr>\n<tr>\n<td>\n<p><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kalista" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kalista/LoL" title="Kalista\'s"><img alt="Kalista\'s" src="/wiki/images/Kalista_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kalista/LoL" title="Kalista/LoL">Kalista\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kalista" data-ability="Fate\'s Call" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kalista/LoL#Fate\'s_Call" title="Fate\'s Call"><img alt="Fate\'s Call" src="/wiki/images/Kalista_Fate%27s_Call.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kalista/LoL#Fate\'s_Call" title="Kalista/LoL">Fate\'s Call</a></span></span></span> and <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL" title="Tahm Kench\'s"><img alt="Tahm Kench\'s" src="/wiki/images/Tahm_Kench_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL" title="Tahm Kench/LoL">Tahm Kench\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Tahm Kench" data-ability="Devour" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tahm_Kench/LoL#Devour" title="Devour"><img alt="Devour" src="/wiki/images/Tahm_Kench_Devour.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tahm_Kench/LoL#Devour" title="Tahm Kench/LoL">Devour</a></span></span></span> are not possible to test due to the target being <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Vanish"><a href="/wiki/Untargetability#Vanish" title="Untargetability#Vanish"><img alt="Hallucinate.png" src="/wiki/images/Shaco_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetability#Vanish" title="Untargetability">vanished</a></span>, rendering them unable to be selected for <a href="/wiki/Unit-targeted" class="mw-redirect" title="Unit-targeted">unit-targeted</a> abilities like <i>Impale</i>.\n</p>\n</td></tr></tbody></table>\n<p><br>\n</p>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Cast time\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All the other item-actives are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death, unless protected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">Resurrection</a></span>\n</li></td></tr></tbody></table>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Skarner_Original_Impale_0.ogg   "Feel my sting!"',
  },
} satisfies { [skillName in string]: SkillData };
