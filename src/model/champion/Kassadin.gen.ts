import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Kassadin';

export default {
  'Void Stone': {
    name: 'Void Stone',
    display_name: 'Void Stone',
    champion: 'Kassadin',
    skill: 'I',
    image: {
      full: 'Kassadin_Passive.png',
      sprite: 'passive1.png',
      group: 'passive',
      x: 240,
      y: 96,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <b>Kassadin</b> is permanently <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and takes reduced <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Magic damage"><a href="/wiki/Magic_damage" title="Magic damage"><img alt="Magic damage.png" src="/wiki/images/Magic_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Magic_damage" title="Magic damage"><span style="color: #00B0F0; white-space:normal">magic damage</span></a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Void_Stone.png',
        description:
          'Innate: Kassadin is permanently  ghosted and takes 10% reduced  magic damage.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Kassadin</b> is permanently <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and takes 10% reduced <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Magic damage"><a href="/wiki/Magic_damage" title="Magic damage"><img alt="Magic damage.png" src="/wiki/images/Magic_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Magic_damage" title="Magic damage"><span style="color: #00B0F0; white-space:normal">magic damage</span></a></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Innate:',
            raw: 'Kassadin is permanently  ghosted and takes 10% reduced  magic damage.',
            damagetype: 'Magic',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'reduced  magic damage.is permanently  ghosted and takes 10',
            pre: 'Kassadin is permanently  ghosted and takes 10% reduced  magic damage.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes: '* No additional details.',
  },
  'Null Sphere': {
    name: 'Null Sphere',
    display_name: 'Null Sphere',
    champion: 'Kassadin',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'NullLance.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 288,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '650',
    speed: '1400',
    cast_time: '0.<small>25</small>',
    cost: '60 / 65 / 70 / 75 / 80',
    costtype: 'Mana',
    cooldown: '10 / 9.<small>5</small> / 9 / 8.<small>5</small> / 8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL" title="Kassadin"><img alt="Kassadin" src="/wiki/images/Kassadin_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL" title="Kassadin/LoL">Kassadin</a></span></span> fires an orb of void energy at the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Disrupt"><a href="/wiki/Types_of_Crowd_Control#Disrupt" title="Types of Crowd Control#Disrupt"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Disrupt" title="Types of Crowd Control">disrupts</a></span> their ongoing <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span>.',
      'He then gains a brief <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> that absorbs <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Null_Sphere.png',
        description:
          'Active: Kassadin fires an orb of void energy at the target enemy that deals magic damage and  disrupts their ongoing  channels.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Kassadin</b> fires an orb of void energy at the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Disrupt"><a href="/wiki/Types_of_Crowd_Control#Disrupt" title="Types of Crowd Control#Disrupt"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Disrupt" title="Types of Crowd Control">disrupts</a></span> their ongoing <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '65 / 95 / 125 / 155 / 185 (+ 70% AP)',
            valuesHTML:
              '65 / 95 / 125 / 155 / 185 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;70% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '65 / 95 / 125 / 155 / 185 (+ 70% AP)',
            damagetype: 'Magic',
            values: [65, 95, 125, 155, 185],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '65 / 95 / 125 / 155 / 185',
            children: [
              {
                values: 70,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 70% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'He also gains a  shield that absorbs magic damage for 1.5 seconds.',
        descriptionHTML:
          'He also gains a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> that absorbs <span style="color: #00B0F0; white-space:normal">magic damage</span> for 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Line 1:',
            raw: 'He also gains a  shield that absorbs magic damage for 1.5 seconds.',
            damagetype: 'Magic',
            shieldType: 'SelfShield',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'also gains a  shield that absorbs magic damage for 1.5 seconds.',
            pre: 'He also gains a  shield that absorbs magic damage for 1.5 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Shield Strength:',
            values: '80 / 110 / 140 / 170 / 200 (+ 30% AP)',
            valuesHTML:
              '80 / 110 / 140 / 170 / 200 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;30% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Shield',
            name: 'Magic Shield Strength:',
            raw: '80 / 110 / 140 / 170 / 200 (+ 30% AP)',
            damagetype: 'Magic',
            shieldType: 'SelfShield',
            values: [80, 110, 140, 170, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 110 / 140 / 170 / 200',
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
    ],
    targeting: 'Unit',
    affects: 'Enemies, Self',
    damagetype: 'Magic',
    spelleffects: 'spell',
    spellshield: true,
    projectile: 'True',
    notes:
      '* The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Disrupt"><a href="/wiki/Types_of_Crowd_Control#Disrupt" title="Types of Crowd Control#Disrupt"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Disrupt" title="Types of Crowd Control">disrupt</a></span> is \'wrapped\' into a status effect that says the target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">Silenced</a></span> for 0.<small>25</small> seconds, but it does not actually <i>silence</i>. It however makes sure that the <i>disrupt</i> is prevented by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">immunity to silences</a></span>.\n<ul><li>The shield is granted at the start of the cast time.</li></ul>',
  },
  'Nether Blade': {
    name: 'Nether Blade',
    display_name: 'Nether Blade',
    champion: 'Kassadin',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'NetherBlade.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 336,
      y: 144,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '1',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">7</span>',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL" title="Kassadin\'s"><img alt="Kassadin\'s" src="/wiki/images/Kassadin_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL" title="Kassadin/LoL">Kassadin\'s</a></span></span> basic attacks deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Kassadin</b> empowers his blade, causing his next basic attack within a few seconds to gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> range</span>, deal increased <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>, and restore <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana</span></span>, with the restoration amount quintupled against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>.',
    ],
    description: [
      {
        description:
          "Passive: Kassadin's basic attacks deal 20 (+ 10% AP) bonus magic damage  on-hit.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Kassadin\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> deal <span style="color: #00B0F0; white-space:normal">20</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;10% AP)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Passive:',
            raw: "Kassadin's basic attacks deal 20 (+ 10% AP) bonus magic damage  on-hit.",
            damagetype: 'Magic',
            values: 2,
            user: 'none',
            units: '',
            unitsText: 'bonus magic damage  on-hit.',
            pre: "Kassadin's basic attacks deal 20",
            post: 'bonus magic damage  on-hit.',
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
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Nether_Blade.png',
        description:
          'Active: Kassadin empowers his next basic attack within 5 seconds to have an  uncancellable windup, gain  50 bonus range, deal increased bonus magic damage, and restore  mana, with the restoration amount quintupled against  champions.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Kassadin</b> empowers his next basic attack within 5 seconds to have an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Uncancellable windup"><a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack#Uncancellable Windup"><img alt="Relentless Force 2.png" src="/wiki/images/Vi_Relentless_Force_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Uncancellable_Windup" title="Basic attack">uncancellable windup</a></span>, gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50 <b>bonus</b> range</span>, deal increased <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span>, and restore <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana</span></span>, with the restoration amount quintupled against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Kassadin empowers his next basic attack within 5 seconds to have an  uncancellable windup, gain  50 bonus range, deal increased bonus magic damage, and restore  mana, with the restoration amount quintupled against  champions.',
            increasedStat: 'bonus_ad',
            values: 5,
            units: '',
            unitsText:
              'empowers his next basic attack within 5 seconds to have an  uncancellable windup, gain  50 bonus range, deal increased bonus magic damage, and restore  mana, with the restoration amount quintupled against  champions.',
            pre: 'Kassadin empowers his next basic attack within 5 seconds to have an  uncancellable windup, gain  50 bonus range, deal increased bonus magic damage, and restore  mana, with the restoration amount quintupled against  champions.',
          },
        ],
        leveling: [
          {
            name: 'Increased Bonus Magic Damage:',
            values: '50 / 75 / 100 / 125 / 150 (+ 80% AP)',
            valuesHTML:
              '50 / 75 / 100 / 125 / 150 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;80% AP)</span>',
          },
          {
            name: 'Mana Restored:',
            values: '4 / 4.5 / 5 / 5.5 / 6% of missing mana',
            valuesHTML:
              '<span style="color: #0099CC; white-space:normal">4 / 4.<small>5</small> / 5 / 5.<small>5</small> / 6% of <b>missing</b> mana</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Increased Bonus Magic Damage:',
            raw: '50 / 75 / 100 / 125 / 150 (+ 80% AP)',
            damagetype: 'Magic',
            values: [50, 75, 100, 125, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 75 / 100 / 125 / 150',
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
            name: 'Mana Restored:',
            raw: '4 / 4.5 / 5 / 5.5 / 6% of missing mana',
            values: [4, 4.5, 5, 5.5, 6],
            valuesIsPercent: true,
            units: 'total_mana',
            unitsText: 'of missing mana',
            pre: '4 / 4.5 / 5 / 5.5 / 6% of missing mana',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description: "Nether Blade  resets Kassadin's basic attack timer.",
        descriptionHTML:
          '<i>Nether Blade <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Kassadin\'s</b> basic attack timer.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    damagetype: 'Magic',
    spelleffects: 'special',
    spellshield: 'Special',
    notes:
      '* The passive damage applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Proc damage"><a href="/wiki/Damage" title="Damage"><img alt="Wit\'s End item.png" src="/wiki/images/Wit%27s_End_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">proc damage</a></span> and the active damage applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell damage"><a href="/wiki/Damage" title="Damage"><img alt="Disintegrate.png" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">spell damage</a></span>.\n<ul><li>The enhanced attack will apply other <a href="/wiki/On-hit_effect" class="mw-redirect" title="On-hit effect">on-hit effects</a> and can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> as normal.</li>\n<li><i>Nether Blade</i> will not grant mana if the attack is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span> or if it <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">misses</a></span>, but will do so if the attack is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span>. In all cases the damage is parried.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block the <i>active</i> damage but not the <i>passive</i> one.</li>\n<li>The passive <b>bonus</b> damage applies to structures.</li>\n<li>The empowered attack will trigger but not be consumed nor apply its effects against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.</li></ul>',
  },
  'Force Pulse': {
    name: 'Force Pulse',
    display_name: 'Force Pulse',
    champion: 'Kassadin',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'ForcePulse.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 384,
      y: 144,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 600 / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Detection Radius">1800</span>',
    angle:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 78°',
    cast_time: '0.<small>25</small>',
    cost: '60 / 65 / 70 / 75 / 80',
    costtype: 'Mana',
    cooldown: '21 / 20 / 19 / 18 / 17',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> Ability casts reduce the cooldown of this ability.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Kassadin</b> emits a pulse of void energy in a cone in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them.',
    ],
    description: [
      {
        description:
          "Passive: Each time Kassadin or a nearby  champion casts an ability, Force Pulse's  current cooldown is reduced by 0.75 seconds.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> Each time <b>Kassadin</b> or a nearby <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> casts an <a href="/wiki/Champion_ability" title="Champion ability">ability</a>, <i>Force Pulse\'s</i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldown</span> is reduced by 0.<small>75</small> seconds.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Force_Pulse.png',
        description:
          'Active: Kassadin emits a pulse of void energy in a cone in the target direction that deals magic damage to enemies hit and  slows them for 1 second.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Kassadin</b> emits a pulse of void energy in a cone in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for 1 second.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Kassadin emits a pulse of void energy in a cone in the target direction that deals magic damage to enemies hit and  slows them for 1 second.',
            damagetype: 'Magic',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'emits a pulse of void energy in a cone in the target direction that deals magic damage to enemies hit and  slows them for 1 second.',
            pre: 'Kassadin emits a pulse of void energy in a cone in the target direction that deals magic damage to enemies hit and  slows them for 1 second.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '60 / 90 / 120 / 150 / 180 (+ 85% AP)',
            valuesHTML:
              '60 / 90 / 120 / 150 / 180 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;85% AP)</span>',
          },
          {
            name: 'Slow:',
            values: '50 / 60 / 70 / 80 / 90%',
            valuesHTML: '50 / 60 / 70 / 80 / 90%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 90 / 120 / 150 / 180 (+ 85% AP)',
            damagetype: 'Magic',
            values: [60, 90, 120, 150, 180],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 90 / 120 / 150 / 180',
            children: [
              {
                values: 85,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 85% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '50 / 60 / 70 / 80 / 90%',
            values: [50, 60, 70, 80, 90],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '50 / 60 / 70 / 80 / 90%',
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Area of effect',
    spellshield: true,
    projectile: 'False',
    notes:
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">Untargetable</a></span> champions do not grant stacks upon ability activations.\n<ul><li><a href="/wiki/Toggle" class="mw-redirect" title="Toggle">Toggle abilities</a> and transformation abilities do not count as ability activations and <b>will not</b> reduce <i>Force Pulse\'s</i> cooldown.</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li></ul>',
  },
  Riftwalk: {
    name: 'Riftwalk',
    display_name: 'Riftwalk',
    champion: 'Kassadin',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'RiftWalk.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 432,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '500',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 270',
    cast_time: '0.<small>25</small>',
    cost: '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="Stacks" data-displayformula="40 &nbsp;×&nbsp; 2 ^ Stacks" data-bot_values="40;80;160;320;640" data-top_values="0;1;2;3;4">40 / 80 / 160 / 320 / 640 (based on Stacks)</span>',
    costtype: 'Mana',
    cooldown:
      '5 / 4.<small>25</small> / 3.<small>5</small> / 2.<small>75</small> / 2',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <b>Kassadin</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blinks"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> toward the target location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to all nearby enemies upon arrival. He then gains a stack of <i>Riftwalk</i>, stacking up to a cap.',
      '<span class="template_sbc"><b>Riftwalk:</b></span> For each stack, <i>Riftwalk</i> gains <b>bonus</b> damage and increased <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana cost</span></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Riftwalk.png',
        description:
          'Active: Kassadin  blinks toward the target location, dealing magic damage to all nearby enemies upon arrival. He then gains a stack of Riftwalk for 5 seconds, refreshing on subsequent casts and stacking up to 4 times.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Kassadin</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blinks"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> toward the target location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to all nearby enemies upon arrival. He then gains a stack of <i>Riftwalk</i> for 5 seconds, refreshing on subsequent casts and stacking up to 4 times.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Line 2:',
            raw: 'He then gains a stack of Riftwalk for 5 seconds, refreshing on subsequent casts and stacking up to 4 times.',
            min: 0,
            max: 4,
            description:
              'He then gains a stack of Riftwalk for 5 seconds, refreshing on subsequent casts and stacking up to 4 times.',
            values: 5,
            units: 'genericStacks',
            unitsText:
              'then gains a stack of Riftwalk for 5 seconds, refreshing on subsequent casts and stacking up to 4 times.',
            pre: 'He then gains a stack of Riftwalk for 5 seconds, refreshing on subsequent casts and stacking up to 4 times.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '70 / 80 / 90 / 100 / 110 (+ 40% AP) (+ 2% maximum mana)',
            valuesHTML:
              '70 / 80 / 90 / 100 / 110 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40% AP)</span> <span style="color: #0099CC; white-space:normal">(+&nbsp;2% <b>maximum</b> mana)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 80 / 90 / 100 / 110 (+ 40% AP) (+ 2% maximum mana)',
            damagetype: 'Magic',
            values: [70, 80, 90, 100, 110],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 80 / 90 / 100 / 110',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 40% AP',
              },
              {
                values: 2,
                valuesIsPercent: true,
                units: 'total_mana',
                unitsText: 'maximum mana',
                pre: '+ 2% maximum mana',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Riftwalk: For each stack, Riftwalk deals bonus magic damage at an increased  mana cost.',
        descriptionHTML:
          '<span class="template_sbc"><b>Riftwalk:</b></span> For each stack, <i>Riftwalk</i> deals <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> at an increased <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana cost</span></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Bonus Damage Per Stack:',
            values: '35 / 40 / 45 / 50 / 55 (+ 10% AP) (+ 1% maximum mana)',
            valuesHTML:
              '35 / 40 / 45 / 50 / 55 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;10% AP)</span> <span style="color: #0099CC; white-space:normal">(+&nbsp;1% <b>maximum</b> mana)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Stacks',
            name: 'Bonus Damage Per Stack:',
            raw: '35 / 40 / 45 / 50 / 55 (+ 10% AP) (+ 1% maximum mana)',
            min: 0,
            max: 10,
            description:
              '35 / 40 / 45 / 50 / 55 (+ 10% AP) (+ 1% maximum mana)',
            values: [35, 40, 45, 50, 55],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 40 / 45 / 50 / 55',
            children: [
              {
                values: 10,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 10% AP',
              },
              {
                values: 1,
                valuesIsPercent: true,
                units: 'total_mana',
                unitsText: 'maximum mana',
                pre: '+ 1% maximum mana',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'Riftwalk will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i>Riftwalk will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Area of effect',
    spellshield: true,
    notes:
      '* <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> can be used during the cast time, allowing <b>Kassadin</b> to blink further away.',
  },
} satisfies { [skillName in string]: SkillData };
