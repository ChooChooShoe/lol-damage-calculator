import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = "Kha'Zix";

export default {
  'Unseen Threat': {
    name: 'Unseen Threat',
    display_name: 'Unseen Threat',
    champion: "Kha'Zix",
    skill: 'I',
    image: {
      full: 'Khazix_P.png',
      sprite: 'passive2.png',
      group: 'passive',
      x: 0,
      y: 0,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kha\'Zix" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kha%27Zix/LoL" title="Kha\'Zix"><img alt="Kha\'Zix" src="/wiki/images/Kha%27Zix_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kha%27Zix/LoL" title="Kha\'Zix/LoL">Kha\'Zix</a></span></span> gains <i>Unseen Threat</i> whenever the enemy loses <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of him causing his next basic attack against an enemy Champion to deal bonus magic damage and slow.',
      '<span class="template_sbc"><b>Unseen Threat:</b></span> <b>Kha\'Zix\'s</b> next basic attack against an enemy champion deals <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for a short time.',
    ],
    description: [
      {
        icon: '/wiki/images/Unseen Threat.png',
        description:
          "Innate: Kha'Zix gains Unseen Threat whenever the enemy loses  sight of him or he activates  Void Assault. Unseen Threat: Kha'Zix empowers his next basic attack against an enemy champion to deal 14 − 116 (based on level) (+ 40% bonus AD) bonus magic damage and  slow them by 25% for 2 seconds.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Kha\'Zix</b> gains <i>Unseen Threat</i> whenever the enemy loses <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of him or he activates <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kha\'Zix" data-ability="Void Assault" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kha%27Zix/LoL#Void_Assault" title="Void Assault"><img alt="Void Assault" src="/wiki/images/Kha%27Zix_Void_Assault.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kha%27Zix/LoL#Void_Assault" title="Kha\'Zix/LoL">Void Assault</a></span></span></i>. <br><br><span class="template_sbc"><b>Unseen Threat:</b></span> <b>Kha\'Zix</b> empowers his next <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> against an enemy champion to deal <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#00B0F0;" data-start="14;" data-finish="116;" data-bot_values="14;20;26;32;38;44;50;56;62;68;74;80;86;92;98;104;110;116" data-top_values="">14 − 116 (based on level)</span> <span style="color:orange; white-space:normal">(+&nbsp;40% <b>bonus</b> AD)</span> <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> them by 25% for 2 seconds.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Unseen Threat:',
            raw: " Kha'Zix empowers his next basic attack against an enemy champion to deal 14 − 116 (based on level) (+ 40% bonus AD) bonus magic damage and  slow them by 25% for 2 seconds.",
            values: [
              14, 20, 26, 32, 38, 44, 50, 56, 62, 68, 74, 80, 86, 92, 98, 104,
              110, 116,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText:
              'bonus magic damage and  slow them by 25% for 2 seconds.',
            pre: "Kha'Zix empowers his next basic attack against an enemy champion to deal 14 − 116",
            post: 'bonus magic damage and  slow them by 25% for 2 seconds.',
            children: [
              {
                values: 40,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 40% bonus AD',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'spell',
    spellshield: false,
    notes:
      '* Any form of vision loss may trigger <i>Unseen Threat</i>, such as <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Senna" data-ability="Curse of the Black Mist" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Senna/LoL#Curse_of_the_Black_Mist" title="Curse of the Black Mist"><img alt="Curse of the Black Mist" src="/wiki/images/Senna_Curse_of_the_Black_Mist.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Senna/LoL#Curse_of_the_Black_Mist" title="Senna/LoL">Curse of the Black Mist</a></span></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Nearsight"><a href="/wiki/Nearsight" title="Nearsight"><img alt="Nearsight icon.png" src="/wiki/images/Nearsight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Nearsight" class="mw-redirect" title="Nearsight">nearsight</a></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Ivern" data-ability="Brushmaker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ivern/LoL#Brushmaker" title="Brushmaker"><img alt="Brushmaker" src="/wiki/images/Ivern_Brushmaker.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ivern/LoL#Brushmaker" title="Ivern/LoL">Brushmaker</a></span></span>.\n<ul><li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kha\'Zix" data-ability="Void Assault" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kha%27Zix/LoL#Void_Assault" title="Void Assault"><img alt="Void Assault" src="/wiki/images/Kha%27Zix_Void_Assault.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kha%27Zix/LoL#Void_Assault" title="Kha\'Zix/LoL">Void Assault</a></span></span> grants <i>Unseen Threat</i> even if <b>Kha\'Zix</b> never becomes unseen (e.g. affected by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">true sight</a></span>).\n<ul><li>Other <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stealth"><a href="/wiki/Stealth" title="Stealth"><img alt="Guerrilla Warfare.png" src="/wiki/images/Teemo_Guerrilla_Warfare.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth" title="Stealth">stealth</a></span> such as <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Senna" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Senna/LoL" title="Senna\'s"><img alt="Senna\'s" src="/wiki/images/Senna_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Senna/LoL" title="Senna/LoL">Senna\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Senna" data-ability="Curse of the Black Mist" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Senna/LoL#Curse_of_the_Black_Mist" title="Curse of the Black Mist"><img alt="Curse of the Black Mist" src="/wiki/images/Senna_Curse_of_the_Black_Mist.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Senna/LoL#Curse_of_the_Black_Mist" title="Senna/LoL">Curse of the Black Mist</a></span></span></span> and <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Duskblade of Draktharr" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Duskblade_of_Draktharr" title="Duskblade of Draktharr"><img alt="Duskblade of Draktharr" src="/wiki/images/Duskblade_of_Draktharr_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Duskblade_of_Draktharr" title="Duskblade of Draktharr">Duskblade of Draktharr</a></span></span> does not do this.</li></ul></li>\n<li>Both the attack\'s damage and bonus spell damage are grouped under the same Spell ID.\n<ul><li>Because of this, a single <i>Unseen Threat</i> attack does <b>not</b> trigger two <span class="inline-image label-after rune-icon" style="display:inline;white-space:pre;" data-param="" data-rune="Electrocute" data-game="lol"><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Electrocute_(Rune)" title="Electrocute"><img alt="Electrocute" src="/wiki/images/Electrocute_rune.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span style="word-break: keep-all;;"><a href="/wiki/Electrocute_(Rune)" class="mw-redirect" title="Electrocute (Rune)">Electrocute</a></span></span> stacks.</li></ul></li></ul>',
    yvideo: "Kha'Zix - Passive",
  },
  'Taste Their Fear': {
    name: 'Taste Their Fear',
    display_name: 'Taste Their Fear',
    champion: "Kha'Zix",
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'KhazixQ.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 288,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '325',
    effect_radius:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Non-isolated radius between enemies / monsters">425</span>',
    cast_time: '0.<small>25</small>',
    cost: '20',
    costtype: 'Mana',
    cooldown: '4',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kha\'Zix" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kha%27Zix/LoL" title="Kha\'Zix"><img alt="Kha\'Zix" src="/wiki/images/Kha%27Zix_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kha%27Zix/LoL" title="Kha\'Zix/LoL">Kha\'Zix</a></span></span> considers any enemy unit to be <span style="color: #AF1AAF; white-space:normal">Isolated</span> if they are not nearby to one of their allies. His abilities have special interactions against <span style="color: #AF1AAF; white-space:normal">Isolated</span> targets.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Kha\'Zix</b> slashes the target enemy, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span>, increased against <span style="color: #AF1AAF; white-space:normal">Isolated</span> targets.',
    ],
    description: [
      {
        icon: '/wiki/images/Unseen Threat 2.png',
        description:
          "Passive: Kha'Zix considers any enemy unit to be Isolated if they are not nearby to one of their allies.  Taste Their Fear,  Evolved Reaper Claws, and  Evolved Spike Racks have special interactions against Isolated targets.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Kha\'Zix</b> considers any enemy unit to be <span style="color: #AF1AAF; white-space:normal">Isolated</span> if they are not nearby to one of their allies. <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kha\'Zix" data-ability="Taste Their Fear" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kha%27Zix/LoL#Taste_Their_Fear" title="Taste Their Fear"><img alt="Taste Their Fear" src="/wiki/images/Kha%27Zix_Taste_Their_Fear.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kha%27Zix/LoL#Taste_Their_Fear" title="Kha\'Zix/LoL">Taste Their Fear</a></span></span></i>, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kha\'Zix" data-ability="Evolved Reaper Claws" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kha%27Zix/LoL#Evolved_Reaper_Claws" title="Evolved Reaper Claws"><img alt="Evolved Reaper Claws" src="/wiki/images/Kha%27Zix_Evolved_Enlarged_Claws.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kha%27Zix/LoL#Evolved_Reaper_Claws" title="Kha\'Zix/LoL">Evolved Reaper Claws</a></span></span></i>, and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kha\'Zix" data-ability="Evolved Spike Racks" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kha%27Zix/LoL#Evolved_Spike_Racks" title="Evolved Spike Racks"><img alt="Evolved Spike Racks" src="/wiki/images/Kha%27Zix_Evolved_Spike_Racks.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kha%27Zix/LoL#Evolved_Spike_Racks" title="Kha\'Zix/LoL">Evolved Spike Racks</a></span></span></i> have special interactions against <span style="color: #AF1AAF; white-space:normal">Isolated</span> targets.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Taste Their Fear.png',
        description:
          "Active: Kha'Zix slashes the target enemy, dealing physical damage, increased by 110% against Isolated targets.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Kha\'Zix</b> slashes the target enemy, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span>, increased by 110% against <span style="color: #AF1AAF; white-space:normal">Isolated</span> targets.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: " Kha'Zix slashes the target enemy, dealing physical damage, increased by 110% against Isolated targets.",
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'against Isolated targets.slashes the target enemy, dealing physical damage, increased by 110',
            pre: "Kha'Zix slashes the target enemy, dealing physical damage, increased by 110% against Isolated targets.",
          },
        ],
        leveling: [
          {
            name: 'Physical damage:',
            values: '60 / 85 / 110 / 135 / 160 (+ 115% bonus AD)',
            valuesHTML:
              '60 / 85 / 110 / 135 / 160 <span style="color:orange; white-space:normal">(+&nbsp;115% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical damage:',
            raw: '60 / 85 / 110 / 135 / 160 (+ 115% bonus AD)',
            damagetype: 'Physical',
            values: [60, 85, 110, 135, 160],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 85 / 110 / 135 / 160',
            children: [
              {
                values: 115,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 115% bonus AD',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Single target',
    spellshield: true,
    callforhelp: 'True',
    notes:
      '* A team\'s allies are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Pet"><a href="/wiki/Pets" title="Pets"><img alt="Summon Tibbers.png" src="/wiki/images/Annie_Summon-_Tibbers.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Pets" title="Pets">pets</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and outer <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span>.\n<ul><li><ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">Monsters</a></span> are considered allies for other monsters.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Wards"><a href="/wiki/Ward" title="Ward"><img alt="Ward icon.png" src="/wiki/images/Ward_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ward" title="Ward">Wards</a></span> do not prevent <i>Isolation</i>.</li></ul></li>\n<li>A number of targetable <a href="/wiki/Champion_summoned_units" title="Champion summoned units">champion summoned units</a> are specifically tagged to not be a valid ally of a potentially <i>Isolated</i> target. These units are:\n<ul><li><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gangplank" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gangplank/LoL" title="Gangplank\'s"><img alt="Gangplank\'s" src="/wiki/images/Gangplank_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gangplank/LoL" title="Gangplank/LoL">Gangplank\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Gangplank" data-ability="Powder Keg" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gangplank/LoL#Powder_Keg" title="Powder Keg"><img alt="Powder Keg" src="/wiki/images/Gangplank_Powder_Keg.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gangplank/LoL#Powder_Keg" title="Gangplank/LoL">Powder Keg</a></span></span></span></li>\n<li><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Illaoi" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Illaoi/LoL" title="Illaoi\'s"><img alt="Illaoi\'s" src="/wiki/images/Illaoi_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Illaoi/LoL" title="Illaoi/LoL">Illaoi\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Illaoi" data-ability="Prophet of an Elder God" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Illaoi/LoL#Prophet_of_an_Elder_God" title="Prophet of an Elder God"><img alt="Prophet of an Elder God" src="/wiki/images/Illaoi_Prophet_of_an_Elder_God.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Illaoi/LoL#Prophet_of_an_Elder_God" title="Illaoi/LoL">Prophet of an Elder God</a></span></span></span></li>\n<li><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jhin" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jhin/LoL" title="Jhin\'s"><img alt="Jhin\'s" src="/wiki/images/Jhin_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jhin/LoL" title="Jhin/LoL">Jhin\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jhin" data-ability="Captive Audience" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jhin/LoL#Captive_Audience" title="Captive Audience"><img alt="Captive Audience" src="/wiki/images/Jhin_Captive_Audience.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jhin/LoL#Captive_Audience" title="Jhin/LoL">Captive Audience</a></span></span></span></li>\n<li><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nidalee" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nidalee/LoL" title="Nidalee\'s"><img alt="Nidalee\'s" src="/wiki/images/Nidalee_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nidalee/LoL" title="Nidalee/LoL">Nidalee\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nidalee" data-ability="Bushwhack" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nidalee/LoL#Bushwhack" title="Bushwhack"><img alt="Bushwhack" src="/wiki/images/Nidalee_Bushwhack.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nidalee/LoL#Bushwhack" title="Nidalee/LoL">Bushwhack</a></span></span></span></li>\n<li><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rek\'Sai" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rek%27Sai/LoL" title="Rek\'Sai\'s"><img alt="Rek\'Sai\'s" src="/wiki/images/Rek%27Sai_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rek%27Sai/LoL" title="Rek\'Sai/LoL">Rek\'Sai\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rek\'Sai" data-ability="Tunnel" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rek%27Sai/LoL#Tunnel" title="Tunnel"><img alt="Tunnel" src="/wiki/images/Rek%27Sai_Tunnel.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rek%27Sai/LoL#Tunnel" title="Rek\'Sai/LoL">Tunnel</a></span></span></span></li>\n<li><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Senna" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Senna/LoL" title="Senna\'s"><img alt="Senna\'s" src="/wiki/images/Senna_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Senna/LoL" title="Senna/LoL">Senna\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Senna" data-ability="Absolution" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Senna/LoL#Absolution" title="Absolution\'s"><img alt="Absolution\'s" src="/wiki/images/Senna_Absolution.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Senna/LoL#Absolution" title="Senna/LoL">Absolution\'s</a></span></span></span> <i>Mist Wraiths</i></li>\n<li><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Teemo" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teemo/LoL" title="Teemo\'s"><img alt="Teemo\'s" src="/wiki/images/Teemo_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teemo/LoL" title="Teemo/LoL">Teemo\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Teemo" data-ability="Noxious Trap" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teemo/LoL#Noxious_Trap" title="Noxious Trap"><img alt="Noxious Trap" src="/wiki/images/Teemo_Noxious_Trap.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teemo/LoL#Noxious_Trap" title="Teemo/LoL">Noxious Trap</a></span></span></span></li>\n<li><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viego" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viego/LoL" title="Viego\'s"><img alt="Viego\'s" src="/wiki/images/Viego_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viego/LoL" title="Viego/LoL">Viego\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viego" data-ability="Sovereign\'s Domination" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viego/LoL#Sovereign\'s_Domination" title="Sovereign\'s Domination\'s"><img alt="Sovereign\'s Domination\'s" src="/wiki/images/Viego_Sovereign%27s_Domination.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viego/LoL#Sovereign\'s_Domination" title="Viego/LoL">Sovereign\'s Domination\'s</a></span></span></span> <i>Mist Wraiths</i></li>\n<li><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yorick" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yorick/LoL" title="Yorick\'s"><img alt="Yorick\'s" src="/wiki/images/Yorick_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yorick/LoL" title="Yorick/LoL">Yorick\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yorick" data-ability="Dark Procession" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yorick/LoL#Dark_Procession" title="Dark Procession"><img alt="Dark Procession" src="/wiki/images/Yorick_Dark_Procession.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yorick/LoL#Dark_Procession" title="Yorick/LoL">Dark Procession</a></span></span></span></li></ul></li>\n<li><i>Isolated</i> targets are marked by an <a href="https://static.wikia.nocookie.net/leagueoflegends/images/5/55/Unseen_Threat_2.png/revision/latest?cb=20190601034942" class="image"><img alt="Unseen Threat 2.png" src="/wiki/images/Unseen_Threat_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> indicator to <b>Kha\'Zix</b> when visible and within <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">2500</span> units of him. However, <i>Isolation</i> bonuses are evaluated when the relevant spells hit and thus enemies do not need to show the indicator for them to receive the effects.</li>\n<li>If the target becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dies</a></span>, or is too far away or no longer in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> during the cast time, this ability will cancel but does not go on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> nor pay its cost (if applicable).</li></ul>',
    yvideo: "Kha'Zix - Q",
  },
  'Evolved Reaper Claws': {
    name: 'Evolved Reaper Claws',
    display_name: 'Evolved Reaper Claws',
    champion: "Kha'Zix",
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'KhazixQ.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 288,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '375',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <b>Kha\'Zix</b> gains <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> range</span> on his basic attacks and <i>Taste Their Fear</i>.',
      '<span class="template_sbc"><b>Evolved Bonus:</b></span> If the target is <span style="color: #AF1AAF; white-space:normal">Isolated</span>, the cooldown is <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;reduced</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Evolved Reaper Claws.png',
        description:
          "Passive: Kha'Zix gains  50 bonus range on his basic attacks and Taste Their Fear. Evolved Bonus: If the target is Isolated, the  cooldown is reduced by 45%.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Kha\'Zix</b> gains <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;50 <b>bonus</b> range</span> on his <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> and <i>Taste Their Fear</i>. <br><br><span class="template_sbc"><b>Evolved Bonus:</b></span> If the target is <span style="color: #AF1AAF; white-space:normal">Isolated</span>, the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> is reduced by 45%.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Passive:',
            raw: " Kha'Zix gains  50 bonus range on his basic attacks and Taste Their Fear",
            increasedStat: 'bonus_ad',
            values: 5,
            units: '',
            unitsText:
              'gains  50 bonus range on his basic attacks and Taste Their Fear',
            pre: "Kha'Zix gains  50 bonus range on his basic attacks and Taste Their Fear",
          },
          {
            effectType: 'Unique',
            name: 'Evolved Bonus:',
            raw: ' If the target is Isolated, the  cooldown is reduced by 45%.',
            values: 4,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              '.the target is Isolated, the  cooldown is reduced by 45',
            pre: 'If the target is Isolated, the  cooldown is reduced by 45%.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Unit',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Single target',
    spellshield: true,
    callforhelp: 'True',
    notes: '* No additional details.',
    yvideo: "Kha'Zix - Q",
  },
  'Void Spike': {
    name: 'Void Spike',
    display_name: 'Void Spike',
    champion: "Kha'Zix",
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'KhazixW.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 336,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '1025',
    effect_radius: '275',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 140',
    speed: '1700',
    cast_time: '0.<small>25</small>',
    cost: '55 / 60 / 65 / 70 / 75',
    costtype: 'Mana',
    cooldown: '9',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kha\'Zix" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kha%27Zix/LoL" title="Kha\'Zix"><img alt="Kha\'Zix" src="/wiki/images/Kha%27Zix_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kha%27Zix/LoL" title="Kha\'Zix/LoL">Kha\'Zix</a></span></span> fires a bolt of spikes in the target direction that explodes upon hitting an enemy, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies.',
      '<b>Kha\'Zix</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> himself if he is within the explosion.',
    ],
    description: [
      {
        icon: '/wiki/images/Void Spike.png',
        description:
          "Active: Kha'Zix fires a bolt of spikes in the target direction that explodes upon hitting an enemy, dealing physical damage to nearby enemies.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Kha\'Zix</b> fires a bolt of spikes in the target direction that explodes upon hitting an enemy, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '85 / 115 / 145 / 175 / 205 (+ 100% bonus AD)',
            valuesHTML:
              '85 / 115 / 145 / 175 / 205 <span style="color:orange; white-space:normal">(+&nbsp;100% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '85 / 115 / 145 / 175 / 205 (+ 100% bonus AD)',
            damagetype: 'Physical',
            values: [85, 115, 145, 175, 205],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '85 / 115 / 145 / 175 / 205',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 100% bonus AD',
              },
            ],
          },
        ],
      },
      {
        description: "Kha'Zix  heals himself if he is within the explosion.",
        descriptionHTML:
          '<b>Kha\'Zix</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> himself if he is within the explosion.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Heal:',
            values: '55 / 75 / 95 / 115 / 135 (+ 50% AP)',
            valuesHTML:
              '55 / 75 / 95 / 115 / 135 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;50% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Heal:',
            raw: '55 / 75 / 95 / 115 / 135 (+ 50% AP)',
            healType: 'DrainEffect',
            values: [55, 75, 95, 115, 135],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '55 / 75 / 95 / 115 / 135',
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
    ],
    targeting: 'Direction',
    affects: 'Enemies, Self',
    damagetype: 'physical',
    spelleffects: 'spellaoe',
    spellshield: true,
    projectile: 'true',
    notes:
      "* This ability will cast from wherever the caster is at the end of the cast time.\n<ul><li><i>Void Spike's</i> effect radius is centered around the location of the missile as it collides.</li></ul>",
    video: "Kha'Zix - W",
  },
  'Evolved Spike Racks': {
    name: 'Evolved Spike Racks',
    display_name: 'Evolved Spike Racks',
    champion: "Kha'Zix",
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'KhazixW.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 336,
      y: 48,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Evolved Bonus:</b></span> <i>Void Spike</i> now fires three clusters in a cone, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> enemy champions hit for a short time.',
      'The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slow</a></span> is more potent against <span style="color: #AF1AAF; white-space:normal">Isolated</span> targets.',
    ],
    description: [
      {
        icon: '/wiki/images/Evolved Spike Racks.png',
        description:
          "Evolved Bonus: Void Spike now fires three clusters in a cone,  slows by 60% and  reveals enemy champions hit for 2 seconds. Multiple explosions do not deal extra damage to the same target nor provide Kha'Zix with additional healing.",
        descriptionHTML:
          '<span class="template_sbc"><b>Evolved Bonus:</b></span> <i>Void Spike</i> now fires three clusters in a cone, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> by 60% and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">reveals</a></span> enemy champions hit for 2 seconds. Multiple explosions do not deal extra damage to the same target nor provide <b>Kha\'Zix</b> with additional healing.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Evolved Bonus:',
            raw: ' Void Spike now fires three clusters in a cone,  slows by 60% and  reveals enemy champions hit for 2 seconds',
            values: 6,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'and  reveals enemy champions hit for 2 secondsSpike now fires three clusters in a cone,  slows by 60',
            pre: 'Void Spike now fires three clusters in a cone,  slows by 60% and  reveals enemy champions hit for 2 seconds',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Isolated targets hit by Evolved Spike Racks are  slowed by 90% instead.',
        descriptionHTML:
          '<span style="color: #AF1AAF; white-space:normal">Isolated</span> targets hit by <i>Evolved Spike Racks</i> are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 90% instead.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Isolated targets hit by Evolved Spike Racks are  slowed by 90% instead.',
            damagetype: 'None',
            values: 9,
            valuesIsPercent: true,
            user: 'target',
            units: 'total_ad',
            unitsText:
              'instead.targets hit by Evolved Spike Racks are  slowed by 90',
            pre: 'Isolated targets hit by Evolved Spike Racks are  slowed by 90% instead.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies, Self',
    damagetype: 'physical',
    spelleffects: 'aoe',
    spellshield: 'Special',
    projectile: 'true',
    notes:
      '* This ability will cast from wherever the caster is at the end of the cast time.\n<ul><li><i>Evolved Spike Racks\'</i> effect radius is centered around the location of the missile as it collides.</li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">Spell shield</a></span> will not block the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">reveal</a></span>.</li></ul>',
    yvideo: "Kha'Zix - W",
  },
  Leap: {
    name: 'Leap',
    display_name: 'Leap',
    champion: "Kha'Zix",
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'KhazixE.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 384,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '700',
    effect_radius: '300',
    cast_time: 'none',
    cost: '50',
    costtype: 'Mana',
    cooldown: '20 / 18 / 16 / 14 / 12',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kha\'Zix" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kha%27Zix/LoL" title="Kha\'Zix"><img alt="Kha\'Zix" src="/wiki/images/Kha%27Zix_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kha%27Zix/LoL" title="Kha\'Zix/LoL">Kha\'Zix</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaps</a></span> to the target location, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies upon landing.',
    ],
    description: [
      {
        icon: '/wiki/images/Leap.png',
        description:
          "Active: Kha'Zix  leaps to the target location, dealing physical damage to nearby enemies upon arrival.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Kha\'Zix</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaps</a></span> to the target location, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to nearby enemies upon arrival.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '65 / 100 / 135 / 170 / 205 (+ 20% bonus AD)',
            valuesHTML:
              '65 / 100 / 135 / 170 / 205 <span style="color:orange; white-space:normal">(+&nbsp;20% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '65 / 100 / 135 / 170 / 205 (+ 20% bonus AD)',
            damagetype: 'Physical',
            values: [65, 100, 135, 170, 205],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '65 / 100 / 135 / 170 / 205',
            children: [
              {
                values: 20,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 20% bonus AD',
              },
            ],
          },
        ],
      },
      {
        description:
          'Taste Their Fear can be cast during the dash. Leap will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kha\'Zix" data-ability="Taste Their Fear" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kha%27Zix/LoL#Taste_Their_Fear" title="Taste Their Fear"><img alt="Taste Their Fear" src="/wiki/images/Kha%27Zix_Taste_Their_Fear.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kha%27Zix/LoL#Taste_Their_Fear" title="Kha\'Zix/LoL">Taste Their Fear</a></span></span> can be cast during the dash. Leap will cast at max range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'physical',
    spelleffects: 'spellaoe',
    spellshield: true,
    notes:
      '* <b>Kha\'Zix</b> can use his <a href="/wiki/Summoner_spells" class="mw-redirect" title="Summoner spells">summoner spells</a> and <a href="/wiki/Active_ability_items" title="Active ability items">item actives</a> while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaping</a></span>.',
    yvideo: "Kha'Zix - E",
  },
  'Evolved Wings': {
    name: 'Evolved Wings',
    display_name: 'Evolved Wings',
    champion: "Kha'Zix",
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'KhazixE.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 384,
      y: 48,
      w: 48,
      h: 48,
    },
    target_range: '900',
    blurb: [
      '<span class="template_sbc"><b>Evolved Bonus:</b></span> <i>Leap</i> has increased range, and the cooldown <span style="white-space:nowrap"><a href="/wiki/Cooldown_reduction" title="Cooldown reduction"><img alt="Cooldown reduction icon.png" src="/wiki/images/Cooldown_reduction_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;resets</span> upon scoring a champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Evolved Wings.png',
        description:
          'Evolved Bonus: Leap gains 200 bonus cast range, and the  cooldown resets upon scoring a champion  takedown.',
        descriptionHTML:
          '<span class="template_sbc"><b>Evolved Bonus:</b></span> <i>Leap</i> gains 200 <b>bonus</b> cast range, and the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldown</span> resets upon scoring a champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Evolved Bonus:',
            raw: ' Leap gains 200 bonus cast range, and the  cooldown resets upon scoring a champion  takedown.',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'gains 200 bonus cast range, and the  cooldown resets upon scoring a champion  takedown.',
            pre: 'Leap gains 200 bonus cast range, and the  cooldown resets upon scoring a champion  takedown.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'physical',
    spelleffects: 'aoe',
    spellshield: true,
    notes:
      '* <b>Kha\'Zix</b> can use his <a href="/wiki/Summoner_spells" class="mw-redirect" title="Summoner spells">summoner spells</a> and <a href="/wiki/Active_ability_items" title="Active ability items">item actives</a> while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">leaping</a></span>.',
    yvideo: "Kha'Zix - E",
  },
  'Void Assault': {
    name: 'Void Assault',
    display_name: 'Void Assault',
    champion: "Kha'Zix",
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'KhazixR.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 432,
      y: 48,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">100 / 85 / 70</span>',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> Each rank in <i>Void Assault</i> allows <b>Kha\'Zix</b> to evolve one of his abilities, granting it additional effects.',
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kha\'Zix" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kha%27Zix/LoL" title="Kha\'Zix"><img alt="Kha\'Zix" src="/wiki/images/Kha%27Zix_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kha%27Zix/LoL" title="Kha\'Zix/LoL">Kha\'Zix</a></span></span> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisible"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisible</a></span> and gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> for a brief time. Upon breaking invisibility, <i>Void Assault</i> can be cast a second time at no additional cost.',
    ],
    description: [
      {
        description:
          "Passive: Each rank in Void Assault allows Kha'Zix to evolve one of his abilities, granting it additional effects. Evolving an ability causes him to enter a 2-second cast time. Kha'Zix cannot evolve while he is unable to cast abilities.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> Each rank in <i>Void Assault</i> allows <b>Kha\'Zix</b> to evolve one of his abilities, granting it additional effects. Evolving an ability causes him to enter a 2-second cast time. <b>Kha\'Zix</b> cannot evolve while he is unable to cast abilities.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'Evolving an ability causes him to enter a 2-second cast time',
            values: 2,
            units: 'total_ap',
            unitsText: 'an ability causes him to enter a 2-second cast time',
            pre: 'Evolving an ability causes him to enter a 2-second cast time',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Void Assault.png',
        description:
          "Active: Kha'Zix becomes  invisible for 1.25 seconds, during which he gains  40% bonus movement speed.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Kha\'Zix</b> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisible"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisible</a></span> for 1.<small>25</small> seconds, during which he gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">40% <b>bonus</b> movement speed</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: " Kha'Zix becomes  invisible for 1.25 seconds, during which he gains  40% bonus movement speed.",
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'bonus movement speed.becomes  invisible for 1.25 seconds, during which he gains  40',
            pre: "Kha'Zix becomes  invisible for 1.25 seconds, during which he gains  40% bonus movement speed.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Void Assault 2.png',
        description:
          'After 2 seconds of leaving  invisibility, and for the next 10 seconds, Void Assault can be recast at no additional cost.',
        descriptionHTML:
          'After 2 seconds of leaving <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisibility"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisibility</a></span>, and for the next 10 seconds, <i>Void Assault</i> can be recast at no additional cost.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'After 2 seconds of leaving  invisibility, and for the next 10 seconds, Void Assault can be recast at no additional cost.',
            damagetype: 'None',
            values: 2,
            units: 'total_ad',
            unitsText:
              '2 seconds of leaving  invisibility, and for the next 10 seconds, Void Assault can be recast at no additional cost.',
            pre: 'After 2 seconds of leaving  invisibility, and for the next 10 seconds, Void Assault can be recast at no additional cost.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description: "Recast: Kha'Zix mimics the first cast's effects.",
        descriptionHTML:
          '<span class="template_sbc"><b>Recast</b></span>: <b>Kha\'Zix</b> mimics the first cast\'s effects.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    notes:
      '*Each cast counts as an ability activation for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li><b>Kha\'Zix</b> receives the evolution even if he dies while in cast time.</li>\n<li>Every time <i>Void Assault</i> is ranked, a secondary menu will pop up for <b>Kha\'Zix</b> to select an ability to evolve, this can only be done once per ability.\n<ul><li>The only way for <b>Kha\'Zix</b> to evolve all of his abilities is to gain the fourth evolution point by being victorious in <a href="/wiki/The_Hunt_is_On!" class="mw-redirect" title="The Hunt is On!">The Hunt is On!</a> (by scoring a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> on <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Rengar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Rengar/LoL" title="Rengar"><img alt="Rengar" src="/wiki/images/Rengar_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Rengar/LoL" title="Rengar/LoL">Rengar</a></span></span>).</li></ul></li></ul>',
    yvideo: "Kha'Zix - R",
  },
  'Evolved Adaptive Cloaking': {
    name: 'Evolved Adaptive Cloaking',
    display_name: 'Evolved Adaptive Cloaking',
    champion: "Kha'Zix",
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'KhazixR.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 432,
      y: 48,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Evolved Bonus:</b></span> The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisibility"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisibility</a></span> is extended, and <i>Void Assault</i> can be cast up to 3 times.',
    ],
    description: [
      {
        icon: '/wiki/images/Evolved Adaptive Cloaking.png',
        description:
          'Evolved Bonus: The  invisibility now lasts 2 seconds, and Void Assault can be recast twice.',
        descriptionHTML:
          '<span class="template_sbc"><b>Evolved Bonus:</b></span> The <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invisibility"><a href="/wiki/Stealth#Invisibility" title="Stealth#Invisibility"><img alt="Twilight Shroud old2.png" src="/wiki/images/Akali_Twilight_Shroud_old2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Invisibility" title="Stealth">invisibility</a></span> now lasts 2 seconds, and <i>Void Assault</i> can be recast twice.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Evolved Bonus:',
            raw: ' The  invisibility now lasts 2 seconds, and Void Assault can be recast twice.',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'invisibility now lasts 2 seconds, and Void Assault can be recast twice.',
            pre: 'The  invisibility now lasts 2 seconds, and Void Assault can be recast twice.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self',
    notes: '*No additional details.',
    yvideo: "Kha'Zix - R",
  },
} satisfies { [skillName in string]: SkillData };
