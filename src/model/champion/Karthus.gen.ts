import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Karthus';

export default {
  'Death Defied': {
    name: 'Death Defied',
    display_name: 'Death Defied',
    champion: 'Karthus',
    skill: 'I',
    image: {
      full: 'Karthus_Passive.png',
      sprite: 'passive1.png',
      group: 'passive',
      x: 192,
      y: 96,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> Upon <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dying</a></span>, <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karthus" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karthus/LoL" title="Karthus"><img alt="Karthus" src="/wiki/images/Karthus_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karthus/LoL" title="Karthus/LoL">Karthus</a></span></span> enters an <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Zombie state"><a href="/wiki/Death#Zombie_states" title="Death#Zombie states"><img alt="Zombie icon.png" src="/wiki/images/Zombie_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Zombie_states" title="Death">spirit form</a></span> for a few seconds that allows him to continue casting spells at no cost but without being able to move.',
      'If <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karthus" data-ability="Defile" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karthus/LoL#Defile" title="Defile"><img alt="Defile" src="/wiki/images/Karthus_Defile.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karthus/LoL#Defile" title="Karthus/LoL">Defile</a></span></span></i> has been learned, it will remain toggled on for <i>Death Defied\'s</i> entire duration.',
    ],
    description: [
      {
        icon: '/wiki/images/Death Defied.png',
        description:
          "Innate: Upon taking  fatal damage, Karthus enters a  zombie state for 7 seconds, during which he can cast his abilities at no cost. If  Defile has been learned, it will remain toggled on for Death Defied's entire duration.  Requiem becomes disabled after Death Defied has lasted 4 seconds.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> Upon taking <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">fatal damage</a></span>, <b>Karthus</b> enters a <b><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Zombie state"><a href="/wiki/Death#Zombie_states" title="Death#Zombie states"><img alt="Zombie icon.png" src="/wiki/images/Zombie_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Zombie_states" title="Death">zombie state</a></span></b> for 7 seconds, during which he can cast his abilities at no cost. If <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karthus" data-ability="Defile" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karthus/LoL#Defile" title="Defile"><img alt="Defile" src="/wiki/images/Karthus_Defile.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karthus/LoL#Defile" title="Karthus/LoL">Defile</a></span></span></i> has been learned, it will remain toggled on for <i>Death Defied\'s</i> entire duration. <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karthus" data-ability="Requiem" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karthus/LoL#Requiem" title="Requiem"><img alt="Requiem" src="/wiki/images/Karthus_Requiem.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karthus/LoL#Requiem" title="Karthus/LoL">Requiem</a></span></span></i> becomes disabled after <i>Death Defied</i> has lasted 4 seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Innate:',
            raw: ' Upon taking  fatal damage, Karthus enters a  zombie state for 7 seconds, during which he can cast his abilities at no cost',
            damagetype: 'None',
            values: 7,
            user: 'none',
            units: '',
            unitsText:
              'taking  fatal damage, Karthus enters a  zombie state for 7 seconds, during which he can cast his abilities at no cost',
            pre: 'Upon taking  fatal damage, Karthus enters a  zombie state for 7 seconds, during which he can cast his abilities at no cost',
          },
          {
            effectType: 'Unique',
            name: 'Line 3:',
            raw: ' Requiem becomes disabled after Death Defied has lasted 4 seconds.',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'becomes disabled after Death Defied has lasted 4 seconds.',
            pre: 'Requiem becomes disabled after Death Defied has lasted 4 seconds.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'While under this state, Karthus becomes  untargetable and  immune to crowd control as well as prevents all incoming damage, but is also rendered unable to move, declare basic attacks, use summoner spells, and activate items.',
        descriptionHTML:
          'While under this state, <b>Karthus</b> becomes <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cc-immune"><a href="/wiki/Crowd_control#Immunity" title="Crowd control#Immunity"><img alt="Cc-immune icon.png" src="/wiki/images/Cc-immune_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Immunity" title="Crowd control">immune to crowd control</a></span> as well as prevents all incoming damage, but is also rendered unable to move, declare <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a>, use <a href="/wiki/Summoner_spell" title="Summoner spell">summoner spells</a>, and <a href="/wiki/Active_ability_items" title="Active ability items">activate items</a>.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: 'Self',
    notes:
      '* <i>Death Defied\'s</i> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetability"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetability</a></span> does not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Homing projectile destruction"><a href="/wiki/Projectile" title="Projectile"><img alt="Bullet strikethrough.png" src="/wiki/images/Bullet_strikethrough.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">destroy</a></span> in-flight <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectiles"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">projectiles</a></span>.\n<ul><li><b>Karthus</b> cannot be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Execute"><a href="/wiki/Kill#Execute" title="Kill#Execute"><img alt="Death from Below.png" src="/wiki/images/Pyke_Death_from_Below.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Kill#Execute" title="Kill">executed</a></span> by the <span class="inline-image label-after buff-icon" style="display:inline;white-space:pre;" data-param="" data-buff="Aspect of the Dragon" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Aspect_of_the_Dragon" title="Aspect of the Dragon"><img alt="Aspect of the Dragon" src="/wiki/images/Aspect_of_the_Dragon_buff.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Aspect_of_the_Dragon" class="mw-redirect" title="Aspect of the Dragon">Aspect of the Dragon</a></span></span> during <i>Death Defied</i>.</li>\n<li>At the start of <i>Death Defied</i>, <b>Karthus</b> is set to <span style="white-space:nowrap"><a href="/wiki/Health" title="Health"><img alt="Health icon.png" src="/wiki/images/Health_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #1F995C; white-space:normal">1 health</span></span>.\n<ul><li><b>Karthus</b> can still regenerate his health over the duration, but he will always die at the end of it.</li></ul></li>\n<li>After <i>Death Defied</i> ends, the corpse of <b>Karthus</b> will retain <a href="/wiki/Unit_collision" title="Unit collision">unit collision</a> despite being dead on the ground.</li>\n<li><b>Karthus\' </b> <a href="/wiki/Health_bar" title="Health bar">mana bar</a> drains over the duration of <i>Death Defied</i> as an indicator of his time remaining in this state.</li>\n<li>Zombie states trigger upon taking <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">lethal damage</a></span>.\n<ul><li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Raw damage"><a href="/wiki/Damage" title="Damage"><img alt="Fear Beyond Death 2.png" src="/wiki/images/Urgot_Fear_Beyond_Death_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">Raw damage</a></span> effects will not prevent zombie states from triggering.</li></ul></li>\n<li>All <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span> effects will take precedence over effects that reanimate as a zombie.</li>\n<li>A champion that enters a zombie state will start their death timer upon triggering the effect.</li>\n<li>Most buffs and debuffs will be lost upon transitioning into a zombie state.\n<ul><li>Those that persist through death, such as <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Brand" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Brand/LoL" title="Brand\'s"><img alt="Brand\'s" src="/wiki/images/Brand_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Brand/LoL" title="Brand/LoL">Brand\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Brand" data-ability="Blaze" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Brand/LoL#Blaze" title="Blaze"><img alt="Blaze" src="/wiki/images/Brand_Blaze.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Brand/LoL#Blaze" title="Brand/LoL">Blaze</a></span></span></span>, will remain.</li>\n<li>Undisplayed marker buffs, such as those imposed by <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Veigar" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Veigar/LoL" title="Veigar\'s"><img alt="Veigar\'s" src="/wiki/images/Veigar_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Veigar/LoL" title="Veigar/LoL">Veigar\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Veigar" data-ability="Event Horizon" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Veigar/LoL#Event_Horizon" title="Event Horizon"><img alt="Event Horizon" src="/wiki/images/Veigar_Event_Horizon.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Veigar/LoL#Event_Horizon" title="Veigar/LoL">Event Horizon</a></span></span></span> and <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viktor" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viktor/LoL" title="Viktor\'s"><img alt="Viktor\'s" src="/wiki/images/Viktor_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viktor/LoL" title="Viktor/LoL">Viktor\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viktor" data-ability="Gravity Field" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viktor/LoL#Gravity_Field" title="Gravity Field"><img alt="Gravity Field" src="/wiki/images/Viktor_Gravity_Field.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viktor/LoL#Gravity_Field" title="Viktor/LoL">Gravity Field</a></span></span></span> to prevent being affected multiple times by the same effect, will be lost.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li>\n<li>This does not apply when transitioning from one zombie state to another zombie state.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup></li></ul></li>\n<li>Units within a zombie state cannot:\n<ul><li>Use <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> or <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Corrupting Potion" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Corrupting_Potion" title="Corrupting Potion"><img alt="Corrupting Potion" src="/wiki/images/Corrupting_Potion_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Corrupting_Potion" title="Corrupting Potion">Corrupting Potion</a></span></span> / <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Refillable Potion" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Refillable_Potion" title="Refillable Potion"><img alt="Refillable Potion" src="/wiki/images/Refillable_Potion_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Refillable_Potion" title="Refillable Potion">Refillable Potion</a></span></span>.</li>\n<li>Activate <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span> effects.</li>\n<li>Take <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Thresh" data-ability="Dark Passage" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Thresh/LoL#Dark_Passage" title="Dark Passage"><img alt="Dark Passage" src="/wiki/images/Thresh_Dark_Passage.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Thresh/LoL#Dark_Passage" title="Thresh/LoL">Dark Passage</a></span></span>, <a href="/wiki/Catapult" title="Catapult">Catapult</a>, or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Gate"><a href="/wiki/Gate" class="mw-disambig" title="Gate">gates</a></span>.</li>\n<li>Pick up the <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Eye of the Herald" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Eye_of_the_Herald" title="Eye of the Herald"><img alt="Eye of the Herald" src="/wiki/images/Eye_of_the_Herald_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Eye_of_the_Herald" title="Eye of the Herald">Eye of the Herald</a></span></span>.</li>\n<li>Be targeted by the following:\n<ul><li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Renata Glasc" data-ability="Bailout" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Renata_Glasc/LoL#Bailout" title="Bailout"><img alt="Bailout" src="/wiki/images/Renata_Glasc_Bailout.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Renata_Glasc/LoL#Bailout" title="Renata Glasc/LoL">Bailout</a></span></span></li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zilean" data-ability="Chronoshift" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zilean/LoL#Chronoshift" title="Chronoshift"><img alt="Chronoshift" src="/wiki/images/Zilean_Chronoshift.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zilean/LoL#Chronoshift" title="Zilean/LoL">Chronoshift</a></span></span></li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kayn" data-ability="Umbral Trespass" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kayn/LoL#Umbral_Trespass" title="Umbral Trespass"><img alt="Umbral Trespass" src="/wiki/images/Kayn_Umbral_Trespass.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kayn/LoL#Umbral_Trespass" title="Kayn/LoL">Umbral Trespass</a></span></span>.</li></ul></li>\n<li>Be affected by the following:\n<ul><li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Senna" data-ability="Curse of the Black Mist" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Senna/LoL#Curse_of_the_Black_Mist" title="Curse of the Black Mist"><img alt="Curse of the Black Mist" src="/wiki/images/Senna_Curse_of_the_Black_Mist.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Senna/LoL#Curse_of_the_Black_Mist" title="Senna/LoL">Curse of the Black Mist</a></span></span></li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Urgot" data-ability="Fear Beyond Death 2" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Urgot/LoL#Fear_Beyond_Death_2" title="Fear Beyond Death\'s"><img alt="Fear Beyond Death\'s" src="/wiki/images/Urgot_Fear_Beyond_Death_2.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Urgot/LoL#Fear_Beyond_Death_2" title="Urgot/LoL">Fear Beyond Death\'s</a></span></span> chain missile</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Illaoi" data-ability="Test of Spirit" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Illaoi/LoL#Test_of_Spirit" title="Test of Spirit\'s"><img alt="Test of Spirit\'s" src="/wiki/images/Illaoi_Test_of_Spirit.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Illaoi/LoL#Test_of_Spirit" title="Illaoi/LoL">Test of Spirit\'s</a></span></span> initial missile</li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kindred" data-ability="Lamb\'s Respite" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kindred/LoL#Lamb\'s_Respite" title="Lamb\'s Respite"><img alt="Lamb\'s Respite" src="/wiki/images/Kindred_Lamb%27s_Respite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kindred/LoL#Lamb\'s_Respite" title="Kindred/LoL">Lamb\'s Respite</a></span></span></li>\n<li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Mordekaiser" data-ability="Realm of Death" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mordekaiser/LoL#Realm_of_Death" title="Realm of Death"><img alt="Realm of Death" src="/wiki/images/Mordekaiser_Realm_of_Death.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mordekaiser/LoL#Realm_of_Death" title="Mordekaiser/LoL">Realm of Death</a></span></span></li>\n<li><a href="/wiki/Spawn" title="Spawn">Fountain</a> health restore</li></ul></li></ul></li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Karthus_Original_PassiveActivate_5.ogg   "I am become death!"',
  },
  'Lay Waste': {
    name: 'Lay Waste',
    display_name: 'Lay Waste',
    champion: 'Karthus',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'KarthusLayWasteA1.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 96,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '875',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 160',
    cast_time: '0.<small>25</small>',
    cost: '20 / 25 / 30 / 35 / 40',
    costtype: 'Mana',
    cooldown: '1',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karthus" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karthus/LoL" title="Karthus"><img alt="Karthus" src="/wiki/images/Karthus_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karthus/LoL" title="Karthus/LoL">Karthus</a></span></span> conjures a delayed blast at the target location that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to all enemies within, <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">doubled</span> when only one target is struck.',
    ],
    description: [
      {
        icon: '/wiki/images/Lay Waste.png',
        description:
          'Active: Karthus conjures a blast at the target location that detonates after 0.528 seconds to 0.759 seconds, granting  sight of the area and dealing magic damage to all enemies within,  doubled when only one target is struck.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Karthus</b> conjures a blast at the target location that detonates after <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="See notes"><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.5 seconds, but rounded up to the next game tick.">0.<small>528</small> seconds</span> to <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.75 seconds, but rounded up to the next game tick.">0.<small>759</small> seconds</span></span>, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> of the area and dealing <span style="color: #00B0F0; white-space:normal">magic damage</span> to all enemies within, <a href="/wiki/Critical_strike#Cosmetic_critical_strikes" title="Critical strike#Cosmetic critical strikes"><img alt="Critical strike magic icon.png" src="/wiki/images/Critical_strike_magic_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Cosmetic critical strike">doubled</span> when only one target is struck.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '45 / 62.5 / 80 / 97.5 / 115 (+ 35% AP)',
            valuesHTML:
              '45 / 62.<small>5</small> / 80 / 97.<small>5</small> / 115 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;35% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '45 / 62.5 / 80 / 97.5 / 115 (+ 35% AP)',
            damagetype: 'Magic',
            values: [45, 62.5, 80, 97.5, 115],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '45 / 62.5 / 80 / 97.5 / 115',
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
        description: 'Lay Waste deals 95% damage to  monsters.',
        descriptionHTML:
          '<i>Lay Waste</i> deals 95% damage to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Lay Waste deals 95% damage to  monsters.',
            damagetype: 'None',
            values: 9,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: 'damage to  monsters.Waste deals 95',
            pre: 'Lay Waste deals 95% damage to  monsters.',
          },
        ],
        leveling: [
          {
            name: 'Monster Damage:',
            values: '42.75 / 59.375 / 76 / 92.625 / 109.25 (+ 29.75% AP)',
            valuesHTML:
              '42.<small>75</small> / 59.<small>375</small> / 76 / 92.<small>625</small> / 109.<small>25</small> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;29.<small>75</small>% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Monster Damage:',
            raw: '42.75 / 59.375 / 76 / 92.625 / 109.25 (+ 29.75% AP)',
            damagetype: 'None',
            values: [42.75, 59.375, 76, 92.625, 109.25],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '42.75 / 59.375 / 76 / 92.625 / 109.25',
            children: [
              {
                values: 29.75,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 29.75% AP',
              },
            ],
          },
        ],
      },
      {
        description:
          'During  Death Defied, Lay Waste will cast at maximum range if cast beyond that.',
        descriptionHTML:
          '<i>During <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karthus" data-ability="Death Defied" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karthus/LoL#Death_Defied" title="Death Defied"><img alt="Death Defied" src="/wiki/images/Karthus_Death_Defied.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karthus/LoL#Death_Defied" title="Karthus/LoL">Death Defied</a></span></span>, Lay Waste will cast at maximum range if cast beyond that.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Special',
    spellshield: true,
    notes:
      '* The delay between the cast and the detonation is inconsistent, but always matches up with the VFX.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This is not intended.">(bug)</span></sup>\n<ul><li><ul><li><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karthus" data-ability="Defile" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karthus/LoL#Defile" title="Defile\'s"><img alt="Defile\'s" src="/wiki/images/Karthus_Defile.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karthus/LoL#Defile" title="Karthus/LoL">Defile\'s</a></span></span> ticks beyond the first has a similar issue.</li></ul></li>\n<li>Applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell damage"><a href="/wiki/Damage" title="Damage"><img alt="Disintegrate.png" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">spell damage</a></span> if it hits a single target and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span> if it hits multiple targets.\n<ul><li><i>Lay Waste</i> also plays a different sound effect when it only hits one target.</li></ul></li></ul>',
  },
  'Wall of Pain': {
    name: 'Wall of Pain',
    display_name: 'Wall of Pain',
    champion: 'Karthus',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'KarthusWallOfPain.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 144,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '1000',
    cast_time: '0.<small>25</small>',
    cost: '70',
    costtype: 'Mana',
    cooldown: '15',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karthus" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karthus/LoL" title="Karthus"><img alt="Karthus" src="/wiki/images/Karthus_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karthus/LoL" title="Karthus/LoL">Karthus</a></span></span> erects a wall of pain at the target location that lasts a few seconds, enemies that touch it suffer reduced <span style="white-space:nowrap"><a href="/wiki/Magic_penetration" title="Magic penetration"><img alt="Magic penetration icon.png" src="/wiki/images/Magic_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">magic resistance</span></span> and become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> for a few seconds.',
    ],
    description: [
      {
        icon: '/wiki/images/Wall of Pain.png',
        description:
          'Active: Karthus erects a wall of pain at the target location perpendicular to his facing that lasts 5 seconds, granting  sight around its pillars and center.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Karthus</b> erects a wall of pain at the target location perpendicular to his facing that lasts 5 seconds, granting <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Sight"><a href="/wiki/Sight" title="Sight"><img alt="Sight icon.png" src="/wiki/images/Sight_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Sight" title="Sight">sight</a></span> around its pillars and center.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Active:',
            raw: ' Karthus erects a wall of pain at the target location perpendicular to his facing that lasts 5 seconds, granting  sight around its pillars and center.',
            values: 5,
            user: 'none',
            units: '',
            unitsText:
              'erects a wall of pain at the target location perpendicular to his facing that lasts 5 seconds, granting  sight around its pillars and center.',
            pre: 'Karthus erects a wall of pain at the target location perpendicular to his facing that lasts 5 seconds, granting  sight around its pillars and center.',
          },
        ],
        leveling: [
          {
            name: 'Wall Length:',
            values: '800 / 900 / 1000 / 1100 / 1200',
            valuesHTML: '800 / 900 / 1000 / 1100 / 1200',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Wall Length:',
            raw: '800 / 900 / 1000 / 1100 / 1200',
            values: [800, 900, 1000, 1100, 1200],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '800 / 900 / 1000 / 1100 / 1200',
          },
        ],
      },
      {
        description:
          'Enemies that touch the wall are inflicted with  15% magic resistance reduction and become  slowed for 4 seconds, decaying over the duration. Enemies can be affected by Wall of Pain only once per cast.',
        descriptionHTML:
          'Enemies that touch the wall are inflicted with <span style="white-space:nowrap"><a href="/wiki/Magic_penetration" title="Magic penetration"><img alt="Magic penetration icon.png" src="/wiki/images/Magic_penetration_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #00FFFF; white-space:normal">15% magic resistance reduction</span></span> and become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> for 4 seconds, decaying over the duration. Enemies can be affected by <i>Wall of Pain</i> only once per cast.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Enemies that touch the wall are inflicted with  15% magic resistance reduction and become  slowed for 4 seconds, decaying over the duration',
            damagetype: 'Magic',
            values: 1,
            valuesIsPercent: true,
            units: 'total_mr',
            unitsText:
              'magic resistance reduction and become  slowed for 4 seconds, decaying over the durationthat touch the wall are inflicted with  15',
            pre: 'Enemies that touch the wall are inflicted with  15% magic resistance reduction and become  slowed for 4 seconds, decaying over the duration',
          },
        ],
        leveling: [
          {
            name: 'Slow:',
            values: '40 / 50 / 60 / 70 / 80%',
            valuesHTML: '40 / 50 / 60 / 70 / 80%',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Slow:',
            raw: '40 / 50 / 60 / 70 / 80%',
            values: [40, 50, 60, 70, 80],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '40 / 50 / 60 / 70 / 80%',
          },
        ],
      },
    ],
    targeting: 'Location',
    affects: 'Enemies',
    spellshield: false,
    notes: '',
  },
  Defile: {
    name: 'Defile',
    display_name: 'Defile',
    champion: 'Karthus',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'KarthusDefile.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 192,
      y: 144,
      w: 48,
      h: 48,
    },
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 550',
    cast_time: 'none',
    cost: '30 / 42 / 54 / 66 / 78',
    costtype: 'Mana per second',
    static: '0.<small>5</small>',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karthus" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karthus/LoL" title="Karthus"><img alt="Karthus" src="/wiki/images/Karthus_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karthus/LoL" title="Karthus/LoL">Karthus</a></span></span> restores <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana</span></span> whenever he kills an enemy.',
      '<span class="template_sbc"><b>Toggle:</b></span> <b>Karthus</b> surrounds himself in a necrotic <a href="/wiki/Aura" title="Aura">aura</a> that continually deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to all nearby enemies, quickly draining his own <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;mana</span>.',
    ],
    description: [
      {
        description:
          'Passive: Karthus restores  mana whenever he kills an enemy.',
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Karthus</b> restores <span style="white-space:nowrap"><a href="/wiki/Mana" title="Mana"><img alt="Mana icon.png" src="/wiki/images/Mana_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #0099CC; white-space:normal">mana</span></span> whenever he kills an enemy.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Mana Restored:',
            values: '15 / 25 / 35 / 45 / 55',
            valuesHTML:
              '<span style="color: #0099CC; white-space:normal">15 / 25 / 35 / 45 / 55</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Mana Restored:',
            raw: '15 / 25 / 35 / 45 / 55',
            values: [15, 25, 35, 45, 55],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '15 / 25 / 35 / 45 / 55',
          },
        ],
      },
      {
        icon: '/wiki/images/Defile.png',
        description:
          'Toggle: Karthus surrounds himself in a necrotic aura that deals magic damage every 0.25 seconds to all nearby enemies. Toggling Defile off triggers a final tick of damage.',
        descriptionHTML:
          '<span class="template_sbc"><b>Toggle:</b></span> <b>Karthus</b> surrounds himself in a necrotic <a href="/wiki/Aura" title="Aura">aura</a> that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> every 0.<small>25</small> seconds to all nearby enemies. Toggling <i>Defile</i> off triggers a final tick of damage.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Magic Damage Per Tick:',
            values: '7.5 / 12.5 / 17.5 / 22.5 / 27.5 (+ 5% AP)',
            valuesHTML:
              '7.<small>5</small> / 12.<small>5</small> / 17.<small>5</small> / 22.<small>5</small> / 27.<small>5</small> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;5% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage Per Tick:',
            raw: '7.5 / 12.5 / 17.5 / 22.5 / 27.5 (+ 5% AP)',
            damagetype: 'Magic',
            values: [7.5, 12.5, 17.5, 22.5, 27.5],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '7.5 / 12.5 / 17.5 / 22.5 / 27.5',
            children: [
              {
                values: 5,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 5% AP',
              },
            ],
          },
        ],
      },
      {
        description: 'Defile cannot be toggled off during  Death Defied.',
        descriptionHTML:
          '<i>Defile cannot be toggled off during <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karthus" data-ability="Death Defied" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karthus/LoL#Death_Defied" title="Death Defied"><img alt="Death Defied" src="/wiki/images/Karthus_Death_Defied.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karthus/LoL#Death_Defied" title="Karthus/LoL">Death Defied</a></span></span>.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Auto',
    affects: 'Self, Enemies',
    damagetype: 'Magic',
    spelleffects: 'aoedot',
    spellshield: false,
    notes:
      '*Toggle abilities do not count as ability activations for the purposes of on-cast effects such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spellblade"><a href="/wiki/Named_item_effect#Spellblade" title="Named item effect#Spellblade"><img alt="Sheen item.png" src="/wiki/images/Sheen_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Named_item_effect#Spellblade" title="Named item effect">Spellblade</a></span> and stacking <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Kassadin" data-ability="Force Pulse" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Force Pulse"><img alt="Force Pulse" src="/wiki/images/Kassadin_Force_Pulse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Kassadin/LoL#Force_Pulse" title="Kassadin/LoL">Force Pulse</a></span></span>.\n<ul><li><i>Defile</i> will restore <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Mana"><a href="/wiki/Mana" title="Mana"><img alt="Mana resource.png" src="/wiki/images/Mana_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Mana" title="Mana">mana</a></span> if <b>Karthus</b> destroys an enemy structure.</li>\n<li><i>Defile</i> re-evaluates its damage with each tick, thus gaining/losing <span style="white-space:nowrap"><a href="/wiki/Ability_power" title="Ability power"><img alt="Ability power icon.png" src="/wiki/images/Ability_power_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;AP</span> or putting skill points into the ability will affect it immediately without the need to toggle it off and back on again.</li>\n<li><i>Defile</i> will toggle off automatically if <b>Karthus</b> enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span>.</li></ul>',
  },
  Requiem: {
    name: 'Requiem',
    display_name: 'Requiem',
    champion: 'Karthus',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'KarthusFallenOne.png',
      sprite: 'spell5.png',
      group: 'spell',
      x: 240,
      y: 144,
      w: 48,
      h: 48,
    },
    effect_radius: 'Global',
    cast_time: '0.<small>25</small>',
    cost: '100',
    costtype: 'Mana',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts on cast">200 / 190 / 180 / 170 / 160</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Karthus" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Karthus/LoL" title="Karthus"><img alt="Karthus" src="/wiki/images/Karthus_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Karthus/LoL" title="Karthus/LoL">Karthus</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for a short time, then deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to all targetable enemy champions upon completion.',
    ],
    description: [
      {
        icon: '/wiki/images/Requiem.png',
        description:
          'Active: Karthus  channels for 3 seconds, then deals magic damage to all targetable enemy champions upon completion.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Karthus</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channels</a></span> for 3 seconds, then deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to all targetable enemy champions upon completion.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Active:',
            raw: ' Karthus  channels for 3 seconds, then deals magic damage to all targetable enemy champions upon completion.',
            damagetype: 'Magic',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'channels for 3 seconds, then deals magic damage to all targetable enemy champions upon completion.',
            pre: 'Karthus  channels for 3 seconds, then deals magic damage to all targetable enemy champions upon completion.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '200 / 275 / 350 / 425 / 500 (+ 75% AP)',
            valuesHTML:
              '200 / 275 / 350 / 425 / 500 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;75% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '200 / 275 / 350 / 425 / 500 (+ 75% AP)',
            damagetype: 'Magic',
            values: [200, 275, 350, 425, 500],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '200 / 275 / 350 / 425 / 500',
            children: [
              {
                values: 75,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 75% AP',
              },
            ],
          },
        ],
      },
    ],
    targeting: 'Auto',
    affects: 'Enemies',
    damagetype: 'Magic',
    spelleffects: 'Aoe',
    spellshield: true,
    notes:
      '* <i>Requiem\'s</i> channel is telegraphed to all enemy champions by a beam of light that descends on all targets, including if they are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> or even <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Death"><a href="/wiki/Death" title="Death"><img alt="Death.png" src="/wiki/images/Death.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death" title="Death">dead</a></span>.\n<ul><li><i>Requiem</i> will affect <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clones</a></span>.</li>\n<li>The damage will apply <a href="/wiki/Spell_effects" class="mw-redirect" title="Spell effects">spell effects</a> to targets in an order based on proximity to <b>Karthus</b>. Single target spell effects (such as <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Luden\'s Tempest" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Luden%27s_Tempest" title="Luden\'s Tempest"><img alt="Luden\'s Tempest" src="/wiki/images/Luden%27s_Tempest_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Luden%27s_Tempest" title="Luden\'s Tempest">Luden\'s Tempest</a></span></span>) are thus triggered on the <i>closest</i> enemy champion.</li>\n<li>The following table refers for interactions while <b>Karthus</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Shurelya\'s Battlesong" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong"><img alt="Shurelya\'s Battlesong" src="/wiki/images/Shurelya%27s_Battlesong_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Shurelya%27s_Battlesong" title="Shurelya\'s Battlesong">Shurelya\'s Battlesong</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Turbo Chemtank" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank"><img alt="Turbo Chemtank" src="/wiki/images/Turbo_Chemtank_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Turbo_Chemtank" title="Turbo Chemtank">Turbo Chemtank</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Youmuu\'s Ghostblade" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade"><img alt="Youmuu\'s Ghostblade" src="/wiki/images/Youmuu%27s_Ghostblade_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Youmuu%27s_Ghostblade" title="Youmuu\'s Ghostblade">Youmuu\'s Ghostblade</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Gargoyle Stoneplate" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate"><img alt="Gargoyle Stoneplate" src="/wiki/images/Gargoyle_Stoneplate_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Gargoyle_Stoneplate" title="Gargoyle Stoneplate">Gargoyle Stoneplate</a></span></span> <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Randuin\'s Omen" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen"><img alt="Randuin\'s Omen" src="/wiki/images/Randuin%27s_Omen_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Randuin%27s_Omen" title="Randuin\'s Omen">Randuin\'s Omen</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All the other item-actives are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Usable\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span>\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Karthus_Original_R_3.ogg   "Die!"',
  },
} satisfies { [skillName in string]: SkillData };
