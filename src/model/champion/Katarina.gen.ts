import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Katarina';

export default {
  Voracity: {
    name: 'Voracity',
    display_name: 'Voracity',
    champion: 'Katarina',
    skill: 'I',
    image: {
      full: 'Katarina_Passive.png',
      sprite: 'passive1.png',
      group: 'passive',
      x: 288,
      y: 96,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Spin damage radius, around Katarina">340</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> Scoring a champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> within a short time of damaging them <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduces</span> the <b>current</b> cooldowns of <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Katarina" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Katarina/LoL" title="Katarina\'s"><img alt="Katarina\'s" src="/wiki/images/Katarina_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Katarina/LoL" title="Katarina/LoL">Katarina\'s</a></span></span> <a href="/wiki/Champion_ability" title="Champion ability">abilities</a>.',
      '<span class="template_sbc"><b>Innate - Sinister Steel:</b></span> Whenever <b>Katarina</b> retrieves a <span style="color: #AF1AAF; white-space:normal">Dagger</span>, she uses it to slash around herself, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> and applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects, as well as <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reducing</span>  <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Katarina" data-ability="Shunpo" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Katarina/LoL#Shunpo" title="Shunpo\'s"><img alt="Shunpo\'s" src="/wiki/images/Katarina_Shunpo.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Katarina/LoL#Shunpo" title="Katarina/LoL">Shunpo\'s</a></span></span></i> <b>total</b> cooldown.',
      'A <span style="color: #AF1AAF; white-space:normal">Dagger</span> will disappear after being on the ground for a few seconds.',
    ],
    description: [
      {
        icon: '/wiki/images/Voracity.png',
        description:
          "Innate: Scoring a champion  takedown within 3 seconds of damaging them reduces the  current cooldowns of Katarina's abilities by 15 seconds.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> Scoring a champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> within 3 seconds of damaging them reduces the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>current</b> cooldowns</span> of <b>Katarina\'s</b> <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> by 15 seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Innate:',
            raw: "Scoring a champion  takedown within 3 seconds of damaging them reduces the  current cooldowns of Katarina's abilities by 15 seconds.",
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              "a champion  takedown within 3 seconds of damaging them reduces the  current cooldowns of Katarina's abilities by 15 seconds.",
            pre: "Scoring a champion  takedown within 3 seconds of damaging them reduces the  current cooldowns of Katarina's abilities by 15 seconds.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Sinister_Steel.png',
        description:
          "Innate - Sinister Steel: Whenever Katarina retrieves a Dagger, she uses it to slash around herself, dealing 68 − 240 (based on level) (+ 60% bonus AD) (+ 65 / 75 / 85 / 95% (based on level) AP) magic damage to nearby enemies and applying  on-hit effects at 100% effectiveness to enemy  champions hit, as well as reducing  Shunpo's current cooldown by 78 / 84 / 90 / 96% (based on level) of its total cooldown.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Sinister Steel:</b></span> Whenever <b>Katarina</b> retrieves a <span style="color: #AF1AAF; white-space:normal">Dagger</span>, she uses it to slash around herself, dealing <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#00B0F0;" data-bot_values="68;72;77;82;89;96;103;112;121;131;142;154;166;180;194;208;224;240" data-top_values="">68 − 240 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;60% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="65;1" data-finish="95;16" data-bot_values="65;75;85;95" data-top_values="1;6;11;16" data-bot_key="%">65 / 75 / 85 / 95% (based on level)</span> AP)</span> <span style="color: #00B0F0; white-space:normal">magic damage</span> to nearby enemies and applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects at 100% effectiveness to enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> hit, as well as reducing <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Katarina" data-ability="Shunpo" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Katarina/LoL#Shunpo" title="Shunpo\'s"><img alt="Shunpo\'s" src="/wiki/images/Katarina_Shunpo.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Katarina/LoL#Shunpo" title="Katarina/LoL">Shunpo\'s</a></span></span></i> <b>current</b> cooldown by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="78;1" data-finish="96;16" data-bot_values="78;84;90;96" data-top_values="1;6;11;16" data-bot_key="%">78 / 84 / 90 / 96% (based on level)</span> of its <b>total</b> cooldown.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Innate - Sinister Steel:',
            raw: "Whenever Katarina retrieves a Dagger, she uses it to slash around herself, dealing 68 − 240 (based on level) (+ 60% bonus AD) (+ 65 / 75 / 85 / 95% (based on level) AP) magic damage to nearby enemies and applying  on-hit effects at 100% effectiveness to enemy  champions hit, as well as reducing  Shunpo's current cooldown by 78 / 84 / 90 / 96% (based on level) of its total cooldown.",
            damagetype: 'Magic',
            values: [
              68, 78.12, 88.24, 98.35, 108.47, 118.59, 128.71, 138.82, 148.94,
              159.06, 169.18, 179.29, 189.41, 199.53, 209.65, 219.76, 229.88,
              240,
            ],
            basedOn: 'level',
            units: 'total_ap',
            unitsText:
              "magic damage to nearby enemies and applying  on-hit effects at 100% effectiveness to enemy  champions hit, as well as reducing  Shunpo's current cooldown by 78 / 84 / 90 / 96%",
            pre: 'Whenever Katarina retrieves a Dagger, she uses it to slash around herself, dealing 68 − 240',
            post: "magic damage to nearby enemies and applying  on-hit effects at 100% effectiveness to enemy  champions hit, as well as reducing  Shunpo's current cooldown by 78 / 84 / 90 / 96%",
            children: [
              {
                values: 60,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 60% bonus AD',
              },
              {
                values: [],
                valuesIsPercent: true,
                basedOn: 'level',
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 65 / 75 / 85 / 95%',
                post: 'AP',
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
          'Daggers grant  sight of their radius and will disappear after being on the ground for 4 seconds.',
        descriptionHTML:
          '<span style="color: #AF1AAF; white-space:normal">Daggers</span> grant <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of their radius and will disappear after being on the ground for 4 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Daggers grant  sight of their radius and will disappear after being on the ground for 4 seconds.',
            increasedStat: 'total_ap',
            values: 4,
            units: '',
            unitsText:
              'grant  sight of their radius and will disappear after being on the ground for 4 seconds.',
            pre: 'Daggers grant  sight of their radius and will disappear after being on the ground for 4 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies, Self',
    damagetype: 'Magic',
    spelleffects: 'Area of effect',
    spellshield: true,
    notes:
      '* <i>Voracity\'s</i> cooldown reduction will still take effect even after <b>Katarina</b> dies.\n<ul><li>The <span style="color: #AF1AAF; white-space:normal">Dagger\'s</span> area of effect indicator is displayed even before it lands, although <b>Katarina</b> may not slash until it has. This can be targeted by <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Katarina" data-ability="Shunpo" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Katarina/LoL#Shunpo" title="Shunpo"><img alt="Shunpo" src="/wiki/images/Katarina_Shunpo.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Katarina/LoL#Shunpo" title="Katarina/LoL">Shunpo</a></span></span>.</li>\n<li><span style="color: #AF1AAF; white-space:normal">Daggers</span> will still deal damage but not apply on-hit effects if <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodged"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span>. They cannot be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span> nor can they be missed while <b>Katarina</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span>.</li>\n<li>Single-use on-hit effects, such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span>, will apply to the closest target to <b>Katarina</b> when she uses a <span style="color: #AF1AAF; white-space:normal">Dagger</span>.</li></ul>',
  },
  'Bouncing Blade': {
    name: 'Bouncing Blade',
    display_name: 'Bouncing Blade',
    champion: 'Katarina',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'KatarinaQ.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 0,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '625',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Bounce range">450</span>',
    cast_time: '0.<small>25</small>',
    cooldown: '11 / 10 / 9 / 8 / 7',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Katarina" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Katarina/LoL" title="Katarina"><img alt="Katarina" src="/wiki/images/Katarina_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Katarina/LoL" title="Katarina/LoL">Katarina</a></span></span> throws a <span style="color: #AF1AAF; white-space:normal">Dagger</span> at the target enemy that can bounce to up to two additional nearby enemies, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span>.',
      'The <span style="color: #AF1AAF; white-space:normal">Dagger</span> then lands onto the ground near where it struck the first target.',
    ],
    description: [
      {
        icon: '/wiki/images/Bouncing_Blade.png',
        description:
          'Active: Katarina throws a Dagger at the target enemy that deals magic damage and can bounce to up to two additional nearby enemies.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Katarina</b> throws a <span style="color: #AF1AAF; white-space:normal">Dagger</span> at the target enemy that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> and can bounce to up to two additional nearby enemies.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '80 / 110 / 140 / 170 / 200 (+ 35% AP)',
            valuesHTML:
              '80 / 110 / 140 / 170 / 200 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;35% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 110 / 140 / 170 / 200 (+ 35% AP)',
            damagetype: 'Magic',
            values: [80, 110, 140, 170, 200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 110 / 140 / 170 / 200',
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
        icon: '/wiki/images/undefined',
        description:
          'The Dagger then lands onto the ground after 1 second, about 350 units opposite from where it struck the first target.',
        descriptionHTML:
          'The <span style="color: #AF1AAF; white-space:normal">Dagger</span> then lands onto the ground after 1 second, <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="slightly random location">about 350 units</span> opposite from where it struck the first target.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'The Dagger then lands onto the ground after 1 second, about 350 units opposite from where it struck the first target.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'Dagger then lands onto the ground after 1 second, about 350 units opposite from where it struck the first target.',
            pre: 'The Dagger then lands onto the ground after 1 second, about 350 units opposite from where it struck the first target.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'The target does not have to be  visible for the Dagger to bounce to them.',
        descriptionHTML:
          '<i>The target does not have to be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> for the <span style="color: #AF1AAF; white-space:normal">Dagger</span> to bounce to them.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'True',
    callforhelp: 'True',
    notes:
      '* <i>Bouncing Blade</i> will not be destroyed in-flight if the target dies before reaching them but it will on <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clones</a></span> that expire.\n<ul><li>If the <span style="color: #AF1AAF; white-space:normal">Dagger</span>\'s intended landing position is inside terrain it will instead land at the closest spot that isn\'t inside terrain.</li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).</li></ul>',
  },
  Preparation: {
    name: 'Preparation',
    display_name: 'Preparation',
    champion: 'Katarina',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'KatarinaW.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 48,
      y: 0,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cooldown: '15 / 14 / 13 / 12 / 11',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Katarina" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Katarina/LoL" title="Katarina"><img alt="Katarina" src="/wiki/images/Katarina_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Katarina/LoL" title="Katarina/LoL">Katarina</a></span></span> gains a burst of <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">movement speed</span></span>, tossing a <span style="color: #AF1AAF; white-space:normal">Dagger</span> into the air directly above herself.',
    ],
    description: [
      {
        icon: '/wiki/images/Preparation.png',
        description:
          'Active: Katarina tosses a Dagger into the air above her current location and gains  bonus movement speed that decays until it lands after 1.25 seconds, becoming  ghosted for the same duration.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Katarina</b> tosses a <span style="color: #AF1AAF; white-space:normal">Dagger</span> into the air above her current location and gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> that decays until it lands after 1.<small>25</small> seconds, becoming <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> for the same duration.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Katarina tosses a Dagger into the air above her current location and gains  bonus movement speed that decays until it lands after 1.25 seconds, becoming  ghosted for the same duration.',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'tosses a Dagger into the air above her current location and gains  bonus movement speed that decays until it lands after 1.25 seconds, becoming  ghosted for the same duration.',
            pre: 'Katarina tosses a Dagger into the air above her current location and gains  bonus movement speed that decays until it lands after 1.25 seconds, becoming  ghosted for the same duration.',
          },
        ],
        leveling: [
          {
            name: 'Bonus Movement speed:',
            values: '50 / 60 / 70 / 80 / 90%',
            valuesHTML: '50 / 60 / 70 / 80 / 90%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Movement speed:',
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
    targeting: 'Auto',
    affects: 'Self',
    notes: '* No additional details.',
  },
  Shunpo: {
    name: 'Shunpo',
    display_name: 'Shunpo',
    champion: 'Katarina',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'KatarinaEWrapper.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 96,
      y: 0,
      w: 48,
      h: 48,
    },
    target_range: '725 / 775',
    cast_time: 'None',
    cooldown: '14 / 12.<small>5</small> / 11 / 9.<small>5</small> / 8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Katarina" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Katarina/LoL" title="Katarina"><img alt="Katarina" src="/wiki/images/Katarina_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Katarina/LoL" title="Katarina/LoL">Katarina</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blinks"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> to the target location around the target unit or <span style="color: #AF1AAF; white-space:normal">Dagger</span>, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to the nearest enemy and applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects.',
    ],
    description: [
      {
        icon: '/wiki/images/Shunpo.png',
        description:
          'Active: Katarina  blinks to the target location around the target unit or Dagger, dealing magic damage to the nearest enemy in range and applying  on-hit effects at 100% effectiveness.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Katarina</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blinks"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> to the target location around the target unit or <span style="color: #AF1AAF; white-space:normal">Dagger</span>, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to the nearest enemy in range and applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects at 100% effectiveness.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Katarina  blinks to the target location around the target unit or Dagger, dealing magic damage to the nearest enemy in range and applying  on-hit effects at 100% effectiveness.',
            damagetype: 'Magic',
            values: 1,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              'effectiveness. blinks to the target location around the target unit or Dagger, dealing magic damage to the nearest enemy in range and applying  on-hit effects at 100',
            pre: 'Katarina  blinks to the target location around the target unit or Dagger, dealing magic damage to the nearest enemy in range and applying  on-hit effects at 100% effectiveness.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '20 / 35 / 50 / 65 / 80 (+ 40% AD) (+ 25% AP)',
            valuesHTML:
              '20 / 35 / 50 / 65 / 80 <span style="color:orange; white-space:normal">(+&nbsp;40% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;25% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '20 / 35 / 50 / 65 / 80 (+ 40% AD) (+ 25% AP)',
            damagetype: 'Magic',
            values: [20, 35, 50, 65, 80],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 35 / 50 / 65 / 80',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 40% AD',
              },
              {
                values: 25,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 25% AP',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Shunpo  resets Katarina's basic attack timer. Upon blinking, Katarina enters a 0.15-second cast time.",
        descriptionHTML:
          '<i>Shunpo <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Katarina\'s</b> basic attack timer. Upon blinking, <b>Katarina</b> enters a 0.<small>15</small>-second cast time.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting:
      '<a href="/wiki/Location-targeted" class="mw-redirect" title="Location-targeted">Location</a> / <a href="/wiki/Unit-targeted" class="mw-redirect" title="Unit-targeted">Unit</a>',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Single target',
    spellshield: true,
    callforhelp: 'True',
    notes:
      '* <i>Shunpo</i> can be used on any unit except <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Wards"><a href="/wiki/Ward" title="Ward"><img alt="Ward icon.png" src="/wiki/images/Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ward" title="Ward">wards</a></span>.\n<ul><li><i>Shunpo</i> can be cast on <span style="color: #AF1AAF; white-space:normal">Daggers</span> that haven\'t landed yet.</li>\n<li>If <b>Katarina</b> <i>Shunpo\'s</i> on an ally, any attack command she is given during its cast time will be negated, and every movement command will be delayed by 1 second (starting at the start of the cast time).</li>\n<li><i>Shunpo</i> should be an instant ability but it has extra logic to consider which makes it have a short cast time before blinking.</li>\n<li><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> can be used during cast time but it will not cancel the blink.</li>\n<li>If the target is very close to a wall and <b>Katarina</b> targets <i>Shunpo</i> behind the target, she can blink over the wall.</li>\n<li><i>Shunpo</i>  will still deal damage but not apply on-hit effects if <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodged"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span>. It cannot be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span> nor can it be missed while <b>Katarina</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">blinded</a></span>.</li>\n<li><i>Shunpo</i> does not require the enemy to be within targeting range to damage them. It only requires them to be within the max range around a unit that <i>Shunpo</i> allows them to blink to.</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Cast time\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All the other item-actives are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death, unless protected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">Resurrection</a></span>\n</li></td></tr></tbody></table>',
  },
  'Death Lotus': {
    name: 'Death Lotus',
    display_name: 'Death Lotus',
    champion: 'Katarina',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'KatarinaR.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 144,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 550',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dagger missiles travel speed">2400</span>',
    cast_time: 'none',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">90 / 60 / 45</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <b>Katarina</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for a short time, rapidly throwing a flurry of daggers to up to 3 of the closest nearby enemy champions.',
      'Each dagger deals <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span style="color: #00B0F0; white-space:normal">magic damage</span>, applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects, and inflicts <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Grievous wounds"><a href="/wiki/Grievous_Wounds" title="Grievous Wounds"><img alt="Grievous Wounds icon.png" src="/wiki/images/Grievous_Wounds_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Grievous_Wounds" title="Grievous Wounds">Grievous Wounds</a></span> on the target.',
      '<i>A nearby enemy champion is required to cast this ability.</i>',
    ],
    description: [
      {
        icon: '/wiki/images/Death_Lotus.png',
        description:
          'Active: Katarina  channels for up to 2.5 seconds, rapidly throwing a dagger every 0.166 seconds to up to 3 of the closest nearby enemy champions,  revealing herself in the process.Each dagger deals physical damage and magic damage, applies on-attack and  on-hit (without applying  life steal) effects, and inflicts  Grievous Wounds on the target for 3 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Katarina</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for up to 2.<small>5</small> seconds, rapidly throwing a dagger every 0.<small>166</small> seconds to up to 3 of the closest nearby enemy champions, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> herself in the process.<br><br>Each dagger deals <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span style="color: #00B0F0; white-space:normal">magic damage</span>, applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-attack"><a href="/wiki/Attack_effects#On_Attacking" title="Attack effects">on-attack</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> (without applying <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span>) effects, and inflicts <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Grievous wounds"><a href="/wiki/Grievous_Wounds" title="Grievous Wounds"><img alt="Grievous Wounds icon.png" src="/wiki/images/Grievous_Wounds_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Grievous_Wounds" title="Grievous Wounds">Grievous Wounds</a></span> on the target for 3 seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Katarina  channels for up to 2.5 seconds, rapidly throwing a dagger every 0.166 seconds to up to 3 of the closest nearby enemy champions,  revealing herself in the process.Each dagger deals physical damage and magic damage, applies on-attack and  on-hit (without applying  life steal) effects, and inflicts  Grievous Wounds on the target for 3 seconds.',
            damagetype: 'Physical',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'effects, and inflicts  Grievous Wounds on the target for 3 seconds.',
            pre: 'Katarina  channels for up to 2.5 seconds, rapidly throwing a dagger every 0.166 seconds to up to 3 of the closest nearby enemy champions,  revealing herself in the process.Each dagger deals physical damage and magic damage, applies on-attack and  on-hit',
            post: 'effects, and inflicts  Grievous Wounds on the target for 3 seconds.',
            children: [
              {
                values: 0,
                units: 'lifesteal',
                unitsText: 'without applying  life steal',
                pre: 'without applying  life steal',
              },
            ],
          },
        ],
        leveling: [
          {
            name: 'Physical Damage Per Dagger:',
            values: '18% (+ 30% per 100% bonus attack speed) bonus AD',
            valuesHTML:
              '<span style="color:orange; white-space:normal">18% <span style="color:orangered; white-space:normal">(+&nbsp;30% per 100% <b>bonus</b> attack speed)</span> <b>bonus</b> AD</span>',
          },
          {
            name: 'Magic Damage Per Dagger:',
            values: '25 / 31.25 / 37.5 / 43.75 / 50 (+ 19% AP)',
            valuesHTML:
              '25 / 31.<small>25</small> / 37.<small>5</small> / 43.<small>75</small> / 50 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;19% AP)</span>',
          },
          {
            name: 'On-Attack/On-Hit Effectiveness:',
            values: '30 / 32.5 / 35 / 37.5 / 40%',
            valuesHTML:
              '30 / 32.<small>5</small> / 35 / 37.<small>5</small> / 40%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage Per Dagger:',
            raw: '18% (+ 30% per 100% bonus attack speed) bonus AD',
            damagetype: 'Physical',
            values: 18,
            valuesIsPercent: true,
            units: 'bonus_ad',
            unitsText: 'bonus AD',
            pre: '18%',
            post: 'bonus AD',
            children: [
              {
                values: 30,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: 'per 100',
                pre: '+ 30% per 100% bonus attack speed',
              },
            ],
          },
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Dagger:',
            raw: '25 / 31.25 / 37.5 / 43.75 / 50 (+ 19% AP)',
            damagetype: 'Magic',
            values: [25, 31.25, 37.5, 43.75, 50],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 31.25 / 37.5 / 43.75 / 50',
            children: [
              {
                values: 19,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 19% AP',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'On-Attack/On-Hit Effectiveness:',
            raw: '30 / 32.5 / 35 / 37.5 / 40%',
            values: [30, 32.5, 35, 37.5, 40],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 32.5 / 35 / 37.5 / 40%',
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'An enemy champion within  500 units is required to cast this ability. The target does not have to be  visible to be hit by this ability.',
        descriptionHTML:
          '<i>An enemy champion within <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 500 units is required to cast this ability. The target does not have to be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> to be hit by this ability.</i>',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'An enemy champion within  500 units is required to cast this ability',
            values: 5,
            user: 'none',
            units: '',
            unitsText:
              'enemy champion within  500 units is required to cast this ability',
            pre: 'An enemy champion within  500 units is required to cast this ability',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'aoe',
    spellshield: 'Special',
    projectile: 'True',
    notes:
      '* An alternate form of writing the formula for the <b>bonus AD</b> ratio (and which the game data is using internally) is <span style="color:orange; white-space:normal">(18%&nbsp;×&nbsp;(1 <span style="color:orangered; white-space:normal">+&nbsp;166.<small>67</small>% per 100% <b>bonus</b> attack speed</span>) <b>bonus</b> AD)</span>.\n<ul><li><ul><li>At level 6, <b>Katarina</b> has a minimum of 10.<small>82</small>% <b>bonus</b> attack speed.\n<ul><li>The minimum physical damage per dagger is <span style="color:orange; white-space:normal">21.25% <b>bonus</b> AD</span>.</li></ul></li></ul></li>\n<li>In <i>addition</i> to already revealing herself, <b>Katarina</b> will <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">reveal</a></span> her location (450 radius) for 4.<small>5</small> seconds every time she throws a dagger at an enemy while the enemy team does not otherwise have vision of her.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup>\n<ul><li>Because of this, the vision on <b>Katarina\'s</b> location will persist for up-to 4.<small>5</small> seconds after the channel ends.</li></ul></li>\n<li><i>Death Lotus</i> will not end if no enemies remain in range.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will block and be consumed by only one dagger.</li>\n<li>Each dagger counts as a separate hit for effects such as <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Conqueror" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Conqueror_(Rune)" title="Conqueror"><img alt="Conqueror" src="/wiki/images/Conqueror_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Conqueror_(Rune)" class="mw-redirect" title="Conqueror (Rune)">Conqueror</a></span></span>, <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Electrocute" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Electrocute_(Rune)" title="Electrocute"><img alt="Electrocute" src="/wiki/images/Electrocute_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Electrocute_(Rune)" class="mw-redirect" title="Electrocute (Rune)">Electrocute</a></span></span>, and <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Eclipse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Eclipse" title="Eclipse\'s"><img alt="Eclipse\'s" src="/wiki/images/Eclipse_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Eclipse" title="Eclipse">Eclipse\'s</a></span></span> <a href="/wiki/Named_item_effect#Ever_Rising_Moon" title="Named item effect">Ever Rising Moon</a>.</li>\n<li>The following table refers for interactions while <b>Katarina</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled in the first and last 0.<small>25</small> seconds of channel, otherwise, interrupts.\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled in the first and last 0.<small>25</small> seconds of channel, otherwise, interrupts.\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Hextech Rocketbelt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt"><img alt="Hextech Rocketbelt" src="/wiki/images/Hextech_Rocketbelt_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt">Hextech Rocketbelt</a></span></span>  <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Everfrost" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Everfrost" title="Everfrost"><img alt="Everfrost" src="/wiki/images/Everfrost_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Everfrost" title="Everfrost">Everfrost</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Prowler\'s Claw" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Prowler%27s_Claw" title="Prowler\'s Claw"><img alt="Prowler\'s Claw" src="/wiki/images/Prowler%27s_Claw_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Prowler%27s_Claw" title="Prowler\'s Claw">Prowler\'s Claw</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Stridebreaker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Stridebreaker" title="Stridebreaker"><img alt="Stridebreaker" src="/wiki/images/Stridebreaker_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Stridebreaker" title="Stridebreaker">Stridebreaker</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Ironspike Whip" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ironspike_Whip" title="Ironspike Whip"><img alt="Ironspike Whip" src="/wiki/images/Ironspike_Whip_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ironspike_Whip" title="Ironspike Whip">Ironspike Whip</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Goredrinker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Goredrinker" title="Goredrinker"><img alt="Goredrinker" src="/wiki/images/Goredrinker_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Goredrinker" title="Goredrinker">Goredrinker</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>All item-actives not specified above interrupt\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>\n<ul><li>Trying to cast a disabled active (excluding <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Hextech Rocketbelt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt"><img alt="Hextech Rocketbelt" src="/wiki/images/Hextech_Rocketbelt_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt">Hextech Rocketbelt</a></span></span>) will buffer it to cast at the completion of the channel.</li></ul>',
  },
} satisfies { [skillName in string]: SkillData };
