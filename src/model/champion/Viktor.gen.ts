import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Viktor';

export default {
  'Glorious Evolution': {
    name: 'Glorious Evolution',
    display_name: 'Glorious Evolution',
    champion: 'Viktor',
    skill: 'I',
    image: {
      full: 'Viktor_Passive.png',
      sprite: 'passive4.png',
      group: 'passive',
      x: 192,
      y: 96,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viktor" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viktor/LoL" title="Viktor"><img alt="Viktor" src="/wiki/images/Viktor_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viktor/LoL" title="Viktor/LoL">Viktor</a></span></span> collects <i>Hex Fragments</i> from enemies he kills and enemy champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedowns</a></span>, he can augment each of his basic abilities at the cost of max <i>Hex Fragments</i>.',
      '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viktor" data-ability="Chaos Storm" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viktor/LoL#Chaos_Storm" title="Chaos Storm"><img alt="Chaos Storm" src="/wiki/images/Viktor_Chaos_Storm.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viktor/LoL#Chaos_Storm" title="Viktor/LoL">Chaos Storm</a></span></span></i> becomes augmented once all augments have been acquired.',
    ],
    description: [
      {
        icon: '/wiki/images/Glorious Evolution.png',
        description:
          'Innate: Viktor can augment each of his basic abilities at the cost of 100 Hex Fragments, which he gains from killing enemies:\n Minions and  monsters generate 1 Hex Fragment.\nSiege minions, super minions, and epic monsters generate 5 Hex Fragments.\nEnemy  champion  takedowns generate 25 Hex Fragments.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Viktor</b> can augment each of his basic <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> at the cost of 100 <i>Hex Fragments</i>, which he gains from killing enemies:\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">Minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> generate 1 <i>Hex Fragment</i>.</li>\n<li>Siege minions, super minions, and epic monsters generate 5 <i>Hex Fragments</i>.</li>\n<li>Enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedowns</a></span> generate 25 <i>Hex Fragments</i>.</li></ul>',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate:',
            raw: ' Viktor can augment each of his basic abilities at the cost of 100 Hex Fragments, which he gains from killing enemies:\n Minions and  monsters generate 1 Hex Fragment.\nSiege minions, super minions, and epic monsters generate 5 Hex Fragments.\nEnemy  champion  takedowns generate 25 Hex Fragments.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'can augment each of his basic abilities at the cost of 100 Hex Fragments, which he gains from killing enemies:',
            pre: 'Viktor can augment each of his basic abilities at the cost of 100 Hex Fragments, which he gains from killing enemies:\n Minions and  monsters generate 1 Hex Fragment.\nSiege minions, super minions, and epic monsters generate 5 Hex Fragments.\nEnemy  champion  takedowns generate 25 Hex Fragments.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Chaos Storm becomes augmented once all of Viktor's basic abilities have been augmented.",
        descriptionHTML:
          '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viktor" data-ability="Chaos Storm" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viktor/LoL#Chaos_Storm" title="Chaos Storm"><img alt="Chaos Storm" src="/wiki/images/Viktor_Chaos_Storm.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viktor/LoL#Chaos_Storm" title="Viktor/LoL">Chaos Storm</a></span></span></i> becomes augmented once all of <b>Viktor\'s</b> basic abilities have been augmented.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes:
      '* Minions shared through <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Relic Shield" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Relic_Shield" title="Relic Shield\'s"><img alt="Relic Shield\'s" src="/wiki/images/Relic_Shield_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Relic_Shield" title="Relic Shield">Relic Shield\'s</a></span></span> <a href="/wiki/Named_item_effect#Spoils_of_War" title="Named item effect">Spoils of War</a> will generate <i>Hex Fragments</i>.\n<ul><li><b>Viktor</b> can only have up to 100 <i>Hex Fragments</i>, and must upgrade an ability before obtaining any more.</li></ul>',
  },
  'Siphon Power': {
    name: 'Siphon Power',
    display_name: 'Siphon Power',
    champion: 'Viktor',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'ViktorPowerTransfer.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 96,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '600',
    speed: '2000',
    cast_time: '0.<small>25</small>',
    cost: '45 / 50 / 55 / 60 / 65',
    costtype: 'mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">9 / 8 / 7 / 6 / 5</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viktor" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viktor/LoL" title="Viktor"><img alt="Viktor" src="/wiki/images/Viktor_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viktor/LoL" title="Viktor/LoL">Viktor</a></span></span> throws a device at the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span>. He also gains <i>Discharge</i> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span> himself for a short time.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viktor" data-ability="Discharge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viktor/LoL#Discharge" title="Discharge"><img alt="Discharge" src="/wiki/images/Viktor_Discharge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viktor/LoL#Discharge" title="Viktor/LoL">Discharge</a></span></span>:</b></span> <b>Viktor\'s</b> next basic attack with a short time will be modified to deal <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viktor" data-ability="Augment: Turbocharge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viktor/LoL#Augment:_Turbocharge" title="Augment: Turbocharge"><img alt="Augment: Turbocharge" src="/wiki/images/Viktor_Augment-_Turbocharge.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viktor/LoL#Augment:_Turbocharge" title="Viktor/LoL">Augment: Turbocharge</a></span></span>:</b></span> After the device hits, <b>Viktor</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for a short time, and the <span style="white-space:nowrap"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;shield</span> is increased.',
    ],
    description: [
      {
        icon: '/wiki/images/Siphon Power.png',
        description:
          'Active: Viktor throws a device at the target enemy that deals magic damage. He also grants himself a  shield for 27 − 105 (based on level) (+ 18% AP) for 2.5 seconds and gains Discharge for 3.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Viktor</b> throws a device at the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span>. He also grants himself a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="27;" data-finish="105;" data-bot_values="27;31.59;36.18;40.76;45.35;49.94;54.53;59.12;63.71;68.29;72.88;77.47;82.06;86.65;91.24;95.82;100.41;105" data-top_values="">27 − 105 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;18% AP)</span> for 2.<small>5</small> seconds and gains <i>Discharge</i> for 3.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Line 2:',
            raw: 'He also grants himself a  shield for 27 − 105 (based on level) (+ 18% AP) for 2.5 seconds and gains Discharge for 3.5 seconds.',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: [
              27, 31.59, 36.18, 40.76, 45.35, 49.94, 54.53, 59.12, 63.71, 68.29,
              72.88, 77.47, 82.06, 86.65, 91.24, 95.82, 100.41, 105,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'for 2.5 seconds and gains Discharge for 3.5 seconds.',
            pre: 'He also grants himself a  shield for 27 − 105',
            post: 'for 2.5 seconds and gains Discharge for 3.5 seconds.',
            children: [
              {
                values: 18,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 18% AP',
              },
            ],
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '60 / 75 / 90 / 105 / 120 (+ 40% AP)',
            valuesHTML:
              '60 / 75 / 90 / 105 / 120 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;40% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '60 / 75 / 90 / 105 / 120 (+ 40% AP)',
            damagetype: 'Magic',
            values: [60, 75, 90, 105, 120],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 75 / 90 / 105 / 120',
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
        ],
      },
      {
        icon: '/wiki/images/Discharge.png',
        description:
          "Discharge: Viktor's next basic attack is empowered to become  non-projectile and deal modified magic damage.",
        descriptionHTML:
          '<span class="template_sbc"><b>Discharge:</b></span> <b>Viktor\'s</b> next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> is empowered to become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">non-projectile</a></span> and deal <span style="color: #00B0F0; white-space:normal"><b>modified</b> magic damage</span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Modified Magic Damage:',
            values: '20 / 45 / 70 / 95 / 120 (+ 100% AD) (+ 60% AP)',
            valuesHTML:
              '20 / 45 / 70 / 95 / 120 <span style="color:orange; white-space:normal">(+&nbsp;100% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;60% AP)</span>',
          },
          {
            name: 'Total Magic Damage:',
            values: '80 / 120 / 160 / 200 / 240 (+ 100% AD) (+ 100% AP)',
            valuesHTML:
              '80 / 120 / 160 / 200 / 240 <span style="color:orange; white-space:normal">(+&nbsp;100% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;100% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Modified Magic Damage:',
            raw: '20 / 45 / 70 / 95 / 120 (+ 100% AD) (+ 60% AP)',
            damagetype: 'Magic',
            values: [20, 45, 70, 95, 120],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 45 / 70 / 95 / 120',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 100% AD',
              },
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
            effectType: 'Damage',
            name: 'Total Magic Damage:',
            raw: '80 / 120 / 160 / 200 / 240 (+ 100% AD) (+ 100% AP)',
            damagetype: 'Magic',
            values: [80, 120, 160, 200, 240],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 120 / 160 / 200 / 240',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 100% AD',
              },
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
        icon: '/wiki/images/Augment- Turbocharge.png',
        description:
          "Augment: Turbocharge: After the device hits, Viktor gains  30% bonus movement speed for 2.5 seconds and the shield's strength is increased by 60%, up to 48 − 184 (based on level) (+ 32% AP).",
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viktor" data-ability="Glorious Evolution" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viktor/LoL#Glorious_Evolution" title="Augment: Turbocharge"><img alt="Augment: Turbocharge" src="/wiki/images/Viktor_Glorious_Evolution.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viktor/LoL#Glorious_Evolution" title="Viktor/LoL">Augment: Turbocharge</a></span></span>:</b></span> After the device hits, <b>Viktor</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">30% <b>bonus</b> movement speed</span></span> for 2.<small>5</small> seconds and the shield\'s strength is increased by 60%, up to <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="48;" data-finish="184;" data-bot_values="48;56;64;72;80;88;96;104;112;120;128;136;144;152;160;168;176;184" data-top_values="">48 − 184 (based on level)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;32% AP)</span>.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Augment:',
            raw: " Turbocharge: After the device hits, Viktor gains  30% bonus movement speed for 2.5 seconds and the shield's strength is increased by 60%, up to 48 − 184 (based on level) (+ 32% AP).",
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: [
              48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144, 152,
              160, 168, 176, 184,
            ],
            valuesIsPercent: true,
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: '.',
            pre: "Turbocharge: After the device hits, Viktor gains  30% bonus movement speed for 2.5 seconds and the shield's strength is increased by 60%, up to 48 − 184",
            post: '.',
            children: [
              {
                values: 32,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 32% AP',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies / Self',
    damagetype: 'Magic',
    spelleffects: 'spell',
    spellshield: true,
    projectile: 'special',
    callforhelp: 'True',
    notes:
      '* All damage dealt by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> on the enhanced attack is converted into <span style="color: #00B0F0; white-space:normal">magic damage</span>.\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> does not prevent <b>Viktor</b> from gaining <i>Discharge</i>.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">Critical strike</a></span> and <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span> only interact with the basic attack damage component.</li>\n<li>Only the initial projectile can be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">intercepted</a></span>.</li>\n<li><i>Discharge\'s</i> empowered attack can be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blocked"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span> (damage is negated and the empowered attack will still be consumed).</li>\n<li>The empowered attack will trigger but not be consumed nor apply its effects against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a> nor <a href="/wiki/Ward" title="Ward">wards</a>.</li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: <i>Discharge\'s</i> interaction with <i>parrying</i> effects (<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodge</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blind</a></span>).</li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).</li></ul>',
  },
  'Gravity Field': {
    name: 'Gravity Field',
    display_name: 'Gravity Field',
    champion: 'Viktor',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'ViktorGravitonField.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 144,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '800',
    cast_time: '0.<small>25</small>',
    cost: '65',
    costtype: 'mana',
    cooldown: '17 / 16 / 15 / 14 / 13',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viktor" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viktor/LoL" title="Viktor"><img alt="Viktor" src="/wiki/images/Viktor_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viktor/LoL" title="Viktor/LoL">Viktor</a></span></span> deploys a gravity field that remains at the target location for a few seconds. After a brief delay, it activates to continually <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> enemies within and inflict stacks of <i>Gravity Field</i>.',
      'The third stack consumes them all to briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knock down</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> the target.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viktor" data-ability="Augment: Magnetize" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viktor/LoL#Augment:_Magnetize" title="Augment: Magnetize"><img alt="Augment: Magnetize" src="/wiki/images/Viktor_Augment-_Magnetize.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viktor/LoL#Augment:_Magnetize" title="Viktor/LoL">Augment: Magnetize</a></span></span>:</b></span> <b>Viktor\'s</b> other basic abilities will also briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> enemies hit.',
    ],
    description: [
      {
        icon: '/wiki/images/Gravity Field.png',
        description:
          'Active: Viktor deploys a gravity field at the target location for 4 seconds. After a 0.75-second delay, it activates to  slow enemies within, persisting for 0.25 seconds after leaving the area or generating 3 stacks.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Viktor</b> deploys a gravity field at the target location for 4 seconds. After a 0.<small>75</small>-second delay, it activates to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> enemies within, persisting for 0.<small>25</small> seconds after leaving the area or generating 3 stacks.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: ' Viktor deploys a gravity field at the target location for 4 seconds',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'deploys a gravity field at the target location for 4 seconds',
            pre: 'Viktor deploys a gravity field at the target location for 4 seconds',
          },
        ],
        leveling: [
          {
            name: 'Slow:',
            values: '30 / 34 / 38 / 42 / 45%',
            valuesHTML: '30 / 34 / 38 / 42 / 45%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '30 / 34 / 38 / 42 / 45%',
            values: [30, 34, 38, 42, 45],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 34 / 38 / 42 / 45%',
          },
        ],
      },
      {
        description:
          "The field applies a stack to enemies within every 0.5 seconds, stacking up to 3 times. The third stack consumes them all to  knock down and  stun the target for 1.5 seconds. The target then becomes immune to Gravity Field's effects, occurring once per cast.",
        descriptionHTML:
          'The field applies a <a href="/wiki/Stack" title="Stack">stack</a> to enemies within every 0.<small>5</small> seconds, stacking up to 3 times. The third stack consumes them all to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Knockdown"><a href="/wiki/Knockdown" title="Knockdown"><img alt="Knockdown icon.png" src="/wiki/images/Knockdown_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Knockdown" class="mw-redirect" title="Knockdown">knock down</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> the target for 1.<small>5</small> seconds. The target then becomes immune to <i>Gravity Field\'s</i> effects, occurring once per cast.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Line 2:',
            raw: 'The third stack consumes them all to  knock down and  stun the target for 1.5 seconds',
            min: 0,
            max: 10,
            description:
              'The third stack consumes them all to  knock down and  stun the target for 1.5 seconds',
            values: 1,
            units: 'feastStacks',
            unitsText:
              'third stack consumes them all to  knock down and  stun the target for 1.5 seconds',
            pre: 'The third stack consumes them all to  knock down and  stun the target for 1.5 seconds',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Augment- Magnetize.png',
        description:
          "Augment: Magnetize: Viktor's other abilities, excluding  Chaos Storm's persistent damage,  slow enemies hit by 20% for 1 second.",
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viktor" data-ability="Glorious Evolution" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viktor/LoL#Glorious_Evolution" title="Augment: Magnetize"><img alt="Augment: Magnetize" src="/wiki/images/Viktor_Glorious_Evolution.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viktor/LoL#Glorious_Evolution" title="Viktor/LoL">Augment: Magnetize</a></span></span>:</b></span> <b>Viktor\'s</b> other abilities, excluding <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viktor" data-ability="Chaos Storm" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viktor/LoL#Chaos_Storm" title="Chaos Storm\'s"><img alt="Chaos Storm\'s" src="/wiki/images/Viktor_Chaos_Storm.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viktor/LoL#Chaos_Storm" title="Viktor/LoL">Chaos Storm\'s</a></span></span></i> persistent damage, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> enemies hit by 20% for 1 second.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Augment:',
            raw: " Magnetize: Viktor's other abilities, excluding  Chaos Storm's persistent damage,  slow enemies hit by 20% for 1 second.",
            damagetype: 'None',
            values: 2,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              "for 1 second.Viktor's other abilities, excluding  Chaos Storm's persistent damage,  slow enemies hit by 20",
            pre: "Magnetize: Viktor's other abilities, excluding  Chaos Storm's persistent damage,  slow enemies hit by 20% for 1 second.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    spellshield: true,
    notes:
      '* <i>Gravity Field</i> will remain active if <b>Viktor</b> dies.\n<ul><li><i>Gravity Field\'s</i> animation can be seen by both teams through <a href="/wiki/Sight" title="Sight">fog of war</a>.</li>\n<li>If an enemy enters the area of effect while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, they may generate stacks even after becoming stunned once, causing them to get stunned up-to 3 times by a single <i>Gravity Field</i>.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul>',
  },
  'Death Ray': {
    name: 'Death Ray',
    display_name: 'Death Ray',
    champion: 'Viktor',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'ViktorDeathRay.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 192,
      y: 144,
      w: 48,
      h: 48,
    },
    range: '500',
    target_range: '550',
    effect_radius: '500',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Missile width (both)">90</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Laser missile speed">1050</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Aftershock missile speed">1500</span>',
    cast_time: 'none',
    cost: '70 / 80 / 90 / 100 / 110',
    costtype: 'mana',
    cooldown: '12 / 11 / 10 / 9 / 8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viktor" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viktor/LoL" title="Viktor"><img alt="Viktor" src="/wiki/images/Viktor_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viktor/LoL" title="Viktor/LoL">Viktor</a></span></span> fires an energy beam along the target path that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viktor" data-ability="Augment: Aftershock" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viktor/LoL#Augment:_Aftershock" title="Augment: Aftershock"><img alt="Augment: Aftershock" src="/wiki/images/Viktor_Augment-_Aftershock.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viktor/LoL#Augment:_Aftershock" title="Viktor/LoL">Augment: Aftershock</a></span></span>:</b></span> The path explodes along the beam\'s wake, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
    ],
    description: [
      {
        icon: '/wiki/images/Death Ray.png',
        description:
          'Active: Viktor fires an energy beam along the target path that deals magic damage to enemies hit and briefly grants  sight of the area.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Viktor</b> fires an energy beam along the target path that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and briefly grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '70 / 110 / 150 / 190 / 230 (+ 50% AP)',
            valuesHTML:
              '70 / 110 / 150 / 190 / 230 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '70 / 110 / 150 / 190 / 230 (+ 50% AP)',
            damagetype: 'Magic',
            values: [70, 110, 150, 190, 230],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 110 / 150 / 190 / 230',
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
        icon: '/wiki/images/Augment- Aftershock.png',
        description:
          "Augment: Aftershock: The path explodes along the beam's wake after 1 second, dealing magic damage to enemies hit.",
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viktor" data-ability="Glorious Evolution" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viktor/LoL#Glorious_Evolution" title="Augment: Aftershock"><img alt="Augment: Aftershock" src="/wiki/images/Viktor_Glorious_Evolution.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viktor/LoL#Glorious_Evolution" title="Viktor/LoL">Augment: Aftershock</a></span></span>:</b></span> The path explodes along the beam\'s wake after 1 second, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Augment:',
            raw: " Aftershock: The path explodes along the beam's wake after 1 second, dealing magic damage to enemies hit.",
            damagetype: 'Magic',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              "The path explodes along the beam's wake after 1 second, dealing magic damage to enemies hit.",
            pre: "Aftershock: The path explodes along the beam's wake after 1 second, dealing magic damage to enemies hit.",
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '20 / 50 / 80 / 110 / 140 (+ 80% AP)',
            valuesHTML:
              '20 / 50 / 80 / 110 / 140 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;80% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '20 / 50 / 80 / 110 / 140 (+ 80% AP)',
            damagetype: 'Magic',
            values: [20, 50, 80, 110, 140],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 50 / 80 / 110 / 140',
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
        ],
      },
    ],
    targeting: 'Vector',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'True',
    notes:
      '* <b>Viktor</b> may freely act while the ray is traveling.\n<ul><li><ul><li>The effected area is set upon casting, no matter how far away <b>Viktor</b> moves. Unlike a leash, <i>Death Ray</i> will not break off its own effect.</li></ul></li>\n<li>The laser grants a moderate area of <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> around where the beam strikes the ground.</li>\n<li>If <i>Death Ray</i> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectile"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">intercepted</a></span>, the initial ray is not destroyed.\n<ul><li>However, the capability to be blocked only applies to the laser as it hits the ground. <b>Viktor</b> can cast the ability <i>over</i> the wall and it will not be destroyed or intercepted.</li>\n<li><i>Augmented Death Ray</i> will still cause the entire target area to explode even if the laser is blocked.</li></ul></li>\n<li>If <b>Viktor</b> dies while he is firing the beam it only deals damage up to the location at the time of his death.</li></ul>',
  },
  'Chaos Storm': {
    name: 'Chaos Storm',
    display_name: 'Chaos Storm',
    champion: 'Viktor',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'ViktorChaosStorm.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 240,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '700',
    effect_radius:
      '350 / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Sight radius">700</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Minimum speed">200</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Maximum speed">300</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Perfect Storm minimum speed">250</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Perfect Storm maximum speed">375</span>',
    cast_time: '0.<small>25</small>',
    cost: '100',
    costtype: 'mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts post-effect">120 / 110 / 100 / 90 / 80</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viktor" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viktor/LoL" title="Viktor"><img alt="Viktor" src="/wiki/images/Viktor_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viktor/LoL" title="Viktor/LoL">Viktor</a></span></span> conjures a singularity at the target location that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Disrupt"><a href="/wiki/Types_of_Crowd_Control#Disrupt" title="Types of Crowd Control#Disrupt"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Disrupt" title="Types of Crowd Control">disrupts</a></span> their channeled abilities. The singularity remains for a few seconds to continually deal <span style="color: #00B0F0; white-space:normal">magic damage</span>, and automatically follows the nearest enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> hit upon cast.',
      '<i>Chaos Storm</i> can be recast any time while the singularity is active.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Viktor</b> directs the singularity to the target location or enemy champion.',
      '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viktor" data-ability="Augment: Perfect Storm" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viktor/LoL#Augment:_Perfect_Storm" title="Augment: Perfect Storm"><img alt="Augment: Perfect Storm" src="/wiki/images/Viktor_Augment-_Perfect_Storm.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viktor/LoL#Augment:_Perfect_Storm" title="Viktor/LoL">Augment: Perfect Storm</a></span></span>:</b></span> The singularity moves faster.',
    ],
    description: [
      {
        icon: '/wiki/images/Chaos Storm.png',
        description:
          'Active: Viktor conjures an arcane singularity at the target location, dealing magic damage to enemies within the area and  disrupting their  channeled abilities.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Viktor</b> conjures an arcane singularity at the target location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within the area and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Disrupt"><a href="/wiki/Types_of_Crowd_Control#Disrupt" title="Types of Crowd Control#Disrupt"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Disrupt" title="Types of Crowd Control">disrupting</a></span> their <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeled abilities</a></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '100 / 137.5 / 175 / 212.5 / 250 (+ 50% AP)',
            valuesHTML:
              '100 / 137.<small>5</small> / 175 / 212.<small>5</small> / 250 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '100 / 137.5 / 175 / 212.5 / 250 (+ 50% AP)',
            damagetype: 'Magic',
            values: [100, 137.5, 175, 212.5, 250],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 137.5 / 175 / 212.5 / 250',
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
        description:
          'The singularity then remains active for 6.5 seconds, dealing magic damage to enemies within it every second and granting  sight of the area. The singularity targets the nearest champion hit by its initial damage and will follow them, moving faster based on its proximity to Viktor.',
        descriptionHTML:
          'The singularity then remains active for 6.<small>5</small> seconds, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within it every second and granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area. The singularity targets the nearest champion hit by its initial damage and will follow them, moving faster based on its proximity to <b>Viktor</b>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'The singularity then remains active for 6.5 seconds, dealing magic damage to enemies within it every second and granting  sight of the area',
            values: 6,
            user: 'none',
            units: '',
            unitsText:
              'singularity then remains active for 6.5 seconds, dealing magic damage to enemies within it every second and granting  sight of the area',
            pre: 'The singularity then remains active for 6.5 seconds, dealing magic damage to enemies within it every second and granting  sight of the area',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage Per Tick:',
            values: '65 / 85 / 105 / 125 / 145 (+ 45% AP)',
            valuesHTML:
              '65 / 85 / 105 / 125 / 145 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;45% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Tick:',
            raw: '65 / 85 / 105 / 125 / 145 (+ 45% AP)',
            damagetype: 'Magic',
            values: [65, 85, 105, 125, 145],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '65 / 85 / 105 / 125 / 145',
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
        description:
          'Chaos Storm can be recast at any time while the singularity is active.',
        descriptionHTML:
          '<i>Chaos Storm</i> can be recast at any time while the singularity is active.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Chaos Storm 2.png',
        description:
          'Recast: Viktor directs the singularity to the target location or enemy champion.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Viktor</b> directs the singularity to the target location or enemy champion.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Augment- Perfect Storm.png',
        description:
          'Augment: Perfect Storm: The singularity moves 25% faster.',
        descriptionHTML:
          '<span class="template_sbc"><b><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viktor" data-ability="Glorious Evolution" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viktor/LoL#Glorious_Evolution" title="Augment: Perfect Storm"><img alt="Augment: Perfect Storm" src="/wiki/images/Viktor_Glorious_Evolution.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viktor/LoL#Glorious_Evolution" title="Viktor/LoL">Augment: Perfect Storm</a></span></span>:</b></span> The singularity moves 25% faster.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Augment:',
            raw: ' Perfect Storm: The singularity moves 25% faster.',
            values: 2,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'faster.Storm: The singularity moves 25',
            pre: 'Perfect Storm: The singularity moves 25% faster.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes:
      '* The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Disrupt"><a href="/wiki/Types_of_Crowd_Control#Disrupt" title="Types of Crowd Control#Disrupt"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Types_of_Crowd_Control#Disrupt" title="Types of Crowd Control">disrupt</a></span> is \'wrapped\' into a status effect that says the target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Silence"><a href="/wiki/Silence" title="Silence"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Silence" class="mw-redirect" title="Silence">Silenced</a></span> for 0.<small>25</small> seconds, but it does not actually <i>silence</i>. It however makes sure that the <i>disrupt</i> is prevented by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">immunity to silences</a></span>.\n<ul><li><b>Viktor</b> can command the singularity regardless of how far away he is from it.</li>\n<li>The singularity will remain active even if <b>Viktor</b> dies. Any commands it was issued prior to his death will not be interrupted.</li>\n<li><i>Chaos Storm</i> reaches its maximum speed at 300 units and minimum speed at 900 units away from <b>Viktor</b>.</li>\n<li>Including the initial damage, <i>Chaos Storm</i> deals 7 instances of damage.</li>\n<li>The storm will follow its target even if they are not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span>, effectively giving away their position.</li>\n<li><i>Chaos Storm</i> can be recast to follow <b>Viktor</b>. However, upon reaching him, the singularity will stop following <b>Viktor</b>.</li>\n<li><i>Chaos Storm</i> is not obstructed by terrain.</li></ul>',
  },
} satisfies { [skillName in string]: SkillData };
