import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Corki';

export default {
  'Hextech Munitions': {
    name: 'Hextech Munitions',
    display_name: 'Hextech Munitions',
    champion: 'Corki',
    skill: 'I',
    image: {
      full: 'Corki_RapidReload.png',
      sprite: 'passive0.png',
      group: 'passive',
      x: 48,
      y: 96,
      w: 48,
      h: 48,
    },
    static:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts after the package is used or lost">300</span>',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Corki" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Corki/LoL" title="Corki\'s"><img alt="Corki\'s" src="/wiki/images/Corki_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Corki/LoL" title="Corki/LoL">Corki\'s</a></span></span> basic attacks deal a percentage of their damage as <span style="color: #00B0F0; white-space:normal">magic</span> instead of physical.',
      '<span class="template_sbc"><b>The Package:</b></span> Every once in a while, <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Corki" data-ability="The Package" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Corki/LoL#The_Package" title="The Package"><img alt="The Package" src="/wiki/images/Corki_The_Package.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Corki/LoL#The_Package" title="Corki/LoL">The Package</a></span></span> arrives in <b>Corki\'s</b> base to be picked up, temporarily granting him out-of-combat <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">movement speed</span></span> and upgrading <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Corki" data-ability="Valkyrie" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Corki/LoL#Valkyrie" title="Valkyrie"><img alt="Valkyrie" src="/wiki/images/Corki_Valkyrie.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Corki/LoL#Valkyrie" title="Corki/LoL">Valkyrie</a></span></span> into a one-time <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Corki" data-ability="Special Delivery" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Corki/LoL#Special_Delivery" title="Special Delivery"><img alt="Special Delivery" src="/wiki/images/Corki_Special_Delivery.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Corki/LoL#Special_Delivery" title="Corki/LoL">Special Delivery</a></span></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Hextech Munitions.png',
        description:
          "Innate - Hextech Shrapnel Shells: Corki's basic attacks are modified to deal 80% AD magic damage and 20% AD physical damage.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Hextech Shrapnel Shells:</b></span> <b>Corki\'s</b> <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> are modified to deal <span style="color:orange; white-space:normal">80% AD</span> <span style="color: #00B0F0; white-space:normal">magic damage</span> and <span style="color:orange; white-space:normal">20% AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Innate - Hextech Shrapnel Shells:',
            raw: " Corki's basic attacks are modified to deal 80% AD magic damage and 20% AD physical damage.",
            damagetype: 'Physical',
            values: 8,
            valuesIsPercent: true,
            units: 'total_ad',
            unitsText:
              'AD magic damage and 20basic attacks are modified to deal 80',
            pre: "Corki's basic attacks are modified to deal 80% AD magic damage and 20% AD physical damage.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/The Package.png',
        description:
          'Innate - The Package: After 10:00,  The Package is delivered to both corners of the allied fountain, which can be selected by Corki to pick up after  channeling for 1 second. Upon completion of the channel, Corki gains one cast of  Special Delivery for 60 seconds, replacing  Valkyrie for the duration. While holding the  The Package, Corki gains  40% bonus movement speed out of combat and  ghosting.',
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - The Package:</b></span> After <span class="template_sbc"><b>10:00</b></span>, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Corki" data-ability="The Package" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Corki/LoL#The_Package" title="The Package"><img alt="The Package" src="/wiki/images/Corki_The_Package.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Corki/LoL#The_Package" title="Corki/LoL">The Package</a></span></span></i> is delivered to both corners of the allied <a href="/wiki/Spawn" title="Spawn">fountain</a>, which can be selected by <b>Corki</b> to pick up after <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span> for 1 second. Upon completion of the channel, <b>Corki</b> gains one cast of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Corki" data-ability="Special Delivery" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Corki/LoL#Special_Delivery" title="Special Delivery"><img alt="Special Delivery" src="/wiki/images/Corki_Special_Delivery.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Corki/LoL#Special_Delivery" title="Corki/LoL">Special Delivery</a></span></span> for 60 seconds, replacing <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Corki" data-ability="Valkyrie" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Corki/LoL#Valkyrie" title="Valkyrie"><img alt="Valkyrie" src="/wiki/images/Corki_Valkyrie.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Corki/LoL#Valkyrie" title="Corki/LoL">Valkyrie</a></span></span> for the duration. While holding the <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Corki" data-ability="The Package" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Corki/LoL#The_Package" title="The Package"><img alt="The Package" src="/wiki/images/Corki_The_Package.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Corki/LoL#The_Package" title="Corki/LoL">The Package</a></span></span></i>, <b>Corki</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">40% <b>bonus</b> movement speed</span></span> <a href="/wiki/Out_of_combat" class="mw-redirect" title="Out of combat">out of combat</a> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghost"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosting</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Innate - The Package:',
            raw: ' After 10:00,  The Package is delivered to both corners of the allied fountain, which can be selected by Corki to pick up after  channeling for 1 second',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              '10:00,  The Package is delivered to both corners of the allied fountain, which can be selected by Corki to pick up after  channeling for 1 second',
            pre: 'After 10:00,  The Package is delivered to both corners of the allied fountain, which can be selected by Corki to pick up after  channeling for 1 second',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'Upon completion of the channel, Corki gains one cast of  Special Delivery for 60 seconds, replacing  Valkyrie for the duration',
            values: 6,
            user: 'none',
            units: '',
            unitsText:
              'completion of the channel, Corki gains one cast of  Special Delivery for 60 seconds, replacing  Valkyrie for the duration',
            pre: 'Upon completion of the channel, Corki gains one cast of  Special Delivery for 60 seconds, replacing  Valkyrie for the duration',
          },
          {
            effectType: 'Gain',
            name: 'Line 3:',
            raw: 'While holding the  The Package, Corki gains  40% bonus movement speed out of combat and  ghosting.',
            values: 4,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'bonus movement speed out of combat and  ghosting.holding the  The Package, Corki gains  40',
            pre: 'While holding the  The Package, Corki gains  40% bonus movement speed out of combat and  ghosting.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Corki cannot start the  channel to pick up the package while he is unable to cast abilities.',
        descriptionHTML:
          '<i><b>Corki</b> cannot start the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channel</a></span> to pick up the package while he is unable to cast abilities.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Self',
    damagetype:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Physical damage"><a href="/wiki/Physical_damage" title="Physical damage"><img alt="Attack damage.png" src="/wiki/images/Attack_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Physical_damage" title="Physical damage">Physical</a></span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Magic damage"><a href="/wiki/Magic_damage" title="Magic damage"><img alt="Magic damage.png" src="/wiki/images/Magic_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Magic_damage" title="Magic damage">Magic</a></span>',
    spelleffects: 'basic',
    notes:
      '* The mixed damage is dealt in two simultaneous instances of damage, but will pretend to be a single instance for most effects (such as <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Conqueror" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Conqueror" title="Conqueror\'s"><img alt="Conqueror\'s" src="/wiki/images/Conqueror_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Conqueror" title="Conqueror">Conqueror\'s</a></span></span> stacks).\n<ul><li><ul><li>The <span style="color: #00B0F0; white-space:normal">magic damage</span> is dealt in an instance before the <span style="color: #FF8C34; white-space:normal">physical damage</span>.</li>\n<li>Both instances deal <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic damage"><a href="/wiki/Damage" title="Damage"><img alt="Basic Attack.png" src="/wiki/images/Basic_Attack.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">basic damage</a></span> and thus natively apply <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;life steal</span>.</li>\n<li>The attack applies <a href="/wiki/On-hit" class="mw-redirect" title="On-hit">on-hit</a> effects only once, right at the start.</li>\n<li>Even if the target dies from the <span style="color: #00B0F0; white-space:normal">magic damage</span>, the <span style="color: #FF8C34; white-space:normal">physical damage</span> will still be applied to it.\n<ul><li>If the target dies from <a href="/wiki/On-hit" class="mw-redirect" title="On-hit">on-hit</a> damage, the magic damage portion will be skipped and only the physical damage applied.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul></li>\n<li><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a> damage is special cased to be converted to <span style="color: #00B0F0; white-space:normal">magic damage</span>.</li>\n<li>The damage from <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Runaan\'s Hurricane" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane\'s"><img alt="Runaan\'s Hurricane\'s" src="/wiki/images/Runaan%27s_Hurricane_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Runaan%27s_Hurricane" title="Runaan\'s Hurricane">Runaan\'s Hurricane\'s</a></span></span> <a href="/wiki/Named_item_effect#Wind\'s_Fury" title="Named item effect">Wind\'s Fury</a> is affected by <i>Hextech Munitions\' </i>modifier.</li></ul></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">Critical strikes</a></span> amplify the damage as usual, multiplying both instances of damage.</li></ul>\n<p><br>\n</p>\n<ul><li>All players are alerted by <b>Corki</b> emitting a global siren upon picking up <i>The Package</i>.</li>\n<li><b>Corki</b> can pick up the package even if he does not have a <a href="/wiki/Experience_(champion)" title="Experience (champion)">skill point</a> in <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Corki" data-ability="Valkyrie" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Corki/LoL#Valkyrie" title="Valkyrie"><img alt="Valkyrie" src="/wiki/images/Corki_Valkyrie.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Corki/LoL#Valkyrie" title="Corki/LoL">Valkyrie</a></span></span>.</li>\n<li>The following table refers for interactions while <b>Corki</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Interrupts\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Hextech Rocketbelt" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt"><img alt="Hextech Rocketbelt" src="/wiki/images/Hextech_Rocketbelt_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Rocketbelt" title="Hextech Rocketbelt">Hextech Rocketbelt</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>All item-actives not specified above interrupt\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Corki_Original_P_0.ogg   "Ready to fly!" https://leagueoflegends.fandom.com/wiki/File:Corki_Original_Passive_SFX_0.ogg   Package acquired alert.',
    video: 'Corki IVideo.ogv',
  },
  'Phosphorus Bomb': {
    name: 'Phosphorus Bomb',
    display_name: 'Phosphorus Bomb',
    champion: 'Corki',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'PhosphorusBomb.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 0,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '825',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 275',
    speed: '1000',
    cast_time: '0.<small>25</small>',
    cost: '60 / 70 / 80 / 90 / 100',
    costtype: 'mana',
    cooldown: '8',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Corki" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Corki/LoL" title="Corki"><img alt="Corki" src="/wiki/images/Corki_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Corki/LoL" title="Corki/LoL">Corki</a></span></span> fires a flash bomb at the target location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> hit.',
    ],
    description: [
      {
        icon: '/wiki/images/Phosphorus Bomb.png',
        description:
          'Active: Corki launches a bomb at the target location that explodes upon impact, dealing magic damage to enemies hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Corki</b> launches a bomb at the target location that explodes upon impact, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '75 / 120 / 165 / 210 / 255 (+ 70% bonus AD) (+ 50% AP)',
            valuesHTML:
              '75 / 120 / 165 / 210 / 255 <span style="color:orange; white-space:normal">(+&nbsp;70% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '75 / 120 / 165 / 210 / 255 (+ 70% bonus AD) (+ 50% AP)',
            damagetype: 'Magic',
            values: [75, 120, 165, 210, 255],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '75 / 120 / 165 / 210 / 255',
            children: [
              {
                values: 70,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 70% bonus AD',
              },
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
          'The bomb also grants  sight of the area for 6 seconds and  reveals enemy  champions hit for the same duration.',
        descriptionHTML:
          'The bomb also grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area for 6 seconds and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">reveals</a></span> enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> hit for the same duration.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'The bomb also grants  sight of the area for 6 seconds and  reveals enemy  champions hit for the same duration.',
            values: 6,
            user: 'none',
            units: '',
            unitsText:
              'bomb also grants  sight of the area for 6 seconds and  reveals enemy  champions hit for the same duration.',
            pre: 'The bomb also grants  sight of the area for 6 seconds and  reveals enemy  champions hit for the same duration.',
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
    projectile: 'True',
    notes: '* No additional details.',
    video: 'Corki QVideo.ogv',
  },
  Valkyrie: {
    name: 'Valkyrie',
    display_name: 'Valkyrie',
    champion: 'Corki',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'CarpetBomb.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 48,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '600',
    collision_radius: '100',
    effect_radius: '200',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dash speed">650 + <span style="color: #F5EE99; white-space:normal">100% movement speed</span></span>',
    cast_time: 'none',
    cost: '100',
    costtype: 'mana',
    cooldown: '20 / 19 / 18 / 17 / 16',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Corki" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Corki/LoL" title="Corki"><img alt="Corki" src="/wiki/images/Corki_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Corki/LoL" title="Corki/LoL">Corki</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">flies</a></span> a short distance to the target location, dropping bombs that create a trail of fire that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> continually to enemies within.',
    ],
    description: [
      {
        icon: '/wiki/images/Valkyrie.png',
        description:
          'Active: Corki  dashes to the target location and drops bombs that leave up to 3 blazing patches along his path, depending on the distance traveled. Each patch lasts 2.5 seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Corki</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the target location and drops bombs that leave up to 3 blazing patches along his path, depending on the distance traveled. Each patch lasts 2.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: ' Corki  dashes to the target location and drops bombs that leave up to 3 blazing patches along his path, depending on the distance traveled',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'dashes to the target location and drops bombs that leave up to 3 blazing patches along his path, depending on the distance traveled',
            pre: 'Corki  dashes to the target location and drops bombs that leave up to 3 blazing patches along his path, depending on the distance traveled',
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'Each patch lasts 2.5 seconds.',
            values: 2,
            user: 'none',
            units: '',
            unitsText: 'patch lasts 2.5 seconds.',
            pre: 'Each patch lasts 2.5 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Enemies within the patches are dealt magic damage every 0.25 seconds.',
        descriptionHTML:
          'Enemies within the patches are dealt <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>25</small> seconds.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage Per Tick:',
            values: '15 / 22.5 / 30 / 37.5 / 45 (+ 10% AP)',
            valuesHTML:
              '15 / 22.<small>5</small> / 30 / 37.<small>5</small> / 45 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;10% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Tick:',
            raw: '15 / 22.5 / 30 / 37.5 / 45 (+ 10% AP)',
            damagetype: 'Magic',
            values: [15, 22.5, 30, 37.5, 45],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 22.5 / 30 / 37.5 / 45',
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
      },
      {
        description:
          'Gatling Gun can be cast during the dash. Valkyrie will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Corki" data-ability="Gatling Gun" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Corki/LoL#Gatling_Gun" title="Gatling Gun"><img alt="Gatling Gun" src="/wiki/images/Corki_Gatling_Gun.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Corki/LoL#Gatling_Gun" title="Corki/LoL">Gatling Gun</a></span></span> can be cast during the dash. Valkyrie will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'aoedot',
    spellshield: false,
    notes: '* No additional information.',
    video: 'Corki WVideo.ogv',
  },
  'Special Delivery': {
    name: 'Special Delivery',
    display_name: 'Special Delivery',
    champion: 'Corki',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'CarpetBomb.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 48,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '1800',
    collision_radius: '100',
    effect_radius: '200',
    speed: '1500',
    cast_time: 'none',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Corki" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Corki/LoL" title="Corki"><img alt="Corki" src="/wiki/images/Corki_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Corki/LoL" title="Corki/LoL">Corki</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">flies</a></span> a long distance to the target location, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking aside</a></span> enemies and creating a trail of scorched earth.',
      'Enemies passed through by <b>Corki</b> or remain within the trail are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> and take <span style="color: #00B0F0; white-space:normal">magic damage</span> continually.',
    ],
    description: [
      {
        icon: '/wiki/images/Special Delivery.png',
        description:
          'Active: Corki  dashes with  displacement immunity to the target location,  knocking aside all enemies in his path 500 units and leaving behind a trail of fire for 5 seconds, which grants  sight of the area for its duration and for 3 seconds afterwards.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Corki</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span> to the target location, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking aside</a></span> all enemies in his path 500 units and leaving behind a trail of fire for 5 seconds, which grants <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area for its duration and for 3 seconds afterwards.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Corki  dashes with  displacement immunity to the target location,  knocking aside all enemies in his path 500 units and leaving behind a trail of fire for 5 seconds, which grants  sight of the area for its duration and for 3 seconds afterwards.',
            values: 5,
            user: 'none',
            units: '',
            unitsText:
              'dashes with  displacement immunity to the target location,  knocking aside all enemies in his path 500 units and leaving behind a trail of fire for 5 seconds, which grants  sight of the area for its duration and for 3 seconds afterwards.',
            pre: 'Corki  dashes with  displacement immunity to the target location,  knocking aside all enemies in his path 500 units and leaving behind a trail of fire for 5 seconds, which grants  sight of the area for its duration and for 3 seconds afterwards.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Enemies hit by Corki's dash or within the trail are burned and  slowed by 90% for 2 seconds, refreshing every 0.25 seconds while inside the area. The burn deals 7.5 − 25 (based on level) (+ 50% bonus AD) (+ 6% AP) magic damage every 0.25 seconds.",
        descriptionHTML:
          'Enemies hit by <b>Corki\'s</b> dash or within the trail are burned and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 90% for 2 seconds, refreshing every 0.<small>25</small> seconds while inside the area. The burn deals <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#00B0F0;" data-displayformula="static 7.5 until lvl 7; then+1.25 until lvl 15, then+2.5" data-bot_values="7.5;7.5;7.5;7.5;7.5;7.5;7.5;8.75;10;11.25;12.5;13.75;15;16.25;17.5;20;22.5;25" data-top_values="">7.<small>5</small> − 25 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;50% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;6% AP)</span> <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>25</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: "Enemies hit by Corki's dash or within the trail are burned and  slowed by 90% for 2 seconds, refreshing every 0.25 seconds while inside the area",
            values: 9,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              "for 2 seconds, refreshing every 0.25 seconds while inside the areahit by Corki's dash or within the trail are burned and  slowed by 90",
            pre: "Enemies hit by Corki's dash or within the trail are burned and  slowed by 90% for 2 seconds, refreshing every 0.25 seconds while inside the area",
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'The burn deals 7.5 − 25 (based on level) (+ 50% bonus AD) (+ 6% AP) magic damage every 0.25 seconds.',
            damagetype: 'Magic',
            values: [
              7.5, 8.53, 9.56, 10.59, 11.62, 12.65, 13.68, 14.71, 15.74, 16.76,
              17.79, 18.82, 19.85, 20.88, 21.91, 22.94, 23.97, 25,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'magic damage every 0.25 seconds.',
            pre: 'The burn deals 7.5 − 25',
            post: 'magic damage every 0.25 seconds.',
            children: [
              {
                values: 50,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 50% bonus AD',
              },
              {
                values: 6,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 6% AP',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Casting Special Delivery instantly resets  Valkyrie's  cooldown.",
        descriptionHTML:
          'Casting <i>Special Delivery</i> instantly resets <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Corki" data-ability="Valkyrie" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Corki/LoL#Valkyrie" title="Valkyrie\'s"><img alt="Valkyrie\'s" src="/wiki/images/Corki_Valkyrie.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Corki/LoL#Valkyrie" title="Corki/LoL">Valkyrie\'s</a></span></span></i> <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Special Delivery will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i>Special Delivery will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'aoedot',
    spellshield: false,
    notes:
      '* Enemies that stay within the trail for its entire duration are dealt <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#00B0F0;" data-bot_values="210;210;210;210;210;210;210;245;280;315;350;385;420;455;490;560;630;700" data-top_values="">210 − 700 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;1400% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;168% AP)</span> <span style="color: #00B0F0; white-space:normal"><b>total</b> magic damage</span>.',
    video: 'Corki IVideo.ogv',
  },
  'Gatling Gun': {
    name: 'Gatling Gun',
    display_name: 'Gatling Gun',
    champion: 'Corki',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'GGun.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 96,
      y: 96,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cone radius">690</span>',
    angle:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Pending for test">35°</span>',
    cast_time: 'none',
    cost: '50',
    costtype: 'mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">16</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Corki" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Corki/LoL" title="Corki\'s"><img alt="Corki\'s" src="/wiki/images/Corki_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Corki/LoL" title="Corki/LoL">Corki\'s</a></span></span> gatling gun rapidly fires in a cone in front of him, continually dealing equal parts <span style="color: #00B0F0; white-space:normal">magic</span> and <span style="color: #FF8C34; white-space:normal">physical</span> damage to enemies hit and applying stacks of <i>Gattling Gun</i>.',
      '<span class="template_sbc"><b>Gattling Gun:</b></span> For each stack, the target loses <span style="color:yellow; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;armor</span></span> and <span style="color: #00FFFF; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Magic_penetration" title="Magic penetration"><img alt="Magic penetration icon.png" src="/wiki/images/Magic_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;magic resist</span></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Gatling Gun.png',
        description:
          'Active: Corki sprays bullets in a cone toward his facing direction for 4 seconds, dealing equal parts physical and magic damage every 0.25 seconds to all enemies hit as well as reducing their  armor and  magic resistance with each tick, lasting for 2 seconds, refreshing on subsequent ticks, and stacking up to 8 times.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Corki</b> sprays bullets in a cone toward his facing direction for 4 seconds, dealing equal parts <span style="color: #FF8C34; white-space:normal">physical</span> and <span style="color: #00B0F0; white-space:normal">magic</span> damage every 0.<small>25</small> seconds to all enemies hit as well as reducing their <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_penetration" title="Magic penetration"><img alt="Magic penetration icon.png" src="/wiki/images/Magic_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">magic resistance</span></span> with each tick, lasting for 2 seconds, refreshing on subsequent ticks, and <a href="/wiki/Stack" title="Stack">stacking</a> up to 8 times.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Active:',
            raw: ' Corki sprays bullets in a cone toward his facing direction for 4 seconds, dealing equal parts physical and magic damage every 0.25 seconds to all enemies hit as well as reducing their  armor and  magic resistance with each tick, lasting for 2 seconds, refreshing on subsequent ticks, and stacking up to 8 times.',
            min: 0,
            max: 10,
            description:
              ' Corki sprays bullets in a cone toward his facing direction for 4 seconds, dealing equal parts physical and magic damage every 0.25 seconds to all enemies hit as well as reducing their  armor and  magic resistance with each tick, lasting for 2 seconds, refreshing on subsequent ticks, and stacking up to 8 times.',
            values: 4,
            units: 'feastStacks',
            unitsText:
              'sprays bullets in a cone toward his facing direction for 4 seconds, dealing equal parts physical and magic damage every 0.25 seconds to all enemies hit as well as reducing their  armor and  magic resistance with each tick, lasting for 2 seconds, refreshing on subsequent ticks, and stacking up to 8 times.',
            pre: 'Corki sprays bullets in a cone toward his facing direction for 4 seconds, dealing equal parts physical and magic damage every 0.25 seconds to all enemies hit as well as reducing their  armor and  magic resistance with each tick, lasting for 2 seconds, refreshing on subsequent ticks, and stacking up to 8 times.',
          },
        ],
        leveling: [
          {
            name: 'Mixed Damage Per Tick:',
            values: '7.5 / 10.625 / 13.75 / 16.875 / 20 (+ 15% bonus AD)',
            valuesHTML:
              '7.<small>5</small> / 10.<small>625</small> / 13.<small>75</small> / 16.<small>875</small> / 20 <span style="color:orange; white-space:normal">(+&nbsp;15% <b>bonus</b> AD)</span>',
          },
          {
            name: 'Resistance Reduction Per Tick:',
            values: '1 / 1.375 / 1.75 / 2.125 / 2.5',
            valuesHTML:
              '1 / 1.<small>375</small> / 1.<small>75</small> / 2.<small>125</small> / 2.<small>5</small>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Mixed Damage Per Tick:',
            raw: '7.5 / 10.625 / 13.75 / 16.875 / 20 (+ 15% bonus AD)',
            damagetype: 'None',
            values: [7.5, 10.625, 13.75, 16.875, 20],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '7.5 / 10.625 / 13.75 / 16.875 / 20',
            children: [
              {
                values: 15,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 15% bonus AD',
              },
            ],
          },
          {
            effectType: 'Unique',
            name: 'Resistance Reduction Per Tick:',
            raw: '1 / 1.375 / 1.75 / 2.125 / 2.5',
            values: [1, 1.375, 1.75, 2.125, 2.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '1 / 1.375 / 1.75 / 2.125 / 2.5',
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Physical damage"><a href="/wiki/Physical_damage" title="Physical damage"><img alt="Attack damage.png" src="/wiki/images/Attack_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Physical_damage" title="Physical damage"><span style="color: #FF8C34; white-space:normal">Physical damage</span></a></span> / <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Magic damage"><a href="/wiki/Magic_damage" title="Magic damage"><img alt="Magic damage.png" src="/wiki/images/Magic_damage.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Magic_damage" title="Magic damage"><span style="color: #00B0F0; white-space:normal">Magic damage</span></a></span>',
    spelleffects: 'aoedot',
    spellshield: false,
    projectile: 'False',
    notes:
      '* The direction of the gun firing changes depending on where <b>Corki</b> is facing.\n<ul><li><ul><li><b>Corki</b> will turn to face in the direction of the cursor upon casting <i>Gatling Gun</i>.</li></ul></li>\n<li><i>Gatling Gun\'s</i> area of effect can hit closeby enemies next to and behind him, due to hitting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Range" title="Range">enemy boundary edge</a></span>.</li></ul>',
    video: 'Corki EVideo.ogv',
  },
  'Missile Barrage': {
    name: 'Missile Barrage',
    display_name: 'Missile Barrage',
    champion: 'Corki',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'MissileBarrage.png',
      sprite: 'spell2.png',
      group: 'spell',
      x: 144,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '1300 / 1500',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Standard explosion">150</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Big one explosion">300</span>',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Both standard and big missile width">80</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Both standard and big missile speed">2000</span>',
    cast_time: '0.<small>175</small>',
    cost: '20',
    costtype: 'mana + 1 Ammo',
    cooldown: '2',
    recharge: '12 / 11.<small>5</small> / 11 / 10.<small>5</small> / 10',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Corki" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Corki/LoL" title="Corki"><img alt="Corki" src="/wiki/images/Corki_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Corki/LoL" title="Corki/LoL">Corki</a></span></span> fires a missile in the target direction that explodes upon the first enemy hit, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies in an area.',
      '<b>Corki</b> stores missiles over time, and starts with maximum missiles when he respawns.',
      'Every 3rd missile fired is a <i>Big One</i>: which fires farther and deals increased damage in a bigger explosion.',
    ],
    description: [
      {
        icon: '/wiki/images/Missile Barrage.png',
        description:
          'Active: Corki fires a missile in the target direction that explodes upon the first enemy hit, dealing magic damage to enemies within the area.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Corki</b> fires a missile in the target direction that explodes upon the first enemy hit, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies within the area.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values:
              '80 / 97.5 / 115 / 132.5 / 150 (+ 15 / 30 / 45 / 60 / 75% AD) (+ 12% AP)',
            valuesHTML:
              '80 / 97.<small>5</small> / 115 / 132.<small>5</small> / 150 <span style="color:orange; white-space:normal">(+&nbsp;15 / 30 / 45 / 60 / 75% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;12% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 97.5 / 115 / 132.5 / 150 (+ 15 / 30 / 45 / 60 / 75% AD) (+ 12% AP)',
            damagetype: 'Magic',
            values: [80, 97.5, 115, 132.5, 150],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 97.5 / 115 / 132.5 / 150',
            children: [
              {
                values: [15, 30, 45, 60, 75],
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 15 / 30 / 45 / 60 / 75% AD',
              },
              {
                values: 12,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 12% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          'Corki periodically stocks a Missile Barrage charge, up to a maximum of 7. He gains maximum charges upon respawning.',
        descriptionHTML:
          '<b>Corki</b> periodically <a href="/wiki/Stock" class="mw-redirect" title="Stock">stocks</a> a <i>Missile Barrage</i> charge, up to a maximum of 7. He gains maximum charges upon <a href="/wiki/Death" title="Death">respawning</a>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Corki periodically stocks a Missile Barrage charge, up to a maximum of 7',
            values: 7,
            user: 'none',
            units: '',
            unitsText:
              'periodically stocks a Missile Barrage charge, up to a maximum of 7',
            pre: 'Corki periodically stocks a Missile Barrage charge, up to a maximum of 7',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Big One.png',
        description:
          'Every third missile Corki fires is a  Big One, dealing 100% increased damage as well as gaining increased range and explosion radius.',
        descriptionHTML:
          'Every third missile <b>Corki</b> fires is a <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Corki" data-ability="Big One" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Corki/LoL#Big_One" title="Big One"><img alt="Big One" src="/wiki/images/Corki_Big_One.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Corki/LoL#Big_One" title="Corki/LoL">Big One</a></span></span></i>, dealing 100% increased damage as well as gaining increased range and explosion radius.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Every third missile Corki fires is a  Big One, dealing 100% increased damage as well as gaining increased range and explosion radius.',
            increasedStat: 'total_ad',
            values: 1,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'increased damage as well as gaining increased range and explosion radius.third missile Corki fires is a  Big One, dealing 100',
            pre: 'Every third missile Corki fires is a  Big One, dealing 100% increased damage as well as gaining increased range and explosion radius.',
          },
        ],
        leveling: [
          {
            name: 'Big One Magic Damage:',
            values:
              '160 / 195 / 230 / 265 / 300 (+ 30 / 60 / 90 / 120 / 150% AD) (+ 24% AP)',
            valuesHTML:
              '160 / 195 / 230 / 265 / 300 <span style="color:orange; white-space:normal">(+&nbsp;30 / 60 / 90 / 120 / 150% AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;24% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Big One Magic Damage:',
            raw: '160 / 195 / 230 / 265 / 300 (+ 30 / 60 / 90 / 120 / 150% AD) (+ 24% AP)',
            damagetype: 'Magic',
            values: [160, 195, 230, 265, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '160 / 195 / 230 / 265 / 300',
            children: [
              {
                values: [30, 60, 90, 120, 150],
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 30 / 60 / 90 / 120 / 150% AD',
              },
              {
                values: 24,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 24% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'True',
    notes:
      '* Once <b>Corki</b> has learned the ability, he receives a <a href="/wiki/Buff" title="Buff">buff</a> that automatically tracks the number of times he\'s used his ultimate since the last <i>Big One</i>.\n<ul><li><ul><li>Since this information is represented as a buff, this information is available to both allies and enemies.</li></ul></li>\n<li><b>Corki</b> retains progress towards <i>The Big One</i> when he <a href="/wiki/Death" title="Death">dies</a>.</li>\n<li>Once <b>Corki</b> has his ultimate, he has an indicator below his health bar that is only visible to him that shows when a <i>Big One</i> will be fired, how many missiles he has in reserve, and how many more missiles he can <a href="/wiki/Stock" class="mw-redirect" title="Stock">store</a>.</li>\n<li>This ability will cast from wherever the caster is at the start of the cast time.</li>\n<li><i>Missile Barrage\'s</i> effect radius is centered around the location of the missile as it collides.</li></ul>',
    video: 'Corki RVideo.ogv',
  },
} satisfies { [skillName in string]: SkillData };
