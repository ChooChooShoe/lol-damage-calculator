import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Kled';

export default {
  'Skaarl the Cowardly Lizard': {
    name: 'Skaarl the Cowardly Lizard',
    display_name: 'Skaarl, the Cowardly Lizard',
    champion: 'Kled',
    skill: 'I',
    image: {
      full: 'Kled_P.png',
      sprite: 'passive2.png',
      group: 'passive',
      x: 96,
      y: 0,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL" title="Kled"><img alt="Kled" src="/wiki/images/Kled_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL" title="Kled/LoL">Kled</a></span></span> rides his semi-trusty steed, <span class="inline-image" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><img alt="Kled Skaarl the Cowardly Lizard 3.png" src="/wiki/images/Kled_Skaarl_the_Cowardly_Lizard_3.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></span></span> <b>Skaarl</b>, whom takes damage for him while he is <span class="template_sbc"><b>Mounted</b></span>. When <b>Skaarl\'s</b> health depletes, <b>Kled</b> dismounts, briefly ignoring excess damage and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleansing</a></span> from all <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span>.',
      '<b>Kled</b> remains <span class="template_sbc"><b>Dismounted</b></span> until he returns to the <a href="/wiki/Spawn" title="Spawn">summoning platform</a>, but can restore Skaarl\'s <span style="color: #AF1AAF; white-space:normal">Courage</span> by fighting enemies. At maximum <span style="color: #AF1AAF; white-space:normal">Courage</span>, <b>Kled</b> becomes <span class="template_sbc"><b>Mounted</b></span> with a portion of <b>Skaarl\'s</b> health.',
      '<span class="template_sbc"><b>Dismounted:</b></span> <b>Kled</b> gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> while moving toward enemy champions, but his basic attacks deal less damage to champions. <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Bear Trap on a Rope" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Bear_Trap_on_a_Rope" title="Bear Trap on a Rope"><img alt="Bear Trap on a Rope" src="/wiki/images/Kled_Bear_Trap_on_a_Rope.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Bear_Trap_on_a_Rope" title="Kled/LoL">Bear Trap on a Rope</a></span></span></i> is replaced with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Pocket Pistol" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Pocket_Pistol" title="Pocket Pistol"><img alt="Pocket Pistol" src="/wiki/images/Kled_Pocket_Pistol.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Pocket_Pistol" title="Kled/LoL">Pocket Pistol</a></span></span></i>, and <b>Kled</b> cannot cast his other abilities.',
    ],
    description: [
      {
        icon: '/wiki/images/Skaarl_the_Cowardly_Lizard.png',
        description:
          "Innate: Kled rides his semi-trusty mount, Skaarl. While Mounted, all damage dealt to the duo is suffered by Skaarl, who has 810 − 3258 (based on level) (+ 100% bonus health) base health. Effects based on percentage health consider Kled and Skaarl's combined maximum health.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Kled</b> rides his semi-trusty mount, <b>Skaarl</b>. While <span class="template_sbc"><b>Mounted</b></span>, all damage dealt to the duo is suffered by <b>Skaarl</b>, who has <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-useformula="810+144*(x-1)*(0.7025+0.0175*(x-1))" data-bot_values="810;913.68;1022.4;1136.16;1254.96;1378.8;1507.68;1641.6;1780.56;1924.56;2073.6;2227.68;2386.8;2550.96;2720.16;2894.4;3073.68;3258" data-top_values="">810 − 3258 (based on level)</span></span> <span style="color: #1F995C; white-space:normal">(+&nbsp;100% <b>bonus</b> health)</span> <span style="color: #1F995C; white-space:normal"><b>base</b> health</span>. Effects based on percentage health consider <b>Kled</b> and <b>Skaarl\'s</b> combined <span style="color: #1F995C; white-space:normal"><b>maximum</b> health</span>.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: 'While Mounted, all damage dealt to the duo is suffered by Skaarl, who has 810 − 3258 (based on level) (+ 100% bonus health) base health',
            healType: 'BonusHealth',
            values: [
              810, 954, 1098, 1242, 1386, 1530, 1674, 1818, 1962, 2106, 2250,
              2394, 2538, 2682, 2826, 2970, 3114, 3258,
            ],
            basedOn: 'level',
            units: 'base_hp',
            unitsText: 'base health',
            pre: 'While Mounted, all damage dealt to the duo is suffered by Skaarl, who has 810 − 3258',
            post: 'base health',
            children: [
              {
                values: 100,
                valuesIsPercent: true,
                units: 'bonus_hp',
                unitsText: 'bonus health',
                pre: '+ 100% bonus health',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Dismounted_Skaarl_the_Cowardly_Lizard.png',
        description:
          "Being reduced to  0 health causes Skaarl to flee, forcing Kled to be Dismounted, with all damage in excess of Skaarl's health being ignored. Upon dismounting, Kled  dashes in the direction of the allied Nexus, though not through terrain,  cleanses himself of all  crowd control and becomes  unable to act,  untargetable, and  immune to crowd control for 0.5 seconds, during which he also reduces all incoming damage received by 100%.",
        descriptionHTML:
          'Being reduced to <span style="color: #1F995C; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;0 health</span></span> causes <b>Skaarl</b> to flee, forcing <b>Kled</b> to be <span class="template_sbc"><b>Dismounted</b></span>, with all damage in excess of <b>Skaarl\'s</b> health being ignored. Upon dismounting, <b>Kled</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the direction of the allied <a href="/wiki/Nexus" title="Nexus">Nexus</a>, though not through terrain, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cleanse"><a href="/wiki/Crowd_control#Removal" title="Crowd control#Removal"><img alt="Remove Scurvy.png" src="/wiki/images/Gangplank_Remove_Scurvy.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Removal" title="Crowd control">cleanses</a></span> himself of all <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span> and becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">unable to act</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">immune to crowd control</a></span> for 0.<small>5</small> seconds, during which he also reduces all incoming damage received by 100%.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'While Kled is Dismounted, his base health and base movement speed are reduced, his  base attack range is increased,  Bear Trap on a Rope is replaced with  Pocket Pistol, and  Jousting and  Chaaaaaaaarge!!! become unusable.',
        descriptionHTML:
          'While <b>Kled</b> is <span class="template_sbc"><b>Dismounted</b></span>, his <span style="color: #1F995C; white-space:normal"><b>base</b> health</span> and <span style="color: #F5EE99; white-space:normal"><b>base</b> movement speed</span> are reduced, his <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>base</b> attack range</span> is increased, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Bear Trap on a Rope" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Bear_Trap_on_a_Rope" title="Bear Trap on a Rope"><img alt="Bear Trap on a Rope" src="/wiki/images/Kled_Bear_Trap_on_a_Rope.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Bear_Trap_on_a_Rope" title="Kled/LoL">Bear Trap on a Rope</a></span></span></i> is replaced with <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Pocket Pistol" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Pocket_Pistol" title="Pocket Pistol"><img alt="Pocket Pistol" src="/wiki/images/Kled_Pocket_Pistol.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Pocket_Pistol" title="Kled/LoL">Pocket Pistol</a></span></span></i>, and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Jousting" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Jousting" title="Jousting"><img alt="Jousting" src="/wiki/images/Kled_Jousting.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Jousting" title="Kled/LoL">Jousting</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Chaaaaaaaarge!!!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Chaaaaaaaarge!!!" title="Chaaaaaaaarge!!!"><img alt="Chaaaaaaaarge!!!" src="/wiki/images/Kled_Chaaaaaaaarge%21%21%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Chaaaaaaaarge!!!" title="Kled/LoL">Chaaaaaaaarge!!!</a></span></span></i> become unusable.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes:
      '* It is possible for the <a href="/wiki/Nexus_Obelisk" title="Nexus Obelisk">Nexus Obelisk</a> to not be able to bring <b>Kled</b> down from <b>Skaarl</b> for a few seconds, even if <b>Skaarl</b> has no health.\n<ul><li><b>Kled\'s</b> health is rounded up while <b>Skaarl\'s</b> health is rounded down.</li>\n<li><span style="white-space:nowrap"><a href="/wiki/Health_regeneration" title="Health regeneration"><img alt="Health regeneration icon.png" src="/wiki/images/Health_regeneration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Health_regeneration" title="Health regeneration">Health regeneration</a></span> only regenerates <b>Kled\'s</b> or <b>Skaarl\'s</b> health, not both.</li>\n<li>The only <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span> status which <b>Kled\'s</b> dismount does not dispel is <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Mordekaiser" data-ability="Realm of Death" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mordekaiser/LoL#Realm_of_Death" title="Realm of Death"><img alt="Realm of Death" src="/wiki/images/Mordekaiser_Realm_of_Death.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mordekaiser/LoL#Realm_of_Death" title="Mordekaiser/LoL">Realm of Death</a></span></span>.</li></ul>',
    video: 'Kled - Passive',
  },
  'Dismounted Skaarl the Cowardly Lizard': {
    name: 'Dismounted Skaarl the Cowardly Lizard',
    display_name: 'Unmounted',
    champion: 'Kled',
    skill: 'I',
    image: {
      full: 'Kled_P.png',
      sprite: 'passive2.png',
      group: 'passive',
      x: 96,
      y: 0,
      w: 48,
      h: 48,
    },
    blurb: [],
    description: [
      {
        icon: '/wiki/images/Dismounted_Skaarl_the_Cowardly_Lizard.png',
        description:
          "Innate: Kled is only vulnerable to  death while Dismounted. Kled has  410 − 1838 (based on level) base health, which is not improved by sources of bonus health, as well as reduced base movement speed and increased  attack range. Effects based on percentage health consider Kled and Skaarl's combined maximum health, meaning that a Dismounted Kled is always considered to be low health.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> <b>Kled</b> is only vulnerable to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">death</a></span> while <span class="template_sbc"><b>Dismounted</b></span>. <b>Kled</b> has <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-useformula="410+84*(x-1)*(0.7025+0.0175*(x-1))" data-bot_values="410;470.48;533.9;600.26;669.56;741.8;816.98;895.1;976.16;1060.16;1147.1;1236.98;1329.8;1425.56;1524.26;1625.9;1730.48;1838" data-top_values="">410 − 1838 (based on level)</span> <b>base</b> health</span></span>, which is not improved by sources of <span style="color: #1F995C; white-space:normal"><b>bonus</b> health</span>, as well as reduced <span style="color: #F5EE99; white-space:normal"><b>base</b> movement speed</span> and increased <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;attack range</span>. Effects based on percentage health consider <b>Kled</b> and <b>Skaarl\'s</b> combined <span style="color: #1F995C; white-space:normal"><b>maximum</b> health</span>, meaning that a <span class="template_sbc"><b>Dismounted</b></span> <b>Kled</b> is always considered to be <i>low</i> health.',
        descriptionRatios: [
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: 'Kled has  410 − 1838 (based on level) base health, which is not improved by sources of bonus health, as well as reduced base movement speed and increased  attack range',
            healType: 'BonusHealth',
            values: [
              410, 494, 578, 662, 746, 830, 914, 998, 1082, 1166, 1250, 1334,
              1418, 1502, 1586, 1670, 1754, 1838,
            ],
            basedOn: 'level',
            units: 'bonus_ad',
            unitsText:
              'base health, which is not improved by sources of bonus health, as well as reduced base movement speed and increased  attack range',
            pre: 'Kled has  410 − 1838',
            post: 'base health, which is not improved by sources of bonus health, as well as reduced base movement speed and increased  attack range',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "Kled gains 100 − 185 (based on level)  bonus movement speed while moving towards  visible enemy  champions within 1000 units, but his basic attacks against them are reduced to 80% AD physical damage. Additionally, he gains the ability to restore Skaarl's  Courage to  reunite again.",
        descriptionHTML:
          '<b>Kled</b> gains <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help; color:#F5EE99;" data-start="100;" data-finish="185;" data-bot_values="100;105;110;115;120;125;130;135;140;145;150;155;160;165;170;175;180;185" data-top_values="">100 − 185 (based on level)</span> <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> while moving towards <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> within <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="center to center">1000</span> units, but his basic attacks against them are reduced to <span style="color:orange; white-space:normal">80% AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span>. Additionally, he gains the ability to restore <b>Skaarl\'s</b> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Skaarl the Cowardly Lizard 3" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Skaarl_the_Cowardly_Lizard_3" title="Courage"><img alt="Courage" src="/wiki/images/Kled_Skaarl_the_Cowardly_Lizard_3.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Skaarl_the_Cowardly_Lizard_3" title="Kled/LoL"><span style="color: #AF1AAF; white-space:normal">Courage</span></a></span></span> to <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Skaarl the Cowardly Lizard" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Skaarl_the_Cowardly_Lizard" title="reunite"><img alt="reunite" src="/wiki/images/Kled_Skaarl_the_Cowardly_Lizard.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Skaarl_the_Cowardly_Lizard" title="Kled/LoL">reunite</a></span></span></i> again.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Kled gains 100 − 185 (based on level)  bonus movement speed while moving towards  visible enemy  champions within 1000 units, but his basic attacks against them are reduced to 80% AD physical damage',
            increasedStat: 'bonus_ad',
            values: [
              100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160,
              165, 170, 175, 180, 185,
            ],
            basedOn: 'level',
            units: '',
            unitsText:
              'bonus movement speed while moving towards  visible enemy  champions within 1000 units, but his basic attacks against them are reduced to 80% AD physical damage',
            pre: 'Kled gains 100 − 185',
            post: 'bonus movement speed while moving towards  visible enemy  champions within 1000 units, but his basic attacks against them are reduced to 80% AD physical damage',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Skaarl_the_Cowardly_Lizard_3.png',
        description:
          "Innate - Courage: Kled gains 15 Courage when basic attacking an enemy champion, 20 Courage whenever he scores a  takedown against an enemy  champion within 3 seconds of damaging them, 4 Courage for  minion kills, and 5 Courage when basic attacking a structure or epic  monster. At 100 Courage, Skaarl returns with 45 / 55 / 65 / 75% (based on level) of Skaarl's maximum health and Kled becomes Mounted after 0.7 seconds.  Mounting up resets the  cooldowns of  Bear Trap on a Rope and  Jousting.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate - Courage:</b></span> <b>Kled</b> gains 15 <span style="color: #AF1AAF; white-space:normal">Courage</span> when <a href="/wiki/Basic_attack" title="Basic attack">basic attacking</a> an enemy champion, 20 <span style="color: #AF1AAF; white-space:normal">Courage</span> whenever he scores a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> against an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> within 3 seconds of damaging them, 4 <span style="color: #AF1AAF; white-space:normal">Courage</span> for <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span> kills, and 5 <span style="color: #AF1AAF; white-space:normal">Courage</span> when basic attacking a <a href="/wiki/Structures" class="mw-redirect" title="Structures">structure</a> or epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>. At 100 <span style="color: #AF1AAF; white-space:normal">Courage</span>, <b>Skaarl</b> returns with <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="45;1" data-finish="75;16" data-bot_values="45;55;65;75" data-top_values="1;6;11;16" data-bot_key="%">45 / 55 / 65 / 75% (based on level)</span> of <b>Skaarl\'s</b> <b>maximum</b> health</span> and <b>Kled</b> becomes <span class="template_sbc"><b>Mounted</b></span> after 0.<small>7</small> seconds. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Skaarl the Cowardly Lizard" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Skaarl_the_Cowardly_Lizard" title="Mounting up"><img alt="Mounting up" src="/wiki/images/Kled_Skaarl_the_Cowardly_Lizard.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Skaarl_the_Cowardly_Lizard" title="Kled/LoL"><i>Mounting up</i></a></span></span> resets the <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;cooldowns</span> of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Bear Trap on a Rope" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Bear_Trap_on_a_Rope" title="Bear Trap on a Rope"><img alt="Bear Trap on a Rope" src="/wiki/images/Kled_Bear_Trap_on_a_Rope.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Bear_Trap_on_a_Rope" title="Kled/LoL">Bear Trap on a Rope</a></span></span></i> and <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Jousting" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Jousting" title="Jousting"><img alt="Jousting" src="/wiki/images/Kled_Jousting.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Jousting" title="Kled/LoL">Jousting</a></span></span></i>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate - Courage:',
            raw: 'Kled gains 15 Courage when basic attacking an enemy champion, 20 Courage whenever he scores a  takedown against an enemy  champion within 3 seconds of damaging them, 4 Courage for  minion kills, and 5 Courage when basic attacking a structure or epic  monster',
            increasedStat: 'total_ad',
            values: 1,
            units: '',
            unitsText:
              'gains 15 Courage when basic attacking an enemy champion, 20 Courage whenever he scores a  takedown against an enemy  champion within 3 seconds of damaging them, 4 Courage for  minion kills, and 5 Courage when basic attacking a structure or epic  monster',
            pre: 'Kled gains 15 Courage when basic attacking an enemy champion, 20 Courage whenever he scores a  takedown against an enemy  champion within 3 seconds of damaging them, 4 Courage for  minion kills, and 5 Courage when basic attacking a structure or epic  monster',
          },
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: "At 100 Courage, Skaarl returns with 45 / 55 / 65 / 75% (based on level) of Skaarl's maximum health and Kled becomes Mounted after 0.7 seconds",
            healType: 'BonusHealth',
            values: [],
            valuesIsPercent: true,
            basedOn: 'level',
            units: 'maximum_hp',
            unitsText:
              "of Skaarl's maximum health and Kled becomes Mounted after 0.7 seconds",
            pre: 'At 100 Courage, Skaarl returns with 45 / 55 / 65 / 75%',
            post: "of Skaarl's maximum health and Kled becomes Mounted after 0.7 seconds",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'While at the allied fountain, 25 Courage is generated every 0.25 seconds. If reuniting outside of base, Skaarl gets Frayed Nerves, which prevents him from gaining Courage for 30 seconds.',
        descriptionHTML:
          'While at the allied <a href="/wiki/Spawn" title="Spawn">fountain</a>, 25 <span style="color: #AF1AAF; white-space:normal">Courage</span> is generated every 0.<small>25</small> seconds. If reuniting outside of base, <b>Skaarl</b> gets <i>Frayed Nerves</i>, which prevents him from gaining <span style="color: #AF1AAF; white-space:normal">Courage</span> for 30 seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'While at the allied fountain, 25 Courage is generated every 0.25 seconds',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'at the allied fountain, 25 Courage is generated every 0.25 seconds',
            pre: 'While at the allied fountain, 25 Courage is generated every 0.25 seconds',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'If reuniting outside of base, Skaarl gets Frayed Nerves, which prevents him from gaining Courage for 30 seconds.',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'reuniting outside of base, Skaarl gets Frayed Nerves, which prevents him from gaining Courage for 30 seconds.',
            pre: 'If reuniting outside of base, Skaarl gets Frayed Nerves, which prevents him from gaining Courage for 30 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "The current status of Kled's own health is preserved between subsequent dismounts. While Mounted,  healing and  health regeneration will first replenish Skaarl's health and will only apply to Kled's health while Skaarl is at full health.",
        descriptionHTML:
          'The current status of <b>Kled\'s</b> own health is preserved between subsequent dismounts. While <span class="template_sbc"><b>Mounted</b></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> and <span style="white-space:nowrap"><a href="/wiki/Health_regeneration" title="Health regeneration"><img alt="Health regeneration icon.png" src="/wiki/images/Health_regeneration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Health_regeneration" title="Health regeneration">health regeneration</a></span> will first replenish <b>Skaarl\'s</b> health and will only apply to <b>Kled\'s</b> health while <b>Skaarl</b> is at <i>full</i> health.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes:
      '* <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">Clones</a></span> are counted as champions for all of this passive\'s effects, other than the takedown one.\n<ul><li>It is possible to get the <span style="color: #AF1AAF; white-space:normal">Courage</span> from base but have <b>Kled</b> and <b>Skaarl</b> reunite out of base.</li>\n<li>If <b>Kled</b> achieves 100 <span style="color: #AF1AAF; white-space:normal">Courage</span> while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrecting</a></span> or enters it while in the process of remounting, the remount will be deferred to after he revives.</li>\n<li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Lulu" data-ability="Wild Growth" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Lulu/LoL#Wild_Growth" title="Wild Growth"><img alt="Wild Growth" src="/wiki/images/Lulu_Wild_Growth.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Lulu/LoL#Wild_Growth" title="Lulu/LoL">Wild Growth</a></span></span> and <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Elixir of Iron" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elixir_of_Iron" title="Elixir of Iron"><img alt="Elixir of Iron" src="/wiki/images/Elixir_of_Iron_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elixir_of_Iron" title="Elixir of Iron">Elixir of Iron</a></span></span></li></ul>',
    video: 'Kled - Passive',
  },
  'Bear Trap on a Rope': {
    name: 'Bear Trap on a Rope',
    display_name: 'Bear Trap on a Rope',
    champion: 'Kled',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'KledQ.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 192,
      y: 96,
      w: 48,
      h: 48,
    },
    tether_radius:
      '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="time active" data-start="800;0" data-finish="650;1.75" data-bot_values="800;775;750;725;700;675;650" data-top_values="0;0.29;0.58;0.88;1.17;1.46;1.75">800 − 650 (based on time active)</span>',
    cast_time: '0.<small>25</small>',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">11 / 10 / 9 / 8 / 7</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL" title="Kled"><img alt="Kled" src="/wiki/images/Kled_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL" title="Kled/LoL">Kled</a></span></span> throws a bear trap in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit and forms a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tether</a></span> against the first <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> hit, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealing</a></span> them.',
      'The tether shrinks over a brief time, after which <b>Kled</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulls</a></span> the target, deaIing <span style="color: #FF8C34; white-space:normal">physical damage</span>, inflicting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Grievous wounds"><a href="/wiki/Grievous_Wounds" title="Grievous Wounds"><img alt="Grievous Wounds icon.png" src="/wiki/images/Grievous_Wounds_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Grievous_Wounds" title="Grievous Wounds">Grievous Wounds</a></span>, and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them.',
    ],
    description: [
      {
        icon: '/wiki/images/Bear_Trap_on_a_Rope.png',
        description:
          'Active: Kled throws a bear trap in the target direction that deals physical damage to enemies hit, increased by 50% against  minions and small  monsters. The bear trap collides against the first enemy  champion or large  monster hit, forming a  tether between Kled and the target for 1.75 seconds, during which they are  revealed.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Kled</b> throws a bear trap in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit, increased by 50% against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and small <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>. The bear trap collides against the first enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> hit, forming a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Tether"><a href="/wiki/Tether" title="Tether"><img alt="Focused Resolve.png" src="/wiki/images/Karma_Focused_Resolve.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Tether" title="Tether">tether</a></span> between <b>Kled</b> and the target for 1.<small>75</small> seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: 'Kled throws a bear trap in the target direction that deals physical damage to enemies hit, increased by 50% against  minions and small  monsters',
            increasedStat: 'total_ap',
            values: 5,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'against  minions and small  monstersthrows a bear trap in the target direction that deals physical damage to enemies hit, increased by 50',
            pre: 'Kled throws a bear trap in the target direction that deals physical damage to enemies hit, increased by 50% against  minions and small  monsters',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'The bear trap collides against the first enemy  champion or large  monster hit, forming a  tether between Kled and the target for 1.75 seconds, during which they are  revealed.',
            increasedStat: 'total_ap',
            values: 1,
            units: '',
            unitsText:
              'bear trap collides against the first enemy  champion or large  monster hit, forming a  tether between Kled and the target for 1.75 seconds, during which they are  revealed.',
            pre: 'The bear trap collides against the first enemy  champion or large  monster hit, forming a  tether between Kled and the target for 1.75 seconds, during which they are  revealed.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '30 / 55 / 80 / 105 / 130 (+ 65% bonus AD)',
            valuesHTML:
              '30 / 55 / 80 / 105 / 130 <span style="color:orange; white-space:normal">(+&nbsp;65% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '30 / 55 / 80 / 105 / 130 (+ 65% bonus AD)',
            damagetype: 'Physical',
            values: [30, 55, 80, 105, 130],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 55 / 80 / 105 / 130',
            children: [
              {
                values: 65,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 65% bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          "The tether's radius shrinks over its duration, and if it is not broken before then, Kled  pulls the target 100 units toward him, deals physical damage, inflicts  Grievous Wounds for 5 seconds, and  slows them for 1.5 seconds.",
        descriptionHTML:
          'The tether\'s radius shrinks over its duration, and if it is not broken before then, <b>Kled</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulls</a></span> the target <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">100</span> units toward him, deals <span style="color: #FF8C34; white-space:normal">physical damage</span>, inflicts <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Grievous wounds"><a href="/wiki/Grievous_Wounds" title="Grievous Wounds"><img alt="Grievous Wounds icon.png" src="/wiki/images/Grievous_Wounds_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Grievous_Wounds" title="Grievous Wounds">Grievous Wounds</a></span> for 5 seconds, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them for 1.<small>5</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: "The tether's radius shrinks over its duration, and if it is not broken before then, Kled  pulls the target 100 units toward him, deals physical damage, inflicts  Grievous Wounds for 5 seconds, and  slows them for 1.5 seconds.",
            damagetype: 'Physical',
            values: 1,
            user: 'target',
            units: 'total_ad',
            unitsText:
              "tether's radius shrinks over its duration, and if it is not broken before then, Kled  pulls the target 100 units toward him, deals physical damage, inflicts  Grievous Wounds for 5 seconds, and  slows them for 1.5 seconds.",
            pre: "The tether's radius shrinks over its duration, and if it is not broken before then, Kled  pulls the target 100 units toward him, deals physical damage, inflicts  Grievous Wounds for 5 seconds, and  slows them for 1.5 seconds.",
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '60 / 110 / 160 / 210 / 260 (+ 130% bonus AD)',
            valuesHTML:
              '60 / 110 / 160 / 210 / 260 <span style="color:orange; white-space:normal">(+&nbsp;130% <b>bonus</b> AD)</span>',
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
            name: 'Physical Damage:',
            raw: '60 / 110 / 160 / 210 / 260 (+ 130% bonus AD)',
            damagetype: 'Physical',
            values: [60, 110, 160, 210, 260],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '60 / 110 / 160 / 210 / 260',
            children: [
              {
                values: 130,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 130% bonus AD',
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
        icon: '/wiki/images/undefined',
        description: 'Bear Trap on a Rope can be cast while  Jousting.',
        descriptionHTML:
          '<i>Bear Trap on a Rope can be cast while <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Jousting" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Jousting" title="Jousting"><img alt="Jousting" src="/wiki/images/Kled_Jousting.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Jousting" title="Kled/LoL">Jousting</a></span></span>.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'spell',
    spellshield: true,
    projectile: 'True',
    notes:
      '* This ability will cast from wherever the caster is at the end of the cast time.\n<ul><li><i>Bear Trap on a Rope</i> will not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pull</a></span> the target if they are in <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stasis (buff)"><a href="/wiki/Invulnerability#Stasis" title="Invulnerability#Stasis"><img alt="Stasis icon.png" src="/wiki/images/Stasis_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability#Stasis" title="Invulnerability">stasis</a></span>.</li></ul>',
    video: 'Kled - Q (Mounted)',
  },
  'Pocket Pistol': {
    name: 'Pocket Pistol',
    display_name: 'Pocket Pistol',
    champion: 'Kled',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'KledQ.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 192,
      y: 96,
      w: 48,
      h: 48,
    },
    range: '700 /  640',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 80',
    angle: '20°',
    speed: '3000',
    cast_time: '0.<small>25</small>',
    cost: '1',
    costtype: 'Charge',
    cooldown: '3',
    recharge:
      '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="20;" data-finish="7;" data-bot_values="20;19.24;18.47;17.71;16.94;16.18;15.41;14.65;13.88;13.12;12.35;11.59;10.82;10.06;9.29;8.53;7.76;7" data-top_values="">20 − 7 (based on level)</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL" title="Kled"><img alt="Kled" src="/wiki/images/Kled_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL" title="Kled/LoL">Kled</a></span></span> sprays a cone of <i>pellets</i> in the target direction that deal <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit, during which he also <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">recoils</a></span> backward. Each <i>pellet</i> that hits an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> restores <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Skaarl the Cowardly Lizard 3" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Skaarl_the_Cowardly_Lizard_3" title="Courage"><img alt="Courage" src="/wiki/images/Kled_Skaarl_the_Cowardly_Lizard_3.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Skaarl_the_Cowardly_Lizard_3" title="Kled/LoL"><span style="color: #AF1AAF; white-space:normal">Courage</span></a></span></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Pocket_Pistol.png',
        description:
          'Active: Kled sprays a cone of five pellets in the target direction while  recoiling 300 units in the opposite direction, dealing physical damage to enemies hit.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Kled</b> sprays a cone of five <i>pellets</i> in the target direction while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">recoiling</a></span> 300 units in the opposite direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: 'Kled sprays a cone of five pellets in the target direction while  recoiling 300 units in the opposite direction, dealing physical damage to enemies hit.',
            damagetype: 'Physical',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'sprays a cone of five pellets in the target direction while  recoiling 300 units in the opposite direction, dealing physical damage to enemies hit.',
            pre: 'Kled sprays a cone of five pellets in the target direction while  recoiling 300 units in the opposite direction, dealing physical damage to enemies hit.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '35 / 50 / 65 / 80 / 95 (+ 80% bonus AD)',
            valuesHTML:
              '35 / 50 / 65 / 80 / 95 <span style="color:orange; white-space:normal">(+&nbsp;80% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '35 / 50 / 65 / 80 / 95 (+ 80% bonus AD)',
            damagetype: 'Physical',
            values: [35, 50, 65, 80, 95],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 50 / 65 / 80 / 95',
            children: [
              {
                values: 80,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 80% bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Kled periodically stocks a Pocket Pistol charge, up to a maximum of 2. He will store charges even while  mounted.',
        descriptionHTML:
          '<b>Kled</b> periodically <a href="/wiki/Stock" class="mw-redirect" title="Stock">stocks</a> a <i>Pocket Pistol</i> charge, up to a maximum of 2. He will store charges even while <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Skaarl the Cowardly Lizard" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Skaarl_the_Cowardly_Lizard" title="mounted"><img alt="mounted" src="/wiki/images/Kled_Skaarl_the_Cowardly_Lizard.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Skaarl_the_Cowardly_Lizard" title="Kled/LoL">mounted</a></span></span>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Kled periodically stocks a Pocket Pistol charge, up to a maximum of 2',
            values: 2,
            user: 'none',
            units: '',
            unitsText:
              'periodically stocks a Pocket Pistol charge, up to a maximum of 2',
            pre: 'Kled periodically stocks a Pocket Pistol charge, up to a maximum of 2',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Pellets collide with the first enemy champion they hit, and deal 20% damage per pellet beyond the first. Each pellet that hits an enemy  champion or epic  monster restores  Courage, by 5 and 2.5 respectively.',
        descriptionHTML:
          '<i>Pellets</i> collide with the first enemy champion they hit, and deal 20% damage per <i>pellet</i> beyond the first. Each <i>pellet</i> that hits an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or epic <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span> restores <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Skaarl the Cowardly Lizard 3" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Skaarl_the_Cowardly_Lizard_3" title="Courage"><img alt="Courage" src="/wiki/images/Kled_Skaarl_the_Cowardly_Lizard_3.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Skaarl_the_Cowardly_Lizard_3" title="Kled/LoL">Courage</a></span></span></i>, by 5 and 2.<small>5</small> respectively.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Pellets collide with the first enemy champion they hit, and deal 20% damage per pellet beyond the first',
            damagetype: 'None',
            values: 2,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'damage per pellet beyond the firstcollide with the first enemy champion they hit, and deal 20',
            pre: 'Pellets collide with the first enemy champion they hit, and deal 20% damage per pellet beyond the first',
          },
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'Each pellet that hits an enemy  champion or epic  monster restores  Courage, by 5 and 2.5 respectively.',
            values: 5,
            user: 'none',
            units: '',
            unitsText:
              'pellet that hits an enemy  champion or epic  monster restores  Courage, by 5 and 2.5 respectively.',
            pre: 'Each pellet that hits an enemy  champion or epic  monster restores  Courage, by 5 and 2.5 respectively.',
          },
        ],
        leveling: [
          {
            name: 'Reduced Damage:',
            values: '7 / 10 / 13 / 16 / 19 (+ 16% bonus AD)',
            valuesHTML:
              '7 / 10 / 13 / 16 / 19 <span style="color:orange; white-space:normal">(+&nbsp;16% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Reduced Damage:',
            raw: '7 / 10 / 13 / 16 / 19 (+ 16% bonus AD)',
            damagetype: 'None',
            values: [7, 10, 13, 16, 19],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '7 / 10 / 13 / 16 / 19',
            children: [
              {
                values: 16,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 16% bonus AD',
              },
            ],
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
      '* The backwards dash from <i>Pocket Pistol</i> can pass terrain.\n<ul><li><i>Pocket Pistol</i> can be cast while <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ground"><a href="/wiki/Ground" title="Ground"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Ground" class="mw-redirect" title="Ground">grounded</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Root"><a href="/wiki/Root" title="Root"><img alt="Root icon.png" src="/wiki/images/Root_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Root" class="mw-redirect" title="Root">rooted</a></span> but <b>Kled</b> will not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> backwards.</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li>\n<li><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Black Cleaver" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Black_Cleaver" title="Black Cleaver"><img alt="Black Cleaver" src="/wiki/images/Black_Cleaver_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Black_Cleaver" title="Black Cleaver">Black Cleaver</a></span></span> will specifically apply a stack for every pellet hit.</li></ul>',
    video: 'Kled - Q (Unmounted)',
  },
  'Violent Tendencies': {
    name: 'Violent Tendencies',
    display_name: 'Violent Tendencies',
    champion: 'Kled',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'KledW.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 240,
      y: 96,
      w: 48,
      h: 48,
    },
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts after the attacks time out or are consumed.">11 / 9.<small>5</small> / 8 / 6.<small>5</small> / 5</span>',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL" title="Kled"><img alt="Kled" src="/wiki/images/Kled_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL" title="Kled/LoL">Kled</a></span></span> periodically gains <i>Violent Tendencies</i>, which starts expiring upon his next basic attack.',
      '<span class="template_sbc"><b>Violent Tendencies:</b></span> <b>Kled</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span> on his next 4 basic attacks within a few seconds. The final attack deals <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> based on the <span style="color: #1F995C; white-space:normal">target\'s <b>maximum</b> health</span>.',
    ],
    description: [
      {
        description:
          'Passive: Kled periodically gains Violent Tendencies, which starts expiring upon his next basic attack.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Kled</b> periodically gains <i>Violent Tendencies</i>, which starts expiring upon his next basic attack.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Violent_Tendencies.png',
        description:
          'Violent Tendencies: Kled gains  150% bonus attack speed on his next 4 basic attacks within 4 seconds. The fourth attack deals bonus physical damage, capped against  monsters.',
        descriptionHTML:
          '<span class="template_sbc"><b>Violent Tendencies:</b></span> <b>Kled</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal">150% <b>bonus</b> attack speed</span></span> on his next 4 basic attacks within 4 seconds. The fourth attack deals <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span>, capped against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Violent Tendencies:',
            raw: 'Kled gains  150% bonus attack speed on his next 4 basic attacks within 4 seconds',
            increasedStat: 'bonus_ad',
            values: 1,
            valuesIsPercent: true,
            units: '',
            unitsText:
              'bonus attack speed on his next 4 basic attacks within 4 secondsgains  150',
            pre: 'Kled gains  150% bonus attack speed on his next 4 basic attacks within 4 seconds',
          },
        ],
        leveling: [
          {
            name: 'Bonus Physical Damage:',
            values:
              "20 / 30 / 40 / 50 / 60 (+ 4.5 / 5 / 5.5 / 6 / 6.5% (+ 5% per 100 bonus AD) of target's maximum health)",
            valuesHTML:
              '20 / 30 / 40 / 50 / 60 <span style="color: #1F995C; white-space:normal">(+&nbsp;4.<small>5</small> / 5 / 5.<small>5</small> / 6 / 6.<small>5</small>% <span style="color:orange; white-space:normal">(+&nbsp;5% per 100 <b>bonus</b> AD)</span> of target\'s <b>maximum</b> health)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Bonus Physical Damage:',
            raw: "20 / 30 / 40 / 50 / 60 (+ 4.5 / 5 / 5.5 / 6 / 6.5% (+ 5% per 100 bonus AD) of target's maximum health)",
            healType: 'PhysicalVamp',
            values: [20, 30, 40, 50, 60],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 30 / 40 / 50 / 60',
            children: [
              {
                values: [4.5, 5, 5.5, 6, 6.5],
                valuesIsPercent: true,
                user: 'target',
                units: 'maximum_hp',
                unitsText: "of target's maximum health",
                pre: '+ 4.5 / 5 / 5.5 / 6 / 6.5%',
                post: "of target's maximum health",
                children: [
                  {
                    values: 5,
                    valuesIsPercent: true,
                    units: 'bonus_ad',
                    unitsText: 'per 100 bonus AD',
                    pre: '+ 5% per 100 bonus AD',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description: 'Turrets are only affected by the base damage.',
        descriptionHTML:
          '<i><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">Turrets</a></span> are only affected by the base damage.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'Proc',
    spellshield: false,
    notes:
      '* The bonus damage applies <span style="white-space:nowrap"><a href="/wiki/Life_steal" title="Life steal"><img alt="Life steal icon.png" src="/wiki/images/Life_steal_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Life_steal" title="Life steal">life steal</a></span>.\n<ul><li>Attacking a <a href="/wiki/Jungle_plants" title="Jungle plants">plant</a> will not activate the effect.\n<ul><li>This is intentional to prevent <b>Kled</b> from "wasting" the cooldown.</li></ul></li></ul>',
    video: 'Kled - W',
  },
  Jousting: {
    name: 'Jousting',
    display_name: 'Jousting',
    champion: 'Kled',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'KledE.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 288,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '550 / 700',
    cast_time: 'none',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts after dash is complete. If recast is available, starts after completing the second dash.">13 / 12 / 11 / 10 / 9</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><img alt="Kled Skaarl the Cowardly Lizard 3.png" src="/wiki/images/Kled_Skaarl_the_Cowardly_Lizard_3.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></span></span> <b>Skaarl</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies he passes through and marking enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champions"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champions</a></span> hit. The mark <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">reveals</a></span> the target for a short time, during which <i>Jousting</i> can be recast.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Skaarl</b> consumes the mark to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> through the marked target.',
    ],
    description: [
      {
        icon: '/wiki/images/Jousting.png',
        description:
          'Active: Skaarl  dashes in the target direction, though not through terrain, dealing physical damage to enemies he passes through and  pulling  minions and small  monsters hit towards them.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Skaarl</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction, though not through terrain, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies he passes through and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">pulling</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and small <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span> hit towards them.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical Damage:',
            values: '35 / 60 / 85 / 110 / 135 (+ 65% bonus AD)',
            valuesHTML:
              '35 / 60 / 85 / 110 / 135 <span style="color:orange; white-space:normal">(+&nbsp;65% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '35 / 60 / 85 / 110 / 135 (+ 65% bonus AD)',
            damagetype: 'Physical',
            values: [35, 60, 85, 110, 135],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '35 / 60 / 85 / 110 / 135',
            children: [
              {
                values: 65,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 65% bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Upon hitting an enemy  champion or large  monster, Skaarl  dashes a fixed 200-units through them, marking them for 3 seconds, during which they are  revealed. After the dash ends, the duo gain  50% bonus movement speed for 1 second. Jousting can be recast after 0.5 seconds of the first dash ending while the target is marked.',
        descriptionHTML:
          'Upon hitting an enemy <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Champion"><a href="/wiki/Champion" title="Champion"><img alt="Champion icon.png" src="/wiki/images/Champion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion" title="Champion">champion</a></span> or large <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>, <b>Skaarl</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> a fixed <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="estimated">200</span>-units through them, marking them for 3 seconds, during which they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="True sight"><a href="/wiki/Sight#True_sight" title="Sight#True sight"><img alt="True Sight icon.png" src="/wiki/images/True_Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight#True_sight" title="Sight">revealed</a></span>. After the dash ends, the duo gain <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">50% <b>bonus</b> movement speed</span></span> for 1 second. <i>Jousting</i> can be recast after 0.<small>5</small> seconds of the first dash ending while the target is marked.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'Upon hitting an enemy  champion or large  monster, Skaarl  dashes a fixed 200-units through them, marking them for 3 seconds, during which they are  revealed',
            values: 2,
            units: 'kindredMarks',
            unitsText:
              'hitting an enemy  champion or large  monster, Skaarl  dashes a fixed 200-units through them, marking them for 3 seconds, during which they are  revealed',
            pre: 'Upon hitting an enemy  champion or large  monster, Skaarl  dashes a fixed 200-units through them, marking them for 3 seconds, during which they are  revealed',
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'After the dash ends, the duo gain  50% bonus movement speed for 1 second',
            values: 5,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'bonus movement speed for 1 secondthe dash ends, the duo gain  50',
            pre: 'After the dash ends, the duo gain  50% bonus movement speed for 1 second',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Jousting_2.png',
        description:
          'Recast: Skaarl consumes the mark to  dash through the marked target, applying the same effects as the first cast.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Skaarl</b> consumes the mark to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dash</a></span> through the marked target, applying the same effects as the first cast.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Total Physical Damage:',
            values: '70 / 120 / 170 / 220 / 270 (+ 130% bonus AD)',
            valuesHTML:
              '70 / 120 / 170 / 220 / 270 <span style="color:orange; white-space:normal">(+&nbsp;130% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Total Physical Damage:',
            raw: '70 / 120 / 170 / 220 / 270 (+ 130% bonus AD)',
            damagetype: 'Physical',
            values: [70, 120, 170, 220, 270],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '70 / 120 / 170 / 220 / 270',
            children: [
              {
                values: 130,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 130% bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'The mark will remain even if the target dies, and ends prematurely if the duo are too far away or Kled  dismounts.',
        descriptionHTML:
          'The mark will remain even if the target dies, and ends prematurely if the duo are too far away or <b>Kled</b> <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Dismounted Skaarl the Cowardly Lizard" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Dismounted_Skaarl_the_Cowardly_Lizard" title="dismounts"><img alt="dismounts" src="/wiki/images/Kled_Dismounted_Skaarl_the_Cowardly_Lizard.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Dismounted_Skaarl_the_Cowardly_Lizard" title="Kled/LoL">dismounts</a></span></span></i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Bear Trap on a Rope and  Chaaaaaaaarge!!! can be cast during either of the dashes.',
        descriptionHTML:
          '<i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Bear Trap on a Rope" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Bear_Trap_on_a_Rope" title="Bear Trap on a Rope"><img alt="Bear Trap on a Rope" src="/wiki/images/Kled_Bear_Trap_on_a_Rope.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Bear_Trap_on_a_Rope" title="Kled/LoL">Bear Trap on a Rope</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Chaaaaaaaarge!!!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Chaaaaaaaarge!!!" title="Chaaaaaaaarge!!!"><img alt="Chaaaaaaaarge!!!" src="/wiki/images/Kled_Chaaaaaaaarge%21%21%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Chaaaaaaaarge!!!" title="Kled/LoL">Chaaaaaaaarge!!!</a></span></span> can be cast during either of the dashes.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting:
      '<a href="/wiki/Direction-targeted" class="mw-redirect" title="Direction-targeted">Direction</a> / <a href="/wiki/Auto-targeted" class="mw-redirect" title="Auto-targeted">Auto</a>',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'special',
    spellshield: true,
    notes:
      '* Both casts count as ability activations for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li><i>Jousting</i> deals <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span> to all champions and large/epic monsters it hits, but <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell damage"><a href="/wiki/Damage" title="Damage"><img alt="Disintegrate.png" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">spell damage</a></span> to all other struck targets.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup>\n<ul><li>For this reason, <i>Jousting</i> kills <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yorick" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yorick/LoL" title="Yorick\'s"><img alt="Yorick\'s" src="/wiki/images/Yorick_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yorick/LoL" title="Yorick/LoL">Yorick\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Yorick" data-ability="Shepherd of Souls" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Yorick/LoL#Shepherd_of_Souls" title="Mist Walkers"><img alt="Mist Walkers" src="/wiki/images/Yorick_Shepherd_of_Souls.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Yorick/LoL#Shepherd_of_Souls" title="Yorick/LoL">Mist Walkers</a></span></span> and <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zyra" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zyra/LoL" title="Zyra\'s"><img alt="Zyra\'s" src="/wiki/images/Zyra_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zyra/LoL" title="Zyra/LoL">Zyra\'s</a></span></span> grown plants in one hit.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup></li></ul></li>\n<li>Casting <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Chaaaaaaaarge!!!" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Chaaaaaaaarge!!!" title="Chaaaaaaaarge!!!"><img alt="Chaaaaaaaarge!!!" src="/wiki/images/Kled_Chaaaaaaaarge%21%21%21.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Chaaaaaaaarge!!!" title="Kled/LoL">Chaaaaaaaarge!!!</a></span></span> during <i>Jousting</i> will not interrupt the dash.</li>\n<li>Recasting <i>Jousting</i> while outside of maximum range will cause the ability to go on cooldown without activation.</li>\n<li><i>Jousting</i> can be recast even while the target is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>.</li></ul>',
    video: 'Kled - E',
  },
  'Unmounted Jousting': {
    name: 'Unmounted Jousting',
    display_name: 'Jousting',
    champion: 'Kled',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'KledE.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 288,
      y: 96,
      w: 48,
      h: 48,
    },
    blurb: [],
    description: [
      {
        icon: '/wiki/images/Unmounted_Jousting.png',
        description: 'This ability is unusable while  unmounted.',
        descriptionHTML:
          'This ability is unusable while <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Dismounted Skaarl the Cowardly Lizard" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Dismounted_Skaarl_the_Cowardly_Lizard" title="unmounted"><img alt="unmounted" src="/wiki/images/Kled_Dismounted_Skaarl_the_Cowardly_Lizard.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Dismounted_Skaarl_the_Cowardly_Lizard" title="Kled/LoL">unmounted</a></span></span></i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'N/A',
    affects: '',
    notes: '* No additional details.',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Kled_Original_Move_1_14.ogg   "Skaarl! Come back, buddy! Skaarl?"',
  },
  'Chaaaaaaaarge!!!': {
    name: 'Chaaaaaaaarge!!!',
    display_name: 'Chaaaaaaaarge!!!',
    champion: 'Kled',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'KledR.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 336,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '3500 / 3750 / 4000 / 4250 / 4500',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dash speed on enemy champion">950</span>',
    cast_time: 'none',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">140 / 132.<small>5</small> / 125 / 117.<small>5</small> / 110</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <b>Kled</b> &amp; <b>Skaarl</b>  <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">unstoppably</a></span> charge to a location, building up <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> and leaving a draft in their wake that grants <i>Mr. Kled\'s Wild Ride</i> to allied champions that follow the draft.',
      '<b>Skaarl</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> to the first enemy champion encountered, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocking them back</a></span>, and dealing <span style="color: #FF8C34; white-space:normal">physical damage</span> based on travel time.',
      '<span class="template_sbc"><b>Mr. Kled\'s Wild Ride:</b></span> Gain a large amount of <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">movement speed</span></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Chaaaaaaaarge!!!.png',
        description:
          "Active: Kled & Skaarl charge toward the target location, automatically navigating terrain along the way, during which they're  ghosted and  immune to crowd control. If the charge does not complete within 15 seconds, it will end prematurely. The charge is interrupted instantly if Kled  dismounts during it.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Kled</b> &amp; <b>Skaarl</b> charge toward the target location, automatically navigating terrain along the way, during which they\'re <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Ghosted"><a href="/wiki/Unit_collision" title="Unit collision"><img alt="Ghost.png" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Unit_collision" title="Unit collision">ghosted</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">immune to crowd control</a></span>. If the charge does not complete within 15 seconds, it will end prematurely. The charge is interrupted instantly if <b>Kled</b> <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Dismounted Skaarl the Cowardly Lizard" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Dismounted_Skaarl_the_Cowardly_Lizard" title="dismounts"><img alt="dismounts" src="/wiki/images/Kled_Dismounted_Skaarl_the_Cowardly_Lizard.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Dismounted_Skaarl_the_Cowardly_Lizard" title="Kled/LoL">dismounts</a></span></span></i> during it.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 2:',
            raw: 'If the charge does not complete within 15 seconds, it will end prematurely',
            values: 1,
            user: 'none',
            units: '',
            unitsText:
              'the charge does not complete within 15 seconds, it will end prematurely',
            pre: 'If the charge does not complete within 15 seconds, it will end prematurely',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Chaaaaaaaarge!!!_2.png',
        description:
          "While charging, the duo gain  bonus movement speed and a  shield for every 0.25 seconds of traveling, up to 950 total movement speed over 3 seconds and 10% − 100% (based on time traveling) of the maximum shield amount over 2.25 seconds respectively. The shield lasts for 2 seconds upon finishing the charge. The duo trails a directional draft in their wake, lasting 9 seconds. Allied champions following the draft gain Mr. Kled's Wild Ride.",
        descriptionHTML:
          'While charging, the duo gain <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> and a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shield</a></span> for every 0.<small>25</small> seconds of traveling, up to <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="after movement speed soft caps"><span style="color: #F5EE99; white-space:normal">950 <b>total</b> movement speed</span></span> over 3 seconds and <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_label="Shield Percentage" data-top_label="time traveling" data-displayformula="(\'\'\'maximum\'\'\' shield)/10*((time+0.25)/0.25). \'\'This is capped at 2.25 seconds of time active.\'\'" data-bot_values="10;20;30;40;50;60;70;80;90;100" data-top_values="0;0.25;0.5;0.75;1;1.25;1.5;1.75;2;2.25" data-bot_key="%">10% − 100% (based on time traveling)</span> of the <b>maximum</b> shield amount over 2.<small>25</small> seconds respectively. The shield lasts for 2 seconds upon finishing the charge. The duo trails a directional draft in their wake, lasting 9 seconds. Allied champions following the draft gain <i>Mr. Kled\'s Wild Ride</i>.',
        descriptionRatios: [
          {
            effectType: 'Shield',
            name: 'Line 2:',
            raw: 'The shield lasts for 2 seconds upon finishing the charge',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: 2,
            user: 'none',
            units: '',
            unitsText: 'shield lasts for 2 seconds upon finishing the charge',
            pre: 'The shield lasts for 2 seconds upon finishing the charge',
          },
          {
            effectType: 'Unique',
            name: 'Line 3:',
            raw: 'The duo trails a directional draft in their wake, lasting 9 seconds',
            values: 9,
            user: 'none',
            units: '',
            unitsText:
              'duo trails a directional draft in their wake, lasting 9 seconds',
            pre: 'The duo trails a directional draft in their wake, lasting 9 seconds',
          },
        ],
        leveling: [
          {
            name: 'Minimum Shield:',
            values: '20 / 25 / 30 / 35 / 40 (+ 30% bonus AD)',
            valuesHTML:
              '20 / 25 / 30 / 35 / 40 <span style="color:orange; white-space:normal">(+&nbsp;30% <b>bonus</b> AD)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Shield',
            name: 'Minimum Shield:',
            raw: '20 / 25 / 30 / 35 / 40 (+ 30% bonus AD)',
            damagetype: 'None',
            shieldType: 'SelfShield',
            values: [20, 25, 30, 35, 40],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 25 / 30 / 35 / 40',
            children: [
              {
                values: 30,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 30% bonus AD',
              },
            ],
          },
        ],
      },
      {
        icon: '/wiki/images/undefined',
        description: "Mr. Kled's Wild Ride: Gain 650 total movement speed.",
        descriptionHTML:
          '<span class="template_sbc"><b>Mr. Kled\'s Wild Ride:</b></span> Gain <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="after movement speed soft caps"><span style="color: #F5EE99; white-space:normal">650 <b>total</b> movement speed</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: "Kled's Wild Ride:",
            raw: 'Gain 650 total movement speed.',
            values: 6,
            user: 'none',
            units: '',
            unitsText: '650 total movement speed.',
            pre: 'Gain 650 total movement speed.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/undefined',
        description:
          'Skaarl  dashes toward the first enemy champion in range, colliding with the first  visible enemy champion in his path to deal physical damage, increased by 0% − 200% (based on time traveling), and  knock them back 100 units, though not through terrain.',
        descriptionHTML:
          '<b>Skaarl</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> toward the first enemy champion in range, colliding with the first <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">visible</a></span> enemy champion in his path to deal <span style="color: #FF8C34; white-space:normal">physical damage</span>, increased by <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-bot_label="Damage Increase" data-top_label="time traveling" data-displayformula="8% increase per 0.16 seconds. \'\'This is capped at 4 seconds of time active.\'\'" data-bot_values="0;8;16;24;32;40;48;56;64;72;80;88;96;104;112;120;128;136;144;152;160;168;176;184;192;200" data-top_values="0;0.16;0.32;0.48;0.64;0.8;0.96;1.12;1.28;1.44;1.6;1.76;1.92;2.08;2.24;2.4;2.56;2.72;2.88;3.04;3.2;3.36;3.52;3.68;3.84;4" data-bot_key="%">0% − 200% (based on time traveling)</span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knock them back</a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">100</span> units, though not through terrain.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Minimum Physical Damage:',
            values:
              "4 / 4.5 / 5 / 5.5 / 6% (+ 4% per 100 bonus AD) of target's maximum health",
            valuesHTML:
              '<span style="color: #1F995C; white-space:normal">4 / 4.<small>5</small> / 5 / 5.<small>5</small> / 6% <span style="color:orange; white-space:normal">(+&nbsp;4% per 100 <b>bonus</b> AD)</span> of target\'s <b>maximum</b> health</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Minimum Physical Damage:',
            raw: "4 / 4.5 / 5 / 5.5 / 6% (+ 4% per 100 bonus AD) of target's maximum health",
            healType: 'PhysicalVamp',
            values: [4, 4.5, 5, 5.5, 6],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: '4 / 4.5 / 5 / 5.5 / 6%',
            post: "of target's maximum health",
            children: [
              {
                values: 4,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'per 100 bonus AD',
                pre: '+ 4% per 100 bonus AD',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Physical',
    spelleffects: 'spell',
    spellshield: true,
    notes:
      '* <b>Kled</b> and <b>Skaarl</b> will track the target if they change locations.\n<ul><li><ul><li>They will dash to the target\'s previous location if the target is too far away or moves beyond <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Estimated">2500</span> units.</li></ul></li>\n<li>During the charge the duo gain:\n<ul><li>(950&nbsp;−&nbsp;(<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="after movement speed soft caps"><b>current</b> movement speed</span>))&nbsp;÷&nbsp;12&nbsp;×&nbsp;(time&nbsp;÷&nbsp;0.<small>25</small>) <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></li></ul></li>\n<li><b>Kled</b> and <b>Skaarl</b> are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">immune to crowd control</a></span> during the charge as well while dashing to the target.</li>\n<li>The bonus movement speed is not affected by <a href="/wiki/Movement_speed" title="Movement speed">movement speed caps</a>.</li>\n<li>The charge will not give any movement speed to <b>Kled</b> if he has more than <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Raw movement speed">1440</span> movement speed.</li>\n<li>The trail will not give <b>Kled</b> and his allies any movement speed if they have more than <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Raw movement speed">840</span> movement speed.</li>\n<li>Movement speed is granted merely by facing the direction of the draft.</li>\n<li>Enemies gain partial vision of <b>Kled</b> when he charges nearby.</li>\n<li><b>Kled</b> will re-path if his current pathing is blocked by a newly created terrain (either player created or by the <span class="inline-image unit-icon label-after" style="display:inline;white-space:pre;" data-param=""><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mountain_Drake" title="Mountainous Rift"><img alt="Mountainous Rift" src="/wiki/images/Mountain_DrakeSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mountain_Drake" title="Mountain Drake">Mountainous Rift</a></span></span>).</li>\n<li>The charge will not be interrupted if <b>Kled\'s</b> location changes drastically.</li>\n<li>The following table refers for interactions while <b>Kled</b> is charging:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n\n<tbody><tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Allowed, but cannot input movement commands.\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All items are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Mark" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mark" title="Mark"><img alt="Mark" src="/wiki/images/Mark.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mark" title="Mark">Mark</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Dash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mark#Dash" title="Dash"><img alt="Dash" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mark#Dash" title="Mark">Dash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td>N/A\n</td></tr></tbody></table>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Kled_Original_R_SFX_0.ogg   Charge alert.',
    video: 'Kled - R',
  },
  'Unmounted Chaaaaaaaarge!!!': {
    name: 'Unmounted Chaaaaaaaarge!!!',
    display_name: 'Chaaaaaaaarge!!!',
    champion: 'Kled',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'KledR.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 336,
      y: 96,
      w: 48,
      h: 48,
    },
    blurb: [],
    description: [
      {
        icon: '/wiki/images/Unmounted_Chaaaaaaaarge!!!.png',
        description: 'This ability is unusable while  unmounted.',
        descriptionHTML:
          'This ability is unusable while <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kled" data-ability="Dismounted Skaarl the Cowardly Lizard" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kled/LoL#Dismounted_Skaarl_the_Cowardly_Lizard" title="unmounted"><img alt="unmounted" src="/wiki/images/Kled_Dismounted_Skaarl_the_Cowardly_Lizard.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kled/LoL#Dismounted_Skaarl_the_Cowardly_Lizard" title="Kled/LoL">unmounted</a></span></span></i>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'N/A',
    affects: '',
    notes: '* No additional details.',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Kled_Original_Dismounted_Recall.ogg   "Skaarl? Skaarl!?!"',
  },
} satisfies { [skillName in string]: SkillData };
