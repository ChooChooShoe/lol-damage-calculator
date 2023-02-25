import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Ahri';

export default {
  'Essence Theft': {
    name: 'Essence Theft',
    display_name: 'Essence Theft',
    champion: 'Ahri',
    skill: 'I',
    image: {
      full: 'Ahri_SoulEater2.png',
      sprite: 'passive0.png',
      group: 'passive',
      x: 48,
      y: 0,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ahri" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ahri/LoL" title="Ahri\'s"><img alt="Ahri\'s" src="/wiki/images/Ahri_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ahri/LoL" title="Ahri/LoL">Ahri\'s</a></span></span> generates a stack of <i>Essence Fragment</i> from killing <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>. At max stacks, she consumes them to <span style="color: #60E08F; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;heal</span></span> herself.',
      'Whenever <b>Ahri</b> scores a champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> within a short time of damaging them, she consumes their essence to <span style="color: #60E08F; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;heal</span></span> herself.',
    ],
    description: [
      {
        icon: '/wiki/images/Essence Theft.png',
        description:
          'Innate: Ahri generates a stack of Essence Fragment whenever she kills a  minion or  monster. At 9 stacks, she consumes them to  heal herself for 35 − 95 (based on level) (+ 20% AP).',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Ahri</b> generates a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Essence Fragment</i> whenever she kills a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>. At 9 stacks, she consumes them to <span style="color: #60E08F; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;heal</span></span> herself for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="35;" data-finish="95;" data-bot_values="35;38.53;42.06;45.59;49.12;52.65;56.18;59.71;63.24;66.76;70.29;73.82;77.35;80.88;84.41;87.94;91.47;95" data-top_values="">35 − 95 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;20% AP)</span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: 'At 9 stacks, she consumes them to  heal herself for 35 − 95 (based on level) (+ 20% AP).',
            healType: 'SelfHeal',
            values: [
              35, 38.53, 42.06, 45.59, 49.12, 52.65, 56.18, 59.71, 63.24, 66.76,
              70.29, 73.82, 77.35, 80.88, 84.41, 87.94, 91.47, 95,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: '.',
            pre: 'At 9 stacks, she consumes them to  heal herself for 35 − 95',
            post: '.',
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
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Additionally, whenever Ahri scores a champion  takedown within 3 seconds of damaging them, she consumes their essence to heal herself for 75 − 165 (based on level) (+ 30% AP).',
        descriptionHTML:
          'Additionally, whenever <b>Ahri</b> scores a champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> within 3 seconds of damaging them, she consumes their essence to <span style="color: #60E08F; white-space:normal">heal</span> herself for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="75;" data-finish="165;" data-bot_values="75;80.29;85.59;90.88;96.18;101.47;106.76;112.06;117.35;122.65;127.94;133.24;138.53;143.82;149.12;154.41;159.71;165" data-top_values="">75 − 165 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 1:',
            raw: 'Additionally, whenever Ahri scores a champion  takedown within 3 seconds of damaging them, she consumes their essence to heal herself for 75 − 165 (based on level) (+ 30% AP).',
            healType: 'SelfHeal',
            values: [
              75, 80.29, 85.59, 90.88, 96.18, 101.47, 106.76, 112.06, 117.35,
              122.65, 127.94, 133.24, 138.53, 143.82, 149.12, 154.41, 159.71,
              165,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: '.',
            pre: 'Additionally, whenever Ahri scores a champion  takedown within 3 seconds of damaging them, she consumes their essence to heal herself for 75 − 165',
            post: '.',
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
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes: '* No additional details.',
    video: 'Ahri IVideo.webm',
  },
  'Orb of Deception': {
    name: 'Orb of Deception',
    display_name: 'Orb of Deception',
    champion: 'Ahri',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'AhriQ.png',
      sprite: 'spell0.png',
      group: 'spell',
      x: 0,
      y: 96,
      w: 48,
      h: 48,
    },
    range: '900',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Circle check at return point">100</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 200',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Outgoing missile">1550</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Returning missile, acceleration 1900">60 - 2600</span>',
    cast_time: '0.<small>25</small>',
    cost: '55 / 65 / 75 / 85 / 95',
    costtype: 'mana',
    cooldown: '7',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ahri" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ahri/LoL" title="Ahri"><img alt="Ahri" src="/wiki/images/Ahri_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ahri/LoL" title="Ahri/LoL">Ahri</a></span></span> sends out her orb that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit. At maximum range, the orb homes back to <b>Ahri</b> to deal <span style="color: #F9966B; white-space:normal">true damage</span> to enemies hit.',
    ],
    description: [
      {
        icon: '/wiki/images/Orb of Deception.png',
        description:
          'Active: Ahri sends her orb in the target direction that deals magic damage to enemies hit. At maximum range, the orb homes back to her to deal the same in  true damage to enemies hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Ahri</b> sends her orb in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit. At maximum range, the orb homes back to her to deal the same in <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal">true damage</span></span> to enemies hit.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Damage Per Pass:',
            values: '40 / 65 / 90 / 115 / 140 (+ 45% AP)',
            valuesHTML:
              '40 / 65 / 90 / 115 / 140 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;45% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Damage Per Pass:',
            raw: '40 / 65 / 90 / 115 / 140 (+ 45% AP)',
            damagetype: 'None',
            values: [40, 65, 90, 115, 140],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 65 / 90 / 115 / 140',
            children: [
              {
                values: 45,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 45% AP',
              },
            ],
          },
        ],
      },
      {
        description: 'Enemies can be hit only once per pass.',
        descriptionHTML: '<i>Enemies can be hit only once per pass.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Magic damage"><a href="/wiki/Magic_damage" title="Magic damage"><img alt="Magic damage.png" src="/wiki/images/Magic_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Magic_damage" title="Magic damage">Magic</a></span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True damage"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration.png" src="/wiki/images/Hybrid_penetration.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/True_damage" title="True damage">True</a></span>',
    spelleffects: 'Area of effect',
    spellshield: 'Special',
    projectile: 'True',
    notes:
      '* <i>Orb of Deception</i> will hit additional units around the return point in a small circle when the orb turns around.\n<ul><li><ul><li>This applies both to the initial and return missile\'s damage, but the initial missile only deals damage if the unit was not hit by it already.</li></ul></li>\n<li>Each pass of the projectile can only damage an enemy once.</li>\n<li>If <b>Ahri</b> dies while the orb is out, the orb will visually disappear but continue to deal damage and return to <b>Ahri</b>.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>',
    video: 'Ahri QVideo.webm',
  },
  'Fox-Fire': {
    name: 'Fox-Fire',
    display_name: 'Fox-Fire',
    champion: 'Ahri',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'AhriW.png',
      sprite: 'spell0.png',
      group: 'spell',
      x: 48,
      y: 96,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Orbit radius">150</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Non-prioritized targets, from the missile location">550</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Prioritized targets, from Ahri\'s location">725</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Orbiting angular velocity; 2.65 rad/s">75.92° per second</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Fired missile speed">1400</span>',
    cast_time: 'none',
    cost: '30',
    costtype: 'mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">9 / 8 / 7 / 6 / 5</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ahri" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ahri/LoL" title="Ahri"><img alt="Ahri" src="/wiki/images/Ahri_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ahri/LoL" title="Ahri/LoL">Ahri</a></span></span> gains a burst of <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">move speed</span></span> and conjures three fox-fires that orbit her for a short time. Fox-fires home onto nearby enemies, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Fox-Fire.png',
        description:
          'Active: Ahri gains  40% bonus movement speed that decays over 2 seconds and conjures three flames which orbit her clockwise for up to 2.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Ahri</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">40% <b>bonus</b> movement speed</span></span> that decays over 2 seconds and conjures three flames which orbit her clockwise for up to 2.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Ahri gains  40% bonus movement speed that decays over 2 seconds and conjures three flames which orbit her clockwise for up to 2.5 seconds.',
            values: 4,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'bonus movement speed that decays over 2 seconds and conjures three flames which orbit her clockwise for up to 2.5 seconds.gains  40',
            pre: 'Ahri gains  40% bonus movement speed that decays over 2 seconds and conjures three flames which orbit her clockwise for up to 2.5 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'After 0.25 seconds, each flame targets a  visible enemy, or after 0.4 seconds targets the closest visible enemy in range, dealing magic damage. The damage is doubled against  minions below  20% maximum health.',
        descriptionHTML:
          'After 0.<small>25</small> seconds, each flame targets a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy, or after 0.<small>4</small> seconds targets the closest visible enemy in range, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>. The damage is doubled against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> below <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">20% <b>maximum</b> health</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: 'The damage is doubled against  minions below  20% maximum health.',
            healType: 'BonusHealth',
            values: 2,
            valuesIsPercent: true,
            units: 'maximum_hp',
            unitsText:
              'maximum health.damage is doubled against  minions below  20',
            pre: 'The damage is doubled against  minions below  20% maximum health.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '50 / 75 / 100 / 125 / 150 (+ 30% AP)',
            valuesHTML:
              '50 / 75 / 100 / 125 / 150 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '50 / 75 / 100 / 125 / 150 (+ 30% AP)',
            damagetype: 'Magic',
            values: [50, 75, 100, 125, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 75 / 100 / 125 / 150',
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
        ],
      },
      {
        description: 'Subsequent flames on a single target deal 30% damage.',
        descriptionHTML:
          'Subsequent flames on a single target deal 30% damage.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Subsequent flames on a single target deal 30% damage.',
            damagetype: 'None',
            values: 3,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'damage.flames on a single target deal 30',
            pre: 'Subsequent flames on a single target deal 30% damage.',
          },
        ],
        leveling: [
          {
            name: 'Additional Magic Damage:',
            values: '15 / 22.5 / 30 / 37.5 / 45 (+ 9% AP)',
            valuesHTML:
              '15 / 22.<small>5</small> / 30 / 37.<small>5</small> / 45 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;9% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Additional Magic Damage:',
            raw: '15 / 22.5 / 30 / 37.5 / 45 (+ 9% AP)',
            damagetype: 'Magic',
            values: [15, 22.5, 30, 37.5, 45],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 22.5 / 30 / 37.5 / 45',
            children: [
              {
                values: 9,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 9% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          "Flames prioritize enemy champions hit by  Charm, then enemy  champions, then minions that would die to Fox-Fire's damage, and then the target of Ahri's last basic attack within 3 seconds.",
        descriptionHTML:
          'Flames prioritize enemy champions hit by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ahri" data-ability="Charm" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ahri/LoL#Charm" title="Charm"><img alt="Charm" src="/wiki/images/Ahri_Charm.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ahri/LoL#Charm" title="Ahri/LoL">Charm</a></span></span></i>, then enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, then minions that would die to <i>Fox-Fire\'s</i> damage, and then the target of <b>Ahri\'s</b> last basic attack within 3 seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: "Flames prioritize enemy champions hit by  Charm, then enemy  champions, then minions that would die to Fox-Fire's damage, and then the target of Ahri's last basic attack within 3 seconds.",
            damagetype: 'None',
            values: 3,
            user: 'target',
            units: 'total_ad',
            unitsText:
              "prioritize enemy champions hit by  Charm, then enemy  champions, then minions that would die to Fox-Fire's damage, and then the target of Ahri's last basic attack within 3 seconds.",
            pre: "Flames prioritize enemy champions hit by  Charm, then enemy  champions, then minions that would die to Fox-Fire's damage, and then the target of Ahri's last basic attack within 3 seconds.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Single target',
    spellshield: true,
    projectile: 'True',
    notes:
      '* Each missile of <i>Fox-Fire</i> has its own shorter non-priority range.\n<ul><li>Any unused <i>Fox-Fires</i> will fizzle upon death.</li></ul>',
    video: 'Ahri WVideo.webm',
  },
  Charm: {
    name: 'Charm',
    display_name: 'Charm',
    champion: 'Ahri',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'AhriE.png',
      sprite: 'spell0.png',
      group: 'spell',
      x: 96,
      y: 96,
      w: 48,
      h: 48,
    },
    range: '1000',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 120',
    speed: '1550',
    cast_time: '0.<small>25</small>',
    cost: '60',
    costtype: 'mana',
    cooldown: '14',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ahri" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ahri/LoL" title="Ahri"><img alt="Ahri" src="/wiki/images/Ahri_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ahri/LoL" title="Ahri/LoL">Ahri</a></span></span> blows forth a kiss that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Charms"><a href="/wiki/Charm" title="Charm"><img alt="Charm icon.png" src="/wiki/images/Charm_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Charm" class="mw-redirect" title="Charm">charms</a></span> the first enemy hit, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocking them down</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Charm.png',
        description:
          'Active: Ahri blows forth a kiss in the target direction that deals magic damage to the first enemy hit,  knocking them down and  charming and  slowing them by 65% for a duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Ahri</b> blows forth a kiss in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knocking them down</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Charm"><a href="/wiki/Charm" title="Charm"><img alt="Charm icon.png" src="/wiki/images/Charm_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Charm" class="mw-redirect" title="Charm">charming</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 65% for a duration.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Ahri blows forth a kiss in the target direction that deals magic damage to the first enemy hit,  knocking them down and  charming and  slowing them by 65% for a duration.',
            damagetype: 'Magic',
            values: 6,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'for a duration.blows forth a kiss in the target direction that deals magic damage to the first enemy hit,  knocking them down and  charming and  slowing them by 65',
            pre: 'Ahri blows forth a kiss in the target direction that deals magic damage to the first enemy hit,  knocking them down and  charming and  slowing them by 65% for a duration.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '80 / 110 / 140 / 170 / 200 (+ 60% AP)',
            valuesHTML:
              '80 / 110 / 140 / 170 / 200 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
          {
            name: 'Disable Duration:',
            values: '1.2 / 1.4 / 1.6 / 1.8 / 2',
            valuesHTML:
              '1.<small>2</small> / 1.<small>4</small> / 1.<small>6</small> / 1.<small>8</small> / 2',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 110 / 140 / 170 / 200 (+ 60% AP)',
            damagetype: 'Magic',
            values: [80, 110, 140, 170, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 110 / 140 / 170 / 200',
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
          {
            effectType: 'Unique',
            name: 'Disable Duration:',
            raw: '1.2 / 1.4 / 1.6 / 1.8 / 2',
            values: [1.2, 1.4, 1.6, 1.8, 2],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1.2 / 1.4 / 1.6 / 1.8 / 2',
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spell',
    spellshield: true,
    projectile: 'True',
    notes:
      '* This ability will cast from wherever the caster is at the end of the cast time.',
    video: 'Ahri EVideo.webm',
  },
  'Spirit Rush': {
    name: 'Spirit Rush',
    display_name: 'Spirit Rush',
    champion: 'Ahri',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'AhriR.png',
      sprite: 'spell0.png',
      group: 'spell',
      x: 144,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '500',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Energy bolts target search radius, from Ahri\'s location on dash end/interrupt">600</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dash speed">1200 + <span style="color: #F5EE99; white-space:normal">100% MS</span></span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Energy bolt missile speed">1400</span>',
    cast_time: 'none',
    cost: '100',
    costtype: 'mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts after first cast, and refreshes upon gaining recasts">140 / 127.<small>5</small> / 115 / 102.<small>5</small> / 90</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ahri" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ahri/LoL" title="Ahri"><img alt="Ahri" src="/wiki/images/Ahri_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ahri/LoL" title="Ahri/LoL">Ahri</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> forward and fires essence bolts to nearby enemies, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
      '<b>Ahri</b> can cast this ability up to three times in quick succession. During this time, additional casts are gained whenever a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion\'s</a></span> essence is consumed via <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ahri" data-ability="Essence Theft 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ahri/LoL#Essence_Theft_2" title="Essence Theft"><img alt="Essence Theft" src="/wiki/images/Ahri_Essence_Theft_old2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ahri/LoL#Essence_Theft_2" title="Ahri/LoL">Essence Theft</a></span></span></i>.',
    ],
    description: [
      {
        icon: '/wiki/images/Spirit Rush.png',
        description:
          "Active: Ahri  dashes to the target location and then fires essence bolts to up to 3 nearby  visible enemies, each dealing magic damage. Spirit Rush can be recast twice more within 15 seconds of the activation at no additional cost, with a 1 second static cooldown between casts. Consuming a champion's essence with  Essence Theft while Spirit Rush is active extends the recast duration by and up to 10 seconds, and grants an additional recast, storing up to 3 recasts at a time.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Ahri</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location and then fires essence bolts to up to 3 nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemies, each dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>. <br><br><i>Spirit Rush</i> can be recast twice more within 15 seconds of the activation at no additional cost, with a 1 second <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Unaffected by ability haste">static cooldown</span> between casts. Consuming a champion\'s essence with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ahri" data-ability="Essence Theft" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ahri/LoL#Essence_Theft" title="Essence Theft"><img alt="Essence Theft" src="/wiki/images/Ahri_Essence_Theft.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ahri/LoL#Essence_Theft" title="Ahri/LoL">Essence Theft</a></span></span></i> while <i>Spirit Rush</i> is active extends the recast duration by and up to 10 seconds, and grants an additional recast, storing up to 3 recasts at a time.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Ahri  dashes to the target location and then fires essence bolts to up to 3 nearby  visible enemies, each dealing magic damage',
            damagetype: 'Magic',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'dashes to the target location and then fires essence bolts to up to 3 nearby  visible enemies, each dealing magic damage',
            pre: 'Ahri  dashes to the target location and then fires essence bolts to up to 3 nearby  visible enemies, each dealing magic damage',
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Spirit Rush can be recast twice more within 15 seconds of the activation at no additional cost, with a 1 second static cooldown between casts',
            damagetype: 'None',
            values: 1,
            units: 'total_ad',
            unitsText:
              'Rush can be recast twice more within 15 seconds of the activation at no additional cost, with a 1 second static cooldown between casts',
            pre: 'Spirit Rush can be recast twice more within 15 seconds of the activation at no additional cost, with a 1 second static cooldown between casts',
          },
          {
            effectType: 'Gain',
            name: 'Line 3:',
            raw: "Consuming a champion's essence with  Essence Theft while Spirit Rush is active extends the recast duration by and up to 10 seconds, and grants an additional recast, storing up to 3 recasts at a time.",
            increasedStat: 'total_ad',
            values: 1,
            units: '',
            unitsText:
              "a champion's essence with  Essence Theft while Spirit Rush is active extends the recast duration by and up to 10 seconds, and grants an additional recast, storing up to 3 recasts at a time.",
            pre: "Consuming a champion's essence with  Essence Theft while Spirit Rush is active extends the recast duration by and up to 10 seconds, and grants an additional recast, storing up to 3 recasts at a time.",
          },
        ],
        leveling: [
          {
            name: 'Magic damage:',
            values: '60 / 90 / 120 (+ 35% AP)',
            valuesHTML:
              '60 / 90 / 120 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;35% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic damage:',
            raw: '60 / 90 / 120 (+ 35% AP)',
            damagetype: 'Magic',
            values: [60, 90, 120],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 90 / 120',
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
        description: "Recast: Ahri mimics the first cast's effects.",
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Ahri</b> mimics the first cast\'s effects.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Spirit Rush's recast duration will persist even after having used all recasts.  Fox-Fire can be cast during the dash. Spirit Rush will cast at max range if cast beyond that.",
        descriptionHTML:
          '<i>Spirit Rush\'s recast duration will persist even after having used all recasts. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ahri" data-ability="Fox-Fire" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ahri/LoL#Fox-Fire" title="Fox-Fire"><img alt="Fox-Fire" src="/wiki/images/Ahri_Fox-Fire.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ahri/LoL#Fox-Fire" title="Ahri/LoL">Fox-Fire</a></span></span> can be cast during the dash. Spirit Rush will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'aoe',
    spellshield: true,
    projectile: 'True',
    notes:
      '* Each cast counts as an ability activation for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li><i>Spirit Rush</i> uses <a href="/wiki/Quick_cast" title="Quick cast">quick cast</a> by default.</li>\n<li>There\'s a slight delay before a champion gains vision of the fog of war once inside it. Because of this, if <b>Ahri</b> dashes into it, it is possible that <i>Spirit Rush</i> will not target any enemy in range.</li>\n<li>The bolts do not fire if <b>Ahri</b> dies while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashing</a></span>, unless she was saved by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span>.\n<ul><li>The bolts will fire if the dash is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span> by other means.</li></ul></li></ul>',
    video: 'Ahri RVideo.webm',
  },
} satisfies { [skillName in string]: SkillData };
