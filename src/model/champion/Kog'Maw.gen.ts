import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = "Kog'Maw";

export default {
  'Icathian Surprise': {
    name: 'Icathian Surprise',
    display_name: 'Icathian Surprise',
    champion: "Kog'Maw",
    skill: 'I',
    image: {
      full: 'KogMaw_IcathianSurprise.png',
      sprite: 'passive2.png',
      group: 'passive',
      x: 144,
      y: 0,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 400',
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> Upon <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dying</a></span>, <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kog\'Maw" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kog%27Maw/LoL" title="Kog\'Maw"><img alt="Kog\'Maw" src="/wiki/images/Kog%27Maw_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kog%27Maw/LoL" title="Kog\'Maw/LoL">Kog\'Maw</a></span></span> enters an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Zombie state"><a href="/wiki/Death#Zombie_states" title="Death#Zombie states"><img alt="Zombie icon.png" src="/wiki/images/Zombie_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Zombie_states" title="Death">zombie state</a></span> for a few seconds, gradually gaining <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span>. He explodes at the end of the duration, dealing <span style="color: #F9966B; white-space:normal">true damage</span> to nearby enemies.',
    ],
    description: [
      {
        icon: '/wiki/images/Icathian Surprise.png',
        description:
          "Innate: Upon taking  fatal damage, Kog'Maw enters a  zombie state for 4 seconds, gaining up to  40% bonus movement speed over the duration. At the end of the duration, he explodes to deal  125 − 550 (based on level) true damage to nearby enemies.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> Upon taking <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">fatal damage</a></span>, <b>Kog\'Maw</b> enters a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Zombie state"><a href="/wiki/Death#Zombie_states" title="Death#Zombie states"><img alt="Zombie icon.png" src="/wiki/images/Zombie_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Zombie_states" title="Death">zombie state</a></span> for 4 seconds, gaining up to <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">40% <b>bonus</b> movement speed</span></span> over the duration. At the end of the duration, he explodes to deal <span style="white-space:nowrap"><a href="/wiki/True_damage" title="True damage"><img alt="Hybrid penetration icon.png" src="/wiki/images/Hybrid_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F9966B; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-start="125;" data-finish="550;" data-bot_values="125;150;175;200;225;250;275;300;325;350;375;400;425;450;475;500;525;550" data-top_values="">125 − 550 (based on level)</span> true damage</span></span> to nearby enemies.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Innate:',
            raw: " Upon taking  fatal damage, Kog'Maw enters a  zombie state for 4 seconds, gaining up to  40% bonus movement speed over the duration",
            values: 4,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              "bonus movement speed over the durationtaking  fatal damage, Kog'Maw enters a  zombie state for 4 seconds, gaining up to  40",
            pre: "Upon taking  fatal damage, Kog'Maw enters a  zombie state for 4 seconds, gaining up to  40% bonus movement speed over the duration",
          },
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'At the end of the duration, he explodes to deal  125 − 550 (based on level) true damage to nearby enemies.',
            damagetype: 'True',
            values: [
              125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425,
              450, 475, 500, 525, 550,
            ],
            basedOn: 'level',
            user: 'none',
            units: '',
            unitsText: 'true damage to nearby enemies.',
            pre: 'At the end of the duration, he explodes to deal  125 − 550',
            post: 'true damage to nearby enemies.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "While under this state, Kog'Maw becomes  invulnerable,  untargetable, and  immune to crowd control, but is also rendered unable to declare basic attacks, cast abilities, use summoner spells, and activate items.",
        descriptionHTML:
          'While under this state, <b>Kog\'Maw</b> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Invulnerability"><a href="/wiki/Invulnerability" title="Invulnerability"><img alt="Cosmic Radiance.png" src="/wiki/images/Taric_Cosmic_Radiance.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Invulnerability" title="Invulnerability">invulnerable</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">immune to crowd control</a></span>, but is also rendered unable to declare <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a>, cast <a href="/wiki/Champion_ability" title="Champion ability">abilities</a>, use <a href="/wiki/Summoner_spell" title="Summoner spell">summoner spells</a>, and <a href="/wiki/Active_ability_items" title="Active ability items">activate items</a>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Enemies',
    damagetype: 'True',
    spelleffects: 'Area of effect',
    spellshield: true,
    notes:
      '* <i>Icathian Surprise\'s</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetability"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetability</a></span> does not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Homing projectile destruction"><a href="/wiki/Projectile" title="Projectile"><img alt="Bullet strikethrough.png" src="/wiki/images/Bullet_strikethrough.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">destroy</a></span> in-flight <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectiles"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">projectiles</a></span>.\n<ul><li>After <i>Icathian Surprise</i> ends, the corpse of <b>Kog\'Maw</b> will retain <a href="/wiki/Unit_collision" title="Unit collision">unit collision</a> for the duration of his death animation.</li>\n<li><i>Icathian Surprise</i> will still trigger if <b>Kog\'Maw</b> is killed by the <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Nexus obelisk"><a href="/wiki/Nexus_Obelisk" title="Nexus Obelisk"><img alt="Nexus Obelisk.png" src="/wiki/images/Nexus_Obelisk.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Nexus_Obelisk" title="Nexus Obelisk">Nexus Obelisk</a></span>.</li>\n<li>If <b>Kog\'Maw</b> has the missile from a basic attack in-flight at the same time that he\'s moving while he dies, as long as the missile hits the target after <i>Icathian Surprise</i> has started, <b>Kog\'Maw</b> will be able to use a basic attack once during <i>Icathian Surprise</i>.</li>\n<li><b>Kog\'Maw\'s</b> usable <a href="/wiki/Summoner_spell" title="Summoner spell">summoner spells</a> will be placed on a 5 second cooldown upon becoming a zombie.</li>\n<li>During <i>Icathian Surprise</i>, <b>Kog\'Maw\'s</b> <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<a href="/wiki/Range" title="Range">attack range</a></span> is reduced<span id="container" class="container" style="cursor:help;"><span class="flipText1 active">「&nbsp;to 0&nbsp;」</span><span class="flipText2">「&nbsp;by 500&nbsp;」</span></span>, making him automatically path near enemies he is trying to target.</li>\n<li>Zombie states trigger upon taking <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">lethal damage</a></span>.\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Raw damage"><a href="/wiki/Damage" title="Damage"><img alt="Fear Beyond Death 2.png" src="/wiki/images/Urgot_Fear_Beyond_Death_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">Raw damage</a></span> effects will not prevent zombie states from triggering.</li></ul></li>\n<li>All <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span> effects will take precedence over effects that reanimate as a zombie.</li>\n<li>A champion that enters a zombie state will start their death timer upon triggering the effect.</li>\n<li>Most buffs and debuffs will be lost upon transitioning into a zombie state.\n<ul><li>Those that persist through death, such as <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Brand" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Brand/LoL" title="Brand\'s"><img alt="Brand\'s" src="/wiki/images/Brand_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Brand/LoL" title="Brand/LoL">Brand\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Brand" data-ability="Blaze" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Brand/LoL#Blaze" title="Blaze"><img alt="Blaze" src="/wiki/images/Brand_Blaze.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Brand/LoL#Blaze" title="Brand/LoL">Blaze</a></span></span></span>, will remain.</li>\n<li>Undisplayed marker buffs, such as those imposed by <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Veigar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Veigar/LoL" title="Veigar\'s"><img alt="Veigar\'s" src="/wiki/images/Veigar_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Veigar/LoL" title="Veigar/LoL">Veigar\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Veigar" data-ability="Event Horizon" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Veigar/LoL#Event_Horizon" title="Event Horizon"><img alt="Event Horizon" src="/wiki/images/Veigar_Event_Horizon.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Veigar/LoL#Event_Horizon" title="Veigar/LoL">Event Horizon</a></span></span></span> and <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viktor" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viktor/LoL" title="Viktor\'s"><img alt="Viktor\'s" src="/wiki/images/Viktor_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viktor/LoL" title="Viktor/LoL">Viktor\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viktor" data-ability="Gravity Field" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viktor/LoL#Gravity_Field" title="Gravity Field"><img alt="Gravity Field" src="/wiki/images/Viktor_Gravity_Field.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viktor/LoL#Gravity_Field" title="Viktor/LoL">Gravity Field</a></span></span></span> to prevent being affected multiple times by the same effect, will be lost.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li>\n<li>This does not apply when transitioning from one zombie state to another zombie state.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul></li>\n<li>Units within a zombie state cannot:\n<ul><li>Use <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> or <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Corrupting Potion" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Corrupting_Potion" title="Corrupting Potion"><img alt="Corrupting Potion" src="/wiki/images/Corrupting_Potion_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Corrupting_Potion" title="Corrupting Potion">Corrupting Potion</a></span></span> / <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Refillable Potion" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Refillable_Potion" title="Refillable Potion"><img alt="Refillable Potion" src="/wiki/images/Refillable_Potion_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Refillable_Potion" title="Refillable Potion">Refillable Potion</a></span></span>.</li>\n<li>Activate <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span> effects.</li>\n<li>Take <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Thresh" data-ability="Dark Passage" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Thresh/LoL#Dark_Passage" title="Dark Passage"><img alt="Dark Passage" src="/wiki/images/Thresh_Dark_Passage.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Thresh/LoL#Dark_Passage" title="Thresh/LoL">Dark Passage</a></span></span>, <a href="/wiki/Catapult" title="Catapult">Catapult</a>, or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Gate"><a href="/wiki/Gate" class="mw-disambig" title="Gate">gates</a></span>.</li>\n<li>Pick up the <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Eye of the Herald" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Eye_of_the_Herald" title="Eye of the Herald"><img alt="Eye of the Herald" src="/wiki/images/Eye_of_the_Herald_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Eye_of_the_Herald" title="Eye of the Herald">Eye of the Herald</a></span></span>.</li>\n<li>Be targeted by the following:\n<ul><li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renata Glasc" data-ability="Bailout" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renata_Glasc/LoL#Bailout" title="Bailout"><img alt="Bailout" src="/wiki/images/Renata_Glasc_Bailout.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renata_Glasc/LoL#Bailout" title="Renata Glasc/LoL">Bailout</a></span></span></li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zilean" data-ability="Chronoshift" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zilean/LoL#Chronoshift" title="Chronoshift"><img alt="Chronoshift" src="/wiki/images/Zilean_Chronoshift.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zilean/LoL#Chronoshift" title="Zilean/LoL">Chronoshift</a></span></span></li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayn" data-ability="Umbral Trespass" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayn/LoL#Umbral_Trespass" title="Umbral Trespass"><img alt="Umbral Trespass" src="/wiki/images/Kayn_Umbral_Trespass.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayn/LoL#Umbral_Trespass" title="Kayn/LoL">Umbral Trespass</a></span></span>.</li></ul></li>\n<li>Be affected by the following:\n<ul><li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Senna" data-ability="Curse of the Black Mist" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Senna/LoL#Curse_of_the_Black_Mist" title="Curse of the Black Mist"><img alt="Curse of the Black Mist" src="/wiki/images/Senna_Curse_of_the_Black_Mist.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Senna/LoL#Curse_of_the_Black_Mist" title="Senna/LoL">Curse of the Black Mist</a></span></span></li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Urgot" data-ability="Fear Beyond Death 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Urgot/LoL#Fear_Beyond_Death_2" title="Fear Beyond Death\'s"><img alt="Fear Beyond Death\'s" src="/wiki/images/Urgot_Fear_Beyond_Death_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Urgot/LoL#Fear_Beyond_Death_2" title="Urgot/LoL">Fear Beyond Death\'s</a></span></span> chain missile</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Illaoi" data-ability="Test of Spirit" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Illaoi/LoL#Test_of_Spirit" title="Test of Spirit\'s"><img alt="Test of Spirit\'s" src="/wiki/images/Illaoi_Test_of_Spirit.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Illaoi/LoL#Test_of_Spirit" title="Illaoi/LoL">Test of Spirit\'s</a></span></span> initial missile</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kindred" data-ability="Lamb\'s Respite" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kindred/LoL#Lamb\'s_Respite" title="Lamb\'s Respite"><img alt="Lamb\'s Respite" src="/wiki/images/Kindred_Lamb%27s_Respite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kindred/LoL#Lamb\'s_Respite" title="Kindred/LoL">Lamb\'s Respite</a></span></span></li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Mordekaiser" data-ability="Realm of Death" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mordekaiser/LoL#Realm_of_Death" title="Realm of Death"><img alt="Realm of Death" src="/wiki/images/Mordekaiser_Realm_of_Death.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mordekaiser/LoL#Realm_of_Death" title="Mordekaiser/LoL">Realm of Death</a></span></span></li>\n<li><a href="/wiki/Spawn" title="Spawn">Fountain</a> health restore</li></ul></li></ul></li></ul>',
  },
  'Caustic Spittle': {
    name: 'Caustic Spittle',
    display_name: 'Caustic Spittle',
    champion: "Kog'Maw",
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'KogMawQ.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 384,
      y: 96,
      w: 48,
      h: 48,
    },
    range: '1200',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 140',
    speed: '1650',
    cast_time: '0.<small>25</small>',
    cost: '40',
    costtype: 'Mana',
    cooldown: '8',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kog\'Maw" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kog%27Maw/LoL" title="Kog\'Maw"><img alt="Kog\'Maw" src="/wiki/images/Kog%27Maw_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kog%27Maw/LoL" title="Kog\'Maw/LoL">Kog\'Maw</a></span></span> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>.',
      '<span class="template_sbc"><b>Active:</b></span> <b>Kog\'Maw</b> ejects a wad of spittle in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit, reducing their <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_penetration" title="Magic penetration"><img alt="Magic penetration icon.png" src="/wiki/images/Magic_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">magic resistance</span></span> for a few seconds.',
    ],
    description: [
      {
        description: "Passive: Kog'Maw gains  bonus attack speed.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Kog\'Maw</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Bonus Attack Speed:',
            values: '10 / 15 / 20 / 25 / 30%',
            valuesHTML: '10 / 15 / 20 / 25 / 30%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '10 / 15 / 20 / 25 / 30%',
            values: [10, 15, 20, 25, 30],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 15 / 20 / 25 / 30%',
          },
        ],
      },
      {
        icon: '/wiki/images/Caustic Spittle.png',
        description:
          "Active: Kog'Maw ejects a wad of spittle in the target direction that deals magic damage to the first enemy hit and reduces their  armor and  magic resistance for 4 seconds.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Kog\'Maw</b> ejects a wad of spittle in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit and reduces their <span style="white-space:nowrap"><a href="/wiki/Armor_penetration" title="Armor penetration"><img alt="Armor penetration icon.png" src="/wiki/images/Armor_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:yellow; white-space:normal">armor</span></span> and <span style="white-space:nowrap"><a href="/wiki/Magic_penetration" title="Magic penetration"><img alt="Magic penetration icon.png" src="/wiki/images/Magic_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">magic resistance</span></span> for 4 seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: " Kog'Maw ejects a wad of spittle in the target direction that deals magic damage to the first enemy hit and reduces their  armor and  magic resistance for 4 seconds.",
            damagetype: 'Magic',
            values: 4,
            user: 'target',
            units: 'total_ad',
            unitsText:
              'ejects a wad of spittle in the target direction that deals magic damage to the first enemy hit and reduces their  armor and  magic resistance for 4 seconds.',
            pre: "Kog'Maw ejects a wad of spittle in the target direction that deals magic damage to the first enemy hit and reduces their  armor and  magic resistance for 4 seconds.",
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '90 / 140 / 190 / 240 / 290 (+ 70% AP)',
            valuesHTML:
              '90 / 140 / 190 / 240 / 290 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;70% AP)</span>',
          },
          {
            name: 'Resistances Reduction:',
            values: '23 / 25 / 27 / 29 / 31%',
            valuesHTML: '23 / 25 / 27 / 29 / 31%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '90 / 140 / 190 / 240 / 290 (+ 70% AP)',
            damagetype: 'Magic',
            values: [90, 140, 190, 240, 290],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '90 / 140 / 190 / 240 / 290',
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
          {
            effectType: 'Unique',
            name: 'Resistances Reduction:',
            raw: '23 / 25 / 27 / 29 / 31%',
            values: [23, 25, 27, 29, 31],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '23 / 25 / 27 / 29 / 31%',
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Single target',
    spellshield: true,
    projectile: 'True',
    notes:
      '* This ability will cast from wherever the caster is at the start of the cast time.',
  },
  'Bio-Arcane Barrage': {
    name: 'Bio-Arcane Barrage',
    display_name: 'Bio-Arcane Barrage',
    champion: "Kog'Maw",
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'KogMawBioArcaneBarrage.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 432,
      y: 96,
      w: 48,
      h: 48,
    },
    cast_time: 'none',
    cost: '40',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">17</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kog\'Maw" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kog%27Maw/LoL" title="Kog\'Maw"><img alt="Kog\'Maw" src="/wiki/images/Kog%27Maw_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kog%27Maw/LoL" title="Kog\'Maw/LoL">Kog\'Maw</a></span></span> empowers his basic attacks for a period, gaining <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack range</span> and dealing <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> based on the <span style="color: #1F995C; white-space:normal">target\'s <b>maximum</b> health</span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Bio-Arcane Barrage.png',
        description:
          "Active: Kog'Maw empowers his basic attacks for the next 8 seconds to gain  bonus attack range and deal bonus magic damage  on-hit, capped at 100 against  minions and  monsters.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Kog\'Maw</b> empowers his <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a> for the next 8 seconds to gain <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<b>bonus</b> attack range</span> and deal <span style="color: #00B0F0; white-space:normal"><b>bonus</b> magic damage</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>, capped at 100 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: " Kog'Maw empowers his basic attacks for the next 8 seconds to gain  bonus attack range and deal bonus magic damage  on-hit, capped at 100 against  minions and  monsters.",
            increasedStat: 'total_ap',
            values: 8,
            units: '',
            unitsText:
              'empowers his basic attacks for the next 8 seconds to gain  bonus attack range and deal bonus magic damage  on-hit, capped at 100 against  minions and  monsters.',
            pre: "Kog'Maw empowers his basic attacks for the next 8 seconds to gain  bonus attack range and deal bonus magic damage  on-hit, capped at 100 against  minions and  monsters.",
          },
        ],
        leveling: [
          {
            name: 'Bonus Attack Range:',
            values: '130 / 150 / 170 / 190 / 210',
            valuesHTML: '130 / 150 / 170 / 190 / 210',
          },
          {
            name: 'Bonus Magic Damage:',
            values:
              "3.5 / 4.25 / 5 / 5.75 / 6.5% (+ 1% per 100 AP) of target's maximum health",
            valuesHTML:
              '<span style="color: #1F995C; white-space:normal">3.<small>5</small> / 4.<small>25</small> / 5 / 5.<small>75</small> / 6.<small>5</small>% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;1% per 100 AP)</span> of target\'s <b>maximum</b> health</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Range:',
            raw: '130 / 150 / 170 / 190 / 210',
            values: [130, 150, 170, 190, 210],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '130 / 150 / 170 / 190 / 210',
          },
          {
            effectType: 'Heal',
            name: 'Bonus Magic Damage:',
            raw: "3.5 / 4.25 / 5 / 5.75 / 6.5% (+ 1% per 100 AP) of target's maximum health",
            healType: 'OutgoingHeals',
            values: [3.5, 4.25, 5, 5.75, 6.5],
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of target's maximum health",
            pre: '3.5 / 4.25 / 5 / 5.75 / 6.5%',
            post: "of target's maximum health",
            children: [
              {
                values: 1,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 1% per 100 AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: '',
    damagetype: 'Magic',
    spelleffects: 'Proc',
    spellshield: false,
    notes:
      '* The attacks do not deal the <b>bonus</b> damage against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.',
  },
  'Void Ooze': {
    name: 'Void Ooze',
    display_name: 'Void Ooze',
    champion: "Kog'Maw",
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'KogMawVoidOoze.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 0,
      y: 144,
      w: 48,
      h: 48,
    },
    range: '1360',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 240',
    speed: '1400',
    cast_time: '0.<small>25</small>',
    cost: '60 / 70 / 80 / 90 / 100',
    costtype: 'Mana',
    cooldown: '12',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kog\'Maw" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kog%27Maw/LoL" title="Kog\'Maw"><img alt="Kog\'Maw" src="/wiki/images/Kog%27Maw_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kog%27Maw/LoL" title="Kog\'Maw/LoL">Kog\'Maw</a></span></span> spews a gob of ooze in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit. It leaves a field of ooze in its wake for a few seconds that <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> enemies.',
    ],
    description: [
      {
        icon: '/wiki/images/Void Ooze.png',
        description:
          "Active: Kog'Maw spews a gob of ooze in the target direction that deals magic damage to enemies hit.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Kog\'Maw</b> spews a gob of ooze in the target direction that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '75 / 120 / 165 / 210 / 255 (+ 70% AP)',
            valuesHTML:
              '75 / 120 / 165 / 210 / 255 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;70% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '75 / 120 / 165 / 210 / 255 (+ 70% AP)',
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
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 70% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          'A field of ooze is created in its wake for 4 seconds,  slowing enemies every 0.25 seconds.',
        descriptionHTML:
          'A field of ooze is created in its wake for 4 seconds, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> enemies every 0.<small>25</small> seconds.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 1:',
            raw: 'A field of ooze is created in its wake for 4 seconds,  slowing enemies every 0.25 seconds.',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'field of ooze is created in its wake for 4 seconds,  slowing enemies every 0.25 seconds.',
            pre: 'A field of ooze is created in its wake for 4 seconds,  slowing enemies every 0.25 seconds.',
          },
        ],
        leveling: [
          {
            name: 'Slow:',
            values: '20 / 28 / 36 / 44 / 52%',
            valuesHTML: '20 / 28 / 36 / 44 / 52%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '20 / 28 / 36 / 44 / 52%',
            values: [20, 28, 36, 44, 52],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '20 / 28 / 36 / 44 / 52%',
          },
        ],
      },
    ],
    targeting: 'Direction',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Area of effect',
    spellshield: true,
    projectile: 'True',
    notes:
      '* This ability will cast from wherever the caster is at the start of the cast time.\n<ul><li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: The missile leaves a blob of ooze on the ground every 125 units traveled.</li></ul>',
  },
  'Living Artillery': {
    name: 'Living Artillery',
    display_name: 'Living Artillery',
    champion: "Kog'Maw",
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'KogMawLivingArtillery.png',
      sprite: 'spell6.png',
      group: 'spell',
      x: 48,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '1300 / 1425 / 1550 / 1675 / 1800',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 240',
    cast_time: '0.<small>25</small>',
    cost: '<span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="stacks" data-start="40;0" data-finish="400;9" data-bot_values="40;80;120;160;200;240;280;320;360;400" data-top_values="0;1;2;3;4;5;6;7;8;9">40 − 400 (based on stacks)</span>',
    costtype: 'Mana',
    cooldown:
      '2 / 1.<small>75</small> / 1.<small>5</small> / 1.<small>25</small> / 1',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kog\'Maw" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kog%27Maw/LoL" title="Kog\'Maw"><img alt="Kog\'Maw" src="/wiki/images/Kog%27Maw_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kog%27Maw/LoL" title="Kog\'Maw/LoL">Kog\'Maw</a></span></span> spits a globule of acid into the air that drops to the target location, dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit based on <span style="color: #1F995C; white-space:normal">their <b>missing</b> health</span>. The damage is further <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">doubled</span> against enemies at <span style="color: #1F995C; white-space:normal">low health</span>.',
      "<b>Kog'Maw</b> then gains a stack of <i>Living Artillery</i>, stacking up to a cap.",
      '<span class="template_sbc"><b>Living Artillery:</b></span> For each stack, <i>Living Artillery</i> gains increased <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana cost</span></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Living Artillery.png',
        description:
          "Active: Kog'Maw spits a globule of acid into the air that drops to the target location after 0.6 seconds, granting  sight of the area before dealing magic damage to enemies hit and  revealing them for 2 seconds. Living Artillery's damage is increased by 0% − 50% (based on target's missing health), or instead by  100% if the target is below 40% maximum health.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Kog\'Maw</b> spits a globule of acid into the air that drops to the target location after 0.<small>6</small> seconds, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area before dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to enemies hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Standard sight"><a href="/wiki/Sight" title="Sight"><img alt="Reveal icon.png" src="/wiki/images/Reveal_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">revealing</a></span> them for 2 seconds. <i>Living Artillery\'s</i> damage is increased by <span style="color: #1F995C; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="target\'s missing health" data-displayformula="0.833% per 1% of target\'s \'\'\'missing\'\'\' health. \'\'This is capped at 50% increase at 60% \'\'\'missing\'\'\' health.\'\'" data-bot_values="0;5;10;15;20;25;30;35;40;45;50" data-top_values="0;6;12;18;24;30;36;42;48;54;60" data-bot_key="%" data-top_key="%">0% − 50% (based on target\'s <b>missing</b> health)</span></span>, or instead by <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">100%</span> if the target is below <span style="color: #1F995C; white-space:normal">40% <b>maximum</b> health</span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Minimum Magic Damage:',
            values: '100 / 120 / 140 / 160 / 180 (+ 65% bonus AD) (+ 35% AP)',
            valuesHTML:
              '100 / 120 / 140 / 160 / 180 <span style="color:orange; white-space:normal">(+&nbsp;65% <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;35% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Minimum Magic Damage:',
            raw: '100 / 120 / 140 / 160 / 180 (+ 65% bonus AD) (+ 35% AP)',
            damagetype: 'Magic',
            values: [100, 120, 140, 160, 180],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '100 / 120 / 140 / 160 / 180',
            children: [
              {
                values: 65,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'bonus AD',
                pre: '+ 65% bonus AD',
              },
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
          "Kog'Maw then gains a stack of Living Artillery for 8 seconds, refreshing on subsequent casts and stacking up to 9 times.",
        descriptionHTML:
          '<b>Kog\'Maw</b> then gains a <a href="/wiki/Stack" title="Stack">stack</a> of <i>Living Artillery</i> for 8 seconds, refreshing on subsequent casts and stacking up to 9 times.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: "Kog'Maw then gains a stack of Living Artillery for 8 seconds, refreshing on subsequent casts and stacking up to 9 times.",
            increasedStat: 'feastStacks',
            values: 8,
            units: '',
            unitsText:
              'then gains a stack of Living Artillery for 8 seconds, refreshing on subsequent casts and stacking up to 9 times.',
            pre: "Kog'Maw then gains a stack of Living Artillery for 8 seconds, refreshing on subsequent casts and stacking up to 9 times.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Living Artillery: For each stack, Living Artillery's  mana cost is increased by 40.",
        descriptionHTML:
          '<span class="template_sbc"><b>Living Artillery:</b></span> For each stack, <i>Living Artillery\'s</i> <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana cost</span></span> is increased by <span style="color: #0099CC; white-space:normal">40</span>.',
        descriptionRatios: [
          {
            effectType: 'Stacks',
            name: 'Living Artillery:',
            raw: " For each stack, Living Artillery's  mana cost is increased by 40.",
            min: 0,
            max: 10,
            description:
              " For each stack, Living Artillery's  mana cost is increased by 40.",
            values: 4,
            units: 'feastStacks',
            unitsText:
              "each stack, Living Artillery's  mana cost is increased by 40.",
            pre: "For each stack, Living Artillery's  mana cost is increased by 40.",
          },
        ],
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
      '* <i>Living Artillery</i> will not reveal <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stealth"><a href="/wiki/Stealth" title="Stealth"><img alt="Guerrilla Warfare.png" src="/wiki/images/Teemo_Guerrilla_Warfare.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth" title="Stealth">stealthed</a></span> champions.',
  },
} satisfies { [skillName in string]: SkillData };
