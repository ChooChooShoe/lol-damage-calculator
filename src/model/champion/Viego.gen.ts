import type { SkillData } from '@/api/DataTypes';
import type { ChampionName } from '../ChampionListData';
export const name: ChampionName = 'Viego';

export default {
  "Sovereign's Domination": {
    name: "Sovereign's Domination",
    display_name: "Sovereign's Domination",
    champion: 'Viego',
    skill: 'I',
    image: {
      full: 'Viego_Passive.png',
      sprite: 'passive4.png',
      group: 'passive',
      x: 144,
      y: 96,
      w: 48,
      h: 48,
    },
    blurb: [
      '<span class="template_sbc"><b>Innate:</b></span> Scoring an enemy champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> will spawn a <i>Mist Wraith</i> for a period. <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viego" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viego/LoL" title="Viego"><img alt="Viego" src="/wiki/images/Viego_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viego/LoL" title="Viego/LoL">Viego</a></span></span> can consume the <i>Mist Wraith</i> to briefly become <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blink</a></span> to it, which <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> him for a portion of the <span style="color: #1F995C; white-space:normal">target\'s <b>maximum</b> health</span> and grants <i>Possession</i>.',
      'Casting <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viego" data-ability="Heartbreaker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viego/LoL#Heartbreaker" title="Heartbreaker"><img alt="Heartbreaker" src="/wiki/images/Viego_Heartbreaker.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viego/LoL#Heartbreaker" title="Viego/LoL">Heartbreaker</a></span></span></i> or consuming a <i>Mist Wraith</i> will end <i>Possession</i> early.',
      '<span class="template_sbc"><b>Possession:</b></span> For a period, <b>Viego\'s</b> items, stats, basic attacks, and basic abilities become those of the slain enemy\'s. He also gains a free cast of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viego" data-ability="Heartbreaker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viego/LoL#Heartbreaker" title="Heartbreaker"><img alt="Heartbreaker" src="/wiki/images/Viego_Heartbreaker.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viego/LoL#Heartbreaker" title="Viego/LoL">Heartbreaker</a></span></span></i> and <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> while facing an enemy champion.',
    ],
    description: [
      {
        icon: "/wiki/images/Sovereign's Domination 2.png",
        description:
          "Innate: Whenever Viego scores an enemy champion  takedown while alive and within 3 seconds of damaging them, a Mist Wraith spawns from that champion's corpse for 8 seconds. Viego can basic attack a Mist Wraith to consume it: causing him to  blink to its location after winding up for 1 second, during which he is  untargetable (except to  turrets) and  unable to act. He then gains Possession and  heals himself for 2% (+ 2.5% per 100 bonus AD) (+ 2% per 100 AP) (+ 5% per 100% bonus attack speed) of the target's maximum health.",
        descriptionHTML:
          '<span class="template_sbc"><b>Innate:</b></span> Whenever <b>Viego</b> scores an enemy champion <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Takedown"><a href="/wiki/Takedown" title="Takedown"><img alt="Damage rating.png" src="/wiki/images/Damage_rating.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Takedown" title="Takedown">takedown</a></span> while alive and within 3 seconds of damaging them, a <i>Mist Wraith</i> spawns from that champion\'s corpse for 8 seconds. <b>Viego</b> can basic attack a <i>Mist Wraith</i> to consume it: causing him to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blink</a></span> to its location after winding up for 1 second, during which he is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span> (except to <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turrets"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span>) and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Lockout"><a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)#Lockout"><img alt="Lockout icon 2.png" src="/wiki/images/Lockout_icon_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Terminology_(League_of_Legends)#Lockout" title="Terminology (League of Legends)">unable to act</a></span>. He then gains <i>Possession</i> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heals"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heals</a></span> himself for <span style="color: #1F995C; white-space:normal">2%</span> <span style="color:orange; white-space:normal">(+&nbsp;2.<small>5</small>% per 100 <b>bonus</b> AD)</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;2% per 100 AP)</span> <span style="color:orangered; white-space:normal">(+&nbsp;5% per 100% <b>bonus</b> attack speed)</span> <span style="color: #1F995C; white-space:normal">of the target\'s <b>maximum</b> health</span>.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Innate:',
            raw: " Whenever Viego scores an enemy champion  takedown while alive and within 3 seconds of damaging them, a Mist Wraith spawns from that champion's corpse for 8 seconds",
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              "Viego scores an enemy champion  takedown while alive and within 3 seconds of damaging them, a Mist Wraith spawns from that champion's corpse for 8 seconds",
            pre: "Whenever Viego scores an enemy champion  takedown while alive and within 3 seconds of damaging them, a Mist Wraith spawns from that champion's corpse for 8 seconds",
          },
          {
            effectType: 'Unique',
            name: 'Viego can basic attack a Mist Wraith to consume it:',
            raw: ' causing him to  blink to its location after winding up for 1 second, during which he is  untargetable (except to  turrets) and  unable to act',
            values: 1,
            user: 'none',
            units: '',
            unitsText: 'and  unable to act',
            pre: 'causing him to  blink to its location after winding up for 1 second, during which he is  untargetable',
            post: 'and  unable to act',
            children: [
              {
                values: 0,
                user: 'none',
                units: '',
                unitsText: 'except to  turrets',
                pre: 'except to  turrets',
              },
            ],
          },
          {
            effectType: 'Heal',
            name: 'Line 3:',
            raw: "He then gains Possession and  heals himself for 2% (+ 2.5% per 100 bonus AD) (+ 2% per 100 AP) (+ 5% per 100% bonus attack speed) of the target's maximum health.",
            healType: 'OutgoingHeals',
            values: 2,
            valuesIsPercent: true,
            user: 'target',
            units: 'maximum_hp',
            unitsText: "of the target's maximum health.",
            pre: 'He then gains Possession and  heals himself for 2%',
            post: "of the target's maximum health.",
            children: [
              {
                values: 2.5,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'per 100 bonus AD',
                pre: '+ 2.5% per 100 bonus AD',
              },
              {
                values: 2,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 2% per 100 AP',
              },
              {
                values: 5,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: 'per 100',
                pre: '+ 5% per 100% bonus attack speed',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: "/wiki/images/Sovereign's Domination.png",
        description:
          "Possession: For 10 seconds, Viego assumes the enemy champion's form and gains their basic attacks, basic abilities, items, and base stats (based on Viego's level). He also gains a free cast of  Heartbreaker, which is initially placed on a  1.5-second cooldown, and  10% bonus movement speed while facing enemy champions within 2500 units.",
        descriptionHTML:
          '<span class="template_sbc"><b>Possession:</b></span> For 10 seconds, <b>Viego</b> assumes the enemy champion\'s form and gains their <a href="/wiki/Basic_attack" title="Basic attack">basic attacks</a>, <a href="/wiki/Champion_ability" title="Champion ability">basic abilities</a>, <a href="/wiki/Item" class="mw-redirect" title="Item">items</a>, and base <a href="/wiki/Champion_statistic" title="Champion statistic">stats</a> (based on <b>Viego\'s</b> <a href="/wiki/Experience_(champion)" title="Experience (champion)">level</a>). He also gains a free cast of <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viego" data-ability="Heartbreaker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viego/LoL#Heartbreaker" title="Heartbreaker"><img alt="Heartbreaker" src="/wiki/images/Viego_Heartbreaker.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viego/LoL#Heartbreaker" title="Viego/LoL">Heartbreaker</a></span></span></i>, which is initially placed on a <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;1.<small>5</small>-second</span> cooldown, and <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal">10% <b>bonus</b> movement speed</span></span> while facing enemy champions within 2500 units.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Possession:',
            raw: " For 10 seconds, Viego assumes the enemy champion's form and gains their basic attacks, basic abilities, items, and base stats (based on Viego's level)",
            increasedStat: 'base_ad',
            values: 1,
            basedOn: "Viego's level",
            units: '',
            unitsText:
              "10 seconds, Viego assumes the enemy champion's form and gains their basic attacks, basic abilities, items, and base stats",
            pre: "For 10 seconds, Viego assumes the enemy champion's form and gains their basic attacks, basic abilities, items, and base stats",
          },
          {
            effectType: 'Gain',
            name: 'Line 2:',
            raw: 'He also gains a free cast of  Heartbreaker, which is initially placed on a  1.5-second cooldown, and  10% bonus movement speed while facing enemy champions within 2500 units.',
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'bonus movement speed while facing enemy champions within 2500 units.also gains a free cast of  Heartbreaker, which is initially placed on a  1.5-second cooldown, and  10',
            pre: 'He also gains a free cast of  Heartbreaker, which is initially placed on a  1.5-second cooldown, and  10% bonus movement speed while facing enemy champions within 2500 units.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Viego cannot use item actives, consumable items, nor the shop during Possession. Casting  Heartbreaker or attacking a Mist Wraith ends Possession immediately.',
        descriptionHTML:
          '<b>Viego</b> cannot use <a href="/wiki/Active_ability_items" title="Active ability items">item actives</a>, <a href="/wiki/Consumable_item" title="Consumable item">consumable items</a>, nor the <a href="/wiki/Shop" title="Shop">shop</a> during <i>Possession</i>. Casting <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viego" data-ability="Heartbreaker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viego/LoL#Heartbreaker" title="Heartbreaker"><img alt="Heartbreaker" src="/wiki/images/Viego_Heartbreaker.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viego/LoL#Heartbreaker" title="Viego/LoL">Heartbreaker</a></span></span></i> or attacking a <i>Mist Wraith</i> ends <i>Possession</i> immediately.',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Viego will preserve his current health percentage between transformations.',
        descriptionHTML:
          '<i><b>Viego</b> will preserve his <span style="color: #1F995C; white-space:normal"><b>current</b> health percentage</span> between transformations.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Passive',
    affects: '',
    notes:
      '* <b>Viego</b> will copy the possessed champion\'s ability ranks.\n<ul><li><ul><li><b>Viego</b> cannot level up their abilities with his available skill points.</li></ul></li>\n<li><i>Mist Wraiths</i> will expire when <b>Viego</b> dies, and they will not expire while he is winding up on them.</li>\n<li><b>Viego</b> gains the bonus movement speed during possession even while moving towards nearby enemy champions that are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetable"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetable</a></span>.</li>\n<li>Finishing the possessing attack against a <i>Mist Wraith</i> kills it, rewarding <b>Viego</b> an extra <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="3 Gold"><img alt="3 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">3</span></span> as he becomes the target champion.</li>\n<li>The wind up\'s <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Untargetability"><a href="/wiki/Untargetable" title="Untargetable"><img alt="Untargetable icon.png" src="/wiki/images/Untargetable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Untargetable" class="mw-redirect" title="Untargetable">untargetability</a></span> does not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Homing projectile destruction"><a href="/wiki/Projectile" title="Projectile"><img alt="Bullet strikethrough.png" src="/wiki/images/Bullet_strikethrough.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">destroy</a></span> in-flight <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Projectiles"><a href="/wiki/Projectile" title="Projectile"><img alt="Projectile.png" src="/wiki/images/Projectile.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Projectile" title="Projectile">projectiles</a></span> from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Turret"><a href="/wiki/Turret" title="Turret"><img alt="Turret icon.png" src="/wiki/images/Turret_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Turret" title="Turret">turrets</a></span>.</li>\n<li>The possessed champion\'s abilities do not cost any <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Mana"><a href="/wiki/Mana" title="Mana"><img alt="Mana resource.png" src="/wiki/images/Mana_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Mana" title="Mana">mana</a></span> or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Energy"><a href="/wiki/Energy" title="Energy"><img alt="Energy resource.png" src="/wiki/images/Energy_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Energy" title="Energy">energy</a></span> even if that specific champion normally uses either as a <a href="/wiki/Casting_resource" class="mw-redirect" title="Casting resource">casting resource</a>.\n<ul><li><a href="/wiki/Manaless#Alternative_gating_mechanics" title="Manaless">Alternative resources</a>, such as <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Fury"><a href="/wiki/Manaless#Fury" title="Manaless#Fury"><img alt="Fury resource.png" src="/wiki/images/Fury_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Fury" title="Manaless">Fury</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Flow"><a href="/wiki/Flow" title="Flow"><img alt="Flow resource.png" src="/wiki/images/Flow_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Flow" class="mw-redirect" title="Flow">Flow</a></span>, or <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Health resource"><a href="/wiki/Manaless#Health" title="Manaless#Health"><img alt="Health resource.png" src="/wiki/images/Health_resource.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Manaless#Health" title="Manaless">Health</a></span>, will still be utilized.</li></ul></li>\n<li>The current cooldowns of <b>Viego\'s</b> abilities will <b>not</b> be reset between transformations.\n<ul><li>Those of the possessed champion\'s abilities will be reset between transformations.</li>\n<li>This does not apply to the following long-cooldown abilities. <b>Viego</b> specifically tracks their proper cooldowns which can be seen via a buff in his hotbar for each when applicable.\n<ul><li><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Anivia" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Anivia/LoL" title="Anivia\'s"><img alt="Anivia\'s" src="/wiki/images/Anivia_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Anivia/LoL" title="Anivia/LoL">Anivia\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Anivia" data-ability="Rebirth" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Anivia/LoL#Rebirth" title="Rebirth"><img alt="Rebirth" src="/wiki/images/Anivia_Rebirth.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Anivia/LoL#Rebirth" title="Anivia/LoL">Rebirth</a></span></span></span></li>\n<li><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Azir" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Azir/LoL" title="Azir\'s"><img alt="Azir\'s" src="/wiki/images/Azir_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Azir/LoL" title="Azir/LoL">Azir\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Azir" data-ability="Shurima\'s Legacy" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Azir/LoL#Shurima\'s_Legacy" title="Shurima\'s Legacy"><img alt="Shurima\'s Legacy" src="/wiki/images/Azir_Shurima%27s_Legacy.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Azir/LoL#Shurima\'s_Legacy" title="Azir/LoL">Shurima\'s Legacy</a></span></span></span></li>\n<li><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Corki" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Corki/LoL" title="Corki\'s"><img alt="Corki\'s" src="/wiki/images/Corki_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Corki/LoL" title="Corki/LoL">Corki\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Corki" data-ability="The Package" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Corki/LoL#The_Package" title="&quot;Special Delivery&quot; Package"><img alt="&quot;Special Delivery&quot; Package" src="/wiki/images/Corki_The_Package.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Corki/LoL#The_Package" title="Corki/LoL">"Special Delivery" Package</a></span></span></span></li>\n<li><span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zac" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zac/LoL" title="Zac\'s"><img alt="Zac\'s" src="/wiki/images/Zac_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zac/LoL" title="Zac/LoL">Zac\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Zac" data-ability="Cell Division" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Zac/LoL#Cell_Division" title="Cell Division"><img alt="Cell Division" src="/wiki/images/Zac_Cell_Division.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Zac/LoL#Cell_Division" title="Zac/LoL">Cell Division</a></span></span></span></li></ul></li></ul></li>\n<li>The passive cooldowns of items are shared between <b>Viego\'s</b> and the possessed champion\'s.\n<ul><li>This does not apply to <a href="/wiki/Named_item_effect#Lifeline" title="Named item effect">Lifeline</a> items.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup></li></ul></li>\n<li>Once <i>possession</i> ends, <b>Viego</b> returns to his normal state and certain effects gained from the possessed champion\'s abilities will be immediately removed.\n<ul><li>Some buffs will be kept and some buffs will be lost.\n<ul><li><b>Viego</b> will almost always keep <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Shield"><a href="/wiki/Shield" title="Shield"><img alt="Hybrid resistances icon.png" src="/wiki/images/Hybrid_resistances_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Shield" title="Shield">shields</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell shield"><a href="/wiki/Spell_shield" title="Spell shield"><img alt="Spell Shield.png" src="/wiki/images/Sivir_Spell_Shield.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Spell_shield" title="Spell shield">spell shields</a></span>.</li>\n<li><a href="/wiki/Passive" title="Passive">Passive</a> effects will be lost by default, as <b>Viego</b> no longer has their abilities.</li></ul></li>\n<li><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">Channeled abilities</a></span> maintained will be interrupted.</li>\n<li><a href="/wiki/Champion_ability" title="Champion ability">Toggled abilities</a> will be automatically toggled off.</li></ul></li>\n<li><b>Viego</b> retains his own <a href="/wiki/Summoner_spell" title="Summoner spell">summoner spells</a>, <a href="/wiki/Trinket_item" title="Trinket item">trinket item</a>, and <a href="/wiki/Rune" class="mw-redirect" title="Rune">runes</a> during <i>possession</i>.</li>\n<li><i>Mist Wraiths</i> will still spawn while <b>Viego</b> is in a zombie state.</li>\n<li><i>Sovereign\'s Domination</i> will not summon a <i>Mist Wraith</i> from <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clones</a></span>.</li>\n<li>The <i>possession</i> will not expire while <b>Viego</b> is in a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Zombie state"><a href="/wiki/Death#Zombie_states" title="Death#Zombie states"><img alt="Zombie icon.png" src="/wiki/images/Zombie_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Zombie_states" title="Death">zombie state</a></span>.\n<ul><li>While in a zombie state, <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viego" data-ability="Heartbreaker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viego/LoL#Heartbreaker" title="Heartbreaker"><img alt="Heartbreaker" src="/wiki/images/Viego_Heartbreaker.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viego/LoL#Heartbreaker" title="Viego/LoL">Heartbreaker</a></span></span></i> is disabled.</li>\n<li>If <b>Viego</b> enters a zombie state while winding up on a <i>Mist Wraith</i>, the possession will still last its normal duration.<sup><span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="This may not be intended.">(bug)</span></sup></li></ul></li>\n<li>The <i>possession</i> will not end prematurely if <b>Viego</b> enters <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Resurrection"><a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death#Ways to prevent death when reaching zero health"><img alt="Revival icon.png" src="/wiki/images/Revival_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Death#Ways_to_prevent_death_when_reaching_zero_health" title="Death">resurrection</a></span>.</li>\n<li>The <i>possession</i> will acquire the basic abilities of shapeshifting champions (e.g. <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Elise" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elise/LoL" title="Elise\'s"><img alt="Elise\'s" src="/wiki/images/Elise_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elise/LoL" title="Elise/LoL">Elise\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Elise" data-ability="Spider Form / Human Form" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Elise/LoL#Spider_Form_/_Human_Form" title="Spider Form / Human Form"><img alt="Spider Form / Human Form" src="/wiki/images/Elise_Spider_Form.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Elise/LoL#Spider_Form_/_Human_Form" title="Elise/LoL">Spider Form / Human Form</a></span></span></span>, <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jayce" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jayce/LoL" title="Jayce\'s"><img alt="Jayce\'s" src="/wiki/images/Jayce_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jayce/LoL" title="Jayce/LoL">Jayce\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jayce" data-ability="Transform Mercury Cannon" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jayce/LoL#Transform_Mercury_Cannon" title="Transform Mercury Cannon"><img alt="Transform Mercury Cannon" src="/wiki/images/Jayce_Transform_Mercury_Cannon.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jayce/LoL#Transform_Mercury_Cannon" title="Jayce/LoL">Transform Mercury Cannon</a></span></span></span> / <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Jayce" data-ability="Transform Mercury Hammer" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Jayce/LoL#Transform_Mercury_Hammer" title="Transform Mercury Hammer"><img alt="Transform Mercury Hammer" src="/wiki/images/Jayce_Transform_Mercury_Hammer.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Jayce/LoL#Transform_Mercury_Hammer" title="Jayce/LoL">Transform Mercury Hammer</a></span></span>, and <span class="champion-ability-icon"><span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nidalee" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nidalee/LoL" title="Nidalee\'s"><img alt="Nidalee\'s" src="/wiki/images/Nidalee_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nidalee/LoL" title="Nidalee/LoL">Nidalee\'s</a></span></span> <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Nidalee" data-ability="Aspect of the Cougar" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Nidalee/LoL#Aspect_of_the_Cougar" title="Aspect of the Cougar"><img alt="Aspect of the Cougar" src="/wiki/images/Nidalee_Aspect_of_the_Cougar.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Nidalee/LoL#Aspect_of_the_Cougar" title="Nidalee/LoL">Aspect of the Cougar</a></span></span></span>) based on which form they died as.</li>\n<li><i>Mist Wraiths</i> are considered <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Clone"><a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units#decoys"><img alt="Command Hallucinate.png" src="/wiki/images/Shaco_Command-_Hallucinate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Champion_summoned_units#decoys" title="Champion summoned units">clones</a></span> and can only be targeted by <b>Viego</b>.</li>\n<li>If <b>Viego</b> possesses an enemy champion who owns <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Dark Seal" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Dark_Seal" title="Dark Seal"><img alt="Dark Seal" src="/wiki/images/Dark_Seal_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Dark_Seal" title="Dark Seal">Dark Seal</a></span></span> or <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Mejai\'s Soulstealer" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Mejai%27s_Soulstealer" title="Mejai\'s Soulstealer"><img alt="Mejai\'s Soulstealer" src="/wiki/images/Mejai%27s_Soulstealer_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Mejai%27s_Soulstealer" title="Mejai\'s Soulstealer">Mejai\'s Soulstealer</a></span></span>, he will gain their <a href="/wiki/Named_item_effect#Glory" title="Named item effect">Glory</a> stacks for the possession.</li>\n<li>As <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Cull" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cull" title="Cull"><img alt="Cull" src="/wiki/images/Cull_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cull" title="Cull">Cull</a></span></span> tracks its progress for each player even if they do not possess the item at the time, <b>Viego</b> may discharge stacks for the benefit of <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="1 Gold"><img alt="1 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">1</span></span> each per <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minion"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minion</a></span> kill, and if <b>Viego</b> killed 100 minions possessing <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Cull" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cull" title="Cull"><img alt="Cull" src="/wiki/images/Cull_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cull" title="Cull">Cull</a></span></span>, no matter whether bought himself or acquired via a possessed champion\'s inventory, he receives the <span class="inline-image label-after" style="display:inline;color:gold;white-space:pre;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;" data-param=""><span style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Gold" title="350 Gold"><img alt="350 Gold" src="/wiki/images/Gold.png" decoding="async" loading="lazy" width="20" height="15" class="lazyload"></a></span> <span style="white-space:normal;">350</span></span> payout and can no longer discharge stacks.\n<ul><li>This entire interaction does not interact with the state of the <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Cull" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cull" title="Cull"><img alt="Cull" src="/wiki/images/Cull_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cull" title="Cull">Cull</a></span></span> stacks of the enemy.</li>\n<li>The stacks shown on the item in the inventory and scoreboard may not update properly, however.</li></ul></li>\n<li>If <b>Viego</b> possesses an enemy champion who owns <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Relic Shield" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Relic_Shield" title="Relic Shield"><img alt="Relic Shield" src="/wiki/images/Relic_Shield_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Relic_Shield" title="Relic Shield">Relic Shield</a></span></span>, <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Steel Shoulderguards" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Steel_Shoulderguards" title="Steel Shoulderguards"><img alt="Steel Shoulderguards" src="/wiki/images/Steel_Shoulderguards_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Steel_Shoulderguards" title="Steel Shoulderguards">Steel Shoulderguards</a></span></span>, <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Spellthief\'s Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Spellthief%27s_Edge" title="Spellthief\'s Edge"><img alt="Spellthief\'s Edge" src="/wiki/images/Spellthief%27s_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Spellthief%27s_Edge" title="Spellthief\'s Edge">Spellthief\'s Edge</a></span></span>, or <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Spectral Sickle" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Spectral_Sickle" title="Spectral Sickle"><img alt="Spectral Sickle" src="/wiki/images/Spectral_Sickle_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Spectral_Sickle" title="Spectral Sickle">Spectral Sickle</a></span></span>, the gold gained from using any one of the items will also count towards <b>Viego\'s</b> own <a href="/wiki/Named_item_effect#Quest" title="Named item effect">Quest</a>.</li>\n<li>If <b>Viego</b> possesses an enemy champion who owns <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Tear of the Goddess" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tear_of_the_Goddess" title="Tear of the Goddess"><img alt="Tear of the Goddess" src="/wiki/images/Tear_of_the_Goddess_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tear_of_the_Goddess" title="Tear of the Goddess">Tear of the Goddess</a></span></span>, the stacks it has will be transferred to his <span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Tear of the Goddess" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Tear_of_the_Goddess" title="Tear of the Goddess"><img alt="Tear of the Goddess" src="/wiki/images/Tear_of_the_Goddess_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Tear_of_the_Goddess" title="Tear of the Goddess">Tear of the Goddess</a></span></span> if he owns one.</li>\n<li>The following table refers for interactions while <b>Viego</b> is winding up on a <i>Mist Wraith</i>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n\n<tbody><tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All items are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death\n</li></td></tr></tbody></table>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Viego_Original_KillFirst_3.ogg   "You will serve!"',
  },
  'Blade of the Ruined King': {
    name: 'Blade of the Ruined King',
    display_name: 'Blade of the Ruined King',
    champion: 'Viego',
    skill: 'Q',
    maxrank: 5,
    image: {
      full: 'ViegoQ.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 384,
      y: 96,
      w: 48,
      h: 48,
    },
    range: '-25 - 600',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Rectangle full width">125</span>',
    cast_time:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Always equal to 140% of Viego\'s attack windup"><span style="color:orangered; white-space:normal">0.<small>35</small> (at base attack speed)</span></span>',
    cooldown: '5 / 4.<small>5</small> / 4 / 3.<small>5</small> / 3',
    blurb: [
      '<span class="template_sbc"><b>Passive:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viego" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viego/LoL" title="Viego\'s"><img alt="Viego\'s" src="/wiki/images/Viego_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viego/LoL" title="Viego/LoL">Viego\'s</a></span></span> basic attacks deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> by a portion of the <span style="color: #1F995C; white-space:normal">target\'s <b>current</b> health</span>.\n<p><b>Viego\'s</b> damaging abilities apply a mark to enemies hit, his next basic attack will consume the mark to strike a second time, dealing <span style="color: #FF8C34; white-space:normal"><b>modified</b> physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Healing"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> him based on the damage dealt.\n</p>',
      '<span class="template_sbc"><b>Active:</b></span> <b>Viego</b> stabs in a line in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit based on his <span style="color: #E56013; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike chance icon.png" src="/wiki/images/Critical_strike_chance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;critical strike chance</span></span>.',
      '<i>Blade of the Ruined King\'s</i> passive remains under <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viego" data-ability="Sovereign\'s Domination" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viego/LoL#Sovereign\'s_Domination" title="Possession"><img alt="Possession" src="/wiki/images/Viego_Sovereign%27s_Domination.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viego/LoL#Sovereign\'s_Domination" title="Viego/LoL">Possession</a></span></span></i>.',
    ],
    description: [
      {
        description:
          "Passive: Viego's basic attacks are empowered to deal bonus physical damage  on-hit, which has a minimum threshold and is capped at 80 against  monsters.",
        descriptionHTML:
          '<span class="template_sbc"><b>Passive:</b></span> <b>Viego\'s</b> basic attacks are empowered to deal <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span>, which has a minimum threshold and is capped at 80 against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monsters"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monsters</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Passive:',
            raw: " Viego's basic attacks are empowered to deal bonus physical damage  on-hit, which has a minimum threshold and is capped at 80 against  monsters.",
            increasedStat: 'total_ap',
            values: 8,
            units: '',
            unitsText:
              'basic attacks are empowered to deal bonus physical damage  on-hit, which has a minimum threshold and is capped at 80 against  monsters.',
            pre: "Viego's basic attacks are empowered to deal bonus physical damage  on-hit, which has a minimum threshold and is capped at 80 against  monsters.",
          },
        ],
        leveling: [
          {
            name: 'Bonus Physical Damage:',
            values: "2 / 3 / 4 / 5 / 6% of target's current health",
            valuesHTML:
              '<span style="color: #1F995C; white-space:normal">2 / 3 / 4 / 5 / 6% of target\'s <b>current</b> health</span>',
          },
          {
            name: 'Minimum Bonus Damage:',
            values: '10 / 15 / 20 / 25 / 30',
            valuesHTML: '10 / 15 / 20 / 25 / 30',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Bonus Physical Damage:',
            raw: "2 / 3 / 4 / 5 / 6% of target's current health",
            healType: 'PhysicalVamp',
            values: [2, 3, 4, 5, 6],
            valuesIsPercent: true,
            user: 'target',
            units: 'current_hp',
            unitsText: "of target's current health",
            pre: "2 / 3 / 4 / 5 / 6% of target's current health",
          },
          {
            effectType: 'Damage',
            name: 'Minimum Bonus Damage:',
            raw: '10 / 15 / 20 / 25 / 30',
            damagetype: 'None',
            values: [10, 15, 20, 25, 30],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '10 / 15 / 20 / 25 / 30',
          },
        ],
      },
      {
        description:
          "Additionally, his damaging abilities apply a mark to enemies hit for 4 seconds. Viego's next basic attack against a marked target is empowered to consume the mark  on-hit to strike a second time, dealing 20% AD (+ 15% AP) physical damage and  healing him for 135% of the post-mitigation damage dealt, increased to 145% against monsters and reduced to 10% against  minions.",
        descriptionHTML:
          'Additionally, his damaging <a href="/wiki/Champion_ability" title="Champion ability">abilities</a> apply a mark to enemies hit for 4 seconds. <b>Viego\'s</b> next basic attack against a marked target is empowered to consume the mark <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> to strike a second time, dealing <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Scales on current AD and AP"><span style="color:orange; white-space:normal">20% AD</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;15% AP)</span></span> <span style="color: #FF8C34; white-space:normal">physical damage</span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">healing</a></span> him for 135% of the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Damage calculated after modifiers">post-mitigation damage</span> dealt, increased to 145% against monsters and reduced to 10% against <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Minions"><a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)"><img alt="Minion icon.png" src="/wiki/images/Minion_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Minion_(League_of_Legends)" title="Minion (League of Legends)">minions</a></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'Additionally, his damaging abilities apply a mark to enemies hit for 4 seconds',
            damagetype: 'None',
            values: 4,
            units: 'total_ap',
            unitsText:
              'his damaging abilities apply a mark to enemies hit for 4 seconds',
            pre: 'Additionally, his damaging abilities apply a mark to enemies hit for 4 seconds',
          },
          {
            effectType: 'Heal',
            name: 'Line 2:',
            raw: "Viego's next basic attack against a marked target is empowered to consume the mark  on-hit to strike a second time, dealing 20% AD (+ 15% AP) physical damage and  healing him for 135% of the post-mitigation damage dealt, increased to 145% against monsters and reduced to 10% against  minions.",
            healType: 'PhysicalVamp',
            values: 2,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              'physical damage and  healing him for 135% of the post-mitigation damage dealt, increased to 145% against monsters and reduced to 10% against  minions.',
            pre: "Viego's next basic attack against a marked target is empowered to consume the mark  on-hit to strike a second time, dealing 20% AD",
            post: 'physical damage and  healing him for 135% of the post-mitigation damage dealt, increased to 145% against monsters and reduced to 10% against  minions.',
            children: [
              {
                values: 15,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 15% AP',
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'The second strike can  critically strike for 35% (+  7%) AD (+ 26.25% (+ 5.25%) AP) physical damage and applies  on-hit effects at 100% effectiveness.',
        descriptionHTML:
          'The second strike can <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> for <span style="color:orange; white-space:normal">35% (+&nbsp;<span class="inline-image item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="Infinity Edge"><img alt="Infinity Edge item.png" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span></span> 7%) AD</span> <span style="color: #7A6DFF; white-space:normal">(+&nbsp;26.25% (+<span class="inline-image item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="Infinity Edge"><img alt="Infinity Edge item.png" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span></span> 5.25%) AP)</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> and applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects at 100% effectiveness.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'The second strike can  critically strike for 35% (+  7%) AD (+ 26.25% (+ 5.25%) AP) physical damage and applies  on-hit effects at 100% effectiveness.',
            damagetype: 'Physical',
            values: 3,
            valuesIsPercent: true,
            units: 'total_ad',
            unitsText: 'AD',
            pre: 'The second strike can  critically strike for 35%',
            post: 'AD',
            children: [
              {
                values: 7,
                valuesIsPercent: true,
                user: 'none',
                units: '',
                unitsText: '',
                pre: '+  7%',
              },
              {
                values: 26.25,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'AP',
                pre: '+ 26.25%',
                post: 'AP',
                children: [
                  {
                    values: 5.25,
                    valuesIsPercent: true,
                    user: 'none',
                    units: '',
                    unitsText: '',
                    pre: '+ 5.25%',
                  },
                ],
              },
            ],
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Blade of the Ruined King.png',
        description:
          'Active: Viego stabs in a line in the target direction that deals physical damage to enemies hit, increased by 0% − 100% (based on critical strike chance), and 20 bonus physical damage against monsters.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Viego</b> stabs in a line in the target direction that deals <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies hit, increased by <span style="color: #E56013; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="critical strike chance" data-displayformula="1 × critical strike chance" data-bot_values="0;10;20;30;40;50;60;70;80;90;100" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 100% (based on critical strike chance)</span></span>, and <span style="color: #FF8C34; white-space:normal">20 <b>bonus</b> physical damage</span> against monsters.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Physical Damage:',
            values:
              '15 / 30 / 45 / 60 / 75 (+ 70% AD) × (1 + (100% +  0%) critical strike chance)',
            valuesHTML:
              '15 / 30 / 45 / 60 / 75 <span style="color:orange; white-space:normal">(+&nbsp;70% AD)</span><br>&nbsp;×&nbsp;<span style="color: #E56013; white-space:normal">(1 +&nbsp;(100%&nbsp;+&nbsp;<span class="inline-image label-after item-icon" style="display:inline;white-space:pre;" data-param="" data-item="Infinity Edge" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Infinity_Edge" title="0%"><img alt="0%" src="/wiki/images/Infinity_Edge_item.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Infinity_Edge" title="Infinity Edge">0%</a></span></span>) critical strike chance)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Physical Damage:',
            raw: '15 / 30 / 45 / 60 / 75 (+ 70% AD) × (1 + (100% +  0%) critical strike chance)',
            damagetype: 'Physical',
            values: [15, 30, 45, 60, 75],
            user: 'none',
            units: '',
            unitsText: '×',
            pre: '15 / 30 / 45 / 60 / 75',
            post: '×',
            children: [
              {
                values: 70,
                valuesIsPercent: true,
                units: 'total_ad',
                unitsText: 'AD',
                pre: '+ 70% AD',
              },
              {
                values: 1,
                units: 'total_critchance',
                unitsText: 'critical strike chance',
                pre: '1 +',
                post: 'critical strike chance',
                children: [
                  {
                    values: 100,
                    valuesIsPercent: true,
                    user: 'none',
                    units: '',
                    unitsText: '+  0',
                    pre: '100% +  0%',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        description:
          "Blade of the Ruined King's passive remains under  Possession, and while transformed, the second strike is instead converted to bonus damage on-hit which no longer applies on-hit effects but can still  critically strike (based on possessed stats).",
        descriptionHTML:
          '<i>Blade of the Ruined King\'s passive remains under </i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viego" data-ability="Sovereign\'s Domination" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viego/LoL#Sovereign\'s_Domination" title="Possession"><img alt="Possession" src="/wiki/images/Viego_Sovereign%27s_Domination.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viego/LoL#Sovereign\'s_Domination" title="Viego/LoL">Possession</a></span></span><i>, and while transformed, the second strike is instead converted to <b>bonus</b> damage on-hit which no longer applies on-hit effects but can still <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critically strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critically strike</a></span> (based on possessed stats).</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Self, Enemies',
    damagetype: 'Physical',
    spelleffects: 'special',
    spellshield: true,
    projectile: 'false',
    notes:
      '* The mark will not be applied to the primary target struck by <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viego" data-ability="Heartbreaker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viego/LoL#Heartbreaker" title="Heartbreaker"><img alt="Heartbreaker" src="/wiki/images/Viego_Heartbreaker.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viego/LoL#Heartbreaker" title="Viego/LoL">Heartbreaker</a></span></span></i>, but it can triggered from it.\n<ul><li><i>Blade of the Ruined King\'s</i> cast time is always 140% of the caster\'s attack windup time.\n<ul><li>At base attack speed, <b>Viego\'s</b> attack windup is 0.<small>25</small> seconds.</li>\n<li>An easy formula to calculate the cast time is [ 0.<small>23</small> seconds divided by <span style="color:orangered; white-space:normal"><b>total</b> attack speed</span> ].</li>\n<li>Reducing <b>Viego\'s</b> attack speed via <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cripple"><a href="/wiki/Cripple" title="Cripple"><img alt="Cripple icon.png" src="/wiki/images/Cripple_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Cripple" class="mw-redirect" title="Cripple">attack speed reductions</a></span> also increases <i>Blade of the Ruined King\'s</i> cast time by the same fraction.</li>\n<li>It is calculated from <b>Viego\'s</b> total attack speed after cap (2.5) and floor (0.2), making the maximum possible cast time <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="1.152 seconds, but rounded up to the next game tick.">1.<small>155</small> seconds</span>.</li>\n<li><i>Blade of the Ruined King\'s</i> cast time becomes the same as the standard <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="0.25 seconds, but rounded up to the next game tick.">0.<small>264</small> seconds</span> cast time for most abilities at <span style="color:orangered; white-space:normal">32.<small>6</small>% <b>bonus</b> attack speed</span>.</li></ul></li>\n<li>Applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span> for the thrust and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Proc damage"><a href="/wiki/Damage" title="Damage"><img alt="Wit\'s End item.png" src="/wiki/images/Wit%27s_End_item.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">proc damage</a></span> for the bonus damage on-hit and second strike.</li>\n<li>This ability will cast from wherever the caster is at the end of the cast time.</li>\n<li><b>Viego</b> will not perform the second strike if the first attack was <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blocked"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span>, and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">missed</a></span>.</li>\n<li>The second strike rolls <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Critical strike"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike icon.png" src="/wiki/images/Critical_strike_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Critical_strike" title="Critical strike">critical strike</a></span> independently from the triggering attack.</li>\n<li>If the second strike hits a dead unit, <b>Viego</b> will still <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing" title="Healing"><img alt="Heal power icon.png" src="/wiki/images/Heal_power_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Healing" title="Healing">heal</a></span> based on the post-mitigation damage that he would deal with it.</li>\n<li>The attacks do not deal the <b>bonus</b> damage against <a href="/wiki/Structures" class="mw-redirect" title="Structures">structures</a>.</li></ul>',
  },
  'Spectral Maw': {
    name: 'Spectral Maw',
    display_name: 'Spectral Maw',
    champion: 'Viego',
    skill: 'W',
    maxrank: 5,
    image: {
      full: 'ViegoW.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 432,
      y: 96,
      w: 48,
      h: 48,
    },
    target_range: '300 /  500 − 900 (based on channel time)',
    width:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Er"><a href="/wiki/Range" title="Range"><img alt="Range model.png" src="/wiki/images/Range_model.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Mist missile width">120</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Dash speed">1000</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Missile speed">1300</span>',
    cast_time: 'none',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts when the channel ends">8</span>',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viego" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viego/LoL" title="Viego"><img alt="Viego" src="/wiki/images/Viego_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viego/LoL" title="Viego/LoL">Viego</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">charges</a></span> up to a short time to increase the <span style="white-space:nowrap"><a href="/wiki/Range" title="Range"><img alt="Range icon.png" src="/wiki/images/Range_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;range</span> and stun of his blast. <i>Spectral Maw</i> can be recast within the duration and automatically cancels afterwards.',
      '<span class="template_sbc"><b>Recast:</b></span> <b>Viego</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dashes"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> in the target direction, hurling a blast of mist that deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit and briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stuns"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> them based on charge time.',
    ],
    description: [
      {
        icon: '/wiki/images/Spectral Maw.png',
        description:
          "Active: Viego  charges while being  slowed by 10% for up to 3 seconds to increase Spectral Maw's missile range and  stun duration over the first second of the channel.",
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Viego</b> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">charges</a></span> while being <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowed</a></span> by 10% for up to 3 seconds to increase <i>Spectral Maw\'s</i> missile range and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stun"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stun</a></span> duration over the first second of the channel.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: " Viego  charges while being  slowed by 10% for up to 3 seconds to increase Spectral Maw's missile range and  stun duration over the first second of the channel.",
            values: 1,
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText:
              "for up to 3 seconds to increase Spectral Maw's missile range and  stun duration over the first second of the channel. charges while being  slowed by 10",
            pre: "Viego  charges while being  slowed by 10% for up to 3 seconds to increase Spectral Maw's missile range and  stun duration over the first second of the channel.",
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Spectral Maw can be recast within the duration. If the charge completes without reactivation, Spectral Maw is cancelled and placed on  full cooldown. If the charge is  interrupted, it will be placed on a 3-second cooldown.',
        descriptionHTML:
          '<i>Spectral Maw</i> can be recast within the duration. If the charge completes without reactivation, <i>Spectral Maw</i> is cancelled and placed on <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;full cooldown</span>. If the charge is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Interrupt"><a href="/wiki/Crowd_control#Disruption" title="Crowd control#Disruption"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Disruption" title="Crowd control">interrupted</a></span>, it will be placed on a 3-second cooldown.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Line 3:',
            raw: 'If the charge is  interrupted, it will be placed on a 3-second cooldown.',
            values: 3,
            user: 'none',
            units: '',
            unitsText:
              'the charge is  interrupted, it will be placed on a 3-second cooldown.',
            pre: 'If the charge is  interrupted, it will be placed on a 3-second cooldown.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'Recast: Viego hurls a blast of mist in the target direction and  dashes a fixed distance in the same direction, though not through terrain. The mist deals magic damage to the first enemy hit and  stuns them for 0.25 − 1.25 (based on channel time) seconds.',
        descriptionHTML:
          '<span class="template_sbc"><b>Recast:</b></span> <b>Viego</b> hurls a blast of mist in the target direction and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dash"><a href="/wiki/Dash" title="Dash"><img alt="Dash.png" src="/wiki/images/Dash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Dash" title="Dash">dashes</a></span> a fixed distance in the same direction, though not through terrain. The mist deals <span style="color: #00B0F0; white-space:normal">magic damage</span> to the first enemy hit and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Stuns"><a href="/wiki/Stun" title="Stun"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stun" class="mw-redirect" title="Stun">stuns</a></span> them for <span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="channel time" data-displayformula="0.25 + (0.25 per 0.25 seconds channeled)." data-bot_values="0.25;0.5;0.75;1;1.25" data-top_values="0;0.25;0.5;0.75;1">0.<small>25</small> − 1.<small>25</small> (based on channel time)</span> seconds.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'The mist deals magic damage to the first enemy hit and  stuns them for 0.25 − 1.25 (based on channel time) seconds.',
            damagetype: 'Magic',
            values: [0, 1.25],
            basedOn: 'channel time',
            user: 'none',
            units: '',
            unitsText: 'seconds.',
            pre: 'The mist deals magic damage to the first enemy hit and  stuns them for 0.25 − 1.25',
            post: 'seconds.',
          },
        ],
        leveling: [
          {
            name: 'Magic Damage:',
            values: '80 / 135 / 190 / 245 / 300 (+ 100% AP)',
            valuesHTML:
              '80 / 135 / 190 / 245 / 300 <span style="color: #7A6DFF; white-space:normal">(+&nbsp;100% AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Damage',
            name: 'Magic Damage:',
            raw: '80 / 135 / 190 / 245 / 300 (+ 100% AP)',
            damagetype: 'Magic',
            values: [80, 135, 190, 245, 300],
            user: 'none',
            units: '',
            unitsText: '',
            pre: '80 / 135 / 190 / 245 / 300',
            children: [
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
        description:
          "Spectral Maw  resets Viego's basic attack timer. Viego can cast any of his abilities during the dash.",
        descriptionHTML:
          '<i>Spectral Maw <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Basic attack reset"><a href="/wiki/Basic_attack#Resets" title="Basic attack#Resets"><img alt="Bladework.png" src="/wiki/images/Fiora_Bladework.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Basic_attack#Resets" title="Basic attack">resets</a></span> <b>Viego\'s</b> basic attack timer. <b>Viego</b> can cast any of his abilities during the dash.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting:
      '<a href="/wiki/Auto-targeted" class="mw-redirect" title="Auto-targeted">Auto</a> / <a href="/wiki/Direction-targeted" class="mw-redirect" title="Direction-targeted">Direction</a>',
    affects: 'Self, Enemies',
    damagetype: 'Magic',
    spelleffects: 'spell',
    spellshield: true,
    projectile: 'true',
    notes:
      '* The reduced cooldown from the charge will not occur if <i>Spectral Maw\'s</i> cooldown is already below 3 seconds.\n<ul><li>The following table refers for interactions while <b>Viego</b> is <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Channel"><a href="/wiki/Channel" title="Channel"><img alt="Channeling icon.png" src="/wiki/images/Channeling_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Channel" title="Channel">channeling</a></span>:</li></ul>\n<table class="article-table" style="font-size:small; width:475px; padding: 1em; box-shadow: #0a1827 0px 0px 25px 15px;">\n<tbody><tr>\n<th colspan="2">Type\n</th>\n<td style="width:275px;">Charge channel\n</td></tr>\n<tr>\n<th colspan="2">Attacking\n</th>\n<td>Disabled\n</td></tr>\n<tr>\n<th colspan="2">Abilities\n</th>\n<td><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viego" data-ability="Harrowed Path" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viego/LoL#Harrowed_Path" title="Harrowed Path"><img alt="Harrowed Path" src="/wiki/images/Viego_Harrowed_Path.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viego/LoL#Harrowed_Path" title="Viego/LoL">Harrowed Path</a></span></span> is usable. <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viego" data-ability="Blade of the Ruined King" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viego/LoL#Blade_of_the_Ruined_King" title="Blade of the Ruined King"><img alt="Blade of the Ruined King" src="/wiki/images/Viego_Blade_of_the_Ruined_King.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viego/LoL#Blade_of_the_Ruined_King" title="Viego/LoL">Blade of the Ruined King</a></span></span> and <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viego" data-ability="Heartbreaker" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viego/LoL#Heartbreaker" title="Heartbreaker"><img alt="Heartbreaker" src="/wiki/images/Viego_Heartbreaker.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viego/LoL#Heartbreaker" title="Viego/LoL">Heartbreaker</a></span></span> are disabled.\n</td></tr>\n<tr>\n<th colspan="2">Movement\n</th>\n<td>Allowed\n</td></tr>\n<tr>\n<th rowspan="3">Items\n</th>\n<th>Usable\n</th>\n<td>N/A\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td>All items are disabled\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td>N/A\n</td></tr>\n\n<tr>\n<th colspan="2">Consumables\n</th>\n<td>Disabled, but can still use trinkets.\n</td></tr>\n<tr>\n<th rowspan="3">Spells\n</th>\n<th>Usable\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Barrier" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Barrier" title="Barrier"><img alt="Barrier" src="/wiki/images/Barrier.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Barrier" title="Barrier">Barrier</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Clarity" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Clarity" title="Clarity"><img alt="Clarity" src="/wiki/images/Clarity.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Clarity" title="Clarity">Clarity</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Cleanse" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Cleanse" title="Cleanse"><img alt="Cleanse" src="/wiki/images/Cleanse.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Cleanse" title="Cleanse">Cleanse</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Exhaust" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Exhaust" title="Exhaust"><img alt="Exhaust" src="/wiki/images/Exhaust.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Exhaust" title="Exhaust">Exhaust</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ghost" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ghost" title="Ghost"><img alt="Ghost" src="/wiki/images/Ghost.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ghost" title="Ghost">Ghost</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Heal" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Heal" title="Heal"><img alt="Heal" src="/wiki/images/Heal.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Heal" title="Heal">Heal</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Ignite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Ignite" title="Ignite"><img alt="Ignite" src="/wiki/images/Ignite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Ignite" title="Ignite">Ignite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Smite" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Smite" title="Smite"><img alt="Smite" src="/wiki/images/Smite.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Smite" title="Smite">Smite</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Flash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Flash" title="Flash"><img alt="Flash" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Flash" title="Flash">Flash</a></span></span>\n</td></tr>\n<tr>\n<th>Disabled\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Teleport" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Teleport" title="Teleport"><img alt="Teleport" src="/wiki/images/Teleport.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Teleport" title="Teleport">Teleport</a></span></span> <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recall"><img alt="Recall" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recall</a></span></span>\n</td></tr>\n<tr>\n<th>Interrupted by\n</th>\n<td><span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Hexflash" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hexflash"><img alt="Hexflash" src="/wiki/images/Hexflash.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Hextech_Flashtraption#Hexflash" title="Hextech Flashtraption">Hexflash</a></span></span> (Recasts)\n</td></tr>\n\n<tr>\n<th colspan="2">Interrupted by\n</th>\n<td><li>Death</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/2/26/Grounded_icon.png/revision/latest?cb=20160509000039" class="image"><img alt="Grounded icon.png" src="/wiki/images/Grounded_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Grounding effects</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/9/9d/Stun_icon.png/revision/latest?cb=20171201223940" class="image"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Immobilizing effects</li><li><a href="https://static.wikia.nocookie.net/leagueoflegends/images/4/49/Silence_icon.png/revision/latest?cb=20171201223938" class="image"><img alt="Silence icon.png" src="/wiki/images/Silence_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> Cast-inhibiting effects\n</li></td></tr></tbody></table>',
  },
  'Harrowed Path': {
    name: 'Harrowed Path',
    display_name: 'Harrowed Path',
    champion: 'Viego',
    skill: 'E',
    maxrank: 5,
    image: {
      full: 'ViegoE.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 0,
      y: 144,
      w: 48,
      h: 48,
    },
    range: '775 / 8000',
    width:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Initial area width, estimated">500</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Zone from wall, estimated">500</span>',
    speed:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Initial missile speed">1600</span> / <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Speed of spreading around a wall">1200</span>',
    cast_time: 'none',
    cooldown:
      '<span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Starts when the mist expires after 8 seconds">14 / 12 / 10 / 8 / 6</span>',
    customlabel: 'Detection Radius',
    custominfo: '450',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viego" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viego/LoL" title="Viego"><img alt="Viego" src="/wiki/images/Viego_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viego/LoL" title="Viego/LoL">Viego</a></span></span> sends a spectre in the target direction that creates a trail of mist in its wake for a period. If it hits <a href="/wiki/Terrain" title="Terrain">terrain</a>, the mist is spread further around either side.',
      'While inside the mist, <b>Viego</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>. If he does not attack or cast abilities, he also gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Camouflage"><a href="/wiki/Stealth#Camouflage" title="Stealth#Camouflage"><img alt="Ambush 2.png" src="/wiki/images/Twitch_Ambush_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Camouflage" title="Stealth">camouflage</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Harrowed Path.png',
        description:
          'Active: Viego sends a spectre in the target direction that creates a trail of mist in its wake which lasts 8 seconds. If it hits terrain, the mist will spread further around either side.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Viego</b> sends a spectre in the target direction that creates a trail of mist in its wake which lasts 8 seconds. If it hits <a href="/wiki/Terrain" title="Terrain">terrain</a>, the mist will spread further around either side.',
        descriptionRatios: [
          {
            effectType: 'Unique',
            name: 'Active:',
            raw: ' Viego sends a spectre in the target direction that creates a trail of mist in its wake which lasts 8 seconds',
            values: 8,
            user: 'none',
            units: '',
            unitsText:
              'sends a spectre in the target direction that creates a trail of mist in its wake which lasts 8 seconds',
            pre: 'Viego sends a spectre in the target direction that creates a trail of mist in its wake which lasts 8 seconds',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        icon: '/wiki/images/Harrowed Path 2.png',
        description:
          'While inside the mist, Viego gains  bonus attack speed. If he does not attack or cast abilities, he also gains  bonus movement speed and  camouflage.',
        descriptionHTML:
          'While inside the mist, <b>Viego</b> gains <span style="white-space:nowrap"><a href="/wiki/Attack_speed" title="Attack speed"><img alt="Attack speed icon.png" src="/wiki/images/Attack_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color:orangered; white-space:normal"><b>bonus</b> attack speed</span></span>. If he does not attack or cast abilities, he also gains <span style="white-space:nowrap"><a href="/wiki/Movement_speed" title="Movement speed"><img alt="Movement speed icon.png" src="/wiki/images/Movement_speed_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;<span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Camouflage"><a href="/wiki/Stealth#Camouflage" title="Stealth#Camouflage"><img alt="Ambush 2.png" src="/wiki/images/Twitch_Ambush_2.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Stealth#Camouflage" title="Stealth">camouflage</a></span>.',
        descriptionRatios: [],
        leveling: [
          {
            name: 'Bonus Attack Speed:',
            values: '30 / 35 / 40 / 45 / 50%',
            valuesHTML: '30 / 35 / 40 / 45 / 50%',
          },
          {
            name: 'Bonus Movement Speed:',
            values: '25 / 27.5 / 30 / 32.5 / 35% (+ 4% per 100 AP)',
            valuesHTML:
              '25 / 27.<small>5</small> / 30 / 32.<small>5</small> / 35% <span style="color: #7A6DFF; white-space:normal">(+&nbsp;4% per 100 AP)</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Unique',
            name: 'Bonus Attack Speed:',
            raw: '30 / 35 / 40 / 45 / 50%',
            values: [30, 35, 40, 45, 50],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '30 / 35 / 40 / 45 / 50%',
          },
          {
            effectType: 'Damage',
            name: 'Bonus Movement Speed:',
            raw: '25 / 27.5 / 30 / 32.5 / 35% (+ 4% per 100 AP)',
            damagetype: 'None',
            values: [25, 27.5, 30, 32.5, 35],
            valuesIsPercent: true,
            user: 'none',
            units: '',
            unitsText: '',
            pre: '25 / 27.5 / 30 / 32.5 / 35%',
            children: [
              {
                values: 4,
                valuesIsPercent: true,
                units: 'total_ap',
                unitsText: 'per 100 AP',
                pre: '+ 4% per 100 AP',
              },
            ],
          },
        ],
      },
      {
        description:
          'Declaring a basic attack or casting an ability will break the camouflage and remove the bonus movement speed, preventing Viego from gaining them again for 1 second, reduced to 0.6 seconds if he recasted  Spectral Maw and increased to 2 seconds if he attacked a  monster. This duration refreshes on subsequent attacks and ability casts.',
        descriptionHTML:
          'Declaring a basic attack or casting an ability will break the camouflage and remove the <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span>, preventing <b>Viego</b> from gaining them again for 1 second, reduced to 0.<small>6</small> seconds if he recasted <i><span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viego" data-ability="Spectral Maw" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viego/LoL#Spectral_Maw" title="Spectral Maw"><img alt="Spectral Maw" src="/wiki/images/Viego_Spectral_Maw.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viego/LoL#Spectral_Maw" title="Viego/LoL">Spectral Maw</a></span></span></i> and increased to 2 seconds if he attacked a <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Monster"><a href="/wiki/Monster" title="Monster"><img alt="Monster icon.png" src="/wiki/images/Monster_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Monster" title="Monster">monster</a></span>. This duration refreshes on subsequent attacks and ability casts.',
        descriptionRatios: [
          {
            effectType: 'Gain',
            name: 'Line 1:',
            raw: 'Declaring a basic attack or casting an ability will break the camouflage and remove the bonus movement speed, preventing Viego from gaining them again for 1 second, reduced to 0.6 seconds if he recasted  Spectral Maw and increased to 2 seconds if he attacked a  monster',
            increasedStat: 'bonus_ad',
            values: 1,
            units: '',
            unitsText:
              'a basic attack or casting an ability will break the camouflage and remove the bonus movement speed, preventing Viego from gaining them again for 1 second, reduced to 0.6 seconds if he recasted  Spectral Maw and increased to 2 seconds if he attacked a  monster',
            pre: 'Declaring a basic attack or casting an ability will break the camouflage and remove the bonus movement speed, preventing Viego from gaining them again for 1 second, reduced to 0.6 seconds if he recasted  Spectral Maw and increased to 2 seconds if he attacked a  monster',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          "Harrowed Path can be cast during any of Viego's abilities. He cannot gain the camouflage nor bonus movement speed from Harrowed Path for 0.75 seconds after starting the channel of  Spectral Maw, recasting ends this duration prematurely.",
        descriptionHTML:
          '<i>Harrowed Path can be cast during any of <b>Viego\'s</b> abilities. He cannot gain the camouflage nor <span style="color: #F5EE99; white-space:normal"><b>bonus</b> movement speed</span> from Harrowed Path for 0.<small>75</small> seconds after starting the channel of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viego" data-ability="Spectral Maw" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viego/LoL#Spectral_Maw" title="Spectral Maw"><img alt="Spectral Maw" src="/wiki/images/Viego_Spectral_Maw.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viego/LoL#Spectral_Maw" title="Viego/LoL">Spectral Maw</a></span></span>, recasting ends this duration prematurely.</i>',
        descriptionRatios: [],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Direction',
    affects: 'Self',
    projectile: 'false',
    notes:
      '* The bonus movement speed and camouflage are granted by the same buff.\n<ul><li><b>Viego</b> will enter camouflage even while <span class="inline-image label-after spell-icon" style="display:inline;white-space:pre;" data-param="" data-spell="Recall" data-game="lol"><span class="border icon-20" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Recall" title="Recalling"><img alt="Recalling" src="/wiki/images/Recall.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Recall" title="Recall">Recalling</a></span></span>.</li>\n<li><b>Viego</b> can cast <i>Harrowed Path</i> during the cast time of any ability or spell.</li>\n<li>Ranking up <i>Harrowed Path</i> while the effect is already active will still immediately improve the bonuses it grants.</li>\n<li><i>Harrowed Path</i> can interact with <a href="/wiki/Terrain#Player-Generated" title="Terrain">player-generated terrain</a>.</li>\n<li><b>Viego</b> can benefit from an enemy\'s <i>Harrowed Path</i>.\n<ul><li><span style="color:red; font-family:math; font-weight:bold; font-size:1em;" title="Pending for test"><span class="fas fa-vial"></span> PENDING FOR TEST:</span>: Enemy\'s <i>Harrowed Path</i> grant Viego his ability\'s bonus or the enemy\'s.</li></ul></li></ul>',
  },
  Heartbreaker: {
    name: 'Heartbreaker',
    display_name: 'Heartbreaker',
    champion: 'Viego',
    skill: 'R',
    maxrank: 3,
    image: {
      full: 'ViegoR.png',
      sprite: 'spell14.png',
      group: 'spell',
      x: 48,
      y: 144,
      w: 48,
      h: 48,
    },
    target_range: '500',
    effect_radius:
      '<span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range" title="Range"><img alt="Range center.png" src="/wiki/images/Range_center.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a></span> 300',
    cast_time: '0.<small>5</small>',
    cooldown: '120 / 110 / 100 / 90 / 80',
    blurb: [
      '<span class="template_sbc"><b>Active:</b></span> <span class="inline-image label-after champion-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viego" data-skin="Original" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viego/LoL" title="Viego"><img alt="Viego" src="/wiki/images/Viego_OriginalSquare.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viego/LoL" title="Viego/LoL">Viego</a></span></span> <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blinks"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> with <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span> to the target location and attacks the <span style="color:inherit; white-space:normal">most wounded</span> enemy champion nearby, which briefly <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slows"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slows</a></span> them, applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects, and deals <span style="color: #FF8C34; white-space:normal"><b>bonus</b> physical damage</span> by a portion of <span style="color: #1F995C; white-space:normal">their <b>missing</b> health</span>.',
      'Other nearby enemies are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked back</a></span> and dealt <span style="color: #FF8C34; white-space:normal">physical damage</span> based on his <span style="color: #E56013; white-space:normal"><span style="white-space:nowrap"><a href="/wiki/Critical_strike" title="Critical strike"><img alt="Critical strike chance icon.png" src="/wiki/images/Critical_strike_chance_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;critical strike chance</span></span>.',
      '<span class="template_sbc"><b><span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> displacement immunity</span>:</b></span> The blink cannot be deterred by <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Crowd control"><a href="/wiki/Crowd_control" title="Crowd control"><img alt="Stun icon.png" src="/wiki/images/Stun_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control" title="Crowd control">crowd control</a></span>.',
    ],
    description: [
      {
        icon: '/wiki/images/Heartbreaker.png',
        description:
          'Active: Viego gains  displacement immunity over the cast time, then  blinks to the target location. Upon arrival, he strikes the most wounded enemy champion nearby, dealing physical damage,  slowing them by 99% for 0.25 seconds, and applying  on-hit effects at 100% effectiveness. Other nearby enemies are  knocked back up to 400-units away based on proximity, though not through terrain.',
        descriptionHTML:
          '<span class="template_sbc"><b>Active:</b></span> <b>Viego</b> gains <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Displacement immunity"><a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control#Displacement Immunity"><img alt="Unstoppable icon.png" src="/wiki/images/Unstoppable_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Crowd_control#Displacement_Immunity" title="Crowd control">displacement immunity</a></span> over the cast time, then <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blink"><a href="/wiki/Blink" title="Blink"><img alt="Flash.png" src="/wiki/images/Flash.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blink" title="Blink">blinks</a></span> to the target location. Upon arrival, he strikes the <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Lowest health percent">most wounded</span> enemy champion <span class="basic-tooltip" style="border-bottom:1px dotted gray;cursor:help;" title="Alternatively the closest one if all targets have the same percent health">nearby</span>, dealing <span style="color: #FF8C34; white-space:normal">physical damage</span>, <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Slow"><a href="/wiki/Slow" title="Slow"><img alt="Slow icon.png" src="/wiki/images/Slow_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Slow" class="mw-redirect" title="Slow">slowing</a></span> them by 99% for 0.<small>25</small> seconds, and applying <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="On-hit"><a href="/wiki/Attack_effects#On_Hitting" title="Attack effects#On Hitting"><img alt="On-hit icon.png" src="/wiki/images/On-hit_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#On_Hitting" title="Attack effects">on-hit</a></span> effects at 100% effectiveness. Other nearby enemies are <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Airborne"><a href="/wiki/Airborne" title="Airborne"><img alt="Airborne icon.png" src="/wiki/images/Airborne_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Airborne" class="mw-redirect" title="Airborne">knocked back</a></span> up to 400-units away based on proximity, though not through terrain.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 2:',
            raw: 'Upon arrival, he strikes the most wounded enemy champion nearby, dealing physical damage,  slowing them by 99% for 0.25 seconds, and applying  on-hit effects at 100% effectiveness',
            damagetype: 'Physical',
            values: 9,
            valuesIsPercent: true,
            units: 'total_ap',
            unitsText:
              'for 0.25 seconds, and applying  on-hit effects at 100arrival, he strikes the most wounded enemy champion nearby, dealing physical damage,  slowing them by 99',
            pre: 'Upon arrival, he strikes the most wounded enemy champion nearby, dealing physical damage,  slowing them by 99% for 0.25 seconds, and applying  on-hit effects at 100% effectiveness',
          },
          {
            effectType: 'Unique',
            name: 'Line 3:',
            raw: 'Other nearby enemies are  knocked back up to 400-units away based on proximity, though not through terrain.',
            values: 4,
            user: 'none',
            units: '',
            unitsText:
              'nearby enemies are  knocked back up to 400-units away based on proximity, though not through terrain.',
            pre: 'Other nearby enemies are  knocked back up to 400-units away based on proximity, though not through terrain.',
          },
        ],
        leveling: [
          {
            name: 'Physical Damage:',
            values:
              "12 / 14 / 16 / 18 / 20% (+ 3% per 100 bonus AD) of target's missing health",
            valuesHTML:
              '<span style="color: #1F995C; white-space:normal">12 / 14 / 16 / 18 / 20% <span style="color:orange; white-space:normal">(+&nbsp;3% per 100 <b>bonus</b> AD)</span> of target\'s <b>missing</b> health</span>',
          },
        ],
        levelingRatios: [
          {
            effectType: 'Heal',
            name: 'Physical Damage:',
            raw: "12 / 14 / 16 / 18 / 20% (+ 3% per 100 bonus AD) of target's missing health",
            healType: 'PhysicalVamp',
            values: [12, 14, 16, 18, 20],
            valuesIsPercent: true,
            user: 'target',
            units: 'missing_hp',
            unitsText: "of target's missing health",
            pre: '12 / 14 / 16 / 18 / 20%',
            post: "of target's missing health",
            children: [
              {
                values: 3,
                valuesIsPercent: true,
                units: 'bonus_ad',
                unitsText: 'per 100 bonus AD',
                pre: '+ 3% per 100 bonus AD',
              },
            ],
          },
        ],
      },
      {
        description:
          'All targets hit are dealt 120% AD physical damage, increased by 0% − 100% (based on critical strike chance).',
        descriptionHTML:
          'All targets hit are dealt <span style="color:orange; white-space:normal">120% AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span>, increased by <span style="color: #E56013; white-space:normal"><span class="pp-tooltip" style="position:relative; border-bottom:1px dotted; cursor:help;" data-top_label="critical strike chance" data-displayformula="1 × critical strike chance" data-bot_values="0;10;20;30;40;50;60;70;80;90;100" data-top_values="0;10;20;30;40;50;60;70;80;90;100" data-bot_key="%" data-top_key="%">0% − 100% (based on critical strike chance)</span></span>.',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'All targets hit are dealt 120% AD physical damage, increased by 0% − 100% (based on critical strike chance).',
            damagetype: 'Physical',
            values: 1,
            valuesIsPercent: true,
            basedOn: 'critical strike chance',
            user: 'none',
            units: '',
            unitsText: '.',
            pre: 'All targets hit are dealt 120% AD physical damage, increased by 0% − 100%',
            post: '.',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
      {
        description:
          'If a  Possession is discarded, Heartbreaker will be placed on a  1.5-second cooldown if it is not already on cooldown. Heartbreaker will cast at max range if cast beyond that.',
        descriptionHTML:
          '<i>If a <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viego" data-ability="Sovereign\'s Domination" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viego/LoL#Sovereign\'s_Domination" title="Possession"><img alt="Possession" src="/wiki/images/Viego_Sovereign%27s_Domination.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viego/LoL#Sovereign\'s_Domination" title="Viego/LoL">Possession</a></span></span> is discarded, Heartbreaker will be placed on a <span style="white-space:nowrap"><a href="/wiki/Cooldown" title="Cooldown"><img alt="Cooldown icon.png" src="/wiki/images/Cooldown_icon.png" decoding="async" loading="lazy" width="15" height="15" class="lazyload"></a>&nbsp;1.<small>5</small>-second</span> cooldown if it is not already on cooldown. Heartbreaker will cast at max range if cast beyond that.</i>',
        descriptionRatios: [
          {
            effectType: 'Damage',
            name: 'Line 1:',
            raw: 'If a  Possession is discarded, Heartbreaker will be placed on a  1.5-second cooldown if it is not already on cooldown',
            damagetype: 'None',
            values: 1,
            units: 'total_ad',
            unitsText:
              'a  Possession is discarded, Heartbreaker will be placed on a  1.5-second cooldown if it is not already on cooldown',
            pre: 'If a  Possession is discarded, Heartbreaker will be placed on a  1.5-second cooldown if it is not already on cooldown',
          },
        ],
        leveling: [],
        levelingRatios: [],
      },
    ],
    targeting: 'Location',
    affects: 'Self, Enemies',
    damagetype: 'Physical',
    spelleffects: 'special',
    spellshield: true,
    callforhelp: 'true',
    notes:
      '* <i>Heartbreaker</i> will cast at the edge of its range if the target location is further beyond.\n<ul><li><i>Heartbreaker</i> will cast at maximum range from the end of <span class="inline-image label-after ability-icon" style="display:inline;white-space:pre;" data-param="" data-champion="Viego" data-ability="Spectral Maw" data-game="lol"><span class="border" style="display:inline-block;position:relative;" data-width="20"><a href="/wiki/Viego/LoL#Spectral_Maw" title="Spectral Maw\'s"><img alt="Spectral Maw\'s" src="/wiki/images/Viego_Spectral_Maw.png" decoding="async" loading="lazy" width="20" height="20" class="thumbborder lazyload"></a></span> <span style="white-space:normal;"><a href="/wiki/Viego/LoL#Spectral_Maw" title="Viego/LoL">Spectral Maw\'s</a></span></span> dash if it is cast during the dash.</li>\n<li>The knockback speed is 1000 units per second. The airborne is removed as soon as the displacement ends.\n<ul><li>The maximum airborne duration is therefore 0.<small>4</small> seconds. The minimum is 0.<small>1</small> seconds.</li></ul></li>\n<li>Applies <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Spell damage"><a href="/wiki/Damage" title="Damage"><img alt="Disintegrate.png" src="/wiki/images/Annie_Disintegrate.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">spell damage</a></span> to the struck champion and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Area damage"><a href="/wiki/Damage" title="Damage"><img alt="Death Lotus.png" src="/wiki/images/Katarina_Death_Lotus.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Damage" title="Damage">area damage</a></span> to all other enemies.</li>\n<li><b>Viego</b> will enter a 0.<small>25</small>-second <a href="/wiki/Cast_time" class="mw-redirect" title="Cast time">cast time</a> if he strikes an enemy champion.</li>\n<li><i>Heartbreaker\'s</i> strike to the champion can be <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Dodge"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Jax Counter Strike old.png" src="/wiki/images/Jax_Counter_Strike_old.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">dodged</a></span> and <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Block"><a href="/wiki/Attack_effects#Parrying" title="Attack effects#Parrying"><img alt="Spirit\'s Refuge.png" src="/wiki/images/Shen_Spirit%27s_Refuge.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Attack_effects#Parrying" title="Attack effects">blocked</a></span>, but not <span class="glossary" style="white-space:pre; position:relative;" data-game="lol" data-tip="Blind"><a href="/wiki/Blind" title="Blind"><img alt="Blind icon.png" src="/wiki/images/Blind_icon.png" decoding="async" loading="lazy" width="20" height="20" class="lazyload"></a> <a href="/wiki/Blind" class="mw-redirect" title="Blind">missed</a></span>.</li>\n<li><b>Viego</b> will be ordered to <a href="/wiki/Basic_attack" title="Basic attack">basic attack</a> the primary target afterwards.</li></ul>',
    flavorsound:
      'https://leagueoflegends.fandom.com/wiki/File:Viego_Original_R_2.ogg   "Isolde!"',
  },
} satisfies { [skillName in string]: SkillData };
